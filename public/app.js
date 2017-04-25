/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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

	'use strict';

	var moduleName = location.pathname.slice(1); // приложение получает url, и оно решает, какой модуль подгрузить

	var route = __webpack_require__(1)("./routes" + moduleName);
	// автоматическая генерация контекста требует строгой структуры именно в таком виде:
	// префикс + произвольное выражение + суффикс
	// любое другое выражение, например function, возвращающая путь будет черным ящиком для webpack, будет подключать из текущей директории

		route();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./routes/about": 2,
		"./routes/about.js": 2,
		"./routes/home": 3,
		"./routes/home.js": 3
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by buchenkowa on 20.04.17.
	 */

	//..

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * Created by buchenkowa on 20.04.17.
	 */

	'use strict';

	console.log('home');

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDcwNWMxMjZkZTU2NDkyNTUxMzMyIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLiBeXFwuXFwvcm91dGVzLiokIiwid2VicGFjazovLy8uL3JvdXRlcy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcwNWMxMjZkZTU2NDkyNTUxMzMyIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGJ1Y2hlbmtvd2Egb24gMjQuMDQuMTcuXG4gKi9cblxuXG4vL9C00LjQvdCw0LzQuNGH0LXRgdC60LDRjyDQv9C+0LTQs9GA0YPQt9C60LBcblxuLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5CdXR0b24nKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4vLyAgLy8gcmVxdWlyZS5lbnN1cmUsINC00LjQvdCw0LzQuNGH0LXRgdC60LDRjyDQv9C+0LTQs9GA0YPQt9C60LBcbi8vXG4vLyAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcbi8vXG4vLyAgICBsZXQgbG9naW4gPSByZXF1aXJlKCcuL2xvZ2luJyk7XG4vL1xuLy8gICAgbG9naW4oKTtcbi8vICB9LCAnYXV0aCcpO1xuLy9cbi8vfTtcbi8vXG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4vLyAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcbi8vXG4vLyAgICBsZXQgbG9nb3V0ID0gcmVxdWlyZSgnLi9sb2dvdXQnKTtcbi8vXG4vLyAgICBsb2dvdXQoKTtcbi8vICB9LCAnYXV0aCcpO1xuLy99O1xuXG5cbi8vINGD0YHQu9C+0LLQvdGL0LkgcmVxdWlyZVxuXG5sZXQgbW9kdWxlTmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpOyAvLyDQv9GA0LjQu9C+0LbQtdC90LjQtSDQv9C+0LvRg9GH0LDQtdGCIHVybCwg0Lgg0L7QvdC+INGA0LXRiNCw0LXRgiwg0LrQsNC60L7QuSDQvNC+0LTRg9C70Ywg0L/QvtC00LPRgNGD0LfQuNGC0YxcblxubGV0IHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZXMnICsgbW9kdWxlTmFtZSk7XG4vLyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQsNGPINCz0LXQvdC10YDQsNGG0LjRjyDQutC+0L3RgtC10LrRgdGC0LAg0YLRgNC10LHRg9C10YIg0YHRgtGA0L7Qs9C+0Lkg0YHRgtGA0YPQutGC0YPRgNGLINC40LzQtdC90L3QviDQsiDRgtCw0LrQvtC8INCy0LjQtNC1OlxuLy8g0L/RgNC10YTQuNC60YEgKyDQv9GA0L7QuNC30LLQvtC70YzQvdC+0LUg0LLRi9GA0LDQttC10L3QuNC1ICsg0YHRg9GE0YTQuNC60YFcbi8vINC70Y7QsdC+0LUg0LTRgNGD0LPQvtC1INCy0YvRgNCw0LbQtdC90LjQtSwg0L3QsNC/0YDQuNC80LXRgCBmdW5jdGlvbiwg0LLQvtC30LLRgNCw0YnQsNGO0YnQsNGPINC/0YPRgtGMINCx0YPQtNC10YIg0YfQtdGA0L3Ri9C8INGP0YnQuNC60L7QvCDQtNC70Y8gd2VicGFjaywg0LHRg9C00LXRgiDQv9C+0LTQutC70Y7Rh9Cw0YLRjCDQuNC3INGC0LXQutGD0YnQtdC5INC00LjRgNC10LrRgtC+0YDQuNC4XG5cbnJvdXRlKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwidmFyIG1hcCA9IHtcblx0XCIuL3JvdXRlcy9hYm91dFwiOiAyLFxuXHRcIi4vcm91dGVzL2Fib3V0LmpzXCI6IDIsXG5cdFwiLi9yb3V0ZXMvaG9tZVwiOiAzLFxuXHRcIi4vcm91dGVzL2hvbWUuanNcIjogM1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLiBeXFwuXFwvcm91dGVzLiokXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlZCBieSBidWNoZW5rb3dhIG9uIDIwLjA0LjE3LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc29sZS5sb2coJ2hvbWUnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yb3V0ZXMvaG9tZS5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=