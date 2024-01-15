let points = 0;

function checkAnswer(currentSection) {
    const correctAnswers = [null, "b", "b", "c", "b", "a"];

    const selectedAnswer = document.querySelector(`input[name="urlQuiz"]:checked,
        input[name="designQuiz"]:checked,
        input[name="contactQuiz"]:checked,
        input[name="paymentQuiz"]:checked,
        input[name="socialQuiz"]:checked`).value;

    if (selectedAnswer === correctAnswers[currentSection]) {
        points += 3;
        showAnswerFeedback(true);
    } else {
        showAnswerFeedback(false);
    }

    document.getElementById(`section${currentSection}`).style.display = 'none';
    const nextSection = currentSection + 1;
    if (nextSection <= 5) {
        document.getElementById(`section${nextSection}`).style.display = 'block';
    } else {
        document.getElementById('resultContainer').style.display = 'block';
        document.getElementById('totalPoints').innerText = points;
        // Add other result updates
    }
}

function showAnswerFeedback(isCorrect) {
    const correctAnswerElement = document.querySelector('.correct-answer');
    const incorrectAnswerElement = document.querySelector('.incorrect-answer');
    if (isCorrect) {
        correctAnswerElement.classList.add('show');
    } else {
        incorrectAnswerElement.classList.add('show');
    }
}
