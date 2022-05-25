// var to start quiz
var startEl = document.querySelector("#start-button");

// arrays of objects for each question
function generateQuestions() {
    // string for questions and answers

    var questionList = [
        {
            question: "Question one: what is the answer?", "Question two: what is the answer?", "Question three: what is the answer?", "Question four: what is the answer?",
            choices: ["Yes", "No", "Maybe", "I don't know."], ["2Yes", "2No", "2Maybe", "2I don't know."],["3Yes", "3No", "3Maybe", "3I don't know."],["4Yes", "4No", "4Maybe", "4I don't know."],
            // set answer to wherever the correct answer is in the string
            answer: 3, 2, 3, 1
        }
        
    ]
}

// Click to start quiz
function startQuiz() {
    renderQuestions()

}
// function to start the quiz and timer

// tell user if answer is correct or wrong, if wrong subtract time

// allow for input of initials with score

// store high scores
