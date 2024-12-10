/*스크롤*/
var sgc1 = new ScrollGiveClass("header .inner",{
    baseline:200,
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
