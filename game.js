function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let result;
    switch (player) {
        case "rock":
            console.log("Your move: rock\nComputer's move: " + computerSelection);
            result = computerSelection === "rock" ? "Both rocks. It's a tie!"
                    : computerSelection === "paper" ? "Paper beats rock. You lose!"
                    : computerSelection === "scissors" ? "Rock beats paper. You win!"
                    : "Impossible!";
            return result;
        case "paper":
            console.log("Your move: paper\nComputer's move: " + computerSelection);
            result = computerSelection === "rock" ? "Paper beats rock. You win!"
                    : computerSelection === "paper" ? "Both paper. It's a tie!"
                    : computerSelection === "scissors" ? "Scissors beat paper. You lose!"
                    : "Impossible!";
            return result;
        case "scissors":
            console.log("Your move: scissors\nComputer's move: " + computerSelection);
            result = computerSelection === "rock" ? "Rock beats scissors. You lose!"
                    : computerSelection === "paper" ? "Scissors beat paper. You win!"
                    : computerSelection === "scissors" ? "Both scissors. It's a tie!"
                    : "Impossible!";
            return result;
        default:
            result = "Invalid move!";
            return result;
    }
}

function game() {
    let playerSelection;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt(`What's your move? (Game #${i+1} of 5)`);
        console.log(playerSelection);
        if (playerSelection === null) {
            alert("Cancelled");
            return;
        } else {
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
    }
}

game();