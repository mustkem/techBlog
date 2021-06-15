module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/admin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/admin/Login/Test.js":
/*!****************************************!*\
  !*** ./Components/admin/Login/Test.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/mustkeem/Documents/My Projects/all-projects/codemedium/codemedium-frontend/Components/admin/Login/Test.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // import { httpPatch } from 'lib/http';\n\nclass Dropdown extends react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false\n    };\n    this.toggle = this.toggle.bind(this);\n  }\n\n  toggle() {\n    const {\n      isOpen\n    } = this.state;\n    this.setState({\n      isOpen: !isOpen\n    });\n  }\n\n  render() {\n    const {\n      isOpen\n    } = this.state;\n    const {\n      label\n    } = this.props;\n    console.log(\"test\", isOpen);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: \"dropdown-button\",\n        id: \"dropdownButton\",\n        \"aria-haspopup\": \"true\",\n        \"aria-expended\": isOpen,\n        onClick: this.toggle,\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"dropdown-menu\",\n        \"aria-labelledby\": \"dropdownButton\",\n        role: \"menu\",\n        children: this.props.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\nclass DropdownItem extends react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"] {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    // TODO implement me\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", _objectSpread(_objectSpread({}, this.props), {}, {\n        children: this.props.children\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\nclass ExampleNav extends react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/page1\",\n        children: \"Page 1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Dropdown, {\n        label: \"More items\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n          href: \"/page2\",\n          children: \"Page 2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n          href: \"/page3\",\n          children: \"Page 3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n          href: \"/page4\",\n          children: \"Page 4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExampleNav);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FkbWluL0xvZ2luL1Rlc3QuanM/YTE3MCJdLCJuYW1lcyI6WyJEcm9wZG93biIsIlB1cmVDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpc09wZW4iLCJ0b2dnbGUiLCJiaW5kIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZHJlbiIsIkRyb3Bkb3duSXRlbSIsIkV4YW1wbGVOYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUEsTUFBTUEsUUFBTixTQUF1QkMsbURBQXZCLENBQXFDO0FBQ25DQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRTtBQURHLEtBQWI7QUFJQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDRDs7QUFFREQsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFRDtBQUFGLFFBQWEsS0FBS0QsS0FBeEI7QUFFQSxTQUFLSSxRQUFMLENBQWM7QUFBRUgsWUFBTSxFQUFFLENBQUNBO0FBQVgsS0FBZDtBQUNEOztBQUVESSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVKO0FBQUYsUUFBYSxLQUFLRCxLQUF4QjtBQUNBLFVBQU07QUFBRU07QUFBRixRQUFZLEtBQUtQLEtBQXZCO0FBRUFRLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JQLE1BQXBCO0FBRUEsd0JBQ0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxpQkFBUyxFQUFDLGlCQUZaO0FBR0UsVUFBRSxFQUFDLGdCQUhMO0FBSUUseUJBQWMsTUFKaEI7QUFLRSx5QkFBZUEsTUFMakI7QUFNRSxlQUFPLEVBQUUsS0FBS0MsTUFOaEI7QUFBQSxrQkFRR0k7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFXR0wsTUFBTSxpQkFDTDtBQUNFLGlCQUFTLEVBQUMsZUFEWjtBQUVFLDJCQUFnQixnQkFGbEI7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUFBLGtCQUtHLEtBQUtGLEtBQUwsQ0FBV1U7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUF1QkQ7O0FBN0NrQzs7QUFnRHJDLE1BQU1DLFlBQU4sU0FBMkJiLG1EQUEzQixDQUF5QztBQUN2Q0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUNETSxRQUFNLEdBQUc7QUFDUDtBQUNBLHdCQUNFO0FBQUEsNkJBQ0UsMEdBQU8sS0FBS04sS0FBWjtBQUFBLGtCQUFvQixLQUFLQSxLQUFMLENBQVdVO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUFYc0M7O0FBY3pDLE1BQU1FLFVBQU4sU0FBeUJkLG1EQUF6QixDQUF1QztBQUNyQ1EsUUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBQSw4QkFDRTtBQUFHLFlBQUksRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxRQUFEO0FBQVUsYUFBSyxFQUFDLFlBQWhCO0FBQUEsZ0NBQ0UscUVBQUMsWUFBRDtBQUFjLGNBQUksRUFBQyxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLFlBQUQ7QUFBYyxjQUFJLEVBQUMsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSxxRUFBQyxZQUFEO0FBQWMsY0FBSSxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBY0Q7O0FBaEJvQzs7QUFtQnhCTSx5RUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvYWRtaW4vTG9naW4vVGVzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBodHRwUGF0Y2ggfSBmcm9tICdsaWIvaHR0cCc7XG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiAhaXNPcGVuIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zb2xlLmxvZyhcInRlc3RcIiwgaXNPcGVuKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1idXR0b25cIlxuICAgICAgICAgIGlkPVwiZHJvcGRvd25CdXR0b25cIlxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICBhcmlhLWV4cGVuZGVkPXtpc09wZW59XG4gICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGV9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25CdXR0b25cIlxuICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgLy8gVE9ETyBpbXBsZW1lbnQgbWVcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICA8YSB7Li4udGhpcy5wcm9wc30+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9hPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEV4YW1wbGVOYXYgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8YSBocmVmPVwiL3BhZ2UxXCI+UGFnZSAxPC9hPlxuICAgICAgICA8RHJvcGRvd24gbGFiZWw9XCJNb3JlIGl0ZW1zXCI+XG4gICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL3BhZ2UyXCI+UGFnZSAyPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL3BhZ2UzXCI+UGFnZSAzPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL3BhZ2U0XCI+UGFnZSA0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIHsvKiA8RHJvcGRvd24gbGFiZWw9XCJFdmVuIG1vcmUgaXRlbXNcIj5cbiAgICAgICAgICA8RHJvcGRvd25JdGVtIGhyZWY9XCIvcGFnZTVcIj5QYWdlIDU8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICA8RHJvcGRvd25JdGVtIGhyZWY9XCIvcGFnZTlcIj5QYWdlIDk8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPC9Ecm9wZG93bj4gKi99XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGVOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/admin/Login/Test.js\n");

/***/ }),

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_admin_Login_Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/admin/Login/Test */ \"./Components/admin/Login/Test.js\");\n\nvar _jsxFileName = \"/home/mustkeem/Documents/My Projects/all-projects/codemedium/codemedium-frontend/pages/admin/index.js\";\n\n\n\nclass Admin extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_admin_Login_Test__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Admin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9pbmRleC5qcz84YThhIl0sIm5hbWVzIjpbIkFkbWluIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNQSxLQUFOLFNBQW9CQyw0Q0FBSyxDQUFDQyxTQUExQixDQUFvQztBQUNsQ0MsUUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBQSw2QkFDRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0Q7O0FBUGlDOztBQVVyQkgsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEFkbWluQ29tcG9uZW50IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL2FkbWluL0xvZ2luL1Rlc3RcIjtcblxuY2xhc3MgQWRtaW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZG1pbkNvbXBvbmVudCAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZG1pbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });