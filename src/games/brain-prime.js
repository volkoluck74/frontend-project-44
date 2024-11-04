import getRandomNumber from '../utils/getRandomNumber.js';
import startGame from '../index.js';
// Является ли число простым
function isPrime(number) {
  if (number === 1) return false;
  for (let i = 2; i < Math.ceil(number / 2) + 1; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}
/* Генерируем случайное число. Возвращаем является ли число простым. */
function brainPrime() {
  const randomNumber = getRandomNumber(100);
  console.log(`Question: ${randomNumber}`);
  return isPrime(randomNumber) ? 'yes' : 'no';
}

export default function brainPrimeGame() {
  startGame(brainPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
}
