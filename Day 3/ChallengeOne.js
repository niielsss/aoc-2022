const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const input = data.split('\n');
const total = input.map((line) => {
    const [firstHalf, secondHalf] = [line.slice(0, line.length / 2), line.slice(line.length / 2)];
    const commonLetter = firstHalf.split('').find((letter) => secondHalf.includes(letter));
    return commonLetter;
}).reduce((acc, letter) => {
    const index = alphabet.indexOf(letter) + 1;
    return acc + index;
}, 0);
console.log(total);