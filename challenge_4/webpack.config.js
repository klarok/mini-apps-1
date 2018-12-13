const path = require('path');

module.exports = {
	mode: 'development',
	entry: './client/src/index.jsx',
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'client/dist')
		},
	devServer: {
		contentBase: './client/dist'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			}
		]
	}
}