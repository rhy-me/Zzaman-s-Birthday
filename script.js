const intro = document.querySelector("#intro");
const main = document.querySelector("#main-content");
const audio = document.querySelector("#guitar-audio");
const guitarist = document.querySelector("#guitarist");

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
