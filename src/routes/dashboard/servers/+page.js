import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ parent, data }) {
	await parent()
}