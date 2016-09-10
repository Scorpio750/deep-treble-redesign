exports.routes = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			msg: req.query.msg
		});
	});
}
