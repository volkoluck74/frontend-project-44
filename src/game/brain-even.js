import readlineSync from 'readline-sync';

export default function brainEven() {
  const randomNumber = Math.ceil(Math.random() * 100);
  let answer = 'no';
  if (randomNumber % 2 === 0) answer = 'yes';
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
