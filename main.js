import "./style.css";

const sidebar = document.querySelector(".sidebar");

const header = document.querySelector(".header");

const buttonClose = document.querySelector(".btn--close");

const menuHamburger = document.querySelector(".menu__hamburger");

buttonClose.addEventListener("click", function () {
  sidebar.classList.remove("show__sidebar");
});

menuHamburger.addEventListener("click", function () {
  sidebar.classList.add("show__sidebar");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    header.classList.add("fixed__navbar");
  } else {
    header.classList.remove("fixed__navbar");
  }
});
