import http from "http";
import fs from "fs";
const server = http.createServer();

/////////////////////old way (dont use)
// server.on('request',(req,res)=>{
//     fs.readFile('./thapaCH/read.txt',(err,data)=>{
//         if(err) return console.log(err);
//         res.end(data.toString());
//     })
// })

// server.listen(8000,'127.0.0.1')

///STREAMING

////////////////////////////////

// const rstream = fs.createReadStream("./thapaCH/read.txt");
// rstream.on("data", (chunkdata) => {
//   res.write(chunkdata);
// });
// rstream.on("end", () => {
//   res.end();
// });
// rstream.on("error", (err) => {
//   console.log(err);
//   res.end("file not found");
// });

// server.listen(8000, "127.0.0.1");


/////////////////////////////////////easy way
/////////////////one line

server.on('request',(req,res)=>{

    const rstream = fs.createReadStream("./thapaCH/read.txt");
    rstream.pipe(res);
})
server.listen(8000,'127.0.0.1'); 
