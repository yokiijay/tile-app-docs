webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navigation.tsx":
/*!***********************************!*\
  !*** ./components/Navigation.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reoil */ \"./node_modules/reoil/dist/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/yokiijay/Code/tile-app/docs/components/Navigation.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Navigation = ({\n  currentPath\n}) => {\n  _s();\n\n  const paths = ['home', 'playground', 'download'];\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  const handleClick = path => {\n    path === 'home' ? router.push('/') : router.push('/' + path);\n  };\n\n  return __jsx(reoil__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"navigation\",\n    position: \"absolute\",\n    bottom: 0,\n    row: true,\n    overflow: \"hidden\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, paths.map(path => __jsx(reoil__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    key: path,\n    className: \"navigation__item\",\n    py: 2,\n    my: 3,\n    mx: 4,\n    textTransform: \"capitalize\",\n    opacity: currentPath === path ? 1 : .6,\n    borderBottom: currentPath === path ? '2px dotted currentColor' : '',\n    fontWeight: currentPath === path ? 'bold' : 'normal',\n    onClick: () => handleClick(path),\n    pointer: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, path)));\n};\n\n_s(Navigation, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD9iMzNlIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjdXJyZW50UGF0aCIsInBhdGhzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJwYXRoIiwicHVzaCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQVFBLE1BQU1BLFVBQStCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUI7QUFBQTs7QUFDM0QsUUFBTUMsS0FBbUIsR0FBRyxDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCLFVBQXZCLENBQTVCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxXQUFXLEdBQUlDLElBQUQsSUFBYztBQUNoQ0EsUUFBSSxLQUFHLE1BQVAsR0FBZ0JILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVosQ0FBaEIsR0FBbUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLE1BQUlELElBQWhCLENBQW5DO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMseUNBQUQ7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixZQUFRLEVBQUMsVUFBckM7QUFBZ0QsVUFBTSxFQUFFLENBQXhEO0FBQTJELE9BQUcsTUFBOUQ7QUFBK0QsWUFBUSxFQUFDLFFBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osS0FBSyxDQUFDTSxHQUFOLENBQVVGLElBQUksSUFDYixNQUFDLHlDQUFEO0FBQ0UsT0FBRyxFQUFFQSxJQURQO0FBRUUsYUFBUyxFQUFDLGtCQUZaO0FBR0UsTUFBRSxFQUFFLENBSE47QUFJRSxNQUFFLEVBQUUsQ0FKTjtBQUtFLE1BQUUsRUFBRSxDQUxOO0FBTUUsaUJBQWEsRUFBQyxZQU5oQjtBQU9FLFdBQU8sRUFBRUwsV0FBVyxLQUFLSyxJQUFoQixHQUF1QixDQUF2QixHQUEyQixFQVB0QztBQVFFLGdCQUFZLEVBQUVMLFdBQVcsS0FBS0ssSUFBaEIsR0FBdUIseUJBQXZCLEdBQW1ELEVBUm5FO0FBU0UsY0FBVSxFQUFFTCxXQUFXLEtBQUtLLElBQWhCLEdBQXVCLE1BQXZCLEdBQWdDLFFBVDlDO0FBVUUsV0FBTyxFQUFFLE1BQUlELFdBQVcsQ0FBQ0MsSUFBRCxDQVYxQjtBQVdFLFdBQU8sTUFYVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUdBLElBWkgsQ0FERCxDQURILENBREY7QUFvQkQsQ0E1QkQ7O0dBQU1OLFU7VUFFV0kscUQ7OztLQUZYSixVO0FBOEJTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmVvaWwnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxudHlwZSBQYXRocyA9ICdob21lJyB8ICdwbGF5Z3JvdW5kJyB8ICdkb3dubG9hZCdcblxuaW50ZXJmYWNlIE5hdmlnYXRpb25Qcm9wcyB7XG4gIGN1cnJlbnRQYXRoPzogUGF0aHNcbn1cblxuY29uc3QgTmF2aWdhdGlvbjogRkM8TmF2aWdhdGlvblByb3BzPiA9ICh7IGN1cnJlbnRQYXRoIH0pID0+IHtcbiAgY29uc3QgcGF0aHM6IEFycmF5PFBhdGhzPiA9IFsnaG9tZScsICdwbGF5Z3JvdW5kJywgJ2Rvd25sb2FkJ11cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChwYXRoOlBhdGhzKT0+e1xuICAgIHBhdGg9PT0naG9tZScgPyByb3V0ZXIucHVzaCgnLycpIDogcm91dGVyLnB1c2goJy8nK3BhdGgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPSduYXZpZ2F0aW9uJyBwb3NpdGlvbj0nYWJzb2x1dGUnIGJvdHRvbT17MH0gcm93IG92ZXJmbG93PSdoaWRkZW4nPlxuICAgICAge3BhdGhzLm1hcChwYXRoID0+IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGtleT17cGF0aH1cbiAgICAgICAgICBjbGFzc05hbWU9J25hdmlnYXRpb25fX2l0ZW0nXG4gICAgICAgICAgcHk9ezJ9XG4gICAgICAgICAgbXk9ezN9XG4gICAgICAgICAgbXg9ezR9XG4gICAgICAgICAgdGV4dFRyYW5zZm9ybT0nY2FwaXRhbGl6ZSdcbiAgICAgICAgICBvcGFjaXR5PXtjdXJyZW50UGF0aCA9PT0gcGF0aCA/IDEgOiAuNn1cbiAgICAgICAgICBib3JkZXJCb3R0b209e2N1cnJlbnRQYXRoID09PSBwYXRoID8gJzJweCBkb3R0ZWQgY3VycmVudENvbG9yJyA6ICcnfVxuICAgICAgICAgIGZvbnRXZWlnaHQ9e2N1cnJlbnRQYXRoID09PSBwYXRoID8gJ2JvbGQnIDogJ25vcm1hbCd9XG4gICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZUNsaWNrKHBhdGgpfVxuICAgICAgICAgIHBvaW50ZXI+XG4gICAgICAgICAge3BhdGh9XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

})