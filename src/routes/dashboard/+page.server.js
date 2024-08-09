import { redirect } from '@sveltejs/kit'


export const load = async ({ locals }) => {
	console.log(locals.user)
	if (!locals.user) {
		console.log("rip call mr beast")
		throw redirect(303, "/")
	}
}