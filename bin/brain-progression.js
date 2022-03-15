#!/usr/bin/env node

import { rules, getQuestion, getCorrectAnswer } from '../src/games/brain-progression.js';
import { playGame } from '../src/index.js';

playGame(getQuestion, getCorrectAnswer, rules);
