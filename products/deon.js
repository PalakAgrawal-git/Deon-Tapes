
(function(){
  var main=document.getElementById('mainimg');
  if(main){
    main.style.transition='opacity .28s ease';
    document.querySelectorAll('.thumbs button').forEach(function(b){
      b.addEventListener('click',function(){
        var src=b.getAttribute('data-src');
        main.style.opacity=0;
        setTimeout(function(){ main.src=src; main.style.opacity=1; },160);
        document.querySelectorAll('.thumbs button').forEach(function(x){x.classList.remove('sel')});
        b.classList.add('sel');
      });
    });
  }
  var els=document.querySelectorAll('.reveal,.rule');
  if(!('IntersectionObserver'in window)){els.forEach(function(e){e.classList.add('in')});}
  else{
    // REPEATING: toggle .in every time an element enters/leaves the viewport so
    // its animation replays on each scroll pass (both directions).
    var io=new IntersectionObserver(function(en){en.forEach(function(x){
      x.target.classList.toggle('in', x.isIntersecting);
    })},{threshold:.15, rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(e){io.observe(e)});
  }
  var nav=document.querySelector('.nav');
  var bar=document.getElementById('scrollbar');
  var ticking=false;
  function onScroll(){
    if(ticking) return; ticking=true;
    requestAnimationFrame(function(){
      var y=window.scrollY||0;
      if(nav) nav.classList.toggle('scrolled', y>40);
      if(bar){ var h=document.documentElement.scrollHeight-window.innerHeight;
        bar.style.transform='scaleX('+(h>0?Math.min(y/h,1):0)+')'; }
      ticking=false;
    });
  }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  // index spec rows for staggered sweep
  document.querySelectorAll('.spec tbody tr').forEach(function(tr,i){tr.style.setProperty('--i',i);});
})();

/* ================= EXTRA ANIMATION LAYER ================= */
(function(){
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(reduce) return;
  document.body.classList.add('js-anim');

  /* blur-up product images */
  document.querySelectorAll('.pcard .ph img').forEach(function(img){
    if(img.complete && img.naturalWidth) img.classList.add('loaded');
    else img.addEventListener('load',function(){img.classList.add('loaded');});
  });

  /* count-up numbers — REPEATING: remembers its target and re-counts from 0
     every time it re-enters the viewport. */
  function countUp(el){
    if(!el.dataset.countTarget){
      var m = el.textContent.trim().match(/^(\d[\d,]*)(.*)$/);
      if(!m) return;
      el.dataset.countTarget = m[1].replace(/,/g,'');
      el.dataset.countSuffix = m[2]||'';
    }
    var target = parseInt(el.dataset.countTarget,10), suffix = el.dataset.countSuffix||'', start=null, dur=1300;
    function step(ts){
      if(!start) start=ts;
      var p=Math.min((ts-start)/dur,1), val=Math.floor((1-Math.pow(1-p,3))*target);
      el.textContent = val.toLocaleString()+suffix;
      if(p<1) requestAnimationFrame(step); else el.textContent = target.toLocaleString()+suffix;
    }
    requestAnimationFrame(step);
  }
  var nums = document.querySelectorAll('.kpis b, .stat .num, [data-count]');
  if('IntersectionObserver' in window){
    var nio = new IntersectionObserver(function(en){en.forEach(function(x){
      if(x.isIntersecting) countUp(x.target);
    })},{threshold:.6});
    nums.forEach(function(e){nio.observe(e);});
  } else nums.forEach(countUp);

  /* 3D tilt on related/catalogue cards */
  document.querySelectorAll('.pcard').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect();
      var px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
      card.style.transform='translateY(-5px) rotateX('+(-py*6).toFixed(2)+'deg) rotateY('+(px*6).toFixed(2)+'deg)';
    });
    card.addEventListener('mouseleave',function(){card.style.transform='';});
  });

  /* click ripple on all buttons */
  document.querySelectorAll('.btn').forEach(function(b){
    b.addEventListener('click',function(e){
      var r=b.getBoundingClientRect(), d=Math.max(r.width,r.height), s=document.createElement('span');
      s.className='ripple'; s.style.width=s.style.height=d+'px';
      s.style.left=(e.clientX-r.left-d/2)+'px'; s.style.top=(e.clientY-r.top-d/2)+'px';
      b.appendChild(s); setTimeout(function(){s.remove();},600);
    });
  });

  /* magnetic pull on primary buttons */
  document.querySelectorAll('.btn-primary').forEach(function(b){
    b.addEventListener('mousemove',function(e){
      var r=b.getBoundingClientRect();
      b.style.transform='translate('+(((e.clientX-r.left)/r.width-.5)*8).toFixed(1)+'px,'+(((e.clientY-r.top)/r.height-.5)*8).toFixed(1)+'px)';
    });
    b.addEventListener('mouseleave',function(){b.style.transform='';});
  });

  /* back-to-top button */
  var btt=document.createElement('button');
  btt.className='backtop'; btt.type='button'; btt.setAttribute('aria-label','Back to top'); btt.textContent='↑';
  document.body.appendChild(btt);
  btt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});

  /* CONTINUOUS SCROLL PARALLAX — layered elements drift as you scroll (repeats
     every scroll, both directions). Uses the CSS `translate` property so it
     composes with reveal `transform` animations instead of overriding them. */
  var layers=[];
  document.querySelectorAll('[data-plx],.sec-head,.hl,.stdgrid,.certs,.foot-tag .big').forEach(function(el){
    var speed=parseFloat(el.getAttribute('data-plx'));
    if(isNaN(speed)){
      speed = el.classList.contains('hl') ? 16
            : el.classList.contains('foot-tag') || el.classList.contains('big') ? 22
            : 12;
    }
    layers.push({el:el, s:speed});
  });
  var pTick=false;
  function parallax(){
    if(pTick) return; pTick=true;
    requestAnimationFrame(function(){
      var vh=window.innerHeight||1;
      layers.forEach(function(L){
        var r=L.el.getBoundingClientRect();
        if(r.bottom<-200||r.top>vh+200) return;      // skip off-screen
        var d=((r.top+r.height/2)-vh/2)/vh;           // -0.5 (top) .. +0.5 (bottom)
        L.el.style.translate='0 '+(-d*L.s).toFixed(1)+'px';
      });
      pTick=false;
    });
  }
  window.addEventListener('scroll',function(){
    btt.classList.toggle('show',(window.scrollY||0)>500);
    parallax();
  },{passive:true});
  window.addEventListener('resize',parallax,{passive:true});
  parallax();
})();
