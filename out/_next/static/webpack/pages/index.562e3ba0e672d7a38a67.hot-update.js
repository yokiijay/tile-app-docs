webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\n/* harmony import */ var reoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reoil */ \"./node_modules/reoil/dist/index.es.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/theme */ \"./config/theme.ts\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/Users/yokiijay/Code/tile-app/docs/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n/** @jsx jsx */\n\n\n\n\nconst childrenVariants = {\n  initial: {\n    y: 80,\n    opacity: 0\n  },\n  animate: {\n    y: 0,\n    opacity: 1,\n    transition: {\n      type: 'tween',\n      ease: 'anticipate'\n    }\n  }\n};\nconst parentVariants = {\n  animate: {\n    transition: {\n      staggerChildren: .2\n    }\n  }\n};\n\nconst IndexPage = () => {\n  const centerObjectTitleCSS = _emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"]`\n    h1 {\n      font-size: 5rem;\n      margin: 0;\n    }\n    p {\n      font-weight: 200;\n      font-size: 4rem;\n      margin: 0;\n    }\n  `;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    style: {\n      height: '100%'\n    },\n    initial: \"initial\",\n    animate: \"animate\",\n    variants: parentVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    bg: Object(polished__WEBPACK_IMPORTED_MODULE_1__[\"desaturate\"])(.2, _config_theme__WEBPACK_IMPORTED_MODULE_4__[\"theme\"].primary),\n    color: \"white\",\n    overflow: \"hidden\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object\",\n    borderBox: true,\n    right: true,\n    px: 3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    variants: childrenVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object-image\",\n    cover: true,\n    style: {\n      transform: 'translate(-180px, -40px)'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    src: \"https://i.loli.net/2020/09/28/pvojXDhKE9mNCdR.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    variants: childrenVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object-title\",\n    css: centerObjectTitleCSS,\n    style: {\n      transform: 'translate(40px, -190px)'\n    },\n    borderBox: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, \"Tile App.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, \"A design tool for fashion designer.\")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    variants: childrenVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"btn-try\",\n    center: true,\n    width: 300,\n    top: -90,\n    pointer: true,\n    color: _config_theme__WEBPACK_IMPORTED_MODULE_4__[\"theme\"].black,\n    fontWeight: \"bold\",\n    fontSize: 2,\n    py: 16,\n    textTransform: \"uppercase\",\n    css: _emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"]`\n              .btn-try__cover {\n                transition: .25s\n              }\n              &:hover .btn-try__cover {\n                transform: scale(1.2)\n              }\n            `,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"btn-try__cover\",\n    backgroundImage: \"linear-gradient(270deg, #42ACE7 0%, #42DDE7 100%);\",\n    position: \"absolute\",\n    height: \"100%\",\n    width: \"100%\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, \"try it now\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    currentPath: \"home\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY2hpbGRyZW5WYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImVhc2UiLCJwYXJlbnRWYXJpYW50cyIsInN0YWdnZXJDaGlsZHJlbiIsIkluZGV4UGFnZSIsImNlbnRlck9iamVjdFRpdGxlQ1NTIiwiY3NzIiwiaGVpZ2h0IiwiZGVzYXR1cmF0ZSIsInRoZW1lIiwicHJpbWFyeSIsInRyYW5zZm9ybSIsImJsYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxnQkFBMEIsR0FBRztBQUNqQ0MsU0FBTyxFQUFFO0FBQ1BDLEtBQUMsRUFBRSxFQURJO0FBRVBDLFdBQU8sRUFBRTtBQUZGLEdBRHdCO0FBS2pDQyxTQUFPLEVBQUU7QUFDUEYsS0FBQyxFQUFFLENBREk7QUFFUEMsV0FBTyxFQUFFLENBRkY7QUFHUEUsY0FBVSxFQUFFO0FBQ1ZDLFVBQUksRUFBRSxPQURJO0FBRVZDLFVBQUksRUFBRTtBQUZJO0FBSEw7QUFMd0IsQ0FBbkM7QUFlQSxNQUFNQyxjQUF3QixHQUFHO0FBQy9CSixTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFO0FBQ1ZJLHFCQUFlLEVBQUU7QUFEUDtBQURMO0FBRHNCLENBQWpDOztBQVFBLE1BQU1DLFNBQWEsR0FBRyxNQUFNO0FBQzFCLFFBQU1DLG9CQUFvQixHQUFHQyxpREFBSTs7Ozs7Ozs7OztHQUFqQztBQVlBLFNBQ0UsMERBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBQW5CO0FBQXFDLFdBQU8sRUFBQyxTQUE3QztBQUF1RCxXQUFPLEVBQUMsU0FBL0Q7QUFBeUUsWUFBUSxFQUFFTCxjQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsMERBQUQ7QUFBUSxNQUFFLEVBQUVNLDJEQUFVLENBQUMsRUFBRCxFQUFLQyxtREFBSyxDQUFDQyxPQUFYLENBQXRCO0FBQTJDLFNBQUssRUFBQyxPQUFqRDtBQUF5RCxZQUFRLEVBQUMsUUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLHlDQUFEO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsYUFBUyxNQUF4QztBQUF5QyxTQUFLLE1BQTlDO0FBQStDLE1BQUUsRUFBRSxDQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksWUFBUSxFQUFFaEIsZ0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyx5Q0FBRDtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFxQyxTQUFLLE1BQTFDO0FBQTJDLFNBQUssRUFBRTtBQUNoRGlCLGVBQVMsRUFBRTtBQURxQyxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0UsMERBQUMsMkNBQUQ7QUFBTyxPQUFHLEVBQUMsbURBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsQ0FERixFQVFFLDBEQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFlBQVEsRUFBRWpCLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMseUNBQUQ7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBcUMsT0FBRyxFQUFFVyxvQkFBMUM7QUFBZ0UsU0FBSyxFQUFFO0FBQ3JFTSxlQUFTLEVBQUU7QUFEMEQsS0FBdkU7QUFFRyxhQUFTLE1BRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUpGLENBREYsQ0FSRixDQURGLEVBb0JFLDBEQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFlBQVEsRUFBRWpCLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMseUNBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixVQUFNLE1BQS9CO0FBQWdDLFNBQUssRUFBRSxHQUF2QztBQUE0QyxPQUFHLEVBQUUsQ0FBQyxFQUFsRDtBQUFzRCxXQUFPLE1BQTdEO0FBQThELFNBQUssRUFBRWUsbURBQUssQ0FBQ0csS0FBM0U7QUFBa0YsY0FBVSxFQUFDLE1BQTdGO0FBQW9HLFlBQVEsRUFBRSxDQUE5RztBQUFpSCxNQUFFLEVBQUUsRUFBckg7QUFBeUgsaUJBQWEsRUFBQyxXQUF2STtBQUFvSixPQUFHLEVBQUVOLGlEQUFJOzs7Ozs7O2FBQTdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSwwREFBQyx5Q0FBRDtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxtQkFBZSxFQUFDLG9EQUFoRDtBQUFxRyxZQUFRLEVBQUMsVUFBOUc7QUFBeUgsVUFBTSxFQUFDLE1BQWhJO0FBQXVJLFNBQUssRUFBQyxNQUE3STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRSwwREFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGLENBREYsQ0FwQkYsRUFrQ0UsMERBQUMsOERBQUQ7QUFBWSxlQUFXLEVBQUMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDRixDQURGLENBREY7QUF3Q0QsQ0FyREQ7O0tBQU1GLFM7QUF1RFNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzYXR1cmF0ZSB9IGZyb20gJ3BvbGlzaGVkJ1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgSW1hZ2UgfSBmcm9tICdyZW9pbCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbmZpZy90aGVtZSdcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgbW90aW9uLCBWYXJpYW50cyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IGNoaWxkcmVuVmFyaWFudHM6IFZhcmlhbnRzID0ge1xuICBpbml0aWFsOiB7XG4gICAgeTogODAsXG4gICAgb3BhY2l0eTogMFxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgeTogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6ICd0d2VlbicsXG4gICAgICBlYXNlOiAnYW50aWNpcGF0ZSdcbiAgICB9XG4gIH0sXG59XG5cbmNvbnN0IHBhcmVudFZhcmlhbnRzOiBWYXJpYW50cyA9IHtcbiAgYW5pbWF0ZToge1xuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogLjJcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgSW5kZXhQYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgY2VudGVyT2JqZWN0VGl0bGVDU1MgPSBjc3NgXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICBgXG5cbiAgcmV0dXJuKFxuICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fSBpbml0aWFsPSdpbml0aWFsJyBhbmltYXRlPSdhbmltYXRlJyB2YXJpYW50cz17cGFyZW50VmFyaWFudHN9PlxuICAgICAgPExheW91dCBiZz17ZGVzYXR1cmF0ZSguMiwgdGhlbWUucHJpbWFyeSl9IGNvbG9yPSd3aGl0ZScgb3ZlcmZsb3c9J2hpZGRlbic+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPSdjZW50ZXItb2JqZWN0JyBib3JkZXJCb3ggcmlnaHQgcHg9ezN9PlxuICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtjaGlsZHJlblZhcmlhbnRzfT5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdjZW50ZXItb2JqZWN0LWltYWdlJyBjb3ZlciBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTE4MHB4LCAtNDBweCknXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz0naHR0cHM6Ly9pLmxvbGkubmV0LzIwMjAvMDkvMjgvcHZvalhEaEtFOW1OQ2RSLnBuZycgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17Y2hpbGRyZW5WYXJpYW50c30+XG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0nY2VudGVyLW9iamVjdC10aXRsZScgY3NzPXtjZW50ZXJPYmplY3RUaXRsZUNTU30gc3R5bGU9e3tcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDQwcHgsIC0xOTBweCknXG4gICAgICAgICAgICB9fSBib3JkZXJCb3g+XG4gICAgICAgICAgICAgIDxoMT5UaWxlIEFwcC48L2gxPlxuICAgICAgICAgICAgICA8cD5BIGRlc2lnbiB0b29sIGZvciBmYXNoaW9uIGRlc2lnbmVyLjwvcD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgXG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtjaGlsZHJlblZhcmlhbnRzfT5cbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0nYnRuLXRyeScgY2VudGVyIHdpZHRoPXszMDB9IHRvcD17LTkwfSBwb2ludGVyIGNvbG9yPXt0aGVtZS5ibGFja30gZm9udFdlaWdodD0nYm9sZCcgZm9udFNpemU9ezJ9IHB5PXsxNn0gdGV4dFRyYW5zZm9ybT0ndXBwZXJjYXNlJyAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgIC5idG4tdHJ5X19jb3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjI1c1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICY6aG92ZXIgLmJ0bi10cnlfX2NvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH0+XG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0nYnRuLXRyeV9fY292ZXInIGJhY2tncm91bmRJbWFnZT0nbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQyQUNFNyAwJSwgIzQyRERFNyAxMDAlKTsnIHBvc2l0aW9uPSdhYnNvbHV0ZScgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJSc+PC9Cb3g+XG4gICAgICAgICAgICA8Qm94PnRyeSBpdCBub3c8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIDxOYXZpZ2F0aW9uIGN1cnJlbnRQYXRoPSdob21lJyAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})