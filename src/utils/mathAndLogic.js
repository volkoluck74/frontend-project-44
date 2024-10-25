// Создаем случайное число до 10
export function createRandomNumberBefore10() {
  return Math.ceil(Math.random() * 10);
}
// Создаем случайное число до 100
export function createRandomNumberBefore100() {
  return Math.ceil(Math.random() * 100);
}
// Разность двух операндов
function diff(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}
// Сложение двух операндов
function sum(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}
// Умножение двух операндов
function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}
// Случайный выбор операции
export function chooseOperation() {
  const random = createRandomNumberBefore10();
  if (random < 4) return sum;
  if (random >= 4 && random < 8) return diff;
  return multiply;
}
// Возврат результата случайное операции
export function resultOfOperation(firstOperand, secondOperand, operation) {
  switch (operation) {
    case sum:
      console.log(`Question: ${firstOperand} + ${secondOperand}`);
      break;
    case diff:
      console.log(`Question: ${firstOperand} - ${secondOperand}`);
      break;
    case multiply:
      console.log(`Question: ${firstOperand} * ${secondOperand}`);
      break;
    default:
      console.log('Undefined operation');
  }
  return operation(firstOperand, secondOperand);
}
// Является ли число четным
export function isEven(number) {
  if (number % 2 === 0) return 'yes';
  return 'no';
}
// Получаем наибольший общий делитель двух чисел
export function getGCD(firstNumber, secondNumber) {
  let answer = Math.min(firstNumber, secondNumber);
  while (firstNumber % answer !== 0 || secondNumber % answer !== 0) {
    answer -= 1;
  }
  return answer.toString();
}
// Является ли число простым
export function isPrime(number) {
  if (number === 1) return 'no';
  for (let i = 2; i < Math.ceil(number / 2) + 1; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
}
// Выводим арифмитическую програссию и возвращаем ее скрытый элемент
export function getHiddenElement() {
  // Длина прогрессии от 5 до 10 чисел
  let lengthProgression = createRandomNumberBefore10();
  if (lengthProgression < 5) lengthProgression = 10 - lengthProgression;
  // Шаг прогрессии
  const step = createRandomNumberBefore10();
  // Номер скрытого элемента
  let numberOfHiddenElement = createRandomNumberBefore10();
  // Первый элемент прогрессии
  const firstElement = createRandomNumberBefore10();
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
