// // Import Firebase functions
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
// import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB4QQZvJr7gOWsruxMaIH48sZRSyHtYipc",
//     authDomain: "fesweb-712e8.firebaseapp.com",
//     projectId: "fesweb-712e8",
//     storageBucket: "fesweb-712e8.appspot.com",
//     messagingSenderId: "284523659483",
//     appId: "1:284523659483:web:8be4ce3963eb41270dccfe",
//     measurementId: "G-6SSMJCN3KH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Trip data
// const trips = {
//     "north-tanzania-circuit": {
//         title: "North Tanzania Circuit Safari",
        // media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzebraz.mp4?alt=media&token=6b35f19b-d2fe-44e2-875a-66750c5b7b70" },
//         days: "8 Days / 7 Nights",
//         description: "The North Tanzania Circuit Safari is an 8-day journey through Northern Tanzania's most iconic landscapes. Starting in Arusha, you'll explore vibrant local culture before heading to Lake Manyara for its unique wildlife. You'll then experience the wildlife-rich Ngorongoro Crater and finish in the Serengeti, witnessing the Great Migration. Along the way, enjoy luxurious lodges, guided game drives, and cultural encounters with the Maasai, blending adventure, nature, and culture in one unforgettable trip.",
//         inclusions: "All road transfers, game drives, park fees, crater fees and concession fee, first aid services, meals and accommodation",
//         exclusions: "International and local flights, balloon safari, Maasai village visit, massage at the lodge or hotel",
//         itinerary: [
//             "Day 1: Arrival in Arusha - Gateway to Tanzania Safaris - Welcome to Arusha, Tanzania. Begin your adventure in Arusha, the starting point for many Tanzania safaris. Upon arrival at Kilimanjaro International Airport (JRO) or Arusha Airport (ARK), our friendly team will greet you and transfer you to a comfortable hotel in Arusha City. Enjoy a coffee plantation tour, explore vibrant local markets, and take in breathtaking views of Mount Kilimanjaro and Mount Meru.",
//             "Day 2-3: Lake Manyara National Park - Tree-Climbing Lions and Majimoto Hot Springs - Discover Lake Manyara’s unique wildlife. Enjoy two days of exciting game drives, where you’ll encounter elephants, hippos, and the park’s iconic tree-climbing lions. Visit the Majimoto Hot Springs and stay in a luxury lodge with panoramic views.",
//             "Day 4-5: Ngorongoro Crater - The World's Largest Unbroken Caldera - Explore the Ngorongoro Crater, a UNESCO World Heritage Site. Enjoy full-day game drives to see the Big Five and other wildlife. Experience stunning views from the crater rim and a bush lunch on the crater floor.",
//             "Day 6-8: Serengeti National Park - Witness the Great Migration - Immerse yourself in the vast Serengeti plains over three days. Enjoy thrilling game drives, observe dramatic river crossings, and relax in luxurious lodges. Optional hot air balloon safari available."
//         ]
//     },
//     "zanzibar-dar-es-salaam": {
//         title: "Zanzibar and Dar-es-Salaam Beach Safari",
        // media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzan1.JPG?alt=media&token=c7296ef2-bcb7-4f3b-873d-40235c767cee" },
//         days: "5 Days / 4 Nights",
//         description: "Experience the ultimate 5-day beach safari, exploring the stunning coastline and vibrant culture of Tanzania. This package takes you from the bustling city of Dar es Salaam to the tranquil and pristine beaches of Unguja Island in Zanzibar, offering a perfect blend of relaxation, adventure, and cultural immersion.",
//         inclusions: "All road transfers, meals and accommodation at selected hotels, guided tours of Stone Town and other sites",
//         exclusions: "Diving and snorkeling, sunset dhow and boat cruises, spa and body massage treatments, local and international flights",
//         itinerary: [
//             "Day 1: Dar es Salaam - Arrival and Relaxation - Begin with a warm welcome at Julius Nyerere International Airport (JNIA) in Dar es Salaam. Relax by the pool or explore local attractions.",
//             "Day 2: Unguja Island, Zanzibar - A Tropical Paradise - Transfer to Zanzibar’s Unguja Island for a variety of beach activities.",
//             "Day 3: Stone Town Tour - Discover the historic charm of Stone Town, a UNESCO World Heritage Site, with its winding alleys and vibrant markets.",
//             "Day 4: Diving and Snorkeling - Explore coral reefs and marine life with diving and snorkeling excursions.",
//             "Day 5: Deep-Sea Fishing & Other Activities - Experience deep-sea fishing, visit spice farms, enjoy a sunset cruise, and relax with spa treatments. Depart from Abeid Amani Karume International Airport."
//         ]
//     },
//     "serengeti-authenticity": {
//         title: "5 Days Serengeti Authenticity Safari",
        // media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fchuifamil.jpeg?alt=media&token=670b503c-e051-48dd-8f95-a280ee7855da" },
//         days: "5 Days / 4 Nights",
//         description: "Immerse yourself in the authentic beauty of the Serengeti with this 5-day safari. Experience the raw wilderness, diverse wildlife, and traditional Maasai culture in one of Tanzania’s most iconic parks.",
//         inclusions: "All road transfers, game drives, park fees, meals and accommodation",
//         exclusions: "Flights, optional activities, personal expenses",
//         itinerary: [
//             "Day 1: Arrival in Arusha, transfer to lodge",
//             "Day 2: Full-day game drive in Serengeti",
//             "Day 3: Morning safari, Maasai village visit",
//             "Day 4: Explore central Serengeti plains",
//             "Day 5: Depart for Arusha"
//         ]
//     },
 
// };
// const menuToggle = document.getElementById('menu-toggle');
//         const mobileMenu = document.getElementById('mobile-menu');

//         menuToggle.addEventListener('click', () => {
//             mobileMenu.classList.toggle('hidden');
//         });
// // Load trip details and handle form submission
// document.addEventListener("DOMContentLoaded", () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const tripId = urlParams.get('trip');
//     console.log('Trip ID from URL:', tripId); // Debug
//     const trip = trips[tripId] || trips["north-tanzania-circuit"]; // Fallback
//     console.log('Selected Trip:', trip); // Debug

//     if (!trip) {
//         document.getElementById('trip-title').textContent = "Trip Not Found";
//         document.getElementById('trip-details').textContent = "Sorry, this trip could not be loaded.";
//         return;
//     }

//     document.getElementById('trip-infomax').innerHTML = `
//     <p class="mt-4 text-gray-600 leading-relaxed">${trip.description}</p>
//         <p><strong class="text-green-700">Duration:</strong> ${trip.days}</p>
//     `;
//     document.getElementById('trip-title').textContent = trip.title;
//     const mediaElement = trip.media.type === "video"
//     ? `<div class="relative w-full h-full" style="padding-top: 50%;"><video src="${trip.media.src}" muted loop autoplay class="absolute top-0 left-0 w-full h-full object-cover"></video></div>`
//     : `<div class="relative w-full" style="padding-top: 56.25%;"><img src="${trip.media.src}" alt="${trip.title}" loading="lazy" class="absolute top-0 left-0 w-full h-full object-cover"></div>`;

//     document.getElementById('trip-media').innerHTML = mediaElement;

//     document.getElementById('trip-details').innerHTML = `
//         <p><strong class="text-green-700">Inclusions:</strong> ${trip.inclusions}</p>
//         <p><strong class="text-green-700">Exclusions:</strong> ${trip.exclusions}</p>
//     `;
 

