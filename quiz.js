const correctAnswer = "4"; // الإجابة الصحيحة
// الحصول على الاختيار الذي قام به المستخدم
const userAnswer = document.querySelector('input[name="quiz"]:checked');
const selectedValue = userAnswer.value;
function checkAnswer() {

    // التأكد من أن المستخدم قام باختيار إجابة
    if (!userAnswer) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }

    // تخزين القيمة التي اختارها المستخدم في متغير

    // مقارنة القيمة التي اختارها المستخدم مع الإجابة الصحيحة
    if (selectedValue === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// إضافة حدث عند النقر على الزر لتنفيذ الوظيفة
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
