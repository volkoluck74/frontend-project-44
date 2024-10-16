import readlineSync from 'readline-sync';

export default function brainGame(nameOfgame) {
  console.log('Welcome to the Brain Games');
  const username = readlineSync.question('May I have your name?');
  console.log(`Hello, ${username}!`);
  let numbersCorrectAnswers = 0;
  while (numbersCorrectAnswers < 3) {
    let answer;
    let randomNumber;
    let firstOperand;
    let secondOperand;
    let operator;
    switch (nameOfgame) {
      case 'brain-even':
        randomNumber = Math.ceil(Math.random() * 100);
        if (randomNumber % 2 === 0) answer = 'yes';
        else answer = 'no';
        console.log(`Question: ${randomNumber}`);
        break;
      case 'brain-calc':
        firstOperand = Math.ceil(Math.random() * 10);
        secondOperand = Math.ceil(Math.random() * 10);
        operator = Math.ceil(Math.random() * 10);
        if (operator < 3) {
          answer = (firstOperand - secondOperand).toString();
          console.log(`${firstOperand} - ${secondOperand}`);
        }
        if (operator >= 3 && operator < 7) {
          answer = (firstOperand + secondOperand).toString();
          console.log(`${firstOperand} + ${secondOperand}`);
        }
        if (operator >= 7) {
          answer = (firstOperand * secondOperand).toString();
          console.log(`${firstOperand} * ${secondOperand}`);
        }
        break;
      default:
        answer = '';
    }
    const userAnswer = readlineSync.question('You answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
      numbersCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${username}`);
      numbersCorrectAnswers = 0;
    }
  }
  console.log(`Congratulations, ${username}`);
}
