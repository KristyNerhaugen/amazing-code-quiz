// get users score out of local storage
var mostRecentScore = localStorage.getItem('mostRecentScore');

// update displayed text to show final score
var finalScore = document.getElementById('finalScore');
finalScore.innerText = mostRecentScore;

// save high score function using => shorthand
saveHighScore = e => {
    // prevent form from defaulting to saving to a new page
    e.preventDefault();
};
