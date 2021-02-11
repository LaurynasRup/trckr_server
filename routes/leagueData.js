const router = require('express').Router();
const User = require('../models/User');

// Store leagues data
router.post('/store_leagues', async (req, res) => {
	// const { str, email } = req.body;
	// const userData = [str, email];

	try {
		const filter = { email: req.body.email };
		const update = { liked_leagues: req.body.str };
		const storeLeagues = await User.updateOne(filter, update);
		res.send(storeLeagues);
	} catch (err) {
		throw err;
	}
});

module.exports = router;
