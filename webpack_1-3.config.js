/**
 * Created by buchenkowa on 20.04.17.
 */

'use strict'; //не обязательная директива

let NODE_ENV = process.env.NODE_ENV || 'development';
let webpack = require('webpack');

module.exports = {
  // экспорт объект конфига (документация про объект конфига http://webpack.github.io/docs/configuration.html)
  context: __dirname + '/app', // избавлемся от повторения в пути файлов общей директории

  entry: {
    home: './home',
    about: './about',
    common: ['./welcome', './common'] // все будут загружены, но экспортируется только последний
  },
  output: {
    path: __dirname + '/public', // абсолютный путь обязательно
    filename: '[name].js',
    library: '[name]' //после сборки export модуля home помещается в переменную home
  },
  watch: NODE_ENV == 'development', //live reload, для разработки. для продакшена просто отрабатывает и отдает сборку
  watchOptions: {
    aggregateTimeout: 100 //убыстряем сборку, параметр в течении которого сборка не происходит, время ожидания после изменения файла
  },

  //devtool: 'source-map' // включает полноценную отладку (http://webpack.github.io/docs/configuration.html#devtool), лучше для прода
  //devtool: 'eval' // 'eval' самая быстрая, но не для прода
  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null, // для разработки лучше, поскольку в build.js будет виден код модулей

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
      //chunks: ['about', 'home'] // опция указывает из каких конкретно модулей выносим общиечасти
      //minChunks: 2 // как минимум у двух модулей выносим повторяющийся код
    })
  ],

  resolve: {
    modulesDirectories: ['node_modules'], // искать в node_modules, если не указан путь. например если entry: 'home', то искать будет в node_modules
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

// добавление минификации

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}