import { getRandomNumber } from '../index.js';

export const rules = 'What number is missing in the progression?';

const getProgression = (begin, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(begin + i * step);
  }
  return result;
};

const minProgressionLength = 5;

export const getQuestion = () => {
  const begin = getRandomNumber();
  const step = getRandomNumber(1);
  let length = getRandomNumber(1);
  length = length <= minProgressionLength ? length + minProgressionLength : length;
  const progression = getProgression(begin, step, length);
  const index = getRandomNumber() % length;
  progression[index] = '..';
  return progression.join(' ');
};

export const getCorrectAnswer = (question) => {
  const parts = question.split(' ');
  const [num1, num2, num3] = parts;
  let step;
  let begin;
  if (num1 === '..') {
    step = num3 - num2;
    begin = num2 - step;
  } else if (num2 === '..') {
    step = (num3 - num1) / 2;
    begin = Number(num1);
  } else {
    step = num2 - num1;
    begin = Number(num1);
  }

  let answer;
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i] === '..') {
      answer = begin + i * step;
      break;
    }
  }

  return String(answer);
};
