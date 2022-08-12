import { MaxNumber } from './constants.js';

const RandomOperators = ['+', '-', '*'];

export const isEvenNumber = (num) => num % 2 === 0;

/**
 * [0, 1, 2, ..., max - 1]
 */
export const getRndNumber = (max = MaxNumber) => Math.floor(Math.random() * max);

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export const getRndOperator = () => {
  const rndIndex = getRndNumber(RandomOperators.length);
  return RandomOperators[rndIndex];
};

export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

export const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};
