import { data } from '../data/data.js';
import { dataInput } from '../data/dataInpute.js';
import { renderData } from './generateCards.js';
import { showingFavorites, showFavoriteCards } from './generateCards.js';

const searchNav = document.querySelector('.searchNav');

dataInput.forEach((el) => {
  const inputBlock = document.createElement('div');
  inputBlock.classList.add('boxtype');

  const createLabel = document.createElement('label');
  createLabel.innerText = el.label;

  const createInput = document.createElement('input');
  createInput.type = 'checkbox';
  createInput.id = el.id;

  inputBlock.append(createInput, createLabel);
  searchNav.appendChild(inputBlock);
});

const inputs = Array.from(document.querySelectorAll('.searchNav input'));

inputs.forEach((input) => {
  input.onchange = (event) => {
    sessionStorage.setItem(input.id, event.target.checked.toString());
    const [filters, filteredData] = filterData();
    if (showingFavorites) {
      showFavoriteCards(filters);
    } else {
      renderData(filters.length ? filteredData : data);
    }
  };

  if (sessionStorage.getItem(input.id) === 'true') {
    input.checked = true;
  }
});

const [filters, filteredData] = filterData();
renderData(filters.length ? filteredData : data);

export function filterData() {
  const filters = inputs.filter(input => input.checked).map(input => input.id);
  const filteredData = data.filter(film => filters.some(filter => film.genres.includes(filter)));
  return [filters, filteredData];
}