$(document).ready(function () {
    $(".category-button").click(function () {
        $(".category-button ul").slideToggle(500);
    })
});

    
var midswiper = new Swiper(".mid-swiper", {

  // grabCursor: true,
  // centeredSlidees: true,
  slidesPerView: 3.5,
  breakpoints: {  
    '908': {
      slidesPerView: 3.5,
      spaceBetween: 20,},
    '640': {
      slidesPerView: 2.5,
      spaceBetween: 10, },
      '510': {
        slidesPerView: 2,
        spaceBetween: 10, },
        '320': {
          slidesPerView: 1.5,
          spaceBetween: 10, },
          '250': {
            slidesPerView: 1,
            spaceBetween: 10, },
  },
  
  spaceBetween: 20,
  loop: true,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mid-swiper-next",
    prevEl: ".mid-swiper-prev",
  },
  

});


var topswiper = new Swiper(".top-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  loop: true,
  pagination: {
    el: ".top-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$(document).ready(function () {
  $(".sidebar-button").click(function () {
      $(".sidebar").toggleClass('active');
  })
});
