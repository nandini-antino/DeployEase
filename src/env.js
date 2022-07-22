export let config = {
	api: {
		baseUrl:
			process.env.NODE_ENV === 'production' &&
				!window.location.origin.includes('dev')
				? 'https://prod.url'
				: 'https://jsonplaceholder.typicode.com',
		baseUrl2: '',
		headers: {
			// ['api-user-agent']: 'web',
		},
	},
	email_verification_url:
		process.env.NODE_ENV === 'production'
			? `${window.location.protocol}//${window.location.host}/dashboard/profile/verifiedEmail`
			: 'http://localhost:5000/dashboard/profile/verifiedEmail',
	website_url:
		process.env.NODE_ENV === 'production'
			? `${window.location.protocol}//${window.location.host}`
			: 'http://localhost:5000',
};

export default config;
