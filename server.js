const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
  if(req.url=='/about'){
    const data = fs.readFileSync('index.html').toString();
    res.end(data);
  }else if(req.url=='/love'){
  res.end('Hi i like u Vaishnavi .Jai shri Ram Vaishnavi');
  }
}).listen(3432);
// returning HTML mpage as Respopnse

console.log('This server is working fine')