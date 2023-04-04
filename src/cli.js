import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => readlineSync.question('May I have your name? ');

const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

export { welcome, getUserName, sayHello };
