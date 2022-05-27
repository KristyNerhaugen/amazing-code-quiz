// define vars for buttons---querySelectors
var startEl = document.querySelector("#start-button");
var answerEl = document.querySelector("answer");
var highScoreEl = document.querySelector("#high-scores");
var CountDownTimer = document.querySelector("#timer");
var questionTitleEl = document.querySelector("#quiz-question");

// variable declarations
let index = 0;

var questionList = [
    {
        numb: 1,
        question: "1. Commonly used data types do NOT include:",
        choices: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers"],
        answer: 3,
    },
    {
        numb: 2,
        question: "2. The condition in an if / else statement is enclosed with _____.",
        choices: [
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis",
            "4. square brackets"],
        answer: 3,
    },
    {
        numb: 3,
        question: "3. Arrays in JavaScript can be used to store ______.",
        choices: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"],
        answer: 4,
    },
    {
        numb: 4,
        question: "4. A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log"],
        answer: 4,
    },
]

// function to render questions
function renderQuestion() {
    questionTitleEl.innerHTML = questionList[index].question
}

// array to list each question as an object
function generateQuestions() {
    // for loop to cycle through questions 
    questionTitleEl.textContent = questionList[1].question
    for (var i = 0; i < questionList.length; i++) {
        var answerOptions = document.createElement("button")
        answerOptions.textContent = questionList.answer;
        answerOptions.setAttribute("value", questionList[i]);
        answerEl.appendChild(answerEl);
    }
    // string for questions and answers
    if (index < 4) {
        renderQuestion();
    }

    else {
        console.log("Alert!");
    }
}

// function to render answer choices
function renderAnswers() {
    answerEl.innerHTML = questionList[index].choices
}
// function to generate answer choices 
function generateAnswers() {
    if (index < 4) {
        renderAnswers();
    }

    else {
        console.log("Alert!");
    }
}

// Click to start quiz and display first question
startEl.addEventListener('click', generateQuestions)
// click to start quiz and display first question answers 
startEl.addEventListener('click', generateAnswers)
// click to have start quiz button hide 
startEl.addEventListener('click', () => {
    startEl.style.display = 'none';
});

// function to start timer when quiz starts: moved the time into the event listener to get the timer to start only when the start quiz button begins
startEl.addEventListener('click', () => {
    var now = 600;

    var x = setInterval(function () {

        CountDownTimer.innerHTML = now;
        // now will change and go down by one
        now--;
        if (now < 0) {
            clearInterval(x);
        }
    }, 1000);
});

// tell user if answer is correct or wrong, time penalties when questions are answered wrong/false

// at end of quiz allow for input of initials with score

// store high scores
