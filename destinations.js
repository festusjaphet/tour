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

// Expanded Destinations Data
const destinations = [
    {
        image: "https://www.serengetinationalpark.travel/images/governors-hot-air-baloon-kenya.jpg",
        isVideo: false,
        title: "Serengeti National Park",
        description: "Witness the awe-inspiring Great Migration, where millions of wildebeest and zebras traverse the endless plains. This UNESCO World Heritage Site is a paradise for wildlife enthusiasts, offering sightings of the Big Five and vast, untouched landscapes."
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fsimbafamily.jpeg?alt=media&token=1befb5d8-d339-422c-ad26-1e792fdd7f92",
        isVideo: false,
        title: "Ngorongoro Conservation Area",
        description: "Explore the Ngorongoro Crater, the world’s largest unbroken caldera, teeming with diverse wildlife. Home to the Big Five and the Maasai people, this area blends natural wonders with rich cultural heritage."
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Ftembo.jpeg?alt=media&token=e6e344a0-1241-4162-858a-2445fcf9b44b",
        isVideo: false,
        title: "Tarangire National Park",
        description: "Discover a haven for elephant herds amidst ancient baobab trees. Known for its dramatic landscapes and seasonal swamps, Tarangire offers a quieter, yet equally thrilling safari experience."
    },
    {
        image: "assets/Manyara.jpeg",
        isVideo: false,
        title: "Lake Manyara National Park",
        description: "Marvel at tree-climbing lions and flocks of flamingos along the alkaline lake. This park’s diverse ecosystems, from groundwater forests to open plains, make it a hidden gem in Northern Tanzania."
    },
    {
        image: "assets/Arusha.jpeg",
        isVideo: false,
        title: "Arusha National Park",
        description: "Experience diverse landscapes, from the lush slopes of Mount Meru to serene lakes and rolling hills. Perfect for hiking, canoeing, and spotting giraffes against a backdrop of volcanic beauty."
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/feskilimo.appspot.com/o/Tour%2Fkilimanjarol.mp4?alt=media&token=63a36a66-08d1-4114-a3ab-560a809d65a5",
        isVideo: true,
        title: "Mount Kilimanjaro",
        description: "Embark on the adventure of a lifetime by climbing Africa’s highest peak. With its snow-capped summit and breathtaking views, Kilimanjaro offers a challenge and reward for every trekker."
    },
    {
        image: "assets/zanzibar.jpg",
        isVideo: false,
        title: "Zanzibar Archipelago",
        description: "Relax on pristine beaches and dive into turquoise waters teeming with marine life. Explore Stone Town’s historic alleys, spice markets, and the island’s rich Swahili culture."
    },
    {
        image: "assets/selous.jpg",
        isVideo: false,
        title: "Selous Game Reserve",
        description: "Venture into one of Africa’s largest protected areas, known for its rugged beauty and abundant wildlife. Enjoy boat safaris along the Rufiji River and spot lions, hippos, and rare wild dogs."
    }
];

// Load destinations
document.addEventListener("DOMContentLoaded", () => {
    const destinationsGrid = document.getElementById('destinations-grid');

    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.classList.add('dest-card', 'overflow-hidden');

        let mediaElement;
        if (destination.isVideo) {
            mediaElement = document.createElement('video');
            mediaElement.src = destination.image;
            mediaElement.muted = true;
            mediaElement.loop = true;
            mediaElement.autoplay = true;
        } else {
            mediaElement = document.createElement('img');
            mediaElement.src = destination.image;
            mediaElement.alt = destination.title;
            mediaElement.loading = "lazy";
        }
        mediaElement.classList.add('w-full', 'h-48', 'object-cover', 'rounded-t-2xl');

        const content = document.createElement('div');
        content.classList.add('p-6');
        content.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900 mb-2">${destination.title}</h3>
            <p class="text-gray-700">${destination.description}</p>
        `;

        card.appendChild(mediaElement);
        card.appendChild(content);
        destinationsGrid.appendChild(card);
    });

    // Form submission
    const destinationForm = document.getElementById('destination-form');
    const submitText = document.getElementById('submit-text');
    const submitSpinner = document.getElementById('submit-spinner');
    const submitButton = destinationForm.querySelector('button');

    destinationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitText.classList.add('hidden');
        submitSpinner.classList.remove('hidden');
        submitButton.disabled = true;

        const requestData = {
            name: document.getElementById('dest-name').value,
            email: document.getElementById('dest-email').value,
            message: document.getElementById('dest-message').value,
            timestamp: serverTimestamp()
        };

        try {
            await addDoc(collection(db, 'destinationRequests'), requestData);
            alert('Your message has been submitted successfully!');
            destinationForm.reset();
        } catch (error) {
            console.error('Error submitting request:', error);
            alert('There was an error submitting your request. Please try again.');
        } finally {
            submitText.classList.remove('hidden');
            submitSpinner.classList.add('hidden');
            submitButton.disabled = false;
        }
    });
});