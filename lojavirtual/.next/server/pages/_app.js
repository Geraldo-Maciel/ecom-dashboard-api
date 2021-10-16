module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux */ "./redux/index.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class Principal extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_redux__WEBPACK_IMPORTED_MODULE_4__["initStore"])(Principal));

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: initStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");



const initStore = (initialState = {}) => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));
/* harmony default export */ __webpack_exports__["default"] = (initStore);

/***/ }),

/***/ "./redux/reducers/authReducers.js":
/*!****************************************!*\
  !*** ./redux/reducers/authReducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  token: null,
  usuario: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload.usuario ? action.payload.usuario.token : null,
        usuario: action.payload.usuario || null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: action.payload,
        token: action.payload ? action.payload.token : null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR_TOKEN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["DESAUTENTICAR"]:
      return initialState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/carrinhoReducers.js":
/*!********************************************!*\
  !*** ./redux/reducers/carrinhoReducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  carrinho: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_CARRINHO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: action.carrinho
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_CARRINHO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: null,
        freteSelecionado: null,
        fretes: null,
        cep: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO_CARRINHO"]:
      if (!action.payload.produto) return state;
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map((item, index) => {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            produto: action.payload.produto
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_VARIACAO_CARRINHO"]:
      if (!action.payload.variacao) return state;
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map((item, index) => {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            variacao: action.payload.variacao
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_VALOR_ENTREGA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fretes: action.payload.resultados,
        freteSelecionado: action.payload.resultados[0],
        cep: action.cep
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_QTD_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map((item, index) => {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            quantidade: Number(item.quantidade) + Number(action.change)
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_PROD_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho.reduce((all, item, index) => index !== action.idxCarrinho ? all.concat([item]) : all, [])
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FRETE_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        freteSelecionado: action.freteSelecionado
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_FRETES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        freteSelecionado: null,
        fretes: null,
        cep: null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/categoriaReducers.js":
/*!*********************************************!*\
  !*** ./redux/reducers/categoriaReducers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  categorias: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categorias: action.payload.categorias
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoria: action.payload.categoria
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA_PRODUTOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produtosCategoria: action.payload.produtos
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/checkoutReducers.js":
/*!********************************************!*\
  !*** ./redux/reducers/checkoutReducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  form: {
    dadosCobranca: {}
  },
  tipoPagamentoSelecionado: "cartao"
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_FORM"]:
      let form = _objectSpread({}, state.form);

      Object.keys(action.payload).forEach(item => {
        if (action.prefix) form[action.prefix][item] = action.payload[item];else form[item] = action.payload[item];
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        form
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_FORM"]:
      return _objectSpread(_objectSpread({}, state), initialState);

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_TIPO_PAGAMENTO"]:
      //            console.log('tp pagto: ', action.tipoPagamentoSelecionado);
      return _objectSpread(_objectSpread({}, state), {}, {
        tipoPagamentoSelecionado: action.tipoPagamentoSelecionado
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SESSION_ID"]:
      //            console.log('session: ', action.payload.sessionId);
      return _objectSpread(_objectSpread({}, state), {}, {
        sessionId: action.payload.sessionId
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SENDER_HASH"]:
      //           console.log('sendhash: ', action.senderHash);
      return _objectSpread(_objectSpread({}, state), {}, {
        senderHash: action.senderHash
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["NOVO_PEDIDO"]:
      //            console.log('novo pedido: ', action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        novoPedido: action.payload.pedido
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["PAGAR_PEDIDO"]:
      //            console.log('pagamento: ', action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        novoPagamento: action.payload.pagamento
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/clienteReducers.js":
/*!*******************************************!*\
  !*** ./redux/reducers/clienteReducers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  cliente: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cliente: action.payload.cliente
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CLIENTE"]:
      return initialState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducers */ "./redux/reducers/authReducers.js");
/* harmony import */ var _categoriaReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoriaReducers */ "./redux/reducers/categoriaReducers.js");
/* harmony import */ var _lojaReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lojaReducers */ "./redux/reducers/lojaReducers.js");
/* harmony import */ var _produtoReducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produtoReducers */ "./redux/reducers/produtoReducers.js");
/* harmony import */ var _carrinhoReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrinhoReducers */ "./redux/reducers/carrinhoReducers.js");
/* harmony import */ var _clienteReducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clienteReducers */ "./redux/reducers/clienteReducers.js");
/* harmony import */ var _checkoutReducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkoutReducers */ "./redux/reducers/checkoutReducers.js");
/* harmony import */ var _pedidoReducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pedidoReducers */ "./redux/reducers/pedidoReducers.js");









