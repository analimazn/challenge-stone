const fs = require('fs');

function writeFile(path, content) {
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    };

    fs.writeFileSync(path, JSON.stringify(content));
    const result = readFile(path)
    return result;

  } catch (err) {
    throw err;
  };
};

function readFile(path) {
  try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    return data;

  } catch (err) {
    throw err;
  }
}

module.exports = { writeFile, readFile }
