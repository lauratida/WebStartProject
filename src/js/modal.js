$(document).ready(function(){
  var button = $('#navbar-button');
  // console.log(button);
  var modal = $('#modal1');
  var close = $('#closemodal');

  button.on('click', function(){
    modal.addClass('modal_active');
  });
  close.on('click', function(){
    modal.removeClass('modal_active');
  });
  // modal.on('click', function(){
  //   modal.removeClass('modal_active');
  // });
  // $('#modal').click(function() {
  //   if ($(event.target).closest('#modal').length == 0) {
  //       $(this).removeClass('modal_active');
  //   }                    
  // });

  $('#scrollbutton').on('click', function(){
    // сперва получаем позицию элемента относительно документа
    var scroll = $('#scroll').offset().top;
    // скроллим страницу на значение равное позиции элемента
    $("html, body").animate({ scrollTop: scroll }, 600);
    return false;
  });
  $(window).scroll(function() {
 
    if($(this).scrollTop() != 0) {
     
    $('#scrollbutton').fadeIn();
     
    } else {
     
    $('#scrollbutton').fadeOut();
     
    }
     
    });

  // Проверка метода по скроллу к нужному месту.
  // $('#herobutton').on('click', function(){
  //   $("html, body").animate({ scrollTop: $('#hero').offset().top }, 600);
  //   return false;
  // });
});