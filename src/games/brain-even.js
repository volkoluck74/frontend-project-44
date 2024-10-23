import readlineSync from 'readline-sync';
import chooseGame from '../index.js';

function brainEven() {
  const randomNumber = Math.ceil(Math.random() * 100);
  let answer = 'no';
  if (randomNumber % 2 === 0) answer = 'yes';
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
  chooseGame(brainEven, 'Answer "yes" if the number is even, otherwise answer "no".');
}
