/* ============================================================
   PIRATAS DEL CONOCIMIENTO – Web Version
   Screen renderers: MainMenu, WorldMap, Islands 1-5, Treasure
   ============================================================ */

/* ======================== MAIN MENU ======================== */
ScreenManager.register("menu", (container) => {
  container.className = "screen active bg-menu";
  createStars(container, 50);
  AudioManager.playMusic("menu");

  const center = el("div", {
    className: "flex-center flex-col",
    style: {
      flex: "1",
      padding: "2rem 1rem",
      gap: "0.5rem",
      position: "relative",
      zIndex: "5",
    },
  });

  // Decorative anchor
  center.appendChild(el("div", { className: "title-deco", textContent: "⚓" }));

  // Title
  center.appendChild(
    el("h1", {
      className: "title-pirate",
      textContent: "PIRATAS DEL CONOCIMIENTO",
    }),
  );
  center.appendChild(
    el("p", {
      className: "subtitle",
      textContent: "🏴‍☠️ Una aventura de investigación 🏴‍☠️",
    }),
  );

  // Spacer
  center.appendChild(el("div", { style: { height: "1.2rem" } }));

  // Buttons
  const hasSave = GameProgress.has_save();
  let btnDelay = 0;

  if (hasSave) {
    const btnCont = el("button", {
      className: "btn-pirate btn-teal",
      textContent: "▶ Continuar Aventura",
      style: { animationDelay: btnDelay + "s" },
      onClick: () => {
        GameProgress.load_game();
        ScreenManager.show("worldmap");
      },
    });
    center.appendChild(btnCont);
    btnDelay += 0.12;
  }

  center.appendChild(
    el("button", {
      className: "btn-pirate btn-green",
      textContent: "🗺  Nueva Partida",
      style: { animationDelay: btnDelay + "s" },
      onClick: () => {
        GameProgress.reset();
        GameProgress.delete_save();
        ScreenManager.show("worldmap");
      },
    }),
  );
  btnDelay += 0.12;

  center.appendChild(
    el("button", {
      className: "btn-pirate btn-blue",
      textContent: "📜 Instrucciones",
      style: { animationDelay: btnDelay + "s" },
      onClick: () => showInstructions(container),
    }),
  );
  btnDelay += 0.12;

  center.appendChild(
    el("button", {
      className: "btn-pirate btn-purple",
      textContent: "🏆 Créditos",
      style: { animationDelay: btnDelay + "s" },
      onClick: () => showCredits(container),
    }),
  );

  container.appendChild(center);

  // Mute button
  const muteBtn = el("button", {
    className: "mute-btn",
    textContent: "🔊",
    onClick: () => {
      const muted = AudioManager.toggleMute();
      muteBtn.textContent = muted ? "🔇" : "🔊";
    },
  });
  container.appendChild(muteBtn);
});

function showInstructions(parent) {
  const overlay = el("div", {
    className: "overlay active",
    onClick: (e) => {
      if (e.target === overlay) overlay.remove();
    },
  });
  const modal = el("div", { className: "modal panel-dark" });
  modal.innerHTML = `
    <h2 style="font-family:'Cinzel',serif;color:var(--gold);text-align:center;margin-bottom:1rem;">📜 Instrucciones</h2>
    <p style="margin-bottom:0.8rem;">Eres un pirata investigador que debe completar 5 islas para encontrar el tesoro del conocimiento. <em style="color:var(--gold);">Todo el contenido se adapta al tema que elijas en la primera isla.</em></p>
    <div style="margin-bottom:0.5rem;">
      <strong style="color:var(--gold);">🧭 Isla 1 – La Brújula de Barbanegra (Título):</strong>
      <span>Elige un tema, clasifica las palabras en cofres (Fenómeno, Tema, Población) y construye tu título de investigación.</span>
    </div>
    <div style="margin-bottom:0.5rem;">
      <strong style="color:var(--gold);">💀 Isla 2 – Cueva de los Condenados (Problema):</strong>
      <span>Arrastra las frases a su categoría correcta: Causas, Problema o Consecuencias.</span>
    </div>
    <div style="margin-bottom:0.5rem;">
      <strong style="color:var(--gold);">🐙 Isla 3 – Ojo del Kraken (Pregunta):</strong>
      <span>Elige la palanca correcta para encender el faro con la pregunta de investigación.</span>
    </div>
    <div style="margin-bottom:0.5rem;">
      <strong style="color:var(--gold);">🪜 Isla 4 – Peldaños Malditos (Objetivos):</strong>
      <span>Ordena los objetivos específicos en la secuencia lógica correcta.</span>
    </div>
    <div style="margin-bottom:0.5rem;">
      <strong style="color:var(--gold);">🏴‍☠️ Isla 5 – Puerto del Ron Sangriento (Justificación):</strong>
      <span>Convence a los piratas escépticos eligiendo argumentos de importancia, impacto y utilidad en 3 rondas.</span>
    </div>
    <div style="text-align:center;margin-top:1.2rem;">
      <button class="btn-pirate btn-small btn-red btn-static" onclick="this.closest('.overlay').remove()">Cerrar</button>
    </div>`;
  overlay.appendChild(modal);
  parent.appendChild(overlay);
}

function showCredits(parent) {
  const overlay = el("div", {
    className: "overlay active",
    onClick: (e) => {
      if (e.target === overlay) overlay.remove();
    },
  });
  const modal = el("div", {
    className: "modal panel-dark",
    style: { textAlign: "center" },
  });
  modal.innerHTML = `
    <h2 style="font-family:'Cinzel',serif;color:var(--gold);margin-bottom:1rem;">🏆 Créditos</h2>
    <p style="font-size:1.1rem;margin-bottom:0.5rem;"><strong>Piratas del Conocimiento</strong></p>
    <p>Juego educativo sobre textos de investigación</p>
    <hr style="border-color:rgba(255,215,0,0.2);margin:1rem 0;">
    <p style="color:var(--gold);">Desarrollado por:</p>
    <p>Nombre del estudiante</p>
    <p style="color:var(--text-dim);font-size:0.9rem;">Universidad / Institución</p>
    <hr style="border-color:rgba(255,215,0,0.2);margin:1rem 0;">
    <p style="color:var(--gold);font-size:0.9rem;">Sprites generados con PixelLab AI</p>
    <p style="color:var(--gold);font-size:0.9rem;">Versión Web – 2025</p>
    <div style="margin-top:1.2rem;">
      <button class="btn-pirate btn-small btn-red btn-static" onclick="this.closest('.overlay').remove()">Cerrar</button>
    </div>`;
  overlay.appendChild(modal);
  parent.appendChild(overlay);
}

