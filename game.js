function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    const p = document.createElement('p');
    const roundMessage = document.createElement('p');
    
    p.innerHTML = `Your move: ${player} <br>
    Computer's move: ${computerSelection}`;
    results.appendChild(p);

    switch (player) {
        case "rock":
            if (computerSelection === "rock") {
                roundMessage.textContent = "Both rocks. It's a tie.";
            } else if (computerSelection === "paper") {
                roundMessage.textContent = "Paper beats rock. You lose!";
                ++computerScore;
            } else if (computerSelection === "scissors") {
                roundMessage.textContent = "Rock beats paper. You win!";
                ++playerScore;
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                roundMessage.textContent = "Paper beats rock. You win!";
                ++playerScore;
            } else if (computerSelection === "paper") {
                roundMessage.textContent = "Both paper. It's a tie.";
            } else if (computerSelection === "scissors") {
                roundMessage.textContent = "Rock beats paper. You lose!"
                ++computerScore;
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                roundMessage.textContent = "Rock beats scissors. You lose!";
                ++computerScore;
            } else if (computerSelection === "paper") {
                roundMessage.textContent = "Scissors beat paper. You win!";
                ++playerScore;
            } else if (computerSelection === "scissors") {
                roundMessage.textContent = "Both scissors. It's a tie!";
            }
        break;
    }
    results.appendChild(roundMessage);
}

let playerScore = 0;
let computerScore = 0;    

const results = document.querySelector('.results');
const buttons = document.querySelectorAll('button');
const finalMessage = document.createElement('h1');
const newGame = document.createElement('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results.textContent = "";
        const computerSelection = getComputerChoice();
        playRound(button.id, computerSelection);
        const score = document.createElement('p');
        score.textContent = `Player score: ${playerScore}
        Computer score: ${computerScore}`;
        results.appendChild(score);

        if (playerScore === 5 || computerScore === 5) {
            buttons.forEach(element => element.disabled = true);
            if (playerScore === 5){
                finalMessage.textContent = "You win!";
            } else if (computerScore === 5) {
                finalMessage.textContent = "You lose!"
            }

            newGame.textContent = "New Game";

            results.appendChild(finalMessage);
            results.appendChild(newGame);

            newGame.addEventListener('click', () => {
                playerScore = 0;
                computerScore = 0;
                buttons.forEach(element => element.disabled = false);
                results.textContent = "";
            });
        }
    });
});