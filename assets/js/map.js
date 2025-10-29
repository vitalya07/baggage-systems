ymaps.ready(function () {
  const map = new ymaps.Map('map', {
    center: [55.7558, 37.6173], // Москва по умолчанию
    zoom: 10
  });

  const select = document.getElementById('citySelect');

  select.addEventListener('change', () => {
    const coords = select.value.split(',').map(Number);
    map.setCenter(coords, 12); // меняем центр карты
  });
});