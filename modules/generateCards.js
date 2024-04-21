import { data as defaultData } from '../data/data.js';
import { showCards } from './generateButtonAction.js';
import { switchLanguage, currentLanguage, texts } from './LanguageSwitcher.js';

export function renderData(data) {
  let cards = document.querySelector('.cards');
  cards.innerHTML = '';
  data.forEach((el) => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.id = el.id;

    let createImg = document.createElement('img');
    createImg.src = el.imgSrc;

    let createH1 = document.createElement('h1');
    createH1.innerText = el.title;
    createH1.setAttribute('data-title', el.id);

    let createP = document.createElement('p');
    createP.innerText = el.description;
    createP.setAttribute('data-description', el.id);

    card.onclick = function () {
      cards.innerHTML = '';

      let card = document.createElement('div');
      card.classList.add('cardInfo');
      card.id = el.id;

      let createImg = document.createElement('img');
      createImg.src = el.imgSrc;

      let createH1 = document.createElement('h1');
      createH1.innerText = el.title;
      createH1.classList.add('specialH1');

      let createP = document.createElement('p');
      createP.innerText = el.description;

      let rating = document.createElement('h2');
      rating.innerText = el.rating;
      rating.classList.add('rating');
      if (el.rating > 8) rating.classList.add('green');
      else if (el.rating > 5) rating.classList.add('orange');
      else rating.classList.add('red');

      let season = document.createElement('h2');
      season.classList.add('season');
      season.innerText = texts[currentLanguage].seasonStopped + el.season; // Используем переведенную строку

      let textWithImg = document.createElement('div');
      textWithImg.classList.add('wrapperforimg');
      textWithImg.appendChild(createP);
      textWithImg.appendChild(createImg);

      let backButton = document.createElement('button');
      backButton.classList.add('back');
      backButton.onclick = () => {
        showCards(); // Function to show all cards
        switchLanguage(currentLanguage); // Ensure language consistency when returning to all cards
      };

      let fontBack = document.createElement('i');
      fontBack.classList.add('fa-angle-left');
      fontBack.classList.add('fa-solid');

      let text = document.createElement('h3');
      text.innerText = 'Back';

      backButton.appendChild(fontBack);
      backButton.appendChild(text);

      card.appendChild(createH1);
      card.appendChild(rating);
      card.appendChild(season);
      card.appendChild(textWithImg);

      cards.appendChild(backButton);
      cards.appendChild(card);

      switchLanguage(currentLanguage); // Apply language settings to detailed card
    };

    card.appendChild(createImg);
    card.appendChild(createH1);
    cards.appendChild(card);
  });
}


function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const preArray = [...defaultData];  // Используем копию данных
const randomArr = shuffle(preArray).splice(0, 3);

let iconCards = document.querySelector('.icon-cards__content');
iconCards.innerHTML = ''; // Очистка карусели перед добавлением новых элементов

randomArr.forEach((el) => {
  let card = document.createElement('div');
  card.classList.add('icon-cards__item');

  let createImg = document.createElement('img');
  createImg.src = el.imgSrc;

  let createH1 = document.createElement('h1');
  createH1.setAttribute('data-title', el.id); // Добавляем data-title для обновления текста
  createH1.innerText = currentLanguage === 'ua' ? el.titleUA : el.title; // Используем текущий язык для установки текста

  card.appendChild(createImg);
  card.appendChild(createH1);

  iconCards.appendChild(card);
});