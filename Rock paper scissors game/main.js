const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const buttons = document.querySelectorAll('button')
let userChoice
let computerChoice
let randomChoice
let getResult

buttons.forEach( buttons => buttons.addEventListener('click', (e)=> {
    userChoice = e.target.id

    userChoiceDisplay.textContent = userChoice
    generateComputerChoice()
}))
function generateComputerChoice() {
    randomChoice = Math.floor(Math.random()*buttons.length) + 1

    if(randomChoice === 1){
        computerChoice = "Rock"
    }
    if(randomChoice === 2){
        computerChoice = "Paper"
    }
    if(randomChoice === 3){
        computerChoice = "Scissors"
    }

    computerChoiceDisplay.textContent = computerChoice
    generateResult()
}
function generateResult() {

    if(computerChoice === userChoice){
        getResult = "Its a draw!"
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        getResult = "You win!"
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        getResult = "You lost!"
    }
    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        getResult = "You lost!"
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        getResult = "You win!"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        getResult = "You Win!"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        getResult = "You lost!"
    }

    resultDisplay.textContent = getResult
}