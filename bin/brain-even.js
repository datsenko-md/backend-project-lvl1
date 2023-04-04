#!/usr/bin/env node

import {
  printWelcomeMessage,
  askUserName,
  printGreetings,
  printGameResult,
  printRules,
} from '../src/cli.js';

import { play, rules } from '../src/brain-even.js';

printWelcomeMessage();
const name = askUserName();
printGreetings(name);
printRules(rules);
const gameResult = play();
printGameResult(name, gameResult);
