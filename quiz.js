const correctAnswer = "4";
const userAnswer = document.querySelector('input[name="quiz"]:checked');
function checkAnswer() {
    if (!userAnswer) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }
    const selectedValue = userAnswer.value;
    if (selectedValue === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

