$(function () {

   $('.slider__inner, .news__slider-inner').slick({
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      infinite: false
   });
   $('select').styler();

   $('.header__btn-menu').on('click', function () {
      $('.menu ul').slideToggle();
   });


   $('#modal').validate();

   $('input[name=phone]').mask("+7(999) 999-99-99");


   $('form').submit(function(e){
   e.preventDefault();

   if (!$(this).valid()) {
      return;
   }

   $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
   }).done(function() {
      $(this).find("input").val("");
      $('form').fadeOut();

      $('form').trigger('reset');
   });
      return false;
   });


});