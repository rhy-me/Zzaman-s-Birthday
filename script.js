const timelineItems = [
  {
    date: "17-02-2025",
    title: "The beginning",
    description:
      "The day you entered my social life and everything slowly started changing.",
  },
  {
    date: "12-10-2025",
    title: "The day we met",
    description:
      "The first time I finally got to meet the girl who had already become special to me.",
  },
  {
    date: "15-11-2025",
    title: "Our first official date",
    description:
      "Our first official date, another movie, and another beautiful memory added to our story.",
  },
  {
    date: "19-11-2025",
    title: "Three little words",
    description:
      "The first time you spelled “I love you Rhyme” — words I will never forget.",
  },
  {
    date: "12-04-2026",
    title: "A special introduction",
    description:
      "The day you met my mother and became an even more special part of my life.",
  },
  {
    date: "07-05-2026",
    title: "Half a year of us",
    description:
      "The day we celebrated six beautiful months of our relationship and everything we had become together.",
  },
  {
    date: "05-10-2026",
    title: "Your special day",
    description:
      "The birthday of the only special girl of my life — and another chapter of our story begins.",
  },
];

const memories = [
  {
    date: "12-10-2025",
    title: "Our First Meet",
    image: "assets/photos/Our-First-Meet.JPG",
    description:
      "After a long wait, the day we finally met — and it was everything I had imagined and more.",
  },
  {
    date: "27-10-2025",
    title: "Our First Movie Date",
    image: "assets/photos/First-Movie-Date.JPG",
    description:
      "Our first movie date, where another ordinary day became something worth remembering.",
  },
  {
    date: "02-11-2025",
    title: "The First Time I Held Your Hand",
    image: "assets/photos/First-Holding-Hands.JPG",
    description:
      "The first time I held your hand — a small moment that meant so much to me. Holding your hand",
  },
  {
    date: "15-11-2025",
    title: "Our First Official Date",
    image: "assets/photos/First-Official-Date.jpg",
    description:
      "Our first official date — another beautiful chapter in our little story.",
  },
  {
    date: "21-11-2025",
    title: "A Little Moment",
    image: "assets/photos/Ussss.JPG",
    description:
      "Nothing extraordinary — one of my most favorite little moments with you, just being together.",
  },
  {
    date: "21-12-2025",
    title: "Our Signature Pose",
    image: "assets/photos/Our-Signature-Pos-3.JPG",
    description: "One pose, two people, and a memory worth keeping forever.",
  },
  {
    date: "07-12-2025",
    title: "Our First Monthversary",
    image: "assets/photos/First-Monthversary.JPG",
    description:
      "Our first month together — and the beginning of so many more memories.",
  },
  {
    date: "09-12-2025",
    title: "Our Favorite",
    image: "assets/photos/Our-Fav.JPG",
    description:
      "When we are together, laughing, smiling, and making memories, I feel like the luckiest person in the world.",
  },
  {
    date: "27-03-2026",
    title: "Our First Eid",
    image: "assets/photos/First-Eid-1.jpeg",
    description:
      "Celebrating Eid together and making another little piece of our story.",
  },
  {
    date: "12-04-2026",
    title: "The Day You Met My Mother",
    image: "assets/photos/First-Meet-With-Ma.JPG",
    description:
      "The day you met my mother and became an even more special part of my life.",
  },
  {
    date: "11-04-2026",
    title: "You in a Saree",
    image: "assets/photos/First-Saree-With-Me-1.JPG",
    description:
      "The first time I saw you in a saree on one of our dates. You looked unforgettable.",
  },
  {
    date: "13-04-2026",
    title: "Our Coffee Date",
    image: "assets/photos/Our-Coffee-Date.JPG",
    description: "Coffee tastes a little better when I'm sharing it with you.",
  },
  {
    date: "21-05-2026",
    title: "Made for Each Other",
    image: "assets/photos/Made-For-EachOther.JPG",
    description: "Some pictures don't need a story. They just feel like us.",
  },
  {
    date: "07-05-2026",
    title: "Half a Year of Us",
    image: "assets/photos/Half-Year-Anniversary.jpeg",
    description:
      "Six months of love, laughter, memories, and becoming more of an us every day.",
  },
  {
    date: "09-06-2026",
    title: "Our Signature Pose",
    image: "assets/photos/Our-Signature-Pos.JPG",
    description:
      "Because apparently we found a pose that we just can't stop doing.",
  },
  {
    date: "30-06-2026",
    title: "Us, Just Being Us",
    image: "assets/photos/Brasil-Couple.JPG",
    description: "Fate brought two Brasil fan together.",
  },
  {
    date: "02-08-2026",
    title: "Another Movie Memory",
    image: "assets/photos/Spiderman-movie2.JPG",
    description:
      "Two spiderman fans, a movie, and another little memory to keep.",
  },
  {
    date: "13-09-2026",
    title: "Another Signature Moment",
    image: "assets/photos/Our-Signature-Pos-2.JPG",
    description: "At this point, I think this pose officially belongs to us.",
  },
  {
    date: "13-09-2026",
    title: "Us Again",
    image: "assets/photos/Us-1.jpg",
    description: "Just us. My favorite kind of ordinary",
  },
  {
    date: "23-09-2026",
    title: "Just You and Me",
    image: "assets/photos/Usss.JPG",
    description:
      "One more little moment with the girl who makes my ordinary days feel extraordinary.",
  },
  {
    date: "01-10-2026",
    title: "A Year Later",
    image: "assets/photos/One-Year-Later-At-The-Same-Meeting.JPG",
    description:
      "A moment that reminded me how far we've come since the beginning of our story. Started at the same coffee shop where we first met, and now a year later, still making memories together.",
  },
];

