// DEON Tapes — Products catalog (populated from DEON_PRODUCTS in data.js)
(function() {
  'use strict';

  if (typeof DEON_PRODUCTS === 'undefined') return;

  var allProducts = Object.keys(DEON_PRODUCTS).map(function(code) {
    var p = DEON_PRODUCTS[code];
    return {
      code: code,
      name: p.name,
      family: p.family,
      backing: p.backing,
      adhesive: p.adhesive,
      desc: p.desc
    };
  });

  var activeFilters = {};

  function uniqueValues(key) {
    var s = {};
    allProducts.forEach(function(p) { if (p[key]) s[p[key]] = 1; });
    return Object.keys(s).sort();
  }

  function renderFacets() {
    var el = document.getElementById('facets');
    if (!el) return;
    var groups = [
      { key: 'family',   label: 'Product family' },
      { key: 'backing',  label: 'Backing' },
      { key: 'adhesive', label: 'Adhesive' }
    ];
    var html = '<div class="facets-list">';
    groups.forEach(function(g) {
      var vals = uniqueValues(g.key);
      if (!vals.length) return;
      html += '<div class="facet-group"><h3>' + g.label + '</h3>';
      vals.forEach(function(v) {
        html += '<label class="facet-item"><input type="checkbox" name="' + g.key + '" value="' + v + '"><span>' + v + '</span></label>';
      });
      html += '</div>';
    });
    html += '</div>';
    el.innerHTML = html;
    el.addEventListener('change', applyFilters);
  }

  function applyFilters() {
    activeFilters = {};
    document.querySelectorAll('.facet-item input:checked').forEach(function(inp) {
      if (!activeFilters[inp.name]) activeFilters[inp.name] = [];
      activeFilters[inp.name].push(inp.value);
    });

    var q = new URLSearchParams(location.search).get('q') || '';
    renderProducts(filterList(q));
    renderChips();
  }

  function filterList(query) {
    var list = allProducts;
    Object.keys(activeFilters).forEach(function(key) {
      list = list.filter(function(p) {
        return activeFilters[key].indexOf(p[key]) !== -1;
      });
    });
    if (query) {
      var lq = query.toLowerCase();
      list = list.filter(function(p) {
        return p.code.toLowerCase().indexOf(lq) !== -1 ||
               p.name.toLowerCase().indexOf(lq) !== -1 ||
               p.family.toLowerCase().indexOf(lq) !== -1 ||
               p.backing.toLowerCase().indexOf(lq) !== -1 ||
               p.adhesive.toLowerCase().indexOf(lq) !== -1;
      });
    }
    return list;
  }

  function renderProducts(list) {
    var grid = document.getElementById('pgrid');
    if (!grid) return;

    var pcount = document.getElementById('pcount');
    var ptotal = document.getElementById('ptotal');
    if (pcount) pcount.textContent = list.length;
    if (ptotal) ptotal.textContent = allProducts.length;

    if (!list.length) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px"><p>No products match your filters.</p><button class="btn btn-ghost" onclick="location.href=\'products.html\'">Clear filters</button></div>';
      return;
    }

    grid.innerHTML = list.map(function(p) {
      return '<a class="card" href="product.html?code=' + p.code + '">' +
        '<span class="tag">' + p.family + '</span>' +
        '<h3 style="font-size:1.05rem">DEON ' + p.code + '</h3>' +
        '<p style="font-size:.88rem;font-weight:500;margin:2px 0 6px">' + p.name + '</p>' +
        '<p style="font-size:.82rem;color:var(--muted,#666)">' + p.backing + ' / ' + p.adhesive + '</p>' +
        '<span class="arrow" style="margin-top:8px">View details <span class="a">&rarr;</span></span>' +
      '</a>';
    }).join('');
  }

  function renderChips() {
    var el = document.getElementById('activeChips');
    if (!el) return;
    var html = '';
    Object.keys(activeFilters).forEach(function(f) {
      activeFilters[f].forEach(function(v) {
        html += '<span class="chip on">' + v + '</span>';
      });
    });
    el.innerHTML = html;
  }

  function init() {
    var params = new URLSearchParams(location.search);
    var familyParam = params.get('family');
    var q = params.get('q') || '';

    renderFacets();

    if (familyParam) {
      var slug = familyParam.toLowerCase().replace(/-/g, ' ');
      document.querySelectorAll('.facet-item input[name="family"]').forEach(function(inp) {
        if (inp.value.toLowerCase().replace(/&/g, '&').indexOf(slug) !== -1 ||
            slug.indexOf(inp.value.toLowerCase().replace(/ & /g, ' ').replace(/-/g, ' ')) !== -1) {
          inp.checked = true;
        }
      });
      applyFilters();
    } else {
      renderProducts(filterList(q));
    }

    var searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        renderProducts(filterList(this.value));
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
