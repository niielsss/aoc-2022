const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

let total = 0;
input.split('\n\n').map((group) => {
    return group.split('\n').reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    });
}).sort((a, b) => {
    return b - a;
}).slice(0, 3).forEach((i) => {
    total += parseInt(i);
});
console.log(total);