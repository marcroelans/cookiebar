(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Cookiebar"] = factory();
	else
		root["Cookiebar"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * JavaScript Cookie v2.2.0\n * https://github.com/js-cookie/js-cookie\n *\n * Copyright 2006, 2015 Klaus Hartl & Fagner Brack\n * Released under the MIT license\n */\n;(function (factory) {\n\tvar registeredInModuleLoader = false;\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (true) {\n\t\tmodule.exports = factory();\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (!registeredInModuleLoader) {\n\t\tvar OldCookies = window.Cookies;\n\t\tvar api = window.Cookies = factory();\n\t\tapi.noConflict = function () {\n\t\t\twindow.Cookies = OldCookies;\n\t\t\treturn api;\n\t\t};\n\t}\n}(function () {\n\tfunction extend () {\n\t\tvar i = 0;\n\t\tvar result = {};\n\t\tfor (; i < arguments.length; i++) {\n\t\t\tvar attributes = arguments[ i ];\n\t\t\tfor (var key in attributes) {\n\t\t\t\tresult[key] = attributes[key];\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n\n\tfunction init (converter) {\n\t\tfunction api (key, value, attributes) {\n\t\t\tvar result;\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Write\n\n\t\t\tif (arguments.length > 1) {\n\t\t\t\tattributes = extend({\n\t\t\t\t\tpath: '/'\n\t\t\t\t}, api.defaults, attributes);\n\n\t\t\t\tif (typeof attributes.expires === 'number') {\n\t\t\t\t\tvar expires = new Date();\n\t\t\t\t\texpires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);\n\t\t\t\t\tattributes.expires = expires;\n\t\t\t\t}\n\n\t\t\t\t// We're using \"expires\" because \"max-age\" is not supported by IE\n\t\t\t\tattributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';\n\n\t\t\t\ttry {\n\t\t\t\t\tresult = JSON.stringify(value);\n\t\t\t\t\tif (/^[\\{\\[]/.test(result)) {\n\t\t\t\t\t\tvalue = result;\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\n\t\t\t\tif (!converter.write) {\n\t\t\t\t\tvalue = encodeURIComponent(String(value))\n\t\t\t\t\t\t.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);\n\t\t\t\t} else {\n\t\t\t\t\tvalue = converter.write(value, key);\n\t\t\t\t}\n\n\t\t\t\tkey = encodeURIComponent(String(key));\n\t\t\t\tkey = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);\n\t\t\t\tkey = key.replace(/[\\(\\)]/g, escape);\n\n\t\t\t\tvar stringifiedAttributes = '';\n\n\t\t\t\tfor (var attributeName in attributes) {\n\t\t\t\t\tif (!attributes[attributeName]) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tstringifiedAttributes += '; ' + attributeName;\n\t\t\t\t\tif (attributes[attributeName] === true) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tstringifiedAttributes += '=' + attributes[attributeName];\n\t\t\t\t}\n\t\t\t\treturn (document.cookie = key + '=' + value + stringifiedAttributes);\n\t\t\t}\n\n\t\t\t// Read\n\n\t\t\tif (!key) {\n\t\t\t\tresult = {};\n\t\t\t}\n\n\t\t\t// To prevent the for loop in the first place assign an empty array\n\t\t\t// in case there are no cookies at all. Also prevents odd result when\n\t\t\t// calling \"get()\"\n\t\t\tvar cookies = document.cookie ? document.cookie.split('; ') : [];\n\t\t\tvar rdecode = /(%[0-9A-Z]{2})+/g;\n\t\t\tvar i = 0;\n\n\t\t\tfor (; i < cookies.length; i++) {\n\t\t\t\tvar parts = cookies[i].split('=');\n\t\t\t\tvar cookie = parts.slice(1).join('=');\n\n\t\t\t\tif (!this.json && cookie.charAt(0) === '\"') {\n\t\t\t\t\tcookie = cookie.slice(1, -1);\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tvar name = parts[0].replace(rdecode, decodeURIComponent);\n\t\t\t\t\tcookie = converter.read ?\n\t\t\t\t\t\tconverter.read(cookie, name) : converter(cookie, name) ||\n\t\t\t\t\t\tcookie.replace(rdecode, decodeURIComponent);\n\n\t\t\t\t\tif (this.json) {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tcookie = JSON.parse(cookie);\n\t\t\t\t\t\t} catch (e) {}\n\t\t\t\t\t}\n\n\t\t\t\t\tif (key === name) {\n\t\t\t\t\t\tresult = cookie;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (!key) {\n\t\t\t\t\t\tresult[name] = cookie;\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\t\t\t}\n\n\t\t\treturn result;\n\t\t}\n\n\t\tapi.set = api;\n\t\tapi.get = function (key) {\n\t\t\treturn api.call(api, key);\n\t\t};\n\t\tapi.getJSON = function () {\n\t\t\treturn api.apply({\n\t\t\t\tjson: true\n\t\t\t}, [].slice.call(arguments));\n\t\t};\n\t\tapi.defaults = {};\n\n\t\tapi.remove = function (key, attributes) {\n\t\t\tapi(key, '', extend(attributes, {\n\t\t\t\texpires: -1\n\t\t\t}));\n\t\t};\n\n\t\tapi.withConverter = init;\n\n\t\treturn api;\n\t}\n\n\treturn init(function () {});\n}));\n\n\n//# sourceURL=webpack://Cookiebar/./node_modules/js-cookie/src/js.cookie.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.TAG_ATTRIBUTES = exports.LINKS = exports.LANGUAGES = exports.DEFAULT_TEXT = void 0;\n\n/**\r\n  * This file stores the contants\r\n  */\nvar DEFAULT_TEXT = {\n  scriptText: 'This site uses....',\n  mainText: 'Lorem',\n  buttonText: 'Ok!'\n};\nexports.DEFAULT_TEXT = DEFAULT_TEXT;\nvar LANGUAGES = [{\n  name: 'de',\n  lang: ['de', 'de-DE', 'de-CH', 'de-AT', 'de-LU', 'de-LI'],\n  scriptText: 'Diese Seite nutzt folgende Scripte:',\n  mainText: 'Durch die Nutzung der Seite stimmen Sie zu.',\n  buttonText: 'Einverstanden!'\n}];\nexports.LANGUAGES = LANGUAGES;\nvar LINKS = [{\n  name: 'Google Fonts',\n  type: 'link',\n  keyword: 'fonts.googleapis'\n}, {\n  name: 'Fonts.com',\n  type: 'link',\n  keyword: 'fast.fonts.net'\n}, {\n  name: 'Fonts.com',\n  type: 'script',\n  keyword: 'fast.fonts.net'\n}, {\n  name: 'jQuery',\n  type: 'script',\n  keyword: 'code.jquery.com'\n}, {\n  name: 'Less JS',\n  type: 'script',\n  keyword: 'cdnjs.cloudflare.com/ajax/libs/less.js'\n}, {\n  name: 'Google Analytics',\n  type: 'script',\n  keyword: \"ga('create'\"\n}, {\n  name: 'Crazy Egg',\n  type: 'script',\n  keyword: '//script.crazyegg.com'\n}, {\n  name: 'Facebook Pixel',\n  type: 'script',\n  keyword: 'connect.facebook.net'\n}, {\n  name: 'Trusted Shops',\n  type: 'script',\n  keyword: 'trustedshops.com/js'\n}, {\n  name: 'Findologic',\n  type: 'script',\n  keyword: 'cdn.findologic.com/'\n}];\nexports.LINKS = LINKS;\nvar TAG_ATTRIBUTES = {\n  'link': 'href',\n  'script': 'src'\n};\nexports.TAG_ATTRIBUTES = TAG_ATTRIBUTES;\n\n//# sourceURL=webpack://Cookiebar/./src/constants.js?");

/***/ }),

