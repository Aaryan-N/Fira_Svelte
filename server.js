import express from 'express';
import { handler } from './build/handler.js'
import 'dotenv/config'
import axios from 'axios';
import { usersSchemaExport } from './src/models/userModel.js';


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
	
	const userResponse = await axios.get(
		'https://discord.com/api/users/@me', {
			headers: {
				authorization: `Bearer ${response.data.access_token}`,
			}
		});

	let userOAuthInfo = await usersSchemaExport.findOne({
		userId: response.data.id
	});
	
	if (userOAuthInfo) {
		userOAuthInfo.username = userResponse.data.username
		userOAuthInfo.avatar = userResponse.data.avatar
		userOAuthInfo.global_name = userResponse.data.global_name
		userOAuthInfo.save()
	} else {
		userOAuthInfo = new usersSchemaExport({
			userId: userResponse.data.id,
			username: userResponse.data.username,
			avatar: userResponse.data.avatar,
			global_name: userResponse.data.global_name
		})
		await userOAuthInfo.save();
	}
	
	console.log(userResponse.data);

})

app.use(handler)

app.listen(port, () => {
	console.log("Server running and has started on port: " + port);
})