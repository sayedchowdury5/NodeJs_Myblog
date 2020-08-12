var fs = require('fs');

//read file
fs.readFile('./text.txt', (err, data) => {
    if(err){
        console.log(err);
    } 
    else console.log(data.toString()); 

    //else console.log(data);

    //console.log('last line');

});

fs.readFile('./new.txt', (err, data) => {
    if(err){
        console.log(err);
    } 
    else console.log(data.toString());
});

//writing file
fs.writeFile('./text.txt', 'Welcome to Node JS', () => {
    
});

//if file not exist then create new and write on it
fs.writeFile('./new.txt', 'Good to know Node JS', () => {
    console.log('File created and written');
});


//make directories
if(!fs.existsSync('assets')){
    fs.mkdir('assets', (err) =>{
        if(err){
            console.log(err);
        } console.log ('Foldar was created');
    });

}else{
    fs.rmdir('assets', (err) =>{
        if(err){
           console.log(err); 
        }console.log('Folder was deleted');
    });
}

//Delete file

if(fs.existsSync ('delete.txt')){
    fs.unlink('delete.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('File has been deleted');
    });
}else console.log('No match found for deleting file');