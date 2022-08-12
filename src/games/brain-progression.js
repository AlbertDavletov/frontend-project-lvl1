import startGame from './start-game.js';
import { getRndNumber } from '../utils.js';
import { ProgressionGameWelcomeMessage, StepsOfProgressionGame, ProgressionLength } from '../constants.js';

const maxInitialNum = 10;
const maxProgressionDiff = 5;

const getQuestionAndAnswer = () => {
  const initialNum = getRndNumber(maxInitialNum);
  const diff = getRndNumber(maxProgressionDiff);
  const missingIndex = getRndNumber(ProgressionLength);

  const arr = [initialNum];
  let question = missingIndex === 0 ? '..' : '';
  for (let i = 1; i < ProgressionLength; i += 1) {
    const item = arr[i - 1] + diff;
    arr.push(item);

    question = missingIndex === i ? `${question} ..` : `${question} ${item}`;
  }

  return [question, arr[missingIndex].toString()];
};

const brainProgression = (userName) => startGame(userName, ProgressionGameWelcomeMessage, StepsOfProgressionGame, getQuestionAndAnswer);

export default brainProgression;
