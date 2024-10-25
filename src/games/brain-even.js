import { createRandomNumberBefore100, isEven } from '../utils/mathAndLogic.js';
import moveGame from '../index.js';
/* Генерируем случайное число. Возвращаем является ли число четным. */
function brainEven() {
  const randomNumber = createRandomNumberBefore100();
  console.log(`Question: ${randomNumber}`);
  return isEven(randomNumber);
}

export default function brainEvenGame() {
  moveGame(brainEven, 'Answer "yes" if the number is even, otherwise answer "no".');
}
