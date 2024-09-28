const textElement = document.querySelector('.animate-text');
const messages = ["Welcome to the Animation!", "Enjoy the Show!", "HTML,CSS and JS are Fun!"];
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % messages.length;
  textElement.textContent = messages[currentIndex];
}, 4000);
