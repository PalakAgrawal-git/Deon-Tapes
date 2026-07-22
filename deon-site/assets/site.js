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

  /* ---------- header: mega menus (click for touch/keyboard; hover via CSS) ---------- */
  $$('.nav-trigger').forEach(function(btn){
    var mega=btn.parentElement.querySelector('.mega');
    btn.addEventListener('click',function(e){
      if(!mega)return;
      e.stopPropagation();
      var open=mega.classList.contains('open');
      $$('.mega.open').forEach(function(m){m.classList.remove('open');});
      $$('.nav-trigger[aria-expanded="true"]').forEach(function(b){b.setAttribute('aria-expanded','false');});
      if(!open){mega.classList.add('open');btn.setAttribute('aria-expanded','true');}
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
  var A11Y=['contrast','fontscale','motion'];
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
