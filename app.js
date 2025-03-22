const hamburger =  document.querySelector(".hamburger");

const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

const menubar = document.querySelector(".menubar");

menubar.addEventListener("click", () => nav.classList.toggle("active"))