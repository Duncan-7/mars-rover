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
    mockGrid.mockClear();
    mockRover.mockClear();
  });

  describe('createRover', () => {
    it('calls the Rover constructor', () => {
      controller = new Controller(10, 10);

      expect(Grid).toHaveBeenCalledWith(10, 10);
    })
  })
});
