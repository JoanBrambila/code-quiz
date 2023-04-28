// Define an array of objects that contain the questions, possible answers, and correct answer for the quiz
var quizQuestions = [
  {
    question: "A very useful tool used during the development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log"
  },
  {
    question: "Commonly used data types Do Not Include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "numbers"
  },
  {
    question: "The condition in an if/else statement is enclosed with.....",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store.....",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  }
];

// Define variables to keep track of the quiz score and current question
var score = 0;
var currentQuestion = 0;
var timer;
var timerCount;
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var initials = document.querySelector(".input");
var quiz = document.querySelector("#quiz");

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = 'Time left: ' + timerCount + ' sec';
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}


function startQuiz() {
  timerCount = 20;
  startTimer();
  // show the first question
  proceedToNextQuestion();
  
// Check if there are any more questions left in the quiz
if (currentQuestion < quizQuestions.length) {
  // If there are, display the next question and possible answers
  document.getElementById("question").innerHTML = quizQuestions[currentQuestion].question;
  document.getElementById("choice0").innerHTML = quizQuestions[currentQuestion].choices[0];
  document.getElementById("choice1").innerHTML = quizQuestions[currentQuestion].choices[1];
  document.getElementById("choice2").innerHTML = quizQuestions[currentQuestion].choices[2];
  document.getElementById("choice3").innerHTML = quizQuestions[currentQuestion].choices[3];
}
}

// Define a function to check the user's answer and update the score
function checkAnswer(event) {
  console.log('checkAnswer function has run');
  console.log('event looks like', event);
  var clickTarget = event.target;
  if(clickTarget.matches('button')) {
    var buttonText = clickTarget.textContent;
    // compare the text of the button that was clicked on to the current question's correct answer
    if(buttonText == quizQuestions[currentQuestion].correctAnswer) {
      console.log('Correct answer selected! Great job!');
      // and probably (definitely) do some other stuff as well
      // go to the next question, but before that add 1 to the currentQuestion variable
      score++;
      currentQuestion = currentQuestion + 1;
      proceedToNextQuestion()
    }
    else {
      timerCount -= 10;
      currentQuestion = currentQuestion + 1;
      proceedToNextQuestion()
    }
    }
  }


function proceedToNextQuestion() {
  // Display the first question and possible answers
  document.getElementById("question").innerHTML = quizQuestions[currentQuestion].question;
  document.getElementById("choice0").innerHTML = quizQuestions[currentQuestion].choices[0];
  document.getElementById("choice1").innerHTML = quizQuestions[currentQuestion].choices[1];
  document.getElementById("choice2").innerHTML = quizQuestions[currentQuestion].choices[2];
  document.getElementById("choice3").innerHTML = quizQuestions[currentQuestion].choices[3];
}



function endQuiz() {
    document.getElementById("quiz").innerHTML = "All done! Your final score is " + score + " out of " + quizQuestions.length + ".";
  console.log('The quiz time has ended. Game over');
}


startButton.addEventListener("click", startQuiz);
quiz.addEventListener("click", checkAnswer);