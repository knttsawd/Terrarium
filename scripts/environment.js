import { Snail, Worm, Butterfly, Grasshopper, Leafbug } from "./creature.js";
export class Environment {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.snail = new Snail(ctx, 25, 30);
    this.worm = new Worm(ctx, 75, 25);
    this.butterfly = new Butterfly(ctx, 25, 40);
    this.grasshopper = new Grasshopper(ctx, 50, 60);
    this.leafbug = new Leafbug(ctx, 70, 50);
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
