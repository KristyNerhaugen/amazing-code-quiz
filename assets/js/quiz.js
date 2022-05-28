// variable declarations
var question = document.getElementById("quiz-question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "1. Commonly used data types do NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4:"numbers",
        answer: 3
    },
    {
        question: "2. The condition in an if / else statement is enclosed with _____.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4: "square brackets",
        answer: 3
    },
    {
        question: "3. Arrays in JavaScript can be used to store ______.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4
    },
    {
        question: "4. A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 4
    },
];