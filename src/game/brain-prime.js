import readlineSync from 'readline-sync';

export default function brainPrime() {
  const randomNumber = Math.ceil(Math.random() * 100);
  let answer = 'yes';
  for (let i = 2; i < Math.ceil(randomNumber / 2) + 1; i += 1) {
    if (randomNumber % i === 0) {
      answer = 'no';
      break;
    }
  }
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('You answer: ');
  if (answer === userAnswer) {
    return {
      result: true,
    };
  }
  return {
    result: false,
    userAnswer,
    answer,
  };
}
