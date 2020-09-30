webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: childrenVariants, parentVariants, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"childrenVariants\", function() { return childrenVariants; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parentVariants\", function() { return parentVariants; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\n/* harmony import */ var reoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reoil */ \"./node_modules/reoil/dist/index.es.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/theme */ \"./config/theme.ts\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"../node_modules/react-icons/md/index.esm.js\");\nvar _jsxFileName = \"/Users/yokiijay/Code/tile-app/docs/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n/** @jsx jsx */\n\n\n\n\n\n\nconst childrenVariants = {\n  initial: {\n    y: 80,\n    opacity: 0\n  },\n  animate: {\n    y: 0,\n    opacity: 1,\n    transition: {\n      duration: 1.6,\n      type: 'tween',\n      ease: 'circOut'\n    }\n  }\n};\nconst parentVariants = {\n  animate: {\n    transition: {\n      staggerChildren: .2\n    }\n  }\n};\n\nconst IndexPage = () => {\n  _s();\n\n  const centerObjectTitleCSS = _emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"]`\n    h1 {\n      font-size: 5rem;\n      margin: 0;\n    }\n    p {\n      font-weight: 200;\n      font-size: 4rem;\n      margin: 0;\n    }\n  `;\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    style: {\n      height: '100%'\n    },\n    initial: \"initial\",\n    animate: \"animate\",\n    variants: parentVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    bg: Object(polished__WEBPACK_IMPORTED_MODULE_1__[\"desaturate\"])(.2, _config_theme__WEBPACK_IMPORTED_MODULE_4__[\"theme\"].primary),\n    color: \"white\",\n    overflow: \"hidden\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object\",\n    borderBox: true,\n    right: true,\n    px: 3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    variants: childrenVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object-image\",\n    cover: true,\n    style: {\n      transform: 'translate(-180px, -40px)'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    src: \"https://i.loli.net/2020/09/28/pvojXDhKE9mNCdR.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    layoutId: \"title-text\",\n    variants: childrenVariants,\n    style: {\n      position: 'relative',\n      bottom: 190,\n      left: 40\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object-title\",\n    css: centerObjectTitleCSS,\n    borderBox: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }\n  }, \"Tile App.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, \"A design tool for fashion designer.\")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    variants: childrenVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    onClick: () => router.push('/playground'),\n    className: \"btn-try\",\n    center: true,\n    width: 300,\n    top: -90,\n    pointer: true,\n    color: _config_theme__WEBPACK_IMPORTED_MODULE_4__[\"theme\"].black,\n    fontWeight: \"bold\",\n    fontSize: 2,\n    py: 16,\n    textTransform: \"uppercase\",\n    css: _emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"]`\n              .btn-try__cover {\n                transition: .25s\n              }\n              &:hover .btn-try__cover {\n                transform: scale(1.2)\n              }\n            `,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"btn-try__cover\",\n    backgroundImage: \"linear-gradient(270deg, #42ACE7 0%, #42DDE7 100%);\",\n    position: \"absolute\",\n    height: \"100%\",\n    width: \"100%\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    row: true,\n    center: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"try it now \", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_9__[\"MdPlayArrow\"], {\n    style: {\n      marginLeft: 8\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 40\n    }\n  })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    currentPath: \"home\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(IndexPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY2hpbGRyZW5WYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwiZWFzZSIsInBhcmVudFZhcmlhbnRzIiwic3RhZ2dlckNoaWxkcmVuIiwiSW5kZXhQYWdlIiwiY2VudGVyT2JqZWN0VGl0bGVDU1MiLCJjc3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoZWlnaHQiLCJkZXNhdHVyYXRlIiwidGhlbWUiLCJwcmltYXJ5IiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwicHVzaCIsImJsYWNrIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxnQkFBMEIsR0FBRztBQUN4Q0MsU0FBTyxFQUFFO0FBQ1BDLEtBQUMsRUFBRSxFQURJO0FBRVBDLFdBQU8sRUFBRTtBQUZGLEdBRCtCO0FBS3hDQyxTQUFPLEVBQUU7QUFDUEYsS0FBQyxFQUFFLENBREk7QUFFUEMsV0FBTyxFQUFFLENBRkY7QUFHUEUsY0FBVSxFQUFFO0FBQ1ZDLGNBQVEsRUFBRSxHQURBO0FBRVZDLFVBQUksRUFBRSxPQUZJO0FBR1ZDLFVBQUksRUFBRTtBQUhJO0FBSEw7QUFMK0IsQ0FBbkM7QUFnQkEsTUFBTUMsY0FBd0IsR0FBRztBQUN0Q0wsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRTtBQUNWSyxxQkFBZSxFQUFFO0FBRFA7QUFETDtBQUQ2QixDQUFqQzs7QUFRUCxNQUFNQyxTQUFhLEdBQUcsTUFBTTtBQUFBOztBQUMxQixRQUFNQyxvQkFBb0IsR0FBR0MsaURBQUk7Ozs7Ozs7Ozs7R0FBakM7QUFZQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVB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QUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsMERBQUMseUNBQUQ7QUFBSyxPQUFHLE1BQVI7QUFBUyxVQUFNLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMkIsMERBQUMsMERBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBQ2EsZ0JBQVUsRUFBRTtBQUFiLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBM0IsQ0FURixDQURGLENBdEJGLEVBb0NFLDBEQUFDLDhEQUFEO0FBQVksZUFBVyxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQ0YsQ0FERixDQURGO0FBMENELENBekREOztHQUFNZixTO1VBYVdJLHFEOzs7S0FiWEosUztBQTJEU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNhdHVyYXRlIH0gZnJvbSAncG9saXNoZWQnXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBJbWFnZSB9IGZyb20gJ3Jlb2lsJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29uZmlnL3RoZW1lJ1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb24nXG5pbXBvcnQgeyBtb3Rpb24sIFZhcmlhbnRzIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IE1kUGxheUFycm93IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXG5cbmV4cG9ydCBjb25zdCBjaGlsZHJlblZhcmlhbnRzOiBWYXJpYW50cyA9IHtcbiAgaW5pdGlhbDoge1xuICAgIHk6IDgwLFxuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgYW5pbWF0ZToge1xuICAgIHk6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMS42LFxuICAgICAgdHlwZTogJ3R3ZWVuJyxcbiAgICAgIGVhc2U6ICdjaXJjT3V0J1xuICAgIH1cbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IHBhcmVudFZhcmlhbnRzOiBWYXJpYW50cyA9IHtcbiAgYW5pbWF0ZToge1xuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogLjJcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgSW5kZXhQYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgY2VudGVyT2JqZWN0VGl0bGVDU1MgPSBjc3NgXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICBgXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICByZXR1cm4oXG4gICAgPG1vdGlvbi5kaXYgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319IGluaXRpYWw9J2luaXRpYWwnIGFuaW1hdGU9J2FuaW1hdGUnIHZhcmlhbnRzPXtwYXJlbnRWYXJpYW50c30+XG4gICAgICA8TGF5b3V0IGJnPXtkZXNhdHVyYXRlKC4yLCB0aGVtZS5wcmltYXJ5KX0gY29sb3I9J3doaXRlJyBvdmVyZmxvdz0naGlkZGVuJz5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9J2NlbnRlci1vYmplY3QnIGJvcmRlckJveCByaWdodCBweD17M30+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2NoaWxkcmVuVmFyaWFudHN9PlxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9J2NlbnRlci1vYmplY3QtaW1hZ2UnIGNvdmVyIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtMTgwcHgsIC00MHB4KSdcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdodHRwczovL2kubG9saS5uZXQvMjAyMC8wOS8yOC9wdm9qWERoS0U5bU5DZFIucG5nJyAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGxheW91dElkPSd0aXRsZS10ZXh0JyB2YXJpYW50cz17Y2hpbGRyZW5WYXJpYW50c30gc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgYm90dG9tOiAxOTAsXG4gICAgICAgICAgICBsZWZ0OiA0MFxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9J2NlbnRlci1vYmplY3QtdGl0bGUnIGNzcz17Y2VudGVyT2JqZWN0VGl0bGVDU1N9IGJvcmRlckJveD5cbiAgICAgICAgICAgICAgPGgxPlRpbGUgQXBwLjwvaDE+XG4gICAgICAgICAgICAgIDxwPkEgZGVzaWduIHRvb2wgZm9yIGZhc2hpb24gZGVzaWduZXIuPC9wPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2NoaWxkcmVuVmFyaWFudHN9PlxuICAgICAgICAgIDxCb3ggb25DbGljaz17KCk9PnJvdXRlci5wdXNoKCcvcGxheWdyb3VuZCcpfSBjbGFzc05hbWU9J2J0bi10cnknIGNlbnRlciB3aWR0aD17MzAwfSB0b3A9ey05MH0gcG9pbnRlciBjb2xvcj17dGhlbWUuYmxhY2t9IGZvbnRXZWlnaHQ9J2JvbGQnIGZvbnRTaXplPXsyfSBweT17MTZ9IHRleHRUcmFuc2Zvcm09J3VwcGVyY2FzZScgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAuYnRuLXRyeV9fY292ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4yNXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmhvdmVyIC5idG4tdHJ5X19jb3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PlxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9J2J0bi10cnlfX2NvdmVyJyBiYWNrZ3JvdW5kSW1hZ2U9J2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MkFDRTcgMCUsICM0MkRERTcgMTAwJSk7JyBwb3NpdGlvbj0nYWJzb2x1dGUnIGhlaWdodD0nMTAwJScgd2lkdGg9JzEwMCUnPjwvQm94PlxuICAgICAgICAgICAgPEJveCByb3cgY2VudGVyPnRyeSBpdCBub3cgPE1kUGxheUFycm93IHN0eWxlPXt7bWFyZ2luTGVmdDogOH19IC8+PC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8TmF2aWdhdGlvbiBjdXJyZW50UGF0aD0naG9tZScgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})