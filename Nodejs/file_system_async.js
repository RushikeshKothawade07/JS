const fs=  require('fs')
fs.writeFile('read.txt','Hey, im your friend',(err)=>{
    console.log(`file is created`)
    console.log(err);
})

fs.appendFile('read.txt','\nPlz like and share',(err)=>{
    console.log('data appended');
    console.log(err);
})

fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data)
    console.log(err);
})
