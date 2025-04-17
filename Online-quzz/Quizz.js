// Get all the required HTML elements
const container = document.querySelector('.box');
const btn = document.querySelector('.btn');
const restartbtn = document.querySelector('.restart');
const question1 = document.querySelector('.Question-1');
const question2 = document.querySelector('.Question-2');
const question3 = document.querySelector('.Question-3');
const question4 = document.querySelector('.Question-4');
const question5 = document.querySelector('.Question-5');
const Time = document.querySelector('.Time');
const questions = [question1, question2, question3, question4, question5];

let count = 0;
let finalreult = 0;
let wrongcount = 0;
let timer;
let Myinterval; // Declare Myinterval to hold the interval reference

// Display the current time every second
function timecount() {
  let fixed = 30;
  Myinterval = setInterval(function () {
    if (fixed > 0) {
      fixed--;
    } else {
      fixed = 30;
    }
    Time.textContent = String(fixed).padStart(2, '0'); // Update the time every second
  }, 1000);
}

// Clear container and show the first question with the button
container.innerHTML = '';
container.appendChild(Time);
container.appendChild(btn);
container.appendChild(questions[count]);

timecount(); // Start the time interval function
startAutoAdvance(); // Start the auto-timer for the first question

// When user clicks the button
btn.addEventListener('click', function () {
  clearTimeout(timer); // Stop the 30-second timer
  clearInterval(Myinterval); // Stop the previous interval
  timecount(); // Start fresh 30-second countdown
  checkAnswerAndNext(); // Manually go to next question
});

// Function to check the answer and go to the next question
function checkAnswerAndNext() {
  // Check if the user selected the correct answer
  const selectedAnswer = document.querySelector(`.Answer${count}:checked`);
  if (selectedAnswer) {
    finalreult++; // Correct answer
  } else {
    wrongcount++; // No answer = Wrong
  }

  count++; // Move to the next question

  // If there are more questions, show the next one
  if (count < questions.length) {
    container.innerHTML = '';
    container.appendChild(Time);
    container.appendChild(btn);
    container.appendChild(questions[count]);
    clearInterval(Myinterval);
    timecount();
    startAutoAdvance(); // Start 30-second auto move for the next question
  } else {
    // If quiz is done, show result
    container.innerHTML = `<br>
      You scored ${finalreult} out of ${questions.length}<br>
      Wrong Answers: ${wrongcount}<br><br>
    `;

    // Show restart button
    restartbtn.style.display = 'block';
    container.appendChild(restartbtn);

    // Restart the quiz when restart button is clicked
    restartbtn.addEventListener('click', function () {
      location.reload(); // Reload the page to restart the quiz
    });
  }
}

// Function to auto-move to next question after 30 seconds
function startAutoAdvance() {
  timer = setTimeout(() => {
    checkAnswerAndNext(); // Auto go to next question
  }, 30000); // 30 seconds for each question
}
