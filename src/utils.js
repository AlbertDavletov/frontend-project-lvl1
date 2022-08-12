import { Exit, MaxNumber, ExitMessage } from './constants.js';

const RandomOperators = ['+', '-', '*'];

export const isEvenNumber = (num) => num % 2 === 0;

/**
 * [0, 1, 2, ..., max - 1]
 */
export const getRndNumber = (max = MaxNumber) => Math.floor(Math.random() * max);

export const showMessage = (message) => console.log(message);

export const checkExit = (command) => {
  const isExit = command === Exit;
  if (isExit) {
    showMessage(ExitMessage);
  }
  return isExit;
};

export const getRndOperator = () => {
  const rndIndex = getRndNumber(RandomOperators.length);
  return RandomOperators[rndIndex];
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

export const updateSteps = (isCorrectStep, steps) => {
  // if this is the correct answer, increase the steps,
  // otherwise decrease, but not less than 0.
  if (isCorrectStep) {
    return steps + 1;
  } if (steps > 0) {
    return steps - 1;
  }

  return 0;
};
