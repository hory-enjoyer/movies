import { data } from '../data/data.js';
import { renderData } from './generateCards.js';
import { filterData } from './generateInputs.js';
import { switchLanguage, currentLanguage } from './LanguageSwitcher.js';

export function showCards() {
  const [filters, filteredData] = filterData();

  renderData(filters.length ? filteredData : data);
  switchLanguage(currentLanguage);
}