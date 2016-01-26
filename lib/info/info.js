var http = require('http');
var fs = require('fs');
var path = require('path');
var instructions = path.join(__dirname, './info.html');

var info = function (req, response) {
  fs.readFile(instructions, function(error, content) {
    if (error) {
      if(error.code == 'ENOENT'){
        response.writeHead(404);
        response.end('404 - Where is my file?\n');
      } else {
          response.writeHead(500);
          response.end('500 - Something strange just happened :(\n');
        }
    } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content, 'utf-8');
    }
  });
};

module.exports = info;
