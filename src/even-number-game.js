import readlineSync from 'readline-sync';
import { isEvenNumber, getRndNumber, showMessage } from './utils.js';
import {
  EvenNumGameWelcomeMessage,
  Congrats,
  Question,
  YourAnswer,
  Exit,
  ExitMessage,
  CorrectAnswerPrefix,
  WrongAnswerSuffix,
  YesAnswer,
  NoAnswer,
  StepsOfEvenNumberGame,
  CorrectAnswer,
} from './constants.js';

const askQuestion = (question) => {
  showMessage(`${Question}, ${question}`);
  const answer = readlineSync.question(`${YourAnswer}: `);
  return answer;
};

const isCorrectAnswer = (question, answer, showResult = true) => {
  const isEvenNum = isEvenNumber(question);
  const correctAnswer = isEvenNum ? YesAnswer : NoAnswer;
  const isCorrect = correctAnswer === answer;

  if (showResult) {
    const result = isCorrect ? CorrectAnswer : `'${answer}' ${WrongAnswerSuffix} ${CorrectAnswerPrefix} '${correctAnswer}'.`;
    showMessage(result);
  }

  return isCorrect;
};

const updateSteps = (isCorrectStep, steps) => {
  // if this is the correct answer, increase the steps,
  // otherwise decrease, but not less than 0.
  if (isCorrectStep) {
    return steps + 1;
  } if (steps > 0) {
    return steps - 1;
  }

  return 0;
};

const evenNumGame = (userName) => {
  let hardExit = false;
  showMessage(EvenNumGameWelcomeMessage);

  let steps = 0;
  while (steps < StepsOfEvenNumberGame) {
    const question = getRndNumber();
    const answer = askQuestion(question);
    if (answer === Exit) {
      hardExit = true;
      break;
    }
    const correct = isCorrectAnswer(question, answer);
    steps = updateSteps(correct, steps);
  }

  if (hardExit) {
    showMessage(`${ExitMessage}, ${userName}`);
    return;
  }

  showMessage(`${Congrats}, ${userName}!`);
};

export default evenNumGame;
