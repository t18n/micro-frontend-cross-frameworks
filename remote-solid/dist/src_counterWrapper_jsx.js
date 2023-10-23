"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkremote"] = self["webpackChunkremote"] || []).push([["src_counterWrapper_jsx"],{

/***/ "./src/Counter.jsx":
/*!*************************!*\
  !*** ./src/Counter.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! solid-js/web */ \"./node_modules/solid-js/web/dist/dev.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-js */ \"webpack/sharing/consume/default/solid-js/solid-js\");\n/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(solid_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst _tmpl$ = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_1__.template)(`<div class=\"bg-blue-900 text-white p-5\"><div>Count = </div><button class=\"btn\">Add One</button></div>`, 6);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _createSignal = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createSignal)(0),\n      _createSignal2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_createSignal, 2),\n      count = _createSignal2[0],\n      setCount = _createSignal2[1];\n\n  return function () {\n    var _el$ = _tmpl$.cloneNode(true),\n        _el$2 = _el$.firstChild,\n        _el$3 = _el$2.firstChild,\n        _el$4 = _el$2.nextSibling;\n\n    (0,solid_js_web__WEBPACK_IMPORTED_MODULE_1__.insert)(_el$2, count, null);\n\n    _el$4.$$click = function () {\n      return setCount(count() + 1);\n    };\n\n    return _el$;\n  }();\n});\n\n(0,solid_js_web__WEBPACK_IMPORTED_MODULE_1__.delegateEvents)([\"click\"]);\n\n//# sourceURL=webpack://remote/./src/Counter.jsx?");

/***/ }),

/***/ "./src/counterWrapper.jsx":
/*!********************************!*\
  !*** ./src/counterWrapper.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! solid-js/web */ \"./node_modules/solid-js/web/dist/dev.js\");\n/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Counter */ \"./src/Counter.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (el) {\n  (0,solid_js_web__WEBPACK_IMPORTED_MODULE_1__.render)(_Counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"], el);\n});\n\n//# sourceURL=webpack://remote/./src/counterWrapper.jsx?");

/***/ })

}]);