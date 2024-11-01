import createRandomNumber from '../utils/createRandomNumber.js';
import moveGame from '../index.js';
/*  Выводим арифмитическую последовательность с одним скрытым элементом.
 Возвращаем скрытый элемент */
function brainProgression() {
  // Длина прогрессии от 5 до 10 чисел
  let lengthProgression = createRandomNumber(10);
  if (lengthProgression < 5) lengthProgression = 10 - lengthProgression;
  // Шаг прогрессии
  const step = createRandomNumber(10);
  // Номер скрытого элемента
  let numberOfHiddenElement = createRandomNumber(10);
  // Первый элемент прогрессии
  const firstElement = createRandomNumber(10);
  if (numberOfHiddenElement > lengthProgression) numberOfHiddenElement -= lengthProgression;
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
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
  moveGame(brainProgression, 'What number is missing in the progression?');
}
