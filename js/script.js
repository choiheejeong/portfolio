/*스크롤*/
var sgc1 = new ScrollGiveClass("header .inner",{
    baseline:100,
});


/*프로젝트 슬라이드*/
const project = new Swiper('#project .viewport', {
  containerModifierClass: 'viewport',
  wrapperClass: 'slider-container',
  slideClass:'inner',
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});


/*메뉴*/
var menu_btn = document.querySelector(".open_menu");
var menu = document.querySelector(".menu");

menu_btn.addEventListener("click",function(e){
  e.preventDefault();
  menu.classList.toggle("active");
  menu_btn.classList.toggle("active"); 
});