const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuList = document.querySelector('.menu-list');

hamburger.addEventListener('click', function () {
  mobileMenu.style.display = 'block';
});

closeMenu.addEventListener('click', function () {
  mobileMenu.style.display = 'none';
});

menuList.addEventListener('click', function () {
  mobileMenu.style.display = 'none';
});
