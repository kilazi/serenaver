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
    fullDescription: "ACEDAN® es un tranquilizante que ayuda a calmar a su mascota sin causar sueño profundo.",
    indication: "Calmar a la mascota en situaciones estresantes\nFacilitar el manejo durante visitas veterinarias\nPrevenir náuseas y vómitos en viajes\nAliviar picazón en la piel\nPreparación para procedimientos médicos\nAyudar a reducir la presión arterial",
    presentationTitle: "ACEDAN GOTAS",
    presentationSubtitle: "Frasco gotero por 10 ml",
    formula: "Acepromacina Maleato 10 mg; Vehículo c.s.p. 1 ml",
    benefitsTitle: "Ventajas de ACEDAN®",
    benefitsSubtitle: "",
    benefits: [
      { title: "", description: "Fácil administración por vía oral" },
      { title: "", description: "Ayuda a proteger el corazón durante situaciones de estrés" },
      { title: "", description: "Reduce el movimiento excesivo, previniendo accidentes" },
      { title: "", description: "Puede usarse de forma segura con otros medicamentos" },
      { title: "", description: "Seguro y bien tolerado" }
    ],
    dosage: "Perros y Gatos: 1-3 gotas/kg. Iniciar con la dosis más baja y esperar 30 minutos. Reducir a la mitad en razas braquicefálicas, gigantes, galgos, animales geriátricos, debilitados o con enfermedad cardíaca o hepática.\n\nVía de administración: Oral\nTiempo de inicio: 30-45 minutos\nDuración: 8-12 horas",
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
    fullDescription: "ACEDAN® es un tranquilizante que ayuda a calmar a su mascota sin causar sueño profundo.",
    indication: "Calmar a la mascota en situaciones estresantes\nFacilitar el manejo durante visitas veterinarias\nPrevenir náuseas y vómitos en viajes\nAliviar picazón en la piel\nPreparación para procedimientos médicos\nAyudar a reducir la presión arterial",
    presentationTitle: "ACEDAN INYECTABLE",
    presentationSubtitle: "Frasco ampolla por 50 ml",
    formula: "Acepromacina Maleato 10 mg; Vehículo c.s.p. 1 ml",
    benefitsTitle: "Ventajas de ACEDAN®",
    benefitsSubtitle: "",
    benefits: [
      { title: "", description: "Administración rápida por el veterinario" },
      { title: "", description: "Ayuda a proteger el corazón durante situaciones de estrés" },
      { title: "", description: "Reduce el movimiento excesivo, previniendo accidentes" },
      { title: "", description: "Puede usarse de forma segura con otros medicamentos" },
      { title: "", description: "Seguro y bien tolerado" }
    ],
    dosage: "Perros y Gatos: 0,1 mg/Kg vía SC, IM o EV (lenta). No exceder 3 mg total vía IM o EV en perros y 1 mg total en felinos. Reducir a la mitad en razas braquicefálicas, gigantes, galgos, animales geriátricos, debilitados o con enfermedad cardíaca o hepática.\n\nEquinos: 1,5 ml cada 400 Kg vía EV, IM o SC\n\nVías de administración: SC, IM o EV\nTiempo de inicio: 10-15 minutos\nDuración: 8-12 horas\nMetabolismo: Hepático\nExcreción: Renal",
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
    image: "images/prednisolona.png",
    description: "Corticosteroide antiinflamatorio e inmunosupresor.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "PREDNISOLONA 20 MG",
    logoSubtitle: "Glucocorticoide Sintético",
    fullDescription: "Prednisolona 20 MG es un medicamento antiinflamatorio en comprimidos para tratar inflamación y alergias en perros y gatos.",
    indication: "Reducir inflamación\nTratar alergias\nAyudar en enfermedades del sistema inmunológico\nTratamiento de emergencia en casos graves",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con 10 comprimidos",
    formula: "Cada comprimido contiene: Prednisolona 20 mg; Excipientes c.s.",
    dosage: "Perros y Gatos: 0,5 a 1 mg por kg de peso corporal, cada 12 a 24 horas, según indicación veterinaria.\n\nVía de administración: Oral\nContraindicaciones: No administrar en infecciones sistémicas sin tratamiento adecuado, úlceras gastrointestinales, diabetes mellitus, insuficiencia renal o cardíaca severa.\nEfectos colaterales: Poliuria, polidipsia, polifagia, supresión del eje hipotalámico-hipofisario-adrenal.\nRestricciones: No utilizar en hembras gestantes o lactantes sin supervisión veterinaria.",
    benefitsTitle: "Beneficios",
    benefitsSubtitle: "",
    benefits: [
      { title: "", description: "Reduce eficazmente la inflamación aguda y crónica" },
      { title: "", description: "Ayuda a controlar enfermedades del sistema inmunológico" },
      { title: "", description: "Se absorbe bien cuando se administra por vía oral" },
      { title: "", description: "Dosis ajustable según las necesidades de su mascota" }
    ]
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
    description: "El complemento ideal en el tratamiento de las cardiopatías caninas.",
    badge: null,
    variants: [
      { name: "x30", price: null, image: "images/DIURENE-100-COMP.webp" },
      { name: "x100 Hospitalario", price: null, image: "images/DIURENE-100-COMP.webp" }
    ],
    specialModal: null,
    // Extended modal info
    logoText: "DIURENE 40°",
    logoSubtitle: "FUROSEMIDA 40 mg",
    fullDescription: "Diurene 40® ayuda a eliminar el exceso de líquido del cuerpo, especialmente útil en mascotas con problemas cardíacos.",
    indication: "Reducir acumulación de líquido por problemas cardíacos\nTratar hinchazón en los tejidos\nAyudar a controlar la presión arterial alta\nCorregir desequilibrios de minerales",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "",
    formula: "Cada comprimido contiene: Furosemida 40 mg; Excipientes c.s.",
    dosage: "Vía oral / Perros: 2 a 4 mg/kg cada 8 a 12 horas. Equivalente a 1 comprimido cada 20 kg o 10 kg respectivamente.\n\nNota: La dosis debe ser ajustada según la respuesta individual. Se sugiere fomentar la ingesta de alimento y agua.",
    benefitsTitle: "Características",
    benefitsSubtitle: "",
    benefits: [
      { title: "", description: "Elimina eficazmente el exceso de líquido en problemas cardíacos" },
      { title: "", description: "Reduce la carga de trabajo del corazón" },
      { title: "", description: "Comienza a actuar rápidamente, en aproximadamente 30 minutos" },
      { title: "", description: "Funciona en diferentes condiciones del organismo" },
      { title: "", description: "Complemento útil en el tratamiento de enfermedades cardíacas" }
    ]
  },
  "toracard": {
    id: "toracard",
    name: "Toracard",
    category: "Cardiología • Cardiotónico",
    categories: ["perros", "gatos", "cardiologia"],
    price: null,
    image: "images/toracard.jpg",
    description: "Cardiotónico para insuficiencia cardíaca congestiva.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "TORACARD",
    logoSubtitle: "Cardiotónico",
    fullDescription: "Toracard ayuda a fortalecer el corazón y mejorar su funcionamiento en perros con problemas cardíacos.",
    indication: "Tratamiento de insuficiencia cardíaca en perros\nMejorar la fuerza de contracción del corazón\nDilatar los vasos sanguíneos para facilitar la circulación",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con 30 comprimidos",
    formula: "Cada comprimido contiene: Pimobendan 5 mg; Excipientes c.s.",
    dosage: "Perros: 0,25 mg por kg de peso corporal, cada 12 horas.\n\nVía de administración: Oral\nContraindicaciones: No administrar en casos de cardiomiopatía hipertrófica o estenosis aórtica.\nEfectos colaterales: Pueden presentarse vómitos, diarrea, anorexia, letargia.\nRestricciones: Usar con precaución en animales con insuficiencia renal o hepática. No utilizar en hembras gestantes o lactantes sin supervisión veterinaria.",
    benefitsTitle: "Beneficios",
    benefitsSubtitle: "",
    benefits: [
      { title: "", description: "Fortalece el corazón y mejora su capacidad de bombeo" },
      { title: "", description: "Dilata los vasos sanguíneos, facilitando la circulación y reduciendo el esfuerzo del corazón" },
      { title: "", description: "Combina dos acciones beneficiosas: fortalece el corazón y mejora la circulación" },
      { title: "", description: "Generalmente bien tolerado con pocos efectos secundarios" }
    ]
  },

  // ============================================
  // ANTIPARASITARIOS
  // ============================================
  "ecthol-collar-gatos": {
    id: "ecthol-collar-gatos",
    name: "Ecthol Collar Gatos",
    category: "Antiparasitarios • Collar",
    categories: ["gatos", "antiparasitarios"],
    price: null,
    image: "images/ecthol-collar-gatos.png",
    description: "La alternativa más efectiva para el control de pulgas y garrapatas en gatos.",
    badge: "Gatos",
    variants: [
      { name: "40 CM", price: null, image: "images/ecthol-collar-gatos.png" }
    ],
    specialModal: null,
    // Extended modal info
    logoText: "ECTHOL",
    logoSubtitle: "Collar / Antipulgas y garrapatas",
    fullDescription: "El Collar Ecthol protege a su gato contra pulgas y garrapatas durante varios meses, ideal para gatos que salen al exterior.",
    indication: "Eliminar y prevenir pulgas\nEliminar y prevenir garrapatas\nProtección continua en exteriores\nEfectivo en climas cálidos y húmedos\nPreviene el desarrollo de pulgas y garrapatas jóvenes",
    presentationTitle: "ECTHOL COLLAR GATOS",
    presentationSubtitle: "40 CM",
    formula: "Collar con liberación controlada de Clorpirifós",
    dosage: "El collar libera de forma constante su principio activo, logrando alta efectividad en la eliminación de pulgas y garrapatas. La temperatura corporal activa la liberación gradual del principio activo sobre el manto, protegiendo por tiempo prolongado.",
    benefitsTitle: "Características",
    benefitsSubtitle: "",
    benefits: [
      { title: "Acción Controlada", description: "Libera el principio activo gradualmente durante hasta 10 meses, manteniendo su efectividad incluso en climas extremos. También ayuda a mejorar el pelaje dañado por pulgas y garrapatas." },
      { title: "Máxima Seguridad", description: "Mecanismo de cierre seguro que protege a su gato en caso de enganches accidentales." },
      { title: "Diseño Innovador", description: "Collar discreto que se integra con el pelaje de su gato y es fácil de ajustar." },
      { title: "Fácil Colocación", description: "Ajuste el collar al cuello de su gato sin apretar, dejando espacio para dos dedos. Puede cortar el excedente si es necesario." },
      { title: "Protección Prolongada", description: "Protección continua durante varios meses." }
    ]
  },
  "ecthol-collar-perros": {
    id: "ecthol-collar-perros",
    name: "Ecthol Collar Perros",
    category: "Antiparasitarios • Collar",
    categories: ["perros", "antiparasitarios"],
    price: null,
    image: "images/ecthol-collar.png",
    description: "La alternativa más efectiva para el control de pulgas y garrapatas en perros.",
    badge: "Perros",
    variants: [
      { name: "40 CM", price: null, image: "images/ecthol-collar.png" },
      { name: "63 CM", price: null, image: "images/ecthol-collar.png" }
    ],
    specialModal: null,
    // Extended modal info
    logoText: "ECTHOL",
    logoSubtitle: "Collar / Antipulgas y garrapatas",
    fullDescription: "El Collar Ecthol protege a su perro contra pulgas y garrapatas durante varios meses, ideal para perros que pasan tiempo al aire libre.",
    indication: "Eliminar y prevenir pulgas\nEliminar y prevenir garrapatas\nProtección continua en exteriores\nEfectivo en climas cálidos y húmedos\nPreviene el desarrollo de pulgas y garrapatas jóvenes\nAyuda a prevenir enfermedades transmitidas por estos parásitos",
    presentationTitle: "ECTHOL COLLAR PERROS",
    presentationSubtitle: "40 CM / 63 CM",
    formula: "Collar con liberación controlada de Clorpirifós",
    dosage: "El collar libera de forma constante su principio activo, logrando alta efectividad en la eliminación de pulgas y garrapatas. La temperatura corporal activa la liberación gradual del principio activo sobre el manto, protegiendo por tiempo prolongado.",
    benefitsTitle: "Características",
    benefitsSubtitle: "",
    benefits: [
      { title: "", description: "Libera el principio activo gradualmente durante hasta 10 meses, incluso en climas extremos" },
      { title: "", description: "Mecanismo de cierre seguro que protege a su perro en caso de enganches accidentales" },
      { title: "", description: "Diseño discreto que se integra con el pelaje de su perro" },
      { title: "", description: "Fácil de colocar: ajuste al cuello sin apretar, dejando espacio para dos dedos" },
      { title: "", description: "Protección continua contra pulgas y garrapatas durante varios meses" }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "ECTHOL GMP GATOS",
    logoSubtitle: "Pipeta Antiparasitaria Externa",
    fullDescription: "Ecthol GMP Gatos es una pipeta que protege a su gato contra pulgas y garrapatas durante un mes.",
    indication: "Eliminar y prevenir pulgas\nEliminar y prevenir garrapatas\nPrevenir nuevas infestaciones\nTratar infestaciones existentes",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Pipetas según peso del gato",
    formula: "Cada pipeta contiene: Fipronil 10%; (S)-Metopreno 12%; Vehículo c.s.",
    dosage: "Gatos: Aplicar una pipeta completa sobre la piel, separando el pelo en la línea dorsal entre los omóplatos. Asegurar contacto directo con la piel.\n\nVía de administración: Tópica (spot-on)\nFrecuencia: Aplicar mensualmente\nContraindicaciones: No administrar en gatitos menores de 8 semanas de edad ni en gatos con hipersensibilidad a los componentes.\nPrecauciones: No bañar al animal 48 horas antes ni después de la aplicación.",
    benefitsTitle: "Beneficios",
    benefitsSubtitle: "",
    benefits: [
      { title: "", description: "Elimina pulgas adultas y previene el desarrollo de pulgas jóvenes" },
      { title: "", description: "Protección durante 4 semanas contra pulgas y garrapatas" },
      { title: "", description: "Aplicación simple y rápida en la parte superior del cuello" },
      { title: "", description: "Formulación segura específicamente para gatos" }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "ECTHOL GMP PERROS",
    logoSubtitle: "Pipeta Antiparasitaria Externa",
    fullDescription: "Ecthol GMP Perros es una pipeta que protege a su perro contra pulgas y garrapatas durante un mes.",
    indication: "Eliminar y prevenir pulgas\nEliminar y prevenir garrapatas\nPrevenir nuevas infestaciones\nTratar infestaciones existentes",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Pipetas según peso del perro (5 kg, 6-10 kg, 11-20 kg, 21-40 kg)",
    formula: "Cada pipeta contiene: Fipronil 10%; (S)-Metopreno 9%; Vehículo c.s.",
    dosage: "Perros: Aplicar una pipeta completa sobre la piel, separando el pelo en la línea dorsal entre los omóplatos. Asegurar contacto directo con la piel. Seleccionar la pipeta según el peso del perro.\n\nVía de administración: Tópica (spot-on)\nFrecuencia: Aplicar mensualmente\nContraindicaciones: No administrar en cachorros menores de 8 semanas de edad ni en perros con hipersensibilidad a los componentes.\nPrecauciones: No bañar al animal 48 horas antes ni después de la aplicación.",
    benefitsTitle: "Beneficios",
    benefitsSubtitle: "",
    benefits: [
      { title: "Doble Acción", description: "Elimina pulgas adultas y previene el desarrollo de pulgas jóvenes." },
      { title: "Protección Prolongada", description: "Protección durante 4 semanas contra pulgas y garrapatas." },
      { title: "Múltiples Tamaños", description: "Diferentes presentaciones según el peso de su perro para una dosificación precisa." },
      { title: "Fácil Aplicación", description: "Aplicación simple y rápida en la parte superior del cuello." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "ECTHOL HALO COLLAR",
    logoSubtitle: "Collar Antiparasitario Premium",
    fullDescription: "Ecthol Halo Collar Perros es un collar que protege a su perro contra pulgas, garrapatas y repele moscas y mosquitos durante hasta 8 meses.",
    indication: "Eliminar y prevenir pulgas\nEliminar y prevenir garrapatas\nRepeler moscas y mosquitos\nAyudar a prevenir enfermedades transmitidas por estos insectos\nProtección prolongada",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Collar según peso del perro (Menos de 10 kg / Más de 10 kg)",
    formula: "<strong>FÓRMULA</strong><br>Collar con liberación controlada de:<br>Deltametrina: 4%<br>Polímero de liberación prolongada",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Colocar el collar alrededor del cuello del perro, ajustándolo para que quede cómodo pero en contacto con la piel. Dejar espacio para dos dedos entre el collar y el cuello. El excedente puede cortarse.<br><br><strong>Vía de administración:</strong> Tópica (collar)<br><strong>Duración:</strong> Hasta 8 meses de protección<br><strong>Contraindicaciones:</strong> No utilizar en cachorros menores de 7 semanas de edad ni en perros con hipersensibilidad a la deltametrina.<br><strong>Precauciones:</strong> No mojar el collar durante las primeras 24 horas después de la colocación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Ecthol Halo Collar la mejor opción",
    benefits: [
      { title: "Protección Prolongada", description: "Protección continua durante hasta 8 meses contra pulgas y garrapatas." },
      { title: "Repelente", description: "No solo elimina parásitos, sino que también repele moscas y mosquitos." },
      { title: "Liberación Controlada", description: "Libera el principio activo gradualmente, manteniendo la protección durante todo el período." },
      { title: "Fácil Uso", description: "Collar cómodo y fácil de colocar, con mecanismo de seguridad." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "ECTHOLANER",
    logoSubtitle: "Antiparasitario Oral de Acción Sistémica",
    fullDescription: "Ectholaner Comprimidos Perros es un antiparasitario en comprimidos masticables que protege a su perro contra pulgas y garrapatas desde el interior del organismo.",
    indication: "Eliminar y prevenir pulgas\nEliminar y prevenir garrapatas\nTratar infestaciones existentes\nPrevenir nuevas infestaciones",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Comprimidos masticables según peso del perro",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Afoxolaner: según presentación (11.3 mg, 28.3 mg, 68 mg, 136 mg)<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Administrar un comprimido masticable según el peso del perro. Puede administrarse con o sin alimento. Seleccionar la presentación adecuada según el peso corporal.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Frecuencia:</strong> Administrar mensualmente<br><strong>Contraindicaciones:</strong> No administrar en cachorros menores de 8 semanas de edad ni en perros con hipersensibilidad al afoxolaner.<br><strong>Precauciones:</strong> No administrar en perros con epilepsia sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Ectholaner la mejor opción",
    benefits: [
      { title: "Acción Sistémica", description: "Protege a todo el cuerpo de su perro, no solo un área específica." },
      { title: "Comprimidos Masticables", description: "Comprimidos con sabor agradable que facilitan la administración." },
      { title: "Rápida Eficacia", description: "Comienza a actuar rápidamente, eliminando pulgas en 8 horas y garrapatas en 12 horas." },
      { title: "Protección Mensual", description: "Una dosis mensual proporciona protección durante todo el mes." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "ECTHONIL GATOS",
    logoSubtitle: "Antiparasitario Spot-on",
    fullDescription: "Ecthonil Gatos es una pipeta que protege a su gato contra pulgas y garrapatas durante un mes.",
    indication: "Eliminar y prevenir pulgas\nEliminar y prevenir garrapatas\nTratar infestaciones existentes\nPrevenir nuevas infestaciones",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Pipetas spot-on",
    formula: "<strong>FÓRMULA</strong><br>Cada pipeta contiene:<br>Fipronil: 10%<br>Vehículo c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> Aplicar una pipeta completa sobre la piel, separando el pelo en la línea dorsal entre los omóplatos. Asegurar contacto directo con la piel.<br><br><strong>Vía de administración:</strong> Tópica (spot-on)<br><strong>Frecuencia:</strong> Aplicar mensualmente<br><strong>Contraindicaciones:</strong> No administrar en gatitos menores de 8 semanas de edad ni en gatos con hipersensibilidad al fipronil.<br><strong>Precauciones:</strong> No bañar al animal 48 horas antes ni después de la aplicación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Ecthonil Gatos la mejor opción",
    benefits: [
      { title: "Fipronil", description: "Principio activo efectivo contra pulgas y garrapatas." },
      { title: "Protección Prolongada", description: "Protección durante 4 semanas contra pulgas y garrapatas." },
      { title: "Fácil Aplicación", description: "Aplicación simple y rápida en la parte superior del cuello." },
      { title: "Seguro para Gatos", description: "Formulación segura específicamente para gatos." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "ECTHONIL PERROS",
    logoSubtitle: "Antiparasitario Spot-on",
    fullDescription: "Ecthonil Perros es una pipeta que protege a su perro contra pulgas y garrapatas durante un mes.",
    indication: "Eliminar y prevenir pulgas\nEliminar y prevenir garrapatas\nTratar infestaciones existentes\nPrevenir nuevas infestaciones",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Pipetas spot-on según peso del perro",
    formula: "<strong>FÓRMULA</strong><br>Cada pipeta contiene:<br>Fipronil: 10%<br>Vehículo c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Aplicar una pipeta completa sobre la piel, separando el pelo en la línea dorsal entre los omóplatos. Asegurar contacto directo con la piel. Seleccionar la pipeta según el peso del perro.<br><br><strong>Vía de administración:</strong> Tópica (spot-on)<br><strong>Frecuencia:</strong> Aplicar mensualmente<br><strong>Contraindicaciones:</strong> No administrar en cachorros menores de 8 semanas de edad ni en perros con hipersensibilidad al fipronil.<br><strong>Precauciones:</strong> No bañar al animal 48 horas antes ni después de la aplicación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Ecthonil Perros la mejor opción",
    benefits: [
      { title: "Fipronil", description: "Principio activo efectivo contra pulgas y garrapatas." },
      { title: "Protección Prolongada", description: "Protección durante 4 semanas contra pulgas y garrapatas." },
      { title: "Múltiples Tamaños", description: "Diferentes presentaciones según el peso de su perro para una dosificación precisa." },
      { title: "Fácil Aplicación", description: "Aplicación simple y rápida en la parte superior del cuello." }
    ]
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
    category: "Suplementos • Biomodulador Detoxificante",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/nomat.jpeg",
    description: "Biomodulador detoxificante y antioxidante a base de clorofila, con acción desodorizante corporal y bucal.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "NOMAT",
    logoSubtitle: "/ Biomodulador detoxificante y antioxidante",
    fullDescription: "Nomat es un suplemento natural a base de clorofila que ayuda a reducir el mal olor bucal y corporal de su mascota.",
    indication: "Reducir el mal aliento\nReducir el olor corporal\nEliminar olores desagradables\nEn hembras, reducir el olor durante el celo y desodorizar la orina\nMejorar la salud bucal",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envase conteniendo 2 blisters con 10 comprimidos cada uno",
    formula: "<strong>FÓRMULA</strong><br>Biomodulador a base de clorofila",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características que hacen de Nomat un biomodulador de elección",
    benefits: [
      { title: "Desintoxicante y Antioxidante", description: "Ayuda a oxigenar los tejidos y crear un ambiente desfavorable para bacterias que causan mal olor." },
      { title: "Acción Catalizadora", description: "Neutraliza sustancias que causan olores desagradables." },
      { title: "Procesos Metabólicos", description: "Ayuda a los procesos naturales del organismo que reducen el olor corporal y bucal." },
      { title: "Antioxidante Poderoso", description: "Mejora la salud digestiva e inmunológica de su mascota." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "TOTAL FULL CG",
    logoSubtitle: "Antiparasitario Interno de Amplio Espectro",
    fullDescription: "Total Full CG Perros y Gatos es un antiparasitario interno en comprimidos para eliminar parásitos intestinales en cachorros y gatitos.",
    indication: "Eliminar y prevenir gusanos planos\nEliminar y prevenir gusanos redondos\nDesparasitar cachorros y gatitos\nTratar infestaciones parasitarias",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con 2 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Antiparasitario de amplio espectro con acción contra cestodes y nematodes.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros y Gatos:</strong> Según indicación veterinaria, según peso y edad del animal.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.<br><strong>Restricciones:</strong> No administrar en cachorros o gatitos menores de la edad recomendada.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Total Full CG la mejor opción",
    benefits: [
      { title: "Amplio Espectro", description: "Efectivo contra una amplia variedad de parásitos intestinales." },
      { title: "Para Cachorros y Gatitos", description: "Formulación segura y adecuada para animales jóvenes." },
      { title: "Comprimidos Palatables", description: "Fácil administración gracias a su sabor agradable." },
      { title: "Tratamiento Completo", description: "Solución completa para la desparasitación de cachorros y gatitos." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "TOTAL FULL LC PERROS",
    logoSubtitle: "Antiparasitario Interno de Liberación Prolongada",
    fullDescription: "Total Full LC Perros es un antiparasitario interno en comprimidos que elimina parásitos intestinales en perros con acción prolongada.",
    indication: "Eliminar y prevenir gusanos planos\nEliminar y prevenir gusanos redondos\nDesparasitar perros\nTratar infestaciones parasitarias",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envase con 1 blister de 2 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Fenbendazol: 200 mg<br>Pamoato de Pirantel: 80 mg<br>Praziquantel: 20 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> 1 comprimido por cada 4 kg de peso corporal en una sola administración. En infestaciones severas, repetir la dosis después de 24 horas. Repetir la desparasitación a los 15-21 días.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.<br><strong>Efectos colaterales:</strong> Ocasionalmente, puede presentarse hipersalivación, náuseas, vómitos o diarrea, que remiten espontáneamente.<br><strong>Restricciones:</strong> No administrar en cachorros menores de 20 días.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Total Full LC Perros la mejor opción",
    benefits: [
      { title: "Liberación Prolongada", description: "Libera el principio activo gradualmente para una acción sostenida contra los parásitos." },
      { title: "Amplio Espectro", description: "Efectivo contra diferentes tipos de parásitos intestinales gracias a su combinación de principios activos." },
      { title: "Comprimidos Ranurados", description: "Comprimidos que se pueden dividir fácilmente para ajustar la dosis según el peso de su perro." },
      { title: "Palatable", description: "Sabor agradable que facilita la administración." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "TOTAL FULL LC GATOS",
    logoSubtitle: "Antiparasitario Interno de Liberación Prolongada",
    fullDescription: "Total Full LC Gatos es un antiparasitario interno en comprimidos que elimina parásitos intestinales en gatos con acción prolongada.",
    indication: "Eliminar y prevenir gusanos planos\nEliminar y prevenir gusanos redondos\nDesparasitar gatos\nTratar infestaciones parasitarias",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envase con 1 blister de 2 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Fenbendazol: 200 mg<br>Pamoato de Pirantel: 80 mg<br>Praziquantel: 20 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> 1 comprimido por cada 4 kg de peso corporal en una sola administración. En infestaciones severas, repetir la dosis después de 24 horas. Repetir la desparasitación a los 15-21 días.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.<br><strong>Efectos colaterales:</strong> Ocasionalmente, puede presentarse hipersalivación, náuseas, vómitos o diarrea, que remiten espontáneamente.<br><strong>Restricciones:</strong> No administrar en gatitos menores de 20 días ni en gatas preñadas hasta el día 41 de gestación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Total Full LC Gatos la mejor opción",
    benefits: [
      { title: "Liberación Prolongada", description: "Libera el principio activo gradualmente para una acción sostenida contra los parásitos." },
      { title: "Amplio Espectro", description: "Efectivo contra diferentes tipos de parásitos intestinales gracias a su combinación de principios activos." },
      { title: "Comprimidos Ranurados", description: "Comprimidos que se pueden dividir fácilmente para ajustar la dosis según el peso de su gato." },
      { title: "Palatable", description: "Sabor agradable que facilita la administración en gatos." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "TOTAL FULL SUSPENSIÓN GATOS",
    logoSubtitle: "Antiparasitario Interno en Suspensión Oral",
    fullDescription: "Total Full Suspensión Gatos es un antiparasitario interno en suspensión líquida para eliminar parásitos intestinales en gatos.",
    indication: "Eliminar gusanos planos\nEliminar gusanos redondos\nDesparasitar gatos\nTratar infestaciones parasitarias",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Frasco de 15 ml con jeringa dosificadora",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de suspensión contiene:<br>Fenbendazol: 5 g<br>Pamoato de Pirantel: 2 g<br>Praziquantel: 0,5 g<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> 1 ml por kg de peso corporal en una sola administración. En infestaciones severas, repetir la dosis después de 24 horas. Repetir la desparasitación a los 15-21 días.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.<br><strong>Efectos colaterales:</strong> Ocasionalmente, puede presentarse hipersalivación, náuseas, vómitos o diarrea, que remiten espontáneamente.<br><strong>Restricciones:</strong> No administrar en gatitos menores de 20 días ni en gatas preñadas hasta el día 41 de gestación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Total Full Suspensión Gatos la mejor opción",
    benefits: [
      { title: "Suspensión Oral", description: "Formulación líquida que facilita la administración en gatos." },
      { title: "Amplio Espectro", description: "Efectivo contra diferentes tipos de parásitos intestinales gracias a su combinación de principios activos." },
      { title: "Jeringa Dosificadora", description: "Incluye jeringa dosificadora para facilitar la administración precisa según el peso de su gato." },
      { title: "Fácil Administración", description: "Formulación líquida que facilita la administración en gatos de todas las edades." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "TOTAL FULL SUSPENSIÓN PERROS",
    logoSubtitle: "Antiparasitario Interno en Suspensión Oral",
    fullDescription: "Total Full Suspensión Perros es un antiparasitario interno en suspensión líquida para eliminar parásitos intestinales y protozoarios en perros.",
    indication: "Eliminar gusanos redondos\nEliminar protozoarios como Giardia\nDesparasitar perros\nTratar infestaciones parasitarias",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Frasco de 15 ml con jeringa dosificadora",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de suspensión contiene:<br>Fenbendazol: 5 g<br>Pamoato de Pirantel: 0,5 g<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> 1 ml por kg de peso corporal en una sola administración. En infestaciones severas, repetir la dosis después de 24 horas. Repetir la desparasitación a los 15-21 días. Para el tratamiento de Giardia spp., administrar 1 ml/kg/día durante 3 días.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.<br><strong>Efectos colaterales:</strong> Ocasionalmente, puede presentarse hipersalivación, náuseas, vómitos o diarrea, que remiten espontáneamente.<br><strong>Restricciones:</strong> No administrar en cachorros menores de 20 días.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Total Full Suspensión Perros la mejor opción",
    benefits: [
      { title: "Suspensión Oral", description: "Formulación líquida que facilita la administración en perros." },
      { title: "Amplio Espectro", description: "Efectivo contra gusanos redondos y protozoarios, incluyendo Giardia." },
      { title: "Jeringa Dosificadora", description: "Incluye jeringa dosificadora para facilitar la administración precisa según el peso de su perro." },
      { title: "Tratamiento de Giardia", description: "Especialmente efectivo en el tratamiento de Giardia con un esquema de 3 días." }
    ]
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
    fullDescription: "Ciclosporina 1% es un ungüento oftálmico que ayuda a tratar problemas oculares relacionados con la falta de lágrimas y la inflamación.",
    indication: "Tratar ojo seco (queratoconjuntivitis seca)\nTratar inflamación crónica de la córnea (pannus)\nTratar conjuntivitis\nTratar otras inflamaciones oculares",
    presentationTitle: "Presentación Disponible",
    presentationSubtitle: "Pomo con 3,5 g. con aplicador oftálmico",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 g de ungüento contiene:<br>Ciclosporina A (USP)...............1 g<br>Excipientes c.s.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Ciclosporina 1% ofrece múltiples beneficios para el tratamiento de afecciones oculares",
    benefits: [
      { title: "Inmunomodulador", description: "Ayuda a regular el sistema inmunológico del ojo. Formulación de alta calidad que garantiza la pureza y eficacia." },
      { title: "Lacrimomimético", description: "Ayuda a restaurar la producción de lágrimas y mejora la lubricación del ojo en casos de ojo seco." },
      { title: "Antiinflamatorio", description: "Reduce la inflamación ocular, mejorando el confort y la salud del ojo." },
      { title: "Solución Efectiva", description: "Ofrece una solución efectiva para tratar problemas oculares relacionados con la falta de lágrimas y otras enfermedades inmunológicas." }
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
    fullDescription: "Ciclosporina 2% es un colirio que ayuda a tratar problemas oculares relacionados con la falta de lágrimas y la inflamación.",
    indication: "Tratar ojo seco (queratoconjuntivitis seca)\nTratar inflamación crónica de la córnea (pannus)\nAyudar a producir más lágrimas\nReducir la inflamación ocular",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "NUEVO",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml contiene:<br>Ciclosporina A...............2 g<br>Excipientes c.s.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Ciclosporina 2% ofrece múltiples beneficios para el tratamiento de afecciones oculares",
    benefits: [
      { title: "Inmunomodulador", description: "Ayuda a regular el sistema inmunológico del ojo. Formulación de alta calidad que garantiza la pureza y eficacia." },
      { title: "Lacrimomimético y Antiinflamatorio", description: "Ayuda a promover la producción de lágrimas y reduce la inflamación en el ojo, disminuyendo el enrojecimiento y el malestar." },
      { title: "Mejora la Calidad Ocular", description: "Al aumentar la producción de lágrimas y reducir la inflamación, mejora significativamente la salud ocular de perros y gatos." }
    ]
  },
  "colirama-viral": {
    id: "colirama-viral",
    name: "Colirama Viral",
    category: "Oftalmología • Antiviral",
    categories: ["perros", "gatos", "oftalmologia"],
    price: null,
    image: "images/colirama-viral-10ml-colirama-viral-10ml.jpg",
    description: "Colirio estéril a base de idoxuridina, fenazona, nafazolina.",
    logoSubtitle: "Antiviral, Antiinflamatorio y Descongestivo",
    fullDescription: "Colirama Viral es un colirio que combina acción antiviral, antiinflamatoria y descongestiva para tratar infecciones oculares virales y bacterianas.",
    indication: "Tratar infecciones oculares virales en gatos\nTratar infecciones oculares bacterianas\nTratar inflamación de la córnea y conjuntiva\nTratar infecciones oculares con inflamación",
    presentationTitle: "Colirama Viral",
    presentationSubtitle: "Frasco gotero de 10 ml, con aplicador atraumático",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de la suspensión contiene:<br>Idoxuridina: 100 mg<br>Fenazona: 400 mg<br>Clorhidrato de Nafazolina: 50 mg<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Acción Terapéutica",
    benefitsSubtitle: "Triple acción: antiviral, antiinflamatoria y descongestiva",
    benefits: [
      { title: "Antiviral", description: "Inhibe la replicación de virus que causan infecciones oculares." },
      { title: "Antiinflamatorio no esteroide", description: "Reduce la inflamación ocular sin usar esteroides." },
      { title: "Descongestivo", description: "Reduce el enrojecimiento y la congestión ocular rápidamente." }
    ],
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
    description: "Estimulante de actividad regenerativa de la córnea. Humectante. Antioxidante.",
    badge: "-25%",
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "EPITELIZANTE OCULAR",
    logoSubtitle: "/ Estimulante de actividad regenerativa de la córnea. Humectante. Antioxidante.",
    fullDescription: "Epitelizante Ocular es un ungüento a base de vitaminas A y E que ayuda a regenerar y proteger la córnea del ojo.",
    indication: "Tratar úlceras en la córnea\nAyudar a regenerar el tejido ocular\nHumectar el ojo en casos de ojo seco\nProteger y nutrir la córnea",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Pomo con 3,5 g. con aplicador oftálmico",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 g de ungüento contiene:<br>Caseína hidrolizada...................2,5 g<br>Vitamina A palmitato..................1 g<br>Vitamina E acetato....................0,1 g<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Componentes Activos",
    benefitsSubtitle: "Características que hacen de Epitelizante Ocular un tratamiento de elección",
    benefits: [
      { title: "Vitamina A", description: "Esencial para la salud del tejido ocular. Ayuda a mantener la humedad y la función normal de la córnea." },
      { title: "Vitamina E", description: "Antioxidante que protege las células del ojo de daños, contribuyendo a la salud de la córnea y la conjuntiva." },
      { title: "Caseína Hidrolizada", description: "Proporciona nutrientes esenciales para la reparación y regeneración del tejido ocular, ayudando en la cicatrización de úlceras." }
    ]
  },
  "flurbiprofeno": {
    id: "flurbiprofeno",
    name: "Flurbiprofeno Oftalday",
    category: "Oftalmología • Antiinflamatorio",
    categories: ["perros", "gatos", "oftalmologia"],
    price: null,
    image: "images/flurbiprofeno.jpg",
    description: "Antiinflamatorio no esteroide de última generación para uso oftálmico.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "FLURBIPROFENO",
    logoSubtitle: "/ Antiinflamatorio no esteroide de última generación.",
    fullDescription: "Flurbiprofeno es un colirio antiinflamatorio que ayuda a reducir la inflamación y el dolor ocular.",
    indication: "Tratar conjuntivitis\nTratar inflamación del interior del ojo (uveitis)\nUsar durante cirugías oculares\nTratar después de reparar úlceras corneales\nAliviar dolor ocular\nUsar cuando no se pueden usar esteroides\nUsar junto con esteroides en casos graves",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml contiene:<br>Flurbiprofeno...............0,1 g<br>Excipientes c.s.",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características del Flurbiprofeno",
    benefits: [
      { title: "Antiinflamatorio No Esteroideo", description: "Reduce la inflamación sin usar esteroides, bloqueando sustancias que causan inflamación." },
      { title: "Eficacia", description: "Efectivo para reducir la inflamación y el dolor, proporcionando alivio rápido en diversas condiciones oculares." },
      { title: "Inicio de Acción Rápido", description: "Comienza a actuar rápidamente, proporcionando alivio en poco tiempo, importante para condiciones agudas y mejorar el confort de su mascota." }
    ]
  },
  "ofloxacina": {
    id: "ofloxacina",
    name: "Ofloxacina Oftalday",
    category: "Oftalmología • Antibiótico",
    categories: ["perros", "gatos", "oftalmologia", "antibioticos"],
    price: null,
    image: "images/ofloxacina.jpg",
    description: "Colirio estéril a base de Ofloxacina, fluoroquinolona de última generación.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "OFLOXACINA",
    logoSubtitle: "/ Antibiótico",
    fullDescription: "Ofloxacina es un colirio antibiótico de última generación para tratar infecciones oculares bacterianas.",
    indication: "Tratar conjuntivitis bacteriana\nTratar úlceras en la córnea\nTratar infecciones secundarias en ojo seco\nUsar antes y después de cirugías oculares",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de solución contiene:<br>Ofloxacina: 0,3 g<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características que hacen de Ofloxacina un antibiótico de elección",
    benefits: [
      { title: "Ofloxacina", description: "Antibiótico de amplio espectro efectivo contra muchas bacterias, incluyendo algunas resistentes. Penetra bien en los tejidos oculares." },
      { title: "Solubilidad Óptima", description: "Se mantiene bien en solución, asegurando una concentración adecuada en las lágrimas." },
      { title: "Eficacia", description: "Efectivo contra bacterias resistentes a otros antibióticos, importante para infecciones recurrentes o difíciles de tratar." },
      { title: "HPMC (Hidroxipropil Metilcelulosa)", description: "Mejora la película lagrimal y ayuda a que el medicamento permanezca más tiempo en el ojo." }
    ]
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
    description: "Shampoo de acción antiséptica y antiseborreico oleosa.",
    fullDescription: "Dermoxil es un shampoo antiséptico que ayuda a tratar problemas de piel como seborrea, infecciones bacterianas y acné en perros y gatos.",
    indication: "Tratar infecciones bacterianas de la piel\nTratar seborrea oleosa\nTratar foliculitis\nTratar impétigo\nTratar acné felino\nAyudar en el tratamiento de sarna\nLimpieza y antisepsia antes de cirugías",
    presentationTitle: "Dermoxil",
    presentationSubtitle: "Envase de 250 ml con cámara de aire para permitir su correcta agitación. Contiene una bolilla inerte para facilitar la homogeneización del producto",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de la solución contiene:<br>Peróxido de Benzoílo: 2,5 g<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características y beneficios del shampoo Dermoxil",
    benefits: [
      { title: "", description: "Antiséptico de amplio espectro que elimina bacterias" },
      { title: "", description: "Ayuda a controlar la producción excesiva de grasa en la piel" },
      { title: "", description: "Mejora la salud de los folículos pilosos y elimina células muertas" },
      { title: "", description: "Limpia profundamente los folículos, útil para tratar acné y problemas de queratinización" },
      { title: "", description: "Elimina bacterias mediante la liberación de sustancias que son tóxicas para los microorganismos" }
    ],
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
    description: "Fungistático a base de Griseofulvina micronizada de administración oral para caninos y felinos.",
    badge: null,
    variants: [
      { name: "250 mg", price: null, image: "images/griseofulvina.jpg" },
      { name: "500 mg", price: null, image: "images/griseofulvina.jpg" }
    ],
    specialModal: null,
    // Extended modal info
    logoText: "GRISEOFULVINA",
    logoSubtitle: "/ Fungistático",
    fullDescription: "Griseofulvina es un medicamento antifúngico en comprimidos para tratar infecciones por hongos en la piel de perros y gatos.",
    indication: "Tratar tiña\nTratar infecciones por hongos en la piel\nTratar dermatomicosis",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envase con 2 blisters de 10 comprimidos cada uno",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Griseofulvina micronizada: 250 mg / 500 mg<br>Excipientes c.s. según presentación",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características de la Griseofulvina",
    benefits: [
      { title: "Fungistático", description: "Detiene el crecimiento de hongos interfiriendo con su desarrollo." },
      { title: "Absorción y Distribución", description: "Se absorbe bien por vía oral y se concentra en el pelo, uñas y piel donde actúan los hongos." },
      { title: "Actividad Micostática", description: "Se concentra en las nuevas células de la piel, proporcionando actividad contra los hongos que causan infecciones." }
    ]
  },
  "uv-day": {
    id: "uv-day",
    name: "UV Day",
    category: "Oftalmología • Antiinflamatorio. Antibiótico.",
    categories: ["perros", "gatos", "oftalmologia"],
    price: null,
    image: "images/uv-day.jpg",
    description: "Colirio estéril a base de Prednisolona fosfato, Moxifloxacina y Fenilefrina.",
    badge: "Nuevo",
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "UV DAY",
    logoSubtitle: "/ Antiinflamatorio. Antibiótico.",
    fullDescription: "UV Day es un colirio que combina antiinflamatorio, antibiótico y descongestivo para tratar inflamaciones oculares no ulcerativas.",
    indication: "Tratar inflamación del interior del ojo (uveitis)\nTratar conjuntivitis\nTratar inflamación de la córnea sin úlceras\nTratar inflamación del saco lagrimal",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "NUEVO",
    formula: "<strong>FÓRMULA</strong><br>Cada ml de solución contiene:<br>Prednisolona fosfato: 10 mg<br>Moxifloxacina HCL: 3 mg<br>Fenilefrina HCL: 1,2 mg<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Componentes Activos",
    benefitsSubtitle: "Características que hacen de UV Day un tratamiento de elección",
    benefits: [
      { title: "Moxifloxacina", description: "Antibiótico de amplio espectro con buena penetración ocular, efectivo contra bacterias resistentes, útil para infecciones recurrentes o difíciles de tratar." },
      { title: "Fenilefrina", description: "Dilata la pupila y reduce el enrojecimiento ocular." },
      { title: "Prednisolona", description: "Altamente efectiva para reducir la inflamación ocular, disminuyendo el dolor y la incomodidad." },
      { title: "HEC (Hidroxietil Celulosa)", description: "Mejora la lubricación y ayuda a que las gotas permanezcan más tiempo en el ojo." }
    ]
  },

  // ============================================
  // GASTROINTESTINAL
  // ============================================
  "anti-ulceras": {
    id: "anti-ulceras",
    name: "Anti Ulceras",
    category: "Oftalmología • Antibiótico",
    categories: ["perros", "gatos", "oftalmologia", "antibioticos"],
    price: null,
    image: "images/antiulceras.jpg",
    description: "Colirio estéril a base de Moxifloxacina y D-Pantenol.",
    badge: "Nuevo",
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "ANTI ÚLCERAS",
    logoSubtitle: "/ Antibiótico",
    fullDescription: "Anti Úlceras es un colirio que combina antibiótico y regenerador para tratar úlceras corneales y prevenir infecciones.",
    indication: "Tratar úlceras en la córnea\nPrevenir y tratar infecciones oculares\nAyudar a cicatrizar úlceras\nProteger la superficie ocular",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "NUEVO",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de solución contiene:<br>D-Pantenol: (cantidad especificada) g<br>Moxifloxacina clorhidrato: 0,5 g<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Componentes Activos",
    benefitsSubtitle: "Características que hacen de Anti Úlceras un tratamiento de elección",
    benefits: [
      { title: "Moxifloxacina", description: "Antibiótico de amplio espectro con buena penetración ocular, efectivo contra bacterias resistentes, útil para infecciones recurrentes o difíciles de tratar." },
      { title: "D-Pantenol", description: "Ayuda a cicatrizar la córnea, humecta el ojo, alivia la irritación y es bien tolerado por las mascotas." },
      { title: "HEC (Hidroxietil Celulosa)", description: "Mejora la lubricación y ayuda a que las gotas permanezcan más tiempo en el ojo." }
    ]
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
    fullDescription: "Enzimax es un suplemento con enzimas vegetales que ayuda a mejorar la digestión y absorción de nutrientes en su mascota.",
    indication: "Ayudar con flatulencias\nAyudar con diarreas\nMejorar la digestión\nMejorar la absorción de nutrientes\nAyudar en enfermedad intestinal inflamatoria crónica\nAyudar en gastritis crónicas\nAyudar en problemas digestivos\nAyudar en períodos de convalecencia\nAyudar durante tratamientos oncológicos",
    presentationTitle: "Presentación Disponible",
    presentationSubtitle: "Envase que contiene 2 blisters por 10 comprimidos de 200 mg cada uno",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido de 200 mg contiene:<br>Bromelina (32 mg*) equivalente a 8 unidades FIP<br>Papaína (1,6 mg**) equivalente a 48000 unidades USP<br>Betaina HCI (5 mg*)<br>Excipientes c.s.",
    benefitsTitle: "Componentes Activos",
    benefitsSubtitle: "Enzimax contiene enzimas proteolíticas vegetales con múltiples beneficios",
    benefits: [
      { title: "Bromelina", description: "Enzima extraída de la piña que ayuda a reducir la inflamación y mejora la digestión de proteínas." },
      { title: "Betaina HCI", description: "Ayuda en el metabolismo de las grasas, mejora la digestión de lípidos y proteínas, y fortalece la salud hepática." },
      { title: "Papaína", description: "Enzima extraída de la papaya que favorece la digestión de alimentos, regula el intestino y ayuda a la evacuación." },
      { title: "Administración", description: "Una dosis diaria antes de las comidas (idealmente 20 minutos antes). Comprimidos de fácil administración." }
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
    fullDescription: "PILERAN es un medicamento que ayuda a controlar náuseas y vómitos, y mejora el movimiento del sistema digestivo en perros y gatos.",
    indication: "Controlar náuseas y vómitos\nAyudar en trastornos digestivos\nFacilitar el vaciamiento del estómago\nMejorar el movimiento del sistema digestivo",
    presentationTitle: "PILERAN GOTAS",
    presentationSubtitle: "Frasco gotero por 20 ml",
    formula: "<strong>FÓRMULA</strong><br>Cada ml de solución oral contiene:<br>Metoclopramida Clorhidrato: 5 mg<br>Vehículo c.s.",
    dosage: "<strong>Dosificación:</strong><br><br><strong>Perros y Gatos:</strong> 1 ml (20 gotas) cada 10 kg cada 6-8 horas",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Doble acción: central y periférica",
    benefits: [
      { title: "", description: "Acción central: Bloquea las señales de náusea y vómito en el cerebro" },
      { title: "", description: "Acción periférica: Mejora el movimiento del esófago y estómago" },
      { title: "", description: "Promueve la contracción del estómago facilitando su vaciamiento" },
      { title: "", description: "Facilita el vaciamiento gástrico y mejora el movimiento intestinal" }
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
    fullDescription: "PILERAN es un medicamento que ayuda a controlar náuseas y vómitos, y mejora el movimiento del sistema digestivo en perros y gatos.",
    indication: "Controlar náuseas y vómitos\nAyudar en trastornos digestivos\nFacilitar el vaciamiento del estómago\nMejorar el movimiento del sistema digestivo\nUsar en infusión continua para casos severos",
    presentationTitle: "PILERAN INYECTABLE",
    presentationSubtitle: "Frasco ampolla por 50 ml",
    formula: "<strong>FÓRMULA</strong><br>Cada ml de solución inyectable contiene:<br>Metoclopramida Clorhidrato: 5 mg<br>Vehículo c.s.",
    dosage: "<strong>Dosificación:</strong><br><br><strong>Perros y Gatos (SC, IM, EV lenta):</strong> 1 ml/10 kg cada 6-8 horas<br><br><strong>Infusión continua IV:</strong> 1-2 mg/kg (1 ml cada 2,5-5 kg) cada 24 horas",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Doble acción: central y periférica",
    benefits: [
      { title: "", description: "Acción central: Bloquea las señales de náusea y vómito en el cerebro" },
      { title: "", description: "Acción periférica: Mejora el movimiento del esófago y estómago" },
      { title: "", description: "Promueve la contracción del estómago facilitando su vaciamiento" },
      { title: "", description: "Facilita el vaciamiento gástrico y mejora el movimiento intestinal" },
      { title: "", description: "Disponible para administración inyectable o infusión continua para casos severos" }
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
    fullDescription: "PROTELIV es un hepatoprotector que ayuda a proteger el hígado y mejorar la función biliar en perros y gatos.",
    indication: "Proteger el hígado\nMejorar la secreción biliar\nAyudar en trastornos hepáticos y biliares\nAyudar a desintoxicar el hígado\nPrevenir acumulación de grasa en el hígado",
    presentationTitle: "PROTELIV",
    presentationSubtitle: "Frasco gotero por 15 ml",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml contiene:<br>Nicotinamida: 2,5 g<br>Citrato de Colina: 5 g<br>Extracto fluído de Alcachofa: 5 g<br>Metilbromuro de Homatropina: 0,2 g<br>Dehidrocolato de Sodio: 0,25 g<br>Desoxicolato de Sodio: 0,25 g<br>Vehículo c.s.p.: 100 ml",
    dosage: "<strong>Dosificación:</strong><br><br><strong>Perros y Gatos:</strong> 10-20 gotas cada 12 horas",
    benefitsTitle: "Acciones Terapéuticas",
    benefitsSubtitle: "Múltiples beneficios para la salud hepática",
    benefits: [
      { title: "Colerética", description: "Aumenta el flujo de bilis desde la vesícula biliar" },
      { title: "Colagoga", description: "Aumenta la producción de bilis por el hígado" },
      { title: "Colecistocinética", description: "Promueve la excreción de bilis desde la vesícula" },
      { title: "Citoprotectora", description: "Protege las células del hígado del daño" },
      { title: "Desintoxicante", description: "Ayuda a eliminar toxinas del hígado" },
      { title: "Lipótropa", description: "Previene la acumulación de grasa en el hígado" }
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
    fullDescription: "Anavimin Coat es un suplemento diario que ayuda a mantener la piel y el pelo saludable en perros y gatos de todas las edades.",
    indication: "Ayudar en el tratamiento de problemas de piel\nMejorar la salud de la piel y el pelo\nRestablecer la barrera cutánea\nNormalizar la producción de grasa en la piel\nAyudar en alergias y problemas dermatológicos\nFavorecer la recuperación de la piel dañada\nOtorgar brillo y suavidad al pelaje",
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
      { title: "Cistina", description: "El principal aminoácido azufrado componente de la alfa-queratina. Proporciona los sustratos necesarios para una queratinización adecuada." }
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
    fullDescription: "APETIL es un suplemento que estimula el apetito y ayuda a mejorar la recuperación en perros y gatos que no comen bien.",
    indication: "Estimular el apetito en perros y gatos\nAcortar el período de recuperación\nMejorar el balance de nutrientes\nAumentar la síntesis de proteínas\nRegular el balance energético\nAyudar a animales convalecientes",
    presentationTitle: "APETIL",
    presentationSubtitle: "Frasco gotero por 10 ml",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml contiene:<br>Estanozolol: 0,4 g<br>Ciproheptadina Clorhidrato: 0,2 g<br>DL-Carnitina Clorhidrato: 7 g<br>Vehículo c.s.p.: 100 ml",
    dosage: "<strong>Dosificación:</strong><br><br><strong>Cachorros y Gatos:</strong> 10 gotas/día, semanas alternas<br><strong>Perros adultos:</strong> 20 gotas/día, semanas alternas",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Triple acción: orexigénica, anabólica y energética",
    benefits: [
      { title: "Efecto Orexigénico", description: "Estimula el apetito bloqueando las señales de saciedad en el cerebro" },
      { title: "Acción Anabólica", description: "Mejora el balance de nutrientes y aumenta la síntesis de proteínas, favoreciendo la recuperación y el crecimiento muscular" },
      { title: "Regulación Energética", description: "Ayuda al transporte de grasas para la producción de energía" },
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
    description: "Biomodulador activador de la función neuronal en comprimidos palatables.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "IQ 180",
    logoSubtitle: "/ Biomodulador activador de la función neuronal",
    fullDescription: "IQ 180 es un suplemento en comprimidos que ayuda a mantener y mejorar la función cerebral en perros y gatos.",
    indication: "Ayudar a prevenir el deterioro cognitivo\nMejorar la función cerebral\nMejorar la memoria y atención\nAyudar en la conducta social",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Caja con 3 blisters de 7 comprimidos cada uno",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Ácido Ascórbico: 150 mg<br>L-Glutamina: 100 mg<br>Nicotinamida: 30 mg<br>Ácido alfa lipoico: 10 mg<br>ATP: 5 mg<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características que hacen de IQ 180 un biomodulador de elección",
    benefits: [
      { title: "Mejora Cognitiva", description: "Mejora la conducta social, la memoria y la atención." },
      { title: "Ácido Alfa Lipoico", description: "Antioxidante que otorga protección neuronal, ante la potencial toxicidad Beta amiloide y de peróxido de hidrogeno. Disminuye los niveles de lipofucsina." },
      { title: "L-Glutamina", description: "Antioxidante endógeno que protege las neuronas." },
      { title: "Nicotinamida", description: "Regula fluidez de membranas neuronales, protege las neuronas colinérgicas y células piramidales, aumenta síntesis y liberación del factor neurotrófico." },
      { title: "Ácido Ascórbico", description: "Antioxidante, regula la síntesis de vitamina E." }
    ]
  },
  "neovita": {
    id: "neovita",
    name: "Neovita",
    category: "Suplementos • Biomodulador Oncológico",
    categories: ["perros", "gatos", "suplementos"],
    price: null,
    image: "images/neovita.png",
    description: "Neovita acompaña naturalmente al paciente oncológico sosteniendo sus funciones vitales.",
    badge: "Nuevo",
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "NEOVITA",
    logoSubtitle: "/ Biomodulador para pacientes oncológicos",
    fullDescription: "Neovita es un suplemento nutricional desarrollado para pacientes oncológicos, aportando nutrientes esenciales después de tratamientos contra el cáncer.",
    indication: "Usar después de quimioterapia o radioterapia\nAyudar a reducir el estrés oxidativo\nAcompañar tratamientos paliativos\nMejorar la calidad de vida\nAyudar en períodos de convalecencia prolongados",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Estuche con tres blisters de siete comprimidos palatables cada uno",
    formula: "<strong>FÓRMULA</strong><br>Complemento dietario con Arginina, Extracto seco de ajo, Cúrcuma, Espirulina, Glutamina, Vitamina C, Gluconato de Zinc, Vitamina A y Vitamina E",
    dosage: "<strong>POSOLOGÍA Y DOSIFICACIÓN:</strong><br><br><strong>Gatos:</strong> 1/4 a 1/2 comprimido por día<br><strong>Perros hasta 10 kilos:</strong> 1/2 a 1 comprimido por día<br><strong>Perros de más de 10 kilos:</strong> 1 a 2 comprimidos por día<br><br>La dosis puede darse en una toma diaria o dividirse en dos.<br>Se recomienda la administración del producto hasta que el animal logre un equilibrio metabólico.",
    benefitsTitle: "Componentes Activos",
    benefitsSubtitle: "Ingredientes que hacen de Neovita un complemento esencial para pacientes oncológicos",
    benefits: [
      { title: "Arginina", description: "Es un aminoácido esencial que aumenta la actividad inmunitaria frente a neoplasias. Mejora el metabolismo de los linfocitos T, lo que permite que sobrevivan por más tiempo y sean más eficaces en la lucha contra tumores." },
      { title: "Extracto seco de ajo", description: "Ayuda a estabilizar la presión arterial. Además, colabora en el mantenimiento de la salud del paciente debido a sus compuestos de sulfuro que poseen propiedades anti cancerígenas." },
      { title: "Cúrcuma", description: "Colabora en el proceso desinflamatorio. Sus propiedades antiinflamatorias las ejerce a través de la interacción con varios mediadores inmunes como por ejemplo, la inhibición de factores de transcripción proinflamatorios como el factor nuclear kappa B (NFKB). También inhibe las citocinas proinflamatorias, quimiocinas, prostaglandinas e incluso las especies reactivas de oxígeno (ROS). Es un potente antioxidante y analgésico." },
      { title: "Espirulina", description: "Contiene antioxidantes, vitaminas, aminoácidos esenciales, ácidos grasos poliinsaturados. Además de su propiedad antioxidante, es beneficiosa sobre el sistema inmunológico ya que colabora en la inhibición de la proliferación celular y aumenta la actividad de enzimas presentes en células del sistema inmune. Mejora y aumenta los índices eritrocitarios. La espirulina contiene ficocianina, una proteína que posee una excelente capacidad antitumoral." },
      { title: "Glutamina", description: "El aporte de Glutamina es muy importante en el paciente oncológico. Esto se debe a que la célula cancerosa restringe la disponibilidad de nutrientes a las células sanas, entre los que se encuentra la glutamina. Esta disminución podría afectar la efectividad de la citorreducción tumoral. Además, la glutamina colabora en mejorar la salud sobre todo a nivel intestinal." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "OL TRANS FLEX",
    logoSubtitle: "Coadyuvante Osteoarticular",
    fullDescription: "OL Trans Flex es un suplemento en comprimidos que ayuda a mantener la salud articular y la movilidad en perros.",
    indication: "Conservar la salud articular\nMantener la movilidad\nAyudar en casos de desgaste articular\nApoyar la salud de las articulaciones",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Envases con 3 y 10 blisters de 7 comprimidos cada uno",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Glucosamina Sulfato: 440 mg<br>Metilsulfonilmetano (MSM): 400 mg<br>Ácido Ascórbico: 66 mg<br>Manganeso Gluconato: 10 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> 1 comprimido cada 20 kg de peso cada 24 horas, por un período no menor a 4-6 semanas.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No utilizar en animales con hipersensibilidad a los principios activos.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de OL Trans Flex la mejor opción",
    benefits: [
      { title: "Glucosamina y MSM", description: "Combinación de Glucosamina Sulfato y MSM para el mantenimiento de la salud articular y la flexibilidad." },
      { title: "Ácido Ascórbico", description: "Vitamina C que contribuye a la síntesis de colágeno y al mantenimiento del tejido conectivo." },
      { title: "Manganeso", description: "Mineral esencial que participa en la formación de cartílago y hueso." },
      { title: "Comprimidos Palatables", description: "Fácil administración gracias a su sabor agradable que facilita la aceptación por parte de la mascota." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "POTEN PET",
    logoSubtitle: "Biomodulador Revitalizante y Energizante",
    fullDescription: "Poten Pet es un suplemento revitalizante y energizante en comprimidos para perros adultos que necesitan complementar su dieta.",
    indication: "Suplementar la dieta de perros adultos\nAyudar en estados de convalecencia\nAyudar durante estrés o actividad física intensa\nMejorar la recuperación energética",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con 30 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Metionina DL: 100 mg<br>Taurina: 40 mg<br>Nicotinamida: 20 mg<br>Vitamina B1: 5 mg<br>Vitamina B6: 5 mg<br>Vitamina B2: 2 mg<br>Vitamina B12: 1 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> 1 comprimido cada 10 kg de peso corporal, una vez al día.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Poten Pet la mejor opción",
    benefits: [
      { title: "Metionina y Taurina", description: "Aminoácidos esenciales que contribuyen al metabolismo energético y al bienestar general." },
      { title: "Complejo de Vitaminas B", description: "Vitaminas del grupo B que participan en el metabolismo energético y el funcionamiento del sistema nervioso." },
      { title: "Revitalizante", description: "Ayuda a recuperar la energía y vitalidad en perros adultos." },
      { title: "Comprimidos Palatables", description: "Fácil administración gracias a su sabor agradable." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "POTEN PET GATOS",
    logoSubtitle: "Biomodulador Revitalizante y Energizante",
    fullDescription: "Poten Pet Gatos es un suplemento revitalizante y energizante en pasta para gatos adultos que necesitan complementar su dieta.",
    indication: "Suplementar la dieta de gatos adultos\nAyudar en estados de convalecencia\nAyudar durante estrés o actividad física intensa\nMejorar la recuperación energética",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Jeringa dosificadora con 7 g",
    formula: "<strong>FÓRMULA</strong><br>Cada 1 g de pasta contiene:<br>Metionina DL: 50 mg<br>Taurina: 20 mg<br>Nicotinamida: 10 mg<br>Vitamina B1: 2,5 mg<br>Vitamina B6: 2,5 mg<br>Vitamina B2: 1 mg<br>Vitamina B12: 0,5 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> 1 dosis diaria por animal.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Poten Pet Gatos la mejor opción",
    benefits: [
      { title: "Metionina y Taurina", description: "Aminoácidos esenciales especialmente importantes para gatos, que contribuyen al metabolismo energético y al bienestar general." },
      { title: "Complejo de Vitaminas B", description: "Vitaminas del grupo B que participan en el metabolismo energético y el funcionamiento del sistema nervioso." },
      { title: "Pasta Palatable", description: "Formulación en pasta que facilita la administración en gatos." },
      { title: "Jeringa Dosificadora", description: "Incluye jeringa dosificadora para facilitar la administración precisa." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "RELAY C",
    logoSubtitle: "Suplemento de Vitamina C",
    fullDescription: "Relay C es un suplemento de vitamina C en comprimidos que ayuda a fortalecer el sistema inmunológico de perros y gatos.",
    indication: "Fortalecer el sistema inmunológico\nSuplementar vitamina C\nAyudar en estados de convalecencia\nApoyar procesos de recuperación",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con 30 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Ácido Ascórbico (Vitamina C): 500 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros y Gatos:</strong> 1 comprimido por cada 10 kg de peso corporal por día.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a la vitamina C.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Relay C la mejor opción",
    benefits: [
      { title: "Vitamina C", description: "Ácido ascórbico que contribuye al funcionamiento normal del sistema inmune y actúa como antioxidante." },
      { title: "Sistema Inmune", description: "Ayuda a fortalecer las defensas naturales del organismo." },
      { title: "Antioxidante", description: "Protege las células contra el estrés oxidativo." },
      { title: "Comprimidos Palatables", description: "Fácil administración gracias a su sabor agradable." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "TONIPET",
    logoSubtitle: "Suplemento Vitamínico y Mineral",
    fullDescription: "Tonipet es un suplemento vitamínico y mineral en comprimidos para perros y gatos en crecimiento, gestación, lactancia o convalecencia.",
    indication: "Suplementar perros y gatos en crecimiento\nAyudar durante gestación y lactancia\nAyudar en estados de convalecencia\nAyudar en deficiencias nutricionales\nAyudar en recuperación post-quirúrgica",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con 30 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Vitaminas: A, D3, E, B1, B2, B6, B12, C<br>Nicotinamida, Ácido Pantoténico, Ácido Fólico, Biotina<br>Minerales: Hierro, Zinc, Manganeso, Cobre, Yodo, Selenio, Calcio, Fósforo<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> 1 comprimido cada 10 kg de peso corporal, una vez al día.<br><strong>Gatos:</strong> 1 comprimido al día.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Tonipet la mejor opción",
    benefits: [
      { title: "Complejo Multivitamínico", description: "Complejo completo de vitaminas esenciales para el correcto funcionamiento del organismo." },
      { title: "Minerales Esenciales", description: "Minerales importantes para el crecimiento, desarrollo y mantenimiento de la salud." },
      { title: "Reconstituyente", description: "Ayuda a recuperar el estado nutricional en animales en convalecencia." },
      { title: "Comprimidos Palatables", description: "Fácil administración gracias a su sabor agradable." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "VITAMÍNICO AEDK AVES",
    logoSubtitle: "Complejo Vitamínico para Aves",
    fullDescription: "<strong>Vitamínico AEDK Aves</strong> es un complejo vitamínico liposoluble formulado específicamente para aves. Proporciona las vitaminas A, E, D y K esenciales para el correcto funcionamiento del organismo de las aves.",
    indication: "<strong>Indicado para:</strong><ul><li>Suplementación vitamínica en aves</li><li>Deficiencias de vitaminas A, E, D y K</li><li>Estados de convalecencia</li><li>Apoyo nutricional en aves enfermas</li><li>Prevención de deficiencias vitamínicas</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Solución oral",
    formula: "<strong>FÓRMULA</strong><br>Cada ml contiene:<br>Vitamina A: según presentación<br>Vitamina E: según presentación<br>Vitamina D3: según presentación<br>Vitamina K: según presentación<br>Vehículo c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Aves:</strong> Administrar según indicación veterinaria, generalmente 1-2 gotas en el agua de bebida o directamente en el pico, según el tamaño del ave.<br><br><strong>Vía de administración:</strong> Oral (agua de bebida o directamente)<br><strong>Frecuencia:</strong> Según indicación veterinaria<br><strong>Contraindicaciones:</strong> No administrar en aves con hipersensibilidad a alguno de los componentes.<br><strong>Precauciones:</strong> No exceder la dosis recomendada para evitar hipervitaminosis.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Vitamínico AEDK Aves la mejor opción",
    benefits: [
      { title: "Vitaminas Liposolubles", description: "Complejo de vitaminas A, E, D y K esenciales para el metabolismo y la salud de las aves." },
      { title: "Vitamina A", description: "Esencial para la visión, el crecimiento y el mantenimiento de las mucosas." },
      { title: "Vitamina E", description: "Antioxidante importante que protege las células del daño oxidativo." },
      { title: "Vitamina D3", description: "Esencial para el metabolismo del calcio y fósforo, importante para la salud ósea." },
      { title: "Vitamina K", description: "Necesaria para la coagulación sanguínea y el metabolismo óseo." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "BIOCLIN ENJUAGUE BUCAL",
    logoSubtitle: "Enjuague Bucal Antiséptico",
    fullDescription: "Bioclin Enjuague Bucal es un enjuague antiséptico para la higiene dental de perros y gatos que previene la placa bacteriana y el mal aliento.",
    indication: "Higiene bucal diaria\nPrevenir placa bacteriana\nControlar el mal aliento\nMantener encías saludables\nPrevenir sarro",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Frasco con solución",
    formula: "<strong>FÓRMULA</strong><br>Enjuague bucal antiséptico con acción bactericida y desodorizante.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros y Gatos:</strong> Aplicar directamente en la boca o mezclar con el agua de bebida según indicación veterinaria.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Bioclin Enjuague Bucal la mejor opción",
    benefits: [
      { title: "Antiséptico", description: "Acción antiséptica que ayuda a eliminar bacterias causantes de placa y mal aliento." },
      { title: "Prevención de Placa", description: "Ayuda a prevenir la formación de placa bacteriana y sarro." },
      { title: "Frescor Bucal", description: "Elimina el mal aliento manteniendo un aliento fresco." },
      { title: "Fácil Uso", description: "Fácil aplicación para mantener la higiene bucal de tu mascota." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "BIOCLIN GEL ANTIPLACA",
    logoSubtitle: "Gel Dental Antiplaca",
    fullDescription: "Bioclin Gel Antiplaca es un gel dental para controlar la placa bacteriana y mantener una boca sana en perros y gatos.",
    indication: "Controlar placa bacteriana\nPrevenir sarro\nHigiene bucal diaria\nMantener encías saludables\nPrevenir enfermedades periodontales",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Tubo con gel",
    formula: "<strong>FÓRMULA</strong><br>Gel dental con acción antiplaca y antiséptica.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros y Gatos:</strong> Aplicar directamente sobre los dientes y encías según indicación veterinaria.<br><br><strong>Vía de administración:</strong> Tópico oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Bioclin Gel Antiplaca la mejor opción",
    benefits: [
      { title: "Control de Placa", description: "Efectivo en el control y prevención de la formación de placa bacteriana." },
      { title: "Prevención de Sarro", description: "Ayuda a prevenir la formación de sarro dental." },
      { title: "Aplicación Fácil", description: "Gel de fácil aplicación que se adhiere a los dientes para una acción prolongada." },
      { title: "Salud Periodontal", description: "Contribuye al mantenimiento de encías saludables y previene enfermedades periodontales." }
    ]
  },
  "clorhexidina": {
    id: "clorhexidina",
    name: "Clorhexidina",
    category: "Higiene • Antiséptico",
    categories: ["perros", "gatos", "higiene", "dermatologia"],
    price: 33000,
    image: "images/clorhexidina.jpeg",
    description: "Antiséptico y desinfectante de uso tópico.",
    badge: null,
    variants: null,
    specialModal: null
  },
  "clorhexidina-gotas-oticas": {
    id: "clorhexidina-gotas-oticas",
    name: "Clorhexidina Gotas Óticas",
    category: "Ótico • Antiséptico",
    categories: ["perros", "gatos", "higiene"],
    price: null,
    image: "images/clorhexidina.jpeg",
    description: "Solución ótica antiséptica bactericida, fungicida y ceruminolítica.",
    presentationTitle: "Clorhexidina Gotas Óticas",
    presentationSubtitle: "Frasco gotero con 15 ml",
    fullDescription: "Clorhexidina Gotas Óticas es una solución antiséptica para limpiar y tratar infecciones del oído en perros y gatos.",
    indication: "Limpiar y desinfectar el conducto auditivo\nTratar otitis externas\nPrevenir infecciones del oído\nEliminar cerumen",
    formula: "<strong>FÓRMULA</strong><br>Solución ótica con Clorhexidina y Propilenglicol",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características que hacen de Clorhexidina un antiséptico de elección",
    benefits: [
      { title: "", description: "Mantiene su eficacia incluso en presencia de materia orgánica" },
      { title: "", description: "Efecto residual de hasta 48 horas, permanece activo en la piel" },
      { title: "", description: "Amplio espectro: efectivo contra bacterias, virus, hongos y esporas" },
      { title: "", description: "Actúa rápidamente al entrar en contacto" },
      { title: "", description: "Elimina microorganismos dañando sus membranas y enzimas" }
    ],
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
    specialModal: null,
    // Extended modal info
    logoText: "CEFALEXINA 500",
    logoSubtitle: "Antibiótico de Amplio Espectro",
    fullDescription: "Cefalexina 500 es un antibiótico de amplio espectro para tratar infecciones bacterianas en perros y gatos.",
    indication: "Tratar infecciones del tracto respiratorio\nTratar infecciones del tracto urinario\nTratar infecciones de piel y tejidos blandos\nTratar infecciones óseas\nTratar infecciones causadas por diversas bacterias",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con comprimidos de 500 mg",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Cefalexina: 500 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros y Gatos:</strong> 15-30 mg por kg de peso corporal cada 8-12 horas, durante 7-14 días según indicación veterinaria.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a las cefalosporinas o penicilinas.<br><strong>Efectos colaterales:</strong> Ocasionalmente pueden presentarse trastornos gastrointestinales como vómitos o diarrea.<br><strong>Restricciones:</strong> Usar con precaución en animales con insuficiencia renal.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Cefalexina 500 la mejor opción",
    benefits: [
      { title: "Amplio Espectro", description: "Efectivo contra una amplia gama de bacterias Gram positivas y algunas Gram negativas." },
      { title: "Bien Absorbido", description: "Excelente absorción oral con buena biodisponibilidad." },
      { title: "Seguro y Eficaz", description: "Antibiótico de primera generación con perfil de seguridad establecido." },
      { title: "Múltiples Indicaciones", description: "Útil en el tratamiento de diversas infecciones bacterianas en perros y gatos." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "CLORALEN",
    logoSubtitle: "Antibiótico de Amplio Espectro",
    fullDescription: "Cloralen es un antibiótico de amplio espectro para tratar infecciones bacterianas en perros y gatos.",
    indication: "Tratar infecciones del tracto respiratorio\nTratar infecciones del tracto digestivo\nTratar infecciones de piel y tejidos blandos\nTratar infecciones oculares\nTratar infecciones causadas por diversas bacterias",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Cloranfenicol: según presentación<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros y Gatos:</strong> 25-50 mg por kg de peso corporal cada 8-12 horas, durante 5-7 días según indicación veterinaria.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad al cloranfenicol, en hembras gestantes o lactantes, ni en animales con disfunción hepática severa.<br><strong>Efectos colaterales:</strong> Ocasionalmente pueden presentarse trastornos gastrointestinales o supresión de la médula ósea con uso prolongado.<br><strong>Restricciones:</strong> Usar con precaución en animales con insuficiencia hepática o renal.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Cloralen la mejor opción",
    benefits: [
      { title: "Amplio Espectro", description: "Efectivo contra una amplia gama de bacterias Gram positivas y Gram negativas." },
      { title: "Bien Absorbido", description: "Excelente absorción oral con buena penetración tisular." },
      { title: "Múltiples Indicaciones", description: "Útil en el tratamiento de diversas infecciones bacterianas." },
      { title: "Eficacia Comprobada", description: "Antibiótico de amplio uso en medicina veterinaria con eficacia establecida." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "FLOXADAY COMPRIMIDOS",
    logoSubtitle: "Antibiótico de Amplio Espectro",
    fullDescription: "Floxaday Comprimidos es un antibiótico de amplio espectro para tratar infecciones bacterianas en perros y gatos.",
    indication: "Tratar infecciones del tracto urinario\nTratar infecciones del tracto respiratorio\nTratar infecciones de piel y tejidos blandos\nTratar infecciones gastrointestinales\nTratar infecciones causadas por diversas bacterias",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Comprimidos de 100 mg, 200 mg y 400 mg",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Enrofloxacina: 100 mg, 200 mg o 400 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros y Gatos:</strong> 5-10 mg por kg de peso corporal cada 24 horas, durante 5-10 días según indicación veterinaria. Seleccionar la presentación adecuada según el peso del animal.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en cachorros en crecimiento, hembras gestantes o lactantes, ni en animales con hipersensibilidad a las fluoroquinolonas.<br><strong>Efectos colaterales:</strong> Ocasionalmente pueden presentarse trastornos gastrointestinales o alteraciones en el cartílago articular en animales jóvenes.<br><strong>Restricciones:</strong> No utilizar en animales con trastornos convulsivos.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Floxaday Comprimidos la mejor opción",
    benefits: [
      { title: "Amplio Espectro", description: "Efectivo contra una amplia gama de bacterias Gram negativas y algunas Gram positivas." },
      { title: "Bien Absorbido", description: "Excelente absorción oral con buena penetración tisular." },
      { title: "Múltiples Presentaciones", description: "Tres concentraciones diferentes para adaptarse al peso del animal." },
      { title: "Eficacia Comprobada", description: "Antibiótico de amplio uso en medicina veterinaria con eficacia establecida." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "MV GATOS GASTROINTESTINAL",
    logoSubtitle: "Dieta Prescripta para Trastornos Digestivos",
    fullDescription: "MV Gatos Gastrointestinal es una dieta terapéutica formulada para gatos con trastornos digestivos.",
    indication: "Gatos con trastornos digestivos agudos y crónicos\nGastritis y enteritis\nDiarrea aguda y crónica\nEnfermedad inflamatoria intestinal\nRecuperación post-quirúrgica del tracto digestivo",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Alimento seco completo y balanceado",
    formula: "<strong>FÓRMULA</strong><br>Dieta prescripta con:<br>Proteínas de alta digestibilidad<br>Fibra soluble e insoluble balanceada<br>Ácidos grasos omega-3<br>Prebióticos<br>Niveles reducidos de grasa",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> Administrar como único alimento según las necesidades calóricas del gato. La cantidad diaria debe dividirse en 2-3 comidas.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Duración:</strong> Según indicación veterinaria, generalmente 2-4 semanas para casos agudos o de por vida para casos crónicos.<br><strong>Contraindicaciones:</strong> No utilizar en gatos con insuficiencia renal o hepática severa sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de MV Gatos Gastrointestinal la mejor opción",
    benefits: [
      { title: "Alta Digestibilidad", description: "Proteínas de alta calidad y alta digestibilidad que reducen la carga sobre el sistema digestivo." },
      { title: "Fibra Balanceada", description: "Combinación de fibra soluble e insoluble que ayuda a regular el tránsito intestinal." },
      { title: "Prebióticos", description: "Contiene prebióticos que favorecen el desarrollo de la flora intestinal beneficiosa." },
      { title: "Ácidos Grasos Omega-3", description: "Ácidos grasos omega-3 que ayudan a reducir la inflamación del tracto digestivo." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "MV GATOS OBESIDAD",
    logoSubtitle: "Dieta Prescripta para Control de Peso",
    fullDescription: "MV Gatos Obesidad es una dieta baja en calorías formulada para gatos con sobrepeso u obesidad.",
    indication: "Gatos con sobrepeso u obesidad\nControl de peso\nPrevenir enfermedades asociadas al sobrepeso\nMantener el peso ideal",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Alimento seco completo y balanceado",
    formula: "<strong>FÓRMULA</strong><br>Dieta prescripta con:<br>Bajo contenido calórico<br>Alto contenido de proteínas<br>Fibra para saciedad<br>L-Carnitina para metabolismo de grasas<br>Vitaminas y minerales balanceados",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> Administrar según las necesidades calóricas calculadas para pérdida de peso. La cantidad diaria debe dividirse en 2-3 comidas. Seguir las indicaciones del veterinario para el cálculo de la ración diaria.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Duración:</strong> Hasta alcanzar el peso ideal, luego puede continuarse para mantenimiento.<br><strong>Contraindicaciones:</strong> No utilizar en gatos gestantes, lactantes o en crecimiento sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de MV Gatos Obesidad la mejor opción",
    benefits: [
      { title: "Bajo en Calorías", description: "Formulación baja en calorías que permite la pérdida de peso controlada." },
      { title: "Alto en Proteínas", description: "Alto contenido de proteínas que ayuda a preservar la masa muscular durante la pérdida de peso." },
      { title: "L-Carnitina", description: "L-Carnitina que ayuda al metabolismo de las grasas y favorece la pérdida de peso." },
      { title: "Fibra para Saciedad", description: "Contenido de fibra que proporciona sensación de saciedad con menos calorías." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "MV GATOS RENAL",
    logoSubtitle: "Dieta Prescripta para Enfermedad Renal",
    fullDescription: "MV Gatos Renal es una dieta terapéutica formulada para gatos con enfermedad renal que ayuda a reducir la carga sobre los riñones.",
    indication: "Gatos con enfermedad renal crónica\nInsuficiencia renal\nNefropatías\nPrevenir cálculos renales\nApoyo nutricional en pacientes renales",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Alimento seco completo y balanceado",
    formula: "<strong>FÓRMULA</strong><br>Dieta prescripta con:<br>Proteínas de alta calidad en cantidad reducida<br>Fósforo reducido<br>Sodio reducido<br>Ácidos grasos omega-3<br>Antioxidantes",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> Administrar como único alimento según las necesidades calóricas del gato. La cantidad diaria debe dividirse en 2-3 comidas. Asegurar acceso constante a agua fresca.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Duración:</strong> Generalmente de por vida para casos crónicos, según indicación veterinaria.<br><strong>Contraindicaciones:</strong> No utilizar en gatos gestantes, lactantes o en crecimiento sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de MV Gatos Renal la mejor opción",
    benefits: [
      { title: "Proteínas Reducidas", description: "Cantidad reducida de proteínas de alta calidad que minimizan la carga sobre los riñones." },
      { title: "Fósforo Reducido", description: "Niveles reducidos de fósforo que ayudan a prevenir la hiperfosfatemia." },
      { title: "Ácidos Grasos Omega-3", description: "Ácidos grasos omega-3 que ayudan a reducir la inflamación y proteger la función renal." },
      { title: "Antioxidantes", description: "Antioxidantes que ayudan a proteger las células renales del daño oxidativo." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "MV GATOS URINARIO",
    logoSubtitle: "Dieta Prescripta para Salud Urinaria",
    fullDescription: "MV Gatos Urinario es una dieta terapéutica formulada para gatos con problemas del tracto urinario que ayuda a prevenir cálculos.",
    indication: "Gatos con cistitis idiopática felina\nPrevenir cálculos urinarios\nTrastornos del tracto urinario inferior\nMantener la salud urinaria",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Alimento seco completo y balanceado",
    formula: "<strong>FÓRMULA</strong><br>Dieta prescripta con:<br>pH urinario controlado<br>Magnesio reducido<br>Alto contenido de humedad (si es húmedo)<br>Ácidos grasos omega-3<br>Antioxidantes",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> Administrar como único alimento según las necesidades calóricas del gato. La cantidad diaria debe dividirse en 2-3 comidas. Asegurar acceso constante a agua fresca.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Duración:</strong> Generalmente de por vida para prevención, según indicación veterinaria.<br><strong>Contraindicaciones:</strong> No utilizar en gatos con insuficiencia renal severa sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de MV Gatos Urinario la mejor opción",
    benefits: [
      { title: "pH Controlado", description: "Formulación que ayuda a mantener un pH urinario adecuado para prevenir la formación de cálculos." },
      { title: "Magnesio Reducido", description: "Niveles reducidos de magnesio que ayudan a prevenir la formación de cálculos de estruvita." },
      { title: "Promueve la Ingesta de Agua", description: "Formulación que estimula la ingesta de agua, favoreciendo la dilución de la orina." },
      { title: "Salud Urinaria", description: "Nutrientes específicos que ayudan a mantener la salud del tracto urinario." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "MV PERROS ARTICULAR",
    logoSubtitle: "Dieta Prescripta para Salud Articular",
    fullDescription: "MV Perros Articular es una dieta terapéutica formulada para perros con problemas articulares que contiene condroprotectores.",
    indication: "Perros con artritis y artrosis\nProblemas articulares\nDesgaste articular\nRecuperación post-quirúrgica articular\nMantener la salud articular en perros mayores",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Alimento seco completo y balanceado",
    formula: "<strong>FÓRMULA</strong><br>Dieta prescripta con:<br>Glucosamina y Condroitina<br>Ácidos grasos omega-3<br>Antioxidantes<br>Proteínas de alta calidad<br>Niveles controlados de calcio y fósforo",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Administrar como único alimento según las necesidades calóricas del perro. La cantidad diaria debe dividirse en 2-3 comidas.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Duración:</strong> Generalmente de por vida para casos crónicos, según indicación veterinaria.<br><strong>Contraindicaciones:</strong> No utilizar en perros gestantes, lactantes o en crecimiento sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de MV Perros Articular la mejor opción",
    benefits: [
      { title: "Condroprotectores", description: "Glucosamina y condroitina que ayudan a mantener y reparar el cartílago articular." },
      { title: "Ácidos Grasos Omega-3", description: "Ácidos grasos omega-3 que ayudan a reducir la inflamación articular." },
      { title: "Antioxidantes", description: "Antioxidantes que protegen las células articulares del daño oxidativo." },
      { title: "Control de Peso", description: "Formulación que ayuda a mantener un peso ideal, reduciendo la carga sobre las articulaciones." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "MV PERROS CARDIO",
    logoSubtitle: "Dieta Prescripta para Enfermedad Cardíaca",
    fullDescription: "MV Perros Cardio es una dieta terapéutica formulada para perros con enfermedad cardíaca que ayuda a reducir la carga sobre el corazón.",
    indication: "Perros con insuficiencia cardíaca\nEnfermedad cardíaca congestiva\nCardiomiopatías\nHipertensión\nApoyo nutricional en pacientes cardíacos",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Alimento seco completo y balanceado",
    formula: "<strong>FÓRMULA</strong><br>Dieta prescripta con:<br>Sodio reducido<br>Taurina y L-Carnitina<br>Ácidos grasos omega-3<br>Antioxidantes<br>Proteínas de alta calidad",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Administrar como único alimento según las necesidades calóricas del perro. La cantidad diaria debe dividirse en 2-3 comidas. Asegurar acceso constante a agua fresca.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Duración:</strong> Generalmente de por vida para casos crónicos, según indicación veterinaria.<br><strong>Contraindicaciones:</strong> No utilizar en perros gestantes, lactantes o en crecimiento sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de MV Perros Cardio la mejor opción",
    benefits: [
      { title: "Sodio Reducido", description: "Niveles reducidos de sodio que ayudan a reducir la retención de líquidos y la carga sobre el corazón." },
      { title: "Taurina y L-Carnitina", description: "Aminoácidos esenciales para la función cardíaca que ayudan a mantener la salud del miocardio." },
      { title: "Ácidos Grasos Omega-3", description: "Ácidos grasos omega-3 que ayudan a reducir la inflamación y mejorar la función cardíaca." },
      { title: "Antioxidantes", description: "Antioxidantes que protegen las células cardíacas del daño oxidativo." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "MV PERROS GASTROINTESTINAL",
    logoSubtitle: "Dieta Prescripta para Trastornos Digestivos",
    fullDescription: "MV Perros Gastrointestinal es una dieta terapéutica formulada para perros con trastornos digestivos.",
    indication: "Perros con trastornos digestivos agudos y crónicos\nGastritis y enteritis\nDiarrea aguda y crónica\nEnfermedad inflamatoria intestinal\nRecuperación post-quirúrgica del tracto digestivo",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Alimento seco completo y balanceado",
    formula: "<strong>FÓRMULA</strong><br>Dieta prescripta con:<br>Proteínas de alta digestibilidad<br>Fibra soluble e insoluble balanceada<br>Ácidos grasos omega-3<br>Prebióticos<br>Niveles reducidos de grasa",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Administrar como único alimento según las necesidades calóricas del perro. La cantidad diaria debe dividirse en 2-3 comidas.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Duración:</strong> Según indicación veterinaria, generalmente 2-4 semanas para casos agudos o de por vida para casos crónicos.<br><strong>Contraindicaciones:</strong> No utilizar en perros con insuficiencia renal o hepática severa sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de MV Perros Gastrointestinal la mejor opción",
    benefits: [
      { title: "Alta Digestibilidad", description: "Proteínas de alta calidad y alta digestibilidad que reducen la carga sobre el sistema digestivo." },
      { title: "Fibra Balanceada", description: "Combinación de fibra soluble e insoluble que ayuda a regular el tránsito intestinal." },
      { title: "Prebióticos", description: "Contiene prebióticos que favorecen el desarrollo de la flora intestinal beneficiosa." },
      { title: "Ácidos Grasos Omega-3", description: "Ácidos grasos omega-3 que ayudan a reducir la inflamación del tracto digestivo." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "MV PERROS OBESIDAD",
    logoSubtitle: "Dieta Prescripta para Control de Peso",
    fullDescription: "MV Perros Obesidad es una dieta baja en calorías formulada para perros con sobrepeso u obesidad.",
    indication: "Perros con sobrepeso u obesidad\nControl de peso\nPrevenir enfermedades asociadas al sobrepeso\nMantener el peso ideal",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Alimento seco completo y balanceado",
    formula: "<strong>FÓRMULA</strong><br>Dieta prescripta con:<br>Bajo contenido calórico<br>Alto contenido de proteínas<br>Fibra para saciedad<br>L-Carnitina para metabolismo de grasas<br>Vitaminas y minerales balanceados",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Administrar según las necesidades calóricas calculadas para pérdida de peso. La cantidad diaria debe dividirse en 2-3 comidas. Seguir las indicaciones del veterinario para el cálculo de la ración diaria.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Duración:</strong> Hasta alcanzar el peso ideal, luego puede continuarse para mantenimiento.<br><strong>Contraindicaciones:</strong> No utilizar en perros gestantes, lactantes o en crecimiento sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de MV Perros Obesidad la mejor opción",
    benefits: [
      { title: "Bajo en Calorías", description: "Formulación baja en calorías que permite la pérdida de peso controlada." },
      { title: "Alto en Proteínas", description: "Alto contenido de proteínas que ayuda a preservar la masa muscular durante la pérdida de peso." },
      { title: "L-Carnitina", description: "L-Carnitina que ayuda al metabolismo de las grasas y favorece la pérdida de peso." },
      { title: "Fibra para Saciedad", description: "Contenido de fibra que proporciona sensación de saciedad con menos calorías." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "MV PERROS RENAL",
    logoSubtitle: "Dieta Prescripta para Enfermedad Renal",
    fullDescription: "MV Perros Renal es una dieta terapéutica formulada para perros con enfermedad renal que ayuda a reducir la carga sobre los riñones.",
    indication: "Perros con enfermedad renal crónica\nInsuficiencia renal\nNefropatías\nPrevenir cálculos renales\nApoyo nutricional en pacientes renales",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Alimento seco completo y balanceado",
    formula: "<strong>FÓRMULA</strong><br>Dieta prescripta con:<br>Proteínas de alta calidad en cantidad reducida<br>Fósforo reducido<br>Sodio reducido<br>Ácidos grasos omega-3<br>Antioxidantes",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Administrar como único alimento según las necesidades calóricas del perro. La cantidad diaria debe dividirse en 2-3 comidas. Asegurar acceso constante a agua fresca.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Duración:</strong> Generalmente de por vida para casos crónicos, según indicación veterinaria.<br><strong>Contraindicaciones:</strong> No utilizar en perros gestantes, lactantes o en crecimiento sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de MV Perros Renal la mejor opción",
    benefits: [
      { title: "Proteínas Reducidas", description: "Cantidad reducida de proteínas de alta calidad que minimizan la carga sobre los riñones." },
      { title: "Fósforo Reducido", description: "Niveles reducidos de fósforo que ayudan a prevenir la hiperfosfatemia." },
      { title: "Ácidos Grasos Omega-3", description: "Ácidos grasos omega-3 que ayudan a reducir la inflamación y proteger la función renal." },
      { title: "Antioxidantes", description: "Antioxidantes que ayudan a proteger las células renales del daño oxidativo." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "MV PERROS SENSIBILIDAD DIETARIA",
    logoSubtitle: "Dieta Prescripta Hipoalergénica",
    fullDescription: "MV Perros Sensibilidad Dietaria es una dieta hipoalergénica formulada para perros con alergias o sensibilidades alimentarias.",
    indication: "Perros con alergias alimentarias\nSensibilidades dietarias\nDermatitis alérgica alimentaria\nTrastornos digestivos por sensibilidad alimentaria\nDieta de eliminación",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Alimento seco completo y balanceado",
    formula: "<strong>FÓRMULA</strong><br>Dieta prescripta con:<br>Proteínas de fuente novedosa o hidrolizadas<br>Hidratos de carbono de fuente novedosa<br>Ácidos grasos omega-3<br>Prebióticos<br>Sin ingredientes comunes alergénicos",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Administrar como único alimento según las necesidades calóricas del perro. La cantidad diaria debe dividirse en 2-3 comidas. No administrar otros alimentos, golosinas o suplementos durante el período de prueba.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Duración:</strong> Mínimo 8-12 semanas para dieta de eliminación, o de por vida si se confirma la sensibilidad, según indicación veterinaria.<br><strong>Contraindicaciones:</strong> No utilizar en perros gestantes, lactantes o en crecimiento sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de MV Perros Sensibilidad Dietaria la mejor opción",
    benefits: [
      { title: "Proteínas Novedosas", description: "Proteínas de fuentes novedosas o hidrolizadas que reducen el riesgo de reacciones alérgicas." },
      { title: "Hidratos de Carbono Novedosos", description: "Hidratos de carbono de fuentes novedosas que minimizan las reacciones alérgicas." },
      { title: "Sin Alérgenos Comunes", description: "Formulación sin ingredientes comunes que causan alergias alimentarias." },
      { title: "Nutrición Completa", description: "Alimento completo y balanceado que proporciona todos los nutrientes necesarios." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "OHM",
    logoSubtitle: "/ Productos 100% naturales para modular la ansiedad y el estrés",
    fullDescription: "OHM es una línea de productos naturales que ayudan a reducir la ansiedad y el estrés en perros y gatos usando feromonas sintéticas.",
    indication: "Ayudar durante viajes\nAyudar después de cirugías\nAyudar durante mudanzas\nAyudar en cambios de estilo de vida\nMejorar el paseo\nAyudar durante visitas al veterinario\nControlar estrés y ansiedad\nAyudar con problemas de comportamiento\nAyudar con ansiedad por separación\nAyudar con miedo a ruidos fuertes",
    presentationTitle: "OHM COMPRIMIDOS",
    presentationSubtitle: "Para perros y gatos",
    formula: "<strong>FÓRMULA</strong><br>Producto 100% natural a base de feromonas sintéticas diseñado para modular la ansiedad y el estrés.",
    dosage: "<strong>Administración:</strong><br>Comprimidos de administración oral. Consultar con su veterinario para la dosificación adecuada según el peso y necesidades de su mascota.",
    benefitsTitle: "Características de OHM",
    benefitsSubtitle: "Ventajas que hacen de OHM la mejor opción para el cuidado y modulación de la ansiedad",
    benefits: [
      { title: "100% Natural", description: "La línea OHM está diseñada con principios activos totalmente naturales, sin efectos adversos, incluso con uso prolongado." },
      { title: "Seguro con Otras Medicaciones", description: "Los principios activos de OHM no presentan interacciones medicamentosas, por lo que es seguro usarlo junto con otros tratamientos." },
      { title: "Uso Prolongado", description: "Se puede administrar por períodos prolongados ya que no tiene un impacto negativo a las concentraciones indicadas." },
      { title: "Sin Efectos Adversos", description: "Al utilizar principios activos totalmente naturales, no generan efectos adversos, aun tomándolos de forma prolongada." },
      { title: "Modulación del Comportamiento", description: "Las feromonas actúan como mensajeros que modifican el comportamiento del animal, ayudando a modular la ansiedad y el estrés de forma natural." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "OHM",
    logoSubtitle: "/ Línea Gatos - Productos 100% naturales",
    fullDescription: "OHM Gatos es un producto natural que ayuda a reducir la ansiedad y el estrés en gatos usando feromonas sintéticas.",
    indication: "Ayudar durante viajes\nAyudar después de cirugías\nAyudar durante mudanzas\nAyudar en cambios de estilo de vida\nAyudar durante visitas al veterinario\nControlar estrés y ansiedad\nAyudar con problemas de comportamiento\nAyudar con ansiedad por separación\nAyudar con miedo a ruidos fuertes",
    presentationTitle: "OHM GATOS",
    presentationSubtitle: "Comprimidos y Pasta palatable exclusiva para gatos",
    formula: "<strong>FÓRMULA</strong><br>Producto 100% natural a base de feromonas sintéticas diseñado específicamente para modular la ansiedad y el estrés en gatos.",
    dosage: "<strong>Administración:</strong><br>Comprimidos o pasta palatable de administración oral. Consultar con su veterinario para la dosificación adecuada según el peso y necesidades de su gato.",
    benefitsTitle: "Características de OHM Gatos",
    benefitsSubtitle: "Ventajas que hacen de OHM Gatos la mejor opción para el cuidado felino",
    benefits: [
      { title: "100% Natural", description: "La línea OHM está diseñada con principios activos totalmente naturales, sin efectos adversos, incluso con uso prolongado." },
      { title: "Formulaciones Específicas para Gatos", description: "OHM Gatos incluye comprimidos y pasta palatable especialmente formulados para la administración en felinos." },
      { title: "Seguro con Otras Medicaciones", description: "Los principios activos de OHM no presentan interacciones medicamentosas, por lo que es seguro usarlo junto con otros tratamientos." },
      { title: "Uso Prolongado", description: "Se puede administrar por períodos prolongados ya que no tiene un impacto negativo a las concentraciones indicadas." },
      { title: "Sin Efectos Adversos", description: "Al utilizar principios activos totalmente naturales, no generan efectos adversos, aun tomándolos de forma prolongada." },
      { title: "Modulación del Comportamiento", description: "Las feromonas actúan como mensajeros que modifican el comportamiento del gato, ayudando a modular la ansiedad y el estrés de forma natural." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "OHM",
    logoSubtitle: "/ Difusor Hogar - Feromonas Felinas",
    fullDescription: "OHM Home Gatos es un difusor ambiental que libera feromonas sintéticas continuamente, creando un ambiente calmante para su gato.",
    indication: "Crear un ambiente calmante en el hogar\nReducir el estrés en situaciones de cambio\nAyudar durante mudanzas\nAyudar con la llegada de nuevos miembros a la familia\nAyudar con cambios en el entorno\nAyudar en hogares con múltiples gatos\nControlar estrés y ansiedad\nAyudar con comportamiento destructivo\nAyudar con agresión entre gatos",
    presentationTitle: "OHM HOME GATOS",
    presentationSubtitle: "Difusor hogar con feromonas felinas",
    formula: "<strong>FÓRMULA</strong><br>Difusor ambiental con feromonas sintéticas felinas que mimetizan a las naturales, diseñado para crear un ambiente calmante y seguro.",
    dosage: "<strong>Uso:</strong><br>El difusor se conecta a un enchufe eléctrico y libera las feromonas de forma continua. Cubre un área de aproximadamente 50-70 m². Reemplazar el difusor cada 30 días para mantener la efectividad.",
    benefitsTitle: "Características del Difusor OHM Home Gatos",
    benefitsSubtitle: "Ventajas que hacen de OHM Home Gatos la mejor opción para el ambiente felino",
    benefits: [
      { title: "100% Natural", description: "Utiliza feromonas sintéticas 100% naturales que mimetizan a las feromonas naturales de los gatos." },
      { title: "Efecto Continuo", description: "El difusor libera las feromonas de forma continua, creando un ambiente calmante las 24 horas del día." },
      { title: "Cobertura Amplia", description: "Cubre un área de aproximadamente 50-70 m², ideal para espacios medianos y grandes." },
      { title: "Fácil de Usar", description: "Simplemente conéctelo a un enchufe eléctrico y comience a funcionar inmediatamente." },
      { title: "Sin Efectos Adversos", description: "Al utilizar principios activos totalmente naturales, no genera efectos adversos." },
      { title: "Ideal para Múltiples Gatos", description: "Especialmente útil en hogares con múltiples gatos, ayudando a reducir tensiones y conflictos." }
    ]
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
    specialModal: null,
    // Extended modal info
    logoText: "OHM",
    logoSubtitle: "/ Difusor Hogar - Feromonas Caninas",
    fullDescription: "OHM Home Perros es un difusor ambiental que libera feromonas sintéticas continuamente, creando un ambiente calmante para su perro.",
    indication: "Crear un ambiente calmante en el hogar\nReducir el estrés en situaciones de cambio\nAyudar durante mudanzas\nAyudar con la llegada de nuevos miembros a la familia\nAyudar con cambios en el entorno\nAyudar en hogares con múltiples perros\nAyudar con ansiedad por separación\nControlar estrés y ansiedad\nAyudar con comportamiento destructivo",
    presentationTitle: "OHM HOME PERROS",
    presentationSubtitle: "Difusor hogar con feromonas caninas",
    formula: "<strong>FÓRMULA</strong><br>Difusor ambiental con feromonas sintéticas caninas que mimetizan a las naturales, diseñado para crear un ambiente calmante y seguro.",
    dosage: "<strong>Uso:</strong><br>El difusor se conecta a un enchufe eléctrico y libera las feromonas de forma continua. Cubre un área de aproximadamente 50-70 m². Reemplazar el difusor cada 30 días para mantener la efectividad.",
    benefitsTitle: "Características del Difusor OHM Home Perros",
    benefitsSubtitle: "Ventajas que hacen de OHM Home Perros la mejor opción para el ambiente canino",
    benefits: [
      { title: "100% Natural", description: "Utiliza feromonas sintéticas 100% naturales que mimetizan a las feromonas naturales de los perros." },
      { title: "Efecto Continuo", description: "El difusor libera las feromonas de forma continua, creando un ambiente calmante las 24 horas del día." },
      { title: "Cobertura Amplia", description: "Cubre un área de aproximadamente 50-70 m², ideal para espacios medianos y grandes." },
      { title: "Fácil de Usar", description: "Simplemente conéctelo a un enchufe eléctrico y comience a funcionar inmediatamente." },
      { title: "Sin Efectos Adversos", description: "Al utilizar principios activos totalmente naturales, no genera efectos adversos." },
      { title: "Ideal para Ansiedad por Separación", description: "Especialmente útil para perros que sufren de ansiedad por separación, ayudando a crear un ambiente más seguro y calmante." }
    ]
  },

  // ============================================
  // OTROS (Anestésicos, Neurología, Respiratorio, Antiviral)
  // ============================================
  "gabaday": {
    id: "gabaday",
    name: "Gabaday",
    category: "Neurología • Ansiolítico, Analgésico y Anticonvulsivo",
    categories: ["perros", "gatos"],
    price: null,
    image: "images/GABADAY.jpg",
    description: "Ansiolítico, analgésico y anticonvulsivo a base de Gabapentina en solución oral para perros y gatos.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "GABADAY",
    logoSubtitle: "/ Ansiolítico, Analgésico y Anticonvulsivo",
    fullDescription: "Gabaday es una solución oral a base de Gabapentina para tratar dolor crónico, convulsiones y ansiedad en perros y gatos.",
    indication: "Tratar dolor crónico\nTerapia complementaria para convulsiones\nTratar ansiedad aguda\nAyudar durante visitas veterinarias\nAyudar durante transporte",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Frasco gotero por 20 ml",
    formula: "<strong>FÓRMULA</strong><br>Cada ml de solución contiene:<br>Gabapentina: 100 mg<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características de la Gabapentina",
    benefits: [
      { title: "Acción sobre Canales de Calcio", description: "La acción de la gabapentina es a través de la unión específica de la subunidad de los canales de Ca++ dependientes de voltaje presente en el cerebro de mamíferos, provocando una disminución en la liberación de neurotransmisores (como el neurotransmisor excitador glutamato) y transmisión sináptica de neurotransmisores excitatorios específicos." },
      { title: "Análogo del GABA", description: "La gabapentina se desarrolló como un análogo químico del ácido aminobutírico (GABA), pero no afecta los sistemas neuronales GABAérgicos. Es probable que cualquier efecto sobre el GABA sea secundario a los efectos de los canales de calcio, el tipo neuronal y las respuestas regionales." }
    ]
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
    image: "images/solubron-20.png",
    description: "Broncodilatador y mucolítico para vías respiratorias.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "SOLUBRON 20",
    logoSubtitle: "Broncodilatador y Mucolítico",
    fullDescription: "Solubron 20 es un broncodilatador y mucolítico en solución oral para tratar afecciones respiratorias en perros y gatos.",
    indication: "Tratar afecciones respiratorias\nFacilitar la expectoración\nDilatar las vías respiratorias\nLiquefacer secreciones bronquiales",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Frasco con 20 ml",
    formula: "<strong>FÓRMULA</strong><br>Cada ml contiene:<br>Bromhexina: 2 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros y Gatos:</strong> 0,5 ml por cada 10 kg de peso corporal cada 12 horas, según indicación veterinaria.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a la bromhexina.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Solubron 20 la mejor opción",
    benefits: [
      { title: "Mucolítico", description: "Facilita la expectoración y la eliminación de secreciones bronquiales." },
      { title: "Broncodilatador", description: "Ayuda a dilatar las vías respiratorias facilitando la respiración." },
      { title: "Solución Oral", description: "Formulación líquida que facilita la administración." },
      { title: "Tratamiento Eficaz", description: "Eficaz en el tratamiento de afecciones respiratorias agudas y crónicas." }
    ]
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

