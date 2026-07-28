/* =========================================================================
   DEON site — global interactions + calculators
   ========================================================================= */
(function(){
  'use strict';
  var $  = function(s,c){return (c||document).querySelector(s);};
  var $$ = function(s,c){return [].slice.call((c||document).querySelectorAll(s));};

  /* ---------- scrim ---------- */
  var scrim = $('#scrim');
  function closeAll(){
    $$('.panel.open,.search-modal.open,.mega.open').forEach(function(e){e.classList.remove('open');});
    $$('.nav-trigger[aria-expanded="true"]').forEach(function(b){b.setAttribute('aria-expanded','false');});
    if(scrim) scrim.classList.remove('show');
    document.body.style.overflow='';
  }
  if(scrim) scrim.addEventListener('click',closeAll);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll();});

  function openPanel(id){
    closeAll();
    var p=$(id); if(!p)return;
    p.classList.add('open');
    if(scrim) scrim.classList.add('show');
  }

  /* ---------- header: mega menus — exactly one open at a time ---------- */
  function closeAllMegas(){
    $$('.mega.open').forEach(function(m){m.classList.remove('open');});
    $$('.nav-trigger[aria-expanded="true"]').forEach(function(b){b.setAttribute('aria-expanded','false');});
  }
  // open rightward from the trigger; shift left only enough to stay on-screen
  function positionMega(mega){
    mega.style.left='0'; mega.style.right='auto';
    var r=mega.getBoundingClientRect();
    var vw=document.documentElement.clientWidth, margin=16;
    var over=r.right-(vw-margin);
    if(over>0) mega.style.left=(-over)+'px';
  }
  function positionAllMegas(){$$('.mega').forEach(positionMega);}
  positionAllMegas();
  window.addEventListener('resize',positionAllMegas,{passive:true});

  $$('.nav-item').forEach(function(item){
    var btn=item.querySelector('.nav-trigger');
    var mega=item.querySelector('.mega');
    // hovering ANY item (incl. Home, which has no dropdown) clears open menus
    item.addEventListener('mouseenter',function(){ closeAllMegas(); if(mega) positionMega(mega); });
    if(!btn||!mega) return;
    // click toggles (for touch / keyboard), always closing the others first
    btn.addEventListener('click',function(e){
      e.stopPropagation();
      var wasOpen=mega.classList.contains('open');
      closeAllMegas();
      if(!wasOpen){positionMega(mega);mega.classList.add('open');btn.setAttribute('aria-expanded','true');}
    });
  });
  document.addEventListener('click',function(e){
    if(!e.target.closest('.nav-item')) $$('.mega.open').forEach(function(m){
      m.classList.remove('open');
      var b=m.parentElement.querySelector('.nav-trigger'); if(b)b.setAttribute('aria-expanded','false');
    });
  });

  /* ---------- triggers ---------- */
  var t;
  if(t=$('#btnSearch'))  t.addEventListener('click',function(){openPanel('#searchModal');setTimeout(function(){var i=$('#searchInput');if(i)i.focus();},60);});
  if(t=$('#btnLang'))    t.addEventListener('click',function(){openPanel('#langPanel');});
  if(t=$('#btnA11y'))    t.addEventListener('click',function(){openPanel('#a11yPanel');});
  if(t=$('#btnMenu'))    t.addEventListener('click',function(){openPanel('#mobilePanel');document.body.style.overflow='hidden';});
  $$('[data-close]').forEach(function(b){b.addEventListener('click',closeAll);});
  var sm=$('#searchModal'); if(sm) sm.addEventListener('click',function(e){if(e.target===sm)closeAll();});

  /* ---------- accessibility settings (persisted) ---------- */
  var A11Y=['contrast','fontscale','motion','theme'];
  function loadA11y(){
    A11Y.forEach(function(k){
      var v=localStorage.getItem('deon-'+k);
      if(v){document.documentElement.setAttribute('data-'+k,v);}
    });
    syncA11yButtons();
  }
  function syncA11yButtons(){
    $$('[data-a11y]').forEach(function(b){
      var k=b.getAttribute('data-a11y'), v=b.getAttribute('data-val');
      var cur=document.documentElement.getAttribute('data-'+k)||'default';
      b.classList.toggle('on',cur===v);
    });
  }
  $$('[data-a11y]').forEach(function(b){
    b.addEventListener('click',function(){
      var k=b.getAttribute('data-a11y'), v=b.getAttribute('data-val');
      if(v==='default'){document.documentElement.removeAttribute('data-'+k);localStorage.removeItem('deon-'+k);}
      else{document.documentElement.setAttribute('data-'+k,v);localStorage.setItem('deon-'+k,v);}
      syncA11yButtons();
    });
  });
  loadA11y();

  /* ---------- header theme toggle (light <-> dark) ---------- */
  // The site only darkens on an explicit data-theme="dark"; it does not
  // auto-follow the OS. So the visible theme is simply whether that is set.
  function effectiveTheme(){
    return document.documentElement.getAttribute('data-theme')==='dark' ? 'dark' : 'light';
  }
  function syncThemeToggle(){
    var btn=$('#btnTheme'); if(!btn) return;
    var dark=effectiveTheme()==='dark';
    btn.classList.toggle('is-dark',dark);
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    var lbl=btn.querySelector('.theme-lbl');
    if(lbl) lbl.textContent = dark ? 'Dark mode' : 'Light mode';
  }
  var themeBtn=$('#btnTheme');
  if(themeBtn){
    themeBtn.addEventListener('click',function(){
      var next = effectiveTheme()==='dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme',next);
      localStorage.setItem('deon-theme',next);
      syncThemeToggle();
      syncA11yButtons();      /* keep the accessibility panel in step */
    });
    syncThemeToggle();
  }

  /* keep the toggle icon in step when theme changes from the a11y panel */
  var _origSync=syncA11yButtons;
  syncA11yButtons=function(){ _origSync(); syncThemeToggle(); };

  /* ---------- language (visual only) ---------- */
  $$('#langPanel .lang-grid button').forEach(function(b){
    b.addEventListener('click',function(){
      $$('#langPanel .lang-grid button').forEach(function(x){x.classList.remove('active');});
      b.classList.add('active');
      var code=b.getAttribute('data-code'); var lbl=$('#langLabel');
      if(lbl&&code)lbl.textContent=code.toUpperCase();
      closeAll();
    });
  });


  /* ---------- repeating scroll reveals ---------- */
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;
  var revealIO=null;
  if(!reduce && 'IntersectionObserver' in window){
    revealIO=new IntersectionObserver(function(en){
      en.forEach(function(x){x.target.classList.toggle('in',x.isIntersecting);});
    },{threshold:.14, rootMargin:'0px 0px -6% 0px'});
  }
  // (re)observe reveals — callable after dynamic content renders
  window.deonReveal=function(){
    $$('.reveal,.reveal-stagger').forEach(function(e){
      if(e.__obs)return; e.__obs=true;
      if(revealIO)revealIO.observe(e); else e.classList.add('in');
    });
  };
  window.deonReveal();

  /* ---------- count-up (repeats on re-entry) ---------- */
  if(!reduce && 'IntersectionObserver' in window){
    var nio=new IntersectionObserver(function(en){
      en.forEach(function(x){if(x.isIntersecting)countUp(x.target);});
    },{threshold:.6});
    $$('[data-count]').forEach(function(e){nio.observe(e);});
  }
  function countUp(el){
    var target=parseFloat(el.getAttribute('data-count'));
    var suffix=el.getAttribute('data-suffix')||'';
    var dp=parseInt(el.getAttribute('data-dp')||'0',10);
    var start=null,dur=1300;
    function step(ts){
      if(!start)start=ts;
      var p=Math.min((ts-start)/dur,1), val=(1-Math.pow(1-p,3))*target;
      el.textContent=val.toLocaleString(undefined,{minimumFractionDigits:dp,maximumFractionDigits:dp})+suffix;
      if(p<1)requestAnimationFrame(step);
      else el.textContent=target.toLocaleString(undefined,{minimumFractionDigits:dp,maximumFractionDigits:dp})+suffix;
    }
    requestAnimationFrame(step);
  }

  /* =========================================================================
     CALCULATORS
     ========================================================================= */
  function n(id){var el=$('#'+id);return el?parseFloat(el.value):NaN;}
  function fmt(x,dp){return (isFinite(x)?x:0).toLocaleString(undefined,{minimumFractionDigits:dp||0,maximumFractionDigits:dp||0});}
  function bind(ids,fn){ids.forEach(function(id){var el=$('#'+id);if(el){el.addEventListener('input',fn);}});fn();}

  // 1) Roll length: L(m) = π(OD²−core²)/(4·t_µm)
  if($('#c1_od')) bind(['c1_od','c1_core','c1_t'],function(){
    var od=n('c1_od'),core=n('c1_core'),t=n('c1_t');
    var L=Math.PI*(od*od-core*core)/(4*t);
    $('#c1_out').innerHTML=fmt(L,1)+'<small>m</small>';
  });

  // 2) Roll diameter: OD = √(core² + 4·t_µm·L / π); wraps = (OD−core)·500/t_µm
  if($('#c2_len')) bind(['c2_len','c2_core','c2_t'],function(){
    var L=n('c2_len'),core=n('c2_core'),t=n('c2_t');
    var od=Math.sqrt(core*core+4*t*L/Math.PI);
    var wraps=(od-core)*500/t;
    $('#c2_out').innerHTML=fmt(od,1)+'<small>mm</small>';
    $('#c2_sub').textContent='≈ '+fmt(wraps,0)+' wraps';
  });

  // 3) Roll weight
  if($('#c3_len')) bind(['c3_len','c3_w','c3_t','c3_d','c3_core'],function(){
    var L=n('c3_len'),w=n('c3_w'),t=n('c3_t'),d=n('c3_d'),cw=n('c3_core')||0;
    var kg=L*(w/1000)*(t/1e6)*(d*1000)+cw/1000;
    $('#c3_out').innerHTML=fmt(kg,3)+'<small>kg</small>';
  });

  // 4) Grammage: GSM = t_µm × density
  if($('#c4_t')) bind(['c4_t','c4_d'],function(){
    var t=n('c4_t'),d=n('c4_d');
    $('#c4_out').innerHTML=fmt(t*d,0)+'<small>g/m²</small>';
  });

  // 5) Jumbo → finished
  if($('#c5_jw')) bind(['c5_jw','c5_fw','c5_trim','c5_jl','c5_fl'],function(){
    var jw=n('c5_jw'),fw=n('c5_fw'),trim=n('c5_trim')||0,jl=n('c5_jl'),fl=n('c5_fl');
    var lanes=Math.max(0,Math.floor((jw-trim)/fw));
    var cuts=Math.max(0,Math.floor(jl/fl));
    var rolls=lanes*cuts, totalM=rolls*fl;
    var used=lanes*fw, unused=jw-used;
    var util=jw>0?used/jw*100:0, waste=jw>0?(jw-used)/jw*100:0;
    $('#c5_out').innerHTML=fmt(lanes,0)+'<small> lanes</small>';
    $('#c5_sub').textContent=fmt(rolls,0)+' finished rolls ('+fmt(lanes,0)+' × '+fmt(cuts,0)+' × '+fmt(fl,0)+' m) · '
      +fmt(totalM,0)+' m total · '+fmt(util,0)+'% utilization · '+fmt(waste,0)+'% trim waste · '+fmt(unused,0)+' mm unused';
  });

  // 6) Tape consumption
  if($('#c6_bpd')) bind(['c6_bpd','c6_tpb','c6_days','c6_roll'],function(){
    var bpd=n('c6_bpd'),tpb=n('c6_tpb'),days=n('c6_days'),roll=n('c6_roll');
    var monthly=bpd*tpb*days, annual=monthly*12;
    var reorder=Math.ceil(monthly/roll*1.2);
    $('#c6_out').innerHTML=fmt(monthly,0)+'<small>m</small>';
    $('#c6_sub').textContent=fmt(annual,0)+' m / year · reorder ≈ '+fmt(reorder,0)+' rolls / month';
  });

  // 7) Carton sealing
  if($('#c7_len')) bind(['c7_len','c7_tab','c7_pat','c7_qty'],function(){
    var len=n('c7_len'),tab=n('c7_tab'),strips=n('c7_pat'),qty=n('c7_qty');
    var perCarton=(len+2*tab)*strips/1000;
    var total=perCarton*qty;
    $('#c7_out').innerHTML=fmt(total,0)+'<small>m</small>';
    $('#c7_sub').textContent=fmt(perCarton,2)+' m per carton';
  });

})();

