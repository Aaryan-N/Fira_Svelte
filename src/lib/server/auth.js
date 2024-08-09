/** @type {import('@sveltejs/kit').RequestEvent} */
import 'dotenv/config'

export const authenticateUser = (event) => {
	const { cookies } = event
	const userToken = cookies.get('token')
	try {
		return userToken
	} catch (err) {
		return null
	}
}