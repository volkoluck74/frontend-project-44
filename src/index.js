import readlineSync from 'readline-sync';

export default function chooseGame(game, rule) {
  console.log('Welcome to the Brain Games');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(rule);
  let numberOfCorrectAnswers = 0;
  while (numberOfCorrectAnswers < 3) {
    const play = game();
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
