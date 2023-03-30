function portfolioSwiper() {
  var swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    // mousewheel: true,
    // keyboard: true,
  });
}
portfolioSwiper();

function testimonialSwiper() {
  var swiperTestimonial = new Swiper(".testimonials_container", {
    loop: true,
    grabCursor:true,
    spaceBetween:48,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true
    },
    breakpoints:{
      568:{
        slidesPerView:2,
      }
    }
  });
}
testimonialSwiper();