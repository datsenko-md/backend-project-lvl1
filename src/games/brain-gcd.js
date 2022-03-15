import { getRandomNumber } from '../index.js';

export const rules = 'Find the greatest common divisor of given numbers.';
export const getQuestion = () => `${getRandomNumber()} ${getRandomNumber()}`;
const gcd = (a, b) => {
  if (a % b === 0) {
    return b;
  }

  return gcd(b, a % b);
};
export const getCorrectAnswer = (question) => {
  const [num1, num2] = question.split(' ');
  const result = num1 > num2 ? gcd(num1, num2) : gcd(num2, num1);
  return String(result);
};
