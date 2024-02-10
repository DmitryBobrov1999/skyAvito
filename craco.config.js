const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@icons': path.resolve(__dirname, './src/components/icons'),
			'@components': path.resolve(__dirname, './src/components'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
};
