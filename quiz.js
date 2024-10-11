// Function to check the user's answer
function checkAnswer() {
  // Correct answer is "4"
  const correctAnswer = "4";

  // Retrieve the user's selected answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // If no option is selected
  if (!userAnswer) {
      document.getElementById('feedback').textContent = "Please select an answer.";
      return;
  }

  // Compare the user's answer with the correct one
  if (userAnswer.value === correctAnswer) {
      document.getElementById('feedback').textContent = "Correct! Well done.";
  } else {
      document.getElementById('feedback').textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
