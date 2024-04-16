import './modules/generateCards.js';
import './modules/generateInputs.js';
import './modules/LanguageSwitcher.js';
import './modules/SearchAndFilters.js';


const texts = {
  en: {
    welcome: "Welcome to movies library!",
    searchPlaceholder: "search",
    clearSearch: "Clear Search",
    filters: "Filters",
    developedBy: "Developed by Bohdan Butenko"
  },
  ua: {
    welcome: "Ласкаво просимо до бібліотеки фільмів!",
    searchPlaceholder: "пошук",
    clearSearch: "Очистити пошук",
    filters: "Фільтри",
    developedBy: "Розроблено Bohdan Butenko"
  }
};

function switchLanguage(lang) {
  document.querySelector('.intro h1').textContent = texts[lang].welcome;
  document.getElementById('text-to-find').setAttribute('placeholder', texts[lang].searchPlaceholder);
  document.getElementById('clear-search').textContent = texts[lang].clearSearch;
  document.querySelector('.searchNav h1').textContent = texts[lang].filters;
  document.querySelector('footer p').textContent = texts[lang].developedBy;
  
  localStorage.setItem('preferredLanguage', lang);
}

document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-ua').addEventListener('click', () => switchLanguage('ua'));

function updateFilterTexts(language) {
  dataInput.forEach(filter => {
    const filterElement = document.getElementById(filter.id);
    if (filterElement) {
      filterElement.nextElementSibling.textContent = language === 'ua' ? filter.labelUA : filter.label;
    }
  });
}

function updateCardTexts(language) {
  data.forEach(card => {
    const cardElement = document.getElementById(card.id);
    if (cardElement) {
      cardElement.querySelector('.card-title').textContent = language === 'ua' ? card.titleUA : card.title;
      cardElement.querySelector('.card-description').textContent = language === 'ua' ? card.descriptionUA : card.description;
    }
  });
}

document.getElementById('lang-en').addEventListener('click', () => {
  currentLanguage = 'en';
  updateFilterTexts(currentLanguage);
  updateCardTexts(currentLanguage);
});

document.getElementById('lang-ua').addEventListener('click', () => {
  currentLanguage = 'ua';
  updateFilterTexts(currentLanguage);
  updateCardTexts(currentLanguage);
});

document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  currentLanguage = savedLanguage;
  updateFilterTexts(currentLanguage);
  updateCardTexts(currentLanguage);
});