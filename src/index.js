import readlineSync from 'readline-sync';
import greatingsDefault from './cli.js';

const roundsCount = 3;

const playRound = (getQuestion, getCorrectAnswer) => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const isCorrectAnswer = answer === correctAnswer;
  const text = isCorrectAnswer ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`;
  console.log(text);
  return isCorrectAnswer;
};

const play = (getQuestion, getCorrectAnswer) => {
  let i = 0;
  let isCorrectAnswer;
  do {
    isCorrectAnswer = playRound(getQuestion, getCorrectAnswer);
    i += 1;
  } while (isCorrectAnswer && i < roundsCount);
  return isCorrectAnswer;
};

const sayBye = (name, isWinner) => {
  const text = isWinner ? 'Congratulations' : "Let's try again";
  console.log(`${text}, ${name}!`);
};

const greatings = (rules) => {
  const name = greatingsDefault();
  console.log(rules);
  return name;
};

export const playGame = (getQuestion, getCorrectAnswer, rules = '') => {
  const name = greatings(rules);
  const isWinner = play(getQuestion, getCorrectAnswer);
  sayBye(name, isWinner);
};

export const getRandomNumber = (digitsNum = 2) => Math.floor(Math.random() * 10 ** digitsNum);