/* ======================== WORLD MAP ======================== */
ScreenManager.register("worldmap", (container) => {
  container.className = "screen active bg-ocean";
  createBubbles(container, 15);
  createWaves(container, 8);
  AudioManager.playMusic("map");

  const island_positions = [
    { x: 0.15, y: 0.45 },
    { x: 0.35, y: 0.25 },
    { x: 0.55, y: 0.55 },
    { x: 0.72, y: 0.3 },
    { x: 0.88, y: 0.5 },
  ];

  // Header
  const header = el("div", { className: "map-header" });
  const backBtn = el("button", {
    className: "btn-pirate btn-small btn-red",
    textContent: "← Menú",
    style: { ...NO_ANIM, margin: "0", width: "auto" },
    onClick: () => ScreenManager.show("menu"),
  });
  header.appendChild(backBtn);
  header.appendChild(el("h2", { textContent: "🗺  Mapa del Archipiélago" }));
  const totalStars = GameProgress.get_total_stars();
  header.appendChild(
    el("span", {
      className: "map-fragments",
      textContent: `🗺 Fragmentos: ${GameProgress.fragments_collected}/5  ★ ${totalStars}/15`,
    }),
  );
  container.appendChild(header);

  // Progress bar + rank
  const progressBar = el("div", { className: "progress-bar-container" });
  const rank = GameProgress.get_rank();
  progressBar.appendChild(
    el("span", {
      className: "rank-badge",
      textContent: `${rank.icon} ${rank.name}`,
    }),
  );
  const track = el("div", { className: "progress-bar-track" });
  const fill = el("div", { className: "progress-bar-fill" });
  fill.style.width = Math.round((totalStars / 15) * 100) + "%";
  track.appendChild(fill);
  progressBar.appendChild(track);
  progressBar.appendChild(
    el("span", {
      className: "progress-label",
      textContent: `★ ${totalStars}/15`,
    }),
  );
  container.appendChild(progressBar);

  // Map area (relative container)
  const mapArea = el("div", { style: { flex: "1", position: "relative" } });

  // Dotted paths between islands
  for (let i = 0; i < island_positions.length - 1; i++) {
    const p1 = island_positions[i];
    const p2 = island_positions[i + 1];
    const dots = 8;
    for (let d = 0; d < dots; d++) {
      const t = (d + 1) / (dots + 1);
      const dot = el("div", {
        className:
          "path-dot" + (GameProgress.islands_completed[i] ? " completed" : ""),
      });
      dot.style.left = (p1.x + (p2.x - p1.x) * t) * 100 + "%";
      dot.style.top = (p1.y + (p2.y - p1.y) * t) * 100 + "%";
      dot.style.setProperty("--dot-delay", (i * 8 + d) * 0.15 + "s");
      mapArea.appendChild(dot);
    }
  }

  // Island nodes
  const sceneNames = ["island1", "island2", "island3", "island4", "island5"];
  for (let i = 0; i < 5; i++) {
    const node = el("div", { className: "island-node" });
    node.style.left = island_positions[i].x * 100 - 5 + "%";
    node.style.top = island_positions[i].y * 100 - 5 + "%";
    node.style.animationDelay = i * 0.3 + "s";

    const completed = GameProgress.islands_completed[i];
    const unlocked = GameProgress.is_island_unlocked(i);

    const visual = el("div", {
      className:
        "island-visual" +
        (completed ? " completed" : unlocked ? "" : " locked"),
    });
    visual.style.background = "transparent";
    visual.style.boxShadow = "none";
    visual.style.borderRadius = "0";

    // Use island image
    const islandImg = el("img", {
      src: `assets/objects/island_${i + 1}.png`,
      alt: `Isla ${i + 1}`,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        imageRendering: "pixelated",
      },
    });
    visual.appendChild(islandImg);

    // Status icon overlay
    if (completed) {
      const sello = el("img", {
        className: "island-status-icon",
        src: "assets/ui/sello_completado.png",
        alt: "Completado",
      });
      node.appendChild(sello);
    } else if (!unlocked) {
      const lock = el("img", {
        className: "island-status-icon",
        src: "assets/ui/candado.png",
        alt: "Bloqueado",
      });
      node.appendChild(lock);
    }
    node.appendChild(visual);

    // Name + Stars
    const nameText = GameProgress.island_names[i].replace("\n", " ");
    node.appendChild(
      el("div", { className: "island-name", textContent: nameText }),
    );
    if (completed) {
      node.appendChild(
        el("div", {
          className: "island-stars",
          textContent: GameProgress.get_star_text(i),
        }),
      );
    }

    if (unlocked && !completed) {
      node.style.cursor = "pointer";
      node.addEventListener(
        "click",
        ((idx) => () => {
          AudioManager.playSFX("click");
          ScreenManager.show(sceneNames[idx]);
        })(i),
      );
    } else if (completed) {
      node.style.cursor = "default";
    } else {
      node.style.cursor = "not-allowed";
    }

    mapArea.appendChild(node);
  }

  // Treasure button (if all complete)
  if (GameProgress.all_islands_complete()) {
    const treasureBtn = el("button", {
      className: "btn-pirate btn-gold",
      innerHTML: "🏴‍☠️ ¡Abrir el Tesoro! 🏴‍☠️",
      style: {
        position: "absolute",
        bottom: "5%",
        left: "50%",
        transform: "translateX(-50%)",
        animation: "chestPulse 2s ease-in-out infinite",
        opacity: "1",
        width: "auto",
        padding: "0.8rem 2rem",
      },
      onClick: () => ScreenManager.show("treasure"),
    });
    mapArea.appendChild(treasureBtn);
  }

  container.appendChild(mapArea);
});

