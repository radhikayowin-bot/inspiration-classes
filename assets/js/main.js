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
  const slider = document.getElementById('highlightsSlider');
  const videos = document.querySelectorAll('.highlight-video');
  const cards = document.querySelectorAll('.highlight-video-card');
  const prev = document.getElementById('highlightPrev');
  const next = document.getElementById('highlightNext');

  if (prev && slider) {
    prev.addEventListener('click', () => {
      slider.scrollBy({ left: -320, behavior: 'smooth' });
    });
  }

  if (next && slider) {
    next.addEventListener('click', () => {
      slider.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  function pauseAllExcept(activeVideo) {
    videos.forEach((video) => {
      if (video !== activeVideo) {
        video.pause();
        video.muted = true;
        const icon = video.closest('.highlight-video-card')?.querySelector('.sound-toggle i');
        if (icon) icon.className = 'fa-solid fa-volume-xmark';
      }
    });
  }

  function safePlay(video) {
    if (!video) return;
    pauseAllExcept(video);
    video.muted = true;
    video.play().catch(() => {
      video.load();
      setTimeout(() => {
        video.play().catch(() => {});
      }, 300);
    });
  }

  cards.forEach((card) => {
    const video = card.querySelector('.highlight-video');
    const soundBtn = card.querySelector('.sound-toggle');
    const soundIcon = soundBtn?.querySelector('i');

    if (!video) return;

    video.muted = true;
    video.load();

    card.addEventListener('mouseenter', () => {
      safePlay(video);
    });

    card.addEventListener('touchstart', () => {
      safePlay(video);
    }, { passive: true });

    card.addEventListener('click', () => {
      safePlay(video);
    });

    if (soundBtn) {
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        const willUnmute = video.muted;

        videos.forEach((v) => {
          v.muted = true;
          const icon = v.closest('.highlight-video-card')?.querySelector('.sound-toggle i');
          if (icon) icon.className = 'fa-solid fa-volume-xmark';
        });

        video.muted = !willUnmute;

        if (!video.muted) {
          video.play().catch(() => {});
          if (soundIcon) soundIcon.className = 'fa-solid fa-volume-high';
        } else {
          if (soundIcon) soundIcon.className = 'fa-solid fa-volume-xmark';
        }
      });
    }
  });

  const observer = new IntersectionObserver((entries) => {
    let mostVisible = null;
    let maxRatio = 0;

    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio;
        mostVisible = entry.target;
      }
    });

    if (mostVisible && maxRatio >= 0.55) {
      const video = mostVisible.querySelector('.highlight-video');
      safePlay(video);
    }

    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.25) {
        const video = entry.target.querySelector('.highlight-video');
        if (video) video.pause();
      }
    });
  }, {
    root: slider || null,
    threshold: [0, 0.25, 0.55, 0.75, 1]
  });

  cards.forEach((card) => observer.observe(card));
});