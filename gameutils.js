// gameutils.js
// functions isolated to test separately . 

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function shuffleCards() {
    let images = [];
    for (let i = 1; i <= 10; i++) {
        images.push("images/card" + i + ".jpeg");
        images.push("images/card" + i + ".jpeg");
    }
    return shuffle(images);
}
// exporting for mocha testing 
module.exports = {
    shuffle,
    shuffleCards
};

