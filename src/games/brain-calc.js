import { getRandomNumber } from '../index.js';

const operators = ['+', '-', '*'];
const getRandomOperator = () => operators[getRandomNumber() % 2];

export const rules = 'What is the result of the expression?';
export const getQuestion = () => `${getRandomNumber()} ${getRandomOperator()} ${getRandomNumber()}`;
export const getCorrectAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');
  let result;
  switch (operator) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
  }
  return String(result);
};
