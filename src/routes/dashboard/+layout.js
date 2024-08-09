export async function load({ event }) {
	const { cookies } = event

	if (!cookies) {
		throw new Error('Cookies are not defined.');
	}

	const authToken = cookies.get('token');

	if (!authToken) {
		return {
			status: 302,
			redirect: '/auth/discord/login'
		};
	}

	return {
		props: {
			authenticated: true
		}
	};
}