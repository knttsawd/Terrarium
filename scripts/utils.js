export const canvas = document.getElementById("mainCanvas");
export const ctx = canvas.getContext("2d");
export function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function lerp(num1, num2, percentage) {
  return Math.floor(num1 + (num2 - num1) * percentage);
}

export function isWithin(x, y, obj) {
  const aboveX = x > obj.x * window.innerWidth;
  const belowX = x < (obj.x + obj.width) * window.innerWidth;
  const aboveY = y > obj.y * window.innerHeight;
  const belowY = y < (obj.y + obj.height) * window.innerHeight;
  return aboveX && belowX && aboveY && belowY ? true : false;
}
