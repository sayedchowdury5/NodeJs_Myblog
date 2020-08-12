var http = require('http');
var fs = require('fs');
var _load = require('lodash');

var server = http.createServer((req, res) => {
    //console.log(req.url, req.method);

    //lodash
    const num = _load.random(0, 20);
    console.log(num);

    //run a function once only eventhough it called multiple times
    const greet = _load.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    //send html content to browser
    // res.write('<p>hello Sayed</p>');
    // res.write('<p>again hello Sayed</p>');
    // res.end();

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

            //Redirect to another file if the expected file not exist
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send a html file to browser
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            //res.write(data);
            res.end(data);
        }
    });
});

server.listen(8080, 'localhost', () =>{
    console.log('Listenning for request on port 8080');
});