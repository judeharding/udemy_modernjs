
function Question(weight, cAnswer, lAnswer) {
    this.weight = weight;
    this.correctAnswer = cAnswer; // correct answer
    this.learnerAnswer = lAnswer; //learners answer
    // if the learners answer == to the correct answer, below will eval to true
    this.correct = (this.correctAnswer.toUpperCase() === this.learnerAnswer.toUpperCase());
}

Question.prototype.getScore = function() {
    if (this.correct) {
        return this.weight;
    } else {
        return 0;
    }
};


var questions = [],   // creates an empty array for the answers
    finalScore = 0,   // creates the learners score
    possibleScore = 0; // creates the "perfect score"

questions.push(new Question(1, "A", "B"));
questions.push(new Question(1, "D", "B"));
questions.push(new Question(1, "C", "C"));
questions.push(new Question(1, "A", "A"));
questions.push(new Question(1, "B", "B"));

for (let i = 0; i < questions.length; i++) {
    finalScore += questions[i].getScore();
    possibleScore += questions[i].weight;
}
// new es6 syntax
console.log(`The score was ${finalScore} out of ${possibleScore}`);
