// define vars for buttons
var startEl = document.querySelector("#start-button");
var answerEl = document.querySelector("answer");
var highScoreEl = document.querySelector("#high-scores");
var CountDownTimer = document.querySelector("#timer");
var CountDownTimer = new Date("Jan 1, 2023 15:37:25").getTime();

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
}

// Click to start quiz and display first question
function startQuiz() {
    renderQuestions()

}

// loop (?) to display question 2, 3, and then 4

// function to start timer when quiz starts 
// code for countdown timer created using https://www.w3schools.com/howto/howto_js_countdown.asp as a guide
var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTMLS = ('days + "d " + hours + "h " + minutes + "m " + seconds "s "');

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Time is up!";
    }
}, 1000);

// tell user if answer is correct or wroing, time penalties when questions are answered wrong/false

// at end of quiz allow for input of initials with score

// store high scores
