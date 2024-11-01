// Создаем случайное число от 1 до maxNumber
export default function createRandomNumber(maxNumber) {
  return Math.ceil(Math.random() * maxNumber);
}