/* ======================== ISLAND 1 – La Brújula de Barbanegra (Title) ======================== */
ScreenManager.register("island1", (container) => {
  container.className = "screen active bg-island-green";
  AudioManager.playMusic("island");

  container.appendChild(
    el("div", {
      className: "island-title-bar",
      textContent:
        "🧭 La Brújula de Barbanegra – Construye tu Título de Investigación",
    }),
  );

  const content = el("div", {
    style: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      padding: "0.8rem",
      position: "relative",
      overflow: "hidden",
    },
  });

  const feedback = el("div", {
    className: "feedback info",
    textContent:
      "Todo investigador comienza con una idea. Elige el tema de tu expedición.",
  });
  content.appendChild(feedback);

  // === STATE ===
  let selectedTheme = null;
  let themeData = null;

  // === STEP 1: Theme Selection ===
  const step1 = el("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      flex: "1",
    },
  });

  step1.appendChild(
    el("div", {
      className: "panel-dark",
      style: { padding: "0.6rem 1rem", textAlign: "center", maxWidth: "600px" },
      innerHTML:
        '<div style="font-family:\'Cinzel\',serif;color:var(--gold);font-size:0.9rem;">📜 Pergamino de Temas</div><div style="font-size:0.85rem;color:var(--parchment-dark);margin-top:0.3rem;">Selecciona un tema para tu investigación:</div>',
    }),
  );

  const themeGrid = el("div", { className: "theme-grid" });
  const themeNames = THEME_DB.map((t) => t.name);

  let selectedBtn = null;
  themeNames.forEach((name) => {
    const btn = el("button", {
      className: "theme-btn",
      textContent: name,
      onClick: () => {
        if (selectedBtn) selectedBtn.classList.remove("selected");
        btn.classList.add("selected");
        selectedBtn = btn;
        selectedTheme = name;
        exploreBtn.disabled = false;
        exploreBtn.style.opacity = "1";
        feedback.className = "feedback info";
        feedback.textContent = `Tema seleccionado: "${name}". Presiona "Explorar ideas".`;
      },
    });
    themeGrid.appendChild(btn);
  });
  step1.appendChild(themeGrid);

  const exploreBtn = el("button", {
    className: "btn-pirate btn-small btn-gold",
    textContent: "🔍 Explorar ideas",
    disabled: true,
    style: { ...NO_ANIM, opacity: "0.5", width: "auto", marginTop: "0.3rem" },
    onClick: () => {
      AudioManager.playSFX("click");
      goToStep2();
    },
  });
  step1.appendChild(exploreBtn);
  content.appendChild(step1);

  // === STEP 2: Word Classification ===
  const step2 = el("div", {
    style: {
      display: "none",
      flexDirection: "column",
      gap: "0.4rem",
      flex: "1",
    },
  });

  // Cofres row
  const cofreRow = el("div", { className: "cofre-row" });
  const cofres = {};
  const cofreNames = [
    { id: "fenomeno", label: "Fenómeno / Enfoque" },
    { id: "tema", label: "Tema" },
    { id: "poblacion", label: "Población" },
  ];

  cofreNames.forEach((c) => {
    const slot = el("div", { className: "cofre-slot" });
    slot.dataset.cofreId = c.id;

    slot.appendChild(
      el("img", {
        src: "assets/objects/cofre_causas.png",
        alt: "cofre",
        style: {
          width: "40px",
          height: "40px",
          objectFit: "contain",
          imageRendering: "pixelated",
        },
      }),
    );
    slot.appendChild(
      el("div", { className: "cofre-label", textContent: c.label }),
    );

    const wordArea = el("div", {
      className: "cofre-word",
      style: { display: "none" },
    });
    slot.appendChild(wordArea);

    // Drag events (not for tema cofre — auto-filled)
    if (c.id !== "tema") {
      makeDropTarget(slot, (data) =>
        handleCofreDrop(data, c.id, slot, wordArea),
      );
    }

    cofres[c.id] = { slot, wordArea, word: null };
    cofreRow.appendChild(slot);
  });
  step2.appendChild(cofreRow);

  // Word bank
  step2.appendChild(
    el("div", {
      style: {
        textAlign: "center",
        fontSize: "0.85rem",
        color: "var(--gold)",
        fontFamily: "'Cinzel',serif",
      },
      textContent: "💡 Banco de Ideas — Arrastra las palabras a los cofres",
    }),
  );

  const wordBank = el("div", { className: "word-bank" });
  step2.appendChild(wordBank);
  content.appendChild(step2);

  // === STEP 3: Title reveal (built inside step2) ===
  const titleReveal = el("div", {
    className: "panel-parchment",
    style: {
      display: "none",
      textAlign: "center",
      maxWidth: "650px",
      margin: "0.5rem auto",
      padding: "1rem",
    },
  });
  step2.appendChild(titleReveal);

  // === FUNCTIONS ===
  function goToStep2() {
    themeData = getThemeByName(selectedTheme);
    if (!themeData) return;

    step1.style.display = "none";
    step2.style.display = "flex";

    // Auto-fill tema cofre
    cofres.tema.word = selectedTheme;
    cofres.tema.wordArea.textContent = selectedTheme;
    cofres.tema.wordArea.style.display = "block";
    cofres.tema.slot.classList.add("auto-filled");

    // Generate 18 word cards
    const allWords = [
      ...themeData.fenomenos.map((w) => ({ text: w, type: "fenomeno" })),
      ...themeData.poblaciones.map((w) => ({ text: w, type: "poblacion" })),
      ...themeData.distractores.map((w) => ({ text: w, type: "distractor" })),
    ];
    const shuffled = shuffle(allWords);

    wordBank.innerHTML = "";
    shuffled.forEach((w) => {
      const card = el("div", {
        className: "word-card",
        textContent: w.text,
      });
      card.dataset.type = w.type;
      card.dataset.text = w.text;
      makeDraggable(card, () => ({ text: w.text, type: w.type }));
      wordBank.appendChild(card);
    });

    feedback.className = "feedback info";
    feedback.textContent =
      "Arrastra una palabra de fenómeno y una de población a sus cofres.";
  }

  function handleCofreDrop(data, cofreId, slot, wordArea) {
    // Validate: is this word the correct type for this cofre?
    const validType = cofreId; // "fenomeno" or "poblacion"
    if (data.type === validType) {
      // If cofre already has a word, put the old one back
      if (cofres[cofreId].word) {
        returnWordToBank(cofres[cofreId].word);
      }
      cofres[cofreId].word = data.text;
      wordArea.textContent = data.text;
      wordArea.style.display = "block";
      slot.classList.add("filled");

      // Remove card from bank
      const card = wordBank.querySelector(
        `[data-text="${CSS.escape(data.text)}"]`,
      );
      if (card) card.remove();

      AudioManager.playSFX("correct");
      feedback.className = "feedback correct";
      feedback.textContent = `✓ ¡"${data.text}" clasificado correctamente!`;

      // Check if both cofres are filled
      if (cofres.fenomeno.word && cofres.poblacion.word) {
        buildTitle();
      }
    } else {
      // Wrong classification
      GameProgress.record_error(0);
      screenShake();
      AudioManager.playSFX("wrong");
      feedback.className = "feedback wrong";
      if (data.type === "distractor") {
        feedback.textContent = `✖ "${data.text}" no es un fenómeno ni una población. ¡Intenta con otra palabra!`;
      } else {
        feedback.textContent = `✖ "${data.text}" no corresponde a este cofre. Prueba en otro.`;
      }
    }
  }

  function returnWordToBank(text) {
    // Re-add a word card to the bank
    const existingData = [
      ...themeData.fenomenos.map((w) => ({ text: w, type: "fenomeno" })),
      ...themeData.poblaciones.map((w) => ({ text: w, type: "poblacion" })),
      ...themeData.distractores.map((w) => ({ text: w, type: "distractor" })),
    ].find((w) => w.text === text);
    if (!existingData) return;

    const card = el("div", {
      className: "word-card",
      textContent: text,
    });
    card.dataset.type = existingData.type;
    card.dataset.text = text;
    makeDraggable(card, () => ({ text, type: existingData.type }));
    wordBank.appendChild(card);
  }

  function buildTitle() {
    const fenomeno = cofres.fenomeno.word;
    const tema = cofres.tema.word;
    const poblacion = cofres.poblacion.word;
    const title = `${fenomeno.charAt(0).toUpperCase() + fenomeno.slice(1)} de ${tema.toLowerCase()} en ${poblacion.toLowerCase()}`;

    GameProgress.selected_theme = selectedTheme;
    GameProgress.selected_population = poblacion;
    GameProgress.generated_title = title;

    titleReveal.style.display = "block";
    titleReveal.innerHTML = `
      <div style="font-family:'Pirata One',serif;color:#5a3a10;font-size:1.2rem;margin-bottom:0.5rem;">📜 Título Construido</div>
      <div style="font-size:1.1rem;color:#3a2a10;font-weight:700;margin-bottom:0.5rem;">"${title}"</div>
      <div style="font-size:0.85rem;color:#6a5a30;">[Fenómeno] de [Tema] en [Población]</div>
    `;

    AudioManager.playSFX("complete");
    createConfetti(container);
    feedback.className = "feedback gold";
    feedback.textContent = "🧭✨ ¡Título de investigación construido!";

    Dialog.showSequence(
      [
        {
          name: "🧭 Pirata Sabio",
          text: `¡Excelente, marinero! Has construido tu título: "${title}"`,
        },
        {
          name: "🧭 Pirata Sabio",
          text: "Un buen título indica QUÉ se investiga (fenómeno), SOBRE QUÉ (tema) y EN QUIÉN (población).",
        },
        {
          name: "🧭 Pirata Sabio",
          text: "¡Primer fragmento del mapa obtenido! Continúa tu aventura.",
        },
      ],
      () => {
        GameProgress.complete_island(0);
        GameProgress.save_game();
        ScreenManager.show("worldmap");
      },
    );
  }

  // Back button
  content.appendChild(createBackButton());

  container.appendChild(content);

  // Intro dialog
  Dialog.showSequence([
    {
      name: "🧭 Pirata Sabio",
      text: "¡Bienvenido a La Brújula de Barbanegra, marinero!",
    },
    {
      name: "🧭 Pirata Sabio",
      text: "Todo investigador comienza con una idea. Elige el tema de tu expedición.",
    },
    {
      name: "🧭 Pirata Sabio",
      text: "Luego clasificarás las palabras en tres cofres: Fenómeno, Tema y Población para construir tu título de investigación.",
    },
  ]);
});

