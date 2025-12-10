const navlinks = document.querySelectorAll(".nav-menu .nav-item");
const menuOpenButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    /*toggle mobile menu visiblity*/
    document.body.classList.toggle("show-mobile-menu");
});

//close menu when close button is clicked
menucloseButton.addEventListener("click",()=>menuOpenButton.click());

navlinks.forEach(link => {
  link.addEventListener("click",() => menuOpenButton.click())
});
    

//Initialize Swiper
const swiper = new Swiper('.slider-wrraper', {
  loop: true,
  grabCursor:true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0:{
        slidesPerView:1
    },
    768: {
        slidesPerView:2
    },
    1024: {
        slidesPerView:3
    }
  }

});