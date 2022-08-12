import readlineSync from 'readline-sync';
import { showMessage } from './games/helpers.js';
import { WelcomeMessage, YourName, Hello } from './constants.js';

const greeting = () => {
  showMessage(WelcomeMessage);
  const name = readlineSync.question(`${YourName} `);
  showMessage(`${Hello}, ${name}`);
  return name;
};

export default greeting;
