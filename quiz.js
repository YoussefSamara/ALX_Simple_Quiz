// Function to check the user's answer and provide feedback
function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = "4";
    
    // Get the user's selected answer using querySelector
    const userAnswerr = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = userAnswerr.value;


    // Check if an answer is selected


        // Compare the selected value with the correct answer
        let feedback; // Variable to hold feedback message
        
        if (userAnswer === correctAnswer) {
            // If the answer is correct
            feedback = "Correct! Well done.";
        } else {
            // If the answer is incorrect
            feedback = "That's incorrect. Try again!";
        }

        // Update the feedback element with the message
        document.getElementById('feedback').textContent = feedback;

}

// Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);


