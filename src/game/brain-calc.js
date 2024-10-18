import readlineSync from 'readline-sync';

export default function brainCalc() {
  const firstOperand = Math.ceil(Math.random() * 10);
  const secondOperand = Math.ceil(Math.random() * 10);
  const operator = Math.ceil(Math.random() * 10);
  let answer;
  if (operator < 3) {
    answer = (firstOperand - secondOperand).toString();
    console.log(`Question: ${firstOperand} - ${secondOperand}`);
  }
  if (operator >= 3 && operator < 7) {
    answer = (firstOperand + secondOperand).toString();
    console.log(`Question: ${firstOperand} + ${secondOperand}`);
  }
  if (operator >= 7) {
    answer = (firstOperand * secondOperand).toString();
    console.log(`Question: ${firstOperand} * ${secondOperand}`);
  }
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
