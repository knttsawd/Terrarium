import { canvas, ctx } from "./utils.js";
import { Environment } from "./environment.js";
export const environment = new Environment(
  ctx,
  window.innerWidth,
  window.innerHeight,
);
function resize() {
  canvas.height = environment.height = window.innerHeight;
  canvas.width = environment.width = window.innerWidth;
}

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  environment.draw(ctx, canvas.width, canvas.height);
}

function init() {
  resize();
}

function gameLoop() {
  resize();
  drawScene();
  requestAnimationFrame(gameLoop);
}

init();
requestAnimationFrame(gameLoop);
