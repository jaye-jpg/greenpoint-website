(function () {
  const burger = document.getElementById('gp-hamburger');
  const nav = document.getElementById('gp-nav');
  const servicesBtn = document.getElementById('gp-services-btn');
  const servicesMenu = document.getElementById('gp-services-menu');

  burger.addEventListener('click', function () {
    const open = burger.classList.toggle('open');
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  servicesBtn.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      const open = servicesMenu.classList.toggle('open');
      servicesBtn.setAttribute('aria-expanded', open);
    } else {
      const open = servicesMenu.classList.toggle('open');
      servicesBtn.setAttribute('aria-expanded', open);
      if (open) servicesMenu.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.gp-services-dropdown')) {
      servicesMenu.classList.remove('open');
      servicesBtn.setAttribute('aria-expanded', 'false');
    }
  });

  servicesBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      servicesMenu.classList.remove('open');
      servicesBtn.setAttribute('aria-expanded', 'false');
    }
  });

  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      burger.classList.remove('open');
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}());
