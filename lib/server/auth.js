/** @type {import('@sveltejs/kit').RequestEvent} */
import * as jose from 'jose'
import 'dotenv/config'

export const authenticateUser = (event) => {
	const { cookies } = event

	const userToken = cookies.get("toke")

	if (userToken === "regularusertoken") {
		const user = {
			id: 1,
			email: "user@example.com",
			role: "USER",
		}
		return user
	}
	if (userToken === "adminusertoken") {
		const user = {
			id: 2,
			email: "admin@example.com",
			role: "ADMIN",
		}
		return user
	}
	return null
}