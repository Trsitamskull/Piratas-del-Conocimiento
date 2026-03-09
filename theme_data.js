/* ============================================================
   PIRATAS DEL CONOCIMIENTO – Theme Database
   18 temas con datos para Isla 1 (Título) e Isla 5 (Justificación)
   ============================================================ */

const THEME_DB = [
  {
    name: "Redes sociales",
    fenomenos: [
      "impacto",
      "influencia",
      "uso excesivo",
      "dependencia",
      "percepción",
      "efectos",
    ],
    poblaciones: [
      "adolescentes",
      "estudiantes de secundaria",
      "jóvenes universitarios",
      "docentes",
      "padres de familia",
      "niños de primaria",
    ],
    distractores: [
      "hashtag",
      "algoritmo",
      "trending topic",
      "followers",
      "meme",
      "publicación viral",
    ],
    justificacion: [
      {
        texto:
          "Aporta conocimiento nuevo sobre cómo las plataformas digitales afectan el comportamiento social",
        tipo: "importancia",
      },
      {
        texto:
          "Complementa estudios previos sobre comunicación digital y sus efectos psicológicos",
        tipo: "importancia",
      },
      {
        texto:
          "Millones de jóvenes usan redes diariamente y enfrentan riesgos de adicción y ansiedad",
        tipo: "impacto",
      },
      {
        texto:
          "Es un fenómeno que afecta el rendimiento académico y las relaciones interpersonales",
        tipo: "impacto",
      },
      {
        texto:
          "Los resultados permitirían diseñar programas de uso responsable en instituciones educativas",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para crear guías de prevención dirigidas a padres y docentes",
        tipo: "utilidad",
      },
      {
        texto: "Las redes sociales son populares entre los jóvenes",
        tipo: "distractor",
      },
      {
        texto: "Muchas personas tienen cuentas en Instagram y TikTok",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Salud mental",
    fenomenos: [
      "prevalencia",
      "impacto",
      "percepción",
      "factores de riesgo",
      "relación",
      "incidencia",
    ],
    poblaciones: [
      "adolescentes",
      "estudiantes universitarios",
      "trabajadores",
      "adultos mayores",
      "mujeres gestantes",
      "personal de salud",
    ],
    distractores: [
      "neurona",
      "terapia",
      "medicamento",
      "diagnóstico",
      "consultorio",
      "cerebro",
    ],
    justificacion: [
      {
        texto:
          "Amplía la comprensión científica sobre los trastornos emocionales y sus causas",
        tipo: "importancia",
      },
      {
        texto:
          "Enriquece el marco teórico sobre bienestar psicológico en contextos educativos",
        tipo: "importancia",
      },
      {
        texto:
          "Los problemas de salud mental han aumentado significativamente tras la pandemia",
        tipo: "impacto",
      },
      {
        texto: "Afecta a millones de personas que no reciben atención oportuna",
        tipo: "impacto",
      },
      {
        texto:
          "Permitiría diseñar intervenciones tempranas en escuelas y universidades",
        tipo: "utilidad",
      },
      {
        texto:
          "Los datos servirían para mejorar políticas públicas de atención psicológica",
        tipo: "utilidad",
      },
      {
        texto: "La salud mental es un tema del que se habla mucho actualmente",
        tipo: "distractor",
      },
      {
        texto: "Existen muchos psicólogos y terapeutas en el país",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Inteligencia artificial",
    fenomenos: [
      "impacto",
      "percepción",
      "implementación",
      "aceptación",
      "efectividad",
      "uso",
    ],
    poblaciones: [
      "estudiantes universitarios",
      "docentes",
      "trabajadores",
      "empresas pequeñas",
      "programadores",
      "adultos mayores",
    ],
    distractores: [
      "robot",
      "código fuente",
      "servidor",
      "big data",
      "software",
      "procesador",
    ],
    justificacion: [
      {
        texto:
          "Genera conocimiento sobre cómo la IA transforma los procesos de aprendizaje y trabajo",
        tipo: "importancia",
      },
      {
        texto:
          "Contribuye al debate académico sobre ética y automatización en la sociedad",
        tipo: "importancia",
      },
      {
        texto:
          "La IA está transformando empleos y muchas personas temen perder su trabajo",
        tipo: "impacto",
      },
      {
        texto:
          "Afecta directamente la forma en que los estudiantes aprenden y son evaluados",
        tipo: "impacto",
      },
      {
        texto:
          "Los hallazgos permitirían crear protocolos de uso ético de IA en educación",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para capacitar docentes en integración responsable de herramientas de IA",
        tipo: "utilidad",
      },
      {
        texto: "La inteligencia artificial es una tecnología muy avanzada",
        tipo: "distractor",
      },
      {
        texto: "ChatGPT y otras herramientas son usadas por muchas personas",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Contaminación ambiental",
    fenomenos: [
      "impacto",
      "niveles",
      "efectos",
      "relación",
      "percepción",
      "causas",
    ],
    poblaciones: [
      "comunidades rurales",
      "habitantes urbanos",
      "niños",
      "agricultores",
      "pescadores",
      "familias costeras",
    ],
    distractores: [
      "fábrica",
      "residuo tóxico",
      "plástico",
      "emisión de gases",
      "vertedero",
      "chimenea",
    ],
    justificacion: [
      {
        texto:
          "Aporta datos científicos sobre la relación entre contaminantes y daños al ecosistema",
        tipo: "importancia",
      },
      {
        texto:
          "Fortalece el conocimiento sobre los mecanismos de degradación ambiental",
        tipo: "importancia",
      },
      {
        texto:
          "Miles de comunidades sufren enfermedades respiratorias por la contaminación del aire",
        tipo: "impacto",
      },
      {
        texto:
          "Los ecosistemas acuáticos y terrestres están siendo destruidos aceleradamente",
        tipo: "impacto",
      },
      {
        texto:
          "Permitiría proponer estrategias de mitigación aplicables a nivel local",
        tipo: "utilidad",
      },
      {
        texto:
          "Los resultados servirían para fundamentar políticas ambientales más estrictas",
        tipo: "utilidad",
      },
      {
        texto:
          "La contaminación es un problema que existe desde hace muchos años",
        tipo: "distractor",
      },
      {
        texto: "Hay muchas fábricas que producen residuos en el país",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Educación digital",
    fenomenos: [
      "efectividad",
      "impacto",
      "percepción",
      "implementación",
      "acceso",
      "uso",
    ],
    poblaciones: [
      "estudiantes de primaria",
      "docentes rurales",
      "adolescentes",
      "padres de familia",
      "estudiantes universitarios",
      "niños con discapacidad",
    ],
    distractores: [
      "plataforma",
      "aplicación móvil",
      "tablet",
      "internet banda ancha",
      "aula virtual",
      "software educativo",
    ],
    justificacion: [
      {
        texto:
          "Genera evidencia sobre qué estrategias digitales mejoran realmente el aprendizaje",
        tipo: "importancia",
      },
      {
        texto:
          "Contribuye a la teoría pedagógica sobre entornos virtuales de enseñanza",
        tipo: "importancia",
      },
      {
        texto:
          "La brecha digital deja a miles de estudiantes rurales sin acceso a educación de calidad",
        tipo: "impacto",
      },
      {
        texto:
          "Muchos docentes carecen de formación para integrar tecnología en sus clases",
        tipo: "impacto",
      },
      {
        texto:
          "Permitiría diseñar programas de capacitación digital para docentes",
        tipo: "utilidad",
      },
      {
        texto:
          "Los hallazgos servirían para mejorar las plataformas educativas existentes",
        tipo: "utilidad",
      },
      {
        texto: "Hoy en día casi todo se hace por internet",
        tipo: "distractor",
      },
      {
        texto: "Los colegios ya tienen computadores y proyectores",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Cambio climático",
    fenomenos: [
      "percepción",
      "impacto",
      "conocimiento",
      "efectos",
      "vulnerabilidad",
      "adaptación",
    ],
    poblaciones: [
      "agricultores",
      "comunidades costeras",
      "jóvenes activistas",
      "estudiantes",
      "poblaciones indígenas",
      "habitantes urbanos",
    ],
    distractores: [
      "glaciar",
      "temperatura global",
      "dióxido de carbono",
      "capa de ozono",
      "sequía",
      "inundación",
    ],
    justificacion: [
      {
        texto:
          "Aporta datos empíricos sobre cómo el cambio climático afecta comunidades específicas",
        tipo: "importancia",
      },
      {
        texto:
          "Fortalece la base teórica sobre vulnerabilidad climática en regiones tropicales",
        tipo: "importancia",
      },
      {
        texto:
          "Comunidades enteras pierden sus cosechas y medios de vida por eventos climáticos extremos",
        tipo: "impacto",
      },
      {
        texto:
          "Es la mayor amenaza ambiental del siglo y afecta desproporcionadamente a los más pobres",
        tipo: "impacto",
      },
      {
        texto:
          "Los resultados permitirían crear planes de adaptación para comunidades vulnerables",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para fundamentar programas de educación ambiental en escuelas",
        tipo: "utilidad",
      },
      {
        texto: "El cambio climático es un tema que sale mucho en las noticias",
        tipo: "distractor",
      },
      {
        texto: "Muchos países firmaron el Acuerdo de París",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Ciberacoso",
    fenomenos: [
      "prevalencia",
      "impacto",
      "percepción",
      "factores",
      "incidencia",
      "relación",
    ],
    poblaciones: [
      "adolescentes",
      "estudiantes de secundaria",
      "niños",
      "mujeres jóvenes",
      "víctimas de bullying",
      "comunidad LGBTQ+",
    ],
    distractores: [
      "troll",
      "perfil falso",
      "captura de pantalla",
      "bloqueo",
      "denuncia en línea",
      "anonimato",
    ],
    justificacion: [
      {
        texto:
          "Genera conocimiento sobre los patrones y dinámicas del acoso en entornos digitales",
        tipo: "importancia",
      },
      {
        texto:
          "Amplía la comprensión de los factores psicológicos detrás del ciberacoso",
        tipo: "importancia",
      },
      {
        texto:
          "Miles de adolescentes sufren depresión y ansiedad a causa del acoso en línea",
        tipo: "impacto",
      },
      {
        texto:
          "El ciberacoso ha llevado a casos extremos de autolesión en jóvenes vulnerables",
        tipo: "impacto",
      },
      {
        texto:
          "Permitiría crear protocolos de prevención e intervención en instituciones educativas",
        tipo: "utilidad",
      },
      {
        texto:
          "Los datos servirían para desarrollar aplicaciones de detección temprana de acoso",
        tipo: "utilidad",
      },
      {
        texto: "Todos los jóvenes usan internet y redes sociales",
        tipo: "distractor",
      },
      {
        texto: "Es difícil controlar lo que la gente publica en internet",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Uso del celular",
    fenomenos: [
      "impacto",
      "dependencia",
      "uso excesivo",
      "relación",
      "efectos",
      "frecuencia",
    ],
    poblaciones: [
      "adolescentes",
      "estudiantes de secundaria",
      "niños",
      "trabajadores",
      "conductores",
      "adultos mayores",
    ],
    distractores: [
      "batería",
      "pantalla táctil",
      "notificación",
      "aplicación",
      "señal de red",
      "cargador",
    ],
    justificacion: [
      {
        texto:
          "Aporta evidencia sobre la relación entre el uso del celular y el rendimiento cognitivo",
        tipo: "importancia",
      },
      {
        texto:
          "Profundiza el conocimiento sobre adicciones tecnológicas y sus mecanismos",
        tipo: "importancia",
      },
      {
        texto:
          "El uso excesivo del celular está generando problemas de atención y sueño en jóvenes",
        tipo: "impacto",
      },
      {
        texto:
          "Afecta las relaciones familiares y la comunicación presencial entre las personas",
        tipo: "impacto",
      },
      {
        texto:
          "Los resultados permitirían establecer recomendaciones de tiempo de uso por edad",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para diseñar campañas de concientización sobre uso responsable",
        tipo: "utilidad",
      },
      {
        texto: "Casi todas las personas tienen un teléfono celular hoy en día",
        tipo: "distractor",
      },
      {
        texto: "Los celulares tienen muchas funciones útiles como cámara y GPS",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Videojuegos",
    fenomenos: [
      "impacto",
      "influencia",
      "uso",
      "efectos",
      "relación",
      "percepción",
    ],
    poblaciones: [
      "niños",
      "adolescentes",
      "jóvenes adultos",
      "estudiantes",
      "gamers frecuentes",
      "padres de familia",
    ],
    distractores: [
      "consola",
      "control",
      "avatar",
      "nivel",
      "partida en línea",
      "servidor de juegos",
    ],
    justificacion: [
      {
        texto:
          "Genera evidencia científica sobre los efectos cognitivos y conductuales de los videojuegos",
        tipo: "importancia",
      },
      {
        texto:
          "Contribuye al debate académico sobre si los videojuegos son beneficiosos o perjudiciales",
        tipo: "importancia",
      },
      {
        texto:
          "Miles de jóvenes dedican más de 6 horas diarias a videojuegos descuidando sus estudios",
        tipo: "impacto",
      },
      {
        texto:
          "La adicción a videojuegos fue reconocida como trastorno por la OMS en 2018",
        tipo: "impacto",
      },
      {
        texto:
          "Permitiría crear guías para padres sobre regulación saludable del tiempo de juego",
        tipo: "utilidad",
      },
      {
        texto:
          "Los datos servirían para diseñar videojuegos educativos más efectivos",
        tipo: "utilidad",
      },
      {
        texto:
          "Los videojuegos son una industria que genera miles de millones de dólares",
        tipo: "distractor",
      },
      {
        texto: "Existen muchos tipos de videojuegos como RPG, FPS y estrategia",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Alimentación saludable",
    fenomenos: [
      "hábitos",
      "percepción",
      "impacto",
      "conocimiento",
      "relación",
      "acceso",
    ],
    poblaciones: [
      "niños en edad escolar",
      "adolescentes",
      "estudiantes universitarios",
      "adultos mayores",
      "mujeres embarazadas",
      "familias de bajos recursos",
    ],
    distractores: [
      "proteína",
      "vitamina",
      "calorías",
      "dieta cetogénica",
      "menú escolar",
      "nutriente",
    ],
    justificacion: [
      {
        texto:
          "Genera datos sobre la relación entre nutrición y rendimiento académico",
        tipo: "importancia",
      },
      {
        texto:
          "Amplía el conocimiento sobre factores que determinan los hábitos alimenticios",
        tipo: "importancia",
      },
      {
        texto:
          "La obesidad infantil y la desnutrición afectan a millones de niños en Latinoamérica",
        tipo: "impacto",
      },
      {
        texto:
          "Los malos hábitos alimenticios son causa principal de enfermedades crónicas prevenibles",
        tipo: "impacto",
      },
      {
        texto:
          "Permitiría diseñar programas de alimentación saludable en comedores escolares",
        tipo: "utilidad",
      },
      {
        texto:
          "Los resultados servirían para crear campañas de nutrición adaptadas a cada comunidad",
        tipo: "utilidad",
      },
      {
        texto: "Comer frutas y verduras es algo que todos saben que es bueno",
        tipo: "distractor",
      },
      {
        texto: "Hay muchos restaurantes de comida rápida en las ciudades",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Actividad física",
    fenomenos: [
      "impacto",
      "niveles",
      "práctica",
      "relación",
      "beneficios",
      "frecuencia",
    ],
    poblaciones: [
      "adolescentes",
      "adultos mayores",
      "estudiantes",
      "trabajadores sedentarios",
      "niños",
      "personas con discapacidad",
    ],
    distractores: [
      "gimnasio",
      "pesas",
      "running",
      "flexiones",
      "cancha deportiva",
      "cronómetro",
    ],
    justificacion: [
      {
        texto:
          "Aporta evidencia sobre la relación entre ejercicio físico y bienestar mental",
        tipo: "importancia",
      },
      {
        texto:
          "Fortalece el conocimiento sobre los mecanismos por los que el deporte mejora la salud",
        tipo: "importancia",
      },
      {
        texto:
          "El sedentarismo en jóvenes ha aumentado dramáticamente con el uso de tecnología",
        tipo: "impacto",
      },
      {
        texto:
          "La falta de actividad física es factor de riesgo para enfermedades cardiovasculares",
        tipo: "impacto",
      },
      {
        texto:
          "Los resultados permitirían mejorar los programas de educación física en colegios",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para crear rutinas de ejercicio adaptadas a diferentes poblaciones",
        tipo: "utilidad",
      },
      {
        texto: "Hacer ejercicio es algo que los médicos siempre recomiendan",
        tipo: "distractor",
      },
      {
        texto: "Hay muchos deportes que se pueden practicar al aire libre",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Estrés académico",
    fenomenos: [
      "niveles",
      "impacto",
      "prevalencia",
      "percepción",
      "factores",
      "relación",
    ],
    poblaciones: [
      "estudiantes universitarios",
      "adolescentes",
      "docentes",
      "estudiantes de medicina",
      "padres de familia",
      "niños de primaria",
    ],
    distractores: [
      "examen final",
      "tarea pendiente",
      "calificación",
      "plazo de entrega",
      "matrícula",
      "aula de clases",
    ],
    justificacion: [
      {
        texto:
          "Genera conocimiento sobre cómo el estrés afecta el aprendizaje y la memoria",
        tipo: "importancia",
      },
      {
        texto:
          "Contribuye a entender los factores institucionales que generan presión en estudiantes",
        tipo: "importancia",
      },
      {
        texto:
          "Cada vez más estudiantes sufren ansiedad, insomnio y burnout académico",
        tipo: "impacto",
      },
      {
        texto:
          "El estrés académico es una de las principales causas de deserción universitaria",
        tipo: "impacto",
      },
      {
        texto:
          "Los hallazgos permitirían crear programas de acompañamiento psicológico en universidades",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para que las instituciones rediseñen sus métodos de evaluación",
        tipo: "utilidad",
      },
      {
        texto: "Todos los estudiantes sienten presión en época de exámenes",
        tipo: "distractor",
      },
      {
        texto:
          "Las universidades tienen muchas materias y trabajos que entregar",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Tecnología en la educación",
    fenomenos: [
      "impacto",
      "efectividad",
      "percepción",
      "implementación",
      "uso",
      "aceptación",
    ],
    poblaciones: [
      "docentes de secundaria",
      "estudiantes rurales",
      "niños con necesidades especiales",
      "rectores educativos",
      "padres de familia",
      "estudiantes universitarios",
    ],
    distractores: [
      "pizarra digital",
      "proyector",
      "WiFi escolar",
      "laboratorio de cómputo",
      "simulador",
      "computador portátil",
    ],
    justificacion: [
      {
        texto:
          "Produce evidencia sobre qué herramientas tecnológicas realmente mejoran el aprendizaje",
        tipo: "importancia",
      },
      {
        texto:
          "Enriquece la teoría pedagógica sobre integración de TIC en el aula",
        tipo: "importancia",
      },
      {
        texto:
          "Muchas escuelas recibieron tecnología pero no saben cómo usarla efectivamente",
        tipo: "impacto",
      },
      {
        texto:
          "La brecha tecnológica amplía las desigualdades educativas entre zonas urbanas y rurales",
        tipo: "impacto",
      },
      {
        texto:
          "Permitiría crear modelos de implementación tecnológica replicables en diferentes contextos",
        tipo: "utilidad",
      },
      {
        texto:
          "Los datos servirían para orientar la inversión pública en tecnología educativa",
        tipo: "utilidad",
      },
      {
        texto:
          "Los colegios modernos ya tienen computadores y acceso a internet",
        tipo: "distractor",
      },
      {
        texto: "La tecnología avanza muy rápido y siempre hay cosas nuevas",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Hábitos de sueño",
    fenomenos: [
      "impacto",
      "relación",
      "calidad",
      "prevalencia",
      "factores",
      "efectos",
    ],
    poblaciones: [
      "adolescentes",
      "estudiantes universitarios",
      "trabajadores nocturnos",
      "niños",
      "adultos mayores",
      "deportistas",
    ],
    distractores: [
      "almohada",
      "colchón",
      "alarma",
      "melatonina",
      "siesta",
      "ronquido",
    ],
    justificacion: [
      {
        texto:
          "Aporta datos sobre la relación entre calidad del sueño y funciones cognitivas",
        tipo: "importancia",
      },
      {
        texto:
          "Profundiza la comprensión de los trastornos del sueño en población joven",
        tipo: "importancia",
      },
      {
        texto:
          "El insomnio y la privación de sueño afectan el rendimiento de millones de estudiantes",
        tipo: "impacto",
      },
      {
        texto:
          "Los malos hábitos de sueño están vinculados a problemas de salud mental crecientes",
        tipo: "impacto",
      },
      {
        texto:
          "Los resultados permitirían crear programas de higiene del sueño en instituciones educativas",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para establecer recomendaciones basadas en evidencia sobre horarios escolares",
        tipo: "utilidad",
      },
      {
        texto:
          "Dormir es una necesidad biológica que todas las personas tienen",
        tipo: "distractor",
      },
      {
        texto: "Se recomienda dormir entre 7 y 9 horas diarias",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Consumo de información en internet",
    fenomenos: [
      "hábitos",
      "impacto",
      "influencia",
      "percepción",
      "credibilidad",
      "relación",
    ],
    poblaciones: [
      "jóvenes",
      "adultos mayores",
      "estudiantes",
      "periodistas",
      "profesionales",
      "votantes",
    ],
    distractores: [
      "fake news",
      "clickbait",
      "enlace",
      "navegador",
      "cookies",
      "sitio web",
    ],
    justificacion: [
      {
        texto:
          "Genera conocimiento sobre cómo las personas evalúan la veracidad de la información digital",
        tipo: "importancia",
      },
      {
        texto:
          "Contribuye al estudio de la alfabetización mediática y el pensamiento crítico",
        tipo: "importancia",
      },
      {
        texto:
          "La desinformación en internet ha influido en elecciones y decisiones de salud pública",
        tipo: "impacto",
      },
      {
        texto:
          "Miles de personas toman decisiones importantes basándose en información falsa",
        tipo: "impacto",
      },
      {
        texto:
          "Los hallazgos permitirían diseñar talleres de verificación de fuentes en escuelas",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para crear herramientas que ayuden a identificar noticias falsas",
        tipo: "utilidad",
      },
      {
        texto:
          "Internet tiene una cantidad enorme de información sobre cualquier tema",
        tipo: "distractor",
      },
      {
        texto: "Google y las redes sociales son las fuentes más consultadas",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Relaciones sociales en línea",
    fenomenos: [
      "impacto",
      "percepción",
      "calidad",
      "influencia",
      "efectos",
      "transformación",
    ],
    poblaciones: [
      "adolescentes",
      "adultos jóvenes",
      "personas mayores",
      "parejas a distancia",
      "estudiantes",
      "personas introvertidas",
    ],
    distractores: [
      "chat grupal",
      "emoji",
      "videollamada",
      "perfil de usuario",
      "solicitud de amistad",
      "estado en línea",
    ],
    justificacion: [
      {
        texto:
          "Aporta conocimiento sobre cómo la virtualidad transforma los vínculos interpersonales",
        tipo: "importancia",
      },
      {
        texto:
          "Enriquece el campo de estudio sobre comunicación mediada por tecnología",
        tipo: "importancia",
      },
      {
        texto:
          "Muchos jóvenes tienen dificultades para establecer relaciones presenciales significativas",
        tipo: "impacto",
      },
      {
        texto:
          "El aislamiento social digital es un problema creciente que afecta la salud emocional",
        tipo: "impacto",
      },
      {
        texto:
          "Los resultados permitirían crear programas de habilidades sociales que integren lo digital y lo presencial",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para orientar a padres sobre cómo acompañar las relaciones en línea de sus hijos",
        tipo: "utilidad",
      },
      {
        texto:
          "Las personas se comunican de muchas formas diferentes por internet",
        tipo: "distractor",
      },
      {
        texto:
          "Las aplicaciones de mensajería son muy utilizadas en todo el mundo",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Aprendizaje virtual",
    fenomenos: [
      "efectividad",
      "percepción",
      "impacto",
      "rendimiento",
      "satisfacción",
      "acceso",
    ],
    poblaciones: [
      "estudiantes de secundaria",
      "docentes",
      "estudiantes universitarios",
      "adultos en formación",
      "niños de primaria",
      "personas con discapacidad",
    ],
    distractores: [
      "plataforma Zoom",
      "foro de discusión",
      "módulo en línea",
      "evaluación virtual",
      "material descargable",
      "clase grabada",
    ],
    justificacion: [
      {
        texto:
          "Genera evidencia sobre las condiciones que hacen efectivo el aprendizaje a distancia",
        tipo: "importancia",
      },
      {
        texto:
          "Contribuye a la teoría educativa sobre ambientes virtuales de aprendizaje",
        tipo: "importancia",
      },
      {
        texto:
          "Miles de estudiantes reportaron bajo rendimiento y desmotivación durante la educación virtual",
        tipo: "impacto",
      },
      {
        texto:
          "La educación virtual amplió brechas entre quienes tienen y no tienen acceso a tecnología",
        tipo: "impacto",
      },
      {
        texto:
          "Los hallazgos permitirían mejorar el diseño de cursos virtuales y plataformas educativas",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para capacitar docentes en metodologías de enseñanza en línea efectivas",
        tipo: "utilidad",
      },
      {
        texto: "Durante la pandemia todas las clases se hicieron por internet",
        tipo: "distractor",
      },
      {
        texto:
          "Existen muchas plataformas educativas como Coursera, edX y Khan Academy",
        tipo: "distractor",
      },
    ],
  },
  {
    name: "Bienestar emocional",
    fenomenos: [
      "factores",
      "percepción",
      "impacto",
      "niveles",
      "relación",
      "promoción",
    ],
    poblaciones: [
      "adolescentes",
      "trabajadores",
      "estudiantes",
      "cuidadores",
      "personas mayores",
      "madres solteras",
    ],
    distractores: [
      "meditación",
      "resiliencia",
      "autoestima",
      "journal emocional",
      "mindfulness",
      "coaching",
    ],
    justificacion: [
      {
        texto:
          "Aporta conocimiento sobre los factores protectores y de riesgo del bienestar emocional",
        tipo: "importancia",
      },
      {
        texto:
          "Profundiza la comprensión de la relación entre emociones y desempeño vital",
        tipo: "importancia",
      },
      {
        texto:
          "El malestar emocional afecta el rendimiento laboral y académico de millones de personas",
        tipo: "impacto",
      },
      {
        texto:
          "La falta de atención emocional temprana genera problemas de salud mental a largo plazo",
        tipo: "impacto",
      },
      {
        texto:
          "Los resultados permitirían crear programas de bienestar emocional en empresas y escuelas",
        tipo: "utilidad",
      },
      {
        texto:
          "Serviría para diseñar herramientas de autogestión emocional accesibles para todos",
        tipo: "utilidad",
      },
      {
        texto: "Estar bien emocionalmente es algo que todos quieren lograr",
        tipo: "distractor",
      },
      {
        texto: "Hay muchos libros de autoayuda sobre bienestar emocional",
        tipo: "distractor",
      },
    ],
  },
];

/* ============================================================
   DATA FOR ISLANDS 2-4 (keyed by theme name)
   – Isla 2: Problema (causas, problema central, consecuencias)
   – Isla 3: Pregunta de investigación (1 correcta + 2 incorrectas)
   – Isla 4: Objetivos (general + 3 específicos en orden lógico)
   ============================================================ */

const ISLANDS_EXTRA_DATA = {
  "Redes sociales": {
    problema: {
      items: [
        {
          text: "Falta de regulación sobre el uso de plataformas digitales",
          zone: "causas",
        },
        {
          text: "Presión social por mantener una imagen idealizada en línea",
          zone: "causas",
        },
        {
          text: "Uso excesivo de redes sociales altera los hábitos de estudio",
          zone: "problema",
        },
        {
          text: "La dependencia a las redes genera aislamiento y distorsión de la realidad",
          zone: "problema",
        },
        {
          text: "Aumento de ansiedad y baja autoestima en usuarios jóvenes",
          zone: "consecuencias",
        },
        {
          text: "Deterioro del rendimiento académico y las relaciones interpersonales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas horas al día usan redes sociales los jóvenes?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso excesivo de redes sociales afecta el rendimiento académico de los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan los algoritmos de las redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre el uso de redes sociales y el rendimiento académico en adolescentes",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de uso de redes sociales entre los estudiantes",
        },
        {
          id: 1,
          text: "Analizar la correlación entre horas de uso y calificaciones académicas",
        },
        {
          id: 2,
          text: "Proponer estrategias de uso responsable para mejorar el rendimiento",
        },
      ],
    },
  },
  "Salud mental": {
    problema: {
      items: [
        {
          text: "Escasa atención psicológica en instituciones educativas",
          zone: "causas",
        },
        {
          text: "Estigma social hacia los problemas de salud mental",
          zone: "causas",
        },
        {
          text: "Incremento de trastornos de ansiedad y depresión en estudiantes",
          zone: "problema",
        },
        {
          text: "Falta de diagnóstico oportuno en jóvenes con malestar emocional",
          zone: "problema",
        },
        {
          text: "Aumento de la deserción escolar por problemas emocionales",
          zone: "consecuencias",
        },
        {
          text: "Deterioro de la calidad de vida y las relaciones familiares",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas personas sufren de depresión en el mundo?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los estudiantes universitarios presentan altos niveles de ansiedad durante los períodos de exámenes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se diagnostica un trastorno mental?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores que influyen en la salud mental de los estudiantes universitarios",
      especificos: [
        {
          id: 0,
          text: "Identificar los principales factores de riesgo emocional en el contexto académico",
        },
        {
          id: 1,
          text: "Evaluar el nivel de ansiedad y estrés durante períodos de evaluación",
        },
        {
          id: 2,
          text: "Proponer un programa de acompañamiento psicológico preventivo",
        },
      ],
    },
  },
  "Inteligencia artificial": {
    problema: {
      items: [
        {
          text: "Falta de formación en el uso ético de herramientas de IA",
          zone: "causas",
        },
        {
          text: "Adopción acelerada de IA sin marcos regulatorios claros",
          zone: "causas",
        },
        {
          text: "Uso indiscriminado de IA para tareas académicas genera dependencia",
          zone: "problema",
        },
        {
          text: "La automatización amenaza empleos sin alternativas de reconversión",
          zone: "problema",
        },
        {
          text: "Pérdida de habilidades de pensamiento crítico en estudiantes",
          zone: "consecuencias",
        },
        {
          text: "Desigualdad entre quienes acceden a IA y quienes no",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos estudiantes usan ChatGPT para hacer tareas?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la integración de IA en la educación afecta el desarrollo del pensamiento crítico en universitarios?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funciona la inteligencia artificial?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la inteligencia artificial en el proceso de aprendizaje universitario",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar las formas de uso de IA entre los estudiantes universitarios",
        },
        {
          id: 1,
          text: "Evaluar cómo el uso de IA afecta las competencias de análisis y redacción",
        },
        {
          id: 2,
          text: "Diseñar lineamientos para la integración ética de IA en la educación",
        },
      ],
    },
  },
  "Contaminación ambiental": {
    problema: {
      items: [
        {
          text: "Falta de educación ambiental en comunidades y escuelas",
          zone: "causas",
        },
        {
          text: "Actividades industriales sin control de emisiones contaminantes",
          zone: "causas",
        },
        {
          text: "Altos niveles de contaminación del aire y agua en zonas industriales",
          zone: "problema",
        },
        {
          text: "Acumulación de residuos tóxicos que sobrepasan la capacidad de los ecosistemas",
          zone: "problema",
        },
        {
          text: "Incremento de enfermedades respiratorias y dermatológicas",
          zone: "consecuencias",
        },
        {
          text: "Degradación irreversible de ecosistemas acuáticos y terrestres",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuánta basura se produce a nivel mundial cada año?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la contaminación del agua afecta la salud de las comunidades rurales cercanas a zonas industriales?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se reciclan los materiales plásticos?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la contaminación ambiental en la salud de comunidades cercanas a zonas industriales",
      especificos: [
        {
          id: 0,
          text: "Identificar las principales fuentes de contaminación en la zona de estudio",
        },
        {
          id: 1,
          text: "Analizar los indicadores de salud de la población expuesta a contaminantes",
        },
        {
          id: 2,
          text: "Proponer medidas de mitigación ambiental basadas en los hallazgos",
        },
      ],
    },
  },
  "Educación digital": {
    problema: {
      items: [
        {
          text: "Brecha digital entre zonas urbanas y rurales",
          zone: "causas",
        },
        {
          text: "Insuficiente capacitación docente en herramientas tecnológicas",
          zone: "causas",
        },
        {
          text: "Las plataformas digitales no se adaptan a las necesidades pedagógicas locales",
          zone: "problema",
        },
        {
          text: "La educación digital reproduce desigualdades de acceso y calidad",
          zone: "problema",
        },
        {
          text: "Bajo rendimiento en estudiantes sin acceso tecnológico adecuado",
          zone: "consecuencias",
        },
        {
          text: "Deserción escolar por frustración con entornos virtuales deficientes",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos estudiantes tienen acceso a internet en el país?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de formación docente en TIC limita la efectividad de la educación digital en escuelas rurales?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se crea una plataforma educativa en línea?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Evaluar la efectividad de la educación digital en el aprendizaje de estudiantes de zonas rurales",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el nivel de acceso tecnológico y habilidades digitales de los estudiantes",
        },
        {
          id: 1,
          text: "Comparar el rendimiento académico entre modalidad presencial y virtual",
        },
        {
          id: 2,
          text: "Proponer un modelo de capacitación digital adaptado al contexto rural",
        },
      ],
    },
  },
  "Cambio climático": {
    problema: {
      items: [
        {
          text: "Emisiones desmedidas de gases de efecto invernadero",
          zone: "causas",
        },
        {
          text: "Deforestación masiva que reduce la capacidad de absorción de CO₂",
          zone: "causas",
        },
        {
          text: "El aumento de la temperatura global altera los patrones climáticos regionales",
          zone: "problema",
        },
        {
          text: "Las comunidades vulnerables carecen de recursos para adaptarse",
          zone: "problema",
        },
        {
          text: "Pérdida de cosechas y medios de vida en comunidades agrícolas",
          zone: "consecuencias",
        },
        {
          text: "Aumento de desastres naturales como inundaciones y sequías extremas",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos grados ha aumentado la temperatura global?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las comunidades agrícolas son las más vulnerables ante los efectos del cambio climático?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se mide el efecto invernadero?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la vulnerabilidad de comunidades agrícolas frente a los efectos del cambio climático",
      especificos: [
        {
          id: 0,
          text: "Identificar los efectos climáticos más frecuentes en la zona de estudio",
        },
        {
          id: 1,
          text: "Evaluar las pérdidas económicas y sociales causadas por eventos climáticos extremos",
        },
        {
          id: 2,
          text: "Diseñar un plan de adaptación climática para la comunidad estudiada",
        },
      ],
    },
  },
  Ciberacoso: {
    problema: {
      items: [
        {
          text: "Anonimato en plataformas digitales que facilita agresiones",
          zone: "causas",
        },
        {
          text: "Falta de protocolos de prevención en instituciones educativas",
          zone: "causas",
        },
        {
          text: "Aumento de casos de acoso virtual entre adolescentes en redes sociales",
          zone: "problema",
        },
        {
          text: "Las víctimas no denuncian por miedo o desconocimiento de sus derechos",
          zone: "problema",
        },
        {
          text: "Desarrollo de depresión, ansiedad y aislamiento social en víctimas",
          zone: "consecuencias",
        },
        {
          text: "Deterioro del clima escolar y aumento de la deserción",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos adolescentes han sido víctimas de ciberacoso?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el ciberacoso genera consecuencias psicológicas graves en los adolescentes de instituciones educativas?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se bloquea a un acosador en redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las causas y consecuencias del ciberacoso en adolescentes de instituciones educativas",
      especificos: [
        {
          id: 0,
          text: "Identificar las formas más comunes de ciberacoso entre los estudiantes",
        },
        {
          id: 1,
          text: "Evaluar el impacto psicológico del ciberacoso en las víctimas",
        },
        {
          id: 2,
          text: "Proponer un protocolo de prevención e intervención contra el ciberacoso escolar",
        },
      ],
    },
  },
  "Uso del celular": {
    problema: {
      items: [
        {
          text: "Acceso ilimitado al celular sin supervisión parental",
          zone: "causas",
        },
        {
          text: "Diseño adictivo de aplicaciones y notificaciones",
          zone: "causas",
        },
        {
          text: "Los estudiantes usan el celular compulsivamente durante clases",
          zone: "problema",
        },
        {
          text: "La dependencia al celular interfiere con el sueño y la concentración",
          zone: "problema",
        },
        {
          text: "Disminución del rendimiento académico y la capacidad de atención",
          zone: "consecuencias",
        },
        {
          text: "Problemas de postura, visión y calidad del sueño",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas horas al día pasan los jóvenes en el celular?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso excesivo del celular afecta la concentración y el rendimiento de los estudiantes de secundaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo funcionan las notificaciones de las aplicaciones móviles?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre el uso excesivo del celular y el rendimiento académico en estudiantes de secundaria",
      especificos: [
        {
          id: 0,
          text: "Determinar la frecuencia y duración de uso del celular entre los estudiantes",
        },
        {
          id: 1,
          text: "Analizar la relación entre el tiempo de uso y las calificaciones obtenidas",
        },
        {
          id: 2,
          text: "Elaborar recomendaciones para un uso equilibrado del celular",
        },
      ],
    },
  },
  Videojuegos: {
    problema: {
      items: [
        {
          text: "Falta de control parental sobre el tiempo de juego",
          zone: "causas",
        },
        {
          text: "Diseño de videojuegos orientado a generar adicción con recompensas",
          zone: "causas",
        },
        {
          text: "El uso excesivo de videojuegos compite con el tiempo de estudio",
          zone: "problema",
        },
        {
          text: "Los jóvenes desarrollan patrones de conducta adictiva hacia los videojuegos",
          zone: "problema",
        },
        {
          text: "Bajo rendimiento escolar y sedentarismo en jugadores frecuentes",
          zone: "consecuencias",
        },
        {
          text: "Aislamiento social y deterioro de habilidades de comunicación",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos jóvenes juegan videojuegos diariamente?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso excesivo de videojuegos afecta el rendimiento académico y las relaciones sociales de los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se programan los videojuegos modernos?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del uso excesivo de videojuegos en el desempeño académico y social de los adolescentes",
      especificos: [
        {
          id: 0,
          text: "Identificar los hábitos y patrones de juego de los estudiantes",
        },
        {
          id: 1,
          text: "Evaluar la relación entre horas de juego, rendimiento académico y vida social",
        },
        {
          id: 2,
          text: "Diseñar una guía de uso responsable de videojuegos para familias",
        },
      ],
    },
  },
  "Alimentación saludable": {
    problema: {
      items: [
        {
          text: "Alta disponibilidad de comida ultraprocesada a bajo costo",
          zone: "causas",
        },
        {
          text: "Falta de educación nutricional en escuelas y hogares",
          zone: "causas",
        },
        {
          text: "Los estudiantes prefieren alimentos ultraprocesados sobre opciones nutritivas",
          zone: "problema",
        },
        {
          text: "Los hábitos alimenticios inadecuados se normalizan entre los jóvenes",
          zone: "problema",
        },
        {
          text: "Aumento de sobrepeso, obesidad y enfermedades crónicas a edad temprana",
          zone: "consecuencias",
        },
        {
          text: "Bajo rendimiento físico y cognitivo por deficiencias nutricionales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuánta comida chatarra consumen los jóvenes por semana?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los hábitos alimenticios de los estudiantes de secundaria influyen en su rendimiento académico y su salud?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se elabora una dieta balanceada?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre los hábitos alimenticios y el rendimiento académico en estudiantes de secundaria",
      especificos: [
        {
          id: 0,
          text: "Caracterizar los hábitos alimenticios de los estudiantes mediante encuestas",
        },
        {
          id: 1,
          text: "Analizar la relación entre calidad nutricional y rendimiento escolar",
        },
        {
          id: 2,
          text: "Proponer un programa de alimentación saludable para la institución educativa",
        },
      ],
    },
  },
  "Actividad física": {
    problema: {
      items: [
        {
          text: "Sedentarismo promovido por el uso excesivo de pantallas",
          zone: "causas",
        },
        {
          text: "Escasez de espacios deportivos accesibles en la comunidad",
          zone: "causas",
        },
        {
          text: "Los jóvenes realizan menos actividad física de la recomendada por la OMS",
          zone: "problema",
        },
        {
          text: "La inactividad física se ha convertido en norma entre los adolescentes",
          zone: "problema",
        },
        {
          text: "Aumento de obesidad y enfermedades cardiovasculares en jóvenes",
          zone: "consecuencias",
        },
        {
          text: "Mayor prevalencia de estrés y problemas de salud mental en sedentarios",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos minutos de ejercicio hacen los jóvenes al día?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de actividad física genera problemas de salud y rendimiento en los estudiantes de secundaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se diseña una rutina de ejercicios?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre la actividad física y la salud integral de los estudiantes de secundaria",
      especificos: [
        {
          id: 0,
          text: "Medir el nivel de actividad física de los estudiantes mediante cuestionarios validados",
        },
        {
          id: 1,
          text: "Evaluar la relación entre actividad física, salud y rendimiento académico",
        },
        {
          id: 2,
          text: "Diseñar un programa de promoción de actividad física para la institución",
        },
      ],
    },
  },
  "Estrés académico": {
    problema: {
      items: [
        {
          text: "Sobrecarga de tareas y evaluaciones simultáneas",
          zone: "causas",
        },
        {
          text: "Presión social y familiar por obtener altas calificaciones",
          zone: "causas",
        },
        {
          text: "Los estudiantes experimentan niveles crónicos de estrés durante el ciclo escolar",
          zone: "problema",
        },
        {
          text: "El estrés académico no es reconocido como problema de salud en las instituciones",
          zone: "problema",
        },
        {
          text: "Disminución del rendimiento, insomnio y agotamiento emocional",
          zone: "consecuencias",
        },
        {
          text: "Abandono de actividades recreativas y deterioro de relaciones sociales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos estudiantes se sienten estresados por los exámenes?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la sobrecarga de evaluaciones genera estrés crónico que afecta el bienestar de los estudiantes universitarios?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se maneja el estrés según la psicología?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las causas y efectos del estrés académico en el bienestar de los estudiantes universitarios",
      especificos: [
        {
          id: 0,
          text: "Identificar las principales fuentes de estrés académico percibidas por los estudiantes",
        },
        {
          id: 1,
          text: "Evaluar la relación entre estrés académico, rendimiento y bienestar emocional",
        },
        {
          id: 2,
          text: "Proponer estrategias institucionales para la gestión saludable del estrés",
        },
      ],
    },
  },
  "Tecnología en la educación": {
    problema: {
      items: [
        {
          text: "Resistencia al cambio por parte de docentes tradicionales",
          zone: "causas",
        },
        {
          text: "Infraestructura tecnológica insuficiente en las instituciones",
          zone: "causas",
        },
        {
          text: "La tecnología se usa más como entretenimiento que como herramienta pedagógica",
          zone: "problema",
        },
        {
          text: "No existe una estrategia clara para integrar tecnología en el currículo",
          zone: "problema",
        },
        {
          text: "Desigualdad en la calidad educativa entre instituciones equipadas y no equipadas",
          zone: "consecuencias",
        },
        {
          text: "Subutilización de recursos tecnológicos disponibles",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas escuelas tienen computadoras en el país?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la integración de tecnología en la educación no mejora significativamente el aprendizaje en las escuelas públicas?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se instalan proyectores en un salón de clases?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Evaluar la efectividad de la tecnología como herramienta pedagógica en escuelas públicas",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el estado actual de la infraestructura tecnológica en las escuelas",
        },
        {
          id: 1,
          text: "Analizar cómo los docentes integran la tecnología en sus prácticas de enseñanza",
        },
        {
          id: 2,
          text: "Proponer un modelo de integración tecnológica basado en las necesidades detectadas",
        },
      ],
    },
  },
  "Hábitos de sueño": {
    problema: {
      items: [
        {
          text: "Uso de pantallas electrónicas antes de dormir",
          zone: "causas",
        },
        {
          text: "Horarios irregulares de sueño por actividades nocturnas",
          zone: "causas",
        },
        {
          text: "Los adolescentes duermen significativamente menos de las 8 horas recomendadas",
          zone: "problema",
        },
        {
          text: "La mala calidad del sueño es normalizada como parte de la vida estudiantil",
          zone: "problema",
        },
        {
          text: "Déficit de atención y somnolencia durante las clases",
          zone: "consecuencias",
        },
        {
          text: "Mayor vulnerabilidad a enfermedades y trastornos del estado de ánimo",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas horas duermen los adolescentes en promedio?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los malos hábitos de sueño afectan el rendimiento académico y la salud de los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funciona el ciclo del sueño en el cerebro?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre los hábitos de sueño y el rendimiento académico en adolescentes",
      especificos: [
        {
          id: 0,
          text: "Caracterizar los hábitos de sueño de los estudiantes mediante encuestas",
        },
        {
          id: 1,
          text: "Evaluar la correlación entre calidad de sueño y rendimiento escolar",
        },
        {
          id: 2,
          text: "Elaborar una guía de higiene del sueño dirigida a estudiantes y familias",
        },
      ],
    },
  },
  "Consumo de información en internet": {
    problema: {
      items: [
        {
          text: "Algoritmos que priorizan contenido sensacionalista sobre el informativo",
          zone: "causas",
        },
        {
          text: "Falta de pensamiento crítico para evaluar fuentes de información",
          zone: "causas",
        },
        {
          text: "Los jóvenes consumen noticias falsas sin verificarlas y las comparten",
          zone: "problema",
        },
        {
          text: "No se distingue entre información confiable y contenido viral sin fundamento",
          zone: "problema",
        },
        {
          text: "Desinformación generalizada que afecta decisiones personales y colectivas",
          zone: "consecuencias",
        },
        {
          text: "Polarización social y pérdida de confianza en medios de comunicación",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas noticias falsas circulan en internet al día?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los estudiantes universitarios tienen dificultad para distinguir noticias falsas de información confiable en internet?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan los algoritmos de los buscadores?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la capacidad de los estudiantes universitarios para evaluar la confiabilidad de la información en internet",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar las fuentes de información que utilizan habitualmente los estudiantes",
        },
        {
          id: 1,
          text: "Evaluar el nivel de competencia mediática y verificación de fuentes",
        },
        {
          id: 2,
          text: "Diseñar un taller de alfabetización informacional para la comunidad universitaria",
        },
      ],
    },
  },
  "Relaciones sociales en línea": {
    problema: {
      items: [
        {
          text: "Sustitución de la comunicación presencial por interacciones virtuales",
          zone: "causas",
        },
        {
          text: "Creación de identidades idealizadas que no reflejan la realidad",
          zone: "causas",
        },
        {
          text: "Las relaciones en línea generan vínculos superficiales y sensación de soledad",
          zone: "problema",
        },
        {
          text: "Los jóvenes priorizan conexiones virtuales sobre relaciones presenciales",
          zone: "problema",
        },
        {
          text: "Aumento de inseguridad emocional y dependencia de la validación digital",
          zone: "consecuencias",
        },
        {
          text: "Dificultad para desarrollar habilidades sociales en contextos reales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos amigos virtuales tienen los jóvenes en promedio?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las relaciones sociales en línea afectan la calidad de los vínculos interpersonales de los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se hacen amigos en redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de las relaciones sociales en línea sobre la calidad de los vínculos interpersonales en adolescentes",
      especificos: [
        {
          id: 0,
          text: "Identificar las plataformas y formas de interacción social más utilizadas",
        },
        {
          id: 1,
          text: "Evaluar la percepción de calidad en relaciones virtuales vs. presenciales",
        },
        {
          id: 2,
          text: "Proponer actividades que fortalezcan las habilidades sociales presenciales",
        },
      ],
    },
  },
  "Aprendizaje virtual": {
    problema: {
      items: [
        {
          text: "Falta de metodologías didácticas adaptadas al entorno virtual",
          zone: "causas",
        },
        {
          text: "Desigualdad de acceso a dispositivos e internet estable",
          zone: "causas",
        },
        {
          text: "El aprendizaje virtual no logra los mismos resultados que la educación presencial",
          zone: "problema",
        },
        {
          text: "Los estudiantes experimentan desmotivación y fatiga digital",
          zone: "problema",
        },
        {
          text: "Aumento de la brecha de aprendizaje entre estudiantes con y sin recursos",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de la dimensión socioafectiva del proceso educativo",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos estudiantes prefieren las clases virtuales?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el aprendizaje virtual genera desmotivación y menores resultados académicos en estudiantes de secundaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se configura una clase por Zoom?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Evaluar los factores que afectan la efectividad del aprendizaje virtual en estudiantes de secundaria",
      especificos: [
        {
          id: 0,
          text: "Identificar los obstáculos técnicos y pedagógicos del aprendizaje virtual",
        },
        {
          id: 1,
          text: "Comparar el rendimiento académico en modalidad virtual vs. presencial",
        },
        {
          id: 2,
          text: "Proponer estrategias pedagógicas para mejorar la experiencia de aprendizaje virtual",
        },
      ],
    },
  },
  "Bienestar emocional": {
    problema: {
      items: [
        {
          text: "Ausencia de programas de educación socioemocional en las escuelas",
          zone: "causas",
        },
        {
          text: "Normalización del malestar emocional como parte de la vida cotidiana",
          zone: "causas",
        },
        {
          text: "Los jóvenes no identifican ni gestionan adecuadamente sus emociones",
          zone: "problema",
        },
        {
          text: "El bienestar emocional no se prioriza en los entornos educativos",
          zone: "problema",
        },
        {
          text: "Aumento de conflictos interpersonales y dificultades de convivencia",
          zone: "consecuencias",
        },
        {
          text: "Mayor vulnerabilidad a trastornos de ansiedad y depresión",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos jóvenes se sienten emocionalmente bien en su vida diaria?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de educación socioemocional afecta el bienestar y la convivencia de los estudiantes de secundaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se definen las emociones según la psicología?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la educación socioemocional en el bienestar y la convivencia de los estudiantes de secundaria",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el nivel de competencias socioemocionales de los estudiantes",
        },
        {
          id: 1,
          text: "Evaluar la relación entre bienestar emocional, convivencia escolar y rendimiento",
        },
        {
          id: 2,
          text: "Diseñar un programa de educación socioemocional adaptado al contexto escolar",
        },
      ],
    },
  },
};

/* Helper: get theme by name (O(1) Map lookup) */
const _themeMap = new Map(THEME_DB.map((t) => [t.name, t]));
function getThemeByName(name) {
  return _themeMap.get(name) || null;
}

/* Helper: get population-specific data for Islands 2-4.
   Falls back to ISLANDS_EXTRA_DATA if no specific variant exists. */
function getPopulationData(themeName, population) {
  if (typeof POPULATION_DATA !== "undefined" && population) {
    const key = themeName + "::" + population;
    if (POPULATION_DATA[key]) return POPULATION_DATA[key];
  }
  return ISLANDS_EXTRA_DATA[themeName] || null;
}
