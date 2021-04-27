//personal choice
let playerTarget = document.getElementById("playerChoice");
let computerTarget = document.getElementById("cpuChoice");
let messageTarget = document.getElementById("message");


document.getElementById("rock").addEventListener("click", function () {
    //let cpuChoice = compFunc();
    compare("Rock", compFunc()); //compare("Rock, cpuChoice");

});
document.getElementById("paper").addEventListener("click", function () {

    compare("Paper", compFunc());

});
document.getElementById("scissors").addEventListener("click", function () {

    compare("Scissors", compFunc());

});
document.getElementById("lizard").addEventListener("click", function () {

    compare("Lizard", compFunc());

});
document.getElementById("spock").addEventListener("click", function () {

    compare("Spock", compFunc());

});


// Computer makes random choice (0-1)

function compFunc() {

    let cpuChoice = Math.random();

    if (cpuChoice < 0.2) {
        cpuChoice = "Rock";
    } else if (cpuChoice <= 0.4) {
        cpuChoice = "Paper";
    }
    else if (cpuChoice <= 0.6) {
        cpuChoice = "Scissors";

    } else if (cpuChoice <= 0.8) {
        cpuChoice = "Lizard";

    }

    else {
        cpuChoice = "Spock";
    }
    return cpuChoice;
}



// game logic
//switch case rond player choice OF (OR?) cpuChoice switch is al helft minder if elses om te checken
let compare = function (playerChoice, cpuChoice) {
    playerTarget.innerHTML = "Player picked " + playerChoice ;
    computerTarget.innerHTML = "CPU picked " + cpuChoice ;

    switch (playerChoice) {
        case cpuChoice:

            messageTarget.innerHTML = "IT'S A TIE!"

            break;

        case "Rock":
            if (cpuChoice === "Scissors" || cpuChoice === "Lizard") {
                messageTarget.innerHTML = "PLAYER WINS!";

            }
            else {
                messageTarget.innerHTML = "PLAYER LOSES!";

            }
            break;


        case "Paper":
            if (cpuChoice === "Rock" || cpuChoice === "Spock") {
                messageTarget.innerHTML = "PLAYER WINS!";

            }
            else {
                messageTarget.innerHTML = "PLAYER LOSES!";
            }
            break;


        case "Scissors":
            if (cpuChoice === "Paper" || cpuChoice === "Lizard") {
                messageTarget.innerHTML = "PLAYER WINS!";

            }
            else {
                messageTarget.innerHTML = "PLAYER LOSES!";
            }
            break;


        case "Lizard":
            if (cpuChoice === "Spock" || cpuChoice === "Paper") {
                messageTarget.innerHTML = "PLAYER WINS!";

            }
            else {
                messageTarget.innerHTML = "PLAYER LOSES!";
            }
            break;


        case "Spock":
            if (cpuChoice === "Scissors" || cpuChoice === "Rock") {
                messageTarget.innerHTML = "PLAYER WINS!";

            }
            else {
                messageTarget.innerHTML = "PLAYER LOSES!";
            }
            break;




    }

    /*if (playerChoice === cpuChoice) {
        alert("The result is a tie! Try again.");
    }*/
}