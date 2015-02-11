'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
	var urlParts = req.url.split("/");
	console.log(urlParts);
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	res.writeHead(200, {
		'Content-Type': 'text/html',
	});
	switch(urlParts[1]) {
		case 'greet':
			res.write('Hello ' + urlParts[2] + '\n');
			break;
		case 'time':
			res.write('Time is: ' + hours + ':' + minutes + '\n');
			break;
		default:
			res.write('we did not hit a route\n');
	}

	res.end();
});

server.listen(3000);
