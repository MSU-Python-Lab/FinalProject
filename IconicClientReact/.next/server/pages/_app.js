/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./core/reducers/authReducer.ts":
/*!**************************************!*\
  !*** ./core/reducers/authReducer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthReducer\": () => (/* binding */ AuthReducer)\n/* harmony export */ });\n/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/auth */ \"./types/auth.ts\");\n\nconst initialState = {\n    token: {\n        token: null\n    },\n    loading: false,\n    error: null\n};\nconst AuthReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case _types_auth__WEBPACK_IMPORTED_MODULE_0__.TokenActionTypes.FETCH_TOKEN:\n            return {\n                loading: true,\n                error: null,\n                token: {\n                    token: null\n                }\n            };\n        case _types_auth__WEBPACK_IMPORTED_MODULE_0__.TokenActionTypes.FETCH_TOKEN_SUCCESS:\n            return {\n                loading: false,\n                error: null,\n                token: action.payload\n            };\n        case _types_auth__WEBPACK_IMPORTED_MODULE_0__.TokenActionTypes.FETCH_TOKEN_ERROR:\n            return {\n                loading: false,\n                error: action.payload,\n                token: {\n                    token: null\n                }\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL3JlZHVjZXJzL2F1dGhSZWR1Y2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJFO0FBRTNFLE1BQU1DLFlBQVksR0FBZTtJQUM3QkMsS0FBSyxFQUFFO1FBQUNBLEtBQUssRUFBRSxJQUFJO0tBQUM7SUFDcEJDLE9BQU8sRUFBRSxLQUFLO0lBQ2RDLEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFFTSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHTCxZQUFZLEVBQUVNLE1BQW1CLEdBQWlCO0lBQ2xGLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNmLEtBQUtSLHFFQUE0QjtZQUM3QixPQUFPO2dCQUFDRyxPQUFPLEVBQUUsSUFBSTtnQkFBRUMsS0FBSyxFQUFFLElBQUk7Z0JBQUVGLEtBQUssRUFBRTtvQkFBQ0EsS0FBSyxFQUFFLElBQUk7aUJBQUM7YUFBQztRQUM3RCxLQUFLRiw2RUFBb0M7WUFDckMsT0FBTztnQkFBQ0csT0FBTyxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxJQUFJO2dCQUFFRixLQUFLLEVBQUVLLE1BQU0sQ0FBQ0ksT0FBTzthQUFDO1FBQy9ELEtBQUtYLDJFQUFrQztZQUNuQyxPQUFPO2dCQUFDRyxPQUFPLEVBQUUsS0FBSztnQkFBRUMsS0FBSyxFQUFFRyxNQUFNLENBQUNJLE9BQU87Z0JBQUVULEtBQUssRUFBRTtvQkFBQ0EsS0FBSyxFQUFFLElBQUk7aUJBQUM7YUFBQztRQUN4RTtZQUNJLE9BQU9JLEtBQUs7S0FDbkI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvcmUvcmVkdWNlcnMvYXV0aFJlZHVjZXIudHM/ZTZlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Rva2VuQWN0aW9uLCBUb2tlbkFjdGlvblR5cGVzLCBUb2tlblN0YXRlfSBmcm9tIFwiLi4vLi4vdHlwZXMvYXV0aFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBUb2tlblN0YXRlID0ge1xyXG4gICAgdG9rZW46IHt0b2tlbjogbnVsbH0sXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGVycm9yOiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBUb2tlbkFjdGlvbik6IFRva2VuU3RhdGUgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVG9rZW5BY3Rpb25UeXBlcy5GRVRDSF9UT0tFTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtsb2FkaW5nOiB0cnVlLCBlcnJvcjogbnVsbCwgdG9rZW46IHt0b2tlbjogbnVsbH19XHJcbiAgICAgICAgY2FzZSBUb2tlbkFjdGlvblR5cGVzLkZFVENIX1RPS0VOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7bG9hZGluZzogZmFsc2UsIGVycm9yOiBudWxsLCB0b2tlbjogYWN0aW9uLnBheWxvYWR9XHJcbiAgICAgICAgY2FzZSBUb2tlbkFjdGlvblR5cGVzLkZFVENIX1RPS0VOX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge2xvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQsIHRva2VuOiB7dG9rZW46IG51bGx9fVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlRva2VuQWN0aW9uVHlwZXMiLCJpbml0aWFsU3RhdGUiLCJ0b2tlbiIsImxvYWRpbmciLCJlcnJvciIsIkF1dGhSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiRkVUQ0hfVE9LRU4iLCJGRVRDSF9UT0tFTl9TVUNDRVNTIiwicGF5bG9hZCIsIkZFVENIX1RPS0VOX0VSUk9SIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./core/reducers/authReducer.ts\n");

