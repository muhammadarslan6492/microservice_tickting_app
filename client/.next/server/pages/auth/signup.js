"use strict";
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
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authBaseUrl = \"http://localhost:4500\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:4500/api/users/signup\", {\n                email,\n                password\n            });\n            console.log(\"this is response\", res);\n        } catch (err) {\n            console.log(\"this is error\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"This is sign up page\"\n            }, void 0, false, {\n                fileName: \"/Users/muhammadarsalan/Documents/muhammadarslan/practice/microservice/microservice_tickting_app/client/pages/auth/signup.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"\",\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadarsalan/Documents/muhammadarslan/practice/microservice/microservice_tickting_app/client/pages/auth/signup.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        className: \"form-control\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadarsalan/Documents/muhammadarslan/practice/microservice/microservice_tickting_app/client/pages/auth/signup.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadarsalan/Documents/muhammadarslan/practice/microservice/microservice_tickting_app/client/pages/auth/signup.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadarsalan/Documents/muhammadarslan/practice/microservice/microservice_tickting_app/client/pages/auth/signup.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        type: \"password\",\n                        className: \"form-control\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadarsalan/Documents/muhammadarslan/practice/microservice/microservice_tickting_app/client/pages/auth/signup.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadarsalan/Documents/muhammadarslan/practice/microservice/microservice_tickting_app/client/pages/auth/signup.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/Users/muhammadarsalan/Documents/muhammadarslan/practice/microservice/microservice_tickting_app/client/pages/auth/signup.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadarsalan/Documents/muhammadarslan/practice/microservice/microservice_tickting_app/client/pages/auth/signup.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDUDtBQUUxQixNQUFNRSxXQUFXLEdBQUcsdUJBQXVCO0FBRTNDLGlFQUFlLElBQU07SUFDbkIsTUFBTSxLQUFDQyxLQUFLLE1BQUVDLFFBQVEsTUFBSUosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxLQUFDSyxRQUFRLE1BQUVDLFdBQVcsTUFBSU4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFNUMsTUFBTU8sUUFBUSxHQUFHLE9BQU9DLENBQUMsR0FBSztRQUM1QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJO1lBQ0YsTUFBTUMsR0FBRyxHQUFHLE1BQU1ULGlEQUFVLENBQUMsd0NBQXdDLEVBQUU7Z0JBQ3JFRSxLQUFLO2dCQUNMRSxRQUFRO2FBQ1QsQ0FBQztZQUNGTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRUgsR0FBRyxDQUFDLENBQUM7U0FDdEMsQ0FBQyxPQUFPSSxHQUFHLEVBQUU7WUFDWkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFQyxHQUFHLENBQUMsQ0FBQztTQUNuQztLQUNGO0lBQ0QscUJBQ0UsOERBQUNDLE1BQUk7UUFBQ1IsUUFBUSxFQUFFQSxRQUFROzswQkFDdEIsOERBQUNTLElBQUU7MEJBQUMsc0JBQW9COzs7Ozt5QkFBSzswQkFDN0IsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOztrQ0FDekIsOERBQUNDLE9BQUs7d0JBQUNELFNBQVMsRUFBQyxFQUFFO2tDQUFDLGVBQWE7Ozs7O2lDQUFRO2tDQUN6Qyw4REFBQ0UsT0FBSzt3QkFDSkMsS0FBSyxFQUFFbEIsS0FBSzt3QkFDWm1CLFFBQVEsRUFBRSxDQUFDZCxDQUFDLEdBQUtKLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDZSxNQUFNLENBQUNGLEtBQUssQ0FBQzt3QkFDekNILFNBQVMsRUFBQyxjQUFjOzs7OztpQ0FDeEI7Ozs7Ozt5QkFDRTswQkFDTiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7O2tDQUN6Qiw4REFBQ0MsT0FBSzt3QkFBQ0QsU0FBUyxFQUFDLEVBQUU7a0NBQUMsVUFBUTs7Ozs7aUNBQVE7a0NBQ3BDLDhEQUFDRSxPQUFLO3dCQUNKQyxLQUFLLEVBQUVoQixRQUFRO3dCQUNmaUIsUUFBUSxFQUFFLENBQUNkLENBQUMsR0FBS0YsV0FBVyxDQUFDRSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO3dCQUM1Q0csSUFBSSxFQUFDLFVBQVU7d0JBQ2ZOLFNBQVMsRUFBQyxjQUFjOzs7OztpQ0FDeEI7Ozs7Ozt5QkFDRTswQkFDTiw4REFBQ08sUUFBTTtnQkFBQ1AsU0FBUyxFQUFDLGlCQUFpQjswQkFBQyxTQUFPOzs7Ozt5QkFBUzs7Ozs7O2lCQUMvQyxDQUNQO0NBQ0gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2F1dGgvc2lnbnVwLmpzPzU2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYXV0aEJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDUwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDUwMC9hcGkvdXNlcnMvc2lnbnVwXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgcmVzcG9uc2VcIiwgcmVzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBlcnJvclwiLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgPGgxPlRoaXMgaXMgc2lnbiB1cCBwYWdlPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nJz5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9Jyc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknPlNpZ24gVXA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJhdXRoQmFzZVVybCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImVyciIsImZvcm0iLCJoMSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.js"));
module.exports = __webpack_exports__;

})();