/* Small, dependency-free enhancements. The site remains usable without JS. */
(() => {
  'use strict';

  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  const menuLabel = document.querySelector('.menu-label');
  const mobileQuery = window.matchMedia('(max-width: 640px)');

  /** Open or close the mobile navigation without hiding the rest of the page. */
  const setMenuOpen = (open, restoreFocus = false) => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open && mobileQuery.matches);
    if (menuLabel) menuLabel.textContent = open ? 'Close' : 'Menu';
    if (!open && restoreFocus) menuButton.focus();
  };

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false, true);
      }
    });
    // Close when focus leaves the navigation/header or the user taps elsewhere.
    document.addEventListener('click', (event) => {
      if (header && !header.contains(event.target)) setMenuOpen(false);
    });
    header?.addEventListener('focusout', (event) => {
      if (event.relatedTarget && !header.contains(event.relatedTarget)) setMenuOpen(false);
    });
    mobileQuery.addEventListener('change', () => setMenuOpen(false));
  }

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 10);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // Home-page project filtering. All project content is regular, editable HTML.
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const projectCards = [...document.querySelectorAll('.project-card[data-category]')];
  const projectGrid = document.querySelector('#project-grid');
  const filterStatus = document.querySelector('#filter-status');

  const applyFilter = (filter) => {
    let count = 0;
    projectCards.forEach((card) => {
      const categories = (card.dataset.category || '').split(' ');
      const visible = filter === 'all' || categories.includes(filter);
      card.hidden = !visible;
      if (visible) count += 1;
    });
    filterButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
    });
    projectGrid?.classList.toggle('is-single', count === 1);
    if (filterStatus) {
      filterStatus.textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown.`;
    }
  };

  filterButtons.forEach((button) => {
    const filter = button.dataset.filter || 'all';
    const count = projectCards.filter((card) => filter === 'all' || (card.dataset.category || '').split(' ').includes(filter)).length;
    const countLabel = button.querySelector('span');
    if (countLabel) countLabel.textContent = String(count).padStart(2, '0');
    button.addEventListener('click', () => applyFilter(filter));
  });

  // Mark the active section on the home page, with no scroll animation needed.
  const sections = [...document.querySelectorAll('main > section[id]')]
    .filter((section) => ['projects', 'about', 'contact'].includes(section.id));
  const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  if (sections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', () => {
      if (window.scrollY < 150) {
        sectionLinks.forEach((link) => {
          link.classList.remove('is-active');
          link.removeAttribute('aria-current');
        });
      }
    }, { passive: true });
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();

/* Screenshot gallery. Plain image links remain usable when JS is unavailable. */
(() => {
  'use strict';
  const links = [...document.querySelectorAll('[data-lightbox="readtheroom"]')];
  const dialog = document.querySelector('#media-dialog');
  if (!links.length || !dialog || typeof dialog.showModal !== 'function') return;

  const image = dialog.querySelector('[data-media-image]');
  const title = dialog.querySelector('#media-dialog-title');
  const caption = dialog.querySelector('[data-media-caption]');
  const counter = dialog.querySelector('[data-media-counter]');
  const original = dialog.querySelector('[data-media-original]');
  if (!image || !title || !caption || !counter || !original) return;

  let current = 0;
  let trigger = null;

  const showScreen = (index) => {
    current = (index + links.length) % links.length;
    const link = links[current];
    image.src = link.href;
    image.alt = link.querySelector('img')?.alt || link.dataset.title || 'App screenshot';
    title.textContent = link.dataset.title || 'App screenshot';
    caption.textContent = link.dataset.caption || '';
    counter.textContent = `${current + 1} / ${links.length}`;
    original.href = link.href;
    dialog.scrollTop = 0;
  };

  links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      // Preserve normal browser shortcuts such as opening a link in a new tab.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      trigger = link;
      showScreen(index);
      dialog.showModal();
      document.body.classList.add('media-open');
    });
  });

  dialog.querySelector('[data-media-prev]')?.addEventListener('click', () => showScreen(current - 1));
  dialog.querySelector('[data-media-next]')?.addEventListener('click', () => showScreen(current + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showScreen(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
    // Escape and focus trapping are handled by the native modal dialog.
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('media-open');
    trigger?.focus({ preventScroll: true });
  });
})();
