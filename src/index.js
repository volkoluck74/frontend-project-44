import readlineSync from 'readline-sync';
import brainEven from './game/brain-even.js';
import brainCalc from './game/brain-calc.js';
import brainGCD from './game/brain-gcd.js';
import brainProgression from './game/brain-progression.js';
import brainPrime from './game/brain-prime.js';

export default function game(nameOfgame) {
  console.log('Welcome to the Brain Games');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  let functionOfGame;
  switch (nameOfgame) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      functionOfGame = brainEven;
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      functionOfGame = brainCalc;
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      functionOfGame = brainGCD;
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      functionOfGame = brainProgression;
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      functionOfGame = brainPrime;
      break;
    default:
      console.log('Error');
  }
  let numberOfCorrectAnswers = 0;
  while (numberOfCorrectAnswers < 3) {
    const play = functionOfGame();
    if (play.result === true) {
      numberOfCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${play.userAnswer}' is wrong answer ;(. Correct answer was '${play.answer}'`);
      console.log(`Let's try again, ${username}`);
      numberOfCorrectAnswers = 0;
    }
  }
  console.log(`Congratulations, ${username}!`);
}
