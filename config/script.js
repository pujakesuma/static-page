const header = document.querySelector("header");
const login = document.getElementsByClassName("btn-login")[0];
const hamburger = document.querySelector(".btn-hamburger");

window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 20) {
    header.classList.add("nav-scrolled");
    login.classList.remove("btn-login");
    login.classList.add("btn-login-scrolled");
    hamburger.style.background = "#333";
  } else {
    header.classList.remove("nav-scrolled");
    login.classList.add("btn-login");
    hamburger.style.background = "#fff";
  }
};
