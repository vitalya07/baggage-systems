new Swiper('.main-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 1000,
  autoplay: {  
    delay: 2000,  // Задержка между переходами (в мс)  
    disableOnInteraction: false,  // Автопрокрутка не останавливается при взаимодействии  
  }, 
});