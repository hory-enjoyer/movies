const searchButton = document.querySelector('#search-button');
const searchText = document.getElementById('text-to-find');
const clearSearchButton = document.getElementById('clear-search');

searchButton.addEventListener('click', Find);

searchText.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') Find();
});

clearSearchButton.addEventListener('click', () => {
  searchText.value = '';
  const checkboxes = document.querySelectorAll('.searchNav input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
    sessionStorage.setItem(checkbox.id, 'false');
  });
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.style.display = '');
  renderData(defaultData);
});

function Find() {
  const searchQuery = searchText.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    const content = card.textContent || card.innerText;
    card.style.display = content.toLowerCase().includes(searchQuery) ? '' : 'none';
  });
}