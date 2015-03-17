var http = require('http');
var url=require('url');
var querystring=require('querystring');
var STR="oooo";
http.createServer(function (req, res) {
    console.log('request received');
    var respo="";
    var pathname=url.parse(req.url,true).pathname;
    console.log("pathname-"+pathname);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    respo='_testcb(\''+STR+'\')';
    res.end(respo);
}).listen(8124);
