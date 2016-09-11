const express = require('express');
const app = express();
const PORT = process.env.NODE_ENV || 3000;

const route = require('./routes/route.js');
route.routes(app);

app.listen(PORT, function() {
	console.log('Listening on port', PORT);
});
