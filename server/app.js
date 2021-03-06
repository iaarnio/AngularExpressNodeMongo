/**
 * Main application file
 */

'use strict';

var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');

// Setup server
var app = express();
var server = http.createServer(app);
var port = 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API routes
app.use('/api/books', require('./api/books'));

// UI routes (all others)
app.use('/', express.static('./client'));


// Connect to database
mongoose.connect('mongodb://localhost/demoapp', function (err) {
  if (err) {
    console.error('Could not connect to MongoDB!');
    console.log(err);
  }
});

// Start server
server.listen(port, 'localhost', function () {
  console.log('Express server listening on %d', port);
});

// Expose app
exports = module.exports = app;
