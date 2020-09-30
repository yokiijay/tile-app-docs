webpackHotUpdate_N_E("pages/playground",{

/***/ "./pages/playground.tsx":
/*!******************************!*\
  !*** ./pages/playground.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./pages/index.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar _jsxFileName = \"/Users/yokiijay/Code/tile-app/docs/pages/playground.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n/** @jsx jsx */\n\n\nconst PlaygroundPage = () => {\n  const centerObjectTitleCSS = _emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"]`\n    h1 {\n      font-size: 5rem;\n      margin: 0;\n    }\n    p {\n      font-weight: 200;\n      font-size: 4rem;\n      margin: 0;\n    }\n  `;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    layout: true,\n    layoutId: \"title-text\",\n    variants: ___WEBPACK_IMPORTED_MODULE_2__[\"childrenVariants\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: \"center-object-title\",\n    css: centerObjectTitleCSS,\n    style: {\n      // transform: 'translate(40px, -190px)',\n      boxSizing: 'border-box'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Tile App.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"A design tool for fashion designer.\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    currentPath: \"playground\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = PlaygroundPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlaygroundPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"PlaygroundPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheWdyb3VuZC50c3g/MDJiYSJdLCJuYW1lcyI6WyJQbGF5Z3JvdW5kUGFnZSIsImNlbnRlck9iamVjdFRpdGxlQ1NTIiwiY3NzIiwiY2hpbGRyZW5WYXJpYW50cyIsImJveFNpemluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE1BQU1BLGNBQWtCLEdBQUcsTUFBTTtBQUMvQixRQUFNQyxvQkFBb0IsR0FBR0MsaURBQUk7Ozs7Ozs7Ozs7R0FBakM7QUFZQSxTQUNFLDBEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxVQUFNLE1BQWxCO0FBQW1CLFlBQVEsRUFBQyxZQUE1QjtBQUF5QyxZQUFRLEVBQUVDLGtEQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksYUFBUyxFQUFDLHFCQUF0QjtBQUE0QyxPQUFHLEVBQUVGLG9CQUFqRDtBQUF1RSxTQUFLLEVBQUU7QUFDNUU7QUFDQUcsZUFBUyxFQUFFO0FBRmlFLEtBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FMRixDQURGLENBREYsRUFXRSwwREFBQyw4REFBRDtBQUFZLGVBQVcsRUFBQyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQWVELENBNUJEOztLQUFNSixjO0FBOEJTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3BsYXlncm91bmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZW9pbCdcbmltcG9ydCB7IGNoaWxkcmVuVmFyaWFudHMgfSBmcm9tICcuJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29uZmlnL3RoZW1lJ1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmNvbnN0IFBsYXlncm91bmRQYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgY2VudGVyT2JqZWN0VGl0bGVDU1MgPSBjc3NgXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICBgXG5cbiAgcmV0dXJuKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8bW90aW9uLmRpdiBsYXlvdXQgbGF5b3V0SWQ9J3RpdGxlLXRleHQnIHZhcmlhbnRzPXtjaGlsZHJlblZhcmlhbnRzfT5cbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPSdjZW50ZXItb2JqZWN0LXRpdGxlJyBjc3M9e2NlbnRlck9iamVjdFRpdGxlQ1NTfSBzdHlsZT17e1xuICAgICAgICAgIC8vIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSg0MHB4LCAtMTkwcHgpJyxcbiAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgICAgICB9fT5cbiAgICAgICAgICA8aDE+VGlsZSBBcHAuPC9oMT5cbiAgICAgICAgICA8cD5BIGRlc2lnbiB0b29sIGZvciBmYXNoaW9uIGRlc2lnbmVyLjwvcD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICA8TmF2aWdhdGlvbiBjdXJyZW50UGF0aD0ncGxheWdyb3VuZCcgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5Z3JvdW5kUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/playground.tsx\n");

/***/ })

})