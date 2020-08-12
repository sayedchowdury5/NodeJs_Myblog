var fs = require('fs');

//const readstream = fs.createReadStream('streamText.txt');
const readstream = fs.createReadStream('streamText.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('newStream.txt');


// readstream.on('data', (chunk)=>{
//     console.log('--------------------New Chunk--------------------------');
//     //console.log(chunk.toString());
//     console.log(chunk);

//     writeStream.write('\n-------New Chunk-------\n');
//     writeStream.write(chunk);
// });

//stream piping
readstream.pipe(writeStream);