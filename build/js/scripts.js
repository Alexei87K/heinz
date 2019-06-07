$(function(){

$('.header__gamb').on('click', function(){
  $('.header__ul').slideToggle(300, function(){
    $('.fas').removeClass('fa-bars');
    $('.fas').addClass('fa-times');
   if($(this).css('display') === 'none'){
   	$(this).removeAttr('style');
   	$('.fas').addClass('fa-bars');
   	$('.fas').removeClass('fa-times');
   }

  });
 });
});