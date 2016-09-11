exports.routes = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(process.cwd() + '/dist/views/index.html');
	});
}
