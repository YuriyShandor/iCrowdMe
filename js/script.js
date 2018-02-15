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

  $(".howIt__btn:nth-child(1)").addClass("howIt__btn_active");
  $(".howIt-block__content:nth-child(1)").addClass("howIt-block__content_active");

  $(".howIt__btn").click(function(){
    $(".howIt__btn").removeClass("howIt__btn_active");
    $(this).addClass("howIt__btn_active");
    var howItBtnIndex = $(this).index()+1;
    $(".howIt-block__content").removeClass("howIt-block__content_active");
    $(".howIt-block__content:nth-child("+ howItBtnIndex +")").addClass("howIt-block__content_active");
  });
});
