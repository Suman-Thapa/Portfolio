let items = [];
let current = 0;
let interval;
let isVideoPlaying = false;

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelector(".thumbs");

// INIT
function initSlider(data) {
  items = data;

  loadThumbs();
  showSlide(0);
  startAutoSlide();
}

// THUMBS
function loadThumbs() {
  thumbs.innerHTML = "";

  items.forEach((item, i) => {
    let el;

    if (typeof item === "string") {
      el = document.createElement("img");
      el.src = item;
    } else {
      // VIDEO thumbnail = use image placeholder instead
      el = document.createElement("img");
      el.src = "https://img.icons8.com/ios-filled/100/video.png";
    }

    el.onclick = () => setSlide(i);
    thumbs.appendChild(el);
  });
}
// SHOW SLIDE
function showSlide(i) {
  current = i;

  const item = items[i];
  const container = document.getElementById("mainImage");

  if (typeof item === "string") {
    container.innerHTML = `<img src="${item}" style="width:100%;height:100%;object-fit:cover;">`;
  } else {
    container.innerHTML = `
      <video controls autoplay muted style="width:100%;height:100%;object-fit:cover;">
        <source src="${item.src}" type="video/mp4">
      </video>
    `;
  }

  updateThumbs();
  handleVideoEvents(item);
}
// THUMB ACTIVE
function updateThumbs() {
  document.querySelectorAll(".thumbs *").forEach(el => el.classList.remove("active"));

  if (document.querySelectorAll(".thumbs *")[current]) {
    document.querySelectorAll(".thumbs *")[current].classList.add("active");
  }
}

// VIDEO CONTROL
function handleVideoEvents(item) {
  if (typeof item === "string") return;

  setTimeout(() => {
    const video = document.querySelector("#mainImage");

    if (!video) return;

    video.onplay = () => {
      isVideoPlaying = true;
      clearInterval(interval);
    };

    video.onpause = () => {
      isVideoPlaying = false;
      startAutoSlide();
    };

    video.onended = () => {
      isVideoPlaying = false;
      nextSlide();
    };
  }, 100);
}

// NEXT / PREV
function nextSlide() {
  current = (current + 1) % items.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + items.length) % items.length;
  showSlide(current);
}

function setSlide(i) {
  showSlide(i);
}

// AUTO SLIDE
function startAutoSlide() {
  clearInterval(interval);

  interval = setInterval(() => {
    if (!isVideoPlaying) {
      nextSlide();
    }
  }, 5000);
}

// PREVIEW FIX
function openPreview() {
  const item = items[current];
  const preview = document.getElementById("preview");

  preview.style.display = "flex";

  if (typeof item === "string") {
    preview.innerHTML = `
      <span class="close" onclick="closePreview()">✖</span>
      <img src="${item}">
    `;
  } else {
    preview.innerHTML = `
      <span class="close" onclick="closePreview()">✖</span>
      <video controls autoplay>
        <source src="${item.src}" type="video/mp4">
      </video>
    `;
  }

  clearInterval(interval);
}

function closePreview() {
  document.getElementById("preview").style.display = "none";
  startAutoSlide();
}

// FULLSCREEN FIX
document.addEventListener("fullscreenchange", () => {
  const video = document.querySelector("#mainImage");

  if (document.fullscreenElement && video) {
    isVideoPlaying = true;
    clearInterval(interval);
  } else {
    isVideoPlaying = false;
    startAutoSlide();
  }
});