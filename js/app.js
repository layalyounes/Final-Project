//where we are going to make our api calls and store the functionality stuff
var express = require('express');
var app = express();
var contactView = require('./contact-view');
var homeView = require('./home-view');
var appView = require('./app-view');

//blah blah blah
// respond with chosenString on the homepage
app.get('/home', function (req, res) {

  res.send(chosenString);
});

app.get('/contact', function (req, res) {

  res.send(randArr);
});

app.get('/app-view', function (req, res) {

  res.send(randArr);
});

var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
console.log('Example app listening at http://%s:%s', host, port);
});