/***/ }),

/***/ "./core/reducers/index.ts":
/*!********************************!*\
  !*** ./core/reducers/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rootReducer\": () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ \"./core/reducers/authReducer.ts\");\n/* harmony import */ var _regReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regReducer */ \"./core/reducers/regReducer.ts\");\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    auth: _authReducer__WEBPACK_IMPORTED_MODULE_1__.AuthReducer,\n    reg: _regReducer__WEBPACK_IMPORTED_MODULE_2__.RegReducer\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL3JlZHVjZXJzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQ0c7QUFDRDtBQUdqQyxNQUFNRyxXQUFXLEdBQUdILHNEQUFlLENBQUM7SUFDdkNJLElBQUksRUFBRUgscURBQVc7SUFDakJJLEdBQUcsRUFBQ0gsbURBQVU7Q0FDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvcmUvcmVkdWNlcnMvaW5kZXgudHM/YTg1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7QXV0aFJlZHVjZXJ9IGZyb20gXCIuL2F1dGhSZWR1Y2VyXCJcclxuaW1wb3J0IHtSZWdSZWR1Y2VyfSBmcm9tIFwiLi9yZWdSZWR1Y2VyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGF1dGg6IEF1dGhSZWR1Y2VyLFxyXG4gICAgcmVnOlJlZ1JlZHVjZXJcclxufSlcclxuXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJBdXRoUmVkdWNlciIsIlJlZ1JlZHVjZXIiLCJyb290UmVkdWNlciIsImF1dGgiLCJyZWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./core/reducers/index.ts\n");

/***/ }),

