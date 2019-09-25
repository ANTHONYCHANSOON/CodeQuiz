let questions = [
    {
        title: "Solid",
        choices: ["Eraser", "Soda", "CO2", "Water"],
        answer: "Eraser"
    },
    {
        title: "Which is not a Mammal",
        choices: ["Whales", "Shark", "Elephant", "Panda"],
        answer: "Shark"
    },
    {
        title: "Which is not a continent",
        choices: ["Asia", "Europe", "South Africa", "South America"],
        answer: "South Africa"
    }, {
        title: "Washing soda is the common name for",
        choices: ["Calcium bicarbonate", "Sodium bicarbonate", "Calcium carbonate", "Sodium carbonate"],
        answer: "Sodium carbonate"
    }, {
        title: "The gas usually filled in the electric bulb is",
        choices: ["nitrogen", "hydrogen", "carbon dioxide", "oxygen"],
        answer: "nitrogen"
    },
];

let main = document.querySelector("#main");
let startbutton = document.querySelector("#startbtn");

let item1 = document.querySelector("#item01");
let question1 = document.querySelector("#question1");
let question11 = document.querySelector("#question1-1");
let pick11 = document.querySelector("#pick11");
let pick12 = document.querySelector("#pick12");
let pick13 = document.querySelector("#pick13");
let pick14 = document.querySelector("#pick14");

let item2 = document.querySelector("#item02");
let question2 = document.querySelector("#question2");
let question22 = document.querySelector("#question2-2");
let pick21 = document.querySelector("#pick21");
let pick22 = document.querySelector("#pick22");
let pick23 = document.querySelector("#pick23");
let pick24 = document.querySelector("#pick24");

let item3 = document.querySelector("#item03");
let question3 = document.querySelector("#question3");
let question33 = document.querySelector("#question3-3");
let pick31 = document.querySelector("#pick31");
let pick32 = document.querySelector("#pick32");
let pick33 = document.querySelector("#pick33");
let pick34 = document.querySelector("#pick34");

let item4 = document.querySelector("#item04");
let question4 = document.querySelector("#question4");
let question44 = document.querySelector("#question4-4");
let pick41 = document.querySelector("#pick41");
let pick42 = document.querySelector("#pick42");
let pick43 = document.querySelector("#pick43");
let pick44 = document.querySelector("#pick44");

let item5 = document.querySelector("#item05");
let question5 = document.querySelector("#question5");
let question55 = document.querySelector("#question5-5");
let pick51 = document.querySelector("#pick51");
let pick52 = document.querySelector("#pick52");
let pick53 = document.querySelector("#pick53");
let pick54 = document.querySelector("#pick54");

let resultpage = document.querySelector("#resultpage");

let score = 0;
let timer = 75;

let scorecard = document.querySelector("#score");

let finalscore = document.querySelector("#finalscore");

loadpage();

startbutton.addEventListener("click", function () {

    event.preventDefault();
    startgame();

});

// #1
pick11.addEventListener("click", function () {
    //alert("correct");
    hidealldiv();
    item1.remove();
    item2.style.visibility = "visible";
    correctanswer();
})
pick12.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item1.remove();
    item2.style.visibility = "visible";
    incorrectanswer();
})
pick13.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item1.remove();
    item2.style.visibility = "visible";
    incorrectanswer();
})
pick14.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item1.remove();
    item2.style.visibility = "visible";
    incorrectanswer();
})

// #2
pick21.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item2.remove();
    item3.style.visibility = "visible";
    incorrectanswer();
})
pick22.addEventListener("click", function () {
    //alert("correct");
    hidealldiv();
    item2.remove();
    item3.style.visibility = "visible";
    correctanswer();
})
pick23.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item2.remove();
    item3.style.visibility = "visible";
    incorrectanswer();
})
pick24.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item2.remove();
    item3.style.visibility = "visible";
    incorrectanswer();
})

// #3
pick31.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item3.remove();
    item4.style.visibility = "visible";
    incorrectanswer();
})
pick32.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item3.remove();
    item4.style.visibility = "visible";
    incorrectanswer();
})
pick33.addEventListener("click", function () {
    //alert("correct");
    hidealldiv();
    item3.remove();
    item4.style.visibility = "visible";
    correctanswer();
})
pick34.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item3.remove();
    item4.style.visibility = "visible";
    incorrectanswer();
})

// #4
pick41.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item4.remove();
    item5.style.visibility = "visible";
    incorrectanswer();
})
pick42.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item4.remove();
    item5.style.visibility = "visible";
    incorrectanswer();
})
pick43.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item4.remove();
    item5.style.visibility = "visible";
    incorrectanswer();
})
pick44.addEventListener("click", function () {
    //alert("correct");
    hidealldiv();
    item4.remove();
    item5.style.visibility = "visible";
    correctanswer();
})

// #5
pick51.addEventListener("click", function () {
    //alert("correct");
    hidealldiv();
    item5.remove();
    correctanswer();
    showfinalresults();
    stoptime();
})
pick52.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item5.remove();
    incorrectanswer();
    showfinalresults();
    stoptime();
})
pick53.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item5.remove();
    incorrectanswer();
    showfinalresults();
    stoptime();
})
pick54.addEventListener("click", function () {
    //alert("wrong");
    hidealldiv();
    item5.remove();
    incorrectanswer();
    showfinalresults();
    stoptime();
})



function loadpage() {
    //alert("page start!!!");
    main.style.visibility = "visible";
    item1.style.visibility = "hidden";
    item2.style.visibility = "hidden";
    item3.style.visibility = "hidden";
    item4.style.visibility = "hidden";
    item5.style.visibility = "hidden";
    resultpage.style.visibility = "hidden";
    scorecard.style.visibility = "hidden";
}

function startgame() {
    //alert("start!!!!");
    main.style.visibility = "hidden";
    item1.style.visibility = "visible";
    scorecard.style.visibility = "visible";
    starttime();

    question1.textContent = questions[0].title;

    pick11.textContent = questions[0].choices[0];
    pick12.textContent = questions[0].choices[1];
    pick13.textContent = questions[0].choices[2];
    pick14.textContent = questions[0].choices[3];

    item2.style.visibility = "hidden";
    question2.textContent = questions[1].title;
    pick21.textContent = questions[1].choices[0];
    pick22.textContent = questions[1].choices[1];
    pick23.textContent = questions[1].choices[2];
    pick24.textContent = questions[1].choices[3];

    item3.style.visibility = "hidden";
    question3.textContent = questions[2].title;
    pick31.textContent = questions[2].choices[0];
    pick32.textContent = questions[2].choices[1];
    pick33.textContent = questions[2].choices[2];
    pick34.textContent = questions[2].choices[3];

    item4.style.visibility = "hidden";
    question4.textContent = questions[3].title;
    pick41.textContent = questions[3].choices[0];
    pick42.textContent = questions[3].choices[1];
    pick43.textContent = questions[3].choices[2];
    pick44.textContent = questions[3].choices[3];

    item5.style.visibility = "hidden";
    question5.textContent = questions[4].title;
    pick51.textContent = questions[4].choices[0];
    pick52.textContent = questions[4].choices[1];
    pick53.textContent = questions[4].choices[2];
    pick54.textContent = questions[4].choices[3];
}

function hidealldiv() {
    main.style.visibility = "hidden";
    item1.style.visibility = "hidden";
    item2.style.visibility = "hidden";
    item3.style.visibility = "hidden";
    item4.style.visibility = "hidden";
    item5.style.visibility = "hidden";
}

function correctanswer() {
    score = score + 10;
    scorecard.textContent = "current score " + score;
}

function incorrectanswer() {
    score = score - 8;
    timer = timer - 15;
    scorecard.textContent = "current score " + score;
}

function showfinalresults() {
    resultpage.style.visibility = "visible";
    scorecard.style.visibility = "hidden";
    finalscore.textContent = "your score is " + score;

}

let timeleft = document.querySelector("#timer");

function starttime() {
    let timerInterval = setInterval(function hello() {
        timer--;

        timeleft.textContent = "Timer: " + timer + " sec";

        if (timer === 0) {
            clearInterval(timerInterval);
            hidealldiv();
            showfinalresults();
        }

    }, 1000);
}

function stoptime() {
    timer = 0;
    timeleft.style.visibility = "hidden";
    //clearInterval(timerInterval);
}

//game!

let scoreb = document.querySelector("#scoreb");
let playerslist = document.querySelector("#playerslist");

let players = [];

function init() {

    let storedplayers = JSON.parse(localStorage.getItem("nameinitial"));
    let storedscores = JSON.parse(localStorage.getItem("scores"));

    if (storedplayers !== null) {
        players = storedplayers;
        renderTodos();
    }
}
function renderTodos() {


    for (let i = 0; i < players.length; i++) {
        let play = players[i];

        let li = document.createElement("li");
        li.textContent = play;
        li.setAttribute("data-index", i);

        playerslist.appendChild(li);
    }
}

function storedplayers() {
    localStorage.setItem("player", JSON.stringify(players));
}

let inputbox = document.querySelector("#inputbox");

inputbox.addEventListener("keyup", function(event){
    event.preventDefault();

    players.push(inputbox.textContent);
    storedplayers();
    renderTodos();
})


// let nameinitial = document.querySelector("#inputbox");

// nameinitial.addEventListener("keyup", function(){

//     let nameeeee = document.querySelector("#inputbox").value;


//     // nameinitial.textContent = nameeeee;
//     localStorage.setItem("name", nameeeee);
//     localStorage.setitem("score", score);
// })




// recycle!
//     for(let counter = 0; counter < questions.length; counter++) {

//         question1.textContent = questions[0].title;

//         pick1.textContent = questions[0].choices[0];
//         pick2.textContent = questions[0].choices[1];
//         pick3.textContent = questions[0].choices[2];
//         pick4.textContent = questions[0].choices[3];

//         let tttt = questions[counter].title;
//         let cccc = questions[counter].choices;
//         let aaaa = questions[counter].answer;
//     }

//     // for (let i = 0; i < questions.length; i++) {

//     //     // alert(questions[i].title);
//     //     // alert(questions[i].choices);
//     //     // alert(questions[i].answer);

//     //     question1.textContent = questions[i].title;
//     //     let li = document.createElement("li");
//     //         li.textContent = questions[i].choices[i];
//     //         question11.appendChild(li);

//     //     // for (let picks = 0; picks < questions[i].choices.length; picks++) {

//     //     //     let li = document.createElement("li");
//     //     //     li.textContent = questions[i].choices[i];
//     //     //     question11.appendChild(li);
//     //     // }
//     // }

// });



// // question1.textContent = questions[0].title;
// // question11.textContent[0] = questions[0].choices;