import readlineSync from 'readline-sync';
import {
  getRndNumber, getRndOperator, calculate, showMessage, checkExit, updateSteps,
} from '../utils.js';
import {
  CalcGameWelcomeMessage,
  Congrats,
  Question,
  YourAnswer,
  CorrectAnswerPrefix,
  WrongAnswerSuffix,
  StepsOfCalcNumberGame,
  CorrectAnswer,
} from '../constants.js';

const getUserResponse = () => readlineSync.question(`${YourAnswer}: `);

const isCorrectAnswer = (answer, userResponse, showResult = true) => {
  const isCorrect = answer === userResponse;

  if (showResult) {
    const result = isCorrect ? CorrectAnswer : `'${userResponse}' ${WrongAnswerSuffix} ${CorrectAnswerPrefix} '${answer}'.`;
    showMessage(result);
  }

  return isCorrect;
};

const getQuestionAndAnswer = () => {
  const rndFirstNum = getRndNumber();
  const rndSeconNum = getRndNumber();
  const rndOperator = getRndOperator();
  const answer = calculate(rndFirstNum, rndSeconNum, rndOperator).toString();

  const question = `${rndFirstNum} ${rndOperator} ${rndSeconNum}`;
  return [question, answer];
};

const brainCalc = (userName) => {
  showMessage(CalcGameWelcomeMessage);

  let steps = 0;
  while (steps < StepsOfCalcNumberGame) {
    const [question, answer] = getQuestionAndAnswer();
    showMessage(`${Question}, ${question}`);
    const userResponse = getUserResponse();
    if (checkExit(userResponse)) {
      return;
    }

    const correct = isCorrectAnswer(answer, userResponse);
    steps = updateSteps(correct, steps);
  }

  showMessage(`${Congrats}, ${userName}!`);
};

export default brainCalc;
