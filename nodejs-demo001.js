const http = require('http');
const server = http.createServer((req, res)=> {
    res.write("Hello")
    res.write(" World");
    res.end();
});


server.listen(3_000);