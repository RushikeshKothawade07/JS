import EventEmitter from 'events';
const event  = new EventEmitter;

event.on('myevent',()=>{
    console.log('My name is vinod');
})
event.on('myevent',()=>{
    console.log('My name is bahadur');
})
event.on('myevent',()=>{
    console.log('My name is thapa');
})
event.on('myevent',()=>{
    console.log('My name is okay');
})
event.on('myevent',()=>{
    console.log('My name is bro');
})
event.emit('myevent')


//////////////////////////////////////
event.on('checkpage',(sc,msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}`)
})
event.emit('checkpage',200,'ok')
