$(function() {

  var counter = 0;
  var button = $('.button');
  var container = $('.counter');
  var gdlogo = $('.gdlogo');

  button.click(function(){
    counter++;
    container.html(counter);
  });



});
