var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var birdSchema = new Schema({
	name: { type: String, lowercase: true, required: true},
	order: { type: String, maxlength: 15 },
	status: { type: String, enum: ["least concern", "extinct", "near threatened", "reasonably threatened"] },
	confirmed: { type: Boolean, required: true },
	numberSeen: { type: Number, min: 1, required: true},
	last_updated_at: {type: Date, default: Date.now }
});

module.exports = mongoose.model('Sighting', birdSchema);