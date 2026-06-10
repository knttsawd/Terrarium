import { canvas, ctx } from "./utils.js";
import { environment } from "./main.js";
export let mouseSpeed;
let originalMouseX;
let originalMouseY;
let mouseX;
let mouseY;
let dragging = false;

function getMouseSpeed() {
  let distance;
  if (originalMouseX) {
    distance =
      Math.hypot(mouseX - originalMouseX, mouseY - originalMouseY) /
      ctx.canvas.width;
  } else {
    distance = 0;
  }
  originalMouseX = mouseX;
  originalMouseY = mouseY;
  return distance;
}

setInterval(() => {
  mouseSpeed = getMouseSpeed(mouseX, mouseY, ctx.canvas.width);
}, 100);

canvas.addEventListener("mousedown", (event) => {
  dragging = false;
});

canvas.addEventListener("touchstart", (event) => {
  event.preventDefault();
  dragging = false;
});

canvas.addEventListener("mousemove", (event) => {
  if (mouseSpeed > 0.008) {
    dragging = true;
    environment.registerDrag(event.clientX, event.clientY);
  } else {
    dragging = false;
  }
  mouseX = event.clientX;
  mouseY = event.clientY;
});

canvas.addEventListener("touchmove", (event) => {
  event.preventDefault();
  const touches = event.touches[0];
  if (mouseSpeed > 0.008) {
    dragging = true;
    environment.registerDrag(touches.clientX, touches.clientY);
  } else {
    dragging = false;
  }
  mouseX = touches.clientX;
  mouseY = touches.clientY;
});

canvas.addEventListener("mouseup", (event) => {
  if (!dragging) {
    environment.registerClick(event.clientX, event.clientY);
  }
});

canvas.addEventListener("touchend", (event) => {
  event.preventDefault();
  const touches = event.changedTouches[0];
  if (!dragging) {
    environment.registerClick(touches.clientX, touches.clientY);
  }
});
