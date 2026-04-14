let images = [];
let current = 0;
let interval;

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelector(".thumbs");

function initSlider(imgArray) {
  images = imgArray;

  loadThumbs();
  showSlide(0);

  interval = setInterval(nextSlide, 3000);
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

// ⭐ RESET AUTO SLIDE
function resetAutoSlide() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
  resetAutoSlide();
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
  resetAutoSlide();
}

function setSlide(i) {
  showSlide(i);
  resetAutoSlide();
}

// PREVIEW
function openPreview() {
  document.getElementById("preview").style.display = "flex";
  document.getElementById("previewImg").src = images[current];

  clearInterval(interval);
}

function closePreview() {
  document.getElementById("preview").style.display = "none";

  interval = setInterval(nextSlide, 3000);
}

// click outside
function outsideClick(e) {
  if (e.target.id === "preview") {
    closePreview();
  }
}