/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  categoria: _categoriaReducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  loja: _lojaReducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  produto: _produtoReducers__WEBPACK_IMPORTED_MODULE_4__["default"],
  carrinho: _carrinhoReducers__WEBPACK_IMPORTED_MODULE_5__["default"],
  cliente: _clienteReducers__WEBPACK_IMPORTED_MODULE_6__["default"],
  checkout: _checkoutReducers__WEBPACK_IMPORTED_MODULE_7__["default"],
  pedido: _pedidoReducers__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./redux/reducers/lojaReducers.js":
/*!****************************************!*\
  !*** ./redux/reducers/lojaReducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loja: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_DADOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loja: action.payload.loja
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/pedidoReducers.js":
/*!******************************************!*\
  !*** ./redux/reducers/pedidoReducers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  pedidos: null,
  pedido: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedidos: action.payload.pedidos
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedido: action.payload.pedido,
        pedidoRegistros: action.payload.registros
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedido: null,
        pedidoRegistros: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CANCELAR_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedido: state.pedido ? _objectSpread(_objectSpread({}, state.pedido), {}, {
          cancelado: true
        }) : null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/produtoReducers.js":
/*!*******************************************!*\
  !*** ./redux/reducers/produtoReducers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  produtos: null,
  termo: "",
  produtosPesquisa: null,
  produto: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produtos: action.payload.produtos
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PESQUISA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        termo: action.termo
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTOS_PESQUISA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produtosPesquisa: action.payload.produtos,
        termo: action.termo
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produto: action.payload.produto
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO_AVALIACOES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        avaliacoes: action.payload.avaliacoes
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO_VARIACOES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        variacoes: action.payload.variacoes
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["NOVA_AVALIACAO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        avaliacoes: state.avaliacoes.concat([action.payload.avaliacao])
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: REGISTER, AUTENTICAR_TOKEN, USER, AUTENTICAR, FETCH_CATEGORIAS, FETCH_DADOS, FETCH_PRODUTOS, FETCH_CATEGORIA, FETCH_CATEGORIA_PRODUTOS, FETCH_PESQUISA, FETCH_PRODUTOS_PESQUISA, FETCH_PRODUTO, FETCH_PRODUTO_AVALIACOES, FETCH_PRODUTO_VARIACOES, NOVA_AVALIACAO, SET_CARRINHO, CLEAN_CARRINHO, FETCH_PRODUTO_CARRINHO, FETCH_VARIACAO_CARRINHO, FETCH_VALOR_ENTREGA, UPDATE_QTD_CART, UPDATE_FRETE_CART, REMOVE_PROD_CART, CLEAN_FRETES, FETCH_CLIENTE, SET_FORM, CLEAN_FORM, SET_TIPO_PAGAMENTO, FETCH_SESSION_ID, FETCH_SENDER_HASH, NOVO_PEDIDO, PAGAR_PEDIDO, LOGOUT_CLIENTE, DESAUTENTICAR, FETCH_PEDIDOS, FETCH_PEDIDO, CLEAN_PEDIDO, CANCELAR_PEDIDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR_TOKEN", function() { return AUTENTICAR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR", function() { return AUTENTICAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIAS", function() { return FETCH_CATEGORIAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DADOS", function() { return FETCH_DADOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS", function() { return FETCH_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA", function() { return FETCH_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA_PRODUTOS", function() { return FETCH_CATEGORIA_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PESQUISA", function() { return FETCH_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS_PESQUISA", function() { return FETCH_PRODUTOS_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO", function() { return FETCH_PRODUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_AVALIACOES", function() { return FETCH_PRODUTO_AVALIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_VARIACOES", function() { return FETCH_PRODUTO_VARIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVA_AVALIACAO", function() { return NOVA_AVALIACAO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CARRINHO", function() { return SET_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_CARRINHO", function() { return CLEAN_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_CARRINHO", function() { return FETCH_PRODUTO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VARIACAO_CARRINHO", function() { return FETCH_VARIACAO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VALOR_ENTREGA", function() { return FETCH_VALOR_ENTREGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QTD_CART", function() { return UPDATE_QTD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FRETE_CART", function() { return UPDATE_FRETE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PROD_CART", function() { return REMOVE_PROD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FRETES", function() { return CLEAN_FRETES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENTE", function() { return FETCH_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FORM", function() { return SET_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FORM", function() { return CLEAN_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TIPO_PAGAMENTO", function() { return SET_TIPO_PAGAMENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SESSION_ID", function() { return FETCH_SESSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SENDER_HASH", function() { return FETCH_SENDER_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVO_PEDIDO", function() { return NOVO_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGAR_PEDIDO", function() { return PAGAR_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_CLIENTE", function() { return LOGOUT_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESAUTENTICAR", function() { return DESAUTENTICAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEDIDOS", function() { return FETCH_PEDIDOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEDIDO", function() { return FETCH_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_PEDIDO", function() { return CLEAN_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCELAR_PEDIDO", function() { return CANCELAR_PEDIDO; });
const REGISTER = "register",
      AUTENTICAR_TOKEN = "AUTENTICAR_TOKEN",
      USER = "user",
      AUTENTICAR = 'AUTENTICAR',
      FETCH_CATEGORIAS = "fetch_categorias",
      FETCH_DADOS = 'fetch_dados',
      FETCH_PRODUTOS = "FETCH_PRODUTOS",
      FETCH_CATEGORIA = 'FETCH_CATEGORIA',
      FETCH_CATEGORIA_PRODUTOS = 'FETCH_CATEGORIA_PRODUTOS',
      FETCH_PESQUISA = 'FETCH_PESQUISA',
      FETCH_PRODUTOS_PESQUISA = 'FETCH_PRODUTOS_PESQUISA',
      FETCH_PRODUTO = 'FETCH_PRODUTO',
      FETCH_PRODUTO_AVALIACOES = 'FETCH_PRODUTO_AVALIACOES',
      FETCH_PRODUTO_VARIACOES = 'FETCH_PRODUTO_VARIACOES',
      NOVA_AVALIACAO = 'NOVA_AVALIACAO',
      SET_CARRINHO = 'SET_CARRINHO',
      CLEAN_CARRINHO = 'CLEAN_CARRINHO',
      FETCH_PRODUTO_CARRINHO = 'FETCH_PRODUTO_CARRINHO',
      FETCH_VARIACAO_CARRINHO = 'FETCH_VARIACAO_CARRINHO',
      FETCH_VALOR_ENTREGA = 'FETCH_VALOR_ENTREGA',
      UPDATE_QTD_CART = 'UPDATE_QTD_CART',
      UPDATE_FRETE_CART = 'UPDATE_FRETE_CART',
      REMOVE_PROD_CART = 'REMOVE_PROD_CART',
      CLEAN_FRETES = 'CLEAN_FRETES',
      FETCH_CLIENTE = 'FETCH_CLIENTE',
      SET_FORM = 'SET_FORM',
      CLEAN_FORM = 'CLEAN_FORM',
      SET_TIPO_PAGAMENTO = 'SET_TIPO_PAGAMENTO',
      FETCH_SESSION_ID = 'FETCH_SESSION_ID',
      FETCH_SENDER_HASH = 'FETCH_SENDER_HASH',
      NOVO_PEDIDO = 'NOVO_PEDIDO',
      PAGAR_PEDIDO = 'PAGAR_PEDIDO',
      LOGOUT_CLIENTE = 'LOGOUT_CLIENTE',
      DESAUTENTICAR = 'DESAUTENTICAR',
      FETCH_PEDIDOS = 'FETCH_PEDIDOS',
      FETCH_PEDIDO = 'FETCH_PEDIDO',
      CLEAN_PEDIDO = 'CLEAN_PEDIDO',
      CANCELAR_PEDIDO = 'CANCELAR_PEDIDO';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2NhcnJpbmhvUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY2F0ZWdvcmlhUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY2hlY2tvdXRSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jbGllbnRlUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvbG9qYVJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3BlZGlkb1JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3Byb2R1dG9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC90eXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiUHJpbmNpcGFsIiwiY3R4Iiwic3RvcmUiLCJwcm9wcyIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwidG9rZW4iLCJ1c3VhcmlvIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQVVURU5USUNBUiIsInBheWxvYWQiLCJVU0VSIiwiQVVURU5USUNBUl9UT0tFTiIsIkRFU0FVVEVOVElDQVIiLCJjYXJyaW5obyIsIlNFVF9DQVJSSU5ITyIsIkNMRUFOX0NBUlJJTkhPIiwiZnJldGVTZWxlY2lvbmFkbyIsImZyZXRlcyIsImNlcCIsIkZFVENIX1BST0RVVE9fQ0FSUklOSE8iLCJwcm9kdXRvIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWR4Q2FycmluaG8iLCJGRVRDSF9WQVJJQUNBT19DQVJSSU5ITyIsInZhcmlhY2FvIiwiRkVUQ0hfVkFMT1JfRU5UUkVHQSIsInJlc3VsdGFkb3MiLCJVUERBVEVfUVREX0NBUlQiLCJxdWFudGlkYWRlIiwiTnVtYmVyIiwiY2hhbmdlIiwiUkVNT1ZFX1BST0RfQ0FSVCIsInJlZHVjZSIsImFsbCIsImNvbmNhdCIsIlVQREFURV9GUkVURV9DQVJUIiwiQ0xFQU5fRlJFVEVTIiwiY2F0ZWdvcmlhcyIsIkZFVENIX0NBVEVHT1JJQVMiLCJGRVRDSF9DQVRFR09SSUEiLCJjYXRlZ29yaWEiLCJGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1MiLCJwcm9kdXRvc0NhdGVnb3JpYSIsInByb2R1dG9zIiwiZm9ybSIsImRhZG9zQ29icmFuY2EiLCJ0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8iLCJTRVRfRk9STSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicHJlZml4IiwiQ0xFQU5fRk9STSIsIlNFVF9USVBPX1BBR0FNRU5UTyIsIkZFVENIX1NFU1NJT05fSUQiLCJzZXNzaW9uSWQiLCJGRVRDSF9TRU5ERVJfSEFTSCIsInNlbmRlckhhc2giLCJOT1ZPX1BFRElETyIsIm5vdm9QZWRpZG8iLCJwZWRpZG8iLCJQQUdBUl9QRURJRE8iLCJub3ZvUGFnYW1lbnRvIiwicGFnYW1lbnRvIiwiY2xpZW50ZSIsIkZFVENIX0NMSUVOVEUiLCJMT0dPVVRfQ0xJRU5URSIsImNvbWJpbmVSZWR1Y2VycyIsImF1dGgiLCJhdXRoUmVkdWNlciIsImNhdGVnb3JpYVJlZHVjZXIiLCJsb2phIiwibG9qYVJlZHVjZXIiLCJwcm9kdXRvUmVkdWNlciIsImNhcnJpbmhvUmVkdWNlciIsImNsaWVudGVSZWR1Y2VyIiwiY2hlY2tvdXQiLCJjaGVja291dFJlZHVjZXIiLCJwZWRpZG9SZWR1Y2VyIiwiRkVUQ0hfREFET1MiLCJwZWRpZG9zIiwiRkVUQ0hfUEVESURPUyIsIkZFVENIX1BFRElETyIsInBlZGlkb1JlZ2lzdHJvcyIsInJlZ2lzdHJvcyIsIkNMRUFOX1BFRElETyIsIkNBTkNFTEFSX1BFRElETyIsImNhbmNlbGFkbyIsInRlcm1vIiwicHJvZHV0b3NQZXNxdWlzYSIsIkZFVENIX1BST0RVVE9TIiwiRkVUQ0hfUEVTUVVJU0EiLCJGRVRDSF9QUk9EVVRPU19QRVNRVUlTQSIsIkZFVENIX1BST0RVVE8iLCJGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVMiLCJhdmFsaWFjb2VzIiwiRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMiLCJ2YXJpYWNvZXMiLCJOT1ZBX0FWQUxJQUNBTyIsImF2YWxpYWNhbyIsIlJFR0lTVEVSIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLG1CQUFPLENBQUMsaUVBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTVDOztBQUNBOzs7O0FBa0JBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFB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TUMsZ0JBQWdCLEdBQUcsa0JBNUJ6QjtBQUFBLE1BNkJNRSxpQkFBaUIsR0FBRyxtQkE3QjFCO0FBQUEsTUE4Qk1FLFdBQVcsR0FBRyxhQTlCcEI7QUFBQSxNQStCTUcsWUFBWSxHQUFHLGNBL0JyQjtBQUFBLE1BZ0NNSyxjQUFjLEdBQUcsZ0JBaEN2QjtBQUFBLE1BaUNNeEQsYUFBYSxHQUFHLGVBakN0QjtBQUFBLE1Ba0NNdUUsYUFBYSxHQUFHLGVBbEN0QjtBQUFBLE1BbUNNQyxZQUFZLEdBQUcsY0FuQ3JCO0FBQUEsTUFvQ01HLFlBQVksR0FBRyxjQXBDckI7QUFBQSxNQXFDTUMsZUFBZSxHQUFHLGlCQXJDeEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUCwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcHAsIHtDb250YWluZXJ9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQge2luaXRTdG9yZX0gZnJvbSAnLi4vcmVkdXgnO1xyXG5cclxuY2xhc3MgUHJpbmNpcGFsIGV4dGVuZHMgQXBwIHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eH0pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYWdlUHJvcHM6IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpIChQcmluY2lwYWwpOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSB7fSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRTdG9yZTsgICAgICAgICAgICAgICAgICAgICIsImltcG9ydCB7IFxyXG4gICAgQVVURU5USUNBUl9UT0tFTixcclxuICAgIEFVVEVOVElDQVIsXHJcbiAgICBVU0VSLFxyXG4gICAgREVTQVVURU5USUNBUlxyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdG9rZW46IG51bGwsIHVzdWFyaW86IG51bGwgfTtcclxuZXhwb3J0IGRlZmF1bHQgKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQVVURU5USUNBUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkLnVzdWFyaW8gPyBhY3Rpb24ucGF5bG9hZC51c3VhcmlvLnRva2VuIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkLnVzdWFyaW8gfHwgbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkLnRva2VuIDogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQVVURU5USUNBUl9UT0tFTjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRva2VuOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgY2FzZSBERVNBVVRFTlRJQ0FSOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBTRVRfQ0FSUklOSE8sXHJcbiAgICBDTEVBTl9DQVJSSU5ITyxcclxuICAgIEZFVENIX1BST0RVVE9fQ0FSUklOSE8sXHJcbiAgICBGRVRDSF9WQVJJQUNBT19DQVJSSU5ITyxcclxuICAgIEZFVENIX1ZBTE9SX0VOVFJFR0EsXHJcbiAgICBVUERBVEVfUVREX0NBUlQsXHJcbiAgICBVUERBVEVfRlJFVEVfQ0FSVCxcclxuICAgIFJFTU9WRV9QUk9EX0NBUlQsXHJcbiAgICBDTEVBTl9GUkVURVNcclxufSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGNhcnJpbmhvOiBudWxsIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFNFVF9DQVJSSU5ITzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FycmluaG86IGFjdGlvbi5jYXJyaW5ob1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDTEVBTl9DQVJSSU5ITzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FycmluaG86IG51bGwsXHJcbiAgICAgICAgICAgICAgICBmcmV0ZVNlbGVjaW9uYWRvOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZnJldGVzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2VwOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX1BST0RVVE9fQ0FSUklOSE86XHJcbiAgICAgICAgICAgIGlmKCFhY3Rpb24ucGF5bG9hZC5wcm9kdXRvKSByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5obyA/IHN0YXRlLmNhcnJpbmhvLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBhY3Rpb24uaWR4Q2FycmluaG8gPT0gaW5kZXggKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uaXRlbSwgcHJvZHV0bzogYWN0aW9uLnBheWxvYWQucHJvZHV0byB9IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgfSkgOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9WQVJJQUNBT19DQVJSSU5ITzpcclxuICAgICAgICAgICAgaWYoIWFjdGlvbi5wYXlsb2FkLnZhcmlhY2FvKSByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5obyA/IHN0YXRlLmNhcnJpbmhvLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBhY3Rpb24uaWR4Q2FycmluaG8gPT0gaW5kZXggKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uaXRlbSwgdmFyaWFjYW86IGFjdGlvbi5wYXlsb2FkLnZhcmlhY2FvIH0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICB9KSA6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX1ZBTE9SX0VOVFJFR0E6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZyZXRlczogYWN0aW9uLnBheWxvYWQucmVzdWx0YWRvcyxcclxuICAgICAgICAgICAgICAgIGZyZXRlU2VsZWNpb25hZG86IGFjdGlvbi5wYXlsb2FkLnJlc3VsdGFkb3NbMF0sXHJcbiAgICAgICAgICAgICAgICBjZXA6IGFjdGlvbi5jZXBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVBEQVRFX1FURF9DQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8gPyBzdGF0ZS5jYXJyaW5oby5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggYWN0aW9uLmlkeENhcnJpbmhvID09IGluZGV4ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGlkYWRlOiBOdW1iZXIoaXRlbS5xdWFudGlkYWRlKSArIE51bWJlcihhY3Rpb24uY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgfSkgOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUFJPRF9DQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8ucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWxsLCBpdGVtLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICE9PSBhY3Rpb24uaWR4Q2FycmluaG8gPyBhbGwuY29uY2F0KFtpdGVtXSkgOiBhbGwsIFtdXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVUERBVEVfRlJFVEVfQ0FSVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZnJldGVTZWxlY2lvbmFkbzogYWN0aW9uLmZyZXRlU2VsZWNpb25hZG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0xFQU5fRlJFVEVTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmcmV0ZVNlbGVjaW9uYWRvOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZnJldGVzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2VwOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1xyXG4gICAgRkVUQ0hfQ0FURUdPUklBUyxcclxuICAgIEZFVENIX0NBVEVHT1JJQV9QUk9EVVRPUyxcclxuICAgIEZFVENIX0NBVEVHT1JJQVxyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgY2F0ZWdvcmlhczogbnVsbCB9O1xyXG5leHBvcnQgZGVmYXVsdCAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgRkVUQ0hfQ0FURUdPUklBUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhczogYWN0aW9uLnBheWxvYWQuY2F0ZWdvcmlhc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9DQVRFR09SSUE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogYWN0aW9uLnBheWxvYWQuY2F0ZWdvcmlhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX0NBVEVHT1JJQV9QUk9EVVRPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHV0b3NDYXRlZ29yaWE6IGFjdGlvbi5wYXlsb2FkLnByb2R1dG9zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1xyXG4gICAgU0VUX0ZPUk0sXHJcbiAgICBDTEVBTl9GT1JNLFxyXG4gICAgU0VUX1RJUE9fUEFHQU1FTlRPLFxyXG4gICAgRkVUQ0hfU0VTU0lPTl9JRCxcclxuICAgIEZFVENIX1NFTkRFUl9IQVNILFxyXG4gICAgTk9WT19QRURJRE8sXHJcbiAgICBQQUdBUl9QRURJRE9cclxufSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBmb3JtOiB7IGRhZG9zQ29icmFuY2E6IHt9IH0sXHJcbiAgICB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG86IFwiY2FydGFvXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgU0VUX0ZPUk06XHJcbiAgICAgICAgICAgIGxldCBmb3JtID0geyAuLi5zdGF0ZS5mb3JtIH07XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbi5wYXlsb2FkKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYWN0aW9uLnByZWZpeCkgZm9ybVthY3Rpb24ucHJlZml4XVtpdGVtXSA9IGFjdGlvbi5wYXlsb2FkW2l0ZW1dO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBmb3JtW2l0ZW1dID0gYWN0aW9uLnBheWxvYWRbaXRlbV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9ybSB9O1xyXG4gICAgICAgIGNhc2UgQ0xFQU5fRk9STTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4uaW5pdGlhbFN0YXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFVF9USVBPX1BBR0FNRU5UTzpcclxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZygndHAgcGFndG86ICcsIGFjdGlvbi50aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8pO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG86IGFjdGlvbi50aXBvUGFnYW1lbnRvU2VsZWNpb25hZG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfU0VTU0lPTl9JRDpcclxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZygnc2Vzc2lvbjogJywgYWN0aW9uLnBheWxvYWQuc2Vzc2lvbklkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbklkOiBhY3Rpb24ucGF5bG9hZC5zZXNzaW9uSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfU0VOREVSX0hBU0g6XHJcbi8vICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZGhhc2g6ICcsIGFjdGlvbi5zZW5kZXJIYXNoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2VuZGVySGFzaDogYWN0aW9uLnNlbmRlckhhc2hcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTk9WT19QRURJRE86XHJcbi8vICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdm8gcGVkaWRvOiAnLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG5vdm9QZWRpZG86IGFjdGlvbi5wYXlsb2FkLnBlZGlkb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBQQUdBUl9QRURJRE86XHJcbi8vICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhZ2FtZW50bzogJywgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBub3ZvUGFnYW1lbnRvOiBhY3Rpb24ucGF5bG9hZC5wYWdhbWVudG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9DTElFTlRFLFxyXG4gICAgTE9HT1VUX0NMSUVOVEVcclxufSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGNsaWVudGU6IG51bGwgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgRkVUQ0hfQ0xJRU5URTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50ZTogYWN0aW9uLnBheWxvYWQuY2xpZW50ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dPVVRfQ0xJRU5URTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcnMnO1xyXG5pbXBvcnQgY2F0ZWdvcmlhUmVkdWNlciBmcm9tICcuL2NhdGVnb3JpYVJlZHVjZXJzJztcclxuaW1wb3J0IGxvamFSZWR1Y2VyIGZyb20gJy4vbG9qYVJlZHVjZXJzJztcclxuaW1wb3J0IHByb2R1dG9SZWR1Y2VyIGZyb20gJy4vcHJvZHV0b1JlZHVjZXJzJztcclxuaW1wb3J0IGNhcnJpbmhvUmVkdWNlciBmcm9tICcuL2NhcnJpbmhvUmVkdWNlcnMnO1xyXG5pbXBvcnQgY2xpZW50ZVJlZHVjZXIgZnJvbSAnLi9jbGllbnRlUmVkdWNlcnMnO1xyXG5pbXBvcnQgY2hlY2tvdXRSZWR1Y2VyIGZyb20gJy4vY2hlY2tvdXRSZWR1Y2Vycyc7XHJcbmltcG9ydCBwZWRpZG9SZWR1Y2VyIGZyb20gJy4vcGVkaWRvUmVkdWNlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGF1dGg6IGF1dGhSZWR1Y2VyLFxyXG4gICAgY2F0ZWdvcmlhOiBjYXRlZ29yaWFSZWR1Y2VyLFxyXG4gICAgbG9qYTogbG9qYVJlZHVjZXIsXHJcbiAgICBwcm9kdXRvOiBwcm9kdXRvUmVkdWNlcixcclxuICAgIGNhcnJpbmhvOiBjYXJyaW5ob1JlZHVjZXIsXHJcbiAgICBjbGllbnRlOiBjbGllbnRlUmVkdWNlcixcclxuICAgIGNoZWNrb3V0OiBjaGVja291dFJlZHVjZXIsXHJcbiAgICBwZWRpZG86IHBlZGlkb1JlZHVjZXJcclxufSk7IiwiaW1wb3J0IHtGRVRDSF9EQURPU30gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge2xvamE6IG51bGx9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZFVENIX0RBRE9TOlxyXG4gICAgICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9qYTogYWN0aW9uLnBheWxvYWQubG9qYVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9QRURJRE9TLFxyXG4gICAgRkVUQ0hfUEVESURPLFxyXG4gICAgQ0xFQU5fUEVESURPLFxyXG4gICAgQ0FOQ0VMQVJfUEVESURPXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcGVkaWRvczogbnVsbCxcclxuICAgIHBlZGlkbzogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZFVENIX1BFRElET1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBlZGlkb3M6IGFjdGlvbi5wYXlsb2FkLnBlZGlkb3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfUEVESURPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwZWRpZG86IGFjdGlvbi5wYXlsb2FkLnBlZGlkbyxcclxuICAgICAgICAgICAgICAgIHBlZGlkb1JlZ2lzdHJvczogYWN0aW9uLnBheWxvYWQucmVnaXN0cm9zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENMRUFOX1BFRElETzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcGVkaWRvOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGVkaWRvUmVnaXN0cm9zOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENBTkNFTEFSX1BFRElETzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcGVkaWRvOiBzdGF0ZS5wZWRpZG8gPyB7Li4uIHN0YXRlLnBlZGlkbywgY2FuY2VsYWRvOiB0cnVlfSA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9QUk9EVVRPUyxcclxuICAgIEZFVENIX1BFU1FVSVNBLFxyXG4gICAgRkVUQ0hfUFJPRFVUT1NfUEVTUVVJU0EsXHJcbiAgICBGRVRDSF9QUk9EVVRPLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMsXHJcbiAgICBOT1ZBX0FWQUxJQUNBT1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHByb2R1dG9zOiBudWxsLFxyXG4gICAgdGVybW86IFwiXCIsXHJcbiAgICBwcm9kdXRvc1Blc3F1aXNhOiBudWxsLFxyXG4gICAgcHJvZHV0bzogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QUk9EVVRPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHV0b3M6IGFjdGlvbi5wYXlsb2FkLnByb2R1dG9zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX1BFU1FVSVNBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0ZXJtbzogYWN0aW9uLnRlcm1vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX1BST0RVVE9TX1BFU1FVSVNBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdXRvc1Blc3F1aXNhOiBhY3Rpb24ucGF5bG9hZC5wcm9kdXRvcyxcclxuICAgICAgICAgICAgICAgIHRlcm1vOiBhY3Rpb24udGVybW9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfUFJPRFVUTzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHV0bzogYWN0aW9uLnBheWxvYWQucHJvZHV0b1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGF2YWxpYWNvZXM6IGFjdGlvbi5wYXlsb2FkLmF2YWxpYWNvZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHZhcmlhY29lczogYWN0aW9uLnBheWxvYWQudmFyaWFjb2VzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE5PVkFfQVZBTElBQ0FPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhdmFsaWFjb2VzOiBzdGF0ZS5hdmFsaWFjb2VzLmNvbmNhdChbYWN0aW9uLnBheWxvYWQuYXZhbGlhY2FvXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IFwicmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgIEFVVEVOVElDQVJfVE9LRU4gPSBcIkFVVEVOVElDQVJfVE9LRU5cIixcclxuICAgICAgICAgICAgIFVTRVIgPSBcInVzZXJcIixcclxuICAgICAgICAgICAgIEFVVEVOVElDQVIgPSAnQVVURU5USUNBUicsXHJcbiAgICAgICAgICAgICBGRVRDSF9DQVRFR09SSUFTID0gXCJmZXRjaF9jYXRlZ29yaWFzXCIsXHJcbiAgICAgICAgICAgICBGRVRDSF9EQURPUyA9ICdmZXRjaF9kYWRvcycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPUyA9IFwiRkVUQ0hfUFJPRFVUT1NcIixcclxuICAgICAgICAgICAgIEZFVENIX0NBVEVHT1JJQSA9ICdGRVRDSF9DQVRFR09SSUEnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TID0gJ0ZFVENIX0NBVEVHT1JJQV9QUk9EVVRPUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QRVNRVUlTQSA9ICdGRVRDSF9QRVNRVUlTQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPU19QRVNRVUlTQSA9ICdGRVRDSF9QUk9EVVRPU19QRVNRVUlTQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPID0gJ0ZFVENIX1BST0RVVE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTID0gJ0ZFVENIX1BST0RVVE9fQVZBTElBQ09FUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUyA9ICdGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUycsXHJcbiAgICAgICAgICAgICBOT1ZBX0FWQUxJQUNBTyA9ICdOT1ZBX0FWQUxJQUNBTycsXHJcbiAgICAgICAgICAgICBTRVRfQ0FSUklOSE8gPSAnU0VUX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIENMRUFOX0NBUlJJTkhPID0gJ0NMRUFOX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9fQ0FSUklOSE8gPSAnRkVUQ0hfUFJPRFVUT19DQVJSSU5ITycsXHJcbiAgICAgICAgICAgICBGRVRDSF9WQVJJQUNBT19DQVJSSU5ITyA9ICdGRVRDSF9WQVJJQUNBT19DQVJSSU5ITycsXHJcbiAgICAgICAgICAgICBGRVRDSF9WQUxPUl9FTlRSRUdBID0gJ0ZFVENIX1ZBTE9SX0VOVFJFR0EnLFxyXG4gICAgICAgICAgICAgVVBEQVRFX1FURF9DQVJUID0gJ1VQREFURV9RVERfQ0FSVCcsXHJcbiAgICAgICAgICAgICBVUERBVEVfRlJFVEVfQ0FSVCA9ICdVUERBVEVfRlJFVEVfQ0FSVCcsXHJcbiAgICAgICAgICAgICBSRU1PVkVfUFJPRF9DQVJUID0gJ1JFTU9WRV9QUk9EX0NBUlQnLFxyXG4gICAgICAgICAgICAgQ0xFQU5fRlJFVEVTID0gJ0NMRUFOX0ZSRVRFUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9DTElFTlRFID0gJ0ZFVENIX0NMSUVOVEUnLFxyXG4gICAgICAgICAgICAgU0VUX0ZPUk0gPSAnU0VUX0ZPUk0nLFxyXG4gICAgICAgICAgICAgQ0xFQU5fRk9STSA9ICdDTEVBTl9GT1JNJyxcclxuICAgICAgICAgICAgIFNFVF9USVBPX1BBR0FNRU5UTyA9ICdTRVRfVElQT19QQUdBTUVOVE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfU0VTU0lPTl9JRCA9ICdGRVRDSF9TRVNTSU9OX0lEJyxcclxuICAgICAgICAgICAgIEZFVENIX1NFTkRFUl9IQVNIID0gJ0ZFVENIX1NFTkRFUl9IQVNIJyxcclxuICAgICAgICAgICAgIE5PVk9fUEVESURPID0gJ05PVk9fUEVESURPJyxcclxuICAgICAgICAgICAgIFBBR0FSX1BFRElETyA9ICdQQUdBUl9QRURJRE8nLFxyXG4gICAgICAgICAgICAgTE9HT1VUX0NMSUVOVEUgPSAnTE9HT1VUX0NMSUVOVEUnLFxyXG4gICAgICAgICAgICAgREVTQVVURU5USUNBUiA9ICdERVNBVVRFTlRJQ0FSJyxcclxuICAgICAgICAgICAgIEZFVENIX1BFRElET1MgPSAnRkVUQ0hfUEVESURPUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QRURJRE8gPSAnRkVUQ0hfUEVESURPJyxcclxuICAgICAgICAgICAgIENMRUFOX1BFRElETyA9ICdDTEVBTl9QRURJRE8nLFxyXG4gICAgICAgICAgICAgQ0FOQ0VMQVJfUEVESURPID0gJ0NBTkNFTEFSX1BFRElETyc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=