webpackHotUpdate_N_E("pages/playground",{

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: childrenVariants, parentVariants, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"childrenVariants\", function() { return childrenVariants; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parentVariants\", function() { return parentVariants; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\n/* harmony import */ var reoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reoil */ \"./node_modules/reoil/dist/index.es.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/theme */ \"./config/theme.ts\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/yokiijay/Code/tile-app/docs/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n/** @jsx jsx */\n\n\n\n\n\nconst childrenVariants = {\n  initial: {\n    y: 80,\n    opacity: 0\n  },\n  animate: {\n    y: 0,\n    opacity: 1,\n    transition: {\n      duration: 1.6,\n      type: 'tween',\n      ease: 'circOut'\n    }\n  }\n};\nconst parentVariants = {\n  animate: {\n    transition: {\n      staggerChildren: .2\n    }\n  }\n};\n\nconst IndexPage = () => {\n  _s();\n\n  const centerObjectTitleCSS = _emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"]`\n    h1 {\n      font-size: 5rem;\n      margin: 0;\n    }\n    p {\n      font-weight: 200;\n      font-size: 4rem;\n      margin: 0;\n    }\n  `;\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    style: {\n      height: '100%'\n    },\n    initial: \"initial\",\n    animate: \"animate\",\n    variants: parentVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    bg: Object(polished__WEBPACK_IMPORTED_MODULE_1__[\"desaturate\"])(.2, _config_theme__WEBPACK_IMPORTED_MODULE_4__[\"theme\"].primary),\n    color: \"white\",\n    overflow: \"hidden\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object\",\n    borderBox: true,\n    right: true,\n    px: 3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    variants: childrenVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object-image\",\n    cover: true,\n    style: {\n      transform: 'translate(-180px, -40px)'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    src: \"https://i.loli.net/2020/09/28/pvojXDhKE9mNCdR.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 15\n    }\n  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    layoutId: \"title-text\",\n    variants: childrenVariants,\n    style: {\n      position: 'relative',\n      bottom: 190,\n      left: 40\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"center-object-title\",\n    css: centerObjectTitleCSS,\n    borderBox: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 15\n    }\n  }, \"Tile App.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }\n  }, \"A design tool for fashion designer.\")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    variants: childrenVariants,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    onClick: () => router.push('/playground'),\n    className: \"btn-try\",\n    center: true,\n    width: 300,\n    top: -90,\n    pointer: true,\n    color: _config_theme__WEBPACK_IMPORTED_MODULE_4__[\"theme\"].black,\n    fontWeight: \"bold\",\n    fontSize: 2,\n    py: 16,\n    textTransform: \"uppercase\",\n    css: _emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"]`\n              .btn-try__cover {\n                transition: .25s\n              }\n              &:hover .btn-try__cover {\n                transform: scale(1.2)\n              }\n            `,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"btn-try__cover\",\n    backgroundImage: \"linear-gradient(270deg, #42ACE7 0%, #42DDE7 100%);\",\n    position: \"absolute\",\n    height: \"100%\",\n    width: \"100%\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(reoil__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, \"try it now\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    currentPath: \"home\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(IndexPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY2hpbGRyZW5WYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwiZWFzZSIsInBhcmVudFZhcmlhbnRzIiwic3RhZ2dlckNoaWxkcmVuIiwiSW5kZXhQYWdlIiwiY2VudGVyT2JqZWN0VGl0bGVDU1MiLCJjc3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoZWlnaHQiLCJkZXNhdHVyYXRlIiwidGhlbWUiLCJwcmltYXJ5IiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwicHVzaCIsImJsYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGdCQUEwQixHQUFHO0FBQ3hDQyxTQUFPLEVBQUU7QUFDUEMsS0FBQyxFQUFFLEVBREk7QUFFUEMsV0FBTyxFQUFFO0FBRkYsR0FEK0I7QUFLeENDLFNBQU8sRUFBRTtBQUNQRixLQUFDLEVBQUUsQ0FESTtBQUVQQyxXQUFPLEVBQUUsQ0FGRjtBQUdQRSxjQUFVLEVBQUU7QUFDVkMsY0FBUSxFQUFFLEdBREE7QUFFVkMsVUFBSSxFQUFFLE9BRkk7QUFHVkMsVUFBSSxFQUFFO0FBSEk7QUFITDtBQUwrQixDQUFuQztBQWdCQSxNQUFNQyxjQUF3QixHQUFHO0FBQ3RDTCxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFO0FBQ1ZLLHFCQUFlLEVBQUU7QUFEUDtBQURMO0FBRDZCLENBQWpDOztBQVFQLE1BQU1DLFNBQWEsR0FBRyxNQUFNO0FBQUE7O0FBQzFCLFFBQU1DLG9CQUFvQixHQUFHQyxpREFBSTs7Ozs7Ozs7OztHQUFqQztBQVlBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxTQUNFLDBEQUFD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RUFTRSwwREFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGLENBREYsQ0F0QkYsRUFvQ0UsMERBQUMsOERBQUQ7QUFBWSxlQUFXLEVBQUMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBDRixDQURGLENBREY7QUEwQ0QsQ0F6REQ7O0dBQU1GLFM7VUFhV0kscUQ7OztLQWJYSixTO0FBMkRTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlc2F0dXJhdGUgfSBmcm9tICdwb2xpc2hlZCdcbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIEltYWdlIH0gZnJvbSAncmVvaWwnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9jb25maWcvdGhlbWUnXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCB7IG1vdGlvbiwgVmFyaWFudHMgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgY2hpbGRyZW5WYXJpYW50czogVmFyaWFudHMgPSB7XG4gIGluaXRpYWw6IHtcbiAgICB5OiA4MCxcbiAgICBvcGFjaXR5OiAwXG4gIH0sXG4gIGFuaW1hdGU6IHtcbiAgICB5OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDEuNixcbiAgICAgIHR5cGU6ICd0d2VlbicsXG4gICAgICBlYXNlOiAnY2lyY091dCdcbiAgICB9XG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBwYXJlbnRWYXJpYW50czogVmFyaWFudHMgPSB7XG4gIGFuaW1hdGU6IHtcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IC4yXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEluZGV4UGFnZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNlbnRlck9iamVjdFRpdGxlQ1NTID0gY3NzYFxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgYFxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgcmV0dXJuKFxuICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fSBpbml0aWFsPSdpbml0aWFsJyBhbmltYXRlPSdhbmltYXRlJyB2YXJpYW50cz17cGFyZW50VmFyaWFudHN9PlxuICAgICAgPExheW91dCBiZz17ZGVzYXR1cmF0ZSguMiwgdGhlbWUucHJpbWFyeSl9IGNvbG9yPSd3aGl0ZScgb3ZlcmZsb3c9J2hpZGRlbic+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPSdjZW50ZXItb2JqZWN0JyBib3JkZXJCb3ggcmlnaHQgcHg9ezN9PlxuICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtjaGlsZHJlblZhcmlhbnRzfT5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdjZW50ZXItb2JqZWN0LWltYWdlJyBjb3ZlciBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTE4MHB4LCAtNDBweCknXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz0naHR0cHM6Ly9pLmxvbGkubmV0LzIwMjAvMDkvMjgvcHZvalhEaEtFOW1OQ2RSLnBuZycgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXRJZD0ndGl0bGUtdGV4dCcgdmFyaWFudHM9e2NoaWxkcmVuVmFyaWFudHN9IHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIGJvdHRvbTogMTkwLFxuICAgICAgICAgICAgbGVmdDogNDBcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdjZW50ZXItb2JqZWN0LXRpdGxlJyBjc3M9e2NlbnRlck9iamVjdFRpdGxlQ1NTfSBib3JkZXJCb3g+XG4gICAgICAgICAgICAgIDxoMT5UaWxlIEFwcC48L2gxPlxuICAgICAgICAgICAgICA8cD5BIGRlc2lnbiB0b29sIGZvciBmYXNoaW9uIGRlc2lnbmVyLjwvcD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgXG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtjaGlsZHJlblZhcmlhbnRzfT5cbiAgICAgICAgICA8Qm94IG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCgnL3BsYXlncm91bmQnKX0gY2xhc3NOYW1lPSdidG4tdHJ5JyBjZW50ZXIgd2lkdGg9ezMwMH0gdG9wPXstOTB9IHBvaW50ZXIgY29sb3I9e3RoZW1lLmJsYWNrfSBmb250V2VpZ2h0PSdib2xkJyBmb250U2l6ZT17Mn0gcHk9ezE2fSB0ZXh0VHJhbnNmb3JtPSd1cHBlcmNhc2UnICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgLmJ0bi10cnlfX2NvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuMjVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpob3ZlciAuYnRuLXRyeV9fY292ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfT5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdidG4tdHJ5X19jb3ZlcicgYmFja2dyb3VuZEltYWdlPSdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDJBQ0U3IDAlLCAjNDJEREU3IDEwMCUpOycgcG9zaXRpb249J2Fic29sdXRlJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJz48L0JveD5cbiAgICAgICAgICAgIDxCb3g+dHJ5IGl0IG5vdzwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgPE5hdmlnYXRpb24gY3VycmVudFBhdGg9J2hvbWUnIC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L21vdGlvbi5kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})