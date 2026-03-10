/* ============================================================
   PIRATAS DEL CONOCIMIENTO – Web Version
   Core game engine: state, transitions, dialog, utilities
   ============================================================ */

/* ---------- GAME PROGRESS (Singleton state) ---------- */
const GameProgress = {
  fragments_collected: 0,
  islands_completed: [false, false, false, false, false],
  island_errors: [0, 0, 0, 0, 0],
  island_stars: [0, 0, 0, 0, 0],
  island_names: [
    "La Brújula de\nBarbanegra (Título)",
    "Cueva de los\nCondenados (Problema)",
    "Ojo del\nKraken (Pregunta)",
    "Peldaños\nMalditos (Objetivos)",
    "Puerto del Ron\nSangriento (Justificación)",
  ],
  selected_theme: null,
  selected_population: null,
  generated_title: null,

  complete_island(index) {
    if (this.islands_completed[index]) return;
    this.islands_completed[index] = true;
    this.fragments_collected++;
    this.island_stars[index] = this.calculate_stars(index);
    this.save_game();
  },

  is_island_unlocked(index) {
    if (index === 0) return true;
    return this.islands_completed[index - 1];
  },

  calculate_stars(index) {
    const err = this.island_errors[index];
    if (err === 0) return 3;
    if (err === 1) return 2;
    return 1;
  },

  record_error(index) {
    this.island_errors[index]++;
  },

  get_star_text(index) {
    const s = this.island_stars[index];
    return "★".repeat(s) + "☆".repeat(3 - s);
  },

  get_total_stars() {
    return this.island_stars.reduce((a, b) => a + b, 0);
  },

  all_islands_complete() {
    return this.islands_completed.every((c) => c);
  },

  get_rank() {
    const s = this.get_total_stars();
    if (s >= 14) return { name: "Almirante Supremo", icon: "👑" };
    if (s >= 11) return { name: "Capitán Legendario", icon: "🏴‍☠️" };
    if (s >= 8) return { name: "Navegante Intrépido", icon: "⚓" };
    if (s >= 5) return { name: "Marinero Audaz", icon: "⛵" };
    if (s >= 1) return { name: "Grumete Novato", icon: "🪣" };
    return { name: "Polizón", icon: "🐀" };
  },

  reset() {
    this.fragments_collected = 0;
    this.islands_completed = [false, false, false, false, false];
    this.island_errors = [0, 0, 0, 0, 0];
    this.island_stars = [0, 0, 0, 0, 0];
    this.selected_theme = null;
    this.selected_population = null;
    this.generated_title = null;
  },

  save_game() {
    const data = {
      fragments_collected: this.fragments_collected,
      islands_completed: [...this.islands_completed],
      island_errors: [...this.island_errors],
      island_stars: [...this.island_stars],
      selected_theme: this.selected_theme,
      selected_population: this.selected_population,
      generated_title: this.generated_title,
    };
    try {
      localStorage.setItem("pirate_research_save", JSON.stringify(data));
    } catch (e) {
      console.warn("Could not save game:", e);
    }
  },

  load_game() {
    try {
      const raw = localStorage.getItem("pirate_research_save");
      if (!raw) return false;
      const d = JSON.parse(raw);
      this.fragments_collected = d.fragments_collected || 0;
      this.islands_completed = d.islands_completed || [
        false,
        false,
        false,
        false,
        false,
      ];
      this.island_errors = d.island_errors || [0, 0, 0, 0, 0];
      this.island_stars = d.island_stars || [0, 0, 0, 0, 0];
      this.selected_theme = d.selected_theme || null;
      this.selected_population = d.selected_population || null;
      this.generated_title = d.generated_title || null;
      return true;
    } catch (e) {
      console.warn("Could not load game:", e);
      return false;
    }
  },

  has_save() {
    return localStorage.getItem("pirate_research_save") !== null;
  },

  delete_save() {
    localStorage.removeItem("pirate_research_save");
  },
};

