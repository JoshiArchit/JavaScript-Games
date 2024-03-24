document.addEventListener('DOMContentLoaded', () => { 
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'icecream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'icecream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        }
    ]
    
    // Generate the grid randomly
    cardArray.sort(() => 0.5 - Math.random())
    
    // Grab the grid element
    const gridDisplay = document.querySelector('#grid')
    const resultDisplay = document.querySelector('#result')
    
    // Maintain list of cards chosen. Type 'let' as we need to reset it 
    let cardsChosen = []
    let cardsChosenIds = []
    // Keep score
    let cardsWon = []
    
    // Generate the memory game board with image tiles
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gridDisplay.append(card)
        }
    }
    
    function checkMatch() {
        const cards = document.querySelectorAll('#grid img')
        const card1 = cardsChosenIds[0]
        const card2 = cardsChosenIds[1]
        console.log("Checking match")
    
        // Alert for clicking the same image
        if (card1 == card2) {
            cards[card1].setAttribute('src', 'images/blank.png')
            cards[card2].setAttribute('src', 'images/blank.png')
            alert('You clicked the same image!')
        }
        // Check for match
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert ("You found a match!")
            cards[card1].setAttribute('src', "images/white.png")
            cards[card2].setAttribute('src', "images/white.png")
    
            // Remove event listener on that block as match is fouund
            cards[card1].removeEventListener('click', flipCard)
            cards[card2].removeEventListener('click', flipCard)
            
            // Keep track of wins
            cardsWon.push(cardsChosen)
        }
        // No match 
        else {
            // Change again to blank image in case of no match
            cards[card1].setAttribute('src', 'images/blank.png')
            cards[card2].setAttribute('src', 'images/blank.png')
            alert("Try again!")
        }
        resultDisplay.textContent = cardsWon.length
    
        cardsChosen = []
        cardsChosenIds = []
    
        // Check if all the cards were matched
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations, you found them all."
        }
    }
    
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardName = cardArray[cardId].name
        cardsChosen.push(cardName)
        cardsChosenIds.push(cardId)
    
        // Set the image to actual photo once the card is flipped.
        this.setAttribute('src', cardArray[cardId].img)
        
        // Check match
        if (cardsChosen.length === 2) {
            // Give a few seconds before checking a match
            setTimeout(checkMatch, 500)
        }
    }
    createBoard()
})

