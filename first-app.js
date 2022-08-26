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
const server = http.createServer((req,res) => {
    const url = req.url;

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

    res.write("<html>");
    res.write("<title> NodeJS </title>");  // changes the title of page
    res.write("<body> <h1> Welcome to my nodeJs project <h1> </body>");
    res.write("</html>");

    req.set
    res.end();
    // console.log(req.url, req.method, req.headers)
});
server.listen(4000)