import { data } from '../data/data.js';
import { renderData } from './generateCards.js';
import { filterData } from './generateInputs.js';

export function showCards() {
  const [a, b] = filterData();

  renderData(a.length ? b : data);
}
