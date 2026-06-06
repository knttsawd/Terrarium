import { random } from "./utils.js";
class Creature {
  constructor(ctx, imgWidth, imgHeight) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const scale = Math.min(width, height);
    this.ctx = ctx;
    this.width = imgWidth / scale;
    this.height = imgHeight / scale;
    this.x = random(0, width) / width;
    this.y =
      random(height / 2 - this.height * height, height - this.height * height) /
      height;
  }

  draw() {
    const canvasWidth = this.ctx.canvas.width;
    const canvasHeight = this.ctx.canvas.height;
    const scale = Math.min(canvasWidth, canvasHeight);
    this.ctx.beginPath();
    this.ctx.rect(
      Math.floor(this.x * canvasWidth),
      Math.floor(this.y * canvasHeight),
      this.width * scale,
      this.height * scale,
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
