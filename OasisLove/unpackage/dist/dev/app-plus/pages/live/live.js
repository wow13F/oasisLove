"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!***************************************************************************!*\
  !*** C:/Users/LW/Desktop/OasisLove/OasisLove/main.js?{"type":"appStyle"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************************************************************!*\
  !*** C:/Users/LW/Desktop/OasisLove/OasisLove/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/LW/Desktop/OasisLove/OasisLove/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/*!**************************************************************************************!*\
  !*** C:/Users/LW/Desktop/OasisLove/OasisLove/main.js?{"page":"pages%2Flive%2Flive"} ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/live/live.nvue?mpType=page */ 14);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/live/live'\n        _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsUUFBUSx5RUFBRztBQUNYLGdCQUFnQix5RUFBRyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvbGl2ZS9saXZlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvbGl2ZS9saXZlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!********************************************************************************!*\
  !*** C:/Users/LW/Desktop/OasisLove/OasisLove/pages/live/live.nvue?mpType=page ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live.nvue?vue&type=template&id=3098d4a8&mpType=page */ 15);\n/* harmony import */ var _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live.nvue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./live.nvue?vue&type=style&index=0&lang=css&mpType=page */ 22).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./live.nvue?vue&type=style&index=0&lang=css&mpType=page */ 22).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"248582ec\",\n  false,\n  _live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/live/live.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUF5RDtBQUM3RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQXlEO0FBQ2xIOztBQUVBOztBQUVBO0FBQ3FOO0FBQ3JOLGdCQUFnQix1TkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbGl2ZS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwOThkNGE4Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9saXZlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGl2ZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9saXZlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9saXZlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclguMy4yLjkuMjAyMTA5MjcuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMjQ4NTgyZWNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbGl2ZS9saXZlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**************************************************************************************************************!*\
  !*** C:/Users/LW/Desktop/OasisLove/OasisLove/pages/live/live.nvue?vue&type=template&id=3098d4a8&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live.nvue?vue&type=template&id=3098d4a8&mpType=page */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 16 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/LW/Desktop/OasisLove/OasisLove/pages/live/live.nvue?vue&type=template&id=3098d4a8&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        [
          _c("view", { staticClass: ["uni-padding-wrap", "uni-common-mt"] }, [
            _c(
              "view",
              [
                _c("u-video", {
                  style: {
                    width: _vm.windowWidth + "px",
                    height: _vm.windowHeight + "px"
                  },
                  attrs: {
                    id: "myVideo",
                    src: _vm.src,
                    controls: true,
                    autoplay: "true"
                  },
                  on: { error: _vm.videoErrorCallback }
                })
              ],
              1
            )
          ]),
          _c("live-pusher", {
            ref: "livePusher",
            staticClass: ["livePusher"],
            style: {
              width: _vm.windowWidthPUSH + "px",
              height: _vm.windowHeightPUSH + "px"
            },
            attrs: {
              id: "livePusher",
              url: _vm.url,
              mode: "SD",
              muted: true,
              enableCamera: true,
              autoFocus: true,
              beauty: 1,
              whiteness: "2",
              aspect: "9:16"
            },
            on: {
              statechange: _vm.statechange,
              netstatus: _vm.netstatus,
              error: _vm.error
            }
          }),
          _c(
            "view",
            { staticClass: ["bg"] },
            [
              _c("u-image", {
                staticClass: ["bg-top"],
                style: {
                  width: _vm.windowWidth + "px",
                  height: _vm.windowHeight + "px"
                },
                attrs: { src: "", mode: "" }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: ["top-title"],
              style: {
                width: _vm.windowWidth + "px",
                top: _vm.statusBarHeight + "px"
              }
            },
            [
              _c("u-image", {
                staticClass: ["close-img"],
                attrs: { src: "../../static/image/suoxiao.png" }
              }),
              _c(
                "u-text",
                {
                  staticClass: ["title"],
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(_vm.title))]
              )
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: ["user"],
              style: {
                width: _vm.windowWidth + "px",
                top: _vm.statusBarHeight + 84 + "px"
              }
            },
            [
              _c("u-image", {
                staticClass: ["user-img"],
                attrs: { src: "../../static/logo.png" }
              }),
              _c(
                "u-text",
                {
                  staticClass: ["user-name"],
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(_vm.duifangHuiLiuUrl))]
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["btns"], style: { width: _vm.windowWidth + "px" } },
            [
              _c(
                "view",
                {
                  staticClass: ["cancel"],
                  on: {
                    click: function($event) {
                      _vm.stop()
                    }
                  }
                },
                [
                  _c("u-image", {
                    staticClass: ["btn-img"],
                    attrs: { src: "../../static/image/guaduan.png" }
                  }),
                  _c(
                    "u-text",
                    {
                      staticClass: ["btn-text"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v("取消")]
                  )
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: ["yuyin"],
                  on: {
                    click: function($event) {
                      _vm.stopPreview()
                    }
                  }
                },
                [
                  _c("u-image", {
                    staticClass: ["btn-img"],
                    attrs: { src: "../../static/image/qhyy.png" }
                  }),
                  _c(
                    "u-text",
                    {
                      staticClass: ["btn-text"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v("切换到语音通话")]
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!********************************************************************************************************!*\
  !*** C:/Users/LW/Desktop/OasisLove/OasisLove/pages/live/live.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live.nvue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony import */ var _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThqQixDQUFnQixrbEJBQUcsRUFBQyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclguMy4yLjkuMjAyMTA5MjcuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFFOlxcXFzov4Xpm7fkuIvovb1cXFxcSGJ1aWxkZXJYXFxcXEhCdWlsZGVyWC4zLjIuOS4yMDIxMDkyNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclguMy4yLjkuMjAyMTA5MjcuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXZlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFzov4Xpm7fkuIvovb1cXFxcSGJ1aWxkZXJYXFxcXEhCdWlsZGVyWC4zLjIuOS4yMDIxMDkyNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUU6XFxcXOi/hembt+S4i+i9vVxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYLjMuMi45LjIwMjEwOTI3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFzov4Xpm7fkuIvovb1cXFxcSGJ1aWxkZXJYXFxcXEhCdWlsZGVyWC4zLjIuOS4yMDIxMDkyNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpdmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/LW/Desktop/OasisLove/OasisLove/pages/live/live.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../../store/index.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//需要引入store\nvar _default = { data: function data() {return { url: '', // 推流地址\n      src: '', // 拉流地址  \n      windowWidth: 0, // 设备宽度\n      windowHeight: 0, // 设备高度\n      windowWidthPUSH: 0, // 设备宽度\n      windowHeightPUSH: 0, // 设备高度\n      title: '等待对方接收邀请...', statusBarHeight: 0, //状态栏高度\n      userName: '哒哒哒' // 用户名\n    };}, onReady: function onReady() {var _this = this; // 注意：需要在onReady中 或 onLoad 延时\n    this.context = uni.createLivePusherContext(\"livePusher\", this);setTimeout(function () {_this.start();_this.join();}, 10);this.src = _index.default.state.duifangHuiLiuUrl; //uni.setStorage({ 'storage_key_AA': store.state.duifangHuiLiuUrl });\n    __f__(\"log\", this.src, \" at pages/live/live.nvue:95\");__f__(\"log\", _index.default.state.duifangHuiLiuUrl, \" at pages/live/live.nvue:96\");}, computed: { duifangHuiLiuUrl: function duifangHuiLiuUrl() {return _index.default.state.duifangHuiLiuUrl;} }, onLoad: function onLoad(option) {this.getSysteminfo();this.url = option.url;if (option.HuiLiuUrl) {this.src = option.HuiLiuUrl;__f__(\"log\", this.src, \" at pages/live/live.nvue:110\");this.userName = '哈哈哈';this.title = '通话中';this.windowWidthPUSH = this.windowWidthPUSH / 3;this.windowHeightPUSH = this.windowHeightPUSH / 6;} //console.log(this.url)\n  }, methods: { getSysteminfo: function getSysteminfo() {var _this2 = this;uni.getSystemInfo({ success: function success(res) {// console.log(res.model);\n          // console.log(res.pixelRatio);\n          _this2.windowWidth = res.windowWidth;_this2.windowHeight = res.windowHeight;_this2.windowWidthPUSH = res.windowWidth;_this2.windowHeightPUSH = res.windowHeight;_this2.statusBarHeight = res.statusBarHeight; // console.log(res.windowWires.windowHeightdth);\n          // console.log();\n          // console.log(res.language);\n          // console.log(res.version);\n          // console.log(res.platform);\n        } });}, statechange: function statechange(e) {//  console.log(\"statechange:\" + JSON.stringify(e));\n    }, netstatus: function netstatus(e) {__f__(\"log\", \"netstatus:\" + JSON.stringify(e), \" at pages/live/live.nvue:145\");}, error: function error(e) {__f__(\"log\", \"error:\" + JSON.stringify(e), \" at pages/live/live.nvue:148\");}, start: function start() {this.context.start({ success: function success(a) {//console.log(\"livePusher.start:\" + JSON.stringify(a));\n        } });}, close: function close() {this.context.close({ success: function success(a) {\n          __f__(\"log\", \"livePusher.close:\" + JSON.stringify(a), \" at pages/live/live.nvue:160\");\n        } });\n\n    },\n    snapshot: function snapshot() {\n      this.context.snapshot({\n        success: function success(e) {\n          __f__(\"log\", JSON.stringify(e), \" at pages/live/live.nvue:167\");\n        } });\n\n    },\n    resume: function resume() {\n      this.context.resume({\n        success: function success(a) {\n          __f__(\"log\", \"livePusher.resume:\" + JSON.stringify(a), \" at pages/live/live.nvue:174\");\n        } });\n\n    },\n    pause: function pause() {\n      this.context.pause({\n        success: function success(a) {\n          __f__(\"log\", \"livePusher.pause:\" + JSON.stringify(a), \" at pages/live/live.nvue:181\");\n        } });\n\n    },\n    stop: function stop() {\n      this.context.stop({\n        success: function success(a) {\n          // console.log(JSON.stringify(a));\n          uni.navigateBack({\n            delta: 1 });\n\n        } });\n\n    },\n    switchCamera: function switchCamera() {\n      this.context.switchCamera({\n        success: function success(a) {\n          __f__(\"log\", \"livePusher.switchCamera:\" + JSON.stringify(a), \" at pages/live/live.nvue:198\");\n        } });\n\n    },\n    startPreview: function startPreview() {\n      this.context.startPreview({\n        success: function success(a) {\n          __f__(\"log\", \"livePusher.startPreview:\" + JSON.stringify(a), \" at pages/live/live.nvue:205\");\n        } });\n\n    },\n    stopPreview: function stopPreview() {\n      this.context.stopPreview({\n        success: function success(a) {\n          __f__(\"log\", \"livePusher.stopPreview:\" + JSON.stringify(a), \" at pages/live/live.nvue:212\");\n        } });\n\n    },\n    join: function join() {\n\n      // this.socket.on('duifangTuiLiu', (data) =>{\n      // \tconsole.log('194行')\n      // \tconsole.log(data)\n\n      // } )\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbGl2ZS9saXZlLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVBLHlGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO2VBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxPQURBLEVBQ0E7QUFDQSxhQUZBLEVBRUE7QUFDQSxvQkFIQSxFQUdBO0FBQ0EscUJBSkEsRUFJQTtBQUNBLHdCQUxBLEVBS0E7QUFDQSx5QkFOQSxFQU1BO0FBQ0EsMEJBUEEsRUFRQSxrQkFSQSxFQVFBO0FBQ0EscUJBVEEsQ0FTQTtBQVRBLE1BV0EsQ0FiQSxFQWNBLE9BZEEscUJBY0EsbUJBQ0E7QUFDQSxtRUFDQSx3QkFDQSxjQUNBLGFBRUEsQ0FKQSxFQUlBLEVBSkEsRUFLQSxpREFSQSxDQVNBO0FBQ0EsMERBQ0EsbUZBRUEsQ0EzQkEsRUE0QkEsWUFDQSxnQkFEQSw4QkFDQSxDQUNBLDZDQUVBLENBSkEsRUE1QkEsRUFrQ0EsTUFsQ0Esa0JBa0NBLE1BbENBLEVBa0NBLENBQ0EscUJBQ0Esc0JBQ0EsdUJBQ0EsNEJBQ0EsdURBQ0Esc0JBQ0EsbUJBQ0EsZ0RBQ0Esa0RBQ0EsQ0FWQSxDQVdBO0FBR0EsR0FoREEsRUFrREEsV0FFQSxhQUZBLDJCQUVBLG1CQUNBLG9CQUNBLGdDQUNBO0FBQ0E7QUFDQSwrQ0FDQSx1Q0FDQSx5Q0FDQSwyQ0FDQSw2Q0FQQSxDQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWRBLElBZ0JBLENBbkJBLEVBb0JBLFdBcEJBLHVCQW9CQSxDQXBCQSxFQW9CQSxDQUNBO0FBQ0EsS0F0QkEsRUF1QkEsU0F2QkEscUJBdUJBLENBdkJBLEVBdUJBLENBQ0EsK0VBQ0EsQ0F6QkEsRUEwQkEsS0ExQkEsaUJBMEJBLENBMUJBLEVBMEJBLENBQ0EsMkVBQ0EsQ0E1QkEsRUE2QkEseUJBQ0EscUJBQ0EsOEJBQ0E7QUFDQSxTQUhBLElBS0EsQ0FuQ0EsRUFvQ0EseUJBQ0EscUJBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0EsS0ExQ0E7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBOztBQUtBLEtBakRBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQTs7QUFLQSxLQXhEQTtBQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0EsS0EvREE7QUFnRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBOztBQUdBLFNBTkE7O0FBUUEsS0F6RUE7QUEwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBOztBQUtBLEtBaEZBO0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQTs7QUFLQSxLQXZGQTtBQXdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0EsS0E5RkE7QUErRkEsUUEvRkEsa0JBK0ZBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQXZHQSxFQWxEQSxFIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktcGFkZGluZy13cmFwIHVuaS1jb21tb24tbXRcIiA+XHJcblx0XHQgICAgPHZpZXcgPlxyXG5cdFx0ICAgICAgICA8dmlkZW8gaWQ9XCJteVZpZGVvXCIgOnNyYz1cInNyY1wiXHJcblx0XHQgICAgICAgICAgICBAZXJyb3I9XCJ2aWRlb0Vycm9yQ2FsbGJhY2tcIiBcclxuXHRcdFx0XHRcdCAgY29udHJvbHMgYXV0b3BsYXk9XCJ0cnVlXCIgOnN0eWxlPVwie3dpZHRoOndpbmRvd1dpZHRoICsgJ3B4JyxoZWlnaHQ6d2luZG93SGVpZ2h0ICsgJ3B4J31cIj5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cdFx0ICAgIDwvdmlldz5cclxuXHRcdCAgIFxyXG5cdFx0PC92aWV3PiBcclxuXHRcdCBcbiAgICAgICAgPGxpdmUtcHVzaGVyIGlkPSdsaXZlUHVzaGVyJyByZWY9XCJsaXZlUHVzaGVyXCIgY2xhc3M9XCJsaXZlUHVzaGVyXCIgXHJcblx0XHQ6dXJsPVwidXJsXCJcbiAgICAgICAgbW9kZT1cIlNEXCIgOm11dGVkPVwidHJ1ZVwiIDplbmFibGUtY2FtZXJhPVwidHJ1ZVwiIDphdXRvLWZvY3VzPVwidHJ1ZVwiIDpiZWF1dHk9XCIxXCIgd2hpdGVuZXNzPVwiMlwiXG4gICAgICAgIGFzcGVjdD1cIjk6MTZcIiBAc3RhdGVjaGFuZ2U9XCJzdGF0ZWNoYW5nZVwiIEBuZXRzdGF0dXM9XCJuZXRzdGF0dXNcIiBAZXJyb3IgPSBcImVycm9yXCJcclxuXHRcdDpzdHlsZT1cInt3aWR0aDp3aW5kb3dXaWR0aFBVU0ggKyAncHgnLGhlaWdodDp3aW5kb3dIZWlnaHRQVVNIICsgJ3B4J31cIlxuICAgICAgICA+PC9saXZlLXB1c2hlcj5cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwiYmdcIiA+XHJcblx0XHRcdFxyXG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJiZy10b3BcIiBzcmM9XCJcIiBtb2RlPVwiXCI6c3R5bGU9XCJ7d2lkdGg6d2luZG93V2lkdGggKyAncHgnLGhlaWdodDp3aW5kb3dIZWlnaHQgKyAncHgnfVwiID48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcC10aXRsZVwiIDpzdHlsZT1cInt3aWR0aDp3aW5kb3dXaWR0aCArICdweCcsdG9wOnN0YXR1c0JhckhlaWdodCArICdweCd9XCI+XHJcblx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2Uvc3VveGlhby5wbmdcIiBjbGFzcz1cImNsb3NlLWltZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGVcIj57e3RpdGxlfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+IFxyXG5cdFx0XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXNlclwiIDpzdHlsZT1cInt3aWR0aDp3aW5kb3dXaWR0aCArICdweCcsdG9wOnN0YXR1c0JhckhlaWdodCArODQgKyAncHgnfVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVzZXItaW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2xvZ28ucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZXItbmFtZVwiPnt7ZHVpZmFuZ0h1aUxpdVVybH19PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ0bnNcIiA6c3R5bGU9XCJ7d2lkdGg6d2luZG93V2lkdGggKyAncHgnfVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FuY2VsXCIgQHRhcD1cInN0b3AoKVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYnRuLWltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZS9ndWFkdWFuLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJ0bi10ZXh0XCI+5Y+W5raIPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInl1eWluXCIgQHRhcD1cInN0b3BQcmV2aWV3KClcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImJ0bi1pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2UvcWh5eS5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJidG4tdGV4dFwiPuWIh+aNouWIsOivremfs+mAmuivnTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxuICAgICAgIDwhLS0gPGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cInN0YXJ0XCI+5byA5aeL5o6o5rWBPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJwYXVzZVwiPuaaguWBnOaOqOa1gTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwicmVzdW1lXCI+cmVzdW1lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJzdG9wXCI+5YGc5q2i5o6o5rWBPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJzbmFwc2hvdFwiPuW/q+eFpzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwic3RhcnRQcmV2aWV3XCI+5byA5ZCv5pGE5YOP5aS06aKE6KeIPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJzdG9wUHJldmlld1wiPuWFs+mXreaRhOWDj+WktOmihOiniDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwic3dpdGNoQ2FtZXJhXCI+5YiH5o2i5pGE5YOP5aS0PC9idXR0b24+IC0tPiBcbiAgICA8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9pbmRleC5qcyc7Ly/pnIDopoHlvJXlhaVzdG9yZVxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XHJcblx0XHRcdFx0dXJsOicnLFx0XHRcdFx0Ly8g5o6o5rWB5Zyw5Z2AXHJcblx0XHRcdFx0c3JjOicnLFx0XHRcdFx0Ly8g5ouJ5rWB5Zyw5Z2AICBcclxuXHRcdFx0XHR3aW5kb3dXaWR0aDowLFx0XHQvLyDorr7lpIflrr3luqZcclxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6MCwgXHQvLyDorr7lpIfpq5jluqZcclxuXHRcdFx0XHR3aW5kb3dXaWR0aFBVU0g6MCxcdFx0Ly8g6K6+5aSH5a695bqmXHJcblx0XHRcdFx0d2luZG93SGVpZ2h0UFVTSDowLCBcdC8vIOiuvuWkh+mrmOW6plxyXG5cdFx0XHRcdHRpdGxlOifnrYnlvoXlr7nmlrnmjqXmlLbpgoDor7cuLi4nLFxyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDowLCAgLy/nirbmgIHmoI/pq5jluqZcclxuXHRcdFx0XHR1c2VyTmFtZTon5ZOS5ZOS5ZOSJyxcdC8vIOeUqOaIt+WQjVxyXG5cdFx0XHR9XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHkoKSB7XG4gICAgICAgICAgICAvLyDms6jmhI/vvJrpnIDopoHlnKhvblJlYWR55LitIOaIliBvbkxvYWQg5bu25pe2XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSB1bmkuY3JlYXRlTGl2ZVB1c2hlckNvbnRleHQoXCJsaXZlUHVzaGVyXCIsIHRoaXMpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0dGhpcy5zdGFydCgpIFxyXG5cdFx0XHRcdHRoaXMuam9pbigpXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sMTApICBcclxuXHRcdFx0dGhpcy5zcmMgPSBzdG9yZS5zdGF0ZS5kdWlmYW5nSHVpTGl1VXJsXHJcblx0XHRcdC8vdW5pLnNldFN0b3JhZ2UoeyAnc3RvcmFnZV9rZXlfQUEnOiBzdG9yZS5zdGF0ZS5kdWlmYW5nSHVpTGl1VXJsIH0pO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNyYykgXHJcblx0XHRcdGNvbnNvbGUubG9nKHN0b3JlLnN0YXRlLmR1aWZhbmdIdWlMaXVVcmwpXHJcblx0XHRcdFxuICAgICAgICB9LFxyXG5cdFx0Y29tcHV0ZWQ6e1xyXG5cdFx0XHRkdWlmYW5nSHVpTGl1VXJsKCl7XHJcblx0XHRcdFx0cmV0dXJuIHN0b3JlLnN0YXRlLmR1aWZhbmdIdWlMaXVVcmxcclxuXHRcdFx0XHQgXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9uKSB7XHJcblx0XHRcdHRoaXMuZ2V0U3lzdGVtaW5mbygpXHJcblx0XHRcdHRoaXMudXJsID0gb3B0aW9uLnVybFxyXG5cdFx0XHRpZihvcHRpb24uSHVpTGl1VXJsKXtcclxuXHRcdFx0XHR0aGlzLnNyYyA9IG9wdGlvbi5IdWlMaXVVcmxcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNyYykgIFxyXG5cdFx0XHRcdHRoaXMudXNlck5hbWU9J+WTiOWTiOWTiCdcclxuXHRcdFx0XHR0aGlzLnRpdGxlPSfpgJror53kuK0nXHJcblx0XHRcdFx0dGhpcy53aW5kb3dXaWR0aFBVU0ggPSB0aGlzLndpbmRvd1dpZHRoUFVTSC8zXHJcblx0XHRcdFx0dGhpcy53aW5kb3dIZWlnaHRQVVNIID0gdGhpcy53aW5kb3dIZWlnaHRQVVNILzZcclxuXHRcdFx0fVxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMudXJsKVxyXG5cdFx0XHRcclxuXHRcdFx0IFxyXG5cdFx0fSxcclxuXHRcdFxuICAgICAgICBtZXRob2RzOiB7XHJcblx0XHRcdFxyXG5cdFx0XHRnZXRTeXN0ZW1pbmZvKCl7XHJcblx0XHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdCAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0ICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMubW9kZWwpO1xyXG5cdFx0XHRcdCAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLnBpeGVsUmF0aW8pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoXHJcblx0XHRcdFx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxyXG5cdFx0XHRcdFx0XHR0aGlzLndpbmRvd1dpZHRoUFVTSCA9IHJlcy53aW5kb3dXaWR0aFxyXG5cdFx0XHRcdFx0XHR0aGlzLndpbmRvd0hlaWdodFBVU0ggPSByZXMud2luZG93SGVpZ2h0XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gcmVzLnN0YXR1c0JhckhlaWdodFxyXG5cdFx0XHRcdCAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLndpbmRvd1dpcmVzLndpbmRvd0hlaWdodGR0aCk7XHJcblx0XHRcdFx0ICAgICAgICAvLyBjb25zb2xlLmxvZygpO1xyXG5cdFx0XHRcdCAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmxhbmd1YWdlKTtcclxuXHRcdFx0XHQgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy52ZXJzaW9uKTtcclxuXHRcdFx0XHQgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5wbGF0Zm9ybSk7XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSwgXG4gICAgICAgICAgICBzdGF0ZWNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJzdGF0ZWNoYW5nZTpcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXRzdGF0dXMoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV0c3RhdHVzOlwiICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOlwiICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuc3RhcnQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImxpdmVQdXNoZXIuc3RhcnQ6XCIgKyBKU09OLnN0cmluZ2lmeShhKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGl2ZVB1c2hlci5jbG9zZTpcIiArIEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNuYXBzaG90OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuc25hcHNob3Qoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdW1lKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGl2ZVB1c2hlci5yZXN1bWU6XCIgKyBKU09OLnN0cmluZ2lmeShhKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXVzZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnBhdXNlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGl2ZVB1c2hlci5wYXVzZTpcIiArIEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdG9wKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYSkpO1xyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdFx0ICAgIGRlbHRhOiAxIFxyXG5cdFx0XHRcdFx0XHR9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBzd2l0Y2hDYW1lcmE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zd2l0Y2hDYW1lcmEoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaXZlUHVzaGVyLnN3aXRjaENhbWVyYTpcIiArIEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0UHJldmlldzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0YXJ0UHJldmlldyh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxpdmVQdXNoZXIuc3RhcnRQcmV2aWV3OlwiICsgSlNPTi5zdHJpbmdpZnkoYSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RvcFByZXZpZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdG9wUHJldmlldyh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxpdmVQdXNoZXIuc3RvcFByZXZpZXc6XCIgKyBKU09OLnN0cmluZ2lmeShhKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXHJcblx0XHRcdGpvaW4oKXsgXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gdGhpcy5zb2NrZXQub24oJ2R1aWZhbmdUdWlMaXUnLCAoZGF0YSkgPT57XHJcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnMTk06KGMJylcclxuXHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdC8vIH0gKVxyXG5cdFx0XHRcdFx0ICBcclxuXHRcdFx0fSBcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XHJcblx0LyogXHJcblx0KntcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0fSAqL1xuIC5saXZlUHVzaGVye1xyXG5cdCBwb3NpdGlvbjogZml4ZWQ7XHJcblx0IHJpZ2h0OiAwO1xyXG5cdCB0b3A6IDA7XHJcbiB9XHJcblx0LmJnLXRvcHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fSBcclxuIFxyXG4gXHJcbiAudG9wLXRpdGxle1xyXG5cdCBoZWlnaHQ6IDg4cnB4O1xyXG5cdCBwb3NpdGlvbjogZml4ZWQ7XHJcblx0IGxlZnQ6IDA7XHJcblx0IGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XHJcblx0IG9wYWNpdHk6IDAuNjtcclxuXHQgZGlzcGxheTogZmxleDtcclxuXHQganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiB9XHJcbiAuY2xvc2UtaW1ne1xyXG5cdCBoZWlnaHQ6IDU2cnB4O1xyXG5cdCB3aWR0aDogNTZycHg7XHJcblx0IHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgbGVmdDogNDhycHg7XHJcblx0XHJcbiB9XHJcblx0IFxyXG4gLnRpdGxle1xyXG5cdCB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0IG9wYWNpdHk6IDAuNjtcclxuXHQgZm9udC1zaXplOiAzMnJweDtcclxuXHQgY29sb3I6ICNGRkZGRkY7XHJcbiB9XHJcbiBcclxuIC51c2Vye1xyXG5cdCBkaXNwbGF5OiBmbGV4O1xyXG5cdCBwb3NpdGlvbjogZml4ZWQ7XHJcblx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0IFxyXG4gfVxyXG4gLnVzZXItaW1ne1xyXG5cdCBcclxuXHQgd2lkdGg6MTYwcnB4O1xyXG5cdCBoZWlnaHQ6IDE2MHJweDtcclxuXHQgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gfVxyXG4gLnVzZXItbmFtZXtcclxuXHQgcGFkZGluZy10b3A6IDI0cnB4O1xyXG5cdCBmb250LXNpemU6IDQwcnB4O1xyXG5cdCAgY29sb3I6ICMwMDAwMDA7XHJcbiB9XHJcbiBcclxuIC5idG5ze1xyXG5cdCBkaXNwbGF5OiBmbGV4O1xyXG5cdCBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdCBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHQgcG9zaXRpb246IGZpeGVkO1xyXG5cdCBib3R0b206IDIyMHJweFxyXG4gfVxyXG4gLmNhbmNlbHtcclxuXHQgZGlzcGxheTogZmxleDtcclxuXHQganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0IHdpZHRoOiAxNDBycHg7XHJcblx0IGhlaWdodDogMTgwcnB4O1xyXG4gfVxyXG4gLmJ0bi1pbWd7XHJcblx0IHdpZHRoOiAxNDBycHg7XHJcblx0IGhlaWdodDogMTQwcnB4O1xyXG5cdCBtYXJnaW46IDAgYXV0bztcclxuIH1cclxuIC55dXlpbntcclxuXHQgZGlzcGxheTogZmxleDtcclxuXHQganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0IGZsZXgtd3JhcDogbm93cmFwO1xyXG5cdCB3aWR0aDogMjAwcnB4O1xyXG5cdCBoZWlnaHQ6IDE4MHJweDtcclxuIH1cclxuIC5idG4tdGV4dHtcclxuXHQgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCBtYXJnaW4tdG9wOiAyMHJweDtcclxuXHQgZm9udC1zaXplOiAyOHJweDtcclxuXHQgY29sb3I6ICMwMDAwMDA7XHJcblx0IGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdCBmb250LXdlaWdodDogNDAwO1xyXG4gfVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**************************************************************!*\
  !*** C:/Users/LW/Desktop/OasisLove/OasisLove/store/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 20));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default); //vue的插件机制\n\n//Vuex.Store 构造器选项\nvar store = new _vuex.default.Store({\n  state: { //存放状态\n    \"duifangHuiLiuUrl\": \"abc\" },\n\n\n\n  mutations: {\n    changeduifangHuiLiuUrl: function changeduifangHuiLiuUrl(state, url) {\n      // 变更状态\n      state.duifangHuiLiuUrl = url;\n    } },\n\n\n  actions: {\n    addCountAction: function addCountAction(context, url) {\n      context.commit('changeduifangHuiLiuUrl', url);\n    } } });var _default =\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsIm11dGF0aW9ucyIsImNoYW5nZWR1aWZhbmdIdWlMaXVVcmwiLCJ1cmwiLCJkdWlmYW5nSHVpTGl1VXJsIiwiYWN0aW9ucyIsImFkZENvdW50QWN0aW9uIiwiY29udGV4dCIsImNvbW1pdCJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0Esd0U7O0FBRUFBLGFBQUlDLEdBQUosQ0FBUUMsYUFBUixFLENBQWM7O0FBRWQ7QUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsY0FBS0UsS0FBVCxDQUFlO0FBQ3pCQyxPQUFLLEVBQUMsRUFBQztBQUNILHdCQUFtQixLQURqQixFQURtQjs7OztBQU0zQkMsV0FBUyxFQUFFO0FBQ0pDLDBCQURJLGtDQUNtQkYsS0FEbkIsRUFDeUJHLEdBRHpCLEVBQzhCO0FBQzlCO0FBQ0FILFdBQUssQ0FBQ0ksZ0JBQU4sR0FBeUJELEdBQXpCO0FBQ0gsS0FKRyxFQU5nQjs7O0FBYTNCRSxTQUFPLEVBQUM7QUFDQUMsa0JBREEsMEJBQ2dCQyxPQURoQixFQUN3QkosR0FEeEIsRUFDNkI7QUFDekJJLGFBQU8sQ0FBQ0MsTUFBUixDQUFlLHdCQUFmLEVBQXdDTCxHQUF4QztBQUNILEtBSEQsRUFibUIsRUFBZixDQUFkLEM7OztBQW1CZUwsSyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5cclxuVnVlLnVzZShWdWV4KTsvL3Z1ZeeahOaPkuS7tuacuuWItlxyXG5cclxuLy9WdWV4LlN0b3JlIOaehOmAoOWZqOmAiemhuVxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuICAgIHN0YXRlOnsvL+WtmOaUvueKtuaAgVxyXG4gICAgICAgIFwiZHVpZmFuZ0h1aUxpdVVybFwiOlwiYWJjXCIsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cdFxyXG5cdCBtdXRhdGlvbnM6IHtcclxuXHQgICAgICAgIGNoYW5nZWR1aWZhbmdIdWlMaXVVcmwoc3RhdGUsdXJsKSB7XHJcblx0ICAgICAgICAgICAgLy8g5Y+Y5pu054q25oCBXHJcblx0ICAgICAgICAgICAgc3RhdGUuZHVpZmFuZ0h1aUxpdVVybCA9IHVybFxyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdFx0XHJcblx0XHRhY3Rpb25zOntcclxuXHRcdCAgICAgICAgYWRkQ291bnRBY3Rpb24gKGNvbnRleHQsdXJsKSB7XHJcblx0XHQgICAgICAgICAgICBjb250ZXh0LmNvbW1pdCgnY2hhbmdlZHVpZmFuZ0h1aUxpdVVybCcsdXJsKVxyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 21 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),
/* 22 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/LW/Desktop/OasisLove/OasisLove/pages/live/live.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live.nvue?vue&type=style&index=0&lang=css&mpType=page */ 23);
/* harmony import */ var _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_E_HbuilderX_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/LW/Desktop/OasisLove/OasisLove/pages/live/live.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".livePusher": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        1
      ],
      "right": [
        0,
        0,
        0,
        1
      ],
      "top": [
        0,
        0,
        0,
        1
      ]
    }
  },
  ".bg-top": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        2
      ],
      "top": [
        0,
        0,
        0,
        2
      ],
      "left": [
        0,
        0,
        0,
        2
      ]
    }
  },
  ".top-title": {
    "": {
      "height": [
        "88rpx",
        0,
        0,
        3
      ],
      "position": [
        "fixed",
        0,
        0,
        3
      ],
      "left": [
        0,
        0,
        0,
        3
      ],
      "backgroundColor": [
        "#808080",
        0,
        0,
        3
      ],
      "opacity": [
        0.6,
        0,
        0,
        3
      ],
      "display": [
        "flex",
        0,
        0,
        3
      ],
      "justifyContent": [
        "center",
        0,
        0,
        3
      ]
    }
  },
  ".close-img": {
    "": {
      "height": [
        "56rpx",
        0,
        0,
        4
      ],
      "width": [
        "56rpx",
        0,
        0,
        4
      ],
      "position": [
        "absolute",
        0,
        0,
        4
      ],
      "left": [
        "48rpx",
        0,
        0,
        4
      ]
    }
  },
  ".title": {
    "": {
      "textAlign": [
        "center",
        0,
        0,
        5
      ],
      "opacity": [
        0.6,
        0,
        0,
        5
      ],
      "fontSize": [
        "32rpx",
        0,
        0,
        5
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        5
      ]
    }
  },
  ".user": {
    "": {
      "display": [
        "flex",
        0,
        0,
        6
      ],
      "position": [
        "fixed",
        0,
        0,
        6
      ],
      "alignItems": [
        "center",
        0,
        0,
        6
      ]
    }
  },
  ".user-img": {
    "": {
      "width": [
        "160rpx",
        0,
        0,
        7
      ],
      "height": [
        "160rpx",
        0,
        0,
        7
      ],
      "borderRadius": [
        50,
        0,
        0,
        7
      ]
    }
  },
  ".user-name": {
    "": {
      "paddingTop": [
        "24rpx",
        0,
        0,
        8
      ],
      "fontSize": [
        "40rpx",
        0,
        0,
        8
      ],
      "color": [
        "#000000",
        0,
        0,
        8
      ]
    }
  },
  ".btns": {
    "": {
      "display": [
        "flex",
        0,
        0,
        9
      ],
      "flexDirection": [
        "row",
        0,
        0,
        9
      ],
      "justifyContent": [
        "space-around",
        0,
        0,
        9
      ],
      "position": [
        "fixed",
        0,
        0,
        9
      ],
      "bottom": [
        "220rpx",
        0,
        0,
        9
      ]
    }
  },
  ".cancel": {
    "": {
      "display": [
        "flex",
        0,
        0,
        10
      ],
      "justifyContent": [
        "center",
        0,
        0,
        10
      ],
      "width": [
        "140rpx",
        0,
        0,
        10
      ],
      "height": [
        "180rpx",
        0,
        0,
        10
      ]
    }
  },
  ".btn-img": {
    "": {
      "width": [
        "140rpx",
        0,
        0,
        11
      ],
      "height": [
        "140rpx",
        0,
        0,
        11
      ],
      "marginTop": [
        0,
        0,
        0,
        11
      ],
      "marginBottom": [
        0,
        0,
        0,
        11
      ]
    }
  },
  ".yuyin": {
    "": {
      "display": [
        "flex",
        0,
        0,
        12
      ],
      "justifyContent": [
        "center",
        0,
        0,
        12
      ],
      "flexWrap": [
        "nowrap",
        0,
        0,
        12
      ],
      "width": [
        "200rpx",
        0,
        0,
        12
      ],
      "height": [
        "180rpx",
        0,
        0,
        12
      ]
    }
  },
  ".btn-text": {
    "": {
      "textAlign": [
        "center",
        0,
        0,
        13
      ],
      "marginTop": [
        "20rpx",
        0,
        0,
        13
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        13
      ],
      "color": [
        "#000000",
        0,
        0,
        13
      ],
      "letterSpacing": [
        0,
        0,
        0,
        13
      ],
      "fontWeight": [
        "400",
        0,
        0,
        13
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);