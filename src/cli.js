import readlineSync from 'readline-sync';

const printWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

const askUserName = () => readlineSync.question('May I have your name? ');

const printGreetings = (name) => {
  console.log(`Hello, ${name}!`);
};

const printRules = (rules) => {
  console.log(rules);
};

const printGameResult = (name, isVictory) => {
  const msg = isVictory ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(msg);
};

export {
  printWelcomeMessage,
  askUserName,
  printGreetings,
  printGameResult,
  printRules,
};
