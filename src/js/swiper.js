import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const slider = document.querySelector('.swiper');

const swiper = new Swiper(slider, {
    slidesPerView: 3, 
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      630: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    }
});