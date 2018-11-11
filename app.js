var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res) {
	res.send('Hello home page');
});
app.get('/dynamic', function(req, res) {
	var lis = '';
	for (var i = 0; i < 5; i++) {
		lis += '<li>coding</li>';
	}
	var time = Date();
	var output = `
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
	</head>
	<body>
		Hello, Dynamic!
		<ul>
			<li>coding</li>
			<li>coding</li>
			<li>coding</li>
			<li>coding</li>
			<li>coding</li>
		</ul>
	</body>
	</html>`;
	res.send(output);
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
