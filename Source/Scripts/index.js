(() => {
    "use strict";

    const $ = (id) => document.getElementById(id);
    const homeView = $("homeView");
    const testView = $("testView");
    const doneView = $("doneView");
    const statsEl = $("stats");
    const startBtn = $("startBtn");
    const backBtn = $("backBtn");
    const nextBtn = $("nextBtn");
    const retryBtn = $("retryBtn");
    const qCategory = $("qCategory");
    const qText = $("qText");
    const qCounter = $("qCounter");
    const qMeta = $("qMeta");
    const optionsArea = $("optionsArea");
    const totalScoreEl = $("totalScore");
    const categoryScoresEl = $("categoryScores");
    const reviewArea = $("reviewArea");
    const doneBackBtn = $("doneBack");
    const doneNextBtn = $("doneNext");
    const doneRetryBtn = $("doneRetry");
    const drawer = $("drawer");
    const settingsBtn = $("settingsBtn");
    const closeDrawerBtn = $("closeDrawerBtn");
    const themeBtn = $("themeBtn");
    const themeLabel = $("themeLabel");
    const partialToggle = $("partialToggle");
    const imagesToggle = $("imagesToggle");
    const n = Array.isArray(QUESTIONS) ? QUESTIONS.length : 0;
    const categories = [...new Set(QUESTIONS.map((q) => q.c))];

    let idx = 0;
    let answers = new Array(n).fill(null);
    let reviewIdx = 0;

    const prefs = {
        theme: "light",
        partialCredit: false,
        optionImages: true
    };

    function clamp(num, a, b) { return Math.max(a, Math.min(b, num)); }
    function pad4(num) { return String(num).padStart(4, "0"); }

    function loadPrefs() {
        try {
            const raw = localStorage.getItem("the1776:prefs");
            if (!raw) return;
            const p = JSON.parse(raw);
            if (p && typeof p === "object") {
                if (p.theme === "light" || p.theme === "dark") prefs.theme = p.theme;
                if (typeof p.partialCredit === "boolean") prefs.partialCredit = p.partialCredit;
                if (typeof p.optionImages === "boolean") prefs.optionImages = p.optionImages;
            }
        } catch (_) { }
    }

    function savePrefs() {
        try {
            localStorage.setItem("the1776:prefs", JSON.stringify(prefs));
        } catch (_) { }
    }

    function applyTheme() {
        document.documentElement.dataset.theme = prefs.theme;
        const isDark = prefs.theme === "dark";
        themeLabel.textContent = isDark ? "Light" : "Dark";
        themeBtn.querySelector("i").className = isDark ? "ph ph-sun" : "ph ph-moon-stars";
    }

    function show(view) {
        homeView.classList.add("hidden");
        testView.classList.add("hidden");
        doneView.classList.add("hidden");
        view.classList.remove("hidden");
    }

    function openDrawer(open) {
        drawer.classList.toggle("hidden", !open);
    }

    function estMinutes() {
        return Math.max(1, Math.round((n * 12) / 60));
    }

    function renderHome() {
        const statItems = [
            { label: "Questions", value: String(n) },
            { label: "Categories", value: String(categories.length) },
            { label: "Est. time", value: `${estMinutes()} min` },
            { label: "Scoring", value: prefs.partialCredit ? "Partial credit" : "All-or-nothing" }
        ];

        statsEl.innerHTML = statItems.map(s => (
            `<div class="stat"><div>${s.value}</div><span>${s.label}</span></div>`
        )).join("");
    }

    function catCountsFor(questionIndex) {
        const cat = QUESTIONS[questionIndex].c;
        let catTotal = 0, catPos = 0;
        for (let i = 0; i < n; i++) {
            if (QUESTIONS[i].c !== cat) continue;
            catTotal++;
            if (i <= questionIndex) catPos++;
        }
        return { cat, catPos, catTotal, catIndex: categories.indexOf(cat) + 1, catCount: categories.length };
    }

    function optionLeftHTML(opt) {
        if (prefs.optionImages && opt.i) {
            return `<div class="opt-left"><img src="${opt.i}" alt="${escapeHTML(opt.t)}"></div>`;
        }
        const first = (opt.t && opt.t.trim()) ? opt.t.trim()[0].toUpperCase() : "?";
        return `<div class="opt-left">${escapeHTML(first)}</div>`;
    }

    function escapeHTML(str) {
        return String(str)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function renderQuestion() {
        const q = QUESTIONS[idx];
        const cc = catCountsFor(idx);
        qCategory.textContent = q.c;
        qText.textContent = q.q;
        qCounter.textContent = `${idx + 1} / ${n}`;
        qMeta.textContent = `Category ${cc.catIndex}/${cc.catCount} • In-category ${cc.catPos}/${cc.catTotal}`;
        optionsArea.innerHTML = q.o.map((opt, oi) => {
            const selected = answers[idx] === oi ? " selected" : "";
            return `
                <div class="option${selected}" role="button" tabindex="0" data-opt="${oi}">
                    ${optionLeftHTML(opt)}
                    <div class="opt-text">${escapeHTML(opt.t)}</div>
                </div>
            `;
        }).join("");

        backBtn.disabled = idx === 0;
        nextBtn.disabled = answers[idx] === null;
        nextBtn.textContent = (idx === n - 1) ? "Submit" : "Next";
    }

    function selectOption(oi) {
        answers[idx] = oi;
        const kids = optionsArea.children;
        for (let i = 0; i < kids.length; i++) {
            kids[i].classList.toggle("selected", i === oi);
        }
        nextBtn.disabled = false;
    }

    function scoreFor(qIndex) {
        const sel = answers[qIndex];
        if (sel === null) return 0;
        const w = QUESTIONS[qIndex].o[sel].w;
        if (prefs.partialCredit) return w;
        return w === 1 ? 1 : 0;
    }

    function computeTotalScore() {
        let sum = 0;
        for (let i = 0; i < n; i++) sum += scoreFor(i);
        const avg = n ? (sum / n) : 0;
        return Math.round(avg * 1000);
    }

    function renderCategoryScores() {
        categoryScoresEl.innerHTML = categories.map((cat) => {
            const idxs = [];
            for (let i = 0; i < n; i++) if (QUESTIONS[i].c === cat) idxs.push(i);
            let sum = 0;
            let full = 0;
            for (const qi of idxs) {
                const sel = answers[qi];
                const w = sel === null ? 0 : QUESTIONS[qi].o[sel].w;
                sum += (prefs.partialCredit ? w : (w === 1 ? 1 : 0));
                if (w === 1) full++;
            }
            const percent = idxs.length ? Math.round((sum / idxs.length) * 100) : 0;
            return `
                <div class="cat-card">
                    <div><b>${escapeHTML(cat)}</b> <span class="badge">${percent}%</span></div>
                    <div class="badge">${full}/${idxs.length}</div>
                </div>
            `;
        }).join("");
    }

    function renderReview() {
        reviewIdx = clamp(reviewIdx, 0, n - 1);
        const q = QUESTIONS[reviewIdx];
        const sel = answers[reviewIdx];

        const optionsHTML = q.o.map((opt, oi) => {
            const isCorrect = opt.w === 1;
            const isSelected = sel === oi;
            let cls = "";
            if (isCorrect) cls = " correct";
            if (isSelected && !isCorrect) cls = " wrong";
            if (isSelected && isCorrect) cls = " correct";
            const pts = Math.round((prefs.partialCredit ? opt.w : (opt.w === 1 ? 1 : 0)) * 1000);

            return `
                <div class="option${cls}">
                    ${optionLeftHTML(opt)}
                    <div class="opt-text">${escapeHTML(opt.t)}</div>
                    <div class="opt-right">${pts} pts</div>
                </div>
      `;
        }).join("");

        reviewArea.innerHTML = `
            <div class="row">
                <div class="kicker">${escapeHTML(q.c)}</div>
                <div class="spacer"></div>
                <div class="counter">${reviewIdx + 1} / ${n}</div>
            </div>
            <div class="question">${escapeHTML(q.q)}</div>
            <div class="break"></div>
            ${optionsHTML}
            <div class="explain">${escapeHTML(q.e)}</div>
        `;
    }

    function submit() {
        for (let i = 0; i < n; i++) {
            if (answers[i] === null) {
                alert("Please answer all questions before submitting.");
                return;
            }
        }

        totalScoreEl.textContent = pad4(computeTotalScore());
        renderCategoryScores();
        reviewIdx = 0;
        renderReview();
        show(doneView);
    }

    function reset() {
        idx = 0;
        reviewIdx = 0;
        answers = new Array(n).fill(null);
        renderHome();
        show(homeView);
    }

    function bindEvents() {
        settingsBtn.addEventListener("click", () => openDrawer(true));
        closeDrawerBtn.addEventListener("click", () => openDrawer(false));

        themeBtn.addEventListener("click", () => {
            prefs.theme = (prefs.theme === "dark") ? "light" : "dark";
            applyTheme();
            savePrefs();
            renderHome();
        });

        partialToggle.addEventListener("change", () => {
            prefs.partialCredit = partialToggle.checked;
            savePrefs();
            renderHome();
        });

        imagesToggle.addEventListener("change", () => {
            prefs.optionImages = imagesToggle.checked;
            savePrefs();
            if (!testView.classList.contains("hidden")) renderQuestion();
            if (!doneView.classList.contains("hidden")) renderReview();
            renderHome();
        });

        startBtn.addEventListener("click", () => {
            idx = 0;
            show(testView);
            renderQuestion();
        });

        retryBtn.addEventListener("click", reset);
        doneRetryBtn.addEventListener("click", reset);

        backBtn.addEventListener("click", () => {
            if (idx === 0) return;
            idx--;
            renderQuestion();
        });

        nextBtn.addEventListener("click", () => {
            if (idx === n - 1) return submit();
            idx++;
            renderQuestion();
        });

        optionsArea.addEventListener("click", (e) => {
            const optEl = e.target.closest(".option");
            if (!optEl) return;
            const oi = Number(optEl.dataset.opt);
            if (Number.isFinite(oi)) selectOption(oi);
        });

        optionsArea.addEventListener("keydown", (e) => {
            const optEl = e.target.closest(".option");
            if (!optEl) return;
            if (e.key !== "Enter" && e.key !== " ") return;
            e.preventDefault();
            const oi = Number(optEl.dataset.opt);
            if (Number.isFinite(oi)) selectOption(oi);
        });

        doneNextBtn.addEventListener("click", () => {
            reviewIdx = (reviewIdx + 1) % n;
            renderReview();
        });

        doneBackBtn.addEventListener("click", () => {
            reviewIdx = (reviewIdx - 1 + n) % n;
            renderReview();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") openDrawer(false);
        });
    }

    function init() {
        loadPrefs();
        partialToggle.checked = prefs.partialCredit;
        imagesToggle.checked = prefs.optionImages;
        applyTheme();
        bindEvents();
        renderHome();
        show(homeView);
    }

    init();
})();