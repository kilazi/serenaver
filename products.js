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
    fullDescription: "<strong>Diurene 40® (Furosemida)</strong> es un diurético de asa potente indicado para el tratamiento de la insuficiencia cardíaca congestiva. La furosemida reduce la precarga como terapia deplecionante asociada a la restricción de sal en la dieta.",
    indication: "<strong>Indicado para:</strong><ul><li>Tratamiento de edemas (congestión pulmonar, ascitis) asociados a insuficiencia cardíaca</li><li>Edema agudo de tejidos no inflamatorios</li><li>Hipertensión</li><li>Desequilibrios electrolíticos (hiperpotasemia e hipercalcemia)</li></ul>",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Furosemida 40 mg<br>Excipientes c.s.",
    dosage: "<strong>DOSIS</strong><br><strong>Vía oral / Perros:</strong><br>2 a 4 mg/kg cada 8 a 12 horas<br>Equivalente a 1 comprimido cada 20 kg. o 10 kg. respectivamente.<br><br><strong>Nota:</strong> La dosis debe ser ajustada según la respuesta individual. Se sugiere fomentar la ingesta de alimento y agua.",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características que hacen de Diurene 40® el complemento ideal",
    benefits: [
      { title: "Diurético de Asa Potente", description: "Diurene 40® contiene Furosemida, un diurético de asa potente para el tratamiento de la insuficiencia cardíaca congestiva." },
      { title: "Reducción de Precarga", description: "La furosemida reduce la precarga como terapia deplecionante asociada a la restricción de sal en la dieta." },
      { title: "Administración Oral", description: "Actúa dentro de los 30 minutos debido a su rápida absorción gastrointestinal y baja liposolubilidad." },
      { title: "Actividad Diurética", description: "Efectiva tanto en acidosis como en alcalosis." },
      { title: "Mecanismo de Acción", description: "Actúa directamente sobre el riñón, inhibiendo la reabsorción de sodio, cloro y potasio en los túbulos proximales y distales, y en la rama ascendente del asa de Henle, aumentando la excreción de agua." },
      { title: "Ingeniería de Formulación", description: "Permite que la acción comience antes de los treinta minutos, a diferencia de otros productos." },
      { title: "Complemento Ideal", description: "Diurene 40® es el complemento ideal en el tratamiento de las cardiopatías caninas junto a Cardial B, Pimocard y una dieta acorde a las necesidades del paciente." }
    ]
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
    description: "La alternativa más efectiva para el control de pulgas y garrapatas en gatos.",
    badge: "Gatos",
    variants: [
      { name: "40 CM", price: null, image: "images/ecthol-collar.png" }
    ],
    specialModal: null,
    // Extended modal info
    logoText: "ECTHOL",
    logoSubtitle: "Collar / Antipulgas y garrapatas",
    fullDescription: "El nuevo <strong>Collar Ecthol</strong> es la alternativa más efectiva para el control de pulgas y garrapatas en perros y gatos. Es ideal para aquellas mascotas que permanecen tiempos prolongados fuera del hogar y en contacto con otros animales disfrutando de la vida al aire libre.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de pulgas (Ctenocephalides canis, Ctenocephalides felis)</li><li>Control de garrapatas (Amblyoma, Dermacentor, Ripicephalus, Ixodes)</li><li>Prevención de re-infestación en espacios abiertos</li><li>Protección en épocas y zonas de temperaturas elevadas y humedad</li><li>Prevención del ataque de formas inmaduras de pulgas y garrapatas presentes en el ambiente</li></ul>",
    presentationTitle: "ECTHOL COLLAR GATOS",
    presentationSubtitle: "40 CM",
    formula: "<strong>FÓRMULA</strong><br>Collar con liberación controlada de Clorpirifós",
    dosage: "<strong>MODO DE ACCIÓN:</strong><br>El Collar Ecthol fue diseñado para liberar de forma constante y progresiva su principio activo, logrando una alta efectividad en la eliminación de pulgas y garrapatas. Su composición es inocua para el animal que lo porta.<br><br><strong>Mecanismo:</strong><br>1. El avanzado polímero del collar contiene en su interior Clorpirifós a la espera de su activación.<br>2. La temperatura corporal genera su liberación en forma constante, efectiva y segura.<br>3. Sobre el manto despliega su máximo poder contra pulgas y garrapatas, protegiendo por mucho más tiempo.",
    benefitsTitle: "Características del Producto",
    benefitsSubtitle: "Ventajas que hacen de Ecthol Collar la mejor opción",
    benefits: [
      { title: "Acción Controlada", description: "Innovadora inclusión de Clorpirifós en el polímero, permitiendo una liberación gradual por hasta 10 meses, manteniendo su efectividad incluso en climas extremos. También ayuda en la recuperación de mantos dañados y mejora la calidad del pelo causado por lesiones de pulgas y garrapatas en animales no tratados." },
      { title: "Máxima Seguridad", description: "Mecanismo de cierre 'Safe Life' diseñado para proteger a la mascota en caso de enganches accidentales." },
      { title: "Diseño Innovador", description: "El Collar Ecthol pasa desapercibido en el cuello del animal, integrándose con su pelaje, y añade un toque de color elegante gracias a su exclusivo diseño de cierre 'Easy Fit'." },
      { title: "Fácil Colocación", description: "1. Sacar el collar de la bolsa inviolable que está dentro del estuche. 2. Ajustarlo a la medida del cuello de la mascota sin apretar y dejando que pasen dos dedos. 3. De ser necesario, el excedente puede cortarse." },
      { title: "Protección Prolongada", description: "Nada brinda tanta protección por tanto tiempo como el nuevo Collar Ecthol." }
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
    fullDescription: "El nuevo <strong>Collar Ecthol</strong> es la alternativa más efectiva para el control de pulgas y garrapatas en perros y gatos. Es ideal para aquellas mascotas que permanecen tiempos prolongados fuera del hogar y en contacto con otros animales disfrutando de la vida al aire libre.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de pulgas (Ctenocephalides canis, Ctenocephalides felis)</li><li>Control de garrapatas (Amblyoma, Dermacentor, Ripicephalus, Ixodes)</li><li>Prevención de re-infestación en espacios abiertos</li><li>Protección en épocas y zonas de temperaturas elevadas y humedad</li><li>Prevención del ataque de formas inmaduras de pulgas y garrapatas presentes en el ambiente</li><li>Transmisión de agentes como Dipylidium caninum, Bartonella spp., Rickettsia felis, Babesia, Borrelia, Ehrlichia, o Hepatozoon canis</li></ul>",
    presentationTitle: "ECTHOL COLLAR PERROS",
    presentationSubtitle: "40 CM / 63 CM",
    formula: "<strong>FÓRMULA</strong><br>Collar con liberación controlada de Clorpirifós",
    dosage: "<strong>MODO DE ACCIÓN:</strong><br>El Collar Ecthol fue diseñado para liberar de forma constante y progresiva su principio activo, logrando una alta efectividad en la eliminación de pulgas y garrapatas. Su composición es inocua para el animal que lo porta.<br><br><strong>Mecanismo:</strong><br>1. El avanzado polímero del collar contiene en su interior Clorpirifós a la espera de su activación.<br>2. La temperatura corporal genera su liberación en forma constante, efectiva y segura.<br>3. Sobre el manto despliega su máximo poder contra pulgas y garrapatas, protegiendo por mucho más tiempo.",
    benefitsTitle: "Características del Producto",
    benefitsSubtitle: "Ventajas que hacen de Ecthol Collar la mejor opción",
    benefits: [
      { title: "Acción Controlada", description: "Innovadora inclusión de Clorpirifós en el polímero, permitiendo una liberación gradual por hasta 10 meses, manteniendo su efectividad incluso en climas extremos. También ayuda en la recuperación de mantos dañados y mejora la calidad del pelo causado por lesiones de pulgas y garrapatas en animales no tratados." },
      { title: "Máxima Seguridad", description: "Mecanismo de cierre 'Safe Life' diseñado para proteger a la mascota en caso de enganches accidentales." },
      { title: "Diseño Innovador", description: "El Collar Ecthol pasa desapercibido en el cuello del animal, integrándose con su pelaje, y añade un toque de color elegante gracias a su exclusivo diseño de cierre 'Easy Fit'." },
      { title: "Fácil Colocación", description: "1. Sacar el collar de la bolsa inviolable que está dentro del estuche. 2. Ajustarlo a la medida del cuello de la mascota sin apretar y dejando que pasen dos dedos. 3. De ser necesario, el excedente puede cortarse." },
      { title: "Protección Prolongada", description: "Nada brinda tanta protección por tanto tiempo como el nuevo Collar Ecthol." }
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
    fullDescription: "Biomodulador detoxificante y antioxidante a base de <strong>clorofila</strong>, con acción desodorizante corporal y bucal en comprimidos de administración oral.",
    indication: "<strong>Indicado para:</strong><ul><li>Disminuye la halitosis</li><li>Disminuye el olor corporal</li><li>Elimina el mal olor bucal y corporal</li><li>En hembras elimina el olor estrual y desodoriza la orina. Se evita de esta forma la atracción de los machos y las molestias que esto ocasiona</li><li>Su actividad desodorizante se ve potenciada por su capacidad germicida y antiinflamatoria. Estas acciones contribuyen a la mejora de la inflamación de la cavidad oral, responsable de la aparición de halitosis</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envase conteniendo 2 blisters con 10 comprimidos cada uno",
    formula: "<strong>FÓRMULA</strong><br>Biomodulador a base de clorofila",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características que hacen de Nomat un biomodulador de elección",
    benefits: [
      { title: "Desintoxicante y Antioxidante", description: "Oxigena los tejidos corporales, creando un medio desfavorable para bacterias anaeróbicas." },
      { title: "Acción Catalizadora", description: "Su acción catalizadora, neutraliza sustancias en distintos medios: neutros, ácidos o básicos." },
      { title: "Procesos Metabólicos", description: "Colabora con procesos metabólicos, ejerciendo su acción detoxificante, que se manifiesta entre otras cosas disminuyendo el olor corporal y bucal." },
      { title: "Antioxidante Poderoso", description: "Es un poderoso antioxidante, que mejora la salud gastrointestinal e inmunológica." }
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
    description: "Colirio estéril a base de idoxuridina, fenazona, nafazolina.",
    logoSubtitle: "Antiviral, Antiinflamatorio y Descongestivo",
    fullDescription: "<strong>Colirama Viral</strong> es un colirio estéril a base de idoxuridina, fenazona y nafazolina. Combina acción antiviral, antiinflamatoria no esteroide y descongestiva para el tratamiento de oftalmodermias de etiología viral y bacteriana en procesos inflamatorios asociados.",
    indication: "<strong>Indicado para:</strong><ul><li>Oftalmodermias de etiología viral (queratitis y conjuntivitis herpética en gatos)</li><li>Procesos bacterianos en procesos inflamatorios asociados</li><li>Queratitis y conjuntivitis de origen viral</li><li>Infecciones oculares con componente inflamatorio</li></ul>",
    presentationTitle: "Colirama Viral",
    presentationSubtitle: "Frasco gotero de 10 ml, con aplicador atraumático",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de la suspensión contiene:<br>Idoxuridina: 100 mg<br>Fenazona: 400 mg<br>Clorhidrato de Nafazolina: 50 mg<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Acción Terapéutica",
    benefitsSubtitle: "Triple acción: antiviral, antiinflamatoria y descongestiva",
    benefits: [
      { title: "Antiviral", description: "La idoxuridina se incorpora al ADN vírico, en el lugar de la timidina, de modo que inhibe la replicación del virus" },
      { title: "Antiinflamatorio no esteroide", description: "La fenazona disminuye la síntesis de prostaglandinas y posiblemente inhibe la síntesis o actividades de otros mediadores de la respuesta inflamatoria" },
      { title: "Descongestivo", description: "La nafazolina es un simpaticomimético, de rápida acción vasoconstrictora" }
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
    fullDescription: "Ungüento estéril a base de <strong>Vitaminas A y E</strong> e <strong>Hidrolizado de caseína</strong>.",
    indication: "<strong>Indicado para:</strong> Tratamiento tópico de las queratoconjuntivitis ulcerativas en perros y gatos. También puede utilizarse como humectante en animales con síndrome de ojo seco.",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Pomo con 3,5 g. con aplicador oftálmico",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 g de ungüento contiene:<br>Caseína hidrolizada...................2,5 g<br>Vitamina A palmitato..................1 g<br>Vitamina E acetato....................0,1 g<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Componentes Activos",
    benefitsSubtitle: "Características que hacen de Epitelizante Ocular un tratamiento de elección",
    benefits: [
      { title: "Vitamina A", description: "Es crucial para la integridad y la función del epitelio corneal. Favorece la síntesis de glicoproteínas que humectan el epitelio de la córnea." },
      { title: "Vitamina E", description: "Es un potente antioxidante que protege las células epiteliales del ojo de daños oxidativos, contribuyendo a la salud general de la córnea y la conjuntiva. Ayuda a mantener la integridad de las membranas celulares del epitelio ocular al prevenir la peroxidación lipídica." },
      { title: "Caseína Hidrolizada", description: "Proporciona aminoácidos esenciales para la reparación y mantenimiento del epitelio ocular, apoyando la regeneración, colaborando en la cicatrización de úlceras y optimizando la salud de los tejidos oculares." }
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
    fullDescription: "Colirio estéril a base de <strong>Flurbiprofeno</strong>.",
    indication: "<strong>Indicado en tratamiento de procesos inflamatorios:</strong><ul><li>Conjuntivitis</li><li>Uveitis leves y moderadas</li><li>Cirugías intraoculares (inhibición de la miosis intraoperatoria)</li><li>Post reparación de úlceras corneales con gran vascularización</li><li>Procesos dolorosos oculares</li><li>Reemplazo de glucocorticoides tópicos cuando están contraindicados</li><li>En asociación con glucocorticoides tópicos en procesos inflamatorios muy severos</li></ul>",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml contiene:<br>Flurbiprofeno...............0,1 g<br>Excipientes c.s.",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características del Flurbiprofeno",
    benefits: [
      { title: "Antiinflamatorio No Esteroideo", description: "El flurbiprofeno es un antiinflamatorio no esteroideo (AINE) que inhibe las enzimas COX-1 y COX-2, responsables de la síntesis de prostaglandinas." },
      { title: "Eficacia", description: "Es eficaz en la reducción de la inflamación y el dolor, proporcionando un alivio rápido asociado con diversas condiciones oculares." },
      { title: "Inicio de Acción Rápido", description: "El inicio de acción es rápido, otorgando alivio en un corto período de tiempo, lo cual es importante para el manejo de condiciones agudas y mejorar el confort del animal." }
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
    fullDescription: "Colirio estéril a base de <strong>Ofloxacina</strong>, fluoroquinolona de última generación.",
    indication: "<strong>Indicado para el tratamiento de:</strong><ul><li>Conjuntivitis infecciosas bacterianas</li><li>Úlceras corneales</li><li>Infección secundaria en queratoconjuntivitis seca</li><li>Intervenciones oftálmicas pre y post quirúrgicas en perros y gatos</li></ul>",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de solución contiene:<br>Ofloxacina: 0,3 g<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características que hacen de Ofloxacina un antibiótico de elección",
    benefits: [
      { title: "Ofloxacina", description: "Antibiótico bactericida de amplio espectro efectivo contra bacterias Gram positivas y Gram negativas, incluyendo cepas resistentes. Muestra excelente penetración en tejidos oculares (córnea y cámara anterior) debido a su liposolubilidad." },
      { title: "Solubilidad Óptima", description: "Su solubilidad óptima a pH neutro minimiza la precipitación del principio activo y asegura mayor concentración en las lágrimas." },
      { title: "Eficacia", description: "Efectivo contra algunos patógenos resistentes a otros antibióticos, lo cual es importante para infecciones recurrentes o de difícil tratamiento." },
      { title: "HPMC (Hidroxipropil Metilcelulosa)", description: "Mejora la composición de la película lagrimal dañada y promueve mayor permanencia del principio activo en el ojo." }
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
    fullDescription: "<strong>Dermoxil</strong> es un shampoo de acción antiséptica y antiseborreico oleosa. Antiséptico bactericida de amplio espectro que combate la seborrea oleosa por su acción sebostática sobre las glándulas de secreción sebácea. Presenta un efecto rubefaciente folicular y buena actividad queratolítica. El peróxido de benzoílo ejerce una acción de lavado folicular que es muy útil en el tratamiento de trastornos comedónicos y/o hiperqueratosis folicular. La base cosmética que vehiculiza al activo (POB) es única por sus excelentes cualidades. Entre estas su acción antipruriginosa no corticoide. Hipoalergénico. Humectante. Emoliente. Demulcente.",
    indication: "<strong>Indicado para:</strong><ul><li>Piodermias</li><li>Procesos seborreicos oleosos</li><li>Foliculitis</li><li>Impétigo</li><li>Acné felino</li><li>Como coadyuvante en la demodicosis</li><li>Lavado y antisepsia del campo quirúrgico, la cual se complementa con la solución Clorhexidina spray</li></ul>",
    presentationTitle: "Dermoxil",
    presentationSubtitle: "Envase de 250 ml con cámara de aire para permitir su correcta agitación. Contiene una bolilla inerte para facilitar la homogeneización del producto",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de la solución contiene:<br>Peróxido de Benzoílo: 2,5 g<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características y beneficios del shampoo Dermoxil",
    benefits: [
      { title: "", description: "Antiséptico bactericida de amplio espectro" },
      { title: "", description: "Combate la seborrea oleosa por su acción sebostática sobre las glándulas de secreción sebácea" },
      { title: "", description: "Efecto rubefaciente folicular y buena actividad queratolítica" },
      { title: "", description: "El peróxido de benzoílo ejerce una acción de lavado folicular muy útil en el tratamiento de trastornos comedónicos y/o hiperqueratosis folicular" },
      { title: "", description: "El mecanismo de acción antibacteriana se debería a la liberación de radicales libres tóxicos para los microorganismos" },
      { title: "", description: "Generalmente existe una reducción de los lípidos superficiales y ácidos grasos libres de la piel durante el tratamiento" },
      { title: "", description: "Base cosmética única con acción antipruriginosa no corticoide" },
      { title: "", description: "Hipoalergénico, humectante, emoliente y demulcente" }
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
    fullDescription: "Fungistático a base de <strong>Griseofulvina micronizada</strong> de administración oral para caninos y felinos.",
    indication: "<strong>Indicado para:</strong><ul><li>Tiña</li><li>Dermatomicosis causadas por Microsporum canis, Microsporum gypseum y Tricophyton mentagrophytes</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envase con 2 blisters de 10 comprimidos cada uno",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Griseofulvina micronizada: 250 mg / 500 mg<br>Excipientes c.s. según presentación",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características de la Griseofulvina",
    benefits: [
      { title: "Fungistático", description: "Interfiere en la síntesis de las proteínas y los ácidos nucleicos de la pared celular de hongos en crecimiento activo." },
      { title: "Absorción y Distribución", description: "Después de su administración por vía oral se absorbe a nivel gastrointestinal, depositándose selectivamente en la queratina neoformada del pelo, uñas y piel, pasando luego de estas capas profundas a la queratina superficial." },
      { title: "Actividad Micostática", description: "La concentración de Griseofulvina en las nuevas células de la epidermis, le proporciona actividad micostática contra los dermatofitos." }
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
    fullDescription: "Colirio estéril a base de <strong>Prednisolona fosfato</strong>, <strong>Moxifloxacina</strong> y <strong>Fenilefrina</strong>.",
    indication: "<strong>Indicado para procesos inflamatorios no ulcerativos:</strong><ul><li>Uveitis</li><li>Conjuntivitis</li><li>Queratitis no ulcerativa (Pannus en Pastores Alemanes, Queratitis eosinofílica en gatos, Queratitis pigmentaria)</li><li>Dacriocistitis (inflamación del saco lagrimal)</li></ul>",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "NUEVO",
    formula: "<strong>FÓRMULA</strong><br>Cada ml de solución contiene:<br>Prednisolona fosfato: 10 mg<br>Moxifloxacina HCL: 3 mg<br>Fenilefrina HCL: 1,2 mg<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Componentes Activos",
    benefitsSubtitle: "Características que hacen de UV Day un tratamiento de elección",
    benefits: [
      { title: "Moxifloxacina", description: "Antibiótico bactericida de amplio espectro con buena penetración ocular, efectivo contra bacterias intracelulares y cepas resistentes, útil para infecciones recurrentes o de difícil tratamiento. Bajo perfil de resistencia cruzada." },
      { title: "Fenilefrina", description: "Induce la dilatación pupilar y actúa como vasoconstrictor, reduciendo la hiperemia conjuntival." },
      { title: "Prednisolona", description: "Altamente efectiva en la reducción de la inflamación ocular, disminuyendo el dolor y la incomodidad mediante la modulación de la inflamación y la respuesta inmune." },
      { title: "HEC (Hidroxietil Celulosa)", description: "Componente clave diseñado para mejorar la lubricación y prolongar el tiempo de permanencia de las gotas en la superficie ocular." }
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
    fullDescription: "Colirio estéril a base de <strong>Moxifloxacina</strong> y <strong>D-Pantenol</strong>.",
    indication: "<strong>Indicado para:</strong> Manejo microbiano de la superficie ocular, úlceras simples o profundas con o sin contaminante.",
    presentationTitle: "PRESENTACIÓN FRASCO OFTÁLMICO POR 5 ml.",
    presentationSubtitle: "NUEVO",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de solución contiene:<br>D-Pantenol: (cantidad especificada) g<br>Moxifloxacina clorhidrato: 0,5 g<br>Excipientes c.s.",
    dosage: "",
    benefitsTitle: "Componentes Activos",
    benefitsSubtitle: "Características que hacen de Anti Úlceras un tratamiento de elección",
    benefits: [
      { title: "Moxifloxacina", description: "Antibiótico bactericida de amplio espectro con buena penetración ocular, efectivo contra bacterias intracelulares y cepas resistentes, útil para infecciones recurrentes o de difícil tratamiento." },
      { title: "D-Pantenol", description: "Promotor de la cicatrización corneal con propiedades regenerativas, humectante que alivia la sequedad ocular, proporciona un efecto calmante sobre el tejido irritado y es bien tolerado por las mascotas." },
      { title: "HEC (Hidroxietil Celulosa)", description: "Componente clave diseñado para mejorar la lubricación y prolongar el tiempo de permanencia de las gotas en la superficie ocular." }
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
    description: "Biomodulador activador de la función neuronal en comprimidos palatables.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "IQ 180",
    logoSubtitle: "/ Biomodulador activador de la función neuronal",
    fullDescription: "Biomodulador activador de la función neuronal en comprimidos palatables.",
    indication: "<strong>Indicado para:</strong> Ayuda a prevenir la degeneración de los procesos cognitivos.",
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
      { title: "Ácido Ascórbico", description: "Antioxidante, regula la síntesis de vitamina E." },
      { title: "ATP", description: "Reduce inflamación neuronal, disminuye muerte neuronal, mejora la transmisión colinérgica y mejora la función cognitiva." },
      { title: "Propiedades Adicionales", description: "Antioxidante. Regenerador celular. Disminuye el stress por ansiedad." }
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
    fullDescription: "Neovita es el nuevo integrante de la familia de Biomoduladores desarrollado por Holliday Scott para el tratamiento integral de pacientes oncológicos. Este producto aporta los nutrientes requeridos una vez finalizado el tratamiento, ya sea quirúrgico, quimioterapia o radioterapia. Por otra parte, también es ideal para utilizar en perros y gatos que se encuentran en la etapa de cuidados paliativos.",
    indication: "<strong>Está indicado en las siguientes situaciones:</strong><ul><li>Al finalizar el esquema terapéutico con el fin de mitigar el estrés oxidativo producido por las quimioterapias o radiación.</li><li>Acompañando el tratamiento paliativo con el objetivo de aportar nutrientes esenciales que mejoren la calidad de vida del paciente.</li><li>En períodos de convalecencia prolongados.</li></ul>",
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
      { title: "Glutamina", description: "El aporte de Glutamina es muy importante en el paciente oncológico. Esto se debe a que la célula cancerosa restringe la disponibilidad de nutrientes a las células sanas, entre los que se encuentra la glutamina. Esta disminución podría afectar la efectividad de la citorreducción tumoral. Además, la glutamina colabora en mejorar la salud sobre todo a nivel intestinal." },
      { title: "Vitamina C", description: "Es un excelente y potente antioxidante que además mejora la calidad de vida y disminuye los efectos secundarios. La dosis de esta vitamina debe ser baja, ya que una dosis elevada está contraindicada en estos casos." },
      { title: "Gluconato de Zinc", description: "Es un cofactor enzimático del sistema antioxidante. Además es un componente de al menos 200 enzimas, involucradas en el metabolismo energético y de los hidratos de carbono, en reacciones de biosíntesis y degradación de proteínas y en procesos biosintéticos de ácidos nucleicos. El zinc es el microelemento más comprometido con la inmunidad, sobre todo a nivel celular." },
      { title: "Vitamina A", description: "Vitamina liposoluble con acción antioxidante. Dentro de sus funciones antioxidantes se encuentran: regulación de la diferenciación celular epitelial, inhibición de la proliferación celular, incremento de la capacidad inmunológica, inhibición de mutagénesis inducida por los agentes físicos cancerígenos, reducción del daño nuclear ocasionado por cancerígenos químicos y biológicos." },
      { title: "Vitamina E", description: "Es el principal antioxidante encontrado dentro de las membranas lipídicas del organismo, preserva los ácidos grasos poliinsaturados de las membranas celulares de su oxidación mediante el bloqueo de radicales libres." }
    ]
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
    fullDescription: "<strong>Clorhexidina Gotas Óticas</strong> es una solución ótica antiséptica bactericida, fungicida y ceruminolítica. Antiséptico desinfectante bactericida-fungicida que se caracteriza por: No inactivarse en presencia de materia orgánica. Presentar un poder residual de hasta 48 hs (persiste más tiempo en el estrato córneo). Amplio espectro / Gram +, Gram-, virus con cubierta (herpes virus), hongos y esporas, mycobacteria (bacteriostático). Actúa por contacto en forma rápida.",
    indication: "<strong>Indicado para:</strong><ul><li>Limpieza y antisepsia del conducto auditivo</li><li>Tratamiento de otitis externas</li><li>Prevención de infecciones óticas</li><li>Eliminación de cerumen</li></ul>",
    formula: "<strong>FÓRMULA</strong><br>Solución ótica con Clorhexidina y Propilenglicol",
    dosage: "",
    benefitsTitle: "Mecanismo de Acción",
    benefitsSubtitle: "Características que hacen de Clorhexidina un antiséptico de elección",
    benefits: [
      { title: "", description: "No se inactiva en presencia de materia orgánica, manteniendo su eficacia" },
      { title: "", description: "Poder residual de hasta 48 horas, persiste más tiempo en el estrato córneo" },
      { title: "", description: "Amplio espectro: Gram +, Gram-, virus con cubierta (herpes virus), hongos y esporas, mycobacteria (bacteriostático)" },
      { title: "", description: "Actúa por contacto en forma rápida" },
      { title: "", description: "Mecanismo de acción: Provoca una ruptura de la membrana plasmática por alteración osmótica de la misma e inhibición de enzimas. En concentraciones elevadas precipita las proteínas y ácidos nucleicos microbianos" },
      { title: "", description: "El propilenglicol, por su efecto ceruminolítico, permite una mayor difusión del antiséptico y por lo tanto un comienzo de acción más rápido" }
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
    fullDescription: "Solución oral a base de <strong>Gabapentina</strong> para perros y gatos.",
    indication: "<strong>Indicado para:</strong><ul><li>Tratamiento del dolor crónico. Agente antinociceptivo.</li><li>Terapia complementaria para crisis de epilepsia refractaria o compleja.</li><li>Tratamiento para la ansiedad aguda en gatos y perros, en situaciones que generan estrés como visitas veterinarias y transporte del animal.</li></ul>",
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

