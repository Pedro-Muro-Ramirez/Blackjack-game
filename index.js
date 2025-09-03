//Initial variables 
let sum = 0
let cards = [] 
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el") 
let cardsEl = document.getElementById("cards-el")
let hasBlackJack = false
let isAlive = false


// Random Number Function
function randomNumber() {
    isAlive = true
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
    for (let i = 0; i < cards.length; i++) {
         cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = `Sum: ${sum}`
     if (sum > 21) {
        messageEl.textContent = `You're out of the game`
        isAlive = false
    } else if (sum < 21) {
        messageEl.textContent = `Do you want to draw a new card?`
    } else {
        messageEl.textContent = `You've won!`
        hasBlackJack = true
    }
}

// Add new card function 
function newCard() {
    if (isAlive && hasBlackJack === false) {
        let randomNum = randomNumber()
        sum += randomNum
        cards.push(randomNum)
        renderText()
    }
}
