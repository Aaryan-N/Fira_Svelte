import { redirect } from '@sveltejs/kit'
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { verify } = require('jsonwebtoken');
import 'dotenv/config'

export const load = async ({ locals }) => {
	const token = locals.user;
	try {
		const { sub } = await verify(token, process.env.JWT_SECRET);
		console.log('success');
	} catch (e) {
		console.log('cooked')
		throw redirect(303, '/')
	}
}