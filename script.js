function Find(someid) {
  let id = document.getElementById(someid).value.toUpperCase();
  let area = document.querySelector('.cards').innerHTML;
  let finalArea = area.match(/>(.*?)</g);
  let result = [];

  for (let i = 0; i < finalArea.length; i++) {
    result[i] = finalArea[i].toUpperCase().includes(id);
  }

  let final = result.indexOf(true);

  function filter(idd) {
    let all = document
      .querySelectorAll('.card')
      .forEach((elem) => (elem.style = 'display: none'));

    let id = document.getElementById(idd);
    id.style = 'display:block';
  }

  function isTrue() {
    switch (final) {
      case 0:
        console.log('La casa de papel');
        filter('La-casa-de-papel');
        break;
      case 1:
        console.log('Stranger Things');
        filter('Stranger-Things');
        break;
      case 2:
        console.log('Breaking Bad');
        filter('Breaking-Bad');
        break;
      case 3:
        console.log('Sex Education');
        filter('Sex-Education');
        break;
      case 4:
        console.log('Peaky Blinders');
        filter('Peaky-Blinders');
        break;
      case 5:
        console.log('Power');
        filter('Power');
        break;
      case 6:
        console.log('Elite');
        filter('Elite');
        break;
      case 7:
        console.log('Lock and key');
        filter('Lock-and-key');
        break;
      case 8:
        console.log('Mediator');
        filter('Mediator');
        break;
      case 9:
        console.log('Difficult teenagers');
        filter('Difficult-teenagers');
        break;
    }
  }

  let f = finalArea.find(isTrue);

  console.log(final);
  console.log(f);
}
