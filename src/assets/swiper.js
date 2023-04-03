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
    grabCursor: true,
    spaceBetween: 48,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      }
    }
  });
}
testimonialSwiper();


// Dark theam JS
function darkLightTheme() {

  const themeButton = document.getElementById('theame-button')
  const darktheme = 'dark-theme'
  const iconTheme = 'uil-sun'

  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
  const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

  if (selectedTheme && themeButton !== null) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
  }

  themeButton?.addEventListener('click', ()=>{
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme' , getCurrentTheme())
    localStorage.setItem('selected-icon' , getCurrentIcon())
  })
}

darkLightTheme();