/* ======================== ISLAND 2 – Cueva de los Condenados (Problem) ======================== */
ScreenManager.register("island2", (container) => {
  container.className = "screen active bg-cave";
  createDust(container, 20);
  AudioManager.playMusic("island");

  container.appendChild(
    el("div", {
      className: "island-title-bar",
      textContent:
        "💀 Cueva de los Condenados – Clasifica el Problema de Investigación",
    }),
  );

  const content = el("div", {
    style: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      padding: "0.8rem",
      position: "relative",
      overflow: "hidden",
    },
  });

  const feedback = el("div", { className: "feedback info" });
  content.appendChild(feedback);

  // Load theme from Island 1
  const themeName = GameProgress.selected_theme;
  const popName = GameProgress.selected_population;
  const themeData =
    themeName && popName ? getPopulationData(themeName, popName) : null;
  const fullTitle = GameProgress.generated_title || themeName;

  if (!themeData || !themeData.problema) {
    feedback.className = "feedback wrong";
    feedback.textContent =
      "⚠️ Primero debes completar la Isla 1 para elegir un tema.";
    content.appendChild(
      el("button", {
        className: "btn-pirate btn-small btn-gold",
        textContent: "← Ir a la Isla 1",
        style: { ...NO_ANIM, width: "auto", margin: "1rem auto" },
        onClick: () => ScreenManager.show("island1"),
      }),
    );
    container.appendChild(content);
    return;
  }

  feedback.textContent = `Tema: "${fullTitle}" — Arrastra cada frase a la categoría correcta`;

  // Items data from theme
  const items = themeData.problema.items;

  const zoneDefs = [
    {
      id: "causas",
      name: "Causas",
      color: "rgba(100,60,20,0.6)",
      img: "assets/objects/cofre_causas.png",
    },
    {
      id: "problema",
      name: "Problema Central",
      color: "rgba(120,30,30,0.6)",
      img: "assets/objects/cofre_problema.png",
    },
    {
      id: "consecuencias",
      name: "Consecuencias",
      color: "rgba(20,50,100,0.6)",
      img: "assets/objects/cofre_consecuencias.png",
    },
  ];

  // State
  const placed = { causas: [], problema: [], consecuencias: [] };
  const maxPerZone = 2;

  // Drag items area
  const dragArea = el("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "0.4rem",
      margin: "0.5rem 0",
    },
  });
  const shuffledItems = shuffle(items);

  shuffledItems.forEach((item) => {
    const d = el("div", {
      className: "drag-item",
      textContent: item.text,
    });
    d.dataset.zone = item.zone;
    d.dataset.text = item.text;
    makeDraggable(d, () => ({ zone: item.zone, text: item.text }));
    dragArea.appendChild(d);
  });
  content.appendChild(dragArea);

  // Drop zones
  const zonesRow = el("div", {
    style: { display: "flex", gap: "0.5rem", flex: "1" },
  });
  const zoneElements = {};

  zoneDefs.forEach((zd) => {
    const zone = el("div", {
      className: "drop-zone",
      style: { background: zd.color, position: "relative" },
    });
    zone.appendChild(
      el("img", {
        src: zd.img,
        alt: zd.name,
        style: {
          width: "50px",
          height: "50px",
          objectFit: "contain",
          imageRendering: "pixelated",
          marginBottom: "0.3rem",
        },
      }),
    );
    zone.appendChild(
      el("div", { className: "drop-zone-title", textContent: zd.name }),
    );
    const counter = el("div", {
      className: "drop-zone-counter",
      textContent: `0/${maxPerZone}`,
    });
    zone.appendChild(counter);
    const itemsContainer = el("div");
    zone.appendChild(itemsContainer);

    makeDropTarget(zone, (data) =>
      handleDrop(data, zd.id, itemsContainer, counter),
    );

    zoneElements[zd.id] = { zone, itemsContainer, counter };
    zonesRow.appendChild(zone);
  });
  content.appendChild(zonesRow);

  let totalPlaced = 0;

  function handleDrop(data, targetZone, itemsContainer, counter) {
    if (placed[targetZone].length >= maxPerZone) {
      feedback.className = "feedback wrong";
      feedback.textContent = "¡Esa zona ya está llena!";
      return;
    }
    if (data.zone === targetZone) {
      placed[targetZone].push(data.text);
      totalPlaced++;
      counter.textContent = `${placed[targetZone].length}/${maxPerZone}`;

      const placedEl = el("div", {
        className: "drag-item placed",
        textContent: data.text,
      });
      itemsContainer.appendChild(placedEl);

      const orig = dragArea.querySelector(
        `[data-text="${CSS.escape(data.text)}"]`,
      );
      if (orig) orig.remove();

      feedback.className = "feedback correct";
      feedback.textContent = `✓ ¡Correcto! "${data.text}" bien clasificado.`;
      AudioManager.playSFX("correct");

      if (totalPlaced === 6) {
        handleIsland2Complete();
      }
    } else {
      GameProgress.record_error(1);
      screenShake();
      AudioManager.playSFX("wrong");
      feedback.className = "feedback wrong";
      feedback.textContent = `✖ "${data.text}" no pertenece a esa categoría. Intenta otra.`;
    }
  }

  function handleIsland2Complete() {
    feedback.className = "feedback gold";
    feedback.textContent =
      "💀✨ ¡Problema de investigación clasificado correctamente!";
    Dialog.showSequence(
      [
        {
          name: "💀 Guardián de la Cueva",
          text: `¡Excelente trabajo clasificando el problema sobre "${fullTitle}"!`,
        },
        {
          name: "💀 Guardián de la Cueva",
          text: "Todo problema tiene CAUSAS que lo originan, un PROBLEMA CENTRAL que describes, y CONSECUENCIAS que genera.",
        },
        {
          name: "💀 Guardián de la Cueva",
          text: "Comprender esta estructura te ayudará a plantear mejor tu investigación. ¡Segundo fragmento obtenido!",
        },
      ],
      () => {
        AudioManager.playSFX("complete");
        createConfetti(container);
        GameProgress.complete_island(1);
        ScreenManager.show("worldmap");
      },
    );
  }

  // Back button
  content.appendChild(createBackButton());

  container.appendChild(content);

  Dialog.showSequence([
    {
      name: "💀 Guardián de la Cueva",
      text: "¡Bienvenido a la Cueva de los Condenados, joven investigador!",
    },
    {
      name: "💀 Guardián de la Cueva",
      text: `El tema es "${fullTitle}". Debes clasificar las frases según sean Causas, Problema Central o Consecuencias.`,
    },
    {
      name: "💀 Guardián de la Cueva",
      text: "Arrastra cada frase a la categoría correcta. ¡Piensa con cuidado!",
    },
  ]);
});

