//var peopleList = require('./people.js');
var {people, ages} = require('./people.js');

//console.log(peopleList);
//console.log(peopleList.people, peopleList.ages);
console.log(people, ages);

//information about operating system
const os = require('os');
console.log(os);
console.log(os.platform(), os.homedir());