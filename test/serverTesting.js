'use strict';

require('../server');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('http server', function() {
	var server = 'localhost:3000';
	it('should respond to a greet request', function(done) {
		chai.request(server)
		.get('/greet/foo')
		.end(function(err, res) {
			expect(err).to.eql(null);
			expect(res).to.have.status(200);
			expect(res.text).to.eql('Hello foo\n');
			done();
		});
	});

	it('should respond to time request', function(done) {
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		chai.request(server)
		.get('/time')
		.end(function(err, res) {
			expect(err).to.eql(null);
			expect(res).to.have.status(200);
			expect(res.text).to.be.at.least('Time is: ' + hours + ':' + minutes + '\n');
			done();
		});
	});

	it('should have a default route', function(done) {
		chai.request(server)
		.get('/stuff')
		.end(function(err, res) {
			expect(err).to.eql(null);
			expect(res).to.have.status(200);
			expect(res.text).to.eql('we did not hit a route\n');
			done();
		});
	});
});
