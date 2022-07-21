const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuList = document.querySelector('.menu-list');
const modalClose = document.querySelectorAll('.modal-close');
const modalDialog = document.querySelectorAll('.popup');
const modals = document.querySelectorAll('.action-btn');
const contactForm = document.getElementById('contact-me-form');

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
      if (modalDialog[j].style.display === 'block') {
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

const validateEmail = (email) => {
  if (email !== email.toLowerCase()) return false;
  return true;
};

contactForm.addEventListener('submit', (e) => {
  const EMAIL_INVALID = 'Your Email should be in lower case only. Please try again!';
  const displayMsg = document.getElementById('display-msg');
  e.preventDefault();
  if (!validateEmail(contactForm.elements.email.value.trim())) {
    displayMsg.innerText = EMAIL_INVALID;
    displayMsg.style.color = '#ff0000';
  } else {
    displayMsg.innerText = '';
    contactForm.submit();
  }
});