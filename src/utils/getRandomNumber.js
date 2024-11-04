// Создаем случайное число от minNumber до maxNumber
export default function getRandomNumber(maxNumber, minNumber = 1) {
  const result = Math.ceil(Math.random() * maxNumber);
  if (result < minNumber) return getRandomNumber();
  return result;
}