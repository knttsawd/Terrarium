import { Snail, Worm, Butterfly, Grasshopper, Leafbug } from "./creature.js";
import { isWithin } from "./utils.js";
export class Environment {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.snail = new Snail(ctx, 5, 5);
    this.worm = new Worm(ctx, 10, 15);
    this.butterfly = new Butterfly(ctx, 2, 2);
    this.grasshopper = new Grasshopper(ctx, 10, 10);
    this.leafbug = new Leafbug(ctx, 15, 15);
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.rect(0, this.height - this.height / 2, this.width, this.height);
    this.ctx.fillStyle = "#2a850e";
    this.ctx.fill();
    this.ctx.stroke();
    this.snail.draw();
    this.worm.draw();
    this.butterfly.draw();
    this.grasshopper.draw();
    this.leafbug.draw();
  }
  registerClick(x, y) {
    const clickedObj = this.#identifyTouch(x, y);
  }
  registerDrag(x, y) {
    const clickedObj = this.#identifyTouch(x, y);
  }
  #identifyTouch(x, y) {
    if (isWithin(x, y, this.grasshopper)) return this.grasshopper;
    if (isWithin(x, y, this.snail)) return this.snail;
    if (isWithin(x, y, this.worm)) return this.worm;
    if (isWithin(x, y, this.leafbug)) return this.leafbug;
    if (isWithin(x, y, this.butterfly)) return this.butterfly;
    return false;
  }
}
