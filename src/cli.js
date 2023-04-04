import readlineSync from 'readline-sync';

const printWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

const askUserName = () => readlineSync.question('May I have your name? ');

const printGreetings = (name) => {
  console.log(`Hello, ${name}!`);
};

export {
  printWelcomeMessage,
  askUserName,
  printGreetings,
};
