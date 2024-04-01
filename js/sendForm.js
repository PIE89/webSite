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

const form = document.getElementById("form");

$(document).ready(function () {
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
        email: "отсутсвует символ @",
      },
      message: {
        required: "Поле не должно быть пустым",
      },
    },
    submitHandler: function () {
      const formData = new FormData(form);
      fetchData(formData);
    },
  });
});

async function fetchData(formData) {
  if (!form.checkValidity()) {
    return; // Если форма не прошла валидацию, выходим из функции
  }

  const url = document.location.href;
  console.log("url", url);

  const response = await fetch(url + "/mail.php", {
    method: "POST",
    body: formData,
  });

  const result = await response.text();
  console.log(result);

  // На основе ответа от сервера показываем сообщения об Успехе или Ошибке
  if (result === "SUCCESS") {
    document.getElementById("success").hidden = false;
  } else {
    document.getElementById("error").hidden = false;
  }

  // Очищаем поля формы
  form.reset();
}
