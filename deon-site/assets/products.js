/* =========================================================================
   DEON products — dataset + filterable catalog (reads URL params)
   ========================================================================= */
(function(){
  var PRODUCTS = [
    ['31700','PVC Electrical Insulation Tape','electrical-insulation','rubber','pvc','single','PVC film with rubber adhesive — reliable insulation, strong bond, UL 510 / IS 7809.'],
    ['50W13','Wire Harness Tape','harness','rubber','pvc','single','PVC harnessing tape for automotive looms — secure bundling and abrasion protection.'],
    ['DT1111','Class B Polyester Insulation Tape','electrical-insulation','rubber','pet','single','PET film, thermosetting rubber adhesive, Class B (130°C), ≥5 kV dielectric.'],
    ['DT1113','Class B Polyester Fleece Insulation Tape','electrical-insulation','rubber','cloth','single','Fleece backing for varnish impregnation — Class B, high adhesion.'],
    ['DT1123','Class F Polyester Fleece Insulation Tape','electrical-insulation','acrylic','cloth','single','Fleece + acrylic adhesive, Class F (155°C) for motor coil insulation.'],
    ['DT2131','Class H Polyimide Insulation Tape','electrical-insulation','silicone','polyimide','single','Polyimide film, silicone adhesive, Class H (180°C) — PCB & coil masking.'],
    ['DT3121L','Class F Glass Cloth Insulation Tape','electrical-insulation','acrylic','cloth','single','Woven glass fabric, acrylic adhesive, Class F, high tensile with PET liner.'],
    ['DT3124L','Polyglass Waterproofing Tape','foil-sealing','acrylic','cloth','single','LDPE-coated glass fabric — waterproof barrier, weather-resistant sealing.'],
    ['41860','Floor Marking Tape','floor-marking','rubber','pvc','single','High-visibility PVC lane and hazard marking — clean removal, 6 colours.'],
    ['DT3131','High-Temperature Glass Cloth Tape','masking','silicone','cloth','single','Glass fabric, silicone adhesive, –40°C to 300°C — heat tracing & duct.'],
    ['DT4021','Aluminium Foil Tape — Acrylic Series','foil-sealing','acrylic','foil','single','Soft aluminium foil, acrylic adhesive — HVAC seaming and heat reflection.'],
    ['DT4041','Aluminium Foil Tape — Hot Melt Series','foil-sealing','hotmelt','foil','single','Soft aluminium foil, hot-melt adhesive — high tack for irregular surfaces.'],
    ['M5001','Masking Tape','masking','rubber','paper','single','Crepe paper masking, clean removal, easy tear — paint and surface protection.'],
    ['PW6001','PVC Pipe Wrapping Tape','foil-sealing','rubber','pvc','single','PVC pipe wrap — corrosion protection and moisture sealing, conformable.'],
    ['DT1142','Double-Sided Polyester Bonding Tape','bonding','hotmelt','pet','double','PET film, hot-melt — bonds low-surface-energy plastics, high initial tack.'],
    ['DT1221H','Polyester Holding & Splicing Tape','bonding','acrylic','pet','single','Translucent blue PET, acrylic — clean-removal holding and splicing.'],
    ['DT1231','High-Temperature Polyester Masking Tape','masking','silicone','pet','single','PET, silicone adhesive, –40°C to 200°C — powder-coat and wave soldering.'],
    ['DT5142','Double-Sided PE Foam Bonding Tape','bonding','hotmelt','foam','double','PE foam, hot-melt — high steel adhesion, conformable structural bonding.'],
    ['DT6041','Adhesive Transfer Tape','bonding','hotmelt','tissue','double','Carrierless hot-melt film (~50 µm) — ultra-thin, high-conformability bonding.'],
    ['DT6122','Double-Sided Tissue Bonding Tape','bonding','acrylic','tissue','double','Ultra-thin tissue (~70 µm) — fast tack, dimensional stability, mounting.'],
    ['DT3741L','HDPE Fabric Tape','packaging','hotmelt','hdpe','single','Woven HDPE, hot-melt — heavy-duty packaging, abrasion and moisture resistant.'],
    ['DT7143','Monofilament Reinforced Packaging Tape','packaging','hotmelt','filament','single','PET + glass filaments, ≥120 N/cm tensile — bundle and load securing.'],
    ['DT7243','Cross Filament Reinforced Packaging Tape','packaging','hotmelt','filament','single','Bi-directional glass filaments — multi-directional strength, palletising.'],
    ['DT9151','BOPP Packaging Tape','packaging','acrylic','bopp','single','BOPP, water-based acrylic — carton sealing, custom print, e-commerce.']
  ];

  var FAMILIES = [
    ['electrical-insulation','Electrical & insulation'],['bonding','Bonding & double-sided'],
    ['masking','Masking'],['foil-sealing','Foil & sealing'],['packaging','Packaging'],
    ['harness','Harness & bundling'],['floor-marking','Floor marking']
  ];
  var ADHESIVES=[['acrylic','Acrylic'],['rubber','Rubber'],['hotmelt','Hot-melt'],['silicone','Silicone']];
  var BACKINGS=[['pvc','PVC'],['pet','PET / polyester'],['polyimide','Polyimide'],['bopp','BOPP'],
    ['foam','Foam'],['foil','Aluminium foil'],['paper','Paper'],['cloth','Cloth / glass'],
    ['filament','Filament'],['tissue','Tissue'],['hdpe','HDPE']];
  var SIDED=[['single','Single-sided'],['double','Double-sided']];

  var FAMNAME={};FAMILIES.forEach(function(f){FAMNAME[f[0]]=f[1];});

  // active filters from URL
  var params=new URLSearchParams(location.search);
  var active={family:set(params.get('family')),adhesive:set(params.get('adhesive')),
    backing:set(params.get('backing')),sided:set(params.get('sided'))};
  function set(v){return v?v.split(',').filter(Boolean):[];}

  function facetGroup(title,key,opts){
    return '<div class="facet"><h4>'+title+'</h4>'+opts.map(function(o){
      var on=active[key].indexOf(o[0])>-1;
      return '<label class="facet-opt"><input type="checkbox" data-key="'+key+'" value="'+o[0]+'"'+(on?' checked':'')+'><span>'+o[1]+'</span></label>';
    }).join('')+'</div>';
  }

  function matches(p){
    var fam=p[2],adh=p[3],bk=p[4],sd=p[5];
    return (!active.family.length||active.family.indexOf(fam)>-1)
      &&(!active.adhesive.length||active.adhesive.indexOf(adh)>-1)
      &&(!active.backing.length||active.backing.indexOf(bk)>-1)
      &&(!active.sided.length||active.sided.indexOf(sd)>-1);
  }

  function card(p){
    var img='assets/img/'+p[0].toLowerCase()+'.jpeg';
    return '<article class="pcard reveal">'+
      '<a class="pimg" href="contact.html?type=sample&sku='+p[0]+'"><img src="'+img+'" alt="'+p[1]+'" loading="lazy"></a>'+
      '<div class="pbody"><div class="pcard-top">'+
      '<span class="pcode">Deon '+p[0]+'</span>'+
      '<span class="ptag">'+(FAMNAME[p[2]]||p[2])+'</span></div>'+
      '<h3>'+p[1]+'</h3><p>'+p[6]+'</p>'+
      '<div class="pmeta"><span>'+cap(p[3])+' adhesive</span><span>'+cap(p[4])+' backing</span><span>'+cap(p[5])+'-sided</span></div>'+
      '<div class="pcard-foot"><a class="arrow" href="contact.html?type=sample&sku='+p[0]+'">Request sample <span class="a">→</span></a>'+
      '<a class="btn btn-ghost btn-sm" href="contact.html?type=quote&sku='+p[0]+'">Datasheet</a></div></div></article>';
  }
  function cap(s){return s.charAt(0).toUpperCase()+s.slice(1);}

  function render(){
    var list=PRODUCTS.filter(matches);
    var grid=document.getElementById('pgrid');
    grid.innerHTML=list.length?list.map(card).join(''):'<p class="muted" style="grid-column:1/-1;padding:40px 0">No products match these filters. <a class="arrow" href="products.html">Clear all →</a></p>';
    document.getElementById('pcount').textContent=list.length;
    document.getElementById('ptotal').textContent=PRODUCTS.length;
    // re-observe reveals for newly rendered cards
    if(window.deonReveal) window.deonReveal();
  }

  function chips(){
    var all=[];Object.keys(active).forEach(function(k){active[k].forEach(function(v){all.push([k,v]);});});
    var box=document.getElementById('activeChips');
    if(!all.length){box.innerHTML='';return;}
    box.innerHTML=all.map(function(a){
      return '<button class="active-chip" data-key="'+a[0]+'" data-val="'+a[1]+'">'+labelFor(a[0],a[1])+' ✕</button>';
    }).join('')+'<a class="active-clear" href="products.html">Clear all</a>';
  }
  function labelFor(k,v){
    var src={family:FAMILIES,adhesive:ADHESIVES,backing:BACKINGS,sided:SIDED}[k];
    var f=src.find(function(o){return o[0]===v;});return f?f[1]:v;
  }
  function syncURL(){
    var q=[];Object.keys(active).forEach(function(k){if(active[k].length)q.push(k+'='+active[k].join(','));});
    history.replaceState(null,'',location.pathname+(q.length?'?'+q.join('&'):''));
  }

  document.addEventListener('DOMContentLoaded',function(){
    var side=document.getElementById('facets');
    side.innerHTML=facetGroup('Product family','family',FAMILIES)+
      facetGroup('Adhesive','adhesive',ADHESIVES)+
      facetGroup('Backing','backing',BACKINGS)+
      facetGroup('Construction','sided',SIDED);
    side.addEventListener('change',function(e){
      var cb=e.target.closest('input[type="checkbox"]');if(!cb)return;
      var k=cb.getAttribute('data-key'),v=cb.value;
      if(cb.checked){if(active[k].indexOf(v)<0)active[k].push(v);}
      else active[k]=active[k].filter(function(x){return x!==v;});
      syncURL();chips();render();
    });
    document.getElementById('activeChips').addEventListener('click',function(e){
      var b=e.target.closest('.active-chip');if(!b)return;
      var k=b.getAttribute('data-key'),v=b.getAttribute('data-val');
      active[k]=active[k].filter(function(x){return x!==v;});
      var cb=side.querySelector('input[data-key="'+k+'"][value="'+v+'"]');if(cb)cb.checked=false;
      syncURL();chips();render();
    });
    chips();render();
  });
})();
