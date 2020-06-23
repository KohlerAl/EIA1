var dates: Date = new Date();
var titles: HTMLInputElement = document.querySelector("#title");
var texts: HTMLInputElement = document.querySelector("#text");

function date(): void {
    document.getElementById("date").innerHTML = dates.toDateString();
}

window.addEventListener("load", function (): void {
    date();
    drawNotestoDOM();
});

interface Notes {
    title: string;
    text: string;
    day: string;
    done: boolean;
}

var notes: Notes[] = [
    {title: "Uhr", text: "Eine Uhr nach der Pomodoro-Methode erstellen", day: dates.toDateString(), done: false},
    {title: "Karteikarten", text: "Eine Karteikarten-App mit Ja-Nein Fragen erstellen", day: dates.toDateString(), done: false},
    {title: "To-Do-App", text: "Eine To-Do-App mit Datum und zweiter Liste für erledigtes erstellen", day: dates.toDateString(), done: false},
    {title: "Kalender", text: "Einen Kalender erstellen", day: dates.toDateString(), done: false},
    {title: "Quiz", text: "Ein Harry-Potter Quiz mit 10 Fragen und je 4 Antwortmöglichkeiten", day: dates.toDateString(), done: false},
    {title: "Site", text: "Alle anderen Projekte auf der Seite verlinken, Navigationsleiste (animiert?)", day: dates.toDateString(), done: false}
]; 

function drawNotestoDOM(): void {
    document.getElementById("task").innerHTML = ""; 

    for (let index: number = 0; index < notes.length; index++) {
    let newDiv: HTMLDivElement = document.createElement("div");
    let newTrash: HTMLDivElement = document.createElement("div");
    newDiv.innerHTML = "<h3>" + notes[index].title + "</h3>" + "<p>" + notes[index].text + "</p>"
    + "<p class='day'> created at " + notes[index].day + "</p>";
    newTrash.innerHTML = "<label class='far fa-trash-alt fa-2x'>";
    newTrash.classList.add("tools");
    newDiv.classList.add("tasks");

    document.getElementById("task").appendChild(newDiv);
    newDiv.appendChild(newTrash);

    document.querySelector(".fa-trash-alt").addEventListener("click", function(): void {
        deleteElement(index); 
    });
}
}

function createNewElement(): void {
    let titles: HTMLInputElement = document.querySelector("#title");
    let texts: HTMLInputElement = document.querySelector("#text");

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

function deleteElement(position: number): void {
    notes.splice(position, 1);
    drawNotestoDOM();
}

window.addEventListener("load", function (): void {
document.querySelector("#add").addEventListener("click", function (): void {
    createNewElement(); 
});
window.addEventListener("keydown", function(event: KeyboardEvent): void {
    if (event.keyCode == 13) {
        createNewElement();
}
});
});