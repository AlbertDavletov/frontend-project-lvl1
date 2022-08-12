import readlineSync from 'readline-sync';
import {
  isEvenNumber, getRndNumber, showMessage, checkExit, updateSteps,
} from '../utils.js';
import {
  EvenNumGameWelcomeMessage,
  Congrats,
  Question,
  YourAnswer,
  CorrectAnswerPrefix,
  WrongAnswerSuffix,
  YesAnswer,
  NoAnswer,
  StepsOfEvenNumberGame,
  CorrectAnswer,
} from '../constants.js';

const askQuestion = (question) => {
  showMessage(`${Question}, ${question}`);
  const answer = readlineSync.question(`${YourAnswer}: `);
  return answer;
};

const isCorrectAnswer = (question, answer, showResult = true) => {
  const correctAnswer = isEvenNumber(question) ? YesAnswer : NoAnswer;
  const isCorrect = correctAnswer === answer;

  if (showResult) {
    const result = isCorrect ? CorrectAnswer : `'${answer}' ${WrongAnswerSuffix} ${CorrectAnswerPrefix} '${correctAnswer}'.`;
    showMessage(result);
  }

  return isCorrect;
};

const brainEven = (userName) => {
  showMessage(EvenNumGameWelcomeMessage);

  let steps = 0;
  while (steps < StepsOfEvenNumberGame) {
    const question = getRndNumber();
    const answer = askQuestion(question);
    if (checkExit(answer)) {
      return;
    }
    const correct = isCorrectAnswer(question, answer);
    steps = updateSteps(correct, steps);
  }

  showMessage(`${Congrats}, ${userName}!`);
};

export default brainEven;
