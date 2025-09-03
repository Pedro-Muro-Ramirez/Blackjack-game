//Initial variables 
let sum = 0; 
let cards = []
let sumEl = document.getElementById("sum-el"); 
let messageEl = document.getElementById("message-el"); 
let cardsEl = document.getElementById("cards-el"); 

// Initiate game function 
function startGame() {
    let firstCard = Math.floor(Math.random() * 13); 
    let secondCard = Math.floor(Math.random() * 13); 
    let sum = firstCard + secondCard

    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`

    if (sum > 21) {
        messageEl.textContent = `You're out of the game`
    } else if (sum < 21) {
        messageEl.textContent = `Do you want to draw a new card?`
    } else {
        messageEl.textContent = `You've won!`
    }

}
