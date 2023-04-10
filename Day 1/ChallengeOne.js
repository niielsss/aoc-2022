const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const largest = data.split('\n\n').map((group) => {
    return group.split('\n').reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    });
}).sort((a, b) => {
    return b - a;
})[0];
console.log(largest);


const input = fs.readFileSync('input.txt', 'utf8');
let highest = 0;

input.split('\n\n').forEach((group) => {
    let total = 0;
    group.split('\n').forEach((i) => {
        total += parseInt(i);
    });
    if (total > highest) {
        highest = total;
    }
});
console.log(highest);

