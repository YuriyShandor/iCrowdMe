$(document).ready(function() {
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  $('.baner-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: $(".baner-slider__arrow_next"),
   prevArrow: $(".baner-slider__arrow_prev"),
   autoplay: true,
   autoplaySpeed: 5000,
  });
});
