const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(95, 150, 40, 0, 2 * Math.PI);
ctx.fillStyle = "lightblue";
ctx.fill();

