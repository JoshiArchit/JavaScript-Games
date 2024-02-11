const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

// Get all choices from the button elements 
// USE class names if there are multiple button types
let userChoice;
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()

    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3) + 1 // Or use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'rock'
    } else if (randomNumber == 2) {
        computerChoice = 'paper'
    } else if (randomNumber == 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw'
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You won!"
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You lose!"
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You lose!"
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You win!"
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You lose!"
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You lose"
    }
    resultDisplay.innerHTML = result
}