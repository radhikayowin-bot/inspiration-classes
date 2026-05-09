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
      if (video !== activeVideo) {
        pauseVideo(video);
      }
    });
  }

  function playVideo(video, keepSound = false) {
    if (!video) return;

    pauseAllExcept(video);

    if (!keepSound) {
      video.muted = true;
      resetIcon(video);
    }

    video.play().catch(() => {});
  }

  cards.forEach((card) => {
    const video = card.querySelector('.highlight-video');
    const soundBtn = card.querySelector('.sound-toggle');
    const soundIcon = soundBtn?.querySelector('i');

    if (!video) return;

    video.muted = true;

    card.addEventListener('mouseenter', () => {
      playVideo(video, !video.muted);
    });

    card.addEventListener('click', () => {
      playVideo(video, !video.muted);
    });

    card.addEventListener('touchstart', () => {
      playVideo(video, !video.muted);
    }, { passive: true });

    if (soundBtn) {
      soundBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        pauseAllExcept(video);

        video.muted = !video.muted;

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
        playVideo(video, !video.muted);
      }

      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
          const video = entry.target.querySelector('.highlight-video');
          if (video) {
            video.pause();
          }
        }
      });
    },
    {
      threshold: [0, 0.2, 0.6, 1]
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