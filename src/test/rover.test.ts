import { Direction } from "../direction";
import { Rover } from "../rover";

describe('Rover', () => {
  let rover: Rover;

  // beforeEach(() => {
  //   rover = new Rover(1, 1, Direction.NORTH);
  // });
  describe('turning', () => {
    it('turns right', () => {
      rover = new Rover(1, 1, Direction.NORTH);

      rover.turnRight();

      expect(rover.direction).toBe(Direction.EAST);
    });

    it('can turn right in a full circle', () => {
      rover = new Rover(1, 1, Direction.NORTH);

      rover.turnRight();
      rover.turnRight();
      rover.turnRight();
      rover.turnRight();

      expect(rover.direction).toBe(Direction.NORTH);
    });

    it('turns left', () => {
      rover = new Rover(1, 1, Direction.WEST);

      rover.turnLeft();

      expect(rover.direction).toBe(Direction.SOUTH);
    });

    it('can turn left in a full circle', () => {
      rover = new Rover(1, 1, Direction.WEST);

      rover.turnLeft();
      rover.turnLeft();
      rover.turnLeft();
      rover.turnLeft();

      expect(rover.direction).toBe(Direction.WEST);
    });
  })

  describe('moving', () => {

    it('moves in the direction it\s facing when facing North', () => {
      rover = new Rover(1, 1, Direction.NORTH);

      rover.move(5, 5);

      expect(rover.coordinateX).toBe(1);
      expect(rover.coordinateY).toBe(2);
    })

    it('becomes lost and retains last location information if moves out of bounds heading North', () => {
      rover = new Rover(1, 1, Direction.NORTH);

      rover.move(1, 1);

      expect(rover.coordinateX).toBe(1);
      expect(rover.coordinateY).toBe(1);
      expect(rover.direction).toBe(Direction.NORTH);
      expect(rover.isLost).toBe(true);
    })

    it('moves in the direction it\s facing when facing East', () => {
      rover = new Rover(1, 1, Direction.EAST);
      
      rover.move(5, 5);

      expect(rover.coordinateX).toBe(2);
      expect(rover.coordinateY).toBe(1);
    })

    it('becomes lost and retains last location information if moves out of bounds heading East', () => {
      rover = new Rover(1, 1, Direction.EAST);

      rover.move(1, 1);

      expect(rover.coordinateX).toBe(1);
      expect(rover.coordinateY).toBe(1);
      expect(rover.direction).toBe(Direction.EAST);
      expect(rover.isLost).toBe(true);
    })

    it('moves in the direction it\s facing when facing South', () => {
      rover = new Rover(1, 1, Direction.SOUTH);
      
      rover.move(1, 1);

      expect(rover.coordinateX).toBe(1);
      expect(rover.coordinateY).toBe(0);
      
    })

    it('becomes lost and retains last location information if moves out of bounds heading South', () => {
      rover = new Rover(0, 0, Direction.SOUTH);

      rover.move(1, 1);

      expect(rover.coordinateX).toBe(0);
      expect(rover.coordinateY).toBe(0);
      expect(rover.direction).toBe(Direction.SOUTH);
      expect(rover.isLost).toBe(true);
    })

    it('moves in the direction it\s facing when facing West', () => {
      rover = new Rover(1, 1, Direction.WEST);
      
      rover.move(1, 1);

      expect(rover.coordinateX).toBe(0);
      expect(rover.coordinateY).toBe(1);
    })

    it('becomes lost and retains last location information if moves out of bounds heading West', () => {
      rover = new Rover(0, 0, Direction.WEST);

      rover.move(1, 1);

      expect(rover.coordinateX).toBe(0);
      expect(rover.coordinateY).toBe(0);
      expect(rover.direction).toBe(Direction.WEST);
      expect(rover.isLost).toBe(true);
    })
  })

  describe('reports status', () => {
    it('is correct when not lost', () => {
      rover = new Rover(1, 1, Direction.NORTH);

      const status: string = rover.reportStatus();

      expect(status).toBe ("(1, 1, N)");
    });

    it('is correct when lost', () => {
      rover = new Rover(1, 1, Direction.NORTH);
      rover.isLost = true;

      const status: string = rover.reportStatus();

      expect(status).toBe("(1, 1, N) LOST");
    });
  })
});
