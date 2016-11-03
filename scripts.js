$(function() {

  var counter = 0;
  var button = $('.button');
  var container = $('.counter');
  var gdlogo = $('.gdlogo');

  button.click(function(){
    counter++;
    container.html(counter);
  });

  $('.div1').on( "mouseover", function() {
    $('.div1').css( "color", "red" );
  });

});
