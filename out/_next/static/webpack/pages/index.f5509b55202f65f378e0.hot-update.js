webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navigation.tsx":
/*!***********************************!*\
  !*** ./components/Navigation.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reoil */ \"./node_modules/reoil/dist/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/yokiijay/Code/tile-app/docs/components/Navigation.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Navigation = ({\n  currentPath\n}) => {\n  _s();\n\n  const paths = ['home', 'playground', 'download'];\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  const handleClick = path => {\n    path === 'home' ? router.push('/') : router.push('/' + path);\n  };\n\n  return __jsx(reoil__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"navigation\",\n    position: \"absolute\",\n    bottom: 0,\n    row: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, paths.map(path => __jsx(reoil__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    key: path,\n    className: \"navigation__item\",\n    py: 2,\n    my: 3,\n    mx: 4,\n    textTransform: \"capitalize\",\n    opacity: currentPath === path ? 1 : .6,\n    borderBottom: currentPath === path ? '2px dotted currentColor' : '',\n    onClick: () => handleClick(path),\n    pointer: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, path)));\n};\n\n_s(Navigation, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD9iMzNlIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjdXJyZW50UGF0aCIsInBhdGhzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJwYXRoIiwicHVzaCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQVFBLE1BQU1BLFVBQStCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUI7QUFBQTs7QUFDM0QsUUFBTUMsS0FBbUIsR0FBRyxDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCLFVBQXZCLENBQTVCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxXQUFXLEdBQUlDLElBQUQsSUFBYztBQUNoQ0EsUUFBSSxLQUFHLE1BQVAsR0FBZ0JILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVosQ0FBaEIsR0FBbUNKLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLE1BQUlELElBQWhCLENBQW5DO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMseUNBQUQ7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixZQUFRLEVBQUMsVUFBckM7QUFBZ0QsVUFBTSxFQUFFLENBQXhEO0FBQTJELE9BQUcsTUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixLQUFLLENBQUNNLEdBQU4sQ0FBVUYsSUFBSSxJQUNiLE1BQUMseUNBQUQ7QUFDRSxPQUFHLEVBQUVBLElBRFA7QUFFRSxhQUFTLEVBQUMsa0JBRlo7QUFHRSxNQUFFLEVBQUUsQ0FITjtBQUlFLE1BQUUsRUFBRSxDQUpOO0FBS0UsTUFBRSxFQUFFLENBTE47QUFNRSxpQkFBYSxFQUFDLFlBTmhCO0FBT0UsV0FBTyxFQUFFTCxXQUFXLEtBQUtLLElBQWhCLEdBQXVCLENBQXZCLEdBQTJCLEVBUHRDO0FBUUUsZ0JBQVksRUFBRUwsV0FBVyxLQUFLSyxJQUFoQixHQUF1Qix5QkFBdkIsR0FBbUQsRUFSbkU7QUFTRSxXQUFPLEVBQUUsTUFBSUQsV0FBVyxDQUFDQyxJQUFELENBVDFCO0FBVUUsV0FBTyxNQVZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXR0EsSUFYSCxDQURELENBREgsQ0FERjtBQW1CRCxDQTNCRDs7R0FBTU4sVTtVQUVXSSxxRDs7O0tBRlhKLFU7QUE2QlNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZW9pbCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG50eXBlIFBhdGhzID0gJ2hvbWUnIHwgJ3BsYXlncm91bmQnIHwgJ2Rvd25sb2FkJ1xuXG5pbnRlcmZhY2UgTmF2aWdhdGlvblByb3BzIHtcbiAgY3VycmVudFBhdGg/OiBQYXRoc1xufVxuXG5jb25zdCBOYXZpZ2F0aW9uOiBGQzxOYXZpZ2F0aW9uUHJvcHM+ID0gKHsgY3VycmVudFBhdGggfSkgPT4ge1xuICBjb25zdCBwYXRoczogQXJyYXk8UGF0aHM+ID0gWydob21lJywgJ3BsYXlncm91bmQnLCAnZG93bmxvYWQnXVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHBhdGg6UGF0aHMpPT57XG4gICAgcGF0aD09PSdob21lJyA/IHJvdXRlci5wdXNoKCcvJykgOiByb3V0ZXIucHVzaCgnLycrcGF0aClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBjbGFzc05hbWU9J25hdmlnYXRpb24nIHBvc2l0aW9uPSdhYnNvbHV0ZScgYm90dG9tPXswfSByb3c+XG4gICAgICB7cGF0aHMubWFwKHBhdGggPT4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAga2V5PXtwYXRofVxuICAgICAgICAgIGNsYXNzTmFtZT0nbmF2aWdhdGlvbl9faXRlbSdcbiAgICAgICAgICBweT17Mn1cbiAgICAgICAgICBteT17M31cbiAgICAgICAgICBteD17NH1cbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtPSdjYXBpdGFsaXplJ1xuICAgICAgICAgIG9wYWNpdHk9e2N1cnJlbnRQYXRoID09PSBwYXRoID8gMSA6IC42fVxuICAgICAgICAgIGJvcmRlckJvdHRvbT17Y3VycmVudFBhdGggPT09IHBhdGggPyAnMnB4IGRvdHRlZCBjdXJyZW50Q29sb3InIDogJyd9XG4gICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZUNsaWNrKHBhdGgpfVxuICAgICAgICAgIHBvaW50ZXI+XG4gICAgICAgICAge3BhdGh9XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

})