/* ======================== ISLAND 3 – Ojo del Kraken (Research Question) ======================== */
ScreenManager.register("island3", (container) => {
  container.className = "screen active bg-night";
  createStars(container, 30);
  AudioManager.playMusic("island");

  container.appendChild(
    el("div", {
      className: "island-title-bar",
      textContent: "🐙 Ojo del Kraken – Formula la Pregunta de Investigación",
    }),
  );

  const content = el("div", {
    style: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      position: "relative",
    },
  });

  // Load theme from Island 1
  const themeName = GameProgress.selected_theme;
  const popName = GameProgress.selected_population;
  const themeData =
    themeName && popName ? getPopulationData(themeName, popName) : null;
  const fullTitle = GameProgress.generated_title || themeName;

  if (!themeData || !themeData.pregunta) {
    const feedback0 = el("div", {
      className: "feedback wrong",
      textContent: "⚠️ Primero debes completar la Isla 1 para elegir un tema.",
    });
    content.appendChild(feedback0);
    content.appendChild(
      el("button", {
        className: "btn-pirate btn-small btn-gold",
        textContent: "← Ir a la Isla 1",
        style: { ...NO_ANIM, width: "auto", margin: "1rem auto" },
        onClick: () => ScreenManager.show("island1"),
      }),
    );
    container.appendChild(content);
    return;
  }

  // Lighthouse
  const faroContainer = el("div", {
    className: "faro-container",
    style: { marginBottom: "1rem" },
  });
  const lightBeam = el("div", { className: "faro-light-beam" });
  faroContainer.appendChild(lightBeam);
  const faroImg = el("img", {
    className: "faro-img",
    src: "assets/sprites/objects/faro_apagado.png",
    alt: "faro",
  });
  faroContainer.appendChild(faroImg);
  content.appendChild(faroContainer);

  const feedback = el("div", {
    className: "feedback info",
    textContent: `Tema: "${fullTitle}" — Elige la palanca correcta para encender el faro`,
  });
  content.appendChild(feedback);

  const questionDisplay = el("div", {
    style: {
      textAlign: "center",
      fontSize: "0.95rem",
      color: "rgba(200,200,255,0.8)",
      margin: "0.5rem 0",
      minHeight: "2rem",
      padding: "0 1rem",
    },
  });
  content.appendChild(questionDisplay);

  // Lever data from theme
  const bgs = [
    "linear-gradient(135deg, #3a2a5a, #25183a)",
    "linear-gradient(135deg, #2a4a3a, #183025)",
    "linear-gradient(135deg, #4a3a2a, #30251a)",
  ];
  const levers = shuffle(
    themeData.pregunta.opciones.map((op, i) => ({
      label: op.label,
      question: op.question,
      correct: op.correct,
      bg: bgs[i],
    })),
  );

  const leversRow = el("div", {
    style: {
      display: "flex",
      gap: "0.8rem",
      marginTop: "0.8rem",
      width: "100%",
      maxWidth: "700px",
    },
  });
  let completed = false;

  levers.forEach((lv) => {
    const btn = el("div", {
      className: "lever-btn",
      style: { background: lv.bg },
    });
    btn.innerHTML = `<div style="font-size:2rem;margin-bottom:0.5rem;">🔧</div><div>${lv.label}</div>`;

    btn.addEventListener("mouseover", () => {
      if (!completed && !btn.classList.contains("wrong")) {
        questionDisplay.textContent = lv.question;
      }
    });
    btn.addEventListener("mouseout", () => {
      if (!completed && !btn.classList.contains("wrong")) {
        questionDisplay.textContent = "";
      }
    });

    btn.addEventListener("click", () => {
      if (completed || btn.classList.contains("wrong")) return;
      if (lv.correct) {
        btn.classList.add("correct");
        completed = true;
        feedback.className = "feedback correct";
        feedback.textContent = "¡Correcto! El faro se enciende.";
        questionDisplay.textContent = lv.question;
        AudioManager.playSFX("correct");
        showFloatingText(
          container,
          "+★ ¡Correcto!",
          btn.offsetLeft,
          btn.offsetTop,
          true,
        );

        faroImg.src = "assets/sprites/objects/faro_encendido.png";
        lightBeam.classList.add("on");

        Dialog.showSequence(
          [
            {
              name: "🐙 Ojo del Kraken",
              text: "¡El faro se ha encendido con la pregunta correcta!",
            },
            {
              name: "🐙 Ojo del Kraken",
              text: `La pregunta de investigación es: "${lv.question}"`,
            },
            {
              name: "🐙 Ojo del Kraken",
              text: "Una buena pregunta de investigación debe ser específica, medible y relacionada directamente con el problema planteado. ¡Tercer fragmento obtenido!",
            },
          ],
          () => {
            AudioManager.playSFX("complete");
            createConfetti(container);
            GameProgress.complete_island(2);
            ScreenManager.show("worldmap");
          },
        );
      } else {
        btn.classList.add("wrong");
        GameProgress.record_error(2);
        screenShake();
        AudioManager.playSFX("wrong");
        feedback.className = "feedback wrong";
        feedback.textContent =
          "✖ Esa pregunta es demasiado general o no se relaciona con el problema.";
        questionDisplay.textContent = "";

        faroImg.style.filter = "brightness(0.5) sepia(1) hue-rotate(-30deg)";
        setTimeout(() => {
          faroImg.style.filter = "";
        }, 500);
      }
    });

    leversRow.appendChild(btn);
  });
  content.appendChild(leversRow);

  // Back
  content.appendChild(createBackButton());

  container.appendChild(content);

  Dialog.showSequence([
    {
      name: "🐙 Ojo del Kraken",
      text: "¡Marinero, el faro está apagado y los barcos no pueden navegar!",
    },
    {
      name: "🐙 Ojo del Kraken",
      text: `El tema es "${fullTitle}". Solo la pregunta de investigación correcta puede encender el faro.`,
    },
    {
      name: "🐙 Ojo del Kraken",
      text: "Pasa el cursor sobre cada palanca para ver la pregunta, luego elige la correcta.",
    },
  ]);
});
/* ======================== ISLAND 4 – Peldaños Malditos (Objectives) ======================== */
ScreenManager.register("island4", (container) => {
  container.className = "screen active bg-fortress";
  createLeaves(container, 10);
  AudioManager.playMusic("island");

  container.appendChild(
    el("div", {
      className: "island-title-bar",
      textContent: "🪜 Peldaños Malditos – Ordena los Objetivos Específicos",
    }),
  );

  const content = el("div", {
    style: {
      flex: "1",
      display: "flex",
      padding: "0.8rem",
      gap: "1rem",
      position: "relative",
    },
  });

  // Load theme from Island 1
  const themeName = GameProgress.selected_theme;
  const popName = GameProgress.selected_population;
  const themeData =
    themeName && popName ? getPopulationData(themeName, popName) : null;
  const fullTitle = GameProgress.generated_title || themeName;

  if (!themeData || !themeData.objetivos) {
    const leftPanel = el("div", {
      style: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      },
    });
    leftPanel.appendChild(
      el("div", {
        className: "feedback wrong",
        textContent:
          "⚠️ Primero debes completar la Isla 1 para elegir un tema.",
      }),
    );
    leftPanel.appendChild(
      el("button", {
        className: "btn-pirate btn-small btn-gold",
        textContent: "← Ir a la Isla 1",
        style: { ...NO_ANIM, width: "auto", margin: "1rem auto" },
        onClick: () => ScreenManager.show("island1"),
      }),
    );
    content.appendChild(leftPanel);
    container.appendChild(content);
    return;
  }

  // Left: Objective info + keys
  const leftPanel = el("div", {
    style: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
  });

  leftPanel.appendChild(
    el("div", {
      className: "panel-dark",
      style: { padding: "0.7rem" },
      innerHTML: `<div style="font-family:'Cinzel',serif;color:var(--gold);font-size:0.9rem;margin-bottom:0.3rem;">🎯 Objetivo General:</div>
      <div style="font-size:0.9rem;">${themeData.objetivos.general}</div>`,
    }),
  );

  const feedback = el("div", {
    className: "feedback info",
    textContent: `Tema: "${fullTitle}" — Arrastra las llaves a los escalones en el orden correcto`,
  });
  leftPanel.appendChild(feedback);

  // Keys data from theme (correct order: id 0, 1, 2)
  const keysData = themeData.objetivos.especificos;
  const shuffledKeys = shuffle([...keysData]);

  leftPanel.appendChild(
    el("div", {
      style: { fontSize: "0.85rem", color: "var(--gold)", marginTop: "0.3rem" },
      textContent: "🔑 Llaves (arrastra al escalón):",
    }),
  );

  const keysContainer = el("div", {
    style: { display: "flex", flexDirection: "column", gap: "0.3rem" },
  });

  shuffledKeys.forEach((key) => {
    const keyEl = el("div", { className: "key-item" });
    keyEl.dataset.keyId = key.id;
    const icon = el("img", {
      className: "key-icon",
      src: "assets/sprites/objects/llave.png",
      alt: "llave",
    });
    keyEl.appendChild(icon);
    keyEl.appendChild(
      el("span", { textContent: key.text, style: { fontSize: "0.83rem" } }),
    );
    makeDraggable(keyEl, () => key.id);
    keysContainer.appendChild(keyEl);
  });
  leftPanel.appendChild(keysContainer);

  content.appendChild(leftPanel);

  // Right: Steps + Door
  const rightPanel = el("div", {
    style: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
    },
  });

  // Door
  const doorContainer = el("div", {
    style: { textAlign: "center", marginBottom: "0.3rem" },
  });
  const doorImg = el("img", {
    src: "assets/sprites/objects/puerta_abierta.png",
    alt: "door",
    style: {
      width: "80px",
      opacity: "0.3",
      filter: "grayscale(1)",
      transition: "all 0.5s",
    },
  });
  doorContainer.appendChild(doorImg);
  doorContainer.appendChild(
    el("div", {
      style: { fontSize: "0.8rem", color: "rgba(200,180,140,0.6)" },
      textContent: "🔒 Puerta cerrada",
    }),
  );
  rightPanel.appendChild(doorContainer);

  // Step zones
  const stepZones = [];
  const stepContents = [null, null, null];
  const stepLabels = ["Paso 1:", "Paso 2:", "Paso 3:"];

  for (let i = 0; i < 3; i++) {
    const zone = el("div", { className: "step-zone" });
    zone.dataset.step = i;
    zone.appendChild(
      el("span", { className: "step-label", textContent: stepLabels[i] }),
    );
    const contentArea = el("span", { style: { fontSize: "0.83rem" } });
    zone.appendChild(contentArea);

    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      zone.classList.add("drag-over");
    });
    zone.addEventListener("dragleave", () =>
      zone.classList.remove("drag-over"),
    );
    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("drag-over");
      const keyId = parseInt(e.dataTransfer.getData("text/plain"));
      if (isNaN(keyId)) return;

      // If this step already has a different key, return it to the bank
      if (stepContents[i] !== null && stepContents[i] !== keyId) {
        const oldKeyEl = keysContainer.querySelector(
          `[data-key-id="${stepContents[i]}"]`,
        );
        if (oldKeyEl) oldKeyEl.style.display = "";
      }

      // Remove this key from any previous step it was in
      for (let s = 0; s < 3; s++) {
        if (stepContents[s] === keyId) {
          stepContents[s] = null;
          const sz = stepZones[s];
          sz.querySelector("span:last-child").textContent = "";
        }
      }

      // Place key in this step
      stepContents[i] = keyId;
      contentArea.textContent = keysData.find((k) => k.id === keyId).text;

      // Hide key from container
      const keyEl = keysContainer.querySelector(`[data-key-id="${keyId}"]`);
      if (keyEl) keyEl.style.display = "none";
    });

    stepZones.push(zone);
    rightPanel.appendChild(zone);
  }

  // Verify button
  const verifyBtn = el("button", {
    className: "btn-pirate btn-small btn-gold",
    textContent: "✓ Verificar Orden",
    style: { ...NO_ANIM, marginTop: "0.5rem", width: "auto" },
    onClick: () => {
      if (stepContents.includes(null)) {
        feedback.className = "feedback wrong";
        feedback.textContent =
          "Coloca una llave en cada escalón antes de verificar.";
        return;
      }
      const correct =
        stepContents[0] === 0 && stepContents[1] === 1 && stepContents[2] === 2;
      if (correct) {
        feedback.className = "feedback correct";
        feedback.textContent = "¡Orden correcto! La puerta se abre.";
        AudioManager.playSFX("correct");
        showFloatingText(
          container,
          "+★ ¡Puerta abierta!",
          verifyBtn.offsetLeft,
          verifyBtn.offsetTop,
          true,
        );
        stepZones.forEach((sz) => sz.classList.add("correct"));
        verifyBtn.disabled = true;

        doorImg.style.opacity = "1";
        doorImg.style.filter = "none";
        doorContainer.querySelector("div").textContent = "🔓 ¡Puerta abierta!";
        doorContainer.querySelector("div").style.color = "var(--success)";

        Dialog.showSequence(
          [
            {
              name: "🪜 Guardián de los Peldaños",
              text: `¡La puerta se ha abierto! Has ordenado los objetivos sobre "${fullTitle}" correctamente.`,
            },
            {
              name: "🪜 Guardián de los Peldaños",
              text: "Primero DIAGNOSTICAR/IDENTIFICAR, luego ANALIZAR/EVALUAR, y finalmente PROPONER/DISEÑAR.",
            },
            {
              name: "🪜 Guardián de los Peldaños",
              text: "Los objetivos específicos deben seguir un orden lógico y ser medibles. ¡Cuarto fragmento obtenido!",
            },
          ],
          () => {
            AudioManager.playSFX("complete");
            createConfetti(container);
            GameProgress.complete_island(3);
            ScreenManager.show("worldmap");
          },
        );
      } else {
        GameProgress.record_error(3);
        screenShake();
        AudioManager.playSFX("wrong");
        feedback.className = "feedback wrong";
        feedback.textContent =
          "✖ El orden no es correcto. Piensa: ¿qué va primero lógicamente?";
        stepZones.forEach((sz) => {
          sz.classList.add("wrong");
          setTimeout(() => sz.classList.remove("wrong"), 600);
        });
        for (let s = 0; s < 3; s++) {
          if (stepContents[s] !== null) {
            const keyEl = keysContainer.querySelector(
              `[data-key-id="${stepContents[s]}"]`,
            );
            if (keyEl) keyEl.style.display = "";
          }
          stepContents[s] = null;
          stepZones[s].querySelector("span:last-child").textContent = "";
        }
      }
    },
  });
  rightPanel.appendChild(verifyBtn);

  content.appendChild(rightPanel);

  // Back
  content.appendChild(createBackButton());

  container.appendChild(content);

  Dialog.showSequence([
    {
      name: "🪜 Guardián de los Peldaños",
      text: "¡Alto! Para abrir esta puerta necesitas ordenar los objetivos específicos.",
    },
    {
      name: "🪜 Guardián de los Peldaños",
      text: `El tema es "${fullTitle}". Cada llave representa un objetivo. Arrástralas a los escalones en el orden lógico.`,
    },
    {
      name: "🪜 Guardián de los Peldaños",
      text: "Piensa: ¿qué harías primero? ¿Diagnosticar, analizar o proponer?",
    },
  ]);
});

