var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
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
	mode: 'development',
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		})
	]
};
