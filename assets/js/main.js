document.addEventListener('DOMContentLoaded', function () {
  const navMenu = document.getElementById('navMenu');
  const desktopToggle = document.getElementById('menuToggleDesktop');
  const mobileToggle = document.getElementById('menuToggleMobile');
  const closeBtn = document.getElementById('menuClose');

  if (!navMenu) return;

  function setExpanded(isOpen) {
    [desktopToggle, mobileToggle].forEach((button) => {
      if (button) button.setAttribute('aria-expanded', String(isOpen));
    });
  }

  function closeMenu() {
    navMenu.classList.add('hidden');
    setExpanded(false);
  }

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle('hidden') === false;
    setExpanded(isOpen);
  }

  if (desktopToggle) desktopToggle.addEventListener('click', toggleMenu);
  if (mobileToggle) mobileToggle.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (event) {
    const header = document.querySelector('header');
    if (header && !header.contains(event.target)) {
      closeMenu();
    }
  });
});
