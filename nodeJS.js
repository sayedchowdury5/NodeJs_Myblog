
var fs = require('fs');
var data = fs.readFileSync('text.txt');
console.log(data.toString());
console.log('End Here');

//const name = "sayed";
const greet = (name) => {
    console.log('hello, ${name}');
}

greet ('imran');
greet ('sayed');

//create global object
//console.log(global);
setTimeout(() => {
    console.log('timed out after 3s')
    clearInterval(setInt);
}, 3000);

const setInt = setInterval(() => {
    console.log('repeat interval every 1s')
}, 1000)

//get absolute and relative path
console.log(__dirname);
console.log(__filename);

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("hello shama");
    res.write("This is from imran");
    res.end();
}).listen(8080);

