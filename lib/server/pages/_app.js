"use strict";

(() => {
  var exports = {};
  exports.id = 888;
  exports.ids = [888];
  exports.modules = {

    /***/807:
    /***/(__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      /* harmony export */__webpack_require__.d(__webpack_exports__, {
        /* harmony export */"_": () => /* binding */Context,
        /* harmony export */"H": () => /* binding */ContextProvider
        /* harmony export */ });
      /* harmony import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
      /* harmony import */var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
      /* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);

      const Context = /*#__PURE__*/(0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
      const ContextProvider = props => {
        const {
          0: username,
          1: setUsername
        } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
        const {
          0: secret,
          1: setSecret
        } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
        const value = {
          username,
          setUsername,
          secret,
          setSecret
        };
        return (/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Context.Provider, {
            value: value,
            children: props.children
          })
        );
      };

      /***/
    },

    /***/672:
    /***/(__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */__webpack_require__.d(__webpack_exports__, {
        /* harmony export */"default": () => /* binding */App
        /* harmony export */ });
      /* harmony import */var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(807);
      /* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
      /* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }keys.push.apply(keys, symbols);
        }return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }return obj;
      }

      function App({
        Component,
        pageProps
      }) {
        return (/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_context__WEBPACK_IMPORTED_MODULE_0__ /* .ContextProvider */.H, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Component, _objectSpread({}, pageProps))
          })
        );
      }

      /***/
    },

    /***/297:
    /***/module => {

      module.exports = require("react");

      /***/
    },

    /***/282:
    /***/module => {

      module.exports = require("react/jsx-runtime");

      /***/
    }

  };
  ;

  // load runtime
  var __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
  var __webpack_exports__ = __webpack_exec__(672);
  module.exports = __webpack_exports__;
})();