const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuList = document.querySelector('.menu-list');
const modalClose = document.querySelectorAll(".modal-close");
const modalDialog = document.querySelectorAll(".popup");

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

menuList.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener("click", () => {
    for (let j = 0; j < modalDialog.length; j++) {
      if (modalDialog[j].style.display == "block") {
        modalDialog[j].style.display = "none";
      }
    }
  });
}
