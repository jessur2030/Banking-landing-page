const btnMenu = document.querySelector("#btnmenu");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const headerMenu = document.querySelector("#header__menu");

btnMenu.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // close mobile menu toggle
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElements.forEach((elements) => {
      elements.classList.remove("fade-in");
      elements.classList.add("fade-out");
    });
  } else {
    // open mobile menu toggle
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElements.forEach((elements) => {
      elements.classList.remove("fade-out");
      elements.classList.add("fade-in");
    });
  }
});

headerMenu.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // close mobile menu toggle
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElements.forEach((elements) => {
      elements.classList.remove("fade-in");
      elements.classList.add("fade-out");
    });
  }
});