/* ---------- SCENE TRANSITION ---------- */
const SceneTransition = {
  overlay: null,
  init() {
    this.overlay = document.getElementById("transition-overlay");
  },
  async fadeTo(callback) {
    this.overlay.classList.add("fade-out");
    await sleep(500);
    callback();
    await sleep(50);
    this.overlay.classList.remove("fade-out");
    await sleep(500);
  },
};

/* ---------- SCREEN MANAGER ---------- */
const ScreenManager = {
  currentScreen: null,
  screens: {},
  _screenEls: null,

  _getScreenEls() {
    if (!this._screenEls)
      this._screenEls = document.querySelectorAll(".screen");
    return this._screenEls;
  },

  register(name, renderFn) {
    this.screens[name] = renderFn;
  },

  async show(name) {
    await SceneTransition.fadeTo(() => {
      _touchDropTargets = [];
      this._getScreenEls().forEach((s) => {
        s.classList.remove("active");
        s.innerHTML = "";
      });
      const container = document.getElementById("screen-" + name);
      if (container && this.screens[name]) {
        this.screens[name](container);
        container.classList.add("active");
      }
      this.currentScreen = name;
    });
  },

  showImmediate(name) {
    _touchDropTargets = [];
    this._getScreenEls().forEach((s) => {
      s.classList.remove("active");
      s.innerHTML = "";
    });
    const container = document.getElementById("screen-" + name);
    if (container && this.screens[name]) {
      this.screens[name](container);
      container.classList.add("active");
    }
    this.currentScreen = name;
  },
};

/* ---------- DIALOG SYSTEM ---------- */
const Dialog = {
  box: null,
  nameEl: null,
  textEl: null,
  continueEl: null,
  queue: [],
  currentText: "",
  charIndex: 0,
  timer: null,
  revealing: false,
  callback: null,

  init() {
    this.box = document.getElementById("dialog-box");
    this.nameEl = this.box.querySelector(".dialog-name");
    this.textEl = this.box.querySelector(".dialog-text");
    this.continueEl = this.box.querySelector(".dialog-continue");

    this.box.addEventListener("click", (e) => {
      e.stopPropagation();
      this.advance();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") this.advance();
    });
    /* Click anywhere also advances dialog (but buttons use stopPropagation when needed) */
    document.addEventListener("click", () => {
      if (this.box.classList.contains("visible")) this.advance();
    });
  },

  showSequence(messages, cb) {
    // messages: [{name, text}, ...]
    this.queue = [...messages];
    this.callback = cb || null;
    this.box.classList.add("visible");
    this.nextMessage();
  },

  nextMessage() {
    if (this.queue.length === 0) {
      this.hide();
      if (this.callback) this.callback();
      return;
    }
    const msg = this.queue.shift();
    this.nameEl.textContent = msg.name || "";
    this.textEl.textContent = "";
    this.continueEl.classList.remove("visible");
    this.currentText = msg.text;
    this.charIndex = 0;
    this.revealing = true;
    clearInterval(this.timer);
    this.timer = setInterval(() => this.revealChar(), 30);
  },

  revealChar() {
    if (this.charIndex >= this.currentText.length) {
      clearInterval(this.timer);
      this.revealing = false;
      this.continueEl.classList.add("visible");
      return;
    }
    this.charIndex++;
    this.textEl.textContent = this.currentText.substring(0, this.charIndex);
  },

  advance() {
    if (!this.box.classList.contains("visible")) return;
    if (this.revealing) {
      clearInterval(this.timer);
      this.textEl.textContent = this.currentText;
      this.revealing = false;
      this.continueEl.classList.add("visible");
    } else {
      this.nextMessage();
    }
  },

  hide() {
    this.box.classList.remove("visible");
    clearInterval(this.timer);
    this.revealing = false;
  },
};

/* ---------- SCREEN SHAKE ---------- */
function screenShake() {
  const gc = document.getElementById("game-container");
  gc.classList.remove("shake");
  void gc.offsetWidth; // reflow
  gc.classList.add("shake");
  setTimeout(() => gc.classList.remove("shake"), 500);
}

