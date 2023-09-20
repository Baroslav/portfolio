$(document).ready(function () {
  $('popup-btn').on('click', function (event) {
    event.preventDefault();
    $('.popup').fadeIn();
  });
  $(".features-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 991,
        settings: {
          prevArrow: '<button class="prev"></button>',
          nextArrow: '<button class="next"></button>',
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          prevArrow: '<button class="prev"></button>',
          nextArrow: '<button class="next"></button>',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});