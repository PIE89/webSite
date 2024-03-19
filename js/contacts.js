// Section Contacts

let inputs = document.querySelectorAll(".form__data");

inputs.forEach((input) => {
  let parent = input.closest(".form__group");
  let fake = parent.querySelector(".form__fake-placeholder");

  input.addEventListener("focus", function focus() {
    fake.classList.add("form__fake-placeholder--active");
  });

  input.addEventListener("blur", function () {
    if (input.value.length === 0) {
      fake.classList.remove("form__fake-placeholder--active");
    }
  });
});

// FORM VALIDATE

$(document).ready(function () {
  //FORM VALIDATE
  $(".form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },

      message: {
        required: true,
      },
    },
    messages: {
      email: {
        required: "Введите email",
        email: "отсутсвует символ @",
      },

      message: {
        required: "Поле не должно быть пустым",
      },
    },
    submitHandler: function (form) {
      ajaxFormSubmit();
    },
  });

  //*************************************************** */
  // Функция AJAX запрса на сервер

  function ajaxFormSubmit() {
    let string = $(".form").serialize(); // Соханяем данные введенные в форму в строку.

    //Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function (html) {
        $(".form").slideUp(800);
        $("#answer").html(html);
      },
    });
    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
  }
});
