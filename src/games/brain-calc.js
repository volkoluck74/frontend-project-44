import getRandomNumber from '../utils/getRandomNumber.js';
import startGame from '../index.js';
/* Функция возвращает название опреции, в зависимости от переданного операнда (случайного числа).
Для изменения вероятности "выпадания" пользователю определенной операции - изменить диапазон */
function getOperation(randomNumber) {
  if (randomNumber < 4) return 'sum';
  if (randomNumber >= 8) return 'multyply';
  return 'diff';
}
/* Функция на вход получает два операнда и название операцию. Результат вызова функции -
вопрос выводимый в консоль */
function getQuestion(firstOperand, secondOperand, operation) {
  if (operation === 'sum') return console.log(`Question: ${firstOperand} + ${secondOperand}`);
  if (operation === 'multyply') return console.log(`Question: ${firstOperand} * ${secondOperand}`);
  return console.log(`Question: ${firstOperand} - ${secondOperand}`);
}
/* Функция на вход получает два операнда и название операцию. Результат вызова функции -
результат соответствующей арифметической операции */
function getResultOfOperation(firstOperand, secondOperand, operation) {
  if (operation === 'sum') return firstOperand + secondOperand;
  if (operation === 'multyply') return firstOperand * secondOperand;
  return firstOperand - secondOperand;
}
/* Генерируем два операнда и арифметическую операцию. Выводим пользователю в консоль вопрос
и возвращаем результат соответствующей операции */
function brainCalc() {
  const firstOperand = getRandomNumber(10);
  const secondOperand = getRandomNumber(10);
  const operation = getOperation(getRandomNumber(10));
  getQuestion(firstOperand, secondOperand, operation);
  return getResultOfOperation(firstOperand, secondOperand, operation).toString();
}

export default function brainCalcGame() {
  startGame(brainCalc, 'What is the result of the expression?');
}
