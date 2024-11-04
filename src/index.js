import readlineSync from 'readline-sync';
/* Функция приветствует пользователя в игре, объясняет правила (в зависимости от аргумента).
Запускает игру переданную аргументом, получает правильный ответ и ответ пользователя.
При трех совпадениях ответов - поздравляет, иначе утешает */
export default function startGame(game, rule) {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(rule);
  let numberOfCorrectAnswers = 0;
  while (numberOfCorrectAnswers < 3) {
    const answer = game();
    const userAnswer = readlineSync.question('You answer: ');
    if (answer === userAnswer) {
      numberOfCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${username}!`);
      break;
    }
  }
  if (numberOfCorrectAnswers === 3) console.log(`Congratulations, ${username}!`);
}
