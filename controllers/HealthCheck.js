exports.healthCheck = function (req, res) {
	res.status(200).send({
		title: "API Health Check",
		status: 'Alive',
		version: '1.0.0'
	})
	
}