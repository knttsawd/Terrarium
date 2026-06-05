export function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function lerp(num1, num2, percentage) {
  return Math.floor(num1 + (num2 - num1) * percentage);
}
