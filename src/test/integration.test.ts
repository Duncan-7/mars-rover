import { Controller } from "../controller";

describe('Integration test', () => {
  let controller: Controller;

  beforeEach(() => {
    controller = new Controller();
  });

  it("console logs the correct final location when given an input string", () => {
    const instructions: string = "4 8\n(2, 3, E) LFRFF";
    const consoleSpy = jest.spyOn(console, 'log');

    controller.parseInstructions(instructions);

    expect(consoleSpy).toHaveBeenCalledWith("(4, 4, E)");
  }) 

  it("console logs the correct final location for a LOST rover when given an input string", () => {
    const instructions: string = "4 8\n(0, 2, N) FFLFRFF";
    const consoleSpy = jest.spyOn(console, 'log');

    controller.parseInstructions(instructions);

    expect(consoleSpy).toHaveBeenCalledWith("(0, 4, W) LOST");
  }) 

  it("console logs the correct final location for multiple Rovers when given an input string", () => {
    const instructions: string = "4 8\n(2, 3, N) FLLFR\n(1, 0, S) FFRLF";
    const consoleSpy = jest.spyOn(console, 'log');

    controller.parseInstructions(instructions);

    expect(consoleSpy).toHaveBeenCalledWith("(2, 3, W)");
    expect(consoleSpy).toHaveBeenCalledWith("(1, 0, S) LOST");
  }) 
});
