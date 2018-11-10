var express = require('express');
var app = express();
app.get('/', function(req, res) {
	res.send('Hello home page');
});
app.get('/login', function(req, res) {
	res.send('Login please');
});
app.listen(5900, function() {
	console.log('Connected 5900 port!');
});
