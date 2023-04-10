const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const arr = data.split('\n').map(row => row.split(''));
let scenicScores = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        let score = check(i, j, arr);
        if (score > 0) {
            scenicScores.push(score);
        }
    }
}

function check(i, j, arr) {
    if (i === 0 || i === arr.length - 1 || j === 0 || j === arr[i].length - 1) {
        return 0;
    }

    let viewDistanceLeft = 0;
    let viewDistanceRight = 0;
    let viewDistanceAbove = 0;
    let viewDistanceBelow = 0;

    for (let k = j - 1; k >= 0; k--) {
        viewDistanceLeft++;
        if (arr[i][k] >= arr[i][j]) {
            break;
        }
    }
    for (let k = j + 1; k < arr[i].length; k++) {
        viewDistanceRight++;
        if (arr[i][k] >= arr[i][j]) {
            break;
        }
    }
    for (let k = i - 1; k >= 0; k--) {
        viewDistanceAbove++;
        if (arr[k][j] >= arr[i][j]) {
            break;
        }
    }
    for (let k = i + 1; k < arr.length; k++) {
        viewDistanceBelow++;
        if (arr[k][j] >= arr[i][j]) {
            break;
        }
    }

    return viewDistanceLeft * viewDistanceRight * viewDistanceAbove * viewDistanceBelow;
}

console.log(Math.max(...scenicScores));