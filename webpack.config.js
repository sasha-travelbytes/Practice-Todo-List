var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	devtool: debug ? 'inline-sourcemap' : null,
	entry: './index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_module|bower_components)/,
				loader: 'babel',
				include: __dirname,
				query: {
					presets: ['react', 'react-hmre', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
				}
			}
		]
	},
	output: {
		path: __dirname + '/js',
		filename: 'bundle.js',
		publicPath: '/static/'
	}
};
