"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SideMenu_SideMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideMenu/SideMenu */ \"./components/SideMenu/SideMenu.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index */ \"./store/index.js\");\n/* harmony import */ var _components_HomeContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/HomeContent */ \"./components/HomeContent/index.js\");\n/* harmony import */ var _components_SideMenu_SideBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SideMenu/SideBar */ \"./components/SideMenu/SideBar.js\");\n/* harmony import */ var _components_DashBoard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DashBoard */ \"./components/DashBoard/index.js\");\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Profile */ \"./components/Profile/index.js\");\n/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Cart */ \"./components/Cart/index.js\");\n/* harmony import */ var _components_Favourites__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Favourites */ \"./components/Favourites/index.js\");\n/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Settings */ \"./components/Settings/index.js\");\n/* harmony import */ var _components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/TopBar/TopBar */ \"./components/TopBar/TopBar.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    var _this = this;\n    _s();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.sideMenu;\n    }), activeTab = ref.activeTab, isSideMenu = ref.isSideMenu;\n    var getActiveTabElement = function() {\n        switch(activeTab){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashBoard__WEBPACK_IMPORTED_MODULE_8__.DashBoard, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, _this);\n                break;\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile__WEBPACK_IMPORTED_MODULE_9__.Profile, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, _this);\n                break;\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cart__WEBPACK_IMPORTED_MODULE_10__.Cart, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 19\n                }, _this);\n                break;\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Favourites__WEBPACK_IMPORTED_MODULE_11__.Favourites, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 19\n                }, _this);\n                break;\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Settings__WEBPACK_IMPORTED_MODULE_12__.Settings, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 21\n                }, _this);\n                break;\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeContent__WEBPACK_IMPORTED_MODULE_6__.HomeContent, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 24\n                }, _this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        store: _store_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex h-full w-full gap-x-5\",\n                children: [\n                    isSideMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isSideMenu ? \"w-1/6\" : \"w-20\", \" bg-gray-800 h-full shadow-md ease-in-out transition  duration-500 \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideMenu_SideMenu__WEBPACK_IMPORTED_MODULE_2__.SideMenu, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-20 bg-gray-800 h-full shadow-md ease-in-out duration-100 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideMenu_SideBar__WEBPACK_IMPORTED_MODULE_7__.SideBar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 106\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 27\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isSideMenu ? \"w-5/6\" : \"w-full\", \" h-full\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_13__.TopBar, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                                lineNumber: 60,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full grid h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"place-self-center\",\n                                    children: getActiveTabElement()\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"ZlEQfPpc9NUqO2/Wvv6u4iePUBA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUMwQjtBQUM5QjtBQUNvQztBQUM5QjtBQUNrQjtBQUNJO0FBQ0w7QUFDSjtBQUNOO0FBQ1k7QUFDSjtBQUNHOztBQUdyRCxTQUFTYyxTQUFTLEdBQUc7OztJQUNqQixJQUFrQ1osR0FBc0MsR0FBdENBLHdEQUFXLENBQUMsU0FBQ2EsS0FBSztlQUFLQSxLQUFLLENBQUNDLFFBQVE7S0FBQSxDQUFDLEVBQWhFQyxTQUFTLEdBQWlCZixHQUFzQyxDQUFoRWUsU0FBUyxFQUFFQyxVQUFVLEdBQUtoQixHQUFzQyxDQUFyRGdCLFVBQVU7SUFFN0IsSUFBTUMsbUJBQW1CLEdBQUcsV0FBTTtRQUM5QixPQUFRRixTQUFTO1lBQ2IsS0FBSyxDQUFDO2dCQUNGLHFCQUNJLDhEQUFDVCw0REFBUzs7Ozt5QkFBRyxDQUNmO2dCQUNGLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YscUJBQ0ksOERBQUNDLHdEQUFPOzs7O3lCQUFHLENBQ2I7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixxQkFDRSw4REFBQ0MsbURBQUk7Ozs7eUJBQUUsQ0FDUDtnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLHFCQUNFLDhEQUFDQywrREFBVTs7Ozt5QkFBRSxDQUNiO2dCQUNGLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YscUJBQ0ksOERBQUNDLDJEQUFROzs7O3lCQUFFLENBQ2I7Z0JBQ0YsTUFBTTtZQUNWO2dCQUNJLHFCQUFPLDhEQUFDTixnRUFBVzs7Ozt5QkFBRyxDQUFDO1NBQzlCO0tBQ0o7SUFDRCxxQkFDSSw4REFBQ0YsaURBQVE7UUFBQ0MsS0FBSyxFQUFFQSxvREFBSztrQkFDbEIsNEVBQUNlLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLEVBQUU7c0JBRWIsNEVBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw0QkFBNkI7O29CQUN2Q0gsVUFBVSxpQkFDUCw4REFBQ0UsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFLEVBQUMsQ0FBZ0MsTUFBbUUsQ0FBakdILFVBQVUsR0FBRyxPQUFPLEdBQUUsTUFBTSxFQUFFLHFFQUFtRSxDQUFDO2tDQUNqSCw0RUFBQ2xCLG1FQUFROzs7O2dDQUFHOzs7Ozs0QkFBTSxpQkFDcEIsOERBQUNvQixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsNkRBQStEO2tDQUFDLDRFQUFDZCxpRUFBTzs7OztnQ0FBRzs7Ozs7NEJBQU07a0NBQzlGLDhEQUFDYSxLQUFHO3dCQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUFrQyxNQUFPLENBQXZDSCxVQUFVLEdBQUcsT0FBTyxHQUFFLFFBQVEsRUFBRSxTQUFPLENBQUM7OzBDQUN2RSw4REFBQ0wsOERBQU07Ozs7b0NBQUU7MENBRUwsOERBQUNPLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxvQkFBb0I7MENBRS9CLDRFQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsbUJBQW1COzhDQUM3QkYsbUJBQW1CLEVBQUU7Ozs7O3dDQUNwQjs7Ozs7b0NBQ0E7Ozs7Ozs0QkFDSjs7Ozs7O29CQUlKOzs7OztnQkFDSjs7Ozs7WUFDQyxDQUNiO0NBQ0w7R0E1RFFMLFNBQVM7O1FBQ29CWixvREFBVzs7O0FBRHhDWSxLQUFBQSxTQUFTO0FBNkRsQiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXHJcbmltcG9ydCB7IFNpZGVNZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlTWVudS9TaWRlTWVudSc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoLCBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IEhvbWVDb250ZW50IH0gZnJvbSAnL2NvbXBvbmVudHMvSG9tZUNvbnRlbnQnXHJcbmltcG9ydCB7IFNpZGVCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NpZGVNZW51L1NpZGVCYXInO1xyXG5pbXBvcnQgeyBEYXNoQm9hcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hCb2FyZCc7XHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2ZpbGUnO1xyXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJ0JztcclxuaW1wb3J0IHsgRmF2b3VyaXRlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvRmF2b3VyaXRlcyc7XHJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZXR0aW5ncyc7XHJcbmltcG9ydCB7IFRvcEJhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVG9wQmFyL1RvcEJhcic7XHJcblxyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gICAgY29uc3QgeyBhY3RpdmVUYWIsIGlzU2lkZU1lbnUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2lkZU1lbnUpO1xyXG5cclxuICAgIGNvbnN0IGdldEFjdGl2ZVRhYkVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3RpdmVUYWIpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8RGFzaEJvYXJkIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPENhcnQvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8RmF2b3VyaXRlcy8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdzLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8SG9tZUNvbnRlbnQgLz47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGgtZnVsbCAgdy1mdWxsIGdhcC14LTUnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1NpZGVNZW51ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzU2lkZU1lbnUgPyBcInctMS82XCIgOlwidy0yMFwiIH0gYmctZ3JheS04MDAgaC1mdWxsIHNoYWRvdy1tZCBlYXNlLWluLW91dCB0cmFuc2l0aW9uICBkdXJhdGlvbi01MDAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lkZU1lbnUgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0ndy0yMCBiZy1ncmF5LTgwMCBoLWZ1bGwgc2hhZG93LW1kIGVhc2UtaW4tb3V0ICAgZHVyYXRpb24tMTAwICc+PFNpZGVCYXIgLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNTaWRlTWVudSA/IFwidy01LzZcIiA6XCJ3LWZ1bGxcIiB9IGgtZnVsbGB9PlxyXG4gICAgICAgICAgICAgICAgPFRvcEJhci8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZ3JpZCBoLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGFjZS1zZWxmLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0QWN0aXZlVGFiRWxlbWVudCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJuYW1lcyI6WyJTaWRlTWVudSIsIkhlYWQiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiUHJvdmlkZXIiLCJzdG9yZSIsIkhvbWVDb250ZW50IiwiU2lkZUJhciIsIkRhc2hCb2FyZCIsIlByb2ZpbGUiLCJDYXJ0IiwiRmF2b3VyaXRlcyIsIlNldHRpbmdzIiwiVG9wQmFyIiwiRGFzaGJvYXJkIiwic3RhdGUiLCJzaWRlTWVudSIsImFjdGl2ZVRhYiIsImlzU2lkZU1lbnUiLCJnZXRBY3RpdmVUYWJFbGVtZW50IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});