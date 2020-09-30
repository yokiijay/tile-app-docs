webpackHotUpdate_N_E("pages/playground",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: childrenVariants, parentVariants, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"childrenVariants\", function() { return childrenVariants; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parentVariants\", function() { return parentVariants; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\n/* harmony import */ var reoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reoil */ \"./node_modules/reoil/dist/index.es.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/theme */ \"./config/theme.ts\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/Users/yokiijay/Code/tile-app/docs/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n/** @jsx jsx */\n\n\n\n\nconst childrenVariants = {\n  initial: {\n    y: 80,\n    opacity: 0\n  },\n  animate: {\n    y: 0,\n    opacity: 1,\n    transition: {\n      duration: 1.6,\n      type: 'tween',\n      ease: 'circOut'\n    }\n  }\n};\nconst parentVariants = {\n  animate: {\n    transition: {\n      staggerChildren: .2\n    }\n  }\n};\n\nconst IndexPage = () => {\n  const centerObjectTitleCSS = _emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"]`\n    h1 {\n      font-size: 5rem;\n      margin: 0;\n    }\n    p {\n      font-weight: 200;\n      font-size: 4rem;\n      margin: 0;\n    }\n  `;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    style: {\n      height: '100%'\n    },\n    initial: \"initial\",\n    animate: \"animate\",\n    variants: parentVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    bg: Object(polished__WEBPACK_IMPORTED_MODULE_1__[\"desaturate\"])(.2, _config_theme__WEBPACK_IMPORTED_MODULE_4__[\"theme\"].primary),\n    color: \"white\",\n    overflow: \"hidden\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object\",\n    borderBox: true,\n    right: true,\n    px: 3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    variants: childrenVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object-image\",\n    cover: true,\n    style: {\n      transform: 'translate(-180px, -40px)'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    src: \"https://i.loli.net/2020/09/28/pvojXDhKE9mNCdR.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    layoutId: \"title-text\",\n    variants: childrenVariants,\n    style: {\n      transform: 'translate(40px, -190px)'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object-title\",\n    css: centerObjectTitleCSS,\n    borderBox: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, \"Tile App.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 15\n    }\n  }, \"A design tool for fashion designer.\")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    variants: childrenVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"btn-try\",\n    center: true,\n    width: 300,\n    top: -90,\n    pointer: true,\n    color: _config_theme__WEBPACK_IMPORTED_MODULE_4__[\"theme\"].black,\n    fontWeight: \"bold\",\n    fontSize: 2,\n    py: 16,\n    textTransform: \"uppercase\",\n    css: _emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"]`\n              .btn-try__cover {\n                transition: .25s\n              }\n              &:hover .btn-try__cover {\n                transform: scale(1.2)\n              }\n            `,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"btn-try__cover\",\n    backgroundImage: \"linear-gradient(270deg, #42ACE7 0%, #42DDE7 100%);\",\n    position: \"absolute\",\n    height: \"100%\",\n    width: \"100%\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"try it now\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    currentPath: \"home\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY2hpbGRyZW5WYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwiZWFzZSIsInBhcmVudFZhcmlhbnRzIiwic3RhZ2dlckNoaWxkcmVuIiwiSW5kZXhQYWdlIiwiY2VudGVyT2JqZWN0VGl0bGVDU1MiLCJjc3MiLCJoZWlnaHQiLCJkZXNhdHVyYXRlIiwidGhlbWUiLCJwcmltYXJ5IiwidHJhbnNmb3JtIiwiYmxhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsZ0JBQTBCLEdBQUc7QUFDeENDLFNBQU8sRUFBRTtBQUNQQyxLQUFDLEVBQUUsRUFESTtBQUVQQyxXQUFPLEVBQUU7QUFGRixHQUQrQjtBQUt4Q0MsU0FBTyxFQUFFO0FBQ1BGLEtBQUMsRUFBRSxDQURJO0FBRVBDLFdBQU8sRUFBRSxDQUZGO0FBR1BFLGNBQVUsRUFBRTtBQUNWQyxjQUFRLEVBQUUsR0FEQTtBQUVWQyxVQUFJLEVBQUUsT0FGSTtBQUdWQyxVQUFJLEVBQUU7QUFISTtBQUhMO0FBTCtCLENBQW5DO0FBZ0JBLE1BQU1DLGNBQXdCLEdBQUc7QUFDdENMLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUU7QUFDVksscUJBQWUsRUFBRTtBQURQO0FBREw7QUFENkIsQ0FBakM7O0FBUVAsTUFBTUMsU0FBYSxHQUFHLE1BQU07QUFDMUIsUUFBTUMsb0JBQW9CLEdBQUdDLGlEQUFJOzs7Ozs7Ozs7O0dBQWpDO0FBWUEsU0FDRSwwREFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FBbkI7QUFBcUMsV0FBTyxFQUFDLFNBQTdDO0FBQXVELFdBQU8sRUFBQyxTQUEvRDtB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cGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzYXR1cmF0ZSB9IGZyb20gJ3BvbGlzaGVkJ1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgSW1hZ2UgfSBmcm9tICdyZW9pbCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbmZpZy90aGVtZSdcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgbW90aW9uLCBWYXJpYW50cyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmV4cG9ydCBjb25zdCBjaGlsZHJlblZhcmlhbnRzOiBWYXJpYW50cyA9IHtcbiAgaW5pdGlhbDoge1xuICAgIHk6IDgwLFxuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgYW5pbWF0ZToge1xuICAgIHk6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMS42LFxuICAgICAgdHlwZTogJ3R3ZWVuJyxcbiAgICAgIGVhc2U6ICdjaXJjT3V0J1xuICAgIH1cbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IHBhcmVudFZhcmlhbnRzOiBWYXJpYW50cyA9IHtcbiAgYW5pbWF0ZToge1xuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogLjJcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgSW5kZXhQYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgY2VudGVyT2JqZWN0VGl0bGVDU1MgPSBjc3NgXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICBgXG5cbiAgcmV0dXJuKFxuICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fSBpbml0aWFsPSdpbml0aWFsJyBhbmltYXRlPSdhbmltYXRlJyB2YXJpYW50cz17cGFyZW50VmFyaWFudHN9PlxuICAgICAgPExheW91dCBiZz17ZGVzYXR1cmF0ZSguMiwgdGhlbWUucHJpbWFyeSl9IGNvbG9yPSd3aGl0ZScgb3ZlcmZsb3c9J2hpZGRlbic+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPSdjZW50ZXItb2JqZWN0JyBib3JkZXJCb3ggcmlnaHQgcHg9ezN9PlxuICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtjaGlsZHJlblZhcmlhbnRzfT5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdjZW50ZXItb2JqZWN0LWltYWdlJyBjb3ZlciBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTE4MHB4LCAtNDBweCknXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz0naHR0cHM6Ly9pLmxvbGkubmV0LzIwMjAvMDkvMjgvcHZvalhEaEtFOW1OQ2RSLnBuZycgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXRJZD0ndGl0bGUtdGV4dCcgdmFyaWFudHM9e2NoaWxkcmVuVmFyaWFudHN9IHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSg0MHB4LCAtMTkwcHgpJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0nY2VudGVyLW9iamVjdC10aXRsZScgY3NzPXtjZW50ZXJPYmplY3RUaXRsZUNTU30gYm9yZGVyQm94PlxuICAgICAgICAgICAgICA8aDE+VGlsZSBBcHAuPC9oMT5cbiAgICAgICAgICAgICAgPHA+QSBkZXNpZ24gdG9vbCBmb3IgZmFzaGlvbiBkZXNpZ25lci48L3A+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIFxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17Y2hpbGRyZW5WYXJpYW50c30+XG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9J2J0bi10cnknIGNlbnRlciB3aWR0aD17MzAwfSB0b3A9ey05MH0gcG9pbnRlciBjb2xvcj17dGhlbWUuYmxhY2t9IGZvbnRXZWlnaHQ9J2JvbGQnIGZvbnRTaXplPXsyfSBweT17MTZ9IHRleHRUcmFuc2Zvcm09J3VwcGVyY2FzZScgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAuYnRuLXRyeV9fY292ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4yNXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmhvdmVyIC5idG4tdHJ5X19jb3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PlxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9J2J0bi10cnlfX2NvdmVyJyBiYWNrZ3JvdW5kSW1hZ2U9J2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MkFDRTcgMCUsICM0MkRERTcgMTAwJSk7JyBwb3NpdGlvbj0nYWJzb2x1dGUnIGhlaWdodD0nMTAwJScgd2lkdGg9JzEwMCUnPjwvQm94PlxuICAgICAgICAgICAgPEJveD50cnkgaXQgbm93PC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8TmF2aWdhdGlvbiBjdXJyZW50UGF0aD0naG9tZScgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})