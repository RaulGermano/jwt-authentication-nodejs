const express = require('express');
const jwt = require('jsonwebtoken');

require('dotenv/config');

const server = express();

server.use(express.json());

server.post('/auth', (req, res) => {
	const { login, password } = req.body;

	const token = jwt.sign({ login }, process.env.SECRET, {
		expiresIn: 3600
	});

	res.json({
		result: {
			login,
			password,
			token
		}
	});
});

server.post('/create-user', (req, res) => {
	const { login, password } = req.body;

	res.json({
		result: {
			login,
			password
		}
	});
});

server.listen(3333);
