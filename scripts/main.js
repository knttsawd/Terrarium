import { Environment } from "./environment.js";
const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

const environment = new Environment(ctx, window.innerWidth, window.innerHeight);

const objects = [];

function resize() {
  canvas.height = environment.height = window.innerHeight;
  canvas.width = environment.width = window.innerWidth;
}

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  environment.draw(ctx, canvas.width, canvas.height);
}

function calculateActions() {}

function init() {
  resize();
}

function gameLoop() {
  resize();
  calculateActions();
  drawScene();
  requestAnimationFrame(gameLoop);
}

init();
requestAnimationFrame(gameLoop);
