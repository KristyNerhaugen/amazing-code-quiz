// define vars for buttons
var startEl = document.querySelector("#start-button");
var answerEl = document.querySelector("answer");
var highScoreEl = document.querySelector("#high-scores");
var CountDownTimer = document.querySelector("#timer");
var questionTitleEl = document.querySelector("#quiz-question");
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
        answer: 3,
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

let index = 0; 

function renderQuestion() {

questionTitleEl.innerHTML = questionList[index].question
}

// array to list each question as an object
function generateQuestions() {

    // trying to hide start button using https://javascript.plainenglish.io/how-to-apply-css-styles-to-page-elements-using-javascript-e6d4a22a40de and https://careerkarma.com/blog/css-hide-element/ for guidance
    // this worked on the second click:
    // startEl.addEventListener('click', () => {
    //     startEl.style.display = 'none';
    // });

    // string for questions and answers
    if (index < 4){
        renderQuestion();
    }

    else {
    console.log("Alert!");
    }
    
    // for (var i = 0; i < questionList.Length; i++) {
        
        
    // }

}
// when clicking start button, hide the start button so quiz can begin 

// }

startEl.addEventListener('click', generateQuestions)


// Click to start quiz and display first question
// function startQuiz() {
//     renderQuestions()

// }

// loop (?) to display question 2, 3, and then 4

// function to start timer when quiz starts 

// code for countdown timer created using https://www.w3schools.com/howto/howto_js_countdown.asp as a guide

var now = 600;

var x = setInterval(function() {

    CountDownTimer.innerHTML = now;
// now will change and go down by one
    now--;
    if (now < 0) {
        clearInterval(x);
    }
}, 1000);

// tell user if answer is correct or wrong, time penalties when questions are answered wrong/false

// at end of quiz allow for input of initials with score

// store high scores
