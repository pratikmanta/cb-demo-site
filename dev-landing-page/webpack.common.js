var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './app/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{
				test: /\.scss$/,
				use: [
				  {
					loader: "style-loader" // creates style nodes from JS strings
				  },
				  {
					loader: "css-loader" // translates CSS into CommonJS
				  },
				  {
					loader: "sass-loader" // compiles Sass to CSS
				  }
				]
			},
			{ 
				test: /\.(png|jpg)$/, 
				use: {
					loader: 'url-loader'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Production',
			template: 'app/index.html'
		})
	]
};
