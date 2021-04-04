webpackHotUpdate_N_E("pages/[slug]",{

/***/ "./Store/Actions/actions.js":
false,

/***/ "./Store/ActionsTypes/actionTypes.js":
false,

/***/ "./config.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _jsxFileName = \"/home/mustkeem/Documents/My Projects/all-projects/codemedium/codemedium-frontend/tutorialmedium/pages/[slug].js\";\n\n // import PostComponent from \"../Components/PostPage\";\n\nfunction PostPage({\n  products\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    products: products,\n    children: \"test \"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 10\n  }, this);\n} // This function gets called at build time\n\n\n_c = PostPage;\n\nconst mapStateToprops = state => {\n  var _state$products$fetch;\n\n  return {\n    products: (_state$products$fetch = state.products.fetchProducts.data) === null || _state$products$fetch === void 0 ? void 0 : _state$products$fetch.products\n  };\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToprops)(PostPage));\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLmpzPzQ2MmIiXSwibmFtZXMiOlsiUG9zdFBhZ2UiLCJwcm9kdWN0cyIsIm1hcFN0YXRlVG9wcm9wcyIsInN0YXRlIiwiZmV0Y2hQcm9kdWN0cyIsImRhdGEiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtDQUlBOztBQU9BLFNBQVNBLFFBQVQsQ0FBa0I7QUFBRUM7QUFBRixDQUFsQixFQUFnQztBQUM5QixzQkFBTztBQUFLLFlBQVEsRUFBRUEsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUVEOzs7S0FKU0QsUTs7QUFzRVQsTUFBTUUsZUFBZSxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDakMsU0FBTztBQUNMRixZQUFRLDJCQUFFRSxLQUFLLENBQUNGLFFBQU4sQ0FBZUcsYUFBZixDQUE2QkMsSUFBL0IsMERBQUUsc0JBQW1DSjtBQUR4QyxHQUFQO0FBR0QsQ0FKRDs7O0FBTWVLLDBIQUFPLENBQUNKLGVBQUQsQ0FBUCxDQUF5QkYsUUFBekIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuLy8gaW1wb3J0IFBvc3RDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudHMvUG9zdFBhZ2VcIjtcblxuaW1wb3J0IHsgd3JhcHBlciBhcyBzdG9yZVdyYXBwZXIgfSBmcm9tIFwiLi4vU3RvcmUvc3RvcmVcIjtcbmltcG9ydCB7IGdldFBvc3QyIH0gZnJvbSBcIi4uL1N0b3JlL0FjdGlvbnMvYWN0aW9uc1wiO1xuXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5mdW5jdGlvbiBQb3N0UGFnZSh7IHByb2R1Y3RzIH0pIHtcbiAgcmV0dXJuIDxkaXYgcHJvZHVjdHM9e3Byb2R1Y3RzfSA+dGVzdCA8L2Rpdj47XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xuICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgdXJsOiBBUElfVVJMICsgXCIvZmVlZC9wb3N0c1wiLFxuICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcG9zdHM9IGF3YWl0IHJlcy5wb3N0cztcblxuXG4gIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXG4gIGNvbnN0IHBhdGhzID0gW107XG4gIHBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcbiAgICAgIHBhdGhzLnB1c2goe1xuICAgICAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdC5zbHVnIH0sXG4gICAgICB9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJ0ZXN0ZWVlZWVlZWVlZVwiLCBwYXRocyk7XG5cblxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cbiAgLy8geyBmYWxsYmFjazogZmFsc2UgfSBtZWFucyBvdGhlciByb3V0ZXMgc2hvdWxkIDQwNC5cbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xufVxuXG4vLyBUaGlzIGFsc28gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xuLy8gICAgIG1ldGhvZDogXCJnZXRcIixcbi8vICAgICB1cmw6IEFQSV9VUkwgKyBcIi9mZWVkL3Byb2R1Y3RzXCIsXG4vLyAgICAgcGFyYW1zOiB7XG4vLyAgICAgICBjYXRlZ29yeV9zbHVnOiBwYXJhbXMudGFnLFxuLy8gICAgIH0sXG4vLyAgIH0pXG4vLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbi8vICAgICAgIHJldHVybiBlcnJvcjtcbi8vICAgICB9KTtcbi8vICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXMucHJvZHVjdHM7XG5cbi8vICAgLy8gUGFzcyBwb3N0IGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXG4vLyAgIHJldHVybiB7IHByb3BzOiB7IHByb2R1Y3RzIH0gfTtcbi8vIH1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gc3RvcmVXcmFwcGVyLmdldFN0YXRpY1Byb3BzKGFzeW5jICh7IHBhcmFtcywgc3RvcmUgfSkgPT4ge1xuICBhd2FpdCBzdG9yZS5kaXNwYXRjaChcbiAgICBnZXRQb3N0Mih7XG4gICAgICBzbHVnOiBwYXJhbXMudGFnLFxuICAgIH0pXG4gICk7XG5cbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgcHJvZHVjdHM6IHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMuZmV0Y2hQcm9kdWN0cy5kYXRhPy5wcm9kdWN0cyB9IH07XG5yZXR1cm4geyBwcm9wczogeyBwb3N0OiB7fSB9IH07XG5cbn0pO1xuXG5jb25zdCBtYXBTdGF0ZVRvcHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMuZmV0Y2hQcm9kdWN0cy5kYXRhPy5wcm9kdWN0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb3Byb3BzKShQb3N0UGFnZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ })

})