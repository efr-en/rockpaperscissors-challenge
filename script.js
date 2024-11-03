//choices and score displays
const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// actual game logic 
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a TIE!"
    } else {
        switch(playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? 'You win!' : 'Computer wins!';
                break;

            case 'paper':
                result = (computerChoice === 'rock') ? 'You win!' : 'Computer wins!';
                break;

            case 'scissors':
                result = (computerChoice === 'paper') ? 'You win!' : 'Computer wins!';
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

// color assignment based on results
    resultDisplay.classList.remove('greenT', 'redT');
    switch(result) {
        case 'You win!':
            resultDisplay.classList.add('greenT');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case 'Computer wins!':
            resultDisplay.classList.add('redT');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

        case "It's a TIE!":
            resultDisplay.classList.add('whiteT');
            tieScore++;
            tieScoreDisplay.textContent = tieScore;
            break;

    }
};

//reset game button function
function resetGame() {
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;
    playerDisplay.textContent = 'Player:';
    computerDisplay.textContent = 'Computer:';
    resultDisplay.textContent = '';
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    tieScoreDisplay.textContent = tieScore;
    // resultDisplay.classList.add('greenT', 'redT', 'whiteT');

};
