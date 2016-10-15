exports.testSomething = function(test) {
	test.ok(true, "this assertion should pass");
	test.done();
};

exports.testSomethingElse = function(test) {
	test.ok(true, "this assertion should fail");
	test.done();
};
