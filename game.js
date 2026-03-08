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

  reset() {
    this.fragments_collected = 0;
    this.islands_completed = [false, false, false, false, false];
    this.island_errors = [0, 0, 0, 0, 0];
    this.island_stars = [0, 0, 0, 0, 0];
    this.selected_theme = null;
    this.generated_title = null;
  },

  save_game() {
    const data = {
      fragments_collected: this.fragments_collected,
      islands_completed: [...this.islands_completed],
      island_errors: [...this.island_errors],
      island_stars: [...this.island_stars],
      selected_theme: this.selected_theme,
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

  register(name, renderFn) {
    this.screens[name] = renderFn;
  },

  async show(name) {
    await SceneTransition.fadeTo(() => {
      // hide all
      document.querySelectorAll(".screen").forEach((s) => {
        s.classList.remove("active");
        s.innerHTML = "";
      });
      // render new
      const container = document.getElementById("screen-" + name);
      if (container && this.screens[name]) {
        this.screens[name](container);
        container.classList.add("active");
      }
      this.currentScreen = name;
    });
  },

  /* Immediate show, no transition (first load) */
  showImmediate(name) {
    document.querySelectorAll(".screen").forEach((s) => {
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

/* ---------- AUDIO MANAGER ---------- */
const AudioManager = {
  music: null,
  currentTrack: null,
  musicVolume: 0.4,
  sfxVolume: 0.6,
  muted: false,

  tracks: {
    menu: "assets/audio/music_menu.mp3",
    map: "assets/audio/music_map.ogg",
    island: "assets/audio/music_island.mp3",
    victory: "assets/audio/music_victory.mp3",
  },

  sfx: {
    click: "assets/audio/sfx_click.mp3",
    correct: "assets/audio/sfx_correct.mp3",
    wrong: "assets/audio/sfx_wrong.mp3",
    complete: "assets/audio/sfx_complete.mp3",
  },

  playMusic(trackName) {
    if (this.currentTrack === trackName) return;
    this.stopMusic();
    const src = this.tracks[trackName];
    if (!src) return;
    this.music = new Audio(src);
    this.music.loop = true;
    this.music.volume = this.muted ? 0 : this.musicVolume;
    this.music.play().catch(() => {});
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
    const src = this.sfx[name];
    if (!src || this.muted) return;
    const audio = new Audio(src);
    audio.volume = this.sfxVolume;
    audio.play().catch(() => {});
  },

  toggleMute() {
    this.muted = !this.muted;
    if (this.music) {
      this.music.volume = this.muted ? 0 : this.musicVolume;
    }
    return this.muted;
  },
};

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  SceneTransition.init();
  Dialog.init();
  ScreenManager.showImmediate("menu");
});
