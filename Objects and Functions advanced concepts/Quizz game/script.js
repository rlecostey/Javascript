(function() {
    var Question = function(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' - ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(element) {
        if (element == this.correctAnswer) {
            console.log('That\'s correct!');
        } else {
            console.log('Bad answer ...');
        }
    }

    var q1 = new Question(
        'Is Javascript the coolest programming language in the world?',
        ['Yes', 'No'],
        0
    );

    var q2 = new Question(
        'What does best describe coding?',
        ['Boring', 'Hard', 'Fun'],
        2
    );

    var questions = [q1, q2];

    var randomNumber = Math.round(Math.random() * (questions.length - 1));
    questions[randomNumber].displayQuestion();
    var userAnswer = prompt('Please enter your answer:')
    questions[randomNumber].checkAnswer(userAnswer);
})();




