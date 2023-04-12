// navigation
const navBtn = document.getElementById("navBtn");
const closeBtn = document.getElementById("closeBtn");
const navMenu = document.querySelector("header ul");
const header = document.querySelector("header");
navBtn.addEventListener("click", function () {
  header.classList.add("active");
  navBtn.classList.toggle("close");
});

closeBtn.addEventListener("click", function () {
  header.classList.remove("active");
});

// swiper js
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3500,
  },
});
