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


function switchLanguage(lang) {
  document.querySelector('.intro h1').textContent = texts[lang].welcome;
  document.getElementById('text-to-find').setAttribute('placeholder', texts[lang].searchPlaceholder);
  document.getElementById('clear-search').textContent = texts[lang].clearSearch;
  document.querySelector('.searchNav h1').textContent = texts[lang].filters;
  document.querySelector('footer p').textContent = texts[lang].developedBy;
  
  updateFilterTexts(lang);
  updateCardTexts(lang);

  localStorage.setItem('preferredLanguage', lang);
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
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    if (isVisible(card)) { // Проверяем, видим ли элемент
      const cardData = data.find(d => d.id === card.id);
      if (cardData) {
        const titleElement = card.querySelector('[data-title]'); // Должен быть атрибут data-title на элементе заголовка
        const descriptionElement = card.querySelector('[data-description]'); // Должен быть атрибут data-description на элементе описания
        if (titleElement) titleElement.textContent = language === 'ua' ? cardData.titleUA : cardData.title; // Обновляем заголовок
        if (descriptionElement) descriptionElement.textContent = language === 'ua' ? cardData.descriptionUA : cardData.description; // Обновляем описание
      } else {
        console.error('No data found for ID:', card.id);
      }
    }
  });
}

function isVisible(elem) {
  return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}

document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-ua').addEventListener('click', () => switchLanguage('ua'));

let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  switchLanguage(currentLanguage);
});

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