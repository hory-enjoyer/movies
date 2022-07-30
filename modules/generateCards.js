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
