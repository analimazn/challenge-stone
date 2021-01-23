const path = require('path');

const {
  validatePath,
  writeFile,
  readFile
} = require('../../src/services/file');

const INPUT_PATH = path.resolve(__dirname, '..', 'mocks', 'input.json');
const OUTPUT_PATH = path.resolve(__dirname, '..', 'mocks', 'output.json');

describe('Test File Service', () => {
  test('ValidatePath must return True', () => {
    expect(validatePath(INPUT_PATH)).toBe(true);
    expect(validatePath(OUTPUT_PATH)).toBe(true);
  });

  test('WriteFile must return an Array', () => {
    const itemsList = writeFile(INPUT_PATH);
    expect(Array.isArray(itemsList)).toBe(true);
  });

  test('ReadFile must return an Array', () => {
    const itemsList = readFile(INPUT_PATH);
    expect(Array.isArray(itemsList)).toBe(true);
  });
});
