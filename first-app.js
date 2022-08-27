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
const fs = require('fs');
const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method

    if(url === '/home'){
        res.write("<html>");
        res.write("<body> <h2> Welcome home <h2> </body>");
        res.write("</html>");
        return res.end()
       
    }
    if(url === '/about'){
        res.write("<html>");
        res.write("<body> <h2> Welcome to About this page <h2> </body>");
        res.write("</html>");
        return res.end()
    }
    if(url === '/node'){
        res.write("<html>");
        res.write("<body> <h2> Welcome to NodeJs project <h2> </body>");
        res.write("</html>");
        return res.end()
    }

    if(url === '/text'){
        res.write("<html>");
        res.write("<head> <title> Enter message </title> </head> ");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end()
    }

    if(url === '/message' && method === 'POST' ){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/home');
                return res.end();
            });
        });
    }
    const readFileLines = filename =>
    fs.readFileSync(filename)
    .toString('UTF8')
    const arr = readFileLines('message.txt');
    console.log(arr);

    res.write("<html>");
    res.write("<title> NodeJS </title>");  // changes the title of page
    res.write("<body> <h1> Welcome to my nodeJs project <h1> </body>");
    res.write("</html>");
    res.end();
    // console.log(req.url, req.method, req.headers)
});
server.listen(4000)