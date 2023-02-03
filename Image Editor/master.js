// Setup Vars
var saturate = document.querySelector(".saturate");
var contrast = document.querySelector(".contrast");
var brightness = document.querySelector(".brightness");
var sepia = document.querySelector(".sepia");
var grayscale = document.querySelector(".grayscale");
var blur = document.querySelector(".blur");
var huerotate = document.querySelector(".hue-rotate");
var imgBox = document.querySelector(".img-box");
var img = document.querySelector(".image");
var upload = document.querySelector("#upload");
var download = document.querySelector(".download");
var reset = document.querySelector(".reset");
var filters = document.querySelectorAll("ul li input");
var canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Events
upload.addEventListener("change", displayImageAndButtons);
download.addEventListener("click", () => (download.href = canvas.toDataURL()));
// Functions
window.onload = function () {
  imgBox.style.display = "none";
  download.style.display = "none";
  reset.style.display = "none";
};

function displayImageAndButtons() {
  resetValue();
  imgBox.style.display = "block";
  download.style.display = "block";
  reset.style.display = "block";

  var file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = "none";
  };
}
function resetValue() {
  ctx.filter = "none";
  saturate.value = 100;
  contrast.value = 100;
  brightness.value = 100;
  sepia.value = 0;
  grayscale.value = 0;
  huerotate.value = 0;
  blur.value = 0;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${huerotate.value}deg)
    `;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});
