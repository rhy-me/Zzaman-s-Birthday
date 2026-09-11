const timelineItems = [
  {
    date: "[Date]",
    title: "The beginning",
    image: "[Photo]",
    description: "[little details]",
  },
  {
    date: "[Date]",
    title: "A day to remember",
    image: "[Photo]",
    description: "[little details]",
  },
  {
    date: "[Date]",
    title: "Still becoming us",
    image: "[Photo]",
    description: "[little details]",
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
document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));
