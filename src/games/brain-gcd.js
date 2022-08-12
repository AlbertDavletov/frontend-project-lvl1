import startGame from './start-game.js';
import { getRndNumber, gcd } from '../utils.js';
import { GcdGameWelcomeMessage, StepsOfGcdNumberGame } from '../constants.js';

const getQuestionAndAnswer = () => {
  const rndFirstNum = getRndNumber();
  const rndSeconNum = getRndNumber();
  const answer = gcd(rndFirstNum, rndSeconNum).toString();

  const question = `${rndFirstNum} ${rndSeconNum}`;
  return [question, answer];
};

const brainGcd = (userName) => startGame(
  userName,
  GcdGameWelcomeMessage,
  StepsOfGcdNumberGame,
  getQuestionAndAnswer,
);

export default brainGcd;
