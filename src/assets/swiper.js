console.log("Run successful");

function portfolioSwiper() {
    var swiper = new Swiper(".portfolio_container", {
        cssMode: true,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },
        // mousewheel: true,
        // keyboard: true,
      });
}
portfolioSwiper();