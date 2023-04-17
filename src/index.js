import readlineSync from 'readline-sync';

const defaultNumberOfRounds = 3;

const askQuestionAndGetAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const round = (generateQuestion, getCorrectAnswer) => {
  const question = generateQuestion();
  const correctAnser = getCorrectAnswer(question);
  const actualAnswer = askQuestionAndGetAnswer(question);
  const isCorrect = actualAnswer === correctAnser;
  const roundResult = isCorrect ? 'Correct!' : `'${actualAnswer}' is wrong answer ;(. Correct answer was '${correctAnser}'.`;
  console.log(roundResult);
  return isCorrect;
};

const play = (generateQuestion, getCorrectAnswer, numberOfRounds = defaultNumberOfRounds) => {
  let i = 0;
  let isVictory = true;
  while (i < numberOfRounds && isVictory) {
    isVictory = round(generateQuestion, getCorrectAnswer);
    i += 1;
  }
  return isVictory;
};

export default play;
