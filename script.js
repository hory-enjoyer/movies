function Find(someid) {
  let id = document
    .getElementById(someid)
    .value.toUpperCase()
    .replaceAll(' ', '-');

  let area = document.querySelectorAll('.card');
  let arrArea = Array.from(area);
  const texts = arrArea.map((el) => el.id);

  const filteredText = texts.filter((el) =>
    el.toLowerCase().includes(id.toLowerCase())
  );

  let clearArr = arrArea.map((el) => (el.style = 'display: none'));

  let nnew = filteredText.forEach((el) => {
    const element = document.getElementById(el);

    element.style = 'display: block';
  });
}
