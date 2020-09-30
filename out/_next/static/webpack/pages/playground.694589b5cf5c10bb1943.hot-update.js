webpackHotUpdate_N_E("pages/playground",{

/***/ "./pages/playground.tsx":
/*!******************************!*\
  !*** ./pages/playground.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var reoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reoil */ \"./node_modules/reoil/dist/index.es.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"./pages/index.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar _jsxFileName = \"/Users/yokiijay/Code/tile-app/docs/pages/playground.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n/** @jsx jsx */\n\n\nconst PlaygroundPage = () => {\n  const centerObjectTitleCSS = _emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"css\"]`\n    h1 {\n      font-size: 2rem;\n      margin: 0;\n    }\n    p {\n      font-weight: 200;\n      font-size: 1rem;\n      margin: 0;\n    }\n  `;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    layoutId: \"title-text\",\n    transition: {\n      type: 'spring',\n      stiffness: 400,\n      damping: 30\n    },\n    variants: ___WEBPACK_IMPORTED_MODULE_3__[\"childrenVariants\"],\n    style: {\n      position: 'absolute',\n      top: 30,\n      left: 20\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object-title\",\n    css: centerObjectTitleCSS,\n    borderBox: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"Tile App.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"A design tool for fashion designer.\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    currentPath: \"playground\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = PlaygroundPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlaygroundPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"PlaygroundPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheWdyb3VuZC50c3g/MDJiYSJdLCJuYW1lcyI6WyJQbGF5Z3JvdW5kUGFnZSIsImNlbnRlck9iamVjdFRpdGxlQ1NTIiwiY3NzIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJjaGlsZHJlblZhcmlhbnRzIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBa0IsR0FBRyxNQUFNO0FBQy9CLFFBQU1DLG9CQUFvQixHQUFHQyxpREFBSTs7Ozs7Ozs7OztHQUFqQztBQVlBLFNBQ0UsMERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFlBQVEsRUFBQyxZQUFyQjtBQUFrQyxjQUFVLEVBQUU7QUFBQ0MsVUFBSSxFQUFFLFFBQVA7QUFBaUJDLGVBQVMsRUFBRSxHQUE1QjtBQUFpQ0MsYUFBTyxFQUFFO0FBQTFDLEtBQTlDO0FBQTZGLFlBQVEsRUFBRUMsa0RBQXZHO0FBQXlILFNBQUssRUFBRTtBQUM5SEMsY0FBUSxFQUFFLFVBRG9IO0FBRTlIQyxTQUFHLEVBQUUsRUFGeUg7QUFHOUhDLFVBQUksRUFBRTtBQUh3SCxLQUFoSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsMERBQUMseUNBQUQ7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBcUMsT0FBRyxFQUFFUixvQkFBMUM7QUFBZ0UsYUFBUyxNQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBRkYsQ0FMRixDQURGLEVBWUUsMERBQUMsOERBQUQ7QUFBWSxlQUFXLEVBQUMsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREY7QUFnQkQsQ0E3QkQ7O0tBQU1ELGM7QUErQlNBLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcGxheWdyb3VuZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCB9IGZyb20gJ3Jlb2lsJ1xuaW1wb3J0IHsgY2hpbGRyZW5WYXJpYW50cyB9IGZyb20gJy4nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9jb25maWcvdGhlbWUnXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcblxuY29uc3QgUGxheWdyb3VuZFBhZ2U6IEZDID0gKCkgPT4ge1xuICBjb25zdCBjZW50ZXJPYmplY3RUaXRsZUNTUyA9IGNzc2BcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHAge1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIGBcblxuICByZXR1cm4oXG4gICAgPExheW91dD5cbiAgICAgIDxtb3Rpb24uZGl2IGxheW91dElkPSd0aXRsZS10ZXh0JyB0cmFuc2l0aW9uPXt7dHlwZTogJ3NwcmluZycsIHN0aWZmbmVzczogNDAwLCBkYW1waW5nOiAzMH19IHZhcmlhbnRzPXtjaGlsZHJlblZhcmlhbnRzfSBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAzMCxcbiAgICAgICAgbGVmdDogMjBcbiAgICAgIH19PlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT0nY2VudGVyLW9iamVjdC10aXRsZScgY3NzPXtjZW50ZXJPYmplY3RUaXRsZUNTU30gYm9yZGVyQm94PlxuICAgICAgICAgIDxoMT5UaWxlIEFwcC48L2gxPlxuICAgICAgICAgIDxwPkEgZGVzaWduIHRvb2wgZm9yIGZhc2hpb24gZGVzaWduZXIuPC9wPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgPE5hdmlnYXRpb24gY3VycmVudFBhdGg9J3BsYXlncm91bmQnIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWdyb3VuZFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/playground.tsx\n");

/***/ })

})