//     const itineraryList = document.getElementById('itinerary-list');
//     trip.itinerary.forEach(day => {
//     const li = document.createElement('li');
//     li.textContent = day;
//     li.classList.add('text-gray-600', 'itinerary-item'); // Add class to each <li>
//     itineraryList.appendChild(li);
//     });

//     // Form submission
//     const participateForm = document.getElementById('participate-form');
//     const submitText = document.getElementById('submit-text');
//     const submitSpinner = document.getElementById('submit-spinner');
//     const submitButton = participateForm.querySelector('button');

//     participateForm.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         submitText.classList.add('hidden');
//         submitSpinner.classList.remove('hidden');
//         submitButton.disabled = true;

//         const requestData = {
//             tripTitle: trip.title,
//             name: document.getElementById('part-name').value,
//             email: document.getElementById('part-email').value,
//             phone: document.getElementById('part-phone').value || "Not provided",
//             arrivalDate: document.getElementById('part-arrival').value || "Not specified",
//             adults: document.getElementById('part-adults').value,
//             children: document.getElementById('part-children').value,
//             request: document.getElementById('part-request').value,
//             contactMethod: participateForm.querySelector('input[name="part-contact"]:checked').value,
//             timestamp: serverTimestamp()
//         };

//         try {
//             await addDoc(collection(db, 'tripRequests'), requestData);
//             alert('Your request has been submitted successfully!');
//             participateForm.reset();
//         } catch (error) {
//             console.error('Error submitting request:', error);
//             alert('There was an error submitting your request. Please try again.');
//         } finally {
//             submitText.classList.remove('hidden');
//             submitSpinner.classList.add('hidden');
//             submitButton.disabled = false;
//         }
//     });
// });


// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

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

