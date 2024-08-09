import { redirect } from '@sveltejs/kit'
import 


export const load = async ({ locals }) => {
	if (!locals.user) {
		console.log("rip call mr beast")
		throw redirect(303, "/")
	}
}