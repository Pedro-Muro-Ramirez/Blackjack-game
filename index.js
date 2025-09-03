//Initial variables 
let sum = 0
let cards = [] 
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el") 
let cardsEl = document.getElementById("cards-el")


// Random Number Function
function randomNumber() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Initiate game function 
function startGame() {
    let firstCard = randomNumber() 
    let secondCard = randomNumber() 
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderText()
     
}

// Render Game text function
function renderText() {
    cardsEl.textContent = `Cards: `
    sumEl.textContent = `Sum: `
    let total = 0
    for (let i = 0; i < cards.length; i++) {
         cardsEl.textContent += cards[i] + " "
         total += cards[i]
         sumEl.textContent = `Sum: ${total}`
    }
     if (sum > 21) {
        messageEl.textContent = `You're out of the game`
    } else if (sum < 21) {
        messageEl.textContent = `Do you want to draw a new card?`
    } else {
        messageEl.textContent = `You've won!`
    }
}

// Add new card function 
function newCard() {
    let randomNum = randomNumber()
    cards.push(randomNum)
    renderText()
}
