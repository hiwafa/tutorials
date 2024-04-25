
var fs = require('fs');

fs.appendFile('nodejs-demo003.html', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});