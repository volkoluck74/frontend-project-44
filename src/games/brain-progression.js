import getRandomNumber from '../utils/getRandomNumber.js';
import startGame from '../index.js';
/*  Выводим арифмитическую последовательность с одним скрытым элементом.
 Возвращаем скрытый элемент */
function brainProgression() {
  // Длина прогрессии от 5 до 10 чисел
  let lengthOfProgression = getRandomNumber(10);
  if (lengthOfProgression < 5) lengthOfProgression = 10 - lengthOfProgression;
  // Шаг прогрессии
  const step = getRandomNumber(10);
  // Номер скрытого элемента
  let numberOfHiddenElement = getRandomNumber(10);
  // Первый элемент прогрессии
  const firstElement = getRandomNumber(10);
  // Если полученный номер скрытого элемента больше чем длина последовательности,
  // изменяем его, вычитая длину последовательности
  if (numberOfHiddenElement > lengthOfProgression) numberOfHiddenElement -= lengthOfProgression;
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i !== numberOfHiddenElement - 1) progression.push(firstElement + step * i);
    else progression.push('..');
  }
  // Значение скрытого элемента
  const answer = firstElement + step * (numberOfHiddenElement - 1);
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    question += `${progression[i]} `;
  }
  console.log(`Question: ${question}`);
  return answer.toString();
}

export default function brainProgressionGame() {
  startGame(brainProgression, 'What number is missing in the progression?');
}
