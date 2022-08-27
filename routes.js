const fs = require('fs');

const requestHandler = (req,res) => {
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
        //way to read files in console
        const text = fs.readFileSync('message.txt', 'UTF8');
        console.log(text);

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

    // another way to read files in console
    // const readFileLines = filename =>
    // fs.readFileSync(filename)
    // .toString('UTF8')
    // const arr = readFileLines('message.txt');
    // console.log(arr);

    res.write("<html>");
    res.write("<title> NodeJS </title>");  // changes the title of page
    res.write("<body> <h1> Welcome to my nodeJs project <h1> </body>");
    res.write("</html>");
    res.end();
};


//----- three ways to export----- in this way we don't have to write anything to where we export this--------
//----- first--------------

module.exports = requestHandler;

//------second-----in this way we also have to write name to where we exporting this (like names of handler or someText)-----------

// module.exports = {
//     handler : requestHandler,
//     someText: 'Some hard coded text'
// };


//------third-------this is a shortcut of second way----------

// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';
