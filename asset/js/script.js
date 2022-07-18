let hamburger = document.getElementById("hamburger");
let closeMenu = document.getElementById("close-menu-icon");
let mobileMenu = document.getElementById("mobile-menu");
let menuList = document.querySelector(".menu-list");

hamburger.addEventListener("click", function () {
  mobileMenu.style.display = "block";
});

closeMenu.addEventListener("click", function () {
  mobileMenu.style.display = "none";
});

menuList.addEventListener("click", function () {
  mobileMenu.style.display = "none";
});