/* ---------- PARTICLES HELPER ---------- */
function createStars(container, count = 40) {
  const wrapper = document.createElement("div");
  wrapper.className = "stars-container";
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.className = "star-particle";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.setProperty("--dur", 2 + Math.random() * 4 + "s");
    s.style.setProperty(
      "--max-opacity",
      (0.4 + Math.random() * 0.6).toFixed(2),
    );
    s.style.animationDelay = Math.random() * 5 + "s";
    wrapper.appendChild(s);
  }
  container.appendChild(wrapper);
}

function createBubbles(container, count = 15) {
  const wrapper = document.createElement("div");
  wrapper.className = "stars-container";
  for (let i = 0; i < count; i++) {
    const b = document.createElement("div");
    b.className = "bubble-particle";
    b.style.left = Math.random() * 100 + "%";
    b.style.setProperty("--dur", 4 + Math.random() * 6 + "s");
    b.style.animationDelay = Math.random() * 8 + "s";
    wrapper.appendChild(b);
  }
  container.appendChild(wrapper);
}

function createWaves(container, count = 8) {
  for (let i = 0; i < count; i++) {
    const w = document.createElement("div");
    w.className = "wave-line";
    w.style.top = 50 + i * 6 + "%";
    w.style.animationDelay = i * 0.3 + "s";
    w.style.animationDuration = 3 + Math.random() * 2 + "s";
    container.appendChild(w);
  }
}

/* ---------- CONFETTI ---------- */
function createConfetti(container, count = 40) {
  const colors = [
    "#ffd700",
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#f9ca24",
    "#ff9ff3",
    "#54a0ff",
  ];
  const wrapper = document.createElement("div");
  wrapper.className = "stars-container";
  wrapper.style.zIndex = "300";
  for (let i = 0; i < count; i++) {
    const c = document.createElement("div");
    c.className = "confetti-particle";
    c.style.left = 40 + Math.random() * 20 + "%";
    c.style.top = 30 + Math.random() * 10 + "%";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.setProperty("--fall-dur", 1.5 + Math.random() * 1.5 + "s");
    c.style.setProperty("--fall-y", 200 + Math.random() * 300 + "px");
    c.style.setProperty("--drift-x", (Math.random() - 0.5) * 200 + "px");
    c.style.setProperty("--spin", Math.random() * 720 - 360 + "deg");
    c.style.setProperty("--delay", Math.random() * 0.4 + "s");
    c.style.width = 5 + Math.random() * 6 + "px";
    c.style.height = 4 + Math.random() * 5 + "px";
    wrapper.appendChild(c);
  }
  container.appendChild(wrapper);
  setTimeout(() => wrapper.remove(), 3500);
}

/* ---------- AMBIENT PARTICLES ---------- */
function createDust(container, count = 20) {
  const wrapper = document.createElement("div");
  wrapper.className = "stars-container";
  for (let i = 0; i < count; i++) {
    const d = document.createElement("div");
    d.className = "dust-particle";
    d.style.left = Math.random() * 100 + "%";
    d.style.top = 30 + Math.random() * 60 + "%";
    d.style.setProperty("--dur", 5 + Math.random() * 5 + "s");
    d.style.setProperty("--delay", Math.random() * 6 + "s");
    wrapper.appendChild(d);
  }
  container.appendChild(wrapper);
}

function createEmbers(container, count = 15) {
  const wrapper = document.createElement("div");
  wrapper.className = "stars-container";
  for (let i = 0; i < count; i++) {
    const e = document.createElement("div");
    e.className = "ember-particle";
    e.style.left = 20 + Math.random() * 60 + "%";
    e.style.bottom = "5%";
    e.style.setProperty("--dur", 3 + Math.random() * 3 + "s");
    e.style.setProperty("--delay", Math.random() * 4 + "s");
    e.style.setProperty("--drift", (Math.random() - 0.5) * 30 + "px");
    wrapper.appendChild(e);
  }
  container.appendChild(wrapper);
}

function createLeaves(container, count = 10) {
  const wrapper = document.createElement("div");
  wrapper.className = "stars-container";
  for (let i = 0; i < count; i++) {
    const l = document.createElement("div");
    l.className = "leaf-particle";
    l.style.left = Math.random() * 100 + "%";
    l.style.top = "-10px";
    l.style.setProperty("--dur", 6 + Math.random() * 4 + "s");
    l.style.setProperty("--delay", Math.random() * 8 + "s");
    l.style.setProperty("--drift", (Math.random() - 0.5) * 60 + "px");
    wrapper.appendChild(l);
  }
  container.appendChild(wrapper);
}

