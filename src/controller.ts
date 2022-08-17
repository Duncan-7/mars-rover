import { Direction } from "./direction";
import { Grid } from "./grid";
import { Rover } from "./rover";

export class Controller {
  grid: Grid;
  rovers: Rover[];
  activeRover: Rover;

  constructor(maxX: number, maxY: number) {
    this.grid = new Grid(maxX, maxY);
    this.rovers = [];
  }
  
  createRover(x: number, y: number, direction: Direction): void {
    this.activeRover = new Rover(x, y, direction);
    this.rovers.push(this.activeRover);
  }

  parseInstructions(instructions: string): void {
    
  }
}