'use strict';
let displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let score = 20;
let highscore = 0;
let secretnumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displaymessage('No number entered!');
  } else if (guess === secretnumber) {
    displaymessage('correct number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      score--;
      displaymessage(guess > secretnumber ? 'Too high' : 'Too low');
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('You lose the game');
      document.querySelector('.score').textContent = '0';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displaymessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
