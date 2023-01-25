const path = require('path');

const fs = require('fs');

console.log(__dirname);

fs.writeFileSync(path.resolve(__dirname, 'test.txt'), 'Hello World');