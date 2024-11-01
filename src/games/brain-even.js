import createRandomNumber from '../utils/createRandomNumber.js';
import moveGame from '../index.js';
// Является ли число четным
function isEven(number) {
  if (number % 2 === 0) return 'yes';
  return 'no';
}
/* Генерируем случайное число. Возвращаем является ли число четным. */
function brainEven() {
  const randomNumber = createRandomNumber(100);
  console.log(`Question: ${randomNumber}`);
  return isEven(randomNumber);
}

export default function brainEvenGame() {
  moveGame(brainEven, 'Answer "yes" if the number is even, otherwise answer "no".');
}
