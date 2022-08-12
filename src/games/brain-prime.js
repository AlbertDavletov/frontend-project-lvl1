import startGame from './start-game.js';
import { getRndNumber, isPrime } from '../utils.js';
import {
  PrimeGameWelcomeMessage, StepsOfPrimeNumberGame, YesAnswer, NoAnswer,
} from '../constants.js';

const getQuestionAndAnswer = () => {
  const question = getRndNumber().toString();
  const answer = isPrime(question) ? YesAnswer : NoAnswer;

  return [question, answer];
};

const brainPrime = (userName) => startGame(userName, PrimeGameWelcomeMessage, StepsOfPrimeNumberGame, getQuestionAndAnswer);

export default brainPrime;
