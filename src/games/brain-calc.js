import { createRandomNumberBefore10, chooseOperation, resultOfOperation } from '../utils/mathAndLogic.js';
import moveGame from '../index.js';

/* Генерируем два операнда. Возвращаем результат случаной операции с этими операндами. */
function brainCalc() {
  const firstOperand = createRandomNumberBefore10();
  const secondOperand = createRandomNumberBefore10();
  return resultOfOperation(firstOperand, secondOperand, chooseOperation()).toString();
}

export default function brainCalcGame() {
  moveGame(brainCalc, 'What is the result of the expression?');
}
