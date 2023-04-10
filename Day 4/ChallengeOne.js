const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

let overlaps = 0;
const pairs = data.split('\n').map(line => line.split(','));

pairs.forEach(pair => {
    const [range1, range2] = pair;
    const [min1, max1] = range1.split('-').map(Number);
    const [min2, max2] = range2.split('-').map(Number);
    
    if (min1 <= min2 && max1 >= max2) {
        overlaps++;
    } else if (min2 <= min1 && max2 >= max1) {
        overlaps++;
    }
});
console.log(overlaps);