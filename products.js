/**
 * Serena Vet - Product Database
 * All product information in one place for easy maintenance
 * 
 * USAGE: Products are referenced by ID (key). Prices always come from this file,
 * so if prices change, just update here and the cart will recalculate.
 */

const PRODUCTS = {
  // ============================================
  // ANTIINFLAMATORIOS
  // ============================================
  "acedan-gotas": {
    id: "acedan-gotas",
    name: "Acedan Gotas",
    category: "Antiinflamatorio • Gotas",
    categories: ["perros", "gatos", "antiinflamatorios"],
    price: null, // null means "Consultar"
    image: "images/acedan-gotas.jpg",
    description: "Antiinflamatorio y analgésico en presentación gotas.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "acedan-inyectable": {
    id: "acedan-inyectable",
    name: "Acedan Inyectable",
    category: "Antiinflamatorio • Inyectable",
    categories: ["perros", "gatos", "antiinflamatorios"],
    price: null,
    image: "images/acedan.jpg",
    description: "Antiinflamatorio y analgésico de acción rápida.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "butormin": {
    id: "butormin",
    name: "Butormin",
    category: "Analgésico • Opiode",
    categories: ["perros", "gatos", "antiinflamatorios"],
    price: null,
    image: "images/butormin.jpeg",
    description: "Analgésico opioide para control del dolor.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "prednisolona-20": {
    id: "prednisolona-20",
    name: "Prednisolona 20 MG",
    category: "Antiinflamatorio • Corticoide",
    categories: ["perros", "gatos", "antiinflamatorios"],
    price: null,
    image: "images/placeholder.png",
    description: "Corticosteroide antiinflamatorio e inmunosupresor.",
    badge: null,
    variants: null,
    specialModal: null
  },

  // ============================================
  // CARDIOLOGÍA
  // ============================================
  "cardial": {
    id: "cardial",
    name: "Cardial",
    category: "Cardiología • Enalapril + Espironolactona",
    categories: ["perros", "gatos", "cardiologia"],
    price: null,
    image: "images/cardial.webp",
    description: "Enalapril + Espironolactona. Más Protección, más Vida.",
    badge: "Cardiología",
    variants: null,
    specialModal: "cardial"
  },
  "cardial-b": {
    id: "cardial-b",
    name: "Cardial B",
    category: "Cardiología • Vasodilatador",
    categories: ["perros", "gatos", "cardiologia"],
    price: null,
    image: "images/cardialb-2.5.webp",
    description: "Benazepril + Espironolactona para insuficiencia cardíaca en perros.",
    badge: "Cardiología",
    variants: [
      { name: "2.5 mg", price: null, image: "images/cardialb-2.5.webp" },
      { name: "5 mg", price: null, image: "images/cardialb-5.webp" },
      { name: "10 mg", price: null, image: "images/cardialb-10.webp" }
    ],
    specialModal: "cardialb"
  },
  "pimocard": {
    id: "pimocard",
    name: "Pimocard",
    category: "Cardiología • Inotrópico Positivo",
    categories: ["perros", "gatos", "cardiologia"],
    price: null,
    image: "images/pimocard-1.25.jpg",
    description: "Pimobendan para insuficiencia cardíaca congestiva B2 y cardiomiopatías dilatadas.",
    badge: "Cardiología",
    variants: [
      { name: "1.25 mg", price: null, image: "images/pimocard-1.25.jpg" },
      { name: "2.5 mg", price: null, image: "images/pimocard-2.5.jpg" },
      { name: "5 mg", price: null, image: "images/pimocard-5.jpg" },
      { name: "10 mg", price: null, image: "images/pimocard-10.jpg" },
      { name: "1.25 mg Hosp.", price: null, image: "images/pimocard-1.25-hosp.jpg" },
      { name: "2.5 mg Hosp.", price: null, image: "images/pimocard-2.5-hosp.jpg" },
      { name: "5 mg Hosp.", price: null, image: "images/pimocard-5-hosp.jpg" },
      { name: "10 mg Hosp.", price: null, image: "images/pimocard-10-hosp.jpg" }
    ],
    specialModal: "pimocard"
  },
  "diurene-40": {
    id: "diurene-40",
    name: "Diurene 40",
    category: "Cardiología • Diurético",
    categories: ["perros", "gatos", "cardiologia"],
    price: null,
    image: "images/DIURENE-100-COMP.webp",
    description: "Diurético para tratamiento de edemas e insuficiencia cardíaca.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "toracard": {
    id: "toracard",
    name: "Toracard",
    category: "Cardiología • Diurético",
    categories: ["perros", "gatos", "cardiologia"],
    price: null,
    image: "images/toracard.jpg",
    description: "Diurético de asa para insuficiencia cardíaca.",
    badge: null,
    variants: null,
    specialModal: null
  },

  // ============================================
  // ANTIPARASITARIOS
  // ============================================
  "ecthol-5": {
    id: "ecthol-5",
    name: "Ecthol 5",
    category: "Antiparasitarios • Externo",
    categories: ["perros", "gatos", "antiparasitarios"],
    price: null,
    image: "images/ecthol-5.png",
    description: "Antiparasitario externo de amplio espectro.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "ecthol-ap": {
    id: "ecthol-ap",
    name: "Ecthol AP",
    category: "Antiparasitarios • Ambiental",
    categories: ["perros", "gatos", "antiparasitarios"],
    price: null,
    image: "images/ecthol-ap.png",
    description: "Antiparasitario ambiental para control de plagas.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "ecthol-collar-gatos": {
    id: "ecthol-collar-gatos",
    name: "Ecthol Collar Gatos",
    category: "Antiparasitarios • Collar",
    categories: ["gatos", "antiparasitarios"],
    price: null,
    image: "images/ecthol-collar.png",
    description: "Collar antiparasitario de larga duración para gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "ecthol-collar-perros": {
    id: "ecthol-collar-perros",
    name: "Ecthol Collar Perros",
    category: "Antiparasitarios • Collar",
    categories: ["perros", "antiparasitarios"],
    price: null,
    image: "images/ecthol-collar.png",
    description: "Collar antiparasitario de larga duración para perros.",
    badge: "Perros",
    variants: [
      { name: "Perro chico", price: null, image: "images/ecthol-collar.png" },
      { name: "Perro grande", price: null, image: "images/ecthol-collar.png" }
    ],
    specialModal: null
  },
  "ecthol-gmp-gatos": {
    id: "ecthol-gmp-gatos",
    name: "Ecthol GMP Gatos",
    category: "Antiparasitarios • Pipeta",
    categories: ["gatos", "antiparasitarios"],
    price: null,
    image: "images/ecthol-gmp-gatos.png",
    description: "Pipeta antiparasitaria para gatos adultos.",
    badge: "Gatos",
    variants: [
      { name: "Menos de 5 kg", price: null, image: "images/ecthol-gmp-gatos.png" },
      { name: "Más de 5 kg", price: null, image: "images/ecthol-gmp-gatos.png" }
    ],
    specialModal: null
  },
  "ecthol-gmp-perros": {
    id: "ecthol-gmp-perros",
    name: "Ecthol GMP Perros",
    category: "Antiparasitarios • Pipeta",
    categories: ["perros", "antiparasitarios"],
    price: null,
    image: "images/ecthol-gmp-perros.png",
    description: "Pipeta antiparasitaria para perros adultos.",
    badge: "Perros",
    variants: [
      { name: "5 kg", price: null, image: "images/ecthol-gmp-perros.png" },
      { name: "6-10 kg", price: null, image: "images/ecthol-gmp-perros.png" },
      { name: "11-20 kg", price: null, image: "images/ecthol-gmp-perros.png" },
      { name: "21-40 kg", price: null, image: "images/ecthol-gmp-perros.png" }
    ],
    specialModal: null
  },
  "ecthol-halo-collar-perros": {
    id: "ecthol-halo-collar-perros",
    name: "Ecthol Halo Collar Perros",
    category: "Antiparasitarios • Collar",
    categories: ["perros", "antiparasitarios"],
    price: null,
    image: "images/ecthol-halo-perros.png",
    description: "Collar premium antiparasitario de larga duración.",
    badge: "Nuevo",
    variants: [
      { name: "Menos de 10 kg", price: null, image: "images/ecthol-halo-perros.png" },
      { name: "Más de 10 kg", price: null, image: "images/ecthol-halo-perros.png" }
    ],
    specialModal: null
  },
  "ectholaner-comprimidos-perros": {
    id: "ectholaner-comprimidos-perros",
    name: "Ectholaner Comprimidos Perros",
    category: "Antiparasitarios • Oral",
    categories: ["perros", "antiparasitarios"],
    price: null,
    image: "images/ectholaner.webp",
    description: "Antiparasitario oral de acción sistémica para perros.",
    badge: "Popular",
    variants: null,
    specialModal: null
  },
  "ecthonil-gatos": {
    id: "ecthonil-gatos",
    name: "Ecthonil Gatos",
    category: "Antiparasitarios • Spot-on",
    categories: ["gatos", "antiparasitarios"],
    price: null,
    image: "images/ecthonil-gatos.jpg",
    description: "Antiparasitario spot-on para gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "ecthonil-perros": {
    id: "ecthonil-perros",
    name: "Ecthonil Perros",
    category: "Antiparasitarios • Spot-on",
    categories: ["perros", "antiparasitarios"],
    price: null,
    image: "images/ecthonil perros .jpg",
    description: "Antiparasitario spot-on para perros.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },
  "ivermectina-250": {
    id: "ivermectina-250",
    name: "Ivermectina 250 MCG",
    category: "Antiparasitarios • Interno",
    categories: ["perros", "gatos", "antiparasitarios"],
    price: null,
    image: "images/ivermectina.png",
    description: "Antiparasitario interno de amplio espectro.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "nomat": {
    id: "nomat",
    name: "Nomat",
    category: "Antiparasitarios • Externo",
    categories: ["perros", "gatos", "antiparasitarios"],
    price: null,
    image: "images/nomat.jpeg",
    description: "Repelente e insecticida para control de ectoparásitos.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "sistema-endectocida": {
    id: "sistema-endectocida",
    name: "Sistema Endectocida",
    category: "Antiparasitarios • Completo",
    categories: ["perros", "gatos", "antiparasitarios"],
    price: null,
    image: "images/placeholder.png",
    description: "Sistema antiparasitario interno y externo completo.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "total-full-cg": {
    id: "total-full-cg",
    name: "Total Full CG Perros y Gatos",
    category: "Antiparasitarios • Completo",
    categories: ["perros", "gatos", "antiparasitarios"],
    price: null,
    image: "images/total-full-gatos.webp",
    description: "Antiparasitario interno completo para cachorros y gatitos.",
    badge: "Popular",
    variants: null,
    specialModal: null
  },
  "total-full-lc-perros": {
    id: "total-full-lc-perros",
    name: "Total Full LC Perros",
    category: "Antiparasitarios • Comprimido",
    categories: ["perros", "antiparasitarios"],
    price: null,
    image: "images/total-full-lc-perros.webp",
    description: "Antiparasitario interno en comprimidos para perros.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },
  "total-full-lc-gatos": {
    id: "total-full-lc-gatos",
    name: "Total Full LC Gatos",
    category: "Antiparasitarios • Comprimido",
    categories: ["gatos", "antiparasitarios"],
    price: null,
    image: "images/total-full-lc-gatos.png",
    description: "Antiparasitario interno en comprimidos para gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "total-full-suspension-gatos": {
    id: "total-full-suspension-gatos",
    name: "Total Full Suspensión Gatos",
    category: "Antiparasitarios • Suspensión",
    categories: ["gatos", "antiparasitarios"],
    price: null,
    image: "images/total-full-gatos.webp",
    description: "Antiparasitario interno en suspensión para gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "total-full-suspension-perros": {
    id: "total-full-suspension-perros",
    name: "Total Full Suspensión Perros",
    category: "Antiparasitarios • Suspensión",
    categories: ["perros", "antiparasitarios"],
    price: null,
    image: "images/total-full-perros.webp",
    description: "Antiparasitario interno en suspensión para perros.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },

  // ============================================
  // OFTALMOLOGÍA
  // ============================================
  "ciclosporina-1": {
    id: "ciclosporina-1",
    name: "Ciclosporina 1%",
    category: "Oftalmología • Ungüento",
    categories: ["perros", "gatos", "oftalmologia"],
    price: null,
    image: "images/ciclosporina.jpg",
    description: "Ungüento oftálmico estéril. Inmunomodulador, lacrimomimético y antiinflamatorio.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "ciclosporina-2": {
    id: "ciclosporina-2",
    name: "Ciclosporina 2%",
    category: "Oftalmología • Dermatología",
    categories: ["perros", "gatos", "oftalmologia", "dermatologia"],
    price: null,
    image: "images/ciclosporina.jpg",
    description: "Inmunomodulador para afecciones oculares y dermatológicas.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "colirama-viral": {
    id: "colirama-viral",
    name: "Colirama Viral",
    category: "Oftalmología • Antiviral",
    categories: ["perros", "gatos", "oftalmologia"],
    price: null,
    image: "images/colirama-viral-10ml-colirama-viral-10ml.jpg",
    description: "Colirio antiviral para infecciones oculares.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "epitelizante-ocular": {
    id: "epitelizante-ocular",
    name: "Epitelizante Ocular Oftalday",
    category: "Oftalmología • Regenerador",
    categories: ["perros", "gatos", "oftalmologia"],
    price: null,
    image: "images/epitelizante.jpg",
    description: "Tratamiento para regeneración del epitelio corneal.",
    badge: "-25%",
    variants: null,
    specialModal: null
  },
  "flurbiprofeno": {
    id: "flurbiprofeno",
    name: "Flurbiprofeno Oftalday",
    category: "Oftalmología • Antiinflamatorio",
    categories: ["perros", "gatos", "oftalmologia"],
    price: null,
    image: "images/flurbiprofeno.jpg",
    description: "Antiinflamatorio ocular no esteroideo.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "ofloxacina": {
    id: "ofloxacina",
    name: "Ofloxacina Oftalday",
    category: "Oftalmología • Antibiótico",
    categories: ["perros", "gatos", "oftalmologia", "antibioticos"],
    price: null,
    image: "images/ofloxacina.jpg",
    description: "Antibiótico oftálmico de amplio espectro.",
    badge: null,
    variants: null,
    specialModal: null
  },

  // ============================================
  // DERMATOLOGÍA
  // ============================================
  "dermoxil": {
    id: "dermoxil",
    name: "Dermoxil",
    category: "Dermatología • Shampoo",
    categories: ["perros", "gatos", "dermatologia"],
    price: null,
    image: "images/dermoxil.jpeg",
    description: "Shampoo medicado para afecciones de la piel.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "griseofulvina": {
    id: "griseofulvina",
    name: "Griseofulvina 250/500 MG",
    category: "Dermatología • Antifúngico",
    categories: ["perros", "gatos", "dermatologia"],
    price: null,
    image: "images/griseofulvina.jpg",
    description: "Antifúngico oral para dermatofitosis.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "uv-day": {
    id: "uv-day",
    name: "UV Day",
    category: "Dermatología • Protector Solar",
    categories: ["perros", "gatos", "dermatologia"],
    price: null,
    image: "images/uv-day.jpg",
    description: "Protector solar para zonas sensibles de mascotas.",
    badge: null,
    variants: null,
    specialModal: null
  },

  // ============================================
  // GASTROINTESTINAL
  // ============================================
  "anti-ulceras": {
    id: "anti-ulceras",
    name: "Anti Ulceras",
    category: "Gastrointestinal • Protector",
    categories: ["perros", "gatos", "gastrointestinal"],
    price: null,
    image: "images/antiulceras.jpg",
    description: "Protector gástrico para tratamiento de úlceras.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "atriben": {
    id: "atriben",
    name: "Atriben",
    category: "Gastrointestinal • Antidiarreico",
    categories: ["perros", "gatos", "gastrointestinal"],
    price: null,
    image: "images/atriben.jpeg",
    description: "Tratamiento para trastornos gastrointestinales.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "enzimax": {
    id: "enzimax",
    name: "Enzimax",
    category: "Gastrointestinal • Enzimas",
    categories: ["perros", "gatos", "gastrointestinal", "suplementos"],
    price: null,
    image: "images/enzimax.webp",
    description: "Suplemento enzimático para mejorar la digestión.",
    badge: "Nuevo",
    variants: null,
    specialModal: null
  },
  "pileran-gotas": {
    id: "pileran-gotas",
    name: "Pileran Gotas",
    category: "Gastrointestinal • Antiemético",
    categories: ["perros", "gatos", "gastrointestinal"],
    price: null,
    image: "images/placeholder.png",
    description: "Antiemético en gotas para náuseas y vómitos.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "pileran-inyectable": {
    id: "pileran-inyectable",
    name: "Pileran Inyectable",
    category: "Gastrointestinal • Antiemético",
    categories: ["perros", "gatos", "gastrointestinal"],
    price: null,
    image: "images/placeholder.png",
    description: "Antiemético inyectable de acción rápida.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "proteliv": {
    id: "proteliv",
    name: "Proteliv",
    category: "Gastrointestinal • Hepático",
    categories: ["perros", "gatos", "gastrointestinal", "suplementos"],
    price: null,
    image: "images/placeholder.png",
    description: "Hepatoprotector para la salud del hígado.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "proteliv-comprimidos": {
    id: "proteliv-comprimidos",
    name: "Proteliv Comprimidos",
    category: "Gastrointestinal • Hepático",
    categories: ["perros", "gatos", "gastrointestinal", "suplementos"],
    price: null,
    image: "images/placeholder.png",
    description: "Hepatoprotector en comprimidos para fácil administración.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "proteliv-gatos": {
    id: "proteliv-gatos",
    name: "Proteliv Gatos",
    category: "Gastrointestinal • Hepático",
    categories: ["gatos", "gastrointestinal", "suplementos"],
    price: null,
    image: "images/placeholder.png",
    description: "Hepatoprotector formulado especialmente para gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },

  // ============================================
  // SUPLEMENTOS
  // ============================================
  "anavimin-coat": {
    id: "anavimin-coat",
    name: "Anavimin Coat Comprimidos",
    category: "Suplementos • Piel y Pelo",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/anavimin.jpeg",
    description: "Suplemento vitamínico para el cuidado de piel y pelaje.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "apetil": {
    id: "apetil",
    name: "Apetil",
    category: "Suplementos • Estimulante",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/apetil.jpg",
    description: "Estimulante del apetito para mascotas inapetentes.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "iq-180": {
    id: "iq-180",
    name: "IQ 180",
    category: "Suplementos • Cognitivo",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/iq-180.jpg",
    description: "Suplemento para la salud cognitiva y cerebral.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "neovita": {
    id: "neovita",
    name: "Neovita",
    category: "Suplementos • Vitamínico",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/neovita.png",
    description: "Complemento vitamínico y mineral completo.",
    badge: "Oferta",
    variants: null,
    specialModal: null
  },
  "ol-trans": {
    id: "ol-trans",
    name: "OL Trans",
    category: "Suplementos • Articular",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/oltrans flex.png",
    description: "Condroprotector para salud articular.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "ol-trans-flex": {
    id: "ol-trans-flex",
    name: "OL Trans Flex",
    category: "Suplementos • Movilidad",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/oltrans-flex.webp",
    description: "Fórmula avanzada para movilidad y flexibilidad articular.",
    badge: "-15%",
    variants: [
      { name: "21 comprimidos", price: null, image: "images/oltrans-flex.webp" },
      { name: "70 comprimidos", price: null, image: "images/oltrans-flex.webp" }
    ],
    specialModal: null
  },
  "poten-pet": {
    id: "poten-pet",
    name: "Poten Pet",
    category: "Suplementos • Energético",
    categories: ["perros", "suplementos"],
    price: null,
    image: "images/potenpet.jpg",
    description: "Suplemento nutricional energético para perros.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },
  "poten-pet-gatos": {
    id: "poten-pet-gatos",
    name: "Poten Pet Gatos",
    category: "Suplementos • Energético",
    categories: ["gatos", "suplementos"],
    price: null,
    image: "images/potenpet-gatos.png",
    description: "Suplemento nutricional energético para gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "relay-c": {
    id: "relay-c",
    name: "Relay C",
    category: "Suplementos • Vitamina C",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/relay-c.png",
    description: "Suplemento de vitamina C para sistema inmune.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "tonipet": {
    id: "tonipet",
    name: "Tonipet",
    category: "Suplementos • Reconstituyente",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/tonipet.jpg",
    description: "Reconstituyente vitamínico para mascotas en recuperación.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "vitaminico-aedk": {
    id: "vitaminico-aedk",
    name: "Vitamínico AEDK Aves",
    category: "Suplementos • Aves",
    categories: ["suplementos"],
    price: null,
    image: "images/vitaminico-aedk.jpg",
    description: "Complejo vitamínico A, E, D y K para aves.",
    badge: null,
    variants: null,
    specialModal: null
  },

  // ============================================
  // HIGIENE BUCAL
  // ============================================
  "bioclin-enjuague": {
    id: "bioclin-enjuague",
    name: "Bioclin Enjuague Bucal",
    category: "Higiene Bucal • Enjuague",
    categories: ["perros", "gatos", "higiene"],
    price: null,
    image: "images/bioclin-enjuague.webp",
    description: "Enjuague bucal para higiene oral de mascotas.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "bioclin-gel-antiplaca": {
    id: "bioclin-gel-antiplaca",
    name: "Bioclin Gel Antiplaca",
    category: "Higiene Bucal • Gel",
    categories: ["perros", "gatos", "higiene"],
    price: null,
    image: "images/bioclin-gel-antiplaca.webp",
    description: "Gel dental para prevención de placa y sarro.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "clorhexidina": {
    id: "clorhexidina",
    name: "Clorhexidina",
    category: "Higiene • Antiséptico",
    categories: ["perros", "gatos", "higiene", "dermatologia"],
    price: null,
    image: "images/clorhexidina.jpeg",
    description: "Antiséptico y desinfectante de uso tópico.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "clorhexidina-gotas-oticas": {
    id: "clorhexidina-gotas-oticas",
    name: "Clorhexidina Gotas Óticas",
    category: "Higiene • Ótico",
    categories: ["perros", "gatos", "higiene"],
    price: null,
    image: "images/clorhexidina.jpeg",
    description: "Solución antiséptica para limpieza de oídos.",
    badge: null,
    variants: null,
    specialModal: null
  },

  // ============================================
  // ANTIBIÓTICOS
  // ============================================
  "cefalexina-500": {
    id: "cefalexina-500",
    name: "Cefalexina 500",
    category: "Antibióticos • Cefalosporina",
    categories: ["perros", "gatos", "antibioticos"],
    price: null,
    image: "images/cefalexina.png",
    description: "Antibiótico de amplio espectro para infecciones bacterianas.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "cloralen": {
    id: "cloralen",
    name: "Cloralen",
    category: "Antibióticos • Cloranfenicol",
    categories: ["perros", "gatos", "antibioticos"],
    price: null,
    image: "images/cloralen.jpeg",
    description: "Antibiótico para infecciones sensibles.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "floxaday-comprimidos": {
    id: "floxaday-comprimidos",
    name: "Floxaday Comprimidos",
    category: "Antibióticos • Fluoroquinolona",
    categories: ["perros", "gatos", "antibioticos"],
    price: null,
    image: "images/floxaday.png",
    description: "Antibiótico de amplio espectro en comprimidos.",
    badge: null,
    variants: [
      { name: "100 mg", price: null, image: "images/floxaday.png" },
      { name: "200 mg", price: null, image: "images/floxaday.png" },
      { name: "400 mg", price: null, image: "images/floxaday.png" }
    ],
    specialModal: null
  },
  "floxaday-inyectable": {
    id: "floxaday-inyectable",
    name: "Floxaday Inyectable",
    category: "Antibióticos • Inyectable",
    categories: ["perros", "gatos", "antibioticos"],
    price: null,
    image: "images/floxaday-inyectable.jpeg",
    description: "Antibiótico de amplio espectro inyectable.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "oxitetraciclina": {
    id: "oxitetraciclina",
    name: "Oxitetraciclina",
    category: "Antibióticos • Tetraciclina",
    categories: ["perros", "gatos", "antibioticos"],
    price: null,
    image: "images/placeholder.png",
    description: "Antibiótico de amplio espectro para diversas infecciones.",
    badge: null,
    variants: null,
    specialModal: null
  },

  // ============================================
  // DIETAS MV
  // ============================================
  "mv-gatos-gastrointestinal": {
    id: "mv-gatos-gastrointestinal",
    name: "MV Gatos Gastrointestinal",
    category: "Dietas MV • Gastrointestinal",
    categories: ["gatos", "gastrointestinal", "dietas"],
    price: null,
    image: "images/mv-gastrointentinal-gatos.jpg",
    description: "Dieta terapéutica para trastornos digestivos en gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "mv-gatos-obesidad": {
    id: "mv-gatos-obesidad",
    name: "MV Gatos Obesidad",
    category: "Dietas MV • Control de Peso",
    categories: ["gatos", "dietas"],
    price: null,
    image: "images/mv-obesidad-gatos.webp",
    description: "Dieta baja en calorías para control de peso en gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "mv-gatos-renal": {
    id: "mv-gatos-renal",
    name: "MV Gatos Renal",
    category: "Dietas MV • Renal",
    categories: ["gatos", "dietas"],
    price: null,
    image: "images/mv-enal_gatos.jpg",
    description: "Dieta terapéutica para enfermedad renal en gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "mv-gatos-urinario": {
    id: "mv-gatos-urinario",
    name: "MV Gatos Urinario",
    category: "Dietas MV • Urinario",
    categories: ["gatos", "dietas"],
    price: null,
    image: "images/mv-urinario-gatos.png",
    description: "Dieta para prevención de problemas urinarios en gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "mv-perros-articular": {
    id: "mv-perros-articular",
    name: "MV Perros Articular",
    category: "Dietas MV • Articular",
    categories: ["perros", "dietas"],
    price: null,
    image: "images/MV-PERRO-ARTICULAR.webp",
    description: "Dieta con condroprotectores para salud articular.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },
  "mv-perros-cardio": {
    id: "mv-perros-cardio",
    name: "MV Perros Cardio",
    category: "Dietas MV • Cardio",
    categories: ["perros", "dietas", "cardiologia"],
    price: null,
    image: "images/MV-cardio-perros.jpg",
    description: "Dieta baja en sodio para pacientes cardíacos.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },
  "mv-perros-gastrointestinal": {
    id: "mv-perros-gastrointestinal",
    name: "MV Perros Gastrointestinal",
    category: "Dietas MV • Gastrointestinal",
    categories: ["perros", "gastrointestinal", "dietas"],
    price: null,
    image: "images/mv-gastro-instestinal-perro.webp",
    description: "Dieta terapéutica para trastornos digestivos en perros.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },
  "mv-perros-obesidad": {
    id: "mv-perros-obesidad",
    name: "MV Perros Obesidad",
    category: "Dietas MV • Control de Peso",
    categories: ["perros", "dietas"],
    price: null,
    image: "images/mv-obesidad-gatos.webp",
    description: "Dieta baja en calorías para control de peso en perros.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },
  "mv-perros-renal": {
    id: "mv-perros-renal",
    name: "MV Perros Renal",
    category: "Dietas MV • Renal",
    categories: ["perros", "dietas"],
    price: null,
    image: "images/MV-PERRO-RENAL.webp",
    description: "Dieta terapéutica para enfermedad renal en perros.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },
  "mv-perros-sensibilidad": {
    id: "mv-perros-sensibilidad",
    name: "MV Perros Sensibilidad Dietaria",
    category: "Dietas MV • Sensibilidad",
    categories: ["perros", "dietas"],
    price: null,
    image: "images/mv-sensibilidad-dietaria.jpg",
    description: "Dieta hipoalergénica para perros con sensibilidades.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },

  // ============================================
  // COMPORTAMIENTO / CALMA
  // ============================================
  "ohm": {
    id: "ohm",
    name: "OHM",
    category: "Comportamiento • Calma",
    categories: ["perros", "gatos"],
    price: null,
    image: "images/ohm .jpg",
    description: "Suplemento natural para reducir estrés y ansiedad.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "ohm-gatos": {
    id: "ohm-gatos",
    name: "OHM Gatos",
    category: "Comportamiento • Calma",
    categories: ["gatos"],
    price: null,
    image: "images/ohm-gatos.webp",
    description: "Fórmula especial para reducir el estrés en gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "ohm-home-gatos": {
    id: "ohm-home-gatos",
    name: "OHM Home Gatos",
    category: "Comportamiento • Ambiental",
    categories: ["gatos"],
    price: null,
    image: "images/placeholder.png",
    description: "Difusor ambiental calmante para gatos.",
    badge: "Gatos",
    variants: null,
    specialModal: null
  },
  "ohm-home-perros": {
    id: "ohm-home-perros",
    name: "OHM Home Perros",
    category: "Comportamiento • Ambiental",
    categories: ["perros"],
    price: null,
    image: "images/placeholder.png",
    description: "Difusor ambiental calmante para perros.",
    badge: "Perros",
    variants: null,
    specialModal: null
  },

  // ============================================
  // OTROS (Anestésicos, Neurología, Respiratorio, Antiviral)
  // ============================================
  "dozilam": {
    id: "dozilam",
    name: "Dozilam",
    category: "Sedante • Benzodiacepina",
    categories: ["perros", "gatos"],
    price: null,
    image: "images/dozilam.jpeg",
    description: "Sedante y ansiolítico de acción corta.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "gabaday": {
    id: "gabaday",
    name: "Gabaday",
    category: "Neurología • Anticonvulsivo",
    categories: ["perros", "gatos"],
    price: null,
    image: "images/GABADAY.jpg",
    description: "Anticonvulsivo para control de epilepsia.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "ketamid": {
    id: "ketamid",
    name: "Ketamid",
    category: "Anestésico • Disociativo",
    categories: ["perros", "gatos"],
    price: null,
    image: "images/ketamid.jpeg",
    description: "Anestésico disociativo de uso veterinario.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "ketamina-50": {
    id: "ketamina-50",
    name: "Ketamina 50",
    category: "Anestésico • Disociativo",
    categories: ["perros", "gatos"],
    price: null,
    image: "images/ketamina 50 .png",
    description: "Anestésico general disociativo 50mg/ml.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "solubron-20": {
    id: "solubron-20",
    name: "Solubron 20",
    category: "Respiratorio • Broncodilatador",
    categories: ["perros", "gatos"],
    price: null,
    image: "images/placeholder.png",
    description: "Broncodilatador y mucolítico para vías respiratorias.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "viviram-v": {
    id: "viviram-v",
    name: "Viviram-V",
    category: "Antiviral • Inmunomodulador",
    categories: ["perros", "gatos"],
    price: null,
    image: "images/viviram.jpg",
    description: "Antiviral e inmunomodulador para infecciones virales.",
    badge: null,
    variants: null,
    specialModal: null
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get product by ID
 * @param {string} productId 
 * @returns {object|null}
 */
function getProduct(productId) {
  return PRODUCTS[productId] || null;
}

/**
 * Get all products as array
 * @returns {array}
 */
function getAllProducts() {
  return Object.values(PRODUCTS);
}

/**
 * Get products by category
 * @param {string} category 
 * @returns {array}
 */
function getProductsByCategory(category) {
  return Object.values(PRODUCTS).filter(p => p.categories.includes(category));
}

/**
 * Search products by name
 * @param {string} query 
 * @returns {array}
 */
function searchProducts(query) {
  const q = query.toLowerCase();
  return Object.values(PRODUCTS).filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.description.toLowerCase().includes(q)
  );
}

/**
 * Format price for display
 * @param {number|null} price 
 * @returns {string}
 */
function formatPrice(price) {
  if (price === null) return 'Consultar';
  return '$' + price.toLocaleString('es-CO');
}

// Export for use in other files (if using modules in future)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, getProduct, getAllProducts, getProductsByCategory, searchProducts, formatPrice };
}

