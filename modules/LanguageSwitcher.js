import { data } from '../data/data.js';
import { dataInput } from '../data/dataInpute.js';

let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

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
  data.forEach(card => {
    const cardElement = document.getElementById(card.id);
    if (cardElement) {
      cardElement.querySelector('.card-title').textContent = language === 'ua' ? card.titleUA : card.title;
      cardElement.querySelector('.card-description').textContent = language === 'ua' ? card.descriptionUA : card.description;
    }
  });
}

document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-ua').addEventListener('click', () => switchLanguage('ua'));

document.addEventListener('DOMContentLoaded', () => {
  switchLanguage(currentLanguage);
});
