const http = require('http');
const hostname = 'localhost';
const port = 3000;
 
const server = http.createServer((req, res) => {
    const message = "Hello, this is a simple Node.js server! " + req.url; 
    //add logic here to handle api

    if(req.url=='/hi')
      res.end("hii , i am good")
    if(req.url=='/countries')
      res.end('INDIA, CHINA , USA , RUSSIA , SRI LANKA')
    res.end(message);
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });