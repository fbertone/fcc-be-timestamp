var http = require('http');
var fs = require('fs');
var path = require('path');
var instructions = path.join(__dirname, './info.html');

var info = function (request, response) {
  //check if request is http or https
  //needs double check due to forwarding possible use
  var baseUrl = (
    (request.connection.encrypted ||
      request.headers['x-forwarded-proto'] === 'https') ? "https" : "http") +
     '://' + request.headers.host;

     //console.log(request.headers['x-forwarded-proto']);

  fs.readFile(instructions, 'utf8', function(error, content) {
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
        response.end(
          content.replace(new RegExp("_HOSTNAME_", 'g'),baseUrl),
          'utf-8');
    }
  });
};

module.exports = info;
