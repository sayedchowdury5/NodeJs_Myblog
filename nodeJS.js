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