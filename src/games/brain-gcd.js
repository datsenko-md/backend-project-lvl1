const maxRandomNumber = 100;
const getRandomNumber = () => Math.round(Math.random() * maxRandomNumber);
const generateQuestion = () => `${getRandomNumber()} ${getRandomNumber()}`;
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const getCorrectAnswer = (expression) => {
  const [number1, number2] = expression.split(' ');
  return String(gcd(Number(number1), Number(number2)));
};
const rules = 'Find the greatest common divisor of given numbers.';

export { generateQuestion, getCorrectAnswer, rules };
