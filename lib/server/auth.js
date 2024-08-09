/** @type {import('@sveltejs/kit').RequestEvent} */
import * as jose from 'jose'
import 'dotenv/config'

export const authenticateUser = async (event) => {
	const { cookies } = event
	const userToken = cookies.get("token")
	console.log(userToken)
	console.log(process.env.JWT_SECRET)
	try {
		const verificationProcess = await jose.jwtVerify(userToken, process.env.JWT_SECRET);
		console.log(verificationProcess)
		return verificationProcess;
	} catch (e) {
		return null
	}
}