var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
	var Sighting = require('./Sighting.js');
	var api = require('./controller.js');
var app = express();
var port = 9001;
var mongoUri = 'mongodb://localhost:27017/real-birds'


app.use(bodyParser.json(), cors());
app.use(express.static(__dirname + '/public'))


app.get('/api/sighting', api.get);
app.post('/api/sighting', api.post);
app.put('/api/sighting', api.put);
app.delete('/api/sighting', api.delete)



mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log("db connected, cap'n")
})

app.listen(port, function() {
	console.log("Natalie " + port + "man")
})