/* ---------- FLOATING SCORE TEXT ---------- */
function showFloatingText(container, text, x, y, positive = true) {
  const ft = document.createElement("div");
  ft.className = "floating-score " + (positive ? "positive" : "negative");
  ft.textContent = text;
  ft.style.left = x + "px";
  ft.style.top = y + "px";
  container.appendChild(ft);
  setTimeout(() => ft.remove(), 1300);
}

/* ---------- HELPERS ---------- */
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function el(tag, attrs = {}, children = []) {
  const e = document.createElement(tag);
  for (const [key, val] of Object.entries(attrs)) {
    if (key === "className") e.className = val;
    else if (key === "textContent") e.textContent = val;
    else if (key === "innerHTML") e.innerHTML = val;
    else if (key.startsWith("on"))
      e.addEventListener(key.slice(2).toLowerCase(), val);
    else if (key === "style" && typeof val === "object")
      Object.assign(e.style, val);
    else e.setAttribute(key, val);
  }
  if (typeof children === "string") e.textContent = children;
  else
    children.forEach((c) => {
      if (typeof c === "string") e.appendChild(document.createTextNode(c));
      else if (c) e.appendChild(c);
    });
  return e;
}

function createBackButton(targetScreen = "worldmap") {
  return el("button", {
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
    onClick: () => ScreenManager.show(targetScreen),
  });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- SHARED STYLE CONSTANTS ---------- */
const NO_ANIM = { animation: "none", opacity: "1", transform: "none" };

/* ---------- DRAG & DROP HELPERS ---------- */
/* Touch state shared across drag helpers */
let _touchDragData = null;
let _touchGhost = null;
let _touchDropTargets = [];

function makeDraggable(elem, getData) {
  /* Desktop: HTML5 Drag API */
  elem.draggable = true;
  elem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(getData()));
    elem.classList.add("dragging");
  });
  elem.addEventListener("dragend", () => elem.classList.remove("dragging"));

  /* Mobile: Touch events */
  elem.addEventListener(
    "touchstart",
    (e) => {
      if (elem.style.display === "none") return;
      e.preventDefault();
      const touch = e.touches[0];
      _touchDragData = { data: getData(), sourceElem: elem };
      elem.classList.add("dragging");

      // Create visual ghost
      _touchGhost = elem.cloneNode(true);
      _touchGhost.className = elem.className + " touch-drag-ghost";
      _touchGhost.classList.remove("dragging");
      _touchGhost.style.position = "fixed";
      _touchGhost.style.left = touch.clientX + "px";
      _touchGhost.style.top = touch.clientY + "px";
      _touchGhost.style.pointerEvents = "none";
      _touchGhost.style.zIndex = "500";
      _touchGhost.style.opacity = "0.85";
      _touchGhost.style.transform = "translate(-50%, -50%) scale(1.05)";
      _touchGhost.style.maxWidth = "200px";
      document.body.appendChild(_touchGhost);
    },
    { passive: false },
  );

  elem.addEventListener(
    "touchmove",
    (e) => {
      if (!_touchGhost) return;
      e.preventDefault();
      const touch = e.touches[0];
      _touchGhost.style.left = touch.clientX + "px";
      _touchGhost.style.top = touch.clientY + "px";

      // Highlight drop zone under finger
      _touchDropTargets.forEach((t) => {
        const rect = t.zone.getBoundingClientRect();
        if (
          touch.clientX >= rect.left &&
          touch.clientX <= rect.right &&
          touch.clientY >= rect.top &&
          touch.clientY <= rect.bottom
        ) {
          t.zone.classList.add("drag-over");
        } else {
          t.zone.classList.remove("drag-over");
        }
      });
    },
    { passive: false },
  );

  elem.addEventListener("touchend", (e) => {
    if (!_touchDragData) return;
    elem.classList.remove("dragging");

    if (_touchGhost) {
      _touchGhost.remove();
      _touchGhost = null;
    }

    // Find which drop target the touch ended on
    const touch = e.changedTouches[0];
    let dropped = false;
    for (const t of _touchDropTargets) {
      const rect = t.zone.getBoundingClientRect();
      t.zone.classList.remove("drag-over");
      if (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      ) {
        try {
          t.onDrop(
            typeof _touchDragData.data === "object"
              ? _touchDragData.data
              : JSON.parse(JSON.stringify(_touchDragData.data)),
          );
        } catch (err) {
          console.warn("Touch drop error:", err);
        }
        dropped = true;
        break;
      }
    }
    _touchDragData = null;
  });
}

function makeDropTarget(zone, onDrop) {
  /* Register for touch system */
  _touchDropTargets.push({ zone, onDrop });

  /* Desktop: standard drag events */
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.classList.add("drag-over");
  });
  zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("drag-over");
    try {
      onDrop(JSON.parse(e.dataTransfer.getData("text/plain")));
    } catch (err) {
      console.warn("Drop parse error:", err);
    }
  });
}

/* ---------- AUDIO MANAGER ---------- */
const AudioManager = {
  music: null,
  currentTrack: null,
  musicVolume: 0.4,
  sfxVolume: 0.6,
  muted: false,

  trackSources: {
    menu: "assets/audio/music_menu.mp3",
    map: "assets/audio/music_map.ogg",
    island: "assets/audio/music_island.mp3",
    victory: "assets/audio/music_victory.mp3",
  },

  sfxSources: {
    click: "assets/audio/sfx_click.mp3",
    correct: "assets/audio/sfx_correct.mp3",
    wrong: "assets/audio/sfx_wrong.mp3",
    complete: "assets/audio/sfx_complete.mp3",
  },

  // Preloaded audio elements
  _musicCache: {},
  _sfxCache: {},

  preload() {
    // Preload music tracks
    for (const [name, src] of Object.entries(this.trackSources)) {
      const audio = new Audio();
      audio.preload = "auto";
      audio.src = src;
      audio.loop = true;
      this._musicCache[name] = audio;
    }
    // Preload SFX (one master copy per sound)
    for (const [name, src] of Object.entries(this.sfxSources)) {
      const audio = new Audio();
      audio.preload = "auto";
      audio.src = src;
      this._sfxCache[name] = audio;
    }
  },

  playMusic(trackName) {
    if (this.currentTrack === trackName) return;
    this.stopMusic();
    const audio = this._musicCache[trackName];
    if (!audio) return;
    audio.volume = this.muted ? 0 : this.musicVolume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
    this.music = audio;
    this.currentTrack = trackName;
  },

  stopMusic() {
    if (this.music) {
      this.music.pause();
      this.music.currentTime = 0;
      this.music = null;
    }
    this.currentTrack = null;
  },

  playSFX(name) {
    const master = this._sfxCache[name];
    if (!master || this.muted) return;
    // Clone allows overlapping sounds without creating from scratch
    const clone = master.cloneNode();
    clone.volume = this.sfxVolume;
    clone.play().catch(() => {});
  },

  toggleMute() {
    this.muted = !this.muted;
    if (this.music) {
      this.music.volume = this.muted ? 0 : this.musicVolume;
    }
    return this.muted;
  },
};

/* ---------- IMAGE PRELOADER ---------- */
function preloadImages(paths) {
  paths.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  SceneTransition.init();
  Dialog.init();
  AudioManager.preload();
  preloadImages([
    "assets/ui/sello_completado.png",
    "assets/ui/candado.png",
    "assets/objects/cofre_causas.png",
    "assets/sprites/objects/faro_apagado.png",
    "assets/sprites/objects/faro_encendido.png",
    "assets/sprites/objects/llave.png",
    "assets/sprites/objects/puerta_abierta.png",
    "assets/sprites/objects/cofre_cerrado.png",
    "assets/sprites/objects/cofre_abierto.png",
    ...Array.from(
      { length: 5 },
      (_, i) => `assets/objects/island_${i + 1}.png`,
    ),
  ]);
  ScreenManager.showImmediate("menu");
});
