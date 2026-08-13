/* =========================================================================
   DEON site chrome — injects shared header (mega-menus), overlays, footer.
   Include BEFORE site.js. Set <body data-page="..."> to mark the active item.
   ========================================================================= */
(function(){
  var page = document.body.getAttribute('data-page') || '';

  /* ---- data ---- */
  var MARKETS = [
    ['automotive','Automotive'],['building','Building & Construction'],['electrical','Electrical'],
    ['electronics','Electronics'],['hvacr','HVAC & Insulation'],['metal','Metal Manufacturing'],
    ['packaging','Packaging & Logistics'],['renewable','Renewable Energy'],['appliance','Appliance Manufacturing'],
    ['transportation','Transportation'],['print','Print & Paper']
  ];
  function link(href,t,d){return '<a class="mega-link" href="'+href+'"><span class="t">'+t+'</span>'+(d?'<span class="d">'+d+'</span>':'')+'</a>';}
  function feat(href,t){return '<div class="mega-feature"><span class="muted" style="font-size:.82rem">'+t+'</span><a class="arrow" href="'+href+'">Explore <span class="a">→</span></a></div>';}

  var megaMarkets =
    '<div class="mega-grid mega-wide">'+
      MARKETS.slice(0,4).map(function(m){return link('market.html?m='+m[0],m[1]);}).join('')+
      MARKETS.slice(4,8).map(function(m){return link('market.html?m='+m[0],m[1]);}).join('')+
      MARKETS.slice(8).map(function(m){return link('market.html?m='+m[0],m[1]);}).join('')+
      feat('markets.html','Tape systems for the industries we serve')+
    '</div>';

  var megaApplications =
    '<div class="mega-grid">'+
      '<div class="mega-col"><h4>By function</h4>'+
        link('application.html?group=masking','Masking','Paint, powder-coat, plating')+
        link('application.html?group=bundling','Bundling & harnessing','Wire looms and cable')+
        link('application.html?group=insulation','Insulation','Dielectric and coil work')+
        link('application.html?group=protection','Surface protection','Temporary and transit')+
      '</div>'+
      '<div class="mega-col"><h4>&nbsp;</h4>'+
        link('application.html?group=bonding','Bonding','High-bond double-sided')+
        link('application.html?group=mounting','Mounting','Fastener replacement')+
        link('application.html?app=floor-and-safety-marking','Floor & safety marking','Lane and hazard')+
        link('application.html?app=thermal-management','Thermal management','Heat and HVAC')+
        link('application.html?group=packaging','Packaging','Carton sealing and bundling')+
        link('application.html?group=assembly','Assembly','Component holding and splicing')+
      '</div>'+
      feat('applications.html','Start from the job the tape has to do')+
    '</div>';

  var megaProducts =
    '<div class="mega-grid mega-wide">'+
      '<div class="mega-col"><h4>By type</h4>'+
        link('products.html?sided=double','Double-sided & foam')+
        link('products.html?backing=foil','Foil & sealing')+
        link('products.html?family=electrical-insulation','Insulation')+
        link('products.html?adhesive=acrylic','Acrylic')+
        link('products.html?adhesive=rubber','Rubber')+
      '</div>'+
      '<div class="mega-col"><h4>By backing</h4>'+
        link('products.html?backing=pvc,pet,polyimide,bopp','Film / BOPP')+
        link('products.html?backing=foam','Foam')+
        link('products.html?backing=cloth','Cloth')+
        link('products.html?backing=filament','Filament')+
        link('products.html?adhesive=hotmelt','Hot-melt')+
        link('products.html?adhesive=silicone','Silicone')+
      '</div>'+
      '<div class="mega-col"><h4>Applications</h4>'+
        link('application.html?group=masking','Masking')+
        link('application.html?group=bundling','Bundling & harnessing')+
        link('application.html?group=insulation','Insulation')+
        link('application.html?group=protection','Surface protection')+
        link('application.html?group=bonding','Bonding')+
        link('application.html?group=mounting','Mounting')+
        link('application.html?group=packaging','Packaging')+
      '</div>'+
      '<div class="mega-col"><h4>Industries</h4>'+
        MARKETS.slice(0,6).map(function(m){return link('market.html?m='+m[0],m[1]);}).join('')+
        link('markets.html','Explore all industries →')+
      '</div>'+
      feat('products.html','See the full product range')+
    '</div>';

  var megaManufacturing =
    '<div class="mega-grid">'+
      '<div class="mega-col"><h4>Capabilities</h4>'+
        link('manufacturing-technology.html#manufacturing-capabilities','Coating & converting')+
        link('manufacturing-technology.html#adhesive-technologies','Adhesive technologies')+
        link('manufacturing-technology.html#testing-and-validation','Testing & validation')+
        link('manufacturing-technology.html#custom-product-development','Custom development')+
      '</div>'+
      '<div class="mega-col"><h4>More</h4>'+
        link('films.html','Soft PVC films')+
        link('about.html','Plants & presence')+
        link('certifications.html','Quality & certifications')+
      '</div>'+
      feat('manufacturing-technology.html','Coated, converted and qualified under one roof')+
    '</div>';

  var megaKnowledge =
    '<div class="mega-grid">'+
      '<div class="mega-col"><h4>Resources</h4>'+
        link('knowledge-center.html','Knowledge Center','Guides, datasheets, FAQs')+
        link('tools.html','Tools & Calculators','Roll, weight, consumption')+
        link('certifications.html','Certifications','ISO, UL, BIS')+
      '</div>'+
      '<div class="mega-col"><h4>Company</h4>'+
        link('manufacturing-technology.html','Infrastructure','Factory, labs & capacity')+
        link('press.html','Press')+
        link('careers.html','Careers')+
        link('partners.html','Partner programs')+
      '</div>'+
      feat('knowledge-center.html','Visit the Knowledge Center')+
    '</div>';

  var NAV = [
    ['products','Products',megaProducts],
    ['manufacturing','Infrastructure',megaManufacturing],
    ['knowledge','Knowledge Center',megaKnowledge]
  ];

  var logoIMG =
    '<img class="mark" src="assets/brand/Deon Logo CC.svg" alt="DEON — It\'s Power-Strong" width="220" height="92">';

  var utilBar =
    '<div class="utilbar"><div class="utilbar-in">'+
      '<div class="util-links">'+
        '<a href="about.html">About us</a><a href="careers.html">Career</a><a href="press.html">Press</a>'+
        '<a href="partners.html">Partner with us</a><a href="certifications.html">Quality &amp; Certifications</a>'+
      '</div>'+
    '</div></div>';

  var navHTML =
    '<header class="site-header">'+utilBar+'<nav class="nav">'+
      '<a class="brand" href="index.html" aria-label="DEON home">'+logoIMG+'</a>'+
      '<div class="nav-main">'+
        '<div class="nav-item"><a class="nav-trigger nav-home" href="index.html" data-nav="home">Home</a></div>'+
        NAV.map(function(it){
          return '<div class="nav-item">'+
            '<button class="nav-trigger" aria-expanded="false" data-nav="'+it[0]+'">'+it[1]+'<span class="chev"></span></button>'+
            '<div class="mega">'+it[2]+'</div></div>';
        }).join('')+
        '<div class="nav-item"><a class="nav-trigger" href="about.html" data-nav="about">About Us</a></div>'+
        '<div class="nav-item"><a class="nav-trigger" href="blog.html" data-nav="blog">Blog</a></div>'+
      '</div>'+
      '<div class="nav-right">'+
        '<button class="icon-btn" id="btnSearch" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg></button>'+
        '<button class="icon-btn" id="btnTheme" aria-label="Switch to dark mode" title="Toggle light / dark">'+
          '<svg class="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>'+
          '<svg class="ic-moon" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z"/></svg>'+
          '<span class="theme-lbl">Light mode</span>'+
        '</button>'+
        '<a class="btn btn-primary nav-cta" href="contact.html">Contact</a>'+
        '<button class="icon-btn" id="btnMenu" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>'+
      '</div>'+
    '</nav></header>';

  /* ---- overlays ---- */
  var LANGS = [
    ['EN','🇬🇧','English'],['DE','🇩🇪','Deutsch'],['FR','🇫🇷','Français'],['ES','🇪🇸','Español'],
    ['PT','🇵🇹','Português'],['IT','🇮🇹','Italiano'],['NL','🇳🇱','Nederlands'],['AR','🇸🇦','العربية'],
    ['TR','🇹🇷','Türkçe'],['PL','🇵🇱','Polski'],['RU','🇷🇺','Русский'],['HI','🇮🇳','हिन्दी'],
    ['JA','🇯🇵','日本語'],['ZH','🇨🇳','简体中文'],['KO','🇰🇷','한국어'],['VI','🇻🇳','Tiếng Việt']
  ];
  var overlays =
    '<div class="scrim" id="scrim"></div>'+
    // search
    '<div class="search-modal" id="searchModal"><div class="search-box">'+
      '<input id="searchInput" type="search" placeholder="Search products, markets, calculators…" aria-label="Search">'+
      '<div class="search-hints">Popular: '+
        '<a href="products.html">All products</a><a href="tools.html">Calculators</a>'+
        '<a href="products.html?adhesive=acrylic">Acrylic tapes</a><a href="certifications.html">Certifications</a>'+
        '<a href="contact.html?type=sample">Request samples</a></div>'+
    '</div></div>'+
    // mobile
    '<aside class="panel" id="mobilePanel" aria-label="Menu"><div class="panel-head"><h3>Menu</h3>'+
      '<button class="icon-btn" data-close aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>'+
      '<div style="overflow:auto">'+
        NAV.map(function(it){return '<a class="mega-link" href="'+({products:'products.html',manufacturing:'manufacturing-technology.html',knowledge:'knowledge-center.html'})[it[0]]+'"><span class="t">'+it[1]+'</span></a>';}).join('')+
        '<a class="mega-link" href="blog.html"><span class="t">Blog</span></a>'+
        '<a class="mega-link" href="about.html"><span class="t">About us</span></a>'+
        '<a class="mega-link" href="contact.html"><span class="t">Contact</span></a>'+
        '<a class="btn btn-primary" style="margin-top:16px;width:100%" href="contact.html?type=sample">Request samples</a>'+
      '</div>'+
    '</aside>';

  /* ---- footer ---- */
  function fcol(title,items){return '<div class="fcol"><h5>'+title+'</h5>'+items.map(function(i){return '<a href="'+i[0]+'">'+i[1]+'</a>';}).join('')+'</div>';}
  var footerHTML =
    '<footer class="site-footer"><div class="footer-top">'+
      '<div class="footer-brand"><span class="foot-logo"><img src="assets/brand/logo.png" alt="DEON — It\'s Power-Strong" style="max-width:300px;height:auto"></span>'+
        '<p>Indian manufacturer of pressure-sensitive adhesive tapes and soft PVC films — formulated, coated and converted in-house. Plants in Silvassa &amp; Vadodara.</p>'+
        '<a class="btn btn-light" style="margin-top:18px" href="contact.html">Contact DEON</a>'+
      '</div>'+
      fcol('Products',[['products.html','All products'],['products.html?sided=double','Double-sided & foam'],['products.html?backing=foil','Foil & sealing'],['application.html?group=masking','Masking'],['application.html?group=bundling','Harness & bundling'],['products.html?family=electrical-insulation','Insulation']])+
      fcol('Industries',[['markets.html','All industries'],['market.html?m=automotive','Automotive'],['market.html?m=electrical','Electrical'],['market.html?m=building','Building & Construction'],['market.html?m=packaging','Packaging'],['market.html?m=hvacr','HVAC & Insulation']])+
      fcol('Company',[['about.html','About us'],['manufacturing-technology.html','Infrastructure & Manufacturing'],['certifications.html','Quality & Certifications'],['careers.html','Careers'],['press.html','Press'],['partners.html','Partners']])+
      fcol('Resources',[['knowledge-center.html','Knowledge Center'],['blog.html','Blog'],['tools.html','Tools & Calculators'],['contact.html?type=quote','Request a quote'],['contact.html?type=sample','Request samples']])+
    '</div>'+
    '<div class="footer-bottom"><div class="wrap">'+
      '<span>© '+(new Date().getFullYear())+' DEON Tapes Industries Pvt. Ltd.</span>'+
      '<span class="muted">It\'s Power-Strong</span>'+
      '<span class="footer-legal">'+
        '<a href="legal-notice.html">Legal notice</a><a href="privacy-statement.html">Privacy</a>'+
        '<a href="terms-conditions.html">Terms</a><a href="accessibility-statement.html">Accessibility</a>'+
        '<a href="site-map.html">Sitemap</a></span>'+
    '</div></div></footer>';

  /* ---- inject ---- */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', overlays);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // active nav highlight
  var act = document.querySelector('.nav-trigger[data-nav="'+page+'"]');
  if(act){act.style.color='var(--blue)';}

  // interior photographic page-head (by page)
  var HEROMAP = {products:'factory-cutting',manufacturing:'factory-coating',about:'factory-shed',
    contact:'factory-team',knowledge:'factory-adhesive',markets:'factory-team',applications:'factory-coating'};
  var ph = document.querySelector('.page-head');
  var hk = HEROMAP[page];
  if(ph && hk && !ph.classList.contains('photo')){
    ph.classList.add('photo');
    ph.insertAdjacentHTML('afterbegin',
      '<div class="ph-bg"><img src="assets/brand/'+hk+'.jpg" alt=""></div><div class="ph-scrim"></div>');
  }
})();
