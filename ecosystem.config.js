module.exports = {
	apps: [{
		name: 'Discord Bot',
		script: 'index.js',
		watch: true,
		ignore_watch: ['node_modules'],
		env: {
			'TZ': 'Europe/Amsterdam',
		},
	}],
};