const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

// Use cors
app.use(cors());

// Import routes
const authRoute = require('./routes/auth');
const leagueRoute = require('./routes/leagueData');

// Connect to db
mongoose.connect(
	process.env.DB_CONNECT,
	{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
	() => {
		console.log('DB connected');
	}
);

// Body parser
app.use(express.json());

// Route middlewares
app.use('/api/users', authRoute);
app.use('/api/leagues', leagueRoute);

// Add port
app.listen(process.env.PORT || 5000, () => {
	console.log('server running');
});
