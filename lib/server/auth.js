/** @type {import('@sveltejs/kit').RequestEvent} */

export const authenticateUser = (event) => {
	const { cookies } = event

	const userToken = cookies.get("token")

	if (!userToken) {
		return null
	} else {
		console.log("We up!")
	}
}