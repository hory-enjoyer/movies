import { data } from '../data/data.js';
import { dataInput } from '../data/dataInpute.js';

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

export let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

export function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('preferredLanguage', lang);

  document.querySelector('.intro h1').textContent = texts[lang].welcome;
  document.getElementById('text-to-find').setAttribute('placeholder', texts[lang].searchPlaceholder);
  document.getElementById('clear-search').textContent = texts[lang].clearSearch;
  document.querySelector('.searchNav h1').textContent = texts[lang].filters;
  document.querySelector('footer p').textContent = texts[lang].developedBy;

  updateFilterTexts(lang);
  updateCardTexts(lang);
}

function updateFilterTexts(language) {
  dataInput.forEach(filter => {
    const filterElement = document.getElementById(filter.id);
    if (filterElement) {
      filterElement.nextElementSibling.textContent = language === 'ua' ? filter.labelUA : filter.label;
    }
  });
}

function updateCardTexts(language) {
  const allCards = document.querySelectorAll('.card, .cardInfo');
  allCards.forEach(card => {
    const cardData = data.find(d => d.id === card.id);
    if (cardData) {
      const titleElement = card.querySelector('[data-title]') || card.querySelector('.specialH1');
      const descriptionElement = card.querySelector('[data-description]') || card.querySelector('p:not(.rating):not(.season)');
      if (titleElement) titleElement.textContent = language === 'ua' ? cardData.titleUA : cardData.title;
      if (descriptionElement) descriptionElement.textContent = language === 'ua' ? cardData.descriptionUA : cardData.description;
    }
  });
}

document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-ua').addEventListener('click', () => switchLanguage('ua'));

document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  switchLanguage(savedLanguage);
});

function initialLanguageSetup() {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  switchLanguage(savedLanguage);
}

document.removeEventListener('DOMContentLoaded', initialLanguageSetup); // Только если обработчик был добавлен таким же способом
document.addEventListener('DOMContentLoaded', initialLanguageSetup);

