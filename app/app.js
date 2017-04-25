/**
 * Created by buchenkowa on 24.04.17.
 */


//динамическая подгрузка

//document.getElementById('loginButton').onclick = function() {
//  // require.ensure, динамическая подгрузка
//
//  require.ensure([], function(require) {
//
//    let login = require('./login');
//
//    login();
//  }, 'auth');
//
//};
//
//document.getElementById('logout').onclick = function() {
//  require.ensure([], function(require) {
//
//    let logout = require('./logout');
//
//    logout();
//  }, 'auth');
//};


// условный require

let moduleName = location.pathname.slice(1); // приложение получает url, и оно решает, какой модуль подгрузить

let route = require('./routes' + moduleName);
// автоматическая генерация контекста требует строгой структуры именно в таком виде:
// префикс + произвольное выражение + суффикс
// любое другое выражение, например function, возвращающая путь будет черным ящиком для webpack, будет подключать из текущей директории

route();