/***/ "./core/reducers/regReducer.ts":
/*!*************************************!*\
  !*** ./core/reducers/regReducer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegReducer\": () => (/* binding */ RegReducer)\n/* harmony export */ });\n/* harmony import */ var _types_reg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/reg */ \"./types/reg.ts\");\n\nconst initialState = {\n    preuser: {\n        preuser: {\n            success: null,\n            data: null\n        }\n    },\n    loading: false,\n    error: null\n};\nconst RegReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case _types_reg__WEBPACK_IMPORTED_MODULE_0__.RegActionTypes.CREATE_REG:\n            return {\n                loading: true,\n                error: null,\n                preuser: {\n                    preuser: {\n                        success: false,\n                        data: null\n                    }\n                }\n            };\n        case _types_reg__WEBPACK_IMPORTED_MODULE_0__.RegActionTypes.CREATE_REG_SUCCESS:\n            return {\n                loading: false,\n                error: null,\n                preuser: action.payload\n            };\n        case _types_reg__WEBPACK_IMPORTED_MODULE_0__.RegActionTypes.CREATE_REG_ERROR:\n            return {\n                loading: false,\n                error: action.payload,\n                preuser: {\n                    preuser: {\n                        success: false,\n                        data: null\n                    }\n                }\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL3JlZHVjZXJzL3JlZ1JlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0U7QUFHcEUsTUFBTUMsWUFBWSxHQUFhO0lBQzNCQyxPQUFPLEVBQUU7UUFBQ0EsT0FBTyxFQUFFO1lBQUNDLE9BQU8sRUFBRSxJQUFJO1lBQUVDLElBQUksRUFBRSxJQUFJO1NBQUM7S0FBQztJQUMvQ0MsT0FBTyxFQUFFLEtBQUs7SUFDZEMsS0FBSyxFQUFFLElBQUk7Q0FDZDtBQUVNLE1BQU1DLFVBQVUsR0FBRyxDQUFDQyxLQUFLLEdBQUdQLFlBQVksRUFBRVEsTUFBaUIsR0FBZTtJQUM3RSxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDZixLQUFLVixpRUFBeUI7WUFDMUIsT0FBTztnQkFBQ0ssT0FBTyxFQUFFLElBQUk7Z0JBQUVDLEtBQUssRUFBRSxJQUFJO2dCQUFFSixPQUFPLEVBQUU7b0JBQUNBLE9BQU8sRUFBRTt3QkFBQ0MsT0FBTyxFQUFFLEtBQUs7d0JBQUVDLElBQUksRUFBRSxJQUFJO3FCQUFDO2lCQUFDO2FBQUM7UUFDekYsS0FBS0oseUVBQWlDO1lBQ2xDLE9BQU87Z0JBQUNLLE9BQU8sRUFBRSxLQUFLO2dCQUFFQyxLQUFLLEVBQUUsSUFBSTtnQkFBRUosT0FBTyxFQUFFTyxNQUFNLENBQUNJLE9BQU87YUFBRTtRQUNsRSxLQUFLYix1RUFBK0I7WUFDaEMsT0FBTztnQkFBQ0ssT0FBTyxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRUcsTUFBTSxDQUFDSSxPQUFPO2dCQUFFWCxPQUFPLEVBQUU7b0JBQUNBLE9BQU8sRUFBRTt3QkFBQ0MsT0FBTyxFQUFFLEtBQUs7d0JBQUVDLElBQUksRUFBRSxJQUFJO3FCQUFDO2lCQUFDO2FBQUM7UUFDcEc7WUFDSSxPQUFPSSxLQUFLO0tBQ25CO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL3JlZHVjZXJzL3JlZ1JlZHVjZXIudHM/Mzk5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlZ1N0YXRlLCBSZWdBY3Rpb25UeXBlcywgUmVnQWN0aW9ufSBmcm9tIFwiLi4vLi4vdHlwZXMvcmVnXCI7XHJcblxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdTdGF0ZSA9IHtcclxuICAgIHByZXVzZXI6IHtwcmV1c2VyOiB7c3VjY2VzczogbnVsbCwgZGF0YTogbnVsbH19LFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUmVnUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSZWdBY3Rpb24pOiBSZWdTdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBSZWdBY3Rpb25UeXBlcy5DUkVBVEVfUkVHOlxyXG4gICAgICAgICAgICByZXR1cm4ge2xvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsLCBwcmV1c2VyOiB7cHJldXNlcjoge3N1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsfX19XHJcbiAgICAgICAgY2FzZSBSZWdBY3Rpb25UeXBlcy5DUkVBVEVfUkVHX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7bG9hZGluZzogZmFsc2UsIGVycm9yOiBudWxsLCBwcmV1c2VyOiBhY3Rpb24ucGF5bG9hZCx9XHJcbiAgICAgICAgY2FzZSBSZWdBY3Rpb25UeXBlcy5DUkVBVEVfUkVHX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge2xvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQsIHByZXVzZXI6IHtwcmV1c2VyOiB7c3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGx9fX1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJSZWdBY3Rpb25UeXBlcyIsImluaXRpYWxTdGF0ZSIsInByZXVzZXIiLCJzdWNjZXNzIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIlJlZ1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDUkVBVEVfUkVHIiwiQ1JFQVRFX1JFR19TVUNDRVNTIiwicGF5bG9hZCIsIkNSRUFURV9SRUdfRVJST1IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./core/reducers/regReducer.ts\n");

/***/ }),

