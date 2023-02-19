import fs from 'fs'
const biodata ={
    name:'Rushikesh',
    age:22,
    channel:'thapa',
}
// console.log(biodata.name);

//covert object to json
// const jsonData = JSON.stringify(biodata)
// console.log(jsonData);


//covert json to object
// const obData = JSON.parse(jsonData)
// console.log(obData);

// 1. Covert ob to JSON
const jsonData = JSON.stringify(biodata);


// 2. dusre file m add krna 
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log(err);
})

// 3. read file 
fs.readFile('json1.json','utf-8',(err,data)=>{
    console.log(data);
    const orgData = JSON.parse(data)
    console.log(orgData);
})

