import { states } from "./data/stateCodes";

const stateCodes = Object.keys(states);

/** @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive */
export function getRandomIntInclusive(max: number) {
  return Math.floor(Math.random() * (max - 1));
}

function getRandomNumber() {
  return getRandomIntInclusive(stateCodes.length - 1);
}

export function getRandomStateCode() {
  return stateCodes[getRandomNumber()];
}
