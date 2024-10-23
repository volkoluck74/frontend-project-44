import readlineSync from 'readline-sync';
import chooseGame from '../index.js';

function brainGSD() {
  const firstOperand = Math.ceil(Math.random() * 100);
  const secondOperand = Math.ceil(Math.random() * 100);

  console.log(`Question: ${firstOperand} ${secondOperand}`);
  let answer = Math.min(firstOperand, secondOperand);
  while (firstOperand % answer !== 0 || secondOperand % answer !== 0) {
    answer -= 1;
  }
  const userAnswer = readlineSync.question('You answer: ');
  if (answer.toString() === userAnswer) {
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
  chooseGame(brainGSD, 'Find the greatest common divisor of given numbers.');
}