const intro = document.querySelector("#intro");
const main = document.querySelector("#main-content");
const audio = document.querySelector("#guitar-audio");
const guitarist = document.querySelector("#guitarist");

if ("scrollRestoration" in history) history.scrollRestoration = "manual";

function resetScrollPosition() {
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
}

resetScrollPosition();
window.addEventListener("pageshow", resetScrollPosition);

function startExperience() {
  resetScrollPosition();
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
    touchStartX = event.changedTouches[0].screenX;
  },
  { passive: true },
);
document.querySelector("#memory-track").addEventListener(
  "touchend",
  (event) => {
    const distance = event.changedTouches[0].screenX - touchStartX;
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

const cakeStage = document.getElementById("cake-stage");
const cake = cakeStage.querySelector(".cake");

const cakeObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cake.classList.add("cake-build-active");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  },
);

cakeObserver.observe(cakeStage);

function blowOutCandle() {
  document.querySelector("#flame").classList.add("is-out");
  document.querySelector("#flame").style.display = "none";
  document.querySelector("#wish-actions").style.display = "none";
  document.querySelector("#wish-success").classList.add("is-visible");
}

function resetCandle() {
  const flame = document.querySelector("#flame");
  flame.classList.remove("is-out");
  flame.style.display = "";
  document.querySelector("#wish-actions").style.display = "";
  document.querySelector("#wish-success").classList.remove("is-visible");
  document.querySelector("#mic-status").textContent =
    "Your wish is safe here, either way.";
}

document.querySelector("#candle-reset").addEventListener("click", resetCandle);
document.querySelector("#mic-button").addEventListener("click", async () => {
  const status = document.querySelector("#mic-status");
  status.textContent = "Listening for a little breath...";
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const context = new AudioContext();
    const analyser = context.createAnalyser();
    const source = context.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.fftSize = 256;
    const data = new Uint8Array(analyser.frequencyBinCount);
    const listen = () => {
      analyser.getByteFrequencyData(data);
      const volume = data.reduce((sum, value) => sum + value, 0) / data.length;
      if (volume > 42) {
        stream.getTracks().forEach((track) => track.stop());
        context.close();
        blowOutCandle();
      } else if (document.querySelector("#flame").style.display !== "none")
        requestAnimationFrame(listen);
    };
    listen();
  } catch {
    status.textContent = "No problem. Use the button above to make the wish.";
  }
});

document.querySelector("#envelope").addEventListener("click", () => {
  const envelope = document.querySelector("#envelope");
  envelope.classList.add("is-open");
  window.setTimeout(() => {
    document.querySelector("#letter-content").classList.add("is-visible");
    document
      .querySelector("#letter-content")
      .setAttribute("aria-hidden", "false");
  }, 650);
});
