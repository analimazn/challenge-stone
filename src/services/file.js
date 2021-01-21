const fs = require('fs');

function writeFile(path, content) {
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    };

    fs.writeFileSync(path, JSON.stringify(content));
    const result = JSON.parse(fs.readFileSync(path, 'utf8'));
    return result;

  } catch (err) {
    throw err;
  };
};

module.exports = { writeFile }
