import { Controller } from "../controller";
import { Direction } from "../direction";
import { Grid } from "../grid";
import { Rover } from "../rover";

jest.mock("../rover");
jest.mock("../grid");
const mockGrid = <jest.Mock<Grid>>Grid;
const mockRover = <jest.Mock<Rover>>Rover;

describe('Controller', () => {
  let controller: Controller;

  beforeEach(() => {
    controller = new Controller();

    mockGrid.mockClear();
    mockRover.mockClear();
  });

  describe('createRover', () => {
    it('calls Rover constructor with correct arguments and adds created object to the rover array', () => {
      controller.createRover(1, 1, Direction.NORTH);

      expect(Rover).toHaveBeenCalledWith(1, 1, Direction.NORTH);
      expect(controller.rovers.length).toBe(1);
      expect(controller.activeRover).toBeTruthy();
    })
  })

  describe('createGrid', () => {
    it('calls Grid constructor with correct arguments', () => {
      controller.createGrid(10, 10);

      expect(Grid).toHaveBeenCalledWith(10, 10);
      expect(controller.grid).toBeTruthy();
    })
  })

  describe('parseInstructions', () => {
    it('calls correct functions when passed a valid string of instructions', () => {
      controller.createGrid(10, 10);

      controller.parseRoverInstructions("10 10\n(0, 2, W) LLFFRRFF");
      const mockRoverInstance = mockRover.mock.instances[0];
      
      expect(Grid).toHaveBeenCalledTimes(1);
      expect(Grid).toHaveBeenCalledWith(10, 10);
      expect(Rover).toBeCalledTimes(1);
      expect(Rover).toHaveBeenCalledWith(0, 2, Direction.WEST);
      expect(mockRoverInstance.turnLeft).toHaveBeenCalledTimes(2);
      expect(mockRoverInstance.turnRight).toHaveBeenCalledTimes(2);
      expect(mockRoverInstance.move).toHaveBeenCalledTimes(4);
    })
  })
});
