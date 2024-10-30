//choices stated
const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a TIE!"
    } else {
        switch(playerChoice) {
            case 'rock':
                (computerChoice === 'scissors') ? 'You win!' : 'Computer wins!';
                break;
        }
    }
}