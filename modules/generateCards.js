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

      let cardDetail = document.createElement('div');
      cardDetail.classList.add('cardInfo');
      cardDetail.id = el.id;

      let createImgDetail = document.createElement('img');
      createImgDetail.src = el.imgSrc;

      let createH1Detail = document.createElement('h1');
      createH1Detail.innerText = el.title;
      createH1Detail.classList.add('specialH1');

      let createPDetail = document.createElement('p');
      createPDetail.innerText = el.description;

      let rating = document.createElement('h2');
      rating.innerText = el.rating;
      rating.classList.add('rating');
      if (el.rating > 8) rating.classList.add('green');
      else if (el.rating > 5) rating.classList.add('orange');
      else rating.classList.add('red');

      let season = document.createElement('h2');
      season.classList.add('season');
      season.innerText = texts[currentLanguage].seasonStopped + el.season;

      let textWithImg = document.createElement('div');
      textWithImg.classList.add('wrapperforimg');
      textWithImg.appendChild(createPDetail);
      textWithImg.appendChild(createImgDetail);

      let backButton = document.createElement('button');
      backButton.classList.add('back');
      backButton.onclick = () => {
        showCards();
        switchLanguage(currentLanguage);
      };

      let fontBack = document.createElement('i');
      fontBack.classList.add('fa-angle-left', 'fa-solid');

      let text = document.createElement('h3');
      text.innerText = 'Back';

      backButton.append(fontBack, text);

      cardDetail.append(createH1Detail, rating, season, textWithImg);

      cards.append(backButton, cardDetail);

      switchLanguage(currentLanguage);
    };

    card.append(createImg, createH1);
    cards.append(card);
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const preArray = [...defaultData];
const randomArr = shuffle(preArray).splice(0, 3);

let iconCards = document.querySelector('.icon-cards__content');
iconCards.innerHTML = '';

randomArr.forEach((el) => {
  let card = document.createElement('div');
  card.classList.add('icon-cards__item');

  let createImg = document.createElement('img');
  createImg.src = el.imgSrc;

  let createH1 = document.createElement('h1');
  createH1.setAttribute('data-title', el.id);
  createH1.innerText = currentLanguage === 'ua' ? el.titleUA : el.title;

  card.append(createImg, createH1);

  iconCards.append(card);
});