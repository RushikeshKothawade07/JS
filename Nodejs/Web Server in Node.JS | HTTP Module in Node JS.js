import http from 'http'
const server = http.createServer((req,res)=>{
    res.end('Hello from this side');
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to web server 8000');
});
