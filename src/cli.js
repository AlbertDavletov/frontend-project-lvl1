import readlineSync from 'readline-sync';
import { showMessage } from './utils.js';
import { WelcomeMessage, YourName, Hello } from './constants.js';

const greeting = () => {
  showMessage(WelcomeMessage);
  const name = readlineSync.question(`${YourName} `);
  showMessage(`${Hello}, ${name}`);
  return name;
};

export default greeting;
