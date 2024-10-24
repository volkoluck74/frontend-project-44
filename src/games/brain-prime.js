import readlineSync from 'readline-sync';
import chooseGame from '../index.js';

function brainPrime() {
  const randomNumber = Math.ceil(Math.random() * 100);
  let answer = 'yes';
  for (let i = 2; i < Math.ceil(randomNumber / 2) + 1; i += 1) {
    if (randomNumber % i === 0) {
      answer = 'no';
      break;
    }
  }
  if (randomNumber === 1) answer = 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('You answer: ');
  if (answer === userAnswer) {
    return {
      result: true,
    };
  }
  return {
    result: false,
    userAnswer,
    answer,
  };
}

export default function game() {
  chooseGame(brainPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
}
