let decryptedToken = '';
import { redirect } from '@sveltejs/kit'
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { decode } = require('jsonwebtoken');

let decodeToken = '';

export const load = async ({ locals }) => {

	const token = locals.user;

	try {
		const decoderToken = await decode(token);
		decodeToken = decoderToken.sub
		console.log(decodeToken)
	} catch (e) {
		throw redirect(303, '/errors')
	}


}

