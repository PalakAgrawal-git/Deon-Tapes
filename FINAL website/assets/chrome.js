// DEON Tapes — Chrome (header + footer) injected on every page
(function() {
  'use strict';

  var page = document.body.getAttribute('data-page') || '';

  /* ---- Determine active nav section ---- */
  var path = location.pathname.replace(/.*\//, '');
  var NAV_MAP = {
    'index.html': 'home', '': 'home',
    'markets.html': 'markets', 'market.html': 'markets',
    'applications.html': 'applications', 'application.html': 'applications',
    'products.html': 'products', 'product.html': 'products',
    'manufacturing-technology.html': 'manufacturing', 'films.html': 'manufacturing',
    'knowledge-center.html': 'knowledge', 'tools.html': 'knowledge',
    'certifications.html': 'knowledge',
    'about.html': 'about', 'careers.html': 'careers',
    'press.html': 'press', 'partners.html': 'partners',
    'converter-partners.html': 'partners', 'oem-partners.html': 'partners',
    'dealer-partners.html': 'partners', 'contact.html': 'contact'
  };
  var active = NAV_MAP[path] || page || '';

  /* ---- Build header HTML ---- */
  function headerHTML() {
    function navLink(href, label, key) {
      var cls = (active === key) ? ' class="active"' : '';
      return '<a href="' + href + '"' + cls + '>' + label + '</a>';
    }

    return '<header id="siteHeader">' +
      '<div class="header-bar">' +
        '<div class="wrap header-inner">' +

          /* Logo */
          '<a href="index.html" class="logo" aria-label="DEON home">DEON<sup>&reg;</sup></a>' +

          /* Primary nav */
          '<nav class="nav-main" id="navMain">' +
            '<div class="nav-item has-drop">' +
              navLink('markets.html', 'Markets <span class="caret">&#9662;</span>', 'markets') +
              '<div class="drop">' +
                '<a href="market.html?m=transportation">Transportation</a>' +
                '<a href="market.html?m=electrical">Electrical</a>' +
                '<a href="market.html?m=building">Building Components</a>' +
                '<a href="market.html?m=renewable">Renewable Energy</a>' +
                '<a href="market.html?m=metal">Metal Manufacturing</a>' +
                '<a href="market.html?m=hvacr">HVAC &amp; Insulation</a>' +
                '<a href="market.html?m=appliance">Appliance Manufacturing</a>' +
                '<a href="market.html?m=packaging">Packaging &amp; Logistics</a>' +
                '<a href="market.html?m=electronics">Electronics</a>' +
                '<a href="market.html?m=automotive">Automotive</a>' +
                '<a href="market.html?m=print">Print &amp; Paper</a>' +
                '<span class="drop-divider"></span>' +
                '<a href="markets.html"><b>All markets &rarr;</b></a>' +
              '</div>' +
            '</div>' +

            '<div class="nav-item has-drop">' +
              navLink('applications.html', 'Applications <span class="caret">&#9662;</span>', 'applications') +
              '<div class="drop">' +
                '<a href="application.html?group=masking">Masking</a>' +
                '<a href="application.html?group=bundling">Bundling &amp; Harnessing</a>' +
                '<a href="application.html?group=insulation">Insulation</a>' +
                '<a href="application.html?group=bonding">Bonding</a>' +
                '<a href="application.html?group=mounting">Mounting</a>' +
                '<a href="application.html?group=protection">Surface Protection</a>' +
                '<a href="application.html?group=packaging">Packaging</a>' +
                '<a href="application.html?app=floor-and-safety-marking">Floor &amp; Safety Marking</a>' +
                '<a href="application.html?app=thermal-management">Thermal Management</a>' +
                '<a href="application.html?group=assembly">Assembly</a>' +
                '<span class="drop-divider"></span>' +
                '<a href="applications.html"><b>All applications &rarr;</b></a>' +
              '</div>' +
            '</div>' +

            '<div class="nav-item has-drop">' +
              navLink('products.html', 'Products <span class="caret">&#9662;</span>', 'products') +
              '<div class="drop">' +
                '<b class="drop-label">By type</b>' +
                '<a href="products.html?family=electrical-insulation">Electrical &amp; Insulation</a>' +
                '<a href="products.html?family=insulation">Insulation</a>' +
                '<a href="products.html?family=bonding-double-sided">Bonding &amp; Double-sided</a>' +
                '<a href="products.html?family=masking">Masking</a>' +
                '<a href="products.html?family=foil-sealing">Foil &amp; Sealing</a>' +
                '<a href="products.html?family=packaging">Packaging</a>' +
                '<a href="products.html?family=harness">Harness &amp; Bundling</a>' +
                '<a href="products.html?family=floor-marking">Floor Marking</a>' +
                '<span class="drop-divider"></span>' +
                '<a href="products.html"><b>All products &rarr;</b></a>' +
              '</div>' +
            '</div>' +

            '<div class="nav-item has-drop">' +
              navLink('manufacturing-technology.html', 'Infrastructure <span class="caret">&#9662;</span>', 'manufacturing') +
              '<div class="drop">' +
                '<a href="manufacturing-technology.html">Manufacturing &amp; Technology</a>' +
                '<a href="films.html">Soft PVC Films</a>' +
                '<a href="certifications.html">Quality &amp; Certifications</a>' +
              '</div>' +
            '</div>' +

            '<div class="nav-item has-drop">' +
              navLink('knowledge-center.html', 'Resources <span class="caret">&#9662;</span>', 'knowledge') +
              '<div class="drop">' +
                '<a href="knowledge-center.html">Overview</a>' +
                '<a href="tools.html">Tools &amp; Calculators</a>' +
                '<a href="certifications.html">Certifications</a>' +
              '</div>' +
            '</div>' +
          '</nav>' +

          /* Right-side icons */
          '<div class="nav-actions">' +
            '<button class="icon-btn" id="btnSearch" aria-label="Search" title="Search">&#128269;</button>' +
            '<button class="icon-btn" id="btnTheme" aria-label="Toggle dark mode" title="Toggle theme">&#9790;</button>' +
            '<a class="btn btn-primary btn-sm" href="contact.html">Contact</a>' +
            '<button class="icon-btn hamburger" id="btnMenu" aria-label="Menu" title="Menu">&#9776;</button>' +
          '</div>' +

        '</div>' +
      '</div>' +

      /* Mobile slide-out panel */
      '<aside id="mobilePanel" class="mobile-panel">' +
        '<div class="mobile-panel-head">' +
          '<span class="logo">DEON<sup>&reg;</sup></span>' +
          '<button class="icon-btn" id="btnCloseMenu" aria-label="Close menu">&times;</button>' +
        '</div>' +
        '<nav class="mobile-nav">' +
          '<a href="index.html">Home</a>' +
          '<a href="markets.html">Markets</a>' +
          '<a href="applications.html">Applications</a>' +
          '<a href="products.html">Products</a>' +
          '<a href="manufacturing-technology.html">Manufacturing &amp; Technology</a>' +
          '<a href="films.html">Soft PVC Films</a>' +
          '<a href="knowledge-center.html">Knowledge Center</a>' +
          '<a href="tools.html">Tools &amp; Calculators</a>' +
          '<a href="certifications.html">Quality &amp; Certifications</a>' +
          '<span class="mobile-divider"></span>' +
          '<a href="about.html">About us</a>' +
          '<a href="careers.html">Careers</a>' +
          '<a href="press.html">Press</a>' +
          '<a href="partners.html">Partners</a>' +
          '<a href="contact.html">Contact DEON</a>' +
        '</nav>' +
      '</aside>' +
      '<div class="mobile-overlay" id="mobileOverlay"></div>' +
    '</header>';
  }

  /* ---- Build footer HTML ---- */
  function footerHTML() {
    return '<footer class="footer">' +
      '<div class="wrap">' +
        '<div class="footer-grid">' +

          '<div class="footer-col">' +
            '<h4>Products</h4>' +
            '<a href="products.html">All products</a>' +
            '<a href="products.html?family=electrical-insulation">Electrical &amp; Insulation</a>' +
            '<a href="products.html?family=insulation">Insulation</a>' +
            '<a href="products.html?family=bonding-double-sided">Double-sided</a>' +
            '<a href="products.html?family=foil-sealing">Foil &amp; Sealing</a>' +
            '<a href="products.html?family=masking">Masking</a>' +
            '<a href="products.html?family=packaging">Packaging</a>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h4>Markets</h4>' +
            '<a href="market.html?m=electrical">Electrical</a>' +
            '<a href="market.html?m=automotive">Automotive</a>' +
            '<a href="market.html?m=hvacr">HVAC &amp; Insulation</a>' +
            '<a href="market.html?m=packaging">Packaging &amp; Logistics</a>' +
            '<a href="market.html?m=building">Building Components</a>' +
            '<a href="market.html?m=transportation">Transportation</a>' +
            '<a href="markets.html">All markets</a>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h4>Applications</h4>' +
            '<a href="application.html?group=masking">Masking</a>' +
            '<a href="application.html?group=insulation">Insulation</a>' +
            '<a href="application.html?group=bonding">Bonding</a>' +
            '<a href="application.html?group=packaging">Packaging</a>' +
            '<a href="applications.html">All applications</a>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h4>Company</h4>' +
            '<a href="about.html">About DEON</a>' +
            '<a href="manufacturing-technology.html">Manufacturing</a>' +
            '<a href="careers.html">Careers</a>' +
            '<a href="press.html">Press</a>' +
            '<a href="partners.html">Partners</a>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h4>Resources</h4>' +
            '<a href="knowledge-center.html">Knowledge Center</a>' +
            '<a href="tools.html">Tools &amp; Calculators</a>' +
            '<a href="certifications.html">Certifications</a>' +
            '<a href="contact.html?type=quote">Request a quote</a>' +
            '<a href="contact.html?type=sample">Request samples</a>' +
          '</div>' +

        '</div>' +

        '<div class="footer-legal">' +
          '<span>&copy; 2026 DEON Tapes Industries Pvt. Ltd. &mdash; It\'s Power-Strong</span>' +
          '<span class="footer-links">' +
            '<a href="legal-notice.html">Legal</a>' +
            '<a href="privacy-statement.html">Privacy</a>' +
            '<a href="terms-conditions.html">Terms</a>' +
            '<a href="accessibility-statement.html">Accessibility</a>' +
            '<a href="cookie-settings.html">Cookies</a>' +
            '<a href="site-map.html">Sitemap</a>' +
          '</span>' +
        '</div>' +
      '</div>' +
    '</footer>';
  }

  /* ---- Inject ---- */
  document.body.insertAdjacentHTML('afterbegin', headerHTML());

  var lastChild = document.body.lastElementChild;
  while (lastChild && lastChild.tagName === 'SCRIPT') {
    lastChild = lastChild.previousElementSibling;
  }
  if (lastChild) {
    lastChild.insertAdjacentHTML('afterend', footerHTML());
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML());
  }

  /* ---- Mobile menu toggle ---- */
  var btnMenu = document.getElementById('btnMenu');
  var btnClose = document.getElementById('btnCloseMenu');
  var panel = document.getElementById('mobilePanel');
  var overlay = document.getElementById('mobileOverlay');

  function openMobile() {
    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMobile() {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (btnMenu) btnMenu.addEventListener('click', openMobile);
  if (btnClose) btnClose.addEventListener('click', closeMobile);
  if (overlay) overlay.addEventListener('click', closeMobile);

  panel.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', closeMobile);
  });

  /* ---- Dark-mode toggle ---- */
  var btnTheme = document.getElementById('btnTheme');
  if (btnTheme) {
    var dark = localStorage.getItem('deon-dark') === '1';
    function applyTheme() {
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      btnTheme.textContent = dark ? '☀' : '☾';
    }
    applyTheme();
    btnTheme.addEventListener('click', function() {
      dark = !dark;
      localStorage.setItem('deon-dark', dark ? '1' : '0');
      applyTheme();
    });
  }

  /* ---- Search modal (placeholder) ---- */
  var btnSearch = document.getElementById('btnSearch');
  if (btnSearch) {
    btnSearch.addEventListener('click', function() {
      var q = prompt('Search DEON products, markets & applications:');
      if (q && q.trim()) {
        location.href = 'products.html?q=' + encodeURIComponent(q.trim());
      }
    });
  }

  /* ---- Sticky header on scroll ---- */
  var header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  /* ---- Desktop dropdown hover ---- */
  document.querySelectorAll('.nav-item.has-drop').forEach(function(item) {
    var timeout;
    item.addEventListener('mouseenter', function() {
      clearTimeout(timeout);
      item.classList.add('open');
    });
    item.addEventListener('mouseleave', function() {
      timeout = setTimeout(function() { item.classList.remove('open'); }, 200);
    });
  });

  console.log('✓ Chrome module loaded');
})();
