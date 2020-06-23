"use strict";
var cardfooter = document.querySelector(".cardfooter");
var flashcards = [
    { question: "Question 1", answer: "Answer" },
    { question: "Question 2", answer: "Answer2" }
];
function drawFlashcard() {
    document.querySelector(".question").innerHTML = "<h3>" + flashcards[0].question + "</h3>";
}
function cardCounter() {
    document.querySelector(".cardfooter").innerHTML = "";
    document.querySelector(".cardfooter").innerHTML = "Total " + flashcards.length;
}
function showAnswer() {
    document.querySelector("#answer").innerHTML = "";
    document.querySelector("#answer").innerHTML = "<p>" + flashcards[0].answer + "</p>";
}
document.querySelector("#answerbutton").addEventListener("click", function () {
    showAnswer();
});
window.addEventListener("load", function () {
    drawFlashcard();
    cardCounter();
});
//# sourceMappingURL=Script.js.map