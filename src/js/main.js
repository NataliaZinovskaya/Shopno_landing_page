$(document).ready(function () {
  //кнопка вверх
  var $btnTop = $('.btn-top');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 250) {
      $btnTop.fadeIn();
    } else {
      $btnTop.fadeOut();
    }
  });

  $btnTop.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 900)
  });

  //слайдер карусель
  $('.single-item').slick({
    prevArrow: '<button type="button" class="prev"></button>',
    nextArrow: '<button type="button" class="next"></button>',
  });
});