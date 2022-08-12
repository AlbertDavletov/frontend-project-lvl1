import { MaxNumber } from './constants.js';

export const isEvenNumber = (num) => num % 2 === 0;

export const getRndNumber = (max = MaxNumber) => Math.floor(Math.random() * max);

export const showMessage = (message) => console.log(message);
