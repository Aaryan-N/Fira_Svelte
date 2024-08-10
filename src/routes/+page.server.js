import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { decode } = require('jsonwebtoken');

export async function load({ locals }) {
	const token = locals.user;
	try {
		const decoderToken = await decode(token);
	} catch (e) {
		const decoderToken = null;
	}
	return {
		decoderToken
	};
}