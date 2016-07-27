'use strict';

let express = require('express');
let http = require('http');
let cors = require('cors');
let bodyParser = require('body-parser');
let compression = require('compression');
let errorHandler = require('errorhandler');
let methodOverride = require('method-override');

// Define process constants
let ip = process.env.IP || 'localhost';
let port = process.env.PORT || 9000;
let env = process.env.NODE_ENV || 'development';

let mongoose = require('mongoose');

// Define mongoose constants
let mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/decision';

// Connect to MongoDB
mongoose.connect(mongoUrl, {db:{safe: true}});
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Seed database
if (env === 'development'){
  // require('./config/seed')(Database)
}

// // Application specific dependencies
// Create express app
let app = express();

// Add cors support and body parser
app.use(cors())
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(errorHandler());

// Import the models
let User = require('./app/models/user/user.model');
// Configure user route
app.use('/api/users', require('./app/models/user')(User));


// Configure default route
app.get('/', function(req, res){
	res.send('Hello World')
});

http.createServer(app).listen(port, ip, function() {
	console.log(`Express app running at ${ip}:${port}`);
});