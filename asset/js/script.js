const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuList = document.querySelector('.menu-list');
const modalClose = document.querySelectorAll('.modal-close');
const modalDialog = document.querySelectorAll('.popup');
const modals = document.querySelectorAll('.action-btn');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

menuList.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i < modalClose.length; i += 1) {
  modalClose[i].addEventListener('click', () => {
    for (let j = 0; j < modalDialog.length; j += 1) {
      if (modalDialog[j].style.display == 'block') {
        modalDialog[j].style.display = 'none';
      }
    }
  });
}

for (let i = 0; i < modals.length; i += 1) {
  modals[i].addEventListener('click', () => {
    const modal = document.querySelector(modals[i].getAttribute('data-target'));
    modal.style.display = 'block';
  });
}
