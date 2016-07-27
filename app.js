'use strict';

var express = require('express');
var http = require('http');
var cors = require('cors');

// Define process constants
var ip = process.env.IP || 'localhost';
var port = process.env.PORT || 8000;
var env = process.env.NODE_ENV || 'development';

// Seed database
if (env === 'development'){
  // require('./config/seed')(Database)
}

// // Application specific dependencies
// Create express app
var app = express();

// Add cors support and body parser
app.use(cors())
app.use(express.bodyParser());
app.use(express.errorHandler());

// Configure auth route
// app.use('/auth', require('./routes/auth')(user))

// Configure default route
app.get('/', function(req, res){
	res.send('Hello World')
});

http.createServer(app).listen(port, ip, function() {
	console.log(`Express app running at ${ip}:${port}`);
});