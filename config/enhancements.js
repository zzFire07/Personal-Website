document.addEventListener('DOMContentLoaded', function () {
  const yearElements = document.querySelectorAll('[data-current-year]');
  const currentYear = new Date().getFullYear();
  yearElements.forEach((element) => {
    element.textContent = currentYear;
  });

  const navToggle = document.querySelector('.nav-hamburger-box');
  const navMenu = document.querySelector('.hamburger-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      if (typeof window.activarHamburgesa === 'function') {
        window.activarHamburgesa();
      } else {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
      }
    });
  }
});
