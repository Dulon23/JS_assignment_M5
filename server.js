var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
      if (req.url === '/')
     {
          res.writeHead(200, { 'Content-type': 'text/html' })
          res.write('<h4>This is Home Page</h4')
          res.end()
     }
      else if (req.url === '/about')
     {
          res.writeHead(200, { 'Content-type': 'text/html' })
          res.write('<h4>This is About Page</h4')
          res.end()
     }
      else if (req.url === '/contact')
     {
          res.writeHead(200, { 'Content-type': 'text/html' })
          res.write('<h4>This is Contact Page</h4')
          res.end()
     }
     else if (req.url === '/file-write')
      {
           fs.writeFile('demo.txt', 'Hello world', function (error) {
                if (error) {
                    res.writeHead(200, { 'Content-type': 'text/html' })
                     res.write('File Write Fail')
                     res.end();
                }
                else {
                    res.writeHead(200, { 'Content-type': 'text/html' })
                     res.write('File Write Success')
                     res.end();
                }
          })
     }
});
server.listen(3000)
console.log("It's running..")
