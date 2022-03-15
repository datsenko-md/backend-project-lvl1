import { getRandomNumber } from '../index.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
export const getQuestion = () => getRandomNumber();
const isEven = (num) => num % 2 === 0;
export const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');
