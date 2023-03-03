
var images = [
  "img/img1.jpeg",
  "img/img2.jpeg",
  "img/img3.jpeg",
  "img/img5.jpeg",
  "img/img8.jpeg",
  "img/img9.jpeg",
];

var num = 0;

function next() {
  var slide = document.getElementById("slide");

  num++;
  if (num >= images.length) {
    num = 0;
  }
  slide.src = images[num];
}

function prev() {
  var slide = document.getElementById("slide");

  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slide.src = images[num];
}

setInterval(next,7000)
