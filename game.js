function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let result;
    const p = document.createElement('p');
    switch (player) {
        case "rock":
            if (computerSelection === "rock") {
                p.innerHTML = `Your move: ${player}
                Computer's move: ${computerSelection} <br>
                Both rocks. It's a tie.`;
                results.appendChild(p);
            } else if (computerSelection === "paper") {
                p.innerHTML = `Your move: ${player}
                Computer's move: ${computerSelection} <br>
                Paper beats rock. You lose!`;
                results.appendChild(p);
                ++computerScore;
            } else if (computerSelection === "scissors") {
                p.innerHTML = `Your move: ${player}
                Computer's move: ${computerSelection} <br>
                Rock beats paper. You win!`;
                results.appendChild(p);
                ++playerScore;
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                p.innerHTML = `Your move: ${player}
                Computer's move: ${computerSelection} <br>
                Paper beats rock. You win!`;
                results.appendChild(p);
                ++playerScore;
            } else if (computerSelection === "paper") {
                p.innerHTML = `Your move: ${player}
                Computer's move: ${computerSelection} <br>
                Both paper. It's a tie.`;
                results.appendChild(p);
            } else if (computerSelection === "scissors") {
                p.innerHTML = `Your move: ${player}
                Computer's move: ${computerSelection} <br>
                Scissors beats paper. You lose!`;
                results.appendChild(p);
                ++computerScore;
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                p.innerHTML = `Your move: ${player}
                Computer's move: ${computerSelection} <br>
                Rock beats scissors. You lose!`;
                results.appendChild(p);
                ++computerScore;
            } else if (computerSelection === "paper") {
                p.innerHTML = `Your move: ${player}
                Computer's move: ${computerSelection} <br>
                Scissors beat paper. You win!`;
                results.appendChild(p);
                ++playerScore;
            } else if (computerSelection === "scissors") {
                p.innerHTML = `Your move: ${player}
                Computer's move: ${computerSelection} <br>
                Both scissors. It's a tie!`;
                results.appendChild(p);
            }
        break;
    }
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