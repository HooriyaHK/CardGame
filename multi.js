document.addEventListener('DOMContentLoaded', function() {
    // in order Clear previous game data. This code isnt having much effect
    localStorage.removeItem('resultMessage');
    localStorage.removeItem('player1Score');
    localStorage.removeItem('player2Score');
    // We want teh countdown to begin immediately
    countdown();
    // added back button directly through js 
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = "home.html";
    });
});
// same as single.js, but isnce tehre a re two palyers, we will initialse scores too
let cardsFlipped = 0;
let flippedCard1 = null;
let flippedCard2 = null;
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let gameCountdown = 60;
let timerInterval;
// Countdown
function countdown() {
    let count = 3;
    let countText = document.getElementById("countText");
    let interval = setInterval(function() {
        if (count === 0) {
            shuffleCards();
            countText.remove();
            document.getElementById("cardArea1").style.visibility = "visible";
            document.getElementById("cardArea2").style.visibility = "visible";
            timer();
            clearInterval(interval);
        } else {
            countText.innerHTML = count;
            count--;
        }
    }, 1000);
}

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}
// shuffle the cards and fill the array so grid has all images, a pair of each exactly.
function shuffleCards() {
    let images1 = [];
    let images2 = [];
    for (let i = 1; i <= 10; i++) {
        images1.push("images/card" + i + ".jpeg");
        images1.push("images/card" + i + ".jpeg");
        images2.push("images/card" + i + ".jpeg");
        images2.push("images/card" + i + ".jpeg");
    }
    shuffle(images1);
    shuffle(images2);
    for (let i = 0; i < 20; i++) {
        document.getElementById('card1-' + i).dataset.cardImage = images1[i];
        document.getElementById('card2-' + i).dataset.cardImage = images2[i];
    }
}
/// flip the card
function flipCard(cardID, player) {
    if (player !== currentPlayer || cardsFlipped === 2) return;

    let card = document.getElementById(cardID);
    if (card.src.includes('cardflipped.jpg')) {
        cardsFlipped++;
        card.src = card.dataset.cardImage;
        if (cardsFlipped === 1) {
            flippedCard1 = card;
        } else {
            flippedCard2 = card;
            setTimeout(() => {
                // CHECK FOR MATCH
                if (flippedCard1.src === flippedCard2.src) {
                    if (currentPlayer === 1) {
                        player1Score += 10;
                        // updating scores
                        // This css selects an h2 element that is a descendant of the first child of an element
                        document.querySelector('.player-grid:nth-child(1) h2').innerText = `Player 1: ${player1Score}`;
                    } else {
                        player2Score += 10;
                        document.querySelector('.player-grid:nth-child(2) h2').innerText = `Player 2: ${player2Score}`;
                    }
                } else {
                    flippedCard1.src = 'images/cardflipped.jpg';
                    flippedCard2.src = 'images/cardflipped.jpg';
                }
                // Call restTurn() once one player has played and its tehir turn again
                resetTurn();
            }, 1000);
        }
    }
}
// created afunction for resting the turns so taht one grid is disabled if the other player is playing
function resetTurn() {
    cardsFlipped = 0;
    flippedCard1 = null;
    flippedCard2 = null;
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById('turnText').innerText = `Player ${currentPlayer}'s Turn`;
}
// timer 
function timer() {
    let timerText = document.getElementById('timerText');
    timerInterval = setInterval(function() {
        if (gameCountdown <= 0) {
            clearInterval(timerInterval);
            declareWinner();
        } else {
            timerText.innerHTML = `Time left: ${gameCountdown}s`;
            gameCountdown--;
        }
    }, 1000);
}
// A function to shwo who won
function declareWinner() {
    let message;
    if (player1Score > player2Score) {
        message = 'Player 1 Wins!';
    } else if (player2Score > player1Score) {
        message = 'Player 2 Wins!';
    } else {
        message = "It's a Tie!";
    }
    alert(message);
    showResultPage(message);
}
// This was also added to show if the reuslt page worked. Thsi shows scores as well as the message that wa spopped in alert.
function showResultPage(message) {
    // Store the result and scores in localStorage
    localStorage.setItem('resultMessage', message);
    localStorage.setItem('player1Score', player1Score.toString());
    localStorage.setItem('player2Score', player2Score.toString());
    // Redirect to the result page
    window.location.href = 'resultMulti.html';
}


