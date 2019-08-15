$(document).ready(function () {
  // Маска для телефона
  jQuery(function ($) {
    $(".phone").mask("+7 (999) 999-99-99");
  });
  // Валидация формы и запуск ajax отрпавки при успешной обработке
  $('form').each(function () {
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
        userphone: {
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
        userphone: {
          required: "Заполните номер телефона",
        }
      },
      errorClass: "invalid",
      errorElement: "div",
      submitHandler: function (form) {
        event.preventDefault();
        $.ajax({
          url: './mail.php',
          type: 'post',
          data: $(form).serialize(),
          success: function (data) {
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
            timerId = setTimeout(function () {
              $('#modal-succes').removeClass('modal_active');
            }, 5000);
            // Закрытие на кнопку-крестик
            $('#closesuccessmodal').on('click', function () {
              clearTimeout(timerId);
              $('#modal-succes').removeClass('modal_active');
            });

          },
          error: function (jqXHR, textStatus) {
            console.log(jqXHR + ': ' + textStatus);
          },
        });


      }


    });
  });

});