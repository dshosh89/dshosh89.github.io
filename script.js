$(document).ready(function(){
  
$('.map-icon').click(function(event){
   event.preventDefault();
  var me = $(this).attr('href');
  console.log(me);
  var otherMe = $(''+me+'');
  console.log(otherMe.offset().top);
  $('html, body').animate({
    scrollTop: $(''+me+'').offset().top
 }, 2000);
});
  
  $('.map-icon').hover(function(){
    var me = $(this).attr('href').replace('#','');
    showArrow(me);
  });
  
  function showArrow(number){
    $('.arrows').css('opacity',0);
    if (number != 5){
    $('#arrow-' + number ).css('opacity',1);
    }
  }
  
   $('.map-icon').mouseout(function(){
    $('.arrows').css('opacity',0);
  });
  
    var h3 = $('h3');
    var h3Text = "Your guide to exploring Madrid. One local market at a time."
    var textToShow;
  var i = 0;
  function showText(){
        setTimeout(function(){
                 textToShow = h3Text.slice(0,i).toString();
                 h3.html(textToShow)
          if (i<h3Text.length){               
            if (i == 32){
              setTimeout(function(){
                i++
                showText();
              },300)
            } else{
          i++
          showText();
                 }
          }
        },75);
  }
    
 showText();
  
  });
