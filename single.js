// const { shuffle, shuffleCards } = require('./gameutils'); 
// making usre everuthing is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    countdown();
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = "home.html";
    });
});
// initialised variables
var cardsFlipped = 0;
var flippedCard1 = null;
var flippedCard2 = null;
var totalPairsFound = 0;
var gameCountdown = 60; // 60 secs countdon
var timerInterval;

// Cretaed a function to run countdown from 3 to 1
function countdown() {
    let count = 3; 
    let countText = document.getElementById("countText");
    if (!countText) {
        
        return;
    }
    let interval = setInterval(function() {
        console.log("Countdown: ", count);
        if (count == 0) {
            
            // shuffleCrds
            const shuffledImages = shuffleCards();
            assignImagesToCards(shuffledImages);
            countText.remove();
            document.getElementById("cardArea").style.visibility = "visible";
            // Call time()
            timer();
            clearInterval(interval);
        } else {
            countText.innerHTML = count;
            // decrement
            count--;
        }
    }, 1000);
}
// Create array of cards
function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
// Shuffle cards randomly
function shuffleCards() {
    let images = [];
    for (let i = 1; i <= 10; i++) {
        images.push("images/card" + i + ".jpeg");
        images.push("images/card" + i + ".jpeg");
    }
    return shuffle(images);
}
// Assign images / this code was refractored by us because we had to test code. Before this function didnt exist .
function assignImagesToCards(images) {
    for (let i = 0; i < 20; i++) {
        
        document.getElementById('card' + i).dataset.cardImage = images[i];
    }
}
// Flip the cards, back to being flipped if pair not found
function flipCard(cardID) {
    let card = document.getElementById(cardID);
    if (cardsFlipped < 2 && card.src.includes('cardflipped.jpg')) {
        cardsFlipped++;
        card.src = card.dataset.cardImage;
        if (cardsFlipped == 1) {
            flippedCard1 = card;
        } else {
            flippedCard2 = card;
            // setTimeout
            setTimeout(function() {
                if (flippedCard1.src === flippedCard2.src) {
                    totalPairsFound++;
                    if (totalPairsFound === 10) {
                        endGame("Congratulations, you matched all pairs!");
                    }
                } else {
                    flippedCard1.src = "images/cardflipped.jpg";
                    flippedCard2.src = "images/cardflipped.jpg";
                }
                flippedCard1 = null;
                flippedCard2 = null;
                cardsFlipped = 0;
            }, 1000);
        }
    }
}
// fucntion to update the timer as game goes on
function updateTimer() {
    gameCountdown--;
    document.getElementById('timerText').textContent = "Time left: " + gameCountdown + "s";
    if (gameCountdown <= 0) {
        clearInterval(timerInterval);
        endGame("You Lost!");
    }
}

function timer() {
    timerInterval = setInterval(updateTimer, 1000);
}
// endgame
function endGame(message) {
    alert(message);
    clearInterval(timerInterval);
    // Store 
    // This was added to fix why results pages wouldnt load
    localStorage.setItem('gameResult', message);
    // Redirect to the result page
    window.location.href = 'resultSingle.html';
}



