import Swiper from '../vendor/swiper.js';

// for (const container of document.querySelectorAll('.container') ) {
//   let titleSlider = new Swiper(container.querySelector('.hero__title-slider'), {
//     slidesPerView: 1,
//     loop: true,
//     // autoplay: {
//     //   delay: 2500,
//     // },
//     direction: 'vertical',
//     autoHeight: true,
//     // cleanStyles: false,
//     // deleteInstance: false,
//     // effect: 'fade',
//   });
// };

let bikesSlider = new Swiper(".bikes__slider", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  observer: true,
  breakpoints: {
    320: {
      // slidesPerView: 1.75,
      // spaceBetween: 12,
      },
    768: {
      // slidesPerView: 2.75,
      // spaceBetween: 15,
      // centeredSlides: true,
      },
    1024: {
      // slidesPerView: 'auto',
      // // slidesPerView: 4,
      // spaceBetween: 20,
      // // adaptiveHeight: true,
      // centeredSlides: false,
      // loop: true,
      // observer: true,
    }
  }
});













