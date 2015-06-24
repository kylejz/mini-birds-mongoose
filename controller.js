var mongoose = require('mongoose');
var Sighting = require('./Sighting.js');

exports.get = function(req, res) {
	Sighting.find(req.query, function(err, data) {
		console.log(err, data);
		res.send(data);
	})
}

exports.post = function(req, res) {
	new Sighting(req.body).save(function(err, data) {
		console.log(err, data);
		res.json(data);
	});
}

exports.put = function(req, res) {
	Sighting.update({ _id: req.query.id }, { $set: req.body}, function(err, data) {
		console.log(err, data);
		res.json(data);
	})
}

exports.delete = function(req, res) {
	Sighting.find({ _id: req.query.id }).remove().exec(function(err,data) {
		console.log(err, data);
		res.json(data);
	});
}