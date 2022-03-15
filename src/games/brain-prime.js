import { getRandomNumber } from '../index.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const getQuestion = () => getRandomNumber();
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
export const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');
