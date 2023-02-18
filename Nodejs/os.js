 const os = require('os')
 const freememory = os.freemem()
 console.log(`You have ${freememory/1024/1024/1024} gb of free memory`);
 const totalmemory = os.totalmem()
 console.log(`You have ${totalmemory/1024/1024/1024} gb of total memory`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
