import readlineSync from 'readline-sync';

export default function brainCalc() {
  let firstOperand = Math.ceil(Math.random() * 100);
  let secondOperand = Math.ceil(Math.random() * 100);
  while (firstOperand === 0 || secondOperand === 0) {
    firstOperand = Math.ceil(Math.random() * 100);
    secondOperand = Math.ceil(Math.random() * 100);
  }
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
