const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

const crates = data.split('\n\n')[0].split('\n').slice(0, 8).reverse();
const procedure = data.split('\n\n')[1].split('\n');
const stacks = [];
for (i = 1; i < 35; i += 4) {
    stack = [];
    crates.forEach((row) => {
        if (row[i] !== " ") {
            stack.push(row[i]);
        }
    });
    stacks.push(stack);
}

procedure.forEach((instruction) => {
    const [amount, from, to] = [instruction.split(' ')[1], instruction.split(' ')[3], instruction.split(' ')[5]];
    const fromStack = stacks[Number(from) - 1];
    const toStack = stacks[Number(to) - 1];
    toStack.push(...fromStack.splice(fromStack.length - Number(amount), Number(amount)));
});

let result = "";
stacks.forEach((stack) => {
    result += stack.pop();
});
console.log(result);