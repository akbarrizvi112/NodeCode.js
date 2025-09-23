const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // complete the code to read the file
  fs.readFile('my-file.txt','utf8', (err,data)=>{
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading file!');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});