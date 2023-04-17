#!/usr/bin/env node

import {
  printWelcomeMessage,
  askUserName,
  printGreetings,
  printGameResult,
  printRules,
} from '../src/cli.js';

import play from '../src/index.js';

import { generateQuestion, getCorrectAnswer, rules } from '../src/games/brain-even.js';

printWelcomeMessage();
const name = askUserName();
printGreetings(name);
printRules(rules);
const gameResult = play(generateQuestion, getCorrectAnswer);
printGameResult(name, gameResult);
