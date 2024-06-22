const fs = require("fs");

fs.writeFile("message.txt","Hello from NodeJS!", (err) => {
    if (err) throw err;
      console.error('myfile already exists');
    });

    const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
async function logFile() {
  try {
    const filePath = resolve('./package.json');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}
logFile();