import createRandomNumber from '../utils/createRandomNumber.js';
import moveGame from '../index.js';

// Разность двух операндов
function diff(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}
// Сложение двух операндов
function sum(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}
// Умножение двух операндов
function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

// Случайный выбор операции
function chooseOperation() {
  const random = createRandomNumber(10);
  if (random < 4) return sum;
  if (random >= 4 && random < 8) return diff;
  return multiply;
}

// Возврат результата случайное операции
function resultOfOperation(firstOperand, secondOperand, operation) {
  switch (operation) {
    case sum:
      console.log(`Question: ${firstOperand} + ${secondOperand}`);
      break;
    case diff:
      console.log(`Question: ${firstOperand} - ${secondOperand}`);
      break;
    case multiply:
      console.log(`Question: ${firstOperand} * ${secondOperand}`);
      break;
    default:
      console.log('Undefined operation');
  }
  return operation(firstOperand, secondOperand);
}
/* Генерируем два операнда. Возвращаем результат случаной операции с этими операндами. */
function brainCalc() {
  const firstOperand = createRandomNumber(10);
  const secondOperand = createRandomNumber(10);
  return resultOfOperation(firstOperand, secondOperand, chooseOperation()).toString();
}

export default function brainCalcGame() {
  moveGame(brainCalc, 'What is the result of the expression?');
}
