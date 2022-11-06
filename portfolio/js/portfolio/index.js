// bootstrap JS
let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {});
});

// code JS
function current_duration() {
  let from = new Date(2020, 0, 9);
  let today = new Date();

  let days = today.getDate() - from.getDate();
  let months = today.getMonth() - from.getMonth();

  if (days < 0) {
    months -= 1;

    let days_in_current_month = new Date(
      today.getFullYear(),
      from.getMonth() + 1,
      0
    ).getDate();

    days += days_in_current_month;
  }

  let years = today.getFullYear() - from.getFullYear();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let duration = "";

  if (years > 0) {
    duration += `${years} year${years !== 1 ? "s" : ""}`;
  }

  if (months > 0) {
    if (duration.length > 0) {
      duration += " and ";
    }
    duration += `${months} month${months !== 1 ? "s" : ""}`;
  }

  // print duration in days if years and months are less than 0 i.e. duration is less than 1 month
  if (duration.length <= 0) {
    duration += `${days} day${days !== 1 ? "s" : ""}`;
  }

  return duration;
}

$("#current-duration").text(current_duration());

// ScrollReveal JS
let options = {
  // reset: true,
  delay: 0,
  distance: "50px",
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

ScrollReveal().reveal(".img-container", { ...options, ...{ origin: "top" } });

ScrollReveal().reveal(".about-detail", { ...options, ...{ origin: "bottom" } });

ScrollReveal().reveal(".responsibilities", { ...options, ...{} });

ScrollReveal().reveal(".transparent-box", { ...options, ...{} });

ScrollReveal().reveal(".circle-wrapper", {
  ...options,
  ...{
    duration: 500,
    reset: true,
    // interval: 300,
    beforeReveal: function (el) {
      $(el).find(".circle").removeAttr("style");
    },
    afterReveal: function (el) {
      let circle = $(el).find(".circle");
      let data_obj = circle.find(".data");
      let data = data_obj.data();
      let counter = 0,
        end = 100;

      let bg = circle.css("background-image");

      let progress = setInterval(function () {
        let content = "";
        counter++;

        if (counter >= end) {
          clearInterval(progress);
        }

        content += `<p class="mb-0 font-monospace">${data.title}</p>`;
        // content += `<p class="mb-0">${counter}%</p>`;
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

let skills = [
  "point of sale",
  "social media",
  "e-medical",
  "back-end",
  "API communication",
  "postgresql",
  "mysql",
  "heroku",
  "docker",
  "front-end",
  "jquery",
  "scss",
  "bootstrap",
  "materialize ui",
  "team player",
  "attention to details",
  "analytical",
  "client interaction",
  "scrum management",
  "organizational skills",
  "computer application",
];

function createSkillElement(skill) {
  const item = document.createElement("li");
  const para = document.createElement("p");
  item.appendChild(para);
  // $(item).addClass("col-6 col-sm-4 col-lg-3 glass-list-item");
  $(item).addClass("col-auto glass-list-item");
  $(para).text(skill);
  return $(item);
}

skills.forEach((skill) => {
  $(".skills .glass-list").append(createSkillElement(skill));
});

ScrollReveal().reveal(".glass-list-item", {
  ...options,
  ...{ interval: 50, origin: "bottom" },
});

let responsibilities = [
  "Design client-side and server-side architecture",
  "Develop and manage well-functioning databases",
  "Create security and data protection settings including two factor auth",
  "Design public and private APIs for different use cases and synchronizing data between local systems and cloud servers",
  "Write technical documentation",
  "Take care of the server setup, SSL and deployment on AWS using docker and manage the repositories with GIT",
  "Build the front end of applications through appealing visual design with mobile responsive",
  "Design the front end using HTML/CSS (Bootstrap) with DOM manipulation (Javascript/Jquery)",
];

function createResponsibilityElement(responsibility) {
  const item = document.createElement("li");
  // const icon = document.createElement("i");
  const text = document.createElement("p");
  // item.appendChild(icon);
  item.appendChild(text);
  // $(icon).addClass("fa-solid fa-circle-check text-success");
  // $(item).addClass("mb-2");
  $(text).addClass("ms-2 mb-2").text(responsibility);
  return $(item);
}

responsibilities.forEach((responsibility) => {
  $("section.about .responsibilities ul").append(
    createResponsibilityElement(responsibility)
  );
});
