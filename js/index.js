//Burger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');



hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  nav.classList.toggle('pos');
  navMenu.classList.toggle('active');

})

document.querySelectorAll('.nav__link').forEach(n=>n.addEventListener('click',()=>{
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  nav.classList.remove('pos');
}))



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


//====Contact Form
const contactForm= document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  Message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');
const sendEmail = (e) =>{
  e.preventDefault();
  if(
    contactName.value === ''||
    contactEmail.value === '' ||
    Message.value === ''
  ){
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

    contactMessage.textContent = 'Write all the input fields';
  }else{
    emailjs.sendForm('service_3pnytdr','template_fdv84oc','#contact-form',
    'hClxx-RSbKyBZSFxj')
    .then(()=>{
      contactMessage.textContent = "Message sent ✔";
      setTimeout(()=>{
        contactMessage.textContent=""
      },5000);
    })
    contactName.value = '';
    contactEmail.value = '';
    Message.value = '';
  }
  
}


contactForm.addEventListener('submit',sendEmail);


