const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuList = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

menuList.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
