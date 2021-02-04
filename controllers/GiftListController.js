const Gift = require('../services/Gift')

exports.details = function (req, res) {
	res.send({ type: 'GET'})
}

exports.create = function (req, res) {
	const gift = new Gift(req.body)
	res.status(200).send(gift);
};

exports.update = function (req, res) {
  res.send({type: 'PUT'});
};

exports.delete = function (req, res) {
  res.send({type: 'DELETE'});
};
