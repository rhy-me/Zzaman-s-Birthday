const timelineItems = [
  {
    date: "[Date]",
    title: "The beginning",
    description: "[little details]",
  },
  {
    date: "[Date]",
    title: "A day to remember",
    description: "[little details]",
  },
  {
    date: "[Date]",
    title: "Still becoming us",
    description: "[little details]",
  },
];

const memories = [
  {
    date: "[Date]",
    title: "[Memory Title]",
    image: "assets/photos/Us-1.jpg",
    description: "[Memory Description]",
  },
  {
    date: "[Date]",
    title: "[Memory Title]",
    image: "[Photo]",
    description: "[Memory Description]",
  },
  {
    date: "[Date]",
    title: "[Memory Title]",
    image: "[Photo]",
    description: "[Memory Description]",
  },
  {
    date: "[Date]",
    title: "[Memory Title]",
    image: "[Photo]",
    description: "[Memory Description]",
  },
];

const intro = document.querySelector("#intro");
const main = document.querySelector("#main-content");
const audio = document.querySelector("#guitar-audio");
const guitarist = document.querySelector("#guitarist");

window.scrollTo(0, 0);

function startExperience() {
  window.scrollTo(0, 0);
  document.body.classList.remove("locked");
  intro.classList.add("is-hidden");
  main.setAttribute("aria-hidden", "false");
  audio.volume = 0.32;
  audio
    .play()
    .then(() => setMusicState(true))
    .catch(() => setMusicState(false));
  createPetals();
  window.setTimeout(
    () => document.querySelector("#birthday-intro").focus?.(),
    1000,
  );
}

function setMusicState(isPlaying) {
  guitarist.classList.toggle("is-playing", isPlaying);
  guitarist.setAttribute("aria-pressed", String(isPlaying));
  guitarist.setAttribute(
    "aria-label",
    isPlaying ? "Pause guitar music" : "Play guitar music",
  );
}

audio.addEventListener("play", () => setMusicState(true));
audio.addEventListener("pause", () => setMusicState(false));
audio.addEventListener("ended", () => setMusicState(false));

guitarist.addEventListener("click", () => {
  if (audio.paused)
    audio
      .play()
      .then(() => setMusicState(true))
      .catch(() => setMusicState(false));
  else {
    audio.pause();
    setMusicState(false);
  }
});

document
  .querySelector("#answer-validation")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const answerField = document.querySelector("#answer-input");
    const error = document.querySelector("#answer-error");
    const answer = answerField.value
      .trim()
      .toLowerCase()
      .replace(/[!?.,]/g, "")
      .replace(/'/g, "'");
    const isNegativeAnswer =
      /\b(?:don't|do not|dont|never|not|no)\b[\w\s]*\blove\s+you\b|\blove\s+you\b[\w\s]*\b(?:not|never|no)\b/.test(
        answer,
      );
    if (/\blove\s+you\b/.test(answer) && !isNegativeAnswer) {
      error.textContent = "";
      startExperience();
      return;
    }
    error.textContent = "Wrong answer... try again, my love.";
    answerField.focus();
  });

function createPetals() {
  const container = document.querySelector("#petals");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const addPetal = () => {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--drift", `${(Math.random() - 0.5) * 180}px`);
    petal.style.setProperty("--scale", `${0.65 + Math.random() * 0.8}`);
    petal.style.animationDuration = `${8 + Math.random() * 8}s`;
    petal.style.animationDelay = `${Math.random() * 2}s`;
    container.append(petal);
    window.setTimeout(() => petal.remove(), 18000);
  };
  for (let index = 0; index < 11; index++) addPetal();
  window.setInterval(addPetal, 1100);
}

function renderTimeline() {
  document.querySelector("#timeline").innerHTML = timelineItems
    .map(
      (item) => `
      <article class="timeline__item reveal">
        <span class="timeline__dot" aria-hidden="true"></span>
        <div class="timeline__card">
          <p class="timeline__date">${item.date}</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </article>`,
    )
    .join("");
}

let activeMemory = 0;
function renderMemories() {
  const track = document.querySelector("#memory-track");
  track.innerHTML = memories
    .map(
      (memory, index) => `
    <article class="memory-card ${index == 0 ? "is-active" : ""}" aria-label="Memory${index + 1}" aria-hidden="${index !== 0}">
      <div class="memory-card__image">
        <img src="${memory.image}" alt="${memory.title}" />
      </div>
      <p class="memory-card__caption">${memory.description}</p><small class="memory-card__date">${memory.date}</small>
    </article>`,
    )
    .join("");
  document.querySelector("#slider-dots").innerHTML = memories
    .map(
      (_, index) =>
        `<button type="button" class="${index === 0 ? "is-active" : ""}" aria-label="Show memory ${index + 1}"></button>`,
    )
    .join("");
  document
    .querySelectorAll("#slider-dots button")
    .forEach((dot, index) =>
      dot.addEventListener("click", () => showMemory(index)),
    );
}
function showMemory(index) {
  activeMemory = (index + memories.length) % memories.length;
  document.querySelectorAll(".memory-card").forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === activeMemory);
    card.setAttribute("aria-hidden", String(cardIndex !== activeMemory));
  });
  document
    .querySelectorAll("#slider-dots button")
    .forEach((dot, dotIndex) =>
      dot.classList.toggle("is-active", dotIndex === activeMemory),
    );
}
document
  .querySelector("#prev-memory")
  .addEventListener("click", () => showMemory(activeMemory - 1));
document
  .querySelector("#next-memory")
  .addEventListener("click", () => showMemory(activeMemory + 1));

let touchStartX = 0;
document.querySelector("#memory-track").addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].screenx;
  },
  { passive: true },
);
document.querySelector("#memory-track").addEventListener(
  "touchend",
  (event) => {
    const distance = event.changedTouches[0].screenx - touchStartX;
    if (Math.abs(distance) > 40) {
      showMemory(activeMemory + (distance < 0 ? 1 : -1));
    }
  },
  { passive: true },
);

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (
        entry.target.id === "letter-content" &&
        entry.target.classList.contains("is-visible")
      )
        return;
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    }),
  { threshold: 0.16 },
);

renderTimeline();
renderMemories();
document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));
