const fs = require('fs');
const path = require('path');

function validatePath(filePath) {
  if (!path.isAbsolute(filePath)) {
    return false;
  };
  return true;
};


function writeFile(filePath = "", content = []) {
  try {
    if (!validatePath(filePath)) {
      throw "Invalid filePath";
    };

    if (!Array.isArray(content)) {
      throw "Content must be an Array";
    }

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    };

    fs.writeFileSync(filePath, JSON.stringify(content));
    const result = readFile(filePath)
    return result;

  } catch (err) {
    throw err;
  };
};


function readFile(filePath="") {
  try {
    if (!validatePath(filePath)) {
      throw "Invalid filePath";
    };

    if (!fs.existsSync(filePath)) { 
      throw "Nothing to show";
    };

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;

  } catch (err) {
    throw err;
  }
}

module.exports = {
  validatePath,
  writeFile,
  readFile
};
