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

/* Helper: get theme by name */
function getThemeByName(name) {
  return THEME_DB.find((t) => t.name === name) || null;
}
