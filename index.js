// Load the http module
const http = require('http');


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World! This is Node.js\n');
});


server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// const fs=require("fs");
// const data=fs.readFileSync("testfile.txt","utf-8");
// console.log(data);