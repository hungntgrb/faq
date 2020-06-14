const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // console.log(btn.parentElement.parentElement);
    const question = btn.parentElement.parentElement;
    const questions = document.querySelectorAll(".question");
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show");
      }
    });
    question.classList.toggle("show");
  });
});
