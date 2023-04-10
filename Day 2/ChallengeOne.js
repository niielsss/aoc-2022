const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const outcomes = {"A Y":8, "A X":4, "A Z":3, "B X":1, "B Y":5, "B Z":9, "C X":7, "C Y":2, "C Z":6};
let score = 0;
data.split('\n').forEach((line) => {
    score += parseInt(outcomes[line]);
});
console.log(score);