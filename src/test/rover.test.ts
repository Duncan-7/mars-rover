import { Direction } from "../direction";
import { Rover } from "../rover";

describe('Rover', () => {
  let rover: Rover;

  beforeEach(() => {
    rover = new Rover(1, 1, "N");
  });

  it('turns right', () => {
    rover.turnRight();

    expect(rover.direction).toBe(Direction.EAST);
  });

  it('can turn right in a full circle', () => {
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();

    expect(rover.direction).toBe(Direction.NORTH);
  });

  it('turns left', () => {
    rover = new Rover(1, 1, "W");

    rover.turnLeft();

    expect(rover.direction).toBe(Direction.SOUTH);
  });

  it('can turn left in a full circle', () => {
    rover = new Rover(1, 1, "W");

    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();

    expect(rover.direction).toBe(Direction.WEST);
  });

  it('moves in the direction it\s facing when facing North', () => {
    rover = new Rover(1, 1, "N");

    rover.move(5, 5);

    expect(rover.coordinateX).toBe(1);
    expect(rover.coordinateY).toBe(2);
  })

  it('becomes lost and retains last location information if moves out of bounds heading North', () => {
    rover = new Rover(1, 1, "N");

    rover.move(1, 1);

    expect(rover.coordinateX).toBe(1);
    expect(rover.coordinateY).toBe(1);
    expect(rover.direction).toBe(Direction.NORTH);
    expect(rover.isLost).toBe(true);
  })

  it('moves in the direction it\s facing when facing East', () => {
    rover = new Rover(1, 1, "E");
    
    rover.move(5, 5);

    expect(rover.coordinateX).toBe(2);
    expect(rover.coordinateY).toBe(1);
  })

  it('becomes lost and retains last location information if moves out of bounds heading East', () => {
    rover = new Rover(1, 1, "E");

    rover.move(1, 1);

    expect(rover.coordinateX).toBe(1);
    expect(rover.coordinateY).toBe(1);
    expect(rover.direction).toBe(Direction.EAST);
    expect(rover.isLost).toBe(true);
  })

  it('moves in the direction it\s facing when facing South', () => {
    rover = new Rover(1, 1, "S");
    
    rover.move(1, 1);

    expect(rover.coordinateX).toBe(1);
    expect(rover.coordinateY).toBe(0);
    
  })

  it('wraps correctly when moving while facing South', () => {
    rover = new Rover(0, 0, "S");

    rover.move(1, 1);

    expect(rover.coordinateX).toBe(0);
    expect(rover.coordinateY).toBe(0);
    expect(rover.direction).toBe(Direction.SOUTH);
    expect(rover.isLost).toBe(true);
  })

  it('moves in the direction it\s facing when facing West', () => {
    rover = new Rover(1, 1, "W");
    
    rover.move(1, 1);

    expect(rover.coordinateX).toBe(0);
    expect(rover.coordinateY).toBe(1);
  })

  it('wraps correctly when moving while facing West', () => {
    rover = new Rover(0, 0, "W");

    rover.move(1, 1);

    expect(rover.coordinateX).toBe(0);
    expect(rover.coordinateY).toBe(0);
    expect(rover.direction).toBe(Direction.WEST);
    expect(rover.isLost).toBe(true);
  })
});
