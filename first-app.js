// first program

// var a = 'Hello World'

// console.log(a)



// create server

const http = require('http');
const server = http.createServer((req,res) => {
    res.write("himanshu");
    res.end();
});
server.listen(4000)