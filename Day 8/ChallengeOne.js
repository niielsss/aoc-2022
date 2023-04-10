const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const arr = data.split('\n').map(row => row.split(''));
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        count += check(arr[i][j], i, j, arr);
    }
}

function check(value, i, j, arr) {
    if (i === 0 || i === arr.length - 1 || j === 0 || j === arr[i].length - 1) {
        return 1;
    }
    let highestLeft = Math.max(...arr[i].slice(0, j));
    let highestRight = Math.max(...arr[i].slice(j + 1));
    let highestAbove = Math.max(...arr.map(row => row[j]).slice(0, i));
    let highestBelow = Math.max(...arr.map(row => row[j]).slice(i + 1));
    if (value > highestLeft || value > highestRight || value > highestAbove || value > highestBelow) {
        return 1;
    }
    else {
        return 0;
    }

}

console.log(count);