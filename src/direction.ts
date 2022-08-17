export enum Direction {
  NORTH,
  EAST,
  SOUTH,
  WEST
}

export const stringToDirectionMap: Object = {
  "N" : Direction.NORTH,
  "E" : Direction.EAST,
  "S" : Direction.SOUTH,
  "W" : Direction.WEST,
}

// Use numerical enum values to map to strings for output.
export const directionToStringMap: Object = {
  0 : "N",
  1 : "E",
  2 : "S",
  3 : "W",
}
