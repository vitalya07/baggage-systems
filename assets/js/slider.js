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
  spaceBetween:27,
});
new Swiper('.sistems-swiper', {
  direction: 'horizontal',
  loop: false,
  navigation: { nextEl: '.sistems__swiper-next', prevEl: '.sistems__swiper-prev', },
  speed: 500,
  slidesPerView: 4, 
  spaceBetween: -20
});
new Swiper('.news__swiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.news-pagination',
    clickable: true,
  },
  speed: 1000,
  // autoplay: {  
  //   delay: 2000,  
  //   disableOnInteraction: false, 
  // }, 
  slidesPerView: 3, 
  spaceBetween: 27,
});