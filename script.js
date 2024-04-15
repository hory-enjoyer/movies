import './modules/generateCards.js';
import './modules/generateInputs.js';

document.querySelector('#search-button').addEventListener('click', function() {
  Find();
});

document.getElementById('text-to-find').addEventListener('keydown', function(event) {
  if (event.keyCode === 13) { // Enter key
    Find();
  }
});

document.getElementById('clear-search').addEventListener('click', function() {
  document.getElementById('text-to-find').value = ''; // Clear the search input
  const checkboxes = document.querySelectorAll('.searchNav input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
      checkbox.checked = false; // Uncheck all filter checkboxes
      sessionStorage.setItem(checkbox.id, 'false'); // Reset session storage for checkboxes
  });
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.style.display = ''); // Ensure all cards are visible
  renderData(defaultData); // Re-render all data to show all movies
});

function Find() {
  const searchQuery = document.getElementById('text-to-find').value.trim().toLowerCase();
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
      const content = card.textContent || card.innerText;
      if (content.toLowerCase().includes(searchQuery)) {
          card.style.display = '';
      } else {
          card.style.display = 'none';
      }
  });
}