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
    <p style="margin-bottom:0.8rem;">Eres un pirata investigador que debe completar 5 islas para encontrar el tesoro del conocimiento.</p>
    <div style="margin-bottom:0.5rem;">
      <strong style="color:var(--gold);">🔭 Isla 1 – Catalejo (Título):</strong>
      <span>Usa el catalejo para enfocar el título de investigación correcto.</span>
    </div>
    <div style="margin-bottom:0.5rem;">
      <strong style="color:var(--gold);">🌳 Isla 2 – Árbol (Problema):</strong>
      <span>Arrastra las frases a su categoría correcta: Causas, Problema o Consecuencias.</span>
    </div>
    <div style="margin-bottom:0.5rem;">
      <strong style="color:var(--gold);">🔦 Isla 3 – Faro (Pregunta):</strong>
      <span>Elige la palanca correcta para encender el faro con la pregunta de investigación.</span>
    </div>
    <div style="margin-bottom:0.5rem;">
      <strong style="color:var(--gold);">🪜 Isla 4 – Escalera (Objetivos):</strong>
      <span>Ordena los objetivos específicos en la secuencia lógica correcta.</span>
    </div>
    <div style="margin-bottom:0.5rem;">
      <strong style="color:var(--gold);">🍺 Isla 5 – Taberna (Justificación):</strong>
      <span>Convence a 3 piratas escépticos eligiendo los argumentos correctos.</span>
    </div>
    <div style="text-align:center;margin-top:1.2rem;">
      <button class="btn-pirate btn-small btn-red" style="animation:none;opacity:1;transform:none;" onclick="this.closest('.overlay').remove()">Cerrar</button>
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
      <button class="btn-pirate btn-small btn-red" style="animation:none;opacity:1;transform:none;" onclick="this.closest('.overlay').remove()">Cerrar</button>
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
  const island_colors = ["#2d8a2d", "#8a6a30", "#2a5a9e", "#6a3a20", "#5a2a4a"];

  // Header
  const header = el("div", { className: "map-header" });
  const backBtn = el("button", {
    className: "btn-pirate btn-small btn-red",
    textContent: "← Menú",
    style: {
      animation: "none",
      opacity: "1",
      transform: "none",
      margin: "0",
      width: "auto",
    },
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
      style: { width: "100%", height: "100%", objectFit: "contain", imageRendering: "pixelated" },
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

/* ======================== ISLAND 1 – Catalejo (Title) ======================== */
ScreenManager.register("island1", (container) => {
  container.className = "screen active bg-island-green";
  AudioManager.playMusic("island");

  // Title bar
  container.appendChild(
    el("div", {
      className: "island-title-bar",
      textContent:
        "🔭 Isla del Catalejo – Encuentra el Título de Investigación",
    }),
  );

  // Content area
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

  const feedback = el("div", {
    className: "feedback info",
    textContent:
      "Usa el catalejo para enfocar el título de investigación correcto",
  });
  content.appendChild(feedback);

  // Zones
  const zones_data = [
    {
      text: "Plásticos\nen el mar",
      icon: "🌊",
      correct: true,
      bg: "linear-gradient(135deg, #1a5a3a, #0e3a25)",
    },
    {
      text: "Humo\nen fábricas",
      icon: "🏭",
      correct: false,
      bg: "linear-gradient(135deg, #4a3a2a, #30251a)",
    },
    {
      text: "Basura\nen calles",
      icon: "🏙",
      correct: false,
      bg: "linear-gradient(135deg, #3a3a4a, #252530)",
    },
  ];

  const zonesRow = el("div", {
    style: {
      display: "flex",
      gap: "1rem",
      marginTop: "1.5rem",
      width: "100%",
      maxWidth: "800px",
    },
  });

  let completed = false;

  zones_data.forEach((zone, idx) => {
    const btn = el("div", {
      className: "zone-btn",
      style: { background: zone.bg },
    });
    btn.appendChild(
      el("span", { className: "zone-icon", textContent: zone.icon }),
    );
    btn.appendChild(el("span", { textContent: zone.text.replace("\n", " ") }));

    btn.addEventListener("click", () => {
      if (completed || btn.classList.contains("wrong")) return;
      if (zone.correct) {
        btn.classList.add("correct");
        completed = true;
        feedback.className = "feedback correct";
        feedback.textContent =
          "¡Correcto! El título enfocado es sobre investigación marina.";
        AudioManager.playSFX("correct");

        // Show dialog then return
        Dialog.showSequence(
          [
            {
              name: "🧭 Capitán",
              text: "¡Excelente ojo, marinero! Has enfocado el tema correcto.",
            },
            {
              name: "🧭 Capitán",
              text: 'El título de investigación es: "Impacto de los plásticos en las especies marinas de la costa colombiana"',
            },
            {
              name: "🧭 Capitán",
              text: "Un buen título debe ser específico, claro y delimitar el alcance del estudio. ¡Primer fragmento obtenido!",
            },
          ],
          () => {
            AudioManager.playSFX("complete");
            GameProgress.complete_island(0);
            ScreenManager.show("worldmap");
          },
        );
      } else {
        btn.classList.add("wrong");
        GameProgress.record_error(0);
        screenShake();
        AudioManager.playSFX("wrong");
        feedback.className = "feedback wrong";
        feedback.textContent =
          "✖ Ese tema es muy general. Busca algo más específico sobre investigación marina.";
      }
    });
    zonesRow.appendChild(btn);
  });

  content.appendChild(zonesRow);

  // Catalejo following cursor
  const catalejo = el("img", {
    className: "catalejo-cursor",
    src: "assets/sprites/objects/catalejo.png",
    alt: "catalejo",
  });
  content.appendChild(catalejo);

  content.addEventListener("mousemove", (e) => {
    const rect = content.getBoundingClientRect();
    catalejo.style.left = e.clientX - rect.left - 25 + "px";
    catalejo.style.top = e.clientY - rect.top - 25 + "px";
  });

  // Back button
  const backBtn = el("button", {
    className: "btn-pirate btn-small btn-red",
    textContent: "← Volver al Mapa",
    style: {
      position: "absolute",
      top: "0.5rem",
      right: "0.5rem",
      animation: "none",
      opacity: "1",
      transform: "none",
      margin: "0",
      width: "auto",
      zIndex: "20",
    },
    onClick: () => ScreenManager.show("worldmap"),
  });
  content.appendChild(backBtn);

  container.appendChild(content);

  // Intro dialog
  Dialog.showSequence([
    {
      name: "🧭 Capitán",
      text: "¡Bienvenido a la Isla del Catalejo, marinero!",
    },
    {
      name: "🧭 Capitán",
      text: "Aquí aprenderás a identificar un buen título de investigación.",
    },
    {
      name: "🧭 Capitán",
      text: "Usa el catalejo para enfocar la zona correcta del mapa. ¡Solo una tiene el tema adecuado!",
    },
  ]);
});

/* ======================== ISLAND 2 – Árbol (Problem) ======================== */
ScreenManager.register("island2", (container) => {
  container.className = "screen active bg-cave";
  AudioManager.playMusic("island");

  container.appendChild(
    el("div", {
      className: "island-title-bar",
      textContent: "🌳 Isla del Árbol – Clasifica el Problema de Investigación",
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
    textContent: "Arrastra cada frase a la categoría correcta",
  });
  content.appendChild(feedback);

  // Items data
  const items = [
    { text: "Falta de educación ambiental", zone: "causas" },
    { text: "Uso excesivo de plástico", zone: "causas" },
    { text: "Alta concentración de plástico", zone: "problema" },
    { text: "Ingesta de microplásticos", zone: "problema" },
    { text: "Peces muriendo", zone: "consecuencias" },
    { text: "Daño al ecosistema", zone: "consecuencias" },
  ];

  const zoneDefs = [
    { id: "causas", name: "Causas", color: "rgba(100,60,20,0.6)", img: "assets/objects/cofre_causas.png" },
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
      draggable: "true",
    });
    d.dataset.zone = item.zone;
    d.dataset.text = item.text;

    d.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData(
        "text/plain",
        JSON.stringify({ zone: item.zone, text: item.text }),
      );
      d.classList.add("dragging");
    });
    d.addEventListener("dragend", () => d.classList.remove("dragging"));

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
    // Chest image for zone
    zone.appendChild(
      el("img", {
        src: zd.img,
        alt: zd.name,
        style: { width: "50px", height: "50px", objectFit: "contain", imageRendering: "pixelated", marginBottom: "0.3rem" },
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
      try {
        const data = JSON.parse(e.dataTransfer.getData("text/plain"));
        handleDrop(data, zd.id, itemsContainer, counter);
      } catch (err) {}
    });

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
      // Correct
      placed[targetZone].push(data.text);
      totalPlaced++;
      counter.textContent = `${placed[targetZone].length}/${maxPerZone}`;

      const placedEl = el("div", {
        className: "drag-item placed",
        textContent: data.text,
      });
      itemsContainer.appendChild(placedEl);

      // Remove from drag area
      const orig = dragArea.querySelector(`[data-text="${data.text}"]`);
      if (orig) orig.remove();

      feedback.className = "feedback correct";
      feedback.textContent = `✓ ¡Correcto! "${data.text}" bien clasificado.`;
      AudioManager.playSFX("correct");

      if (totalPlaced === 6) {
        handleIsland2Complete();
      }
    } else {
      // Wrong
      GameProgress.record_error(1);
      screenShake();
      AudioManager.playSFX("wrong");
      feedback.className = "feedback wrong";
      feedback.textContent = `✖ "${data.text}" no pertenece a esa categoría. Intenta otra.`;
    }
  }

  function handleIsland2Complete() {
    feedback.className = "feedback gold";
    feedback.textContent = "🌳✨ ¡Árbol del conocimiento completo!";
    Dialog.showSequence(
      [
        {
          name: "🦉 Sabio Búho",
          text: "¡Excelente trabajo clasificando el problema de investigación!",
        },
        {
          name: "🦉 Sabio Búho",
          text: "Todo problema tiene CAUSAS que lo originan, un PROBLEMA CENTRAL que describes, y CONSECUENCIAS que genera.",
        },
        {
          name: "🦉 Sabio Búho",
          text: "Comprender esta estructura te ayudará a plantear mejor tu investigación. ¡Segundo fragmento obtenido!",
        },
      ],
      () => {
        AudioManager.playSFX("complete");
        GameProgress.complete_island(1);
        ScreenManager.show("worldmap");
      },
    );
  }

  // Back button
  content.appendChild(
    el("button", {
      className: "btn-pirate btn-small btn-red",
      textContent: "← Volver",
      style: {
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        animation: "none",
        opacity: "1",
        transform: "none",
        margin: "0",
        width: "auto",
        zIndex: "20",
      },
      onClick: () => ScreenManager.show("worldmap"),
    }),
  );

  container.appendChild(content);

  Dialog.showSequence([
    {
      name: "🦉 Sabio Búho",
      text: "¡Bienvenido a la Isla del Árbol, joven investigador!",
    },
    {
      name: "🦉 Sabio Búho",
      text: "El árbol del conocimiento tiene tres raíces: Causas, Problema y Consecuencias.",
    },
    {
      name: "🦉 Sabio Búho",
      text: "Arrastra cada frase a la categoría correcta. ¡El tema es la contaminación plástica en los océanos!",
    },
  ]);
});

