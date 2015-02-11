'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
	var urlParts = req.url.split("/");
	console.log(urlParts);
	var minutes = 1000 * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;
	var time = new Date();
	var timeMs = time.getTime();
	var timeFinal = Math.round(timeMs/years);
	res.writeHead(200, {
		'Content-Type': 'text/html',
	});
	switch(urlParts[1]) {
		case 'greet':
			res.write('Hello ' + urlParts[2] + '\n');
			break;
		case 'time':
			res.write(timeFinal + '\n');
			break;
		default:
		res.write('we did not hit a route\n');
	}

	res.end();
});

server.listen(3000);
