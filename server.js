let express = require('express');
let app = express();
let PORT = process.env.NODE_ENV || 3000;

app.get('/', function(req, res) {
	res.render('index', {
		msg: req.query.msg
	});
});

let route = require('./routes/route.js');

app.listen(PORT, function() {
	console.log('listening on port', PORT);
});
