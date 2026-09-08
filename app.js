const $ = (id) => document.getElementById(id);

const bootScreen = $("bootScreen");
const bootText = $("bootText");
const enterRepoBtn = $("enterRepoBtn");
const fileModal = $("fileModal");
const modalTitle = $("modalTitle");
const modalBody = $("modalBody");
const bgMusic = $("bgMusic");
const musicBtn = $("musicBtn");

function formatDate(dateString) {
  const d = new Date(dateString + "T00:00:00");
  return d.toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function calculateDays() {
  const start = new Date(CONFIG.relationshipStart + "T00:00:00");
  const now = new Date();
  return Math.max(0, Math.floor((now - start) / 86400000));
}

function calculateYears() {
  const start = new Date(CONFIG.relationshipStart + "T00:00:00");
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const anniversaryThisYear = new Date(now.getFullYear(), start.getMonth(), start.getDate());
  if (now < anniversaryThisYear) years--;
  return Math.max(0, years);
}

function applyConfig() {
  document.title = `our-story | ${CONFIG.ownerName} & ${CONFIG.partnerName}`;
  $("headerOwner").textContent = CONFIG.ownerName.toLowerCase();
  $("partnerNameInline").textContent = CONFIG.partnerName;
  $("heroText").textContent = CONFIG.heroText;
  $("readmeIntro").textContent = CONFIG.readme.intro;
  $("readmeBody").textContent = CONFIG.readme.body;
  $("readmeQuote").textContent = CONFIG.readme.quote;
  $("versionBadge").textContent = CONFIG.version;
  $("footerVersion").textContent = `v${CONFIG.version}`;
  $("yearsBadge").textContent = calculateYears();
  $("dayCounter").textContent = `${calculateDays()} días`;
  $("dateLabel").textContent = `Desde el ${formatDate(CONFIG.relationshipStart)}`;
  $("lastCommit").textContent = `Último commit: versión ${CONFIG.version}`;

  renderFiles();
  renderGallery();
  renderTimeline();

  if (CONFIG.musicFile) {
    bgMusic.src = CONFIG.musicFile;
    musicBtn.classList.remove("hidden");
  } else {
    musicBtn.classList.add("hidden");
  }
}

function renderFiles() {
  const files = [
    ["📄 README.md", "Descripción del proyecto", "ahora", "README.md"],
    ["📄 first_commit.md", "Cómo comenzó todo", "hace años", "first_commit.md"],
    ["{} memories.json", "Recuerdos guardados", "actualizado", "memories.json"],
    ["🌍 travels.md", "Viajes realizados", "en progreso", "travels.md"],
    ["🛠 bugs_fixed.md", "Problemas resueltos juntos", "resuelto", "bugs_fixed.md"],
    ["💗 reasons_I_love_you.txt", "Razones para elegirte", "siempre", "reasons_I_love_you.txt"],
    ["🗺 future_plans.md", "Roadmap de nuestra historia", "próximamente", "future_plans.md"],
    ["▶ forever.exe", "Compilar nuestro futuro", "listo", "forever.exe"]
  ];

  $("fileList").innerHTML = files.map(([name,note,time,key]) => `
    <button class="file-row" data-file="${key}">
      <span class="file-name">${name}</span>
      <span class="file-note">${note}</span>
      <span class="file-time">${time}</span>
    </button>
  `).join("");

  document.querySelectorAll("[data-file]").forEach(btn => {
    btn.addEventListener("click", () => openFile(btn.dataset.file));
  });
}

function getFileContent(name) {
  if (name === "README.md") {
    return `# our-story ❤️

Propietaria: ${CONFIG.ownerName}
Compañero de proyecto: ${CONFIG.partnerName}
Versión actual: ${CONFIG.version}
Estado: En desarrollo constante

${CONFIG.readme.intro}

${CONFIG.readme.body}

${CONFIG.readme.quote}`;
  }

  if (name === "first_commit.md") {
    return `# Initial Commit

Fecha: ${formatDate(CONFIG.relationshipStart)}

+ Dos personas comenzaron una historia.
+ Nació una ilusión.
+ Empezaron los primeros recuerdos.
+ Se creó un nuevo lugar seguro.

Resultado:
✔ Proyecto inicializado correctamente.`;
  }

  if (name === "memories.json") {
    return JSON.stringify({
      primer_recuerdo: CONFIG.memories.primerRecuerdo,
      momento_divertido: CONFIG.memories.momentoDivertido,
      comida_favorita_juntos: CONFIG.memories.comidaFavorita,
      viaje_favorito: CONFIG.memories.viajeFavorito,
      frase_especial: CONFIG.memories.fraseEspecial,
      amor: "en actualización permanente"
    }, null, 2);
  }

  if (name === "travels.md") {
    return `# Travel Log 🌍

Viajes realizados:

${CONFIG.travels.map(x => `✔ ${x}`).join("\n")}

Próximos destinos:

□ Un lugar nuevo
□ Una aventura inesperada
□ Un restaurante pendiente
□ Cualquier lugar, siempre que sea contigo

Destino favorito:
Contigo.`;
  }

  if (name === "bugs_fixed.md") {
    return `# Bugs corregidos

BUG #001
Malentendidos.
STATUS: Fixed hablando con sinceridad.

BUG #002
Días difíciles.
STATUS: Fixed apoyándonos.

BUG #003
Extrañarnos demasiado.
STATUS: Solución temporal: mensajes.
STATUS: Solución definitiva: abrazos.

Conclusión:
No existe error que no podamos enfrentar si seguimos trabajando en equipo.`;
  }

  if (name === "reasons_I_love_you.txt") {
    return CONFIG.reasons.map((r, i) => `${String(i + 1).padStart(2, "0")}. ${r}`).join("\n");
  }

  if (name === "future_plans.md") {
    return `# Roadmap

${CONFIG.futurePlans.map(x => `□ ${x}`).join("\n")}

Long Term Support:
□ Seguir cuidándonos.
□ Seguir eligiéndonos.
□ Seguir creciendo juntos.

Release final:
No programado. ❤️`;
  }

  return "";
}

function openFile(name) {
  modalTitle.textContent = name;

  if (name === "forever.exe") {
    modalBody.innerHTML = `
      <div id="finalTerminal" class="terminal">C:\\our-story> forever.exe\n\n</div>
      <button id="mergeBtn" class="primary-btn hidden">git merge forever ❤️</button>
      <div id="finalCard" class="final-card hidden">
        <h2>${CONFIG.finalMessage.title}</h2>
        <img src="foto_final.png" alt="Nuestra foto final" class="final-photo">
        <p>${CONFIG.finalMessage.line1}</p>
        <p><strong>${CONFIG.finalMessage.line2}</strong></p>
        <p>${CONFIG.finalMessage.line3}</p>
        <p><strong>${CONFIG.finalMessage.question}</strong></p>
      </div>
    `;
    fileModal.classList.add("show");
    runFinalTerminal();
    return;
  }

  modalBody.textContent = getFileContent(name);
  fileModal.classList.add("show");
}

function runFinalTerminal() {
  const terminal = $("finalTerminal");
  const mergeBtn = $("mergeBtn");
  const lines = [
    "Inicializando nuestra historia...",
    "Cargando recuerdos... 20%",
    "Procesando abrazos... 45%",
    "Verificando compatibilidad... 75%",
    "Compilando sueños compartidos... 95%",
    "Build successful ❤️",
    "",
    `Después de ${calculateYears()} años, sigo eligiéndote.`,
    CONFIG.finalMessage.question
  ];

  let i = 0;
  const timer = setInterval(() => {
    terminal.textContent += lines[i] + "\n";
    terminal.scrollTop = terminal.scrollHeight;
    i++;
    if (i === lines.length) {
      clearInterval(timer);
      mergeBtn.classList.remove("hidden");
      mergeBtn.addEventListener("click", () => {
        mergeBtn.classList.add("hidden");
        $("finalCard").classList.remove("hidden");
        createHearts();
      }, { once: true });
    }
  }, 600);
}

function renderGallery() {
  const gallery = $("gallery");
  const empty = $("galleryEmpty");

  if (!CONFIG.photos.length) {
    gallery.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");
  gallery.innerHTML = CONFIG.photos.map(photo => `
    <article class="gallery-item">
      <img src="${photo.file}" 
       alt="${photo.caption}"
       loading="lazy"
       decoding="async"
      >
      <div class="gallery-caption">${photo.caption}</div>
    </article>
  `).join("");
}

function renderTimeline() {
  $("timeline").innerHTML = CONFIG.timeline.slice().reverse().map(item => `
    <div class="commit">
      <strong>${item.year} · ${item.title}</strong>
      <span>${item.text}</span>
    </div>
  `).join("");
}

function createHearts() {
  const container = $("heartsLayer");
  for (let i = 0; i < 48; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > .5 ? "♥" : "♡";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${16 + Math.random() * 28}px`;
    heart.style.animationDuration = `${3 + Math.random() * 4}s`;
    heart.style.animationDelay = `${Math.random() * 1.4}s`;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
}

function runBoot() {
  const lines = [
    "$ git clone our-story",
    "Cloning into 'our-story'...",
    "Downloading memories... 25%",
    "Downloading travels... 55%",
    "Downloading laughter... 80%",
    "Resolving love... 100%",
    "Repository cloned successfully.",
    "",
    "$ open README.md",
    "",
    `Bienvenido, ${CONFIG.partnerName} ❤️`
  ];

  let i = 0;
  const timer = setInterval(() => {
    bootText.textContent += lines[i] + "\n";
    i++;
    if (i === lines.length) {
      clearInterval(timer);
      enterRepoBtn.classList.remove("hidden");
    }
  }, 430);
}

$("closeModalBtn").addEventListener("click", () => fileModal.classList.remove("show"));
fileModal.addEventListener("click", e => {
  if (e.target === fileModal) fileModal.classList.remove("show");
});
enterRepoBtn.addEventListener("click", () => bootScreen.style.display = "none");
document.addEventListener("keydown", e => {
  if (e.key === "Escape") fileModal.classList.remove("show");
});

musicBtn.addEventListener("click", async () => {
  if (!bgMusic.src) return;
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicBtn.textContent = "❚❚ Pausar";
    } catch {
      alert("Tu navegador bloqueó la reproducción automática. Vuelve a presionar el botón.");
    }
  } else {
    bgMusic.pause();
    musicBtn.textContent = "♫ Música";
  }
});

applyConfig();
runBoot();
