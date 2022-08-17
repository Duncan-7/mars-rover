import { Direction, directionToStringMap } from "./direction";

export class Rover {
  coordinateX: number;
  coordinateY: number;
  direction: Direction;
  isLost: boolean;

  constructor(
    coordinateX: number, 
    coordinateY: number, 
    direction: Direction) {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.direction = direction;
    this.isLost = false;
  }

  turnRight(): void {
    this.direction = (this.direction + 1) % 4;
  }

  turnLeft(): void {
    let newDirection: number = this.direction - 1;
    this.direction = newDirection < 0 ? newDirection + 4 : newDirection; 
  }

  move(maxX: number, maxY: number): void {
    switch (this.direction) {
      case Direction.NORTH:
        if (this.coordinateY + 1 > maxY) {
          this.isLost = true;
        } else {
          this.coordinateY += 1;
        }
        break;
      case Direction.EAST:
        if (this.coordinateX + 1 > maxX) {
          this.isLost = true;
        } else {
          this.coordinateX += 1;
        }
          break; 
      case Direction.SOUTH:
        if (this.coordinateY - 1 < 0) {
          this.isLost = true;
        } else {
          this.coordinateY -= 1;
        }
        break;
      case Direction.WEST:
        if (this.coordinateX - 1 < 0) {
          this.isLost = true;
        } else {
          this.coordinateX -= 1;
        }
        break;  
      default:
        console.log('unrecognised direction');
    }
  }

  reportStatus(): string {
    let statusString: string = `(${this.coordinateX}, ${this.coordinateY}, ${directionToStringMap[this.direction]})`
    if (this.isLost) {
      statusString += " LOST";
    } 
    console.log(statusString);
    return statusString;
  }
}