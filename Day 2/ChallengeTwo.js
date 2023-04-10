//X = Lose, Y = Draw, Z = Win
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const score = input.split('\n').reduce((score, line) => {
    switch (line) {
        case 'A Y':
            return score + 4;
        case 'A X':
            return score + 3;
        case 'A Z':
            return score + 8;
        case 'B X':
            return score + 1;
        case 'B Y':
            return score + 5;
        case 'B Z':
            return score + 9;
        case 'C X':
            return score + 2;
        case 'C Y':
            return score + 6;
        case 'C Z':
            return score + 7;
    }
}, 0);
console.log(score);