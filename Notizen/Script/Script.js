"use strict";
var dates = new Date();
var titles = document.querySelector("#title");
var texts = document.querySelector("#text");
function date() {
    document.getElementById("date").innerHTML = dates.toDateString();
}
window.addEventListener("load", function () {
    date();
    drawNotestoDOM();
});
var notes = [
    { title: "Uhr", text: "Eine Uhr nach der Pomodoro-Methode erstellen", day: dates.toDateString(), done: false },
    { title: "Karteikarten", text: "Eine Karteikarten-App mit Ja-Nein Fragen erstellen", day: dates.toDateString(), done: false },
    { title: "To-Do-App", text: "Eine To-Do-App mit Datum und zweiter Liste für erledigtes erstellen", day: dates.toDateString(), done: false },
    { title: "Kalender", text: "Einen Kalender erstellen", day: dates.toDateString(), done: false },
    { title: "Quiz", text: "Ein Harry-Potter Quiz mit 10 Fragen und je 4 Antwortmöglichkeiten", day: dates.toDateString(), done: false },
    { title: "Site", text: "Alle anderen Projekte auf der Seite verlinken, Navigationsleiste (animiert?)", day: dates.toDateString(), done: false }
];
function drawNotestoDOM() {
    document.getElementById("task").innerHTML = "";
    for (let index = 0; index < notes.length; index++) {
        let newDiv = document.createElement("div");
        let newTrash = document.createElement("div");
        newDiv.innerHTML = "<h3>" + notes[index].title + "</h3>" + "<p>" + notes[index].text + "</p>"
            + "<p class='day'> created at " + notes[index].day + "</p>";
        newTrash.innerHTML = "<label class='far fa-trash-alt fa-2x'>";
        newTrash.classList.add("tools");
        newDiv.classList.add("tasks");
        document.getElementById("task").appendChild(newDiv);
        newDiv.appendChild(newTrash);
        document.querySelector(".fa-trash-alt").addEventListener("click", function () {
            deleteElement(index);
        });
    }
}
function createNewElement() {
    let titles = document.querySelector("#title");
    let texts = document.querySelector("#text");
    notes.unshift({
        title: titles.value,
        text: texts.value,
        day: dates.toDateString(),
        done: false
    });
    titles.value = "";
    texts.value = "";
    drawNotestoDOM();
}
function deleteElement(position) {
    notes.splice(position, 1);
    drawNotestoDOM();
}
window.addEventListener("load", function () {
    document.querySelector("#add").addEventListener("click", function () {
        createNewElement();
    });
    window.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            createNewElement();
        }
    });
});
//# sourceMappingURL=Script.js.map