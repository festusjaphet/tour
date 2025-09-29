import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4QQZvJr7gOWsruxMaIH48sZRSyHtYipc",
    authDomain: "fesweb-712e8.firebaseapp.com",
    projectId: "fesweb-712e8",
    storageBucket: "fesweb-712e8.appspot.com",
    messagingSenderId: "284523659483",
    appId: "1:284523659483:web:8be4ce3963eb41270dccfe",
    measurementId: "G-6SSMJCN3KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log('Stored language:', localStorage.getItem('language'));

// Initialize i18next
i18next.init({
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                page: { title: "Destination Details - Wendo African Safaris" },
                nav: { back: "Back" },
                comment_form: {
                    title: "Leave a Comment",
                    name_label: "Your Name (required)",
                    comment_label: "Your Comment (required)",
                    submit: "Submit Comment"
                },
                comments: { title: "Comments" },
                footer: { copyright: "© {{year}} Wendo Safari. All rights reserved." },
                error: {
                    destination_not_found: "Destination Not Found",
                    load_failed: "Sorry, this destination could not be loaded."
                },
                comment: {
                    success: "Your comment has been submitted successfully!",
                    error: "There was an error submitting your comment. Please try again."
                },
                destinations: {
                    sections: {
                        highlights: "Highlights",
                        wildlife: "Wildlife",
                        activities: "Activities" 
                    },
                    serengeti: {
                        title: "Serengeti National Park",
                        shortDescription: "Witness the awe-inspiring Great Migration...",
                        media: { type: "image", src: "https://africaadventurevacations.com/wp-content/uploads/2022/01/Top-ten-Serengeti-National-Park-safari-activities.jpg" },
                        details: {
                            overview: "The Serengeti National Park, a UNESCO World Heritage Site, spans 14,750 square kilometers of golden savannahs and acacia-dotted plains in Northern Tanzania. It’s globally renowned for the Great Migration, where over 1.5 million wildebeest, zebras, and gazelles traverse the landscape in a dramatic cycle of life.",
                            highlights: [
                                "Home to the Big Five: lion, leopard, elephant, buffalo, and rhino.",
                                "The Great Migration: an annual spectacle of millions of animals crossing rivers and plains.",
                                "Vast, untouched wilderness with endless photographic opportunities."
                            ],
                            wildlife: "Lions, cheetahs, hyenas, giraffes, and over 500 bird species thrive here, making it a wildlife enthusiast’s paradise.",
                            activities: "Game drives, hot air balloon safaris, and guided walking tours offer immersive experiences."
                        }
                    },
                    ngorongoro: {
                        title: "Ngorongoro Conservation Area",
                        shortDescription: "Explore the Ngorongoro Crater...",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/festour%2FNgorongoro1.jpeg?alt=media&token=13562ce4-c078-4aa6-9e6d-1d7ca574ce4d" },
                        details: {
                            overview: "The Ngorongoro Conservation Area is a biodiversity hotspot featuring the world’s largest unbroken caldera, a 600-meter deep natural amphitheater spanning 260 square kilometers. It’s a unique blend of wildlife and human coexistence, with the Maasai people living alongside the animals.",
                            highlights: [
                                "The Ngorongoro Crater: a self-contained ecosystem with over 25,000 animals.",
                                "Rare black rhino sightings in one of the few remaining habitats.",
                                "Stunning panoramic views from the crater rim at 2,300 meters."
                            ],
                            wildlife: "Elephants, hippos, flamingos, and a dense population of predators like lions and leopards.",
                            activities: "Full-day crater tours, cultural visits to Maasai villages, and scenic hikes along the rim."
                        }
                    },
                    tarangire: {
                        title: "Tarangire National Park",
                        shortDescription: "Discover a haven for elephant herds...",
                        media: { type: "image", src: "https://www.tarangirenationalparks.com/wp-content/uploads/2022/04/Kitibong-Hill.jpg" },
                        details: {
                            overview: "Tarangire National Park, covering 2,850 square kilometers, is a lesser-known gem famous for its massive elephant herds and iconic baobab trees. The Tarangire River sustains life during the dry season, drawing thousands of animals to its banks.",
                            highlights: [
                                "Hundreds of elephants gathering at waterholes during the dry season (June-October).",
                                "Ancient baobab trees, some over 1,000 years old, dotting the landscape.",
                                "Quiet trails offering an intimate, off-the-beaten-path safari experience."
                            ],
                            wildlife: "Wildebeest, zebras, giraffes, pythons, and over 550 bird species, including the colorful lilac-breasted roller.",
                            activities: "Game drives, night safaris (where permitted), and birdwatching expeditions."
                        }
                    },
                    manyara: {
                        title: "Lake Manyara National Park",
                        shortDescription: "Marvel at tree-climbing lions...",
                        media: { type: "image", src: "assets/Manyara.jpeg" },
                        details: {
                            overview: "Lake Manyara National Park, though smaller at 330 square kilometers, is a diverse sanctuary with groundwater forests, open plains, and an alkaline lake. It’s a birdwatcher’s delight and a haven for unique wildlife behaviors.",
                            highlights: [
                                "Tree-climbing lions, a rare behavior seen in few other places.",
                                "Flocks of flamingos painting the lake pink during the wet season.",
                                "Majimoto Hot Springs, a natural oasis amidst lush greenery."
                            ],
                            wildlife: "Hippos, baboons, impalas, and over 400 bird species, including pelicans and storks.",
                            activities: "Game drives, canoeing on the lake (seasonal), and guided forest walks."
                        }
                    },
                    arusha: {
                        title: "Arusha National Park",
                        shortDescription: "Experience diverse landscapes...",
                        media: { type: "image", src: "assets/Arusha.jpeg" },
                        details: {
                            overview: "Arusha National Park, located just 25 kilometers from Arusha city, covers 552 square kilometers and offers a mix of forested slopes, alkaline lakes, and open savannah. Dominated by Mount Meru (4,566 meters), it’s a versatile destination for adventurers.",
                            highlights: [
                                "Mount Meru: a challenging yet rewarding climb with panoramic views.",
                                "Momella Lakes: serene waters reflecting the landscape, home to flamingos.",
                                "Ngurdoto Crater, dubbed the 'Little Ngorongoro,' with lush forest trails."
                            ],
                            wildlife: "Giraffes, colobus monkeys, buffaloes, and a variety of waterfowl.",
                            activities: "Hiking, canoeing on Momella Lakes, and day-trip safaris from Arusha."
                        }
                    },
                    kilimanjaro: {
                        title: "Mount Kilimanjaro",
                        shortDescription: "Embark on the adventure of a lifetime...",
                        media: { type: "image", src: "https://www.micato.com/wp-content/uploads/2018/09/mt-kilimanjaro.jpg" },
                        details: {
                            overview: "Mount Kilimanjaro, Africa’s highest peak at 5,895 meters, towers over Tanzania as a UNESCO World Heritage Site and a global trekking icon. Its snow-capped summit contrasts with the plains below, offering a journey through five distinct climatic zones.",
                            highlights: [
                                "Uhuru Peak: the summit at 5,895 meters, a triumph for climbers.",
                                "Five ecological zones: from rainforests to arctic conditions.",
                                "Breathtaking sunrise views over the African continent."
                            ],
                            wildlife: "Monkeys and birds in the lower forests; sparse fauna at higher altitudes.",
                            activities: "Multi-day treks (Marangu, Machame, Lemosho routes), camping, and guided ascents."
                        }
                    }
                }
            }
        },
        fr: {
            translation: {
                page: { title: "Détails de la Destination - Wendo African Safaris" },
                nav: { back: "Retour" },
                comment_form: {
                    title: "Laisser un commentaire",
                    name_label: "Votre nom (requis)",
                    comment_label: "Votre commentaire (requis)",
                    submit: "Envoyer le commentaire"
                },
                comments: { title: "Commentaires" },
                footer: { copyright: "© {{year}} Wendo Safari. Tous droits réservés." },
                error: {
                    destination_not_found: "Destination non trouvée",
                    load_failed: "Désolé, cette destination n'a pas pu être chargée."
                },
                comment: {
                    success: "Votre commentaire a été soumis avec succès !",
                    error: "Une erreur s'est produite lors de la soumission de votre commentaire. Veuillez réessayer."
                },
                destinations: {
                    sections: {
                        highlights: "Points forts",
                        wildlife: "Faune",
                        activities: "Activités"
                    },
                    serengeti: {
                        title: "Parc National du Serengeti",
                        shortDescription: "Assistez à la grande migration impressionnante...",
                        media: { type: "image", src: "https://africaadventurevacations.com/wp-content/uploads/2022/01/Top-ten-Serengeti-National-Park-safari-activities.jpg" },
                        details: {
                            overview: "Le parc national du Serengeti, site du patrimoine mondial de l'UNESCO, s'étend sur 14 750 kilomètres carrés de savanes dorées et de plaines parsemées d'acacias dans le nord de la Tanzanie. Il est mondialement connu pour la grande migration, où plus de 1,5 million de gnous, zèbres et gazelles traversent le paysage dans un cycle de vie dramatique.",
                            highlights: [
                                "Abrite les Big Five : lion, léopard, éléphant, buffle et rhinocéros.",
                                "La grande migration : un spectacle annuel de millions d'animaux traversant rivières et plaines.",
                                "Vaste étendue sauvage intacte offrant d'innombrables opportunités photographiques."
                            ],
                            wildlife: "Lions, guépards, hyènes, girafes et plus de 500 espèces d'oiseaux prospèrent ici, un paradis pour les amateurs de faune.",
                            activities: "Safaris en voiture, safaris en montgolfière et visites guidées à pied offrent des expériences immersives."
                        }
                    },
                    ngorongoro: {
                        title: "Aire de Conservation du Ngorongoro",
                        shortDescription: "Explorez le cratère de Ngorongoro...",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fsimbafamily.jpeg?alt=media&token=1befb5d8-d339-422c-ad26-1e792fdd7f92" },
                        details: {
                            overview: "L'aire de conservation du Ngorongoro est un haut lieu de biodiversité avec le plus grand cratère intact au monde, un amphithéâtre naturel de 600 mètres de profondeur s'étendant sur 260 kilomètres carrés. C'est un mélange unique de faune et de coexistence humaine, avec le peuple Maasai vivant aux côtés des animaux.",
                            highlights: [
                                "Le cratère de Ngorongoro : un écosystème autonome avec plus de 25 000 animaux.",
                                "Observations rares de rhinocéros noirs dans l'un des rares habitats restants.",
                                "Vues panoramiques époustouflantes depuis le bord du cratère à 2 300 mètres."
                            ],
                            wildlife: "Éléphants, hippopotames, flamants roses et une population dense de prédateurs comme les lions et les léopards.",
                            activities: "Visites d'une journée complète du cratère, visites culturelles dans les villages Maasai et randonnées pittoresques le long du bord."
                        }
                    },
                    tarangire: {
                        title: "Parc National de Tarangire",
                        shortDescription: "Découvrez un havre pour les troupeaux d'éléphants...",
                        media: { type: "image", src: "https://www.tarangirenationalparks.com/wp-content/uploads/2022/04/Kitibong-Hill.jpg" },
                        details: {
                            overview: "Le parc national de Tarangire, couvrant 2 850 kilomètres carrés, est un joyau moins connu célèbre pour ses énormes troupeaux d'éléphants et ses baobabs emblématiques. La rivière Tarangire soutient la vie pendant la saison sèche, attirant des milliers d'animaux sur ses rives.",
                            highlights: [
                                "Des centaines d'éléphants se rassemblant aux points d'eau pendant la saison sèche (juin-octobre).",
                                "Baobabs anciens, certains vieux de plus de 1 000 ans, parsemant le paysage.",
                                "Sentiers tranquilles offrant une expérience de safari intime et hors des sentiers battus."
                            ],
                            wildlife: "Gnous, zèbres, girafes, pythons et plus de 550 espèces d'oiseaux, y compris le rollier à poitrine lilas coloré.",
                            activities: "Safaris en voiture, safaris nocturnes (lorsque permis) et expéditions d'observation des oiseaux."
                        }
                    },
                    manyara: {
                        title: "Parc National du Lac Manyara",
                        shortDescription: "Émerveillez-vous devant les lions grimpeurs d'arbres...",
                        media: { type: "image", src: "assets/Manyara.jpeg" },
                        details: {
                            overview: "Le parc national du lac Manyara, bien que plus petit avec 330 kilomètres carrés, est un sanctuaire diversifié avec des forêts souterraines, des plaines ouvertes et un lac alcalin. C'est un délice pour les ornithologues et un refuge pour des comportements fauniques uniques.",
                            highlights: [
                                "Lions grimpeurs d'arbres, un comportement rare observé dans peu d'autres endroits.",
                                "Troupeaux de flamants roses peignant le lac en rose pendant la saison humide.",
                                "Sources chaudes de Majimoto, une oasis naturelle au milieu d'une verdure luxuriante."
                            ],
                            wildlife: "Hippopotames, babouins, impalas et plus de 400 espèces d'oiseaux, y compris les pélicans et les cigognes.",
                            activities: "Safaris en voiture, canoë sur le lac (saisonnier) et promenades guidées en forêt."
                        }
                    },
                    arusha: {
                        title: "Parc National d'Arusha",
                        shortDescription: "Découvrez des paysages variés...",
                        media: { type: "image", src: "assets/Arusha.jpeg" },
                        details: {
                            overview: "Le parc national d'Arusha, situé à seulement 25 kilomètres de la ville d'Arusha, couvre 552 kilomètres carrés et offre un mélange de pentes boisées, de lacs alcalins et de savane ouverte. Dominé par le mont Meru (4 566 mètres), c'est une destination polyvalente pour les aventuriers.",
                            highlights: [
                                "Mont Meru : une ascension difficile mais gratifiante avec des vues panoramiques.",
                                "Lacs Momella : eaux sereines reflétant le paysage, abritant des flamants roses.",
                                "Cratère Ngurdoto, surnommé le 'petit Ngorongoro,' avec des sentiers forestiers luxuriants."
                            ],
                            wildlife: "Girafes, singes colobes, buffles et une variété d'oiseaux aquatiques.",
                            activities: "Randonnée, canoë sur les lacs Momella et safaris d'une journée depuis Arusha."
                        }
                    },
                    kilimanjaro: {
                        title: "Mont Kilimandjaro",
                        shortDescription: "Embarquez pour l'aventure d'une vie...",
                        media: { type: "image", src: "https://www.micato.com/wp-content/uploads/2018/09/mt-kilimanjaro.jpg" },
                        details: {
                            overview: "Le mont Kilimandjaro, le plus haut sommet d'Afrique à 5 895 mètres, domine la Tanzanie en tant que site du patrimoine mondial de l'UNESCO et icône mondiale de trekking. Son sommet enneigé contraste avec les plaines en contrebas, offrant un voyage à travers cinq zones climatiques distinctes.",
                            highlights: [
                                "Pic Uhuru : le sommet à 5 895 mètres, un triomphe pour les grimpeurs.",
                                "Cinq zones écologiques : des forêts tropicales aux conditions arctiques.",
                                "Vues imprenables du lever du soleil sur le continent africain."
                            ],
                            wildlife: "Singes et oiseaux dans les forêts inférieures ; faune clairsemée à des altitudes plus élevées.",
                            activities: "Treks de plusieurs jours (routes Marangu, Machame, Lemosho), camping et ascensions guidées."
                        }
                    }
                }
            }
        },
        es: {
            translation: {
                page: { title: "Detalles del Destino - Wendo African Safaris" },
                nav: { back: "Volver" },
                comment_form: {
                    title: "Dejar un comentario",
                    name_label: "Tu nombre (requerido)",
                    comment_label: "Tu comentario (requerido)",
                    submit: "Enviar comentario"
                },
                comments: { title: "Comentarios" },
                footer: { copyright: "© {{year}} Wendo Safari. Todos los derechos reservados." },
                error: {
                    destination_not_found: "Destino no encontrado",
                    load_failed: "Lo sentimos, no se pudo cargar este destino."
                },
                comment: {
                    success: "¡Tu comentario ha sido enviado con éxito!",
                    error: "Hubo un error al enviar tu comentario. Por favor, intenta de nuevo."
                },
                destinations: {
                    sections: {
                        highlights: "Aspectos destacados",
                        wildlife: "Vida silvestre",
                        activities: "Actividades"
                    },
                    serengeti: {
                        title: "Parque Nacional Serengeti",
                        shortDescription: "Presencia la impresionante Gran Migración...",
                        media: { type: "image", src: "https://africaadventurevacations.com/wp-content/uploads/2022/01/Top-ten-Serengeti-National-Park-safari-activities.jpg" },
                        details: {
                            overview: "El Parque Nacional Serengeti, declarado Patrimonio de la Humanidad por la UNESCO, abarca 14.750 kilómetros cuadrados de sabanas doradas y llanuras salpicadas de acacias en el norte de Tanzania. Es mundialmente conocido por la Gran Migración, donde más de 1,5 millones de ñus, cebras y gacelas atraviesan el paisaje en un dramático ciclo de vida.",
                            highlights: [
                                "Hogar de los cinco grandes: león, leopardo, elefante, búfalo y rinoceronte.",
                                "La Gran Migración: un espectáculo anual de millones de animales cruzando ríos y llanuras.",
                                "Vasta extensión salvaje intacta con infinitas oportunidades fotográficas."
                            ],
                            wildlife: "Leones, guepardos, hienas, jirafas y más de 500 especies de aves prosperan aquí, un paraíso para los entusiastas de la fauna.",
                            activities: "Safaris en coche, safaris en globo aerostático y caminatas guiadas ofrecen experiencias inmersivas."
                        }
                    },
                    ngorongoro: {
                        title: "Área de Conservación de Ngorongoro",
                        shortDescription: "Explora el Cráter de Ngorongoro...",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fsimbafamily.jpeg?alt=media&token=1befb5d8-d339-422c-ad26-1e792fdd7f92" },
                        details: {
                            overview: "El Área de Conservación de Ngorongoro es un punto caliente de biodiversidad que presenta el mayor cráter intacto del mundo, un anfiteatro natural de 600 metros de profundidad que abarca 260 kilómetros cuadrados. Es una mezcla única de vida silvestre y coexistencia humana, con el pueblo Maasai viviendo junto a los animales.",
                            highlights: [
                                "El Cráter de Ngorongoro: un ecosistema autónomo con más de 25.000 animales.",
                                "Avistamientos raros de rinocerontes negros en uno de los pocos hábitats restantes.",
                                "Vistas panorámicas impresionantes desde el borde del cráter a 2.300 metros."
                            ],
                            wildlife: "Elefantes, hipopótamos, flamencos y una densa población de depredadores como leones y leopardos.",
                            activities: "Recorridos de un día completo por el cráter, visitas culturales a aldeas Maasai y caminatas escénicas por el borde."
                        }
                    },
                    tarangire: {
                        title: "Parque Nacional de Tarangire",
                        shortDescription: "Descubre un refugio para manadas de elefantes...",
                        media: { type: "image", src: "https://www.tarangirenationalparks.com/wp-content/uploads/2022/04/Kitibong-Hill.jpg" },
                        details: {
                            overview: "El Parque Nacional de Tarangire, que cubre 2.850 kilómetros cuadrados, es una joya menos conocida famosa por sus enormes manadas de elefantes y árboles baobab icónicos. El río Tarangire sostiene la vida durante la estación seca, atrayendo a miles de animales a sus orillas.",
                            highlights: [
                                "Cientos de elefantes reunidos en pozos de agua durante la estación seca (junio-octubre).",
                                "Antiguos árboles baobab, algunos de más de 1.000 años, salpicando el paisaje.",
                                "Senderos tranquilos que ofrecen una experiencia de safari íntima y fuera de lo común."
                            ],
                            wildlife: "Ñus, cebras, jirafas, pitones y más de 550 especies de aves, incluyendo el vibrante carraca de pecho lila.",
                            activities: "Safaris en coche, safaris nocturnos (donde esté permitido) y expediciones de observación de aves."
                        }
                    },
                    manyara: {
                        title: "Parque Nacional del Lago Manyara",
                        shortDescription: "Maravíllate con los leones trepadores de árboles...",
                        media: { type: "image", src: "assets/Manyara.jpeg" },
                        details: {
                            overview: "El Parque Nacional del Lago Manyara, aunque más pequeño con 330 kilómetros cuadrados, es un santuario diverso con bosques de aguas subterráneas, llanuras abiertas y un lago alcalino. Es un deleite para los observadores de aves y un refugio para comportamientos únicos de la fauna.",
                            highlights: [
                                "Leones trepadores de árboles, un comportamiento raro visto en pocos lugares.",
                                "Bandadas de flamencos que pintan el lago de rosa durante la temporada húmeda.",
                                "Fuentes termales de Majimoto, un oasis natural en medio de una vegetación exuberante."
                            ],
                            wildlife: "Hipopótamos, babuinos, impalas y más de 400 especies de aves, incluyendo pelícanos y cigüeñas.",
                            activities: "Safaris en coche, piragüismo en el lago (estacional) y caminatas guiadas por el bosque."
                        }
                    },
                    arusha: {
                        title: "Parque Nacional de Arusha",
                        shortDescription: "Experimenta paisajes diversos...",
                        media: { type: "image", src: "assets/Arusha.jpeg" },
                        details: {
                            overview: "El Parque Nacional de Arusha, ubicado a solo 25 kilómetros de la ciudad de Arusha, cubre 552 kilómetros cuadrados y ofrece una mezcla de laderas boscosas, lagos alcalinos y sabana abierta. Dominado por el Monte Meru (4.566 metros), es un destino versátil para aventureros.",
                            highlights: [
                                "Monte Meru: una escalada desafiante pero gratificante con vistas panorámicas.",
                                "Lagos Momella: aguas serenas que reflejan el paisaje, hogar de flamencos.",
                                "Cráter Ngurdoto, apodado el 'pequeño Ngorongoro,' con senderos forestales exuberantes."
                            ],
                            wildlife: "Jirafas, monos colobos, búfalos y una variedad de aves acuáticas.",
                            activities: "Senderismo, piragüismo en los lagos Momella y safaris de un día desde Arusha."
                        }
                    },
                    kilimanjaro: {
                        title: "Monte Kilimanjaro",
                        shortDescription: "Embárcate en la aventura de tu vida...",
                        media: { type: "image", src: "https://www.micato.com/wp-content/uploads/2018/09/mt-kilimanjaro.jpg" },
                        details: {
                            overview: "El Monte Kilimanjaro, el pico más alto de África con 5.895 metros, se alza sobre Tanzania como un sitio del Patrimonio Mundial de la UNESCO y un ícono mundial de trekking. Su cima cubierta de nieve contrasta con las llanuras de abajo, ofreciendo un viaje a través de cinco zonas climáticas distintas.",
                            highlights: [
                                "Pico Uhuru: la cumbre a 5.895 metros, un triunfo para los escaladores.",
                                "Cinco zonas ecológicas: desde selvas tropicales hasta condiciones árticas.",
                                "Vistas impresionantes del amanecer sobre el continente africano."
                            ],
                            wildlife: "Monos y aves en los bosques inferiores; fauna escasa a mayores altitudes.",
                            activities: "Caminatas de varios días (rutas Marangu, Machame, Lemosho), campamentos y ascensos guiados."
                        }
                    }
                }
            }
        },
        sw: {
            translation: {
                page: { title: "Maelezo ya Marudio - Wendo African Safaris" },
                nav: { back: "Rudi" },
                comment_form: {
                    title: "Acha Maoni",
                    name_label: "Jina Lako (linahitajika)",
                    comment_label: "Maoni Yako (yanahitajika)",
                    submit: "Tuma Maoni"
                },
                comments: { title: "Maoni" },
                footer: { copyright: "© {{year}} Wendo Safari. Haki Zote Zimehifadhiwa." },
                error: {
                    destination_not_found: "Marudio Hayapatiwi",
                    load_failed: "Samahani, marudio haya hayakuweza kupakiwa."
                },
                comment: {
                    success: "Maoni yako yamewasilishwa kwa mafanikio!",
                    error: "Kulikuwa na hitilafu wakati wa kuwasilisha maoni yako. Tafadhali jaribu tena."
                },
                destinations: {
                    sections: {
                        highlights: "Mambo ya Msingi",
                        wildlife: "Wanyamapori",
                        activities: "Shughuli"
                    },
                    serengeti: {
                        title: "Hifadhi ya Taifa ya Serengeti",
                        shortDescription: "Shuhudia Uhamiaji Mkuu wa kustaajabisha...",
                        media: { type: "image", src: "https://africaadventurevacations.com/wp-content/uploads/2022/01/Top-ten-Serengeti-National-Park-safari-activities.jpg" },
                        details: {
                            overview: "Hifadhi ya Taifa ya Serengeti, Tovuti ya Urithi wa Dunia wa UNESCO, inachukua kilomita za mraba 14,750 za savanna za dhahabu na nyanda zilizopambwa na miti ya acacia kaskazini mwa Tanzania. Inajulikana ulimwenguni kwa Uhamiaji Mkuu, ambapo zaidi ya nyumbu milioni 1.5, pundamilia na swala hupita katika mandhari katika mzunguko wa maisha wa kushangaza.",
                            highlights: [
                                "Nyumbani kwa Big Five: simba, chui, tembo, nyati na kifaru.",
                                "Uhamiaji Mkuu: tamasha la kila mwaka la mamilioni ya wanyama wakivuka mito na nyanda.",
                                "Mandhari ya pori isiyoguswa yenye fursa nyingi za upigaji picha."
                            ],
                            wildlife: "Simba, duma, fisi, twiga na zaidi ya spishi 500 za ndege hustawi hapa, na kuifanya kuwa paradiso ya wapenzi wa wanyamapori.",
                            activities: "Safari za gari, safari za puto za hewa moto na ziara za kutembea kwa mwongozo hutoa uzoefu wa kina."
                        }
                    },
                    ngorongoro: {
                        title: "Eneo la Hifadhi la Ngorongoro",
                        shortDescription: "Chunguza Kreta ya Ngorongoro...",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fsimbafamily.jpeg?alt=media&token=1befb5d8-d339-422c-ad26-1e792fdd7f92" },
                        details: {
                            overview: "Eneo la Hifadhi la Ngorongoro ni kitovu cha bioanuwai kilicho na kreta isiyovunjika kubwa zaidi duniani, ukumbi wa asili wa mita 600 wa kina unaochukua kilomita za mraba 260. Ni mchanganyiko wa kipekee wa wanyamapori na kuishi pamoja kwa binadamu, na Wamasaai wanaoishi pamoja na wanyama.",
                            highlights: [
                                "Kreta ya Ngorongoro: mfumo wa ikolojia unaojitegemea na wanyama zaidi ya 25,000.",
                                "Mionekano adimu ya vifaru weusi katika moja ya makazi machache yaliyosalia.",
                                "Mandhari ya kupendeza ya panoramic kutoka ukingo wa kreta kwa mita 2,300."
                            ],
                            wildlife: "Tembo, viboko, flamingo na idadi kubwa ya wanyama wawindaji kama simba na chui.",
                            activities: "Ziara za siku nzima za kreta, ziara za kitamaduni kwenye vijiji vya Wamasaai na matembezi ya mandhari kando ya ukingo."
                        }
                    },
                    tarangire: {
                        title: "Hifadhi ya Taifa ya Tarangire",
                        shortDescription: "Gundua hifadhi ya mifugo ya tembo...",
                        media: { type: "image", src: "https://www.tarangirenationalparks.com/wp-content/uploads/2022/04/Kitibong-Hill.jpg" },
                        details: {
                            overview: "Hifadhi ya Taifa ya Tarangire, inayochukua kilomita za mraba 2,850, ni johari isiyojulikana sana inayosifika kwa mifugo yake mikubwa ya tembo na miti ya mibuyu ya kihistoria. Mto Tarangire huchukua uhai wakati wa msimu wa kiangazi, ukivuta wanyama elfu kwenye kingo zake.",
                            highlights: [
                                "Mamia ya tembo wanaokusanyika kwenye mabwawa ya maji wakati wa msimu wa kiangazi (Juni-Oktoba).",
                                "Miti ya mibuyu ya kale, baadhi ikiwa na umri wa zaidi ya miaka 1,000, ikipamba mandhari.",
                                "Njia za utulivu zinazotoa uzoefu wa safari wa karibu, nje ya njia za kawaida."
                            ],
                            wildlife: "Nyumbu, pundamilia, twiga, chatu na zaidi ya spishi 550 za ndege, zikiwemo ndege wa rangi ya lilac-breasted roller.",
                            activities: "Safari za gari, safari za usiku (zinaporuhusiwa) na safari za uchunguzi wa ndege."
                        }
                    },
                    manyara: {
                        title: "Hifadhi ya Taifa ya Ziwa Manyara",
                        shortDescription: "Staajabu na simba wanaopanda miti...",
                        media: { type: "image", src: "assets/Manyara.jpeg" },
                        details: {
                            overview: "Hifadhi ya Taifa ya Ziwa Manyara, ingawa ni ndogo kwa kilomita za mraba 330, ni hifadhi yenye anuwai na misitu ya maji ya chini ya ardhi, nyanda za wazi na ziwa la alkali. Ni furaha ya watazamaji wa ndege na hifadhi ya tabia za kipekee za wanyamapori.",
                            highlights: [
                                "Simba wanaopanda miti, tabia adimu inayoonekana katika maeneo machache tu.",
                                "Makundi ya flamingo yanayochora ziwa kwa rangi ya pink wakati wa msimu wa mvua.",
                                "Chemchemi za Majimoto, oasis ya asili katikati ya mimea ya kijani kibichi."
                            ],
                            wildlife: "Viboko, nyani, swala na zaidi ya spishi 400 za ndege, zikiwemo korongo na korongo wa miguu-mifukoni.",
                            activities: "Safari za gari, kupiga makasia kwenye ziwa (muda wa msimu) na matembezi ya msituni yaliyoongozwa."
                        }
                    },
                    arusha: {
                        title: "Hifadhi ya Taifa ya Arusha",
                        shortDescription: "Pata uzoefu wa mandhari tofauti...",
                        media: { type: "image", src: "assets/Arusha.jpeg" },
                        details: {
                            overview: "Hifadhi ya Taifa ya Arusha, iliyoko kilomita 25 tu kutoka mji wa Arusha, inachukua kilomita za mraba 552 na inatoa mchanganyiko wa miteremko ya misitu, maziwa ya alkali na savanna wazi. Inatawaliwa na Mlima Meru (mita 4,566), ni marudio yenye mseto kwa wanaotafuta adventure.",
                            highlights: [
                                "Mlima Meru: kupanda ngumu lakini kunaleta thawabu na mandhari ya panoramic.",
                                "Maziwa ya Momella: maji ya utulivu yanayoakisi mandhari, nyumbani kwa flamingo.",
                                "Kreta ya Ngurdoto, inayoitwa 'Ngorongoro Ndogo,' yenye njia za msitu wa kijani."
                            ],
                            wildlife: "Twiga, nyani wa colobus, nyati na aina mbalimbali za ndege wa majini.",
                            activities: "Kupanda milima, kupiga makasia kwenye Maziwa ya Momella na safari za siku moja kutoka Arusha."
                        }
                    },
                    kilimanjaro: {
                        title: "Mlima Kilimanjaro",
                        shortDescription: "Anza safari ya maisha yako...",
                        media: { type: "image", src: "https://www.micato.com/wp-content/uploads/2018/09/mt-kilimanjaro.jpg" },
                        details: {
                            overview: "Mlima Kilimanjaro, kilele cha juu zaidi cha Afrika kwa mita 5,895, unatawala Tanzania kama Tovuti ya Urithi wa Dunia wa UNESCO na ikoni ya kimataifa ya kupanda milima. Kilele chake kilichofunikwa na theluji kinatofautiana na nyanda za chini, ikitoa safari kupitia maeneo matano ya tabianchi tofauti.",
                            highlights: [
                                "Kilele cha Uhuru: kilele kwa mita 5,895, ushindi kwa wapandaji.",
                                "Maeneo matano ya ikolojia: kutoka misitu ya mvua hadi hali za aktiki.",
                                "Mandhari ya kupumua ya mawio ya jua juu ya bara la Afrika."
                            ],
                            wildlife: "Nyani na ndege katika misitu ya chini; wanyamapori wachache kwenye miinuko ya juu.",
                            activities: "Safari za kupanda milima za siku nyingi (njia za Marangu, Machame, Lemosho), kupiga kambi na kupanda kwa mwongozo."
                        }
                    }
                }
            }
        },
        de: {
            translation: {
                page: { title: "Ziel-Details - Wendo African Safaris" },
                nav: { back: "Zurück" },
                comment_form: {
                    title: "Einen Kommentar hinterlassen",
                    name_label: "Ihr Name (erforderlich)",
                    comment_label: "Ihr Kommentar (erforderlich)",
                    submit: "Kommentar senden"
                },
                comments: { title: "Kommentare" },
                footer: { copyright: "© {{year}} Wendo Safari. Alle Rechte vorbehalten." },
                error: {
                    destination_not_found: "Ziel nicht gefunden",
                    load_failed: "Entschuldigung, dieses Ziel konnte nicht geladen werden."
                },
                comment: {
                    success: "Ihr Kommentar wurde erfolgreich übermittelt!",
                    error: "Es gab einen Fehler beim Übermitteln Ihres Kommentars. Bitte versuchen Sie es erneut."
                },
                destinations: {
                    sections: {
                        highlights: "Höhepunkte",
                        wildlife: "Tierwelt",
                        activities: "Aktivitäten"
                    },
                    serengeti: {
                        title: "Serengeti-Nationalpark",
                        shortDescription: "Erleben Sie die beeindruckende Große Migration...",
                        media: { type: "image", src: "https://africaadventurevacations.com/wp-content/uploads/2022/01/Top-ten-Serengeti-National-Park-safari-activities.jpg" },
                        details: {
                            overview: "Der Serengeti-Nationalpark, ein UNESCO-Welterbe, erstreckt sich über 14.750 Quadratkilometer goldener Savannen und mit Akazien übersäten Ebenen im Norden Tansanias. Er ist weltweit bekannt für die Große Migration, bei der über 1,5 Millionen Gnus, Zebras und Gazellen die Landschaft in einem dramatischen Lebenszyklus durchqueren.",
                            highlights: [
                                "Heimat der Big Five: Löwe, Leopard, Elefant, Büffel und Nashorn.",
                                "Die Große Migration: ein jährliches Spektakel von Millionen Tieren, die Flüsse und Ebenen überqueren.",
                                "Weite, unberührte Wildnis mit endlosen Fotomöglichkeiten."
                            ],
                            wildlife: "Löwen, Geparden, Hyänen, Giraffen und über 500 Vogelarten gedeihen hier, ein Paradies für Wildtierliebhaber.",
                            activities: "Pirschfahrten, Heißluftballon-Safaris und geführte Wanderungen bieten eindrucksvolle Erlebnisse."
                        }
                    },
                    ngorongoro: {
                        title: "Ngorongoro-Schutzgebiet",
                        shortDescription: "Erkunden Sie den Ngorongoro-Krater...",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fsimbafamily.jpeg?alt=media&token=1befb5d8-d339-422c-ad26-1e792fdd7f92" },
                        details: {
                            overview: "Das Ngorongoro-Schutzgebiet ist ein Hotspot der Biodiversität mit dem größten unversehrten Krater der Welt, einem 600 Meter tiefen natürlichen Amphitheater, das 260 Quadratkilometer umfasst. Es ist eine einzigartige Mischung aus Wildtieren und menschlicher Koexistenz, wobei die Maasai neben den Tieren leben.",
                            highlights: [
                                "Der Ngorongoro-Krater: ein eigenständiges Ökosystem mit über 25.000 Tieren.",
                                "Seltene Sichtungen von Schwarzen Nashörnern in einem der wenigen verbleibenden Lebensräume.",
                                "Atemberaubende Panoramablicke vom Kraterrand in 2.300 Metern Höhe."
                            ],
                            wildlife: "Elefanten, Flusspferde, Flamingos und eine dichte Population von Raubtieren wie Löwen und Leoparden.",
                            activities: "Ganztägige Krater-Touren, kulturelle Besuche in Maasai-Dörfern und landschaftlich reizvolle Wanderungen entlang des Randes."
                        }
                    },
                    tarangire: {
                        title: "Tarangire-Nationalpark",
                        shortDescription: "Entdecken Sie ein Refugium für Elefantenherden...",
                        media: { type: "image", src: "https://www.tarangirenationalparks.com/wp-content/uploads/2022/04/Kitibong-Hill.jpg" },
                        details: {
                            overview: "Der Tarangire-Nationalpark, der 2.850 Quadratkilometer umfasst, ist ein weniger bekanntes Juwel, berühmt für seine riesigen Elefantenherden und ikonischen Baobab-Bäume. Der Tarangire-Fluss erhält das Leben während der Trockenzeit und zieht Tausende von Tieren an seine Ufer.",
                            highlights: [
                                "Hunderte von Elefanten, die sich in der Trockenzeit (Juni-Oktober) an Wasserstellen versammeln.",
                                "Uralte Baobab-Bäume, einige über 1.000 Jahre alt, die die Landschaft prägen.",
                                "Ruhige Pfade, die ein intimes, abseits der ausgetretenen Pfade liegendes Safari-Erlebnis bieten."
                            ],
                            wildlife: "Gnues, Zebras, Giraffen, Pythons und über 550 Vogelarten, einschließlich des farbenfrohen Fliederbrust-Rollers.",
                            activities: "Pirschfahrten, Nachtsafaris (wo erlaubt) und Vogelbeobachtungsexpeditionen."
                        }
                    },
                    manyara: {
                        title: "Manyara-See-Nationalpark",
                        shortDescription: "Staunen Sie über baumkletternde Löwen...",
                        media: { type: "image", src: "assets/Manyara.jpeg" },
                        details: {
                            overview: "Der Manyara-See-Nationalpark, obwohl kleiner mit 330 Quadratkilometern, ist ein vielfältiges Schutzgebiet mit Grundwasserwäldern, offenen Ebenen und einem alkalischen See. Es ist ein Paradies für Vogelbeobachter und ein Zufluchtsort für einzigartige Wildtierverhaltensweisen.",
                            highlights: [
                                "Baumkletternde Löwen, ein seltenes Verhalten, das an wenigen anderen Orten zu sehen ist.",
                                "Schwärme von Flamingos, die den See in der Regenzeit pink färben.",
                                "Majimoto-Heiße Quellen, eine natürliche Oase inmitten üppiger Vegetation."
                            ],
                            wildlife: "Flusspferde, Paviane, Impalas und über 400 Vogelarten, einschließlich Pelikane und Störche.",
                            activities: "Pirschfahrten, Kanufahren auf dem See (saisonabhängig) und geführte Waldspaziergänge."
                        }
                    },
                    arusha: {
                        title: "Arusha-Nationalpark",
                        shortDescription: "Erleben Sie vielfältige Landschaften...",
                        media: { type: "image", src: "assets/Arusha.jpeg" },
                        details: {
                            overview: "Der Arusha-Nationalpark, nur 25 Kilometer von der Stadt Arusha entfernt, umfasst 552 Quadratkilometer und bietet eine Mischung aus bewaldeten Hängen, alkalischen Seen und offener Savanne. Dominiert vom Mount Meru (4.566 Meter), ist es ein vielseitiges Ziel für Abenteurer.",
                            highlights: [
                                "Mount Meru: eine herausfordernde, aber lohnende Besteigung mit Panoramablicken.",
                                "Momella-Seen: ruhige Gewässer, die die Landschaft widerspiegeln, Heimat von Flamingos.",
                                "Ngurdoto-Krater, genannt 'Kleiner Ngorongoro,' mit üppigen Waldwegen."
                            ],
                            wildlife: "Giraffen, Colobus-Affen, Büffel und eine Vielzahl von Wasservögeln.",
                            activities: "Wandern, Kanufahren auf den Momella-Seen und Tages-Safaris ab Arusha."
                        }
                    },
                    kilimanjaro: {
                        title: "Kilimandscharo",
                        shortDescription: "Begeben Sie sich auf das Abenteuer Ihres Lebens...",
                        media: { type: "image", src: "https://www.micato.com/wp-content/uploads/2018/09/mt-kilimanjaro.jpg" },
                        details: {
                            overview: "Der Kilimandscharo, der höchste Gipfel Afrikas mit 5.895 Metern, überragt Tansania als UNESCO-Welterbe und weltweites Trekking-Symbol. Sein schneebedeckter Gipfel kontrastiert mit den Ebenen darunter und bietet eine Reise durch fünf verschiedene Klimazonen.",
                            highlights: [
                                "Uhuru-Gipfel: der Gipfel in 5.895 Metern, ein Triumph für Bergsteiger.",
                                "Fünf ökologische Zonen: von Regenwäldern bis zu arktischen Bedingungen.",
                                "Atemberaubende Sonnenaufgangsblicke über den afrikanischen Kontinent."
                            ],
                            wildlife: "Affen und Vögel in den unteren Wäldern; spärliche Fauna in höheren Lagen.",
                            activities: "Mehrtägige Wanderungen (Marangu-, Machame-, Lemosho-Routen), Camping und geführte Aufstiege."
                        }
                    }
                }
            }
        },
        zh: {
            translation: {
                page: { title: "目的地详情 - Wendo African Safaris" },
                nav: { back: "返回" },
                comment_form: {
                    title: "留下评论",
                    name_label: "您的姓名（必填）",
                    comment_label: "您的评论（必填）",
                    submit: "提交评论"
                },
                comments: { title: "评论" },
                footer: { copyright: "© {{year}} Wendo Safari。保留所有权利。" },
                error: {
                    destination_not_found: "未找到目的地",
                    load_failed: "抱歉，无法加载此目的地。"
                },
                comment: {
                    success: "您的评论已成功提交！",
                    error: "提交您的评论时出错。请重试。"
                },
                destinations: {
                    sections: {
                        highlights: "亮点",
                        wildlife: "野生动物",
                        activities: "活动"
                    },
                    serengeti: {
                        title: "塞伦盖蒂国家公园",
                        shortDescription: "见证令人叹为观止的大迁徙...",
                        media: { type: "image", src: "https://africaadventurevacations.com/wp-content/uploads/2022/01/Top-ten-Serengeti-National-Park-safari-activities.jpg" },
                        details: {
                            overview: "塞伦盖蒂国家公园是联合国教科文组织世界遗产，占地14,750平方公里，覆盖坦桑尼亚北部的金色大草原和点缀着金合欢树的平原。它以大迁徙而闻名于世，超过150万只角马、斑马和瞪羚在生命的戏剧性循环中穿越这片景观。",
                            highlights: [
                                "五大动物之家：狮子、豹子、大象、水牛和犀牛。",
                                "大迁徙：每年数百万动物穿越河流和平原的壮观景象。",
                                "广阔、未受触及的荒野，拥有无尽的摄影机会。"
                            ],
                            wildlife: "狮子、猎豹、鬣狗、长颈鹿和超过500种鸟类在此繁盛，是野生动物爱好者的天堂。",
                            activities: "游猎车、热气球游猎和导游步行之旅提供沉浸式体验。"
                        }
                    },
                    ngorongoro: {
                        title: "恩戈罗恩戈罗保护区",
                        shortDescription: "探索恩戈罗恩戈罗火山口...",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fsimbafamily.jpeg?alt=media&token=1befb5d8-d339-422c-ad26-1e792fdd7f92" },
                        details: {
                            overview: "恩戈罗恩戈罗保护区是生物多样性的热点，拥有世界上最大的完整火山口，这是一个600米深的天然圆形剧场，占地260平方公里。它是野生动物与人类共存的独特融合，马赛人生活在这片土地上，与动物和谐共处。",
                            highlights: [
                                "恩戈罗恩戈罗火山口：一个拥有超过25,000只动物的自给自足生态系统。",
                                "在为数不多的栖息地之一可见的稀有黑犀牛。",
                                "从2300米高的火山口边缘欣赏壮丽的全景。"
                            ],
                            wildlife: "大象、河马、火烈鸟以及狮子和豹子等密集的捕食者种群。",
                            activities: "全天火山口游览、马赛村庄文化访问和沿边缘的风景徒步。"
                        }
                    },
                    tarangire: {
                        title: "塔兰吉雷国家公园",
                        shortDescription: "发现大象群的避风港...",
                        media: { type: "image", src: "https://www.tarangirenationalparks.com/wp-content/uploads/2022/04/Kitibong-Hill.jpg" },
                        details: {
                            overview: "塔兰吉雷国家公园占地2,850平方公里，是一个鲜为人知的瑰宝，以其庞大的大象群和标志性的猴面包树而闻名。塔兰吉雷河在干季维持生命，吸引了数千只动物来到河岸。",
                            highlights: [
                                "干季（6月至10月）数百只大象聚集在水坑旁。",
                                "古老的猴面包树，有些超过1,000年，点缀着这片景观。",
                                "安静的小径提供亲密的、偏离常规的游猎体验。"
                            ],
                            wildlife: "角马、斑马、长颈鹿、蟒蛇和超过550种鸟类，包括色彩鲜艳的紫胸佛法僧。",
                            activities: "游猎车、夜间游猎（在允许的情况下）和观鸟探险。"
                        }
                    },
                    manyara: {
                        title: "马尼亚拉湖国家公园",
                        shortDescription: "惊叹于攀树的狮子...",
                        media: { type: "image", src: "assets/Manyara.jpeg" },
                        details: {
                            overview: "马尼亚拉湖国家公园虽然较小，只有330平方公里，但却是一个多样化的保护区，拥有地下水森林、开阔的平原和碱性湖泊。它是观鸟者的乐园，也是独特野生动物行为的避风港。",
                            highlights: [
                                "攀树狮子，这种罕见行为在其他地方很少见到。",
                                "雨季期间，成群的火烈鸟将湖泊染成粉红色。",
                                "马吉莫托温泉，郁郁葱葱的绿色中的天然绿洲。"
                            ],
                            wildlife: "河马、狒狒、黑斑羚和超过400种鸟类，包括鹈鹕和鹳。",
                            activities: "游猎车、湖上独木舟（季节性）和导游带领的森林徒步。"
                        }
                    },
                    arusha: {
                        title: "阿鲁沙国家公园",
                        shortDescription: "体验多样的景观...",
                        media: { type: "image", src: "assets/Arusha.jpeg" },
                        details: {
                            overview: "阿鲁沙国家公园距离阿鲁沙市仅25公里，占地552平方公里，融合了森林覆盖的山坡、碱性湖泊和开阔的草原。由梅鲁山（4,566米）主导，是冒险者的多功能目的地。",
                            highlights: [
                                "梅鲁山：具有挑战性但回报丰厚的攀登，享有全景。",
                                "莫梅拉湖：宁静的水面反射着景观，是火烈鸟的家园。",
                                "恩古多托火山口，被称为‘小恩戈罗恩戈罗’，拥有郁郁葱葱的森林小径。"
                            ],
                            wildlife: "长颈鹿、黑白疣猴、水牛和各种水鸟。",
                            activities: "徒步、在莫梅拉湖划独木舟和从阿鲁沙出发的短途游猎。"
                        }
                    },
                    kilimanjaro: {
                        title: "乞力马扎罗山",
                        shortDescription: "开启一生难忘的冒险...",
                        media: { type: "image", src: "https://www.micato.com/wp-content/uploads/2018/09/mt-kilimanjaro.jpg" },
                        details: {
                            overview: "乞力马扎罗山，非洲最高峰，海拔5,895米，作为联合国教科文组织世界遗产和全球徒步旅行标志耸立在坦桑尼亚。其积雪覆盖的山顶与下面的平原形成鲜明对比，提供了穿越五个不同气候带的旅程。",
                            highlights: [
                                "乌呼鲁峰：海拔5,895米的顶峰，是登山者的胜利。",
                                "五个生态区：从热带雨林到极地条件。",
                                "非洲大陆上令人叹为观止的日出景观。"
                            ],
                            wildlife: "低地森林中的猴子和鸟类；高海拔地区的动物稀少。",
                            activities: "多日徒步旅行（马兰古、马查梅、莱莫肖路线）、露营和导游带领的攀登。"
                        }
                    }
                }
            }
        }
    }
}, function (err, t) {
    if (err) {
        console.error('i18next initialization error:', err);
        return;
    }
    updateContent();
    loadDestination();
});

