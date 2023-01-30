var btnEle = document.querySelector(".btn");
var div = document.querySelector(".mydiv");
var colors = ["red", "green", "blue"];
var i = 0;

btnEle.onclick = function () {
  div.style.backgroundColor = colors[i];
  i++;
  if (i == 3) {
    i = 0;
  }
};
