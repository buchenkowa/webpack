var home =
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

	eval("/**\n * Created by buchenkowa on 20.04.17.\n */\n\n'use strict';\n\nconst welcome = __webpack_require__(1);\n\nwelcome('Hello!');\nwelcome('Hello, my friend !');\n\nexports.welcome = welcome; // экспорт welcome для досупа у welcome из html (например)\n\n//////////////////\n// WEBPACK FOOTER\n// ./home.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./home.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	eval("/**\n * Created by buchenkowa on 20.04.17.\n */\n\n'use strict';\n\nmodule.exports = function(message) {\n\n  console.log(`Say ${message}`);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./welcome.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./welcome.js?");

/***/ })
/******/ ]);