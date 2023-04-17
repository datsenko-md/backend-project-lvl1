import readlineSync from 'readline-sync';

const defaultNumberOfRounds = 3;
const maxRandomNumber = 100;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateNumber = () => Math.round(Math.random() * maxRandomNumber);
const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const askQuestionAndGetAnswer = (number) => {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ');
};

const round = () => {
  const number = generateNumber();
  const correctAnser = getCorrectAnswer(number);
  const actualAnswer = askQuestionAndGetAnswer(number);
  const isCorrect = actualAnswer === correctAnser;
  const roundResult = isCorrect ? 'Correct!' : `'${actualAnswer}' is wrong answer ;(. Correct answer was '${correctAnser}'.`;
  console.log(roundResult);
  return isCorrect;
};

const play = (numberOfRounds = defaultNumberOfRounds) => {
  let i = 0;
  let isVictory = true;
  while (i < numberOfRounds && isVictory) {
    isVictory = round();
    i += 1;
  }
  return isVictory;
};

export { play, rules };
