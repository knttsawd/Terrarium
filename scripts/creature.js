import { random } from "./utils.js";
class Creature {
  constructor(ctx, width, height, sizeAdjustment) {
    this.ctx = ctx;
    this.width = 1 / sizeAdjustment;
    this.height = 1 / sizeAdjustment;
    this.x = random(0, width) / width;
    this.y =
      random(height / 2 - this.height * height, height - this.height * height) /
      height;
  }

  draw() {
    const canvasWidth = this.ctx.canvas.width;
    const canvasHeight = this.ctx.canvas.height;
    this.ctx.beginPath();
    this.ctx.rect(
      Math.floor(this.x * canvasWidth),
      Math.floor(this.y * canvasHeight),
      this.width * canvasWidth,
      this.height * canvasHeight,
    );
    this.ctx.fillStyle = "#005c00";
    this.ctx.fill();
    this.ctx.stroke();
  }
  think() {}
}

export class Grasshopper extends Creature {
  act() {}
}

export class Worm extends Creature {
  act() {}
}

export class Butterfly extends Creature {
  act() {}
}

export class Snail extends Creature {
  act() {}
}

export class Leafbug extends Creature {
  act() {}
}
