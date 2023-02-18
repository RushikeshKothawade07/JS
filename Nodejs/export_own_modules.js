const {add,sub} = require('./oper')
console.log(add(10,5));
console.log(sub(10,5));


// /oper.js



const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
const name = 'Vinod';

module.exports = {add,sub}
