// Setup vars
var myInput = document.querySelector("#myInput");
var myButton = document.querySelector("#btn");

// Events
myButton.addEventListener("click", handleToggle);

// Function
function handleToggle() {
  if (this.getAttribute("data-text") == "show") {
    // Button = Show :
    // Password => Text
    // Show => Hide
    // Attribute => Hide
    myInput.setAttribute("type", "text");
    this.innerHTML = "Hide";
    this.setAttribute("data-text", "hide");
  } else {
    // Button = Hide :
    // Text => Password
    // Hide => Show
    // Attribute => show
    myInput.setAttribute("type", "password");
    this.innerHTML = "Show";
    this.setAttribute("data-text", "show");
  }
}
