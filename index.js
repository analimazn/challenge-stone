const path = require('path');

const {
	createItemsList,
	processItemsList
} = require('./src/services/processItems');

const {
	writeFile,
	readFile
} = require('./src/services/file');

INPUT_PATH = path.resolve(__dirname, 'data', 'input.json');
OUTPUT_PATH = path.resolve(__dirname, 'data', 'output.json');

function main() {
    try {
      /*
        If you want to generate a random input file, use this function
        createItemsList and writeFile
      */

      const itemsList = createItemsList(1, 3);
      const data = writeFile(INPUT_PATH, itemsList);
      
      /*
        If you just want to read the input file from path, use this function 
        readFile and comment createItemsList and writeFile
      */ 
      //const data = readFile(INPUT_PATH)
      
      const itemsProcessed = processItemsList(data);

      const output = writeFile(OUTPUT_PATH, itemsProcessed);

      console.log(output, "\n");
      console.log("You can find these results into data/output.json\n")

  } catch (err) {
    console.error(err);
  }
}

main();