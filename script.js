'use strict';

let luckyNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    displayMessage('No Number....');
  } else if (guessNumber === luckyNumber) {
    displayMessage('Correct Answer....');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = luckyNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== luckyNumber) {
    if (score > 0) {
      displayMessage(
        guessNumber > luckyNumber ? 'Too High....' : 'Too Low....'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose ....');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  luckyNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing....');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  //   location.reload();
});
