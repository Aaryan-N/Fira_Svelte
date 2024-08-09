import * as jwt from 'jsonwebtoken'

export const authenticator = async (req, res, next) => {
	const token = req.cookies.token;
	console.log(token);
	try {
		req.user = await jwt.verify(token, process.env.JWT_SECRET);
		console.log('verif complete')
		await next();
	} catch (e) {
		res.clearCookie("token")
		return res.redirect("/")
	}
}