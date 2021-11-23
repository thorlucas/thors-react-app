const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelOpts = {
	presets: [
		// TODO: es2015 / es2016 ?
		'@babel/preset-env',
		'@babel/preset-react',
	],
};

// NOTE: For babel-loader + ts-loader see:
// https://github.com/microsoft/TypeScriptSamples/blob/master/react-flux-babel-karma/webpack.config.js

// TODO: babel-polyfill?

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: babelOpts,
				}],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: babelOpts,
					},
					{
						loader: 'ts-loader'
					}
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		// FIXME: Pass in env variables for interpolation
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
		}),
	],
	devServer: {
		port: 3000,
		watchFiles: ['src/*'],
	},
};