/* ======================== ISLAND 3 – Faro (Research Question) ======================== */
ScreenManager.register("island3", (container) => {
  container.className = "screen active bg-night";
  createStars(container, 30);
  AudioManager.playMusic("island");

  container.appendChild(
    el("div", {
      className: "island-title-bar",
      textContent: "🔦 Isla del Faro – Formula la Pregunta de Investigación",
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
    textContent: "Elige la palanca correcta para encender el faro",
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

  // Lever data
  const levers = [
    {
      label: "¿Cuánto?",
      question: "¿Cuánto plástico hay en los océanos?",
      correct: false,
      bg: "linear-gradient(135deg, #3a2a5a, #25183a)",
    },
    {
      label: "¿Por qué?",
      question:
        "¿Por qué los plásticos afectan a las especies marinas de la costa colombiana?",
      correct: true,
      bg: "linear-gradient(135deg, #2a4a3a, #183025)",
    },
    {
      label: "¿Cómo?",
      question: "¿Cómo se recicla el plástico?",
      correct: false,
      bg: "linear-gradient(135deg, #4a3a2a, #30251a)",
    },
  ];

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

        // Light up
        faroImg.src = "assets/sprites/objects/faro_encendido.png";
        lightBeam.classList.add("on");

        Dialog.showSequence(
          [
            {
              name: "💡 Guardafaro",
              text: "¡El faro se ha encendido con la pregunta correcta!",
            },
            {
              name: "💡 Guardafaro",
              text: `La pregunta de investigación es: "${lv.question}"`,
            },
            {
              name: "💡 Guardafaro",
              text: "Una buena pregunta de investigación debe ser específica, medible y relacionada directamente con el problema planteado. ¡Tercer fragmento obtenido!",
            },
          ],
          () => {
            AudioManager.playSFX("complete");
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

        // Flicker red
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
  content.appendChild(
    el("button", {
      className: "btn-pirate btn-small btn-red",
      textContent: "← Volver",
      style: {
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        animation: "none",
        opacity: "1",
        transform: "none",
        margin: "0",
        width: "auto",
        zIndex: "20",
      },
      onClick: () => ScreenManager.show("worldmap"),
    }),
  );

  container.appendChild(content);

  Dialog.showSequence([
    {
      name: "💡 Guardafaro",
      text: "¡Marinero, el faro está apagado y los barcos no pueden navegar!",
    },
    {
      name: "💡 Guardafaro",
      text: "Solo la pregunta de investigación correcta puede encenderlo.",
    },
    {
      name: "💡 Guardafaro",
      text: "Pasa el cursor sobre cada palanca para ver la pregunta, luego elige la correcta.",
    },
  ]);
});

/* ======================== ISLAND 4 – Escalera (Objectives) ======================== */
ScreenManager.register("island4", (container) => {
  container.className = "screen active bg-fortress";
  AudioManager.playMusic("island");

  container.appendChild(
    el("div", {
      className: "island-title-bar",
      textContent: "🪜 Isla de la Escalera – Ordena los Objetivos Específicos",
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
      <div style="font-size:0.9rem;">Analizar el impacto de los plásticos en las especies marinas de la costa colombiana.</div>`,
    }),
  );

  const feedback = el("div", {
    className: "feedback info",
    textContent: "Arrastra las llaves a los escalones en el orden correcto",
  });
  leftPanel.appendChild(feedback);

  // Keys data (correct order: Entrevistar=0, Analizar=1, Comparar=2)
  const keysData = [
    {
      id: 0,
      text: "Entrevistar a pescadores locales sobre cambios en fauna marina",
    },
    { id: 1, text: "Analizar muestras de agua para detectar microplásticos" },
    { id: 2, text: "Comparar zonas contaminadas vs. zonas protegidas" },
  ];
  const shuffledKeys = shuffle(keysData);

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
    const keyEl = el("div", { className: "key-item", draggable: "true" });
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

    keyEl.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", key.id.toString());
      keyEl.classList.add("dragging");
    });
    keyEl.addEventListener("dragend", () => keyEl.classList.remove("dragging"));

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

      // Remove key from any previous step
      for (let s = 0; s < 3; s++) {
        if (stepContents[s] === keyId) {
          stepContents[s] = null;
          const sz = stepZones[s];
          sz.querySelector("span:last-child").textContent = "";
        }
      }

      // Place key in this step
      stepContents[i] = keyId;
      contentArea.textContent = keysData[keyId].text;

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
    style: {
      animation: "none",
      opacity: "1",
      transform: "none",
      marginTop: "0.5rem",
      width: "auto",
    },
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
        stepZones.forEach((sz) => sz.classList.add("correct"));
        verifyBtn.disabled = true;

        doorImg.style.opacity = "1";
        doorImg.style.filter = "none";
        doorContainer.querySelector("div").textContent = "🔓 ¡Puerta abierta!";
        doorContainer.querySelector("div").style.color = "var(--success)";

        Dialog.showSequence(
          [
            {
              name: "🏰 Guardián",
              text: "¡La puerta se ha abierto! Has ordenado los objetivos correctamente.",
            },
            {
              name: "🏰 Guardián",
              text: "Primero RECOPILAR datos (entrevistar), luego ANALIZAR la información, y finalmente COMPARAR resultados.",
            },
            {
              name: "🏰 Guardián",
              text: "Los objetivos específicos deben seguir un orden lógico y ser medibles. ¡Cuarto fragmento obtenido!",
            },
          ],
          () => {
            AudioManager.playSFX("complete");
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
        // Reset steps — put keys back
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
  content.appendChild(
    el("button", {
      className: "btn-pirate btn-small btn-red",
      textContent: "← Volver",
      style: {
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        animation: "none",
        opacity: "1",
        transform: "none",
        margin: "0",
        width: "auto",
        zIndex: "20",
      },
      onClick: () => ScreenManager.show("worldmap"),
    }),
  );

  container.appendChild(content);

  Dialog.showSequence([
    {
      name: "🏰 Guardián",
      text: "¡Alto! Para abrir esta puerta necesitas ordenar los objetivos específicos.",
    },
    {
      name: "🏰 Guardián",
      text: "Cada llave representa un objetivo. Arrástralas a los escalones en el orden lógico.",
    },
    {
      name: "🏰 Guardián",
      text: "Piensa: ¿qué harías primero? ¿Recopilar, analizar o comparar?",
    },
  ]);
});

/* ======================== ISLAND 5 – Taberna (Justification) ======================== */
ScreenManager.register("island5", (container) => {
  container.className = "screen active bg-tavern";
  AudioManager.playMusic("island");

  container.appendChild(
    el("div", {
      className: "island-title-bar",
      textContent: "🍺 Isla de la Taberna – Justifica tu Investigación",
    }),
  );

  const content = el("div", {
    style: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      padding: "0.8rem",
      position: "relative",
      gap: "0.5rem",
    },
  });

  const feedback = el("div", {
    className: "feedback info",
    textContent:
      "Convence a los 3 piratas escépticos con los argumentos correctos",
  });
  content.appendChild(feedback);

  const counter = el("div", {
    className: "text-center",
    style: {
      fontFamily: "'Cinzel',serif",
      color: "var(--gold)",
      fontSize: "0.95rem",
    },
    textContent: "Piratas convencidos: 0/3",
  });
  content.appendChild(counter);

  // Pirates data
  const pirates = [
    {
      name: "Pirata Teórico",
      sprite: "assets/characters/npc_pirata_teorico.png",
      complaint: '"¿Para qué sirve esta investigación en la ciencia?"',
      correct:
        "Aporta nuevos datos sobre microplásticos que complementan estudios previos de biología marina.",
      wrong: [
        "Porque el profesor lo pidió como tarea.",
        "Para ganar dinero con la investigación.",
      ],
    },
    {
      name: "Pirata Indiferente",
      sprite: "assets/characters/npc_pirata_indiferente.png",
      complaint: '"¿A quién le importa? No afecta a nadie..."',
      correct:
        "Afecta a miles de familias costeras que dependen de la pesca para sobrevivir.",
      wrong: [
        "Tienes razón, probablemente no importa mucho.",
        "Solo les importa a los científicos aburridos.",
      ],
    },
    {
      name: "Tabernero",
      sprite: "assets/characters/npc_tabernero.png",
      complaint: '"¿Y esto para qué sirve en la práctica?"',
      correct:
        "Los resultados pueden usarse para crear políticas de protección costera y programas de limpieza.",
      wrong: [
        "No sirve para nada práctico, solo es teoría.",
        "Para escribir un artículo que nadie leerá.",
      ],
    },
  ];

  let convinced = 0;
  let activePirateIdx = -1;

  // Pirates cards row
  const cardsRow = el("div", {
    style: { display: "flex", gap: "0.5rem", justifyContent: "center" },
  });

  const pirateCards = [];

  pirates.forEach((pirate, idx) => {
    const card = el("div", {
      className: "pirate-card",
      style: { background: "rgba(50,35,20,0.8)" },
    });

    const img = el("img", {
      className: "pirate-icon",
      src: pirate.sprite,
      alt: pirate.name,
    });
    card.appendChild(img);
    card.appendChild(
      el("div", { className: "pirate-name", textContent: pirate.name }),
    );
    const complaintEl = el("div", {
      className: "pirate-complaint",
      textContent: pirate.complaint,
    });
    card.appendChild(complaintEl);

    const talkBtn = el("button", {
      className: "pirate-talk-btn",
      textContent: "💬 Hablar",
      onClick: () => showPirateOptions(idx),
    });
    card.appendChild(talkBtn);

    pirateCards.push({ card, complaintEl, talkBtn, convinced: false });
    cardsRow.appendChild(card);
  });
  content.appendChild(cardsRow);

  // Options panel
  const optionsPanel = el("div", {
    className: "panel-dark",
    style: { display: "none", marginTop: "0.3rem" },
  });
  content.appendChild(optionsPanel);

  function showPirateOptions(idx) {
    if (pirateCards[idx].convinced) return;
    activePirateIdx = idx;
    const pirate = pirates[idx];
    optionsPanel.style.display = "block";
    optionsPanel.innerHTML = "";
    optionsPanel.appendChild(
      el("div", {
        style: {
          fontFamily: "'Cinzel',serif",
          color: "var(--gold)",
          marginBottom: "0.5rem",
          fontSize: "0.9rem",
        },
        textContent: `Elige tu argumento para ${pirate.name}:`,
      }),
    );

    const allOptions = shuffle([
      { text: pirate.correct, correct: true },
      ...pirate.wrong.map((w) => ({ text: w, correct: false })),
    ]);

    allOptions.forEach((opt) => {
      const btn = el("button", {
        className: "option-btn",
        textContent: opt.text,
        onClick: () => handlePirateAnswer(idx, opt.correct),
      });
      optionsPanel.appendChild(btn);
    });
  }

  function handlePirateAnswer(idx, correct) {
    optionsPanel.style.display = "none";
    if (correct) {
      pirateCards[idx].convinced = true;
      pirateCards[idx].card.classList.add("convinced");
      pirateCards[idx].complaintEl.textContent = "¡Convencido! 👍";
      pirateCards[idx].talkBtn.disabled = true;
      pirateCards[idx].talkBtn.textContent = "✓ Convencido";
      convinced++;
      counter.textContent = `Piratas convencidos: ${convinced}/3`;
      feedback.className = "feedback correct";
      feedback.textContent = `✓ ¡${pirates[idx].name} ha sido convencido!`;
      AudioManager.playSFX("correct");

      if (convinced === 3) {
        handleIsland5Complete();
      }
    } else {
      GameProgress.record_error(4);
      screenShake();
      AudioManager.playSFX("wrong");
      feedback.className = "feedback wrong";
      feedback.textContent =
        "✖ Ese argumento no es convincente. ¡Intenta con otro!";
    }
  }

  function handleIsland5Complete() {
    feedback.className = "feedback gold";
    feedback.textContent = "🍺✨ ¡Todos los piratas están convencidos!";
    Dialog.showSequence(
      [
        {
          name: "🍺 Tabernero",
          text: "¡Increíble! Has convencido a todos en la taberna.",
        },
        {
          name: "🍺 Tabernero",
          text: "La JUSTIFICACIÓN tiene tres pilares: relevancia TEÓRICA (aporta al conocimiento), SOCIAL (beneficia a la comunidad) y PRÁCTICA (tiene aplicaciones reales).",
        },
        {
          name: "🍺 Tabernero",
          text: "¡Último fragmento obtenido! Ahora puedes buscar el tesoro.",
        },
      ],
      () => {
        AudioManager.playSFX("complete");
        GameProgress.complete_island(4);
        ScreenManager.show("worldmap");
      },
    );
  }

  // Back
  content.appendChild(
    el("button", {
      className: "btn-pirate btn-small btn-red",
      textContent: "← Volver",
      style: {
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        animation: "none",
        opacity: "1",
        transform: "none",
        margin: "0",
        width: "auto",
        zIndex: "20",
      },
      onClick: () => ScreenManager.show("worldmap"),
    }),
  );

  container.appendChild(content);

  Dialog.showSequence([
    { name: "🍺 Tabernero", text: "¡Bienvenido a mi taberna, investigador!" },
    {
      name: "🍺 Tabernero",
      text: "Hay tres piratas escépticos que no creen en tu investigación.",
    },
    {
      name: "🍺 Tabernero",
      text: "Habla con cada uno y elige el argumento correcto para convencerlos. ¡Demuestra por qué tu investigación vale la pena!",
    },
  ]);
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

    // Flash effect
    const flash = el("div", { className: "golden-flash" });
    chestContainer.appendChild(flash);
    setTimeout(() => flash.remove(), 1200);

    chestImg.src = "assets/sprites/objects/cofre_abierto.png";
    chestContainer.style.animation = "none";
    label.textContent = "¡El tesoro ha sido revelado!";
    label.style.color = "var(--gold)";

    await sleep(800);

    // Scroll with summary
    const scroll = el("div", {
      className: "panel-parchment",
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
        <strong style="color:#8a5a20;">🔭 Título de Investigación:</strong><br>
        "Impacto de los plásticos en las especies marinas de la costa colombiana"
      </div>
      <div style="margin-bottom:0.6rem;">
        <strong style="color:#8a5a20;">🌳 Planteamiento del Problema:</strong><br>
        <em>Causas:</em> Falta de educación ambiental, uso excesivo de plástico.<br>
        <em>Problema:</em> Alta concentración de plásticos afectando fauna marina.<br>
        <em>Consecuencias:</em> Muerte de peces, daño al ecosistema.
      </div>
      <div style="margin-bottom:0.6rem;">
        <strong style="color:#8a5a20;">🔦 Pregunta de Investigación:</strong><br>
        "¿Por qué los plásticos afectan a las especies marinas de la costa colombiana?"
      </div>
      <div style="margin-bottom:0.6rem;">
        <strong style="color:#8a5a20;">🪜 Objetivos Específicos:</strong><br>
        1. Entrevistar a pescadores locales.<br>
        2. Analizar muestras de agua.<br>
        3. Comparar zonas contaminadas vs. protegidas.
      </div>
      <div style="margin-bottom:0.6rem;">
        <strong style="color:#8a5a20;">🍺 Justificación:</strong><br>
        <em>Teórica:</em> Aporta datos sobre microplásticos a la biología marina.<br>
        <em>Social:</em> Beneficia a familias costeras dependientes de la pesca.<br>
        <em>Práctica:</em> Base para políticas de protección costera.
      </div>
      <div style="text-align:center;margin-top:0.8rem;">
        <strong style="color:#8a5a20;">⭐ Estrellas obtenidas: ${GameProgress.get_total_stars()}/15</strong>
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
        style: {
          animation: "none",
          opacity: "1",
          transform: "none",
          width: "auto",
        },
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
        style: {
          animation: "none",
          opacity: "1",
          transform: "none",
          width: "auto",
        },
        onClick: () => ScreenManager.show("menu"),
      }),
    );
    content.appendChild(btnRow);
  });

  container.appendChild(content);
});
