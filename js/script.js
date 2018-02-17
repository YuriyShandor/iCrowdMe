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

  // How it works

  $(".howIt__btn:nth-child(1)").addClass("howIt__btn_active");
  $(".howIt-block__content:nth-child(1)").addClass("howIt-block__content_active");

  $(".howIt__btn").click(function(){
    $(".howIt__btn").removeClass("howIt__btn_active");
    $(this).addClass("howIt__btn_active");
    var howItBtnIndex = $(this).index()+1;
    $(".howIt-block__content").removeClass("howIt-block__content_active");
    $(".howIt-block__content:nth-child("+ howItBtnIndex +")").addClass("howIt-block__content_active");
  });

  // project-funded
  var a = 0;
  $(window).scroll(function() {
    var oTop = $('.projects-block').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.funded-rate').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
          $(this).text(Math.ceil(now));
        }
        });
      });
      a = 1;
    }
  });

  $(function() {
    var $section = $('.projects-block');

    function loadDaBars() {
      $(".project-funded__rate").each(function() {
        $(this).data("origWidth",
        $(this).width()).width(0).animate( {
          width: $(this).data("origWidth")
        }, 3000);
      });
    }

    $(document).bind('scroll', function(ev) {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
          loadDaBars();
          $(document).unbind('scroll');
      }
    });
  });

  // Partners slider
  $(".partners-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});
