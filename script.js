//Typewriter Effect
const texts = ["Code Lynxity",'Mitul Majumdar'];
let currentIndex = 0;
let currentText = "";
let isDeleting = false;
let defaultSpeed = 125;
let speed = defaultSpeed;
const element = document.querySelector(".author-name");


function type() {
  const fullText = texts[currentIndex];
  const customSpeed = defaultSpeed;

  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
  } else {
    currentText = fullText.substring(0, currentText.length + 1);
  }

  element.textContent = currentText;

  if (!isDeleting && currentText === fullText) {
    speed = 1000; 
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % texts.length;
    speed = customSpeed;
  } else {
    speed = isDeleting ? customSpeed / 2 : customSpeed; 
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Circle 
const circles = [
  document.getElementById("circle1"),
  document.getElementById("circle2"),
  document.getElementById("circle3"),
  document.getElementById("circle4"),
  document.getElementById("circle5"),
  document.getElementById("circle6"),
  document.getElementById("circle7")
];
const center = document.querySelector('.circle-container');
let radius;
const updateRadius = ()=>{
  if(620 < window.innerWidth || 650 > window.innerWidth){
    radius = 220
  }
  if(window.innerHeight > window.innerWidth){
    radius = window.innerWidth * 0.45;
  }else if(window.innerHeight < window.innerWidth){
    radius = window.innerHeight * 0.35;
  }
}
updateRadius()
window.addEventListener('resize', updateRadius);
const centerX = 100;
const centerY = 100;
const angularSpeed = 0.01;
let hoverSpeed = angularSpeed // Adjust this for speed
const totalCircles = circles.length;
const angleIncrement = (2 * Math.PI) / totalCircles;
let angles = Array.from({ length: totalCircles }, (_, i) => i * angleIncrement);

center.onmouseenter = ()=>{
  hoverSpeed = angularSpeed * 0.1;
}
center.onmouseleave = ()=>{
  hoverSpeed = angularSpeed
}



function moveCircles() {
  angles = angles.map(angle => angle + hoverSpeed);
  circles.forEach((circle, index) => {
      const angle = angles[index];
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
  });
  requestAnimationFrame(moveCircles);
}

moveCircles();

// Extra Info

document.addEventListener('DOMContentLoaded', ()=>{
  const usernameDisplay = document.querySelector('.name');
  const dialog = document.getElementById("nameDialog");
  const submitButton = document.getElementById("submitName");

  dialog;

  submitButton.onclick = ()=>{
    const username = document.getElementById("nameInput").value;

    if(username){
      usernameDisplay.textContent = `Good day ${username}`;
      dialog.close();
    }else{
      document.querySelector('.warning').textContent = 'Please enter your desired username'
    }
  }
})


const timestamp = document.querySelector('.time');
function updateTime () {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  timestamp.textContent = `${hours}:${minutes}`;
}

updateTime();

setInterval(updateTime, 60000);
