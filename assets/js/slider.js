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
  spaceBetween: -20,
  breakpoints: {
    1260: {
      slidesPerView: 3, 
       spaceBetween: -20,
    },
    990: {
      slidesPerView: 3, 
      spaceBetween: 100,
    },
    760: {
      slidesPerView: 2, 
      spaceBetween: -40,
    },
    550: {
      slidesPerView: 2, 
      spaceBetween: -20,
    },
    // 450: {
    //   slidesPerView: 1, 
    //   spaceBetween: -20,
    // },
    320: {
      slidesPerView: 1,
      spaceBetween: -20,
    },
  }
});
new Swiper('.news__swiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.news-pagination',
    clickable: true,
  },
  speed: 1000,
  slidesPerView: 3, 
  spaceBetween: 27,
  breakpoints: {
    760: {
      slidesPerView: 3, 
      spaceBetween: 27,
    },
    550: {
      slidesPerView: 2, 
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1, 
      spaceBetween: -80,
    },
  }
});