const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

require('dotenv').config()

if (!process.env.NODE_ENV) {
	throw new Error('The NODE_ENV environment variable is required but was not specified.');
}

console.log(process.env);

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

// TODO: Process raw environment variables to make sure we don't leak anything that
// doesn't start with a certain prefix (like REACT_APP).

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
			publicPath: '/',
		}),
		new WebpackCdnPlugin({
			modules: [
				{ name: 'react', var: 'React', path: `umd/react.${process.env.NODE_ENV}.${process.env.NODE_ENV === 'production' ? 'min.js' : 'js' }` },
				{ name: 'react-dom', var: 'ReactDOM', path: `umd/react-dom.${process.env.NODE_ENV}.${process.env.NODE_ENV === 'production' ? 'min.js' : 'js' }` },
			],
			publicPath: 'node_modules',
		}),
		new InterpolateHtmlPlugin(process.env),
	],
	devServer: {
		port: 3000,
		watchFiles: ['src/*'],
	},
};
