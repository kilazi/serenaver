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
    image: "images/prednisolona.png",
    description: "Corticosteroide antiinflamatorio e inmunosupresor.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "PREDNISOLONA 20 MG",
    logoSubtitle: "Glucocorticoide Sintético",
    fullDescription: "<strong>Prednisolona 20 MG</strong> es un glucocorticoide sintético en comprimidos. Corticosteroide antiinflamatorio e inmunosupresor para el tratamiento de procesos inflamatorios y alérgicos en perros y gatos.",
    indication: "<strong>Indicado para:</strong><ul><li>Tratamiento de procesos inflamatorios</li><li>Tratamiento de procesos alérgicos</li><li>Enfermedades autoinmunes</li><li>Shock y estados de colapso</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con 10 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Prednisolona: 20 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros y Gatos:</strong> 0,5 a 1 mg por kg de peso corporal, cada 12 a 24 horas, según indicación veterinaria.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en infecciones sistémicas sin tratamiento adecuado, úlceras gastrointestinales, diabetes mellitus, insuficiencia renal o cardíaca severa.<br><strong>Efectos colaterales:</strong> Poliuria, polidipsia, polifagia, supresión del eje hipotalámico-hipofisario-adrenal.<br><strong>Restricciones:</strong> No utilizar en hembras gestantes o lactantes sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Prednisolona 20 MG la mejor opción",
    benefits: [
      { title: "Antiinflamatorio Potente", description: "Efecto antiinflamatorio potente para el tratamiento de procesos inflamatorios agudos y crónicos." },
      { title: "Inmunosupresor", description: "Acción inmunosupresora útil en el tratamiento de enfermedades autoinmunes." },
      { title: "Alta Biodisponibilidad", description: "Excelente absorción oral y biodisponibilidad." },
      { title: "Dosificación Flexible", description: "Presentación en comprimidos que permite ajustar la dosis según las necesidades del paciente." }
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
    fullDescription: "<strong>Toracard</strong> es un cardiotónico en comprimidos. Indicado para el tratamiento de insuficiencia cardíaca congestiva en perros.",
    indication: "<strong>Indicado para:</strong><ul><li>Tratamiento de insuficiencia cardíaca congestiva en perros</li><li>Mejora de la contractilidad cardíaca</li><li>Vasodilatación arterial y venosa</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con 30 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Pimobendan: 5 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> 0,25 mg por kg de peso corporal, cada 12 horas.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en casos de cardiomiopatía hipertrófica o estenosis aórtica.<br><strong>Efectos colaterales:</strong> Pueden presentarse vómitos, diarrea, anorexia, letargia.<br><strong>Restricciones:</strong> Usar con precaución en animales con insuficiencia renal o hepática. No utilizar en hembras gestantes o lactantes sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Toracard la mejor opción",
    benefits: [
      { title: "Inotrópico Positivo", description: "Mejora la contractilidad del miocardio aumentando el gasto cardíaco." },
      { title: "Vasodilatador", description: "Produce vasodilatación arterial y venosa, reduciendo la precarga y poscarga." },
      { title: "Doble Mecanismo", description: "Combina efectos inotrópicos positivos y vasodilatadores para un tratamiento eficaz de la insuficiencia cardíaca." },
      { title: "Bien Tolerado", description: "Generalmente bien tolerado con efectos secundarios mínimos cuando se usa según indicación veterinaria." }
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
    specialModal: null,
    // Extended modal info
    logoText: "ECTHOL GMP GATOS",
    logoSubtitle: "Pipeta Antiparasitaria Externa",
    fullDescription: "<strong>Ecthol GMP Gatos</strong> es una pipeta antiparasitaria externa para el control de pulgas y garrapatas en gatos. Formulación con Fipronil y (S)-Metopreno para máxima eficacia.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de pulgas (Ctenocephalides felis)</li><li>Control de garrapatas</li><li>Prevención de re-infestación</li><li>Tratamiento de infestaciones existentes</li></ul>",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Pipetas según peso del gato",
    formula: "<strong>FÓRMULA</strong><br>Cada pipeta contiene:<br>Fipronil: 10%<br>(S)-Metopreno: 12%<br>Vehículo c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> Aplicar una pipeta completa sobre la piel, separando el pelo en la línea dorsal entre los omóplatos. Asegurar contacto directo con la piel.<br><br><strong>Vía de administración:</strong> Tópica (spot-on)<br><strong>Frecuencia:</strong> Aplicar mensualmente<br><strong>Contraindicaciones:</strong> No administrar en gatitos menores de 8 semanas de edad ni en gatos con hipersensibilidad a los componentes.<br><strong>Precauciones:</strong> No bañar al animal 48 horas antes ni después de la aplicación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Ecthol GMP Gatos la mejor opción",
    benefits: [
      { title: "Doble Acción", description: "Combinación de Fipronil y (S)-Metopreno para eliminar pulgas adultas y prevenir el desarrollo de formas inmaduras." },
      { title: "Protección Prolongada", description: "Protección de hasta 4 semanas contra pulgas y garrapatas." },
      { title: "Fácil Aplicación", description: "Aplicación tópica simple y rápida en la línea dorsal." },
      { title: "Seguro para Gatos", description: "Formulación segura específicamente desarrollada para gatos." }
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
    fullDescription: "<strong>Ecthol GMP Perros</strong> es una pipeta antiparasitaria externa para el control de pulgas y garrapatas en perros. Formulación con Fipronil y (S)-Metopreno para máxima eficacia.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de pulgas (Ctenocephalides canis, Ctenocephalides felis)</li><li>Control de garrapatas (Amblyoma, Dermacentor, Rhipicephalus, Ixodes)</li><li>Prevención de re-infestación</li><li>Tratamiento de infestaciones existentes</li></ul>",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Pipetas según peso del perro (5 kg, 6-10 kg, 11-20 kg, 21-40 kg)",
    formula: "<strong>FÓRMULA</strong><br>Cada pipeta contiene:<br>Fipronil: 10%<br>(S)-Metopreno: 9%<br>Vehículo c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Aplicar una pipeta completa sobre la piel, separando el pelo en la línea dorsal entre los omóplatos. Asegurar contacto directo con la piel. Seleccionar la pipeta según el peso del perro.<br><br><strong>Vía de administración:</strong> Tópica (spot-on)<br><strong>Frecuencia:</strong> Aplicar mensualmente<br><strong>Contraindicaciones:</strong> No administrar en cachorros menores de 8 semanas de edad ni en perros con hipersensibilidad a los componentes.<br><strong>Precauciones:</strong> No bañar al animal 48 horas antes ni después de la aplicación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Ecthol GMP Perros la mejor opción",
    benefits: [
      { title: "Doble Acción", description: "Combinación de Fipronil y (S)-Metopreno para eliminar pulgas adultas y prevenir el desarrollo de formas inmaduras." },
      { title: "Protección Prolongada", description: "Protección de hasta 4 semanas contra pulgas y garrapatas." },
      { title: "Múltiples Tamaños", description: "Presentaciones adaptadas según el peso del perro para dosificación precisa." },
      { title: "Fácil Aplicación", description: "Aplicación tópica simple y rápida en la línea dorsal." }
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
    fullDescription: "<strong>Ecthol Halo Collar Perros</strong> es un collar antiparasitario premium de larga duración. Controla pulgas, garrapatas y repele flebótomos, moscas y mosquitos. Protección de hasta 8 meses.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de pulgas (Ctenocephalides canis, Ctenocephalides felis)</li><li>Control de garrapatas (Amblyoma, Dermacentor, Rhipicephalus, Ixodes)</li><li>Repelente de flebótomos, moscas y mosquitos</li><li>Prevención de enfermedades transmitidas por vectores</li><li>Protección prolongada</li></ul>",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Collar según peso del perro (Menos de 10 kg / Más de 10 kg)",
    formula: "<strong>FÓRMULA</strong><br>Collar con liberación controlada de:<br>Deltametrina: 4%<br>Polímero de liberación prolongada",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Colocar el collar alrededor del cuello del perro, ajustándolo para que quede cómodo pero en contacto con la piel. Dejar espacio para dos dedos entre el collar y el cuello. El excedente puede cortarse.<br><br><strong>Vía de administración:</strong> Tópica (collar)<br><strong>Duración:</strong> Hasta 8 meses de protección<br><strong>Contraindicaciones:</strong> No utilizar en cachorros menores de 7 semanas de edad ni en perros con hipersensibilidad a la deltametrina.<br><strong>Precauciones:</strong> No mojar el collar durante las primeras 24 horas después de la colocación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Ecthol Halo Collar la mejor opción",
    benefits: [
      { title: "Protección Prolongada", description: "Hasta 8 meses de protección continua contra pulgas y garrapatas." },
      { title: "Repelente", description: "No solo elimina parásitos, sino que también repele flebótomos, moscas y mosquitos." },
      { title: "Liberación Controlada", description: "Tecnología de liberación controlada que mantiene niveles efectivos durante todo el período de protección." },
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
    fullDescription: "<strong>Ectholaner Comprimidos Perros</strong> es un antiparasitario oral en comprimidos masticables de acción sistémica. Indicado para el control de pulgas y garrapatas en perros mediante administración oral.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de pulgas (Ctenocephalides canis, Ctenocephalides felis)</li><li>Control de garrapatas (Amblyoma, Dermacentor, Rhipicephalus, Ixodes)</li><li>Tratamiento de infestaciones existentes</li><li>Prevención de re-infestación</li></ul>",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Comprimidos masticables según peso del perro",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Afoxolaner: según presentación (11.3 mg, 28.3 mg, 68 mg, 136 mg)<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Administrar un comprimido masticable según el peso del perro. Puede administrarse con o sin alimento. Seleccionar la presentación adecuada según el peso corporal.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Frecuencia:</strong> Administrar mensualmente<br><strong>Contraindicaciones:</strong> No administrar en cachorros menores de 8 semanas de edad ni en perros con hipersensibilidad al afoxolaner.<br><strong>Precauciones:</strong> No administrar en perros con epilepsia sin supervisión veterinaria.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Ectholaner la mejor opción",
    benefits: [
      { title: "Acción Sistémica", description: "Acción sistémica que protege a todo el cuerpo del perro, no solo el área de aplicación." },
      { title: "Comprimidos Masticables", description: "Comprimidos masticables con sabor agradable que facilitan la administración." },
      { title: "Rápida Eficacia", description: "Inicio de acción rápido, eliminando pulgas en 8 horas y garrapatas en 12 horas." },
      { title: "Protección Mensual", description: "Una dosis mensual proporciona protección continua durante todo el mes." }
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
    fullDescription: "<strong>Ecthonil Gatos</strong> es un antiparasitario externo en pipeta (spot-on) para el control de pulgas y garrapatas en gatos. Formulación con Fipronil para máxima eficacia.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de pulgas (Ctenocephalides felis)</li><li>Control de garrapatas</li><li>Tratamiento de infestaciones existentes</li><li>Prevención de re-infestación</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Pipetas spot-on",
    formula: "<strong>FÓRMULA</strong><br>Cada pipeta contiene:<br>Fipronil: 10%<br>Vehículo c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> Aplicar una pipeta completa sobre la piel, separando el pelo en la línea dorsal entre los omóplatos. Asegurar contacto directo con la piel.<br><br><strong>Vía de administración:</strong> Tópica (spot-on)<br><strong>Frecuencia:</strong> Aplicar mensualmente<br><strong>Contraindicaciones:</strong> No administrar en gatitos menores de 8 semanas de edad ni en gatos con hipersensibilidad al fipronil.<br><strong>Precauciones:</strong> No bañar al animal 48 horas antes ni después de la aplicación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Ecthonil Gatos la mejor opción",
    benefits: [
      { title: "Fipronil", description: "Principio activo de amplio espectro efectivo contra pulgas y garrapatas." },
      { title: "Protección Prolongada", description: "Protección de hasta 4 semanas contra pulgas y garrapatas." },
      { title: "Fácil Aplicación", description: "Aplicación tópica simple y rápida en la línea dorsal." },
      { title: "Seguro para Gatos", description: "Formulación segura específicamente desarrollada para gatos." }
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
    fullDescription: "<strong>Ecthonil Perros</strong> es un antiparasitario externo en pipeta (spot-on) para el control de pulgas y garrapatas en perros. Formulación con Fipronil para máxima eficacia.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de pulgas (Ctenocephalides canis, Ctenocephalides felis)</li><li>Control de garrapatas (Amblyoma, Dermacentor, Rhipicephalus, Ixodes)</li><li>Tratamiento de infestaciones existentes</li><li>Prevención de re-infestación</li></ul>",
    presentationTitle: "PRESENTACIONES",
    presentationSubtitle: "Pipetas spot-on según peso del perro",
    formula: "<strong>FÓRMULA</strong><br>Cada pipeta contiene:<br>Fipronil: 10%<br>Vehículo c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> Aplicar una pipeta completa sobre la piel, separando el pelo en la línea dorsal entre los omóplatos. Asegurar contacto directo con la piel. Seleccionar la pipeta según el peso del perro.<br><br><strong>Vía de administración:</strong> Tópica (spot-on)<br><strong>Frecuencia:</strong> Aplicar mensualmente<br><strong>Contraindicaciones:</strong> No administrar en cachorros menores de 8 semanas de edad ni en perros con hipersensibilidad al fipronil.<br><strong>Precauciones:</strong> No bañar al animal 48 horas antes ni después de la aplicación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Ecthonil Perros la mejor opción",
    benefits: [
      { title: "Fipronil", description: "Principio activo de amplio espectro efectivo contra pulgas y garrapatas." },
      { title: "Protección Prolongada", description: "Protección de hasta 4 semanas contra pulgas y garrapatas." },
      { title: "Múltiples Tamaños", description: "Presentaciones adaptadas según el peso del perro para dosificación precisa." },
      { title: "Fácil Aplicación", description: "Aplicación tópica simple y rápida en la línea dorsal." }
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
    specialModal: null,
    // Extended modal info
    logoText: "TOTAL FULL CG",
    logoSubtitle: "Antiparasitario Interno de Amplio Espectro",
    fullDescription: "<strong>Total Full CG Perros y Gatos</strong> es un antiparasitario interno de amplio espectro en comprimidos palatables. Indicado para la prevención y tratamiento de infestaciones por cestodes y nematodes en cachorros y gatitos.",
    indication: "<strong>Indicado para:</strong><ul><li>Prevención y tratamiento de cestodes</li><li>Prevención y tratamiento de nematodes</li><li>Desparasitación en cachorros y gatitos</li><li>Tratamiento de infestaciones parasitarias</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envases con 2 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Antiparasitario de amplio espectro con acción contra cestodes y nematodes.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros y Gatos:</strong> Según indicación veterinaria, según peso y edad del animal.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.<br><strong>Restricciones:</strong> No administrar en cachorros o gatitos menores de la edad recomendada.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Total Full CG la mejor opción",
    benefits: [
      { title: "Amplio Espectro", description: "Efectivo contra una amplia gama de parásitos internos (cestodes y nematodes)." },
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
    fullDescription: "<strong>Total Full LC Perros</strong> es un antiparasitario interno de liberación prolongada en comprimidos palatables ranurados. Indicado para la prevención y tratamiento de cestodes y nematodes en perros.",
    indication: "<strong>Indicado para:</strong><ul><li>Prevención y tratamiento de cestodes</li><li>Prevención y tratamiento de nematodes</li><li>Desparasitación en perros</li><li>Tratamiento de infestaciones parasitarias</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envase con 1 blister de 2 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Fenbendazol: 200 mg<br>Pamoato de Pirantel: 80 mg<br>Praziquantel: 20 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> 1 comprimido por cada 4 kg de peso corporal en una sola administración. En infestaciones severas, repetir la dosis después de 24 horas. Repetir la desparasitación a los 15-21 días.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.<br><strong>Efectos colaterales:</strong> Ocasionalmente, puede presentarse hipersalivación, náuseas, vómitos o diarrea, que remiten espontáneamente.<br><strong>Restricciones:</strong> No administrar en cachorros menores de 20 días.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Total Full LC Perros la mejor opción",
    benefits: [
      { title: "Liberación Prolongada", description: "Tecnología de liberación prolongada que asegura una acción sostenida contra los parásitos." },
      { title: "Amplio Espectro", description: "Efectivo contra cestodes y nematodes gracias a su combinación de principios activos." },
      { title: "Comprimidos Ranurados", description: "Comprimidos ranurados que facilitan la división para ajustar la dosis según el peso del animal." },
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
    fullDescription: "<strong>Total Full LC Gatos</strong> es un antiparasitario interno de liberación prolongada en comprimidos palatables ranurados. Indicado para la prevención y tratamiento de cestodes y nematodes en gatos.",
    indication: "<strong>Indicado para:</strong><ul><li>Prevención y tratamiento de cestodes</li><li>Prevención y tratamiento de nematodes</li><li>Desparasitación en gatos</li><li>Tratamiento de infestaciones parasitarias</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Envase con 1 blister de 2 comprimidos",
    formula: "<strong>FÓRMULA</strong><br>Cada comprimido contiene:<br>Fenbendazol: 200 mg<br>Pamoato de Pirantel: 80 mg<br>Praziquantel: 20 mg<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> 1 comprimido por cada 4 kg de peso corporal en una sola administración. En infestaciones severas, repetir la dosis después de 24 horas. Repetir la desparasitación a los 15-21 días.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.<br><strong>Efectos colaterales:</strong> Ocasionalmente, puede presentarse hipersalivación, náuseas, vómitos o diarrea, que remiten espontáneamente.<br><strong>Restricciones:</strong> No administrar en gatitos menores de 20 días ni en gatas preñadas hasta el día 41 de gestación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Total Full LC Gatos la mejor opción",
    benefits: [
      { title: "Liberación Prolongada", description: "Tecnología de liberación prolongada que asegura una acción sostenida contra los parásitos." },
      { title: "Amplio Espectro", description: "Efectivo contra cestodes y nematodes gracias a su combinación de principios activos." },
      { title: "Comprimidos Ranurados", description: "Comprimidos ranurados que facilitan la división para ajustar la dosis según el peso del animal." },
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
    fullDescription: "<strong>Total Full Suspensión Gatos</strong> es un antiparasitario interno en suspensión oral. Indicado para el tratamiento de infestaciones por cestodes y nematodes en gatos.",
    indication: "<strong>Indicado para:</strong><ul><li>Tratamiento de infestaciones por cestodes</li><li>Tratamiento de infestaciones por nematodes</li><li>Desparasitación en gatos</li><li>Tratamiento de infestaciones parasitarias</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Frasco de 15 ml con jeringa dosificadora",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de suspensión contiene:<br>Fenbendazol: 5 g<br>Pamoato de Pirantel: 2 g<br>Praziquantel: 0,5 g<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Gatos:</strong> 1 ml por kg de peso corporal en una sola administración. En infestaciones severas, repetir la dosis después de 24 horas. Repetir la desparasitación a los 15-21 días.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.<br><strong>Efectos colaterales:</strong> Ocasionalmente, puede presentarse hipersalivación, náuseas, vómitos o diarrea, que remiten espontáneamente.<br><strong>Restricciones:</strong> No administrar en gatitos menores de 20 días ni en gatas preñadas hasta el día 41 de gestación.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Total Full Suspensión Gatos la mejor opción",
    benefits: [
      { title: "Suspensión Oral", description: "Formulación en suspensión que facilita la administración en gatos." },
      { title: "Amplio Espectro", description: "Efectivo contra cestodes y nematodes gracias a su combinación de principios activos." },
      { title: "Jeringa Dosificadora", description: "Incluye jeringa dosificadora para facilitar la administración precisa según el peso del animal." },
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
    fullDescription: "<strong>Total Full Suspensión Perros</strong> es un antiparasitario interno en suspensión oral. Indicado para el tratamiento de infestaciones por nematodes y protozoarios en perros.",
    indication: "<strong>Indicado para:</strong><ul><li>Tratamiento de infestaciones por nematodes</li><li>Tratamiento de infestaciones por protozoarios (Giardia spp.)</li><li>Desparasitación en perros</li><li>Tratamiento de infestaciones parasitarias</li></ul>",
    presentationTitle: "PRESENTACIÓN",
    presentationSubtitle: "Frasco de 15 ml con jeringa dosificadora",
    formula: "<strong>FÓRMULA</strong><br>Cada 100 ml de suspensión contiene:<br>Fenbendazol: 5 g<br>Pamoato de Pirantel: 0,5 g<br>Excipientes c.s.",
    dosage: "<strong>POSOLOGÍA Y ADMINISTRACIÓN</strong><br><strong>Perros:</strong> 1 ml por kg de peso corporal en una sola administración. En infestaciones severas, repetir la dosis después de 24 horas. Repetir la desparasitación a los 15-21 días. Para el tratamiento de Giardia spp., administrar 1 ml/kg/día durante 3 días.<br><br><strong>Vía de administración:</strong> Oral<br><strong>Contraindicaciones:</strong> No administrar en animales con hipersensibilidad a los componentes.<br><strong>Efectos colaterales:</strong> Ocasionalmente, puede presentarse hipersalivación, náuseas, vómitos o diarrea, que remiten espontáneamente.<br><strong>Restricciones:</strong> No administrar en cachorros menores de 20 días.",
    benefitsTitle: "Beneficios del Producto",
    benefitsSubtitle: "Características que hacen de Total Full Suspensión Perros la mejor opción",
    benefits: [
      { title: "Suspensión Oral", description: "Formulación en suspensión que facilita la administración en perros." },
      { title: "Amplio Espectro", description: "Efectivo contra nematodes y protozoarios, incluyendo Giardia spp." },
      { title: "Jeringa Dosificadora", description: "Incluye jeringa dosificadora para facilitar la administración precisa según el peso del animal." },
      { title: "Tratamiento de Giardia", description: "Especialmente efectivo en el tratamiento de Giardia spp. con esquema de 3 días." }
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
    fullDescription: "<strong>OL Trans Flex</strong> es un coadyuvante osteoarticular en comprimidos palatables. Suplemento nutricional para conservar la salud articular en perros.",
    indication: "<strong>Indicado para:</strong><ul><li>Conservar la salud articular en perros</li><li>Suplemento nutricional para el mantenimiento de la movilidad</li><li>Apoyo en casos de desgaste articular</li></ul>",
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
    fullDescription: "<strong>Poten Pet</strong> es un biomodulador revitalizante y energizante en comprimidos palatables. Complemento dietario para perros adultos que necesitan suplementar su dieta.",
    indication: "<strong>Indicado para:</strong><ul><li>Perros adultos que necesitan suplementar su dieta</li><li>Estados de convalecencia</li><li>Estrés o actividad física intensa</li><li>Recuperación energética</li></ul>",
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
    fullDescription: "<strong>Poten Pet Gatos</strong> es un biomodulador revitalizante y energizante en pasta palatable. Complemento dietario para gatos adultos que necesitan suplementar su dieta.",
    indication: "<strong>Indicado para:</strong><ul><li>Gatos adultos que necesitan suplementar su dieta</li><li>Estados de convalecencia</li><li>Estrés o actividad física intensa</li><li>Recuperación energética</li></ul>",
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
    fullDescription: "<strong>Relay C</strong> es un suplemento vitamínico en comprimidos palatables. Suplemento de vitamina C para perros y gatos que contribuye al fortalecimiento del sistema inmune.",
    indication: "<strong>Indicado para:</strong><ul><li>Fortalecimiento del sistema inmune</li><li>Suplementación de vitamina C</li><li>Estados de convalecencia</li><li>Apoyo en procesos de recuperación</li></ul>",
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
    fullDescription: "<strong>Tonipet</strong> es un suplemento vitamínico y mineral en comprimidos palatables. Suplemento nutricional para perros y gatos en crecimiento, gestación, lactancia o convalecencia.",
    indication: "<strong>Indicado para:</strong><ul><li>Perros y gatos en crecimiento</li><li>Gestación y lactancia</li><li>Estados de convalecencia</li><li>Deficiencias nutricionales</li><li>Recuperación post-quirúrgica</li></ul>",
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
    fullDescription: "<strong>Bioclin Enjuague Bucal</strong> es un enjuague bucal antiséptico para la higiene dental de perros y gatos. Previene la formación de placa bacteriana y el mal aliento, manteniendo una boca sana y fresca.",
    indication: "<strong>Indicado para:</strong><ul><li>Higiene bucal diaria</li><li>Prevención de placa bacteriana</li><li>Control del mal aliento (halitosis)</li><li>Mantenimiento de encías saludables</li><li>Prevención de sarro</li></ul>",
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
    fullDescription: "<strong>Bioclin Gel Antiplaca</strong> es un gel dental para el control de placa bacteriana. Aplicación fácil para mantener una boca sana y libre de sarro en perros y gatos.",
    indication: "<strong>Indicado para:</strong><ul><li>Control de placa bacteriana</li><li>Prevención de sarro</li><li>Higiene bucal diaria</li><li>Mantenimiento de encías saludables</li><li>Prevención de enfermedades periodontales</li></ul>",
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
    specialModal: null,
    // Extended modal info
    logoText: "CEFALEXINA 500",
    logoSubtitle: "Antibiótico de Amplio Espectro",
    fullDescription: "<strong>Cefalexina 500</strong> es un antibiótico de amplio espectro de la familia de las cefalosporinas de primera generación. Indicado para el tratamiento de infecciones bacterianas en perros y gatos.",
    indication: "<strong>Indicado para:</strong><ul><li>Infecciones del tracto respiratorio</li><li>Infecciones del tracto urinario</li><li>Infecciones de piel y tejidos blandos</li><li>Infecciones óseas</li><li>Infecciones causadas por bacterias Gram positivas y algunas Gram negativas</li></ul>",
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
    fullDescription: "<strong>Cloralen</strong> es un antibiótico de amplio espectro a base de cloranfenicol. Indicado para el tratamiento de infecciones bacterianas sensibles en perros y gatos.",
    indication: "<strong>Indicado para:</strong><ul><li>Infecciones del tracto respiratorio</li><li>Infecciones del tracto digestivo</li><li>Infecciones de piel y tejidos blandos</li><li>Infecciones oculares</li><li>Infecciones causadas por bacterias Gram positivas y Gram negativas</li></ul>",
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
    fullDescription: "<strong>Floxaday Comprimidos</strong> es un antibiótico de amplio espectro de la familia de las fluoroquinolonas. Indicado para el tratamiento de infecciones bacterianas en perros y gatos.",
    indication: "<strong>Indicado para:</strong><ul><li>Infecciones del tracto urinario</li><li>Infecciones del tracto respiratorio</li><li>Infecciones de piel y tejidos blandos</li><li>Infecciones gastrointestinales</li><li>Infecciones causadas por bacterias Gram negativas y algunas Gram positivas</li></ul>",
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
    fullDescription: "<strong>MV Gatos Gastrointestinal</strong> es una dieta prescripta formulada específicamente para gatos con trastornos digestivos. Alimento completo y balanceado que ayuda a la recuperación y mantenimiento de la salud gastrointestinal.",
    indication: "<strong>Indicado para:</strong><ul><li>Gatos con trastornos digestivos agudos y crónicos</li><li>Gastritis y enteritis</li><li>Diarrea aguda y crónica</li><li>Enfermedad inflamatoria intestinal</li><li>Recuperación post-quirúrgica del tracto digestivo</li></ul>",
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
    fullDescription: "<strong>MV Gatos Obesidad</strong> es una dieta prescripta baja en calorías formulada específicamente para gatos con sobrepeso u obesidad. Alimento completo y balanceado que ayuda a la pérdida de peso controlada y mantenimiento del peso ideal.",
    indication: "<strong>Indicado para:</strong><ul><li>Gatos con sobrepeso u obesidad</li><li>Control de peso</li><li>Prevención de enfermedades asociadas al sobrepeso</li><li>Mantenimiento del peso ideal</li></ul>",
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
    fullDescription: "<strong>MV Gatos Renal</strong> es una dieta prescripta formulada específicamente para gatos con enfermedad renal crónica o aguda. Alimento completo y balanceado que ayuda a reducir la carga sobre los riñones y retrasar la progresión de la enfermedad.",
    indication: "<strong>Indicado para:</strong><ul><li>Gatos con enfermedad renal crónica</li><li>Insuficiencia renal</li><li>Nefropatías</li><li>Prevención de cálculos renales</li><li>Apoyo nutricional en pacientes renales</li></ul>",
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
    fullDescription: "<strong>MV Gatos Urinario</strong> es una dieta prescripta formulada específicamente para gatos con problemas del tracto urinario inferior. Alimento completo y balanceado que ayuda a prevenir la formación de cálculos y mantener la salud urinaria.",
    indication: "<strong>Indicado para:</strong><ul><li>Gatos con cistitis idiopática felina</li><li>Prevención de cálculos urinarios</li><li>Trastornos del tracto urinario inferior</li><li>Mantenimiento de la salud urinaria</li></ul>",
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
    fullDescription: "<strong>MV Perros Articular</strong> es una dieta prescripta formulada específicamente para perros con problemas articulares. Alimento completo y balanceado que contiene condroprotectores y nutrientes que ayudan a mantener la salud articular.",
    indication: "<strong>Indicado para:</strong><ul><li>Perros con artritis y artrosis</li><li>Problemas articulares</li><li>Desgaste articular</li><li>Recuperación post-quirúrgica articular</li><li>Mantenimiento de la salud articular en perros mayores</li></ul>",
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
    fullDescription: "<strong>MV Perros Cardio</strong> es una dieta prescripta formulada específicamente para perros con enfermedad cardíaca. Alimento completo y balanceado que ayuda a reducir la carga sobre el corazón y mejorar la calidad de vida.",
    indication: "<strong>Indicado para:</strong><ul><li>Perros con insuficiencia cardíaca</li><li>Enfermedad cardíaca congestiva</li><li>Cardiomiopatías</li><li>Hipertensión</li><li>Apoyo nutricional en pacientes cardíacos</li></ul>",
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
    fullDescription: "<strong>MV Perros Gastrointestinal</strong> es una dieta prescripta formulada específicamente para perros con trastornos digestivos. Alimento completo y balanceado que ayuda a la recuperación y mantenimiento de la salud gastrointestinal.",
    indication: "<strong>Indicado para:</strong><ul><li>Perros con trastornos digestivos agudos y crónicos</li><li>Gastritis y enteritis</li><li>Diarrea aguda y crónica</li><li>Enfermedad inflamatoria intestinal</li><li>Recuperación post-quirúrgica del tracto digestivo</li></ul>",
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
    fullDescription: "<strong>MV Perros Obesidad</strong> es una dieta prescripta baja en calorías formulada específicamente para perros con sobrepeso u obesidad. Alimento completo y balanceado que ayuda a la pérdida de peso controlada y mantenimiento del peso ideal.",
    indication: "<strong>Indicado para:</strong><ul><li>Perros con sobrepeso u obesidad</li><li>Control de peso</li><li>Prevención de enfermedades asociadas al sobrepeso</li><li>Mantenimiento del peso ideal</li></ul>",
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
    fullDescription: "<strong>MV Perros Renal</strong> es una dieta prescripta formulada específicamente para perros con enfermedad renal crónica o aguda. Alimento completo y balanceado que ayuda a reducir la carga sobre los riñones y retrasar la progresión de la enfermedad.",
    indication: "<strong>Indicado para:</strong><ul><li>Perros con enfermedad renal crónica</li><li>Insuficiencia renal</li><li>Nefropatías</li><li>Prevención de cálculos renales</li><li>Apoyo nutricional en pacientes renales</li></ul>",
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
    fullDescription: "<strong>MV Perros Sensibilidad Dietaria</strong> es una dieta prescripta hipoalergénica formulada específicamente para perros con sensibilidades o alergias alimentarias. Alimento completo y balanceado con proteínas e hidratos de carbono de fuentes novedosas o hidrolizadas.",
    indication: "<strong>Indicado para:</strong><ul><li>Perros con alergias alimentarias</li><li>Sensibilidades dietarias</li><li>Dermatitis alérgica alimentaria</li><li>Trastornos digestivos por sensibilidad alimentaria</li><li>Dieta de eliminación</li></ul>",
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
    fullDescription: "<strong>OHM</strong> es la línea más completa de productos 100% naturales, diseñados para modular la ansiedad y el estrés en perros y gatos. Los productos OHM utilizan feromonas sintéticas que mimetizan a las naturales, actuando como mensajeros que modifican el comportamiento del animal que las percibe.",
    indication: "<strong>OHM es ideal para:</strong><ul><li>Viajes</li><li>Post operatorios</li><li>Mudanzas</li><li>Cambios de estilo de vida</li><li>Mejorar el paseo</li><li>Visita al veterinario</li></ul><br><strong>Además, ayuda a controlar:</strong><ul><li>Estrés por ansiedad</li><li>Falta de aseo</li><li>Frotación exagerada</li><li>Mayor excitabilidad</li><li>Excesivo lamido</li><li>Defecación en sitios no habituales</li><li>Ladrido y maullido excesivo</li><li>Agresión y ansiedad por separación</li><li>Miedo a los ruidos fuertes</li><li>Comportamiento destructivo</li></ul>",
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
    fullDescription: "<strong>OHM Gatos</strong> es parte de la línea más completa de productos 100% naturales, diseñados específicamente para modular la ansiedad y el estrés en gatos. Los productos OHM utilizan feromonas sintéticas que mimetizan a las naturales, actuando como mensajeros que modifican el comportamiento del animal que las percibe.",
    indication: "<strong>OHM Gatos es ideal para:</strong><ul><li>Viajes</li><li>Post operatorios</li><li>Mudanzas</li><li>Cambios de estilo de vida</li><li>Visita al veterinario</li></ul><br><strong>Además, ayuda a controlar:</strong><ul><li>Estrés por ansiedad</li><li>Falta de aseo</li><li>Frotación exagerada</li><li>Mayor excitabilidad</li><li>Excesivo lamido</li><li>Defecación en sitios no habituales</li><li>Maullido excesivo</li><li>Agresión y ansiedad por separación</li><li>Miedo a los ruidos fuertes</li><li>Comportamiento destructivo</li></ul>",
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
    fullDescription: "<strong>OHM Home Gatos</strong> es un difusor ambiental que libera feromonas sintéticas felinas de forma continua, creando un ambiente calmante y seguro para su gato. Las feromonas actúan como mensajeros que modifican el comportamiento del animal, ayudando a modular la ansiedad y el estrés de forma natural.",
    indication: "<strong>OHM Home Gatos es ideal para:</strong><ul><li>Crear un ambiente calmante en el hogar</li><li>Reducir el estrés en situaciones de cambio</li><li>Mudanzas</li><li>Llegada de nuevos miembros a la familia</li><li>Cambios en el entorno</li><li>Múltiples gatos en el mismo hogar</li></ul><br><strong>Además, ayuda a controlar:</strong><ul><li>Estrés por ansiedad</li><li>Comportamiento destructivo</li><li>Agresión entre gatos</li><li>Marcaje excesivo</li><li>Falta de aseo</li><li>Maullido excesivo</li></ul>",
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
    fullDescription: "<strong>OHM Home Perros</strong> es un difusor ambiental que libera feromonas sintéticas caninas de forma continua, creando un ambiente calmante y seguro para su perro. Las feromonas actúan como mensajeros que modifican el comportamiento del animal, ayudando a modular la ansiedad y el estrés de forma natural.",
    indication: "<strong>OHM Home Perros es ideal para:</strong><ul><li>Crear un ambiente calmante en el hogar</li><li>Reducir el estrés en situaciones de cambio</li><li>Mudanzas</li><li>Llegada de nuevos miembros a la familia</li><li>Cambios en el entorno</li><li>Múltiples perros en el mismo hogar</li><li>Ansiedad por separación</li></ul><br><strong>Además, ayuda a controlar:</strong><ul><li>Estrés por ansiedad</li><li>Comportamiento destructivo</li><li>Ladrido excesivo</li><li>Agresión</li><li>Miedo a los ruidos fuertes</li><li>Ansiedad por separación</li></ul>",
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
    image: "images/solubron-20.png",
    description: "Broncodilatador y mucolítico para vías respiratorias.",
    badge: null,
    variants: null,
    specialModal: null,
    // Extended modal info
    logoText: "SOLUBRON 20",
    logoSubtitle: "Broncodilatador y Mucolítico",
    fullDescription: "<strong>Solubron 20</strong> es un broncodilatador y mucolítico en solución oral. Indicado para el tratamiento de afecciones del sistema respiratorio en perros y gatos.",
    indication: "<strong>Indicado para:</strong><ul><li>Tratamiento de afecciones respiratorias</li><li>Facilitar la expectoración</li><li>Broncodilatación</li><li>Liquefacción de secreciones bronquiales</li></ul>",
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

