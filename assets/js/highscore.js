// get users score out of local storage
var mostRecentScore = localStorage.getItem('mostRecentScore');

// update displayed text to show final score
var finalScore = document.getElementById('finalScore');

// high scores var to get high scores from local storage
var highScores = JSON.parse(localStorage.getitem("highScores"));

// display final score text
finalScore.innerText = mostRecentScore;

// save high score function using => shorthand
saveHighScore = e => {
    // prevent form from defaulting to saving to a new page
    e.preventDefault();

// set the score to equal the most recent user's score
var score = {
    score: mostRecentScore
};
// put most recent score onto high scores
highScores.push(score);
console.log(highScores);
};