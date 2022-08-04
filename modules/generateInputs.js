import { data } from './data.js';
import { dataInput } from './dataInpute.js';
import { renderData } from './generateCards.js';

let searchNav = document.querySelector('.searchNav');

dataInput.forEach((el) => {
  let inputBlock = document.createElement('div');

  inputBlock.classList.add('boxtype');

  let createLabel = document.createElement('label');
  createLabel.innerText = el.label;

  let createInput = document.createElement('input');
  createInput.type = 'checkbox';
  createInput.id = el.id;

  inputBlock.appendChild(createInput);
  inputBlock.appendChild(createLabel);

  searchNav.appendChild(inputBlock);
});

let nodeInputs = document.querySelector('.searchNav').querySelectorAll('input');

let inputs = Array.from(nodeInputs);

inputs.forEach((el) => {
  el.onchange = function (event) {
    sessionStorage.setItem(`${el.id}`, `${event.target.checked}`);

    const [filters, filteredData] = filterData();

    renderData(filters.length ? filteredData : data);
  };
});

inputs.forEach((el) => {
  if (sessionStorage.getItem(`${el.id}`) === `true`) {
    el.checked = true;
  }
});

if (inputs.some((el) => el.checked === true)) {
  const [filters, filteredData] = filterData();

  renderData(filters.length ? filteredData : data);
} else {
  renderData(data);
}

const [filters, filteredData] = filterData();

renderData(filters.length ? filteredData : data);

function filterData() {
  const filters = [];

  inputs.forEach((el) => {
    if (el.checked === true) {
      filters.push(el.id);
    }
  });

  const filteredData = data.filter((film) => {
    return filters.some((filter) => film.genres.join(' ').includes(filter));
  });

  return [filters, filteredData];
}
