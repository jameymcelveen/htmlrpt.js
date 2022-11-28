/**
 * app.js
 */

const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile( __dirname + 'src/report3.ejs', 'utf-8', function (err, template) {
  if (err) {
    throw err;
  }
  console.log(template.toString());


  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let people = ['Hello', 'to', 'the', 'world'];
    let html = ejs.render(template, {people: people});
    res.end(html);
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

});
