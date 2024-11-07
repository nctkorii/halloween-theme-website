const canvas = document.getElementById("batCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let batImage = new Image();
batImage.src = "bats.svg";  

let bats = [];
let batSize = 20;
let numBats = 20;

function characteristicsBat() {
  for (let i = 0; i < numBats; i++) {
    let x = Math.random() * canvas.width;    // this is just the random x position in the beginning
    let y = Math.random() * canvas.height;   
    let dx = (Math.random() - 0.5) * 3;      // speed, so that bats can fly around
    let dy = (Math.random() - 0.5) * 3; 

    bats.push({ x, y, dx, dy });
  }
}

//draw the bat based on its position, and size being declared. which is 20 pixels.
function drawBats() {
  bats.forEach(bat => {
    ctx.drawImage(batImage, bat.x, bat.y, batSize, batSize);
  });
}

//main meat
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBats();

  bats.forEach(bat => {
    bat.x += bat.dx;
    bat.y += bat.dy;


    if (bat.x + batSize > canvas.width || bat.x < 0) {
      bat.dx = -bat.dx;
    }

    if (bat.y + batSize > canvas.height || bat.y < 0) {
      bat.dy = -bat.dy;
    }
  });

  requestAnimationFrame(update);
}

batImage.onload = () => {
  characteristicsBat();
  update();
};



