// first program

// var a = 'Hello World'

// console.log(a)



// create server

// const http = require('http');
// const server = http.createServer((req,res) => {
//     res.write("himanshu");
//     res.end();
//     console.log(req.url, req.method, req.headers)
// });
// server.listen(4000)





// sending request

const http = require('http');

const routes = require('./routes.js');

const server = http.createServer(routes);

server.listen(4000);