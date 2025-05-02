// Get elements
const newCardBtn = document.getElementById("newcard")
const startGameBtn = document.getElementById("startgame")
const finishBtn = document.getElementById("finish")
const cardsDisplay = document.getElementById("cards")
const continueBtn = document.getElementById("continue")
const sumDisplay = document.getElementById("sum")
const h2 = document.getElementById("h2")

// Game state
let totalSum = 0

// Hide unnecessary buttons initially
newCardBtn.style.display = "none"
finishBtn.style.display = "none"
continueBtn.style.display = "none"

function startGame() {
    totalSum = 0
    cardsDisplay.innerText = "Cards : "
    sumDisplay.innerText = "Sum : "
    newCard()
    newCard()

    startGameBtn.style.display = "none"
    newCardBtn.style.display = "block"
    finishBtn.style.display = "block"
}

function newCard() {
    let card = Math.floor(Math.random() * 13) + 1
    let displayCard = card

    if (card > 10) {
        displayCard = "10"
        card = 10
    } else if (card === 1) {
        displayCard = "A"
        card = 11  // Treat Ace as 11 for simplicity
    }

    totalSum += card
    cardsDisplay.innerText = cardsDisplay.innerText + " " + displayCard + " "
    sumDisplay.innerText = "Sum : " + totalSum

    checkGameState()
}

function checkGameState() {
    if (totalSum > 21) {
        h2.innerText = "Bust! You lost."
        newCardBtn.style.display = "none"
        finishBtn.style.display = "none"
        continueBtn.style.display = "block"
    }
}

function finishGame() {
    h2.innerText = "Game Finished! Your final sum is " + totalSum
    newCardBtn.style.display = "none"
    finishBtn.style.display = "none"
    continueBtn.style.display = "block"
}

function continueGame() {
    newCardBtn.style.display = "none"
    finishBtn.style.display = "none"
    continueBtn.style.display = "none"
    sumDisplay.innerText = "Sum : "
    cardsDisplay.innerText = "Cards : "
    h2.innerText = "Want to Play a Round?"
    totalSum = 0
    startGameBtn.style.display = "block"
}