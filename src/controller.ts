import { Direction, stringToDirectionMap } from "./direction";
import { Grid } from "./grid";
import { Rover } from "./rover";

export class Controller {
  grid: Grid;
  rovers: Rover[];
  activeRover: Rover;

  constructor() {
    this.rovers = [];
  }

  createGrid(maxX: number, maxY: number) {
    this.grid = new Grid(maxX, maxY);
  }
  
  createRover(x: number, y: number, direction: Direction): void {
    this.activeRover = new Rover(x, y, direction);
    this.rovers.push(this.activeRover);
  }

  // Takes in full string of instructions it, splits and passes on to helper functions.
  parseInstructions(instructions: string): void {
    const instructionArray = instructions.split("\n");
    this.parseGridInstructions(instructionArray[0]);

    for (let i = 1; i < instructionArray.length; i++) {
      this.parseRoverInstructions(instructionArray[i]);
    }
  }

  parseGridInstructions(instructions: string): void {
    const instructionArray = instructions.split(" ");
    this.createGrid(parseInt(instructionArray[0]), parseInt(instructionArray[1]));
  }

  parseRoverInstructions(instructions: string): void {
    const instructionArray = instructions.split(") ");

    const createRoverInstructions = instructionArray[0].substring(1).split(", ");
    const moveRoverInstructions = instructionArray[1].split(""); 

    this.parseCreateRoverInstructions(createRoverInstructions);
    this.parseMoveRoverInstructions(moveRoverInstructions);
  }

  parseCreateRoverInstructions(instructionsArray: string[]): void {
    const coordinateX = parseInt(instructionsArray[0]);
    const coordinateY = parseInt(instructionsArray[1]);
    const direction = stringToDirectionMap[instructionsArray[2]];

    this.createRover(coordinateX, coordinateY, direction);
  }

  parseMoveRoverInstructions(instructionsArray: string[]) {
    for (let i = 0; i < instructionsArray.length; i++) {
      if (this.activeRover.isLost) { 
        break;
      }
      switch (instructionsArray[i]) {
        case "L":
          this.activeRover.turnLeft();
          break;
        case "R":
          this.activeRover.turnRight();
          break;
        case "F":
          this.activeRover.move(this.grid.maxX, this.grid.maxY);
          break;
        default:
          console.log("Unrecognised command")
      }
    }

    // Console log final status;
    console.log(this.activeRover.reportStatus());
  }
}