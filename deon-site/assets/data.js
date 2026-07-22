/* =========================================================================
   DEON shared content data — markets & applications
   Used by markets.html, market.html, applications.html, application.html
   ========================================================================= */
window.DEON_MARKETS = {
  transportation:{name:'Transportation',intro:'Bundling, insulation and bonding tapes for rail, bus and commercial-vehicle assembly — built to hold through vibration, temperature and time.',
    needs:['Wire-harness bundling and abrasion protection','Interior trim and panel bonding','Weatherproof sealing of seams and joints','Nameplate and label mounting'],
    products:['50W13','DT1113','DT5142','DT3124L']},
  electrical:{name:'Electrical',intro:'The insulation backbone for motors, transformers, switchgear and coils — dielectric strength and thermal class you can specify.',
    needs:['Coil and layer insulation (Class B/F/H)','Motor and transformer winding','Terminal and busbar insulation','Wave-soldering and coil masking'],
    products:['DT1111','DT1123','DT2131','DT3121L','31700']},
  building:{name:'Building components',intro:'Sealing, mounting and protection tapes for façade, glazing and construction components.',
    needs:['Panel and profile mounting','Weatherproof seam sealing','Surface protection during transit','Glazing and spacer bonding'],
    products:['DT5142','DT3124L','DT4021','PW6001']},
  renewable:{name:'Renewable energy',intro:'Bonding and insulation tapes for solar module assembly, battery packs and power electronics.',
    needs:['PV cell and panel bonding','Busbar and edge insulation','Battery-cell wrapping','Frame and junction-box mounting'],
    products:['DT5142','DT2131','DT1142','DT6041']},
  metal:{name:'Metal manufacturing',intro:'Heavy-duty packaging, masking and protection tapes for steel coil, sheet and fabricated metal.',
    needs:['Steel coil and sheet packing','Edge and surface protection','High-temperature masking','Load unitising and bundling'],
    products:['DT3741L','DT7143','DT7243','M5001']},
  hvacr:{name:'HVAC & Insulation',intro:'Foil and sealing tapes that close ducts and joints and hold through temperature swings.',
    needs:['HVAC duct seaming','Insulation seam sealing','Vapour-barrier and reflective facing','Pipe wrapping and corrosion protection'],
    products:['DT4021','DT4041','PW6001','DT3131']},
  appliance:{name:'Appliance manufacturing',intro:'Bonding, holding and insulation tapes for white-goods and small-appliance assembly.',
    needs:['Nameplate and label fixing','Component holding during transit','Foam and gasket lamination','Wiring insulation and bundling'],
    products:['DT1221H','DT6122','DT6041','50W13']},
  packaging:{name:'Packaging & logistics',intro:'Carton sealing and reinforced packaging tapes for warehouses, e-commerce and export.',
    needs:['Carton sealing and box closure','Reinforced and heavy-duty bundling','Custom-printed branded tape','Pallet unitising'],
    products:['DT9151','DT7143','DT7243','DT3741L']},
  electronics:{name:'Electronics',intro:'High-temperature masking and thin bonding tapes for PCB, SMT and device assembly.',
    needs:['Wave-soldering and gold-finger masking','Thin double-sided bonding','High-temperature insulation','Battery-cell wrapping'],
    products:['DT2131','DT1231','DT6122','DT1142']},
  automotive:{name:'Automotive',intro:'Harness, bonding and NVH tapes for OEM and tier-supplier production lines.',
    needs:['Wire-loom bundling and noise damping','Interior trim bonding','High-temperature masking','Emblem and moulding mounting'],
    products:['50W13','DT1113','DT5142','DT1231']},
  print:{name:'Print & Paper',intro:'Splicing and core-starting tapes for converting, printing and paper mills.',
    needs:['Flying and butt splicing','Core starting and tabbing','Reel and roll finishing','Clean-removal holding'],
    products:['DT1221H','DT1142','M5001','DT6041']}
};

window.DEON_MARKET_ORDER = ['transportation','electrical','building','renewable','metal','hvacr','appliance','packaging','electronics','automotive','print'];

