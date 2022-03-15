import readlineSync from 'readline-sync';
import greatingsDefault from './cli.js';

const roundsCount = 3;

const getRandomNumber = (digitsNum = 2) => Math.floor(Math.random() * 10 ** digitsNum);

const playRound = () => {
  const num = getRandomNumber();
  const isEven = num % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  console.log(`Question: ${num}`);

  const answer = readlineSync.question('Your answer: ');
  const isCorrectAnswer = answer === correctAnswer;
  const text = isCorrectAnswer ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`;
  console.log(text);
  return isCorrectAnswer;
};

const play = () => {
  let i = 0;
  let isCorrectAnswer;
  do {
    isCorrectAnswer = playRound();
    i += 1;
  } while (isCorrectAnswer && i < roundsCount);
  return isCorrectAnswer;
};

const sayBye = (name, isWinner) => {
  const text = isWinner ? 'Congratulations' : "Let's try again";
  console.log(`${text}, ${name}!`);
};

const greatings = () => {
  const name = greatingsDefault();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
};

const playGame = () => {
  const name = greatings();
  const isWinner = play();
  sayBye(name, isWinner);
};

export default playGame;
