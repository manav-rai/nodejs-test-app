'use strict';
var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Hello Manav!');
});

// Listen
var port = process.env.PORT || 4000;
app.listen(port);
console.log('Listening on localhost:'+ port);