/***/ "./src/detector.js":
/*!*************************!*\
  !*** ./src/detector.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getScripts = void 0;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n/**\r\n  * detector.js\r\n  */\n// IMport\n\n/**\r\n  * Function that retutns the list of the script names which are included\r\n  *\r\n  * @param {Array} links\r\n  * @returns {Array}\r\n  */\nvar getScripts = function getScripts() {\n  // List of scripts\n  var scriptNames = []; // Looping through\n\n  _constants.LINKS.forEach(function (link) {\n    // Link is included\n    var isIncluded = false; // Element type\n\n    var type = link.type; // Element attribute\n\n    var attribute = _constants.TAG_ATTRIBUTES[type]; // get all Elements with the type in DOM\n\n    var elements = [].slice.call(document.querySelectorAll(type));\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var element = _step.value;\n\n        if (element.getAttribute(attribute) === null && element.innerHTML.includes(link.keyword)) {\n          isIncluded = true;\n        }\n\n        if (element.getAttribute(attribute) !== null && element.getAttribute(attribute).includes(link.keyword)) {\n          isIncluded = true;\n        }\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return != null) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    if (isIncluded) {\n      scriptNames.push(link.name);\n    }\n  });\n\n  return scriptNames;\n};\n\nexports.getScripts = getScripts;\n\n//# sourceURL=webpack://Cookiebar/./src/detector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.init = void 0;\n\nvar _detector = __webpack_require__(/*! ./detector.js */ \"./src/detector.js\");\n\nvar _render = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n\n/**\r\n  * index.js\r\n  */\nvar Cookie = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/**\r\n  * Init the cookiebarjs\r\n  */\n\n\nvar init = function init(mount) {\n  var cookieAccepted = Cookie.get('cookieAccepted');\n  var root = mount || document.body;\n\n  if (cookieAccepted !== '0') {\n    (0, _render.renderCookiebar)((0, _detector.getScripts)(), root);\n  }\n};\n\nexports.init = init;\n\n//# sourceURL=webpack://Cookiebar/./src/index.js?");

