const maxRandomNumber = 100;
const getRandomNumber = () => Math.round(Math.random() * maxRandomNumber);
const generateQuestion = () => getRandomNumber();
const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};
const getCorrectAnswer = (number) => (isPrime(Number(number)) ? 'yes' : 'no');
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { generateQuestion, getCorrectAnswer, rules };
