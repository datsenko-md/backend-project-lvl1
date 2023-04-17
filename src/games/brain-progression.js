const maxRandomNumber = 100;
const sequenceLength = 10;
const getRandomNumber = () => Math.round(Math.random() * maxRandomNumber);
const getSequenceOfNumbers = (indexOfUnknownElement) => {
  const start = (getRandomNumber() % 20) + 1;
  const step = (getRandomNumber() % 10) + 1;
  const result = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    result.push(i === indexOfUnknownElement ? '..' : start + step * i);
  }

  return result;
};
const generateQuestion = () => getSequenceOfNumbers(getRandomNumber() % sequenceLength).join(' ');
const getCorrectAnswer = (sequence) => {
  const progression = sequence.split(' ');
  const indexOfUnknownElement = progression.indexOf('..');
  const step = indexOfUnknownElement > 1
    ? Number(progression[1]) - Number(progression[0])
    : Number(progression[sequenceLength - 1]) - Number(progression[sequenceLength - 2]);
  const head = indexOfUnknownElement === 0
    ? Number(progression[1]) - step : Number(progression[0]);
  return String(head + step * indexOfUnknownElement);
};
const rules = 'Find the greatest common divisor of given numbers.';

export { generateQuestion, getCorrectAnswer, rules };
