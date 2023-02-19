const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world from express')
})
app.get('/about',(req,res)=>{
    res.status(200).send('Hello world from about page of express')
})
app.listen(8000,()=>{
    console.log('listening from 8000');
})
