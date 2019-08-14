$(document).ready(function(){
  var button = $('#navbar-button');
  // console.log(button);
  var modal = $('#modal1');
  var close = $('#closemodal');

  button.on('click', function(){
    // $("div.content").remove()
    modal.addClass('modal_active');
  });
  close.on('click', function(){
    modal.removeClass('modal_active');
    $('.dialog-desc').removeClass('modal_active');
  });

  // закрыть по клику вне окна
  $(document).mouseup(function(e) {
    var popup = $('.modal-dialog');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      modal.removeClass('modal_active');
    }
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

  // Подгрузка модальных окон при клике на ссылку
  var cardlink = $('.card__link')
  
  cardlink.on('click', function(event){
    event.preventDefault();
    modal.addClass('modal_active');
    var target = $(this).attr('data-target')
    $('.dialog-desc').addClass('modal_active')
    $('.dialog-desc').load(target+".html")
  });

});