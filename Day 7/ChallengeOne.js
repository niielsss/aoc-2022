const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');

class File {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

class Directory {
    constructor(name, parent) {
        this.name = name;
        this.parent = parent;
        this.files = [];
        this.dirs = [];
    }

    addFile(file) {
        this.files.push(file);
    }

    addDir(dir) {
        this.dirs.push(dir);
    }

    getSize() {
        let size = 0;
        this.files.forEach(file => size += file.size);
        this.dirs.forEach(dir => size += dir.getSize());
        return size;
    }

    getSizePartA() {
        let size = 0;
        this.files.forEach(file => size += file.size);
        this.dirs.forEach(dir => size += dir.getSize());
        return (size < 100000 ? size : 0) + this.dirs.map(dir => dir.getSizePuzzleA()).reduce((a, b) => a + b, 0);
    }
}

let current = root = new Directory("/", null);

data.split("\n").forEach(line => {
    line = line.split(" ");
    if (line[0] === "dir") {
        current.addDir(new Directory(line[1], current));
    }
    else if (line[0].startsWith("$")) {
        if (line[1].startsWith("ls")) {
            return;
        }
        else if (line[2] === "..") {
            current = current.parent;
        }
        else if (line[2] === "/") {
            current = root;
        }
        else {
            current = current.dirs.find(dir => dir.name === line[2]);
        }
    }
    else {
        current.addFile(new File(line[1], parseInt(line[0])));
    }
});

console.log(root.getSizePartA());