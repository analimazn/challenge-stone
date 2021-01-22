const path = require('path');

const {
  writeFile,
  readFile
} = require('../../src/services/file');

const {
  createItemsList,
  calculateItemsList,
  divideItemsList,
  processItemsList
} = require('../../src/services/processItems');

INPUT_PATH = path.resolve(__dirname, '..', 'mocks', 'input.json');

describe('Test ProcessItems Service', () => {
  test('CreateItemsList must return an Array', () => {
    const itemsList = createItemsList(1, 3);
    const data = writeFile(INPUT_PATH, itemsList);
    expect(Array.isArray(data)).toBe(true);
  });

  test('CalculateItemsList must return an Integer number', () => {
    const data = readFile(INPUT_PATH);
    const total = calculateItemsList(data[0].items);
    expect(Number.isInteger(total)).toBe(true);
  });

  test('DivideItemsList must return an Array', () => {
    const data = readFile(INPUT_PATH);
    const result = divideItemsList(100, data[0].emails);
    expect(Array.isArray(result)).toBe(true);
  });

  test('ProcessItemsList must return True', () => {
    const data = readFile(INPUT_PATH);
    const result = processItemsList(data);
    expect(Array.isArray(result)).toBe(true);
  });
});