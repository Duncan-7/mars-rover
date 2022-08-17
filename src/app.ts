import { Controller } from "./controller";

// Version of app that takes instructions as argument, for demo purposes.
function demo(instructions: string) {
  const controller: Controller = new Controller();
  controller.parseInstructions(instructions);
}

demo("4 8\n(2, 3, E) LFRFF\n(0, 2, N) FFLFRFF");
demo("4 8\n(2, 3, N) FLLFR\n(1, 0, S) FFRLF");

// Version of app that takes command line input as instructions.
function main() {
  if (process.argv[2] != undefined) {
    const controller: Controller = new Controller();
    const instructions: string = process.argv[2];
    controller.parseInstructions(instructions);
  }
}

main();