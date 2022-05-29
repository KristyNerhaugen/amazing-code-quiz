// variable declarations
var question = document.getElementById("quiz-question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Commonly used data types do NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4: "square brackets",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 4
    },
];

var correct_points = 10;

// start quiz function

function startQuiz() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion(); // define this function below
};

// get new question function

function getNewQuestion() {

    // if statement if the number of questions left in the array is zero, take user to the high score page
    if (availableQuestions.length === 0) {
        return window.location.assign("/end.html");
    }

    questionCounter++;
    // generate a random question by using Math random
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    // display the generated quesiton using innerText
    question.innerText = currentQuestion.question;

    // generate answers that correspond to the displayed question
    // I learned that I can call a function by using => shortcut (for example, here I use that instead of function choice ()
    choices.forEach(choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })
    // ensure questions aren't generated mulitple times by splicing out question that was just used 
    availableQuestions.splice(questionIndex, 1);

    // allow users to answer question
    acceptingAnswers = true;
};

// get reference to which answer is clicked 
choices.forEach(choice => {
    choice.addEventListener('click', event => {
        // allow user to select answer
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = event.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        // create default incorrect class to determine if correct answer is selected
        var classToApply = 'incorrect';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        }
        // call increment score if the correct answer is selected in order to give points for correct score
        if (classToApply === 'correct') {
            incrementScore(correct_points);
        }
        // // apply the selected class to the selected answer, using parentElement to get the entire container
        // selectedChoice.parentElement.classList.add(classToApply);

        // call function to have new question generate once current question is answered
        getNewQuestion();
    });
})

// function to keep track of score, setting the var of num for the score number 
// learned that I can simplift var num = function incrementScore() by using the short hand of =>

incrementScore = num => {
    score +- num;
    scoreText.innerText = score;
    console.log(num);
}

// call startQuiz function
startQuiz();
