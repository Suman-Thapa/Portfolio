let images = [];
let current = 0;
let interval;

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelector(".thumbs");

function initSlider(imgArray) {
  images = imgArray;

  loadThumbs();
  showSlide(0);

  startAutoSlide();
}

function loadThumbs() {
  thumbs.innerHTML = "";

  images.forEach((img, i) => {
    let image = document.createElement("img");
    image.src = img;
    image.onclick = () => setSlide(i);
    thumbs.appendChild(image);
  });
}

function showSlide(i) {
  current = i;
  mainImage.src = images[i];

  document.querySelectorAll(".thumbs img")
    .forEach(img => img.classList.remove("active"));

  if (document.querySelectorAll(".thumbs img")[i]) {
    document.querySelectorAll(".thumbs img")[i].classList.add("active");
  }
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
  restartAutoSlide();
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
  restartAutoSlide();
}

function setSlide(i) {
  showSlide(i);
  restartAutoSlide();
}

// AUTO SLIDE CONTROL
function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

function restartAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

// PREVIEW
function openPreview() {
  document.getElementById("preview").style.display = "flex";
  document.getElementById("previewImg").src = images[current];
  clearInterval(interval);
}

function closePreview() {
  document.getElementById("preview").style.display = "none";
  startAutoSlide();
}

// click outside
function outsideClick(e) {
  if (e.target.classList.contains("preview")) {
    closePreview();
  }
}