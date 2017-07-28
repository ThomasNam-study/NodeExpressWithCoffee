const  path = require('path');
const  webpack = require('webpack');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const  CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


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
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
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
			}
			,
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"]
				})
			}
			,
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
		new ExtractTextPlugin("styles.css")

	]
};