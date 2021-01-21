const path = require('path');

const { createItemsList } = require('./src/services/processItems');
const { writeFile } = require('./src/services/file');

INPUT_PATH = path.resolve(__dirname, 'data', 'input.json');
OUTPUT_PATH = path.resolve(__dirname, 'data', 'output.json');

const data = createItemsList(5, 5);
const result = writeFile(INPUT_PATH, data);

console.log(result)