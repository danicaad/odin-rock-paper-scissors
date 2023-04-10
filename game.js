function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let result;

    console.log("Your move: " + player + "\nComputer's move: " + computerSelection);

    switch (player) {
        case "rock":
            if (computerSelection === "rock") {
                alert("Both rocks. It's a tie.");
                result = "tie";
            } else if (computerSelection === "paper") {
                alert("Paper beats rock. You lose!");
                result = "lose";
            } else if (computerSelection === "scissors") {
                alert("Rock beats paper. You win!");
                result = "win";
            }
            return result;
        case "paper":
            if (computerSelection === "rock") {
                alert("Paper beats rock. You win!");
                result = "win";
            } else if (computerSelection === "paper") {
                alert("Both paper. It's a tie!");
                result = "tie";
            } else if (computerSelection === "scissors") {
                alert("Scissors beats paper. You lose!");
                result = "lose";
            }
            return result;
        case "scissors":
            if (computerSelection === "rock") {
                alert("Rock beats scissors. You lose!");
                result = "lose";
            } else if (computerSelection === "paper") {
                alert("Scissors beat paper. You win!");
                result = "win";
            } else if (computerSelection === "scissors") {
                alert("Both scissors. It's a tie!");
                result = "tie";
            }
            return result;
        default:
            result = "invalid";
            return result;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;    
    let playerSelection = "";


    let finalMessage = (computerScore > playerScore) ? "You lose. Sorry!"
                        : (computerScore < playerScore) ? "You win! Congrats!"
                        : "It's a tie!";
    alert(`Your score is ${playerScore}. Computer's score is ${computerScore}. ${finalMessage}`);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice);
    });
});
//game();