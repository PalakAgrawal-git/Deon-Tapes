// DEON Tapes — Products module (filtering & catalog)
(function() {
  'use strict';

  // Sample product data structure
  const products = [
    // This will be populated from the backend
    // Format: { code, name, category, family, backing, application, image, description }
  ];

  // Facets/filters
  const facets = {
    family: [],
    backing: [],
    adhesive: [],
    application: [],
    industry: []
  };

  // Get unique values from products
  function extractFacets() {
    const result = {
      family: new Set(),
      backing: new Set(),
      adhesive: new Set(),
      application: new Set(),
      industry: new Set()
    };

    products.forEach(product => {
      if (product.family) result.family.add(product.family);
      if (product.backing) result.backing.add(product.backing);
      if (product.adhesive) result.adhesive.add(product.adhesive);
      if (product.application) result.application.add(product.application);
      if (product.industry) result.industry.add(product.industry);
    });

    // Convert to arrays
    Object.keys(result).forEach(key => {
      facets[key] = Array.from(result[key]).sort();
    });
  }

  // Render facet filters
  function renderFacets() {
    const facetsEl = document.getElementById('facets');
    if (!facetsEl) return;

    let html = '<div class="facets-list">';

    Object.keys(facets).forEach(facetKey => {
      const values = facets[facetKey];
      if (values.length === 0) return;

      html += `<div class="facet-group">
        <h3>${facetKey.charAt(0).toUpperCase() + facetKey.slice(1)}</h3>`;

      values.forEach(value => {
        html += `<label class="facet-item">
          <input type="checkbox" name="${facetKey}" value="${value}">
          <span>${value}</span>
        </label>`;
      });

      html += '</div>';
    });

    html += '</div>';
    facetsEl.innerHTML = html;

    // Add event listeners
    document.querySelectorAll('.facet-item input').forEach(input => {
      input.addEventListener('change', filterProducts);
    });
  }

  // Filter products
  function filterProducts() {
    const activeFilters = {};

    // Collect all active filters
    document.querySelectorAll('.facet-item input:checked').forEach(input => {
      const facet = input.name;
      if (!activeFilters[facet]) {
        activeFilters[facet] = [];
      }
      activeFilters[facet].push(input.value);
    });

    // Filter products
    let filtered = products;

    Object.keys(activeFilters).forEach(facetKey => {
      filtered = filtered.filter(product => {
        return activeFilters[facetKey].includes(product[facetKey]);
      });
    });

    // Display filtered products
    renderProducts(filtered);
    updateChips(activeFilters);
  }

  // Render product grid
  function renderProducts(productList = products) {
    const pgrid = document.getElementById('pgrid');
    if (!pgrid) return;

    const pcount = document.getElementById('pcount');
    const ptotal = document.getElementById('ptotal');

    if (pcount) pcount.textContent = productList.length;
    if (ptotal) ptotal.textContent = products.length;

    if (productList.length === 0) {
      pgrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;">No products match your filters.</div>';
      return;
    }

    let html = '';
    productList.forEach(product => {
      html += `
        <a href="product.html?code=${product.code}" class="card has-img">
          <div class="cimg">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
          </div>
          <div class="cbody">
            <span class="tag">${product.family}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="arrow">View details <span class="a">→</span></span>
          </div>
        </a>`;
    });

    pgrid.innerHTML = html;
  }

  // Update active filter chips
  function updateChips(activeFilters) {
    const chipsEl = document.getElementById('activeChips');
    if (!chipsEl) return;

    let html = '';
    Object.keys(activeFilters).forEach(facet => {
      activeFilters[facet].forEach(value => {
        html += `<span class="chip on">${value}</span>`;
      });
    });

    chipsEl.innerHTML = html;
  }

  // Search functionality
  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      const filtered = products.filter(p =>
        p.code.toLowerCase().includes(query) ||
        p.name.toLowerCase().includes(query)
      );
      renderProducts(filtered);
    });
  }

  // Initialize
  function init() {
    extractFacets();
    renderFacets();
    renderProducts();
    console.log('✓ Products module loaded');
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
