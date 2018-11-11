var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res) {
	res.send('Hello home page');
});
app.get('/route', function(req, res) {
	res.send('Hello Router, <img src="/palm_trees.jpg">');
});
app.get('/login', function(req, res) {
	res.send('Login please');
});
app.listen(5900, function() {
	console.log('Connected 5900 port!');
});
