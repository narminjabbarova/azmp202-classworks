document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");
  
    questions.forEach((question, index) => {
      question.addEventListener("click", () => {
        const answer = document.getElementById(`answer${index + 1}`);
        answer.classList.toggle("show");
      });
    });
  });