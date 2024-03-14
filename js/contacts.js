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
        email: "Отсутствует символ @",
      },
      message: {
        required: "Текст не должен быть пустым",
      },
    },
    submitHandler: function (form) {
      ajaxFormSubmit();
    },
  });
  
  function ajaxFormSubmit() {
    let string = $(".contact-form").serialize(); // Соханяем данные введенные в форму в строку.
  
    //Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string
  
      // Функция если все прошло успешно
      success: function (html) {
        $(".contact-form").slideUp(800);
        $("#answer").html(html);
      },
    });
    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
  }
  