/***/ "./core/store.js":
/*!***********************!*\
  !*** ./core/store.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeStore\": () => (/* binding */ initializeStore),\n/* harmony export */   \"useStore\": () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./core/reducers/index.ts\");\n\n\n\n\n\nlet store;\nfunction initStore(initialState) {\n    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_4__.rootReducer, initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_3___default()))));\n}\nconst initializeStore = (preloadedState)=>{\n    let _store = store ?? initStore(preloadedState);\n    // After navigating to a page with an initial Redux state, merge that state\n    // with the current state in the store, and create a new store\n    if (preloadedState && store) {\n        _store = initStore({\n            ...store.getState(),\n            ...preloadedState\n        });\n        // Reset the current store\n        store = undefined;\n    }\n    // For SSG and SSR always create a new store\n    if (true) return _store;\n    // Create the store once in the client\n    if (!store) store = _store;\n    return _store;\n};\nfunction useStore(initialState) {\n    const store1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeStore(initialState)\n    , [\n        initialState\n    ]);\n    return store1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ3FCO0FBQ1U7QUFDckI7QUFDSDtBQUV0QyxJQUFJTSxLQUFLO0FBRVQsU0FBU0MsU0FBUyxDQUFDQyxZQUFZLEVBQUU7SUFDN0IsT0FBT1Asa0RBQVcsQ0FDZEksa0RBQVcsRUFDWEcsWUFBWSxFQUNaTCw2RUFBbUIsQ0FBQ0Qsc0RBQWUsQ0FBQ0Usb0RBQWUsQ0FBQyxDQUFDLENBQ3hEO0NBQ0o7QUFFTSxNQUFNSyxlQUFlLEdBQUcsQ0FBQ0MsY0FBYyxHQUFLO0lBQy9DLElBQUlDLE1BQU0sR0FBR0wsS0FBSyxJQUFJQyxTQUFTLENBQUNHLGNBQWMsQ0FBQztJQUUvQywyRUFBMkU7SUFDM0UsOERBQThEO0lBQzlELElBQUlBLGNBQWMsSUFBSUosS0FBSyxFQUFFO1FBQ3pCSyxNQUFNLEdBQUdKLFNBQVMsQ0FBQztZQUNmLEdBQUdELEtBQUssQ0FBQ00sUUFBUSxFQUFFO1lBQ25CLEdBQUdGLGNBQWM7U0FDcEIsQ0FBQztRQUNGLDBCQUEwQjtRQUMxQkosS0FBSyxHQUFHTyxTQUFTO0tBQ3BCO0lBRUQsNENBQTRDO0lBQzVDLElBQUksSUFBNkIsRUFBRSxPQUFPRixNQUFNO0lBQ2hELHNDQUFzQztJQUN0QyxJQUFJLENBQUNMLEtBQUssRUFBRUEsS0FBSyxHQUFHSyxNQUFNO0lBRTFCLE9BQU9BLE1BQU07Q0FDaEI7QUFFTSxTQUFTRyxRQUFRLENBQUNOLFlBQVksRUFBRTtJQUNuQyxNQUFNRixNQUFLLEdBQUdOLDhDQUFPLENBQUMsSUFBTVMsZUFBZSxDQUFDRCxZQUFZLENBQUM7SUFBQSxFQUFFO1FBQUNBLFlBQVk7S0FBQyxDQUFDO0lBQzFFLE9BQU9GLE1BQUs7Q0FDZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvcmUvc3RvcmUuanM/YjE4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCB7cm9vdFJlZHVjZXJ9IGZyb20gJy4vcmVkdWNlcnMnXHJcblxyXG5sZXQgc3RvcmVcclxuXHJcbmZ1bmN0aW9uIGluaXRTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgICAgICByb290UmVkdWNlcixcclxuICAgICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG4gICAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcbiAgICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAgIC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgICAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xyXG4gICAgICAgICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcbiAgICAgICAgc3RvcmUgPSB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXHJcbiAgICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gICAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbiAgICByZXR1cm4gX3N0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICAgIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbiAgICByZXR1cm4gc3RvcmVcclxufSJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwidGh1bmtNaWRkbGV3YXJlIiwicm9vdFJlZHVjZXIiLCJzdG9yZSIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSIsImluaXRpYWxpemVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./core/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_regpage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/regpage.css */ \"./styles/regpage.css\");\n/* harmony import */ var _styles_regpage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_regpage_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ModalWindow_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ModalWindow/modal.css */ \"./components/ModalWindow/modal.css\");\n/* harmony import */ var _components_ModalWindow_modal_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_ModalWindow_modal_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_forreg_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/forreg.css */ \"./styles/forreg.css\");\n/* harmony import */ var _styles_forreg_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_forreg_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/store */ \"./core/store.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n//import '../styles/stylesMain.css'\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const store = (0,_core_store__WEBPACK_IMPORTED_MODULE_6__.useStore)(pageProps.initialReduxState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ChakraProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\\\u0410\\u043D\\u044E\\u0442\\u0430\\\\WebstormProjects\\\\FinalProject\\\\IconicClientReact\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\\\u0410\\u043D\\u044E\\u0442\\u0430\\\\WebstormProjects\\\\FinalProject\\\\IconicClientReact\\\\pages\\\\_app.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\u0410\\u043D\\u044E\\u0442\\u0430\\\\WebstormProjects\\\\FinalProject\\\\IconicClientReact\\\\pages\\\\_app.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUM5QixtQ0FBbUM7QUFDTDtBQUNjO0FBQ2Y7QUFDUztBQUNFO0FBQ1M7QUFHbEMsU0FBU0csS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEQsTUFBTUMsS0FBSyxHQUFHTCxxREFBUSxDQUFDSSxTQUFTLENBQUNFLGlCQUFpQixDQUFDO0lBRW5ELHFCQUNJLDhEQUFDUCxpREFBUTtRQUFDTSxLQUFLLEVBQUVBLEtBQUs7a0JBQ2xCLDRFQUFDSiw0REFBYztzQkFDWCw0RUFBQ0UsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ2Y7Ozs7O1lBQ1YsQ0FDZDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG4vL2ltcG9ydCAnLi4vc3R5bGVzL3N0eWxlc01haW4uY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9yZWdwYWdlLmNzcydcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL01vZGFsV2luZG93L21vZGFsLmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvZm9ycmVnLmNzcydcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9jb3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKHBhZ2VQcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8Q2hha3JhUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJ1c2VTdG9yZSIsIkNoYWtyYVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./types/auth.ts":
