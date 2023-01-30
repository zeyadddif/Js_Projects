// get all elements in html
var inputEle = document.getElementById("input");
var buttonEle = document.getElementById("btn");
var msgEle = document.getElementById("msg");

// add click event to button

buttonEle.onclick = function () {
  // get value from input
  var inputValue = inputEle.value;

  if (inputValue != "") {
    // put value into p
    msgEle.innerHTML = inputValue;
    // empty input value
    inputEle.value = "";
  }
};
