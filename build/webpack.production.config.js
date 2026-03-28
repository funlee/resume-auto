/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-22 11:15:09 
 * @Last Modified time:   2017-12-22 11:15:09 
 * @Description: webpack.production.config.js 
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.join(__dirname, '../src/app.js'),
    vendor: ['jquery']
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    publicPath: '/',
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[id].[hash].js'
  },
  devtool: '#source-map',
  devServer: {
    port: 8080,
    hot: true
  },
  plugins: [
    new webpack.BannerPlugin('Funlee All Rights Reserved'),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html')
    }),
    //避免重复打包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['bundle'],
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require("autoprefixer")({
              browsers: ["last 2 versions"]
            })
          ]
        }
      }]
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.hbs$/,
      loader: 'handlebars-loader',
      options: {
        inlineRequires: /\.(png|svg|jpg|gif)$/,
      }
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 3000
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 3000
      }
    }
    ]
  }
}