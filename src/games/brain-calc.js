const maxRandomNumber = 100;
const operations = ['+', '-', '*'];
const getRandomNumber = () => Math.round(Math.random() * maxRandomNumber);
const generateQuestion = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const operator = operations[getRandomNumber() % 3];
  return `${operand1} ${operator} ${operand2}`;
};
const getCorrectAnswer = (expression) => {
  const [operator1, operand, operator2] = expression.split(' ');
  switch (operand) {
    case '+':
      return String(Number(operator1) + Number(operator2));
    case '-':
      return String(Number(operator1) - Number(operator2));
    default:
      return String(Number(operator1) * Number(operator2));
  }
};
const rules = 'What is the result of the expression?';

export { generateQuestion, getCorrectAnswer, rules };
