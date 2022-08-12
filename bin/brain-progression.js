#!/usr/bin/env node

import greeting from '../src/cli.js';
import brainProgression from '../src/games/brain-progression.js';

const startGame = () => {
  const name = greeting();
  brainProgression(name);
};

startGame();
