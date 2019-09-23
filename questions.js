let questions = [
    {
        title: "Question1:",
        choices: ["answer1", "2", "3", "4"],
        answer: "1"
    },
    {
        title: "Question2",
        choices: ["1", "2", "3", "square 4"],
        answer: "2"
    },
    {
        title: "Question3:",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    }, {
        title: "Question4",
        choices: ["1", "2", "3", "4"],
        answer: "4"
    }, {
        title: "Question5",
        choices: ["1", "2", "3", "4"],
        answer: "1"
    },
];

let main = document.querySelector("#main");
let startbutton = document.querySelector("#startbtn");

let item1 = document.querySelector("#item01");
let question1 = document.querySelector("#question1");
let question11 = document.querySelector("#question1-1");

let item2 = document.querySelector("#item02");
let question2 = document.querySelector("#question2");
let question22 = document.querySelector("#question2-2");

let item3 = document.querySelector("#item03");
let question3 = document.querySelector("#question3");
let question33 = document.querySelector("#question3-3");

let item4 = document.querySelector("#item04");
let question4 = document.querySelector("#question4");
let question44 = document.querySelector("#question4-4");

let item5 = document.querySelector("#item05");
let question5 = document.querySelector("#question5");
let question55 = document.querySelector("#question5-5");

loadpage();

startbutton.addEventListener("click", function () {
    
    event.preventDefault();
    startgame();
    

});

function startgame(){
    alert("start!!!!");
    main.style.visibility = "hidden";
}

function loadpage()
{
    alert("page start!!!");
    main.style.visibility = "visible";
    item1.style.visibility = "hidden";
    item2.style.visibility = "hidden";
    item3.style.visibility = "hidden";
    item4.style.visibility = "hidden";
    item5.style.visibility = "hidden";
}

// question1.textContent = questions[0].title;
// question11.textContent[0] = questions[0].choices;

let counter = 0;

for (counter = 0; counter >= questions.length; counter++);
    {
        let test = 1;
        console.log(counter);
    }




    