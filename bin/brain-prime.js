#!/usr/bin/env node

import greeting from '../src/cli.js';
import brainPrime from '../src/games/brain-prime.js';

const startGame = () => {
  const name = greeting();
  brainPrime(name);
};

startGame();
