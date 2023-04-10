const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

let count = 0;
for (i = 0; i < data.length; i++) {
    const set = new Set();
    for (j = 0; j < 4; j++) {
        set.add(data[i + j]);
    }
    if (set.size === 4) {
        break;
    }
    count++;
}
console.log(count + 4);