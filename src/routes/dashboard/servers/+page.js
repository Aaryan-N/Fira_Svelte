import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ parent, data }) {
	await parent()
	let { decodedToken } = data
	return {
		decodedToken
	}
}