/*!***********************!*\
  !*** ./types/auth.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TokenActionTypes\": () => (/* binding */ TokenActionTypes)\n/* harmony export */ });\nvar TokenActionTypes;\n(function(TokenActionTypes) {\n    TokenActionTypes[\"FETCH_TOKEN\"] = \"FETCH_TOKEN\";\n    TokenActionTypes[\"FETCH_TOKEN_SUCCESS\"] = \"FETCH_TOKEN_SUCCESS\";\n    TokenActionTypes[\"FETCH_TOKEN_ERROR\"] = \"FETCH_TOKEN_ERROR\";\n})(TokenActionTypes || (TokenActionTypes = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90eXBlcy9hdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQWFPLGdCQUlOO1VBSldBLGdCQUFnQjtJQUFoQkEsZ0JBQWdCLENBQ3hCQyxhQUFXLElBQVhBLGFBQVc7SUFESEQsZ0JBQWdCLENBRXhCRSxxQkFBbUIsSUFBbkJBLHFCQUFtQjtJQUZYRixnQkFBZ0IsQ0FHeEJHLG1CQUFpQixJQUFqQkEsbUJBQWlCO0dBSFRILGdCQUFnQixLQUFoQkEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdHlwZXMvYXV0aC50cz85MTlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JCYWNrZW5kfSBmcm9tIFwiLi9iYXNpY1R5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGgge1xyXG4gICAgdG9rZW46IHN0cmluZyB8IG51bGxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5TdGF0ZSB7XHJcbiAgICB0b2tlbjogQXV0aFxyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIGVycm9yOiBudWxsIHwgRXJyb3JCYWNrZW5kW10gfCBFcnJvckJhY2tlbmQgfCB1bmRlZmluZWQgfCBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRva2VuQWN0aW9uVHlwZXMge1xyXG4gICAgRkVUQ0hfVE9LRU4gPSAnRkVUQ0hfVE9LRU4nLFxyXG4gICAgRkVUQ0hfVE9LRU5fU1VDQ0VTUyA9ICdGRVRDSF9UT0tFTl9TVUNDRVNTJyxcclxuICAgIEZFVENIX1RPS0VOX0VSUk9SID0gJ0ZFVENIX1RPS0VOX0VSUk9SJyxcclxufVxyXG5cclxuaW50ZXJmYWNlIEZldGNoVG9rZW5BY3Rpb24ge1xyXG4gICAgdHlwZTogVG9rZW5BY3Rpb25UeXBlcy5GRVRDSF9UT0tFTjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEZldGNoVG9rZW5TdWNjZXNzQWN0aW9uIHtcclxuICAgIHR5cGU6IFRva2VuQWN0aW9uVHlwZXMuRkVUQ0hfVE9LRU5fU1VDQ0VTUztcclxuICAgIHBheWxvYWQ6IEF1dGhcclxufVxyXG5cclxuaW50ZXJmYWNlIEZldGNoVG9rZW5FcnJvckFjdGlvbiB7XHJcbiAgICB0eXBlOiBUb2tlbkFjdGlvblR5cGVzLkZFVENIX1RPS0VOX0VSUk9SO1xyXG4gICAgcGF5bG9hZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUb2tlbkFjdGlvbiA9IEZldGNoVG9rZW5BY3Rpb24gfCBGZXRjaFRva2VuU3VjY2Vzc0FjdGlvbiB8IEZldGNoVG9rZW5FcnJvckFjdGlvbiJdLCJuYW1lcyI6WyJUb2tlbkFjdGlvblR5cGVzIiwiRkVUQ0hfVE9LRU4iLCJGRVRDSF9UT0tFTl9TVUNDRVNTIiwiRkVUQ0hfVE9LRU5fRVJST1IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./types/auth.ts\n");

/***/ }),

