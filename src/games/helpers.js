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

  const result = isCorrect
    ? CorrectAnswer
    : `'${userResponse}' ${WrongAnswerSuffix} ${CorrectAnswerPrefix} '${answer}'.\n${TryAgain}, ${userName}!`;
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
