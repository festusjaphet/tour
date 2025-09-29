// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

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
                nav: {
                    home: 'Home',
                    destinations: 'Destinations',
                    trips: 'Trips',
                    news: 'News',
                    about: 'About',
                    contact: 'Contact',
                    addNews: 'Add News'
                },
                newsListing: {
                    title: 'Current News',
                    description: 'View all existing news items below.'
                },
                addNews: {
                    title: 'Add News',
                    description: 'Submit a new news item with translations for all supported languages.',
                    form: {
                        title: 'Title',
                        content: 'Content',
                        image: 'Image URL (optional)',
                        submit: 'Add News'
                    }
                }
            }
        },
        fr: {
            translation: {
                nav: {
                    home: 'Accueil',
                    destinations: 'Destinations',
                    trips: 'Voyages',
                    news: 'Nouvelles',
                    about: 'À propos',
                    contact: 'Contact',
                    addNews: 'Ajouter une nouvelle'
                },
                newsListing: {
                    title: 'Nouvelles actuelles',
                    description: 'Voir tous les articles de nouvelles ci-dessous.'
                },
                addNews: {
                    title: 'Ajouter une nouvelle',
                    description: 'Soumettez un nouvel article avec des traductions pour toutes les langues prises en charge.',
                    form: {
                        title: 'Titre',
                        content: 'Contenu',
                        image: 'URL de l\'image (facultatif)',
                        submit: 'Ajouter la nouvelle'
                    }
                }
            }
        },
        es: {
            translation: {
                nav: {
                    home: 'Inicio',
                    destinations: 'Destinos',
                    trips: 'Viajes',
                    news: 'Noticias',
                    about: 'Acerca de',
                    contact: 'Contacto',
                    addNews: 'Agregar noticias'
                },
                newsListing: {
                    title: 'Noticias actuales',
                    description: 'Vea todos los artículos de noticias a continuación.'
                },
                addNews: {
                    title: 'Agregar noticias',
                    description: 'Envíe un nuevo artículo con traducciones para todos los idiomas soportados.',
                    form: {
                        title: 'Título',
                        content: 'Contenido',
                        image: 'URL de la imagen (opcional)',
                        submit: 'Agregar noticia'
                    }
                }
            }
        },
        sw: {
            translation: {
                nav: {
                    home: 'Nyumbani',
                    destinations: 'Maeneo',
                    trips: 'Safari',
                    news: 'Habari',
                    about: 'Kuhusu',
                    contact: 'Mawasiliano',
                    addNews: 'Ongeza Habari'
                },
                newsListing: {
                    title: 'Habari za Sasa',
                    description: 'Tazama habari zote zilizopo hapa chini.'
                },
                addNews: {
                    title: 'Ongeza Habari',
                    description: 'Wasilisha habari mpya na tafsiri kwa lugha zote zinazotumika.',
                    form: {
                        title: 'Kichwa',
                        content: 'Maudhui',
                        image: 'URL ya Picha (hiari)',
                        submit: 'Ongeza Habari'
                    }
                }
            }
        },
        de: {
            translation: {
                nav: {
                    home: 'Startseite',
                    destinations: 'Reiseziele',
                    trips: 'Reisen',
                    news: 'Neuigkeiten',
                    about: 'Über uns',
                    contact: 'Kontakt',
                    addNews: 'Neuigkeiten hinzufügen'
                },
                newsListing: {
                    title: 'Aktuelle Neuigkeiten',
                    description: 'Sehen Sie alle vorhandenen Nachrichtenartikel unten.'
                },
                addNews: {
                    title: 'Neuigkeiten hinzufügen',
                    description: 'Reichen Sie einen neuen Nachrichtenartikel mit Übersetzungen für alle unterstützten Sprachen ein.',
                    form: {
                        title: 'Titel',
                        content: 'Inhalt',
                        image: 'Bild-URL (optional)',
                        submit: 'Neuigkeiten hinzufügen'
                    }
                }
            }
        },
        zh: {
            translation: {
                nav: {
                    home: '首页',
                    destinations: '目的地',
                    trips: '旅行',
                    news: '新闻',
                    about: '关于',
                    contact: '联系',
                    addNews: '添加新闻'
                },
                newsListing: {
                    title: '当前新闻',
                    description: '在下方查看所有现有新闻条目。'
                },
                addNews: {
                    title: '添加新闻',
                    description: '提交一篇新新闻，并提供所有支持语言的翻译。',
                    form: {
                        title: '标题',
                        content: '内容',
                        image: '图片URL（可选）',
                        submit: '添加新闻'
                    }
                }
            }
        }
    }
}, () => {
    updateContent(); // Update translations on init
});

