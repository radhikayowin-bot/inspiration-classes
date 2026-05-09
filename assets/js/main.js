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
  const prev = document.getElementById('highlightPrev');
  const next = document.getElementById('highlightNext');
  const cards = document.querySelectorAll('.highlight-video-card');
  const videos = document.querySelectorAll('.highlight-video');

  if (slider && next) {
    next.addEventListener('click', function () {
      slider.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  if (slider && prev) {
    prev.addEventListener('click', function () {
      slider.scrollBy({ left: -320, behavior: 'smooth' });
    });
  }

  function pauseAllVideos(exceptVideo = null) {
    videos.forEach((video) => {
      if (video !== exceptVideo) {
        video.pause();
      }
    });
  }

  function muteAllVideos(exceptVideo = null) {
    videos.forEach((video) => {
      if (video !== exceptVideo) {
        video.muted = true;
        const btn = video.closest('.highlight-video-card')?.querySelector('.sound-toggle i');
        if (btn) {
          btn.className = 'fa-solid fa-volume-xmark';
        }
      }
    });
  }

  cards.forEach((card) => {
    const video = card.querySelector('.highlight-video');
    const soundBtn = card.querySelector('.sound-toggle');
    const soundIcon = soundBtn?.querySelector('i');

    if (!video) return;

    video.muted = true;

    card.addEventListener('mouseenter', () => {
      pauseAllVideos(video);
      video.play().catch(() => {});
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
    });

    card.addEventListener('click', () => {
      pauseAllVideos(video);
      video.play().catch(() => {});
    });

    if (soundBtn) {
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        if (video.muted) {
          muteAllVideos(video);
          video.muted = false;
          video.play().catch(() => {});
          if (soundIcon) soundIcon.className = 'fa-solid fa-volume-high';
        } else {
          video.muted = true;
          if (soundIcon) soundIcon.className = 'fa-solid fa-volume-xmark';
        }
      });
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector('.highlight-video');
        if (!video) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          pauseAllVideos(video);
          video.muted = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: [0, 0.6, 1]
    }
  );

  cards.forEach((card) => observer.observe(card));
});