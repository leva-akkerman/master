let popup = document.querySelector('.popup');
let burger = document.querySelector('#header__burger');
let crossBurger = document.querySelector('#cross-burger');
let headerMainFooter = document.querySelector('.container-hedr-man-fot');
let call = document.querySelector('#call');
let chat = document.querySelector('#chat'); // header call
let popupCall = document.querySelector('#popup-call'); 
let popupChat = document.querySelector('#popup-chat'); // popup call
let popupModalChat = document.querySelector('.popup-modal-chat');
let popupModalCall = document.querySelector('.popup-modal-call');
let callClose = document.querySelector('#call-close');
let chatClose = document.querySelector('#chat-close');
let popupInput = document.querySelectorAll('.popup__input')
let telephone = document.querySelectorAll('#popup__input-tel')


burger.addEventListener('click', function(){
     popup.classList.remove('no-active');
     headerMainFooter.classList.add('no-active')
     
});
crossBurger.addEventListener('click', function(){
    popup.classList.add('no-active');
    headerMainFooter.classList.remove('no-active');
})

call.addEventListener('click', function(){
    popupModalCall.classList.remove('no-active');
    headerMainFooter.classList.add('no-active');
    
});

callClose.addEventListener('click', function(){
    popupModalCall.classList.add('no-active');
    headerMainFooter.classList.remove('no-active');
    popup.classList.remove('no-active-two');
    
});
chat.addEventListener('click', function(){
    popupModalChat.classList.remove('no-active');
    headerMainFooter.classList.add('no-active');
});

chatClose.addEventListener('click', function(){
    popupModalChat.classList.add('no-active');
    headerMainFooter.classList.remove('no-active');
    popup.classList.remove('no-active-two');
});


popupCall.addEventListener('click', function(){
    popupModalCall.classList.remove('no-active');
    headerMainFooter.classList.add('no-active');
    popup.classList.add('no-active-two');
    
});

popupChat.addEventListener('click', function(){
    popupModalChat.classList.remove('no-active');
    headerMainFooter.classList.add('no-active');
    popup.classList.add('no-active-two');

});

popupChat.addEventListener('dblclick', function(){
    popupModalChat.classList.add('no-active');
    headerMainFooter.classList.remove('no-active');
    popup.classList.remove('no-active-two');
});
popupCall.addEventListener('dblclick', function(){
    popupModalCall.classList.add('no-active');
    headerMainFooter.classList.remove('no-active');
    popup.classList.remove('no-active-two');
    
});
let elemShowMore = document.querySelectorAll('.show-more-element');
let btnShowMore = document.querySelectorAll('#show-more-btn');
let btnAntiShowMore = document.querySelectorAll('#anti-show-more-btn')
let containerText = document.querySelector('.container-text');
let containerTextLogo = document.querySelector('.main__container-text-logo');
let logo = document.querySelector('.main__logo')

let logoWidth 
let containerTextLogoFlex;
let elemShowMoreHeight;
for(let i=0; i<btnShowMore.length; i++){
    logoWidth = logo.style.width;
    containerTextLogoFlex = containerTextLogo.style.flexDirection;
    elemShowMoreHeight = elemShowMore[i].style.height
     btnShowMore[i].addEventListener('click', function(){
        if(i===0){
         logo.style.width='auto'
         containerTextLogo.style.flexDirection='column'
        elemShowMore[i].style.height = 'auto'
          btnShowMore[i].style.display='none';
          btnAntiShowMore[i].style.display='flex'
        }
        else{
        elemShowMore[i].style.height = 'auto';
         btnShowMore[i].style.display='none' ;
         btnAntiShowMore[i].style.display='flex'
        }
     })
     btnAntiShowMore[i].addEventListener('click', function(){


        if(i===0){
            logo.style.width=logoWidth;
            containerTextLogo.style.flexDirection=containerTextLogoFlex;
            elemShowMore[i].style.height = elemShowMoreHeight;
            btnShowMore[i].style.display='flex';
          btnAntiShowMore[i].style.display='none'
        }
        else{
            elemShowMore[i].style.height = elemShowMoreHeight;
            btnShowMore[i].style.display='flex';
          btnAntiShowMore[i].style.display='none'
        }

     })
     
 }


 const screenWidth = window.screen.width
 
 if(screenWidth<350){
    fer = screenWidth / 267;
 }
 else{
    fer = screenWidth / 275;
 }         

console.log(fer);

if(screenWidth<620){
 const swiper = new Swiper('.swiper', {
    pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
 
  slidesPerView: fer,
  spaceBetween: 20,
  loop: true
   
});


let swiperSlide = document.querySelectorAll('.swiper-slide');
 for(let i=0; i<swiperSlide.length; i++){
    swiperSlide[i].style.width='100px'
    swiperSlide[i].style.display='flex'
    swiperSlide[i].style.height='72px'
 }

 }

 
 