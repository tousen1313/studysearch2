/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const root = 'mocks/data';

let apiRes = {};

function readFiles(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });

  files.forEach((file) => {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      readFiles(fullPath);
    } else if (path.extname(file.name) === '.json') {
      const relativePath = path.relative(root, fullPath);
      const endpoint = relativePath.replace(/\//g, '-').replace(path.extname(file.name), '');
      apiRes[endpoint] = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
    }
  });
}

readFiles(root);

fs.writeFileSync('mocks/db.json', JSON.stringify(apiRes), function (err) {
  if (err) throw err;
});
