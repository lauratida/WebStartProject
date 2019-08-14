
$(document).ready(function(){
  $('form').each(function() {
    $(this).validate({
      rules: {
        username: {
          required: true,
          minlength: 2,
          maxlength: 15,
        },
        usermail: {
          required: true,
          email: true,
        },
        userphone:{
          required: true,
        }
      },
      messages: {
        username: {
          required: "Заполните Имя",
          minlength: "Введите больше 2 символов",
          maxlength: "Введите меньше 15 символов",
        },
        usermail: {
          required: "Заполните E-mail",
          email: "Введите корректный e-mail"
        },
        userphone:{
          required: "Заполните номер телефона",
        }
      },
      errorClass: "invalid",
      errorElement: "div",
      submitHandler: function(form) {
          event.preventDefault();
          $.ajax({
            url: './mail.php',
            type: 'post',
            data: $(form).serialize(),
            success: function(data) {
              yaCounter54884206.reachGoal('FormSubmit');
              // Очистка полей формы
              $('#usernamed').val('');
              $('#userphoned').val(''); 
                
              $('#usernamem').val('');
              $('#userphonem').val('');

              $('#usernameb').val('');
              $('#userphoneb').val('');
              $('#usermailb').val('');

              // Вывод ответа в модальном окне
              $('#sucess-user').html(data);
              $('#sucess-user').addClass('bold');
              $('#modal-succes').addClass('modal_active');
              // Автозакрытие
              var timerId;
              timerId = setTimeout(() => {
                $('#modal-succes').removeClass('modal_active');
              }, 5000);
              // Закрытие на кнопку-крестик
              $('#closesuccessmodal').on('click', function(){
                clearTimeout(timerId);
                $('#modal-succes').removeClass('modal_active');
              });

            },
            error: function(jqXHR, textStatus) {
              console.log(jqXHR + ': ' + textStatus);
            },
          });


      }


    });
  });

});




// Обработка и отправка формы через технологию Ajax

// $(document).ready(function(){
//   // Отправка формы из секции call
//   $('#call-form').on('submit', function(event){
//     event.preventDefault();
//     $.ajax({
//       url: 'mail.php',
//       type: 'post',
//       data: $(this).serialize(),
//       success: function(data) {
//         // Вывод ответа в поля под кнопкой
//         // $('.call-desc__text1').html('<strong>' + data + '</strong>, наш менеджер перезвонит Вам&nbsp;в&nbsp;течение 60 секунд');
//         // $('.call-desc__text2').html('');
//         // Очистка полей формы
//         $('#username').val('');
//         $('#userphone').val('');
//         // Вывод ответа в модальном окне
//         $('#sucess-user').html(data);
//         $('#sucess-user').addClass('bold');
//         $('#modal-succes').addClass('modal_active');
//         // Автозакрытие
//         var timerId;
//         timerId = setTimeout(() => {
//           $('#modal-succes').removeClass('modal_active');
//         }, 5000);
//         // Закрытие на кнопку-крестик
//         $('#closesuccessmodal').on('click', function(){
//           clearTimeout(timerId);
//           $('#modal-succes').removeClass('modal_active');
//         });

//       },
//       error: function(jqXHR, textStatus) {
//         console.log(jqXHR + ': ' + textStatus);
//       },
//     });
//   });


//   // Отправка формы из модального окна
  // $('#dialog-form').on('submit', function(event){
  //   event.preventDefault();
  //   $.ajax({
  //     url: '../mail.php',
  //     type: 'post',
  //     data: $(this).serialize(),
  //     success: function(data) {
  //       // Очистка полей формы
  //       console.log('ghbdn');

  //       $('#username').val('');
  //       $('#userphone').val('');
  //       // Вывод ответа в модальном окне
  //       $('#sucess-user').html(data);
  //       $('#sucess-user').addClass('bold');
  //       $('#modal-succes').addClass('modal_active');
  //       // Автозакрытие
  //       var timerId;
  //       timerId = setTimeout(() => {
  //         $('#modal-succes').removeClass('modal_active');
  //       }, 5000);
  //       // Закрытие на кнопку-крестик
  //       $('#closesuccessmodal').on('click', function(){
  //         clearTimeout(timerId);
  //         $('#modal-succes').removeClass('modal_active');
  //       });

  //     },
  //     error: function(jqXHR, textStatus) {
  //       console.log(jqXHR + ': ' + textStatus);
  //     },
  //   });
  // });
// });
