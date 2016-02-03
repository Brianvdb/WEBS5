var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;
	var pathsegments = pathname.split('/');
	
	if (pathname === '/') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Dit is een super hippe calculator.');	
	} else if(pathsegments.length >= 4) {
		var numberOne = parseFloat(pathsegments[2]);
		var numberTwo = parseFloat(pathsegments[3]);
		var result;
		switch(pathsegments[1]) {
			case "add":
				result = numberOne + numberTwo;
				break;
			case "sub":
				result = numberOne - numberTwo;
				break;
			case "mul":
				result = numberOne * numberTwo;
				break;
			case "div":
				result = numberOne / numberTwo;
				break;
		}
		
		if (result) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Uitkomst: ' + result);	
		} else {
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.end('Page not found\n');
		}
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('Page not found\n');
    } 
	
}).listen(8080);


console.log('Server running at http://127.0.0.1:8080/');