// define vars for buttons---querySelectors
var startEl = document.querySelector("#start-button");
var answerEl = document.querySelector("answer");
var highScoreEl = document.querySelector("#high-scores");
var CountDownTimer = document.querySelector("#timer");
var questionTitleEl = document.querySelector("#quiz-question");

// variable declarations
// let index = 0;

var questionList = [
    {
        question: "1. Commonly used data types do NOT include:",
        answers: [
            "1. strings",
            "2. booleans",
            "3. alerts", // 3 is the correct answer
            "4. numbers"],
    },
    {
        question: "2. The condition in an if / else statement is enclosed with _____.",
        answers: [
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis", // 3 is the correct answer
            "4. square brackets"],
    },
    {
        question: "3. Arrays in JavaScript can be used to store ______.",
        answers: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"], // 4 is the correct answer
    },
    {
        question: "4. A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log"], // 4 is the correct answer
    },
]

let questionNumber = 0;
// function to generate questions
function generateQuestions() {
    // for loop to cycle through questions 
    questionTitleEl.textContent = questionList[questionNumber].question
    // for (var i = 0; i < questionList.length; i++) {
    //     var answerOptions = document.createElement("button")
    //     answerOptions.textContent = questionList.answer;
    //     answerOptions.setAttribute("value", questionList[i]);
    //     answerEl.appendChild(answerOptions);
    // }
    // // string for questions and answers
    // if (index < 4) {
    //     renderQuestion();
    // }

    // else {
    //     console.log("Alert!");
    // }
}


// // function to start the quiz
// var startQuiz = function() {
//     renderQuestion();
//     renderAnswers);
// }




// function to start timer when quiz starts: moved the time into the event listener to get the timer to start only when the start quiz button begins
startEl.addEventListener('click', () => {
    var now = 600;
    startEl.style.display = 'none';
    var x = setInterval(function () {

        CountDownTimer.innerHTML = now;
        // now will change and go down by one
        now--;
        if (now < 0) {
            clearInterval(x);
        }
    }, 1000);
generateQuestions();
});

// on click to start quiz prompt user to input initials for high score

// function to start quiz and another one to end quiz?

// tell user if answer is correct or wrong, time penalties when questions are answered wrong/false

// at end of quiz allow for input of initials with score

// store high scores
