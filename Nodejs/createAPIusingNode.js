import http from "http";
import fs from "fs";
const server = http.createServer((req, res) => {
  if (req.url == "/") res.end("Hello from this side bro");
  else if (req.url == "/about") res.end("Hello from about side bro");
  else if (req.url == "/contact") res.end("Hello from contact us side bro");
  else if (req.url == "/userapi") {
    fs.readfile("./thapaCH/json1.json", "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
      //   res.end("Hello from userAPI side bro");
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error page</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to web server 8000");
});
