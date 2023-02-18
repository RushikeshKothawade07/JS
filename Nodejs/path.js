const path = require('path')
console.log(path.dirname("C:/Users/RUSHIKESH/Desktop/PLayground/Nodejs/thapaCH/index.js"));
console.log(path.extname("C:/Users/RUSHIKESH/Desktop/PLayground/Nodejs/thapaCH/index.js"));
console.log(path.basename("C:/Users/RUSHIKESH/Desktop/PLayground/Nodejs/thapaCH/index.js"));


const mypath = (path.parse("C:/Users/RUSHIKESH/Desktop/PLayground/Nodejs/thapaCH/index.js"));
console.log(mypath.name);
console.log(mypath.ext);
console.log(mypath.base);
console.log(mypath.dir);
