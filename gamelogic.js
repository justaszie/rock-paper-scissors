
let playerScore = 0;
let computerScore = 0;
const resultPara = document.querySelector('#result');
const scoresPara = document.querySelector('#scores');

const gameButtons = document.querySelectorAll(".btn.selection");
gameButtons.forEach(button => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        let playerChoice = button.textContent;
        let result = playRound(computerChoice, playerChoice);
        updateScores(result, computerChoice, playerChoice);
    })
})

function getComputerChoice() {
    let number = Math.random();
    if (number < 0.33) return 'rock';
    else if (number <= 0.66) return 'paper';
    else return 'scissors';
}

function playRound(playerSelection,) {
    computerSelection = getComputerChoice()
    console.log(`Playing round. Player: ${playerSelection}. Computer: ${computerSelection}`);
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') return 2;
        else if (computerSelection === 'paper') return 0;
        else return 1;
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') return 2;
        else if (computerSelection === 'scissors') return 0
        else return 1;
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') return 2;
        else if (computerSelection === 'rock') return 0;
        else return 1;
    }
}

function updateScores(result, computerChoice, playerChoice) {
    if (result === 0) {
        computerScore++;
        resultPara.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
    else if (result === 1) {
        playerScore++;
        resultPara.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else {
        resultPara.textContent = "It's a tie! No one gets a point";
    }
    scoresPara.textContent = `Overall Score \n Computer: ${computerScore} Player: ${playerScore}`;
    if (computerScore === 5 || playerScore === 5){
        alert(`Game Over!. Winner is : ${computerScore === 5 ? 'Computer' : 'Player'}`);
        computerScore = 0;
        playerScore = 0;
        resultPara.textContent = '';
        scoresPara.textContent = '';
    }
}

/*function game() {
    
    let computerChoice;
    let playerChoice;
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = prompt('Enter your choice (Rock, Paper or Scissors)').toLowerCase();
        let result = playRound(playerChoice, computerChoice);
        if (result === 0){
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        }
        else if (result === 1){
            playerScore++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        }
        else {
            console.log ("It's a tie! No one gets a point");
        }
    }
    if (playerScore > computerScore){
        console.log(`You win! Player score: ${playerScore}. Computer score: ${computerScore}`);
    }
    else if (playerScore < computerScore){
        console.log(`You lose! Player score: ${playerScore}. Computer score: ${computerScore}`);
    }
    else {
        console.log(`It's a tie! Player score: ${playerScore}. Computer score: ${computerScore}`);
    } 
    

} */