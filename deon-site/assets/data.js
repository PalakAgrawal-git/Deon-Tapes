/* =========================================================================
   DEON shared content data — products (with full specs), markets & applications
   Used by markets.html, market.html, applications.html, application.html,
   products.html, product-detail.html
   ========================================================================= */

/* ---- Full product catalogue with real specs ---- */
window.DEON_PRODUCTS = {
  '31700': {
    name: 'PVC Electrical Insulation Tape',
    family: 'Electrical & Insulation',
    backing: 'PVC Film',
    adhesive: 'Rubber',
    desc: 'PVC film tape with rubber adhesive for primary electrical insulation, cable identification and general-purpose wrapping.',
    features: [
      'High dielectric strength (5.6–6.0 kV)',
      'Good elongation for conformable wrapping',
      'UL 510 recognised',
      'IS-7809 Part 3 Sec 1 certified',
      'Wide colour range for phasing & identification'
    ],
    apps: [
      'Primary electrical insulation',
      'Cable identification & phasing',
      'Motor & transformer winding',
      'General-purpose wrapping & bundling'
    ],
    specs: [
      ['Backing Material', 'PVC Film'],
      ['Adhesive', 'Rubber'],
      ['Thickness', '0.110–0.120 mm'],
      ['Width', '17 / 18 / 25 mm'],
      ['Length', '6 / 10 / 15 / 25 m'],
      ['Adhesion to Steel', '2.1–2.3 N/10mm'],
      ['Tensile Strength', '160–180 N/10mm'],
      ['Breakdown Voltage', '5.6–6.0 kV']
    ],
    colors: ['Black','Red','Blue','Yellow','Green','White'],
    standards: ['UL 510','IS-7809 Part 3 Sec 1']
  },

  '50W13': {
    name: 'PVC Wire Harness Tape',
    family: 'Harness & Bundling',
    backing: 'PVC Film',
    adhesive: 'Rubber',
    desc: 'PVC film tape with rubber adhesive designed for automotive and appliance wire harness wrapping, offering noise damping and abrasion protection.',
    features: [
      'High dielectric strength (5.0–5.6 kV)',
      'Good conformability on tight radii',
      'Abrasion and vibration resistance',
      'Suitable for automotive OEM harnesses'
    ],
    apps: [
      'Automotive wire harness wrapping',
      'Appliance internal harnessing',
      'Cable bundling & routing',
      'Noise & vibration damping'
    ],
    specs: [
      ['Backing Material', 'PVC Film'],
      ['Adhesive', 'Rubber'],
      ['Thickness', '0.104–0.112 mm'],
      ['Width', '18 / 19 mm'],
      ['Length', '22 / 25 m'],
      ['Adhesion to Steel', '1.8–1.9 N/10mm'],
      ['Tensile Strength', '160–180 N/10mm'],
      ['Breakdown Voltage', '5.0–5.6 kV']
    ],
    colors: ['Black','Red','Blue','Yellow','Green','White'],
    standards: []
  },

  'DT1111': {
    name: 'Class B Polyester Insulation Tape',
    family: 'Electrical & Insulation',
    backing: 'Polyester Film',
    adhesive: 'Thermosetting Rubber',
    desc: 'Polyester film tape with synthetic rubber thermosetting adhesive for Class B (130°C) electrical insulation in motors, transformers and coils.',
    features: [
      'Thermal Class B — continuous 130°C',
      'High tensile strength (≈40 N/cm)',
      'Breakdown voltage 5000 V',
      'Thin construction (0.058 mm)',
      'Multiple colours for phase identification'
    ],
    apps: [
      'Motor & transformer coil insulation',
      'Layer & slot insulation',
      'Phase identification',
      'Component holding during assembly'
    ],
    specs: [
      ['Backing Material', 'Polyester Film'],
      ['Adhesive', 'Synthetic Rubber Thermosetting'],
      ['Thickness', '0.058 ± 0.002 mm'],
      ['Width', '25 mm'],
      ['Length', '50 / 65 m'],
      ['Adhesion to Steel', '2.5 N/cm'],
      ['Tensile Strength', '40 N/cm'],
      ['Thermal Class', 'B (130°C)'],
      ['Breakdown Voltage', '5000 V']
    ],
    colors: ['Transparent','Red','Blue','Yellow','Green'],
    standards: []
  },

  'DT1113': {
    name: 'Class B Polyester Fleece Insulation Tape',
    family: 'Electrical & Insulation',
    backing: 'Polyester Reinforced Fleece',
    adhesive: 'Thermosetting Rubber',
    desc: 'Polyester reinforced fleece tape with thermosetting rubber adhesive for Class B (130°C) electrical insulation, offering high adhesion and conformability.',
    features: [
      'Thermal Class B — continuous 130°C',
      'High adhesion (5.0 N/cm)',
      'Conformable fleece backing',
      'Breakdown voltage 5000 V'
    ],
    apps: [
      'Motor winding insulation',
      'Transformer coil wrapping',
      'Slot liner holding',
      'Electrical component bundling'
    ],
    specs: [
      ['Backing Material', 'Polyester Reinforced Fleece'],
      ['Adhesive', 'Thermosetting Rubber'],
      ['Thickness', '0.18 ± 0.005 mm'],
      ['Width', '24 mm'],
      ['Length', '55 m'],
      ['Adhesion to Steel', '5.0 N/cm'],
      ['Thermal Class', 'B (130°C)'],
      ['Breakdown Voltage', '5000 V']
    ],
    colors: ['Natural (Translucent)'],
    standards: []
  },

  'DT1123': {
    name: 'Class F Polyester Fleece Insulation Tape',
    family: 'Electrical & Insulation',
    backing: 'Polyester Reinforced Fleece',
    adhesive: 'Thermosetting Acrylic',
    desc: 'Polyester reinforced fleece tape with thermosetting acrylic adhesive for Class F (155°C) electrical insulation in high-performance motors and transformers.',
    features: [
      'Thermal Class F — continuous 155°C',
      'High adhesion (5.0 N/cm)',
      'Acrylic adhesive for elevated temperature',
      'Breakdown voltage 5000 V'
    ],
    apps: [
      'High-performance motor insulation',
      'Transformer coil wrapping',
      'Industrial motor winding',
      'Elevated-temperature electrical assembly'
    ],
    specs: [
      ['Backing Material', 'Polyester Reinforced Fleece'],
      ['Adhesive', 'Thermosetting Acrylic'],
      ['Thickness', '0.18 ± 0.005 mm'],
      ['Width', '24 mm'],
      ['Length', '50 m'],
      ['Adhesion to Steel', '5.0 N/cm'],
      ['Thermal Class', 'F (155°C)'],
      ['Breakdown Voltage', '5000 V']
    ],
    colors: ['Natural (Translucent)'],
    standards: []
  },

  'DT2131': {
    name: 'Class H Polyimide Insulation Tape',
    family: 'Electrical & Insulation',
    backing: 'Polyimide Film',
    adhesive: 'Thermosetting Polysiloxane',
    desc: 'Polyimide (Kapton-type) film tape with thermosetting polysiloxane adhesive for Class H (180°C) high-temperature electrical insulation.',
    features: [
      'Thermal Class H — continuous 180°C',
      'Ultra-thin construction (0.055 mm)',
      'Breakdown voltage 5000 V',
      'Excellent chemical resistance'
    ],
    apps: [
      'High-temperature motor insulation',
      'Transformer coil & layer insulation',
      'Wave-soldering masking on PCBs',
      'EV battery-pack insulation'
    ],
    specs: [
      ['Backing Material', 'Polyimide Film'],
      ['Adhesive', 'Thermosetting Polysiloxane'],
      ['Thickness', '0.055 ± 0.005 mm'],
      ['Width', '25 mm'],
      ['Length', '33 m'],
      ['Adhesion to Steel', '2.5 N/cm'],
      ['Thermal Class', 'H (180°C)'],
      ['Breakdown Voltage', '5000 V']
    ],
    colors: ['Amber'],
    standards: []
  },

  'DT3121L': {
    name: 'Class F Glass Cloth Insulation Tape',
    family: 'Electrical & Insulation',
    backing: 'Woven Glass Fabric',
    adhesive: 'Thermosetting Acrylic',
    desc: 'Woven glass fabric tape with thermosetting acrylic adhesive for Class F (−20°C to +155°C) electrical insulation, offering high tensile strength and mechanical protection.',
    features: [
      'Thermal Class F (−20°C to +155°C)',
      'High tensile strength (150 N/cm)',
      'Breakdown voltage 2000 V',
      'Excellent mechanical protection'
    ],
    apps: [
      'Motor & transformer insulation',
      'Coil binding & wrapping',
      'Electrical component bundling',
      'Mechanical protection in electrical equipment'
    ],
    specs: [
      ['Backing Material', 'Woven Glass Fabric'],
      ['Adhesive', 'Thermosetting Acrylic'],
      ['Thickness', '180 ± 5 µm'],
      ['Width', '~25 mm'],
      ['Length', '20 / 30 m'],
      ['Adhesion to Steel', '2.5 N/cm'],
      ['Tensile Strength', '150 N/cm'],
      ['Temperature Range', '−20°C to +155°C'],
      ['Breakdown Voltage', '2000 V']
    ],
    colors: ['Off-white'],
    standards: []
  },

  'DT3124L': {
    name: 'Polyglass Waterproofing Tape',
    family: 'Foil & Sealing',
    backing: 'Polycoated Glass Fabric',
    adhesive: 'Thermosetting Acrylic',
    desc: 'LDPE-coated glass fabric tape with thermosetting acrylic adhesive, built for demanding outdoor environments with resistance to weather, moisture, oil and alkali.',
    features: [
      'High tensile strength (≈120 N/cm)',
      'Waterproof barrier (≤2 drops after 2 hours)',
      'Excellent weather resistance (200 hrs xenon arc)',
      'Strong adhesion to metal surfaces (≈12 N/cm)'
    ],
    apps: [
      'Water ingress protection for locomotive rooftops',
      'Seam sealing & waterproofing in buses & passenger vehicles',
      'Weatherproof sealing in outdoor industrial equipment',
      'Protective sealing in high-exposure environments'
    ],
    specs: [
      ['Backing Material', 'Polycoated Glass Fabric'],
      ['Adhesive', 'Thermosetting Acrylic'],
      ['Thickness', '300 ± 30 µm'],
      ['Width', '50 mm'],
      ['Length', '20 m'],
      ['Adhesion to Steel', '12 N/cm'],
      ['Tensile Strength', '120 N/cm'],
      ['Elongation at Break', '5%'],
      ['Weather Resistance', '200 hrs xenon arc — no cracking'],
      ['Water Permeability', '≤2 drops after 2 hrs']
    ],
    colors: ['Black'],
    standards: ['ASTM D1000']
  },

  'DT3131': {
    name: 'High-Temperature Glass Cloth Tape',
    family: 'Electrical & Insulation',
    backing: 'Woven Glass Fabric',
    adhesive: 'Thermosetting Polysiloxane',
    desc: 'Woven glass fabric tape with thermosetting polysiloxane adhesive, designed for high-temperature insulation and mechanical protection from −40°C to +300°C.',
    features: [
      'Wide temperature range (−40°C to 300°C)',
      'High tensile strength (≈150 N/cm)',
      'Flame resistant',
      'Excellent abrasion resistance'
    ],
    apps: [
      'Heat tracing cable mounting & fixation',
      'Wire harnessing in high-temperature environments',
      'High-temperature duct insulation',
      'Electrical component fixing & bundling'
    ],
    specs: [
      ['Backing Material', 'Woven Glass Fabric'],
      ['Adhesive', 'Thermosetting Polysiloxane'],
      ['Thickness', '180 ± 5 µm'],
      ['Width', '25 mm'],
      ['Length', '20 / 30 m'],
      ['Adhesion to Steel', '2.5 N/cm'],
      ['Tensile Strength', '150 N/cm'],
      ['Temperature Range', '−40°C to +300°C'],
      ['Elongation at Break', '5%'],
      ['Breakdown Voltage', '2000 V'],
      ['Flammability', 'Self extinguishing']
    ],
    colors: ['Off-white'],
    standards: ['ASTM D1000']
  },

  '41860': {
    name: 'PVC Floor Marking Tape',
    family: 'Floor Marking',
    backing: 'PVC Film',
    adhesive: 'Rubber',
    desc: 'PVC floor marking tape with high-performance rubber adhesive, designed for consistent marking and zoning across industrial and commercial floor applications.',
    features: [
      'High initial tack for immediate bonding',
      'Clean removal without residue',
      'High-visibility colours for safety marking',
      'Durable PVC backing for industrial use'
    ],
    apps: [
      'Area demarcation',
      'Safety & hazard zone identification',
      'Aisle & floor marking',
      'Lane marking for traffic management'
    ],
    specs: [
      ['Backing Material', 'PVC Film'],
      ['Adhesive', 'Rubber'],
      ['Thickness', '0.130–0.140 mm'],
      ['Width', '24 / 48 / 72 ± 1 mm'],
      ['Length', '15 / 20 / 25 / 28 / 30 / 33 m'],
      ['Adhesion to Steel', '0.400–0.450 kg/inch'],
      ['Tensile Strength', '5.0–6.0 kg/inch'],
      ['Elongation at Break', '170–190%']
    ],
    colors: ['Yellow','Blue','Red','Green','Black','Orange','Yellow/Black','Yellow/Red','Green/White','Black/White'],
    standards: ['ASTM D1000']
  },

  'DT4021': {
    name: 'Aluminium Foil Tape — Acrylic',
    family: 'Foil & Sealing',
    backing: 'Soft Aluminium Foil',
    adhesive: 'Modified Acrylic',
    desc: 'Soft aluminium foil tape with modified acrylic adhesive for HVAC sealing, insulation and general-purpose industrial applications. Available with or without release liner.',
    features: [
      'High initial tack for immediate bonding',
      'Good adhesion on metal surfaces (≈5 N/cm)',
      'Available with or without release liner',
      'Conformable foil for irregular surfaces'
    ],
    apps: [
      'HVAC duct seaming & insulation seam sealing',
      'Glass wool & rock wool vapour barrier sealing',
      'Refrigerator & freezer coil mounting',
      'Insulation puncture repair & mending'
    ],
    specs: [
      ['Backing Material', 'Soft Aluminium Foil'],
      ['Adhesive', 'Modified Acrylic'],
      ['Thickness', '50 ± 5 µm'],
      ['Width', '48 mm'],
      ['Length', '20 / 50 m'],
      ['Adhesion to Steel', '5.0 N/cm'],
      ['Tensile Strength', '10 N/cm'],
      ['Elongation at Break', '6%'],
      ['Temperature Range', 'Ambient'],
      ['Release Liner', 'Optional']
    ],
    colors: ['Metallic'],
    standards: ['ASTM D1000']
  },

  'DT4121': {
    name: 'Aluminium Foil Tape — Acrylic (Heavy)',
    family: 'Foil & Sealing',
    backing: 'Soft Aluminium Foil',
    adhesive: 'Thermosetting Acrylic',
    desc: 'Heavy-gauge (80 µm) soft aluminium foil tape with thermosetting acrylic adhesive for elevated temperature applications up to 150°C.',
    features: [
      'Thermosetting variant for elevated temperature (up to 150°C)',
      'Higher adhesion & tensile than 50 µm grade',
      'Available with or without release liner',
      'Good adhesion on metal surfaces (≈5 N/cm)'
    ],
    apps: [
      'HVAC duct seaming & insulation seam sealing',
      'Refrigerator & freezer coil mounting',
      'Glass wool & rock wool vapour barrier sealing',
      'Insulation puncture repair & mending'
    ],
    specs: [
      ['Backing Material', 'Soft Aluminium Foil'],
      ['Adhesive', 'Thermosetting Acrylic'],
      ['Thickness', '80 ± 5 µm'],
      ['Width', '48 mm'],
      ['Length', '50 m'],
      ['Adhesion to Steel', '5.0 N/cm'],
      ['Tensile Strength', '50 N/cm'],
      ['Elongation at Break', '6%'],
      ['Temperature Range', 'Up to 150°C'],
      ['Release Liner', 'Optional']
    ],
    colors: ['Metallic'],
    standards: ['ASTM D1000']
  },

  'DT4041': {
    name: 'Aluminium Foil Tape — Hot Melt',
    family: 'Foil & Sealing',
    backing: 'Soft Aluminium Foil',
    adhesive: 'Synthetic Hot Melt',
    desc: 'Soft aluminium foil tape with synthetic hot melt adhesive for HVAC sealing and general-purpose applications requiring high initial tack and fast bonding.',
    features: [
      'High initial tack for immediate bonding',
      'Good adhesion on metal surfaces (≈8–10 N/cm)',
      'Conformable aluminium foil for sealing irregular surfaces',
      'Available with or without release liner'
    ],
    apps: [
      'HVAC duct seaming & insulation seam sealing',
      'Glass wool & rock wool vapour barrier sealing',
      'Refrigerator & freezer coil mounting',
      'Insulation puncture repair & mending'
    ],
    specs: [
      ['Backing Material', 'Soft Aluminium Foil'],
      ['Adhesive', 'Synthetic Hot Melt'],
      ['Thickness', '50 ± 5 µm'],
      ['Width', '48 mm'],
      ['Length', '20 / 50 m'],
      ['Adhesion to Steel', '10 N/cm'],
      ['Tensile Strength', '10 N/cm'],
      ['Elongation at Break', '6%'],
      ['Temperature Range', 'Ambient'],
      ['Release Liner', 'None / Single side paper']
    ],
    colors: ['Metallic'],
    standards: ['ASTM D1000']
  },

  'DT4141': {
    name: 'Aluminium Foil Tape — Hot Melt (Heavy)',
    family: 'Foil & Sealing',
    backing: 'Soft Aluminium Foil',
    adhesive: 'Synthetic Hot Melt',
    desc: 'Heavy-gauge (80 µm) soft aluminium foil tape with synthetic hot melt adhesive for HVAC and general-purpose industrial applications requiring high bond strength.',
    features: [
      'High adhesion (10–20 N/cm) and tensile (20–50 N/cm)',
      'Conformable aluminium foil',
      'Available with or without release liner',
      'Suitable for ambient temperature service'
    ],
    apps: [
      'HVAC duct seaming & insulation seam sealing',
      'Refrigerator & freezer coil mounting',
      'Glass wool & rock wool vapour barrier sealing',
      'Insulation puncture repair & mending'
    ],
    specs: [
      ['Backing Material', 'Soft Aluminium Foil'],
      ['Adhesive', 'Synthetic Hot Melt'],
      ['Thickness', '80 ± 5 µm'],
      ['Width', '48 mm'],
      ['Length', '20 / 50 m'],
      ['Adhesion to Steel', '10–20 N/cm'],
      ['Tensile Strength', '20–50 N/cm'],
      ['Elongation at Break', '6%'],
      ['Temperature Range', 'Ambient'],
      ['Release Liner', 'None / Single side paper']
    ],
    colors: ['Metallic'],
    standards: ['ASTM D1000']
  },

  'M5001': {
    name: 'Masking Tape — General Purpose',
    family: 'Masking',
    backing: 'Crepe Paper',
    adhesive: 'Rubber',
    desc: 'Crepe paper masking tape with rubber adhesive, designed for clean masking and surface protection across painting and general-purpose applications.',
    features: [
      'Good adhesion for secure masking & bonding',
      'Easy tear by hand',
      'Clean removal without residue',
      'Compatible with paint & coatings'
    ],
    apps: [
      'Masking for painting applications',
      'Edge protection in furniture work',
      'Surface protection during processing',
      'General-purpose industrial masking'
    ],
    specs: [
      ['Backing Material', 'Crepe Paper'],
      ['Adhesive', 'Rubber'],
      ['Thickness', '0.125–0.135 mm'],
      ['Width', '24 / 48 / 72 ± 1 mm'],
      ['Length', '15 / 20 / 25 / 30 / 40 m'],
      ['Adhesion to Steel', '0.500–0.600 kg/inch'],
      ['Tensile Strength', '6.0–7.0 kg/inch'],
      ['Elongation at Break', '9.0–15.0%'],
      ['Initial Tack', '40–70 mm'],
      ['Holding Force', 'Passes (24 hrs @ 1kg)']
    ],
    colors: ['Beige'],
    standards: ['ASTM D1000']
  },

  'PW6001': {
    name: 'PVC Pipe Wrapping Tape',
    family: 'Foil & Sealing',
    backing: 'PVC Film',
    adhesive: 'Rubber',
    desc: 'PVC pipe wrapping tape with rubber adhesive, designed for corrosion protection, moisture sealing and insulation on pipes and ducts.',
    features: [
      'Good peel strength for secure wrapping',
      'Flexible PVC backing for conformable application',
      'Moisture & corrosion resistance',
      'Suitable for outdoor & industrial use'
    ],
    apps: [
      'Pipeline protection & wrapping',
      'Moisture sealing & insulation',
      'Air conditioning duct wrapping'
    ],
    specs: [
      ['Backing Material', 'PVC Film'],
      ['Adhesive', 'Rubber'],
      ['Thickness', '0.130 ± 0.01 mm'],
      ['Width', '48 mm'],
      ['Length', '65 / 100 m'],
      ['Adhesion to Steel', '≥0.8 N/cm'],
      ['Tensile Strength', '≥8 N/cm'],
      ['Temperature Range', 'Up to 55°C'],
      ['Initial Tack (Rolling Ball)', '≥100 mm']
    ],
    colors: ['Black'],
    standards: ['ASTM D1000']
  },

  'DT1142': {
    name: 'Double-Sided Polyester Bonding Tape',
    family: 'Bonding & Double-sided',
    backing: 'Polyester Film',
    adhesive: 'Synthetic Hot Melt',
    desc: 'Polyester film tape with hot melt adhesive, designed for high-performance bonding across a wide range of industrial substrates including low surface energy materials.',
    features: [
      'Compatible with low surface energy substrates (PP, PE & similar)',
      'High adhesion strength (≈12 N/cm on steel)',
      'Double-coated construction for dual-surface bonding',
      'High initial tack for immediate bond formation'
    ],
    apps: [
      'Label fixing & component mounting (appliances)',
      'Holding & sealing in packaging & container assembly',
      'Film & fabric splicing in converting operations',
      'Bonding on plastics & low surface energy substrates'
    ],
    specs: [
      ['Backing Material', 'Polyester Film'],
      ['Adhesive', 'Synthetic Hot Melt'],
      ['Adhesive Coating', 'Double-sided'],
      ['Thickness', '90 ± 5 µm'],
      ['Width', '25 mm'],
      ['Length', '50 m'],
      ['Adhesion to Steel', '12 N/cm'],
      ['Tensile Strength', '45 N/cm'],
      ['Elongation at Break', '70%'],
      ['Release Liner', 'Double side release paper'],
      ['Release Liner Thickness', '60 µm']
    ],
    colors: ['Transparent'],
    standards: ['ASTM D1000']
  },

  'DT1221H': {
    name: 'Polyester Holding & Splicing Tape',
    family: 'Bonding & Double-sided',
    backing: 'Polyester Film',
    adhesive: 'Thermosetting Acrylic',
    desc: 'Polyester film tape with thermosetting acrylic adhesive, designed for reliable holding and splicing across industrial processes.',
    features: [
      'High cohesive strength for clean removal',
      'High tensile strength (≈45 N/cm)',
      'Multi-surface adhesion (plastics, metals & composites)',
      'Translucent blue film for visual identification'
    ],
    apps: [
      'Component holding in home appliances during transit',
      'Splicing in synthetic leather & fabric manufacturing',
      'Glass & panel fixation during assembly & dispatch',
      'Temporary process holding in electronics assembly'
    ],
    specs: [
      ['Backing Material', 'Polyester Film'],
      ['Adhesive', 'Synthetic Thermosetting Acrylic'],
      ['Adhesive Coating', 'Single-sided'],
      ['Thickness', '0.055 ± 0.005 mm'],
      ['Width', '25 mm'],
      ['Length', '50 / 65 m'],
      ['Adhesion to Steel', '2.0 N/cm'],
      ['Tensile Strength', '45 N/cm'],
      ['Elongation at Break', '80%']
    ],
    colors: ['Blue (Translucent)'],
    standards: ['ASTM D1000']
  },

  'DT1231': {
    name: 'High-Temperature Polyester Masking Tape',
    family: 'Masking',
    backing: 'Polyester Film',
    adhesive: 'Thermosetting Polysiloxane',
    desc: 'Polyester film tape with thermosetting polysiloxane (silicone) adhesive for high-temperature masking from −40°C to 200°C with short-term resistance up to 250°C.',
    features: [
      'Silicone adhesive for clean, residue-free removal',
      'Stable adhesion to metal surfaces (≈2.0 N/cm)',
      'Wide service temperature range (−40°C to 200°C)',
      'Short-term peak 250°C for up to 30 minutes'
    ],
    apps: [
      'Wave soldering masking on PCBs',
      'High-temperature masking in powder coating',
      'Masking during thermal spray & paint baking',
      'Surface protection during heat treatment & curing'
    ],
    specs: [
      ['Backing Material', 'Polyester Film'],
      ['Adhesive', 'Thermosetting Polysiloxane'],
      ['Adhesive Coating', 'Single-sided'],
      ['Thickness', '0.055 / 0.075 ± 0.005 mm'],
      ['Width', '25 mm'],
      ['Length', '50 m'],
      ['Adhesion to Steel', '2.0 N/cm'],
      ['Tensile Strength', '40 / 70 N/cm'],
      ['Elongation at Break', '80%'],
      ['Temperature Range', '−40°C to 200°C'],
      ['Service Temperature', '−40 to 200°C']
    ],
    colors: ['Green (Translucent)'],
    standards: ['ASTM D1000']
  },

  'DT5142': {
    name: 'Double-Sided PE Foam Bonding Tape',
    family: 'Bonding & Double-sided',
    backing: 'PE Foam',
    adhesive: 'Synthetic Hot Melt',
    desc: 'Double-sided PE foam tape with hot melt adhesive, designed for high-strength bonding and mounting across a wide range of surfaces including low surface energy materials.',
    features: [
      'High adhesion to steel (≈15 N/cm)',
      'High elongation (≈150%) for conformable bonding',
      'Double-coated for reliable two-surface bonding',
      'Good performance on LSE surfaces'
    ],
    apps: [
      'Metal-to-metal structural bonding & assembly',
      'Photovoltaic cell & panel bonding',
      'Auto & electronic component mounting & fixation',
      'Label & nameplate fixing in appliances'
    ],
    specs: [
      ['Backing Material', 'PE Foam'],
      ['Adhesive', 'Synthetic Hot Melt'],
      ['Adhesive Coating', 'Both-sided'],
      ['Thickness', '1.2 ± 0.005 mm'],
      ['Width', '25 mm'],
      ['Length', '10 m'],
      ['Adhesion to Steel', '15.0 N/cm'],
      ['Tensile Strength', '8.0 N/cm'],
      ['Elongation at Break', '150%'],
      ['Release Liner Thickness', '60 µm'],
      ['Release Liner', 'PE Film Liner']
    ],
    colors: ['Black'],
    standards: ['ASTM D1000']
  },

  'DT6041': {
    name: 'Adhesive Transfer Tape',
    family: 'Bonding & Double-sided',
    backing: 'Carrierless',
    adhesive: 'Synthetic Hot Melt',
    desc: 'Carrierless adhesive transfer tape comprising high-performance synthetic hot melt adhesive coated directly onto release paper, designed for ultra-thin bonding and high conformability.',
    features: [
      'Good adhesion to steel (≥12 N/cm)',
      'Carrierless adhesive for ultra-thin bond lines (~50 µm)',
      'Excellent conformability on irregular surfaces',
      'Effective bonding on LSE surfaces'
    ],
    apps: [
      'Metal-to-metal bonding & assembly support',
      'Label & nameplate fixing in appliances',
      'Foam lamination for gasket manufacturing',
      'Low-profile bonding of thin substrates'
    ],
    specs: [
      ['Backing Material', 'Carrierless (adhesive only)'],
      ['Adhesive', 'Synthetic Hot Melt'],
      ['Adhesive Coating', 'Single-sided'],
      ['Thickness', '50 ± 5 µm'],
      ['Width', '25 mm'],
      ['Length', '50 m'],
      ['Adhesion to Steel', '12.0 N/cm'],
      ['Release Liner Thickness', '60 ± 5 µm'],
      ['Release Liner', 'Double sided release paper']
    ],
    colors: ['White'],
    standards: ['ASTM D1000']
  },

  'DT6122': {
    name: 'Double-Sided Tissue Tape — Acrylic',
    family: 'Bonding & Double-sided',
    backing: 'Tissue Paper',
    adhesive: 'Cross-linked Solvent Acrylic',
    desc: 'Ultra-thin double-sided tissue tape with cross-linked solvent acrylic adhesive for precision, low-profile bonding across industrial substrates.',
    features: [
      'Ultra-thin construction (≈70 µm total thickness)',
      'High initial tack for fast bond formation',
      'Good adhesion on metal & LSE surfaces',
      'Low elongation (≈5%) for dimensional stability'
    ],
    apps: [
      'Metal-to-metal bonding & assembly support',
      'Label & nameplate fixing in appliances',
      'Foam lamination for gasket manufacturing',
      'Bonding in sanitary & industrial components'
    ],
    specs: [
      ['Backing Material', 'Tissue Paper'],
      ['Adhesive', 'Cross-linked Solvent Acrylic'],
      ['Adhesive Coating', 'Double-sided'],
      ['Thickness', '70 ± 5 µm'],
      ['Width', '25 mm'],
      ['Length', '50 m'],
      ['Adhesion to Steel', '8.0 N/cm'],
      ['Tensile Strength', '2.0 N/cm'],
      ['Elongation at Break', '5%'],
      ['Release Liner Thickness', '60 µm'],
      ['Release Liner', 'Double side release paper']
    ],
    colors: ['White'],
    standards: ['ASTM D1000']
  },

  'DT6142': {
    name: 'Double-Sided Tissue Tape — Hot Melt',
    family: 'Bonding & Double-sided',
    backing: 'Tissue Paper',
    adhesive: 'Synthetic Hot Melt',
    desc: 'Ultra-thin double-sided tissue tape with synthetic hot melt adhesive for precision bonding and low-profile assembly.',
    features: [
      'Ultra-thin construction (≈70 µm total thickness)',
      'High initial tack for fast bond formation',
      'Good adhesion on metal & LSE surfaces (10 N/cm)',
      'Low elongation (≈5%) for dimensional stability'
    ],
    apps: [
      'Metal-to-metal bonding & assembly support',
      'Label & nameplate fixing in appliances',
      'Foam lamination for gasket manufacturing',
      'Bonding in sanitary & industrial components'
    ],
    specs: [
      ['Backing Material', 'Tissue Paper'],
      ['Adhesive', 'Synthetic Hot Melt'],
      ['Adhesive Coating', 'Double-sided'],
      ['Thickness', '70 ± 5 µm'],
      ['Width', '25 mm'],
      ['Length', '50 m'],
      ['Adhesion to Steel', '10.0 N/cm'],
      ['Tensile Strength', '2.0 N/cm'],
      ['Elongation at Break', '5%'],
      ['Release Liner Thickness', '60 µm'],
      ['Release Liner', 'Double side release paper']
    ],
    colors: ['White'],
    standards: ['ASTM D1000']
  },

  'DT3741L': {
    name: 'HDPE Fabric Tape',
    family: 'Packaging',
    backing: 'Woven HDPE Fabric',
    adhesive: 'Synthetic Hot Melt',
    desc: 'Laminated woven HDPE fabric tape with synthetic hot melt adhesive, offering durable adhesion across standard and low surface energy substrates.',
    features: [
      'High adhesion to LSE surfaces (≈10 N/cm)',
      'High tensile strength (≈80 N/cm)',
      'Excellent abrasion resistance for rough handling',
      'Woven HDPE for durability & moisture resistance'
    ],
    apps: [
      'Steel coil & metal sheet packing',
      'Container liner bonding & fixation',
      'Greenhouse film fixation & securing',
      'Heavy-duty industrial packaging & bundling'
    ],
    specs: [
      ['Backing Material', 'Woven HDPE Fabric'],
      ['Adhesive', 'Synthetic Hot Melt'],
      ['Adhesive Coating', 'Single-sided'],
      ['Thickness', '140 ± 5 µm'],
      ['Width', '48 mm'],
      ['Length', '50 / 100 m'],
      ['Adhesion to Steel', '10 N/cm'],
      ['Tensile Strength', '80 N/cm'],
      ['Elongation at Break', '20%'],
      ['Release Liner Thickness', '50 ± 5 µm'],
      ['Release Liner', 'Single side silicone coated paper']
    ],
    colors: ['Black','White','Blue','Yellow'],
    standards: ['ASTM D1000']
  },

  'DT7143': {
    name: 'Monofilament Reinforced Packaging Tape',
    family: 'Packaging',
    backing: 'PET / Glass Fibre Laminate',
    adhesive: 'Synthetic Hot Melt',
    desc: 'Monofilament reinforced tape with polyester film and longitudinal glass fibre filaments, coated with hot melt adhesive for high-strength bundling, strapping and heavy-duty packaging.',
    features: [
      'High tensile strength (≥120 N/cm)',
      'Low elongation (≤5%) for stable load holding',
      'Good adhesion to metal, carton & plastic surfaces',
      'Longitudinal filament reinforcement for tear resistance'
    ],
    apps: [
      'Steel coil & metal bundle wrapping',
      'Appliance & industrial equipment securing for transit',
      'Heavy-duty export carton reinforcement',
      'Container cover sealing & load unitising'
    ],
    specs: [
      ['Backing Material', 'PET / Glass Fibre Laminate'],
      ['Adhesive', 'Synthetic Hot Melt'],
      ['Adhesive Coating', 'Single-sided'],
      ['Thickness', '120 ± 0.005 µm'],
      ['Width', '48 mm'],
      ['Length', '50 m'],
      ['Adhesion to Steel', '8.0 N/cm'],
      ['Tensile Strength', '120 N/cm'],
      ['Elongation at Break', '5%']
    ],
    colors: ['Yellowish'],
    standards: ['ASTM D1000']
  },

  'DT7243': {
    name: 'Cross Filament Reinforced Packaging Tape',
    family: 'Packaging',
    backing: 'PET / Cross-woven Glass Fibre Laminate',
    adhesive: 'Synthetic Hot Melt',
    desc: 'Cross-filament reinforced tape with polyester film and glass fibre filaments in both directions, engineered for heavy-duty bundling and packaging where bidirectional tear resistance is required.',
    features: [
      'High tensile strength (≥120 N/cm)',
      'Low elongation (≤5%) for stable load holding',
      'Cross filament reinforcement for multi-directional strength',
      'Good adhesion to metal, carton & plastic surfaces'
    ],
    apps: [
      'Steel coil & metal bundle wrapping',
      'Appliance & equipment securing for transit',
      'Heavy-duty export carton reinforcement',
      'Container cover sealing & load unitising'
    ],
    specs: [
      ['Backing Material', 'PET / Cross-woven Glass Fibre Laminate'],
      ['Adhesive', 'Synthetic Hot Melt'],
      ['Adhesive Coating', 'Single-sided'],
      ['Thickness', '130 ± 0.005 µm'],
      ['Width', 'Customizable'],
      ['Length', '50 m'],
      ['Adhesion to Steel', '8.0 N/cm'],
      ['Tensile Strength', '120 N/cm'],
      ['Elongation at Break', '5%']
    ],
    colors: ['Yellowish'],
    standards: ['ASTM D1000']
  },

  'DT9151': {
    name: 'BOPP Packaging Tape',
    family: 'Packaging',
    backing: 'BOPP Film',
    adhesive: 'Water-based Acrylic',
    desc: 'BOPP packaging tapes coated with water-based acrylic adhesive, enabling precise specification matching for light, standard and heavy-duty carton sealing and packaging line requirements.',
    features: [
      'Solvent-free, water-based acrylic — compliant with industrial hygiene standards',
      'Wide range of thickness grades with full customisation',
      'Strong peel adhesion with sustained shear resistance',
      'Consistent bond on corrugated, kraft, recycled board and plastic substrates'
    ],
    apps: [
      'Carton sealing and box closure on automated and manual packaging lines',
      'Flap-closure sealing and reinforcement in secondary and transit packaging',
      'Securing corrugated shipping boxes for e-commerce, industrial distribution and export logistics',
      'Custom-printed branded packaging tape — customer logo printing available on request'
    ],
    specs: [
      ['Backing Material', 'BOPP Film'],
      ['Adhesive', 'Water-based Acrylic'],
      ['Adhesive Coating', 'Single-sided'],
      ['Thickness', '38–55 µm'],
      ['Width', 'Customizable (12–96 mm standard slits)'],
      ['Length', '66 m (custom lengths available)'],
      ['Adhesion to Steel', '4.1–5.5 N/25mm'],
      ['Tensile Strength MD', '70–80 N/25mm'],
      ['Elongation at Break MD', '100%'],
      ['Initial Tack (Rolling Ball)', '≤8 cm'],
      ['Shear Strength on Steel', '>24 hrs']
    ],
    colors: ['Brown','Red','Blue','Yellow','Green','White','Black','Yellow (Translucent)','Orange (Translucent)'],
    standards: ['ASTM D1000']
  }
};

/* ---- Product display names (derived from DEON_PRODUCTS + legacy entries) ---- */
window.DEON_PNAME = {};
Object.keys(DEON_PRODUCTS).forEach(function(k) {
  DEON_PNAME[k] = DEON_PRODUCTS[k].name;
});

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
