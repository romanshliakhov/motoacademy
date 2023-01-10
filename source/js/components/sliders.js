import Swiper from '../vendor/swiper.js';

let bikesSlider = new Swiper(".bikes__slider", {
  slidesPerView: 1,
  // centeredSlides: true,
  loop: true,
  // effect: 'fade',
  observer: true,
  navigation: {
    nextEl: ".bike__next",
    prevEl: ".bike__prev",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass) {
      return '<span class="' + currentClass + '"></span>';
    }
  },
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
  },

});

let coachesSlider = new Swiper(".coaches__slider", {
  slidesPerView: 1,
  // centeredSlides: true,
  // loop: true,
  observer: true,
  // effect: 'fade',
  navigation: {
    nextEl: ".coach__next",
    prevEl: ".coach__prev",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass) {
      return '<span class="' + currentClass + '"></span>';
    }
  },
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













