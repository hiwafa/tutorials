
var fs = require('fs');

// fs.appendFile('nodejs-demo003.html', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });




// fs.open('nodejs-demo003.html', 'w', function (err, file) {
//   if (err) throw err;
//   console.log(JSON.stringify(file))
//   console.log('Saved!');
// });

// fs.writeFile('nodejs-demo003.html', 'Hi dear, how are you?', function(err) {
//     if(err) throw err;
//     console.log('saved..')
// });


// fs.unlink('nodejs-demo003.html', err=> {
//     if(err) throw err;
//     console.log('deleted..');
// });

// fs.rename('nodejs-demo003.html', 'nodejs-demo003.txt', err=> {
//     if(err) throw err;
//     console.log('renamed...');
// })


var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'