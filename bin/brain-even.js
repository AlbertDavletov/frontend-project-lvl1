#!/usr/bin/env node

import greeting from '../src/cli.js';
import brainEven from '../src/games/brain-even.js';

const startGame = () => {
  const name = greeting();
  brainEven(name);
};

startGame();
