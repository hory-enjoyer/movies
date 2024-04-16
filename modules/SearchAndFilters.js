document.querySelector('#search-button').addEventListener('click', () => {
    Find();
  });
  
  document.getElementById('text-to-find').addEventListener('keydown', (event) => {
    if (event.keyCode === 13) Find();
  });
  
  document.getElementById('clear-search').addEventListener('click', () => {
    document.getElementById('text-to-find').value = '';
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
    const searchQuery = document.getElementById('text-to-find').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      const content = card.textContent || card.innerText;
      card.style.display = content.toLowerCase().includes(searchQuery) ? '' : 'none';
    });
  }
  