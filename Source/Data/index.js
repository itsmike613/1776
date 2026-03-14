const QUESTIONS = [
    {
        "q": "Who was the first President of the United States?",
        "c": "Founding Fathers",
        "e": "George Washington became the first U.S. president in 1789.",
        "o": [
            { "t": "John Adams", "i": "https://api.nga.gov/iiif/6689f0bd-101a-4310-86cd-022ef4b9da1e/full/!800,800/0/default.jpg", "w": 0 },
            { "t": "George Washington", "i": "https://api.nga.gov/iiif/4f95c866-94c7-4b84-b29f-6873321ef55f/full/!800,800/0/default.jpg", "w": 1 },
            { "t": "Thomas Jefferson", "i": "https://api.nga.gov/iiif/3a14fb6b-82a0-4e1b-beb3-7e6ac89ef686/full/!800,800/0/default.jpg", "w": 0 },
            { "t": "James Madison", "i": "https://api.nga.gov/iiif/ab7f71b8-00f6-408f-847a-1ae2986be106/full/!800,800/0/default.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which Founding Father is considered the main author of the Declaration of Independence?",
        "c": "Founding Fathers",
        "e": "Thomas Jefferson wrote the main draft of the Declaration of Independence.",
        "o": [
            { "t": "Benjamin Franklin", "i": "https://api.nga.gov/iiif/f1103fbe-c406-4410-8361-ea54509b5b8b/full/!800,800/0/default.jpg", "w": 0 },
            { "t": "Thomas Jefferson", "i": "https://api.nga.gov/iiif/3a14fb6b-82a0-4e1b-beb3-7e6ac89ef686/full/!800,800/0/default.jpg", "w": 1 },
            { "t": "Alexander Hamilton", "i": "https://api.nga.gov/iiif/71ca4cb0-3149-4152-abca-6485ee178cb2/full/!800,800/0/default.jpg", "w": 0 },
            { "t": "John Adams", "i": "https://api.nga.gov/iiif/6689f0bd-101a-4310-86cd-022ef4b9da1e/full/!800,800/0/default.jpg", "w": 0.5 }
        ]
    },
    {
        "q": "Which Founding Father is known as the 'Father of the Constitution'?",
        "c": "Founding Fathers",
        "e": "James Madison earned this title for his major role in planning and writing the Constitution.",
        "o": [
            { "t": "James Madison", "i": "https://api.nga.gov/iiif/ab7f71b8-00f6-408f-847a-1ae2986be106/full/!800,800/0/default.jpg", "w": 1 },
            { "t": "George Washington", "i": "https://api.nga.gov/iiif/4f95c866-94c7-4b84-b29f-6873321ef55f/full/!800,800/0/default.jpg", "w": 0.3 },
            { "t": "Thomas Jefferson", "i": "https://api.nga.gov/iiif/3a14fb6b-82a0-4e1b-beb3-7e6ac89ef686/full/!800,800/0/default.jpg", "w": 0 },
            { "t": "Benjamin Franklin", "i": "https://api.nga.gov/iiif/f1103fbe-c406-4410-8361-ea54509b5b8b/full/!800,800/0/default.jpg", "w": 0 }
        ]
    },
    {
        "q": "Who became the first Vice President of the United States?",
        "c": "Founding Fathers",
        "e": "John Adams served as the first vice president under George Washington.",
        "o": [
            { "t": "John Adams", "i": "https://api.nga.gov/iiif/6689f0bd-101a-4310-86cd-022ef4b9da1e/full/!800,800/0/default.jpg", "w": 1 },
            { "t": "Thomas Jefferson", "i": "https://api.nga.gov/iiif/3a14fb6b-82a0-4e1b-beb3-7e6ac89ef686/full/!800,800/0/default.jpg", "w": 0.2 },
            { "t": "James Madison", "i": "https://api.nga.gov/iiif/ab7f71b8-00f6-408f-847a-1ae2986be106/full/!800,800/0/default.jpg", "w": 0 },
            { "t": "Alexander Hamilton", "i": "https://api.nga.gov/iiif/71ca4cb0-3149-4152-abca-6485ee178cb2/full/!800,800/0/default.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which Founding Father helped secure French support for the American cause during the Revolution?",
        "c": "Founding Fathers",
        "e": "Benjamin Franklin played a key role in winning French support and helping negotiate peace with Britain.",
        "o": [
            { "t": "Benjamin Franklin", "i": "https://api.nga.gov/iiif/f1103fbe-c406-4410-8361-ea54509b5b8b/full/!800,800/0/default.jpg", "w": 1 },
            { "t": "George Washington", "i": "https://api.nga.gov/iiif/4f95c866-94c7-4b84-b29f-6873321ef55f/full/!800,800/0/default.jpg", "w": 0.2 },
            { "t": "Patrick Henry", "i": "https://encyclopediavirginia.org/wp-content/uploads/2020/11/117hpr_bbf00100ef41460-scaled.jpg", "w": 0 },
            { "t": "Samuel Adams", "i": "https://upload.wikimedia.org/wikipedia/commons/0/00/Samuel_Adams_by_John_Singleton_Copley.jpg", "w": 0 }
        ]
    },
    {
        "q": "In what year was the Declaration of Independence adopted?",
        "c": "Founding Documents",
        "e": "The Second Continental Congress adopted the Declaration of Independence on July 4, 1776.",
        "o": [
            { "t": "1775", "i": "https://placehold.co/1?text=1775", "w": 0.2 },
            { "t": "1776", "i": "https://placehold.co/1?text=1776", "w": 1 },
            { "t": "1781", "i": "https://placehold.co/1?text=1781", "w": 0.1 },
            { "t": "1789", "i": "https://placehold.co/1?text=1789", "w": 0 }
        ]
    },
    {
        "q": "Which document declared the American colonies independent from Great Britain?",
        "c": "Founding Documents",
        "e": "The Declaration of Independence announced that the colonies were free and independent states.",
        "o": [
            { "t": "Articles of Confederation", "i": "https://www.archives.gov/files/milestone-documents/images/doc-003-big.jpg", "w": 0.1 },
            { "t": "Declaration of Independence", "i": "https://www.archives.gov/files/founding-docs/declaration-of-independence-front-630.jpg", "w": 1 },
            { "t": "U.S. Constitution", "i": "https://www.archives.gov/files/founding-docs/constitution-page1.jpg", "w": 0.2 },
            { "t": "Bill of Rights", "i": "https://www.archives.gov/files/founding-docs/bill-of-rights.jpg", "w": 0.1 }
        ]
    },
    {
        "q": "Which document served as the first constitution of the United States?",
        "c": "Founding Documents",
        "e": "The Articles of Confederation were the nation’s first governing framework before the Constitution took effect.",
        "o": [
            { "t": "Declaration of Independence", "i": "https://www.archives.gov/files/founding-docs/declaration-of-independence-front-630.jpg", "w": 0.1 },
            { "t": "Articles of Confederation", "i": "https://www.archives.gov/files/milestone-documents/images/doc-003-big.jpg", "w": 1 },
            { "t": "U.S. Constitution", "i": "https://www.archives.gov/files/founding-docs/constitution-page1.jpg", "w": 0.2 },
            { "t": "Federalist Papers", "i": "https://archive.org/services/img/federalistpapers1961hami/full/pct:200/0/default.jpg", "w": 0 }
        ]
    },
    {
        "q": "What is the supreme law of the land in the United States?",
        "c": "Founding Documents",
        "e": "The U.S. Constitution is the highest law of the land and establishes the structure of the federal government.",
        "o": [
            { "t": "Declaration of Independence", "i": "https://www.archives.gov/files/founding-docs/declaration-of-independence-front-630.jpg", "w": 0.2 },
            { "t": "Articles of Confederation", "i": "https://www.archives.gov/files/milestone-documents/images/doc-003-big.jpg", "w": 0.1 },
            { "t": "U.S. Constitution", "i": "https://www.archives.gov/files/founding-docs/constitution-page1.jpg", "w": 1 },
            { "t": "Federalist Papers", "i": "https://archive.org/services/img/federalistpapers1961hami/full/pct:200/0/default.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which document was written to persuade people to ratify the U.S. Constitution?",
        "c": "Founding Documents",
        "e": "The Federalist Papers were a series of essays written in support of ratifying the Constitution.",
        "o": [
            { "t": "Bill of Rights", "i": "https://www.archives.gov/files/founding-docs/bill-of-rights.jpg", "w": 0.1 },
            { "t": "Federalist Papers", "i": "https://archive.org/services/img/federalistpapers1961hami/full/pct:200/0/default.jpg", "w": 1 },
            { "t": "Articles of Confederation", "i": "https://www.archives.gov/files/milestone-documents/images/doc-003-big.jpg", "w": 0 },
            { "t": "Declaration of Independence", "i": "https://www.archives.gov/files/founding-docs/declaration-of-independence-front-630.jpg", "w": 0.1 }
        ]
    },
    {
        "q": "How many amendments are in the Bill of Rights?",
        "c": "Founding Documents",
        "e": "The Bill of Rights consists of the first 10 amendments to the U.S. Constitution.",
        "o": [
            { "t": "8", "i": "https://placehold.co/1?text=8", "w": 0 },
            { "t": "10", "i": "https://placehold.co/1?text=10", "w": 1 },
            { "t": "12", "i": "https://placehold.co/1?text=12", "w": 0.2 },
            { "t": "27", "i": "https://placehold.co/1?text=27", "w": 0.2 }
        ]
    },
    {
        "q": "In what year was the Bill of Rights ratified?",
        "c": "Founding Documents",
        "e": "The Bill of Rights was ratified in 1791, when 10 proposed amendments became part of the Constitution.",
        "o": [
            { "t": "1787", "i": "https://placehold.co/1?text=1787", "w": 0.2 },
            { "t": "1789", "i": "https://placehold.co/1?text=1789", "w": 0.3 },
            { "t": "1791", "i": "https://placehold.co/1?text=1791", "w": 1 },
            { "t": "1801", "i": "https://placehold.co/1?text=1801", "w": 0 }
        ]
    },
    {
        "q": "What does the First Amendment protect?",
        "c": "Founding Documents",
        "e": "The First Amendment protects religion, speech, press, assembly, and the right to petition the government.",
        "o": [
            { "t": "Freedom of speech, religion, press, assembly, and petition", "i": "https://miro.medium.com/1*NEdeb0slm1ywJB-3HG4xRw.jpeg", "w": 1 },
            { "t": "Freedom of speech only", "i": "https://t3.ftcdn.net/jpg/02/32/83/12/360_F_232831262_hLNzf2nVpHSaCRETMhDuLiVUkBW1Kx4s.jpg", "w": 0.6 },
            { "t": "The right to bear arms", "i": "https://fedsoc-cms-public.s3.amazonaws.com/Featured%20Pictures/gun%20flag%20and%20constitution.jpg-848x477", "w": 0 },
            { "t": "Protection from unreasonable searches", "i": "https://i.pinimg.com/474x/9c/93/32/9c93321c8431d3b35301473ed973e46a.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which document begins with the words \"We the People\"?",
        "c": "Founding Documents",
        "e": "The Preamble to the U.S. Constitution begins with the famous words \"We the People.\"",
        "o": [
            { "t": "Declaration of Independence", "i": "https://www.archives.gov/files/founding-docs/declaration-of-independence-front-630.jpg", "w": 0.1 },
            { "t": "Articles of Confederation", "i": "https://www.archives.gov/files/milestone-documents/images/doc-003-big.jpg", "w": 0.1 },
            { "t": "U.S. Constitution", "i": "https://www.archives.gov/files/founding-docs/constitution-page1.jpg", "w": 1 },
            { "t": "Bill of Rights", "i": "https://www.archives.gov/files/founding-docs/bill-of-rights.jpg", "w": 0.1 }
        ]
    },
    {
        "q": "What was the main purpose of the Federalist Papers?",
        "c": "Founding Documents",
        "e": "The Federalist Papers argued for ratifying the Constitution and explained how the new government would work.",
        "o": [
            { "t": "To declare independence from Britain", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/declaration-of-independence-113492099", "w": 0 },
            { "t": "To support ratification of the Constitution", "i": "https://bri-wp-images.s3.amazonaws.com/wp-content/uploads/Ch_3_The_Constitution_Thumbnail-2.jpg", "w": 1 },
            { "t": "To explain the Bill of Rights after 1791", "i": "https://bri-wp-images.s3.amazonaws.com/wp-content/uploads/founding-fathers-550x271.png", "w": 0.2 },
            { "t": "To argue for a stronger national government", "i": "https://bri-wp-images.s3.amazonaws.com/wp-content/uploads/Ch-2-Declaration-of-Independence-Hero-Image.jpg", "w": 0.5 }
        ]
    },
    {
        "q": "Which state name is misspelled on the original signed U.S. Constitution?",
        "c": "Founding Documents",
        "e": "On the engrossed 1787 Constitution, Alexander Hamilton wrote \"Pensylvania\" with one \"n\" instead of the modern spelling \"Pennsylvania.\"",
        "o": [
            { "t": "Virginia", "i": "https://cdn.britannica.com/42/4942-004-851447EE.jpg", "w": 0 },
            { "t": "Pennsylvania", "i": "https://cdn.britannica.com/31/3431-004-167AAB6A.jpg", "w": 1 },
            { "t": "Massachusetts", "i": "https://cdn.britannica.com/47/2347-004-FAB09B4B.jpg", "w": 0 },
            { "t": "Connecticut", "i": "https://cdn.britannica.com/71/7771-004-52169350.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which U.S. political party is known as the Grand Old Party?",
        "c": "Political Parties",
        "e": "The term started in the 1870s after the Civil War. People called the Republicans the 'Grand Old Party' to honor their role in keeping the country together and ending slavery.",
        "o": [
            { "t": "Reform Party", "i": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Reform_Party_USA_Logo.png/330px-Reform_Party_USA_Logo.png", "w": 0 },
            { "t": "Libertarian Party", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Libertarian_Disc.svg/250px-Libertarian_Disc.svg.png", "w": 0 },
            { "t": "Democratic Party", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/250px-US_Democratic_Party_Logo.svg.png", "w": 0 },
            { "t": "Republican Party", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/250px-Republican_Disc.svg.png", "w": 1 }
        ]
    },
    {
        "q": "Which U.S. political party was founded in opposition to the expansion of slavery?",
        "c": "Political Parties",
        "e": "The Republican Party formed in 1854 to stop the spread of slavery into new U.S. territories.",
        "o": [
            { "t": "Democratic Party", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/250px-US_Democratic_Party_Logo.svg.png", "w": 0 },
            { "t": "Republican Party", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/250px-Republican_Disc.svg.png", "w": 1 },
            { "t": "Green Party", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Green_Disc.svg/250px-Green_Disc.svg.png", "w": 0 },
            { "t": "Reform Party", "i": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Reform_Party_USA_Logo.png/330px-Reform_Party_USA_Logo.png", "w": 0 }
        ]
    },
    {
        "q": "Which U.S. political party traditionally uses a donkey as its symbol?",
        "c": "Political Parties",
        "e": "The Democratic Party adopted the donkey symbol after it was popularized in political cartoons during the 19th century.",
        "o": [
            { "t": "Republican Party", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/250px-Republican_Disc.svg.png", "w": 0 },
            { "t": "Libertarian Party", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Libertarian_Disc.svg/250px-Libertarian_Disc.svg.png", "w": 0 },
            { "t": "Democratic Party", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/250px-US_Democratic_Party_Logo.svg.png", "w": 1 },
            { "t": "Green Party", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Green_Disc.svg/250px-Green_Disc.svg.png", "w": 0 }
        ]
    },
    {
        "q": "Which animal represents the Republican Party in the United States?",
        "c": "Political Parties",
        "e": "The elephant became the Republican Party’s symbol after appearing in political cartoons by Thomas Nast in the 1870s.",
        "o": [
            { "t": "Elephant", "i": "https://media.istockphoto.com/id/488875050/photo/elephants-eye-close-up.jpg?s=612x612&w=0&k=20&c=sUeR40DDMMuSYjj4JhGATMEYo6qkNlPgAO-XzZImco4=", "w": 1 },
            { "t": "Donkey", "i": "https://thumbs.dreamstime.com/b/close-up-portrait-one-donkey-square-format-close-up-portrait-one-donkey-285846736.jpg", "w": 0 },
            { "t": "Eagle", "i": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRez7QrrYZYwcWN6ujpArtgvWxKmeIMJwDxg&s", "w": 0 },
            { "t": "Bear", "i": "https://i.etsystatic.com/8327029/r/il/67a798/2398626262/il_fullxfull.2398626262_7f78.jpg", "w": 0 }
        ]
    }
];