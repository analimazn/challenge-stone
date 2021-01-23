const path = require('path');

const {
	createItemsList,
	processItemsList
} = require('./src/services/processItems');

const {
	writeFile,
	readFile
} = require('./src/services/file');

const INPUT_PATH = path.resolve(__dirname, 'data', 'input.json');
const OUTPUT_PATH = path.resolve(__dirname, 'data', 'output.json');

const ACTION = process.argv[2];

const QUANTITY_ITEMS = Math.floor(process.argv[3]);
const QUANTITY_EMAILS =  Math.floor(process.argv[4]);


function randomValues() {
  try {
    const itemsList = createItemsList(QUANTITY_ITEMS, QUANTITY_EMAILS);
    const data = writeFile(INPUT_PATH, itemsList);

    const itemsProcessed = processItemsList(data);

    const output = writeFile(OUTPUT_PATH, itemsProcessed);

    console.log(output, "\n");
    console.log("You can find these results into data/output.json\n")

  } catch (err) {
    console.error(err);
  }
}


function specificValues() {
  try {
    const data = readFile(INPUT_PATH)
    const itemsProcessed = processItemsList(data);
    const output = writeFile(OUTPUT_PATH, itemsProcessed);

    console.log(output, "\n");
    console.log("You can find these results into data/output.json\n")

  } catch (err) {
    console.error(err);
  }
}

switch (ACTION) {
  case 'randomValues':
    randomValues();
    break;
  case 'specificValues':
    specificValues();
    break;
  default:
    console.log('Sorry, that is not something I know how to do.');
}