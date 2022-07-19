const menu = document.querySelector('#mob-menu');
const hamburger = document.querySelector('#hamburger-icon');
const closebtn = document.querySelector('#x-iconid');
const navlinks = document.querySelector('#navLinks');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  hamburger.style.display = 'none';
});

closebtn.addEventListener('click', () => {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
});

navlinks.addEventListener('click', () => {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
});
