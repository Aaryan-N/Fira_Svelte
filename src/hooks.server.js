/** @type {import('@sveltejs/kit').Handle} */
import { authenticateUser } from "$lib/server/auth"
import { redirect } from '@sveltejs/kit'
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { verify } = require('jsonwebtoken');

export const handle = async ({ event, resolve }) => {

	event.locals.user = authenticateUser(event);

	if (event.url.pathname.startsWith("/dashboard")) {
		console.log(event.locals.user)
		const token = event.locals.user;
		try {
			const { sub } = await verify(token, process.env.JWT_SECRET);
		} catch (e) {
			throw redirect(303, '/errors')
		}
	}
	return resolve(event);
}