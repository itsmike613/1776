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
        "q": "Which 1803 land deal doubled the size of the United States?",
        "c": "Westward Expansion",
        "e": "The Louisiana Purchase was the 1803 agreement in which the United States bought a vast territory from France, doubling the nation’s size.",
        "o": [
            { "t": "Missouri Compromise", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/missouri-compromise-556653959?_a=BAVAZGB00", "w": 0 },
            { "t": "Louisiana Purchase", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/louisiana-purchase-gettyimages-3070818?_a=BAVAZGB00", "w": 1 },
            { "t": "Homestead Act", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/homestead-act-gettyimages-515213200?_a=BAVAZGB00", "w": 0 },
            { "t": "Treaty of Guadalupe Hidalgo", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-113491874?_a=BAVAZGB00", "w": 0 }
        ]
    },
    {
        "q": "Who led the famous expedition that explored the Louisiana Territory from 1804 to 1806?",
        "c": "Westward Expansion",
        "e": "Meriwether Lewis and William Clark led the expedition ordered by President Thomas Jefferson to explore and map the new territory.",
        "o": [
            { "t": "Daniel Boone and Davy Crockett", "i": "https://upload.wikimedia.org/wikipedia/commons/5/50/Chester_Harding_-_Daniel_Boone_-_NPG.2015.102_-_National_Portrait_Gallery_%28cropped%29.jpg", "w": 0 },
            { "t": "Lewis and Clark", "i": "https://upload.wikimedia.org/wikipedia/commons/b/be/Meriwether_Lewis-Charles_Willson_Peale.jpg", "w": 1 },
            { "t": "John C. Frémont and Kit Carson", "i": "https://ids.si.edu/ids/deliveryService?id=NPG-NPG_72_17Fremont_d1", "w": 0 },
            { "t": "Ulysses S. Grant and William T. Sherman", "i": "https://archives.whitehousehistory.org/fotoweb/cache/v2/X/c/Main%20Index/Main%20Index/Portraits/57.tif.jif8v7P-MSE_6c1hQA0A.HqZQqiAUCK.jpg", "w": 0 }
        ]
    },
    {
        "q": "What idea claimed that the United States was destined to spread across North America?",
        "c": "Westward Expansion",
        "e": "Manifest Destiny was the belief that the United States should expand westward across the continent.",
        "o": [
            { "t": "Popular Sovereignty", "i": "https://upload.wikimedia.org/wikipedia/commons/6/67/Senator_Stephen_A._Douglas_%28edited%29.png", "w": 0 },
            { "t": "Manifest Destiny", "i": "https://upload.wikimedia.org/wikipedia/commons/f/fd/American_Progress_%28John_Gast_painting%29.jpg", "w": 1 },
            { "t": "Isolationism", "i": "https://api.nga.gov/iiif/4f95c866-94c7-4b84-b29f-6873321ef55f/full/!800,800/0/default.jpg", "w": 0 },
            { "t": "Reconstruction", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Misses_Cooke%27s_school_for_freedmen.jpg/1280px-Misses_Cooke%27s_school_for_freedmen.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which 1862 law gave many settlers 160 acres of public land if they improved it?",
        "c": "Westward Expansion",
        "e": "The Homestead Act encouraged western settlement by offering 160 acres to eligible settlers who lived on and improved the land.",
        "o": [
            { "t": "Kansas-Nebraska Act", "i": "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892190/EducationHub/photos/kansas-nebraska-act.jpg", "w": 0 },
            { "t": "Indian Removal Act", "i": "https://images.nationalgeographic.org/image/upload/v1638887315/EducationHub/photos/native-american-removal-from-the-southeast.jpg", "w": 0 },
            { "t": "Homestead Act", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/homestead-act-gettyimages-515213200?_a=BAVAZGB00", "w": 1 },
            { "t": "Dawes Act", "i": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Dawes_Act_-_First_Page.jpg", "w": 0 }
        ]
    },
    {
        "q": "What major transportation project was completed at Promontory Summit, Utah, in 1869?",
        "c": "Westward Expansion",
        "e": "The first transcontinental railroad was completed in 1869 when the Central Pacific and Union Pacific railroads were linked in Utah.",
        "o": [
            { "t": "Erie Canal", "i": "https://cdn.britannica.com/58/125958-050-8380FC47/Map-Erie-Canal.jpg", "w": 0 },
            { "t": "National Road", "i": "https://cdn.britannica.com/14/199814-050-C335E61E/Map-section-Cumberland-Road-1916.jpg", "w": 0 },
            { "t": "Transcontinental Railroad", "i": "https://cdn.britannica.com/92/258092-050-5983EBB1/Photograph-of-First-Transcontinental-Railroad-circa-1869.jpg", "w": 1 },
            { "t": "Panama Canal", "i": "https://cdn.britannica.com/62/244562-050-4BA10632/Locator-map-Canal-Zone.jpg", "w": 0 }
        ]
    },
    {
        "q": "What was the Middle Passage?",
        "c": "Slavery",
        "e": "The Middle Passage was the forced voyage that carried enslaved Africans across the Atlantic Ocean to the Americas.",
        "o": [
            { "t": "A route used by settlers moving west", "i": "https://cdn.britannica.com/60/3260-050-6BE12AFF/state-The-Oregon-Trail-boundaries-1850.jpg", "w": 0 },
            { "t": "A trade route carrying enslaved Africans across the Atlantic", "i": "https://cdn.britannica.com/85/4185-050-B39F97CE/Plans-ship-slaves-engraving-1789.jpg", "w": 1 },
            { "t": "A railroad line in the South", "i": "https://cdn.britannica.com/92/258092-050-5983EBB1/Photograph-of-First-Transcontinental-Railroad-circa-1869.jpg", "w": 0 },
            { "t": "A law that ended slavery", "i": "https://cdn.britannica.com/84/142484-050-D891E091/Thirteenth-Amendment-to-the-Constitution-of-United.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which system used secret routes and safe houses to help enslaved people escape to freedom?",
        "c": "Slavery",
        "e": "The Underground Railroad was a secret network that helped many enslaved people escape, especially to free states and Canada.",
        "o": [
            { "t": "Underground Railroad", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/underground-railroad-gettyimages-645161544?_a=BAVAZGB00", "w": 1 },
            { "t": "Transcontinental Railroad", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/transcontinental-railroad-gettyimages-559144231?_a=BAVAZGB00", "w": 0 },
            { "t": "Erie Canal", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/erie-canal-gettyimages-515466852?_a=BAVAZGB00", "w": 0 },
            { "t": "Homestead Act", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/homestead-act-gettyimages-515213200?_a=BAVAZGB00", "w": 0 }
        ]
    },
    {
        "q": "Who is most famous for leading enslaved people to freedom through the Underground Railroad?",
        "c": "Slavery",
        "e": "Harriet Tubman escaped slavery and later helped many others reach freedom through the Underground Railroad.",
        "o": [
            { "t": "Harriet Tubman", "i": "https://upload.wikimedia.org/wikipedia/commons/6/61/Harriet_Tubman_%28circa_1885%29.jpg", "w": 1 },
            { "t": "Susan B. Anthony", "i": "https://upload.wikimedia.org/wikipedia/commons/2/28/SB_Anthony_from_RoRaWW.jpg", "w": 0 },
            { "t": "Betsy Ross", "i": "https://upload.wikimedia.org/wikipedia/commons/1/10/Betsy_Ross_1893.png", "w": 0 },
            { "t": "Dolley Madison", "i": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Dolley_Madison.jpg", "w": 0 }
        ]
    },
    {
        "q": "What did the Fugitive Slave Act of 1850 require?",
        "c": "Slavery",
        "e": "The law required escaped enslaved people to be returned to their enslavers and punished people who helped them.",
        "o": [
            { "t": "It required escaped enslaved people to be returned to enslavers", "i": "https://upload.wikimedia.org/wikipedia/commons/4/47/Runaway_slave.jpg", "w": 1 },
            { "t": "It gave voting rights", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/15th_Amendment_Pg1of1_AC.jpg/960px-15th_Amendment_Pg1of1_AC.jpg", "w": 0 },
            { "t": "It ended slavery in territories", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/13th_Amendment_Pg1of1_AC.jpg/960px-13th_Amendment_Pg1of1_AC.jpg", "w": 0 },
            { "t": "It ended the slave trade", "i": "https://upload.wikimedia.org/wikipedia/commons/8/82/Slaveshipposter.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which Supreme Court case ruled in 1857 that Black people could not be U.S. citizens?",
        "c": "Slavery",
        "e": "In Dred Scott v. Sandford, the Supreme Court ruled that Black people, whether enslaved or free, could not be citizens of the United States.",
        "o": [
            { "t": "Marbury v. Madison", "i": "https://upload.wikimedia.org/wikipedia/commons/f/fe/John_Marshall_by_Henry_Inman%2C_1832.jpg", "w": 0 },
            { "t": "McCulloch v. Maryland", "i": "https://upload.wikimedia.org/wikipedia/commons/f/fe/John_Marshall_by_Henry_Inman%2C_1832.jpg", "w": 0 },
            { "t": "Dred Scott v. Sandford", "i": "https://upload.wikimedia.org/wikipedia/commons/4/48/Dred_Scott_photograph_%28circa_1857%29.jpg", "w": 1 },
            { "t": "Brown v. Board of Education", "i": "https://cdn.britannica.com/25/91825-050-6828171F/George-EC-Hayes-Thurgood-Marshall-court-James-May-17-1954.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which book by Harriet Beecher Stowe helped turn many Northerners against slavery?",
        "c": "Slavery",
        "e": "Uncle Tom's Cabin became widely known for showing the cruelty of slavery and increasing anti-slavery feeling in the North.",
        "o": [
            { "t": "Common Sense", "i": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Commonsense.jpg", "w": 0 },
            { "t": "The Federalist Papers", "i": "https://upload.wikimedia.org/wikipedia/commons/1/12/The_Federalist_%281st_ed%2C_1788%2C_vol_I%2C_title_page%29.jpg", "w": 0 },
            { "t": "Uncle Tom's Cabin", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Uncle_toms_cabin_first_edition.jpg/250px-Uncle_toms_cabin_first_edition.jpg", "w": 1 },
            { "t": "The Jungle", "i": "https://upload.wikimedia.org/wikipedia/commons/4/4a/The_Jungle_%281906%29_cover.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which amendment to the U.S. Constitution abolished slavery?",
        "c": "Slavery",
        "e": "The 13th Amendment abolished slavery in the United States after it was ratified in 1865.",
        "o": [
            { "t": "10th Amendment", "i": "https://commons.wikimedia.org/wiki/Special:FilePath/Constitution%20of%20the%20United%20States%2C%20page%201.jpg", "w": 0 },
            { "t": "12th Amendment", "i": "https://commons.wikimedia.org/wiki/Special:FilePath/12th%20Amendment%20Pg1of1%20AC.jpg", "w": 0 },
            { "t": "13th Amendment", "i": "https://commons.wikimedia.org/wiki/Special:FilePath/13th%20Amendment%20Pg1of1%20AC.jpg", "w": 1 },
            { "t": "15th Amendment", "i": "https://commons.wikimedia.org/wiki/Special:FilePath/15th%20Amendment%20Pg1of1%20AC.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which event marked the beginning of the Civil War?",
        "c": "Civil War",
        "e": "The Civil War began when Confederate forces fired on Fort Sumter in South Carolina on April 12, 1861.",
        "o": [
            { "t": "Battle of Gettysburg", "i": "https://upload.wikimedia.org/wikipedia/commons/6/69/Battle_of_Gettysburg%2C_by_Currier_and_Ives.png", "w": 0 },
            { "t": "Bombardment of Fort Sumter", "i": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Bombardment_of_Fort_Sumter.jpg", "w": 1 },
            { "t": "Battle of Antietam", "i": "https://cdn.britannica.com/53/184753-050-444F493E/Battle-of-Antietam-Kurz-Allison-1888.jpg", "w": 0 },
            { "t": "Surrender at Appomattox Court House", "i": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/robert-e-lee-surrenders-to-ulysses-s-grant-at-appomattox-courthouse-1865-currier-and-ives.jpg", "w": 0 }
        ]
    },
    {
        "q": "Who was president of the United States during most of the Civil War?",
        "c": "Civil War",
        "e": "Abraham Lincoln led the United States during the Civil War and worked to preserve the Union.",
        "o": [
            { "t": "Andrew Johnson", "i": "https://cdn.britannica.com/65/215965-050-B1456D5B/portrait-of-president-andrew-jackson-by-washington-bogart-cooper-1866.jpg", "w": 0 },
            { "t": "Ulysses S. Grant", "i": "https://archives.whitehousehistory.org/fotoweb/cache/v2/X/c/Main%20Index/Main%20Index/Portraits/57.tif.jif8v7P-MSE_6c1hQA0A.HqZQqiAUCK.jpg", "w": 0 },
            { "t": "Abraham Lincoln", "i": "https://api.nga.gov/iiif/9573ae89-ce7b-4500-b999-990c83b830fe/full/950,/0/default.jpg", "w": 1 },
            { "t": "James Buchanan", "i": "https://cdn.britannica.com/65/92665-050-381B1EE3/James-Buchanan.jpg", "w": 0 }
        ]
    },
    {
        "q": "What was the name of the Northern side in the Civil War?",
        "c": "Civil War",
        "e": "The Northern states that remained loyal to the United States were called the Union.",
        "o": [
            { "t": "Confederacy", "i": "https://www.ifri.org/sites/default/files/migrated_files/images/thumbnails/image/confederate_rebel_flag.svg_7.png", "w": 0 },
            { "t": "Union", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png", "w": 1 },
            { "t": "Continental Army", "i": "https://www.battlefields.org/sites/default/files/styles/social_media/public/thumbnails/image/Continental%20Soldiers_1.jpg.webp", "w": 0 },
            { "t": "Federalists", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-3309247?_a=BAVAZGB00", "w": 0 }
        ]
    },
    {
        "q": "What was the name of the Southern side in the Civil War?",
        "c": "Civil War",
        "e": "The Southern states that seceded from the United States formed the Confederacy, also called the Confederate States of America.",
        "o": [
            { "t": "Union", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png", "w": 0 },
            { "t": "Confederacy", "i": "https://www.ifri.org/sites/default/files/migrated_files/images/thumbnails/image/confederate_rebel_flag.svg_7.png", "w": 1 },
            { "t": "Federalists", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-3309247?_a=BAVAZGB00", "w": 0 },
            { "t": "Continental Army", "i": "https://www.battlefields.org/sites/default/files/styles/social_media/public/thumbnails/image/Continental%20Soldiers_1.jpg.webp", "w": 0 }
        ]
    },
    {
        "q": "Which document declared enslaved people in rebelling states to be free?",
        "c": "Civil War",
        "e": "The Emancipation Proclamation was issued by Abraham Lincoln on January 1, 1863.",
        "o": [
            { "t": "Bill of Rights", "i": "https://www.archives.gov/files/founding-docs/bill-of-rights.jpg", "w": 0 },
            { "t": "Emancipation Proclamation", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/emancipation-proclomation-gettyimages-2881081?_a=BAVAZGB00", "w": 1 },
            { "t": "Declaration of Independence", "i": "https://www.archives.gov/files/founding-docs/declaration-of-independence-front-630.jpg", "w": 0 },
            { "t": "Missouri Compromise", "i": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/missouri-compromise-556653959?_a=BAVAZGB00", "w": 0 }
        ]
    },
    {
        "q": "Which battle is often called the turning point of the Civil War?",
        "c": "Civil War",
        "e": "The Battle of Gettysburg in July 1863 is often called the turning point because it stopped Lee’s invasion of the North.",
        "o": [
            { "t": "Battle of Gettysburg", "i": "https://upload.wikimedia.org/wikipedia/commons/6/69/Battle_of_Gettysburg%2C_by_Currier_and_Ives.png", "w": 1 },
            { "t": "Battle of Vicksburg", "i": "https://cdn.britannica.com/08/195108-138-C710801A/Overview-Vicksburg-Campaign-American-Civil-War.jpg", "w": 0.5 },
            { "t": "Battle of Bunker Hill", "i": "https://upload.wikimedia.org/wikipedia/commons/f/f9/The_Death_of_General_Warren_at_the_Battle_of_Bunker%27s_Hill%2C_June_17%2C_1775.jpg", "w": 0 },
            { "t": "Battle of Yorktown", "i": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Surrender_of_Lord_Cornwallis.jpg", "w": 0 }
        ]
    },
    {
        "q": "Which Union general accepted Robert E. Lee’s surrender in 1865?",
        "c": "Civil War",
        "e": "General Ulysses S. Grant accepted Lee’s surrender at Appomattox Court House on April 9, 1865.",
        "o": [
            { "t": "William Tecumseh Sherman", "i": "https://upload.wikimedia.org/wikipedia/commons/4/49/General_William_T._Sherman_%284190887790%29_%28cropped%29.jpg", "w": 0 },
            { "t": "George B. McClellan", "i": "https://upload.wikimedia.org/wikipedia/commons/8/86/George_B_McClellan_-_retouched%2C_cropped.jpg", "w": 0 },
            { "t": "Ulysses S. Grant", "i": "https://archives.whitehousehistory.org/fotoweb/cache/v2/X/c/Main%20Index/Main%20Index/Portraits/57.tif.jif8v7P-MSE_6c1hQA0A.HqZQqiAUCK.jpg", "w": 1 },
            { "t": "Stonewall Jackson", "i": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Jackson-Stonewall-LOC.jpg", "w": 0 }
        ]
    },
    {
        "q": "Where did Robert E. Lee surrender to Ulysses S. Grant?",
        "c": "Civil War",
        "e": "Lee surrendered at Appomattox Court House, Virginia, in April 1865.",
        "o": [
            { "t": "Richmond, Virginia", "i": "https://upload.wikimedia.org/wikipedia/commons/7/7c/A_downtown_view_of_Richmond%2C_VA.jpg", "w": 0 },
            { "t": "Gettysburg, Pennsylvania", "i": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQRosmK7aNSdTSwaG1CYcN3HrNj43yofqhwg2K1612Ix2yWY6H8gX4bqdEsdHlVf2Us-VvztyTCZr8Zn1BihqvONP0&s=19", "w": 0 },
            { "t": "Appomattox Court House, Virginia", "i": "https://www.nps.gov/apco/learn/historyculture/images/IMG_1585.jpg", "w": 1 },
            { "t": "Charleston, South Carolina", "i": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/East_Battery_Street_Charleston_Aug2010.jpg/1280px-East_Battery_Street_Charleston_Aug2010.jpg", "w": 0 }
        ]
    },
    {
        "q": "About how long did the Civil War last?",
        "c": "Civil War",
        "e": "The Civil War lasted from 1861 to 1865, or about four years.",
        "o": [
            { "t": "About 1 year", "i": "https://placehold.co/1?text=1", "w": 0 },
            { "t": "About 2 years", "i": "https://placehold.co/1?text=2", "w": 0 },
            { "t": "About 4 years", "i": "https://placehold.co/1?text=4", "w": 1 },
            { "t": "About 10 years", "i": "https://placehold.co/1?text=10", "w": 0 }
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