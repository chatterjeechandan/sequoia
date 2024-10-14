var swiper = new Swiper(".gallery-thumbs", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  observer: true,
  observeParents: true,
  // watchSlidesProgress: true,
});
var swiper2 = new Swiper(".gallery-top", {
  loop: true,
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});
var  swiper_testimonial = new Swiper(".testimonial-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides:true,
  slidesPerView: 4,
  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  // If we need pagination
  pagination: { el: '.swiper-pagination.pg-2', clickable: true },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next.pg-2",
    prevEl: ".swiper-button-prev.pg-2",
  },
});
var  home_swiper = new Swiper(".home_swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides:true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4.6,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 6.7,
      spaceBetween: 30,
    },
  },
  // If we need pagination
  pagination: { el: '.swiper-pagination.pg-3', clickable: true },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next.pg-3",
    prevEl: ".swiper-button-prev.pg-3",
  },
});
var  homeslider_two = new Swiper(".homeslider_two", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides:true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView:1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
  // If we need pagination
  // pagination: { el: '.swiper-pagination', clickable: true },

  // // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
var info_pd_swiper = new Swiper(".info_pd_swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides:true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView:1,
      spaceBetween: 20,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination.pg-1",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next.pg-1",
    prevEl: ".swiper-button-prev.pg-1",
  },
});

var info_pd_swiper = new Swiper(".shop_banner", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

Fancybox.bind('[data-fancybox="gallery"]', {
  compact: false,
  contentClick: "iterateZoom",
  Images: {
    Panzoom: {
      maxScale: 2,
    },
  },
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [],
      right: ["iterateZoom", "close"],
    },
  },
});