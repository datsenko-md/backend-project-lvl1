#!/usr/bin/env node

import { printWelcomeMessage, askUserName, printGreetings } from '../src/cli.js';

printWelcomeMessage();
const name = askUserName();
printGreetings(name);
