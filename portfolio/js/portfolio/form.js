$(document).ready(function () {
  let form = $("form#contact-form");
  let buttons = form.children("input.btn");
  form.submit(function (event) {
    event.preventDefault();

    let status = "Oops! There was a problem submitting your form.",
      formData = new FormData(event.target);

    $.ajax({
      type: "POST",
      url: "https://formspree.io/f/mzbwjogy",
      processData: false,
      contentType: false,
      data: formData,
      dataType: "json",

      beforeSend: function () {
        form.css({ opacity: 0.5 });
        buttons.prop("disabled", true);
      },

      success: function (response) {
        if (response.ok) {
          status = "Thanks for your submission!";
          form.trigger("reset");
        }
      },

      error: function (response) {
        let data = JSON.parse(JSON.stringify(response));
        if (Object.hasOwn(data, "errors")) {
          status = data["errors"].map((error) => error["message"]).join(", ");
        }
      },

      complete: function () {
        $("#contact-form-status").text(status).slideDown();
        form.css({ opacity: 1 });
        buttons.prop("disabled", false);
        setTimeout(() => {
          $("#contact-form-status").slideUp();
        }, 5000);
      },
    });
  });
});
