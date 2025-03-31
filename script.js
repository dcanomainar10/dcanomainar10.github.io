const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const navLinks = document.querySelectorAll(".nav-list a");

const translations = {
    en: {},
    es: {}
};

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});

async function loadTranslations() {
    const [en, es] = await Promise.all([
        fetch('translate/en.json').then(response => response.json()),
        fetch('translate/es.json').then(response => response.json())
    ]);
    translations.en = en;
    translations.es = es;
}

function translatePage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}

document.getElementById('language-selector').addEventListener('change', (event) => {
    const language = event.target.value;
    translatePage(language);
});

document.addEventListener('DOMContentLoaded', async () => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => observer.observe(section));

    await loadTranslations();
    translatePage('es'); // Default language
});