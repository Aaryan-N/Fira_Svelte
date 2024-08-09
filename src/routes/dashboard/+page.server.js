import { redirect } from '@sveltejs/kit'
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { verify } = require('jsonwebtoken');
import 'dotenv/config'

export const load = async ({ locals }) => {
	console.log(locals.user)
}