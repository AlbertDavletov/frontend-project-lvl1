import startGame from './start-game.js';
import { isEvenNumber, getRndNumber } from '../utils.js';
import {
  EvenNumGameWelcomeMessage,
  YesAnswer,
  NoAnswer,
  StepsOfEvenNumberGame,
} from '../constants.js';

const getQuestionAndAnswer = () => {
  const question = getRndNumber().toString();
  const answer = isEvenNumber(question) ? YesAnswer : NoAnswer;

  return [question, answer];
};

const brainEven = (userName) => startGame(
  userName,
  EvenNumGameWelcomeMessage,
  StepsOfEvenNumberGame,
  getQuestionAndAnswer,
);

export default brainEven;
