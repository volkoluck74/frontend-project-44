import { createRandomNumberBefore100, getGCD } from '../utils/mathAndLogic.js';
import moveGame from '../index.js';
/* Генерируем два случайных числа. Возвращаем их НОД */
function brainGSD() {
  const firstNumber = createRandomNumberBefore100();
  const secondNumber = createRandomNumberBefore100();
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  return getGCD(firstNumber, secondNumber);
}

export default function brainGCDGame() {
  moveGame(brainGSD, 'Find the greatest common divisor of given numbers.');
}
