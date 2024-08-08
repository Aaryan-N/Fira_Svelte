import 'dotenv/config';
import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import axios from 'axios';

const app = new Koa();
const router = new Router();

app.use(ctx => {
	ctx.body = 'Hello Koa';
});

router.get('/auth/discord/login', async ctx => {
	const url =
		'https://discord.com/api/oauth2/authorize?client_id=1057732287862685796&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify';

	ctx.redirect(url);
});

app.listen(5173);