window.DEON_APPLICATIONS = {
  masking:{name:'Masking',intro:'Low-tack masking that holds through paint, cure and process heat, then leaves no residue.',
    tapes:['M5001','DT1231','DT3131'],notes:'From general paint masking to high-temperature powder-coat and wave-soldering.'},
  bundling:{name:'Bundling & harnessing',intro:'PVC and PET tapes that bundle, wrap and protect wiring, looms and cable.',
    tapes:['50W13','DT1113'],notes:'Abrasion protection, noise damping and secure bundling for automotive and industrial looms.'},
  insulation:{name:'Insulation',intro:'Dielectric constructions for electrical insulation and coil work — Class B, F and H.',
    tapes:['DT1111','DT1123','DT2131','DT3121L','31700'],notes:'PET, cloth, polyimide and glass-filament backings selected by thermal class.'},
  protection:{name:'Surface protection',intro:'Temporary protection for finished surfaces through processing and transit.',
    tapes:['M5001','PW6001'],notes:'Clean-removal films and wraps that protect without residue.'},
  bonding:{name:'Bonding',intro:'High-bond double-sided systems that mount, bond and replace mechanical fasteners.',
    tapes:['DT1142','DT5142','DT6041','DT6122'],notes:'Acrylic, hot-melt and foam constructions for metal, plastic and LSE surfaces.'},
  mounting:{name:'Mounting',intro:'Fastener-replacement mounting for nameplates, panels and components.',
    tapes:['DT5142','DT6122','DT1221H'],notes:'Foam and tissue double-sided tapes for durable, low-profile mounting.'},
  packaging:{name:'Packaging',intro:'Carton sealing and reinforced bundling for warehouse, export and e-commerce.',
    tapes:['DT9151','DT7143','DT7243','DT3741L'],notes:'BOPP, filament and HDPE constructions for every load class.'},
  'floor-and-safety-marking':{name:'Floor & safety marking',intro:'High-visibility lane and hazard marking that stays down under traffic and lifts clean.',
    tapes:['41860'],notes:'Six standard colours for area demarcation and 5S floor management.'},
  'thermal-management':{name:'Thermal management',intro:'Foil and glass-cloth tapes that seal, reflect and hold through temperature.',
    tapes:['DT4021','DT4041','DT3131'],notes:'HVAC seaming, heat reflection and high-temperature holding.'},
  assembly:{name:'Assembly',intro:'Holding, splicing and bonding tapes that keep production lines moving.',
    tapes:['DT1221H','DT1142','DT6041'],notes:'Process holding, splicing and thin bonding for converting and assembly.'}
};

/* product name lookup (subset used across pages) */
window.DEON_PNAME = {
  '31700':'PVC Electrical Insulation Tape','50W13':'Wire Harness Tape','DT1111':'Class B Polyester Insulation Tape',
  'DT1113':'Class B Polyester Fleece Insulation Tape','DT1123':'Class F Polyester Fleece Insulation Tape',
  'DT2131':'Class H Polyimide Insulation Tape','DT3121L':'Class F Glass Cloth Insulation Tape',
  'DT3124L':'Polyglass Waterproofing Tape','41860':'Floor Marking Tape','DT3131':'High-Temperature Glass Cloth Tape',
  'DT4021':'Aluminium Foil Tape — Acrylic','DT4041':'Aluminium Foil Tape — Hot Melt','M5001':'Masking Tape',
  'PW6001':'PVC Pipe Wrapping Tape','DT1142':'Double-Sided Polyester Bonding Tape','DT1221H':'Polyester Holding & Splicing Tape',
  'DT1231':'High-Temperature Polyester Masking Tape','DT5142':'Double-Sided PE Foam Bonding Tape',
  'DT6041':'Adhesive Transfer Tape','DT6122':'Double-Sided Tissue Bonding Tape','DT3741L':'HDPE Fabric Tape',
  'DT7143':'Monofilament Reinforced Packaging Tape','DT7243':'Cross Filament Reinforced Packaging Tape','DT9151':'BOPP Packaging Tape'
};