/* ======================== ISLAND 5 – Puerto del Ron Sangriento (Justification) ======================== */
ScreenManager.register("island5", (container) => {
  container.className = "screen active bg-tavern";
  createEmbers(container, 15);
  AudioManager.playMusic("island");

  container.appendChild(
    el("div", {
      className: "island-title-bar",
      textContent: "🏴‍☠️ Puerto del Ron Sangriento – Justifica tu Investigación",
    }),
  );

  const content = el("div", {
    style: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      padding: "0.8rem",
      position: "relative",
      gap: "0.4rem",
      overflow: "auto",
    },
  });

  const feedback = el("div", { className: "feedback info" });
  content.appendChild(feedback);

  // Load theme from Island 1
  const themeName = GameProgress.selected_theme;
  const themeData = themeName ? getThemeByName(themeName) : null;
  const fullTitle = GameProgress.generated_title || themeName;

  if (!themeData) {
    feedback.className = "feedback wrong";
    feedback.textContent =
      "⚠️ Primero debes completar la Isla 1 para elegir un tema.";
    content.appendChild(
      el("button", {
        className: "btn-pirate btn-small btn-gold",
        textContent: "← Ir a la Isla 1",
        style: { ...NO_ANIM, width: "auto", margin: "1rem auto" },
        onClick: () => ScreenManager.show("island1"),
      }),
    );
    container.appendChild(content);
    return;
  }

  // === STATE ===
  const rounds = [
    {
      question: `¿Por qué es importante investigar sobre "${fullTitle}"?`,
      expectedType: "importancia",
      pirate: 0,
    },
    {
      question: `¿A quién afecta "${fullTitle}" o por qué es un problema actual?`,
      expectedType: "impacto",
      pirate: 1,
    },
    {
      question: `¿Para qué serviría investigar "${fullTitle}"?`,
      expectedType: "utilidad",
      pirate: 0,
    },
  ];
  let currentRound = 0;
  const playerAnswers = []; // { texto, tipo } per round
  let cards = shuffle([...themeData.justificacion]);

  // === PIRATES ROW ===
  const piratesRow = el("div", {
    style: {
      display: "flex",
      gap: "0.8rem",
      justifyContent: "center",
      marginBottom: "0.3rem",
    },
  });

  const pirateSprites = [
    {
      name: "Pirata Teórico",
      sprite: "assets/characters/npc_pirata_teorico.png",
    },
    {
      name: "Pirata Indiferente",
      sprite: "assets/characters/npc_pirata_indiferente.png",
    },
  ];

  const pirateEls = pirateSprites.map((p) => {
    const card = el("div", {
      className: "pirate-card",
      style: { background: "rgba(50,35,20,0.8)", maxWidth: "160px" },
    });
    card.appendChild(
      el("img", { className: "pirate-icon", src: p.sprite, alt: p.name }),
    );
    card.appendChild(
      el("div", { className: "pirate-name", textContent: p.name }),
    );
    const speech = el("div", {
      className: "pirate-complaint",
      style: { fontSize: "0.75rem", minHeight: "2.2em" },
    });
    card.appendChild(speech);
    piratesRow.appendChild(card);
    return { card, speech };
  });
  content.appendChild(piratesRow);

  // Round question display
  const roundDisplay = el("div", {
    className: "round-question",
    style: { display: "none" },
  });
  content.appendChild(roundDisplay);

  // Player answer display
  const answerDisplay = el("div", {
    className: "round-answer",
    style: { display: "none" },
  });
  content.appendChild(answerDisplay);

  // Argument card bank
  const bankLabel = el("div", {
    style: {
      textAlign: "center",
      fontSize: "0.85rem",
      color: "var(--gold)",
      fontFamily: "'Cinzel',serif",
    },
    textContent: "📜 Banco de Argumentos — Elige uno para responder",
  });
  content.appendChild(bankLabel);

  const argBank = el("div", { className: "arg-bank" });
  content.appendChild(argBank);

  // Results panel (hidden until evaluation)
  const resultsPanel = el("div", {
    className: "panel-dark",
    style: { display: "none", textAlign: "center", padding: "0.8rem" },
  });
  content.appendChild(resultsPanel);

  // === RENDER FUNCTIONS ===
  function renderCards() {
    argBank.innerHTML = "";
    cards.forEach((c, i) => {
      const card = el("button", {
        className: "arg-card",
        textContent: c.texto,
        onClick: () => selectCard(i),
      });
      argBank.appendChild(card);
    });
  }

  function startRound(roundIdx) {
    currentRound = roundIdx;
    const round = rounds[roundIdx];

    // Pirate asks the question
    const pirateEl = pirateEls[round.pirate];
    pirateEl.card.classList.add("speaking");
    pirateEl.speech.textContent = round.question;

    // Mute the other pirate
    const otherIdx = round.pirate === 0 ? 1 : 0;
    pirateEls[otherIdx].card.classList.remove("speaking");
    pirateEls[otherIdx].speech.textContent = "...";

    roundDisplay.style.display = "block";
    roundDisplay.innerHTML = `<strong>Ronda ${roundIdx + 1}/3:</strong> ${round.question}`;

    answerDisplay.style.display = "none";
    answerDisplay.className = "round-answer";

    feedback.className = "feedback info";
    feedback.textContent = `Selecciona un argumento del banco para la ronda ${roundIdx + 1}.`;

    renderCards();
  }

  function selectCard(cardIdx) {
    const chosen = cards[cardIdx];
    playerAnswers.push({ texto: chosen.texto, tipo: chosen.tipo });

    // Show the answer
    answerDisplay.style.display = "block";
    answerDisplay.textContent = `Tu respuesta: "${chosen.texto}"`;

    // Remove used card from bank
    cards.splice(cardIdx, 1);
    argBank.innerHTML = "";
    bankLabel.style.display = "none";

    AudioManager.playSFX("click");

    if (currentRound < 2) {
      // Next round after a brief pause
      feedback.className = "feedback info";
      feedback.textContent =
        "Respuesta registrada. Pasando a la siguiente ronda...";
      setTimeout(() => {
        answerDisplay.style.display = "none";
        startRound(currentRound + 1);
        bankLabel.style.display = "block";
      }, 1500);
    } else {
      // All 3 rounds done — evaluate
      feedback.className = "feedback info";
      feedback.textContent =
        "Todas las rondas completadas. Evaluando argumentos...";
      setTimeout(() => evaluateAnswers(), 1500);
    }
  }

  function evaluateAnswers() {
    argBank.innerHTML = "";
    bankLabel.style.display = "none";
    roundDisplay.style.display = "none";
    answerDisplay.style.display = "none";

    let correctCount = 0;
    let resultHTML =
      "<div style=\"font-family:'Cinzel',serif;color:var(--gold);font-size:1rem;margin-bottom:0.5rem;\">⚖️ Evaluación de Justificación</div>";

    rounds.forEach((round, i) => {
      const answer = playerAnswers[i];
      const isCorrect = answer.tipo === round.expectedType;
      if (isCorrect) correctCount++;
      resultHTML += `<div style="margin:0.4rem 0;padding:0.4rem;border-radius:6px;background:${isCorrect ? "rgba(80,200,80,0.15)" : "rgba(200,80,80,0.15)"};">`;
      resultHTML += `<div style="font-size:0.8rem;color:var(--gold);">Ronda ${i + 1} — ${isCorrect ? "✓ Correcto" : "✖ Incorrecto"}</div>`;
      resultHTML += `<div style="font-size:0.75rem;color:var(--parchment-dark);">Tu argumento: "${answer.texto}"</div>`;
      resultHTML += `<div style="font-size:0.7rem;color:#aaa;">Categoría: ${answer.tipo} (se esperaba: ${round.expectedType})</div>`;
      resultHTML += `</div>`;
    });

    resultsPanel.innerHTML = resultHTML;
    resultsPanel.style.display = "block";

    if (correctCount === 3) {
      // All correct — pirates convinced!
      pirateEls.forEach((p) => {
        p.card.classList.add("convinced");
        p.speech.textContent = "¡Convencido! 👍";
      });

      AudioManager.playSFX("complete");
      createConfetti(container);
      feedback.className = "feedback gold";
      feedback.textContent =
        "🏴‍☠️✨ ¡Justificación perfecta! Todos los piratas están convencidos.";

      Dialog.showSequence(
        [
          {
            name: "🏴‍☠️ Pirata Teórico",
            text: "¡Impresionante, marinero! Has justificado tu investigación con argumentos sólidos.",
          },
          {
            name: "🏴‍☠️ Pirata Indiferente",
            text: "Reconozco que esta investigación tiene valor. Me has convencido.",
          },
          {
            name: "🏴‍☠️ Pirata Teórico",
            text: "La JUSTIFICACIÓN tiene tres pilares: IMPORTANCIA (aporta al conocimiento), IMPACTO (afecta a la sociedad) y UTILIDAD (tiene aplicaciones prácticas).",
          },
          {
            name: "🏴‍☠️ Pirata Teórico",
            text: "¡Último fragmento del mapa obtenido! El tesoro te espera.",
          },
        ],
        () => {
          GameProgress.complete_island(4);
          GameProgress.save_game();
          ScreenManager.show("worldmap");
        },
      );
    } else {
      // Not all correct — retry
      AudioManager.playSFX("wrong");
      feedback.className = "feedback wrong";
      feedback.textContent = `Acertaste ${correctCount}/3 rondas. Los piratas aún tienen dudas. ¡Inténtalo de nuevo!`;

      resultsPanel.appendChild(
        el("button", {
          className: "btn-pirate btn-small btn-gold",
          textContent: "🔄 Reintentar",
          style: { ...NO_ANIM, width: "auto", marginTop: "0.6rem" },
          onClick: () => {
            playerAnswers.length = 0;
            cards = shuffle([...themeData.justificacion]);
            resultsPanel.style.display = "none";
            bankLabel.style.display = "block";
            pirateEls.forEach((p) => {
              p.card.classList.remove("convinced", "speaking");
              p.speech.textContent = "";
            });
            startRound(0);
          },
        }),
      );
    }
  }

  // Back button
  content.appendChild(createBackButton());

  container.appendChild(content);

  // Intro: pirates express doubts, then start round 1
  Dialog.showSequence(
    [
      {
        name: "🏴‍☠️ Pirata Teórico",
        text: `¿"${fullTitle}"? ¡Bah! No veo por qué alguien investigaría eso.`,
      },
      {
        name: "🏴‍☠️ Pirata Indiferente",
        text: "A nadie le importa. Convéncenos de que vale la pena o no saldrás del puerto.",
      },
      {
        name: "🏴‍☠️ Pirata Teórico",
        text: "Tendrás tres rondas para darnos argumentos de importancia, impacto y utilidad. ¡Elige sabiamente!",
      },
    ],
    () => startRound(0),
  );
});

