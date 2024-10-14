import readlineSync from 'readline-sync';

export default function evenGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let step = 0;
  let answer = '';
  while (step < 3) {
    const randomNumber = Math.ceil(Math.random(0, 100) * 100);
    if (randomNumber % 2 === 0) answer = 'yes';
    else answer = 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log("Let's try again");
      step = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
