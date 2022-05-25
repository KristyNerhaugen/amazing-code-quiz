// define vars for buttons
var startEl = document.querySelector("#start-button");
var answerEl = document.querySelector("answer");
var highScoreEl = document.querySelector("#high-scores");

// array to list each question as an object
function generateQuestions() {
    // string for questions and answers

    var questionList = [
        {
            numb: 1,
            question: "Question one: what is the answer?", 
            choices: [
                "Yes", 
                "No", 
                "Maybe", 
                "I don't know."],
            // set answer to number in the choices string that corresponds with correct answer
                answer: 3
        },
        {
            numb: 2,
            question: "Question two: what is the answer?", 
            choices: [
                "2Yes", 
                "2No", 
                "2Maybe", 
                "2I don't know."],
            // set answer to number in the choices string that corresponds with correct answer
            answer: 2
        },
        {
            numb: 3,
            question: "Question three: what is the answer?", 
            choices: [
                "3Yes", 
                "3No", 
                "3Maybe", 
                "3I don't know."],
            // set answer to number in the choices string that corresponds with correct answer
            answer: 4
        },
        {
            numb: 4,
            question: "Question four: what is the answer?", 
            choices: [
                "4Yes", 
                "4No", 
                "4Maybe", 
                "4I don't know."],
            // set answer to number in the choices string that corresponds with correct answer
            answer: 2
        }, 
    ]
}

// Click to start quiz and display first question
function startQuiz() {
    renderQuestions()

}

// loop (?) to display question 2, 3, and then 4

// function to start timer when quiz starts 

// tell user if answer is correct or wroing, time penalties when questions are answered wrong/false

// at end of quiz allow for input of initials with score

// store high scores
