var cardfooter: Element = document.querySelector(".cardfooter");

interface Flashcard {
    question: string; 
    answer: string;
}

var flashcards: Flashcard[] = [
    {question: "Question 1", answer: "Answer" },
    {question: "Question 2", answer: "Answer2"}
];

function drawFlashcard (): void {
    document.querySelector(".question").innerHTML = "<h3>" + flashcards[0].question + "</h3>";
}

function cardCounter (): void {
    document.querySelector(".cardfooter").innerHTML = "";
    document.querySelector(".cardfooter").innerHTML = "Total " + flashcards.length; 

}

function showAnswer (): void  {
    document.querySelector("#answer").innerHTML = "";
    document.querySelector("#answer").innerHTML = "<p>" + flashcards[0].answer + "</p>";
}

document.querySelector("#answerbutton").addEventListener("click", function (): void {
    showAnswer();
});
window.addEventListener("load", function (): void {
    drawFlashcard();
    cardCounter();
});