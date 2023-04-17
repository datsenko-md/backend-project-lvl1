const maxRandomNumber = 100;
const generateQuestion = () => Math.round(Math.random() * maxRandomNumber);
const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export { generateQuestion, getCorrectAnswer, rules };
