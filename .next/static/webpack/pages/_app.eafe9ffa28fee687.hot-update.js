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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SideMenu_SideMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideMenu/SideMenu */ \"./components/SideMenu/SideMenu.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index */ \"./store/index.js\");\n/* harmony import */ var _components_HomeContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/HomeContent */ \"./components/HomeContent/index.js\");\n/* harmony import */ var _components_SideMenu_SideBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SideMenu/SideBar */ \"./components/SideMenu/SideBar.js\");\n/* harmony import */ var _components_DashBoard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DashBoard */ \"./components/DashBoard/index.js\");\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Profile */ \"./components/Profile/index.js\");\n/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Cart */ \"./components/Cart/index.js\");\n/* harmony import */ var _components_Favourites__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Favourites */ \"./components/Favourites/index.js\");\n/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Settings */ \"./components/Settings/index.js\");\n/* harmony import */ var _components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/TopBar/TopBar */ \"./components/TopBar/TopBar.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    var _this = this;\n    _s();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.sideMenu;\n    }), activeTab = ref.activeTab, isSideMenu = ref.isSideMenu;\n    var getActiveTabElement = function() {\n        switch(activeTab){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashBoard__WEBPACK_IMPORTED_MODULE_8__.DashBoard, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, _this);\n                break;\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile__WEBPACK_IMPORTED_MODULE_9__.Profile, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, _this);\n                break;\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cart__WEBPACK_IMPORTED_MODULE_10__.Cart, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 19\n                }, _this);\n                break;\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Favourites__WEBPACK_IMPORTED_MODULE_11__.Favourites, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 19\n                }, _this);\n                break;\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Settings__WEBPACK_IMPORTED_MODULE_12__.Settings, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 21\n                }, _this);\n                break;\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeContent__WEBPACK_IMPORTED_MODULE_6__.HomeContent, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 24\n                }, _this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        store: _store_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex h-full w-full gap-x-5\",\n                children: [\n                    isSideMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isSideMenu ? \"w-1/6\" : \"w-20\", \" bg-gray-800 min-h-screen shadow-md ease-in-out transition  duration-500 \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideMenu_SideMenu__WEBPACK_IMPORTED_MODULE_2__.SideMenu, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-20 bg-gray-800 min-h-screen shadow-md ease-in-out duration-100 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideMenu_SideBar__WEBPACK_IMPORTED_MODULE_7__.SideBar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 112\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 27\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isSideMenu ? \"w-5/6\" : \"w-full\", \" h-full\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_13__.TopBar, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                                lineNumber: 60,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full grid h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"place-self-center\",\n                                    children: getActiveTabElement()\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, this)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kalai Shelton\\\\myNextApp\\\\sample-app1\\\\sample-app1\\\\pages\\\\index.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"ZlEQfPpc9NUqO2/Wvv6u4iePUBA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUMwQjtBQUM5QjtBQUNvQztBQUM5QjtBQUNrQjtBQUNJO0FBQ0w7QUFDSjtBQUNOO0FBQ1k7QUFDSjtBQUNHOztBQUdyRCxTQUFTYyxTQUFTLEdBQUc7OztJQUNqQixJQUFrQ1osR0FBc0MsR0FBdENBLHdEQUFXLENBQUMsU0FBQ2EsS0FBSztlQUFLQSxLQUFLLENBQUNDLFFBQVE7S0FBQSxDQUFDLEVBQWhFQyxTQUFTLEdBQWlCZixHQUFzQyxDQUFoRWUsU0FBUyxFQUFFQyxVQUFVLEdBQUtoQixHQUFzQyxDQUFyRGdCLFVBQVU7SUFFN0IsSUFBTUMsbUJBQW1CLEdBQUcsV0FBTTtRQUM5QixPQUFRRixTQUFTO1lBQ2IsS0FBSyxDQUFDO2dCQUNGLHFCQUNJLDhEQUFDVCw0REFBUzs7Ozt5QkFBRyxDQUNmO2dCQUNGLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YscUJBQ0ksOERBQUNDLHdEQUFPOzs7O3lCQUFHLENBQ2I7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixxQkFDRSw4REFBQ0MsbURBQUk7Ozs7eUJBQUUsQ0FDUDtnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLHFCQUNFLDhEQUFDQywrREFBVTs7Ozt5QkFBRSxDQUNiO2dCQUNGLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YscUJBQ0ksOERBQUNDLDJEQUFROzs7O3lCQUFFLENBQ2I7Z0JBQ0YsTUFBTTtZQUNWO2dCQUNJLHFCQUFPLDhEQUFDTixnRUFBVzs7Ozt5QkFBRyxDQUFDO1NBQzlCO0tBQ0o7SUFDRCxxQkFDSSw4REFBQ0YsaURBQVE7UUFBQ0MsS0FBSyxFQUFFQSxvREFBSztrQkFDbEI7c0JBRUksNEVBQUNlLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw0QkFBNEI7O29CQUN0Q0gsVUFBVSxpQkFDUCw4REFBQ0UsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFLEVBQUMsQ0FBZ0MsTUFBeUUsQ0FBdkdILFVBQVUsR0FBRyxPQUFPLEdBQUUsTUFBTSxFQUFFLDJFQUF5RSxDQUFDO2tDQUN2SCw0RUFBQ2xCLG1FQUFROzs7O2dDQUFHOzs7Ozs0QkFBTSxpQkFDcEIsOERBQUNvQixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsbUVBQXFFO2tDQUFDLDRFQUFDZCxpRUFBTzs7OztnQ0FBRzs7Ozs7NEJBQU07a0NBQ3BHLDhEQUFDYSxLQUFHO3dCQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUFrQyxNQUFPLENBQXZDSCxVQUFVLEdBQUcsT0FBTyxHQUFFLFFBQVEsRUFBRSxTQUFPLENBQUM7OzBDQUN2RSw4REFBQ0wsOERBQU07Ozs7b0NBQUU7MENBRUwsOERBQUNPLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxvQkFBb0I7MENBRS9CLDRFQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsbUJBQW1COzhDQUM3QkYsbUJBQW1CLEVBQUU7Ozs7O3dDQUNwQjs7Ozs7b0NBQ0E7Ozs7Ozs0QkFDSjs7Ozs7O29CQUlKO3lCQUNQOzs7OztZQUNJLENBQ2I7Q0FDTDtHQTVEUUwsU0FBUzs7UUFDb0JaLG9EQUFXOzs7QUFEeENZLEtBQUFBLFNBQVM7QUE2RGxCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuaW1wb3J0IHsgU2lkZU1lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL1NpZGVNZW51L1NpZGVNZW51JztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2gsIFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3RvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgSG9tZUNvbnRlbnQgfSBmcm9tICcvY29tcG9uZW50cy9Ib21lQ29udGVudCdcclxuaW1wb3J0IHsgU2lkZUJhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZU1lbnUvU2lkZUJhcic7XHJcbmltcG9ydCB7IERhc2hCb2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvRGFzaEJvYXJkJztcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZSc7XHJcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcnQnO1xyXG5pbXBvcnQgeyBGYXZvdXJpdGVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9GYXZvdXJpdGVzJztcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi9jb21wb25lbnRzL1NldHRpbmdzJztcclxuaW1wb3J0IHsgVG9wQmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ub3BCYXIvVG9wQmFyJztcclxuXHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZVRhYiwgaXNTaWRlTWVudSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaWRlTWVudSk7XHJcblxyXG4gICAgY29uc3QgZ2V0QWN0aXZlVGFiRWxlbWVudCA9ICgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGl2ZVRhYikge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXNoQm9hcmQgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FydC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGYXZvdXJpdGVzLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ3MvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxIb21lQ29udGVudCAvPjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBoLWZ1bGwgdy1mdWxsIGdhcC14LTUnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1NpZGVNZW51ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzU2lkZU1lbnUgPyBcInctMS82XCIgOlwidy0yMFwiIH0gYmctZ3JheS04MDAgbWluLWgtc2NyZWVuIHNoYWRvdy1tZCBlYXNlLWluLW91dCB0cmFuc2l0aW9uICBkdXJhdGlvbi01MDAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lkZU1lbnUgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0ndy0yMCBiZy1ncmF5LTgwMCBtaW4taC1zY3JlZW4gc2hhZG93LW1kIGVhc2UtaW4tb3V0ICAgZHVyYXRpb24tMTAwICc+PFNpZGVCYXIgLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNTaWRlTWVudSA/IFwidy01LzZcIiA6XCJ3LWZ1bGxcIiB9IGgtZnVsbGB9PlxyXG4gICAgICAgICAgICAgICAgPFRvcEJhci8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZ3JpZCBoLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGFjZS1zZWxmLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0QWN0aXZlVGFiRWxlbWVudCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJuYW1lcyI6WyJTaWRlTWVudSIsIkhlYWQiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiUHJvdmlkZXIiLCJzdG9yZSIsIkhvbWVDb250ZW50IiwiU2lkZUJhciIsIkRhc2hCb2FyZCIsIlByb2ZpbGUiLCJDYXJ0IiwiRmF2b3VyaXRlcyIsIlNldHRpbmdzIiwiVG9wQmFyIiwiRGFzaGJvYXJkIiwic3RhdGUiLCJzaWRlTWVudSIsImFjdGl2ZVRhYiIsImlzU2lkZU1lbnUiLCJnZXRBY3RpdmVUYWJFbGVtZW50IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});