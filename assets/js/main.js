const navToggle = document.querySelector('#nav-toggle');
const mobileNav = document.querySelector('#mobile-nav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('hidden') === false;
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    navToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark text-lg"></i>' : '<i class="fa-solid fa-bars text-lg"></i>';
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
      navToggle.innerHTML = '<i class="fa-solid fa-bars text-lg"></i>';
    });
  });
}