/* =========================================================================
   DEON — repeating animation layer + live search
   Every effect re-fires: scroll animations toggle on enter AND leave,
   hover/click effects repeat, marquees and sheens loop forever.
   ========================================================================= */
(function(){
  'use strict';
  var $  = function(s,c){return (c||document).querySelector(s);};
  var $$ = function(s,c){return [].slice.call((c||document).querySelectorAll(s));};
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---------------- LIVE SEARCH (works on every page) ---------------- */
  var INDEX = [
    ['Page','Home','index.html','Manufacturer of tapes & soft PVC films'],
    ['Page','Products','products.html','Filter by family, adhesive, backing'],
    ['Page','Tools & Calculators','tools.html','Roll length, weight, grammage, consumption'],
    ['Page','Markets','markets.html','Industries we serve'],
    ['Page','Applications','applications.html','Start from the job the tape does'],
    ['Page','Manufacturing & technology','manufacturing-technology.html','Coating, converting, testing'],
    ['Page','Soft PVC films','films.html','Calendered in-house'],
    ['Page','Quality & certifications','certifications.html','ISO 9001, 45001, 14001, UL, BIS'],
    ['Page','Knowledge Center','knowledge-center.html','Guides, datasheets, FAQs'],
    ['Page','About us','about.html','Manufacturing since 2016'],
    ['Page','Careers','careers.html','Join DEON'],
    ['Page','Press','press.html','News & announcements'],
    ['Page','Partners','partners.html','Converter, OEM, dealer programs'],
    ['Page','Contact','contact.html','Samples, quotes and enquiries']
  ];
  var PRODUCT_INDEX = [
    ['31700','PVC Electrical Insulation Tape'],['50W13','Wire Harness Tape'],
    ['DT1111','Class B Polyester Insulation Tape'],['DT1113','Class B Polyester Fleece Insulation Tape'],
    ['DT1123','Class F Polyester Fleece Insulation Tape'],['DT2131','Class H Polyimide Insulation Tape'],
    ['DT3121L','Class F Glass Cloth Insulation Tape'],['DT3124L','Polyglass Waterproofing Tape'],
    ['41860','Floor Marking Tape'],['DT3131','High-Temperature Glass Cloth Tape'],
    ['DT4021','Aluminium Foil Tape - Acrylic'],['DT4041','Aluminium Foil Tape - Hot Melt'],
    ['M5001','Masking Tape'],['PW6001','PVC Pipe Wrapping Tape'],
    ['DT1142','Double-Sided Polyester Bonding Tape'],['DT1221H','Polyester Holding & Splicing Tape'],
    ['DT1231','High-Temperature Polyester Masking Tape'],['DT5142','Double-Sided PE Foam Bonding Tape'],
    ['DT6041','Adhesive Transfer Tape'],['DT6122','Double-Sided Tissue Bonding Tape'],
    ['DT3741L','HDPE Fabric Tape'],['DT7143','Monofilament Reinforced Packaging Tape'],
    ['DT7243','Cross Filament Reinforced Packaging Tape'],['DT9151','BOPP Packaging Tape']
  ];
  PRODUCT_INDEX.forEach(function(p){
    INDEX.push(['Product','Deon '+p[0]+' - '+p[1],'products.html','Request sample or datasheet']);
  });

  var input = $('#searchInput');
  if(input){
    var box = input.closest('.search-box');
    var results = document.createElement('div');
    results.className='search-results hide';
    box.appendChild(results);
    var hints = $('.search-hints', box);
    function runSearch(){
      var q = input.value.trim().toLowerCase();
      if(!q){ results.classList.add('hide'); if(hints) hints.classList.remove('hide'); return; }
      if(hints) hints.classList.add('hide');
      results.classList.remove('hide');
      var hits = INDEX.filter(function(r){
        return (r[1]+' '+r[3]).toLowerCase().indexOf(q) > -1;
      }).slice(0,12);
      results.innerHTML = hits.length
        ? hits.map(function(r){
            return '<a class="sr-item" href="'+r[2]+'"><span class="k">'+r[0]+'</span>'+
              '<span><span class="t">'+r[1]+'</span><br><span class="d">'+r[3]+'</span></span></a>';
          }).join('')
        : '<div class="sr-empty">No matches for &ldquo;'+input.value.replace(/[<>]/g,'')+'&rdquo;. Try a product code, market or &ldquo;calculator&rdquo;.</div>';
    }
    input.addEventListener('input', runSearch);
    input.addEventListener('keydown', function(e){
      if(e.key==='Enter'){ var first=$('.sr-item',results); if(first) location.href=first.getAttribute('href'); }
    });
  }

  if(reduce) return;                 /* everything below is motion */
  document.body.classList.add('js-anim');

  /* ---------------- split headings into words (repeatable reveal) ------- */
  function splitHeadings(){
    $$('.sec-head h2, .hero-photo h1, .page-head h1').forEach(function(h){
      // re-split if the text was replaced after the first pass (dynamic pages)
      if(h.dataset.split && h.querySelector('.split-w')) return;
      h.dataset.split='1';
      var words = h.textContent.trim().split(/\s+/);
      h.innerHTML = words.map(function(w){return '<span class="split-w"><i>'+w+'</i></span>';}).join(' ');
    });
  }
  splitHeadings();

  /* ---------------- scroll progress bar + nav shrink ------------------- */
  var bar = document.createElement('div'); bar.className='scrollbar';
  document.body.appendChild(bar);
  var header = $('.site-header');

  /* ---------------- back to top ---------------- */
  var btt = document.createElement('button');
  btt.className='backtop'; btt.type='button'; btt.setAttribute('aria-label','Back to top'); btt.textContent='↑';
  document.body.appendChild(btt);
  btt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});

  /* ---------------- continuous parallax layers ------------------------- */
  var layers = $$('.sec-head, .hl, .stdgrid, .certs, .hero-badges, .imgband').map(function(el){
    return {el:el, s: el.classList.contains('hero-badges') ? 20 : 12};
  });

  var ticking=false;
  function onScroll(){
    if(ticking) return; ticking=true;
    requestAnimationFrame(function(){
      var y = window.scrollY||0;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX('+(h>0?Math.min(y/h,1):0)+')';
      if(header) header.classList.toggle('scrolled', y>40);
      btt.classList.toggle('show', y>500);
      var vh = window.innerHeight||1;
      layers.forEach(function(L){
        var r = L.el.getBoundingClientRect();
        if(r.bottom<-200||r.top>vh+200) return;
        var d = ((r.top+r.height/2)-vh/2)/vh;
        L.el.style.translate = '0 '+(-d*L.s).toFixed(1)+'px';
      });
      ticking=false;
    });
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll,{passive:true});
  onScroll();

  /* ---------------- blur-up images (repeat per load) ------------------- */
  $$('.cimg img, .pimg img').forEach(function(img){
    if(img.complete && img.naturalWidth) img.classList.add('loaded');
    else img.addEventListener('load',function(){img.classList.add('loaded');});
  });

  /* ---------------- 3D tilt on cards (repeats every hover) ------------- */
  function bindTilt(root){
    $$('.card, .pcard, .calc', root||document).forEach(function(c){
      if(c.__tilt) return; c.__tilt=1;
      c.addEventListener('mousemove',function(e){
        var r=c.getBoundingClientRect();
        var px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
        c.style.transform='translateY(-5px) rotateX('+(-py*5).toFixed(2)+'deg) rotateY('+(px*5).toFixed(2)+'deg)';
      });
      c.addEventListener('mouseleave',function(){c.style.transform='';});
    });
  }
  bindTilt();

  /* ---------------- magnetic buttons + ripple (repeat) ----------------- */
  function bindButtons(root){
    $$('.btn', root||document).forEach(function(b){
      if(b.__fx) return; b.__fx=1;
      b.addEventListener('click',function(e){
        var r=b.getBoundingClientRect(), d=Math.max(r.width,r.height), s=document.createElement('span');
        s.className='ripple'; s.style.width=s.style.height=d+'px';
        s.style.left=(e.clientX-r.left-d/2)+'px'; s.style.top=(e.clientY-r.top-d/2)+'px';
        b.appendChild(s); setTimeout(function(){s.remove();},600);
      });
      if(b.classList.contains('btn-primary')){
        b.addEventListener('mousemove',function(e){
          var r=b.getBoundingClientRect();
          b.style.transform='translate('+(((e.clientX-r.left)/r.width-.5)*7).toFixed(1)+'px,'+
            (((e.clientY-r.top)/r.height-.5)*7).toFixed(1)+'px)';
        });
        b.addEventListener('mouseleave',function(){b.style.transform='';});
      }
    });
  }
  bindButtons();

  /* ---------------- trusted-brands infinite marquee -------------------- */
  var logos = $('.logos');
  if(logos && !logos.querySelector('.logos-track')){
    var items = logos.innerHTML;
    logos.innerHTML = '<div class="logos-track">'+items+items+'</div>';
  }

  /* ---------------- re-bind after dynamic renders ---------------------- */
  window.deonAnimRefresh = function(){
    splitHeadings(); bindTilt(); bindButtons();
    $$('.cimg img, .pimg img').forEach(function(img){
      if(img.complete && img.naturalWidth) img.classList.add('loaded');
      else img.addEventListener('load',function(){img.classList.add('loaded');});
    });
    if(window.deonReveal) window.deonReveal();
  };
})();
