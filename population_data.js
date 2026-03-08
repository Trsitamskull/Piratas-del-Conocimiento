/* ============================================================
   PIRATAS DEL CONOCIMIENTO – Population-Specific Data
   Keyed by "ThemeName::Population"
   Each entry: problema (6 items), pregunta (3 opciones), objetivos
   ============================================================ */

const POPULATION_DATA = {
  // ============================================================
  // TEMA 1: REDES SOCIALES (6 poblaciones)
  // ============================================================

  "Redes sociales::adolescentes": {
    problema: {
      items: [
        {
          text: "Falta de supervisión parental sobre el uso de redes",
          zone: "causas",
        },
        {
          text: "Presión social por encajar y obtener validación digital",
          zone: "causas",
        },
        {
          text: "Adolescentes usan redes sociales de forma compulsiva descuidando otras actividades",
          zone: "problema",
        },
        {
          text: "La exposición constante a contenido idealizado distorsiona la autoimagen de los adolescentes",
          zone: "problema",
        },
        {
          text: "Aumento de ansiedad, depresión y baja autoestima en adolescentes",
          zone: "consecuencias",
        },
        {
          text: "Deterioro del rendimiento académico y aislamiento de relaciones presenciales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas al día pasan los adolescentes en redes sociales?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso excesivo de redes sociales afecta la autoestima y el rendimiento académico de los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan los algoritmos de TikTok e Instagram?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre el uso de redes sociales y la autoestima y rendimiento académico en adolescentes",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de uso de redes sociales entre los adolescentes",
        },
        {
          id: 1,
          text: "Evaluar la relación entre tiempo en redes, autoestima y calificaciones en adolescentes",
        },
        {
          id: 2,
          text: "Proponer estrategias de uso responsable de redes sociales dirigidas a adolescentes",
        },
      ],
    },
  },

  "Redes sociales::estudiantes de secundaria": {
    problema: {
      items: [
        {
          text: "Acceso ilimitado al celular durante horas de estudio",
          zone: "causas",
        },
        {
          text: "Ausencia de programas de alfabetización digital en la escuela",
          zone: "causas",
        },
        {
          text: "Los estudiantes de secundaria priorizan las redes sociales sobre sus tareas escolares",
          zone: "problema",
        },
        {
          text: "El uso de redes durante clases reduce la concentración y el aprovechamiento académico",
          zone: "problema",
        },
        {
          text: "Bajo rendimiento académico y calificaciones más bajas en estudiantes de secundaria",
          zone: "consecuencias",
        },
        {
          text: "Conflictos entre compañeros generados por interacciones en redes sociales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos estudiantes de secundaria revisan el celular durante clases?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso de redes sociales durante la jornada escolar afecta el rendimiento de los estudiantes de secundaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo bloquear redes sociales en dispositivos escolares?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del uso de redes sociales durante la jornada escolar en el rendimiento de estudiantes de secundaria",
      especificos: [
        {
          id: 0,
          text: "Determinar la frecuencia de uso de redes sociales durante horas de clase en estudiantes de secundaria",
        },
        {
          id: 1,
          text: "Evaluar la relación entre uso de redes en horario escolar y calificaciones obtenidas",
        },
        {
          id: 2,
          text: "Diseñar una guía de uso responsable de redes sociales para la comunidad escolar",
        },
      ],
    },
  },

  "Redes sociales::jóvenes universitarios": {
    problema: {
      items: [
        {
          text: "Cultura de comparación constante en redes entre universitarios",
          zone: "causas",
        },
        {
          text: "Uso de redes como escape al estrés académico universitario",
          zone: "causas",
        },
        {
          text: "Los jóvenes universitarios dedican horas a redes en vez de estudiar o investigar",
          zone: "problema",
        },
        {
          text: "La adicción a redes interfiere con la vida académica y social universitaria",
          zone: "problema",
        },
        {
          text: "Disminución en la calidad de trabajos académicos y tesis de los universitarios",
          zone: "consecuencias",
        },
        {
          text: "Aumento de procrastinación y ansiedad académica en la universidad",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas cuentas de redes sociales tienen los universitarios en promedio?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la dependencia a redes sociales afecta la productividad académica de los jóvenes universitarios?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo gestionan su tiempo en redes los universitarios?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre la dependencia a redes sociales y la productividad académica en jóvenes universitarios",
      especificos: [
        {
          id: 0,
          text: "Identificar los hábitos de uso de redes sociales de los jóvenes universitarios",
        },
        {
          id: 1,
          text: "Analizar la correlación entre dependencia a redes y rendimiento académico universitario",
        },
        {
          id: 2,
          text: "Proponer un programa de desconexión digital para mejorar la productividad estudiantil",
        },
      ],
    },
  },

  "Redes sociales::docentes": {
    problema: {
      items: [
        {
          text: "Falta de formación docente sobre el manejo de redes sociales en el aula",
          zone: "causas",
        },
        {
          text: "Desconocimiento de los docentes sobre las dinámicas digitales de sus estudiantes",
          zone: "causas",
        },
        {
          text: "Los docentes no saben cómo integrar ni regular las redes sociales en su práctica pedagógica",
          zone: "problema",
        },
        {
          text: "Las redes sociales se perciben como distracción sin explorar su potencial educativo",
          zone: "problema",
        },
        {
          text: "Conflictos entre docentes y estudiantes por el uso de dispositivos en clase",
          zone: "consecuencias",
        },
        {
          text: "Oportunidades pedagógicas desaprovechadas por desconocimiento de herramientas digitales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos docentes usan redes sociales con fines educativos?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de formación en redes sociales limita la capacidad de los docentes para integrarlas en su práctica pedagógica?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo crear un perfil docente profesional en redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la percepción y capacitación de los docentes respecto al uso de redes sociales como herramienta pedagógica",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el nivel de conocimiento de los docentes sobre redes sociales y su uso educativo",
        },
        {
          id: 1,
          text: "Evaluar las actitudes y percepciones de los docentes frente al uso de redes en el aula",
        },
        {
          id: 2,
          text: "Diseñar un plan de capacitación docente en integración pedagógica de redes sociales",
        },
      ],
    },
  },

  "Redes sociales::padres de familia": {
    problema: {
      items: [
        {
          text: "Brecha generacional entre padres e hijos respecto a la tecnología digital",
          zone: "causas",
        },
        {
          text: "Desconocimiento de los padres sobre los riesgos de las redes sociales",
          zone: "causas",
        },
        {
          text: "Los padres no pueden supervisar eficazmente la actividad digital de sus hijos",
          zone: "problema",
        },
        {
          text: "La falta de mediación parental expone a los menores a contenido inapropiado",
          zone: "problema",
        },
        {
          text: "Deterioro de la comunicación familiar por desconfianza mutua sobre el uso de redes",
          zone: "consecuencias",
        },
        {
          text: "Los hijos desarrollan conductas riesgosas en línea sin orientación de sus padres",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos padres revisan las redes sociales de sus hijos?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de mediación parental en redes sociales aumenta la exposición de los menores a riesgos digitales?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo configurar controles parentales en redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el rol de la mediación parental en el uso seguro de redes sociales por parte de los menores",
      especificos: [
        {
          id: 0,
          text: "Identificar las prácticas de mediación parental sobre el uso de redes sociales en el hogar",
        },
        {
          id: 1,
          text: "Evaluar la relación entre mediación parental y conductas de riesgo digital de los hijos",
        },
        {
          id: 2,
          text: "Proponer una guía de acompañamiento digital dirigida a padres de familia",
        },
      ],
    },
  },

  "Redes sociales::niños de primaria": {
    problema: {
      items: [
        {
          text: "Acceso temprano a dispositivos con redes sociales sin restricciones",
          zone: "causas",
        },
        {
          text: "Los padres permiten el uso de redes sin conocer los riesgos para menores",
          zone: "causas",
        },
        {
          text: "Niños de primaria están expuestos a contenido no apto para su edad en redes sociales",
          zone: "problema",
        },
        {
          text: "El uso prematuro de redes interfiere con el desarrollo social y cognitivo infantil",
          zone: "problema",
        },
        {
          text: "Problemas de conducta, ansiedad y dificultad para socializar en niños",
          zone: "consecuencias",
        },
        {
          text: "Reducción del tiempo de juego y actividades fundamentales para el desarrollo infantil",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos niños de primaria tienen cuenta en redes sociales?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el acceso temprano a redes sociales afecta el desarrollo social y cognitivo de los niños de primaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo crear filtros de contenido para niños en internet?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los efectos del uso temprano de redes sociales en el desarrollo social y cognitivo de niños de primaria",
      especificos: [
        {
          id: 0,
          text: "Identificar a qué edad y con qué frecuencia los niños de primaria acceden a redes sociales",
        },
        {
          id: 1,
          text: "Evaluar el impacto del uso de redes en las habilidades sociales y el rendimiento escolar de los niños",
        },
        {
          id: 2,
          text: "Proponer lineamientos de uso seguro de redes sociales para familias con niños en edad escolar",
        },
      ],
    },
  },

  // ============================================================
  // TEMA 2: SALUD MENTAL (6 poblaciones)
  // ============================================================

  "Salud mental::adolescentes": {
    problema: {
      items: [
        {
          text: "Presión académica y social excesiva durante la etapa de la adolescencia",
          zone: "causas",
        },
        {
          text: "Falta de espacios de contención emocional en los colegios para los adolescentes",
          zone: "causas",
        },
        {
          text: "Los adolescentes presentan niveles crecientes de ansiedad y depresión sin atención oportuna",
          zone: "problema",
        },
        {
          text: "Muchos adolescentes normalizan el malestar emocional y no buscan ayuda profesional",
          zone: "problema",
        },
        {
          text: "Aumento de autolesiones y conductas de riesgo entre los adolescentes",
          zone: "consecuencias",
        },
        {
          text: "Deserción escolar y aislamiento social en adolescentes con problemas emocionales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos adolescentes sufren de ansiedad en el país?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los adolescentes presentan niveles crecientes de ansiedad y depresión sin recibir atención oportuna?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se diagnostica la depresión en adolescentes?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores que influyen en la salud mental de los adolescentes y la falta de atención oportuna",
      especificos: [
        {
          id: 0,
          text: "Identificar los principales factores de riesgo para la salud mental de los adolescentes",
        },
        {
          id: 1,
          text: "Evaluar los niveles de ansiedad y depresión en una muestra de adolescentes",
        },
        {
          id: 2,
          text: "Proponer un programa de detección temprana de problemas emocionales en colegios",
        },
      ],
    },
  },

  "Salud mental::estudiantes universitarios": {
    problema: {
      items: [
        {
          text: "Sobrecarga académica y presión por el rendimiento en la universidad",
          zone: "causas",
        },
        {
          text: "Insuficientes servicios de apoyo psicológico en las universidades",
          zone: "causas",
        },
        {
          text: "Los universitarios presentan altos niveles de ansiedad durante los períodos de exámenes",
          zone: "problema",
        },
        {
          text: "Muchos estudiantes universitarios desarrollan trastornos de sueño y estrés crónico",
          zone: "problema",
        },
        {
          text: "Aumento de la deserción universitaria por problemas de salud mental",
          zone: "consecuencias",
        },
        {
          text: "Deterioro de la calidad de vida y las relaciones sociales de los universitarios",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos universitarios han considerado abandonar sus estudios por estrés?",
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
          question:
            "¿Cómo funcionan los servicios psicológicos universitarios?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores que influyen en la salud mental de los estudiantes universitarios durante su formación",
      especificos: [
        {
          id: 0,
          text: "Identificar los factores de riesgo emocional más frecuentes en el contexto universitario",
        },
        {
          id: 1,
          text: "Evaluar el nivel de ansiedad y estrés durante períodos de evaluación universitaria",
        },
        {
          id: 2,
          text: "Proponer un programa de acompañamiento psicológico preventivo para universitarios",
        },
      ],
    },
  },

  "Salud mental::trabajadores": {
    problema: {
      items: [
        {
          text: "Jornadas laborales extensas sin reguardo del bienestar emocional",
          zone: "causas",
        },
        {
          text: "Cultura laboral que estigmatiza la búsqueda de ayuda psicológica",
          zone: "causas",
        },
        {
          text: "Los trabajadores sufren burnout y agotamiento emocional sin ser diagnosticados",
          zone: "problema",
        },
        {
          text: "El estrés laboral crónico afecta la salud mental de los empleados sin que las empresas intervengan",
          zone: "problema",
        },
        {
          text: "Aumento del ausentismo y rotación laboral por problemas de salud mental",
          zone: "consecuencias",
        },
        {
          text: "Deterioro de la productividad y las relaciones interpersonales en el trabajo",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos trabajadores sufren de estrés laboral en su empresa?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el estrés laboral crónico genera burnout y deterioro de la salud mental en los trabajadores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se mide el burnout en una empresa?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores laborales que afectan la salud mental de los trabajadores y generan burnout",
      especificos: [
        {
          id: 0,
          text: "Identificar las condiciones laborales que generan mayor estrés emocional en los trabajadores",
        },
        {
          id: 1,
          text: "Evaluar los niveles de burnout y su relación con la productividad laboral",
        },
        {
          id: 2,
          text: "Proponer un programa de bienestar psicológico para implementar en entornos laborales",
        },
      ],
    },
  },

  "Salud mental::adultos mayores": {
    problema: {
      items: [
        {
          text: "Aislamiento social y pérdida de redes de apoyo en la vejez",
          zone: "causas",
        },
        {
          text: "Escasos programas de salud mental dirigidos específicamente a adultos mayores",
          zone: "causas",
        },
        {
          text: "Los adultos mayores experimentan depresión y soledad que pasan desapercibidas",
          zone: "problema",
        },
        {
          text: "El deterioro cognitivo se confunde con tristeza y no recibe atención especializada",
          zone: "problema",
        },
        {
          text: "Mayor riesgo de deterioro cognitivo acelerado en adultos mayores con depresión",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de autonomía y disminución de la calidad de vida en la vejez",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos adultos mayores son diagnosticados con depresión al año?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los adultos mayores experimentan depresión y soledad sin recibir atención especializada?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se evalúa la salud mental en personas de la tercera edad?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores que influyen en la salud mental de los adultos mayores y la falta de atención especializada",
      especificos: [
        {
          id: 0,
          text: "Identificar los factores de riesgo emocional más frecuentes en los adultos mayores",
        },
        {
          id: 1,
          text: "Evaluar los niveles de depresión y soledad en una muestra de adultos mayores",
        },
        {
          id: 2,
          text: "Diseñar un programa de intervención psicosocial para mejorar el bienestar de los adultos mayores",
        },
      ],
    },
  },

  "Salud mental::mujeres gestantes": {
    problema: {
      items: [
        {
          text: "Cambios hormonales y emocionales intensos durante el embarazo",
          zone: "causas",
        },
        {
          text: "Falta de tamizaje de salud mental en los controles prenatales",
          zone: "causas",
        },
        {
          text: "Las mujeres gestantes sufren ansiedad y depresión perinatal sin diagnóstico oportuno",
          zone: "problema",
        },
        {
          text: "El malestar emocional durante el embarazo se minimiza como algo normal y pasajero",
          zone: "problema",
        },
        {
          text: "Mayor riesgo de depresión posparto y dificultades en el vínculo madre-hijo",
          zone: "consecuencias",
        },
        {
          text: "Complicaciones en el desarrollo emocional del bebé por estrés materno no tratado",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas mujeres embarazadas sufren depresión perinatal?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la depresión y ansiedad perinatal en mujeres gestantes no son diagnosticadas oportunamente?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se trata la depresión durante el embarazo?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores que dificultan la detección oportuna de problemas de salud mental en mujeres gestantes",
      especificos: [
        {
          id: 0,
          text: "Identificar los factores de riesgo emocional durante el embarazo en mujeres gestantes",
        },
        {
          id: 1,
          text: "Evaluar la presencia de ansiedad y depresión perinatal mediante instrumentos validados",
        },
        {
          id: 2,
          text: "Proponer la integración de tamizaje de salud mental en los controles prenatales",
        },
      ],
    },
  },

  "Salud mental::personal de salud": {
    problema: {
      items: [
        {
          text: "Exposición constante a situaciones de sufrimiento y muerte en el trabajo",
          zone: "causas",
        },
        {
          text: "Jornadas extensas y sobrecarga laboral en el sector salud",
          zone: "causas",
        },
        {
          text: "El personal de salud presenta altos niveles de agotamiento emocional y burnout sin atención",
          zone: "problema",
        },
        {
          text: "Los profesionales de salud no buscan ayuda psicológica por temor al estigma profesional",
          zone: "problema",
        },
        {
          text: "Aumento de errores médicos y disminución de la calidad de atención al paciente",
          zone: "consecuencias",
        },
        {
          text: "Abandono de la profesión sanitaria y escasez de personal capacitado",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos médicos y enfermeras sufren burnout actualmente?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el personal de salud presenta altos niveles de burnout sin recibir apoyo psicológico?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo manejar el estrés en profesiones de salud?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores que generan burnout y deterioro de la salud mental en el personal de salud",
      especificos: [
        {
          id: 0,
          text: "Identificar las condiciones laborales que generan mayor desgaste emocional en el personal de salud",
        },
        {
          id: 1,
          text: "Evaluar los niveles de burnout y su impacto en la calidad de atención sanitaria",
        },
        {
          id: 2,
          text: "Diseñar un programa de bienestar psicológico para profesionales del sector salud",
        },
      ],
    },
  },

  // ============================================================
  // TEMA 3: INTELIGENCIA ARTIFICIAL (6 poblaciones)
  // ============================================================

  "Inteligencia artificial::estudiantes universitarios": {
    problema: {
      items: [
        {
          text: "Acceso masivo a herramientas de IA sin formación en su uso ético",
          zone: "causas",
        },
        {
          text: "Presión por entregar trabajos perfectos en poco tiempo",
          zone: "causas",
        },
        {
          text: "Los universitarios usan IA para generar trabajos académicos sin comprender los contenidos",
          zone: "problema",
        },
        {
          text: "La dependencia de la IA debilita las habilidades de análisis y redacción en universitarios",
          zone: "problema",
        },
        {
          text: "Pérdida de pensamiento crítico y originalidad en la producción académica universitaria",
          zone: "consecuencias",
        },
        {
          text: "Casos de plagio involuntario y sanciones disciplinarias por uso inadecuado de IA",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos universitarios usan ChatGPT para hacer tareas?",
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
          question: "¿Cómo funciona un modelo de lenguaje como ChatGPT?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del uso de inteligencia artificial en el desarrollo de competencias académicas en estudiantes universitarios",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar las formas de uso de IA entre los estudiantes universitarios en sus tareas académicas",
        },
        {
          id: 1,
          text: "Evaluar cómo el uso de IA afecta las competencias de análisis y redacción universitaria",
        },
        {
          id: 2,
          text: "Diseñar lineamientos para la integración ética de IA en la formación universitaria",
        },
      ],
    },
  },

  "Inteligencia artificial::docentes": {
    problema: {
      items: [
        {
          text: "Falta de capacitación docente en herramientas de inteligencia artificial",
          zone: "causas",
        },
        {
          text: "Ausencia de políticas institucionales claras sobre el uso de IA en educación",
          zone: "causas",
        },
        {
          text: "Los docentes no saben cómo evaluar trabajos generados con IA ni cómo integrarla pedagógicamente",
          zone: "problema",
        },
        {
          text: "La brecha de conocimiento en IA entre docentes y estudiantes genera desconfianza mutua",
          zone: "problema",
        },
        {
          text: "Evaluaciones académicas que pierden validez al no detectar uso de IA",
          zone: "consecuencias",
        },
        {
          text: "Frustración docente y resistencia al cambio tecnológico en la enseñanza",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos docentes han recibido formación en inteligencia artificial?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de formación en IA limita la capacidad de los docentes para integrarla y evaluarla en su práctica?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se detecta si un texto fue escrito por IA?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los desafíos que enfrentan los docentes para integrar y evaluar el uso de IA en su práctica pedagógica",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el nivel de conocimiento y uso de IA entre los docentes",
        },
        {
          id: 1,
          text: "Evaluar las dificultades que enfrentan los docentes para detectar y gestionar el uso de IA en trabajos estudiantiles",
        },
        {
          id: 2,
          text: "Diseñar un programa de capacitación docente en integración pedagógica de IA",
        },
      ],
    },
  },

  "Inteligencia artificial::trabajadores": {
    problema: {
      items: [
        {
          text: "Automatización acelerada de tareas sin planes de reconversión laboral",
          zone: "causas",
        },
        {
          text: "Falta de formación en nuevas tecnologías para trabajadores en activo",
          zone: "causas",
        },
        {
          text: "Los trabajadores enfrentan la amenaza de reemplazo por IA sin alternativas de reconversión",
          zone: "problema",
        },
        {
          text: "La IA automatiza tareas repetitivas dejando a muchos trabajadores sin funciones claras",
          zone: "problema",
        },
        {
          text: "Desempleo y precarización laboral en sectores con alta automatización",
          zone: "consecuencias",
        },
        {
          text: "Ansiedad laboral e incertidumbre sobre el futuro profesional de los trabajadores",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos empleos se perderán por la automatización con IA?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la automatización con IA genera incertidumbre laboral en trabajadores sin acceso a reconversión profesional?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se implementa IA en procesos industriales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la automatización con IA en la estabilidad laboral de los trabajadores",
      especificos: [
        {
          id: 0,
          text: "Identificar los sectores laborales más afectados por la automatización con IA",
        },
        {
          id: 1,
          text: "Evaluar la percepción de los trabajadores sobre la amenaza de la IA a sus empleos",
        },
        {
          id: 2,
          text: "Proponer un programa de reconversión laboral para trabajadores en riesgo de automatización",
        },
      ],
    },
  },

  "Inteligencia artificial::empresas pequeñas": {
    problema: {
      items: [
        {
          text: "Alto costo de implementación de IA para pequeñas empresas",
          zone: "causas",
        },
        {
          text: "Desconocimiento de los empresarios sobre las herramientas de IA disponibles",
          zone: "causas",
        },
        {
          text: "Las pequeñas empresas no logran competir con grandes compañías que ya usan IA",
          zone: "problema",
        },
        {
          text: "La falta de acceso a IA amplía la brecha de competitividad entre empresas",
          zone: "problema",
        },
        {
          text: "Pérdida de cuota de mercado y cierre de pequeños negocios por obsolescencia tecnológica",
          zone: "consecuencias",
        },
        {
          text: "Aumento de la desigualdad económica entre grandes corporaciones y pymes",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas empresas pequeñas usan herramientas de IA actualmente?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de acceso a IA amplía la brecha de competitividad en las empresas pequeñas?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se implementa IA en una pequeña empresa?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las barreras que enfrentan las empresas pequeñas para acceder y aprovechar la inteligencia artificial",
      especificos: [
        {
          id: 0,
          text: "Identificar las principales barreras de acceso a IA para las empresas pequeñas",
        },
        {
          id: 1,
          text: "Evaluar el impacto de la brecha tecnológica en la competitividad de las pymes",
        },
        {
          id: 2,
          text: "Diseñar una guía de implementación de IA accesible para pequeñas empresas",
        },
      ],
    },
  },

  "Inteligencia artificial::programadores": {
    problema: {
      items: [
        {
          text: "Herramientas de IA generativa que producen código automáticamente",
          zone: "causas",
        },
        {
          text: "Presión del mercado por entregar software más rápido usando IA",
          zone: "causas",
        },
        {
          text: "Los programadores dependen cada vez más de la IA para escribir código sin comprenderlo completamente",
          zone: "problema",
        },
        {
          text: "La calidad del software disminuye cuando se usa IA sin revisión crítica del código generado",
          zone: "problema",
        },
        {
          text: "Aumento de vulnerabilidades de seguridad en software generado por IA",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de habilidades de resolución de problemas en programadores junior",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuánto código generado por IA se usa en proyectos de software actualmente?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la dependencia de IA para generar código afecta las competencias técnicas de los programadores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo funciona GitHub Copilot y otras herramientas de IA para código?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del uso de IA generativa en las competencias técnicas y la calidad del trabajo de los programadores",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de uso de herramientas de IA generativa entre los programadores",
        },
        {
          id: 1,
          text: "Evaluar cómo la dependencia de IA afecta las habilidades de resolución de problemas en programadores",
        },
        {
          id: 2,
          text: "Proponer lineamientos de uso responsable de IA en el desarrollo de software",
        },
      ],
    },
  },

  "Inteligencia artificial::adultos mayores": {
    problema: {
      items: [
        {
          text: "Interfaces de IA diseñadas sin considerar las necesidades de adultos mayores",
          zone: "causas",
        },
        {
          text: "Falta de programas de alfabetización tecnológica para la tercera edad",
          zone: "causas",
        },
        {
          text: "Los adultos mayores quedan excluidos de servicios digitales que incorporan IA",
          zone: "problema",
        },
        {
          text: "La brecha digital impide que los adultos mayores aprovechen herramientas de IA para su bienestar",
          zone: "problema",
        },
        {
          text: "Mayor aislamiento social y dependencia de terceros para trámites digitales",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de autonomía en adultos mayores que no acceden a servicios basados en IA",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos adultos mayores usan herramientas de inteligencia artificial?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la exclusión de los adultos mayores de los servicios basados en IA afecta su autonomía y calidad de vida?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se diseña una interfaz de IA accesible para personas mayores?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las barreras que enfrentan los adultos mayores para acceder a herramientas de inteligencia artificial",
      especificos: [
        {
          id: 0,
          text: "Identificar las principales dificultades de los adultos mayores para usar herramientas de IA",
        },
        {
          id: 1,
          text: "Evaluar el impacto de la exclusión digital en la autonomía y bienestar de los adultos mayores",
        },
        {
          id: 2,
          text: "Diseñar un programa de alfabetización en IA adaptado a las necesidades de los adultos mayores",
        },
      ],
    },
  },

  // ============================================================
  // TEMA 4: CONTAMINACIÓN AMBIENTAL (6 poblaciones)
  // ============================================================

  "Contaminación ambiental::comunidades rurales": {
    problema: {
      items: [
        {
          text: "Uso de agroquímicos sin control en zonas rurales cercanas a comunidades",
          zone: "causas",
        },
        {
          text: "Falta de sistemas de tratamiento de aguas residuales en el campo",
          zone: "causas",
        },
        {
          text: "Las comunidades rurales sufren contaminación del agua y el suelo sin acceso a soluciones",
          zone: "problema",
        },
        {
          text: "Los residuos agrícolas y pecuarios se vierten directamente en fuentes hídricas rurales",
          zone: "problema",
        },
        {
          text: "Incremento de enfermedades gastrointestinales y dermatológicas en la población rural",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de tierras cultivables y deterioro de la seguridad alimentaria rural",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos ríos están contaminados en las zonas rurales del país?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la contaminación del agua y el suelo afecta la salud y seguridad alimentaria de las comunidades rurales?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se mide la calidad del agua en zonas rurales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la contaminación del agua y el suelo en la salud de las comunidades rurales",
      especificos: [
        {
          id: 0,
          text: "Identificar las principales fuentes de contaminación en las comunidades rurales estudiadas",
        },
        {
          id: 1,
          text: "Evaluar los indicadores de salud de la población rural expuesta a contaminantes",
        },
        {
          id: 2,
          text: "Proponer medidas de saneamiento ambiental adaptadas al contexto rural",
        },
      ],
    },
  },

  "Contaminación ambiental::habitantes urbanos": {
    problema: {
      items: [
        {
          text: "Alto volumen de tráfico vehicular que emite gases contaminantes en la ciudad",
          zone: "causas",
        },
        {
          text: "Industrias y fábricas ubicadas dentro o cerca de zonas residenciales urbanas",
          zone: "causas",
        },
        {
          text: "Los habitantes urbanos respiran aire con niveles de contaminación superiores a lo recomendado",
          zone: "problema",
        },
        {
          text: "La acumulación de basura en espacios públicos urbanos genera focos de infección",
          zone: "problema",
        },
        {
          text: "Aumento de enfermedades respiratorias crónicas en la población urbana",
          zone: "consecuencias",
        },
        {
          text: "Deterioro de la calidad de vida y los espacios públicos en las ciudades",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas toneladas de basura generan las ciudades a diario?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la contaminación del aire urbano genera enfermedades respiratorias crónicas en los habitantes de las ciudades?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se recicla la basura en las grandes ciudades?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la contaminación ambiental urbana en la salud respiratoria de los habitantes de la ciudad",
      especificos: [
        {
          id: 0,
          text: "Identificar las principales fuentes de contaminación atmosférica en la zona urbana estudiada",
        },
        {
          id: 1,
          text: "Evaluar la prevalencia de enfermedades respiratorias en los habitantes del sector",
        },
        {
          id: 2,
          text: "Proponer acciones de mitigación ambiental para mejorar la calidad del aire urbano",
        },
      ],
    },
  },

  "Contaminación ambiental::niños": {
    problema: {
      items: [
        {
          text: "Los niños juegan en espacios contaminados sin conocimiento de los riesgos",
          zone: "causas",
        },
        {
          text: "Falta de regulación sobre niveles seguros de contaminantes en entornos infantiles",
          zone: "causas",
        },
        {
          text: "Los niños están expuestos a contaminantes tóxicos que afectan su salud más que a los adultos",
          zone: "problema",
        },
        {
          text: "El sistema inmunológico infantil es más vulnerable a los efectos de la contaminación ambiental",
          zone: "problema",
        },
        {
          text: "Mayor incidencia de asma, alergias y problemas de desarrollo en niños expuestos",
          zone: "consecuencias",
        },
        {
          text: "Afectación del rendimiento escolar y desarrollo cognitivo de los niños contaminados",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos niños padecen asma a causa de la contaminación?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los niños son más vulnerables que los adultos a los efectos de la contaminación ambiental?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se mide la exposición a contaminantes en niños?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la vulnerabilidad de los niños frente a la contaminación ambiental y sus efectos en la salud infantil",
      especificos: [
        {
          id: 0,
          text: "Identificar los contaminantes ambientales más frecuentes en los entornos donde viven los niños",
        },
        {
          id: 1,
          text: "Evaluar la relación entre exposición a contaminantes y problemas de salud en la población infantil",
        },
        {
          id: 2,
          text: "Proponer medidas de protección ambiental enfocadas en la salud de los niños",
        },
      ],
    },
  },

  "Contaminación ambiental::agricultores": {
    problema: {
      items: [
        {
          text: "Uso intensivo de pesticidas y fertilizantes químicos sin medidas de protección",
          zone: "causas",
        },
        {
          text: "Falta de capacitación sobre manejo seguro de agroquímicos entre los agricultores",
          zone: "causas",
        },
        {
          text: "Los agricultores se exponen diariamente a sustancias tóxicas que dañan su salud",
          zone: "problema",
        },
        {
          text: "La contaminación del suelo reduce la productividad de los cultivos de los agricultores",
          zone: "problema",
        },
        {
          text: "Aumento de enfermedades crónicas y cáncer en agricultores expuestos a pesticidas",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de la fertilidad del suelo y disminución de ingresos agrícolas",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas toneladas de pesticidas se utilizan al año en la agricultura?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la exposición a agroquímicos genera enfermedades crónicas en los agricultores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se elaboran pesticidas orgánicos alternativos?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la exposición a agroquímicos en la salud de los agricultores",
      especificos: [
        {
          id: 0,
          text: "Identificar los agroquímicos más utilizados por los agricultores y sus niveles de toxicidad",
        },
        {
          id: 1,
          text: "Evaluar la prevalencia de enfermedades relacionadas con pesticidas en la población agrícola",
        },
        {
          id: 2,
          text: "Proponer prácticas de agricultura segura para reducir la exposición a contaminantes",
        },
      ],
    },
  },

  "Contaminación ambiental::pescadores": {
    problema: {
      items: [
        {
          text: "Vertimiento de aguas residuales industriales y domésticas en ríos y mares",
          zone: "causas",
        },
        {
          text: "Acumulación de microplásticos y metales pesados en cuerpos de agua",
          zone: "causas",
        },
        {
          text: "Los pescadores ven reducida su pesca por la contaminación de ríos y mares",
          zone: "problema",
        },
        {
          text: "Los productos pesqueros contaminados ponen en riesgo la salud de pescadores y consumidores",
          zone: "problema",
        },
        {
          text: "Pérdida de medios de vida y empobrecimiento de las familias pescadoras",
          zone: "consecuencias",
        },
        {
          text: "Deterioro de los ecosistemas acuáticos que sustentan la actividad pesquera",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas especies marinas están afectadas por la contaminación?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la contaminación de cuerpos de agua afecta los medios de vida y la salud de los pescadores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se analizan los niveles de contaminantes en el pescado?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la contaminación de cuerpos de agua en la actividad pesquera y la salud de los pescadores",
      especificos: [
        {
          id: 0,
          text: "Identificar las fuentes de contaminación que afectan las zonas de pesca de la comunidad",
        },
        {
          id: 1,
          text: "Evaluar la calidad de los productos pesqueros y los riesgos para la salud de los pescadores",
        },
        {
          id: 2,
          text: "Proponer estrategias de protección ambiental para preservar la actividad pesquera",
        },
      ],
    },
  },

  "Contaminación ambiental::familias costeras": {
    problema: {
      items: [
        {
          text: "Residuos plásticos y aguas residuales que llegan a las playas y costas",
          zone: "causas",
        },
        {
          text: "Falta de infraestructura de saneamiento en las comunidades costeras",
          zone: "causas",
        },
        {
          text: "Las familias costeras conviven con playas contaminadas que afectan su salud y economía",
          zone: "problema",
        },
        {
          text: "La contaminación marina deteriora el turismo y los recursos del mar de los que dependen",
          zone: "problema",
        },
        {
          text: "Enfermedades de piel e infecciones gastrointestinales frecuentes en familias costeras",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de ingresos por turismo y pesca en las comunidades costeras",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas toneladas de basura llegan a las costas cada año?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la contaminación marina afecta la salud y la economía de las familias costeras?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se organizan las jornadas de limpieza de playas?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la contaminación marina en la salud y economía de las familias costeras",
      especificos: [
        {
          id: 0,
          text: "Identificar las fuentes y tipos de contaminación presentes en las costas de la comunidad",
        },
        {
          id: 1,
          text: "Evaluar los efectos de la contaminación costera en la salud y las actividades económicas de las familias",
        },
        {
          id: 2,
          text: "Diseñar un plan de gestión ambiental costera con participación comunitaria",
        },
      ],
    },
  },

  // ============================================================
  // TEMA 5: EDUCACIÓN DIGITAL (6 poblaciones)
  // ============================================================

  "Educación digital::estudiantes de primaria": {
    problema: {
      items: [
        {
          text: "Contenidos digitales que no están adaptados al nivel cognitivo de los niños",
          zone: "causas",
        },
        {
          text: "Falta de acompañamiento docente en el uso de plataformas digitales infantiles",
          zone: "causas",
        },
        {
          text: "Los estudiantes de primaria no aprovechan las herramientas digitales educativas por falta de guía",
          zone: "problema",
        },
        {
          text: "Las plataformas educativas son demasiado complejas para niños de primaria",
          zone: "problema",
        },
        {
          text: "Frustración y desmotivación de los niños frente al aprendizaje digital",
          zone: "consecuencias",
        },
        {
          text: "Ampliación de la brecha de aprendizaje entre niños con y sin apoyo digital en casa",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos niños de primaria usan plataformas educativas digitales?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de adaptación de las herramientas digitales limita el aprendizaje de los estudiantes de primaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se diseñan aplicaciones educativas para niños?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Evaluar la efectividad de las herramientas de educación digital en el aprendizaje de estudiantes de primaria",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el nivel de acceso y uso de herramientas digitales por parte de los estudiantes de primaria",
        },
        {
          id: 1,
          text: "Comparar el aprendizaje de estudiantes que usan herramientas digitales adaptadas vs. las genéricas",
        },
        {
          id: 2,
          text: "Proponer criterios de diseño de herramientas digitales adecuadas para niños de primaria",
        },
      ],
    },
  },

  "Educación digital::docentes rurales": {
    problema: {
      items: [
        {
          text: "Escasa o nula conectividad a internet en escuelas rurales",
          zone: "causas",
        },
        {
          text: "Falta de capacitación en tecnología educativa para docentes de zonas rurales",
          zone: "causas",
        },
        {
          text: "Los docentes rurales no pueden implementar educación digital por carencias de infraestructura",
          zone: "problema",
        },
        {
          text: "Los métodos de enseñanza rural no se benefician de las herramientas digitales disponibles",
          zone: "problema",
        },
        {
          text: "Ampliación de la brecha educativa entre escuelas rurales y urbanas",
          zone: "consecuencias",
        },
        {
          text: "Desmotivación docente y fuga de profesionales de la educación rural",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas escuelas rurales tienen acceso a internet?",
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
          question: "¿Cómo instalar internet en zonas rurales remotas?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Evaluar las barreras que enfrentan los docentes rurales para implementar educación digital en sus escuelas",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el nivel de acceso tecnológico y competencias digitales de los docentes rurales",
        },
        {
          id: 1,
          text: "Analizar cómo las limitaciones de infraestructura afectan la enseñanza digital en el campo",
        },
        {
          id: 2,
          text: "Proponer un modelo de capacitación digital adaptado a las necesidades de los docentes rurales",
        },
      ],
    },
  },

  "Educación digital::adolescentes": {
    problema: {
      items: [
        {
          text: "Los adolescentes asocian los dispositivos digitales más con entretenimiento que con educación",
          zone: "causas",
        },
        {
          text: "Plataformas educativas poco atractivas comparadas con redes sociales y videojuegos",
          zone: "causas",
        },
        {
          text: "Los adolescentes no aprovechan el potencial educativo de las herramientas digitales",
          zone: "problema",
        },
        {
          text: "La educación digital no logra captar la atención de los adolescentes de manera efectiva",
          zone: "problema",
        },
        {
          text: "Bajo rendimiento académico a pesar de tener acceso a recursos educativos digitales",
          zone: "consecuencias",
        },
        {
          text: "Desigualdad en competencias digitales entre adolescentes de diferentes contextos",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas al día dedican los adolescentes a plataformas educativas?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la educación digital no logra captar el interés y mejorar el aprendizaje de los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo gamificar una plataforma educativa para adolescentes?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores que limitan el aprovechamiento de la educación digital por parte de los adolescentes",
      especificos: [
        {
          id: 0,
          text: "Identificar cómo los adolescentes perciben y usan las herramientas de educación digital",
        },
        {
          id: 1,
          text: "Evaluar qué características de las plataformas educativas generan mayor o menor engagement en adolescentes",
        },
        {
          id: 2,
          text: "Diseñar recomendaciones para hacer la educación digital más atractiva para los adolescentes",
        },
      ],
    },
  },

  "Educación digital::padres de familia": {
    problema: {
      items: [
        {
          text: "Desconocimiento de los padres sobre las plataformas educativas que usan sus hijos",
          zone: "causas",
        },
        {
          text: "Falta de tiempo y formación de los padres para acompañar el aprendizaje digital",
          zone: "causas",
        },
        {
          text: "Los padres no pueden guiar ni supervisar la educación digital de sus hijos",
          zone: "problema",
        },
        {
          text: "La desconexión entre familia y escuela dificulta el aprovechamiento de herramientas digitales",
          zone: "problema",
        },
        {
          text: "Los hijos usan los dispositivos educativos para entretenimiento sin supervisión parental",
          zone: "consecuencias",
        },
        {
          text: "Frustración y desconfianza de los padres hacia la educación digital",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos padres conocen las plataformas educativas de sus hijos?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de participación de los padres de familia limita la efectividad de la educación digital en el hogar?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo capacitar a los padres en el uso de herramientas educativas digitales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el rol de los padres de familia en el acompañamiento de la educación digital de sus hijos",
      especificos: [
        {
          id: 0,
          text: "Identificar el nivel de conocimiento y participación de los padres en la educación digital de sus hijos",
        },
        {
          id: 1,
          text: "Evaluar cómo el acompañamiento parental influye en el aprovechamiento de herramientas digitales educativas",
        },
        {
          id: 2,
          text: "Proponer un programa de formación digital para padres de familia en el contexto educativo",
        },
      ],
    },
  },

  "Educación digital::estudiantes universitarios": {
    problema: {
      items: [
        {
          text: "Plataformas universitarias poco intuitivas y desactualizadas",
          zone: "causas",
        },
        {
          text: "Falta de metodologías de enseñanza que integren eficazmente lo digital",
          zone: "causas",
        },
        {
          text: "Los estudiantes universitarios perciben la educación digital como inferior a la presencial",
          zone: "problema",
        },
        {
          text: "Las herramientas digitales no se usan para innovar sino solo para replicar clases tradicionales",
          zone: "problema",
        },
        {
          text: "Desmotivación y fatiga digital en universitarios con exceso de actividades en línea",
          zone: "consecuencias",
        },
        {
          text: "Brecha de competencias digitales entre universidades que invierten en tecnología y las que no",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos estudiantes universitarios prefieren clases digitales sobre presenciales?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la educación digital en universidades no logra los mismos resultados de satisfacción y aprendizaje que la modalidad presencial?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se implementa un campus virtual universitario?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Evaluar la percepción y efectividad de la educación digital en el aprendizaje de los estudiantes universitarios",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar la percepción de los universitarios sobre las herramientas de educación digital",
        },
        {
          id: 1,
          text: "Comparar el rendimiento académico entre modalidades digital y presencial en la universidad",
        },
        {
          id: 2,
          text: "Proponer estrategias de mejora para la experiencia de educación digital universitaria",
        },
      ],
    },
  },

  "Educación digital::niños con discapacidad": {
    problema: {
      items: [
        {
          text: "Herramientas digitales educativas no diseñadas con criterios de accesibilidad",
          zone: "causas",
        },
        {
          text: "Falta de formación docente en tecnología asistiva y educación inclusiva digital",
          zone: "causas",
        },
        {
          text: "Los niños con discapacidad no pueden acceder a las herramientas de educación digital",
          zone: "problema",
        },
        {
          text: "La educación digital reproduce las barreras de acceso que existen en la educación presencial",
          zone: "problema",
        },
        {
          text: "Mayor exclusión educativa de niños con discapacidad en entornos digitales",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de oportunidades de aprendizaje que la tecnología podría facilitar a niños con discapacidad",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos niños con discapacidad tienen acceso a herramientas digitales adaptadas?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de accesibilidad en las herramientas de educación digital excluye a los niños con discapacidad?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se diseñan interfaces accesibles para personas con discapacidad?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Evaluar la accesibilidad de las herramientas de educación digital para niños con discapacidad",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar las barreras de acceso a herramientas digitales educativas para niños con discapacidad",
        },
        {
          id: 1,
          text: "Evaluar cómo las plataformas educativas cumplen con estándares de accesibilidad",
        },
        {
          id: 2,
          text: "Proponer un modelo de educación digital inclusiva que atienda las necesidades de niños con discapacidad",
        },
      ],
    },
  },

  // ============================================================
  // TEMA 6: CAMBIO CLIMÁTICO (6 poblaciones)
  // ============================================================

  "Cambio climático::agricultores": {
    problema: {
      items: [
        {
          text: "Sequías prolongadas e inundaciones impredecibles que destruyen cosechas",
          zone: "causas",
        },
        {
          text: "Falta de conocimiento en técnicas agrícolas resistentes al cambio climático",
          zone: "causas",
        },
        {
          text: "Los agricultores pierden sus cosechas y medios de vida por eventos climáticos extremos",
          zone: "problema",
        },
        {
          text: "La variabilidad climática hace impredecible la planificación de siembras y cosechas",
          zone: "problema",
        },
        {
          text: "Inseguridad alimentaria y empobrecimiento de las familias agricultoras",
          zone: "consecuencias",
        },
        {
          text: "Migración forzada del campo a la ciudad por pérdidas agrícolas continuas",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas hectáreas de cultivos se pierden al año por el cambio climático?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los agricultores son los más vulnerables ante los efectos del cambio climático?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se implementan cultivos resistentes a la sequía?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la vulnerabilidad de los agricultores frente a los efectos del cambio climático en sus medios de vida",
      especificos: [
        {
          id: 0,
          text: "Identificar los efectos climáticos más frecuentes que afectan a los agricultores de la zona",
        },
        {
          id: 1,
          text: "Evaluar las pérdidas económicas y productivas de los agricultores por eventos climáticos extremos",
        },
        {
          id: 2,
          text: "Diseñar un plan de adaptación agrícola al cambio climático para la comunidad estudiada",
        },
      ],
    },
  },

  "Cambio climático::comunidades costeras": {
    problema: {
      items: [
        {
          text: "Aumento del nivel del mar y erosión costera acelerada",
          zone: "causas",
        },
        {
          text: "Falta de infraestructura de protección costera en comunidades vulnerables",
          zone: "causas",
        },
        {
          text: "Las comunidades costeras pierden territorio habitable por el avance del mar",
          zone: "problema",
        },
        {
          text: "Los eventos climáticos extremos destruyen viviendas e infraestructura costera",
          zone: "problema",
        },
        {
          text: "Desplazamiento forzado de familias costeras que pierden sus hogares",
          zone: "consecuencias",
        },
        {
          text: "Destrucción de ecosistemas marinos que sustentan la economía costera",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos centímetros ha subido el nivel del mar en las últimas décadas?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las comunidades costeras son especialmente vulnerables al aumento del nivel del mar y los eventos climáticos extremos?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se construyen barreras contra la erosión costera?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la vulnerabilidad de las comunidades costeras frente al aumento del nivel del mar y eventos climáticos extremos",
      especificos: [
        {
          id: 0,
          text: "Identificar los riesgos climáticos específicos que enfrentan las comunidades costeras estudiadas",
        },
        {
          id: 1,
          text: "Evaluar las pérdidas materiales y sociales de las familias costeras por eventos climáticos",
        },
        {
          id: 2,
          text: "Proponer un plan de adaptación y reubicación para las comunidades costeras más afectadas",
        },
      ],
    },
  },

  "Cambio climático::jóvenes activistas": {
    problema: {
      items: [
        {
          text: "Inacción gubernamental ante la crisis climática a pesar de las evidencias científicas",
          zone: "causas",
        },
        {
          text: "Falta de canales formales de participación para jóvenes en decisiones ambientales",
          zone: "causas",
        },
        {
          text: "Los jóvenes activistas enfrentan eco-ansiedad y frustración por la falta de respuesta institucional",
          zone: "problema",
        },
        {
          text: "El activismo climático juvenil no logra traducirse en cambios de política pública efectivos",
          zone: "problema",
        },
        {
          text: "Desgaste emocional y burnout en jóvenes activistas por la magnitud de la crisis",
          zone: "consecuencias",
        },
        {
          text: "Polarización generacional entre jóvenes y tomadores de decisiones adultos",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos jóvenes participan en movimientos de activismo climático?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los jóvenes activistas experimentan eco-ansiedad y frustración ante la inacción frente al cambio climático?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se organiza una protesta por el medio ambiente?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la percepción, motivaciones y desafíos emocionales de los jóvenes activistas frente al cambio climático",
      especificos: [
        {
          id: 0,
          text: "Identificar las motivaciones y formas de participación de los jóvenes en el activismo climático",
        },
        {
          id: 1,
          text: "Evaluar los niveles de eco-ansiedad y desafíos emocionales de los jóvenes activistas",
        },
        {
          id: 2,
          text: "Proponer canales de participación efectiva para jóvenes en la toma de decisiones ambientales",
        },
      ],
    },
  },

  "Cambio climático::estudiantes": {
    problema: {
      items: [
        {
          text: "Escasa educación ambiental y climática en los programas escolares",
          zone: "causas",
        },
        {
          text: "Los contenidos sobre cambio climático son abstractos y no conectan con la realidad del estudiante",
          zone: "causas",
        },
        {
          text: "Los estudiantes tienen bajo conocimiento sobre las causas y efectos reales del cambio climático",
          zone: "problema",
        },
        {
          text: "La educación sobre cambio climático no genera cambios de comportamiento en los estudiantes",
          zone: "problema",
        },
        {
          text: "Indiferencia de los estudiantes ante los problemas ambientales por falta de formación",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de una generación capaz de actuar informadamente frente a la crisis climática",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas de educación ambiental reciben los estudiantes al año?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la educación sobre cambio climático no genera conciencia ni cambios de comportamiento en los estudiantes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo enseñar cambio climático de forma interactiva?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la efectividad de la educación sobre cambio climático en la formación de conciencia ambiental de los estudiantes",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el nivel de conocimiento de los estudiantes sobre cambio climático",
        },
        {
          id: 1,
          text: "Evaluar la relación entre la educación ambiental recibida y las actitudes de los estudiantes",
        },
        {
          id: 2,
          text: "Diseñar un programa de educación climática contextualizado y basado en evidencias",
        },
      ],
    },
  },

  "Cambio climático::poblaciones indígenas": {
    problema: {
      items: [
        {
          text: "Deforestación y explotación de recursos naturales en territorios indígenas",
          zone: "causas",
        },
        {
          text: "Exclusión de las comunidades indígenas de las políticas públicas sobre cambio climático",
          zone: "causas",
        },
        {
          text: "Las poblaciones indígenas ven amenazados sus ecosistemas y conocimientos tradicionales por el cambio climático",
          zone: "problema",
        },
        {
          text: "Los saberes ancestrales sobre adaptación climática no son reconocidos ni integrados en las políticas",
          zone: "problema",
        },
        {
          text: "Pérdida de biodiversidad y recursos naturales en territorios indígenas",
          zone: "consecuencias",
        },
        {
          text: "Desplazamiento y pérdida cultural de las comunidades indígenas por degradación de sus territorios",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos territorios indígenas están amenazados por el cambio climático?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las poblaciones indígenas son especialmente vulnerables al cambio climático y no reciben atención adecuada?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se protegen los territorios indígenas de la deforestación?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del cambio climático en los territorios y saberes de las poblaciones indígenas",
      especificos: [
        {
          id: 0,
          text: "Identificar los efectos del cambio climático en los ecosistemas de los territorios indígenas",
        },
        {
          id: 1,
          text: "Evaluar cómo los saberes ancestrales indígenas contribuyen a la adaptación climática",
        },
        {
          id: 2,
          text: "Proponer una estrategia de adaptación climática que integre los conocimientos indígenas",
        },
      ],
    },
  },

  "Cambio climático::habitantes urbanos": {
    problema: {
      items: [
        {
          text: "Islas de calor y escasez de áreas verdes en las ciudades",
          zone: "causas",
        },
        {
          text: "Infraestructura urbana no preparada para eventos climáticos extremos",
          zone: "causas",
        },
        {
          text: "Los habitantes urbanos sufren olas de calor, inundaciones y escasez de agua cada vez más frecuentes",
          zone: "problema",
        },
        {
          text: "Las ciudades concentran emisiones contaminantes que agravan el cambio climático local",
          zone: "problema",
        },
        {
          text: "Aumento de muertes por golpes de calor y enfermedades respiratorias en ciudades",
          zone: "consecuencias",
        },
        {
          text: "Colapso de servicios básicos durante eventos climáticos extremos en zonas urbanas",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos grados más de temperatura registran las ciudades respecto al área rural?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los habitantes urbanos son cada vez más vulnerables a los efectos del cambio climático en las ciudades?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se diseñan ciudades resilientes al cambio climático?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la vulnerabilidad de los habitantes urbanos frente a los efectos del cambio climático en las ciudades",
      especificos: [
        {
          id: 0,
          text: "Identificar los efectos del cambio climático más frecuentes en el entorno urbano estudiado",
        },
        {
          id: 1,
          text: "Evaluar la percepción de los habitantes urbanos sobre los riesgos climáticos en su ciudad",
        },
        {
          id: 2,
          text: "Proponer medidas de adaptación urbana al cambio climático basadas en las necesidades de la comunidad",
        },
      ],
    },
  },

  // =========================================================
  // THEME 7: Ciberacoso (6 poblaciones)
  // =========================================================
  "Ciberacoso::adolescentes": {
    problema: {
      items: [
        {
          text: "Normalización de insultos y burlas en redes sociales entre adolescentes",
          zone: "causas",
        },
        {
          text: "Falta de supervisión parental en el uso de plataformas digitales",
          zone: "causas",
        },
        {
          text: "Los adolescentes sufren acoso digital constante a través de mensajes, memes y exclusión en grupos",
          zone: "problema",
        },
        {
          text: "Las víctimas adolescentes no denuncian por temor a represalias sociales",
          zone: "problema",
        },
        {
          text: "Desarrollo de ansiedad, depresión y baja autoestima en los adolescentes acosados",
          zone: "consecuencias",
        },
        {
          text: "Deserción escolar y aislamiento social de las víctimas adolescentes",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos adolescentes reportan haber sido víctimas de ciberacoso?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el ciberacoso genera consecuencias psicológicas graves en los adolescentes que utilizan redes sociales?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se bloquean perfiles en redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las causas y consecuencias del ciberacoso en la salud emocional de los adolescentes usuarios de redes sociales",
      especificos: [
        {
          id: 0,
          text: "Identificar las formas de ciberacoso más frecuentes entre adolescentes en redes sociales",
        },
        {
          id: 1,
          text: "Evaluar el impacto del ciberacoso en la autoestima y bienestar emocional de los adolescentes",
        },
        {
          id: 2,
          text: "Proponer estrategias de prevención del ciberacoso adaptadas al contexto adolescente",
        },
      ],
    },
  },
  "Ciberacoso::estudiantes de secundaria": {
    problema: {
      items: [
        {
          text: "Uso no regulado de celulares y redes dentro de la institución educativa",
          zone: "causas",
        },
        {
          text: "Ausencia de protocolos escolares claros contra el ciberacoso",
          zone: "causas",
        },
        {
          text: "Los estudiantes de secundaria experimentan agresiones virtuales que se trasladan al aula",
          zone: "problema",
        },
        {
          text: "El acoso digital entre compañeros de clase genera un clima escolar hostil",
          zone: "problema",
        },
        {
          text: "Deterioro del rendimiento académico y aumento del ausentismo en las víctimas",
          zone: "consecuencias",
        },
        {
          text: "Conflictos interpersonales graves que escalan a violencia física en la escuela",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos casos de ciberacoso se reportan en secundarias anualmente?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el ciberacoso entre compañeros de secundaria deteriora el clima escolar y el rendimiento académico?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo funcionan los filtros de contenido en plataformas digitales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del ciberacoso en el clima escolar y rendimiento académico de estudiantes de secundaria",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar la prevalencia y formas de ciberacoso en la institución de secundaria",
        },
        {
          id: 1,
          text: "Evaluar cómo el ciberacoso afecta el rendimiento académico y la convivencia escolar",
        },
        {
          id: 2,
          text: "Diseñar un protocolo institucional de prevención y atención del ciberacoso en secundaria",
        },
      ],
    },
  },
  "Ciberacoso::niños": {
    problema: {
      items: [
        {
          text: "Acceso temprano a dispositivos digitales sin educación sobre riesgos",
          zone: "causas",
        },
        {
          text: "Incapacidad de los niños para identificar situaciones de acoso digital",
          zone: "causas",
        },
        {
          text: "Los niños son víctimas de insultos, amenazas y exclusión en plataformas de juegos y mensajería",
          zone: "problema",
        },
        {
          text: "Los menores no comunican las agresiones digitales a adultos de confianza",
          zone: "problema",
        },
        {
          text: "Desarrollo de miedos, pesadillas y resistencia a asistir a la escuela",
          zone: "consecuencias",
        },
        {
          text: "Deterioro de la confianza social y dificultades para establecer amistades",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos niños usan internet sin supervisión?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el ciberacoso genera daño emocional significativo en los niños que utilizan plataformas digitales?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se activan los controles parentales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del ciberacoso en el bienestar emocional y social de los niños que usan plataformas digitales",
      especificos: [
        {
          id: 0,
          text: "Identificar las plataformas y situaciones donde los niños experimentan ciberacoso",
        },
        {
          id: 1,
          text: "Evaluar las consecuencias emocionales y conductuales del ciberacoso en niños",
        },
        {
          id: 2,
          text: "Proponer un programa de alfabetización digital y prevención del ciberacoso para niños",
        },
      ],
    },
  },
  "Ciberacoso::mujeres jóvenes": {
    problema: {
      items: [
        {
          text: "Cultura machista normalizada en espacios virtuales que cosifica a las mujeres",
          zone: "causas",
        },
        {
          text: "Falta de legislación efectiva contra el acoso digital de género",
          zone: "causas",
        },
        {
          text: "Las mujeres jóvenes reciben acoso sexual, amenazas y difusión no consentida de imágenes íntimas",
          zone: "problema",
        },
        {
          text: "Las víctimas son culpabilizadas socialmente, lo que inhibe las denuncias",
          zone: "problema",
        },
        {
          text: "Desarrollo de trastornos de ansiedad, depresión y estrés postraumático en las afectadas",
          zone: "consecuencias",
        },
        {
          text: "Autocensura digital y abandono de espacios públicos virtuales por parte de las mujeres",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas mujeres jóvenes han recibido acoso en línea?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el ciberacoso de género produce consecuencias psicológicas graves en las mujeres jóvenes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se reporta el acoso en redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las causas y consecuencias del ciberacoso de género en la salud mental de las mujeres jóvenes",
      especificos: [
        {
          id: 0,
          text: "Identificar las formas más frecuentes de ciberacoso dirigido a mujeres jóvenes",
        },
        {
          id: 1,
          text: "Evaluar el impacto psicológico y social del ciberacoso de género en las víctimas",
        },
        {
          id: 2,
          text: "Proponer estrategias de prevención y acompañamiento para mujeres víctimas de ciberacoso",
        },
      ],
    },
  },
  "Ciberacoso::víctimas de bullying": {
    problema: {
      items: [
        {
          text: "El acoso presencial se extiende al ámbito digital multiplicando su alcance e impacto",
          zone: "causas",
        },
        {
          text: "Falta de protocolos integrales que aborden el bullying presencial y digital conjuntamente",
          zone: "causas",
        },
        {
          text: "Las víctimas de bullying sufren una doble victimización: en la escuela y en el entorno digital",
          zone: "problema",
        },
        {
          text: "El acoso digital impide que las víctimas encuentren un espacio seguro fuera de la escuela",
          zone: "problema",
        },
        {
          text: "Ideación suicida y autolesiones en víctimas que experimentan acoso continuo",
          zone: "consecuencias",
        },
        {
          text: "Pérdida total de redes de apoyo social y aislamiento extremo",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas víctimas de bullying también sufren ciberacoso?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la combinación de bullying presencial y ciberacoso agrava el daño psicológico en las víctimas?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se define legalmente el bullying?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la doble victimización (bullying presencial y ciberacoso) en la salud mental de las víctimas",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de continuidad entre el bullying presencial y el ciberacoso",
        },
        {
          id: 1,
          text: "Evaluar el impacto acumulativo de ambas formas de acoso en el bienestar de las víctimas",
        },
        {
          id: 2,
          text: "Diseñar un protocolo integral de intervención que aborde ambas dimensiones del acoso",
        },
      ],
    },
  },
  "Ciberacoso::comunidad LGBTQ+": {
    problema: {
      items: [
        {
          text: "Discriminación y prejuicios hacia la diversidad sexual normalizados en espacios digitales",
          zone: "causas",
        },
        {
          text: "Falta de políticas institucionales de protección a la diversidad en entornos virtuales",
          zone: "causas",
        },
        {
          text: "Los jóvenes LGBTQ+ reciben ataques de odio, outing forzado y amenazas en redes sociales",
          zone: "problema",
        },
        {
          text: "Las plataformas digitales no moderan eficazmente el discurso de odio contra la comunidad LGBTQ+",
          zone: "problema",
        },
        {
          text: "Aumento de depresión, ansiedad e ideación suicida en jóvenes LGBTQ+ acosados digitalmente",
          zone: "consecuencias",
        },
        {
          text: "Ocultamiento de la identidad y autocensura permanente en espacios digitales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos jóvenes LGBTQ+ han sufrido acoso digital?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el ciberacoso motivado por orientación sexual o identidad de género genera un impacto psicológico severo en jóvenes LGBTQ+?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se moderan los contenidos de odio en redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las causas y consecuencias del ciberacoso motivado por la diversidad sexual en jóvenes LGBTQ+",
      especificos: [
        {
          id: 0,
          text: "Identificar las formas específicas de ciberacoso que enfrentan los jóvenes LGBTQ+",
        },
        {
          id: 1,
          text: "Evaluar el impacto del ciberacoso por orientación sexual en la salud mental de las víctimas",
        },
        {
          id: 2,
          text: "Proponer políticas inclusivas de prevención del ciberacoso en entornos educativos y digitales",
        },
      ],
    },
  },

  // =========================================================
  // THEME 8: Uso del celular (6 poblaciones)
  // =========================================================
  "Uso del celular::adolescentes": {
    problema: {
      items: [
        {
          text: "Diseño adictivo de aplicaciones que explotan la necesidad de validación social del adolescente",
          zone: "causas",
        },
        {
          text: "Ausencia de límites familiares sobre el tiempo de uso del celular",
          zone: "causas",
        },
        {
          text: "Los adolescentes pasan más de 7 horas diarias en el celular afectando sus actividades cotidianas",
          zone: "problema",
        },
        {
          text: "La dependencia al celular genera ansiedad cuando los adolescentes no pueden revisarlo",
          zone: "problema",
        },
        {
          text: "Deterioro de las relaciones familiares y habilidades de comunicación presencial",
          zone: "consecuencias",
        },
        {
          text: "Problemas de sueño, concentración y rendimiento escolar en adolescentes",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas horas al día usan el celular los adolescentes?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso excesivo del celular afecta la salud emocional y el rendimiento académico de los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan las notificaciones push en los celulares?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del uso excesivo del celular en la salud emocional y el rendimiento académico de los adolescentes",
      especificos: [
        {
          id: 0,
          text: "Determinar los patrones de uso del celular en adolescentes y las aplicaciones más utilizadas",
        },
        {
          id: 1,
          text: "Evaluar la relación entre tiempo de uso del celular y niveles de ansiedad en adolescentes",
        },
        {
          id: 2,
          text: "Proponer estrategias de autorregulación del uso del celular adaptadas a adolescentes",
        },
      ],
    },
  },
  "Uso del celular::estudiantes de secundaria": {
    problema: {
      items: [
        {
          text: "Acceso irrestricto al celular en el aula sin políticas institucionales claras",
          zone: "causas",
        },
        {
          text: "Preferencia por el entretenimiento digital frente a las actividades académicas",
          zone: "causas",
        },
        {
          text: "Los estudiantes de secundaria usan el celular durante las clases para redes sociales y juegos",
          zone: "problema",
        },
        {
          text: "La distracción constante del celular impide la comprensión de los contenidos educativos",
          zone: "problema",
        },
        {
          text: "Caída del rendimiento académico y aumento de materias reprobadas",
          zone: "consecuencias",
        },
        {
          text: "Conflictos entre docentes y estudiantes por el uso del celular en clase",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas veces al día revisan el celular los estudiantes durante clases?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso del celular durante las clases afecta el rendimiento académico de los estudiantes de secundaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se configura el modo silencio del celular?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre el uso del celular durante clases y el rendimiento académico en estudiantes de secundaria",
      especificos: [
        {
          id: 0,
          text: "Medir la frecuencia y motivos de uso del celular durante las horas de clase",
        },
        {
          id: 1,
          text: "Analizar la correlación entre uso del celular en clase y calificaciones obtenidas",
        },
        {
          id: 2,
          text: "Elaborar una política institucional de uso responsable del celular en el aula",
        },
      ],
    },
  },
  "Uso del celular::niños": {
    problema: {
      items: [
        {
          text: "Padres que utilizan el celular como herramienta para entretener y calmar a los niños",
          zone: "causas",
        },
        {
          text: "Falta de alternativas de ocio accesibles que compitan con el celular",
          zone: "causas",
        },
        {
          text: "Los niños pasan horas excesivas frente al celular consumiendo contenido no adecuado para su edad",
          zone: "problema",
        },
        {
          text: "El uso temprano del celular reemplaza actividades esenciales como el juego libre y la lectura",
          zone: "problema",
        },
        {
          text: "Retraso en el desarrollo del lenguaje y habilidades sociales en niños sobreexpuestos",
          zone: "consecuencias",
        },
        {
          text: "Problemas de atención, irritabilidad y dificultades para dormir en niños",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas al día usan el celular los niños menores de 10 años?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso excesivo del celular afecta el desarrollo cognitivo y social de los niños?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan las apps de control parental?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del uso excesivo del celular en el desarrollo cognitivo y social de los niños",
      especificos: [
        {
          id: 0,
          text: "Identificar los hábitos de uso del celular en niños y el rol de los padres en su regulación",
        },
        {
          id: 1,
          text: "Evaluar el impacto del tiempo de pantalla en el desarrollo del lenguaje y la socialización infantil",
        },
        {
          id: 2,
          text: "Proponer una guía de uso saludable del celular para niños dirigida a padres y cuidadores",
        },
      ],
    },
  },
  "Uso del celular::trabajadores": {
    problema: {
      items: [
        {
          text: "Cultura laboral que exige disponibilidad digital permanente fuera del horario de trabajo",
          zone: "causas",
        },
        {
          text: "Uso del celular personal como herramienta de trabajo sin límites definidos",
          zone: "causas",
        },
        {
          text: "Los trabajadores revisan constantemente el celular interrumpiendo su concentración laboral",
          zone: "problema",
        },
        {
          text: "La conexión digital permanente difumina los límites entre vida laboral y personal",
          zone: "problema",
        },
        {
          text: "Aumento del estrés laboral, fatiga digital y síndrome de burnout",
          zone: "consecuencias",
        },
        {
          text: "Reducción de la productividad y calidad del trabajo realizado",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas al día usan el celular los trabajadores para temas laborales?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso excesivo del celular en el ámbito laboral genera estrés y afecta la productividad de los trabajadores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se configuran las notificaciones laborales en el celular?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar cómo el uso excesivo del celular en el trabajo afecta el estrés y la productividad de los trabajadores",
      especificos: [
        {
          id: 0,
          text: "Determinar los patrones de uso del celular durante la jornada laboral y fuera de ella",
        },
        {
          id: 1,
          text: "Evaluar la relación entre hiperconectividad móvil, estrés laboral y productividad",
        },
        {
          id: 2,
          text: "Proponer políticas de desconexión digital para mejorar el bienestar de los trabajadores",
        },
      ],
    },
  },
  "Uso del celular::conductores": {
    problema: {
      items: [
        {
          text: "Necesidad percibida de responder mensajes y llamadas inmediatamente al conducir",
          zone: "causas",
        },
        {
          text: "Insuficiente fiscalización del uso del celular al volante",
          zone: "causas",
        },
        {
          text: "Los conductores manipulan el celular mientras conducen, generando distracciones fatales",
          zone: "problema",
        },
        {
          text: "La normalización del uso del celular al volante reduce la percepción de riesgo",
          zone: "problema",
        },
        {
          text: "Aumento de accidentes de tránsito con lesiones graves y muertes",
          zone: "consecuencias",
        },
        {
          text: "Costos económicos y sociales elevados por accidentes causados por distracción digital",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos accidentes son causados por el uso del celular al conducir?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso del celular al conducir constituye un factor de riesgo grave para la seguridad vial?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan las apps de manos libres?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del uso del celular al conducir en la seguridad vial y la accidentalidad",
      especificos: [
        {
          id: 0,
          text: "Identificar la frecuencia y motivos del uso del celular entre conductores",
        },
        {
          id: 1,
          text: "Analizar la relación entre el uso del celular al volante y los índices de accidentalidad",
        },
        {
          id: 2,
          text: "Proponer campañas de concientización sobre los riesgos del celular al conducir",
        },
      ],
    },
  },
  "Uso del celular::adultos mayores": {
    problema: {
      items: [
        {
          text: "Brecha digital que dificulta el uso seguro y eficiente del celular por adultos mayores",
          zone: "causas",
        },
        {
          text: "Interfaces de celulares diseñadas sin considerar las necesidades de la tercera edad",
          zone: "causas",
        },
        {
          text: "Los adultos mayores enfrentan dificultades para comunicarse y acceder a servicios digitales vía celular",
          zone: "problema",
        },
        {
          text: "La dependencia creciente del celular genera frustración y exclusión digital en adultos mayores",
          zone: "problema",
        },
        {
          text: "Aislamiento social por incapacidad de participar en la comunicación digital familiar",
          zone: "consecuencias",
        },
        {
          text: "Vulnerabilidad ante estafas y fraudes digitales por desconocimiento tecnológico",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos adultos mayores usan celular inteligente?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la brecha digital en el uso del celular genera exclusión social y vulnerabilidad en los adultos mayores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se configura la accesibilidad en los celulares?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las barreras y consecuencias de la brecha digital en el uso del celular por adultos mayores",
      especificos: [
        {
          id: 0,
          text: "Identificar las principales dificultades que enfrentan los adultos mayores al usar el celular",
        },
        {
          id: 1,
          text: "Evaluar el impacto de la exclusión digital en la vida social y autonomía de los adultos mayores",
        },
        {
          id: 2,
          text: "Diseñar un programa de alfabetización digital en telefonía móvil para adultos mayores",
        },
      ],
    },
  },

  // =========================================================
  // THEME 9: Videojuegos (6 poblaciones)
  // =========================================================
  "Videojuegos::niños": {
    problema: {
      items: [
        {
          text: "Falta de regulación parental sobre el tipo y tiempo de videojuegos",
          zone: "causas",
        },
        {
          text: "Videojuegos con contenido violento accesibles para menores de edad",
          zone: "causas",
        },
        {
          text: "Los niños destinan más horas a videojuegos que a actividades físicas o de lectura",
          zone: "problema",
        },
        {
          text: "La exposición a contenidos violentos normaliza la agresividad en los niños",
          zone: "problema",
        },
        {
          text: "Problemas de atención, hiperactividad y bajo rendimiento escolar en niños jugadores excesivos",
          zone: "consecuencias",
        },
        {
          text: "Reducción de habilidades sociales y creatividad por dependencia de entretenimiento digital",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas horas al día juegan videojuegos los niños?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso excesivo de videojuegos afecta el desarrollo cognitivo y social de los niños?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se clasifican los videojuegos por edades?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del uso excesivo de videojuegos en el desarrollo cognitivo y social de los niños",
      especificos: [
        {
          id: 0,
          text: "Identificar los hábitos de juego de los niños y los géneros de videojuegos más consumidos",
        },
        {
          id: 1,
          text: "Evaluar la relación entre tiempo de juego, rendimiento escolar y conducta social en niños",
        },
        {
          id: 2,
          text: "Proponer una guía de mediación parental para el uso saludable de videojuegos en niños",
        },
      ],
    },
  },
  "Videojuegos::adolescentes": {
    problema: {
      items: [
        {
          text: "Presión social del grupo de pares para jugar videojuegos en línea constantemente",
          zone: "causas",
        },
        {
          text: "Sistemas de recompensa adictivos diseñados para mantener al jugador enganchado",
          zone: "causas",
        },
        {
          text: "Los adolescentes desarrollan patrones de juego compulsivo que interfieren con sus responsabilidades",
          zone: "problema",
        },
        {
          text: "El juego en línea reemplaza la interacción social presencial entre adolescentes",
          zone: "problema",
        },
        {
          text: "Caída del rendimiento académico y abandono de actividades extracurriculares",
          zone: "consecuencias",
        },
        {
          text: "Alteraciones del sueño, irritabilidad y conflictos familiares por el uso de videojuegos",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos adolescentes juegan videojuegos más de 4 horas al día?",
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
          question:
            "¿Cómo se programan los sistemas de recompensa en videojuegos?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre el uso excesivo de videojuegos y el rendimiento académico y social de los adolescentes",
      especificos: [
        {
          id: 0,
          text: "Determinar los patrones de juego y las motivaciones de los adolescentes para jugar videojuegos",
        },
        {
          id: 1,
          text: "Evaluar cómo el tiempo dedicado a videojuegos impacta el rendimiento académico",
        },
        {
          id: 2,
          text: "Diseñar estrategias de autorregulación del uso de videojuegos para adolescentes",
        },
      ],
    },
  },
  "Videojuegos::jóvenes adultos": {
    problema: {
      items: [
        {
          text: "Accesibilidad de plataformas de juego y microtransacciones que refuerzan el uso continuo",
          zone: "causas",
        },
        {
          text: "Uso de videojuegos como escape del estrés laboral y responsabilidades adultas",
          zone: "causas",
        },
        {
          text: "Los jóvenes adultos destinan tiempo excesivo a videojuegos descuidando sus obligaciones profesionales",
          zone: "problema",
        },
        {
          text: "El gasto en microtransacciones y equipamiento de juego afecta la economía personal",
          zone: "problema",
        },
        {
          text: "Dificultades para mantener relaciones de pareja y compromisos sociales estables",
          zone: "consecuencias",
        },
        {
          text: "Sedentarismo y problemas de salud asociados al estilo de vida de jugador intensivo",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuánto dinero gastan los jóvenes adultos en videojuegos mensualmente?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso excesivo de videojuegos afecta la productividad y las relaciones interpersonales de los jóvenes adultos?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo funcionan las microtransacciones en los videojuegos?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del uso excesivo de videojuegos en la productividad laboral y relaciones sociales de los jóvenes adultos",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de uso de videojuegos y su relación con las responsabilidades de los jóvenes adultos",
        },
        {
          id: 1,
          text: "Evaluar el impacto del juego excesivo en la productividad laboral y relaciones interpersonales",
        },
        {
          id: 2,
          text: "Proponer estrategias de uso equilibrado de videojuegos para jóvenes adultos",
        },
      ],
    },
  },
  "Videojuegos::estudiantes": {
    problema: {
      items: [
        {
          text: "Priorización del entretenimiento digital sobre las responsabilidades académicas",
          zone: "causas",
        },
        {
          text: "Falta de habilidades de gestión del tiempo en estudiantes jugadores",
          zone: "causas",
        },
        {
          text: "Los estudiantes dedican más horas a videojuegos que al estudio y tareas",
          zone: "problema",
        },
        {
          text: "Las sesiones de juego nocturnas afectan la asistencia y atención en clases",
          zone: "problema",
        },
        {
          text: "Reprobación de materias y riesgo de abandono escolar por bajo rendimiento",
          zone: "consecuencias",
        },
        {
          text: "Problemas de salud física por sedentarismo y malos hábitos alimenticios asociados al juego",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas semanales dedican los estudiantes a los videojuegos?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el uso excesivo de videojuegos genera bajo rendimiento académico y riesgo de deserción en los estudiantes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se mide la adicción a los videojuegos?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre el uso excesivo de videojuegos y el rendimiento académico de los estudiantes",
      especificos: [
        {
          id: 0,
          text: "Caracterizar los hábitos de juego y gestión del tiempo en los estudiantes",
        },
        {
          id: 1,
          text: "Analizar la correlación entre horas de juego y desempeño académico",
        },
        {
          id: 2,
          text: "Elaborar un programa de gestión del tiempo que integre el uso recreativo de videojuegos",
        },
      ],
    },
  },
  "Videojuegos::gamers frecuentes": {
    problema: {
      items: [
        {
          text: "Cultura gamer que glorifica las sesiones de juego extensas como logro",
          zone: "causas",
        },
        {
          text: "Modelo de negocio de videojuegos basado en la retención prolongada del jugador",
          zone: "causas",
        },
        {
          text: "Los gamers frecuentes desarrollan dependencia que interfiere con su vida diaria",
          zone: "problema",
        },
        {
          text: "La identidad social del gamer se construye exclusivamente alrededor del videojuego",
          zone: "problema",
        },
        {
          text: "Problemas de salud crónicos: síndrome del túnel carpiano, obesidad y daño visual",
          zone: "consecuencias",
        },
        {
          text: "Deterioro de la salud mental con síntomas de ansiedad y depresión por abstinencia",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas horas semanales juegan los gamers frecuentes?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el juego intensivo produce problemas de salud física y mental en los gamers frecuentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan las competencias de esports?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del juego intensivo en la salud física y mental de los gamers frecuentes",
      especificos: [
        {
          id: 0,
          text: "Identificar los hábitos de juego, alimentación y descanso de los gamers frecuentes",
        },
        {
          id: 1,
          text: "Evaluar los problemas de salud física y mental asociados al juego intensivo prolongado",
        },
        {
          id: 2,
          text: "Proponer un programa de autocuidado y hábitos saludables para gamers frecuentes",
        },
      ],
    },
  },
  "Videojuegos::padres de familia": {
    problema: {
      items: [
        {
          text: "Desconocimiento parental sobre los contenidos y mecánicas de los videojuegos actuales",
          zone: "causas",
        },
        {
          text: "Falta de herramientas y orientación para mediar el uso de videojuegos en casa",
          zone: "causas",
        },
        {
          text: "Los padres no logran establecer límites efectivos sobre el uso de videojuegos de sus hijos",
          zone: "problema",
        },
        {
          text: "Los conflictos familiares por los videojuegos generan distanciamiento entre padres e hijos",
          zone: "problema",
        },
        {
          text: "Los padres experimentan frustración e impotencia al no poder controlar el hábito de juego",
          zone: "consecuencias",
        },
        {
          text: "Deterioro de la dinámica familiar y pérdida de espacios de convivencia",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos padres supervisan el contenido que juegan sus hijos?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los padres de familia enfrentan dificultades para mediar el uso de videojuegos en el hogar?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se activan los controles parentales en consolas de videojuegos?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los desafíos que enfrentan los padres de familia para mediar el uso de videojuegos de sus hijos",
      especificos: [
        {
          id: 0,
          text: "Identificar el nivel de conocimiento de los padres sobre videojuegos y sus riesgos",
        },
        {
          id: 1,
          text: "Evaluar las estrategias de mediación parental utilizadas y su efectividad",
        },
        {
          id: 2,
          text: "Diseñar una guía práctica de mediación parental sobre el uso de videojuegos",
        },
      ],
    },
  },

  // =========================================================
  // THEME 10: Alimentación saludable (6 poblaciones)
  // =========================================================
  "Alimentación saludable::niños en edad escolar": {
    problema: {
      items: [
        {
          text: "Publicidad agresiva de alimentos ultraprocesados dirigida específicamente a niños",
          zone: "causas",
        },
        {
          text: "Oferta predominante de comida chatarra en cafeterías escolares",
          zone: "causas",
        },
        {
          text: "Los niños en edad escolar consumen alimentos de bajo valor nutritivo como alimentación principal",
          zone: "problema",
        },
        {
          text: "Los niños rechazan frutas y verduras por preferir sabores artificiales a los que están acostumbrados",
          zone: "problema",
        },
        {
          text: "Aumento de obesidad infantil y enfermedades metabólicas tempranas",
          zone: "consecuencias",
        },
        {
          text: "Bajo rendimiento cognitivo y dificultades de concentración en el aula",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuánta comida chatarra consumen los niños en la escuela?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los hábitos alimenticios inadecuados afectan el rendimiento escolar y la salud de los niños en edad escolar?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se elabora una lonchera saludable?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre los hábitos alimenticios y el rendimiento escolar en niños en edad escolar",
      especificos: [
        {
          id: 0,
          text: "Caracterizar los hábitos alimenticios de los niños en la escuela y el hogar",
        },
        {
          id: 1,
          text: "Evaluar el impacto de la alimentación en el rendimiento cognitivo y académico de los niños",
        },
        {
          id: 2,
          text: "Proponer un programa de alimentación saludable escolar que involucre a padres y docentes",
        },
      ],
    },
  },
  "Alimentación saludable::adolescentes": {
    problema: {
      items: [
        {
          text: "Influencia de redes sociales que promueven estándares de belleza irreales y dietas extremas",
          zone: "causas",
        },
        {
          text: "Autonomía alimentaria del adolescente sin formación nutricional adecuada",
          zone: "causas",
        },
        {
          text: "Los adolescentes adoptan dietas restrictivas o consumen exclusivamente comida rápida",
          zone: "problema",
        },
        {
          text: "Los trastornos de la conducta alimentaria se naturalizan entre los adolescentes",
          zone: "problema",
        },
        {
          text: "Desarrollo de anorexia, bulimia u obesidad que comprometen la salud a largo plazo",
          zone: "consecuencias",
        },
        {
          text: "Deficiencias nutricionales que afectan el crecimiento y desarrollo durante la pubertad",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos adolescentes siguen dietas sin orientación profesional?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las prácticas alimenticias inadecuadas generan riesgos de trastornos alimentarios en los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se calcula el índice de masa corporal?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre las prácticas alimenticias y el riesgo de trastornos alimentarios en adolescentes",
      especificos: [
        {
          id: 0,
          text: "Identificar las prácticas alimenticias y fuentes de información nutricional de los adolescentes",
        },
        {
          id: 1,
          text: "Evaluar la prevalencia de conductas alimentarias de riesgo entre los adolescentes",
        },
        {
          id: 2,
          text: "Diseñar un programa de educación nutricional adaptado al contexto adolescente",
        },
      ],
    },
  },
  "Alimentación saludable::estudiantes universitarios": {
    problema: {
      items: [
        {
          text: "Falta de tiempo y habilidades culinarias que llevan a depender de comida rápida",
          zone: "causas",
        },
        {
          text: "Presupuesto limitado que prioriza alimentos baratos de bajo valor nutricional",
          zone: "causas",
        },
        {
          text: "Los estudiantes universitarios mantienen una dieta desequilibrada basada en ultraprocesados",
          zone: "problema",
        },
        {
          text: "El estrés académico lleva a los estudiantes a comer de forma emocional y desregulada",
          zone: "problema",
        },
        {
          text: "Ganancia de peso, fatiga crónica y disminución de la capacidad de estudio",
          zone: "consecuencias",
        },
        {
          text: "Desarrollo temprano de enfermedades crónicas como diabetes e hipertensión",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas comidas al día consumen los universitarios de manera equilibrada?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los hábitos alimenticios de los estudiantes universitarios afectan su rendimiento académico y salud?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se preparan comidas económicas y saludables?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de los hábitos alimenticios en el rendimiento académico y la salud de los estudiantes universitarios",
      especificos: [
        {
          id: 0,
          text: "Caracterizar los hábitos alimenticios y factores asociados en estudiantes universitarios",
        },
        {
          id: 1,
          text: "Evaluar la relación entre calidad de alimentación, rendimiento académico y salud percibida",
        },
        {
          id: 2,
          text: "Proponer estrategias de alimentación saludable accesibles para estudiantes universitarios",
        },
      ],
    },
  },
  "Alimentación saludable::adultos mayores": {
    problema: {
      items: [
        {
          text: "Disminución del apetito y cambios en el metabolismo propios del envejecimiento",
          zone: "causas",
        },
        {
          text: "Dificultades económicas y de movilidad para acceder a alimentos nutritivos",
          zone: "causas",
        },
        {
          text: "Los adultos mayores presentan deficiencias nutricionales que agravan sus condiciones de salud",
          zone: "problema",
        },
        {
          text: "La monotonía alimentaria reduce el aporte de nutrientes esenciales en la tercera edad",
          zone: "problema",
        },
        {
          text: "Agravamiento de enfermedades crónicas y pérdida acelerada de masa muscular",
          zone: "consecuencias",
        },
        {
          text: "Mayor vulnerabilidad ante infecciones y hospitalizaciones frecuentes",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos adultos mayores tienen desnutrición?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las deficiencias nutricionales agravan las condiciones de salud y reducen la calidad de vida de los adultos mayores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se calcula el requerimiento calórico de un adulto mayor?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de las deficiencias nutricionales en la salud y calidad de vida de los adultos mayores",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones alimenticios y deficiencias nutricionales comunes en adultos mayores",
        },
        {
          id: 1,
          text: "Evaluar la relación entre alimentación, estado de salud y calidad de vida en la tercera edad",
        },
        {
          id: 2,
          text: "Proponer un programa de alimentación adaptado a las necesidades de los adultos mayores",
        },
      ],
    },
  },
  "Alimentación saludable::mujeres embarazadas": {
    problema: {
      items: [
        {
          text: "Desconocimiento sobre los requerimientos nutricionales específicos durante el embarazo",
          zone: "causas",
        },
        {
          text: "Mitos alimentarios y restricciones culturales que limitan una dieta adecuada",
          zone: "causas",
        },
        {
          text: "Las mujeres embarazadas no cumplen los requerimientos nutricionales esenciales para su gestación",
          zone: "problema",
        },
        {
          text: "La anemia y deficiencias de ácido fólico son frecuentes por alimentación inadecuada",
          zone: "problema",
        },
        {
          text: "Riesgo de complicaciones obstétricas: parto prematuro, bajo peso al nacer",
          zone: "consecuencias",
        },
        {
          text: "Impacto negativo en el desarrollo neurológico del bebé por déficit nutricional materno",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas mujeres embarazadas presentan anemia nutricional?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la alimentación inadecuada durante el embarazo genera riesgos para la salud materna y el desarrollo del bebé?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se suplementa el ácido fólico durante el embarazo?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la alimentación inadecuada en la salud materna y el desarrollo del bebé durante el embarazo",
      especificos: [
        {
          id: 0,
          text: "Identificar los hábitos alimenticios y fuentes de información nutricional de las mujeres embarazadas",
        },
        {
          id: 1,
          text: "Evaluar la relación entre deficiencias nutricionales maternas y complicaciones obstétricas",
        },
        {
          id: 2,
          text: "Proponer un programa de educación nutricional prenatal accesible para mujeres embarazadas",
        },
      ],
    },
  },
  "Alimentación saludable::familias de bajos recursos": {
    problema: {
      items: [
        {
          text: "Inseguridad alimentaria y acceso limitado a alimentos frescos y nutritivos",
          zone: "causas",
        },
        {
          text: "Desertos alimentarios en zonas vulnerables donde predomina la oferta de ultraprocesados",
          zone: "causas",
        },
        {
          text: "Las familias de bajos recursos dependen de alimentos ultraprocesados por su bajo costo",
          zone: "problema",
        },
        {
          text: "Los miembros del hogar presentan dietas monótonas con deficiencias nutricionales graves",
          zone: "problema",
        },
        {
          text: "Alta prevalencia de malnutrición: desnutrición infantil y obesidad adulta en el mismo hogar",
          zone: "consecuencias",
        },
        {
          text: "Ciclo intergeneracional de malos hábitos alimenticios y enfermedades crónicas",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas familias en situación de pobreza tienen inseguridad alimentaria?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las condiciones socioeconómicas limitan el acceso a alimentación saludable en familias de bajos recursos?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan los programas de asistencia alimentaria?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las barreras socioeconómicas para la alimentación saludable en familias de bajos recursos",
      especificos: [
        {
          id: 0,
          text: "Identificar las barreras económicas, geográficas y culturales para acceder a alimentos saludables",
        },
        {
          id: 1,
          text: "Evaluar el estado nutricional y los patrones alimenticios de las familias de bajos recursos",
        },
        {
          id: 2,
          text: "Proponer estrategias de alimentación saludable y asequible para contextos de vulnerabilidad económica",
        },
      ],
    },
  },

  // =========================================================
  // THEME 11: Actividad física (6 poblaciones)
  // =========================================================
  "Actividad física::adolescentes": {
    problema: {
      items: [
        {
          text: "Preferencia por actividades sedentarias digitales sobre las deportivas entre adolescentes",
          zone: "causas",
        },
        {
          text: "Reducción de horas de educación física en las instituciones educativas",
          zone: "causas",
        },
        {
          text: "Los adolescentes no cumplen las recomendaciones mínimas de actividad física de la OMS",
          zone: "problema",
        },
        {
          text: "La inactividad física se normaliza como estilo de vida entre los adolescentes",
          zone: "problema",
        },
        {
          text: "Aumento de obesidad adolescente y aparición temprana de factores de riesgo cardiovascular",
          zone: "consecuencias",
        },
        {
          text: "Mayor prevalencia de ansiedad, depresión y baja autoestima en adolescentes sedentarios",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos minutos de actividad física diaria realizan los adolescentes?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de actividad física genera problemas de salud física y emocional en los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se diseña una rutina de entrenamiento para adolescentes?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre la inactividad física y los problemas de salud física y emocional en adolescentes",
      especificos: [
        {
          id: 0,
          text: "Medir el nivel de actividad física de los adolescentes y sus barreras para ejercitarse",
        },
        {
          id: 1,
          text: "Evaluar la relación entre sedentarismo, salud física y bienestar emocional en adolescentes",
        },
        {
          id: 2,
          text: "Diseñar un programa de promoción de actividad física atractivo para adolescentes",
        },
      ],
    },
  },
  "Actividad física::adultos mayores": {
    problema: {
      items: [
        {
          text: "Miedo a caídas y lesiones que limita la disposición a realizar ejercicio",
          zone: "causas",
        },
        {
          text: "Escasez de programas de actividad física adaptados a las capacidades de los adultos mayores",
          zone: "causas",
        },
        {
          text: "Los adultos mayores llevan un estilo de vida predominantemente sedentario",
          zone: "problema",
        },
        {
          text: "La inactividad acelera la pérdida de masa muscular y la autonomía funcional",
          zone: "problema",
        },
        {
          text: "Mayor riesgo de caídas, fracturas y hospitalización por fragilidad física",
          zone: "consecuencias",
        },
        {
          text: "Deterioro cognitivo acelerado y aumento del riesgo de demencia",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos adultos mayores realizan ejercicio regularmente?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de actividad física acelera el deterioro funcional y cognitivo en los adultos mayores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se mide la capacidad funcional de un adulto mayor?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la inactividad física en la salud funcional y cognitiva de los adultos mayores",
      especificos: [
        {
          id: 0,
          text: "Identificar los niveles de actividad física y barreras para el ejercicio en adultos mayores",
        },
        {
          id: 1,
          text: "Evaluar la relación entre actividad física, capacidad funcional y función cognitiva",
        },
        {
          id: 2,
          text: "Diseñar un programa de actividad física adaptado y seguro para adultos mayores",
        },
      ],
    },
  },
  "Actividad física::estudiantes": {
    problema: {
      items: [
        {
          text: "Carga académica excesiva que no deja tiempo para actividades deportivas",
          zone: "causas",
        },
        {
          text: "Infraestructura deportiva limitada o inaccesible en las instituciones educativas",
          zone: "causas",
        },
        {
          text: "Los estudiantes priorizan las actividades académicas y digitales sobre el ejercicio físico",
          zone: "problema",
        },
        {
          text: "Los estudiantes perciben la actividad física como opcional y no como necesidad de bienestar",
          zone: "problema",
        },
        {
          text: "Estrés crónico, fatiga y disminución de la capacidad de concentración por sedentarismo",
          zone: "consecuencias",
        },
        {
          text: "Problemas posturales y dolores musculoesqueléticos por permanecer sentados prolongadamente",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas de ejercicio semanal realizan los estudiantes?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de actividad física generan estrés y disminuye el rendimiento académico en los estudiantes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se organizan los torneos deportivos escolares?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre actividad física, estrés y rendimiento académico en los estudiantes",
      especificos: [
        {
          id: 0,
          text: "Medir los niveles de actividad física y sedentarismo en los estudiantes",
        },
        {
          id: 1,
          text: "Evaluar cómo la actividad física influye en los niveles de estrés y rendimiento académico",
        },
        {
          id: 2,
          text: "Proponer un programa de pausas activas y actividad física integrado al horario escolar",
        },
      ],
    },
  },
  "Actividad física::trabajadores sedentarios": {
    problema: {
      items: [
        {
          text: "Jornadas laborales extensas frente al computador sin pausas activas",
          zone: "causas",
        },
        {
          text: "Falta de programas de bienestar laboral que incentiven la actividad física",
          zone: "causas",
        },
        {
          text: "Los trabajadores sedentarios pasan más de 8 horas diarias sentados sin actividad física",
          zone: "problema",
        },
        {
          text: "La cultura laboral prioriza la productividad sobre el bienestar físico del empleado",
          zone: "problema",
        },
        {
          text: "Aumento de enfermedades cardiovasculares, diabetes y dolor lumbar crónico",
          zone: "consecuencias",
        },
        {
          text: "Fatiga mental, baja productividad y mayor ausentismo por enfermedades",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas diarias pasan sentados los trabajadores de oficina?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el sedentarismo laboral genera enfermedades crónicas y reduce la productividad en los trabajadores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se implementan las pausas activas en el trabajo?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del sedentarismo laboral en la salud y productividad de los trabajadores de oficina",
      especificos: [
        {
          id: 0,
          text: "Determinar los niveles de sedentarismo y actividad física de los trabajadores de oficina",
        },
        {
          id: 1,
          text: "Evaluar la relación entre sedentarismo laboral, salud física y productividad",
        },
        {
          id: 2,
          text: "Diseñar un programa de actividad física y pausas activas para entornos laborales sedentarios",
        },
      ],
    },
  },
  "Actividad física::niños": {
    problema: {
      items: [
        {
          text: "Sustitución del juego al aire libre por entretenimiento digital en pantallas",
          zone: "causas",
        },
        {
          text: "Entornos urbanos inseguros que limitan el juego libre de los niños en espacios públicos",
          zone: "causas",
        },
        {
          text: "Los niños realizan menos actividad física de la necesaria para un desarrollo saludable",
          zone: "problema",
        },
        {
          text: "El juego activo y el deporte son reemplazados por actividades pasivas frente a pantallas",
          zone: "problema",
        },
        {
          text: "Aumento de la obesidad infantil y retraso en el desarrollo motor",
          zone: "consecuencias",
        },
        {
          text: "Dificultades de socialización y regulación emocional por falta de juego activo",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas horas al día dedican los niños al juego activo?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de actividad física afecta el desarrollo motor y social de los niños?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se organizan las clases de educación física para niños?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la falta de actividad física en el desarrollo motor y social de los niños",
      especificos: [
        {
          id: 0,
          text: "Identificar los niveles de actividad física y las barreras para el juego activo en niños",
        },
        {
          id: 1,
          text: "Evaluar la relación entre actividad física, desarrollo motor y habilidades sociales en niños",
        },
        {
          id: 2,
          text: "Proponer un programa de juego activo y deporte adaptado al contexto de los niños",
        },
      ],
    },
  },
  "Actividad física::personas con discapacidad": {
    problema: {
      items: [
        {
          text: "Infraestructura deportiva no adaptada e inaccesible para personas con discapacidad",
          zone: "causas",
        },
        {
          text: "Estigma social y desconocimiento sobre las capacidades deportivas de personas con discapacidad",
          zone: "causas",
        },
        {
          text: "Las personas con discapacidad tienen acceso limitado a programas de actividad física inclusivos",
          zone: "problema",
        },
        {
          text: "La falta de profesionales capacitados en deporte adaptado impide la participación",
          zone: "problema",
        },
        {
          text: "Mayor riesgo de enfermedades secundarias y reducción de la autonomía funcional",
          zone: "consecuencias",
        },
        {
          text: "Aislamiento social y deterioro de la salud mental por exclusión de actividades deportivas",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas personas con discapacidad practican deporte regularmente?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de acceso a actividad física adaptada afecta la salud y autonomía de las personas con discapacidad?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se adaptan los deportes para personas con discapacidad?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las barreras de acceso a la actividad física y su impacto en la salud de las personas con discapacidad",
      especificos: [
        {
          id: 0,
          text: "Identificar las barreras físicas, sociales e institucionales para la actividad física en personas con discapacidad",
        },
        {
          id: 1,
          text: "Evaluar el impacto de la actividad física adaptada en la salud física y bienestar de esta población",
        },
        {
          id: 2,
          text: "Proponer un programa de actividad física inclusivo y adaptado a diferentes tipos de discapacidad",
        },
      ],
    },
  },

  // =========================================================
  // THEME 12: Estrés académico (6 poblaciones)
  // =========================================================
  "Estrés académico::estudiantes universitarios": {
    problema: {
      items: [
        {
          text: "Sobrecarga de créditos, trabajos y evaluaciones simultáneas en la universidad",
          zone: "causas",
        },
        {
          text: "Presión por mantener promedios altos para becas y oportunidades laborales",
          zone: "causas",
        },
        {
          text: "Los estudiantes universitarios experimentan niveles crónicos de estrés que afectan su bienestar",
          zone: "problema",
        },
        {
          text: "Las universidades no cuentan con programas efectivos de apoyo psicológico accesible",
          zone: "problema",
        },
        {
          text: "Agotamiento emocional, insomnio y disminución de la calidad del aprendizaje",
          zone: "consecuencias",
        },
        {
          text: "Abandono de la carrera universitaria y deterioro de la salud mental",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos universitarios reportan niveles altos de estrés?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la sobrecarga académica genera estrés crónico que afecta el bienestar de los estudiantes universitarios?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se mide el estrés académico con escalas psicológicas?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las causas y efectos del estrés académico en el bienestar integral de los estudiantes universitarios",
      especificos: [
        {
          id: 0,
          text: "Identificar las principales fuentes de estrés académico percibidas por los estudiantes universitarios",
        },
        {
          id: 1,
          text: "Evaluar la relación entre estrés académico, rendimiento y salud mental en universitarios",
        },
        {
          id: 2,
          text: "Proponer estrategias institucionales de prevención y manejo del estrés académico",
        },
      ],
    },
  },
  "Estrés académico::adolescentes": {
    problema: {
      items: [
        {
          text: "Sistema educativo centrado en la evaluación numérica y no en el aprendizaje significativo",
          zone: "causas",
        },
        {
          text: "Comparación constante entre compañeros y expectativas familiares desproporcionadas",
          zone: "causas",
        },
        {
          text: "Los adolescentes experimentan ansiedad ante los exámenes y sobrecarga de tareas",
          zone: "problema",
        },
        {
          text: "El estrés escolar no es tomado en serio por las instituciones ni por las familias",
          zone: "problema",
        },
        {
          text: "Somatización del estrés con dolores de cabeza, problemas digestivos e insomnio",
          zone: "consecuencias",
        },
        {
          text: "Desmotivación escolar y pérdida del interés por el aprendizaje",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos adolescentes se sienten estresados por los exámenes?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el estrés escolar genera problemas de salud y desmotivación en los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se aplican las técnicas de relajación?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del estrés escolar en la salud y motivación académica de los adolescentes",
      especificos: [
        {
          id: 0,
          text: "Identificar las situaciones escolares que generan mayor estrés en los adolescentes",
        },
        {
          id: 1,
          text: "Evaluar las consecuencias físicas y emocionales del estrés escolar en adolescentes",
        },
        {
          id: 2,
          text: "Diseñar un programa de manejo del estrés escolar integrado al currículo educativo",
        },
      ],
    },
  },
  "Estrés académico::docentes": {
    problema: {
      items: [
        {
          text: "Sobrecarga laboral con funciones administrativas que exceden la labor pedagógica",
          zone: "causas",
        },
        {
          text: "Falta de reconocimiento profesional y condiciones salariales precarias",
          zone: "causas",
        },
        {
          text: "Los docentes experimentan niveles crónicos de estrés que afectan su desempeño profesional",
          zone: "problema",
        },
        {
          text: "El agotamiento docente no es priorizado como problema institucional de salud laboral",
          zone: "problema",
        },
        {
          text: "Síndrome de burnout y abandono de la profesión docente",
          zone: "consecuencias",
        },
        {
          text: "Deterioro de la calidad educativa por docentes agotados emocionalmente",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos docentes reportan síntomas de burnout?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las condiciones laborales generan estrés crónico y burnout en los docentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se diagnostica el síndrome de burnout?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las causas y consecuencias del estrés laboral y burnout en los docentes",
      especificos: [
        {
          id: 0,
          text: "Identificar los factores laborales que generan mayor estrés en los docentes",
        },
        {
          id: 1,
          text: "Evaluar la prevalencia del burnout y su impacto en la calidad educativa",
        },
        {
          id: 2,
          text: "Proponer estrategias institucionales para prevenir el burnout y promover el bienestar docente",
        },
      ],
    },
  },
  "Estrés académico::estudiantes de medicina": {
    problema: {
      items: [
        {
          text: "Exigencia académica extrema con horarios extenuantes y guardias hospitalarias",
          zone: "causas",
        },
        {
          text: "Cultura de sacrificio en medicina que normaliza el agotamiento y la privación de sueño",
          zone: "causas",
        },
        {
          text: "Los estudiantes de medicina presentan niveles de estrés y ansiedad superiores al promedio",
          zone: "problema",
        },
        {
          text: "La exposición constante al sufrimiento humano sin apoyo psicológico adecuado agrava el estrés",
          zone: "problema",
        },
        {
          text: "Alta prevalencia de depresión, abuso de sustancias e ideación suicida en estudiantes de medicina",
          zone: "consecuencias",
        },
        {
          text: "Médicos formados con trauma que reproducen patrones de exigencia dañina",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas estudian diariamente los estudiantes de medicina?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la formación médica genera niveles extremos de estrés que afectan la salud mental de los estudiantes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se estructura el plan de estudios de medicina?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de las exigencias de la formación médica en la salud mental de los estudiantes de medicina",
      especificos: [
        {
          id: 0,
          text: "Identificar las fuentes específicas de estrés en la formación de los estudiantes de medicina",
        },
        {
          id: 1,
          text: "Evaluar la prevalencia de trastornos mentales asociados al estrés académico en esta población",
        },
        {
          id: 2,
          text: "Proponer un programa de bienestar psicológico integral para estudiantes de medicina",
        },
      ],
    },
  },
  "Estrés académico::padres de familia": {
    problema: {
      items: [
        {
          text: "Presión social por garantizar el éxito académico de los hijos a toda costa",
          zone: "causas",
        },
        {
          text: "Múltiples responsabilidades de crianza, trabajo y seguimiento escolar simultáneas",
          zone: "causas",
        },
        {
          text: "Los padres experimentan estrés significativo al lidiar con las demandas académicas de sus hijos",
          zone: "problema",
        },
        {
          text: "El estrés parental por lo académico genera conflictos y tensión en la dinámica familiar",
          zone: "problema",
        },
        {
          text: "Deterioro de la relación padre-hijo y clima familiar por la presión académica",
          zone: "consecuencias",
        },
        {
          text: "Los hijos internalizan la ansiedad parental y desarrollan sus propios problemas de estrés",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos padres se sienten estresados por las tareas escolares de sus hijos?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las demandas académicas de los hijos generan estrés que afecta la dinámica familiar?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se organizan las tareas escolares en casa?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del estrés académico de los hijos en el bienestar y la dinámica familiar de los padres",
      especificos: [
        {
          id: 0,
          text: "Identificar las fuentes de estrés académico que afectan a los padres de familia",
        },
        {
          id: 1,
          text: "Evaluar cómo el estrés parental por lo académico impacta la dinámica familiar",
        },
        {
          id: 2,
          text: "Proponer estrategias de acompañamiento escolar que reduzcan el estrés parental",
        },
      ],
    },
  },
  "Estrés académico::niños de primaria": {
    problema: {
      items: [
        {
          text: "Exceso de tareas escolares que no respetan el tiempo de juego y descanso infantil",
          zone: "causas",
        },
        {
          text: "Evaluaciones estandarizadas que generan presión inadecuada para la edad",
          zone: "causas",
        },
        {
          text: "Los niños de primaria muestran signos de estrés como llanto, dolores y resistencia a ir a la escuela",
          zone: "problema",
        },
        {
          text: "Las demandas académicas no se ajustan al desarrollo emocional y cognitivo de los niños",
          zone: "problema",
        },
        {
          text: "Desarrollo de ansiedad escolar y rechazo al aprendizaje desde edades tempranas",
          zone: "consecuencias",
        },
        {
          text: "Problemas de conducta, regresiones y dificultades para socializar con compañeros",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas de tarea tienen los niños de primaria a diario?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las demandas académicas excesivas generan estrés y rechazo escolar en los niños de primaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se diseñan las evaluaciones escolares para niños?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de las demandas académicas en el bienestar emocional y la actitud hacia el aprendizaje en niños de primaria",
      especificos: [
        {
          id: 0,
          text: "Identificar las fuentes de estrés académico en los niños de primaria según docentes y padres",
        },
        {
          id: 1,
          text: "Evaluar la relación entre carga académica, bienestar emocional y actitud escolar de los niños",
        },
        {
          id: 2,
          text: "Proponer estrategias pedagógicas que reduzcan el estrés y promuevan el aprendizaje positivo",
        },
      ],
    },
  },

  // =========================================================
  // THEME 13: Tecnología en la educación (6 poblaciones)
  // =========================================================
  "Tecnología en la educación::docentes de secundaria": {
    problema: {
      items: [
        {
          text: "Formación docente insuficiente en competencias digitales y herramientas tecnológicas",
          zone: "causas",
        },
        {
          text: "Resistencia al cambio por parte de docentes con métodos tradicionales arraigados",
          zone: "causas",
        },
        {
          text: "Los docentes de secundaria no integran la tecnología de manera efectiva en sus prácticas pedagógicas",
          zone: "problema",
        },
        {
          text: "La tecnología se usa para proyectar diapositivas sin aprovechar su potencial interactivo",
          zone: "problema",
        },
        {
          text: "Los estudiantes no desarrollan competencias digitales necesarias para el siglo XXI",
          zone: "consecuencias",
        },
        {
          text: "Brecha creciente entre las habilidades digitales de estudiantes y las competencias docentes",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos docentes usan tecnología en sus clases?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los docentes de secundaria no logran integrar efectivamente la tecnología en sus prácticas pedagógicas?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se instala un proyector en el aula?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las barreras que enfrentan los docentes de secundaria para integrar la tecnología en su práctica pedagógica",
      especificos: [
        {
          id: 0,
          text: "Identificar el nivel de competencias digitales y necesidades de formación de los docentes de secundaria",
        },
        {
          id: 1,
          text: "Evaluar los factores que dificultan la integración tecnológica en el aula de secundaria",
        },
        {
          id: 2,
          text: "Proponer un programa de formación docente en integración pedagógica de tecnología",
        },
      ],
    },
  },
  "Tecnología en la educación::estudiantes rurales": {
    problema: {
      items: [
        {
          text: "Falta de infraestructura tecnológica y conectividad a internet en zonas rurales",
          zone: "causas",
        },
        {
          text: "Desigualdad en la inversión educativa entre instituciones urbanas y rurales",
          zone: "causas",
        },
        {
          text: "Los estudiantes rurales no acceden a las mismas herramientas tecnológicas que los urbanos",
          zone: "problema",
        },
        {
          text: "La brecha digital amplía las desigualdades de aprendizaje entre el campo y la ciudad",
          zone: "problema",
        },
        {
          text: "Menores oportunidades académicas y laborales para los estudiantes de zonas rurales",
          zone: "consecuencias",
        },
        {
          text: "Migración juvenil del campo a la ciudad en busca de mejores oportunidades educativas",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas escuelas rurales tienen acceso a internet?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de acceso tecnológico limita las oportunidades educativas de los estudiantes rurales?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se instala internet satelital en zonas rurales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la brecha tecnológica en las oportunidades educativas de los estudiantes rurales",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el estado de la infraestructura tecnológica en las instituciones educativas rurales",
        },
        {
          id: 1,
          text: "Evaluar cómo la falta de tecnología afecta el aprendizaje y las expectativas de los estudiantes rurales",
        },
        {
          id: 2,
          text: "Proponer estrategias de integración tecnológica adaptadas al contexto rural",
        },
      ],
    },
  },
  "Tecnología en la educación::niños con necesidades especiales": {
    problema: {
      items: [
        {
          text: "Software educativo diseñado sin considerar la accesibilidad para necesidades especiales",
          zone: "causas",
        },
        {
          text: "Docentes sin formación para usar tecnología asistiva en el aula inclusiva",
          zone: "causas",
        },
        {
          text: "Los niños con necesidades especiales no se benefician de la tecnología educativa por falta de adaptación",
          zone: "problema",
        },
        {
          text: "Las herramientas tecnológicas disponibles no atienden la diversidad de necesidades de aprendizaje",
          zone: "problema",
        },
        {
          text: "Exclusión educativa de los niños con necesidades especiales en entornos tecnológicos",
          zone: "consecuencias",
        },
        {
          text: "Ampliación de la brecha de aprendizaje entre estudiantes regulares y aquellos con necesidades especiales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas escuelas tienen tecnología asistiva disponible?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la tecnología educativa no logra incluir efectivamente a los niños con necesidades especiales?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funciona un lector de pantalla?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las barreras para la inclusión tecnológica de niños con necesidades especiales en el entorno educativo",
      especificos: [
        {
          id: 0,
          text: "Identificar las necesidades tecnológicas específicas de los niños con diferentes tipos de discapacidad",
        },
        {
          id: 1,
          text: "Evaluar la disponibilidad y efectividad de la tecnología asistiva en las instituciones educativas",
        },
        {
          id: 2,
          text: "Proponer un modelo de integración tecnológica inclusiva adaptado a necesidades especiales",
        },
      ],
    },
  },
  "Tecnología en la educación::rectores educativos": {
    problema: {
      items: [
        {
          text: "Presupuestos limitados que dificultan la inversión en infraestructura tecnológica escolar",
          zone: "causas",
        },
        {
          text: "Falta de visión estratégica sobre el rol de la tecnología en la mejora educativa",
          zone: "causas",
        },
        {
          text: "Los rectores no logran diseñar e implementar planes efectivos de tecnología educativa",
          zone: "problema",
        },
        {
          text: "Las decisiones tecnológicas se toman sin diagnóstico previo de necesidades institucionales",
          zone: "problema",
        },
        {
          text: "Inversión en equipos que quedan subutilizados por falta de planificación",
          zone: "consecuencias",
        },
        {
          text: "Frustración institucional y resistencia al cambio ante fracasos tecnológicos previos",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuánto presupuesto destinan las escuelas a tecnología?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los rectores educativos enfrentan dificultades para implementar planes tecnológicos efectivos en sus instituciones?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se elabora un presupuesto institucional?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los desafíos de gestión que enfrentan los rectores para la implementación tecnológica en sus instituciones",
      especificos: [
        {
          id: 0,
          text: "Identificar las barreras administrativas y financieras para la integración tecnológica institucional",
        },
        {
          id: 1,
          text: "Evaluar las estrategias de gestión tecnológica implementadas por los rectores y su efectividad",
        },
        {
          id: 2,
          text: "Diseñar una guía de planificación estratégica tecnológica para directivos educativos",
        },
      ],
    },
  },
  "Tecnología en la educación::padres de familia": {
    problema: {
      items: [
        {
          text: "Desconocimiento de los padres sobre las herramientas tecnológicas que usan sus hijos en la escuela",
          zone: "causas",
        },
        {
          text: "Percepción negativa de la tecnología como distracción en lugar de herramienta educativa",
          zone: "causas",
        },
        {
          text: "Los padres no pueden acompañar el aprendizaje tecnológico de sus hijos por brecha digital",
          zone: "problema",
        },
        {
          text: "La desconfianza parental hacia la tecnología genera resistencia a su uso educativo",
          zone: "problema",
        },
        {
          text: "Desconexión entre el aprendizaje escolar con tecnología y el acompañamiento en casa",
          zone: "consecuencias",
        },
        {
          text: "Los niños usan la tecnología sin guía parental, exponiéndose a riesgos digitales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos padres supervisan el uso educativo de la tecnología de sus hijos?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la brecha digital de los padres limita el acompañamiento del aprendizaje tecnológico de sus hijos?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se configuran las herramientas de aprendizaje en línea?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la brecha digital parental en el acompañamiento del aprendizaje tecnológico de los hijos",
      especificos: [
        {
          id: 0,
          text: "Identificar el nivel de alfabetización digital de los padres y su percepción sobre la tecnología educativa",
        },
        {
          id: 1,
          text: "Evaluar cómo la brecha digital parental afecta el aprendizaje tecnológico de los hijos",
        },
        {
          id: 2,
          text: "Proponer un programa de alfabetización digital para padres orientado al acompañamiento escolar",
        },
      ],
    },
  },
  "Tecnología en la educación::estudiantes universitarios": {
    problema: {
      items: [
        {
          text: "Plataformas virtuales universitarias poco intuitivas y mal implementadas",
          zone: "causas",
        },
        {
          text: "Falta de capacitación para el uso crítico y académico de herramientas digitales",
          zone: "causas",
        },
        {
          text: "Los universitarios usan la tecnología para copiar y pegar información sin análisis crítico",
          zone: "problema",
        },
        {
          text: "La tecnología no se aprovecha para fortalecer la investigación y el aprendizaje autónomo",
          zone: "problema",
        },
        {
          text: "Graduados con competencias digitales superficiales que no satisfacen las demandas laborales",
          zone: "consecuencias",
        },
        {
          text: "Dependencia de herramientas de IA sin desarrollo del pensamiento crítico propio",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos universitarios usan herramientas digitales para estudiar?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la tecnología no logra potenciar el aprendizaje autónomo y la investigación en los estudiantes universitarios?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan las plataformas LMS universitarias?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la efectividad del uso de la tecnología para el aprendizaje autónomo e investigativo en estudiantes universitarios",
      especificos: [
        {
          id: 0,
          text: "Identificar cómo los estudiantes universitarios utilizan la tecnología en sus procesos de aprendizaje",
        },
        {
          id: 1,
          text: "Evaluar el impacto de las herramientas digitales en el desarrollo de competencias investigativas",
        },
        {
          id: 2,
          text: "Proponer estrategias para el uso crítico y productivo de la tecnología en la educación superior",
        },
      ],
    },
  },

  // =========================================================
  // THEME 14: Hábitos de sueño (6 poblaciones)
  // =========================================================
  "Hábitos de sueño::adolescentes": {
    problema: {
      items: [
        {
          text: "Uso intensivo de pantallas y redes sociales antes de dormir que altera el ciclo circadiano",
          zone: "causas",
        },
        {
          text: "Horarios escolares tempranos incompatibles con el reloj biológico adolescente",
          zone: "causas",
        },
        {
          text: "Los adolescentes duermen menos de 6 horas cuando necesitan entre 8 y 10 horas",
          zone: "problema",
        },
        {
          text: "La privación de sueño se normaliza como parte de la rutina adolescente",
          zone: "problema",
        },
        {
          text: "Somnolencia diurna, déficit de atención y bajo rendimiento académico",
          zone: "consecuencias",
        },
        {
          text: "Mayor irritabilidad, problemas de humor y vulnerabilidad emocional",
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
            "¿Por qué los malos hábitos de sueño afectan el rendimiento académico y la salud emocional de los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funciona el ciclo circadiano?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la relación entre los hábitos de sueño, el rendimiento académico y la salud emocional de los adolescentes",
      especificos: [
        {
          id: 0,
          text: "Caracterizar los hábitos de sueño y las conductas previas al descanso de los adolescentes",
        },
        {
          id: 1,
          text: "Evaluar la relación entre calidad del sueño, rendimiento escolar y estado emocional",
        },
        {
          id: 2,
          text: "Elaborar una guía de higiene del sueño adaptada al contexto adolescente",
        },
      ],
    },
  },
  "Hábitos de sueño::estudiantes universitarios": {
    problema: {
      items: [
        {
          text: "Carga académica que obliga a estudiar de madrugada sacrificando horas de sueño",
          zone: "causas",
        },
        {
          text: "Consumo de cafeína y estimulantes para compensar la falta de descanso",
          zone: "causas",
        },
        {
          text: "Los estudiantes universitarios mantienen horarios de sueño irregulares y fragmentados",
          zone: "problema",
        },
        {
          text: "La cultura universitaria glorifica trasnochar como sinónimo de dedicación académica",
          zone: "problema",
        },
        {
          text: "Disminución de la capacidad cognitiva, memoria y retención del aprendizaje",
          zone: "consecuencias",
        },
        {
          text: "Aumento de ansiedad, depresión y riesgo de accidentes por somnolencia",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas duermen los universitarios en época de exámenes?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los hábitos de sueño irregular afectan el rendimiento académico y la salud mental de los estudiantes universitarios?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo actúa la cafeína en el sistema nervioso?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de los hábitos de sueño irregulares en el rendimiento académico y la salud de los estudiantes universitarios",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de sueño y factores que los alteran en los universitarios",
        },
        {
          id: 1,
          text: "Evaluar la relación entre calidad del sueño, rendimiento académico y salud mental",
        },
        {
          id: 2,
          text: "Diseñar un programa de higiene del sueño para la comunidad universitaria",
        },
      ],
    },
  },
  "Hábitos de sueño::trabajadores nocturnos": {
    problema: {
      items: [
        {
          text: "Turnos nocturnos que obligan a invertir el ciclo natural de sueño-vigilia",
          zone: "causas",
        },
        {
          text: "Falta de políticas laborales que protejan la salud del trabajador nocturno",
          zone: "causas",
        },
        {
          text: "Los trabajadores nocturnos no logran un sueño reparador durante el día",
          zone: "problema",
        },
        {
          text: "La rotación de turnos impide establecer una rutina de sueño estable",
          zone: "problema",
        },
        {
          text: "Mayor riesgo de enfermedades cardiovasculares, diabetes y trastornos metabólicos",
          zone: "consecuencias",
        },
        {
          text: "Errores laborales, accidentes y disminución de la productividad por fatiga crónica",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas de sueño diurno logran los trabajadores nocturnos?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el trabajo nocturno altera los hábitos de sueño y genera problemas de salud crónicos en los trabajadores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funciona la melatonina en la regulación del sueño?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del trabajo nocturno en los hábitos de sueño y la salud de los trabajadores",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de sueño y las condiciones ambientales de descanso de los trabajadores nocturnos",
        },
        {
          id: 1,
          text: "Evaluar la relación entre calidad del sueño diurno, salud y desempeño laboral",
        },
        {
          id: 2,
          text: "Proponer estrategias de mejora del sueño y protocolos laborales para trabajadores nocturnos",
        },
      ],
    },
  },
  "Hábitos de sueño::niños": {
    problema: {
      items: [
        {
          text: "Exposición a pantallas y estímulos digitales que retrasan la hora de dormir de los niños",
          zone: "causas",
        },
        {
          text: "Falta de rutinas de sueño consistentes establecidas por los padres",
          zone: "causas",
        },
        {
          text: "Los niños no duermen las horas necesarias para su desarrollo físico y cognitivo",
          zone: "problema",
        },
        {
          text: "Las alteraciones del sueño infantil no son reconocidas como problema de salud por las familias",
          zone: "problema",
        },
        {
          text: "Dificultades de atención, aprendizaje y regulación emocional en niños con sueño insuficiente",
          zone: "consecuencias",
        },
        {
          text: "Problemas de crecimiento y debilitamiento del sistema inmunológico infantil",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas horas duermen los niños en edad escolar?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de sueño adecuado afecta el desarrollo cognitivo y la salud de los niños?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se establece una rutina de sueño para niños?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de los hábitos de sueño en el desarrollo cognitivo y la salud de los niños",
      especificos: [
        {
          id: 0,
          text: "Caracterizar los hábitos de sueño de los niños y las prácticas parentales asociadas",
        },
        {
          id: 1,
          text: "Evaluar la relación entre calidad del sueño, desarrollo cognitivo y rendimiento escolar en niños",
        },
        {
          id: 2,
          text: "Proponer una guía de higiene del sueño infantil dirigida a padres y cuidadores",
        },
      ],
    },
  },
  "Hábitos de sueño::adultos mayores": {
    problema: {
      items: [
        {
          text: "Cambios fisiológicos del envejecimiento que alteran la arquitectura natural del sueño",
          zone: "causas",
        },
        {
          text: "Uso de medicamentos que interfieren con la calidad del sueño",
          zone: "causas",
        },
        {
          text: "Los adultos mayores experimentan insomnio, despertares frecuentes y sueño fragmentado",
          zone: "problema",
        },
        {
          text: "Los problemas de sueño se atribuyen erróneamente al envejecimiento normal y no se tratan",
          zone: "problema",
        },
        {
          text: "Mayor riesgo de caídas nocturnas, deterioro cognitivo y accidentes domésticos",
          zone: "consecuencias",
        },
        {
          text: "Agravamiento de enfermedades crónicas y disminución de la calidad de vida",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos adultos mayores padecen insomnio crónico?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los trastornos del sueño en adultos mayores agravan sus condiciones de salud y reducen su calidad de vida?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo actúan los medicamentos para dormir?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de los trastornos del sueño en la salud y calidad de vida de los adultos mayores",
      especificos: [
        {
          id: 0,
          text: "Identificar los factores que alteran el sueño en los adultos mayores",
        },
        {
          id: 1,
          text: "Evaluar la relación entre calidad del sueño, salud y capacidad funcional en la tercera edad",
        },
        {
          id: 2,
          text: "Proponer un programa de higiene del sueño adaptado a las necesidades de los adultos mayores",
        },
      ],
    },
  },
  "Hábitos de sueño::deportistas": {
    problema: {
      items: [
        {
          text: "Horarios de entrenamiento intensivos que reducen el tiempo disponible para descansar",
          zone: "causas",
        },
        {
          text: "Ansiedad precompetitiva y viajes frecuentes que alteran los ritmos de sueño",
          zone: "causas",
        },
        {
          text: "Los deportistas no duermen las horas necesarias para la recuperación muscular y mental",
          zone: "problema",
        },
        {
          text: "La importancia del sueño como factor de rendimiento deportivo es subestimada",
          zone: "problema",
        },
        {
          text: "Mayor riesgo de lesiones, recuperación lenta y disminución del rendimiento deportivo",
          zone: "consecuencias",
        },
        {
          text: "Agotamiento físico y mental que acorta la carrera deportiva",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas duermen los deportistas de alto rendimiento?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de sueño adecuado afecta el rendimiento y la recuperación de los deportistas?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se mide la calidad del sueño con dispositivos wearable?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de los hábitos de sueño en el rendimiento y la recuperación de los deportistas",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de sueño y factores que los alteran en los deportistas",
        },
        {
          id: 1,
          text: "Evaluar la relación entre calidad del sueño, rendimiento deportivo y riesgo de lesiones",
        },
        {
          id: 2,
          text: "Diseñar un protocolo de higiene del sueño específico para deportistas",
        },
      ],
    },
  },

  // =========================================================
  // THEME 15: Consumo de información en internet (6 poblaciones)
  // =========================================================
  "Consumo de información en internet::jóvenes": {
    problema: {
      items: [
        {
          text: "Algoritmos de redes sociales que crean burbujas informativas y priorizan contenido viral",
          zone: "causas",
        },
        {
          text: "Falta de educación en pensamiento crítico y verificación de fuentes desde la escuela",
          zone: "causas",
        },
        {
          text: "Los jóvenes consumen y comparten noticias falsas sin verificar su veracidad",
          zone: "problema",
        },
        {
          text: "La información se consume en formato de titulares y memes sin profundización",
          zone: "problema",
        },
        {
          text: "Desinformación generalizada que afecta la toma de decisiones personales y cívicas de los jóvenes",
          zone: "consecuencias",
        },
        {
          text: "Polarización de opiniones y dificultad para el diálogo constructivo entre pares",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas noticias falsas comparten los jóvenes al mes?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los jóvenes tienen dificultad para distinguir información confiable de noticias falsas en internet?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se identifican las noticias falsas técnicamente?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la capacidad de los jóvenes para evaluar críticamente la información que consumen en internet",
      especificos: [
        {
          id: 0,
          text: "Identificar las fuentes y plataformas que los jóvenes utilizan para informarse",
        },
        {
          id: 1,
          text: "Evaluar el nivel de competencia mediática y capacidad de verificación de los jóvenes",
        },
        {
          id: 2,
          text: "Diseñar un taller de alfabetización informacional adaptado al contexto juvenil",
        },
      ],
    },
  },
  "Consumo de información en internet::adultos mayores": {
    problema: {
      items: [
        {
          text: "Baja alfabetización digital que dificulta la evaluación de fuentes en línea",
          zone: "causas",
        },
        {
          text: "Mayor confianza en contenidos compartidos por conocidos sin verificación",
          zone: "causas",
        },
        {
          text: "Los adultos mayores son especialmente vulnerables a la desinformación y cadenas falsas",
          zone: "problema",
        },
        {
          text: "La difusión de información falsa sobre salud pone en riesgo a los adultos mayores",
          zone: "problema",
        },
        {
          text: "Toma de decisiones de salud basadas en información falsa con consecuencias graves",
          zone: "consecuencias",
        },
        {
          text: "Vulnerabilidad ante estafas y fraudes difundidos a través de cadenas de mensajes",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos adultos mayores comparten cadenas sin verificar?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los adultos mayores son especialmente vulnerables a la desinformación en internet?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se usa un verificador de hechos en línea?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la vulnerabilidad de los adultos mayores ante la desinformación en internet y sus consecuencias",
      especificos: [
        {
          id: 0,
          text: "Identificar los hábitos de consumo de información en internet de los adultos mayores",
        },
        {
          id: 1,
          text: "Evaluar el impacto de la desinformación en la toma de decisiones de salud y seguridad",
        },
        {
          id: 2,
          text: "Proponer un programa de alfabetización informacional adaptado a adultos mayores",
        },
      ],
    },
  },
  "Consumo de información en internet::estudiantes": {
    problema: {
      items: [
        {
          text: "Dependencia de buscadores y redes sociales como fuentes principales de información académica",
          zone: "causas",
        },
        {
          text: "Ausencia de formación en metodología de búsqueda y evaluación de fuentes académicas",
          zone: "causas",
        },
        {
          text: "Los estudiantes utilizan fuentes no confiables para sus trabajos académicos",
          zone: "problema",
        },
        {
          text: "No se distingue entre información científica verificada y opiniones o blogs sin fundamento",
          zone: "problema",
        },
        {
          text: "Trabajos académicos de baja calidad basados en información no verificada",
          zone: "consecuencias",
        },
        {
          text: "Formación profesional deficiente por falta de competencias informacionales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos estudiantes usan Wikipedia como fuente principal?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los estudiantes tienen dificultad para evaluar la confiabilidad de las fuentes de información en internet?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se accede a bases de datos académicas?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las competencias informacionales de los estudiantes para evaluar fuentes de información en internet",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar las fuentes de información y estrategias de búsqueda utilizadas por los estudiantes",
        },
        {
          id: 1,
          text: "Evaluar el nivel de competencia para distinguir fuentes confiables de no confiables",
        },
        {
          id: 2,
          text: "Diseñar un programa de formación en competencias informacionales para estudiantes",
        },
      ],
    },
  },
  "Consumo de información en internet::periodistas": {
    problema: {
      items: [
        {
          text: "Presión por generar contenido rápido que prioriza la inmediatez sobre la verificación",
          zone: "causas",
        },
        {
          text: "Reducción de equipos de reportería investigativa por recortes presupuestarios",
          zone: "causas",
        },
        {
          text: "Los periodistas reproducen información no verificada proveniente de redes sociales",
          zone: "problema",
        },
        {
          text: "La competencia por clics y audiencia compromete la rigurosidad informativa",
          zone: "problema",
        },
        {
          text: "Pérdida de credibilidad de los medios y erosión de la confianza pública en el periodismo",
          zone: "consecuencias",
        },
        {
          text: "Amplificación mediática de desinformación que afecta el debate público",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas noticias se publican diariamente sin verificación?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las dinámicas actuales del periodismo digital comprometen la verificación de la información publicada?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funciona un proceso de verificación periodística?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar cómo las dinámicas del periodismo digital afectan la calidad y verificación de la información publicada",
      especificos: [
        {
          id: 0,
          text: "Identificar las presiones laborales y editoriales que enfrentan los periodistas en medios digitales",
        },
        {
          id: 1,
          text: "Evaluar los protocolos de verificación utilizados en los medios digitales actuales",
        },
        {
          id: 2,
          text: "Proponer un modelo de verificación periodística eficiente para medios digitales",
        },
      ],
    },
  },
  "Consumo de información en internet::profesionales": {
    problema: {
      items: [
        {
          text: "Sobrecarga informativa que dificulta filtrar contenido relevante y actualizado",
          zone: "causas",
        },
        {
          text: "Plataformas profesionales que mezclan contenido patrocinado con información técnica",
          zone: "causas",
        },
        {
          text: "Los profesionales toman decisiones laborales basadas en información desactualizada o sesgada",
          zone: "problema",
        },
        {
          text: "La actualización profesional se basa en redes sociales en lugar de fuentes especializadas",
          zone: "problema",
        },
        {
          text: "Implementación de prácticas basadas en información errónea que afecta la calidad del trabajo",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de competitividad profesional por información desactualizada",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas dedican los profesionales a actualizarse en línea?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los profesionales enfrentan dificultades para acceder a información confiable y actualizada en internet?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se accede a publicaciones científicas especializadas?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los hábitos de consumo de información profesional en internet y su impacto en la práctica laboral",
      especificos: [
        {
          id: 0,
          text: "Identificar las fuentes y plataformas que utilizan los profesionales para actualizarse",
        },
        {
          id: 1,
          text: "Evaluar la capacidad de los profesionales para distinguir información confiable en su campo",
        },
        {
          id: 2,
          text: "Proponer estrategias de curación de contenido y actualización profesional efectiva",
        },
      ],
    },
  },
  "Consumo de información en internet::votantes": {
    problema: {
      items: [
        {
          text: "Campañas de desinformación política diseñadas para manipular la opinión pública",
          zone: "causas",
        },
        {
          text: "Algoritmos que refuerzan sesgos ideológicos creando cámaras de eco informativas",
          zone: "causas",
        },
        {
          text: "Los votantes basan sus decisiones electorales en información falsa o manipulada",
          zone: "problema",
        },
        {
          text: "La polarización informativa impide a los votantes acceder a perspectivas diversas",
          zone: "problema",
        },
        {
          text: "Erosión de la democracia por decisiones electorales basadas en desinformación",
          zone: "consecuencias",
        },
        {
          text: "Aumento de la desconfianza en las instituciones democráticas y los procesos electorales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos votantes verifican la información política antes de votar?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la desinformación en internet afecta la calidad de las decisiones electorales de los votantes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se fabrican las noticias falsas políticas?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la desinformación en internet sobre la calidad de las decisiones electorales de los votantes",
      especificos: [
        {
          id: 0,
          text: "Identificar las principales fuentes de información política que consultan los votantes en internet",
        },
        {
          id: 1,
          text: "Evaluar la capacidad de los votantes para identificar desinformación política",
        },
        {
          id: 2,
          text: "Proponer estrategias de educación cívica digital para promover el voto informado",
        },
      ],
    },
  },

  // =========================================================
  // THEME 16: Relaciones sociales en línea (6 poblaciones)
  // =========================================================
  "Relaciones sociales en línea::adolescentes": {
    problema: {
      items: [
        {
          text: "Necesidad de aceptación social que se canaliza a través de likes y seguidores",
          zone: "causas",
        },
        {
          text: "Falta de habilidades sociales presenciales como resultado de la socialización digital",
          zone: "causas",
        },
        {
          text: "Los adolescentes construyen su identidad social principalmente a través de redes sociales",
          zone: "problema",
        },
        {
          text: "Las relaciones en línea generan una sensación de conexión superficial que no satisface las necesidades afectivas",
          zone: "problema",
        },
        {
          text: "Aumento de inseguridad, ansiedad y comparación social permanente entre adolescentes",
          zone: "consecuencias",
        },
        {
          text: "Dificultad para mantener relaciones presenciales profundas y significativas",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas horas al día pasan los adolescentes socializando en línea?",
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
          question: "¿Cómo funcionan los algoritmos de las redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de las relaciones sociales en línea sobre la calidad de los vínculos interpersonales de los adolescentes",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de socialización digital y las plataformas más usadas por los adolescentes",
        },
        {
          id: 1,
          text: "Evaluar cómo las relaciones en línea afectan la autoestima y las habilidades sociales presenciales",
        },
        {
          id: 2,
          text: "Proponer actividades que fortalezcan las habilidades sociales presenciales de los adolescentes",
        },
      ],
    },
  },
  "Relaciones sociales en línea::adultos jóvenes": {
    problema: {
      items: [
        {
          text: "Dependencia de aplicaciones de citas y redes sociales para establecer relaciones",
          zone: "causas",
        },
        {
          text: "Ritmo de vida acelerado que reduce oportunidades de socialización presencial",
          zone: "causas",
        },
        {
          text: "Los adultos jóvenes priorizan las interacciones digitales sobre los encuentros presenciales",
          zone: "problema",
        },
        {
          text: "Las aplicaciones de citas generan una cultura de relaciones desechables y superficiales",
          zone: "problema",
        },
        {
          text: "Aumento de la soledad percibida a pesar de estar hiperconectados digitalmente",
          zone: "consecuencias",
        },
        {
          text: "Dificultades para establecer compromisos afectivos duraderos y significativos",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántos adultos jóvenes usan apps de citas?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las relaciones sociales en línea generan una paradoja de hiperconexión y soledad en los adultos jóvenes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan las aplicaciones de citas?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de las relaciones sociales en línea en la percepción de soledad y calidad de vínculos de los adultos jóvenes",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de socialización digital y su relación con la vida social presencial de los adultos jóvenes",
        },
        {
          id: 1,
          text: "Evaluar la relación entre uso de redes sociales, percepción de soledad y satisfacción relacional",
        },
        {
          id: 2,
          text: "Proponer estrategias para equilibrar las relaciones digitales y presenciales en adultos jóvenes",
        },
      ],
    },
  },
  "Relaciones sociales en línea::personas mayores": {
    problema: {
      items: [
        {
          text: "Brecha digital que limita la participación social en línea de las personas mayores",
          zone: "causas",
        },
        {
          text: "Reducción de la red social presencial por jubilación, pérdida de amistades y movilidad reducida",
          zone: "causas",
        },
        {
          text: "Las personas mayores enfrentan aislamiento social al no poder participar en la socialización digital",
          zone: "problema",
        },
        {
          text: "Las plataformas sociales no están diseñadas para las necesidades y capacidades de las personas mayores",
          zone: "problema",
        },
        {
          text: "Sentimientos de exclusión y soledad que afectan la salud mental de las personas mayores",
          zone: "consecuencias",
        },
        {
          text: "Mayor riesgo de depresión y deterioro cognitivo acelerado por aislamiento social",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas personas mayores usan redes sociales?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la exclusión de las relaciones sociales en línea genera aislamiento y afecta la salud mental de las personas mayores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se crea un perfil en redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la exclusión digital en la socialización y salud mental de las personas mayores",
      especificos: [
        {
          id: 0,
          text: "Identificar las barreras que enfrentan las personas mayores para socializar en línea",
        },
        {
          id: 1,
          text: "Evaluar el impacto del aislamiento social digital en la salud mental y bienestar de los mayores",
        },
        {
          id: 2,
          text: "Diseñar un programa de inclusión digital social adaptado a las personas mayores",
        },
      ],
    },
  },
  "Relaciones sociales en línea::parejas a distancia": {
    problema: {
      items: [
        {
          text: "Separación geográfica por motivos laborales, académicos o de migración",
          zone: "causas",
        },
        {
          text: "Limitaciones de la comunicación digital para transmitir afecto e intimidad",
          zone: "causas",
        },
        {
          text: "Las parejas a distancia dependen exclusivamente de medios digitales para mantener su relación",
          zone: "problema",
        },
        {
          text: "Los malentendidos en la comunicación digital generan conflictos y desconfianza",
          zone: "problema",
        },
        {
          text: "Desgaste emocional y alto índice de rupturas en relaciones a larga distancia",
          zone: "consecuencias",
        },
        {
          text: "Efectos negativos en la salud mental y bienestar emocional de ambos miembros de la pareja",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas parejas a distancia logran mantener su relación?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la dependencia de la comunicación digital genera desafíos específicos en las relaciones de parejas a distancia?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo funcionan las videollamadas de larga duración?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los desafíos comunicativos y emocionales de las parejas que mantienen relaciones a distancia a través de medios digitales",
      especificos: [
        {
          id: 0,
          text: "Identificar las herramientas digitales y estrategias de comunicación utilizadas por las parejas a distancia",
        },
        {
          id: 1,
          text: "Evaluar el impacto de la comunicación digital en la satisfacción y estabilidad de la relación",
        },
        {
          id: 2,
          text: "Proponer estrategias de comunicación efectiva para parejas que mantienen relaciones a distancia",
        },
      ],
    },
  },
  "Relaciones sociales en línea::estudiantes": {
    problema: {
      items: [
        {
          text: "Presión social por mantener una presencia digital activa y atractiva entre compañeros",
          zone: "causas",
        },
        {
          text: "Sustitución del trabajo colaborativo presencial por interacciones superficiales en grupos de chat",
          zone: "causas",
        },
        {
          text: "Los estudiantes mantienen relaciones sociales predominantemente digitales con sus compañeros",
          zone: "problema",
        },
        {
          text: "Los conflictos escolares se intensifican y viralizan a través de redes sociales",
          zone: "problema",
        },
        {
          text: "Deterioro de la convivencia escolar y dificultad para resolver conflictos presencialmente",
          zone: "consecuencias",
        },
        {
          text: "Ansiedad social y dificultad para participar activamente en actividades grupales presenciales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos estudiantes se comunican más por chat que presencialmente?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la socialización predominantemente digital afecta la convivencia y las habilidades sociales de los estudiantes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se administran los grupos escolares en redes sociales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la socialización digital en la convivencia escolar y las habilidades sociales de los estudiantes",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de socialización digital y presencial entre los estudiantes",
        },
        {
          id: 1,
          text: "Evaluar cómo las relaciones en línea afectan la convivencia escolar y la resolución de conflictos",
        },
        {
          id: 2,
          text: "Diseñar actividades que promuevan la socialización presencial y las habilidades interpersonales",
        },
      ],
    },
  },
  "Relaciones sociales en línea::personas introvertidas": {
    problema: {
      items: [
        {
          text: "Las redes sociales ofrecen un espacio de socialización cómodo que refuerza el aislamiento presencial",
          zone: "causas",
        },
        {
          text: "La sociedad valora la extroversión generando presión sobre las personas introvertidas",
          zone: "causas",
        },
        {
          text: "Las personas introvertidas dependen excesivamente de las redes para socializar, evitando el contacto presencial",
          zone: "problema",
        },
        {
          text: "La socialización exclusivamente digital no satisface todas las necesidades afectivas de las personas introvertidas",
          zone: "problema",
        },
        {
          text: "Aislamiento social progresivo y reducción de oportunidades de relación presencial",
          zone: "consecuencias",
        },
        {
          text: "Aumento de la ansiedad social y dificultad creciente para interactuar presencialmente",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas personas introvertidas prefieren socializar en línea?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la dependencia de las relaciones en línea puede reforzar el aislamiento social en las personas introvertidas?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se define la introversión en psicología?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar cómo las relaciones sociales en línea influyen en el aislamiento o la integración social de las personas introvertidas",
      especificos: [
        {
          id: 0,
          text: "Identificar los patrones de socialización digital y presencial de las personas introvertidas",
        },
        {
          id: 1,
          text: "Evaluar si las relaciones en línea facilitan o dificultan la integración social de personas introvertidas",
        },
        {
          id: 2,
          text: "Proponer estrategias que aprovechen las ventajas de la socialización digital sin reforzar el aislamiento",
        },
      ],
    },
  },

  // =========================================================
  // THEME 17: Aprendizaje virtual (6 poblaciones)
  // =========================================================
  "Aprendizaje virtual::estudiantes de secundaria": {
    problema: {
      items: [
        {
          text: "Falta de autonomía y autorregulación necesarias para el aprendizaje virtual en adolescentes",
          zone: "causas",
        },
        {
          text: "Clases virtuales poco interactivas que replican el modelo expositivo presencial",
          zone: "causas",
        },
        {
          text: "Los estudiantes de secundaria experimentan desmotivación y desconexión en las clases virtuales",
          zone: "problema",
        },
        {
          text: "La participación activa disminuye drásticamente en el entorno virtual",
          zone: "problema",
        },
        {
          text: "Aumento del rezago educativo y la brecha de aprendizaje entre estudiantes",
          zone: "consecuencias",
        },
        {
          text: "Pérdida de la dimensión social del aprendizaje y deterioro de habilidades interpersonales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos estudiantes de secundaria aprueban en modalidad virtual?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el aprendizaje virtual genera desmotivación y menores resultados académicos en los estudiantes de secundaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se configura una plataforma de aprendizaje virtual?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores que afectan la motivación y el rendimiento de los estudiantes de secundaria en el aprendizaje virtual",
      especificos: [
        {
          id: 0,
          text: "Identificar los factores de desmotivación y las barreras de aprendizaje en el entorno virtual para estudiantes de secundaria",
        },
        {
          id: 1,
          text: "Comparar el rendimiento y la participación estudiantil entre modalidades virtual y presencial",
        },
        {
          id: 2,
          text: "Proponer estrategias pedagógicas que mejoren la motivación y el aprendizaje virtual en secundaria",
        },
      ],
    },
  },
  "Aprendizaje virtual::docentes": {
    problema: {
      items: [
        {
          text: "Transición abrupta al entorno virtual sin formación pedagógica digital adecuada",
          zone: "causas",
        },
        {
          text: "Exceso de carga laboral por la adaptación de materiales al formato virtual",
          zone: "causas",
        },
        {
          text: "Los docentes replican métodos expositivos presenciales en el entorno virtual sin adaptación",
          zone: "problema",
        },
        {
          text: "La fatiga digital y el agotamiento afectan la calidad de la enseñanza virtual",
          zone: "problema",
        },
        {
          text: "Estudiantes desmotivados y con bajo rendimiento por metodologías virtuales ineficaces",
          zone: "consecuencias",
        },
        {
          text: "Burnout docente y abandono de la profesión por sobrecarga tecnológica",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos docentes recibieron capacitación para la enseñanza virtual?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los docentes enfrentan dificultades para lograr un aprendizaje virtual efectivo con sus estudiantes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se graban las clases para plataformas virtuales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los desafíos pedagógicos y laborales que enfrentan los docentes en la enseñanza virtual",
      especificos: [
        {
          id: 0,
          text: "Identificar las competencias digitales y necesidades de formación de los docentes para la enseñanza virtual",
        },
        {
          id: 1,
          text: "Evaluar el impacto de la enseñanza virtual en la carga laboral y el bienestar de los docentes",
        },
        {
          id: 2,
          text: "Diseñar un programa de formación docente en pedagogía virtual efectiva",
        },
      ],
    },
  },
  "Aprendizaje virtual::estudiantes universitarios": {
    problema: {
      items: [
        {
          text: "Plataformas virtuales universitarias con experiencia de usuario deficiente",
          zone: "causas",
        },
        {
          text: "Falta de interacción significativa entre estudiantes y docentes en el entorno virtual",
          zone: "causas",
        },
        {
          text: "Los universitarios perciben menor calidad en la educación virtual comparada con la presencial",
          zone: "problema",
        },
        {
          text: "La fatiga de Zoom y la sobrecarga de pantalla afectan la atención y el aprendizaje",
          zone: "problema",
        },
        {
          text: "Sensación de aislamiento académico y desconexión con la comunidad universitaria",
          zone: "consecuencias",
        },
        {
          text: "Cuestionamientos sobre el valor de la inversión en educación virtual",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos universitarios prefieren las clases presenciales?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los estudiantes universitarios perciben menor calidad en la educación virtual comparada con la presencial?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se implementan los exámenes virtuales?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la percepción de calidad y los factores que afectan la experiencia de aprendizaje virtual en estudiantes universitarios",
      especificos: [
        {
          id: 0,
          text: "Identificar los factores que influyen en la percepción de calidad del aprendizaje virtual universitario",
        },
        {
          id: 1,
          text: "Evaluar la satisfacción y los resultados académicos de los universitarios en modalidad virtual",
        },
        {
          id: 2,
          text: "Proponer mejoras a la experiencia de aprendizaje virtual basadas en las necesidades estudiantiles",
        },
      ],
    },
  },
  "Aprendizaje virtual::adultos en formación": {
    problema: {
      items: [
        {
          text: "Falta de tiempo por obligaciones laborales y familiares que compiten con la formación",
          zone: "causas",
        },
        {
          text: "Baja alfabetización digital que dificulta el manejo de plataformas virtuales",
          zone: "causas",
        },
        {
          text: "Los adultos en formación enfrentan barreras tecnológicas que limitan su aprovechamiento del aprendizaje virtual",
          zone: "problema",
        },
        {
          text: "La metodología virtual no se adapta a los estilos y ritmos de aprendizaje adulto",
          zone: "problema",
        },
        {
          text: "Alta tasa de deserción en programas de formación virtual para adultos",
          zone: "consecuencias",
        },
        {
          text: "Frustración y desmotivación que refuerza la percepción de incapacidad tecnológica",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos adultos completan los cursos virtuales que inician?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué los adultos en formación enfrentan dificultades para aprovechar el aprendizaje virtual?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se inscriben los adultos en plataformas de educación virtual?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las barreras que enfrentan los adultos en formación para aprovechar el aprendizaje virtual",
      especificos: [
        {
          id: 0,
          text: "Identificar las barreras tecnológicas, temporales y motivacionales de los adultos en formación virtual",
        },
        {
          id: 1,
          text: "Evaluar la efectividad de las metodologías virtuales actuales para el aprendizaje adulto",
        },
        {
          id: 2,
          text: "Diseñar un modelo de aprendizaje virtual adaptado a las necesidades y contexto de los adultos",
        },
      ],
    },
  },
  "Aprendizaje virtual::niños de primaria": {
    problema: {
      items: [
        {
          text: "Dependencia de la mediación de un adulto para el uso de herramientas virtuales en niños",
          zone: "causas",
        },
        {
          text: "Contenidos virtuales no adaptados al nivel de desarrollo y atención de los niños de primaria",
          zone: "causas",
        },
        {
          text: "Los niños de primaria no logran mantener la atención ni participar activamente en clases virtuales",
          zone: "problema",
        },
        {
          text: "El aprendizaje virtual priva a los niños de la interacción social y el juego necesarios para su desarrollo",
          zone: "problema",
        },
        {
          text: "Rezago en el desarrollo de habilidades de lectoescritura y socialización",
          zone: "consecuencias",
        },
        {
          text: "Frustración infantil y rechazo hacia las actividades escolares virtuales",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuánto tiempo pueden los niños de primaria prestar atención en clases virtuales?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el aprendizaje virtual no logra resultados efectivos en los niños de primaria?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se diseñan actividades virtuales para niños?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar la efectividad del aprendizaje virtual en el desarrollo académico y social de los niños de primaria",
      especificos: [
        {
          id: 0,
          text: "Identificar las dificultades de atención y participación de los niños de primaria en clases virtuales",
        },
        {
          id: 1,
          text: "Evaluar el impacto del aprendizaje virtual en el desarrollo académico y socioemocional de los niños",
        },
        {
          id: 2,
          text: "Proponer un modelo de aprendizaje virtual adaptado al desarrollo y necesidades de los niños de primaria",
        },
      ],
    },
  },
  "Aprendizaje virtual::personas con discapacidad": {
    problema: {
      items: [
        {
          text: "Plataformas virtuales de aprendizaje que no cumplen estándares de accesibilidad",
          zone: "causas",
        },
        {
          text: "Falta de materiales educativos digitales en formatos accesibles (audiodescripción, subtítulos, lengua de señas)",
          zone: "causas",
        },
        {
          text: "Las personas con discapacidad no pueden acceder equitativamente al aprendizaje virtual",
          zone: "problema",
        },
        {
          text: "Los docentes no están capacitados para adaptar sus clases virtuales a distintas discapacidades",
          zone: "problema",
        },
        {
          text: "Ampliación de la brecha educativa para personas con discapacidad en la modalidad virtual",
          zone: "consecuencias",
        },
        {
          text: "Deserción y exclusión educativa por barreras de accesibilidad no atendidas",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas plataformas educativas cumplen estándares de accesibilidad?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el aprendizaje virtual presenta barreras de accesibilidad que excluyen a las personas con discapacidad?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se mide la accesibilidad de una plataforma web?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar las barreras de accesibilidad del aprendizaje virtual para personas con discapacidad",
      especificos: [
        {
          id: 0,
          text: "Identificar las barreras de accesibilidad en las plataformas y materiales de aprendizaje virtual",
        },
        {
          id: 1,
          text: "Evaluar el impacto de estas barreras en el acceso y rendimiento académico de personas con discapacidad",
        },
        {
          id: 2,
          text: "Proponer estándares y prácticas de accesibilidad para el aprendizaje virtual inclusivo",
        },
      ],
    },
  },

  // =========================================================
  // THEME 18: Bienestar emocional (6 poblaciones)
  // =========================================================
  "Bienestar emocional::adolescentes": {
    problema: {
      items: [
        {
          text: "Ausencia de educación socioemocional en el currículo escolar para adolescentes",
          zone: "causas",
        },
        {
          text: "Presión de redes sociales que generan comparación constante y distorsión de la autoimagen",
          zone: "causas",
        },
        {
          text: "Los adolescentes no identifican ni gestionan adecuadamente sus emociones",
          zone: "problema",
        },
        {
          text: "El malestar emocional adolescente se expresa mediante conductas de riesgo y autolesión",
          zone: "problema",
        },
        {
          text: "Aumento de trastornos de ansiedad, depresión y conductas autolesivas en adolescentes",
          zone: "consecuencias",
        },
        {
          text: "Conflictos interpersonales frecuentes y dificultades de convivencia escolar",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos adolescentes reportan sentirse emocionalmente mal?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la falta de educación socioemocional afecta el bienestar y la convivencia de los adolescentes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se definen las emociones en la psicología?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la educación socioemocional en el bienestar y la convivencia de los adolescentes",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el nivel de competencias socioemocionales y bienestar percibido de los adolescentes",
        },
        {
          id: 1,
          text: "Evaluar la relación entre competencias socioemocionales, convivencia escolar y bienestar",
        },
        {
          id: 2,
          text: "Diseñar un programa de educación socioemocional adaptado al contexto adolescente",
        },
      ],
    },
  },
  "Bienestar emocional::trabajadores": {
    problema: {
      items: [
        {
          text: "Cultura laboral que prioriza la productividad sobre el bienestar emocional del empleado",
          zone: "causas",
        },
        {
          text: "Ambientes laborales tóxicos con relaciones conflictivas y falta de reconocimiento",
          zone: "causas",
        },
        {
          text: "Los trabajadores experimentan deterioro emocional crónico asociado a las condiciones laborales",
          zone: "problema",
        },
        {
          text: "El malestar emocional laboral no se considera una responsabilidad institucional",
          zone: "problema",
        },
        {
          text: "Aumento del ausentismo, rotación laboral y síndrome de burnout",
          zone: "consecuencias",
        },
        {
          text: "Impacto negativo en la vida personal y familiar de los trabajadores",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos trabajadores están satisfechos emocionalmente con su trabajo?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué las condiciones laborales afectan el bienestar emocional y la productividad de los trabajadores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se mide el clima laboral de una empresa?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de las condiciones laborales en el bienestar emocional y la productividad de los trabajadores",
      especificos: [
        {
          id: 0,
          text: "Identificar los factores laborales que deterioran el bienestar emocional de los trabajadores",
        },
        {
          id: 1,
          text: "Evaluar la relación entre bienestar emocional, productividad y satisfacción laboral",
        },
        {
          id: 2,
          text: "Proponer un programa de bienestar emocional laboral para las organizaciones",
        },
      ],
    },
  },
  "Bienestar emocional::estudiantes": {
    problema: {
      items: [
        {
          text: "Presión académica y expectativas de rendimiento que desbordan las capacidades emocionales",
          zone: "causas",
        },
        {
          text: "Falta de espacios institucionales de escucha y apoyo emocional para estudiantes",
          zone: "causas",
        },
        {
          text: "Los estudiantes normalizan el malestar emocional como parte inevitable de la vida académica",
          zone: "problema",
        },
        {
          text: "Los problemas emocionales no atendidos interfieren con el aprendizaje y la motivación",
          zone: "problema",
        },
        {
          text: "Aumento de ausentismo, bajo rendimiento y abandono escolar por problemas emocionales",
          zone: "consecuencias",
        },
        {
          text: "Dificultades en las relaciones con compañeros y deterioro de la convivencia escolar",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos estudiantes buscan apoyo psicológico en su institución?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el malestar emocional no atendido afecta el rendimiento y la permanencia de los estudiantes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se identifica el malestar emocional según la psicología?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto del bienestar emocional en el rendimiento académico y la permanencia de los estudiantes",
      especificos: [
        {
          id: 0,
          text: "Diagnosticar el estado de bienestar emocional y las necesidades de apoyo de los estudiantes",
        },
        {
          id: 1,
          text: "Evaluar la relación entre bienestar emocional, rendimiento académico y convivencia",
        },
        {
          id: 2,
          text: "Proponer un sistema de apoyo emocional accesible e integral para los estudiantes",
        },
      ],
    },
  },
  "Bienestar emocional::cuidadores": {
    problema: {
      items: [
        {
          text: "Sobrecarga física y emocional por el cuidado continuo de personas dependientes",
          zone: "causas",
        },
        {
          text: "Falta de redes de apoyo y servicios de respiro para cuidadores",
          zone: "causas",
        },
        {
          text: "Los cuidadores experimentan agotamiento emocional que afecta su propia salud y bienestar",
          zone: "problema",
        },
        {
          text: "Las necesidades emocionales del cuidador son invisibilizadas por la sociedad y las instituciones",
          zone: "problema",
        },
        {
          text: "Síndrome del cuidador quemado con depresión, ansiedad y enfermedades físicas asociadas",
          zone: "consecuencias",
        },
        {
          text: "Deterioro de la calidad del cuidado proporcionado a la persona dependiente",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántos cuidadores presentan síntomas de agotamiento emocional?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la sobrecarga de cuidado genera deterioro emocional en los cuidadores de personas dependientes?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se accede a servicios de respiro para cuidadores?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar el impacto de la sobrecarga de cuidado en el bienestar emocional de los cuidadores de personas dependientes",
      especificos: [
        {
          id: 0,
          text: "Identificar los factores de sobrecarga y las necesidades emocionales de los cuidadores",
        },
        {
          id: 1,
          text: "Evaluar el impacto del agotamiento del cuidador en su salud y en la calidad del cuidado brindado",
        },
        {
          id: 2,
          text: "Diseñar un programa de apoyo emocional y respiro para cuidadores de personas dependientes",
        },
      ],
    },
  },
  "Bienestar emocional::personas mayores": {
    problema: {
      items: [
        {
          text: "Pérdida de roles sociales, amistades y sentido de propósito tras la jubilación",
          zone: "causas",
        },
        {
          text: "Aislamiento social y reducción de redes de apoyo en la vejez",
          zone: "causas",
        },
        {
          text: "Las personas mayores experimentan soledad crónica y pérdida de sentido de vida",
          zone: "problema",
        },
        {
          text: "Los servicios de salud mental no priorizan ni adaptan su atención a las personas mayores",
          zone: "problema",
        },
        {
          text: "Aumento de depresión, ansiedad y deterioro cognitivo acelerado en personas mayores aisladas",
          zone: "consecuencias",
        },
        {
          text: "Mayor riesgo de dependencia funcional y mortalidad prematura por malestar emocional crónico",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question: "¿Cuántas personas mayores viven en situación de soledad?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué el aislamiento social y la pérdida de roles afectan el bienestar emocional de las personas mayores?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question: "¿Cómo se mide la soledad con escalas psicológicas?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores que afectan el bienestar emocional de las personas mayores y sus consecuencias",
      especificos: [
        {
          id: 0,
          text: "Identificar los factores de riesgo para el deterioro emocional en las personas mayores",
        },
        {
          id: 1,
          text: "Evaluar la relación entre aislamiento social, bienestar emocional y salud de los mayores",
        },
        {
          id: 2,
          text: "Proponer un programa comunitario de acompañamiento y bienestar emocional para personas mayores",
        },
      ],
    },
  },
  "Bienestar emocional::madres solteras": {
    problema: {
      items: [
        {
          text: "Sobrecarga de responsabilidades de crianza, trabajo y hogar sin red de apoyo",
          zone: "causas",
        },
        {
          text: "Estigma social y falta de políticas de apoyo para familias monoparentales",
          zone: "causas",
        },
        {
          text: "Las madres solteras experimentan altos niveles de estrés emocional y agotamiento crónico",
          zone: "problema",
        },
        {
          text: "Las necesidades emocionales de las madres solteras son invisibilizadas por las instituciones",
          zone: "problema",
        },
        {
          text: "Mayor prevalencia de depresión, ansiedad y problemas de salud en madres solteras",
          zone: "consecuencias",
        },
        {
          text: "Impacto negativo en el desarrollo emocional de los hijos por el malestar materno",
          zone: "consecuencias",
        },
      ],
    },
    pregunta: {
      opciones: [
        {
          label: "¿Cuánto?",
          question:
            "¿Cuántas madres solteras reportan problemas de salud mental?",
          correct: false,
        },
        {
          label: "¿Por qué?",
          question:
            "¿Por qué la sobrecarga y el estigma social afectan el bienestar emocional de las madres solteras?",
          correct: true,
        },
        {
          label: "¿Cómo?",
          question:
            "¿Cómo se accede a programas de apoyo para madres solteras?",
          correct: false,
        },
      ],
    },
    objetivos: {
      general:
        "Analizar los factores que afectan el bienestar emocional de las madres solteras y sus consecuencias",
      especificos: [
        {
          id: 0,
          text: "Identificar las fuentes de estrés emocional y las necesidades de apoyo de las madres solteras",
        },
        {
          id: 1,
          text: "Evaluar el impacto del malestar emocional materno en la dinámica familiar y el desarrollo de los hijos",
        },
        {
          id: 2,
          text: "Proponer un programa de bienestar emocional y redes de apoyo para madres solteras",
        },
      ],
    },
  },
}; // End POPULATION_DATA (all 108 variants, themes 1-18)