// Initialize i18next
i18next.init({
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                page: { title: "Trip Details - Wendo African Safaris" },
                nav: { back: "Back" },
                itinerary: { title: "Day-to-Day Itinerary" },
                participate_form: {
                    title: "Request to Participate",
                    name_label: "Your Name (required)",
                    email_label: "Your E-Mail (required)",
                    phone_label: "Your Phone (e.g., +255 673 365 852)",
                    arrival_label: "Estimated Arrival Date",
                    adults_label: "Adults",
                    adults_1: "1 Adult",
                    adults_2: "2 Adults",
                    adults_3: "3 Adults",
                    adults_4: "4 Adults",
                    children_label: "Children",
                    children_0: "0 Children",
                    children_1: "1 Child",
                    children_2: "2 Children",
                    children_3: "3 Children",
                    request_label: "Your Request (required)",
                    contact_label: "Preferred Contact Method:",
                    contact_email: "Email",
                    contact_whatsapp: "WhatsApp",
                    contact_calls: "Calls",
                    submit: "Submit Request"
                },
                footer: { copyright: "© {{year}} Wendo Safari. All rights reserved." },
                request: {
                    success: "Your request has been submitted successfully!",
                    error: "There was an error submitting your request. Please try again."
                },
                trips: {
                    sections: {
                        duration: "Duration",
                        inclusions: "Inclusions",
                        exclusions: "Exclusions"
                    },
                    "north-tanzania-circuit": {
                        title: "North Tanzania Circuit Safari",
                        days: "8 Days / 7 Nights",
                        media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzebraz.mp4?alt=media&token=6b35f19b-d2fe-44e2-875a-66750c5b7b70" },

                        description: "The North Tanzania Circuit Safari is an 8-day journey through Northern Tanzania's most iconic landscapes. Starting in Arusha, you'll explore vibrant local culture before heading to Lake Manyara for its unique wildlife. You'll then experience the wildlife-rich Ngorongoro Crater and finish in the Serengeti, witnessing the Great Migration. Along the way, enjoy luxurious lodges, guided game drives, and cultural encounters with the Maasai, blending adventure, nature, and culture in one unforgettable trip.",
                        inclusions: "All road transfers, game drives, park fees, crater fees and concession fee, first aid services, meals and accommodation",
                        exclusions: "International and local flights, balloon safari, Maasai village visit, massage at the lodge or hotel",
                        itinerary: [
                            "Day 1: Arrival in Arusha - Gateway to Tanzania Safaris - Welcome to Arusha, Tanzania. Begin your adventure in Arusha, the starting point for many Tanzania safaris. Upon arrival at Kilimanjaro International Airport (JRO) or Arusha Airport (ARK), our friendly team will greet you and transfer you to a comfortable hotel in Arusha City. Enjoy a coffee plantation tour, explore vibrant local markets, and take in breathtaking views of Mount Kilimanjaro and Mount Meru.",
                            "Day 2-3: Lake Manyara National Park - Tree-Climbing Lions and Majimoto Hot Springs - Discover Lake Manyara’s unique wildlife. Enjoy two days of exciting game drives, where you’ll encounter elephants, hippos, and the park’s iconic tree-climbing lions. Visit the Majimoto Hot Springs and stay in a luxury lodge with panoramic views.",
                            "Day 4-5: Ngorongoro Crater - The World's Largest Unbroken Caldera - Explore the Ngorongoro Crater, a UNESCO World Heritage Site. Enjoy full-day game drives to see the Big Five and other wildlife. Experience stunning views from the crater rim and a bush lunch on the crater floor.",
                            "Day 6-8: Serengeti National Park - Witness the Great Migration - Immerse yourself in the vast Serengeti plains over three days. Enjoy thrilling game drives, observe dramatic river crossings, and relax in luxurious lodges. Optional hot air balloon safari available."
                        ]
                    },
                    "zanzibar-dar-es-salaam": {
                        title: "Zanzibar and Dar-es-Salaam Beach Safari",
                        days: "5 Days / 4 Nights",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzan1.JPG?alt=media&token=c7296ef2-bcb7-4f3b-873d-40235c767cee" },

                        description: "Experience the ultimate 5-day beach safari, exploring the stunning coastline and vibrant culture of Tanzania. This package takes you from the bustling city of Dar es Salaam to the tranquil and pristine beaches of Unguja Island in Zanzibar, offering a perfect blend of relaxation, adventure, and cultural immersion.",
                        inclusions: "All road transfers, meals and accommodation at selected hotels, guided tours of Stone Town and other sites",
                        exclusions: "Diving and snorkeling, sunset dhow and boat cruises, spa and body massage treatments, local and international flights",
                        itinerary: [
                            "Day 1: Dar es Salaam - Arrival and Relaxation - Begin with a warm welcome at Julius Nyerere International Airport (JNIA) in Dar es Salaam. Relax by the pool or explore local attractions.",
                            "Day 2: Unguja Island, Zanzibar - A Tropical Paradise - Transfer to Zanzibar’s Unguja Island for a variety of beach activities.",
                            "Day 3: Stone Town Tour - Discover the historic charm of Stone Town, a UNESCO World Heritage Site, with its winding alleys and vibrant markets.",
                            "Day 4: Diving and Snorkeling - Explore coral reefs and marine life with diving and snorkeling excursions.",
                            "Day 5: Deep-Sea Fishing & Other Activities - Experience deep-sea fishing, visit spice farms, enjoy a sunset cruise, and relax with spa treatments. Depart from Abeid Amani Karume International Airport."
                        ]
                    },
                    "serengeti-authenticity": {
                        title: "5 Days Serengeti Authenticity Safari",
                        days: "5 Days / 4 Nights",
                        media: { type: "image", src: "https://www.serengetinationalpark.travel/images/sundowner-little-governors-camp.jpg" },

                        description: "Immerse yourself in the authentic beauty of the Serengeti with this 5-day safari. Experience the raw wilderness, diverse wildlife, and traditional Maasai culture in one of Tanzania’s most iconic parks.",
                        inclusions: "All road transfers, game drives, park fees, meals and accommodation",
                        exclusions: "Flights, optional activities, personal expenses",
                        itinerary: [
                            "Day 1: Arrival in Arusha, transfer to lodge",
                            "Day 2: Full-day game drive in Serengeti",
                            "Day 3: Morning safari, Maasai village visit",
                            "Day 4: Explore central Serengeti plains",
                            "Day 5: Depart for Arusha"
                        ]
                    }
                }
            }
        },
        fr: {
            translation: {
                page: { title: "Détails du Voyage - Wendo African Safaris" },
                nav: { back: "Retour" },
                itinerary: { title: "Itinéraire Jour par Jour" },
                participate_form: {
                    title: "Demande de Participation",
                    name_label: "Votre Nom (requis)",
                    email_label: "Votre E-Mail (requis)",
                    phone_label: "Votre Téléphone (ex., +255 673 365 852)",
                    arrival_label: "Date d'Arrivée Estimée",
                    adults_label: "Adultes",
                    adults_1: "1 Adulte",
                    adults_2: "2 Adultes",
                    adults_3: "3 Adultes",
                    adults_4: "4 Adultes",
                    children_label: "Enfants",
                    children_0: "0 Enfants",
                    children_1: "1 Enfant",
                    children_2: "2 Enfants",
                    children_3: "3 Enfants",
                    request_label: "Votre Demande (requis)",
                    contact_label: "Méthode de Contact Préférée :",
                    contact_email: "E-Mail",
                    contact_whatsapp: "WhatsApp",
                    contact_calls: "Appels",
                    submit: "Envoyer la Demande"
                },
                footer: { copyright: "© {{year}} Wendo Safari. Tous droits réservés." },
                request: {
                    success: "Votre demande a été soumise avec succès !",
                    error: "Une erreur s'est produite lors de la soumission de votre demande. Veuillez réessayer."
                },
                trips: {
                    sections: {
                        duration: "Durée",
                        inclusions: "Inclusions",
                        exclusions: "Exclusions"
                    },
                    "north-tanzania-circuit": {
                        title: "Safari du Circuit Nord de la Tanzanie",
                        media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzebraz.mp4?alt=media&token=6b35f19b-d2fe-44e2-875a-66750c5b7b70" },

                        days: "8 Jours / 7 Nuits",
                        description: "Le Safari du Circuit Nord de la Tanzanie est un voyage de 8 jours à travers les paysages les plus emblématiques du nord de la Tanzanie. Commençant à Arusha, vous explorerez la culture locale vibrante avant de vous diriger vers le lac Manyara pour sa faune unique. Vous découvrirez ensuite le cratère de Ngorongoro, riche en faune, et terminerez dans le Serengeti, en assistant à la Grande Migration. En chemin, profitez de lodges de luxe, de safaris guidés et de rencontres culturelles avec les Maasai, mêlant aventure, nature et culture dans un voyage inoubliable.",
                        inclusions: "Tous les transferts routiers, safaris, frais de parc, frais de cratère et frais de concession, services de premiers secours, repas et hébergement",
                        exclusions: "Vols internationaux et locaux, safari en montgolfière, visite d'un village Maasai, massage au lodge ou à l'hôtel",
                        itinerary: [
                            "Jour 1 : Arrivée à Arusha - Porte d'entrée des safaris tanzaniens - Bienvenue à Arusha, Tanzanie. Commencez votre aventure à Arusha, point de départ de nombreux safaris tanzaniens. À votre arrivée à l'aéroport international de Kilimandjaro (JRO) ou à l'aéroport d'Arusha (ARK), notre équipe amicale vous accueillera et vous transférera dans un hôtel confortable de la ville d'Arusha. Profitez d'une visite d'une plantation de café, explorez les marchés locaux animés et admirez les vues imprenables sur le mont Kilimandjaro et le mont Meru.",
                            "Jour 2-3 : Parc National du Lac Manyara - Lions grimpeurs d'arbres et sources chaudes de Majimoto - Découvrez la faune unique du lac Manyara. Profitez de deux jours de safaris excitants, où vous rencontrerez des éléphants, des hippopotames et les emblématiques lions grimpeurs d'arbres du parc. Visitez les sources chaudes de Majimoto et séjournez dans un lodge de luxe avec des vues panoramiques.",
                            "Jour 4-5 : Cratère de Ngorongoro - Le plus grand cratère intact du monde - Explorez le cratère de Ngorongoro, site du patrimoine mondial de l'UNESCO. Profitez de safaris d'une journée complète pour voir les Big Five et autres animaux sauvages. Découvrez des vues magnifiques depuis le bord du cratère et un déjeuner dans la brousse au fond du cratère.",
                            "Jour 6-8 : Parc National du Serengeti - Assistez à la Grande Migration - Plongez-vous dans les vastes plaines du Serengeti pendant trois jours. Profitez de safaris palpitants, observez des traversées de rivières dramatiques et détendez-vous dans des lodges de luxe. Safari en montgolfière optionnel disponible."
                        ]
                    },
                    "zanzibar-dar-es-salaam": {
                        title: "Safari Plage de Zanzibar et Dar-es-Salaam",
                        days: "5 Jours / 4 Nuits",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzan1.JPG?alt=media&token=c7296ef2-bcb7-4f3b-873d-40235c767cee" },

                        description: "Vivez l'ultime safari plage de 5 jours, en explorant la côte magnifique et la culture vibrante de la Tanzanie. Ce forfait vous emmène de la ville animée de Dar es Salaam aux plages tranquilles et immaculées de l'île de Unguja à Zanzibar, offrant un mélange parfait de détente, d'aventure et d'immersion culturelle.",
                        inclusions: "Tous les transferts routiers, repas et hébergement dans des hôtels sélectionnés, visites guidées de Stone Town et d'autres sites",
                        exclusions: "Plongée et snorkeling, croisières au coucher du soleil en dhow et en bateau, traitements de spa et massages corporels, vols locaux et internationaux",
                        itinerary: [
                            "Jour 1 : Dar es Salaam - Arrivée et Détente - Commencez par un accueil chaleureux à l'aéroport international Julius Nyerere (JNIA) à Dar es Salaam. Détendez-vous au bord de la piscine ou explorez les attractions locales.",
                            "Jour 2 : Île de Unguja, Zanzibar - Un Paradis Tropical - Transférez-vous vers l'île de Unguja à Zanzibar pour une variété d'activités de plage.",
                            "Jour 3 : Visite de Stone Town - Découvrez le charme historique de Stone Town, site du patrimoine mondial de l'UNESCO, avec ses ruelles sinueuses et ses marchés animés.",
                            "Jour 4 : Plongée et Snorkeling - Explorez les récifs coralliens et la vie marine avec des excursions de plongée et de snorkeling.",
                            "Jour 5 : Pêche en Haute Mer et Autres Activités - Vivez la pêche en haute mer, visitez des fermes d'épices, profitez d'une croisière au coucher du soleil et détendez-vous avec des traitements de spa. Départ depuis l'aéroport international Abeid Amani Karume."
                        ]
                    },
                    "serengeti-authenticity": {
                        title: "Safari Authenticité du Serengeti de 5 Jours",
                        days: "5 Jours / 4 Nuits",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fchuifamil.jpeg?alt=media&token=670b503c-e051-48dd-8f95-a280ee7855da" },

                        description: "Plongez-vous dans la beauté authentique du Serengeti avec ce safari de 5 jours. Découvrez la nature sauvage brute, la faune diversifiée et la culture traditionnelle Maasai dans l'un des parcs les plus emblématiques de Tanzanie.",
                        inclusions: "Tous les transferts routiers, safaris, frais de parc, repas et hébergement",
                        exclusions: "Vols, activités optionnelles, dépenses personnelles",
                        itinerary: [
                            "Jour 1 : Arrivée à Arusha, transfert au lodge",
                            "Jour 2 : Safari d'une journée complète dans le Serengeti",
                            "Jour 3 : Safari matinal, visite d'un village Maasai",
                            "Jour 4 : Explorez les plaines centrales du Serengeti",
                            "Jour 5 : Départ pour Arusha"
                        ]
                    }
                }
            }
        },
        es: {
            translation: {
                page: { title: "Detalles del Viaje - Wendo African Safaris" },
                nav: { back: "Volver" },
                itinerary: { title: "Itinerario Día a Día" },
                participate_form: {
                    title: "Solicitud de Participación",
                    name_label: "Tu Nombre (requerido)",
                    email_label: "Tu Correo Electrónico (requerido)",
                    phone_label: "Tu Teléfono (ej., +255 673 365 852)",
                    arrival_label: "Fecha Estimada de Llegada",
                    adults_label: "Adultos",
                    adults_1: "1 Adulto",
                    adults_2: "2 Adultos",
                    adults_3: "3 Adultos",
                    adults_4: "4 Adultos",
                    children_label: "Niños",
                    children_0: "0 Niños",
                    children_1: "1 Niño",
                    children_2: "2 Niños",
                    children_3: "3 Niños",
                    request_label: "Tu Solicitud (requerido)",
                    contact_label: "Método de Contacto Preferido:",
                    contact_email: "Correo Electrónico",
                    contact_whatsapp: "WhatsApp",
                    contact_calls: "Llamadas",
                    submit: "Enviar Solicitud"
                },
                footer: { copyright: "© {{year}} Wendo Safari. Todos los derechos reservados." },
                request: {
                    success: "¡Tu solicitud ha sido enviada con éxito!",
                    error: "Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo."
                },
                trips: {
                    sections: {
                        duration: "Duración",
                        inclusions: "Inclusiones",
                        exclusions: "Exclusiones"
                    },
                    "north-tanzania-circuit": {
                        title: "Safari del Circuito Norte de Tanzania",
                        days: "8 Días / 7 Noches",
                        media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzebraz.mp4?alt=media&token=6b35f19b-d2fe-44e2-875a-66750c5b7b70" },

                        description: "El Safari del Circuito Norte de Tanzania es un viaje de 8 días a través de los paisajes más emblemáticos del norte de Tanzania. Comenzando en Arusha, explorarás la vibrante cultura local antes de dirigirte al Parque Nacional del Lago Manyara por su fauna única. Luego experimentarás el Cráter de Ngorongoro, rico en vida silvestre, y terminarás en el Serengeti, presenciando la Gran Migración. En el camino, disfruta de alojamientos de lujo, safaris guiados y encuentros culturales con los Maasai, combinando aventura, naturaleza y cultura en un viaje inolvidable.",
                        inclusions: "Todos los traslados por carretera, safaris, tarifas de parques, tarifas de cráteres y tarifa de concesión, servicios de primeros auxilios, comidas y alojamiento",
                        exclusions: "Vuelos internacionales y locales, safari en globo, visita a una aldea Maasai, masajes en el lodge o hotel",
                        itinerary: [
                            "Día 1: Llegada a Arusha - Puerta de entrada a los safaris de Tanzania - Bienvenido a Arusha, Tanzania. Comienza tu aventura en Arusha, el punto de partida para muchos safaris en Tanzania. A tu llegada al Aeropuerto Internacional de Kilimanjaro (JRO) o al Aeropuerto de Arusha (ARK), nuestro amable equipo te recibirá y te trasladará a un cómodo hotel en la ciudad de Arusha. Disfruta de un recorrido por una plantación de café, explora los vibrantes mercados locales y contempla las impresionantes vistas del Monte Kilimanjaro y el Monte Meru.",
                            "Día 2-3: Parque Nacional del Lago Manyara - Leones trepadores de árboles y fuentes termales de Majimoto - Descubre la fauna única del Lago Manyara. Disfruta de dos días de emocionantes safaris, donde encontrarás elefantes, hipopótamos y los icónicos leones trepadores de árboles del parque. Visita las fuentes termales de Majimoto y hospédate en un lodge de lujo con vistas panorámicas.",
                            "Día 4-5: Cráter de Ngorongoro - El cráter intacto más grande del mundo - Explora el Cráter de Ngorongoro, un sitio del Patrimonio Mundial de la UNESCO. Disfruta de safaris de día completo para ver los cinco grandes y otra fauna. Experimenta vistas impresionantes desde el borde del cráter y un almuerzo en la selva en el fondo del cráter.",
                            "Día 6-8: Parque Nacional del Serengeti - Presencia la Gran Migración - Sumérgete en las vastas llanuras del Serengeti durante tres días. Disfruta de emocionantes safaris, observa cruces de ríos dramáticos y relájate en lodges de lujo. Safari en globo opcional disponible."
                        ]
                    },
                    "zanzibar-dar-es-salaam": {
                        title: "Safari de Playa en Zanzíbar y Dar-es-Salaam",
                        days: "5 Días / 4 Noches",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzan1.JPG?alt=media&token=c7296ef2-bcb7-4f3b-873d-40235c767cee" },

                        description: "Vive el safari de playa definitivo de 5 días, explorando la impresionante costa y la vibrante cultura de Tanzania. Este paquete te lleva desde la bulliciosa ciudad de Dar es Salaam hasta las tranquilas y prístinas playas de la Isla de Unguja en Zanzíbar, ofreciendo una combinación perfecta de relajación, aventura e inmersión cultural.",
                        inclusions: "Todos los traslados por carretera, comidas y alojamiento en hoteles seleccionados, visitas guiadas a Stone Town y otros sitios",
                        exclusions: "Buceo y snorkel, cruceros en dhow al atardecer y en barco, tratamientos de spa y masajes corporales, vuelos locales e internacionales",
                        itinerary: [
                            "Día 1: Dar es Salaam - Llegada y Relajación - Comienza con una cálida bienvenida en el Aeropuerto Internacional Julius Nyerere (JNIA) en Dar es Salaam. Relájate junto a la piscina o explora las atracciones locales.",
                            "Día 2: Isla de Unguja, Zanzíbar - Un Paraíso Tropical - Traslado a la Isla de Unguja en Zanzíbar para una variedad de actividades en la playa.",
                            "Día 3: Tour por Stone Town - Descubre el encanto histórico de Stone Town, un sitio del Patrimonio Mundial de la UNESCO, con sus callejones sinuosos y mercados vibrantes.",
                            "Día 4: Buceo y Snorkel - Explora arrecifes de coral y vida marina con excursiones de buceo y snorkel.",
                            "Día 5: Pesca en Alta Mar y Otras Actividades - Experimenta la pesca en alta mar, visita granjas de especias, disfruta de un crucero al atardecer y relájate con tratamientos de spa. Salida desde el Aeropuerto Internacional Abeid Amani Karume."
                        ]
                    },
                    "serengeti-authenticity": {
                        title: "Safari de Autenticidad del Serengeti de 5 Días",
                        days: "5 Días / 4 Noches",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fchuifamil.jpeg?alt=media&token=670b503c-e051-48dd-8f95-a280ee7855da" },

                        description: "Sumérgete en la auténtica belleza del Serengeti con este safari de 5 días. Experimenta la naturaleza salvaje pura, la fauna diversa y la cultura tradicional Maasai en uno de los parques más icónicos de Tanzania.",
                        inclusions: "Todos los traslados por carretera, safaris, tarifas de parques, comidas y alojamiento",
                        exclusions: "Vuelos, actividades opcionales, gastos personales",
                        itinerary: [
                            "Día 1: Llegada a Arusha, traslado al lodge",
                            "Día 2: Safari de día completo en el Serengeti",
                            "Día 3: Safari matutino, visita a una aldea Maasai",
                            "Día 4: Explora las llanuras centrales del Serengeti",
                            "Día 5: Salida hacia Arusha"
                        ]
                    }
                }
            }
        },
        sw: {
            translation: {
                page: { title: "Maelezo ya Safari - Wendo African Safaris" },
                nav: { back: "Rudi" },
                itinerary: { title: "Ratiba ya Siku kwa Siku" },
                participate_form: {
                    title: "Ombi la Kushiriki",
                    name_label: "Jina Lako (linahitajika)",
                    email_label: "Barua Pepe Yako (inahitajika)",
                    phone_label: "Simu Yako (mfano, +255 673 365 852)",
                    arrival_label: "Tarehe ya Kuwasili Inayokadiriwa",
                    adults_label: "Watu Wazima",
                    adults_1: "Mtu Mzima 1",
                    adults_2: "Watu Wazima 2",
                    adults_3: "Watu Wazima 3",
                    adults_4: "Watu Wazima 4",
                    children_label: "Watoto",
                    children_0: "Hakuna Watoto",
                    children_1: "Mtoto 1",
                    children_2: "Watoto 2",
                    children_3: "Watoto 3",
                    request_label: "Ombi Lako (linahitajika)",
                    contact_label: "Njia ya Mawasiliano Inayopendelewa:",
                    contact_email: "Barua Pepe",
                    contact_whatsapp: "WhatsApp",
                    contact_calls: "Simu",
                    submit: "Tuma Ombi"
                },
                footer: { copyright: "© {{year}} Wendo Safari. Haki Zote Zimehifadhiwa." },
                request: {
                    success: "Ombi lako limewasilishwa kwa mafanikio!",
                    error: "Kulikuwa na hitilafu wakati wa kuwasilisha ombi lako. Tafadhali jaribu tena."
                },
                trips: {
                    sections: {
                        duration: "Muda",
                        inclusions: "Vijumuishi",
                        exclusions: "Visivyojumuishwa"
                    },
                    "north-tanzania-circuit": {
                        title: "Safari ya Mzunguko wa Kaskazini mwa Tanzania",
                        days: "Siku 8 / Usiku 7",
                        media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzebraz.mp4?alt=media&token=6b35f19b-d2fe-44e2-875a-66750c5b7b70" },

                        description: "Safari ya Mzunguko wa Kaskazini mwa Tanzania ni safari ya siku 8 kupitia mandhari za kihistoria za kaskazini mwa Tanzania. Ikianza Arusha, utachunguza utamaduni wa ndani uliojaa nguvu kabla ya kuelekea Hifadhi ya Taifa ya Ziwa Manyara kwa wanyamapori wake wa kipekee. Kisha utapata uzoefu wa Crater ya Ngorongoro, iliyojaa wanyamapori, na kumalizia katika Serengeti, ukishuhudia Uhamiaji Mkuu. Njiani, furahia lodges za kifahari, safari za gari za kuongozwa, na mwingiliano wa kitamaduni na Wamasai, ukichanganya adventure, asili, na utamaduni katika safari isiyosahaulika.",
                        inclusions: "Uhamisho wote wa barabarani, safari za gari, ada za mbuga, ada za kreta na ada ya makubaliano, huduma za kwanza, chakula na malazi",
                        exclusions: "Ndege za kimataifa na za ndani, safari ya puto, ziara ya kijiji cha Wamasai, masaji katika lodge au hoteli",
                        itinerary: [
                            "Siku ya 1: Kuwasili Arusha - Lango la Safari za Tanzania - Karibu Arusha, Tanzania. Anza adventure yako huko Arusha, mahali pa kuanzia kwa safari nyingi za Tanzania. Unapofika kwenye Uwanja wa Ndege wa Kimataifa wa Kilimanjaro (JRO) au Uwanja wa Ndege wa Arusha (ARK), timu yetu ya kirafiki itakukaribisha na kukuhamisha hadi hoteli ya starehe katika Jiji la Arusha. Furahia ziara ya shamba la kahawa, chunguza masoko ya ndani yanayong'aa, na ufurahie mandhari ya kupendeza ya Mlima Kilimanjaro na Mlima Meru.",
                            "Siku ya 2-3: Hifadhi ya Taifa ya Ziwa Manyara - Simba Wanaopanda Miti na Chemchemi za Majimoto - Gundua wanyamapori wa kipekee wa Ziwa Manyara. Furahia siku mbili za safari za gari za kufurahisha, ambapo utakutana na tembo, viboko, na simba wanaopanda miti wa kihistoria wa hifadhi hiyo. Tembelea Chemchemi za Majimoto na ukae katika lodge ya kifahari yenye mandhari ya panoramic.",
                            "Siku ya 4-5: Kreta ya Ngorongoro - Kreta Isiyovunjika Kubwa Zaidi Duniani - Chunguza Kreta ya Ngorongoro, Tovuti ya Urithi wa Dunia wa UNESCO. Furahia safari za gari za siku nzima ili kuona Big Five na wanyamapori wengine. Pata uzoefu wa mandhari ya kustaajabisha kutoka ukingo wa kreta na chakula cha mchana cha msituni chini ya kreta.",
                            "Siku ya 6-8: Hifadhi ya Taifa ya Serengeti - Shuhudia Uhamiaji Mkuu - Jizamishe katika nyanda za Serengeti za wasaa kwa siku tatu. Furahia safari za gari za kufurahisha, tazama vivuko vya mto vya kushangaza, na pumzika katika lodges za kifahari. Safari ya puto ya hewa moto ya hiari inapatikana."
                        ]
                    },
                    "zanzibar-dar-es-salaam": {
                        title: "Safari ya Pwani ya Zanzibar na Dar-es-Salaam",
                        days: "Siku 5 / Usiku 4",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzan1.JPG?alt=media&token=c7296ef2-bcb7-4f3b-873d-40235c767cee" },

                        description: "Pata uzoefu wa safari ya pwani ya siku 5, ukichunguza pwani ya kupendeza na utamaduni uliojaa nguvu wa Tanzania. Hifadhi hii inakuchukua kutoka mji uliojaa msongamano wa Dar es Salaam hadi pwani za utulivu na safi za Kisiwa cha Unguja huko Zanzibar, ikitoa mchanganyiko bora wa kupumzika, adventure, na kujizamia katika utamaduni.",
                        inclusions: "Uhamisho wote wa barabarani, chakula na malazi katika hoteli zilizochaguliwa, ziara za kuongozwa za Stone Town na maeneo mengine",
                        exclusions: "Kupiga mbizi na snorkeling, safari za meli za jua za jioni na boti, matibabu ya spa na masaji ya mwili, ndege za ndani na za kimataifa",
                        itinerary: [
                            "Siku ya 1: Dar es Salaam - Kuwasili na Kupumzika - Anza na karibu ya joto kwenye Uwanja wa Ndege wa Kimataifa wa Julius Nyerere (JNIA) huko Dar es Salaam. Pumzika kando ya bwawa au chunguza vivutio vya ndani.",
                            "Siku ya 2: Kisiwa cha Unguja, Zanzibar - Paradiso ya Kitropiki - Hamia kwenye Kisiwa cha Unguja cha Zanzibar kwa shughuli mbalimbali za pwani.",
                            "Siku ya 3: Ziara ya Stone Town - Gundua haiba ya kihistoria ya Stone Town, Tovuti ya Urithi wa Dunia wa UNESCO, yenye vijia vyake vinavyopinda na masoko yaliyojaa nguvu.",
                            "Siku ya 4: Kupiga Mbizi na Snorkeling - Chunguza miamba ya matumbawe na maisha ya baharini na safari za kupiga mbizi na snorkeling.",
                            "Siku ya 5: Uvuvi wa Bahari ya Juu na Shughuli Zengine - Pata uzoefu wa uvuvi wa bahari ya juu, tembelea mashamba ya viungo, furahia safari ya meli ya jua la jioni, na pumzika na matibabu ya spa. Ondoka kutoka Uwanja wa Ndege wa Kimataifa wa Abeid Amani Karume."
                        ]
                    },
                    "serengeti-authenticity": {
                        title: "Safari ya Uhalisia wa Serengeti ya Siku 5",
                        days: "Siku 5 / Usiku 4",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fchuifamil.jpeg?alt=media&token=670b503c-e051-48dd-8f95-a280ee7855da" },

                        description: "Jizamishe katika uzuri wa asili wa Serengeti na safari hii ya siku 5. Pata uzoefu wa pori za kweli, wanyamapori wa aina mbalimbali, na utamaduni wa jadi wa Wamasai katika moja ya mbuga za kihistoria za Tanzania.",
                        inclusions: "Uhamisho wote wa barabarani, safari za gari, ada za mbuga, chakula na malazi",
                        exclusions: "Ndege, shughuli za hiari, gharama za kibinafsi",
                        itinerary: [
                            "Siku ya 1: Kuwasili Arusha, kuhamishwa hadi lodge",
                            "Siku ya 2: Safari ya siku nzima huko Serengeti",
                            "Siku ya 3: Safari ya asubuhi, ziara ya kijiji cha Wamasai",
                            "Siku ya 4: Chunguza nyanda za kati za Serengeti",
                            "Siku ya 5: Ondoka kuelekea Arusha"
                        ]
                    }
                }
            }
        },
        de: {
            translation: {
                page: { title: "Reisedetails - Wendo African Safaris" },
                nav: { back: "Zurück" },
                itinerary: { title: "Täglicher Reiseplan" },
                participate_form: {
                    title: "Antrag auf Teilnahme",
                    name_label: "Ihr Name (erforderlich)",
                    email_label: "Ihre E-Mail (erforderlich)",
                    phone_label: "Ihre Telefonnummer (z.B., +255 673 365 852)",
                    arrival_label: "Geschätztes Ankunftsdatum",
                    adults_label: "Erwachsene",
                    adults_1: "1 Erwachsener",
                    adults_2: "2 Erwachsene",
                    adults_3: "3 Erwachsene",
                    adults_4: "4 Erwachsene",
                    children_label: "Kinder",
                    children_0: "0 Kinder",
                    children_1: "1 Kind",
                    children_2: "2 Kinder",
                    children_3: "3 Kinder",
                    request_label: "Ihre Anfrage (erforderlich)",
                    contact_label: "Bevorzugte Kontaktmethode:",
                    contact_email: "E-Mail",
                    contact_whatsapp: "WhatsApp",
                    contact_calls: "Anrufe",
                    submit: "Anfrage Senden"
                },
                footer: { copyright: "© {{year}} Wendo Safari. Alle Rechte vorbehalten." },
                request: {
                    success: "Ihre Anfrage wurde erfolgreich übermittelt!",
                    error: "Es gab einen Fehler beim Übermitteln Ihrer Anfrage. Bitte versuchen Sie es erneut."
                },
                trips: {
                    sections: {
                        duration: "Dauer",
                        inclusions: "Inklusivleistungen",
                        exclusions: "Ausschlüsse"
                    },
                    "north-tanzania-circuit": {
                        title: "Nordtansania-Rundreise-Safari",
                        days: "8 Tage / 7 Nächte",
                        media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzebraz.mp4?alt=media&token=6b35f19b-d2fe-44e2-875a-66750c5b7b70" },

                        description: "Die Nordtansania-Rundreise-Safari ist eine 8-tägige Reise durch die ikonischsten Landschaften Nordtansanias. Beginnend in Arusha, erkunden Sie die lebendige lokale Kultur, bevor Sie zum Lake Manyara Nationalpark aufbrechen, um seine einzigartige Tierwelt zu erleben. Anschließend besuchen Sie den tierreichen Ngorongoro-Krater und beenden die Reise im Serengeti, wo Sie die Große Migration beobachten. Unterwegs genießen Sie luxuriöse Lodges, geführte Pirschfahrten und kulturelle Begegnungen mit den Maasai, die Abenteuer, Natur und Kultur zu einem unvergesslichen Erlebnis vereinen.",
                        inclusions: "Alle Straßentransfers, Pirschfahrten, Parkgebühren, Kratergebühren und Konzessionsgebühren, Erste-Hilfe-Dienste, Mahlzeiten und Unterkunft",
                        exclusions: "Internationale und lokale Flüge, Ballonsafari, Besuch eines Maasai-Dorfes, Massagen in der Lodge oder im Hotel",
                        itinerary: [
                            "Tag 1: Ankunft in Arusha - Tor zu Tansanias Safaris - Willkommen in Arusha, Tansania. Beginnen Sie Ihr Abenteuer in Arusha, dem Ausgangspunkt für viele Tansania-Safaris. Bei Ihrer Ankunft am Kilimanjaro International Airport (JRO) oder Arusha Airport (ARK) wird unser freundliches Team Sie begrüßen und Sie in ein komfortables Hotel in der Stadt Arusha bringen. Genießen Sie eine Kaffeefarmtour, erkunden Sie lebhafte lokale Märkte und lassen Sie sich von den atemberaubenden Ausblicken auf den Kilimandscharo und den Mount Meru verzaubern.",
                            "Tag 2-3: Lake Manyara Nationalpark - Baumkletternde Löwen und Majimoto-Heiße Quellen - Entdecken Sie die einzigartige Tierwelt des Lake Manyara. Genießen Sie zwei Tage spannender Pirschfahrten, bei denen Sie Elefanten, Flusspferde und die ikonischen baumkletternden Löwen des Parks begegnen. Besuchen Sie die Majimoto-Heißen Quellen und übernachten Sie in einer luxuriösen Lodge mit Panoramablick.",
                            "Tag 4-5: Ngorongoro-Krater - Der größte unversehrte Krater der Welt - Erkunden Sie den Ngorongoro-Krater, ein UNESCO-Welterbe. Genießen Sie ganztägige Pirschfahrten, um die Big Five und andere Wildtiere zu sehen. Erleben Sie beeindruckende Ausblicke vom Kraterrand und ein Buschmittagessen am Kraterboden.",
                            "Tag 6-8: Serengeti-Nationalpark - Erleben Sie die Große Migration - Tauchen Sie drei Tage lang in die weiten Ebenen der Serengeti ein. Genießen Sie aufregende Pirschfahrten, beobachten Sie dramatische Flussüberquerungen und entspannen Sie in luxuriösen Lodges. Optional ist eine Heißluftballon-Safari verfügbar."
                        ]
                    },
                    "zanzibar-dar-es-salaam": {
                        title: "Sansibar und Dar-es-Salaam Strand-Safari",
                        days: "5 Tage / 4 Nächte",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzan1.JPG?alt=media&token=c7296ef2-bcb7-4f3b-873d-40235c767cee" },

                        description: "Erleben Sie die ultimative 5-tägige Strand-Safari, bei der Sie die atemberaubende Küste und die lebendige Kultur Tansanias erkunden. Dieses Paket führt Sie von der geschäftigen Stadt Dar es Salaam zu den ruhigen und unberührten Stränden der Insel Unguja auf Sansibar und bietet eine perfekte Mischung aus Entspannung, Abenteuer und kulturellem Eintauchen.",
                        inclusions: "Alle Straßentransfers, Mahlzeiten und Unterkunft in ausgewählten Hotels, geführte Touren durch Stone Town und andere Sehenswürdigkeiten",
                        exclusions: "Tauchen und Schnorcheln, Sonnenuntergangs-Dhau- und Bootsfahrten, Spa- und Körpermassagebehandlungen, lokale und internationale Flüge",
                        itinerary: [
                            "Tag 1: Dar es Salaam - Ankunft und Entspannung - Beginnen Sie mit einer herzlichen Begrüßung am Julius Nyerere International Airport (JNIA) in Dar es Salaam. Entspannen Sie am Pool oder erkunden Sie lokale Sehenswürdigkeiten.",
                            "Tag 2: Unguja-Insel, Sansibar - Ein tropisches Paradies - Transfer zur Unguja-Insel auf Sansibar für eine Vielzahl von Strandaktivitäten.",
                            "Tag 3: Stone Town Tour - Entdecken Sie den historischen Charme von Stone Town, einem UNESCO-Welterbe, mit seinen gewundenen Gassen und lebhaften Märkten.",
                            "Tag 4: Tauchen und Schnorcheln - Erkunden Sie Korallenriffe und Meeresleben mit Tauch- und Schnorchelausflügen.",
                            "Tag 5: Hochseefischen & andere Aktivitäten - Erleben Sie Hochseefischen, besuchen Sie Gewürzfarmen, genießen Sie eine Sonnenuntergangs-Kreuzfahrt und entspannen Sie mit Spa-Behandlungen. Abreise vom Abeid Amani Karume International Airport."
                        ]
                    },
                    "serengeti-authenticity": {
                        title: "5-Tage-Serengeti-Authentizitäts-Safari",
                        days: "5 Tage / 4 Nächte",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fchuifamil.jpeg?alt=media&token=670b503c-e051-48dd-8f95-a280ee7855da" },

                        description: "Tauchen Sie ein in die authentische Schönheit der Serengeti mit dieser 5-tägigen Safari. Erleben Sie die raue Wildnis, die vielfältige Tierwelt und die traditionelle Maasai-Kultur in einem der ikonischsten Parks Tansanias.",
                        inclusions: "Alle Straßentransfers, Pirschfahrten, Parkgebühren, Mahlzeiten und Unterkunft",
                        exclusions: "Flüge, optionale Aktivitäten, persönliche Ausgaben",
                        itinerary: [
                            "Tag 1: Ankunft in Arusha, Transfer zur Lodge",
                            "Tag 2: Ganztägige Pirschfahrt in der Serengeti",
                            "Tag 3: Morgensafari, Besuch eines Maasai-Dorfes",
                            "Tag 4: Erkundung der zentralen Serengeti-Ebenen",
                            "Tag 5: Abreise nach Arusha"
                        ]
                    }
                }
            }
        },
        zh: {
            translation: {
                page: { title: "旅行详情 - Wendo African Safaris" },
                nav: { back: "返回" },
                itinerary: { title: "每日行程" },
                participate_form: {
                    title: "参与请求",
                    name_label: "您的姓名（必填）",
                    email_label: "您的电子邮件（必填）",
                    phone_label: "您的电话（例如，+255 673 365 852）",
                    arrival_label: "预计到达日期",
                    adults_label: "成人",
                    adults_1: "1 名成人",
                    adults_2: "2 名成人",
                    adults_3: "3 名成人",
                    adults_4: "4 名成人",
                    children_label: "儿童",
                    children_0: "0 名儿童",
                    children_1: "1 名儿童",
                    children_2: "2 名儿童",
                    children_3: "3 名儿童",
                    request_label: "您的请求（必填）",
                    contact_label: "首选联系方式：",
                    contact_email: "电子邮件",
                    contact_whatsapp: "WhatsApp",
                    contact_calls: "电话",
                    submit: "提交请求"
                },
                footer: { copyright: "© {{year}} Wendo Safari。保留所有权利。" },
                request: {
                    success: "您的请求已成功提交！",
                    error: "提交您的请求时出错。请重试。"
                },
                trips: {
                    sections: {
                        duration: "时长",
                        inclusions: "包含内容",
                        exclusions: "不包含内容"
                    },
                    "north-tanzania-circuit": {
                        title: "坦桑尼亚北部环线Safari",
                        days: "8天 / 7晚",
                        media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzebraz.mp4?alt=media&token=6b35f19b-d2fe-44e2-875a-66750c5b7b70" },

                        description: "坦桑尼亚北部环线Safari是一次为期8天的旅程，穿越坦桑尼亚北部最具标志性的景观。从阿鲁沙开始，您将探索充满活力的当地文化，然后前往马尼亚拉湖国家公园体验其独特的野生动物。随后，您将体验丰富的恩戈罗恩戈罗火山口野生动物，并在塞伦盖蒂结束，目睹大迁徙。一路上，享受豪华旅馆、导游带领的游猎车和与马赛人的文化互动，将冒险、自然和文化融合成一次难忘的旅行。",
                        inclusions: "所有公路交通、游猎车、公园费用、火山口费用和特许权费用、急救服务、餐饮和住宿",
                        exclusions: "国际和本地航班、热气球游猎、马赛村参观、旅馆或酒店的按摩",
                        itinerary: [
                            "第1天：抵达阿鲁沙 - 坦桑尼亚Safari的门户 - 欢迎来到坦桑尼亚阿鲁沙。在阿鲁沙开始您的冒险，这是许多坦桑尼亚Safari的起点。抵达乞力马扎罗国际机场（JRO）或阿鲁沙机场（ARK）后，我们友好的团队将迎接您，并将您送往阿鲁沙市一家舒适的酒店。享受咖啡种植园之旅，探索充满活力的当地市场，欣赏乞力马扎罗山和梅鲁山的壮丽景色。",
                            "第2-3天：马尼亚拉湖国家公园 - 爬树狮子和马吉莫托温泉 - 发现马尼亚拉湖独特的野生动物。享受两天的激动人心的游猎车之旅，您将遇到大象、河马和公园标志性的爬树狮子。参观马吉莫托温泉，入住享有全景的豪华旅馆。",
                            "第4-5天：恩戈罗恩戈罗火山口 - 世界上最大的完整火山口 - 探索恩戈罗恩戈罗火山口，联合国教科文组织世界遗产。享受全天的游猎车之旅，观赏五大动物和其他野生动物。体验从火山口边缘的壮观景色和火山口底部的丛林午餐。",
                            "第6-8天：塞伦盖蒂国家公园 - 目睹大迁徙 - 在三天内沉浸在塞伦盖蒂广阔的平原中。享受激动人心的游猎车之旅，观察戏剧性的河道穿越，放松在豪华旅馆中。可选择热气球游猎。"
                        ]
                    },
                    "zanzibar-dar-es-salaam": {
                        title: "桑给巴尔和达累斯萨拉姆海滩Safari",
                        days: "5天 / 4晚",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fzan1.JPG?alt=media&token=c7296ef2-bcb7-4f3b-873d-40235c767cee" },

                        description: "体验终极5天海滩Safari，探索坦桑尼亚令人叹为观止的海岸线和充满活力的文化。这个套餐将您从繁华的达累斯萨拉姆市带到桑给巴尔彭巴岛宁静而原始的海滩，提供放松、冒险和文化沉浸的完美融合。",
                        inclusions: "所有公路交通、选定酒店的餐饮和住宿、石镇和其他景点的导游游览",
                        exclusions: "潜水和浮潜、日落独桅帆船和游艇巡游、Spa和身体按摩治疗、本地和国际航班",
                        itinerary: [
                            "第1天：达累斯萨拉姆 - 抵达和放松 - 在达累斯萨拉姆的朱利叶斯·尼雷尔国际机场（JNIA）受到热烈欢迎。在泳池边放松或探索当地景点。",
                            "第2天：桑给巴尔彭巴岛 - 热带天堂 - 转移到桑给巴尔的彭巴岛，体验各种海滩活动。",
                            "第3天：石镇游览 - 发现石镇的历史魅力，联合国教科文组织世界遗产，拥有蜿蜒的小巷和充满活力的市场。",
                            "第4天：潜水和浮潜 - 通过潜水和浮潜探险探索珊瑚礁和海洋生物。",
                            "第5天：深海捕鱼及其他活动 - 体验深海捕鱼，参观香料农场，享受日落巡游，放松享受Spa治疗。从阿贝德·阿马尼·卡鲁姆国际机场出发。"
                        ]
                    },
                    "serengeti-authenticity": {
                        title: "5天塞伦盖蒂真实Safari",
                        days: "5天 / 4晚",
                        media: { type: "image", src: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fchuifamil.jpeg?alt=media&token=670b503c-e051-48dd-8f95-a280ee7855da" },

                        description: "通过这次5天的Safari沉浸在塞伦盖蒂的真实美景中。体验原始的荒野、多样的野生动物和坦桑尼亚最具标志性公园之一的传统马赛文化。",
                        inclusions: "所有公路交通、游猎车、公园费用、餐饮和住宿",
                        exclusions: "航班、可选活动、个人费用",
                        itinerary: [
                            "第1天：抵达阿鲁沙，转移到旅馆",
                            "第2天：塞伦盖蒂全天游猎车",
                            "第3天：早晨Safari，马赛村参观",
                            "第4天：探索塞伦盖蒂中部平原",
                            "第5天：出发前往阿鲁沙"
                        ]
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
    loadTrip();
});

// Update static content with translations
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

// Load trip details and handle form submission
function loadTrip() {
    const urlParams = new URLSearchParams(window.location.search);
    const tripId = urlParams.get('trip');
    console.log('Trip ID from URL:', tripId);

    const trip = i18next.t(`trips.${tripId}`, { returnObjects: true }) || i18next.t('trips.north-tanzania-circuit', { returnObjects: true });
    console.log('Selected Trip:', trip);

    if (!trip.title) {
        document.getElementById('trip-title').textContent = i18next.t('request.error', { defaultValue: "Trip Not Found" });
        document.getElementById('trip-details').textContent = i18next.t('request.error', { defaultValue: "Sorry, this trip could not be loaded." });
        return;
    }

    document.getElementById('trip-title').textContent = trip.title;
    document.getElementById('trip-infomax').innerHTML = `
        <p class="mt-4 text-gray-600 leading-relaxed">${trip.description}</p>
        <p><strong class="text-green-700">${i18next.t('trips.sections.duration', { defaultValue: "Duration" })}:</strong> ${trip.days}</p>
    `;
    const mediaElement = trip.media.type === "video"
        ? `<div class="relative w-full h-full" style="padding-top: 50%;"><video src="${trip.media.src}" muted loop autoplay class="absolute top-0 left-0 w-full h-full object-cover"></video></div>`
        : `<div class="relative w-full" style="padding-top: 56.25%;"><img src="${trip.media.src}" alt="${trip.title}" loading="lazy" class="absolute top-0 left-0 w-full h-full object-cover"></div>`;
    document.getElementById('trip-media').innerHTML = mediaElement;

    document.getElementById('trip-details').innerHTML = `
        <p><strong class="text-green-700">${i18next.t('trips.sections.inclusions', { defaultValue: "Inclusions" })}:</strong> ${trip.inclusions}</p>
        <p><strong class="text-green-700">${i18next.t('trips.sections.exclusions', { defaultValue: "Exclusions" })}:</strong> ${trip.exclusions}</p>
    `;

    const itineraryList = document.getElementById('itinerary-list');
    itineraryList.innerHTML = '';
    trip.itinerary.forEach(day => {
        const li = document.createElement('li');
        li.textContent = day;
        li.classList.add('text-gray-600', 'itinerary-item');
        itineraryList.appendChild(li);
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Form submission
    const participateForm = document.getElementById('participate-form');
    const submitText = document.getElementById('submit-text');
    const submitSpinner = document.getElementById('submit-spinner');
    const submitButton = participateForm.querySelector('button');

    participateForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitText.classList.add('hidden');
        submitSpinner.classList.remove('hidden');
        submitButton.disabled = true;

        const requestData = {
            tripTitle: trip.title,
            name: document.getElementById('part-name').value,
            email: document.getElementById('part-email').value,
            phone: document.getElementById('part-phone').value || "Not provided",
            arrivalDate: document.getElementById('part-arrival').value || "Not specified",
            adults: document.getElementById('part-adults').value,
            children: document.getElementById('part-children').value,
            request: document.getElementById('part-request').value,
            contactMethod: participateForm.querySelector('input[name="part-contact"]:checked').value,
            timestamp: serverTimestamp()
        };

        try {
            await addDoc(collection(db, 'tripRequests'), requestData);
            alert(i18next.t('request.success', { defaultValue: 'Your request has been submitted successfully!' }));
            participateForm.reset();
        } catch (error) {
            console.error('Error submitting request:', error);
            alert(i18next.t('request.error', { defaultValue: 'There was an error submitting your request. Please try again.' }));
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