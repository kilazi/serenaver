/**
 * Serena Pets - Product Database
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
    category: "Tranquilizante • Gotas",
    categories: ["perros", "gatos", "equinos"],
    price: null, // null means "Consultar"
    image: "images/acedan-gotas.jpg",
    description: "Sedación práctica, simple y segura. Tranquilidad natural sin sueño.",
    logoSubtitle: "MALEATO DE ACEPROMACINA",
    fullDescription: "<strong>ACEDAN®</strong> es un tranquilizante y sedante formulado con <strong>Maleato de Acepromacina</strong>. Produce un estado de pasividad y calma, disminuyendo la excitabilidad nerviosa sin provocar embotamiento de la conciencia. Genera indiferencia al medio, con disminución de la actividad motora.",
    indication: "<strong>Indicado para:</strong><ul><li>Tranquilizar al animal ante estímulos excitantes del entorno</li><li>Facilitar el manejo del animal en maniobras clínico-quirúrgicas y diagnósticas</li><li>Evitar nauseas y vómitos en viajes (efecto anticinetósico)</li><li>Aliviar el prurito causado por irritación cutánea</li><li>Pre medicación anestésica</li><li>Reducir la tensión arterial</li></ul>",
    presentationTitle: "ACEDAN GOTAS",
    presentationSubtitle: "Frasco gotero por 10 ml",
    formula: "<strong>Formulación:</strong><br>Acepromacina Maleato 10 mg; Vehículo c.s.p. 1 ml",
    benefitsTitle: "ACEDAN® es el tranquilizante de elección",
    benefitsSubtitle: "Ventajas que hacen de ACEDAN® la mejor opción para la sedación",
    benefits: [
      { title: "", description: "Buena y rápida absorción oral que facilita la administración por el dueño de la mascota" },
      { title: "", description: "Ante situaciones de stress, posee efectos beneficiosos debido a sus acciones sobre el sistema cardiovascular: acción antiarrítmica, desensibilización del miocardio a la acción de catecolaminas, acción vasodilatadora que previene edema pulmonar agudo. No afecta la contractilidad cardíaca" },
      { title: "", description: "Evita accidentes o fugas ante estímulos mayores, ya que disminuye la actividad motora espontánea y modula la respuesta corporal" },
      { title: "", description: "Se puede asociar a otras drogas para lograr una pre medicación anestésica potenciando la sedación y aportando analgesia, con amplio margen de seguridad (Butorfanol: Butormin®)" },
      { title: "", description: "Potencia la actividad del clorhidrato de procaína (anestesia local), incrementando su efecto bloqueador" },
      { title: "", description: "La baja toxicidad de la acepromacina permite que, en caso de sobredosificación, se pueda manejar al paciente con tratamiento sintomático" },
      { title: "", description: "Favorece la recuperación suave durante el post operatorio" },
      { title: "", description: "Disminuye la cantidad de drogas durante la inducción y mantenimiento anestésico" }
    ],
    dosage: "<strong>Dosificación:</strong><br><strong>Perros y Gatos:</strong> 1-3 gotas/kg. Iniciar con la dosis más baja y esperar 30 minutos. Reducir la dosis a la mitad en razas braquicefálicas, gigantes, galgos, animales geriátricos, debilitados o con enfermedad cardíaca o hepática.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Tiempo de inicio de acción:</strong> 30-45 minutos<br><strong>Duración del efecto:</strong> 8-12 horas",
    badge: null,
    variants: null,
    specialModal: null
  },
  "acedan-inyectable": {
    id: "acedan-inyectable",
    name: "Acedan Inyectable",
    category: "Tranquilizante • Inyectable",
    categories: ["perros", "gatos", "equinos"],
    price: null,
    image: "images/acedan.jpg",
    description: "Sedación práctica, simple y segura. Tranquilidad natural sin sueño.",
    logoSubtitle: "MALEATO DE ACEPROMACINA",
    fullDescription: "<strong>ACEDAN®</strong> es un tranquilizante y sedante formulado con <strong>Maleato de Acepromacina</strong>. Produce un estado de pasividad y calma, disminuyendo la excitabilidad nerviosa sin provocar embotamiento de la conciencia. Genera indiferencia al medio, con disminución de la actividad motora.",
    indication: "<strong>Indicado para:</strong><ul><li>Tranquilizar al animal ante estímulos excitantes del entorno</li><li>Facilitar el manejo del animal en maniobras clínico-quirúrgicas y diagnósticas</li><li>Evitar nauseas y vómitos en viajes (efecto anticinetósico)</li><li>Aliviar el prurito causado por irritación cutánea</li><li>Pre medicación anestésica</li><li>Reducir la tensión arterial</li></ul>",
    presentationTitle: "ACEDAN INYECTABLE",
    presentationSubtitle: "Frasco ampolla por 50 ml",
    formula: "<strong>Formulación:</strong><br>Acepromacina Maleato 10 mg; Vehículo c.s.p. 1 ml",
    benefitsTitle: "ACEDAN® es el tranquilizante de elección",
    benefitsSubtitle: "Ventajas que hacen de ACEDAN® la mejor opción para la sedación",
    benefits: [
      { title: "", description: "Buena y rápida absorción que facilita la administración profesional" },
      { title: "", description: "Ante situaciones de stress, posee efectos beneficiosos debido a sus acciones sobre el sistema cardiovascular: acción antiarrítmica, desensibilización del miocardio a la acción de catecolaminas, acción vasodilatadora que previene edema pulmonar agudo. No afecta la contractilidad cardíaca" },
      { title: "", description: "Evita accidentes o fugas ante estímulos mayores, ya que disminuye la actividad motora espontánea y modula la respuesta corporal" },
      { title: "", description: "Se puede asociar a otras drogas para lograr una pre medicación anestésica potenciando la sedación y aportando analgesia, con amplio margen de seguridad (Butorfanol: Butormin®)" },
      { title: "", description: "Potencia la actividad del clorhidrato de procaína (anestesia local), incrementando su efecto bloqueador" },
      { title: "", description: "La baja toxicidad de la acepromacina permite que, en caso de sobredosificación, se pueda manejar al paciente con tratamiento sintomático" },
      { title: "", description: "Favorece la recuperación suave durante el post operatorio" },
      { title: "", description: "Disminuye la cantidad de drogas durante la inducción y mantenimiento anestésico" }
    ],
    dosage: "<strong>Dosificación:</strong><br><strong>Perros y Gatos:</strong> 0,1 mg/Kg vía SC, IM o EV (lenta). No exceder 3 mg total vía IM o EV en perros y 1 mg total en felinos. Reducir la dosis a la mitad en razas braquicefálicas, gigantes, galgos, animales geriátricos, debilitados o con enfermedad cardíaca o hepática.<br><br><strong>Equinos:</strong> 1,5 ml cada 400 Kg vía EV, IM o SC<br><br><strong>Vías de administración:</strong> SC, IM o EV<br><strong>Tiempo de inicio de acción:</strong> 10-15 minutos<br><strong>Duración del efecto:</strong> 8-12 horas<br><strong>Metabolismo:</strong> Hepático<br><strong>Excreción:</strong> Renal",
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
    category: "Oftalmología • Inmunomodulador",
    categories: ["perros", "gatos", "oftalmologia"],
    price: null,
    image: "images/ciclosporina.jpg",
    description: "Ungüento oftálmico estéril. Inmunomodulador, lacrimomimético y antiinflamatorio.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "CICLOSPORINA 1%",
    logoSubtitle: "/ Inmunomodulador. Lacrimomimético. Antiinflamatorio.",
    fullDescription: "Ungüento estéril a base de <strong>Ciclosporina A</strong> (calidad U.S.P)",
    indication: "<strong>Indicado para:</strong> el tratamiento de la queratoconjuntivitis seca (QCS) y la queratitis superficial crónica (pannus), conjuntivitis plasmocítica, queratitis punteada superficial, blefaritis ulcerativa del canto nasal, escleritis y epiescleritis.",
    presentationTitle: "Presentación Disponible",
    presentationSubtitle: "Pomo con 3,5 g. con aplicador oftálmico",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 g de ungüento contiene:<br>Ciclosporina A (USP)...............1 g<br>Excipientes c.s.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Ciclosporina 1% ofrece múltiples beneficios para el tratamiento de afecciones oculares",
    benefits: [
      { title: "Inmunomodulador", description: "Con afinidad por la córnea y la esclerótica. Su formulación de calidad U.S.P garantiza la pureza y la eficacia del principio activo." },
      { title: "Lacrimomimético", description: "Ayuda a restaurar la producción de lágrimas y mejora la lubricación ocular en casos de queratoconjuntivitis seca." },
      { title: "Antiinflamatorio", description: "Reduce la inflamación ocular asociada a enfermedades inmunomediadas, mejorando el confort y la salud del ojo." },
      { title: "Solución Efectiva", description: "Ofrece una solución efectiva para manejar afecciones oculares relacionadas con la falta de producción de lágrimas y otras enfermedades inmunomediadas en perros." }
    ]
  },
  "ciclosporina-2": {
    id: "ciclosporina-2",
    name: "Ciclosporina 2%",
    category: "Oftalmología • Inmunomodulador",
    categories: ["perros", "gatos", "oftalmologia", "dermatologia"],
    price: null,
    image: "images/ciclosporina-2.jpg",
    description: "Inmunomodulador para afecciones oculares y dermatológicas.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "CICLOSPORINA 2%",
    logoSubtitle: "/ Inmunomodulador / Lacrimomimético / Antiinflamatorio",
    fullDescription: "Colirio estéril a base de <strong>ciclosporina A</strong> (calidad U.S.P)",
    indication: "<strong>Indicado para el tratamiento de:</strong> Queratoconjuntivitis seca (QCS) y la queratitis superficial crónica (pannus) Inmunomodulador, lagrimogénico y antiinflamatorio ocular de superficie.",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "NUEVO",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml contiene:<br>Ciclosporina A...............2 g<br>Excipientes c.s.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Ciclosporina 2% ofrece múltiples beneficios para el tratamiento de afecciones oculares",
    benefits: [
      { title: "Inmunomodulador", description: "Con afinidad por la córnea y la esclerótica. Su formulación de calidad U.S.P garantiza la pureza y la eficacia del principio activo." },
      { title: "Lacrimomimético y Antiinflamatorio", description: "Reduce la respuesta inmunitaria promoviendo la producción de lágrimas. Además, ayuda a disminuir la inflamación en el ojo, lo que puede reducir enrojecimiento y dolor asociado con diversas patologías oculares." },
      { title: "Mejora la Calidad Ocular", description: "Al aumentar la producción de lágrimas y reducir la inflamación, puede mejorar significativamente la calidad ocular de perros y gatos afectados." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "FLURBIPROFENO",
    logoSubtitle: "/ Antiinflamatorio no esteroide de última generación.",
    fullDescription: "Colirio estéril a base de Flurbiprofeno.",
    indication: "<strong>Indicado en tratamiento de procesos inflamatorios:</strong> Conjuntivitis, uveitis leves y moderadas. En cirugías intraoculares (inhibición de la miosis intraoperatoria). También en post reparación de úlceras corneales con gran vascularización, procesos dolorosos oculares y en reemplazo de glucocorticoides tópicos cuando están contraindicados y en asociación con estos, en procesos inflamatorios muy severos.",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml contiene:<br>Flurbiprofeno...............0,1 g<br>Excipientes c.s.",
    benefitsTitle: "",
    benefitsSubtitle: "",
    benefits: [
      { title: "", description: "El flurbiprofeno es un antiinflamatorio no esteroideo (AINE) que inhibe las enzimas COX-1 y COX-2, responsables de la síntesis de prostaglandinas." },
      { title: "", description: "Es eficaz en la reducción de la inflamación y el dolor, proporcionando un alivio asociado con diversas condiciones oculares." },
      { title: "", description: "El inicio de acción es rápido, otorgando alivio en un corto período de tiempo, lo cual es importante para el manejo de condiciones agudas y mejorar el confort del animal." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "ENZIMAX",
    logoSubtitle: "/ Único suplemento dietario formulado con enzimas proteolíticas",
    fullDescription: "Las enzimas vegetales de <strong>Enzimax</strong> fragmentan las partículas de los alimentos favoreciendo una mayor absorción de sus nutrientes. Está indicado para mejorar la digestión y absorción de dietas caseras y comerciales.",
    indication: "<strong>Complementario a tratamientos por:</strong> Flatulencias, Diarreas, Síndrome de mala digestión, Síndrome de mala absorción, Enfermedad intestinal inflamatoria crónica, Gastritis crónicas, Disbacteriosis, Gastroenteritis infecciosas, Parasitosis internas, Insuficiencias pancreáticas, Hepatopatías, Períodos de convalecencia, Tratamientos oncológicos.",
    presentationTitle: "Presentación Disponible",
    presentationSubtitle: "Envase que contiene 2 blisters por 10 comprimidos de 200 mg cada uno",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido de 200 mg contiene:<br>Bromelina (32 mg*) equivalente a 8 unidades FIP<br>Papaína (1,6 mg**) equivalente a 48000 unidades USP<br>Betaina HCI (5 mg*)<br>Excipientes c.s.",
    benefitsTitle: "Componentes Activos",
    benefitsSubtitle: "Enzimax contiene enzimas proteolíticas vegetales con múltiples beneficios",
    benefits: [
      { title: "Bromelina", description: "Enzima proteolítica extraída de la piña tropical. Acción antiinflamatoria, inmunomoduladora, anticoagulante, antiedematosa y mucolítica. Reduce los niveles de tromboxano y prostaglandinas que intervienen en el proceso inflamatorio." },
      { title: "Betaina HCI", description: "Compuesto tri-metilado del aminoácido extraído de la remolacha azucarera. Coadyuvante en el metabolismo de las grasas, colabora en la digestión de lípidos y desdoblamiento de proteínas. Fortalece la salud hepática y colabora con la hidratación celular." },
      { title: "Papaína", description: "Enzima proteolítica extraída del látex de la papaya. Favorece la digestión de los alimentos y funciona como regulador intestinal. Su contenido en pectina aumenta la masa fecal ayudando a la evacuación. Acción antihelmíntica colaborando en la eliminación de nematodos." },
      { title: "Administración", description: "Una dosis diaria previa a las comidas (idealmente 20 minutos antes de la ingesta). Comprimidos de fácil administración. Práctico y simple de suministrar." }
    ]
  },
  "pileran-gotas": {
    id: "pileran-gotas",
    name: "Pileran Gotas",
    category: "Antiemético - Gastrocinético • Gotas",
    categories: ["perros", "gatos", "gastrointestinal"],
    price: null,
    image: "images/placeholder.png",
    description: "Potente antiemético de acción central y periférica.",
    logoSubtitle: "Solución Oral para Perros y Gatos",
    fullDescription: "<strong>PILERAN</strong> es un potente antiemético de acción central y periférica. El principio activo es la Metoclopramida, un potente antiemético central antagonista Dopa (D2) a nivel de la zona quimiorreceptora desencadenante. Periféricamente actúa como procinético gastrointestinal aumentando el tono y amplitud esofágica, y la contracción gástrica con relajación del esfínter pilórico, promoviendo el vaciamiento gástrico y aumentando la peristalsis duodenal.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de náuseas y vómitos en perros y gatos</li><li>Trastornos gastrointestinales que requieren procinética</li><li>Facilitar el vaciamiento gástrico</li><li>Mejorar la motilidad gastrointestinal</li></ul>",
    presentationTitle: "PILERAN GOTAS",
    presentationSubtitle: "Frasco gotero por 20 ml",
    formula: "<strong>FÓRMULA</strong><br>Cada ml de solución oral contiene:<br>Metoclopramida Clorhidrato: 5 mg<br>Vehículo c.s.",
    dosage: "<strong>Dosificación:</strong><br><br><strong>Perros y Gatos:</strong> 1 ml (20 gotas) cada 10 kg cada 6-8 horas",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Doble acción: central y periférica",
    benefits: [
      { title: "", description: "Acción central: Antagonista Dopa (D2) a nivel de la zona quimiorreceptora desencadenante, bloqueando las señales de náusea y vómito" },
      { title: "", description: "Acción periférica: Procinético gastrointestinal que aumenta el tono y amplitud esofágica" },
      { title: "", description: "Promueve la contracción gástrica con relajación del esfínter pilórico" },
      { title: "", description: "Facilita el vaciamiento gástrico y aumenta la peristalsis duodenal" }
    ],
    badge: null,
    variants: null,
    specialModal: null
  },
  "pileran-inyectable": {
    id: "pileran-inyectable",
    name: "Pileran Inyectable",
    category: "Antiemético - Gastrocinético • Inyectable",
    categories: ["perros", "gatos", "gastrointestinal"],
    price: null,
    image: "images/placeholder.png",
    description: "Potente antiemético de acción central y periférica.",
    logoSubtitle: "Solución Inyectable para Perros y Gatos",
    fullDescription: "<strong>PILERAN</strong> es un potente antiemético de acción central y periférica. El principio activo es la Metoclopramida, un potente antiemético central antagonista Dopa (D2) a nivel de la zona quimiorreceptora desencadenante. Periféricamente actúa como procinético gastrointestinal aumentando el tono y amplitud esofágica, y la contracción gástrica con relajación del esfínter pilórico, promoviendo el vaciamiento gástrico y aumentando la peristalsis duodenal.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de náuseas y vómitos en perros y gatos</li><li>Trastornos gastrointestinales que requieren procinética</li><li>Facilitar el vaciamiento gástrico</li><li>Mejorar la motilidad gastrointestinal</li><li>Infusión continua IV para casos severos</li></ul>",
    presentationTitle: "PILERAN INYECTABLE",
    presentationSubtitle: "Frasco ampolla por 50 ml",
    formula: "<strong>FÓRMULA</strong><br>Cada ml de solución inyectable contiene:<br>Metoclopramida Clorhidrato: 5 mg<br>Vehículo c.s.",
    dosage: "<strong>Dosificación:</strong><br><br><strong>Perros y Gatos (SC, IM, EV lenta):</strong> 1 ml/10 kg cada 6-8 horas<br><br><strong>Infusión continua IV:</strong> 1-2 mg/kg (1 ml cada 2,5-5 kg) cada 24 horas",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Doble acción: central y periférica",
    benefits: [
      { title: "", description: "Acción central: Antagonista Dopa (D2) a nivel de la zona quimiorreceptora desencadenante, bloqueando las señales de náusea y vómito" },
      { title: "", description: "Acción periférica: Procinético gastrointestinal que aumenta el tono y amplitud esofágica" },
      { title: "", description: "Promueve la contracción gástrica con relajación del esfínter pilórico" },
      { title: "", description: "Facilita el vaciamiento gástrico y aumenta la peristalsis duodenal" },
      { title: "", description: "Disponible para administración inyectable (SC, IM, IV) o infusión continua IV" }
    ],
    badge: null,
    variants: null,
    specialModal: null
  },
  "proteliv": {
    id: "proteliv",
    name: "Proteliv",
    category: "Hepatoprotector Colerético - Colagogo",
    categories: ["perros", "gatos", "gastrointestinal", "suplementos"],
    price: null,
    image: "images/placeholder.png",
    description: "Protege el hígado y mejora la secreción biliar.",
    logoSubtitle: "Solución Oral para Perros y Gatos",
    fullDescription: "<strong>PROTELIV</strong> es un hepatoprotector colerético y colagogo. La combinación de Sales biliares y Extracto fluído de Alcachofa, asociados con Colina y Nicotinamida, proporciona las siguientes acciones terapéuticas: <strong>Colerética</strong> (aumenta el flujo biliar desde la vesícula), <strong>Colagoga</strong> (aumenta la producción biliar por el hígado), <strong>Colecistocinética</strong> (promueve la excreción biliar desde la vesícula), <strong>Citoprotectora</strong>, <strong>Desintoxicante</strong> y <strong>Lipótropa</strong> (previene la infiltración grasa).",
    indication: "<strong>Indicado para:</strong><ul><li>Protección hepática en perros y gatos</li><li>Mejora de la secreción biliar</li><li>Trastornos hepáticos y biliares</li><li>Desintoxicación hepática</li><li>Prevención de infiltración grasa hepática</li></ul>",
    presentationTitle: "PROTELIV",
    presentationSubtitle: "Frasco gotero por 15 ml",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml contiene:<br>Nicotinamida: 2,5 g<br>Citrato de Colina: 5 g<br>Extracto fluído de Alcachofa: 5 g<br>Metilbromuro de Homatropina: 0,2 g<br>Dehidrocolato de Sodio: 0,25 g<br>Desoxicolato de Sodio: 0,25 g<br>Vehículo c.s.p.: 100 ml",
    dosage: "<strong>Dosificación:</strong><br><br><strong>Perros y Gatos:</strong> 10-20 gotas cada 12 horas",
    benefitsTitle: "Acciones Terapéuticas",
    benefitsSubtitle: "Múltiples beneficios para la salud hepática",
    benefits: [
      { title: "Colerética", description: "Aumenta el flujo biliar desde la vesícula biliar" },
      { title: "Colagoga", description: "Aumenta la producción biliar por el hígado" },
      { title: "Colecistocinética", description: "Promueve la excreción biliar desde la vesícula" },
      { title: "Citoprotectora", description: "Protege las células hepáticas del daño" },
      { title: "Desintoxicante", description: "Ayuda a eliminar toxinas del hígado" },
      { title: "Lipótropa", description: "Previene la infiltración grasa hepática" }
    ],
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
    name: "Anavimin Coat",
    category: "Dermocosmético • Modulador",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/anavimin.jpeg",
    description: "Nutricosméticos para una piel sana y un pelo hermoso.",
    logoSubtitle: "Modulador Dermacosmético",
    fullDescription: "<strong>Anavimin Coat</strong> es el biomodulador dérmico que se administra diariamente, para mantener la piel y el pelo saludable en animales de todas las edades. Las vitaminas, minerales y aminoácidos que lo componen, ayudan a restablecer la barrera dérmica y normalizan la producción de sebo. Es un excelente coadyuvante de las terapias específicas para las distintas dermopatías que padecen perros y gatos: dermatosis por deficiencias o desequilibrios nutricionales, alergias y atopías, estrés, lesiones dérmicas por piodermias tanto superficiales como profundas, por parasitosis externas como sarna sarcóptica o demodéctica, o por enfermedades autoinmunes.",
    indication: "<strong>Anavimin Coat es el complemento dermoprotector aliado en el tratamiento de todas las patologías de piel.</strong><br><br>Favorece la recuperación de la estructura y el metabolismo cutáneo, otorgando brillo y suavidad al manto piloso de perros y gatos de todas las edades.",
    presentationTitle: "Anavimin Coat",
    presentationSubtitle: "Comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Vitamina A: 5000 UI<br>Gluconato de Zinc: 30 mg<br>Vitamina B2 (Riboflavina): 2 mg<br>Ácido Ascórbico (Vitamina C): 150 mg<br>Vitamina E: 25 mg<br>Biotina: 1 mg<br>Pantotenato de Calcio (Vitamina B5): 15 mg<br>L-Cistina: 150 mg<br>Prolina: 75 mg<br>Excipientes c.s.",
    dosage: "<strong>Posología y administración:</strong><br><br><strong>Perros hasta 10 kg:</strong> 1/2 comprimido por día<br><strong>Perros de 10 a 30 kg:</strong> 1 comprimido por día<br><strong>Perros de más de 30 kg:</strong> 2 comprimidos por día<br><strong>Gatos:</strong> 1/4 a 1/2 comprimido por día",
    benefitsTitle: "Componentes Activos y sus Beneficios",
    benefitsSubtitle: "Cada ingrediente contribuye a la salud de la piel y el pelo",
    benefits: [
      { title: "Vitamina A", description: "Indispensable para la queratinización y diferenciación epidérmica, promueve la producción de sebo para la humedad y elasticidad de la piel, tiene propiedades antioxidantes y protege contra los radicales libres. Indicada para el tratamiento de dermatosis relacionadas con problemas de queratinización, sinergizada por zinc y cistina." },
      { title: "Vitamina C", description: "En conjunto con la Vitamina E, actúa como potente antioxidante contra los radicales libres, comunes en dermatosis inflamatorias. Esencial para la síntesis y regeneración del colágeno, ideal para la reparación de heridas." },
      { title: "Vitamina E", description: "Principalmente antioxidante. Utilizada en terapias para lupus, dermatomiositis, pénfigo, paniculitis, acantosis nigricans y vasculitis del margen auricular. Su presencia potencia la absorción de la Vitamina A." },
      { title: "Zinc", description: "Esencial para el desarrollo del pelo. Estimula la producción de glándulas sebáceas (sinergizado por Vitamina A). Involucrado en la división celular (como cofactor de las ADN polimerasas) y crucial para los procesos de cicatrización y reparación de la piel." },
      { title: "Cistina", description: "El principal aminoácido azufrado componente de la alfa-queratina. Proporciona los sustratos necesarios para una queratinización adecuada." },
      { title: "Biotina", description: "Una coenzima involucrada en procesos de carboxilación enzimática que promueven el crecimiento del pelo." },
      { title: "Riboflavina (Vit. B2)", description: "Componente de nucleótidos transportadores de protones, vitaminas y minerales para una piel y pelo más saludables. Crucial para la desaturación de ácidos grasos que forman lípidos de membrana como el ceramida." },
      { title: "Ácido Pantoténico (Vit. B5)", description: "Directamente relacionado con la síntesis de ácidos grasos, incluyendo el ácido linoleico. Como parte del ceramida cutáneo, ayuda a mantener una barrera dérmica saludable, reduciendo la entrada percutánea de alérgenos y ayudando en el cuidado de la piel de pacientes con dermatitis atópica." },
      { title: "Prolina", description: "El principal componente del colágeno, vital para la estructura dérmica correcta. Trabaja sinérgicamente con la Vitamina C y es muy importante para la cicatrización de heridas y la recuperación de dermopatías profundas. Junto con el ácido pantoténico, promueve la producción de ceramida, asegurando la integridad de la barrera cutánea." }
    ],
    badge: null,
    variants: null,
    specialModal: null
  },
  "apetil": {
    id: "apetil",
    name: "Apetil",
    category: "Anabólico - Orexígeno • Regulador del balance energético",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/apetil.jpg",
    description: "Estimula el apetito, acorta la convalecencia.",
    logoSubtitle: "Suspensión Oral para Perros y Gatos",
    fullDescription: "<strong>APETIL</strong> es un anabólico y orexígeno regulador del balance energético. El efecto orexigénico (estimulante del apetito) se debe a la Ciproheptadina, que mediante una acción antiserotoninérgica, inhibe la estimulación del centro de saciedad y permite que se estimule el centro del hambre. Esto se complementa con la acción anabólica del Estanozolol, que mejora el balance nitrogenado aumentando la biosíntesis proteica, y la DL-Carnitina, esencial para el transporte de ácidos grasos de cadena larga a través de la membrana mitocondrial para la producción de energía.",
    indication: "<strong>Indicado para:</strong><ul><li>Estimulación del apetito en perros y gatos inapetentes</li><li>Acortar el período de convalecencia</li><li>Mejora del balance nitrogenado</li><li>Aumento de la biosíntesis proteica</li><li>Regulación del balance energético</li><li>Animales convalecientes o con pérdida de apetito</li></ul>",
    presentationTitle: "APETIL",
    presentationSubtitle: "Frasco gotero por 10 ml",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml contiene:<br>Estanozolol: 0,4 g<br>Ciproheptadina Clorhidrato: 0,2 g<br>DL-Carnitina Clorhidrato: 7 g<br>Vehículo c.s.p.: 100 ml",
    dosage: "<strong>Dosificación:</strong><br><br><strong>Cachorros y Gatos:</strong> 10 gotas/día, semanas alternas<br><strong>Perros adultos:</strong> 20 gotas/día, semanas alternas",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Triple acción: orexigénica, anabólica y energética",
    benefits: [
      { title: "Efecto Orexigénico", description: "La Ciproheptadina, mediante acción antiserotoninérgica, inhibe la estimulación del centro de saciedad y permite que se estimule el centro del hambre, aumentando el apetito" },
      { title: "Acción Anabólica", description: "El Estanozolol mejora el balance nitrogenado aumentando la biosíntesis proteica, favoreciendo la recuperación y el crecimiento muscular" },
      { title: "Regulación Energética", description: "La DL-Carnitina es esencial para el transporte de ácidos grasos de cadena larga a través de la membrana mitocondrial para la producción de energía" },
      { title: "", description: "Fórmula combinada que estimula el apetito mientras mejora la síntesis proteica y el metabolismo energético" }
    ],
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