/***/ "./types/reg.ts":
/*!**********************!*\
  !*** ./types/reg.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegActionTypes\": () => (/* binding */ RegActionTypes)\n/* harmony export */ });\nvar RegActionTypes;\n(function(RegActionTypes) {\n    RegActionTypes[\"CREATE_REG\"] = \"CREATE_REG\";\n    RegActionTypes[\"CREATE_REG_SUCCESS\"] = \"CREATE_REG_SUCCESS\";\n    RegActionTypes[\"CREATE_REG_ERROR\"] = \"CREATE_REG_ERROR\";\n})(RegActionTypes || (RegActionTypes = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90eXBlcy9yZWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBYU8sY0FJTjtVQUpXQSxjQUFjO0lBQWRBLGNBQWMsQ0FDdEJDLFlBQVUsSUFBVkEsWUFBVTtJQURGRCxjQUFjLENBRXRCRSxvQkFBa0IsSUFBbEJBLG9CQUFrQjtJQUZWRixjQUFjLENBR3RCRyxrQkFBZ0IsSUFBaEJBLGtCQUFnQjtHQUhSSCxjQUFjLEtBQWRBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90eXBlcy9yZWcudHM/OGU4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Vycm9yQmFja2VuZH0gZnJvbSBcIi4vYmFzaWNUeXBlc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWcge1xyXG4gICAgcHJldXNlcjogeyBzdWNjZXNzOiBhbnksIGRhdGE6IGFueSB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlZ1N0YXRlIHtcclxuICAgIHByZXVzZXI6IFJlZ1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIGVycm9yOiBudWxsIHwgRXJyb3JCYWNrZW5kW10gfCBFcnJvckJhY2tlbmQgfCB1bmRlZmluZWQgfCBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJlZ0FjdGlvblR5cGVzIHtcclxuICAgIENSRUFURV9SRUcgPSAnQ1JFQVRFX1JFRycsXHJcbiAgICBDUkVBVEVfUkVHX1NVQ0NFU1MgPSAnQ1JFQVRFX1JFR19TVUNDRVNTJyxcclxuICAgIENSRUFURV9SRUdfRVJST1IgPSAnQ1JFQVRFX1JFR19FUlJPUicsXHJcbn1cclxuXHJcbmludGVyZmFjZSBDcmVhdGVSZWdBY3Rpb24ge1xyXG4gICAgdHlwZTogUmVnQWN0aW9uVHlwZXMuQ1JFQVRFX1JFRztcclxufVxyXG5cclxuaW50ZXJmYWNlIENyZWF0ZVJlZ1N1Y2Nlc3NBY3Rpb24ge1xyXG4gICAgdHlwZTogUmVnQWN0aW9uVHlwZXMuQ1JFQVRFX1JFR19TVUNDRVNTO1xyXG4gICAgcGF5bG9hZDogUmVnO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRlUmVnRXJyb3JBY3Rpb24ge1xyXG4gICAgdHlwZTogUmVnQWN0aW9uVHlwZXMuQ1JFQVRFX1JFR19FUlJPUjtcclxuICAgIHBheWxvYWQ6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmVnQWN0aW9uID0gQ3JlYXRlUmVnQWN0aW9uIHwgQ3JlYXRlUmVnU3VjY2Vzc0FjdGlvbiB8IENyZWF0ZVJlZ0Vycm9yQWN0aW9uIl0sIm5hbWVzIjpbIlJlZ0FjdGlvblR5cGVzIiwiQ1JFQVRFX1JFRyIsIkNSRUFURV9SRUdfU1VDQ0VTUyIsIkNSRUFURV9SRUdfRVJST1IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./types/reg.ts\n");

/***/ }),

/***/ "./components/ModalWindow/modal.css":
/*!******************************************!*\
  !*** ./components/ModalWindow/modal.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/forreg.css":
/*!***************************!*\
  !*** ./styles/forreg.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/regpage.css":
/*!****************************!*\
  !*** ./styles/regpage.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();