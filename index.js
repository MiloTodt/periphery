var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');

var server = http.createServer();
server.on('request', function (req, res) {
    console.log('request:', req.url);
    var urlObj = url.parse(req.url, true);
    console.log(urlObj.query.lname);
    if (req.method === 'GET' && req.url.match(/^\/.+\.html$/)) {
        var filepath = (__dirname, req.url);
        fs.readFile(filepath, function (err, contents) {
            if (err) { // handle error 

            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write(contents);
                res.end();
            }
        });
    } else if (req.method === 'GET' && req.url.match(/^\/.+\.jpg$/)) {
        var imgpath = path.join(__dirname, req.url);
        var imgstream = fs.createReadStream(imgpath, {
            highWaterMark: 1024
        });
        res.writeHead(200, {
            "Content-Type": "image/jpeg"
        });
        imgstream.pipe(res);
    } else if (req.url === '/') {
        html = fs.readFileSync('./index.html');
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(html);

    } else if (req.url === '/style.css') {
        html = fs.readFileSync('./style.css');
        res.setHeader('Content-Type', 'text/css');
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });
        res.end(html);
    } else if (req.url === '/script.js') {
        html = fs.readFileSync('./script.js');
        res.setHeader('Content-Type', 'text/js');
        res.writeHead(200, {
            'Content-Type': 'text/js'
        });
        res.end(html);
    } else {
        var html404 = "404 error!";
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(html);
    }
});
server.listen(8080);