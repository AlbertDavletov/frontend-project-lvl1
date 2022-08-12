import readlineSync from 'readline-sync';
import {
  CorrectAnswerPrefix,
  WrongAnswerSuffix,
  CorrectAnswer,
  Exit,
  ExitMessage,
  TryAgain,
  YourAnswer,
} from '../constants.js';

export const showMessage = (message) => console.log(message);

export const getUserResponse = () => readlineSync.question(`${YourAnswer}: `);

export const isCorrectAnswer = (answer, userResponse, userName) => {
  const isCorrect = answer === userResponse;

  const wrongSuffix = `'${userResponse}' ${WrongAnswerSuffix}`;
  const correctPrefix = `${CorrectAnswerPrefix} '${answer}`;
  const tryAgain = `${TryAgain}, ${userName}!`;
  const result = isCorrect
    ? CorrectAnswer
    : `'${wrongSuffix}' ${correctPrefix}'.\n${tryAgain}`;
  showMessage(result);

  return isCorrect;
};

export const checkExit = (command) => {
  const isExit = command === Exit;
  if (isExit) {
    showMessage(ExitMessage);
  }
  return isExit;
};
