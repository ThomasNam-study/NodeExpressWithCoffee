var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		'entry': './client/js/entry.js'
	},
	devtool: 'inline-source-map',
	output: {
		path: path.join(__dirname, 'public/dev'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [[
						'env', {
							targets: {
								browsers: ['last 2 versions']
							}
						}
					]]
				}
			},
			{
				test: /\.coffee$/,
				use: [ 'coffee-loader' ]
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('public/dev'),
		new HtmlWebpackPlugin({title:'Output Management'}),

	]
};