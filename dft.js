
// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Your Firebase configuration
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
const db = getFirestore(app); // Initialize Firestore

// Handle Form Submission
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contactForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        // Get button elements
        const submitButton = document.getElementById("submitButton");
        const buttonText = document.getElementById("buttonText");
        const loadingSpinner = document.getElementById("loadingSpinner");

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Validate fields
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        // Show loading state
        submitButton.disabled = true;
        buttonText.textContent = "Sending...";
        loadingSpinner.classList.remove("hidden");

        try {
            // Send data to Firestore
            await addDoc(collection(db, "contacts"), {
                name,
                email,
                phone,
                message,
                timestamp: serverTimestamp()
            });

            alert("Message sent successfully!");
            document.getElementById("contactForm").reset(); // Clear form
        } catch (error) {
            console.error("Error saving message:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            // Reset button state
            submitButton.disabled = false;
            buttonText.textContent = "Send Message";
            loadingSpinner.classList.add("hidden");
        }
    });
});


