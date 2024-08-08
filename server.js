import express from 'express';
import { handler } from './build/handler.js'
import 'dotenv/config'
import axios from 'axios';

const app = express();
const port = 3000;

app.get("/auth/discord/login", (req, res) => {
	console.log("Triggered!")
	const url = process.env.DISCORD_URL
	res.redirect(url);
})

app.get('/auth/discord/callback', async (req, res) => {
	if (!req.query.code) throw new Error("what the sigma");
	const { code } = req.query;
	res.send(code);

	const params = new URLSearchParams({
		client_id: process.env.DISCORD_CLIENT_ID,
		client_secret: process.env.DISCORD_CLIENT_SECRET,
		grant_type: 'authorization_code',
		code,
		redirect_uri: process.env.DISCORD_REDIRECT_URI
	});

	const headers = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/x-www-form-urlencoded'
	};

	const response = await axios.post(
		'https://discord.com/api/oauth2/token',
		params,
		{
			headers
		}
	);

	console.log(response.data)
	
})

app.use(handler)

app.listen(port, () => {
	console.log("Server running and has started on port: " + port);
})