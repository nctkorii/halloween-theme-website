const canvas = document.getElementById('batCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bats = [];
const batImage = new Image();
batImage.src = "bat-illustration-svgrepo-com.svg";  

function drawBats() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bats.forEach(bat => {
    // Draw bat image at each bat's position
    ctx.drawImage(batImage, bat.x, bat.y, 20, 20);  // Adjust size as needed

    // Update bat's position
    bat.x += bat.speedX;
    bat.y += bat.speedY;


    // Reset position if it goes out of bounds
    if (bat.x > canvas.width || bat.y > canvas.height || bat.x < 0 || bat.y < 0) {
        bat.speedX = -bat.speedX
    }

    if (bat.x > canvas.width || bat.y > canvas.height || bat.x < 0 || bat.y < 0) {
        bat.speedY = -bat.speedY
    }

  });
  requestAnimationFrame(drawBats);
}

function addBats() {
  for (let i = 0; i < 10; i++) {
    bats.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
    });
  }
}

// Ensure the bats are only drawn once the image is loaded
batImage.onload = () => {
  addBats();
  drawBats();
};


