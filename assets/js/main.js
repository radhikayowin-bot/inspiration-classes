document.addEventListener('DOMContentLoaded', function () {
  const navMenuDesktop = document.getElementById('navMenuDesktop');
  const navMenuMobile = document.getElementById('navMenuMobile');
  const desktopToggle = document.getElementById('menuToggleDesktop');
  const mobileToggle = document.getElementById('menuToggleMobile');
  const closeDesktop = document.getElementById('menuCloseDesktop');
  const closeMobile = document.getElementById('menuCloseMobile');

  function openDesktopMenu() {
    if (navMenuDesktop) navMenuDesktop.classList.remove('hidden');
    document.documentElement.classList.add('menu-open');
    document.body.classList.add('menu-open');
    if (desktopToggle) desktopToggle.setAttribute('aria-expanded', 'true');
  }

  function closeDesktopMenu() {
    if (navMenuDesktop) navMenuDesktop.classList.add('hidden');
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
    if (desktopToggle) desktopToggle.setAttribute('aria-expanded', 'false');
  }

  function openMobileMenu() {
    if (navMenuMobile) navMenuMobile.classList.remove('hidden');
    document.documentElement.classList.add('menu-open');
    document.body.classList.add('menu-open');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    if (navMenuMobile) navMenuMobile.classList.add('hidden');
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
  }

  if (desktopToggle) {
    desktopToggle.addEventListener('click', function () {
      if (navMenuDesktop && navMenuDesktop.classList.contains('hidden')) {
        openDesktopMenu();
      } else {
        closeDesktopMenu();
      }
    });
  }

  if (closeDesktop) closeDesktop.addEventListener('click', closeDesktopMenu);

  if (navMenuDesktop) {
    navMenuDesktop.querySelectorAll('.menu-link').forEach(function (link) {
      link.addEventListener('click', closeDesktopMenu);
    });
  }

  document.addEventListener('click', function (event) {
    const header = document.querySelector('header');
    if (header && !header.contains(event.target)) {
      closeDesktopMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeDesktopMenu();
    }
  });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      if (navMenuMobile && navMenuMobile.classList.contains('hidden')) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });
  }

  if (closeMobile) closeMobile.addEventListener('click', closeMobileMenu);

  if (navMenuMobile) {
    navMenuMobile.querySelectorAll('.mobile-menu-link').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const highlightSection = document.querySelector('#highlightsSlider')?.closest('section');
  const cards = document.querySelectorAll('.highlight-video-card');
  const videos = document.querySelectorAll('.highlight-video');

  let soundEnabled = false;

  function setIcon(video) {
    const icon = video.closest('.highlight-video-card')?.querySelector('.sound-toggle i');
    if (!icon) return;

    icon.className = video.muted
      ? 'fa-solid fa-volume-xmark'
      : 'fa-solid fa-volume-high';
  }

  function updateAllIcons() {
    videos.forEach(setIcon);
  }

  function pauseAllExcept(activeVideo = null) {
    videos.forEach((video) => {
      if (video !== activeVideo) {
        video.pause();
        video.muted = true;
        setIcon(video);
      }
    });
  }

  function playVideo(video) {
    if (!video) return;

    pauseAllExcept(video);

    video.muted = !soundEnabled;
    setIcon(video);

    video.play().catch(() => {});
  }

  function resetHighlightSound() {
    soundEnabled = false;

    videos.forEach((video) => {
      video.pause();
      video.muted = true;
      setIcon(video);
    });
  }

  cards.forEach((card) => {
    const video = card.querySelector('.highlight-video');
    const soundBtn = card.querySelector('.sound-toggle');

    if (!video) return;

    video.muted = true;
    setIcon(video);

    card.addEventListener('mouseenter', () => {
      playVideo(video);
    });

    card.addEventListener('click', () => {
      playVideo(video);
    });

    card.addEventListener('touchstart', () => {
      playVideo(video);
    }, { passive: true });

    if (soundBtn) {
      soundBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        soundEnabled = !soundEnabled;

        videos.forEach((v) => {
          v.muted = true;
          setIcon(v);
        });

        video.muted = !soundEnabled;
        setIcon(video);
        video.play().catch(() => {});
      });
    }
  });

  const cardObserver = new IntersectionObserver(
    function (entries) {
      let mostVisibleCard = null;
      let highestRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
          highestRatio = entry.intersectionRatio;
          mostVisibleCard = entry.target;
        }
      });

      if (mostVisibleCard && highestRatio >= 0.6) {
        const video = mostVisibleCard.querySelector('.highlight-video');
        playVideo(video);
      }

      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.25) {
          const video = entry.target.querySelector('.highlight-video');
          if (video) {
            video.pause();
          }
        }
      });
    },
    {
      threshold: [0, 0.25, 0.6, 1]
    }
  );

  cards.forEach((card) => cardObserver.observe(card));

  if (highlightSection) {
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
            resetHighlightSound();
          }
        });
      },
      {
        threshold: [0, 0.15, 0.5]
      }
    );

    sectionObserver.observe(highlightSection);
  }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      resetHighlightSound();
    }
  });

  updateAllIcons();
});

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('highlightsSlider');
  const prev = document.getElementById('highlightPrev');
  const next = document.getElementById('highlightNext');

  if (!slider) return;

  if (prev) {
    prev.addEventListener('click', () => {
      slider.scrollBy({ left: -320, behavior: 'smooth' });
    });
  }

  if (next) {
    next.addEventListener('click', () => {
      slider.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }
});