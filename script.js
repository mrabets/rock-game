let player_score_count = 0
let computer_score_count = 0



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Play again'
    }

    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'paper':
                computer_score_count++
                 return 'You lose'
            case 'scissors':
                player_score_count++;
                return 'You win'
        }
    }
    
    if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                player_score_count++;
                 return 'You win'
            case 'scissors':
                computer_score_count++;
                return 'You lose'
        }
    }

    if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                computer_score_count++;
                 return 'You lose'
            case 'paper':
                player_score_count++;
                return 'You win'
        }
    }
}



function getGameResult(playerSelection) {
    const gameList = ['rock', 'paper', 'scissors']
    const computerSelection = gameList[Math.floor(Math.random() * 3)];

    const computer = document.getElementById('computer_result')
    computer.className = "btn striped-shadow dark"
    computer.innerHTML = `<span>${computerSelection}</span>`

    let parent = document.querySelector('#computer')
    parent.appendChild(computer)
    
    const result = document.getElementById('result')
    result.textContent = playRound(playerSelection, computerSelection)

    const score = document.getElementById('score')
    score.textContent = `Score: ${player_score_count} vs ${computer_score_count}`

    parent = document.querySelector('#output')
    parent.appendChild(result)

    parent = document.querySelector('#score-output')
    parent.appendChild(score)
}

const buttons = document.querySelectorAll('div.game button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
       getGameResult(button.id);
    });
 });
