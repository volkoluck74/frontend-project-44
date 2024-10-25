import { createRandomNumberBefore100, isPrime } from '../utils/mathAndLogic.js';
import moveGame from '../index.js';
/* Генерируем случайное число. Возвращаем является ли число простым. */
function brainPrime() {
  const randomNumber = createRandomNumberBefore100();
  console.log(`Question: ${randomNumber}`);
  return isPrime(randomNumber);
}

export default function brainPrimeGame() {
  moveGame(brainPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
}
