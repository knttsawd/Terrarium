import { Snail, Worm, Butterfly, Grasshopper, Leafbug } from "./creature.js";
export class Environment {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.snail = new Snail(ctx, width, height, 25);
    this.worm = new Worm(ctx, width, height, 75);
    this.butterfly = new Butterfly(ctx, width, height, 25);
    this.grasshopper = new Grasshopper(ctx, width, height, 50);
    this.leafbug = new Leafbug(ctx, width, height, 50);
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
}
