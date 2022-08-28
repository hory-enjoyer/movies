import '/modules/generateCards.js';
import './modules/generateInputs.js';

function Find(someid) {
  let elementId = document
    .getElementById(someid)
    .value.toUpperCase()
    .replaceAll(' ', '-');

  let area = document.querySelectorAll('.card');
  let arrArea = Array.from(area);
  const texts = arrArea.map((el) => el.id);

  const filteredText = texts.filter((el) =>
    el.toLowerCase().includes(elementId.toLowerCase())
  );

  arrArea.map((el) => (el.style = 'display: none'));

  filteredText.forEach((el) => {
    const element = document.getElementById(el);
    element.style = 'display: block';
  });
}

document
  .querySelector('.search')
  .lastElementChild.addEventListener('click', function (event) {
    if (event) {
      Find('text-to-find');
    }
  });

document
  .querySelector('#text-to-find')
  .addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      Find('text-to-find');
    }
  });
