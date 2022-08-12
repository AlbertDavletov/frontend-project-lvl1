import { Congrats, Question } from '../constants.js';
import {
  getUserResponse, isCorrectAnswer, showMessage, checkExit, updateSteps,
} from './helpers.js';

const startGame = (userName, welcome, stepsNum, getQuestionAndAnswer) => {
  showMessage(welcome);

  let steps = 0;
  while (steps < stepsNum) {
    const [question, answer] = getQuestionAndAnswer();
    showMessage(`${Question}: ${question}`);
    const userResponse = getUserResponse();
    if (checkExit(userResponse)) {
      return;
    }

    const correct = isCorrectAnswer(answer, userResponse, userName);
    steps = updateSteps(correct, steps);
  }

  showMessage(`${Congrats}, ${userName}!`);
};

export default startGame;
