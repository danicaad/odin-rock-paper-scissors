function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let result;

    console.log("Your move: rock\nComputer's move: " + computerSelection);

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
            result = "Invalid move!";
            return result;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;    
    let playerSelection;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt(`What's your move? (Game #${i+1} of 5)`);
        console.log(playerSelection);
        if (playerSelection === null) {
            alert("Cancelled");
            return;
        } else {
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            if (result === "win") {
                ++playerScore; 
            } else if (result === "lose") {
                ++computerScore;
            }
        }
    }

    let finalMessage = (computerScore > playerScore) ? "You lose. Sorry!"
                        : (computerScore < playerScore) ?   "You win! Congrats!"
                        : "It's a tie!";
    alert(`Final Score: Your score is ${playerScore}. Computer's score is ${computerScore}. ${finalMessage}`);
}

game();