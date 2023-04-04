#!/usr/bin/env node

import { welcome, getUserName, sayHello } from '../src/cli.js';

welcome();
const name = getUserName();
sayHello(name);
