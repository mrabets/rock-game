function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Play again'
    }

    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'paper':
                 return 'You lose'
            case 'scissors':
                return 'You win'
        }
    }
    
    if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                 return 'You win'
            case 'scissors':
                return 'You lose'
        }
    }

    if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                 return 'You lose'
            case 'paper':
                return 'You win'
        }
    }
}

function getGameResult(playerSelection) {
    const gameList = ['rock', 'paper', 'scissors']
    const computerSelection = gameList[Math.floor(Math.random() * 3)];

    const result = document.createElement('h1')
    result.textContent = playRound(playerSelection, computerSelection)
    document.body.appendChild(result)
}

const buttons = document.querySelectorAll('div.game button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
       getGameResult(button.id);
    });
    });

// document.body.appendChild(result)
