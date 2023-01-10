import Swiper from '../vendor/swiper.js';

let bikesSlider = new Swiper(".bikes__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
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
});

let coachesSlider = new Swiper(".coaches__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  observer: true,
  navigation: {
    nextEl: ".coach__next",
    prevEl: ".coach__prev",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass) {
      return '<span class="' +  currentClass + '"></span>';
    }
  },
});













