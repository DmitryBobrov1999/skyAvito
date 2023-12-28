const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@pages': path.resolve(__dirname, './src/pages'),
			'@imgs' : path.resolve(__dirname, './public/imgs'),
		},
		
	},
};
