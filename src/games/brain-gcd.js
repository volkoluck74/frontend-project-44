import createRandomNumber from '../utils/createRandomNumber.js';
import moveGame from '../index.js';
// Получаем наибольший общий делитель двух чисел
function getGCD(firstNumber, secondNumber) {
  let answer = Math.min(firstNumber, secondNumber);
  while (firstNumber % answer !== 0 || secondNumber % answer !== 0) {
    answer -= 1;
  }
  return answer.toString();
}
/* Генерируем два случайных числа. Возвращаем их НОД */
function brainGSD() {
  const firstNumber = createRandomNumber(100);
  const secondNumber = createRandomNumber(100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  return getGCD(firstNumber, secondNumber);
}

export default function brainGCDGame() {
  moveGame(brainGSD, 'Find the greatest common divisor of given numbers.');
}