/***/ }),

/***/ "./src/languages.js":
/*!**************************!*\
  !*** ./src/languages.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getLanguage = void 0;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n/**\r\n  * languages.js\r\n  */\n\n/**\r\n  * get the user language\r\n  */\nvar getLanguage = function getLanguage() {\n  var userLang = navigator.language;\n\n  var resultLang = _constants.LANGUAGES.filter(function (item) {\n    return item.lang.indexOf(userLang) > -1;\n  });\n\n  return resultLang.length > 0 ? resultLang[0] : _constants.DEFAULT_TEXT;\n};\n\nexports.getLanguage = getLanguage;\n\n//# sourceURL=webpack://Cookiebar/./src/languages.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.renderCookiebar = void 0;\n\nvar _languages = __webpack_require__(/*! ./languages */ \"./src/languages.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n/**\r\n  * render.js\r\n  */\nvar Cookie = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/**\r\n  * returns the html list of the script list\r\n  *\r\n  * @param {Array} scripts\r\n  * @returns {VNODE}\r\n  */\n\n\nvar renderList = function renderList(scripts) {\n  var container = document.createElement('div');\n  container.classList.add('scripts');\n  var text = document.createElement('p');\n  var textNode = document.createTextNode((0, _languages.getLanguage)().scriptText);\n  text.appendChild(textNode);\n  container.appendChild(text); // creating the ul element\n\n  var ulEl = document.createElement('ul'); // loop through the script and create the li elements\n\n  scripts.forEach(function (script) {\n    var liEl = document.createElement('li');\n    var textNode = document.createTextNode(script);\n    liEl.appendChild(textNode);\n    ulEl.appendChild(liEl);\n  });\n  container.appendChild(ulEl);\n  return container;\n};\n/**\r\n  * Render the main Text\r\n  *\r\n  * @returns {VNODE}\r\n  */\n\n\nvar renderMainText = function renderMainText() {\n  var container = document.createElement('div');\n  container.classList.add('text');\n  var text = document.createElement('p');\n  var textNode = document.createTextNode((0, _languages.getLanguage)().mainText);\n  text.appendChild(textNode);\n  container.appendChild(text);\n  return container;\n};\n/**\r\n  * render close button\r\n  *\r\n  * @param {VNODE} cookiebar\r\n  * @returns {VNODE}\r\n  */\n\n\nvar renderCloseButton = function renderCloseButton(cookiebar) {\n  var button = document.createElement('button');\n  var text = document.createTextNode((0, _languages.getLanguage)().buttonText);\n  button.appendChild(text);\n  button.addEventListener('click', function () {\n    (0, _utils.removeElement)(cookiebar);\n    Cookie.set('cookieAccepted', '1');\n  });\n  return button;\n};\n/**\r\n  * main render function of the cookiebar\r\n  *\r\n  * @param {Array} scripts\r\n  * @param {String} language\r\n  */\n\n\nvar renderCookiebar = function renderCookiebar(scripts, root) {\n  // create the cookiebar\n  var cookiebar = document.createElement('div');\n  cookiebar.classList.add('cookiebar');\n\n  if (scripts.length > 0) {\n    cookiebar.appendChild(renderList(scripts));\n  }\n\n  cookiebar.appendChild(renderMainText());\n  cookiebar.appendChild(renderCloseButton(cookiebar));\n  root.appendChild(cookiebar);\n};\n\nexports.renderCookiebar = renderCookiebar;\n\n//# sourceURL=webpack://Cookiebar/./src/render.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.removeElement = exports.isArray = exports.isString = void 0;\n\n/**\r\n  * Util js\r\n  */\n\n/**\r\n  * validate a String\r\n  *\r\n  * @param {*} expectedString\r\n  * @returns {Boolean}\r\n  */\nvar isString = function isString(expectedString) {\n  return typeof expectedString === 'string';\n};\n/**\r\n  * validate an Array\r\n  *\r\n  * @param {*} expectedArray\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isString = isString;\n\nvar isArray = function isArray(expectedArray) {\n  return Array.isArray(expectedArray);\n};\n/**\r\n  * removes an element in the DOM\r\n  *\r\n  * @param {DOM} element\r\n  */\n\n\nexports.isArray = isArray;\n\nvar removeElement = function removeElement(element) {\n  element.parentElement.removeChild(element);\n};\n\nexports.removeElement = removeElement;\n\n//# sourceURL=webpack://Cookiebar/./src/utils.js?");

/***/ })

/******/ });
});