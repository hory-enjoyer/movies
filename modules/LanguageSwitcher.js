import { data } from '../data/data.js';
import { dataInput } from '../data/dataInpute.js';
import { data as defaultData } from '../data/data.js';

export const texts = {
  en: {
    welcome: "Welcome to movies library!",
    searchPlaceholder: "search",
    clearSearch: "Clear Search",
    filters: "Filters",
    developedBy: "Developed by Bohdan Butenko",
    seasonStopped: "Season was stopped on: "
  },
  ua: {
    welcome: "Ласкаво просимо до бібліотеки фільмів!",
    searchPlaceholder: "пошук",
    clearSearch: "Очистити пошук",
    filters: "Фільтри",
    developedBy: "Розроблено Богданом Бутенко",
    seasonStopped: "Сезон, на якому було зупинено перегляд: "
  }
};

const translations = {
  en: {
      register: "Register",
      login: "Login",
      username: "Username:",
      password: "Password:",
      submitRegister: "Register",
      submitLogin: "Login",
      back: "Back",
      passwordRequirements: "*The password must be at least 6 characters long and contain at least one letter."
  },
  ua: {
      register: "Реєстрація",
      login: "Вхід",
      username: "Ім'я користувача:",
      password: "Пароль:",
      submitRegister: "Зареєструватися",
      submitLogin: "Увійти",
      back: "Назад",
      passwordRequirements: "*Пароль має бути не менше 6 символів та містити хоча б одну літеру."
  }
};

export function updateTexts(language) {
  document.getElementById('register-button').textContent = translations[language].register;
  document.getElementById('login-button').textContent = translations[language].login;

  const registrationModal = document.getElementById('registration-modal');
  if (registrationModal) {
      registrationModal.querySelector('label[for="username"]').textContent = translations[language].username;
      registrationModal.querySelector('label[for="password"]').textContent = translations[language].password;
      registrationModal.querySelector('button[type="submit"]').textContent = translations[language].submitRegister;
      registrationModal.querySelectorAll('label[for="password"]')[1].textContent = translations[language].passwordRequirements;
      registrationModal.querySelector('button[type="button"]').textContent = translations[language].back;
  }

  const loginModal = document.getElementById('login-modal');
  if (loginModal) {
      loginModal.querySelector('label[for="login-username"]').textContent = translations[language].username;
      loginModal.querySelector('label[for="login-password"]').textContent = translations[language].password;
      loginModal.querySelector('button[type="submit"]').textContent = translations[language].submitLogin;
      loginModal.querySelector('button[type="button"]').textContent = translations[language].back;
  }
}

document.getElementById('lang-en').addEventListener('click', () => updateTexts('en'));
document.getElementById('lang-ua').addEventListener('click', () => updateTexts('ua'));

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
  updateCarouselTexts(lang);
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
      const seasonElement = card.querySelector('.season');
      if (titleElement) titleElement.textContent = language === 'ua' ? cardData.titleUA : cardData.title;
      if (descriptionElement) descriptionElement.textContent = language === 'ua' ? cardData.descriptionUA : cardData.description;
      if (seasonElement) seasonElement.innerText = texts[language].seasonStopped + cardData.season;
    }
  });
}

function updateCarouselTexts(language) {
  const carouselItems = document.querySelectorAll('.icon-cards__item [data-title]');
  carouselItems.forEach(item => {
    const cardData = defaultData.find(d => d.id === item.getAttribute('data-title'));
    if (cardData) {
      item.textContent = language === 'ua' ? cardData.titleUA : cardData.title;
    }
  });
}

document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-ua').addEventListener('click', () => switchLanguage('ua'));

document.addEventListener('DOMContentLoaded', () => {
  switchLanguage(localStorage.getItem('preferredLanguage') || 'en');
});