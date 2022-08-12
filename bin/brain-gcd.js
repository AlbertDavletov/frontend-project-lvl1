#!/usr/bin/env node

import greeting from '../src/cli.js';
import brainGcd from '../src/games/brain-gcd.js';

const startGame = () => {
  const name = greeting();
  brainGcd(name);
};

startGame();
