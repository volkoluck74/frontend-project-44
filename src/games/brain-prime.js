import createRandomNumber from '../utils/createRandomNumber.js';
import moveGame from '../index.js';
// Является ли число простым
function isPrime(number) {
  if (number === 1) return 'no';
  for (let i = 2; i < Math.ceil(number / 2) + 1; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
}
/* Генерируем случайное число. Возвращаем является ли число простым. */
function brainPrime() {
  const randomNumber = createRandomNumber(100);
  console.log(`Question: ${randomNumber}`);
  return isPrime(randomNumber);
}

export default function brainPrimeGame() {
  moveGame(brainPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
}
