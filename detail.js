// Initialize i18next
i18next.init({
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                page: { title: "Site Detail - Tanzania Cultural Sites" },
                nav: { back: "Back to Home" },
                gallery: { title: "Gallery" },
                video: { title: "Video" },
                footer: { copyright: "© {{year}} Wendo Safari. All rights reserved." },
                error: {
                    not_found: "Site Not Found",
                    not_loaded: "The requested site could not be found."
                },
                sites: {
                    "stone-town": {
                        title: "Stone Town (Zanzibar)",
                        description: "Stone Town, located on Zanzibar Island, is a UNESCO World Heritage Site inscribed in 2000. This historic town exemplifies a fusion of Swahili, Arab, Indian, and European cultures, evident in its narrow winding streets, coral stone buildings, and bustling markets. Key landmarks include the Old Fort, built by Omani Arabs in the 17th century, the House of Wonders, a former sultan’s palace, and the former slave market site, now a poignant memorial. Once a thriving center for spice and slave trade, Stone Town’s architecture features intricately carved wooden doors and verandas, reflecting its rich trading history along the Indian Ocean coast.",
                        image: "https://www.foreverafricasafari.com/wp-content/uploads/2022/08/fuerte-stone-town-zanzibar.jpg",
                        gallery: [
                            "https://blog.tanzaniaodyssey.com/wp-content/uploads/2013/03/Birds-Eye-Stone-Town.jpg",
                            "https://blog.tanzaniaodyssey.com/wp-content/uploads/2013/03/Boat-1.jpg"
                        ],
                        video: "https://www.youtube.com/embed/F9GDrzlWq9Q"
                    },
                    "kondoa": {
                        title: "Kondoa Rock Art Caves",
                        description: "The Kondoa Rock-Art Sites, inscribed as a UNESCO World Heritage Site in 2006, consist of over 150 natural rock shelters in central Tanzania adorned with ancient paintings. Dating back to around 2,000 BCE, these artworks were created by hunter-gatherer communities and depict animals (giraffes, elephants), human figures, and abstract symbols. The paintings, executed in red and white pigments, offer a window into prehistoric life, rituals, and beliefs. Located in the Kondoa region, the sites span a vast area and are preserved amidst rugged landscapes, making them one of Africa’s most significant rock art collections.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Kondoa_Rock_Art_Site_07.jpg",
                        gallery: ["https://serengetinationalparksafaris.com/wp-content/uploads/2023/02/dtybca.jpg"],
                        video: "https://www.youtube.com/embed/7vX8z5Z3vQw"
                    },
                    "kilwa-songo": {
                        title: "Kilwa Kisiwani & Songo Mnara Ruins",
                        description: "Inscribed in 1981 as a UNESCO World Heritage Site, the ruins of Kilwa Kisiwani and Songo Mnara on Tanzania’s southern coast are remnants of two prosperous Swahili trading ports from the 9th to 19th centuries. Kilwa Kisiwani, once a powerful sultanate, controlled gold trade routes to Zimbabwe and minted its own coins. Notable structures include the Great Mosque (11th century), the Husuni Kubwa palace, and coral-stone houses. Songo Mnara, a smaller island, features well-preserved domestic architecture. These sites showcase Swahili engineering and their role as a cultural bridge between Africa, Arabia, and Asia.",
                        image: "https://whc.unesco.org/uploads/thumbs/news_1147-1200-630-20140617202313.jpg",
                        gallery: [
                            "https://www.tawa.go.tz/storage/app/uploads/public/627/272/141/627272141216e703775833.jpg",
                            "https://www.focuseastafricatours.com/wp-content/uploads/kilwa.jpg"
                        ],
                        video: "https://www.youtube.com/embed/XkKz8z5J5vE"
                    },
                    "olduvai": {
                        title: "Olduvai Gorge (Ngorongoro)",
                        description: "Olduvai Gorge, within the Ngorongoro Conservation Area, is one of the world’s most important paleoanthropological sites. Known as the 'Cradle of Mankind,' it has yielded fossils of early hominids like Homo habilis and Paranthropus boisei, discovered by Louis and Mary Leakey in the mid-20th century. Spanning nearly 2 million years of human evolution, the gorge’s layered sediment preserves tools, bones, and evidence of early human activity. Its dramatic landscape, cut by erosion, reveals a geological timeline studied globally, complemented by the nearby Olduvai Gorge Museum.",
                        image: "https://www.ncaa.go.tz/wp-content/uploads/2022/08/Olduvai-Gorge3.jpg",
                        gallery: ["https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/o/l/olduvai_gorge4.jpg"],
                        video: "https://www.youtube.com/embed/0ZCaQJ74pNU"
                    },
                    "laetoli": {
                        title: "Laetoli Footprints (Ngorongoro)",
                        description: "The Laetoli Footprints, discovered in 1976 by Mary Leakey near Ngorongoro, are a remarkable archaeological find: 3.6-million-year-old impressions of Australopithecus afarensis preserved in volcanic ash. These 70 footprints, stretching over 27 meters, provide the earliest evidence of bipedalism in human ancestors. The site includes tracks of three individuals—likely a family—walking upright, offering profound insights into human evolution. Protected under a conservation cover, Laetoli remains a testament to our ancient origins, with replicas displayed in museums worldwide.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Laetoli_Footprints_NCA_3.jpg",
                        gallery: ["https://www.africanmeccasafaris.com/wp-content/uploads/laetolifootprints.jpg"],
                        video: "https://www.youtube.com/embed/5z5z5z5z5z5"
                    },
                    "isimila": {
                        title: "Isimila Stone Age Site (Iringa)",
                        description: "Located near Iringa, the Isimila Stone Age Site dates back over 60,000 years, featuring an array of Acheulean stone tools like hand axes and cleavers. Discovered in the 1950s, the site’s erosion-carved sandstone pillars add a striking natural element to its archaeological significance. Excavations reveal evidence of early human habitation, including animal bones suggesting hunting practices. Isimila offers a rare glimpse into the Middle Stone Age in East Africa, blending natural beauty with prehistoric history.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Isimila.jpg/1200px-Isimila.jpg",
                        gallery: ["https://www.tanzania-experience.com/wp-content/uploads/2016/01/isimila-stone-age-featured.jpg"],
                        video: "https://www.youtube.com/embed/3z3z3z3z3z3"
                    },
                    "bagamoyo": {
                        title: "Bagamoyo Town",
                        description: "Bagamoyo, a coastal town north of Dar es Salaam, was a pivotal 19th-century hub for the slave and ivory trade under Arab and German rule. Its name, meaning 'lay down your heart,' reflects the despair of enslaved people. Key sites include the Holy Ghost Mission (1870s), with its church and museum, the German Boma (administrative building), and the Kaole Ruins nearby. Bagamoyo’s colonial architecture and historical significance make it a poignant cultural landmark.",
                        image: "https://safarispartners.com/images/destinations/bagamoyo.jpg",
                        gallery: ["https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-fbb238a/tanzania-specialist.com/wp-content/uploads/2023/07/Bagamoyo-3.jpg"],
                        video: "https://www.youtube.com/embed/4z4z4z4z4z4"
                    },
                    "kaole": {
                        title: "Kaole Ruins (Bagamoyo)",
                        description: "Just south of Bagamoyo, the Kaole Ruins date to the 13th century, showcasing Swahili coastal civilization. The site features a well-preserved mosque, Persian-influenced tombs with baobab trees, and remnants of a thriving trade settlement. Once linked to Kilwa’s trade network, Kaole’s coral stone structures reflect Islamic and Persian architectural styles, offering insights into early coastal culture and commerce before its decline in the 16th century.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Bagamoyo/Kaole_Ruins_Bagamoyo_03.jpg",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/0/00/13th_century_Kaole_mosque.jpg"],
                        video: "https://www.youtube.com/embed/5z5z5z5z5z5"
                    },
                    "mikindani": {
                        title: "Mikindani (Mtwara)",
                        description: "Mikindani, a coastal town in Mtwara, flourished as a Swahili trading port before becoming a German colonial outpost in the late 19th century. The German Boma, a fortified administrative building, stands as a centerpiece, alongside Arab-influenced houses and a historic slave market site. Its picturesque bay and quiet streets preserve a blend of Swahili, Arab, and European heritage, making it a lesser-known gem of Tanzania’s coast.",
                        image: "https://mikindani.com/wp-content/uploads/2015/08/Bay-6.jpg",
                        gallery: ["https://www.exploretanzania.nl/wp-content/uploads/2020/09/Mikindani-960x605-1.jpg"],
                        video: "https://www.youtube.com/embed/6z6z6z6z6z6"
                    },
                    "ujiji": {
                        title: "Ujiji (Kigoma)",
                        description: "Ujiji, on Lake Tanganyika, is famed for the 1871 meeting of Henry Morton Stanley and Dr. David Livingstone, marked by a monument under a mango tree. An Arab-Swahili trading post in the 19th century, it facilitated the exchange of goods across Central Africa. The Livingstone Museum and nearby traditional houses highlight its historical role and multicultural past, set against the scenic lakeshore.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Kigoma_Railway_Station%2C_Kigoma_Ward.jpg",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ujiji_2012_Tamino.jpg/640px-Ujiji_2012_Tamino.jpg"],
                        video: "https://www.youtube.com/embed/7z7z7z7z7z7"
                    },
                    "maasai": {
                        title: "Maasai Villages (Arusha & Manyara)",
                        description: "Scattered across Arusha and Manyara regions, Maasai villages offer an immersive experience into the pastoral lifestyle of the Maasai people. Known for their distinctive red attire, intricate beadwork, and warrior traditions, the Maasai maintain semi-nomadic cattle-herding practices. Visitors can witness traditional dances like the Adumu (jumping dance), explore mud-and-dung bomas (homesteads), and learn about their resilience amidst modernization.",
                        image: "https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-fbb238a/tanzania-specialist.com/wp-content/uploads/2023/08/visit-maasai-village-1.jpg",
                        gallery: ["https://www.arushacityguide.com/wp-content/uploads/2023/08/Arusha-Maasai-Village-Tour.jpg"],
                        video: "https://www.youtube.com/embed/8z8z8z8z8z8"
                    },
                    "hadzabe": {
                        title: "Hadzabe & Datoga Tribes (Lake Eyasi)",
                        description: "Near Lake Eyasi, the Hadzabe and Datoga tribes represent some of Africa’s last hunter-gatherer and pastoralist communities. The Hadzabe, numbering fewer than 1,000, hunt with bows and arrows, living off the land with minimal possessions. The Datoga, skilled metalworkers, craft tools and jewelry. Their traditional lifestyles, language (click-based for Hadzabe), and coexistence with nature offer a rare look at ancient survival methods.",
                        image: "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/h/a/hadzabe_in_tanzania_2.jpg",
                        gallery: ["https://idreamofafrica.com/wp-content/uploads/2018/04/hadza-of-lake-eyasi.jpg"],
                        video: "https://www.youtube.com/embed/9z9z9z9z9z9"
                    },
                    "sukuma": {
                        title: "Sukuma Museum (Bujora, Mwanza)",
                        description: "Located in Bujora near Mwanza, the Sukuma Museum celebrates the culture of Tanzania’s largest ethnic group, the Sukuma. Established in 1968, it features traditional houses, royal regalia, and artifacts like drums used in the Bagika dance. The museum preserves Sukuma history, including their farming and fishing traditions, and hosts performances of the famous snake dance, showcasing their vibrant heritage.",
                        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/57/73/b7/sukuma-village-museum.jpg?w=1200&h=-1&s=1",
                        gallery: ["https://sukumamuseum.org/wp-content/uploads/royal-pavilion-5.4-1.jpg"],
                        video: "https://www.youtube.com/embed/0a0a0a0a0a0"
                    },
                    "makonde": {
                        title: "Makonde Carving Villages (Mtwara & Lindi)",
                        description: "In southern Tanzania’s Mtwara and Lindi regions, Makonde villages are renowned for their intricate wood carvings. The Makonde people craft Ujamaa (family tree) sculptures and abstract figures from ebony, a tradition dating back centuries. These artworks often depict spirits, ancestors, or social themes, sold globally. Visitors can observe artisans at work and explore their matrilineal culture amidst rural settings.",
                        image: "https://www.blackwoodconservation.org/wp-content/uploads/2019/04/Mak-Instrument-Players.jpg",
                        gallery: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTCtzUmzGt-FMVOfdODM8uPfpPxf33yRnHVZqjkmOHQbGNFxMbPAI2gKJb2mDAKf-sgubLd3SzMxxlI2uHXQqyfrCyNez0jFCLodDMWFJBp22cYA4_IPiXe2cwBp7ej3qSQVyLV2rf1aoJ/s640/makondecarver2.jpg"],
                        video: "https://www.youtube.com/embed/1b1b1b1b1b1"
                    },
                    "ikombe": {
                        title: "Ikombe Cultural Village (Rukwa)",
                        description: "Ikombe, in the Rukwa region, preserves the traditions of the Fipa people, known for their unique plateau homeland. The village features traditional huts, storytelling sessions, and crafts like pottery and basket weaving. The Fipa’s agricultural heritage, including millet farming, and their oral histories of migration from Central Africa, enrich this cultural experience amidst a scenic landscape.",
                        image: "https://dailynews.co.tz/wp-content/uploads/2022/09/rukwa.jpg",
                        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzWfWaqgdlVWGfBcSaK0htjshVCPF33i_ZQ&s"],
                        video: "https://www.youtube.com/embed/2c2c2c2c2c2"
                    },
                    "german-boma": {
                        title: "German Boma (Bagamoyo & Iringa)",
                        description: "Built during German colonial rule (1885–1919), the German Bomas in Bagamoyo and Iringa served as administrative and military headquarters. These sturdy stone buildings, like the Mikindani Boma (used here for imagery), feature European design with thick walls and arched windows. In Bagamoyo, it oversaw coastal trade; in Iringa, it controlled inland regions. Today, they stand as relics of Tanzania’s colonial past, often repurposed for local use.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Bagamoyo/German_Old_Boma_Bagamoyo_04.jpg",
                        gallery: ["https://www.traveladventures.org/countries/tanzania/images/bagamoyo03.jpg"],
                        video: "https://www.youtube.com/embed/3d3d3d3d3d3"
                    },
                    "askari": {
                        title: "Askari Monument (Dar es Salaam)",
                        description: "The Askari Monument, unveiled in 1927 in Dar es Salaam, honors African soldiers (askaris) who fought for Britain in World War I. This bronze statue, depicting a rifle-bearing soldier, stands at a busy roundabout, symbolizing colonial sacrifice. Crafted by James Alexander Stevenson, it reflects both tribute and the complex legacy of colonial rule in Tanzania, surrounded by modern urban life.",
                        image: "https://appsaf.apieproject.com/news/wp-content/uploads/sites/29/2023/07/askari4-97cf8429cf61dd8d1e9eced76d9f9e01.jpeg",
                        gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/62/c5/db/caption.jpg?w=900&h=500&s=1"],
                        video: "https://www.youtube.com/embed/4e4e4e4e4e4"
                    },
                    "azania": {
                        title: "Azania Front Lutheran Church (Dar es Salaam)",
                        description: "Built in 1898 by German missionaries, Azania Front Lutheran Church in Dar es Salaam is a striking Gothic-style edifice with a red-tiled roof and pointed arches. Overlooking the harbor, it was the first permanent church in the city, serving German settlers and later the local Lutheran community. Its historical significance and architectural beauty make it a landmark of colonial and religious heritage.",
                        image: "https://www.azaniafront.org/sites/default/files/styles/max660/public/dar_es_salaam-azania_sea_view%20%281%29.jpg?itok=V-9jbJSC",
                        gallery: ["https://img1.advisor.travel/fs440x440px-Azania_Front_Lutheran_Church_16.jpg"],
                        video: "https://www.youtube.com/embed/5f5f5f5f5f5"
                    },
                    "old-fort": {
                        title: "Old Fort (Zanzibar)",
                        description: "The Old Fort, or Ngome Kongwe, in Zanzibar’s Stone Town was constructed in the late 17th century by Omani Arabs to defend against Portuguese attacks. This coral stone fortress, with its thick walls and cannons, later served as a prison and railway terminal. Today, it hosts cultural events, including the Zanzibar International Film Festival, blending history with modern vibrancy.",
                        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2d/0e/09.jpg",
                        gallery: ["https://media02.stockfood.com/largepreviews/MjIxMTExODM2OQ==/71326399-Old-Fort-AKA-Arab-Fort-or-Ngome-Kongwe-Stone-Town-Zanzibar-Unguja-Island-Tanzania.jpg"],
                        video: "https://www.youtube.com/embed/6g6g6g6g6g6"
                    },
                    "st-joseph": {
                        title: "St. Joseph’s Cathedral (Dar es Salaam)",
                        description: "St. Joseph’s Cathedral, completed in 1897 by German missionaries, is a Gothic-style Catholic church in Dar es Salaam. Its twin spires, stained glass windows, and ornate interior reflect European architectural influence. Located near the harbor, it remains an active place of worship and a historical symbol of Tanzania’s colonial Christian heritage, drawing visitors for its serene beauty.",
                        image: "https://3rdworldarchitecture.wordpress.com/wp-content/uploads/2018/05/tz_daressalaam_stjoseph_church.jpg",
                        gallery: ["https://travel-buddies.com/wp-content/uploads/2024/12/1_dar-es-salaam-history-and-architectural-tours.jpg"],
                        video: "https://www.youtube.com/embed/7h7h7h7h7h7"
                    },
                    "national-museum": {
                        title: "National Museum (Dar es Salaam)",
                        description: "The National Museum and House of Culture in Dar es Salaam, founded in 1940, chronicles Tanzania’s rich history. Exhibits include Leakey’s Olduvai Gorge fossils, Swahili artifacts, and relics from the independence struggle, housed in a building donated by King George V. Its ethnological and archaeological collections, alongside colonial-era displays, make it a comprehensive cultural repository.",
                        image: "https://momaa.org/wp-content/uploads/2019/09/nmt-1024x568.png",
                        gallery: ["https://www.nmt.go.tz/uploads/historical-centers/98a47a7c044d4032f7074ebbf31841c3.jpeg"],
                        video: "https://www.youtube.com/embed/8i8i8i8i8i8"
                    },
                    "village-museum": {
                        title: "Village Museum (Dar es Salaam)",
                        description: "The Village Museum in Dar es Salaam is an open-air exhibit showcasing traditional houses from over 20 Tanzanian tribes, built with authentic materials like mud and thatch. Established in 1967, it offers live demonstrations of crafts, dances, and daily life, preserving the country’s diverse indigenous cultures. Set in a lush garden, it’s an educational and immersive experience.",
                        image: "https://www.urtrips.com/wp-content/uploads/2023/04/Makumbusho-Village-Museum-Dar-ES-Salaam_2.jpg",
                        gallery: ["https://www.goshen.edu/wp-content/uploads/sites/20/2017/01/FJXS2812.jpg"],
                        video: "https://www.youtube.com/embed/9j9j9j9j9j9"
                    },
                    "nyerere-museum": {
                        title: "Nyerere Museum (Butiama, Mara)",
                        description: "The Nyerere Museum in Butiama, Julius Nyerere’s birthplace, honors Tanzania’s first president (Mwalimu). Opened in 1999, it displays his personal belongings, photographs, and documents from his leadership during the independence movement and socialist Ujamaa policy. The site includes his family home and grave, offering a personal look at a national hero.",
                        image: "https://gamilytours.wordpress.com/wp-content/uploads/2016/11/nyerere-museum.jpg?w=640",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/6/6c/Butiama_Museum.jpg"],
                        video: "https://www.youtube.com/embed/0k0k0k0k0k0"
                    },
                    "nyerere-memorial": {
                        title: "Mwalimu Nyerere Memorial House (Zanzibar)",
                        description: "The Mwalimu Nyerere Memorial House in Zanzibar commemorates Julius Nyerere’s contributions to Tanzania’s unity and independence. This modest residence, where he once stayed, features exhibits of his writings, photos, and memorabilia. It highlights his role in merging Tanganyika and Zanzibar into Tanzania, emphasizing his legacy of peace and equality.",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgoHgOhXB6xtNbdI4FxV1yeYv3yqZssiCjg&s",
                        gallery: ["https://i0.wp.com/www.tanzania1.com/wp-content/uploads/2013/06/Nyerere-Memorial.png?fit=800%2C500&ssl=1"],
                        video: "https://www.youtube.com/embed/1l1l1l1l1l1"
                    },
                    "arusha": {
                        title: "Arusha Cultural Heritage Centre",
                        description: "The Arusha Cultural Heritage Centre is a vibrant hub for Tanzanian art and history, featuring galleries of sculptures, paintings, and artifacts from across the country. Established in 1994, it showcases Maasai beadwork, Makonde carvings, and historical exhibits in a striking triangular building. It also serves as a marketplace for local crafts, blending culture with commerce.",
                        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/82/3d/ef/caption.jpg?w=1200&h=-1&s=1",
                        gallery: ["https://i0.wp.com/www.bestoftanzaniasafaris.com/wp-content/uploads/2023/06/cultural-heritate-center-arusha.jpg?resize=980%2C550"],
                        video: "https://www.youtube.com/embed/2m2m2m2m2m2"
                    },
                    "balai": {
                        title: "Balai Hindu Temple (Zanzibar & Dar es Salaam)",
                        description: "The Balai Hindu Temples in Zanzibar and Dar es Salaam serve Tanzania’s Indian diaspora, reflecting their cultural and spiritual heritage. Built in the early 20th century, these temples feature ornate carvings and vibrant interiors typical of South Indian architecture. They host festivals like Diwali and remain active worship sites, symbolizing the diversity of Tanzania’s urban communities.",
                        image: "https://cdn.myportfolio.com/238f99c5-741c-4350-bad9-3ed13e2a2bbc/f79efd83-a70f-42f6-8ea1-c81eca9b81b4_rwc_90x0x1424x1068x1424.jpg?h=0f58bd2f070e6d233c76ce6c1e710b99",
                        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnReionHkAzZOfh4XucgOV1sDkYE5_5eav-Q&s"],
                        video: "https://www.youtube.com/embed/3n3n3n3n3n3"
                    },
                    "kizimkazi": {
                        title: "Kizimkazi Mosque (Zanzibar)",
                        description: "The Kizimkazi Mosque, built in 1107 on Zanzibar’s southern coast, is one of East Africa’s oldest Islamic structures. Commissioned by Persian settlers, its mihrab bears Kufic inscriptions, a rare feature in the region. Restored over centuries, it reflects Swahili architectural simplicity and early Muslim influence, set near a village known for dolphin sightings.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kizimkazi01.jpg/1200px-Kizimkazi01.jpg",
                        gallery: ["https://img1.advisor.travel/1200x630px-Kizimkazi_Mosque_10.jpg"],
                        video: "https://www.youtube.com/embed/4o4o4o4o4o4"
                    }
                }
            }
        },
        fr: {
            translation: {
                page: { title: "Détails du Site - Sites Culturels de Tanzanie" },
                nav: { back: "Retour à l'Accueil" },
                gallery: { title: "Galerie" },
                video: { title: "Vidéo" },
                footer: { copyright: "© {{year}} Wendo Safari. Tous droits réservés." },
                error: {
                    not_found: "Site Non Trouvé",
                    not_loaded: "Le site demandé n'a pas pu être trouvé."
                },
                sites: {
                    "stone-town": {
                        title: "Stone Town (Zanzibar)",
                        description: "Stone Town, située sur l'île de Zanzibar, est un site du patrimoine mondial de l'UNESCO inscrit en 2000. Cette ville historique illustre une fusion des cultures swahilie, arabe, indienne et européenne, visible dans ses rues étroites et sinueuses, ses bâtiments en pierre de corail et ses marchés animés. Les monuments clés incluent le Vieux Fort, construit par les Arabes omanais au XVIIe siècle, la Maison des Merveilles, ancien palais d'un sultan, et le site de l'ancien marché aux esclaves, aujourd'hui un mémorial poignant. Autrefois centre prospère du commerce des épices et des esclaves, l'architecture de Stone Town présente des portes en bois finement sculptées et des vérandas, reflétant son riche passé commercial le long de la côte de l'océan Indien."
                    },
                    "kondoa": {
                        title: "Grottes d'Art Rupestre de Kondoa",
                        description: "Les sites d'art rupestre de Kondoa, inscrits comme site du patrimoine mondial de l'UNESCO en 2006, comprennent plus de 150 abris rocheux naturels dans le centre de la Tanzanie, ornés de peintures anciennes. Datant d'environ 2 000 av. J.-C., ces œuvres ont été créées par des communautés de chasseurs-cueilleurs et représentent des animaux (girafes, éléphants), des figures humaines et des symboles abstraits. Les peintures, réalisées avec des pigments rouges et blancs, offrent une fenêtre sur la vie, les rituels et les croyances préhistoriques. Situés dans la région de Kondoa, ces sites couvrent une vaste zone et sont préservés dans des paysages accidentés, ce qui en fait l'une des collections d'art rupestre les plus importantes d'Afrique."
                    },
                    "kilwa-songo": {
                        title: "Ruines de Kilwa Kisiwani et Songo Mnara",
                        description: "Inscrites en 1981 comme site du patrimoine mondial de l'UNESCO, les ruines de Kilwa Kisiwani et Songo Mnara, sur la côte sud de la Tanzanie, sont les vestiges de deux ports commerciaux swahilis prospères du IXe au XIXe siècle. Kilwa Kisiwani, autrefois un puissant sultanat, contrôlait les routes commerciales de l'or vers le Zimbabwe et frappait ses propres monnaies. Les structures notables incluent la Grande Mosquée (XIe siècle), le palais Husuni Kubwa et des maisons en pierre de corail. Songo Mnara, une île plus petite, présente une architecture domestique bien préservée. Ces sites mettent en valeur l'ingénierie swahilie et leur rôle de pont culturel entre l'Afrique, l'Arabie et l'Asie."
                    },
                    "olduvai": {
                        title: "Gorge d'Olduvai (Ngorongoro)",
                        description: "La gorge d'Olduvai, dans la zone de conservation de Ngorongoro, est l'un des sites paléoanthropologiques les plus importants au monde. Surnommée le « Berceau de l'Humanité », elle a livré des fossiles d'hominidés anciens comme Homo habilis et Paranthropus boisei, découverts par Louis et Mary Leakey au milieu du XXe siècle. Couvrant près de 2 millions d'années d'évolution humaine, les sédiments stratifiés de la gorge préservent des outils, des os et des preuves d'activités humaines anciennes. Son paysage dramatique, sculpté par l'érosion, révèle une chronologie géologique étudiée mondialement, complétée par le musée de la gorge d'Olduvai à proximité."
                    },
                    "laetoli": {
                        title: "Empreintes de Laetoli (Ngorongoro)",
                        description: "Les empreintes de Laetoli, découvertes en 1976 par Mary Leakey près de Ngorongoro, sont une trouvaille archéologique remarquable : des empreintes vieilles de 3,6 millions d'années d'Australopithecus afarensis préservées dans des cendres volcaniques. Ces 70 empreintes, s'étendant sur 27 mètres, fournissent la première preuve de la bipédie chez les ancêtres humains. Le site inclut les traces de trois individus – probablement une famille – marchant debout, offrant des perspectives profondes sur l'évolution humaine. Protégé sous une couverture de conservation, Laetoli reste un témoignage de nos origines anciennes, avec des répliques exposées dans des musées du monde entier."
                    },
                    "isimila": {
                        title: "Site de l'Âge de Pierre d'Isimila (Iringa)",
                        description: "Situé près d'Iringa, le site de l'Âge de Pierre d'Isimila remonte à plus de 60 000 ans, présentant une gamme d'outils en pierre acheuléens comme des haches et des couperets. Découvert dans les années 1950, les piliers de grès sculptés par l'érosion du site ajoutent un élément naturel frappant à son importance archéologique. Les fouilles révèlent des preuves d'habitation humaine ancienne, y compris des os d'animaux suggérant des pratiques de chasse. Isimila offre un rare aperçu de l'Âge de Pierre moyen en Afrique de l'Est, mêlant beauté naturelle et histoire préhistorique."
                    },
                    "bagamoyo": {
                        title: "Ville de Bagamoyo",
                        description: "Bagamoyo, une ville côtière au nord de Dar es Salaam, était un centre pivotal du commerce des esclaves et de l'ivoire au XIXe siècle sous la domination arabe et allemande. Son nom, signifiant « poser ton cœur », reflète le désespoir des esclaves. Les sites clés incluent la Mission du Saint-Esprit (années 1870), avec son église et son musée, le Boma allemand (bâtiment administratif) et les ruines de Kaole à proximité. L'architecture coloniale et l'importance historique de Bagamoyo en font un monument culturel poignant."
                    },
                    "kaole": {
                        title: "Ruines de Kaole (Bagamoyo)",
                        description: "Juste au sud de Bagamoyo, les ruines de Kaole datent du XIIIe siècle, mettant en valeur la civilisation côtière swahilie. Le site comprend une mosquée bien préservée, des tombes influencées par les Perses avec des baobabs, et les vestiges d'une colonie commerciale florissante. Autrefois liée au réseau commercial de Kilwa, les structures en pierre de corail de Kaole reflètent les styles architecturaux islamiques et persans, offrant un aperçu de la culture et du commerce côtiers anciens avant son déclin au XVIe siècle."
                    },
                    "mikindani": {
                        title: "Mikindani (Mtwara)",
                        description: "Mikindani, une ville côtière à Mtwara, prospérait comme port commercial swahili avant de devenir un avant-poste colonial allemand à la fin du XIXe siècle. Le Boma allemand, un bâtiment administratif fortifié, est au centre, aux côtés de maisons influencées par les Arabes et d'un site historique de marché aux esclaves. Sa baie pittoresque et ses rues tranquilles préservent un mélange d'héritage swahili, arabe et européen, en faisant un joyau moins connu de la côte tanzanienne."
                    },
                    "ujiji": {
                        title: "Ujiji (Kigoma)",
                        description: "Ujiji, sur le lac Tanganyika, est célèbre pour la rencontre de 1871 entre Henry Morton Stanley et le Dr David Livingstone, marquée par un monument sous un manguier. Poste commercial arabo-swahili au XIXe siècle, il facilitait l'échange de marchandises à travers l'Afrique centrale. Le musée Livingstone et les maisons traditionnelles à proximité mettent en lumière son rôle historique et son passé multiculturel, situés contre le rivage pittoresque du lac."
                    },
                    "maasai": {
                        title: "Villages Maasai (Arusha & Manyara)",
                        description: "Dispersés dans les régions d'Arusha et de Manyara, les villages maasai offrent une expérience immersive dans le mode de vie pastoral des Maasai. Connus pour leurs vêtements rouges distinctifs, leurs perles complexes et leurs traditions guerrières, les Maasai maintiennent des pratiques semi-nomades d'élevage de bétail. Les visiteurs peuvent assister à des danses traditionnelles comme l'Adumu (danse sautée), explorer des bomas en boue et en bouse (habitations), et en apprendre davantage sur leur résilience face à la modernisation."
                    },
                    "hadzabe": {
                        title: "Tribus Hadzabe & Datoga (Lac Eyasi)",
                        description: "Près du lac Eyasi, les tribus Hadzabe et Datoga représentent certaines des dernières communautés de chasseurs-cueilleurs et de pasteurs d'Afrique. Les Hadzabe, moins de 1 000, chassent avec des arcs et des flèches, vivant de la terre avec un minimum de possessions. Les Datoga, habiles métallurgistes, fabriquent des outils et des bijoux. Leurs modes de vie traditionnels, leur langue (basée sur des clics pour les Hadzabe) et leur coexistence avec la nature offrent un rare aperçu des méthodes de survie anciennes."
                    },
                    "sukuma": {
                        title: "Musée Sukuma (Bujora, Mwanza)",
                        description: "Situé à Bujora près de Mwanza, le musée Sukuma célèbre la culture du plus grand groupe ethnique de Tanzanie, les Sukuma. Fondé en 1968, il présente des maisons traditionnelles, des insignes royaux et des artefacts comme des tambours utilisés dans la danse Bagika. Le musée préserve l'histoire des Sukuma, y compris leurs traditions agricoles et de pêche, et organise des performances de la célèbre danse du serpent, mettant en valeur leur patrimoine vibrant."
                    },
                    "makonde": {
                        title: "Villages de Sculpture Makonde (Mtwara & Lindi)",
                        description: "Dans les régions de Mtwara et Lindi au sud de la Tanzanie, les villages Makonde sont réputés pour leurs sculptures sur bois complexes. Les Makonde créent des sculptures Ujamaa (arbre familial) et des figures abstraites en ébène, une tradition remontant à des siècles. Ces œuvres d'art représentent souvent des esprits, des ancêtres ou des thèmes sociaux, vendues à l'échelle mondiale. Les visiteurs peuvent observer les artisans au travail et explorer leur culture matrilinéaire dans des cadres ruraux."
                    },
                    "ikombe": {
                        title: "Village Culturel d'Ikombe (Rukwa)",
                        description: "Ikombe, dans la région de Rukwa, préserve les traditions des Fipa, connus pour leur patrie unique sur un plateau. Le village propose des huttes traditionnelles, des sessions de contes et des artisanats comme la poterie et la vannerie. L'héritage agricole des Fipa, y compris la culture du millet, et leurs histoires orales de migration depuis l'Afrique centrale enrichissent cette expérience culturelle au cœur d'un paysage pittoresque."
                    },
                    "german-boma": {
                        title: "Boma Allemand (Bagamoyo & Iringa)",
                        description: "Construits pendant la domination coloniale allemande (1885–1919), les Bomas allemands à Bagamoyo et Iringa servaient de quartiers généraux administratifs et militaires. Ces bâtiments en pierre robustes, comme le Boma de Mikindani (utilisé ici pour l'imagerie), présentent un design européen avec des murs épais et des fenêtres en arc. À Bagamoyo, il supervisait le commerce côtier ; à Iringa, il contrôlait les régions intérieures. Aujourd'hui, ils témoignent du passé colonial de la Tanzanie, souvent réutilisés pour un usage local."
                    },
                    "askari": {
                        title: "Monument Askari (Dar es Salaam)",
                        description: "Le monument Askari, dévoilé en 1927 à Dar es Salaam, rend hommage aux soldats africains (askaris) qui ont combattu pour la Grande-Bretagne pendant la Première Guerre mondiale. Cette statue en bronze, représentant un soldat portant un fusil, se dresse à un rond-point animé, symbolisant le sacrifice colonial. Conçue par James Alexander Stevenson, elle reflète à la fois un hommage et l'héritage complexe de la domination coloniale en Tanzanie, entourée par la vie urbaine moderne."
                    },
                    "azania": {
                        title: "Église Luthérienne Azania Front (Dar es Salaam)",
                        description: "Construite en 1898 par des missionnaires allemands, l'église luthérienne Azania Front à Dar es Salaam est un édifice de style gothique frappant avec un toit en tuiles rouges et des arcs pointus. Surplombant le port, elle fut la première église permanente de la ville, servant les colons allemands et plus tard la communauté luthérienne locale. Son importance historique et sa beauté architecturale en font un repère du patrimoine colonial et religieux."
                    },
                    "old-fort": {
                        title: "Vieux Fort (Zanzibar)",
                        description: "Le Vieux Fort, ou Ngome Kongwe, dans la Stone Town de Zanzibar a été construit à la fin du XVIIe siècle par les Arabes omanais pour se défendre contre les attaques portugaises. Cette forteresse en pierre de corail, avec ses murs épais et ses canons, a ensuite servi de prison et de terminal ferroviaire. Aujourd'hui, elle accueille des événements culturels, y compris le Festival International du Film de Zanzibar, mêlant histoire et dynamisme moderne."
                    },
                    "st-joseph": {
                        title: "Cathédrale Saint-Joseph (Dar es Salaam)",
                        description: "La cathédrale Saint-Joseph, achevée en 1897 par des missionnaires allemands, est une église catholique de style gothique à Dar es Salaam. Ses deux flèches, ses vitraux et son intérieur orné reflètent une influence architecturale européenne. Située près du port, elle reste un lieu de culte actif et un symbole historique du patrimoine chrétien colonial de la Tanzanie, attirant les visiteurs pour sa beauté sereine."
                    },
                    "national-museum": {
                        title: "Musée National (Dar es Salaam)",
                        description: "Le Musée National et Maison de la Culture à Dar es Salaam, fondé en 1940, retrace la riche histoire de la Tanzanie. Les expositions incluent les fossiles de la gorge d'Olduvai de Leakey, des artefacts swahilis et des reliques de la lutte pour l'indépendance, logés dans un bâtiment offert par le roi George V. Ses collections ethnologiques et archéologiques, ainsi que ses expositions de l'ère coloniale, en font un dépôt culturel complet."
                    },
                    "village-museum": {
                        title: "Musée du Village (Dar es Salaam)",
                        description: "Le Musée du Village à Dar es Salaam est une exposition en plein air présentant des maisons traditionnelles de plus de 20 tribus tanzaniennes, construites avec des matériaux authentiques comme la boue et le chaume. Établi en 1967, il propose des démonstrations en direct d'artisanat, de danses et de la vie quotidienne, préservant les cultures indigènes diversifiées du pays. Situé dans un jardin luxuriant, c'est une expérience éducative et immersive."
                    },
                    "nyerere-museum": {
                        title: "Musée Nyerere (Butiama, Mara)",
                        description: "Le musée Nyerere à Butiama, lieu de naissance de Julius Nyerere, rend hommage au premier président de la Tanzanie (Mwalimu). Ouvert en 1999, il expose ses effets personnels, photographies et documents de son leadership pendant le mouvement d'indépendance et la politique socialiste Ujamaa. Le site inclut sa maison familiale et sa tombe, offrant un regard personnel sur un héros national."
                    },
                    "nyerere-memorial": {
                        title: "Maison Mémorial Mwalimu Nyerere (Zanzibar)",
                        description: "La Maison Mémorial Mwalimu Nyerere à Zanzibar commémore les contributions de Julius Nyerere à l'unité et à l'indépendance de la Tanzanie. Cette résidence modeste, où il a séjourné, présente des expositions de ses écrits, photos et souvenirs. Elle met en lumière son rôle dans la fusion du Tanganyika et de Zanzibar en Tanzanie, soulignant son héritage de paix et d'égalité."
                    },
                    "arusha": {
                        title: "Centre du Patrimoine Culturel d'Arusha",
                        description: "Le Centre du Patrimoine Culturel d'Arusha est un centre vibrant pour l'art et l'histoire tanzaniens, présentant des galeries de sculptures, peintures et artefacts de tout le pays. Établi en 1994, il met en valeur le travail de perles maasai, les sculptures makonde et des expositions historiques dans un bâtiment triangulaire frappant. Il sert également de marché pour l'artisanat local, mêlant culture et commerce."
                    },
                    "balai": {
                        title: "Temple Hindou Balai (Zanzibar & Dar es Salaam)",
                        description: "Les temples hindous Balai à Zanzibar et Dar es Salaam servent la diaspora indienne de Tanzanie, reflétant leur patrimoine culturel et spirituel. Construits au début du XXe siècle, ces temples présentent des sculptures ornées et des intérieurs vibrants typiques de l'architecture sud-indienne. Ils accueillent des festivals comme Diwali et restent des lieux de culte actifs, symbolisant la diversité des communautés urbaines de Tanzanie."
                    },
                    "kizimkazi": {
                        title: "Mosquée de Kizimkazi (Zanzibar)",
                        description: "La mosquée de Kizimkazi, construite en 1107 sur la côte sud de Zanzibar, est l'une des plus anciennes structures islamiques d'Afrique de l'Est. Commandée par des colons perses, son mihrab porte des inscriptions kufiques, une caractéristique rare dans la région. Restaurée au fil des siècles, elle reflète la simplicité architecturale swahilie et l'influence musulmane précoce, située près d'un village connu pour les observations de dauphins."
                    }
                }
            }
        },
        es: {
            translation: {
                page: { title: "Detalles del Sitio - Sitios Culturales de Tanzania" },
                nav: { back: "Volver a Inicio" },
                gallery: { title: "Galería" },
                video: { title: "Video" },
                footer: { copyright: "© {{year}} Wendo Safari. Todos los derechos reservados." },
                error: {
                    not_found: "Sitio No Encontrado",
                    not_loaded: "El sitio solicitado no pudo ser encontrado."
                },
                sites: {
                    "stone-town": {
                        title: "Stone Town (Zanzíbar)",
                        description: "Stone Town, ubicada en la isla de Zanzíbar, es un sitio del Patrimonio Mundial de la UNESCO inscrito en 2000. Esta ciudad histórica ejemplifica una fusión de culturas suajili, árabe, india y europea, evidente en sus estrechas calles sinuosas, edificios de piedra de coral y mercados bulliciosos. Los monumentos clave incluyen el Viejo Fuerte, construido por árabes omaníes en el siglo XVII, la Casa de las Maravillas, un antiguo palacio de un sultán, y el sitio del antiguo mercado de esclavos, ahora un conmovedor memorial. Una vez un próspero centro para el comercio de especias y esclavos, la arquitectura de Stone Town presenta puertas de madera intrincadamente talladas y verandas, reflejando su rica historia comercial a lo largo de la costa del océano Índico."
                    },
                    "kondoa": {
                        title: "Cuevas de Arte Rupestre de Kondoa",
                        description: "Los sitios de arte rupestre de Kondoa, inscritos como sitio del Patrimonio Mundial de la UNESCO en 2006, consisten en más de 150 refugios rocosos naturales en el centro de Tanzania adornados con pinturas antiguas. Datadas alrededor del 2,000 a.C., estas obras fueron creadas por comunidades de cazadores-recolectores y representan animales (jirafas, elefantes), figuras humanas y símbolos abstractos. Las pinturas, realizadas con pigmentos rojos y blancos, ofrecen una ventana a la vida, rituales y creencias prehistóricas. Ubicados en la región de Kondoa, los sitios abarcan una vasta área y se conservan en paisajes accidentados, lo que los convierte en una de las colecciones de arte rupestre más importantes de África."
                    },
                    "kilwa-songo": {
                        title: "Ruinas de Kilwa Kisiwani y Songo Mnara",
                        description: "Inscritas en 1981 como sitio del Patrimonio Mundial de la UNESCO, las ruinas de Kilwa Kisiwani y Songo Mnara en la costa sur de Tanzania son vestigios de dos puertos comerciales suajili prósperos desde el siglo IX al XIX. Kilwa Kisiwani, una vez un poderoso sultanato, controlaba las rutas comerciales de oro hacia Zimbabue y acuñaba sus propias monedas. Las estructuras notables incluyen la Gran Mezquita (siglo XI), el palacio Husuni Kubwa y casas de piedra de coral. Songo Mnara, una isla más pequeña, presenta una arquitectura doméstica bien conservada. Estos sitios muestran la ingeniería suajili y su papel como puente cultural entre África, Arabia y Asia."
                    },
                    "olduvai": {
                        title: "Garganta de Olduvai (Ngorongoro)",
                        description: "La garganta de Olduvai, dentro del Área de Conservación de Ngorongoro, es uno de los sitios paleoantropológicos más importantes del mundo. Conocida como la 'Cuna de la Humanidad', ha producido fósiles de homínidos tempranos como Homo habilis y Paranthropus boisei, descubiertos por Louis y Mary Leakey a mediados del siglo XX. Abarcando casi 2 millones de años de evolución humana, los sedimentos estratificados de la garganta conservan herramientas, huesos y evidencia de actividad humana temprana. Su paisaje dramático, tallado por la erosión, revela una línea temporal geológica estudiada globalmente, complementada por el cercano Museo de la Garganta de Olduvai."
                    },
                    "laetoli": {
                        title: "Huellas de Laetoli (Ngorongoro)",
                        description: "Las huellas de Laetoli, descubiertas en 1976 por Mary Leakey cerca de Ngorongoro, son un hallazgo arqueológico notable: impresiones de 3.6 millones de años de Australopithecus afarensis preservadas en ceniza volcánica. Estas 70 huellas, que se extienden por 27 metros, proporcionan la evidencia más temprana de bipedalismo en los ancestros humanos. El sitio incluye rastros de tres individuos, probablemente una familia, caminando erguidos, ofreciendo profundas perspectivas sobre la evolución humana. Protegido bajo una cubierta de conservación, Laetoli sigue siendo un testimonio de nuestros orígenes antiguos, con réplicas exhibidas en museos de todo el mundo."
                    },
                    "isimila": {
                        title: "Sitio de la Edad de Piedra de Isimila (Iringa)",
                        description: "Ubicado cerca de Iringa, el sitio de la Edad de Piedra de Isimila data de hace más de 60,000 años, presentando una gama de herramientas de piedra achelenses como hachas de mano y cuchillas. Descubierto en la década de 1950, los pilares de arenisca tallados por la erosión del sitio añaden un elemento natural impactante a su importancia arqueológica. Las excavaciones revelan evidencia de habitación humana temprana, incluyendo huesos de animales que sugieren prácticas de caza. Isimila ofrece una rara visión de la Edad de Piedra Media en África Oriental, combinando belleza natural con historia prehistórica."
                    },
                    "bagamoyo": {
                        title: "Ciudad de Bagamoyo",
                        description: "Bagamoyo, una ciudad costera al norte de Dar es Salaam, fue un centro pivotal para el comercio de esclavos y marfil en el siglo XIX bajo el dominio árabe y alemán. Su nombre, que significa 'deja tu corazón', refleja la desesperación de las personas esclavizadas. Los sitios clave incluyen la Misión del Espíritu Santo (década de 1870), con su iglesia y museo, el Boma alemán (edificio administrativo) y las ruinas de Kaole cercanas. La arquitectura colonial y la importancia histórica de Bagamoyo lo convierten en un hito cultural conmovedor."
                    },
                    "kaole": {
                        title: "Ruinas de Kaole (Bagamoyo)",
                        description: "Justo al sur de Bagamoyo, las ruinas de Kaole datan del siglo XIII, mostrando la civilización costera suajili. El sitio cuenta con una mezquita bien conservada, tumbas influenciadas por los persas con árboles baobab y restos de un asentamiento comercial próspero. Una vez vinculado a la red comercial de Kilwa, las estructuras de piedra de coral de Kaole reflejan estilos arquitectónicos islámicos y persas, ofreciendo perspectivas sobre la cultura y el comercio costero temprano antes de su declive en el siglo XVI."
                    },
                    "mikindani": {
                        title: "Mikindani (Mtwara)",
                        description: "Mikindani, una ciudad costera en Mtwara, prosperó como puerto comercial suajili antes de convertirse en un puesto colonial alemán a finales del siglo XIX. El Boma alemán, un edificio administrativo fortificado, se destaca como pieza central, junto con casas influenciadas por los árabes y un sitio histórico de mercado de esclavos. Su pintoresca bahía y calles tranquilas preservan una mezcla de herencia suajili, árabe y europea, convirtiéndolo en una joya menos conocida de la costa tanzaniana."
                    },
                    "ujiji": {
                        title: "Ujiji (Kigoma)",
                        description: "Ujiji, en el lago Tanganika, es famoso por el encuentro de 1871 entre Henry Morton Stanley y el Dr. David Livingstone, marcado por un monumento bajo un árbol de mango. Un puesto comercial árabe-suajili en el siglo XIX, facilitaba el intercambio de bienes a través de África Central. El Museo Livingstone y las casas tradicionales cercanas destacan su papel histórico y su pasado multicultural, situados contra la pintoresca orilla del lago."
                    },
                    "maasai": {
                        title: "Pueblos Maasai (Arusha y Manyara)",
                        description: "Dispersos por las regiones de Arusha y Manyara, los pueblos maasai ofrecen una experiencia inmersiva en el estilo de vida pastoral del pueblo maasai. Conocidos por su distintiva vestimenta roja, trabajos de cuentas intrincados y tradiciones guerreras, los maasai mantienen prácticas seminómadas de pastoreo de ganado. Los visitantes pueden presenciar danzas tradicionales como el Adumu (danza de salto), explorar bomas de barro y estiércol (viviendas) y aprender sobre su resiliencia frente a la modernización."
                    },
                    "hadzabe": {
                        title: "Tribus Hadzabe y Datoga (Lago Eyasi)",
                        description: "Cerca del lago Eyasi, las tribus Hadzabe y Datoga representan algunas de las últimas comunidades de cazadores-recolectores y pastores de África. Los Hadzabe, con menos de 1,000 miembros, cazan con arcos y flechas, viviendo de la tierra con posesiones mínimas. Los Datoga, hábiles metalúrgicos, elaboran herramientas y joyas. Sus estilos de vida tradicionales, idioma (basado en clics para los Hadzabe) y coexistencia con la naturaleza ofrecen una rara visión de los métodos de supervivencia antiguos."
                    },
                    "sukuma": {
                        title: "Museo Sukuma (Bujora, Mwanza)",
                        description: "Ubicado en Bujora cerca de Mwanza, el Museo Sukuma celebra la cultura del grupo étnico más grande de Tanzania, los Sukuma. Establecido en 1968, presenta casas tradicionales, insignias reales y artefactos como tambores utilizados en la danza Bagika. El museo preserva la historia de los Sukuma, incluyendo sus tradiciones agrícolas y pesqueras, y organiza actuaciones de la famosa danza de la serpiente, mostrando su vibrante herencia."
                    },
                    "makonde": {
                        title: "Pueblos de Tallado Makonde (Mtwara y Lindi)",
                        description: "En las regiones de Mtwara y Lindi en el sur de Tanzania, los pueblos Makonde son reconocidos por sus intrincados tallados en madera. El pueblo Makonde elabora esculturas Ujamaa (árbol familiar) y figuras abstractas de ébano, una tradición que data de siglos. Estas obras de arte a menudo representan espíritus, ancestros o temas sociales, vendidas globalmente. Los visitantes pueden observar a los artesanos en acción y explorar su cultura matrilineal en entornos rurales."
                    },
                    "ikombe": {
                        title: "Pueblo Cultural Ikombe (Rukwa)",
                        description: "Ikombe, en la región de Rukwa, preserva las tradiciones del pueblo Fipa, conocido por su hogar único en una meseta. El pueblo cuenta con cabañas tradicionales, sesiones de narración de cuentos y artesanías como alfarería y tejido de cestas. La herencia agrícola de los Fipa, incluyendo el cultivo de mijo, y sus historias orales de migración desde África Central enriquecen esta experiencia cultural en medio de un paisaje pintoresco."
                    },
                    "german-boma": {
                        title: "Boma Alemán (Bagamoyo e Iringa)",
                        description: "Construidos durante el dominio colonial alemán (1885–1919), los Bomas alemanes en Bagamoyo e Iringa sirvieron como cuarteles administrativos y militares. Estos edificios de piedra robustos, como el Boma de Mikindani (usado aquí para imágenes), presentan un diseño europeo con paredes gruesas y ventanas arqueadas. En Bagamoyo, supervisaba el comercio costero; en Iringa, controlaba las regiones interiores. Hoy, se mantienen como reliquias del pasado colonial de Tanzania, a menudo reutilizadas para uso local."
                    },
                    "askari": {
                        title: "Monumento Askari (Dar es Salaam)",
                        description: "El Monumento Askari, inaugurado en 1927 en Dar es Salaam, honra a los soldados africanos (askaris) que lucharon por Gran Bretaña en la Primera Guerra Mundial. Esta estatua de bronce, que representa a un soldado con un rifle, se encuentra en una rotonda concurrida, simbolizando el sacrificio colonial. Creada por James Alexander Stevenson, refleja tanto un tributo como el complejo legado del dominio colonial en Tanzania, rodeada por la vida urbana moderna."
                    },
                    "azania": {
                        title: "Iglesia Luterana Azania Front (Dar es Salaam)",
                        description: "Construida en 1898 por misioneros alemanes, la Iglesia Luterana Azania Front en Dar es Salaam es un impresionante edificio de estilo gótico con un tejado de tejas rojas y arcos apuntados. Con vistas al puerto, fue la primera iglesia permanente en la ciudad, sirviendo a los colonos alemanes y más tarde a la comunidad luterana local. Su importancia histórica y belleza arquitectónica la convierten en un hito del patrimonio colonial y religioso."
                    },
                    "old-fort": {
                        title: "Viejo Fuerte (Zanzíbar)",
                        description: "El Viejo Fuerte, o Ngome Kongwe, en la Stone Town de Zanzíbar fue construido a finales del siglo XVII por árabes omaníes para defenderse de los ataques portugueses. Esta fortaleza de piedra de coral, con sus gruesas paredes y cañones, sirvió más tarde como prisión y terminal ferroviaria. Hoy, alberga eventos culturales, incluido el Festival Internacional de Cine de Zanzíbar, combinando historia con vitalidad moderna."
                    },
                    "st-joseph": {
                        title: "Catedral de San José (Dar es Salaam)",
                        description: "La Catedral de San José, completada en 1897 por misioneros alemanes, es una iglesia católica de estilo gótico en Dar es Salaam. Sus torres gemelas, vitrales e interior ornamentado reflejan la influencia arquitectónica europea. Ubicada cerca del puerto, sigue siendo un lugar de culto activo y un símbolo histórico del patrimonio cristiano colonial de Tanzania, atrayendo a visitantes por su serena belleza."
                    },
                    "national-museum": {
                        title: "Museo Nacional (Dar es Salaam)",
                        description: "El Museo Nacional y Casa de la Cultura en Dar es Salaam, fundado en 1940, narra la rica historia de Tanzania. Las exposiciones incluyen fósiles de la garganta de Olduvai de Leakey, artefactos suajili y reliquias de la lucha por la independencia, alojados en un edificio donado por el rey Jorge V. Sus colecciones etnológicas y arqueológicas, junto con exhibiciones de la era colonial, lo convierten en un repositorio cultural completo."
                    },
                    "village-museum": {
                        title: "Museo del Pueblo (Dar es Salaam)",
                        description: "El Museo del Pueblo en Dar es Salaam es una exposición al aire libre que muestra casas tradicionales de más de 20 tribus tanzanianas, construidas con materiales auténticos como barro y paja. Establecido en 1967, ofrece demostraciones en vivo de artesanías, danzas y vida diaria, preservando las diversas culturas indígenas del país. Situado en un jardín exuberante, es una experiencia educativa e inmersiva."
                    },
                    "nyerere-museum": {
                        title: "Museo Nyerere (Butiama, Mara)",
                        description: "El Museo Nyerere en Butiama, lugar de nacimiento de Julius Nyerere, honra al primer presidente de Tanzania (Mwalimu). Inaugurado en 1999, exhibe sus pertenencias personales, fotografías y documentos de su liderazgo durante el movimiento de independencia y la política socialista Ujamaa. El sitio incluye su casa familiar y tumba, ofreciendo una mirada personal a un héroe nacional."
                    },
                    "nyerere-memorial": {
                        title: "Casa Memorial Mwalimu Nyerere (Zanzíbar)",
                        description: "La Casa Memorial Mwalimu Nyerere en Zanzíbar conmemora las contribuciones de Julius Nyerere a la unidad e independencia de Tanzania. Esta modesta residencia, donde una vez se quedó, presenta exhibiciones de sus escritos, fotos y recuerdos. Destaca su papel en la fusión de Tanganyika y Zanzíbar en Tanzania, enfatizando su legado de paz e igualdad."
                    },
                    "arusha": {
                        title: "Centro del Patrimonio Cultural de Arusha",
                        description: "El Centro del Patrimonio Cultural de Arusha es un vibrante centro para el arte y la historia tanzaniana, presentando galerías de esculturas, pinturas y artefactos de todo el país. Establecido en 1994, muestra trabajos de cuentas maasai, tallados makonde y exhibiciones históricas en un impresionante edificio triangular. También sirve como mercado para artesanías locales, combinando cultura con comercio."
                    },
                    "balai": {
                        title: "Templo Hindú Balai (Zanzíbar y Dar es Salaam)",
                        description: "Los templos hindúes Balai en Zanzíbar y Dar es Salaam sirven a la diáspora india de Tanzania, reflejando su patrimonio cultural y espiritual. Construidos a principios del siglo XX, estos templos presentan tallados ornamentados e interiores vibrantes típicos de la arquitectura del sur de India. Albergan festivales como Diwali y siguen siendo sitios de culto activos, simbolizando la diversidad de las comunidades urbanas de Tanzania."
                    },
                    "kizimkazi": {
                        title: "Mezquita de Kizimkazi (Zanzíbar)",
                        description: "La Mezquita de Kizimkazi, construida en 1107 en la costa sur de Zanzíbar, es una de las estructuras islámicas más antiguas de África Oriental. Encargada por colonos persas, su mihrab lleva inscripciones kufic, una característica rara en la región. Restaurada a lo largo de los siglos, refleja la simplicidad arquitectónica suajili y la influencia musulmana temprana, situada cerca de un pueblo conocido por avistamientos de delfines."
                    }
                }
            }
        },
        sw: {
            translation: {
                page: { title: "Maelezo ya Tovuti - Tovuti za Utamaduni za Tanzania" },
                nav: { back: "Rudi Nyumbani" },
                gallery: { title: "Matunzio" },
                video: { title: "Video" },
                footer: { copyright: "© {{year}} Wendo Safari. Haki Zote Zimehifadhiwa." },
                error: {
                    not_found: "Tovuti Haikupatikana",
                    not_loaded: "Tovuti iliyoombwa haikuweza kupatikana."
                },
                sites: {
                    "stone-town": {
                        title: "Stone Town (Zanzibar)",
                        description: "Stone Town, iliyoko kwenye Kisiwa cha Zanzibar, ni Tovuti ya Urithi wa Dunia ya UNESCO iliyosajiliwa mwaka 2000. Mji huu wa kihistoria unaonyesha mchanganyiko wa tamaduni za Kiswahili, Kiarabu, Kihindi, na Ulaya, unaoonekana katika mitaa yake nyembamba inayopinda, majengo ya mawe ya matumbawe, na masoko yenye shughuli nyingi. Alama za msingi ni pamoja na Ngome ya Kale, iliyojengwa na Waarabu wa Omani katika karne ya 17, Nyumba ya Maajabu, ikulu ya zamani ya sultani, na tovuti ya zamani ya soko la watumwa, ambayo sasa ni ukumbusho wa kuhuzunisha. Zamani ilikuwa kitovu kilichostawi cha biashara ya viungo na watumwa, usanifu wa Stone Town unaangazia milango ya mbao iliyochongwa kwa ustadi na veranda, ikionyesha historia yake tajiri ya biashara kwenye pwani ya Bahari ya Hindi.",
                        image: "https://www.foreverafricasafari.com/wp-content/uploads/2022/08/fuerte-stone-town-zanzibar.jpg",
                        gallery: [
                            "https://blog.tanzaniaodyssey.com/wp-content/uploads/2013/03/Birds-Eye-Stone-Town.jpg",
                            "https://blog.tanzaniaodyssey.com/wp-content/uploads/2013/03/Boat-1.jpg"
                        ],
                        video: "https://www.youtube.com/embed/F9GDrzlWq9Q"
                    },
                    "kondoa": {
                        title: "Mapango ya Sanaa ya Mwamba ya Kondoa",
                        description: "Tovuti za Sanaa ya Mwamba za Kondoa, zilizosajiliwa kama Tovuti ya Urithi wa Dunia ya UNESCO mwaka 2006, zina zaidi ya mapango 150 ya asili ya mwamba katika Tanzania ya kati yaliyopambwa na michoro ya kale. Yakianzia karibu 2,000 KK, kazi hizi za sanaa ziliundwa na jamii za wawindaji-wakusanyaji na zinaonyesha wanyama (twiga, tembo), watu, na alama za kufikirika. Michoro hiyo, iliyofanywa kwa rangi za manjano na nyeupe, inatoa dirisha la maisha, mila, na imani za kihistoria. Ziko katika mkoa wa Kondoa, tovuti hizi zinashughulikia eneo kubwa na zimehifadhiwa katika mandhari ya miamba, zikifanya kuwa moja ya mkusanyiko muhimu zaidi wa sanaa ya mwamba barani Afrika.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Kondoa_Rock_Art_Site_07.jpg",
                        gallery: ["https://serengetinationalparksafaris.com/wp-content/uploads/2023/02/dtybca.jpg"],
                        video: "https://www.youtube.com/embed/7vX8z5Z3vQw"
                    },
                    "kilwa-songo": {
                        title: "Magofu ya Kilwa Kisiwani na Songo Mnara",
                        description: "Yaliyosajiliwa mwaka 1981 kama Tovuti ya Urithi wa Dunia ya UNESCO, magofu ya Kilwa Kisiwani na Songo Mnara kwenye pwani ya kusini ya Tanzania ni mabaki ya bandari mbili za Biashara za Kiswahili zilizostawi kutoka karne ya 9 hadi 19. Kilwa Kisiwani, ambayo zamani ilikuwa usultani wenye nguvu, ilidhibiti njia za Biashara za dhahabu hadi Zimbabwe na kuchapa sarafu zake. Miundo mashuhuri ni pamoja na Msikiti Mkuu (karne ya 11), ikulu ya Husuni Kubwa, na nyumba za mawe ya matumbawe. Songo Mnara, kisiwa kidogo, ina usanifu wa makazi uliohifadhiwa vizuri. Tovuti hizi zinaonyesha uhandisi wa Kiswahili na jukumu lao kama daraja la kitamaduni kati ya Afrika, Arabia, na Asia.",
                        image: "https://whc.unesco.org/uploads/thumbs/news_1147-1200-630-20140617202313.jpg",
                        gallery: [
                            "https://www.tawa.go.tz/storage/app/uploads/public/627/272/141/627272141216e703775833.jpg",
                            "https://www.focuseastafricatours.com/wp-content/uploads/kilwa.jpg"
                        ],
                        video: "https://www.youtube.com/embed/XkKz8z5J5vE"
                    },
                    "olduvai": {
                        title: "Korongo la Olduvai (Ngorongoro)",
                        description: "Korongo la Olduvai, ndani ya Eneo la Hifadhi ya Ngorongoro, ni moja ya tovuti muhimu zaidi za paleoanthropolojia duniani. Inayojulikana kama 'Cradle of Mankind,' imetoa visukuku vya hominid za mapema kama Homo habilis na Paranthropus boisei, vilivyogunduliwa na Louis na Mary Leakey katikati ya karne ya 20. Inachukua karibu miaka milioni 2 ya mageuzi ya binadamu, safu za mchanga za korongo huhifadhi zana, mifupa, na ushahidi wa shughuli za binadamu za mapema. Mandhari yake ya kushangaza, iliyochongwa na mmomonyoko, inafunua rekodi ya jiolojia inayosomwa ulimwenguni, ikisaidiwa na Jumba la Makumbusho la Korongo la Olduvai lililo karibu.",
                        image: "https://www.ncaa.go.tz/wp-content/uploads/2022/08/Olduvai-Gorge3.jpg",
                        gallery: ["https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/o/l/olduvai_gorge4.jpg"],
                        video: "https://www.youtube.com/embed/0ZCaQJ74pNU"
                    },
                    "laetoli": {
                        title: "Nyayo za Laetoli (Ngorongoro)",
                        description: "Nyayo za Laetoli, zilizogunduliwa mwaka 1976 na Mary Leakey karibu na Ngorongoro, ni ugunduzi wa ajabu wa kiakiolojia: alama za miaka milioni 3.6 za Australopithecus afarensis zilizohifadhiwa kwenye majivu ya volkeno. Nyayo hizi 70, zinazopanuka zaidi ya mita 27, zinatopa ushahidi wa kwanza wa kutembea kwa miguu miwili kwa mababu za binadamu. Tovuti hiyo inajumuisha nyayo za watu watatu—labda familia—wakitembea wima, ikitoa maarifa ya kina juu ya mageuzi ya binadamu. Zimehifadhiwa chini ya kifuniko cha uhifadhi, Laetoli inabaki kama ushuhuda wa asili yetu ya kale, na nakala zake zinaonyeshwa katika makumbusho duniani kote.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Laetoli_Footprints_NCA_3.jpg",
                        gallery: ["https://www.africanmeccasafaris.com/wp-content/uploads/laetolifootprints.jpg"],
                        video: "https://www.youtube.com/embed/5z5z5z5z5z5"
                    },
                    "isimila": {
                        title: "Tovuti ya Zama za Mawe ya Isimila (Iringa)",
                        description: "Iko karibu na Iringa, Tovuti ya Zama za Mawe ya Isimila inarudi zaidi ya miaka 60,000, ikiangazia safu ya zana za mawe za Acheulean kama shoka za mkono na visu. Ilivyogunduliwa katika miaka ya 1950, nguzo za mawe za mchanga zilizochongwa na mmomonyoko wa tovuti hiyo zinaongeza kipengele cha asili kinachovutia kwa umuhimu wake wa kiakiolojia. Uchimbaji unafunua ushahidi wa makazi ya binadamu wa mapema, ikiwa ni pamoja na mifupa ya wanyama inayopendekeza mazoea ya uwindaji. Isimila inatoa mtazamo wa nadra wa Zama za Mawe za Kati katika Afrika Mashariki, ikichanganya uzuri wa asili na historia ya kabla ya historia.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Isimila.jpg/1200px-Isimila.jpg",
                        gallery: ["https://www.tanzania-experience.com/wp-content/uploads/2016/01/isimila-stone-age-featured.jpg"],
                        video: "https://www.youtube.com/embed/3z3z3z3z3z3"
                    },
                    "bagamoyo": {
                        title: "Mji wa Bagamoyo",
                        description: "Bagamoyo, mji wa pwani kaskazini mwa Dar es Salaam, ulikuwa kitovu cha msingi cha Biashara ya watumwa na pembe za ndovu katika karne ya 19 chini ya utawala wa Waarabu na Wajerumani. Jina lake, likimaanisha 'weka moyo wako chini,' linaonyesha kukata tamaa kwa watu waliotumwa. Tovuti za msingi ni pamoja na Misheni ya Roho Mtakatifu (miaka ya 1870), na kanisa lake na makumbusho, Boma ya Kijerumani (jengo la utawala), na Magofu ya Kaole yaliyo karibu. Usanifu wa Kikoloni wa Bagamoyo na umuhimu wake wa kihistoria hufanya iwe alama ya kitamaduni inayohuzunisha.",
                        image: "https://safarispartners.com/images/destinations/bagamoyo.jpg",
                        gallery: ["https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-fbb238a/tanzania-specialist.com/wp-content/uploads/2023/07/Bagamoyo-3.jpg"],
                        video: "https://www.youtube.com/embed/4z4z4z4z4z4"
                    },
                    "kaole": {
                        title: "Magofu ya Kaole (Bagamoyo)",
                        description: "Kusini mwa Bagamoyo, Magofu ya Kaole yanarudi karne ya 13, yakiangazia ustaarabu wa pwani wa Kiswahili. Tovuti hiyo ina msikiti uliohifadhiwa vizuri, makaburi yaliyoathiriwa na Waparsi yaliyo na miti ya mibuyu, na mabaki ya makazi ya Biashara yaliyostawi. Yaliyowahi kuunganishwa na mtandao wa Biashara wa Kilwa, miundo ya mawe ya matumbawe ya Kaole inaonyesha mitindo ya usanifu wa Kiislamu na Kiparsi, ikitoa maarifa juu ya utamaduni wa pwani na Biashara kabla ya kuporomoka kwake katika karne ya 16.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Bagamoyo/Kaole_Ruins_Bagamoyo_03.jpg",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/0/00/13th_century_Kaole_mosque.jpg"],
                        video: "https://www.youtube.com/embed/5z5z5z5z5z5"
                    },
                    "mikindani": {
                        title: "Mikindani (Mtwara)",
                        description: "Mikindani, mji wa pwani huko Mtwara, ulistawi kama bandari ya Biashara ya Kiswahili kabla ya kuwa kituo cha Kikoloni cha Kijerumani mwishoni mwa karne ya 19. Boma ya Kijerumani, jengo la utawala lililojengwa kwa nguvu, linasimama kama kitovu, pamoja na nyumba zilizochukua ushawishi wa Waarabu na tovuti ya kihistoria ya soko la watumwa. Ghuba yake ya kupendeza na mitaa yake ya utulivu huhifadhi mchanganyiko wa urithi wa Kiswahili, Kiarabu, na Ulaya, na kuifanya kuwa jiwe la thamani lisilojulikana sana la pwani ya Tanzania.",
                        image: "https://mikindani.com/wp-content/uploads/2015/08/Bay-6.jpg",
                        gallery: ["https://www.exploretanzania.nl/wp-content/uploads/2020/09/Mikindani-960x605-1.jpg"],
                        video: "https://www.youtube.com/embed/6z6z6z6z6z6"
                    },
                    "ujiji": {
                        title: "Ujiji (Kigoma)",
                        description: "Ujiji, kwenye Ziwa Tanganyika, inajulikana kwa mkutano wa 1871 wa Henry Morton Stanley na Dk. David Livingstone, ulioashiria na mnara chini ya mti wa embe. Kituo cha Biashara cha Kiarabu-Kiswahili katika karne ya 19, kilirahisisha ubadilishaji wa bidhaa kote Afrika ya Kati. Makumbusho ya Livingstone na nyumba za jadi zilizopo karibu zinaangazia jukumu lake la kihistoria na mazingira yake ya tamaduni nyingi, yaliyowekwa dhidi ya ufuo wa ziwa wa kupendeza.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Kigoma_Railway_Station%2C_Kigoma_Ward.jpg",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ujiji_2012_Tamino.jpg/640px-Ujiji_2012_Tamino.jpg"],
                        video: "https://www.youtube.com/embed/7z7z7z7z7z7"
                    },
                    "maasai": {
                        title: "Vijiji vya Wamaasai (Arusha na Manyara)",
                        description: "Vimetawanyika katika mikoa ya Arusha na Manyara, vijiji vya Wamaasai vinatoa uzoefu wa kina katika maisha ya kifugaji ya watu wa Maasai. Wanajulikana kwa mavazi yao ya kipekee ya rangi nyekundu, ushanga wa kina, na mila za wapiganaji, Wamaasai wanadumisha mazoea ya kuhama-hama ya kufuga ng’ombe. Wageni wanaweza kushuhudia ngoma za jadi kama Adumu (ngoma ya kuruka), kuchunguza boma za udongo na samadi (makazi), na kujifunza kuhusu ustahimilivu wao wakati wa kisasa.",
                        image: "https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-fbb238a/tanzania-specialist.com/wp-content/uploads/2023/08/visit-maasai-village-1.jpg",
                        gallery: ["https://www.arushacityguide.com/wp-content/uploads/2023/08/Arusha-Maasai-Village-Tour.jpg"],
                        video: "https://www.youtube.com/embed/8z8z8z8z8z8"
                    },
                    "hadzabe": {
                        title: "Makabila ya Hadzabe na Datoga (Ziwa Eyasi)",
                        description: "Karibu na Ziwa Eyasi, makabila ya Hadzabe na Datoga yanawakilisha baadhi ya jamii za mwisho za wawindaji-wakusanyaji na wafugaji barani Afrika. Hadzabe, walioko chini ya 1,000, wanawinda kwa mishale na visu, wakiishi kutoka ardhini kwa mali za chini kabisa. Datoga, wafundi wa chuma wenye ujuzi, wanaunda zana na vito. Maisha yao ya jadi, lugha (inayotegemea kubofya kwa Hadzabe), na kuishi pamoja na asili yanatoa mtazamo wa nadra wa mbinu za kuishi za kale.",
                        image: "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/h/a/hadzabe_in_tanzania_2.jpg",
                        gallery: ["https://idreamofafrica.com/wp-content/uploads/2018/04/hadza-of-lake-eyasi.jpg"],
                        video: "https://www.youtube.com/embed/9z9z9z9z9z9"
                    },
                    "sukuma": {
                        title: "Makumbusho ya Sukuma (Bujora, Mwanza)",
                        description: "Yako Bujora karibu na Mwanza, Makumbusho ya Sukuma yanasherehekea utamaduni wa kabila kubwa zaidi la Tanzania, Wasukuma. Yaliyoanzishwa mwaka 1968, yanaonyesha nyumba za jadi, alama za kifalme, na vitu kama ngoma zinazotumiwa katika ngoma ya Bagika. Makumbusho yanahifadhi historia ya Wasukuma, ikiwa ni pamoja na mila zao za kilimo na uvuvi, na yanahusisha maonyesho ya ngoma maarufu ya nyoka, yakiangazia urithi wao wa kupendeza.",
                        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/57/73/b7/sukuma-village-museum.jpg?w=1200&h=-1&s=1",
                        gallery: ["https://sukumamuseum.org/wp-content/uploads/royal-pavilion-5.4-1.jpg"],
                        video: "https://www.youtube.com/embed/0a0a0a0a0a0"
                    },
                    "makonde": {
                        title: "Vijiji vya Uchongaji vya Makonde (Mtwara na Lindi)",
                        description: "Katika mikoa ya Mtwara na Lindi kusini mwa Tanzania, vijiji vya Makonde vinajulikana kwa uchongaji wao wa mbao wa kina. Wamakonde wanaunda sanamu za Ujamaa (mti wa familia) na takwimu za kufikirika kutoka kwa mbao za mpingo, mila inayorudi karne nyingi. Kazi hizi za sanaa mara nyingi zinaonyesha mizimu, mababu, au mada za kijamii, zikiuza ulimwenguni. Wageni wanaweza kuwatazama mafundi wakifanya kazi na kuchunguza utamaduni wao wa mraba katika mazingira ya vijijini.",
                        image: "https://www.blackwoodconservation.org/wp-content/uploads/2019/04/Mak-Instrument-Players.jpg",
                        gallery: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTCtzUmzGt-FMVOfdODM8uPfpPxf33yRnHVZqjkmOHQbGNFxMbPAI2gKJb2mDAKf-sgubLd3SzMxxlI2uHXQqyfrCyNez0jFCLodDMWFJBp22cYA4_IPiXe2cwBp7ej3qSQVyLV2rf1aoJ/s640/makondecarver2.jpg"],
                        video: "https://www.youtube.com/embed/1b1b1b1b1b1"
                    },
                    "ikombe": {
                        title: "Kijiji cha Utamaduni cha Ikombe (Rukwa)",
                        description: "Ikombe, katika mkoa wa Rukwa, inahifadhi mila za Wafipa, wanaojulikana kwa nyumba yao ya kipekee ya tambarare. Kijiji hicho kinaangazia vibanda vya jadi, vipindi vya kusimulia hadithi, na ufundi kama ufinyanzi na ufundi wa vikapu. Urithi wa kilimo wa Wafipa, ikiwa ni pamoja na kilimo cha mtama, na historia zao za mdomo za uhamiaji kutoka Afrika ya Kati, hujenga uzoefu huu wa kitamaduni katikati ya mandhari ya kupendeza.",
                        image: "https://dailynews.co.tz/wp-content/uploads/2022/09/rukwa.jpg",
                        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzWfWaqgdlVWGfBcSaK0htjshVCPF33i_ZQ&s"],
                        video: "https://www.youtube.com/embed/2c2c2c2c2c2"
                    },
                    "german-boma": {
                        title: "Boma ya Kijerumani (Bagamoyo na Iringa)",
                        description: "Ilijengwa wakati wa utawala wa Kikoloni wa Kijerumani (1885–1919), Boma za Kijerumani huko Bagamoyo na Iringa zilitumika kama makao makuu ya utawala na jeshi. Majengo haya ya mawe yaliyo imara, kama Boma ya Mikindani (iliyotumika hapa kwa picha), yanaonyesha muundo wa Ulaya na kuta nene na madirisha ya tao. Huko Bagamoyo, ilisimamia Biashara ya pwani; huko Iringa, ilidhibiti mikoa ya ndani. Leo, zinawakilisha mabaki ya zamani ya Kikoloni ya Tanzania, mara nyingi zikibadilishwa kwa matumizi ya ndani.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Bagamoyo/German_Old_Boma_Bagamoyo_04.jpg",
                        gallery: ["https://www.traveladventures.org/countries/tanzania/images/bagamoyo03.jpg"],
                        video: "https://www.youtube.com/embed/3d3d3d3d3d3"
                    },
                    "askari": {
                        title: "Mnara wa Askari (Dar es Salaam)",
                        description: "Mnara wa Askari, uliozinduliwa mwaka 1927 huko Dar es Salaam, unawaenzi askari wa Kiafrika waliopigania Uingereza katika Vita vya Kwanza vya Dunia. Sanamu hii ya shaba, inayoonyesha askari aliyebeba bunduki, inasimama kwenye duara la trafiki lenye shughuli nyingi, ikiashiria kafara ya Kikoloni. Iliyoundwa na James Alexander Stevenson, inaonyesha ushukuru na urithi tata wa utawala wa Kikoloni huko Tanzania, ikizungukwa na maisha ya kisasa ya mijini.",
                        image: "https://appsaf.apieproject.com/news/wp-content/uploads/sites/29/2023/07/askari4-97cf8429cf61dd8d1e9eced76d9f9e01.jpeg",
                        gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/62/c5/db/caption.jpg?w=900&h=500&s=1"],
                        video: "https://www.youtube.com/embed/4e4e4e4e4e4"
                    },
                    "azania": {
                        title: "Kanisa la Kilutheri la Azania Front (Dar es Salaam)",
                        description: "Lililojengwa mwaka 1898 na wamishonari wa Kijerumani, Kanisa la Kilutheri la Azania Front huko Dar es Salaam ni jengo la kupendeza la mtindo wa Gothic lenye paa la vigae vyekundu na matao yaliyochongoka. Linatazama bandari, lilikuwa kanisa la kwanza la kudumu mjini, likiwahudumia wakoloni wa Kijerumani na baadaye jamii ya Kilutheri ya ndani. Umuhimu wake wa kihistoria na uzuri wa usanifu hufanya liwe alama ya urithi wa Kikoloni na wa kidini.",
                        image: "https://www.azaniafront.org/sites/default/files/styles/max660/public/dar_es_salaam-azania_sea_view%20%281%29.jpg?itok=V-9jbJSC",
                        gallery: ["https://img1.advisor.travel/fs440x440px-Azania_Front_Lutheran_Church_16.jpg"],
                        video: "https://www.youtube.com/embed/5f5f5f5f5f5"
                    },
                    "old-fort": {
                        title: "Ngome ya Kale (Zanzibar)",
                        description: "Ngome ya Kale, au Ngome Kongwe, katika Stone Town ya Zanzibar ilijengwa mwishoni mwa karne ya 17 na Waarabu wa Omani kujiweka salama dhidi ya mashambulizi ya Wareno. Ngome hii ya mawe ya matumbawe, yenye kuta nene na mizinga, baadaye ilitumika kama gereza na kituo cha reli. Leo, inahusisha matukio ya kitamaduni, ikiwa ni pamoja na Tamasha la Kimataifa la Filamu la Zanzibar, ikichanganya historia na nguvu za kisasa.",
                        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2d/0e/09.jpg",
                        gallery: ["https://media02.stockfood.com/largepreviews/MjIxMTExODM2OQ==/71326399-Old-Fort-AKA-Arab-Fort-or-Ngome-Kongwe-Stone-Town-Zanzibar-Unguja-Island-Tanzania.jpg"],
                        video: "https://www.youtube.com/embed/6g6g6g6g6g6"
                    },
                    "st-joseph": {
                        title: "Kanisa la Mtakatifu Joseph (Dar es Salaam)",
                        description: "Kanisa la Mtakatifu Joseph, lililokamilika mwaka 1897 na wamishonari wa Kijerumani, ni kanisa la Katoliki la mtindo wa Gothic huko Dar es Salaam. Minara yake miwili, vioo vya rangi, na mambo ya ndani yaliyopambwa yanaonyesha ushawishi wa usanifu wa Ulaya. Liko karibu na bandari, linabaki kuwa mahali pa ibada linalotumika na alama ya kihistoria ya urithi wa Kikristo wa Kikoloni wa Tanzania, likivutia wageni kwa uzuri wake wa amani.",
                        image: "https://3rdworldarchitecture.wordpress.com/wp-content/uploads/2018/05/tz_daressalaam_stjoseph_church.jpg",
                        gallery: ["https://travel-buddies.com/wp-content/uploads/2024/12/1_dar-es-salaam-history-and-architectural-tours.jpg"],
                        video: "https://www.youtube.com/embed/7h7h7h7h7h7"
                    },
                    "national-museum": {
                        title: "Makumbusho ya Kitaifa (Dar es Salaam)",
                        description: "Makumbusho ya Kitaifa na Nyumba ya Utamaduni huko Dar es Salaam, yaliyoanzishwa mwaka 1940, yanaandika historia tajiri ya Tanzania. Maonyesho yanajumuisha visukuku vya Korongo la Olduvai vya Leakey, vitu vya Kiswahili, na mabaki ya vita vya uhuru, vilivyowekwa katika jengo lililotolewa na Mfalme George V. Mkusanyiko wake wa kiethnolojia na kiakiolojia, pamoja na maonyesho ya enzi ya Kikoloni, hufanya iwe hazina ya kitamaduni iliyokamilika.",
                        image: "https://momaa.org/wp-content/uploads/2019/09/nmt-1024x568.png",
                        gallery: ["https://www.nmt.go.tz/uploads/historical-centers/98a47a7c044d4032f7074ebbf31841c3.jpeg"],
                        video: "https://www.youtube.com/embed/8i8i8i8i8i8"
                    },
                    "village-museum": {
                        title: "Makumbusho ya Kijiji (Dar es Salaam)",
                        description: "Makumbusho ya Kijiji huko Dar es Salaam ni maonyesho ya wazi yanayoonyesha nyumba za jadi kutoka zaidi ya makabila 20 ya Tanzania, zilizojengwa kwa vifaa vya asili kama udongo na nyasi. Yaliyoanzishwa mwaka 1967, yanatoa maonyesho ya moja kwa moja ya ufundi, ngoma, na maisha ya kila siku, yakihifadhi tamaduni za asili za nchi. Yaliyowekwa katika bustani yenye unyevu, ni uzoefu wa elimu na wa kina.",
                        image: "https://www.urtrips.com/wp-content/uploads/2023/04/Makumbusho-Village-Museum-Dar-ES-Salaam_2.jpg",
                        gallery: ["https://www.goshen.edu/wp-content/uploads/sites/20/2017/01/FJXS2812.jpg"],
                        video: "https://www.youtube.com/embed/9j9j9j9j9j9"
                    },
                    "nyerere-museum": {
                        title: "Makumbusho ya Nyerere (Butiama, Mara)",
                        description: "Makumbusho ya Nyerere huko Butiama, mahali pa kuzaliwa kwa Julius Nyerere, yanamudu Rais wa kwanza wa Tanzania (Mwalimu). Yaliyofunguliwa mwaka 1999, yanaonyesha vitu vyake vya kibinafsi, picha, na hati za uongozi wake wakati wa harakati za uhuru na sera ya Ujamaa ya ujamaa. Tovuti hiyo inajumuisha nyumba ya familia yake na kaburi, ikitoa mtazamo wa kibinafsi wa shujaa wa taifa.",
                        image: "https://gamilytours.wordpress.com/wp-content/uploads/2016/11/nyerere-museum.jpg?w=640",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/6/6c/Butiama_Museum.jpg"],
                        video: "https://www.youtube.com/embed/0k0k0k0k0k0"
                    },
                    "nyerere-memorial": {
                        title: "Nyumba ya Ukumbusho ya Mwalimu Nyerere (Zanzibar)",
                        description: "Nyumba ya Ukumbusho ya Mwalimu Nyerere huko Zanzibar inaadhimisha michango ya Julius Nyerere katika umoja na uhuru wa Tanzania. Makazi haya ya kawaida, ambapo aliwahi kukaa, yanaonyesha maandishi yake, picha, na vitu vya ukumbusho. Inasisitiza jukumu lake katika kuunganisha Tanganyika na Zanzibar kuwa Tanzania, ikiangazia urithi wake wa amani na usawa.",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgoHgOhXB6xtNbdI4FxV1yeYv3yqZssiCjg&s",
                        gallery: ["https://i0.wp.com/www.tanzania1.com/wp-content/uploads/2013/06/Nyerere-Memorial.png?fit=800%2C500&ssl=1"],
                        video: "https://www.youtube.com/embed/1l1l1l1l1l1"
                    },
                    "arusha": {
                        title: "Kituo cha Urithi wa Utamaduni cha Arusha",
                        description: "Kituo cha Urithi wa Utamaduni cha Arusha ni kitovu chenye nguvu cha sanaa na historia ya Tanzania, kikiangazia matunzio ya sanamu, michoro, na vitu kutoka kote nchini. Kilichoanzishwa mwaka 1994, kinaonyesha ushanga wa Wamaasai, uchongaji wa Wamakonde, na maonyesho ya kihistoria katika jengo la kipekee la pembetatu. Pia kinatumika kama soko la ufundi wa ndani, kikichanganya utamaduni na Biashara.",
                        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/82/3d/ef/caption.jpg?w=1200&h=-1&s=1",
                        gallery: ["https://i0.wp.com/www.bestoftanzaniasafaris.com/wp-content/uploads/2023/06/cultural-heritate-center-arusha.jpg?resize=980%2C550"],
                        video: "https://www.youtube.com/embed/2m2m2m2m2m2"
                    },
                    "balai": {
                        title: "Hekalu la Kihindu la Balai (Zanzibar na Dar es Salaam)",
                        description: "Mahekalu ya Kihindu ya Balai huko Zanzibar na Dar es Salaam yanawahudumia Wahindi walioko nje ya nchi wa Tanzania, yakiakisi urithi wao wa kitamaduni na kiroho. Yaliyojengwa mapema katika karne ya 20, mahekalu haya yanaonyesha michongo ya mapambo na mambo ya ndani yanayong’aa yanayofanana na usanifu wa Kusini mwa India. Yanahusisha sherehe kama Diwali na yanabaki kuwa maeneo ya ibada yanayotumika, yakiashiria utofauti wa jamii za mijini za Tanzania.",
                        image: "https://cdn.myportfolio.com/238f99c5-741c-4350-bad9-3ed13e2a2bbc/f79efd83-a70f-42f6-8ea1-c81eca9b81b4_rwc_90x0x1424x1068x1424.jpg?h=0f58bd2f070e6d233c76ce6c1e710b99",
                        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnReionHkAzZOfh4XucgOV1sDkYE5_5eav-Q&s"],
                        video: "https://www.youtube.com/embed/3n3n3n3n3n3"
                    },
                    "kizimkazi": {
                        title: "Msikiti wa Kizimkazi (Zanzibar)",
                        description: "Msikiti wa Kizimkazi, uliojengwa mwaka 1107 kwenye pwani ya kusini ya Zanzibar, ni moja ya miundo ya Kiislamu ya zamani zaidi Afrika Mashariki. Uliagizwa na wakaaji wa Kiparsi, mihrab yake inabeba maandishi ya Kufic, sifa adimu katika eneo hilo. Uliyorekebishwa kwa karne nyingi, unaonyesha unyenyekevu wa usanifu wa Kiswahili na ushawishi wa Kiislamu wa mapema, ukiwa karibu na kijiji kinachojulikana kwa kuonekana kwa pomboo.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kizimkazi01.jpg/1200px-Kizimkazi01.jpg",
                        gallery: ["https://img1.advisor.travel/1200x630px-Kizimkazi_Mosque_10.jpg"],
                        video: "https://www.youtube.com/embed/4o4o4o4o4o4"
                    }
                }
            }
        },
        de: {
            translation: {
                page: { title: "Detailseite - Kulturelle Stätten Tansanias" },
                nav: { back: "Zurück zur Startseite" },
                gallery: { title: "Galerie" },
                video: { title: "Video" },
                footer: { copyright: "© {{year}} Wendo Safari. Alle Rechte vorbehalten." },
                error: {
                    not_found: "Seite nicht gefunden",
                    not_loaded: "Die angeforderte Seite konnte nicht gefunden werden."
                },
                sites: {
                    "stone-town": {
                        title: "Stone Town (Sansibar)",
                        description: "Stone Town auf der Insel Sansibar ist eine UNESCO-Welterbestätte, die im Jahr 2000 eingetragen wurde. Diese historische Stadt verkörpert eine Verschmelzung von Swahili-, arabischen, indischen und europäischen Kulturen, erkennbar an ihren engen, gewundenen Gassen, Korallensteinbauten und lebhaften Märkten. Zu den wichtigsten Wahrzeichen gehören das Alte Fort, das im 17. Jahrhundert von omanischen Arabern erbaut wurde, das Haus der Wunder, ein ehemaliger Sultanspalast, und der ehemalige Sklavenmarkt, heute eine bewegende Gedenkstätte. Einst ein blühendes Zentrum für den Gewürz- und Sklavenhandel, zeichnet sich die Architektur von Stone Town durch kunstvoll geschnitzte Holztüren und Veranden aus, die ihre reiche Handelsgeschichte an der Küste des Indischen Ozeans widerspiegeln.",
                        image: "https://www.foreverafricasafari.com/wp-content/uploads/2022/08/fuerte-stone-town-zanzibar.jpg",
                        gallery: [
                            "https://blog.tanzaniaodyssey.com/wp-content/uploads/2013/03/Birds-Eye-Stone-Town.jpg",
                            "https://blog.tanzaniaodyssey.com/wp-content/uploads/2013/03/Boat-1.jpg"
                        ],
                        video: "https://www.youtube.com/embed/F9GDrzlWq9Q"
                    },
                    "kondoa": {
                        title: "Felsmalereien von Kondoa",
                        description: "Die Felsmalereien von Kondoa, die 2006 als UNESCO-Welterbestätte eingetragen wurden, umfassen über 150 natürliche Felsunterstände in Zentraltansania, die mit alten Gemälden geschmückt sind. Diese Kunstwerke, die auf etwa 2.000 v. Chr. datiert werden, wurden von Jäger-und-Sammler-Gemeinschaften geschaffen und zeigen Tiere (Giraffen, Elefanten), menschliche Figuren und abstrakte Symbole. Die in roten und weißen Pigmenten ausgeführten Gemälde bieten Einblicke in das prähistorische Leben, Rituale und Glaubensvorstellungen. In der Region Kondoa gelegen, erstrecken sich die Stätten über ein weites Gebiet und sind inmitten einer rauen Landschaft erhalten, was sie zu einer der bedeutendsten Felsmalereisammlungen Afrikas macht.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Kondoa_Rock_Art_Site_07.jpg",
                        gallery: ["https://serengetinationalparksafaris.com/wp-content/uploads/2023/02/dtybca.jpg"],
                        video: "https://www.youtube.com/embed/7vX8z5Z3vQw"
                    },
                    "kilwa-songo": {
                        title: "Ruinen von Kilwa Kisiwani und Songo Mnara",
                        description: "Die Ruinen von Kilwa Kisiwani und Songo Mnara an Tansanias Südküste, die 1981 als UNESCO-Welterbestätte eingetragen wurden, sind Überreste zweier wohlhabender Swahili-Handelshäfen vom 9. bis 19. Jahrhundert. Kilwa Kisiwani, einst ein mächtiges Sultanat, kontrollierte Goldhandelsrouten nach Simbabwe und prägte eigene Münzen. Zu den bemerkenswerten Strukturen gehören die Große Moschee (11. Jahrhundert), der Husuni Kubwa-Palast und Korallensteinhäuser. Songo Mnara, eine kleinere Insel, zeigt gut erhaltene Wohnarchitektur. Diese Stätten verdeutlichen die Swahili-Ingenieurskunst und ihre Rolle als kulturelle Brücke zwischen Afrika, Arabien und Asien.",
                        image: "https://whc.unesco.org/uploads/thumbs/news_1147-1200-630-20140617202313.jpg",
                        gallery: [
                            "https://www.tawa.go.tz/storage/app/uploads/public/627/272/141/627272141216e703775833.jpg",
                            "https://www.focuseastafricatours.com/wp-content/uploads/kilwa.jpg"
                        ],
                        video: "https://www.youtube.com/embed/XkKz8z5J5vE"
                    },
                    "olduvai": {
                        title: "Olduvai-Schlucht (Ngorongoro)",
                        description: "Die Olduvai-Schlucht im Ngorongoro-Konservierungsgebiet ist eine der weltweit wichtigsten paläoanthropologischen Stätten. Bekannt als „Wiege der Menschheit“, lieferte sie Fossilien früher Hominiden wie Homo habilis und Paranthropus boisei, entdeckt von Louis und Mary Leakey Mitte des 20. Jahrhunderts. Über fast 2 Millionen Jahre menschlicher Evolution hinweg bewahren die geschichteten Sedimente der Schlucht Werkzeuge, Knochen und Beweise früher menschlicher Aktivitäten. Ihre dramatische, durch Erosion geformte Landschaft enthüllt eine geologische Zeitleiste, die weltweit untersucht wird, ergänzt durch das nahegelegene Olduvai-Schlucht-Museum.",
                        image: "https://www.ncaa.go.tz/wp-content/uploads/2022/08/Olduvai-Gorge3.jpg",
                        gallery: ["https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/o/l/olduvai_gorge4.jpg"],
                        video: "https://www.youtube.com/embed/0ZCaQJ74pNU"
                    },
                    "laetoli": {
                        title: "Laetoli-Fußspuren (Ngorongoro)",
                        description: "Die Laetoli-Fußspuren, 1976 von Mary Leakey in der Nähe von Ngorongoro entdeckt, sind ein bemerkenswerter archäologischer Fund: 3,6 Millionen Jahre alte Abdrücke von Australopithecus afarensis, die in Vulkanasche erhalten sind. Diese 70 Fußspuren, die sich über 27 Meter erstrecken, liefern den frühesten Beweis für Bipedalismus bei menschlichen Vorfahren. Die Stätte umfasst Spuren von drei Individuen – vermutlich einer Familie – die aufrecht gehen und tiefe Einblicke in die menschliche Evolution bieten. Unter einem Schutzdach konserviert, bleibt Laetoli ein Zeugnis unserer alten Ursprünge, mit Repliken, die weltweit in Museen ausgestellt sind.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Laetoli_Footprints_NCA_3.jpg",
                        gallery: ["https://www.africanmeccasafaris.com/wp-content/uploads/laetolifootprints.jpg"],
                        video: "https://www.youtube.com/embed/5z5z5z5z5z5"
                    },
                    "isimila": {
                        title: "Steinzeitstätte Isimila (Iringa)",
                        description: "In der Nähe von Iringa gelegen, reicht die Steinzeitstätte Isimila über 60.000 Jahre zurück und zeigt eine Reihe von Acheulean-Steingeräten wie Handäxte und Beile. In den 1950er Jahren entdeckt, verleihen die durch Erosion geformten Sandsteinsäulen der Stätte ein markantes natürliches Element, das ihre archäologische Bedeutung unterstreicht. Ausgrabungen fördern Beweise für frühe menschliche Besiedlung zutage, einschließlich Tierknochen, die auf Jagdpraktiken hindeuten. Isimila bietet einen seltenen Einblick in die Mittlere Steinzeit in Ostafrika und verbindet natürliche Schönheit mit prähistorischer Geschichte.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Isimila.jpg/1200px-Isimila.jpg",
                        gallery: ["https://www.tanzania-experience.com/wp-content/uploads/2016/01/isimila-stone-age-featured.jpg"],
                        video: "https://www.youtube.com/embed/3z3z3z3z3z3"
                    },
                    "bagamoyo": {
                        title: "Stadt Bagamoyo",
                        description: "Bagamoyo, eine Küstenstadt nördlich von Daressalam, war im 19. Jahrhundert ein zentraler Knotenpunkt für den Sklaven- und Elfenbeinhandel unter arabischer und deutscher Herrschaft. Ihr Name, der „Leg dein Herz nieder“ bedeutet, spiegelt die Verzweiflung der versklavten Menschen wider. Zu den wichtigsten Stätten gehören die Heilig-Geist-Mission (1870er Jahre) mit ihrer Kirche und ihrem Museum, das deutsche Boma (Verwaltungsgebäude) und die nahegelegenen Kaole-Ruinen. Bagamoyos koloniale Architektur und historische Bedeutung machen es zu einem bewegenden kulturellen Wahrzeichen.",
                        image: "https://safarispartners.com/images/destinations/bagamoyo.jpg",
                        gallery: ["https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-fbb238a/tanzania-specialist.com/wp-content/uploads/2023/07/Bagamoyo-3.jpg"],
                        video: "https://www.youtube.com/embed/4z4z4z4z4z4"
                    },
                    "kaole": {
                        title: "Kaole-Ruinen (Bagamoyo)",
                        description: "Südlich von Bagamoyo stammen die Kaole-Ruinen aus dem 13. Jahrhundert und zeigen die Küstenzivilisation der Swahili. Die Stätte umfasst eine gut erhaltene Moschee, persisch beeinflusste Gräber mit Baobabbäumen und Überreste einer blühenden Handelsniederlassung. Einst mit dem Handelsnetzwerk von Kilwa verbunden, spiegeln die Korallensteinstrukturen von Kaole islamische und persische Architekturstile wider und bieten Einblicke in die frühe Küstenkultur und den Handel vor ihrem Niedergang im 16. Jahrhundert.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Bagamoyo/Kaole_Ruins_Bagamoyo_03.jpg",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/0/00/13th_century_Kaole_mosque.jpg"],
                        video: "https://www.youtube.com/embed/5z5z5z5z5z5"
                    },
                    "mikindani": {
                        title: "Mikindani (Mtwara)",
                        description: "Mikindani, eine Küstenstadt in Mtwara, blühte als Swahili-Handelshafen auf, bevor sie im späten 19. Jahrhundert ein deutscher Kolonialposten wurde. Das deutsche Boma, ein befestigtes Verwaltungsgebäude, steht im Mittelpunkt, neben arabisch beeinflussten Häusern und einer historischen Sklavenmarktstätte. Ihre malerische Bucht und ruhigen Straßen bewahren eine Mischung aus Swahili-, arabischem und europäischem Erbe und machen sie zu einem weniger bekannten Juwel an Tansanias Küste.",
                        image: "https://mikindani.com/wp-content/uploads/2015/08/Bay-6.jpg",
                        gallery: ["https://www.exploretanzania.nl/wp-content/uploads/2020/09/Mikindani-960x605-1.jpg"],
                        video: "https://www.youtube.com/embed/6z6z6z6z6z6"
                    },
                    "ujiji": {
                        title: "Ujiji (Kigoma)",
                        description: "Ujiji am Tanganjikasee ist berühmt für das Treffen von Henry Morton Stanley und Dr. David Livingstone im Jahr 1871, markiert durch ein Denkmal unter einem Mangobaum. Als arabisch-swahilischer Handelsposten im 19. Jahrhundert erleichterte es den Warenaustausch in Zentralafrika. Das Livingstone-Museum und nahegelegene traditionelle Häuser heben seine historische Rolle und multikulturelle Vergangenheit hervor, eingebettet in die malerische Kulisse des Seeufers.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Kigoma_Railway_Station%2C_Kigoma_Ward.jpg",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ujiji_2012_Tamino.jpg/640px-Ujiji_2012_Tamino.jpg"],
                        video: "https://www.youtube.com/embed/7z7z7z7z7z7"
                    },
                    "maasai": {
                        title: "Maasai-Dörfer (Arusha und Manyara)",
                        description: "Verstreut über die Regionen Arusha und Manyara bieten die Maasai-Dörfer ein intensives Erlebnis des pastoralen Lebensstils der Maasai. Bekannt für ihre markante rote Kleidung, aufwendige Perlenarbeiten und Kriegstraditionen, führen die Maasai eine halbnomadische Viehzucht. Besucher können traditionelle Tänze wie den Adumu (Sprungtanz) erleben, Lehm- und Dung-Bomas (Wohnhäuser) erkunden und mehr über ihre Widerstandsfähigkeit inmitten der Modernisierung erfahren.",
                        image: "https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-fbb238a/tanzania-specialist.com/wp-content/uploads/2023/08/visit-maasai-village-1.jpg",
                        gallery: ["https://www.arushacityguide.com/wp-content/uploads/2023/08/Arusha-Maasai-Village-Tour.jpg"],
                        video: "https://www.youtube.com/embed/8z8z8z8z8z8"
                    },
                    "hadzabe": {
                        title: "Hadzabe- und Datoga-Stämme (Eyasi-See)",
                        description: "In der Nähe des Eyasi-Sees repräsentieren die Hadzabe- und Datoga-Stämme einige der letzten Jäger-und-Sammler- sowie Hirtenvölker Afrikas. Die Hadzabe, weniger als 1.000 an der Zahl, jagen mit Pfeil und Bogen und leben mit minimalem Besitz von der Natur. Die Datoga, geschickte Metallarbeiter, stellen Werkzeuge und Schmuck her. Ihre traditionellen Lebensweisen, Sprache (klickbasiert bei den Hadzabe) und ihr Zusammenleben mit der Natur bieten einen seltenen Einblick in alte Überlebensmethoden.",
                        image: "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/h/a/hadzabe_in_tanzania_2.jpg",
                        gallery: ["https://idreamofafrica.com/wp-content/uploads/2018/04/hadza-of-lake-eyasi.jpg"],
                        video: "https://www.youtube.com/embed/9z9z9z9z9z9"
                    },
                    "sukuma": {
                        title: "Sukuma-Museum (Bujora, Mwanza)",
                        description: "In Bujora bei Mwanza gelegen, feiert das Sukuma-Museum die Kultur der größten ethnischen Gruppe Tansanias, der Sukuma. 1968 gegründet, zeigt es traditionelle Häuser, königliche Insignien und Artefakte wie Trommeln, die im Bagika-Tanz verwendet werden. Das Museum bewahrt die Geschichte der Sukuma, einschließlich ihrer Landwirtschafts- und Fischereitraditionen, und veranstaltet Aufführungen des berühmten Schlangentanzes, der ihr lebendiges Erbe zeigt.",
                        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/57/73/b7/sukuma-village-museum.jpg?w=1200&h=-1&s=1",
                        gallery: ["https://sukumamuseum.org/wp-content/uploads/royal-pavilion-5.4-1.jpg"],
                        video: "https://www.youtube.com/embed/0a0a0a0a0a0"
                    },
                    "makonde": {
                        title: "Makonde-Schnitzdörfer (Mtwara und Lindi)",
                        description: "In den südlichen Regionen Mtwara und Lindi Tansanias sind die Makonde-Dörfer bekannt für ihre aufwendigen Holzschnitzereien. Die Makonde schaffen Ujamaa-Skulpturen (Familienstammbäume) und abstrakte Figuren aus Ebenholz, eine Tradition, die Jahrhunderte zurückreicht. Diese Kunstwerke stellen oft Geister, Ahnen oder soziale Themen dar und werden weltweit verkauft. Besucher können Handwerkern bei der Arbeit zusehen und ihre matrilineare Kultur in ländlichen Umgebungen erkunden.",
                        image: "https://www.blackwoodconservation.org/wp-content/uploads/2019/04/Mak-Instrument-Players.jpg",
                        gallery: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTCtzUmzGt-FMVOfdODM8uPfpPxf33yRnHVZqjkmOHQbGNFxMbPAI2gKJb2mDAKf-sgubLd3SzMxxlI2uHXQqyfrCyNez0jFCLodDMWFJBp22cYA4_IPiXe2cwBp7ej3qSQVyLV2rf1aoJ/s640/makondecarver2.jpg"],
                        video: "https://www.youtube.com/embed/1b1b1b1b1b1"
                    },
                    "ikombe": {
                        title: "Kulturvillage Ikombe (Rukwa)",
                        description: "Ikombe in der Region Rukwa bewahrt die Traditionen der Fipa, bekannt für ihre einzigartige Heimat auf einem Plateau. Das Dorf zeigt traditionelle Hütten, Geschichtenerzählungen und Handwerkskunst wie Töpferei und Korbflechterei. Das landwirtschaftliche Erbe der Fipa, einschließlich des Hirseanbaus, und ihre mündlichen Überlieferungen von Migrationen aus Zentralafrika bereichern dieses kulturelle Erlebnis inmitten einer malerischen Landschaft.",
                        image: "https://dailynews.co.tz/wp-content/uploads/2022/09/rukwa.jpg",
                        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzWfWaqgdlVWGfBcSaK0htjshVCPF33i_ZQ&s"],
                        video: "https://www.youtube.com/embed/2c2c2c2c2c2"
                    },
                    "german-boma": {
                        title: "Deutsches Boma (Bagamoyo und Iringa)",
                        description: "Während der deutschen Kolonialherrschaft (1885–1919) erbaut, dienten die deutschen Bomas in Bagamoyo und Iringa als Verwaltungs- und Militärhauptquartiere. Diese robusten Steingebäude, wie das Boma in Mikindani (hier für Bilder verwendet), weisen europäisches Design mit dicken Wänden und Bogenfenstern auf. In Bagamoyo überwachte es den Küstenhandel, in Iringa kontrollierte es die Binnenregionen. Heute stehen sie als Relikte der kolonialen Vergangenheit Tansanias, oft für lokale Nutzung umfunktioniert.",
                        image: "https://www.tanzaniatourism.com/images/uploads/Bagamoyo/German_Old_Boma_Bagamoyo_04.jpg",
                        gallery: ["https://www.traveladventures.org/countries/tanzania/images/bagamoyo03.jpg"],
                        video: "https://www.youtube.com/embed/3d3d3d3d3d3"
                    },
                    "askari": {
                        title: "Askari-Denkmal (Daressalam)",
                        description: "Das Askari-Denkmal, 1927 in Daressalam enthüllt, ehrt afrikanische Soldaten (Askaris), die im Ersten Weltkrieg für Großbritannien kämpften. Diese Bronzestatue, die einen Soldaten mit Gewehr darstellt, steht an einem belebten Kreisverkehr und symbolisiert koloniale Opfer. Geschaffen von James Alexander Stevenson, spiegelt es sowohl Tribut als auch das komplexe Erbe der Kolonialherrschaft in Tansania wider, umgeben von modernem Stadtleben.",
                        image: "https://appsaf.apieproject.com/news/wp-content/uploads/sites/29/2023/07/askari4-97cf8429cf61dd8d1e9eced76d9f9e01.jpeg",
                        gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/62/c5/db/caption.jpg?w=900&h=500&s=1"],
                        video: "https://www.youtube.com/embed/4e4e4e4e4e4"
                    },
                    "azania": {
                        title: "Azania Front Lutherische Kirche (Daressalam)",
                        description: "1898 von deutschen Missionaren erbaut, ist die Azania Front Lutherische Kirche in Daressalam ein markantes gotisches Bauwerk mit rotem Ziegeldach und Spitzbögen. Mit Blick auf den Hafen war sie die erste dauerhafte Kirche der Stadt, die deutschen Siedlern und später der lokalen lutherischen Gemeinde diente. Ihre historische Bedeutung und architektonische Schönheit machen sie zu einem Wahrzeichen des kolonialen und religiösen Erbes.",
                        image: "https://www.azaniafront.org/sites/default/files/styles/max660/public/dar_es_salaam-azania_sea_view%20%281%29.jpg?itok=V-9jbJSC",
                        gallery: ["https://img1.advisor.travel/fs440x440px-Azania_Front_Lutheran_Church_16.jpg"],
                        video: "https://www.youtube.com/embed/5f5f5f5f5f5"
                    },
                    "old-fort": {
                        title: "Altes Fort (Sansibar)",
                        description: "Das Alte Fort, oder Ngome Kongwe, in Sansibars Stone Town wurde Ende des 17. Jahrhunderts von omanischen Arabern zur Verteidigung gegen portugiesische Angriffe erbaut. Diese Korallensteinfestung mit dicken Mauern und Kanonen diente später als Gefängnis und Bahnterminal. Heute beherbergt es kulturelle Veranstaltungen, einschließlich des Sansibar Internationalen Filmfestivals, und verbindet Geschichte mit moderner Vitalität.",
                        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2d/0e/09.jpg",
                        gallery: ["https://media02.stockfood.com/largepreviews/MjIxMTExODM2OQ==/71326399-Old-Fort-AKA-Arab-Fort-or-Ngome-Kongwe-Stone-Town-Zanzibar-Unguja-Island-Tanzania.jpg"],
                        video: "https://www.youtube.com/embed/6g6g6g6g6g6"
                    },
                    "st-joseph": {
                        title: "St. Josephs Kathedrale (Daressalam)",
                        description: "Die St. Josephs Kathedrale, 1897 von deutschen Missionaren fertiggestellt, ist eine gotische katholische Kirche in Daressalam. Ihre Zwillingsspitzen, Buntglasfenster und verzierter Innenraum spiegeln europäischen architektonischen Einfluss wider. In der Nähe des Hafens gelegen, bleibt sie ein aktiver Ort der Anbetung und ein historisches Symbol des kolonialen christlichen Erbes Tansanias, das Besucher mit ihrer ruhigen Schönheit anzieht.",
                        image: "https://3rdworldarchitecture.wordpress.com/wp-content/uploads/2018/05/tz_daressalaam_stjoseph_church.jpg",
                        gallery: ["https://travel-buddies.com/wp-content/uploads/2024/12/1_dar-es-salaam-history-and-architectural-tours.jpg"],
                        video: "https://www.youtube.com/embed/7h7h7h7h7h7"
                    },
                    "national-museum": {
                        title: "Nationalmuseum (Daressalam)",
                        description: "Das Nationalmuseum und Haus der Kultur in Daressalam, 1940 gegründet, dokumentiert die reiche Geschichte Tansanias. Die Ausstellungen umfassen Leakeys Olduvai-Schlucht-Fossilien, Swahili-Artefakte und Relikte aus dem Unabhängigkeitskampf, untergebracht in einem von König George V. gestifteten Gebäude. Seine ethnologischen und archäologischen Sammlungen sowie Ausstellungen aus der Kolonialzeit machen es zu einem umfassenden kulturellen Archiv.",
                        image: "https://momaa.org/wp-content/uploads/2019/09/nmt-1024x568.png",
                        gallery: ["https://www.nmt.go.tz/uploads/historical-centers/98a47a7c044d4032f7074ebbf31841c3.jpeg"],
                        video: "https://www.youtube.com/embed/8i8i8i8i8i8"
                    },
                    "village-museum": {
                        title: "Dorf-Museum (Daressalam)",
                        description: "Das Dorf-Museum in Daressalam ist eine Freilichtausstellung, die traditionelle Häuser von über 20 tansanischen Stämmen zeigt, gebaut aus authentischen Materialien wie Lehm und Stroh. 1967 gegründet, bietet es Live-Vorführungen von Handwerk, Tänzen und Alltagsleben, um die vielfältigen indigenen Kulturen des Landes zu bewahren. In einem üppigen Garten gelegen, ist es ein lehrreiches und immersives Erlebnis.",
                        image: "https://www.urtrips.com/wp-content/uploads/2023/04/Makumbusho-Village-Museum-Dar-ES-Salaam_2.jpg",
                        gallery: ["https://www.goshen.edu/wp-content/uploads/sites/20/2017/01/FJXS2812.jpg"],
                        video: "https://www.youtube.com/embed/9j9j9j9j9j9"
                    },
                    "nyerere-museum": {
                        title: "Nyerere-Museum (Butiama, Mara)",
                        description: "Das Nyerere-Museum in Butiama, dem Geburtsort von Julius Nyerere, ehrt Tansanias ersten Präsidenten (Mwalimu). 1999 eröffnet, zeigt es seine persönlichen Gegenstände, Fotos und Dokumente aus seiner Führungszeit während der Unabhängigkeitsbewegung und der sozialistischen Ujamaa-Politik. Die Stätte umfasst sein Familienhaus und Grab und bietet einen persönlichen Einblick in einen nationalen Helden.",
                        image: "https://gamilytours.wordpress.com/wp-content/uploads/2016/11/nyerere-museum.jpg?w=640",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/6/6c/Butiama_Museum.jpg"],
                        video: "https://www.youtube.com/embed/0k0k0k0k0k0"
                    },
                    "nyerere-memorial": {
                        title: "Mwalimu Nyerere Gedenkhaus (Sansibar)",
                        description: "Das Mwalimu Nyerere Gedenkhaus in Sansibar gedenkt Julius Nyereres Beiträgen zur Einheit und Unabhängigkeit Tansanias. Diese bescheidene Unterkunft, in der er einst wohnte, zeigt Ausstellungen seiner Schriften, Fotos und Erinnerungsstücke. Es hebt seine Rolle bei der Vereinigung von Tanganjika und Sansibar zu Tansania hervor und betont sein Vermächtnis von Frieden und Gleichheit.",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgoHgOhXB6xtNbdI4FxV1yeYv3yqZssiCjg&s",
                        gallery: ["https://i0.wp.com/www.tanzania1.com/wp-content/uploads/2013/06/Nyerere-Memorial.png?fit=800%2C500&ssl=1"],
                        video: "https://www.youtube.com/embed/1l1l1l1l1l1"
                    },
                    "arusha": {
                        title: "Kulturerbezentrum Arusha",
                        description: "Das Kulturerbezentrum Arusha ist ein lebendiges Zentrum für tansanische Kunst und Geschichte und zeigt Galerien mit Skulpturen, Gemälden und Artefakten aus dem ganzen Land. 1994 gegründet, präsentiert es Maasai-Perlenarbeiten, Makonde-Schnitzereien und historische Ausstellungen in einem markanten dreieckigen Gebäude. Es dient auch als Marktplatz für lokales Handwerk und verbindet Kultur mit Handel.",
                        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/82/3d/ef/caption.jpg?w=1200&h=-1&s=1",
                        gallery: ["https://i0.wp.com/www.bestoftanzaniasafaris.com/wp-content/uploads/2023/06/cultural-heritate-center-arusha.jpg?resize=980%2C550"],
                        video: "https://www.youtube.com/embed/2m2m2m2m2m2"
                    },
                    "balai": {
                        title: "Balai Hindu-Tempel (Sansibar und Daressalam)",
                        description: "Die Balai Hindu-Tempel in Sansibar und Daressalam dienen Tansanias indischer Diaspora und spiegeln ihr kulturelles und spirituelles Erbe wider. Im frühen 20. Jahrhundert erbaut, zeigen diese Tempel verzierte Schnitzereien und lebendige Innenräume, typisch für die südindische Architektur. Sie veranstalten Feste wie Diwali und bleiben aktive Kultstätten, die die Vielfalt der städtischen Gemeinschaften Tansanias symbolisieren.",
                        image: "https://cdn.myportfolio.com/238f99c5-741c-4350-bad9-3ed13e2a2bbc/f79efd83-a70f-42f6-8ea1-c81eca9b81b4_rwc_90x0x1424x1068x1424.jpg?h=0f58bd2f070e6d233c76ce6c1e710b99",
                        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnReionHkAzZOfh4XucgOV1sDkYE5_5eav-Q&s"],
                        video: "https://www.youtube.com/embed/3n3n3n3n3n3"
                    },
                    "kizimkazi": {
                        title: "Kizimkazi-Moschee (Sansibar)",
                        description: "Die Kizimkazi-Moschee, 1107 an Sansibars Südküste erbaut, ist eine der ältesten islamischen Strukturen Ostafrikas. Von persischen Siedlern in Auftrag gegeben, trägt ihr Mihrab kufische Inschriften, ein seltenes Merkmal in der Region. Über Jahrhunderte restauriert, spiegelt sie die schlichte Swahili-Architektur und den frühen muslimischen Einfluss wider und liegt in der Nähe eines Dorfes, das für Delfinbeobachtungen bekannt ist.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kizimkazi01.jpg/1200px-Kizimkazi01.jpg",
                        gallery: ["https://img1.advisor.travel/1200x630px-Kizimkazi_Mosque_10.jpg"],
                        video: "https://www.youtube.com/embed/4o4o4o4o4o4"
                    }
                }
            }
        },
        zh: {
            translation: {
                page: { title: "地点详情 - 坦桑尼亚文化遗址" },
                nav: { back: "返回首页" },
                gallery: { title: "画廊" },
                video: { title: "视频" },
                footer: { copyright: "© {{year}} 文多Safari。保留所有权利。" },
                error: {
                    not_found: "未找到地点",
                    not_loaded: "请求的地点无法找到。"
                },
                sites: {
                    "stone-town": {
                        title: "石头城（桑给巴尔）",
                        description: "位于桑给巴尔岛的石头城是2000年列入联合国教科文组织世界遗产名录的遗址。这座历史城镇体现了斯瓦希里、阿拉伯、印度和欧洲文化的融合，体现在其狭窄蜿蜒的街道、珊瑚石建筑和热闹的市场中。重要地标包括17世纪由阿曼阿拉伯人建造的老堡、曾为苏丹宫殿的奇迹之家，以及昔日的奴隶市场遗址，如今是一个感人的纪念地。石头城曾是香料和奴隶贸易的繁荣中心，其建筑以精雕细琢的木门和阳台为特色，反映了其在印度洋沿岸的丰富贸易历史。",
                        image: "https://www.foreverafricasafari.com/wp-content/uploads/2022/08/fuerte-stone-town-zanzibar.jpg",
                        gallery: [
                            "https://blog.tanzaniaodyssey.com/wp-content/uploads/2013/03/Birds-Eye-Stone-Town.jpg",
                            "https://blog.tanzaniaodyssey.com/wp-content/uploads/2013/03/Boat-1.jpg"
                        ],
                        video: "https://www.youtube.com/embed/F9GDrzlWq9Q"
                    },
                    "kondoa": {
                        title: "孔多亚岩画",
                        description: "孔多亚岩画遗址于2006年被列入联合国教科文组织世界遗产名录，包含坦桑尼亚中部超过150个装饰有古老绘画的天然岩石庇护所。这些艺术品可追溯至约公元前2000年，由狩猎采集社区创作，描绘了动物（长颈鹿、大象）、人物和抽象符号。这些以红色和白色颜料绘制的画作提供了对史前生活、仪式和信仰的窗口。位于孔多亚地区，这些遗址覆盖广阔区域，保存于崎岖的景观中，是非洲最重要的岩画收藏之一。",
                        image: "https://www.tanzaniatourism.com/images/uploads/Kondoa_Rock_Art_Site_07.jpg",
                        gallery: ["https://serengetinationalparksafaris.com/wp-content/uploads/2023/02/dtybca.jpg"],
                        video: "https://www.youtube.com/embed/7vX8z5Z3vQw"
                    },
                    "kilwa-songo": {
                        title: "基尔瓦基西瓦尼与松戈姆纳拉遗址",
                        description: "基尔瓦基西瓦尼和松戈姆纳拉遗址于1981年被列入联合国教科文组织世界遗产名录，是坦桑尼亚南部海岸9世纪至19世纪两个繁荣的斯瓦希里贸易港口的遗迹。基尔瓦基西瓦尼曾是一个强大的苏丹国，控制着通往津巴布韦的黄金贸易路线，并铸造了自己的货币。著名建筑包括11世纪的大清真寺、胡苏尼库布瓦宫殿和珊瑚石房屋。松戈姆纳拉是一个较小的岛屿，拥有保存完好的住宅建筑。这些遗址展示了斯瓦希里的工程技术及其作为非洲、阿拉伯和亚洲文化桥梁的作用。",
                        image: "https://whc.unesco.org/uploads/thumbs/news_1147-1200-630-20140617202313.jpg",
                        gallery: [
                            "https://www.tawa.go.tz/storage/app/uploads/public/627/272/141/627272141216e703775833.jpg",
                            "https://www.focuseastafricatours.com/wp-content/uploads/kilwa.jpg"
                        ],
                        video: "https://www.youtube.com/embed/XkKz8z5J5vE"
                    },
                    "olduvai": {
                        title: "奥杜瓦伊峡谷（恩戈罗恩戈罗）",
                        description: "位于恩戈罗恩戈罗保护区的奥杜瓦伊峡谷是世界上最重要的古人类学遗址之一，被称为“人类的摇篮”。它发现了早期人科动物如能人（Homo habilis）和鲍氏傍人（Paranthropus boisei）的化石，由路易斯和玛丽·利基在20世纪中期发现。跨越近200万年的人类进化，峡谷的分层沉积物保存了工具、骨骸和早期人类活动的证据。其被侵蚀雕琢的戏剧性景观揭示了全球研究的地理时间线，附近还有奥杜瓦伊峡谷博物馆作为补充。",
                        image: "https://www.ncaa.go.tz/wp-content/uploads/2022/08/Olduvai-Gorge3.jpg",
                        gallery: ["https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/o/l/olduvai_gorge4.jpg"],
                        video: "https://www.youtube.com/embed/0ZCaQJ74pNU"
                    },
                    "laetoli": {
                        title: "莱托利足迹（恩戈罗恩戈罗）",
                        description: "莱托利足迹于1976年由玛丽·利基在恩戈罗恩戈罗附近发现，是一项非凡的考古发现：360万年前南方古猿（Australopithecus afarensis）的足迹，保存在火山灰中。这70个足迹绵延27米，提供了人类祖先双足行走的最早证据。该遗址包含三个个体（可能是一家）的直立行走痕迹，为人类进化提供了深刻见解。在保护罩下保存，莱托利是我们古老起源的见证，其复制品在全球博物馆展出。",
                        image: "https://www.tanzaniatourism.com/images/uploads/Laetoli_Footprints_NCA_3.jpg",
                        gallery: ["https://www.africanmeccasafaris.com/wp-content/uploads/laetolifootprints.jpg"],
                        video: "https://www.youtube.com/embed/5z5z5z5z5z5"
                    },
                    "isimila": {
                        title: "伊西米拉石器时代遗址（伊林加）",
                        description: "位于伊林加附近的伊西米拉石器时代遗址距今超过6万年，展示了一系列阿舍利石器，如手斧和砍刀。20世纪50年代发现，其被侵蚀雕刻的砂岩柱为其考古意义增添了引人注目的自然元素。挖掘工作揭示了早期人类居住的证据，包括暗示狩猎实践的动物骨骸。伊西米拉为东非中石器时代提供了罕见视角，融合了自然美景与史前历史。",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Isimila.jpg/1200px-Isimila.jpg",
                        gallery: ["https://www.tanzania-experience.com/wp-content/uploads/2016/01/isimila-stone-age-featured.jpg"],
                        video: "https://www.youtube.com/embed/3z3z3z3z3z3"
                    },
                    "bagamoyo": {
                        title: "巴加莫约镇",
                        description: "巴加莫约是达累斯萨拉姆以北的沿海小镇，19世纪在阿拉伯和德国统治下是奴隶和象牙贸易的关键中心。其名字意为“放下你的心”，反映了被奴役者的绝望。主要遗址包括1870年代的圣灵传教团及其教堂和博物馆、德国行政大楼（博马）以及附近的卡奥勒遗址。巴加莫约的殖民建筑和历史意义使其成为一个感人的文化地标。",
                        image: "https://safarispartners.com/images/destinations/bagamoyo.jpg",
                        gallery: ["https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-fbb238a/tanzania-specialist.com/wp-content/uploads/2023/07/Bagamoyo-3.jpg"],
                        video: "https://www.youtube.com/embed/4z4z4z4z4z4"
                    },
                    "kaole": {
                        title: "卡奥勒遗址（巴加莫约）",
                        description: "巴加莫约以南的卡奥勒遗址可追溯至13世纪，展示了斯瓦希里沿海文明。该遗址包括一座保存完好的清真寺、受波斯影响的墓地（带有猴面包树）以及繁荣贸易定居点的遗迹。曾与基尔瓦的贸易网络相连，卡奥勒的珊瑚石建筑反映了伊斯兰和波斯建筑风格，提供了对早期沿海文化和贸易的见解，直至16世纪衰落。",
                        image: "https://www.tanzaniatourism.com/images/uploads/Bagamoyo/Kaole_Ruins_Bagamoyo_03.jpg",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/0/00/13th_century_Kaole_mosque.jpg"],
                        video: "https://www.youtube.com/embed/5z5z5z5z5z5"
                    },
                    "mikindani": {
                        title: "米金达尼（姆特瓦拉）",
                        description: "姆特瓦拉的沿海小镇米金达尼曾是斯瓦希里贸易港口，在19世纪末成为德国殖民前哨。德国博马是一座坚固的行政建筑，占据中心位置，旁边是受阿拉伯影响的房屋和历史奴隶市场遗址。其风景如画的海湾和宁静的街道保留了斯瓦希里、阿拉伯和欧洲遗产的融合，使其成为坦桑尼亚海岸鲜为人知的瑰宝。",
                        image: "https://mikindani.com/wp-content/uploads/2015/08/Bay-6.jpg",
                        gallery: ["https://www.exploretanzania.nl/wp-content/uploads/2020/09/Mikindani-960x605-1.jpg"],
                        video: "https://www.youtube.com/embed/6z6z6z6z6z6"
                    },
                    "ujiji": {
                        title: "乌吉吉（基戈马）",
                        description: "位于坦噶尼喀湖畔的乌吉吉因1871年亨利·莫顿·斯坦利与大卫·利文斯通的会面而闻名，标志是一座芒果树下的纪念碑。作为19世纪的阿拉伯-斯瓦希里贸易站，它促进了中非的货物交换。利文斯通博物馆和附近的传统房屋突出了其历史角色和多元文化背景，背景是风景优美的湖岸。",
                        image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Kigoma_Railway_Station%2C_Kigoma_Ward.jpg",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ujiji_2012_Tamino.jpg/640px-Ujiji_2012_Tamino.jpg"],
                        video: "https://www.youtube.com/embed/7z7z7z7z7z7"
                    },
                    "maasai": {
                        title: "马赛村庄（阿鲁沙和曼亚拉）",
                        description: "分布在阿鲁沙和曼亚拉地区的马赛村庄提供了深入体验马赛人牧民生活的机会。以其独特的红色服装、复杂的珠饰和战士传统而闻名，马赛人保持着半游牧的牧牛实践。游客可以观看阿杜穆（跳跃舞）等传统舞蹈，探索泥粪制成的博马（住宅），并了解他们在现代化中的韧性。",
                        image: "https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-fbb238a/tanzania-specialist.com/wp-content/uploads/2023/08/visit-maasai-village-1.jpg",
                        gallery: ["https://www.arushacityguide.com/wp-content/uploads/2023/08/Arusha-Maasai-Village-Tour.jpg"],
                        video: "https://www.youtube.com/embed/8z8z8z8z8z8"
                    },
                    "hadzabe": {
                        title: "哈扎贝与达托加部落（埃亚西湖）",
                        description: "在埃亚西湖附近，哈扎贝和达托加部落代表了非洲最后的一些狩猎采集和牧民社区。哈扎贝人数不足1000，用弓箭狩猎，靠土地生活，拥有最少的财物。达托加是熟练的金属匠，制作工具和珠宝。他们的传统生活方式、语言（哈扎贝使用点击音）以及与自然的共存提供了对古老生存方式的罕见视角。",
                        image: "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/h/a/hadzabe_in_tanzania_2.jpg",
                        gallery: ["https://idreamofafrica.com/wp-content/uploads/2018/04/hadza-of-lake-eyasi.jpg"],
                        video: "https://www.youtube.com/embed/9z9z9z9z9z9"
                    },
                    "sukuma": {
                        title: "苏库马博物馆（布乔拉，姆万扎）",
                        description: "位于姆万扎附近的布乔拉，苏库马博物馆庆祝坦桑尼亚最大族群苏库马的文化。成立于1968年，展出传统房屋、王室徽章和文物，如巴吉卡舞中使用的鼓。博物馆保存了苏库马的历史，包括他们的农业和渔业传统，并举办著名的蛇舞表演，展示其充满活力的遗产。",
                        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/57/73/b7/sukuma-village-museum.jpg?w=1200&h=-1&s=1",
                        gallery: ["https://sukumamuseum.org/wp-content/uploads/royal-pavilion-5.4-1.jpg"],
                        video: "https://www.youtube.com/embed/0a0a0a0a0a0"
                    },
                    "makonde": {
                        title: "马孔德雕刻村庄（姆特瓦拉和林迪）",
                        description: "在坦桑尼亚南部的姆特瓦拉和林迪地区，马孔德村庄以其精致的木雕而闻名。马孔德人用乌木雕刻乌贾马（家族树）雕塑和抽象人物，这一传统可追溯数世纪。这些艺术品常描绘灵魂、祖先或社会主题，销往全球。游客可以观看工匠工作，探索其母系文化，置身于乡村环境中。",
                        image: "https://www.blackwoodconservation.org/wp-content/uploads/2019/04/Mak-Instrument-Players.jpg",
                        gallery: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTCtzUmzGt-FMVOfdODM8uPfpPxf33yRnHVZqjkmOHQbGNFxMbPAI2gKJb2mDAKf-sgubLd3SzMxxlI2uHXQqyfrCyNez0jFCLodDMWFJBp22cYA4_IPiXe2cwBp7ej3qSQVyLV2rf1aoJ/s640/makondecarver2.jpg"],
                        video: "https://www.youtube.com/embed/1b1b1b1b1b1"
                    },
                    "ikombe": {
                        title: "伊科姆贝文化村（卢克瓦）",
                        description: "卢克瓦地区的伊科姆贝保留了菲帕人的传统，他们以独特的高原家园而闻名。村庄展示了传统茅屋、讲故事活动以及陶艺和编篮等手工艺。菲帕人的农业遗产，包括小米种植，以及从中非迁移的口述历史，丰富了这一文化体验，背景是风景优美的景观。",
                        image: "https://dailynews.co.tz/wp-content/uploads/2022/09/rukwa.jpg",
                        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzWfWaqgdlVWGfBcSaK0htjshVCPF33i_ZQ&s"],
                        video: "https://www.youtube.com/embed/2c2c2c2c2c2"
                    },
                    "german-boma": {
                        title: "德国博马（巴加莫约和伊林加）",
                        description: "在德国殖民统治期间（1885-1919年）建造，巴加莫约和伊林加的德国博马用作行政和军事总部。这些坚固的石头建筑，如米金达尼博马（此处用于图像），展现了欧洲设计，拥有厚墙和拱形窗户。在巴加莫约，它监督沿海贸易；在伊林加，它控制内陆地区。如今，它们是坦桑尼亚殖民历史的遗迹，常被改作当地用途。",
                        image: "https://www.tanzaniatourism.com/images/uploads/Bagamoyo/German_Old_Boma_Bagamoyo_04.jpg",
                        gallery: ["https://www.traveladventures.org/countries/tanzania/images/bagamoyo03.jpg"],
                        video: "https://www.youtube.com/embed/3d3d3d3d3d3"
                    },
                    "askari": {
                        title: "阿斯卡里纪念碑（达累斯萨拉姆）",
                        description: "1927年在达累斯萨拉姆揭幕的阿斯卡里纪念碑纪念在一战中为英国作战的非洲士兵（阿斯卡里）。这座青铜雕像描绘了一名持枪士兵，矗立在繁忙的环岛上，象征着殖民牺牲。由詹姆斯·亚历山大·斯蒂文森创作，它既是致敬，也是坦桑尼亚殖民统治复杂遗产的反映，周围是现代城市生活。",
                        image: "https://appsaf.apieproject.com/news/wp-content/uploads/sites/29/2023/07/askari4-97cf8429cf61dd8d1e9eced76d9f9e01.jpeg",
                        gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/62/c5/db/caption.jpg?w=900&h=500&s=1"],
                        video: "https://www.youtube.com/embed/4e4e4e4e4e4"
                    },
                    "azania": {
                        title: "阿扎尼亚前线路德教堂（达累斯萨拉姆）",
                        description: "1898年由德国传教士建造，达累斯萨拉姆的阿扎尼亚前线路德教堂是一座引人注目的哥特式建筑，拥有红色瓦屋顶和尖拱。俯瞰港口，它是该市第一座永久性教堂，服务于德国定居者，后为当地路德社区。其历史意义和建筑之美使其成为殖民和宗教遗产的地标。",
                        image: "https://www.azaniafront.org/sites/default/files/styles/max660/public/dar_es_salaam-azania_sea_view%20%281%29.jpg?itok=V-9jbJSC",
                        gallery: ["https://img1.advisor.travel/fs440x440px-Azania_Front_Lutheran_Church_16.jpg"],
                        video: "https://www.youtube.com/embed/5f5f5f5f5f5"
                    },
                    "old-fort": {
                        title: "老堡（桑给巴尔）",
                        description: "桑给巴尔石头城的老堡，或称恩戈梅孔韦，建于17世纪末，由阿曼阿拉伯人建造，以防御葡萄牙的进攻。这座珊瑚石堡垒拥有厚墙和大炮，后用作监狱和铁路终点站。如今，它举办文化活动，包括桑给巴尔国际电影节，将历史与现代活力融合。",
                        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2d/0e/09.jpg",
                        gallery: ["https://media02.stockfood.com/largepreviews/MjIxMTExODM2OQ==/71326399-Old-Fort-AKA-Arab-Fort-or-Ngome-Kongwe-Stone-Town-Zanzibar-Unguja-Island-Tanzania.jpg"],
                        video: "https://www.youtube.com/embed/6g6g6g6g6g6"
                    },
                    "st-joseph": {
                        title: "圣约瑟夫大教堂（达累斯萨拉姆）",
                        description: "1897年由德国传教士完成的圣约瑟夫大教堂是达累斯萨拉姆的一座哥特式天主教堂。其双塔、彩色玻璃窗和装饰华丽的内部反映了欧洲建筑影响。位于港口附近，它仍是活跃的礼拜场所，也是坦桑尼亚殖民基督教遗产的历史象征，以其宁静之美吸引游客。",
                        image: "https://3rdworldarchitecture.wordpress.com/wp-content/uploads/2018/05/tz_daressalaam_stjoseph_church.jpg",
                        gallery: ["https://travel-buddies.com/wp-content/uploads/2024/12/1_dar-es-salaam-history-and-architectural-tours.jpg"],
                        video: "https://www.youtube.com/embed/7h7h7h7h7h7"
                    },
                    "national-museum": {
                        title: "国家博物馆（达累斯萨拉姆）",
                        description: "达累斯萨拉姆的国家博物馆与文化之家成立于1940年，记录了坦桑尼亚的丰富历史。展品包括利基的奥杜瓦伊峡谷化石、斯瓦希里文物和独立斗争的遗物，收藏于乔治五世国王捐赠的建筑中。其民族学和考古收藏以及殖民时期的展品使其成为全面的文化宝库。",
                        image: "https://momaa.org/wp-content/uploads/2019/09/nmt-1024x568.png",
                        gallery: ["https://www.nmt.go.tz/uploads/historical-centers/98a47a7c044d4032f7074ebbf31841c3.jpeg"],
                        video: "https://www.youtube.com/embed/8i8i8i8i8i8"
                    },
                    "village-museum": {
                        title: "村庄博物馆（达累斯萨拉姆）",
                        description: "达累斯萨拉姆的村庄博物馆是一座露天展览，展示来自坦桑尼亚20多个部落的传统房屋，使用泥土和茅草等真实材料建造。成立于1967年，提供手工艺、舞蹈和日常生活的现场演示，保存了该国多样的本土文化。坐落在郁郁葱葱的花园中，是一次教育性和沉浸式的体验。",
                        image: "https://www.urtrips.com/wp-content/uploads/2023/04/Makumbusho-Village-Museum-Dar-ES-Salaam_2.jpg",
                        gallery: ["https://www.goshen.edu/wp-content/uploads/sites/20/2017/01/FJXS2812.jpg"],
                        video: "https://www.youtube.com/embed/9j9j9j9j9j9"
                    },
                    "nyerere-museum": {
                        title: "尼雷尔博物馆（布蒂亚马，马拉）",
                        description: "布蒂亚马的尼雷尔博物馆是坦桑尼亚首任总统朱利叶斯·尼雷尔的出生地，旨在纪念他（姆瓦利姆）。1999年开放，展出他的个人物品、照片和独立运动及社会主义乌贾马政策的领导文件。遗址包括他的家庭住宅和墓地，提供对这位国家英雄的个人视角。",
                        image: "https://gamilytours.wordpress.com/wp-content/uploads/2016/11/nyerere-museum.jpg?w=640",
                        gallery: ["https://upload.wikimedia.org/wikipedia/commons/6/6c/Butiama_Museum.jpg"],
                        video: "https://www.youtube.com/embed/0k0k0k0k0k0"
                    },
                    "nyerere-memorial": {
                        title: "姆瓦利姆尼雷尔纪念之家（桑给巴尔）",
                        description: "桑给巴尔的姆瓦利姆尼雷尔纪念之家纪念朱利叶斯·尼雷尔对坦桑尼亚统一和独立的贡献。这座简朴的住宅是他曾居住的地方，展出他的著作、照片和纪念品。强调他在将坦噶尼喀与桑给巴尔合并为坦桑尼亚中的作用，突出他的和平与平等遗产。",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgoHgOhXB6xtNbdI4FxV1yeYv3yqZssiCjg&s",
                        gallery: ["https://i0.wp.com/www.tanzania1.com/wp-content/uploads/2013/06/Nyerere-Memorial.png?fit=800%2C500&ssl=1"],
                        video: "https://www.youtube.com/embed/1l1l1l1l1l1"
                    },
                    "arusha": {
                        title: "阿鲁沙文化遗产中心",
                        description: "阿鲁沙文化遗产中心是坦桑尼亚艺术和历史的活力中心，展示全国的雕塑、绘画和文物画廊。成立于1994年，展出马赛珠饰、马孔德雕刻和历史展览，位于一个醒目的三角形建筑中。它还作为当地手工艺的市场，将文化与商业融合。",
                        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/82/3d/ef/caption.jpg?w=1200&h=-1&s=1",
                        gallery: ["https://i0.wp.com/www.bestoftanzaniasafaris.com/wp-content/uploads/2023/06/cultural-heritate-center-arusha.jpg?resize=980%2C550"],
                        video: "https://www.youtube.com/embed/2m2m2m2m2m2"
                    },
                    "balai": {
                        title: "巴莱印度教寺庙（桑给巴尔和达累斯萨拉姆）",
                        description: "桑给巴尔和达累斯萨拉姆的巴莱印度教寺庙服务于坦桑尼亚的印度侨民，反映了他们的文化和精神遗产。这些寺庙建于20世纪初，拥有典型的南印度建筑风格，装饰精美的雕刻和充满活力的内部。它们举办排灯节等节日，仍是活跃的礼拜场所，象征着坦桑尼亚城市社区的多样性。",
                        image: "https://cdn.myportfolio.com/238f99c5-741c-4350-bad9-3ed13e2a2bbc/f79efd83-a70f-42f6-8ea1-c81eca9b81b4_rwc_90x0x1424x1068x1424.jpg?h=0f58bd2f070e6d233c76ce6c1e710b99",
                        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnReionHkAzZOfh4XucgOV1sDkYE5_5eav-Q&s"],
                        video: "https://www.youtube.com/embed/3n3n3n3n3n3"
                    },
                    "kizimkazi": {
                        title: "基齐姆卡齐清真寺（桑给巴尔）",
                        description: "基齐姆卡齐清真寺建于1107年，位于桑给巴尔南部海岸，是东非最古老的伊斯兰建筑之一。由波斯定居者委托建造，其米哈拉布带有罕见的库菲铭文。经过几个世纪的修复，它反映了斯瓦希里的建筑简约和早期伊斯兰影响，靠近一个以观赏海豚而闻名的村庄。",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kizimkazi01.jpg/1200px-Kizimkazi01.jpg",
                        gallery: ["https://img1.advisor.travel/1200x630px-Kizimkazi_Mosque_10.jpg"],
                        video: "https://www.youtube.com/embed/4o4o4o4o4o4"
                    }
                }
            }
        }
    },
    interpolation: {
        format: function(value, format, lng) {
            if (format === 'year') return new Date().getFullYear();
            return value;
        }
    }
}, function(err, t) {
    if (err) {
        console.error('i18next initialization failed:', err);
        return;
    }

    // Translate static elements
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        elem.textContent = i18next.t(key, { year: new Date().getFullYear() });
    });

    // Load site details
    const urlParams = new URLSearchParams(window.location.search);
    const siteId = urlParams.get('site');
    const siteKey = `sites.${siteId}`;
    const site = i18next.exists(siteKey) ? {
        title: i18next.t(`${siteKey}.title`),
        description: i18next.t(`${siteKey}.description`),
        image: i18next.t(`${siteKey}.image`),
        gallery: i18next.t(`${siteKey}.gallery`, { returnObjects: true }),
        video: i18next.t(`${siteKey}.video`)
    } : {
        title: i18next.t('error.not_found'),
        description: i18next.t('error.not_loaded'),
        image: "https://via.placeholder.com/1200x800?text=Site+Not+Found",
        gallery: [],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    };

    // Populate site details
    document.getElementById("site-title").textContent = site.title;
    const siteImage = document.getElementById("site-image");
    siteImage.src = site.image;
    siteImage.alt = `${site.title} 图像`;
    document.getElementById("site-description").textContent = site.description;

    // Populate gallery
    const gallery = document.getElementById("site-gallery");
    gallery.innerHTML = ''; // Clear existing content
    site.gallery.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `${site.title} 画廊图像`;
        img.className = "w-full h-full object-cover rounded-lg";
        img.onerror = () => img.src = "https://via.placeholder.com/750x500?text=Gallery+Image+Not+Available";
        gallery.appendChild(img);
    });

    // Populate video
    const videoIframe = document.getElementById("site-video").querySelector("iframe");
    videoIframe.src = site.video;
});
