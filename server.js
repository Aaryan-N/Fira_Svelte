import 'dotenv/config';
import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import axios from 'axios';
import { guildSchemaExport } from './src/models/guildModel.js';
import { handler } from './build/handler.js'

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(handler)

// the relevant query: {"guildId": {"$in": ["848070581731328010", "435465777754323"]}}

console.log("Serving Logins!")

router.get('/auth/discord/login', async ctx => {
	console.log("Triggered!")
	const url =
		'https://discord.com/oauth2/authorize?client_id=782048237170589696&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Fdiscord%2Fcallback&scope=guilds';
	ctx.redirect(url);
});

router.get('/auth/discord/callback', async ctx => {
	if (!ctx.query.code) throw new Error("what the sigma");
	const { code } = ctx.query;
	const params = new URLSearchParams({
		client_id: guildSchemaExport.clientId,
	})
	const response = await axios({})
})

app.listen(5173);