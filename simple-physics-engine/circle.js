export class Circle {
  constructor(xPosition, yPosition, radius) {
    this.x = xPosition;
    this.y = yPosition;
    this.radius = radius;
  }

  getPosition() {
    return `(${this.x}, ${this.y})`;
  }
}