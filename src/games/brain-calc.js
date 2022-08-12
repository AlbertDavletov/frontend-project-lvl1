import startGame from './start-game.js';
import { getRndNumber, getRndOperator, calculate } from '../utils.js';
import { CalcGameWelcomeMessage, StepsOfCalcNumberGame } from '../constants.js';

const getQuestionAndAnswer = () => {
  const rndFirstNum = getRndNumber();
  const rndSeconNum = getRndNumber();
  const rndOperator = getRndOperator();
  const answer = calculate(rndFirstNum, rndSeconNum, rndOperator).toString();

  const question = `${rndFirstNum} ${rndOperator} ${rndSeconNum}`;
  return [question, answer];
};

const brainCalc = (userName) => startGame(
  userName,
  CalcGameWelcomeMessage,
  StepsOfCalcNumberGame,
  getQuestionAndAnswer,
);

export default brainCalc;
