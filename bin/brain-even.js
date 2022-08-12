#!/usr/bin/env node

import greeting from '../src/cli.js';
import evenNumGame from '../src/even-number-game.js';

const brainEven = () => {
  const name = greeting();
  evenNumGame(name);
};

brainEven();