/* ======================== TREASURE SCREEN ======================== */
ScreenManager.register("treasure", (container) => {
  container.className = "screen active bg-treasure";
  createStars(container, 30);
  AudioManager.playMusic("victory");

  const content = el("div", {
    className: "flex-center flex-col",
    style: {
      flex: "1",
      padding: "1rem",
      gap: "0.8rem",
      position: "relative",
      zIndex: "5",
    },
  });

  content.appendChild(
    el("h2", {
      style: {
        fontFamily: "'Pirata One',serif",
        color: "var(--gold)",
        fontSize: "2rem",
        textShadow: "0 0 15px rgba(255,215,0,0.4)",
      },
      textContent: "🏴‍☠️ El Tesoro del Conocimiento 🏴‍☠️",
    }),
  );

  // Chest
  const chestContainer = el("div", {
    className: "chest-container flex-center",
    style: { position: "relative" },
  });
  const chestImg = el("img", {
    className: "chest-img",
    src: "assets/sprites/objects/cofre_cerrado.png",
    alt: "cofre",
  });
  chestContainer.appendChild(chestImg);
  content.appendChild(chestContainer);

  const label = el("div", {
    style: {
      fontFamily: "'Cinzel',serif",
      color: "var(--parchment-dark)",
      fontSize: "1.1rem",
    },
    textContent: "¡Haz clic en el cofre para abrirlo!",
  });
  content.appendChild(label);

  let opened = false;

  chestContainer.addEventListener("click", async () => {
    if (opened) return;
    opened = true;
    AudioManager.playSFX("complete");
    createConfetti(container, 60);

    // Flash effect
    const flash = el("div", { className: "golden-flash" });
    chestContainer.appendChild(flash);
    setTimeout(() => flash.remove(), 1200);

    chestImg.src = "assets/sprites/objects/cofre_abierto.png";
    chestContainer.style.animation = "none";
    label.textContent = "¡El tesoro ha sido revelado!";
    label.style.color = "var(--gold)";

    await sleep(800);

    // Build dynamic summary from theme
    const tName = GameProgress.selected_theme;
    const tPop = GameProgress.selected_population;
    const tData = tName ? getPopulationData(tName, tPop) : null;
    const tThemeData = tName ? getThemeByName(tName) : null;

    // Problema section
    let problemaSummary = "<em>No disponible</em>";
    if (tData && tData.problema) {
      const causas = tData.problema.items
        .filter((i) => i.zone === "causas")
        .map((i) => i.text)
        .join("; ");
      const prob = tData.problema.items
        .filter((i) => i.zone === "problema")
        .map((i) => i.text)
        .join("; ");
      const cons = tData.problema.items
        .filter((i) => i.zone === "consecuencias")
        .map((i) => i.text)
        .join("; ");
      problemaSummary = `<em>Causas:</em> ${causas}.<br><em>Problema:</em> ${prob}.<br><em>Consecuencias:</em> ${cons}.`;
    }

    // Pregunta section
    let preguntaSummary = "<em>No disponible</em>";
    if (tData && tData.pregunta) {
      const correcta = tData.pregunta.opciones.find((o) => o.correct);
      if (correcta) preguntaSummary = `"${correcta.question}"`;
    }

    // Objetivos section
    let objetivosSummary = "<em>No disponible</em>";
    if (tData && tData.objetivos) {
      objetivosSummary = tData.objetivos.especificos
        .map((o, i) => `${i + 1}. ${o.text}`)
        .join("<br>");
    }

    // Justificación section (theme-level, not population-specific)
    let justSummary = "<em>No disponible</em>";
    if (tThemeData && tThemeData.justificacion) {
      const imp =
        tThemeData.justificacion
          .filter((j) => j.tipo === "importancia")
          .map((j) => j.texto)[0] || "";
      const impact =
        tThemeData.justificacion
          .filter((j) => j.tipo === "impacto")
          .map((j) => j.texto)[0] || "";
      const util =
        tThemeData.justificacion
          .filter((j) => j.tipo === "utilidad")
          .map((j) => j.texto)[0] || "";
      justSummary = `<em>Importancia:</em> ${imp}<br><em>Impacto:</em> ${impact}<br><em>Utilidad:</em> ${util}`;
    }

    // Scroll with summary
    const scroll = el("div", {
      className: "panel-parchment scroll-unroll",
      style: {
        maxWidth: "700px",
        maxHeight: "280px",
        overflowY: "auto",
        fontSize: "0.9rem",
        lineHeight: "1.6",
      },
    });
    scroll.innerHTML = `
      <h3 style="text-align:center;color:#5a3a10;font-family:'Pirata One',serif;font-size:1.4rem;margin-bottom:0.8rem;">
        📜 Pergamino del Conocimiento
      </h3>
      <div style="margin-bottom:0.6rem;">
        <strong style="color:#8a5a20;">🧭 Título de Investigación:</strong><br>
        "${GameProgress.generated_title || "Título no generado"}"
        ${tName ? `<br><span style="font-size:0.8rem;color:#888;">(Tema: ${tName})</span>` : ""}
      </div>
      <div style="margin-bottom:0.6rem;">
        <strong style="color:#8a5a20;">💀 Planteamiento del Problema:</strong><br>
        ${problemaSummary}
      </div>
      <div style="margin-bottom:0.6rem;">
        <strong style="color:#8a5a20;">🐙 Pregunta de Investigación:</strong><br>
        ${preguntaSummary}
      </div>
      <div style="margin-bottom:0.6rem;">
        <strong style="color:#8a5a20;">🪜 Objetivos Específicos:</strong><br>
        ${tData && tData.objetivos ? `<em>General:</em> ${tData.objetivos.general}<br>` : ""}
        ${objetivosSummary}
      </div>
      <div style="margin-bottom:0.6rem;">
        <strong style="color:#8a5a20;">🏴‍☠️ Justificación:</strong><br>
        ${justSummary}
      </div>
      <div style="text-align:center;margin-top:0.8rem;">
        <strong style="color:#8a5a20;">⭐ Estrellas obtenidas: ${GameProgress.get_total_stars()}/15</strong>
        <br><span style="font-size:0.85rem;color:#6a5020;">${GameProgress.get_rank().icon} Rango: ${GameProgress.get_rank().name}</span>
      </div>
    `;
    content.appendChild(scroll);

    // Buttons
    const btnRow = el("div", {
      style: { display: "flex", gap: "1rem", marginTop: "0.5rem" },
    });
    btnRow.appendChild(
      el("button", {
        className: "btn-pirate btn-small btn-green",
        textContent: "🔄 Jugar de Nuevo",
        style: { ...NO_ANIM, width: "auto" },
        onClick: () => {
          GameProgress.reset();
          GameProgress.delete_save();
          ScreenManager.show("worldmap");
        },
      }),
    );
    btnRow.appendChild(
      el("button", {
        className: "btn-pirate btn-small btn-blue",
        textContent: "🏠 Menú Principal",
        style: { ...NO_ANIM, width: "auto" },
        onClick: () => ScreenManager.show("menu"),
      }),
    );
    content.appendChild(btnRow);
  });

  container.appendChild(content);
});
