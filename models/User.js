const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		max: 255,
	},
	email: {
		type: String,
		required: true,
		max: 255,
	},
	password: {
		type: String,
		required: true,
		max: 1024,
	},
	date_added: {
		type: Date,
		default: Date.now,
	},
	liked_leagues: {
		type: String,
		default: '',
		max: 2048,
	},
});

module.exports = mongoose.model('User', userSchema);
