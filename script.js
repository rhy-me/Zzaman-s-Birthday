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
