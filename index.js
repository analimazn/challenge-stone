const path = require('path');

const { createItemsList, processItemsList } = require('./src/services/processItems');
const { writeFile, readFile } = require('./src/services/file');

INPUT_PATH = path.resolve(__dirname, 'data', 'input.json');
OUTPUT_PATH = path.resolve(__dirname, 'data', 'output.json');

// const itemsList = createItemsList(1, 3);
// const data = writeFile(INPUT_PATH, itemsList);

const data = readFile(INPUT_PATH)
const result = processItemsList(data);

console.log(result)