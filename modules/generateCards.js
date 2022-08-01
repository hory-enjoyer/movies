import { data } from './data.js';

let cards = document.querySelector('.cards');

data.forEach((el) => {
  let card = document.createElement('div');

  card.classList.add('card');
  card.id = el.id;

  let createImg = document.createElement('img');
  createImg.src = el.imgSrc;

  let createH1 = document.createElement('h1');
  createH1.innerText = el.title;

  card.appendChild(createImg);
  card.appendChild(createH1);

  cards.appendChild(card);
});

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

const preArray = [];

data.forEach((el) => preArray.push(el));

const randomArr = shuffle(preArray).splice(0, 3);

let iconCards = document.querySelector('.icon-cards__content');

randomArr.forEach((el) => {
  let card = document.createElement('div');

  card.classList.add('icon-cards__item');

  let createImg = document.createElement('img');
  createImg.src = el.imgSrc;

  let createH1 = document.createElement('h1');
  createH1.innerText = el.title;

  card.appendChild(createImg);
  card.appendChild(createH1);

  iconCards.appendChild(card);
});
