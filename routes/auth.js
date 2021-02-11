const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Add new user
router.post('/insert', async (req, res) => {
	// Check if user is in DB
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send('User already exists');

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (err) {
		res.status(400).send(err);
	}
});

// Find user by email
router.get('/getUser/:email', async (req, res) => {
	const userExist = await User.findOne({ email: req.params.email });
	if (!userExist) return res.status(400).send('User does not exist');
	try {
		res.send(userExist);
	} catch (err) {
		throw err;
	}
});

module.exports = router;
