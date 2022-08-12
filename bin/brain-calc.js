#!/usr/bin/env node

import greeting from '../src/cli.js';
import brainCalc from '../src/games/brain-calc.js';

const startGame = () => {
  const name = greeting();
  brainCalc(name);
};

startGame();
