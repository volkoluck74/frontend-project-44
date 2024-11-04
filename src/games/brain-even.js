import getRandomNumber from '../utils/getRandomNumber.js';
import startGame from '../index.js';
// Является ли число четным
function isEven(number) {
  if (number % 2 === 0) return true;
  return false;
}
/* Генерируем случайное число. Возвращаем является ли число четным. */
function brainEven() {
  const randomNumber = getRandomNumber(100);
  console.log(`Question: ${randomNumber}`);
  return isEven(randomNumber) ? 'yes' : 'no';
}

export default function brainEvenGame() {
  startGame(brainEven, 'Answer "yes" if the number is even, otherwise answer "no".');
}