// Update content with translations
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const attrMatch = key.match(/^\[([^\]]+)\](.+)$/);
        if (attrMatch) {
            const attr = attrMatch[1];
            const translationKey = attrMatch[2];
            let translation = i18next.t(translationKey);
            if (translationKey === 'footer.copyright') {
                translation = translation.replace('{{year}}', new Date().getFullYear());
            }
            element.setAttribute(attr, translation);
        } else {
            let translation = i18next.t(key);
            if (key === 'footer.copyright') {
                translation = translation.replace('{{year}}', new Date().getFullYear());
            }
            element.innerHTML = translation;
        }
    });
}

// Load destination details and comments
function loadDestination() {
    const urlParams = new URLSearchParams(window.location.search);
    const destId = urlParams.get('dest');
    console.log('Destination ID from URL:', destId);

    // Use translated destination data
    const destination = i18next.t(`destinations.${destId}`, { returnObjects: true }) || i18next.t('destinations.serengeti', { returnObjects: true });
    console.log('Selected Destination:', destination);

    // Debug details
    console.log('Destination Details:', destination.details);

    if (!destination.title || !destination.details) {
        console.error('Invalid destination data for:', destId);
        document.getElementById('dest-title').textContent = i18next.t('error.destination_not_found', { defaultValue: "Destination Not Found" });
        document.getElementById('dest-details').textContent = i18next.t('error.load_failed', { defaultValue: "Sorry, this destination could not be loaded." });
        return;
    }

    document.getElementById('dest-title').textContent = destination.title;
    const mediaElement = destination.media && destination.media.type === "video"
        ? `<video src="${destination.media.src}" muted loop autoplay class="w-full h-full object-cover"></video>`
        : `<img src="${destination.media.src}" alt="${destination.title}" loading="lazy" class="w-full h-full object-cover">`;
    document.getElementById('dest-media').innerHTML = mediaElement;

    const detailsDiv = document.getElementById('dest-details');
    try {
        detailsDiv.innerHTML = `
            <p class="text-gray-600 leading-relaxed mb-4">${destination.details.overview || 'Overview not available'}</p>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">${i18next.t('destinations.sections.highlights', { defaultValue: "Highlights" })}</h3>
            <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
                ${destination.details.highlights ? destination.details.highlights.map(highlight => `<li>${highlight}</li>`).join('') : '<li>No highlights available</li>'}
            </ul>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">${i18next.t('destinations.sections.wildlife', { defaultValue: "Wildlife" })}</h3>
            <p class="text-gray-600 leading-relaxed mb-4">${destination.details.wildlife || 'Wildlife information not available'}</p>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">${i18next.t('destinations.sections.activities', { defaultValue: "Activities" })}</h3>
            <p class="text-gray-600 leading-relaxed">${destination.details.activities || 'Activities not available'}</p>
        `;
    } catch (error) {
        console.error('Error rendering details:', error);
        detailsDiv.textContent = i18next.t('error.load_failed', { defaultValue: "Sorry, this destination could not be loaded." });
    }

    // Load comments
    const commentsList = document.getElementById('comments-list');
    const commentsQuery = query(collection(db, `destinations/${destId}/comments`), orderBy('timestamp', 'desc'));
    onSnapshot(commentsQuery, (snapshot) => {
        commentsList.innerHTML = '';
        snapshot.forEach(doc => {
            const comment = doc.data();
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment-item');
            commentDiv.innerHTML = `
                <p class="text-gray-800 font-semibold">${comment.name}</p>
                <p class="text-gray-600">${comment.text}</p>
                <p class="text-gray-500 text-sm">${new Date(comment.timestamp?.toDate()).toLocaleString(i18next.language)}</p>
            `;
            commentsList.appendChild(commentDiv);
        });
    });

    // Form submission
    const commentForm = document.getElementById('comment-form');
    const submitText = document.getElementById('submit-text');
    const submitSpinner = document.getElementById('submit-spinner');
    const submitButton = commentForm.querySelector('button');

    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitText.classList.add('hidden');
        submitSpinner.classList.remove('hidden');
        submitButton.disabled = true;

        const commentData = {
            name: document.getElementById('comment-name').value,
            text: document.getElementById('comment-text').value,
            timestamp: serverTimestamp()
        };

        try {
            await addDoc(collection(db, `destinations/${destId}/comments`), commentData);
            alert(i18next.t('comment.success', { defaultValue: 'Your comment has been submitted successfully!' }));
            commentForm.reset();
        } catch (error) {
            console.error('Error submitting comment:', error);
            alert(i18next.t('comment.error', { defaultValue: 'There was an error submitting your comment. Please try again.' }));
        } finally {
            submitText.classList.remove('hidden');
            submitSpinner.classList.add('hidden');
            submitButton.disabled = false;
        }
    });
}

// Run on DOM load
document.addEventListener("DOMContentLoaded", () => {
    // i18next initialization will handle content loading
});