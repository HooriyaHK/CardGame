/** 
const assert = require('assert');
// This was learnt through diffenrt sources.
const { shuffle, shuffleCards } = require('../gameutils'); 

// Test Shuffle()
/**
 * Test if the array is shuffled every time
 * Is empty array being returned when input is empty ?
 * If only one elment is in array, return the same array
 
describe(' Shuffle Isolated Functions', function() {
    describe('shuffle()', function() {
        it('should shuffle the array', function() {
            const array = [1, 2, 3, 4, 5];
            const shuffledArray = shuffle([...array]);
            assert.notDeepEqual(shuffledArray, array); 
            assert.deepEqual(shuffledArray.sort(), array); 
        });

        it('should return an empty array when input is empty', function() {
            const array = [];
            const shuffledArray = shuffle([...array]);
            assert.deepEqual(shuffledArray, []); 
        });

        it('should return the same array when it contains one element', function() {
            const array = [1];
            const shuffledArray = shuffle([...array]);
            assert.deepEqual(shuffledArray, [1]); 
        });
    });
    // Test shuffleCards()
    /*
        Test whether ann array of shuffled images is returned 
        Test whether it has the images required
    
    describe('shuffleCards()', function() {
        it('should return an array of shuffled card images', function() {
            const shuffledImages = shuffleCards();
            assert.strictEqual(shuffledImages.length, 20);
            assert.strictEqual(shuffledImages.filter((image, index, self) => self.indexOf(image) !== index).length, 10); 
        });

        it('should contain the expected images', function() {
            const shuffledImages = shuffleCards();
            const expectedImages = [];
            for (let i = 1; i <= 10; i++) {
                expectedImages.push(`images/card${i}.jpeg`);
                expectedImages.push(`images/card${i}.jpeg`);
            }
            expectedImages.sort();
            shuffledImages.sort();
            assert.deepEqual(shuffledImages, expectedImages); 
        });
    });
});


*/