/**
 * Created by buchenkowa on 20.04.17.
 */

'use strict';

let NODE_ENV = process.env.NODE_ENV || 'development';
let webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',

  entry: {
    app: './app'
  },

  output: {
    path: __dirname + '/public',
   // publicPath: '/',
    filename: '[name].js'
  },
  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDerictories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {

    loaders: [{
      test: /\.js$/,
      loader: 'babel?optional[]=runtime'
    }]
  }


};
