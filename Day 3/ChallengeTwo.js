const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const total = data.split('\n').reduce((acc, line, index) => {
    
    if (index % 3 === 0) {
        const [first, second, third] = [line, data.split('\n')[index + 1], data.split('\n')[index + 2]];
        const commonLetter = first.split('').find((letter) => second.includes(letter) && third.includes(letter));
        const value = alphabet.indexOf(commonLetter) + 1;
        return acc + value;
    } else {
        return acc;
    }
}, 0);
console.log(total);