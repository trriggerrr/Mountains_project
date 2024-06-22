const btn = document.querySelector(".header__btn-menu");
const nav = document.querySelector(".header__nav");

btn.addEventListener("click", function () {
  btn.classList.toggle("header__btn-menu_open");
  nav.classList.toggle("header__nav_open");
});
