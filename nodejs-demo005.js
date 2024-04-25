
var fs = require('fs');

// fs.appendFile('nodejs-demo003.html', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });




fs.open('nodejs-demo003.html', 'w', function (err, file) {
  if (err) throw err;
  console.log(JSON.stringify(file))
  console.log('Saved!');
});