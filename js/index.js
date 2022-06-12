let options = {
  // reset: true,
  delay: 0,
  distance: "200px",
  duration: 1500,
  origin: "left",
  scale: 0.85,
  viewFactor: 0.1,
};

ScrollReveal().reveal(".intro .text", { ...options, ...{} });

ScrollReveal().reveal(".intro .role", {
  ...options,
  ...{ origin: "right", delay: 300 },
});

ScrollReveal().reveal(".intro .bio", { ...options, ...{ delay: 600 } });

ScrollReveal().reveal(".experience-wrapper", {
  ...options,
  ...{ interval: 300 },
});

ScrollReveal().reveal(".card-wrapper:nth-child(even) .card-box", {
  ...options,
  ...{ interval: 300 },
});

ScrollReveal().reveal(".card-wrapper:nth-child(odd) .card-box", {
  ...options,
  ...{ interval: 300, origin: "right" },
});

ScrollReveal().reveal(".glass-list-item", {
  ...options,
  ...{ interval: 50, origin: "bottom" },
});

ScrollReveal().reveal(".img-wrapper", { ...options, ...{ origin: "top" } });

ScrollReveal().reveal(".about-detail", { ...options, ...{ origin: "bottom" } });

ScrollReveal().reveal(".transparent-box", { ...options, ...{} });

ScrollReveal().reveal(".circle-wrapper", {
  ...options,
  ...{
    duration: 500,
    interval: 300,
    afterReveal: function (el) {
      let circle = $(el).find(".circle");
      let data_obj = circle.find(".data");
      let data = data_obj.data();
      let counter = 0,
        end = data.value;
      let bg = circle.css("background-image");

      let progress = setInterval(function () {
        let content = "";
        counter++;

        if (counter >= end) {
          clearInterval(progress);
        }

        content += `<p class="mb-0 font-monospace">${data.title}</p>`;
        content += `<p class="mb-0">${counter}%</p>`;
        data_obj.html(content);
        circle.css(
          "background-image",
          bg.replace(/0deg/g, `${3.6 * counter}deg`)
        );
      }, 1000 / end);
    },
  },
});

let scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbarSupportedContent",
  offset: 250,
});

$(window).on("scroll", function () {
  let is_active = $(
    "nav.navbar .navbar-collapse .nav-item:nth-child(1) .nav-link"
  ).hasClass("active");
  if (is_active && !$(".navbar-collapse.collapse").hasClass("show")) {
    $("nav.navbar").removeClass("add-bg");
  } else {
    $("nav.navbar").addClass("add-bg");
  }
});

$(".navbar-toggler").on("click", function () {
  let is_active = $(
    "nav.navbar .navbar-collapse .nav-item:nth-child(1) .nav-link"
  ).hasClass("active");
  if (is_active) {
    $("nav.navbar").toggleClass("add-bg");
  }
});
