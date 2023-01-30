let myImage = document.getElementById("slideshow");
let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
let i = 0;

function slideShow() {
  myImage.setAttribute("src", images[i]);
  if (i == images.length - 1) {
    i = 0;
  } else {
    i++;
  }
  setTimeout(function () {
    slideShow();
  }, 2000);
}

slideShow();
