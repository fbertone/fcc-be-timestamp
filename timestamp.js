var http = require('http');
var info = require('./lib/info/info.js');
var tshanler = require('./lib/tshandler/tshandler.js');

var server = http.createServer(function (req, res) {
  //if no parameters -> send info page
  if(req.url === '/') {
    info(req, res);
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    //slice(1) to remove '/', decodeURI to remove URI encoding
    res.end(JSON.stringify(tshanler(decodeURI(req.url.slice(1)))), 'utf-8');
  }
});

server.listen((process.env.PORT || 5000), function(){
    console.log("Server Timestamp microservice listening on port: %s", (process.env.PORT || 5000));
});
