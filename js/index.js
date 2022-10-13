//Typed js
var typed = new Typed('.type', {
    strings: ['Hello Wolrd', 'My name is Maxim','Frontend Developer'],
    typeSpeed:70,
    loop:true
  });


//Swiper
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Aos Animate

AOS.init();