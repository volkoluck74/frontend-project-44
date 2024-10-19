import readlineSync from 'readline-sync';

export default function brainProgression() {
  let lengthOfProgression = Math.ceil(Math.random() * 10);
  if (lengthOfProgression < 5) {
    lengthOfProgression = 10 - lengthOfProgression;
  }
  const step = Math.ceil(Math.random() * 10);
  const firstElement = Math.ceil(Math.random() * 10);
  let numberOfHiddenElement = Math.ceil(Math.random() * 10);
  if (numberOfHiddenElement > lengthOfProgression) numberOfHiddenElement -= lengthOfProgression;

  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i !== numberOfHiddenElement - 1) progression.push(firstElement + step * i);
    else progression.push('..');
  }
  const answer = firstElement + step * (numberOfHiddenElement - 1);
  let question = 'Question ';
  for (let i = 0; i < progression.length; i += 1) {
    question += `${progression[i]} `;
  }
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('You answer: ');
  if (answer.toString() === userAnswer) {
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
