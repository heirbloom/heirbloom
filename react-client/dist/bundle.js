/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./react-client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./react-client/src/index.jsx":
/*!************************************!*\
  !*** ./react-client/src/index.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/react-client/src/index.jsx: Unexpected token (6:16)\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mApp\\u001b[39m from \\u001b[32m'./App'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'root'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m\\u001b[0m\\n    at Parser.raise (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:6325:17)\\n    at Parser.unexpected (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:7642:16)\\n    at Parser.parseExprAtom (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8841:20)\\n    at Parser.parseExprSubscripts (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Parser.parseMaybeUnary (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Parser.parseExprOps (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Parser.parseMaybeConditional (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Parser.parseMaybeAssign (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Parser.parseExprListItem (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:9491:18)\\n    at Parser.parseCallExpressionArguments (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8621:22)\\n    at Parser.parseSubscript (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8514:29)\\n    at Parser.parseSubscripts (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8433:19)\\n    at Parser.parseExprSubscripts (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8422:17)\\n    at Parser.parseMaybeUnary (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Parser.parseExprOps (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Parser.parseMaybeConditional (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Parser.parseMaybeAssign (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Parser.parseExpression (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:8135:23)\\n    at Parser.parseStatementContent (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:9958:23)\\n    at Parser.parseStatement (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Parser.parseBlockOrModuleBlockBody (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:10405:25)\\n    at Parser.parseBlockBody (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:10392:10)\\n    at Parser.parseTopLevel (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:9758:10)\\n    at Parser.parse (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:11270:17)\\n    at parse (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/parser/lib/index.js:11306:38)\\n    at parser (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at /mnt/c/Users/rapha/Documents/Immersion Senior/heirbloom/node_modules/@babel/core/lib/transform.js:34:34\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3JlYWN0LWNsaWVudC9zcmMvaW5kZXguanN4LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./react-client/src/index.jsx\n");

/***/ })

/******/ });