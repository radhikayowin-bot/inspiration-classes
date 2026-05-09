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

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.highlight-video-card');
  const videos = document.querySelectorAll('.highlight-video');

  function resetIcon(video) {
    const icon = video.closest('.highlight-video-card')?.querySelector('.sound-toggle i');
    if (icon) icon.className = 'fa-solid fa-volume-xmark';
  }

  function pauseVideo(video) {
    video.pause();
    video.muted = true;
    resetIcon(video);
  }

  function pauseAllExcept(activeVideo) {
    videos.forEach((video) => {
      if (video !== activeVideo) pauseVideo(video);
    });
  }

  function playVideo(video) {
    if (!video) return;
    pauseAllExcept(video);
    video.muted = true;
    video.play().catch(() => {});
  }

  cards.forEach((card) => {
    const video = card.querySelector('.highlight-video');
    const soundBtn = card.querySelector('.sound-toggle');
    const soundIcon = soundBtn?.querySelector('i');

    if (!video) return;

    video.muted = true;

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

        const shouldUnmute = video.muted;

        videos.forEach((v) => {
          v.muted = true;
          resetIcon(v);
        });

        video.muted = !shouldUnmute;

        if (soundIcon) {
          soundIcon.className = video.muted
            ? 'fa-solid fa-volume-xmark'
            : 'fa-solid fa-volume-high';
        }

        video.play().catch(() => {});
      });
    }
  });

  const observer = new IntersectionObserver(
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
          if (video) pauseVideo(video);
        }
      });
    },
    {
      threshold: [0, 0.25, 0.6, 1]
    }
  );

  cards.forEach((card) => observer.observe(card));
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