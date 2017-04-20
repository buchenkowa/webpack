/**
 * Created by buchenkowa on 20.04.17.
 */

'use strict'; //не обязательная директива

module.exports = {
  // экспорт объект конфига (документация про объект конфига http://webpack.github.io/docs/configuration.html)
  entry: './home',
  output: {
    filename: 'build.js',
    library: 'home' //после сборки export модуля home помещается в переменную home
  },
  watch: true, //live reload
  watchOptions: {
    aggregateTimeout: 100 //убыстряем сборку, параметр в течении которого сборка не происходит, время ожидания после изменения файла
  },

  //devtool: 'source-map' // включает полноценную отладку (http://webpack.github.io/docs/configuration.html#devtool), лучше для прода
  //devtool: 'cheap-inline-module-source-map' // лдя разработки лучше, поскольку в build.js будет виден код модулей
  devtool: 'eval' //самая быстрая, но не для прода
};