// Function to update translated content
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
    });
}

// Function to fetch and display news
async function fetchNews() {
    try {
        const newsGrid = document.getElementById('news-grid');
        newsGrid.innerHTML = ''; // Clear existing content

        // Get current language
        const currentLng = i18next.language || 'en';

        // Query news collection, ordered by timestamp (newest first)
        const newsQuery = query(collection(db, 'news'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(newsQuery);

        if (querySnapshot.empty) {
            newsGrid.innerHTML = '<p class="text-gray-700 col-span-full text-center">No news items available.</p>';
            return;
        }

        querySnapshot.forEach((doc) => {
            const newsItem = doc.data();
            const title = newsItem.title?.[currentLng] || newsItem.title?.en; // Fallback to English
            const content = newsItem.content?.[currentLng] || newsItem.content?.en; // Fallback to English

            const newsCard = `
                <div class="site-card bg-white rounded-lg shadow-lg overflow-hidden">
                    ${newsItem.image ? `<img src="${newsItem.image}" alt="${title}" class="w-full h-48 object-cover">` : ''}
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-green-900 mb-2">${title}</h3>
                        <p class="text-gray-600 mb-4">${content}</p>
                        <p class="text-sm text-gray-500">${new Date(newsItem.timestamp?.toDate()).toLocaleDateString(currentLng)}</p>
                    </div>
                </div>
            `;
            newsGrid.innerHTML += newsCard;
        });
    } catch (error) {
        console.error('Error fetching news:', error);
        document.getElementById('news-grid').innerHTML = '<p class="text-red-600 col-span-full text-center">Failed to load news.</p>';
    }
}

// Handle language change
document.getElementById('language-select-desktop')?.addEventListener('change', (e) => {
    i18next.changeLanguage(e.target.value, () => {
        localStorage.setItem('language', e.target.value);
        updateContent();
        fetchNews(); // Refresh news listing
    });
});
document.getElementById('language-select')?.addEventListener('change', (e) => {
    i18next.changeLanguage(e.target.value, () => {
        localStorage.setItem('language', e.target.value);
        updateContent();
        fetchNews(); // Refresh news listing
    });
});

// Handle form submission
document.getElementById('news-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = {
        en: document.getElementById('title-en').value,
        fr: document.getElementById('title-fr').value || document.getElementById('title-en').value,
        es: document.getElementById('title-es').value || document.getElementById('title-en').value,
        sw: document.getElementById('title-sw').value || document.getElementById('title-en').value,
        de: document.getElementById('title-de').value || document.getElementById('title-en').value,
        zh: document.getElementById('title-zh').value || document.getElementById('title-en').value
    };
    const content = {
        en: document.getElementById('content-en').value,
        fr: document.getElementById('content-fr').value || document.getElementById('content-en').value,
        es: document.getElementById('content-es').value || document.getElementById('content-en').value,
        sw: document.getElementById('content-sw').value || document.getElementById('content-en').value,
        de: document.getElementById('content-de').value || document.getElementById('content-en').value,
        zh: document.getElementById('content-zh').value || document.getElementById('content-en').value
    };
    const image = document.getElementById('news-image').value || null;

    try {
        await addDoc(collection(db, 'news'), {
            title,
            content,
            image,
            timestamp: serverTimestamp()
        });
        alert('News added successfully!');
        document.getElementById('news-form').reset();
        fetchNews(); // Refresh news listing
    } catch (error) {
        console.error('Error adding news:', error);
        alert('Failed to add news.');
    }
});

// Fetch news when the page loads
document.addEventListener('DOMContentLoaded', fetchNews);