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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Alert/Geral.js":
/*!***********************************!*\
  !*** ./components/Alert/Geral.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Alert\\Geral.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class AlertGeral extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (!this.props.aviso) return null;
    return __jsx("div", {
      className: "alert alert-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, this.props.aviso.message));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AlertGeral);

/***/ }),

/***/ "./components/Campos/Pesquisa.js":
/*!***************************************!*\
  !*** ./components/Campos/Pesquisa.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Campos\\Pesquisa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Pesquisa extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      termo: ""
    });
  }

  submitPesquisa() {
    const {
      termo
    } = this.state;
    this.props.fetchTermo(termo);
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
      pathname: "/pesquisa",
      query: {
        termo
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "flex-3 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx("input", {
      name: "pesquisa",
      value: this.state.termo,
      onChange: e => this.setState({
        termo: e.target.value
      }),
      placeholder: "Digite aqui a sua pesquisa ...",
      className: "input-pesquisa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }), __jsx("button", {
      onClick: () => this.submitPesquisa(),
      className: "button-pesquisa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "fa fa-search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, " ")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(Pesquisa));

/***/ }),

/***/ "./components/Cards/Carrinho.js":
/*!**************************************!*\
  !*** ./components/Cards/Carrinho.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Cards\\Carrinho.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class CardCarrinho extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      cartQtd: 0
    });
  }

  componentDidMount() {
    this.setState({
      cartQtd: Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["getCountItemsCart"])()
    });
  }

  render() {
    return __jsx("div", {
      className: "itens-cabecalho flex-2 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/area-cliente",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "item-cabecalho",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, "Minha Conta"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/carrinho",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "item-cabecalho cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-shopping-bag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, this.state.cartQtd || 0))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CardCarrinho);

/***/ }),

/***/ "./components/Cards/CarrinhoLimpo.js":
/*!*******************************************!*\
  !*** ./components/Cards/CarrinhoLimpo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_carrinhoActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/carrinhoActions */ "./redux/actions/carrinhoActions.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Cards\\CarrinhoLimpo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class CardCarrinhoLimpo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    Object(_redux_actions_carrinhoActions__WEBPACK_IMPORTED_MODULE_2__["cleanCarrinho"])();
  }

  render() {
    return __jsx("div", {
      className: "itens-cabecalho flex-2 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/carrinho",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "item-cabecalho",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }, "LIMPAR"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CardCarrinhoLimpo);

/***/ }),

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultDescricao = '';
const defaultOGURL = '';
const defaultOGImage = "/static/logo.png";

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, " ", props.title || "", " "), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescricao,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  href: "/static/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:title",
  content: props.title || "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:descri\xE7\xE3o",
  content: props.description || defaultDescricao,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:site",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image:width",
  content: "600",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image:height",
  content: "600",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet" //            href="/static/font-awesome.min.css" 
  ,
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  integryte: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
  crossOrigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/style.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}), props.pagSeguro ? __jsx("script", {
  type: "text/javascript",
  src: "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 17
  }
}) : null, props.children);

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/Inputs/FormRadio.js":
/*!****************************************!*\
  !*** ./components/Inputs/FormRadio.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormRadio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Inputs\\FormRadio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class FormRadio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      selected,
      label,
      onChange
    } = this.props;
    return __jsx("div", {
      className: "form-input form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("input", {
      type: "radio",
      checked: selected,
      name: name,
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, " \xA0 ", label, " "));
  }

}

/***/ }),

/***/ "./components/Inputs/FormSimples.js":
/*!******************************************!*\
  !*** ./components/Inputs/FormSimples.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormSimples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Inputs\\FormSimples.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class FormSimples extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      value,
      name,
      placeholder,
      type,
      label,
      onChange,
      erro
    } = this.props;
    return __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, label && __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 27
      }
    }, " ", label, " "), __jsx("input", {
      type: type,
      value: value,
      name: name,
      placeholder: placeholder,
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), erro && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, " ", erro, " "));
  }

}

/***/ }),

/***/ "./components/Item/DadosDaLoja.js":
/*!****************************************!*\
  !*** ./components/Item/DadosDaLoja.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Item\\DadosDaLoja.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DadosDaLoja extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (!this.props.loja) return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 39
      }
    }, " ");
    const {
      nome,
      cnpj,
      email,
      endereco,
      telefones
    } = this.props.loja;
    return __jsx("div", {
      className: "flex-1 dados-da-loja",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, " Entre em Contato "), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    })), __jsx("p", {
      className: "loja-nome",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, " Nome: ", nome, " "), __jsx("p", {
      className: "loja-cnpj",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, " CNPJ: ", cnpj, " "), __jsx("p", {
      className: "loja-email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, " E-mail: ", __jsx("a", {
      href: `mailto:${email}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 54
      }
    }, " ", email, " "), " "), __jsx("p", {
      className: "loja-telefones",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, " Telefones: "), telefones.map(index => __jsx("p", {
      className: "loja-telefone",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }, "\xA0 \xA0", __jsx("a", {
      href: `phone:${telefones}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 29
      }
    }, " ", telefones, " "))), __jsx("p", {
      className: "loja-endereco",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, " ", endereco.local, ", ", endereco.numero, " - ", endereco.bairro, " "), __jsx("p", {
      className: "loja-cidade",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, " ", endereco.cidade, " / ", endereco.estado, " - ", endereco.CEP, " "));
  }

}

const mapStateToProps = state => ({
  loja: state.loja.loja
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(DadosDaLoja));

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head */ "./components/Head.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style */ "./components/Style.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = ({
  children,
  title,
  description,
  url,
  image,
  pagSeguro
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: title,
  description: description,
  url: url,
  ogImage: image,
  pagSeguro: pagSeguro,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx(_Style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("div", {
  className: "body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}, children), __jsx("footer", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "flex flex-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}, __jsx("small", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }
}, "\xA9 Loja IT - Curso Criando um Ecommerce do Zero"))));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Listas/Categorias.js":
/*!*****************************************!*\
  !*** ./components/Listas/Categorias.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Listas\\Categorias.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Categorias extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      categorias
    } = this.props;
    return __jsx("div", {
      className: "categorias flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, categorias.map(categoria => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/categoria/${categoria.nome}?id=${categoria._id}`,
      key: categoria._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "categoria-item flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 33
      }
    }, categoria.nome)))));
  }

}

const mapStateToProps = state => ({
  categorias: state.categoria.categorias
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Categorias));

/***/ }),

/***/ "./components/Listas/Paginas.js":
/*!**************************************!*\
  !*** ./components/Listas/Paginas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Listas\\Paginas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Paginas = () => __jsx("div", {
  className: "flex-1 flex vertical institucional",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, "P\xE1ginas"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
})), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}, "P\xE1gina Inicial")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/carrinho",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, "Ver Sacola")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/area-cliente/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }
}, "Minha Conta")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/sobre",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, "Sobre a Loja")));

/* harmony default export */ __webpack_exports__["default"] = (Paginas);

/***/ }),

/***/ "./components/Listas/RedesSociais.js":
/*!*******************************************!*\
  !*** ./components/Listas/RedesSociais.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Listas\\RedesSociais.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const REDES_SOCIAIS = [{
  nome: "facebook",
  url: "#"
}, {
  nome: "instagram",
  url: "#"
}, {
  nome: "twitter",
  url: "#"
}, {
  nome: "whatsapp",
  url: "#"
}];

const RedesSociais = () => __jsx("div", {
  className: "flex-1 flex vertical",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, "Redes Sociais"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "flex-1 flex redes-sociais wrap",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, REDES_SOCIAIS.map((item, idx) => __jsx("div", {
  className: "flex-1 flex",
  key: idx,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 21
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: item.url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 25
  }
}, __jsx("i", {
  className: `fa fa-${item.nome} fa-lg`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 29
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (RedesSociais);

/***/ }),

/***/ "./components/Logo/Cabecalho.js":
/*!**************************************!*\
  !*** ./components/Logo/Cabecalho.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\components\\Logo\\Cabecalho.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LogoCabecalho = () => __jsx("div", {
  className: "flex-2 flex flex-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("img", {
  src: "/static/logo.png",
  className: "logo",
  width: "90%",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (LogoCabecalho);

/***/ }),

/***/ "./components/Style.js":
/*!*****************************!*\
  !*** ./components/Style.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2991086144",
  __self: undefined
}, "body{margin:0;padding:0;}body,*{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;}.container,.container-big{width:calc(100% - 20px);padding:0 10px;max-width:1200px;margin:0 auto;}.container-big{max-width:1440 px;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flex-1{-webkit-flex:1;-ms-flex:1;flex:1;}.flex-2{-webkit-flex:2;-ms-flex:2;flex:2;}.flex-3{-webkit-flex:3;-ms-flex:3;flex:3;}.flex-4{-webkit-flex:4;-ms-flex:4;flex:4;}.flex-5{-webkit-flex:5;-ms-flex:5;flex:5;}.flex-6{-webkit-flex:6;-ms-flex:6;flex:6;}.wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.wrap-1{-webkit-flex-basis:calc(100% - 50px);-ms-flex-preferred-size:calc(100% - 50px);flex-basis:calc(100% - 50px);max-width:calc(100% - 50px);}.wrap-2{flax-basic:calc(50% - 50px);max-width:calc(50% - 50px);}.wrap-3{-webkit-flex-basis:calc(32% - 50px);-ms-flex-preferred-size:calc(32% - 50px);flex-basis:calc(32% - 50px);max-width:calc(32% - 50px);}.wrap-4{-webkit-flex-basis:calc(25% - 50px);-ms-flex-preferred-size:calc(25% - 50px);flex-basis:calc(25% - 50px);max-width:calc(25% - 50px);}.wrap-5{-webkit-flex-basis:calc(20% - 50px);-ms-flex-preferred-size:calc(20% - 50px);flex-basis:calc(20% - 50px);max-width:calc(20% - 50px);}.vertical{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.flex-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text-center{text-align:center;}select{font-size:1rem;}@media screen and (max-width:720px){.wrap-mb{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.wrap-2-mb{-webkit-flex-basis:calc(50% - 20px);-ms-flex-preferred-size:calc(50% - 20px);flex-basis:calc(50% - 20px);max-width:calc(50% - 20px);}.produto.wrap-2-mb{-webkit-flex-basis:calc(50% - 50px);-ms-flex-preferred-size:calc(50% - 50px);flex-basis:calc(50% - 50px);max-width:calc(50% - 50px);}.horizontal-mb{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.horizontal{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxBUExJQ0FDQU9cXGxvamF2aXJ0dWFsXFxjb21wb25lbnRzXFxTdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHd0IsQUFJa0IsQUFHa0QsQUFLbkMsQUFLTixBQUVILEFBQ0osQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBRU0sQUFFWSxBQUlELEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFHTCxBQUdJLEFBR0YsQUFJUCxBQUlILEFBR1MsQUFFUSxBQUlBLEFBR0UsQUFDQSxTQTFFeEIsTUE2RE0sR0FqREcsQUE4Q3ZCLENBMURlLEtBUUksSUFxQlksS0FkZixBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsTUFYSyxnQkFxQnJCLENBM0JBLEFBT2tCLENBWUksQUEwQ08sWUFTVSxDQS9EcEIsSUFJQyxJQThCYSxBQThCTSxtQkFwQmhCLEVBTkEsTUFmUSxBQUlBLEFBSUEsQUFVUixBQWdCWSxBQUlBLEdBOUNILHdCQVNoQyxBQUlBLEFBSUEsQUEwQkksQUFJQSxJQTlDSixzREE0QndCLEVBTkEsTUFHQSIsImZpbGUiOiJGOlxcQVBMSUNBQ0FPXFxsb2phdmlydHVhbFxcY29tcG9uZW50c1xcU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXHJcbiAgICBcclxuICAgIGJvZHkgeyBcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDsgfVxyXG4gICAgYm9keSwgKiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyLFxyXG4gICAgLmNvbnRhaW5lci1iaWcge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IH1cclxuICAgIC5jb250YWluZXItYmlnIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE0NDAgcHg7IH1cclxuXHJcbiAgICAuZmxleCB7ZGlzcGxheTogZmxleDsgfVxyXG4gICAgLmZsZXgtMSB7ZmxleDogMTsgfVxyXG4gICAgLmZsZXgtMiB7ZmxleDogMjsgfVxyXG4gICAgLmZsZXgtMyB7ZmxleDogMzsgfVxyXG4gICAgLmZsZXgtNCB7ZmxleDogNDsgfVxyXG4gICAgLmZsZXgtNSB7ZmxleDogNTsgfVxyXG4gICAgLmZsZXgtNiB7ZmxleDogNjsgfVxyXG5cclxuICAgIC53cmFwIHtmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAgIC53cmFwLTEgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtMiB7IFxyXG4gICAgICAgIGZsYXgtYmFzaWM6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtMyB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMzIlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDMyJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtNCB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjUlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDI1JSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtNSB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDIwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbCB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG5cclxuICAgIC5mbGV4LWNlbnRlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmZsZXgtc3RhcnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgICAuZmxleC1yaWdodCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcblxyXG4gICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07IH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAud3JhcC1tYiB7ZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgICAgICAgLndyYXAtMi1tYiB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1dG8ud3JhcC0yLW1iIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaG9yaXpvbnRhbC1tYiB7ZmxleC1kaXJlY3Rpb246IHJvdzsgfVxyXG4gICAgICAgIC5ob3Jpem9udGFsIHtmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgICB9XHJcblxyXG4gICAgYH0gPC9zdHlsZT5cclxuKSJdfQ== */\n/*@ sourceURL=F:\\\\APLICACAO\\\\lojavirtual\\\\components\\\\Style.js */"));

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, versao, loja, baseImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versao", function() { return versao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loja", function() { return loja; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseImg", function() { return baseImg; });
const API = "http://localhost:3000",
      versao = "v1",
      loja = "60c262e53ebd9f09c080f59a",
      baseImg = API + "/public/images/";

/***/ }),

/***/ "./containers/Cabecalho/index.js":
/*!***************************************!*\
  !*** ./containers/Cabecalho/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Logo/Cabecalho */ "./components/Logo/Cabecalho.js");
/* harmony import */ var _components_Campos_Pesquisa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Campos/Pesquisa */ "./components/Campos/Pesquisa.js");
/* harmony import */ var _components_Cards_Carrinho__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Cards/Carrinho */ "./components/Cards/Carrinho.js");
/* harmony import */ var _components_Listas_Categorias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Listas/Categorias */ "./components/Listas/Categorias.js");
/* harmony import */ var _components_Cards_CarrinhoLimpo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Cards/CarrinhoLimpo */ "./components/Cards/CarrinhoLimpo.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Cabecalho\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class Cabecalho extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderCabecalhoNormal() {
    return __jsx("div", {
      className: "Header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "header-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, __jsx(_components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }), __jsx(_components_Campos_Pesquisa__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }), __jsx(_components_Cards_Carrinho__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }), __jsx(_components_Cards_CarrinhoLimpo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "categorias-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx(_components_Listas_Categorias__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    })));
  }

  renderCabecalhoSimples() {
    return __jsx("div", {
      className: "Header No-Links Header-Simples",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "header-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx(_components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    })));
  }

  render() {
    const {
      simples
    } = this.props;
    return simples ? this.renderCabecalhoSimples() : this.renderCabecalhoNormal();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cabecalho);

/***/ }),

/***/ "./containers/Carrinho/ListaDeProdutos.js":
/*!************************************************!*\
  !*** ./containers/Carrinho/ListaDeProdutos.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Carrinho\\ListaDeProdutos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class ListaDeProdutos extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  renderCabecalhoCarrinho(semAlteracoes) {
    return __jsx("div", {
      className: "carrinho-cabecalho no-mb-flex flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, "Quantidade")), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, "Pre\xE7o Unit\xE1rio")), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, "Pre\xE7o Total")), !semAlteracoes && __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 38
      }
    }));
  }

  changeQuantidade(e, quantidade, item, index) {
    //        console.log(e.target.value, quantidade, item.variacao.quantidade);
    if (Number(e.target.value) < 1) return;
    let novaQuantidade = Number(e.target.value);
    let change = novaQuantidade - quantidade;

    if (novaQuantidade >= item.variacao.quantidade) {
      return alert("Não temos essa quantidade em estoque.");
    }

    Object(_utils_cart__WEBPACK_IMPORTED_MODULE_5__["addCart"])({
      produto: item.produto._id,
      variacao: item.variacao._id,
      quantidade: change,
      precoUnitario: item.precoUnitario
    }, false);
    this.props.updateQuantidade(change, index);
  }

  removerProdutoCarrinho(index) {
    if (window.confirm("Você deseja realmente remover esse produto?")) {
      this.props.removerProduto(index);
    }
  }

  renderProduto(item, semAlteracoes, index) {
    if (!item.variacao || !item.variacao._id || !item.produto || !item.produto._id) return null;
    const foto = item.variacao.fotos && item.variacao.fotos.length > 0 ? item.variacao.fotos[0] : item.produto.fotos[0];
    const nome = item.produto.titulo + " - " + item.variacao.nome;
    const {
      quantidade,
      precoUnitario
    } = item;
    return __jsx("div", {
      key: index,
      className: "carrinho-item flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-4 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "produto-image flex-2 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _config__WEBPACK_IMPORTED_MODULE_1__["baseImg"] + foto,
      alt: nome,
      width: "100px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "produto-titulo flex-4 flex flex-start",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, nome))), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, semAlteracoes ? __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 26
      }
    }, quantidade) : __jsx("input", {
      type: "number",
      value: quantidade,
      className: "produto-quantidade",
      onChange: e => this.changeQuantidade(e, quantidade, item, index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 26
      }
    })), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(precoUnitario))), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(precoUnitario * quantidade))), !semAlteracoes && __jsx("div", {
      className: "flex-1 flex flex-center",
      onClick: () => this.removerProdutoCarrinho(index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "btn-remover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }, "Remover")));
  }

  renderProdutos(semAlteracoes) {
    return this.props.carrinho.map((item, index) => this.renderProduto(item, semAlteracoes, index));
  }

  render() {
    const {
      semAlteracoes,
      carrinho
    } = this.props;
    return __jsx("div", {
      className: "Lista-De-Produtos flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, this.renderCabecalhoCarrinho(semAlteracoes), carrinho && this.renderProdutos(semAlteracoes));
  }

}

const mapStateToProps = state => ({
  carrinho: state.carrinho.carrinho
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(ListaDeProdutos));

/***/ }),

/***/ "./containers/Checkout/CheckoutButton.js":
/*!***********************************************!*\
  !*** ./containers/Checkout/CheckoutButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Checkout\\CheckoutButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CheckoutButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      disabled: false,
      aviso: null
    });

    _defineProperty(this, "toggleDisabled", () => this.setState({
      disabled: !this.state.disabled
    }));
  }

  calcularValorTotal(carrinho, freteSelecionado) {
    const valorProdutos = carrinho.reduce((all, item) => all + Number(item.precoUnitario) * Number(item.quantidade), 0);
    const valorFrete = Number(freteSelecionado.Valor.replace(',', '.'));
    return valorProdutos + valorFrete;
  }

  validarFormulario() {
    const {
      nome,
      CPF,
      dataDeNascimento,
      telefone,
      local,
      numero,
      bairro,
      cidade,
      estado,
      CEP,
      dadosCobranca,
      dadosEntregaIgualDadosCobranca,
      CPFboleto,
      numeroCartao,
      nomeCartao,
      mesCartao,
      anoCartao,
      parcelasCartaoSelecionada,
      CVVCartao,
      credit_card_token
    } = this.props.form;
    const {
      tipoPagamentoSelecionado
    } = this.props;
    let temErro = false;
    if (!nome) temErro = true;
    if (!CPF || CPF.length !== 14) temErro = true;
    if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validateCPF"])(CPF)) temErro = true;
    if (!dataDeNascimento || dataDeNascimento.length !== 10) temErro = true;
    if (!telefone || telefone.length < 11) temErro = true;
    if (!local) temErro = true;
    if (!numero) temErro = true;
    if (!bairro) temErro = true;
    if (!cidade) temErro = true;
    if (!estado) temErro = true;
    if (!CEP || CEP.length !== 9) temErro = true;

    if (!dadosEntregaIgualDadosCobranca) {
      if (!dadosCobranca.local) temErro = true;
      if (!dadosCobranca.numero) temErro = true;
      if (!dadosCobranca.bairro) temErro = true;
      if (!dadosCobranca.cidade) temErro = true;
      if (!dadosCobranca.estado) temErro = true;
      if (!dadosCobranca.CEP || dadosCobranca.CEP.length !== 9) temErro = true;
    }

    if (tipoPagamentoSelecionado === "boleto") {
      if (!CPFboleto && !CPF) temErro = true;
      if (CPFboleto && CPFboleto.length !== 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validateCPF"])(CPFboleto)) temErro = true;
    } else {
      if (!numeroCartao || numeroCartao.length !== 19) temErro = true;
      if (!nomeCartao) temErro = true;
      if (!mesCartao || mesCartao.length !== 2) temErro = true;
      if (!anoCartao || anoCartao.length !== 4) temErro = true;
      if (!parcelasCartaoSelecionada) temErro = true;
      if (!credit_card_token) temErro = true;
      if (!CVVCartao || CVVCartao.length !== 3) temErro = true;
    }

    return !temErro;
  }

  validate() {
    const {
      freteSelecionado,
      tipoPagamentoSelecionado
    } = this.props;
    const validarFormulario = this.validarFormulario();
    return validarFormulario && freteSelecionado && tipoPagamentoSelecionado;
  }

  handleSubmit() {
    const {
      form,
      freteSelecionado,
      token,
      senderHash,
      tipoPagamentoSelecionado
    } = this.props;
    const carrinho = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_3__["getCart"])();
    const valorTotal = this.calcularValorTotal(carrinho, freteSelecionado);
    if (!this.validate()) return null;
    this.toggleDisabled();
    this.props.novoPedido(form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash, carrinho, error => {
      //                console.log('pedido finalizado');
      if (error) {
        this.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });
      }

      this.toggleDisabled();
    });
  }

  render() {
    return __jsx("div", {
      className: "flex flex-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_5__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-cta btn-success",
      disabled: this.state.disabled,
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, this.state.disabled ? "ENVIANDO..." : "CONCLUIR PEDIDO")));
  }

}

const mapStateToProps = state => ({
  carrinho: state.carrinho.carrinho,
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente,
  freteSelecionado: state.carrinho.freteSelecionado,
  form: state.checkout.form,
  token: state.auth.token,
  senderHash: state.checkout.senderHash,
  tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_2__["default"])(CheckoutButton));

/***/ }),

/***/ "./containers/Checkout/DadosCliente.js":
/*!*********************************************!*\
  !*** ./containers/Checkout/DadosCliente.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cliente_DadosCliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cliente/DadosCliente */ "./containers/Cliente/DadosCliente.js");
/* harmony import */ var _Cliente_ClienteLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cliente/ClienteLogin */ "./containers/Cliente/ClienteLogin.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Checkout\\DadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class DadosCliente extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.fetchCliente();
  }

  componentDidUpdate() {
    this.fetchCliente();
  }

  fetchCliente() {
    const {
      usuario,
      token,
      cliente
    } = this.props;

    if (usuario && token && !cliente) {
      this.props.fetchCliente(usuario._id, token);
    }
  }

  render() {
    const {
      usuario,
      permissaoInicial,
      permitir
    } = this.props;
    return usuario || permissaoInicial ? __jsx(_Cliente_DadosCliente__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }) : __jsx(_Cliente_ClienteLogin__WEBPACK_IMPORTED_MODULE_2__["default"], {
      permitir: permitir,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    });
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosCliente));

/***/ }),

/***/ "./containers/Checkout/DadosEntrega.js":
/*!*********************************************!*\
  !*** ./containers/Checkout/DadosEntrega.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Checkout\\DadosEntrega.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class DadosEntregaContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {
        dadosCobranca: {}
      }
    });

    _defineProperty(this, "onChange", (field, value, prefix) => this.props.setForm({
      [field]: value
    }, prefix).then(() => this.validate()));

    _defineProperty(this, "onChangeCEP", (field, value, prefix) => {
      this.props.setForm({
        [field]: value
      }, prefix).then(() => {
        this.validate();

        if (value.length === 9) {
          axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`https://viacep.com.br/ws/${value.replace('-', '')}/json/unicode`).then(response => {
            this.props.setForm({
              "local": response.data["logradouro"],
              "bairro": response.data["bairro"],
              "cidade": response.data["localidade"],
              "estado": response.data["uf"]
            }, prefix).then(() => this.validate());
          }).catch(e => console.log(e));
        }
      });
    });
  }

  componentDidMount() {
    this.fetchCliente();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cliente && this.props.cliente) {
      this.fetchCliente();
    }
  }

  fetchCliente() {
    const {
      cliente
    } = this.props;
    this.props.setForm({
      dadosEntregaIgualDadosCobranca: true,
      local: cliente ? cliente.endereco.local : "",
      numero: cliente ? cliente.endereco.numero : "",
      bairro: cliente ? cliente.endereco.bairro : "",
      complemento: cliente ? cliente.endereco.complemento : "",
      cidade: cliente ? cliente.endereco.cidade : "",
      estado: cliente ? cliente.endereco.estado : "",
      CEP: cliente ? cliente.endereco.CEP : "",
      dadosCobranca: {
        local: cliente ? cliente.endereco.local : "",
        numero: cliente ? cliente.endereco.numero : "",
        bairro: cliente ? cliente.endereco.bairro : "",
        complemento: cliente ? cliente.endereco.complemento : "",
        cidade: cliente ? cliente.endereco.cidade : "",
        estado: cliente ? cliente.endereco.estado : "",
        CEP: cliente ? cliente.endereco.CEP : ""
      }
    });
  }

  validate() {
    const {
      dadosEntregaIgualDadosCobranca,
      local,
      numero,
      bairro,
      cidade,
      estado,
      CEP,
      dadosCobranca
    } = this.props.form;
    const erros = {
      dadosCobranca: {}
    };
    if (!local) erros.local = "Preencha aqui com o seu endereço";
    if (!numero) erros.numero = "Preencha aqui com o seu número";
    if (!bairro) erros.bairro = "Preencha aqui com o seu bairro";
    if (!cidade) erros.cidade = "Preencha aqui com a sua cidade";
    if (!estado) erros.estado = "Selecione o seu estado";
    if (!CEP || CEP.length !== 9) erros.CEP = "Digite aqui seu CEP";

    if (!dadosEntregaIgualDadosCobranca) {
      if (!dadosCobranca.local) erros.dadosCobranca.local = "Preencha aqui com o seu endereço";
      if (!dadosCobranca.numero) erros.dadosCobranca.numero = "Preencha aqui com o seu número";
      if (!dadosCobranca.bairro) erros.dadosCobranca.bairro = "Preencha aqui com o seu bairro";
      if (!dadosCobranca.cidade) erros.dadosCobranca.cidade = "Preencha aqui com a sua cidade";
      if (!dadosCobranca.estado) erros.dadosCobranca.estado = "Selecione o seu estado";
      if (!dadosCobranca.CEP || dadosCobranca.CEP.length !== 9) erros.dadosCobranca.CEP = "Digite aqui seu CEP";
    }

    this.setState({
      erros
    });
    return Object.keys(erros).length === 1 && Object.keys(erros.dadosCobranca).length === 0;
  }

  renderDadosDeEntrega() {
    if (!this.props.form) return null;
    const {
      dadosEntregaIgualDadosCobranca,
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, "DADOS DE ENTREGA")), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CEP || "",
      erro: erros.CEP,
      name: "CEP",
      placeholder: "12345-789",
      label: "CEP",
      onChange: e => this.onChangeCEP("CEP", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatCEP"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: local || "",
      erro: erros.local,
      name: "local",
      placeholder: "Rua, Avenida, ...",
      label: "Endere\xE7o (Rua, Avenida,..)",
      onChange: e => this.onChange("local", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: numero || "",
      erro: erros.numero,
      name: "numero",
      placeholder: "9999",
      label: "N\xFAmero",
      onChange: e => this.onChange("numero", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: bairro || "",
      erro: erros.bairro,
      name: "bairro",
      placeholder: "Bairro",
      label: "Bairro",
      onChange: e => this.onChange("bairro", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: complemento || "",
      erro: erros.complemento,
      name: "complemento",
      placeholder: "Complemento",
      label: "Complemento",
      onChange: e => this.onChange("complemento", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: cidade || "",
      erro: erros.cidade,
      name: "cidade",
      placeholder: "Cidade",
      label: "Cidade",
      onChange: e => this.onChange("cidade", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex vertical form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }, "Estado"), __jsx("select", {
      value: estado,
      onChange: e => this.onChange("estado", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 25
      }
    }, __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 29
      }
    }, "Selecione..."), Object.keys(_utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"]).map(abbr => __jsx("option", {
      key: abbr,
      value: abbr,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 67
      }
    }, _utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"][abbr]))), erros.estado && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 44
      }
    }, erros.estado))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }
    }), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }, __jsx("input", {
      //                        checked={dadosEntregaIgualDadosCobranca || true} 
      checked: dadosEntregaIgualDadosCobranca,
      type: "checkbox",
      onChange: () => this.props.setForm({
        "dadosEntregaIgualDadosCobranca": !dadosEntregaIgualDadosCobranca
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }
    }), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }
    }, "\xA0Os dados de entrega s\xE3o iguais aos dados de cobran\xE7a")));
  }

  renderDadosDeCobranca() {
    if (!this.props.form || !this.props.form.dadosCobranca) return null;
    const {
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP
    } = this.props.form.dadosCobranca;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 21
      }
    }, "DADOS DE COBRAN\xC7A")), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CEP || "",
      erro: erros.dadosCobranca.CEP,
      name: "CEP",
      placeholder: "12345-789",
      label: "CEP",
      onChange: e => this.onChangeCEP("CEP", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatCEP"])(e.target.value), 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: local || "",
      erro: erros.dadosCobranca.local,
      name: "local",
      placeholder: "Rua, Avenida, ...",
      label: "Endere\xE7o (Rua, Avenida,..)",
      onChange: e => this.onChange("local", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: numero || "",
      erro: erros.dadosCobranca.numero,
      name: "numero",
      placeholder: "9999",
      label: "N\xFAmero",
      onChange: e => this.onChange("numero", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(e.target.value), 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: bairro || "",
      erro: erros.dadosCobranca.bairro,
      name: "bairro",
      placeholder: "Bairro",
      label: "Bairro",
      onChange: e => this.onChange("bairro", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: complemento || "",
      erro: erros.dadosCobranca.complemento,
      name: "complemento",
      placeholder: "Complemento",
      label: "Complemento",
      onChange: e => this.onChange("complemento", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: cidade || "",
      erro: erros.dadosCobranca.cidade,
      name: "cidade",
      placeholder: "Cidade",
      label: "Cidade",
      onChange: e => this.onChange("cidade", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex vertical form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    }, "Estado"), __jsx("select", {
      value: estado,
      onChange: e => this.onChange("estado", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 25
      }
    }, __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 29
      }
    }, "Selecione..."), Object.keys(_utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"]).map(abbr => __jsx("option", {
      key: abbr,
      value: abbr,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 67
      }
    }, _utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"][abbr]))), erros.dadosCobranca.estado && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 58
      }
    }, erros.dadosCobranca.estado))));
  }

  render() {
    const {
      dadosEntregaIgualDadosCobranca
    } = this.props.form;
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 13
      }
    }, this.renderDadosDeEntrega(), !dadosEntregaIgualDadosCobranca && this.renderDadosDeCobranca());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosEntregaContainer));

/***/ }),

/***/ "./containers/Checkout/DadosFrete.js":
/*!*******************************************!*\
  !*** ./containers/Checkout/DadosFrete.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormRadio */ "./components/Inputs/FormRadio.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Checkout\\DadosFrete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class DadosFrete extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const {
      form
    } = this.props;

    if (form) {
      this.props.calcularFrete(form.CEP, Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["getCart"])());
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.form.CEP !== this.props.form.CEP && this.props.form.CEP.length === 9) {
      this.props.calcularFrete(this.props.form.CEP, Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["getCart"])());
    }
  }

  selecionarFrete(frete) {
    this.props.selecionarFrete(frete);
  }

  render() {
    const {
      fretes,
      freteSelecionado
    } = this.props;
    return __jsx("div", {
      className: "Dados-Frete",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, "M\xC9TODOS DE ENTREGA"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, (fretes || []).map((frete, index) => __jsx("div", {
      className: "flex-1",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "frete_selecionado",
      checked: freteSelecionado ? freteSelecionado.Codigo === frete.Codigo : false,
      onChange: () => this.selecionarFrete(frete),
      label: `
                                        ${_utils__WEBPACK_IMPORTED_MODULE_5__["codigosCorreios"][frete.Codigo]} 
                                        (${frete.PrazoEntrega} dias úteis) - 
                                        ${Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatMoney"])(frete.Valor.replace(',', '.'))}
                                    `,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 33
      }
    })))));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  carrinho: state.carrinho.carrinho,
  cliente: state.cliente.cliente,
  form: state.checkout.form,
  fretes: state.carrinho.fretes,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosFrete));

/***/ }),

/***/ "./containers/Checkout/DadosPagamento.js":
/*!***********************************************!*\
  !*** ./containers/Checkout/DadosPagamento.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormRadio */ "./components/Inputs/FormRadio.js");
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Checkout\\DadosPagamento.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class DadosPagamento extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {}
    });

    _defineProperty(this, "onChange", (field, value) => this.props.setForm({
      [field]: value
    }).then(() => this.validate()));
  }

  componentDidMount() {
    this.props.getSessionPagamento();
  }

  componentDidUpdate(prevProps) {
    const {
      numeroCartao,
      mesCartao,
      anoCartao,
      CVVCartao,
      credit_card_token,
      bandeira_cartao,
      parcelasCartao
    } = this.props.form;
    /*
            console.log('dados pag-numcartao: ', numeroCartao);
            console.log('dados pag-mescartao: ', mesCartao);
            console.log('dados pag-anocartao: ', anoCartao);
            console.log('dados pag-cvvcartao: ', CVVCartao);
            console.log('dados pag-credit-card-token-cartao: ', credit_card_token);
            console.log('dados pag-bandeiracartao: ', bandeira_cartao);
            console.log('dados pag-parcelascartao: ', parcelasCartao);
    */

    if (!bandeira_cartao && numeroCartao && numeroCartao.split('').join('').length > 7) {
      this.getBrand();
    }

    if (!credit_card_token && numeroCartao && numeroCartao.split('').join('').length === 16 && mesCartao && mesCartao.length === 2 && anoCartao && anoCartao.length === 4 && CVVCartao && CVVCartao.length === 3 && bandeira_cartao) this.submitCartaoHash();
    if (!parcelasCartao && bandeira_cartao || parcelasCartao && bandeira_cartao && prevProps.freteSelecionado !== this.props.freteSelecionado) this.getParcelas();
  }

  getBrand() {
    const {
      numeroCartao
    } = this.props.form; //        console.log('getbrand: ', numeroCartao)

    PagSeguroDirectPayment.getBrand({
      cardBin: numeroCartao.split('').join('').slice(0, 6),
      success: r => {
        //                console.log('bandeiras: ', r);
        this.props.setForm({
          bandeira_cartao: r.brand
        });
      },
      error: r => console.log(r)
    });
  }

  submitCartaoHash() {
    const {
      numeroCartao,
      mesCartao,
      anoCartao,
      CVVCartao,
      bandeira_cartao
    } = this.props.form;
    /*        
            console.log('submitCartaoHash-numcartao: ', numeroCartao);
            console.log('submitCartaoHash-mescartao: ', mesCartao);
            console.log('submitCartaoHash-anocartao: ', anoCartao);
            console.log('submitCartaoHash-cvvcartao: ', CVVCartao);
            console.log('submitCartaoHash-bandeiracartao: ', bandeira_cartao);
    */

    const params = {
      cardNumber: numeroCartao.split('').join(''),
      brand: bandeira_cartao.name,
      cvv: CVVCartao,
      expirationMonth: mesCartao,
      expirationYear: anoCartao,
      success: r => {
        //                console.log('credit card token:', r);
        this.props.setForm({
          credit_card_token: r.card.token
        });
      },
      error: r => console.log(r)
    };
    PagSeguroDirectPayment.createCardToken(params);
  }

  getParcelas() {
    const {
      freteSelecionado,
      carrinho
    } = this.props;
    const {
      bandeira_cartao
    } = this.props.form;
    /*
            console.log('parcelas-frete selecionado: ', freteSelecionado);
            console.log('parcelas-carrinho: ', carrinho);
            console.log('parcelas-bandeiracartao: ', bandeira_cartao);
    */

    let valorTotal = carrinho.reduce((all, item) => all + Number(item.precoUnitario) * Number(item.quantidade), 0);
    let freteValor = Number(freteSelecionado.Valor.replace(',', '.'));
    PagSeguroDirectPayment.getInstallments({
      amount: valorTotal + freteValor,
      maxInstallmentNoInterest: 6,
      maxInstallment: 6,
      brand: bandeira_cartao.name,
      success: data => {
        //                console.log(data);                
        this.props.setForm({
          parcelasCartao: data.installments
        });
        this.props.setForm({
          parcelasCartaoSelecionada: data.installments[bandeira_cartao.name][0]
        });
      },
      error: r => console.log(r)
    });
  }

  renderOpcoesPagamento() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    return __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "tipo_pagamento_selecionado",
      checked: tipoPagamentoSelecionado === 'boleto',
      onChange: () => this.props.setTipoPagamento("boleto"),
      label: "Boleto Banc\xE1rio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "tipo_pagamento_selecionado",
      checked: tipoPagamentoSelecionado === 'cartao',
      onChange: () => this.props.setTipoPagamento("cartao"),
      label: "Cart\xE3o de Cr\xE9dito",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    })));
  }

  validate() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    const {
      CPF,
      CPFboleto,
      numeroCartao,
      nomeCartao,
      mesCartao,
      anoCartao,
      parcelasCartaoSelecionada,
      CVVCartao
    } = this.props.form;
    const erros = {};

    if (tipoPagamentoSelecionado === "boleto") {
      if (!CPFboleto && !CPF) erros.CPFboleto = "Preencha aqui com o seu CPF";
      if (CPFboleto && CPFboleto.length !== 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_7__["validateCPF"])(CPFboleto)) erros.CPFboleto = "Preencha aqui com o seu CPF corretamente";
    }

    ;

    if (tipoPagamentoSelecionado === "cartao") {
      if (!numeroCartao || numeroCartao.length !== 19) erros.numeroCartao = "Preencha aqui com o número do seu cartão";
      if (!nomeCartao) erros.nomeCartao = "Preencha aqui com o nome que está no cartão";
      if (!mesCartao || mesCartao.length !== 2) erros.mesCartao = "Preencha aqui com o mês de vencimento do cartão";
      if (!anoCartao || anoCartao.length !== 4) erros.anoCartao = "Preencha aqui com o ano de vencimento do cartão";
      if (!parcelasCartaoSelecionada) erros.parcelasCartaoSelecionada = "Selecione uma forma de pagamento";
      if (!CVVCartao || CVVCartao.length !== 3) erros.CVVCartao = "Preencha aqui com o código de segurança do cartão";
    }

    ;
    this.setState({
      erros
    });
    return !(Object.keys(erros).length > 0);
  }

  renderPagamentoComBoleto() {
    const {
      CPF,
      CPFboleto
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "Dados-Pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: CPFboleto || CPF,
      name: "CPF",
      erro: erros.CPFboleto,
      placeholder: "CPF",
      label: "CPF",
      onChange: e => this.onChange("CPFboleto", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatCPF"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }
    }));
  }

  renderPagamentoComCartao() {
    const {
      nomeCartao,
      numeroCartao,
      CVVCartao,
      mesCartao,
      anoCartao,
      parcelasCartao,
      parcelasCartaoSelecionada,
      bandeira_cartao
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "Dados-Pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 13
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: nomeCartao,
      erro: erros.nomeCartao,
      name: "nomeCartao",
      placeholder: "Nome como escrito no cart\xE3o",
      label: "Nome Completo no Cart\xE3o",
      onChange: e => this.onChange("nomeCartao", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: numeroCartao,
      erro: erros.numeroCartao,
      name: "numeroCartao",
      placeholder: "XXXX XXXX XXXX XXXX",
      label: "N\xFAmero do Cart\xE3o",
      onChange: e => this.onChange("numeroCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatCartao"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: CVVCartao,
      erro: erros.CVVCartao,
      name: "CVVCartao",
      placeholder: "XXX",
      label: "C\xF3digo de Seguran\xE7a do Cart\xE3o",
      onChange: e => this.onChange("CVVCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 3)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 21
      }
    }, " Data de Validade ")), __jsx("div", {
      className: "flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: mesCartao,
      erro: erros.mesCartao,
      name: "mesCartao",
      placeholder: "MM",
      label: "M\xEAs",
      onChange: e => this.onChange("mesCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 2)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 21
      }
    }), __jsx("span", {
      className: "slash-pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 21
      }
    }, " \xA0 / \xA0 "), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: anoCartao,
      erro: erros.anoCartao,
      name: "anoCartao",
      placeholder: "AAAA",
      label: "Ano",
      onChange: e => this.onChange("anoCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 4)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 21
      }
    })), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 21
      }
    }, " Parcelas ")), parcelasCartao && parcelasCartaoSelecionada && __jsx("div", {
      className: "flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 25
      }
    }, __jsx("select", {
      name: "parcela",
      value: parcelasCartaoSelecionada.quantity,
      onChange: e => this.onChange("parcelasCartaoSelecionada", parcelasCartao[bandeira_cartao.name][e.target.value - 1]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 29
      }
    }, !parcelasCartaoSelecionada && __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 37
      }
    }, " Selecione a quantidade de parcelas para pagamento "), parcelasCartao[bandeira_cartao.name].slice(0, 6).map((item, index) => __jsx("option", {
      key: index,
      value: item.quantity,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 41
      }
    }, item.quantity, " x de ", Object(_utils__WEBPACK_IMPORTED_MODULE_6__["formatMoney"])(item.totalAmount / item.quantity), " sem juros"))), erros.parcelasCartaoSelecionada && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 33
      }
    }, " ", erros.parcelasCartaoSelecionada, " ")));
  }

  render() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    return __jsx("div", {
      className: "Dados-Pagamento-Container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 17
      }
    }, " DADOS DE PAGAMENTO "), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 17
      }
    }), this.renderOpcoesPagamento(), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }
    }), tipoPagamentoSelecionado === 'boleto' && this.renderPagamentoComBoleto(), tipoPagamentoSelecionado === 'cartao' && this.renderPagamentoComCartao());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  carrinho: state.carrinho.carrinho,
  cliente: state.cliente.cliente,
  form: state.checkout.form,
  tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado,
  sessionId: state.checkout.sessionId,
  senderHash: state.checkout.senderHash,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosPagamento));

/***/ }),

/***/ "./containers/Checkout/DadosPedido.js":
/*!********************************************!*\
  !*** ./containers/Checkout/DadosPedido.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carrinho_ListaDeProdutos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Carrinho/ListaDeProdutos */ "./containers/Carrinho/ListaDeProdutos.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Checkout\\DadosPedido.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DadosPedido extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "Dados-Pedido-Container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "DADOS DO PEDIDO"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), __jsx(_Carrinho_ListaDeProdutos__WEBPACK_IMPORTED_MODULE_1__["default"], {
      semAlteracoes: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DadosPedido);

/***/ }),

/***/ "./containers/Checkout/SubmitDadosCliente.js":
/*!***************************************************!*\
  !*** ./containers/Checkout/SubmitDadosCliente.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Checkout\\SubmitDadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class SubmitDadosCliente extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      aviso: null
    });

    _defineProperty(this, "callback", error => {
      if (!error) {
        this.props.permitir();
        this.setState({
          aviso: null
        });
      } else {
        this.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });
      }
    });

    _defineProperty(this, "validate", () => {
      const {
        email,
        senha,
        nome,
        CPF,
        dataDeNascimento,
        telefone,
        local,
        numero,
        bairro,
        cidade,
        estado,
        CEP
      } = this.props.form;
      const {
        usuario
      } = this.props;
      let temErro = false;
      if (!usuario && !email) temErro = true;
      if (!usuario && !senha) temErro = true;
      if (!nome) temErro = true;
      if (!CPF || CPF.length !== 14) temErro = true;
      if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__["validateCPF"])(CPF)) temErro = true;
      if (!dataDeNascimento || dataDeNascimento.length !== 10) temErro = true;
      if (!telefone || telefone.length < 11) temErro = true;
      if (!local) temErro = true;
      if (!numero) temErro = true;
      if (!bairro) temErro = true;
      if (!cidade) temErro = true;
      if (!estado) temErro = true;
      if (!CEP || CEP.length !== 9) temErro = true;
      return !temErro;
    });
  }

  handleSubmit() {
    if (!this.validate()) return null;
    const {
      token,
      form,
      cliente
    } = this.props;
    if (!token) this.props.newCliente(form, this.callback);else this.props.updateCliente(form, cliente._id, token, this.callback);
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_1__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex flex-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, __jsx("button", {
      className: "btn btn-success btn-cta",
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, "CONTINUAR PEDIDO")));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(SubmitDadosCliente));

/***/ }),

/***/ "./containers/Checkout/index.js":
/*!**************************************!*\
  !*** ./containers/Checkout/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DadosCliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DadosCliente */ "./containers/Checkout/DadosCliente.js");
/* harmony import */ var _DadosEntrega__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DadosEntrega */ "./containers/Checkout/DadosEntrega.js");
/* harmony import */ var _SubmitDadosCliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitDadosCliente */ "./containers/Checkout/SubmitDadosCliente.js");
/* harmony import */ var _DadosFrete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DadosFrete */ "./containers/Checkout/DadosFrete.js");
/* harmony import */ var _DadosPagamento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DadosPagamento */ "./containers/Checkout/DadosPagamento.js");
/* harmony import */ var _DadosPedido__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DadosPedido */ "./containers/Checkout/DadosPedido.js");
/* harmony import */ var _CheckoutButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckoutButton */ "./containers/Checkout/CheckoutButton.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Checkout\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class CheckoutContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      permissaoInicial: false,
      permissaoCheckout: false
    });
  }

  render() {
    const {
      permissaoInicial,
      permissaoCheckout
    } = this.state;
    const {
      usuario,
      freteSelecionado
    } = this.props;
    return __jsx("div", {
      className: "Checkout container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, "CONCLUINDO SEU PEDIDO"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }), __jsx(_DadosCliente__WEBPACK_IMPORTED_MODULE_1__["default"], {
      usuario: usuario,
      permissaoInicial: permissaoInicial,
      permitir: () => this.setState({
        permissaoInicial: true
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }), (permissaoInicial || usuario) && __jsx(_DadosEntrega__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 54
      }
    }), (permissaoInicial || usuario) && __jsx(_SubmitDadosCliente__WEBPACK_IMPORTED_MODULE_3__["default"], {
      permitir: () => this.setState({
        permissaoCheckout: true
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }), permissaoCheckout && __jsx(_DadosFrete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 40
      }
    }), permissaoCheckout && freteSelecionado && __jsx(_DadosPagamento__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 60
      }
    }), permissaoCheckout && freteSelecionado && __jsx(_DadosPedido__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 60
      }
    }), permissaoCheckout && freteSelecionado && __jsx(_CheckoutButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 60
      }
    }));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_9__["default"])(CheckoutContainer));

/***/ }),

/***/ "./containers/Cliente/ClienteLogin.js":
/*!********************************************!*\
  !*** ./containers/Cliente/ClienteLogin.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Cliente\\ClienteLogin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ClienteLogin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: "",
      senha: "",
      aviso: null,
      erros: {}
    });

    _defineProperty(this, "onChange", (field, e) => this.setState({
      [field]: e.target.value
    }, () => this.validate()));
  }

  renderAvisoDeRegistro() {
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, "Comprar como Visitante/Realizar Registro"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-success",
      onClick: () => this.props.permitir(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }, "CONTINUAR")));
  }

  validate() {
    const {
      email,
      senha
    } = this.state;
    const erros = {};
    if (!email) erros.email = "Preencha aqui com o seu email";
    if (!senha) erros.senha = "Preencha aqui com a sua senha";
    this.setState({
      erros,
      aviso: null
    });
    return !(Object.keys(erros).length > 0);
  }

  handleSubmit() {
    if (!this.validate()) return null;
    const {
      email,
      senha
    } = this.state;
    this.props.autenticar({
      email,
      password: senha
    }, false, error => {
      if (error) this.setState({
        aviso: {
          status: false,
          message: error.message
        }
      });
    });
  }

  renderFormLogin() {
    const {
      email,
      senha,
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, "Fazer Login"), __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_4__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: email,
      name: "email",
      label: "E-mail",
      erro: erros.email,
      placeholder: "E-mail",
      onChange: e => this.onChange("email", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: senha,
      name: "senha",
      erro: erros.senha,
      label: "Senha",
      type: "password",
      placeholder: "Senha",
      onChange: e => this.onChange("senha", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-success",
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, "ENTRAR")));
  }

  render() {
    return __jsx("div", {
      className: "Cliente-Login flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, this.renderAvisoDeRegistro(), this.renderFormLogin());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(ClienteLogin));

/***/ }),

/***/ "./containers/Cliente/DadosCliente.js":
/*!********************************************!*\
  !*** ./containers/Cliente/DadosCliente.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Cliente\\DadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class DadosClienteContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {}
    });

    _defineProperty(this, "onChange", (field, e, value) => {
      this.props.setForm({
        [field]: value || e.target.value
      }, null).then(() => this.validate());
    });
  }

  componentDidMount() {
    this.props.setForm({
      email: "",
      senha: "",
      nome: this.props.cliente ? this.props.cliente.nome : "",
      CPF: this.props.cliente ? this.props.cliente.cpf : "",
      telefone: this.props.cliente && this.props.cliente.telefones ? this.props.cliente.telefones[0] : "",
      dataDeNascimento: this.props.cliente ? moment__WEBPACK_IMPORTED_MODULE_4___default()(this.props.cliente.dataDeNascimento).format("DD/MM/YYYY") : ""
    });
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cliente && this.props.cliente) {
      const {
        nome,
        cpf,
        telefones,
        dataDeNascimento
      } = this.props.cliente;
      this.props.setForm({
        nome,
        CPF: cpf,
        telefone: telefones[0],
        dataDeNascimento: moment__WEBPACK_IMPORTED_MODULE_4___default()(dataDeNascimento).format("DD/MM/YYYY")
      });
    }
  }

  validate() {
    const {
      email,
      senha,
      nome,
      CPF,
      dataDeNascimento,
      telefone
    } = this.props.form;
    const {
      usuario
    } = this.props;
    const erros = {};
    if (!usuario && !email) erros.email = "Preencha aqui com o seu email";
    if (!usuario && !senha) erros.senha = "Preencha aqui com a sua senha";
    if (!nome) erros.nome = "Preencha aqui com o seu nome";
    if (!CPF || CPF.length !== 14) erros.CPF = "Preencha aqui com o seu CPF";
    if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_5__["validateCPF"])(CPF)) erros.CPF = "Preencha aqui com o seu CPF corretamente";
    if (!dataDeNascimento || dataDeNascimento.length !== 10) erros.dataDeNascimento = "Preencha aqui com a sua data de nascimento";
    if (!telefone || telefone.length < 11) erros.telefone = "Preencha aqui com o seu telefone";
    this.setState({
      erros
    });
    return !(Object.keys(erros).length > 0);
  }

  renderDadosRegistro() {
    const {
      email,
      senha
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: email || "",
      name: "email",
      placeholder: "E-mail",
      label: "E-mail",
      erro: erros.email,
      onChange: e => this.onChange("email", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: senha || "",
      name: "senha",
      placeholder: "Senha",
      label: "Senha",
      type: "senha",
      erro: erros.senha,
      onChange: e => this.onChange("senha", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    })));
  }

  renderDadosUsuario() {
    const {
      nome,
      CPF,
      dataDeNascimento,
      telefone
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: nome || "",
      name: "nome",
      placeholder: "Nome",
      label: "Nome",
      erro: erros.nome,
      onChange: e => this.onChange("nome", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CPF || "",
      name: "CPF",
      placeholder: "CPF",
      label: "CPF",
      erro: erros.CPF,
      onChange: e => this.onChange("CPF", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatCPF"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: dataDeNascimento || "",
      erro: erros.dataDeNascimento,
      name: "dataDeNascimento",
      placeholder: "DD/MM/AAAA",
      label: "Data de Nascimento",
      onChange: e => this.onChange("dataDeNascimento", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatDataDeNascimento"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: telefone || "",
      erro: erros.telefone,
      name: "telefone",
      placeholder: "(34) 1234-5678",
      label: "Telefone/Celular",
      onChange: e => this.onChange("telefone", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatTelefone"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }))));
  }

  render() {
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }
    }, " DADOS DO CLIENTE ")), !this.props.usuario && this.renderDadosRegistro(), this.renderDadosUsuario());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosClienteContainer));

/***/ }),

/***/ "./containers/Rodape/index.js":
/*!************************************!*\
  !*** ./containers/Rodape/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Listas_Paginas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Listas/Paginas */ "./components/Listas/Paginas.js");
/* harmony import */ var _components_Listas_RedesSociais__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Listas/RedesSociais */ "./components/Listas/RedesSociais.js");
/* harmony import */ var _components_Item_DadosDaLoja__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Item/DadosDaLoja */ "./components/Item/DadosDaLoja.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\containers\\Rodape\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Rodape extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "Rodape",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx(_components_Listas_Paginas__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }), __jsx(_components_Listas_RedesSociais__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }), __jsx(_components_Item_DadosDaLoja__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Rodape);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _containers_Cabecalho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Cabecalho */ "./containers/Cabecalho/index.js");
/* harmony import */ var _containers_Checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Checkout */ "./containers/Checkout/index.js");
/* harmony import */ var _containers_Rodape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Rodape */ "./containers/Rodape/index.js");
var _jsxFileName = "F:\\APLICACAO\\lojavirtual\\pages\\checkout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Checkout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps({
    res
  }) {
    if (res) {
      res.writeHead(302, {
        Location: "/carrinho"
      });
      res.end();
    }

    return {};
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Check-out | LOJA IT - Melhores produtos de tecnologia",
      pagSeguro: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(_containers_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      simples: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }), __jsx(_containers_Checkout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx(_containers_Rodape__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }));
  }

}

/***/ }),

/***/ "./redux/actions/authActions.js":
/*!**************************************!*\
  !*** ./redux/actions/authActions.js ***!
  \**************************************/
/*! exports provided: reauthenticate, getUser, autenticar, desautenticar, updateSenha, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reauthenticate", function() { return reauthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autenticar", function() { return autenticar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desautenticar", function() { return desautenticar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSenha", function() { return updateSenha; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _clienteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clienteActions */ "./redux/actions/clienteActions.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");








const reauthenticate = token => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR_TOKEN"],
  payload: token
});
const getUser = ({
  token
}) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER"],
    payload: response.data.usuario
  })).catch(e => console.log(e));
};
const autenticar = ({
  email,
  password
}, goTo = false, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios/login`, {
    email,
    password
  }).then(response => {
    Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_4__["setCookie"])('token', response.data.usuario.token);
    if (goTo) next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(goTo);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR"],
      payload: response.data
    });
    dispatch(Object(_clienteActions__WEBPACK_IMPORTED_MODULE_3__["fetchCliente"])(response.data.usuario._id, response.data.usuario.token));
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const desautenticar = () => dispatch => {
  Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_4__["removeCookie"])('token');
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DESAUTENTICAR"]
  });
};
const updateSenha = (data, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios`, {
    password: data.novaSenha
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["USER"],
      payload: response.data.usuario
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  reauthenticate,
  getUser,
  autenticar,
  desautenticar,
  updateSenha
});

/***/ }),

/***/ "./redux/actions/carrinhoActions.js":
/*!******************************************!*\
  !*** ./redux/actions/carrinhoActions.js ***!
  \******************************************/
/*! exports provided: setCarrinho, cleanCarrinho, fetchProdutoCarrinho, fetchVariacoesCarrinho, calcularFrete, removerProduto, updateQuantidade, selecionarFrete, cleanFretes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCarrinho", function() { return setCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanCarrinho", function() { return cleanCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutoCarrinho", function() { return fetchProdutoCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariacoesCarrinho", function() { return fetchVariacoesCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcularFrete", function() { return calcularFrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removerProduto", function() { return removerProduto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQuantidade", function() { return updateQuantidade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selecionarFrete", function() { return selecionarFrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanFretes", function() { return cleanFretes; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./redux/types.js");




const setCarrinho = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_CARRINHO"],
  carrinho: Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["getCart"])()
});
const cleanCarrinho = () => {
  //    console.log('limpar carrinho');
  Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["cleanCart"])();
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["CLEAN_CARRINHO"]
  };
};
const fetchProdutoCarrinho = (id, idxCarrinho) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/produtos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_1__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUTO_CARRINHO"],
    payload: response.data,
    idxCarrinho
  })).catch(e => console.log(e));
};
const fetchVariacoesCarrinho = (id, produto, idxCarrinho) => dispatch => {
  //    console.log(id, produto, idxCarrinho, loja)
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/variacoes/${id}?produto=${produto}&loja=${_config__WEBPACK_IMPORTED_MODULE_1__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_VARIACAO_CARRINHO"],
    payload: response.data,
    idxCarrinho
  })).catch(e => console.log(e));
};
const calcularFrete = (cep, carrinho) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/entregas/calcular`, {
    cep,
    carrinho
  }).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_VALOR_ENTREGA"],
    payload: response.data,
    cep
  })).catch(e => console.log(e));
};
const removerProduto = index => {
  Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["removeCart"])(index);
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["REMOVE_PROD_CART"],
    idxCarrinho: index
  };
};
const updateQuantidade = (change, index) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_QTD_CART"],
  change,
  idxCarrinho: index
});
const selecionarFrete = freteSelecionado => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_FRETE_CART"],
  freteSelecionado
});
const cleanFretes = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["CLEAN_FRETES"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  setCarrinho,
  cleanCarrinho,
  fetchProdutoCarrinho,
  fetchVariacoesCarrinho,
  calcularFrete,
  updateQuantidade,
  selecionarFrete,
  removerProduto,
  cleanFretes
});

/***/ }),

/***/ "./redux/actions/categoriaActions.js":
/*!*******************************************!*\
  !*** ./redux/actions/categoriaActions.js ***!
  \*******************************************/
/*! exports provided: fetchCategorias, fetchCategoria, fetchProdutosCategoria, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategorias", function() { return fetchCategorias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategoria", function() { return fetchCategoria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosCategoria", function() { return fetchProdutosCategoria; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");



const fetchCategorias = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/disponiveis?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIAS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchCategoria = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchProdutosCategoria = (id, atual = 0, limit = 20) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/${id}/produtos?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${atual}&limit=${limit}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA_PRODUTOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCategorias,
  fetchCategoria,
  fetchProdutosCategoria
});

/***/ }),

/***/ "./redux/actions/checkoutActions.js":
/*!******************************************!*\
  !*** ./redux/actions/checkoutActions.js ***!
  \******************************************/
/*! exports provided: setForm, cleanForm, setTipoPagamento, getSessionPagamento, novoPedido, pagarPedido, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setForm", function() { return setForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanForm", function() { return cleanForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTipoPagamento", function() { return setTipoPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionPagamento", function() { return getSessionPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "novoPedido", function() { return novoPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagarPedido", function() { return pagarPedido; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _carrinhoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carrinhoActions */ "./redux/actions/carrinhoActions.js");








const setForm = (payload, prefix) => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_FORM"],
    payload,
    prefix
  });
  return Promise.resolve();
};
const cleanForm = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_FORM"]
});
const setTipoPagamento = tipoPagamentoSelecionado => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_TIPO_PAGAMENTO"],
  tipoPagamentoSelecionado
});
const getSessionPagamento = () => dispatch => {
  //    console.log('pulei 1');
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pagamentos/session`).then(response => {
    //        console.log('getsessionpagamento: ', response.data),
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SESSION_ID"],
      payload: response.data
    });
    PagSeguroDirectPayment.setSessionId(response.data.sessionId);
    let senderHash = PagSeguroDirectPayment.getSenderHash();
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SENDER_HASH"],
      senderHash
    });
  }).catch(e => console.log(e));
};
const novoPedido = (form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash, carrinho = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_3__["getCart"])(), cb = null) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pedidos?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    carrinho,
    entrega: {
      custo: freteSelecionado.Valor.replace(',', '.'),
      tipo: freteSelecionado.Codigo.toString(),
      prazo: freteSelecionado.PrazoEntrega,
      endereco: {
        local: form.local,
        numero: form.numero,
        complemento: form.complemento,
        bairro: form.bairro,
        cidade: form.cidade,
        estado: form.estado,
        CEP: form.CEP
      }
    },
    pagamento: {
      valor: tipoPagamentoSelecionado === "cartao" ? form.parcelasCartaoSelecionada.totalAmount : valorTotal,
      forma: tipoPagamentoSelecionado === "cartao" ? "creditCard" : "boleto",
      parcelas: tipoPagamentoSelecionado === "cartao" ? form.parcelasCartaoSelecionada.quantity : 1,
      enderecoEntregaIgualCobranca: form.dadosEntregaIgualDadosCobranca,
      endereco: {
        local: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.local : form.local,
        numero: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.numero : form.numero,
        complemento: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.complemento : form.complemento,
        bairro: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.bairro : form.bairro,
        cidade: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.cidade : form.cidade,
        estado: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.estado : form.estado,
        CEP: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.CEP : form.CEP
      },
      cartao: tipoPagamentoSelecionado === "cartao" ? {
        nomeCompleto: form.nomeCartao.trim(),
        codigoArea: form.telefone.slice(0, 2),
        telefone: form.telefone.slice(2).trim(),
        dataDeNascimento: form.dataDeNascimento,
        credit_card_token: form.credit_card_token,
        cpf: form.CPF
      } : undefined
    }
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["NOVO_PEDIDO"],
      payload: response.data
    });
    dispatch(pagarPedido(response.data.pedido.pagamento._id, token, senderHash, cb));
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_5__["default"])(e)));
};
const pagarPedido = (id, token, senderHash, cb = null) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pagamentos/pagar/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    senderHash
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["PAGAR_PEDIDO"],
      payload: response.data
    });
    cb(null);
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/sucesso');
    dispatch(Object(_carrinhoActions__WEBPACK_IMPORTED_MODULE_7__["cleanCarrinho"])());
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_5__["default"])(e)));
};
/*
export const pagarPedido= (id, token, senderHash, cb = null) => dispatch => {
    cb(null);
    Router.push('/sucesso');
    dispatch(cleanCarrinho());        
};
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  setForm,
  cleanForm,
  setTipoPagamento,
  getSessionPagamento,
  novoPedido,
  pagarPedido
});

/***/ }),

/***/ "./redux/actions/clienteActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/clienteActions.js ***!
  \*****************************************/
/*! exports provided: getRawData, fetchCliente, newCliente, updateCliente, logoutCliente, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRawData", function() { return getRawData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCliente", function() { return fetchCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCliente", function() { return newCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCliente", function() { return updateCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutCliente", function() { return logoutCliente; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");








const getRawData = data => {
  let _data = data.split('/');

  let ano = _data[2];

  let _mes = Number(_data[1]);

  let mes = _mes < 10 ? "0" + _mes : _mes;

  let _dia = Number(_data[0]);

  let dia = _dia < 10 ? "0" + _dia : _dia;
  return `${ano}-${mes}-${dia}`;
};
const fetchCliente = (id, token) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(resposta => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: resposta.data
    });
  }).catch(e => console.log(e));
};
const newCliente = (form, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    nome: form.nome,
    senha: form.senha,
    cpf: form.CPF,
    email: form.email,
    telefones: [form.telefone],
    endereco: {
      local: form.local,
      numero: form.numero,
      complemento: form.complemento,
      bairro: form.bairro,
      cidade: form.cidade,
      estado: form.estado,
      CEP: form.CEP
    },
    dataDeNascimento: getRawData(form.dataDeNascimento)
  }).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: response.data
    });
    dispatch(Object(_authActions__WEBPACK_IMPORTED_MODULE_6__["autenticar"])({
      email: form.email,
      senha: form.senha
    }, null, cb));
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const updateCliente = (form, id, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    nome: form.nome,
    cpf: form.CPF,
    telefones: [form.telefone],
    endereco: {
      local: form.local,
      numero: form.numero,
      complemento: form.complemento,
      bairro: form.bairro,
      cidade: form.cidade,
      estado: form.estado,
      CEP: form.CEP
    },
    dataDeNascimento: getRawData(form.dataDeNascimento)
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const logoutCliente = () => dispatch => {
  dispatch(Object(_authActions__WEBPACK_IMPORTED_MODULE_6__["desautenticar"])());
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CLIENTE"]
  });
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCliente,
  newCliente,
  updateCliente,
  logoutCliente
});

/***/ }),

/***/ "./redux/actions/errorHandling.js":
/*!****************************************!*\
  !*** ./redux/actions/errorHandling.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const errorHandling = error => {
  console.log(error, error.response ? error.response.data : null);

  if (!error.response || !error.response.data) {
    return {
      status: 500,
      message: "Ocorreu um erro no servidor. Tente novamente."
    };
  }

  if (error.response.data.status === 401) {
    return {
      status: 401,
      message: "Você não tem autorização para acessar esses dados."
    };
  }

  const _errors = error.response.data.errors || error.response.data.error;

  if (_errors && typeof _errors === "string") return {
    status: 400,
    message: _errors
  };
  let msg = 'Erro: ';

  if (!Array.isArray(_errors)) {
    Object.keys(_errors).forEach((erro, index) => {
      msg += `${erro} ${_errors[erro].message || (_errors[erro].properties ? _errors[erro].properties.message : "") || _errors[erro]}\n`; //            msg += `${erro} ${_errors[erro].message || _errors[erro]}\n`;
    });
  } else {
    msg += `Preencha corretamente ${_errors.length > 1 ? "os campos " : "o campo "} de:`;

    _errors.forEach((item, index) => {
      const field = item.field[item.field.length - 1];
      msg += ` ${field}${index === _errors.length - 1 ? "." : ","}`;
    });
  }

  return {
    status: 400,
    message: msg
  };
};

/* harmony default export */ __webpack_exports__["default"] = (errorHandling);

/***/ }),

/***/ "./redux/actions/helpers.js":
/*!**********************************!*\
  !*** ./redux/actions/helpers.js ***!
  \**********************************/
/*! exports provided: getHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders", function() { return getHeaders; });
const getHeaders = token => ({
  headers: {
    "Authorization": `Ecommerce ${token}`
  }
});

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _categoriaActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoriaActions */ "./redux/actions/categoriaActions.js");
/* harmony import */ var _lojaActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lojaActions */ "./redux/actions/lojaActions.js");
/* harmony import */ var _produtoActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtoActions */ "./redux/actions/produtoActions.js");
/* harmony import */ var _carrinhoActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carrinhoActions */ "./redux/actions/carrinhoActions.js");
/* harmony import */ var _clienteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clienteActions */ "./redux/actions/clienteActions.js");
/* harmony import */ var _checkoutActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkoutActions */ "./redux/actions/checkoutActions.js");
/* harmony import */ var _pedidoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pedidoActions */ "./redux/actions/pedidoActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _authActions__WEBPACK_IMPORTED_MODULE_0__["default"]), _categoriaActions__WEBPACK_IMPORTED_MODULE_1__["default"]), _lojaActions__WEBPACK_IMPORTED_MODULE_2__["default"]), _produtoActions__WEBPACK_IMPORTED_MODULE_3__["default"]), _carrinhoActions__WEBPACK_IMPORTED_MODULE_4__["default"]), _clienteActions__WEBPACK_IMPORTED_MODULE_5__["default"]), _checkoutActions__WEBPACK_IMPORTED_MODULE_6__["default"]), _pedidoActions__WEBPACK_IMPORTED_MODULE_7__["default"]));

/***/ }),

/***/ "./redux/actions/lojaActions.js":
/*!**************************************!*\
  !*** ./redux/actions/lojaActions.js ***!
  \**************************************/
/*! exports provided: fetchDadosLoja, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDadosLoja", function() { return fetchDadosLoja; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");



const fetchDadosLoja = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/lojas/${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_DADOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchDadosLoja
});

/***/ }),

/***/ "./redux/actions/pedidoActions.js":
/*!****************************************!*\
  !*** ./redux/actions/pedidoActions.js ***!
  \****************************************/
/*! exports provided: fetchPedidos, fetchPedido, cancelarPedido, cleanPedido, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedidos", function() { return fetchPedidos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedido", function() { return fetchPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelarPedido", function() { return cancelarPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPedido", function() { return cleanPedido; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");






const fetchPedidos = ({
  offset,
  limit,
  token
}) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}&offset=${offset}&limit=${limit}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchPedido = (id, token) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDO"],
    payload: response.data
  })).catch(e => console.log(e));
};
const cancelarPedido = (id, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CANCELAR_PEDIDO"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_4__["default"])(e)));
};
const cleanPedido = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_PEDIDO"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchPedidos,
  fetchPedido,
  cancelarPedido,
  cleanPedido
});

/***/ }),

/***/ "./redux/actions/produtoActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/produtoActions.js ***!
  \*****************************************/
/*! exports provided: fetchProdutosPaginaInicial, fetchTermo, fetchProdutosPesquisa, fetchProduto, fetchAvaliacoes, fetchVariacoes, novaAvaliacao, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPaginaInicial", function() { return fetchProdutosPaginaInicial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTermo", function() { return fetchTermo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPesquisa", function() { return fetchProdutosPesquisa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProduto", function() { return fetchProduto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAvaliacoes", function() { return fetchAvaliacoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariacoes", function() { return fetchVariacoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "novaAvaliacao", function() { return novaAvaliacao; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");




const fetchProdutosPaginaInicial = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/disponiveis?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${0}&limit=${4}&sortType=${"preco-crescente"}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchTermo = termo => ({
  type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PESQUISA"],
  termo
});
const fetchProdutosPesquisa = (termo, atual = 0, limit = 20) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/search/${termo}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${atual}&limit=${limit}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS_PESQUISA"],
    payload: response.data,
    termo
  })).catch(e => console.log(e));
};
const fetchProduto = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchAvaliacoes = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}/avaliacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&id=${id}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_AVALIACOES"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchVariacoes = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}/variacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&id=${id}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_VARIACOES"],
    payload: response.data
  })).catch(e => console.log(e));
};
const novaAvaliacao = ({
  nome,
  token,
  produto,
  texto,
  pontuacao
}, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/avaliacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&produto=${produto}`, {
    nome,
    texto,
    pontuacao
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["NOVA_AVALIACAO"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchProdutosPaginaInicial,
  fetchTermo,
  fetchProdutosPesquisa,
  fetchProduto,
  fetchAvaliacoes,
  fetchVariacoes,
  novaAvaliacao
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

/***/ "./utils/cart.js":
/*!***********************!*\
  !*** ./utils/cart.js ***!
  \***********************/
/*! exports provided: getCart, cleanCart, addCart, getCountItemsCart, removeCart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanCart", function() { return cleanCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCart", function() { return addCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountItemsCart", function() { return getCountItemsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCart", function() { return removeCart; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const _saveCart = item => {
  let cart = getCart();
  let found;
  cart = cart.map(_item => {
    if (_item.produto === item.produto && _item.variacao === item.variacao) {
      found = true;
      return _objectSpread(_objectSpread({}, _item), {}, {
        quantidade: Number(_item.quantidade) + Number(item.quantidade)
      });
    } else return _item;
  });
  if (!found) cart.push(item);
  localStorage.setItem("@cart", JSON.stringify(cart));
};

const getCart = () => JSON.parse(localStorage.getItem("@cart") || "[]");
const cleanCart = () => localStorage.removeItem("@cart");
const addCart = (item, goToCart = true) => {
  _saveCart(item);

  if (goToCart) next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/carrinho");
};
const getCountItemsCart = () => getCart().reduce((c, {
  quantidade
}) => c + (Number(quantidade) || 1), 0);
const removeCart = index => {
  let cart = getCart();
  cart = cart.reduce((all, item, _index) => index !== _index ? all.concat([item]) : all, []);
  localStorage.setItem("@cart", JSON.stringify(cart));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getCart,
  addCart,
  cleanCart,
  getCountItemsCart,
  removeCart
});

/***/ }),

/***/ "./utils/cookie.js":
/*!*************************!*\
  !*** ./utils/cookie.js ***!
  \*************************/
/*! exports provided: setCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) return undefined;

  const _cookie = req.headers.cookie.split(";").find(c => c.trim().startsWith(`${key}=`));

  return _cookie ? _cookie.split("=")[1] : undefined;
};

/***/ }),

/***/ "./utils/format.js":
/*!*************************!*\
  !*** ./utils/format.js ***!
  \*************************/
/*! exports provided: numberPattern, formatCEP, formatCPF, formatDataDeNascimento, formatTelefone, formatNumber, formatCartao, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberPattern", function() { return numberPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCEP", function() { return formatCEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCPF", function() { return formatCPF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataDeNascimento", function() { return formatDataDeNascimento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTelefone", function() { return formatTelefone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCartao", function() { return formatCartao; });
const numberPattern = /\d+/g;
const formatCEP = value => {
  const auxCep = (value || "").match(numberPattern);

  const _cep = (auxCep || []).join('');

  return _cep.length > 5 ? _cep.slice(0, 5) + '-' + _cep.slice(5, 8) : _cep;
};
const formatCPF = value => {
  const auxCPF = (value || "").match(numberPattern);

  const _CPF = (auxCPF || []).join('');

  if (_CPF.length > 9) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9) + '-' + _CPF.slice(9, 11);
  if (_CPF.length > 6) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9);
  if (_CPF.length > 3) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6);
  return _CPF;
};
const formatDataDeNascimento = value => {
  const auxData = (value || "").match(numberPattern);

  const _data = (auxData || []).join('');

  if (_data.length > 4) return _data.slice(0, 2) + '/' + _data.slice(2, 4) + '/' + _data.slice(4, 8);
  if (_data.length > 2) return _data.slice(0, 2) + '/' + _data.slice(2, 4);
  return _data;
};
const formatTelefone = value => {
  const auxTelefone = (value || "").match(numberPattern);

  const _telefone = (auxTelefone || []).join('');

  return _telefone.length > 2 ? _telefone.slice(0, 2) + ' ' + _telefone.slice(2, 12) : _telefone;
};
const formatNumber = (value, limit) => {
  const auxN = (value || "").match(numberPattern);

  const _n = (auxN || []).join('');

  return limit ? _n.slice(0, limit) : _n;
};
const formatCartao = value => {
  const auxCartao = (value || "").match(numberPattern);

  const _cartao = (auxCartao || []).join('');

  if (_cartao.length > 12) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8) + ' ' + _cartao.slice(8, 12) + ' ' + _cartao.slice(12, 16);
  if (_cartao.length > 8) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8) + ' ' + _cartao.slice(8, 12);
  if (_cartao.length > 4) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8);
  return _cartao;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  numberPattern,
  formatCEP,
  formatCPF,
  formatDataDeNascimento,
  formatTelefone,
  formatNumber,
  formatCartao
});

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: formatMoney, codigosCorreios, ESTADOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codigosCorreios", function() { return codigosCorreios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESTADOS", function() { return ESTADOS; });
const formatMoney = value => "R$ " + Number(value || 0).toFixed(2).replace(".", ",");
const codigosCorreios = {
  "40010": "Sedex",
  "41106": "PAC"
};
const ESTADOS = {
  "AC": "Acre",
  "AL": "Alagoas",
  "AP": "Amapá",
  "AM": "Amazonas",
  "BA": "Bahia",
  "CE": "Ceará",
  "DF": "Distrito Federal",
  "ES": "Espírito Santo",
  "GO": "Goiás",
  "MA": "Maranhão",
  "MT": "Mato Grosso",
  "MS": "Mato Grosso do Sul",
  "MG": "Minas Gerais",
  "PA": "Pará",
  "PB": "Paraíba",
  "PR": "Paraná",
  "PE": "Pernambuco",
  "PI": "Piauí",
  "RJ": "Rio de Janeiro",
  "RN": "Rio Grande do Norte",
  "RS": "Rio Grande do Sul",
  "RO": "Rondônia",
  "RR": "Roraima",
  "SC": "Santa Catarina",
  "SP": "São Paulo",
  "SE": "Sergipe",
  "TO": "Tocantins"
};

/***/ }),

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: onlyNumbers, validateCPF, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return onlyNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateCPF", function() { return validateCPF; });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format */ "./utils/format.js");

const onlyNumbers = value => {
  const auxCep = (value || "").match(_format__WEBPACK_IMPORTED_MODULE_0__["numberPattern"]);
  return (auxCep || []).join("");
};
const validateCPF = _strCPF => {
  const strCPF = onlyNumbers(_strCPF);
  if (strCPF.length !== 11) return false;
  let soma;
  let resto;
  soma = 0;
  if (strCPF == "00000000000") return false;

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(strCPF.substring(9, 10))) return false;
  soma = 0;

  for (var j = 1; j <= 10; j++) {
    soma = soma + parseInt(strCPF.substring(j - 1, j)) * (12 - j);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  validateCPF,
  onlyNumbers
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWxlcnQvR2VyYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYW1wb3MvUGVzcXVpc2EuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9DYXJyaW5oby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzL0NhcnJpbmhvTGltcG8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1SYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0cy9Gb3JtU2ltcGxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW0vRGFkb3NEYUxvamEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0YXMvQ2F0ZWdvcmlhcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3Rhcy9QYWdpbmFzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlzdGFzL1JlZGVzU29jaWFpcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28vQ2FiZWNhbGhvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2FiZWNhbGhvL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2FycmluaG8vTGlzdGFEZVByb2R1dG9zLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2hlY2tvdXQvQ2hlY2tvdXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9EYWRvc0NsaWVudGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9EYWRvc0VudHJlZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9EYWRvc0ZyZXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2hlY2tvdXQvRGFkb3NQYWdhbWVudG8uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9EYWRvc1BlZGlkby5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L1N1Ym1pdERhZG9zQ2xpZW50ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2xpZW50ZS9DbGllbnRlTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DbGllbnRlL0RhZG9zQ2xpZW50ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1JvZGFwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGVja291dC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2FycmluaG9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2F0ZWdvcmlhQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NoZWNrb3V0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NsaWVudGVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvZXJyb3JIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2xvamFBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvcGVkaWRvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3Byb2R1dG9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3R5cGVzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJBbGVydEdlcmFsIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJhdmlzbyIsIm1lc3NhZ2UiLCJQZXNxdWlzYSIsInRlcm1vIiwic3VibWl0UGVzcXVpc2EiLCJzdGF0ZSIsImZldGNoVGVybW8iLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29ubmVjdCIsImFjdGlvbnMiLCJDYXJkQ2FycmluaG8iLCJjYXJ0UXRkIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRDb3VudEl0ZW1zQ2FydCIsIkNhcmRDYXJyaW5ob0xpbXBvIiwiY2xlYW5DYXJyaW5obyIsImRlZmF1bHREZXNjcmljYW8iLCJkZWZhdWx0T0dVUkwiLCJkZWZhdWx0T0dJbWFnZSIsIkhlYWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsIiwib2dJbWFnZSIsInBhZ1NlZ3VybyIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiRm9ybVJhZGlvIiwibmFtZSIsInNlbGVjdGVkIiwibGFiZWwiLCJvbkNoYW5nZSIsIkZvcm1TaW1wbGVzIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZXJybyIsIkRhZG9zRGFMb2phIiwiUmVhY3QiLCJsb2phIiwibm9tZSIsImNucGoiLCJlbWFpbCIsImVuZGVyZWNvIiwidGVsZWZvbmVzIiwibWFwIiwiaW5kZXgiLCJsb2NhbCIsIm51bWVybyIsImJhaXJybyIsImNpZGFkZSIsImVzdGFkbyIsIkNFUCIsIm1hcFN0YXRlVG9Qcm9wcyIsIkxheW91dCIsImltYWdlIiwiQ2F0ZWdvcmlhcyIsImNhdGVnb3JpYXMiLCJjYXRlZ29yaWEiLCJfaWQiLCJQYWdpbmFzIiwiUkVERVNfU09DSUFJUyIsIlJlZGVzU29jaWFpcyIsIml0ZW0iLCJpZHgiLCJMb2dvQ2FiZWNhbGhvIiwiQVBJIiwidmVyc2FvIiwiYmFzZUltZyIsIkNhYmVjYWxobyIsInJlbmRlckNhYmVjYWxob05vcm1hbCIsInJlbmRlckNhYmVjYWxob1NpbXBsZXMiLCJzaW1wbGVzIiwiTGlzdGFEZVByb2R1dG9zIiwicmVuZGVyQ2FiZWNhbGhvQ2FycmluaG8iLCJzZW1BbHRlcmFjb2VzIiwiY2hhbmdlUXVhbnRpZGFkZSIsInF1YW50aWRhZGUiLCJOdW1iZXIiLCJub3ZhUXVhbnRpZGFkZSIsImNoYW5nZSIsInZhcmlhY2FvIiwiYWxlcnQiLCJhZGRDYXJ0IiwicHJvZHV0byIsInByZWNvVW5pdGFyaW8iLCJ1cGRhdGVRdWFudGlkYWRlIiwicmVtb3ZlclByb2R1dG9DYXJyaW5obyIsIndpbmRvdyIsImNvbmZpcm0iLCJyZW1vdmVyUHJvZHV0byIsInJlbmRlclByb2R1dG8iLCJmb3RvIiwiZm90b3MiLCJsZW5ndGgiLCJ0aXR1bG8iLCJmb3JtYXRNb25leSIsInJlbmRlclByb2R1dG9zIiwiY2FycmluaG8iLCJDaGVja291dEJ1dHRvbiIsImRpc2FibGVkIiwiY2FsY3VsYXJWYWxvclRvdGFsIiwiZnJldGVTZWxlY2lvbmFkbyIsInZhbG9yUHJvZHV0b3MiLCJyZWR1Y2UiLCJhbGwiLCJ2YWxvckZyZXRlIiwiVmFsb3IiLCJyZXBsYWNlIiwidmFsaWRhckZvcm11bGFyaW8iLCJDUEYiLCJkYXRhRGVOYXNjaW1lbnRvIiwidGVsZWZvbmUiLCJkYWRvc0NvYnJhbmNhIiwiZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhIiwiQ1BGYm9sZXRvIiwibnVtZXJvQ2FydGFvIiwibm9tZUNhcnRhbyIsIm1lc0NhcnRhbyIsImFub0NhcnRhbyIsInBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEiLCJDVlZDYXJ0YW8iLCJjcmVkaXRfY2FyZF90b2tlbiIsImZvcm0iLCJ0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8iLCJ0ZW1FcnJvIiwidmFsaWRhdGVDUEYiLCJ2YWxpZGF0ZSIsImhhbmRsZVN1Ym1pdCIsInRva2VuIiwic2VuZGVySGFzaCIsImdldENhcnQiLCJ2YWxvclRvdGFsIiwidG9nZ2xlRGlzYWJsZWQiLCJub3ZvUGVkaWRvIiwiZXJyb3IiLCJzdGF0dXMiLCJ1c3VhcmlvIiwiYXV0aCIsImNsaWVudGUiLCJjaGVja291dCIsIkRhZG9zQ2xpZW50ZSIsImZldGNoQ2xpZW50ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInBlcm1pc3Nhb0luaWNpYWwiLCJwZXJtaXRpciIsIkRhZG9zRW50cmVnYUNvbnRhaW5lciIsImVycm9zIiwiZmllbGQiLCJwcmVmaXgiLCJzZXRGb3JtIiwidGhlbiIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwicHJldlByb3BzIiwiY29tcGxlbWVudG8iLCJPYmplY3QiLCJrZXlzIiwicmVuZGVyRGFkb3NEZUVudHJlZ2EiLCJvbkNoYW5nZUNFUCIsImZvcm1hdENFUCIsImZvcm1hdE51bWJlciIsIkVTVEFET1MiLCJhYmJyIiwicmVuZGVyRGFkb3NEZUNvYnJhbmNhIiwiRGFkb3NGcmV0ZSIsImNhbGN1bGFyRnJldGUiLCJzZWxlY2lvbmFyRnJldGUiLCJmcmV0ZSIsImZyZXRlcyIsIkNvZGlnbyIsImNvZGlnb3NDb3JyZWlvcyIsIlByYXpvRW50cmVnYSIsIkRhZG9zUGFnYW1lbnRvIiwiZ2V0U2Vzc2lvblBhZ2FtZW50byIsImJhbmRlaXJhX2NhcnRhbyIsInBhcmNlbGFzQ2FydGFvIiwic3BsaXQiLCJqb2luIiwiZ2V0QnJhbmQiLCJzdWJtaXRDYXJ0YW9IYXNoIiwiZ2V0UGFyY2VsYXMiLCJQYWdTZWd1cm9EaXJlY3RQYXltZW50IiwiY2FyZEJpbiIsInNsaWNlIiwic3VjY2VzcyIsInIiLCJicmFuZCIsInBhcmFtcyIsImNhcmROdW1iZXIiLCJjdnYiLCJleHBpcmF0aW9uTW9udGgiLCJleHBpcmF0aW9uWWVhciIsImNhcmQiLCJjcmVhdGVDYXJkVG9rZW4iLCJmcmV0ZVZhbG9yIiwiZ2V0SW5zdGFsbG1lbnRzIiwiYW1vdW50IiwibWF4SW5zdGFsbG1lbnROb0ludGVyZXN0IiwibWF4SW5zdGFsbG1lbnQiLCJpbnN0YWxsbWVudHMiLCJyZW5kZXJPcGNvZXNQYWdhbWVudG8iLCJzZXRUaXBvUGFnYW1lbnRvIiwicmVuZGVyUGFnYW1lbnRvQ29tQm9sZXRvIiwiZm9ybWF0Q1BGIiwicmVuZGVyUGFnYW1lbnRvQ29tQ2FydGFvIiwiZm9ybWF0Q2FydGFvIiwicXVhbnRpdHkiLCJ0b3RhbEFtb3VudCIsInNlc3Npb25JZCIsIkRhZG9zUGVkaWRvIiwiU3VibWl0RGFkb3NDbGllbnRlIiwic2VuaGEiLCJuZXdDbGllbnRlIiwiY2FsbGJhY2siLCJ1cGRhdGVDbGllbnRlIiwiQ2hlY2tvdXRDb250YWluZXIiLCJwZXJtaXNzYW9DaGVja291dCIsIkNsaWVudGVMb2dpbiIsInJlbmRlckF2aXNvRGVSZWdpc3RybyIsImF1dGVudGljYXIiLCJwYXNzd29yZCIsInJlbmRlckZvcm1Mb2dpbiIsIkRhZG9zQ2xpZW50ZUNvbnRhaW5lciIsImNwZiIsIm1vbWVudCIsImZvcm1hdCIsInJlbmRlckRhZG9zUmVnaXN0cm8iLCJyZW5kZXJEYWRvc1VzdWFyaW8iLCJmb3JtYXREYXRhRGVOYXNjaW1lbnRvIiwiZm9ybWF0VGVsZWZvbmUiLCJSb2RhcGUiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQ2hlY2tvdXQiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInJlYXV0aGVudGljYXRlIiwiQVVURU5USUNBUl9UT0tFTiIsInBheWxvYWQiLCJnZXRVc2VyIiwiZGlzcGF0Y2giLCJnZXRIZWFkZXJzIiwiVVNFUiIsImdvVG8iLCJwb3N0Iiwic2V0Q29va2llIiwiQVVURU5USUNBUiIsImVycm9ySGFuZGxpbmciLCJkZXNhdXRlbnRpY2FyIiwicmVtb3ZlQ29va2llIiwiREVTQVVURU5USUNBUiIsInVwZGF0ZVNlbmhhIiwicHV0Iiwibm92YVNlbmhhIiwic2V0Q2FycmluaG8iLCJTRVRfQ0FSUklOSE8iLCJjbGVhbkNhcnQiLCJDTEVBTl9DQVJSSU5ITyIsImZldGNoUHJvZHV0b0NhcnJpbmhvIiwiaWQiLCJpZHhDYXJyaW5obyIsIkZFVENIX1BST0RVVE9fQ0FSUklOSE8iLCJmZXRjaFZhcmlhY29lc0NhcnJpbmhvIiwiRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE8iLCJjZXAiLCJGRVRDSF9WQUxPUl9FTlRSRUdBIiwicmVtb3ZlQ2FydCIsIlJFTU9WRV9QUk9EX0NBUlQiLCJVUERBVEVfUVREX0NBUlQiLCJVUERBVEVfRlJFVEVfQ0FSVCIsImNsZWFuRnJldGVzIiwiQ0xFQU5fRlJFVEVTIiwiZmV0Y2hDYXRlZ29yaWFzIiwiRkVUQ0hfQ0FURUdPUklBUyIsImZldGNoQ2F0ZWdvcmlhIiwiRkVUQ0hfQ0FURUdPUklBIiwiZmV0Y2hQcm9kdXRvc0NhdGVnb3JpYSIsImF0dWFsIiwibGltaXQiLCJGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1MiLCJTRVRfRk9STSIsInJlc29sdmUiLCJjbGVhbkZvcm0iLCJDTEVBTl9GT1JNIiwiU0VUX1RJUE9fUEFHQU1FTlRPIiwiRkVUQ0hfU0VTU0lPTl9JRCIsInNldFNlc3Npb25JZCIsImdldFNlbmRlckhhc2giLCJGRVRDSF9TRU5ERVJfSEFTSCIsImVudHJlZ2EiLCJjdXN0byIsInRpcG8iLCJ0b1N0cmluZyIsInByYXpvIiwicGFnYW1lbnRvIiwidmFsb3IiLCJmb3JtYSIsInBhcmNlbGFzIiwiZW5kZXJlY29FbnRyZWdhSWd1YWxDb2JyYW5jYSIsImNhcnRhbyIsIm5vbWVDb21wbGV0byIsInRyaW0iLCJjb2RpZ29BcmVhIiwidW5kZWZpbmVkIiwiTk9WT19QRURJRE8iLCJwYWdhclBlZGlkbyIsInBlZGlkbyIsIlBBR0FSX1BFRElETyIsImdldFJhd0RhdGEiLCJfZGF0YSIsImFubyIsIl9tZXMiLCJtZXMiLCJfZGlhIiwiZGlhIiwicmVzcG9zdGEiLCJGRVRDSF9DTElFTlRFIiwibG9nb3V0Q2xpZW50ZSIsIkxPR09VVF9DTElFTlRFIiwiX2Vycm9ycyIsImVycm9ycyIsIm1zZyIsImlzQXJyYXkiLCJmb3JFYWNoIiwicHJvcGVydGllcyIsImhlYWRlcnMiLCJhdXRoQWN0aW9ucyIsImNhdGVnb3JpYUFjdGlvbnMiLCJsb2phQWN0aW9ucyIsInByb2R1dG9BY3Rpb25zIiwiY2FycmluaG9BY3Rpb25zIiwiY2xpZW50ZUFjdGlvbnMiLCJjaGVja291dEFjdGlvbnMiLCJwZWRpZG9BY3Rpb25zIiwiZmV0Y2hEYWRvc0xvamEiLCJGRVRDSF9EQURPUyIsImZldGNoUGVkaWRvcyIsIm9mZnNldCIsIkZFVENIX1BFRElET1MiLCJmZXRjaFBlZGlkbyIsIkZFVENIX1BFRElETyIsImNhbmNlbGFyUGVkaWRvIiwiZGVsZXRlIiwiQ0FOQ0VMQVJfUEVESURPIiwiY2xlYW5QZWRpZG8iLCJDTEVBTl9QRURJRE8iLCJmZXRjaFByb2R1dG9zUGFnaW5hSW5pY2lhbCIsIkZFVENIX1BST0RVVE9TIiwiRkVUQ0hfUEVTUVVJU0EiLCJmZXRjaFByb2R1dG9zUGVzcXVpc2EiLCJGRVRDSF9QUk9EVVRPU19QRVNRVUlTQSIsImZldGNoUHJvZHV0byIsIkZFVENIX1BST0RVVE8iLCJmZXRjaEF2YWxpYWNvZXMiLCJGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVMiLCJmZXRjaFZhcmlhY29lcyIsIkZFVENIX1BST0RVVE9fVkFSSUFDT0VTIiwibm92YUF2YWxpYWNhbyIsInRleHRvIiwicG9udHVhY2FvIiwiTk9WQV9BVkFMSUFDQU8iLCJSRUdJU1RFUiIsIl9zYXZlQ2FydCIsImNhcnQiLCJmb3VuZCIsIl9pdGVtIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ29Ub0NhcnQiLCJjIiwiX2luZGV4IiwiY29uY2F0IiwiY29va2llIiwiZ2V0Q29va2llIiwicmVxIiwiZ2V0Q29va2llRnJvbUJyb3dzZXIiLCJnZXRDb29raWVGcm9tU2VydmVyIiwiX2Nvb2tpZSIsImZpbmQiLCJzdGFydHNXaXRoIiwibnVtYmVyUGF0dGVybiIsImF1eENlcCIsIm1hdGNoIiwiX2NlcCIsImF1eENQRiIsIl9DUEYiLCJhdXhEYXRhIiwiYXV4VGVsZWZvbmUiLCJfdGVsZWZvbmUiLCJhdXhOIiwiX24iLCJhdXhDYXJ0YW8iLCJfY2FydGFvIiwidG9GaXhlZCIsIm9ubHlOdW1iZXJzIiwiX3N0ckNQRiIsInN0ckNQRiIsInNvbWEiLCJyZXN0byIsInN1YnN0cmluZyIsImoiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7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QUFvQ0EsS0FBSyxHQUFHLENBQVI7QUFDcEMsTUFBSUEsS0FBSyxJQUFJdkwsUUFBUSxDQUFDcUwsTUFBTSxDQUFDRyxTQUFQLENBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBQUQsQ0FBckIsRUFBaUQsT0FBTyxLQUFQO0FBRWpELFNBQU8sSUFBUDtBQUNILENBMUJNO0FBNEJRO0FBQ1g3aUIsYUFEVztBQUVYd2lCO0FBRlcsQ0FBZixFOzs7Ozs7Ozs7OztBQ25DQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9jaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2hlY2tvdXQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBBbGVydEdlcmFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLmF2aXNvKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuYXZpc28ubWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnRHZXJhbDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmNsYXNzIFBlc3F1aXNhIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge3Rlcm1vOiBcIlwifVxyXG5cclxuICAgIHN1Ym1pdFBlc3F1aXNhKCkge1xyXG4gICAgICAgIGNvbnN0IHt0ZXJtb30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hUZXJtbyh0ZXJtbyk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goe3BhdGhuYW1lOlwiL3Blc3F1aXNhXCIsIHF1ZXJ5OiB7dGVybW99fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMyBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVzcXVpc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlcm1vfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe3Rlcm1vOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIGFxdWkgYSBzdWEgcGVzcXVpc2EgLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1wZXNxdWlzYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRQZXNxdWlzYSgpfSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tcGVzcXVpc2FcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIj4gPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBhY3Rpb25zKSAoUGVzcXVpc2EpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvdW50SXRlbXNDYXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcblxyXG5jbGFzcyBDYXJkQ2FycmluaG8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IGNhcnRRdGQ6IDAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnRRdGQ6IGdldENvdW50SXRlbXNDYXJ0KCkgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW5zLWNhYmVjYWxobyBmbGV4LTIgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcmVhLWNsaWVudGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY2FiZWNhbGhvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1pbmhhIENvbnRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJyaW5ob1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1jYWJlY2FsaG8gY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1iYWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgdGhpcy5zdGF0ZS5jYXJ0UXRkIHx8IDAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQ2FycmluaG87IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtjbGVhbkNhcnJpbmhvfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnJpbmhvQWN0aW9ucyc7XHJcblxyXG5jbGFzcyBDYXJkQ2FycmluaG9MaW1wbyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgIGNsZWFuQ2FycmluaG8oKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbnMtY2FiZWNhbGhvIGZsZXgtMiBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnJpbmhvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWNhYmVjYWxob1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MSU1QQVI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZENhcnJpbmhvTGltcG87IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7c3RyaW5nfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IGRlZmF1bHREZXNjcmljYW8gPSAnJztcclxuY29uc3QgZGVmYXVsdE9HVVJMID0gJyc7XHJcbmNvbnN0IGRlZmF1bHRPR0ltYWdlID0gXCIvc3RhdGljL2xvZ28ucG5nXCI7XHJcblxyXG5jb25zdCBIZWFkID0gcHJvcHMgPT4gKFxyXG4gICAgPE5leHRIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPiB7cHJvcHMudGl0bGUgfHwgXCJcIn0gPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaWNhb30gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPSBcIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17cHJvcHMudXJsIHx8IGRlZmF1bHRPR1VSTH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHJvcHMudGl0bGUgfHwgXCJcIn0gLz5cclxuICAgICAgICA8bWV0YSBcclxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmnDp8Ojb1wiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmljYW99IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXtwcm9wcy51cmwgfHwgZGVmYXVsdE9HVVJMfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI2MDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYwMFwiIC8+XHJcbiAgICAgICAgPGxpbmsgXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBcclxuLy8gICAgICAgICAgICBocmVmPVwiL3N0YXRpYy9mb250LWF3ZXNvbWUubWluLmNzc1wiIFxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgXHJcbiAgICAgICAgICAgIGludGVncnl0ZT1cInNoYTM4NC13dmZYcHFwWlpWUUdLNlRBaDVQVmxHT2ZRTkhTb0QyeGJFK1FrUHhDQUZsTkVldm9FSDNTbDBzaWJWY09RVm5OXCIgXHJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvc3R5bGUuY3NzXCIgLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BzLnBhZ1NlZ3VybyA/IChcclxuICAgICAgICAgICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3N0Yy5zYW5kYm94LnBhZ3NlZ3Vyby51b2wuY29tLmJyL3BhZ3NlZ3Vyby9hcGkvdjIvY2hlY2tvdXQvcGFnc2VndXJvLmRpcmVjdHBheW1lbnQuanNcIj5cclxuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L05leHRIZWFkPlxyXG4pO1xyXG5cclxuSGVhZC5wcm9wVHlwZXM9e1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9nSW1hZ2U6IHN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1SYWRpbyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCBzZWxlY3RlZCwgbGFiZWwsIG9uQ2hhbmdlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0taW5wdXQgZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3NlbGVjdGVkfSBuYW1lPXtuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+ICZuYnNwOyB7bGFiZWx9IDwvbGFiZWw+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1TaW1wbGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlLCBuYW1lLCBwbGFjZWhvbGRlciwgdHlwZSwgbGFiZWwsIG9uQ2hhbmdlLCBlcnJvfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIHtsYWJlbCAmJiA8bGFiZWw+IHtsYWJlbH0gPC9sYWJlbD59XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17dHlwZX0gdmFsdWU9e3ZhbHVlfSBuYW1lPXtuYW1lfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZSA9IFwiZXJyb1wiPiB7ZXJyb30gPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgRGFkb3NEYUxvamEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMubG9qYSkgcmV0dXJuICg8ZGl2PiA8L2Rpdj4pO1xyXG4gICAgICAgIGNvbnN0IHtub21lLCBjbnBqLCBlbWFpbCwgZW5kZXJlY28sIHRlbGVmb25lc30gPSB0aGlzLnByb3BzLmxvamE7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMSBkYWRvcy1kYS1sb2phXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj4gRW50cmUgZW0gQ29udGF0byA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcImxvamEtbm9tZVwiPiBOb21lOiB7bm9tZX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJsb2phLWNucGpcIj4gQ05QSjoge2NucGp9IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS1lbWFpbFwiPiBFLW1haWw6IDxhIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfT4ge2VtYWlsfSA8L2E+IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS10ZWxlZm9uZXNcIj4gVGVsZWZvbmVzOiA8L3A+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVsZWZvbmVzLm1hcCgoaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJsb2phLXRlbGVmb25lXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgcGhvbmU6JHt0ZWxlZm9uZXN9YH0+IHt0ZWxlZm9uZXN9IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJsb2phLWVuZGVyZWNvXCI+IHtlbmRlcmVjby5sb2NhbH0sIHtlbmRlcmVjby5udW1lcm99IC0ge2VuZGVyZWNvLmJhaXJyb30gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJsb2phLWNpZGFkZVwiPiB7ZW5kZXJlY28uY2lkYWRlfSAvIHtlbmRlcmVjby5lc3RhZG99IC0ge2VuZGVyZWNvLkNFUH0gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbG9qYTogc3RhdGUubG9qYS5sb2phXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykgKERhZG9zRGFMb2phKTsiLCJpbXBvcnQgSGVhZCBmcm9tICcuL0hlYWQnO1xyXG5cclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsLCBpbWFnZSwgcGFnU2VndXJvIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRcclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIHVybD17dXJsfVxyXG4gICAgICAgICAgICBvZ0ltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgcGFnU2VndXJvPXtwYWdTZWd1cm99PjwvSGVhZD5cclxuICAgICAgICA8U3R5bGUgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgJmNvcHk7IExvamEgSVQgLSBDdXJzbyBDcmlhbmRvIHVtIEVjb21tZXJjZSBkbyBaZXJvXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBDYXRlZ29yaWFzIGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgY2F0ZWdvcmlhcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmlhcyBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWFzLm1hcChjYXRlZ29yaWEgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3JpYS8ke2NhdGVnb3JpYS5ub21lfT9pZD0ke2NhdGVnb3JpYS5faWR9YH0ga2V5PXtjYXRlZ29yaWEuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmlhLWl0ZW0gZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntjYXRlZ29yaWEubm9tZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNhdGVnb3JpYXM6IHN0YXRlLmNhdGVnb3JpYS5jYXRlZ29yaWFzXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2F0ZWdvcmlhcyk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFBhZ2luYXMgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHZlcnRpY2FsIGluc3RpdHVjaW9uYWxcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+UMOhZ2luYXM8L2gyPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Qw6FnaW5hIEluaWNpYWw8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2FycmluaG9cIj5cclxuICAgICAgICAgICAgPHNwYW4+VmVyIFNhY29sYTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hcmVhLWNsaWVudGUvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPk1pbmhhIENvbnRhPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NvYnJlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlNvYnJlIGEgTG9qYTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUkVERVNfU09DSUFJUyA9IFtcclxuICAgIHsgbm9tZTogXCJmYWNlYm9va1wiLCB1cmw6IFwiI1wiIH0sXHJcbiAgICB7IG5vbWU6IFwiaW5zdGFncmFtXCIsIHVybDogXCIjXCIgfSxcclxuICAgIHsgbm9tZTogXCJ0d2l0dGVyXCIsIHVybDogXCIjXCIgfSxcclxuICAgIHsgbm9tZTogXCJ3aGF0c2FwcFwiLCB1cmw6IFwiI1wiIH0sXHJcbl07XHJcblxyXG5jb25zdCBSZWRlc1NvY2lhaXMgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlJlZGVzIFNvY2lhaXM8L2gyPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHJlZGVzLXNvY2lhaXMgd3JhcFwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBSRURFU19TT0NJQUlTLm1hcCgoaXRlbSwgaWR4KT0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYSBmYS0ke2l0ZW0ubm9tZX0gZmEtbGdgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWRlc1NvY2lhaXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IExvZ29DYWJlY2FsaG8gPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMiBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nb1wiIHdpZHRoPVwiOTAlXCIgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb0NhYmVjYWxobzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXHJcbiAgICBcclxuICAgIGJvZHkgeyBcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDsgfVxyXG4gICAgYm9keSwgKiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyLFxyXG4gICAgLmNvbnRhaW5lci1iaWcge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IH1cclxuICAgIC5jb250YWluZXItYmlnIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE0NDAgcHg7IH1cclxuXHJcbiAgICAuZmxleCB7ZGlzcGxheTogZmxleDsgfVxyXG4gICAgLmZsZXgtMSB7ZmxleDogMTsgfVxyXG4gICAgLmZsZXgtMiB7ZmxleDogMjsgfVxyXG4gICAgLmZsZXgtMyB7ZmxleDogMzsgfVxyXG4gICAgLmZsZXgtNCB7ZmxleDogNDsgfVxyXG4gICAgLmZsZXgtNSB7ZmxleDogNTsgfVxyXG4gICAgLmZsZXgtNiB7ZmxleDogNjsgfVxyXG5cclxuICAgIC53cmFwIHtmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAgIC53cmFwLTEgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtMiB7IFxyXG4gICAgICAgIGZsYXgtYmFzaWM6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtMyB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMzIlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDMyJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtNCB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjUlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDI1JSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtNSB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDIwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbCB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG5cclxuICAgIC5mbGV4LWNlbnRlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmZsZXgtc3RhcnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgICAuZmxleC1yaWdodCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcblxyXG4gICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07IH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAud3JhcC1tYiB7ZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgICAgICAgLndyYXAtMi1tYiB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1dG8ud3JhcC0yLW1iIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaG9yaXpvbnRhbC1tYiB7ZmxleC1kaXJlY3Rpb246IHJvdzsgfVxyXG4gICAgICAgIC5ob3Jpem9udGFsIHtmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgICB9XHJcblxyXG4gICAgYH0gPC9zdHlsZT5cclxuKSIsImV4cG9ydCBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxyXG4gICAgICAgICAgICAgdmVyc2FvID0gXCJ2MVwiLFxyXG4gICAgICAgICAgICAgbG9qYSA9IFwiNjBjMjYyZTUzZWJkOWYwOWMwODBmNTlhXCIsXHJcbiAgICAgICAgICAgICBiYXNlSW1nID0gQVBJICsgXCIvcHVibGljL2ltYWdlcy9cIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2dvL0NhYmVjYWxobyc7XHJcbmltcG9ydCBDYW1wb1Blc3F1aXNhIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FtcG9zL1Blc3F1aXNhJztcclxuaW1wb3J0IENhcmRDYXJyaW5obyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmRzL0NhcnJpbmhvJztcclxuaW1wb3J0IENhdGVnb3JpYXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaXN0YXMvQ2F0ZWdvcmlhcyc7XHJcbmltcG9ydCBDYXJkQ2FycmluaG9MaW1wbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmRzL0NhcnJpbmhvTGltcG8nO1xyXG5cclxuY2xhc3MgQ2FiZWNhbGhvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyQ2FiZWNhbGhvTm9ybWFsKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbXBvUGVzcXVpc2EgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENhcnJpbmhvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDYXJyaW5ob0xpbXBvIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmlhcy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3JpYXMgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FiZWNhbGhvU2ltcGxlcygpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyIE5vLUxpbmtzIEhlYWRlci1TaW1wbGVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7c2ltcGxlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBzaW1wbGVzID8gXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNhYmVjYWxob1NpbXBsZXMoKSA6IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDYWJlY2FsaG9Ob3JtYWwoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWJlY2FsaG87IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYmFzZUltZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGZvcm1hdE1vbmV5IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IHsgYWRkQ2FydCB9IGZyb20gJy4uLy4uL3V0aWxzL2NhcnQnO1xyXG5cclxuY2xhc3MgTGlzdGFEZVByb2R1dG9zIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXJDYWJlY2FsaG9DYXJyaW5obyhzZW1BbHRlcmFjb2VzKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnJpbmhvLWNhYmVjYWxobyBuby1tYi1mbGV4IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC00XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lIGZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UXVhbnRpZGFkZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGxpbmUgZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5QcmXDp28gVW5pdMOhcmlvPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZSBmbGV4LTEgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlByZcOnbyBUb3RhbDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsgIXNlbUFsdGVyYWNvZXMgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+PC9kaXY+KSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VRdWFudGlkYWRlKGUsIHF1YW50aWRhZGUsIGl0ZW0sIGluZGV4KXtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlLCBxdWFudGlkYWRlLCBpdGVtLnZhcmlhY2FvLnF1YW50aWRhZGUpO1xyXG4gICAgICAgIGlmKE51bWJlcihlLnRhcmdldC52YWx1ZSkgPCAxKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5vdmFRdWFudGlkYWRlID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBsZXQgY2hhbmdlID0gbm92YVF1YW50aWRhZGUgLSBxdWFudGlkYWRlO1xyXG4gICAgICAgIGlmKCBub3ZhUXVhbnRpZGFkZSA+PSBpdGVtLnZhcmlhY2FvLnF1YW50aWRhZGUgKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiTsOjbyB0ZW1vcyBlc3NhIHF1YW50aWRhZGUgZW0gZXN0b3F1ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZENhcnQoe1xyXG4gICAgICAgICAgICBwcm9kdXRvOiBpdGVtLnByb2R1dG8uX2lkLFxyXG4gICAgICAgICAgICB2YXJpYWNhbzogaXRlbS52YXJpYWNhby5faWQsXHJcbiAgICAgICAgICAgIHF1YW50aWRhZGU6IGNoYW5nZSxcclxuICAgICAgICAgICAgcHJlY29Vbml0YXJpbzogaXRlbS5wcmVjb1VuaXRhcmlvXHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUXVhbnRpZGFkZShjaGFuZ2UsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVyUHJvZHV0b0NhcnJpbmhvKGluZGV4KXtcclxuICAgICAgICBpZih3aW5kb3cuY29uZmlybShcIlZvY8OqIGRlc2VqYSByZWFsbWVudGUgcmVtb3ZlciBlc3NlIHByb2R1dG8/XCIpKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVyUHJvZHV0byhpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb2R1dG8oaXRlbSwgc2VtQWx0ZXJhY29lcywgaW5kZXgpe1xyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICAhaXRlbS52YXJpYWNhbyB8fCAhaXRlbS52YXJpYWNhby5faWQgfHwgXHJcbiAgICAgICAgICAgICFpdGVtLnByb2R1dG8gfHwgIWl0ZW0ucHJvZHV0by5faWRcclxuICAgICAgICApIHJldHVybiBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGZvdG8gPSBpdGVtLnZhcmlhY2FvLmZvdG9zICYmIGl0ZW0udmFyaWFjYW8uZm90b3MubGVuZ3RoID4gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YXJpYWNhby5mb3Rvc1swXSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9kdXRvLmZvdG9zWzBdO1xyXG4gICAgICAgIGNvbnN0IG5vbWUgPSBpdGVtLnByb2R1dG8udGl0dWxvICsgXCIgLSBcIiArIGl0ZW0udmFyaWFjYW8ubm9tZTtcclxuICAgICAgICBjb25zdCB7IHF1YW50aWRhZGUsIHByZWNvVW5pdGFyaW8gfSA9IGl0ZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXJyaW5oby1pdGVtIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC00IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1dG8taW1hZ2UgZmxleC0yIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jhc2VJbWcgKyBmb3RvfSBhbHQ9e25vbWV9IHdpZHRoPVwiMTAwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHV0by10aXR1bG8gZmxleC00IGZsZXggZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57bm9tZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW1BbHRlcmFjb2VzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuPntxdWFudGlkYWRlfTwvc3Bhbj4pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cXVhbnRpZGFkZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdXRvLXF1YW50aWRhZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5jaGFuZ2VRdWFudGlkYWRlKGUsIHF1YW50aWRhZGUsIGl0ZW0sIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdE1vbmV5KHByZWNvVW5pdGFyaW8pfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntmb3JtYXRNb25leShwcmVjb1VuaXRhcmlvICogcXVhbnRpZGFkZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ICFzZW1BbHRlcmFjb2VzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlclByb2R1dG9DYXJyaW5obyhpbmRleCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXJlbW92ZXJcIj5SZW1vdmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb2R1dG9zKHNlbUFsdGVyYWNvZXMpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNhcnJpbmhvLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMucmVuZGVyUHJvZHV0byhpdGVtLCBzZW1BbHRlcmFjb2VzLCBpbmRleCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBzZW1BbHRlcmFjb2VzLCBjYXJyaW5obyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxpc3RhLURlLVByb2R1dG9zIGZsZXggdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDYWJlY2FsaG9DYXJyaW5obyhzZW1BbHRlcmFjb2VzKSB9XHJcbiAgICAgICAgICAgICAgICB7IGNhcnJpbmhvICYmIHRoaXMucmVuZGVyUHJvZHV0b3Moc2VtQWx0ZXJhY29lcykgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8uY2FycmluaG9cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoTGlzdGFEZVByb2R1dG9zKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q2FydCB9IGZyb20gJy4uLy4uL3V0aWxzL2NhcnQnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUNQRiB9IGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRlJztcclxuaW1wb3J0IEFsZXJ0R2VyYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbGVydC9HZXJhbCc7XHJcblxyXG5jbGFzcyBDaGVja291dEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLCBcclxuICAgICAgICBhdmlzbzogbnVsbCBcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEaXNhYmxlZCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkaXNhYmxlZDogIXRoaXMuc3RhdGUuZGlzYWJsZWQgfSk7XHJcblxyXG4gICAgY2FsY3VsYXJWYWxvclRvdGFsKGNhcnJpbmhvLCBmcmV0ZVNlbGVjaW9uYWRvKXtcclxuICAgICAgICBjb25zdCB2YWxvclByb2R1dG9zID0gY2FycmluaG8ucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFsbCwgaXRlbSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgKyAoTnVtYmVyKGl0ZW0ucHJlY29Vbml0YXJpbykgKiBOdW1iZXIoaXRlbS5xdWFudGlkYWRlKSkgLCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdmFsb3JGcmV0ZSA9IE51bWJlcihmcmV0ZVNlbGVjaW9uYWRvLlZhbG9yLnJlcGxhY2UoJywnLCcuJykpO1xyXG4gICAgICAgIHJldHVybiB2YWxvclByb2R1dG9zICsgdmFsb3JGcmV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGFyRm9ybXVsYXJpbygpe1xyXG4gICAgICAgIGNvbnN0IHsgIFxyXG4gICAgICAgICAgICBub21lLCBDUEYsIGRhdGFEZU5hc2NpbWVudG8sIHRlbGVmb25lLFxyXG4gICAgICAgICAgICBsb2NhbCwgbnVtZXJvLCBiYWlycm8sIGNpZGFkZSwgZXN0YWRvLCBDRVAsXHJcbiAgICAgICAgICAgIGRhZG9zQ29icmFuY2EsIGRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSxcclxuICAgICAgICAgICAgQ1BGYm9sZXRvLFxyXG4gICAgICAgICAgICBudW1lcm9DYXJ0YW8sIG5vbWVDYXJ0YW8sIG1lc0NhcnRhbywgYW5vQ2FydGFvLCBwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhLCBDVlZDYXJ0YW8sXHJcbiAgICAgICAgICAgIGNyZWRpdF9jYXJkX3Rva2VuXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHRlbUVycm8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYoIW5vbWUpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFDUEYgfHwgQ1BGLmxlbmd0aCAhPT0gMTQpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKENQRiAmJiBDUEYubGVuZ3RoID09PSAxNCAmJiAhdmFsaWRhdGVDUEYoQ1BGKSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWRhdGFEZU5hc2NpbWVudG8gfHwgZGF0YURlTmFzY2ltZW50by5sZW5ndGggIT09IDEwKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighdGVsZWZvbmUgfHwgdGVsZWZvbmUubGVuZ3RoIDwgMTEpIHRlbUVycm8gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZighbG9jYWwpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFudW1lcm8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFiYWlycm8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFjaWRhZGUpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFlc3RhZG8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFDRVAgfHwgQ0VQLmxlbmd0aCAhPT0gOSkgdGVtRXJybyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKCFkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2Epe1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5sb2NhbCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLm51bWVybykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmJhaXJybykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmNpZGFkZSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmVzdGFkbykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLkNFUCB8fCBkYWRvc0NvYnJhbmNhLkNFUC5sZW5ndGggIT09IDkpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImJvbGV0b1wiKXtcclxuICAgICAgICAgICAgaWYoIUNQRmJvbGV0byAmJiAhQ1BGKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoQ1BGYm9sZXRvICYmIENQRmJvbGV0by5sZW5ndGggIT09IDE0ICYmICF2YWxpZGF0ZUNQRihDUEZib2xldG8pKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZighbnVtZXJvQ2FydGFvIHx8IG51bWVyb0NhcnRhby5sZW5ndGggIT09IDE5KSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIW5vbWVDYXJ0YW8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighbWVzQ2FydGFvIHx8IG1lc0NhcnRhby5sZW5ndGggIT09IDIpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighYW5vQ2FydGFvIHx8IGFub0NhcnRhby5sZW5ndGggIT09IDQpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFjcmVkaXRfY2FyZF90b2tlbikgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFDVlZDYXJ0YW8gfHwgQ1ZWQ2FydGFvLmxlbmd0aCAhPT0gMykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIXRlbUVycm87XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKXtcclxuICAgICAgICBjb25zdCB7IGZyZXRlU2VsZWNpb25hZG8sIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB2YWxpZGFyRm9ybXVsYXJpbyA9IHRoaXMudmFsaWRhckZvcm11bGFyaW8oKTtcclxuICAgICAgICByZXR1cm4gdmFsaWRhckZvcm11bGFyaW8gJiYgZnJldGVTZWxlY2lvbmFkbyAmJiB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG87XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KCl7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBmb3JtLCBmcmV0ZVNlbGVjaW9uYWRvLCB0b2tlbiwgc2VuZGVySGFzaCwgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY2FycmluaG8gPSBnZXRDYXJ0KCk7XHJcbiAgICAgICAgY29uc3QgdmFsb3JUb3RhbCA9IHRoaXMuY2FsY3VsYXJWYWxvclRvdGFsKGNhcnJpbmhvLCBmcmV0ZVNlbGVjaW9uYWRvKTtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMudmFsaWRhdGUoKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdGhpcy50b2dnbGVEaXNhYmxlZCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubm92b1BlZGlkbyhcclxuICAgICAgICAgICAgZm9ybSwgZnJldGVTZWxlY2lvbmFkbywgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvLCBcclxuICAgICAgICAgICAgdmFsb3JUb3RhbCwgdG9rZW4sIHNlbmRlckhhc2gsIGNhcnJpbmhvLCAoZXJyb3IpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BlZGlkbyBmaW5hbGl6YWRvJyk7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF2aXNvOiB7IHN0YXR1czpmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9IH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc2FibGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxBbGVydEdlcmFsIGF2aXNvPXt0aGlzLnN0YXRlLmF2aXNvfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWN0YSBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlzYWJsZWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFTlZJQU5ETy4uLlwiIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ09OQ0xVSVIgUEVESURPXCJcclxuICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5jYXJyaW5obyxcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZyZXRlU2VsZWNpb25hZG86IHN0YXRlLmNhcnJpbmhvLmZyZXRlU2VsZWNpb25hZG8sXHJcbiAgICBmb3JtOiBzdGF0ZS5jaGVja291dC5mb3JtLFxyXG4gICAgdG9rZW46IHN0YXRlLmF1dGgudG9rZW4sXHJcbiAgICBzZW5kZXJIYXNoOiBzdGF0ZS5jaGVja291dC5zZW5kZXJIYXNoLFxyXG4gICAgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvOiBzdGF0ZS5jaGVja291dC50aXBvUGFnYW1lbnRvU2VsZWNpb25hZG9cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoQ2hlY2tvdXRCdXR0b24pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRGFkb3NDbGllbnRlQ29udGFpbmVyIGZyb20gJy4uL0NsaWVudGUvRGFkb3NDbGllbnRlJztcclxuaW1wb3J0IENsaWVudGVMb2dpbiBmcm9tICcuLi9DbGllbnRlL0NsaWVudGVMb2dpbic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgRGFkb3NDbGllbnRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5mZXRjaENsaWVudGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICB0aGlzLmZldGNoQ2xpZW50ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQ2xpZW50ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgdXN1YXJpbywgdG9rZW4sIGNsaWVudGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYodXN1YXJpbyAmJiB0b2tlbiAmJiAhY2xpZW50ZSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDbGllbnRlKHVzdWFyaW8uX2lkLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgdXN1YXJpbywgcGVybWlzc2FvSW5pY2lhbCwgcGVybWl0aXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHVzdWFyaW8gfHwgcGVybWlzc2FvSW5pY2lhbCA/IFxyXG4gICAgICAgICAgICA8RGFkb3NDbGllbnRlQ29udGFpbmVyIC8+IDogXHJcbiAgICAgICAgICAgIDxDbGllbnRlTG9naW4gcGVybWl0aXI9e3Blcm1pdGlyfSAvPjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxyXG4gICAgY2xpZW50ZTogc3RhdGUuY2xpZW50ZS5jbGllbnRlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKERhZG9zQ2xpZW50ZSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm1TaW1wbGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1TaW1wbGVzJztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBFU1RBRE9TIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBmb3JtYXROdW1iZXIsIGZvcm1hdENFUCB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCc7XHJcblxyXG5jbGFzcyBEYWRvc0VudHJlZ2FDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGVycm9zOiB7IGRhZG9zQ29icmFuY2E6IHt9IH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZmV0Y2hDbGllbnRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XHJcbiAgICAgICAgaWYoIXByZXZQcm9wcy5jbGllbnRlICYmIHRoaXMucHJvcHMuY2xpZW50ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDbGllbnRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQ2xpZW50ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe1xyXG4gICAgICAgICAgICBkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2E6IHRydWUsXHJcbiAgICAgICAgICAgIGxvY2FsOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5sb2NhbCA6IFwiXCIsXHJcbiAgICAgICAgICAgIG51bWVybzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28ubnVtZXJvIDogXCJcIixcclxuICAgICAgICAgICAgYmFpcnJvOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5iYWlycm8gOiBcIlwiLFxyXG4gICAgICAgICAgICBjb21wbGVtZW50bzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uY29tcGxlbWVudG8gOiBcIlwiLFxyXG4gICAgICAgICAgICBjaWRhZGU6IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmNpZGFkZSA6IFwiXCIsXHJcbiAgICAgICAgICAgIGVzdGFkbzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uZXN0YWRvIDogXCJcIixcclxuICAgICAgICAgICAgQ0VQOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5DRVAgOiBcIlwiLFxyXG4gICAgICAgICAgICBkYWRvc0NvYnJhbmNhOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbDogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28ubG9jYWwgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbnVtZXJvOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5udW1lcm8gOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYmFpcnJvOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5iYWlycm8gOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY29tcGxlbWVudG86IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmNvbXBsZW1lbnRvIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGNpZGFkZTogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uY2lkYWRlIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGVzdGFkbzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uZXN0YWRvIDogXCJcIixcclxuICAgICAgICAgICAgICAgIENFUDogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uQ0VQIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhLFxyXG4gICAgICAgICAgICBsb2NhbCwgbnVtZXJvLCBiYWlycm8sIGNpZGFkZSwgZXN0YWRvLCBDRVAsXHJcbiAgICAgICAgICAgIGRhZG9zQ29icmFuY2EgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCBlcnJvcyA9IHsgZGFkb3NDb2JyYW5jYToge30gfTtcclxuXHJcbiAgICAgICAgaWYoIWxvY2FsKSBlcnJvcy5sb2NhbCA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgZW5kZXJlw6dvXCI7XHJcbiAgICAgICAgaWYoIW51bWVybykgZXJyb3MubnVtZXJvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBuw7ptZXJvXCI7XHJcbiAgICAgICAgaWYoIWJhaXJybykgZXJyb3MuYmFpcnJvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBiYWlycm9cIjtcclxuICAgICAgICBpZighY2lkYWRlKSBlcnJvcy5jaWRhZGUgPSBcIlByZWVuY2hhIGFxdWkgY29tIGEgc3VhIGNpZGFkZVwiO1xyXG4gICAgICAgIGlmKCFlc3RhZG8pIGVycm9zLmVzdGFkbyA9IFwiU2VsZWNpb25lIG8gc2V1IGVzdGFkb1wiO1xyXG4gICAgICAgIGlmKCFDRVAgfHwgQ0VQLmxlbmd0aCAhPT0gOSkgZXJyb3MuQ0VQID0gXCJEaWdpdGUgYXF1aSBzZXUgQ0VQXCI7XHJcblxyXG4gICAgICAgIGlmKCFkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2Epe1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5sb2NhbCkgZXJyb3MuZGFkb3NDb2JyYW5jYS5sb2NhbCA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgZW5kZXJlw6dvXCI7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLm51bWVybykgZXJyb3MuZGFkb3NDb2JyYW5jYS5udW1lcm8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IG7Dum1lcm9cIjtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuYmFpcnJvKSBlcnJvcy5kYWRvc0NvYnJhbmNhLmJhaXJybyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgYmFpcnJvXCI7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmNpZGFkZSkgZXJyb3MuZGFkb3NDb2JyYW5jYS5jaWRhZGUgPSBcIlByZWVuY2hhIGFxdWkgY29tIGEgc3VhIGNpZGFkZVwiO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5lc3RhZG8pIGVycm9zLmRhZG9zQ29icmFuY2EuZXN0YWRvID0gXCJTZWxlY2lvbmUgbyBzZXUgZXN0YWRvXCI7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLkNFUCB8fCBkYWRvc0NvYnJhbmNhLkNFUC5sZW5ndGggIT09IDkpIGVycm9zLmRhZG9zQ29icmFuY2EuQ0VQID0gXCJEaWdpdGUgYXF1aSBzZXUgQ0VQXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3MgfSk7XHJcbiAgICAgICAgcmV0dXJuICggT2JqZWN0LmtleXMoZXJyb3MpLmxlbmd0aCA9PT0gMSAmJiBPYmplY3Qua2V5cyhlcnJvcy5kYWRvc0NvYnJhbmNhKS5sZW5ndGggPT09IDAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSA9IChmaWVsZCwgdmFsdWUsIHByZWZpeCkgPT4gXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHsgW2ZpZWxkXTogdmFsdWUgfSwgcHJlZml4KS50aGVuKCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XHJcblxyXG4gICAgb25DaGFuZ2VDRVAgPSAoZmllbGQsIHZhbHVlLCBwcmVmaXgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oeyBbZmllbGRdOiB2YWx1ZSB9LCBwcmVmaXgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gOSl7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vdmlhY2VwLmNvbS5ici93cy8ke3ZhbHVlLnJlcGxhY2UoJy0nLCcnKX0vanNvbi91bmljb2RlYClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxvY2FsXCI6IHJlc3BvbnNlLmRhdGFbXCJsb2dyYWRvdXJvXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhaXJyb1wiOiByZXNwb25zZS5kYXRhW1wiYmFpcnJvXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNpZGFkZVwiOiByZXNwb25zZS5kYXRhW1wibG9jYWxpZGFkZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIjogcmVzcG9uc2UuZGF0YVtcInVmXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcHJlZml4KS50aGVuKCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlckRhZG9zRGVFbnRyZWdhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuZm9ybSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhLFxyXG4gICAgICAgICAgICBsb2NhbCxcclxuICAgICAgICAgICAgbnVtZXJvLFxyXG4gICAgICAgICAgICBiYWlycm8sXHJcbiAgICAgICAgICAgIGNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICBjaWRhZGUsXHJcbiAgICAgICAgICAgIGVzdGFkbyxcclxuICAgICAgICAgICAgQ0VQXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IGVycm9zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkRBRE9TIERFIEVOVFJFR0E8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0NFUCB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MuQ0VQfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNDUtNzg5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUNFUChcIkNFUFwiLCBmb3JtYXRDRVAoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYWwgfHwgXCJcIn0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MubG9jYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9jYWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUnVhLCBBdmVuaWRhLCAuLi5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5kZXJlw6dvIChSdWEsIEF2ZW5pZGEsLi4pXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJsb2NhbFwiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWVybyB8fCBcIlwifSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5udW1lcm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnVtZXJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjk5OTlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwibnVtZXJvXCIsIGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFpcnJvIHx8IFwiXCJ9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5iYWlycm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFpcnJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJhaXJyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCYWlycm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImJhaXJyb1wiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBsZW1lbnRvIHx8IFwiXCJ9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmNvbXBsZW1lbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJjb21wbGVtZW50b1wiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaWRhZGUgfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5jaWRhZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2lkYWRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpZGFkZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaWRhZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImNpZGFkZVwiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdmVydGljYWwgZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0YWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZXN0YWRvfSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJlc3RhZG9cIiwgZS50YXJnZXQudmFsdWUpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjaW9uZS4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBPYmplY3Qua2V5cyhFU1RBRE9TKS5tYXAoKGFiYnIpID0+ICg8b3B0aW9uIGtleT17YWJicn0gdmFsdWU9e2FiYnJ9PntFU1RBRE9TW2FiYnJdfTwvb3B0aW9uPikpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3MuZXN0YWRvICYmICg8c21hbGwgY2xhc3NOYW1lPVwiZXJyb1wiPntlcnJvcy5lc3RhZG99PC9zbWFsbD4pIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhIHx8IHRydWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2F9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5wcm9wcy5zZXRGb3JtKHsgXCJkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2FcIjogIWRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7T3MgZGFkb3MgZGUgZW50cmVnYSBzw6NvIGlndWFpcyBhb3MgZGFkb3MgZGUgY29icmFuw6dhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRhZG9zRGVDb2JyYW5jYSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLmZvcm0gfHwgIXRoaXMucHJvcHMuZm9ybS5kYWRvc0NvYnJhbmNhKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCB7IFxyXG4gICAgICAgICAgICBsb2NhbCxcclxuICAgICAgICAgICAgbnVtZXJvLFxyXG4gICAgICAgICAgICBiYWlycm8sXHJcbiAgICAgICAgICAgIGNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICBjaWRhZGUsXHJcbiAgICAgICAgICAgIGVzdGFkbyxcclxuICAgICAgICAgICAgQ0VQXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybS5kYWRvc0NvYnJhbmNhO1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+REFET1MgREUgQ09CUkFOw4dBPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtDRVAgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MuZGFkb3NDb2JyYW5jYS5DRVB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNDUtNzg5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUNFUChcIkNFUFwiLCBmb3JtYXRDRVAoZS50YXJnZXQudmFsdWUpLCAnZGFkb3NDb2JyYW5jYScpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhbCB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EubG9jYWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvY2FsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJ1YSwgQXZlbmlkYSwgLi4uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVuZGVyZcOnbyAoUnVhLCBBdmVuaWRhLC4uKVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwibG9jYWxcIiwgZS50YXJnZXQudmFsdWUsICdkYWRvc0NvYnJhbmNhJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWVybyB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EubnVtZXJvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1lcm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiOTk5OVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOw7ptZXJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJudW1lcm9cIiwgZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlKSwgJ2RhZG9zQ29icmFuY2EnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhaXJybyB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EuYmFpcnJvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYWlycm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmFpcnJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJhaXJyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiYmFpcnJvXCIsIGUudGFyZ2V0LnZhbHVlLCAnZGFkb3NDb2JyYW5jYScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wbGVtZW50byB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EuY29tcGxlbWVudG99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJjb21wbGVtZW50b1wiLCBlLnRhcmdldC52YWx1ZSwgJ2RhZG9zQ29icmFuY2EnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NpZGFkZSB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EuY2lkYWRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaWRhZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2lkYWRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNpZGFkZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiY2lkYWRlXCIsIGUudGFyZ2V0LnZhbHVlLCAnZGFkb3NDb2JyYW5jYScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHZlcnRpY2FsIGZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVzdGFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2VzdGFkb30gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiZXN0YWRvXCIsIGUudGFyZ2V0LnZhbHVlLCAnZGFkb3NDb2JyYW5jYScpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjaW9uZS4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBPYmplY3Qua2V5cyhFU1RBRE9TKS5tYXAoKGFiYnIpID0+ICg8b3B0aW9uIGtleT17YWJicn0gdmFsdWU9e2FiYnJ9PntFU1RBRE9TW2FiYnJdfTwvb3B0aW9uPikpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3MuZGFkb3NDb2JyYW5jYS5lc3RhZG8gJiYgKDxzbWFsbCBjbGFzc05hbWU9XCJlcnJvXCI+e2Vycm9zLmRhZG9zQ29icmFuY2EuZXN0YWRvfTwvc21hbGw+KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJEYWRvc0RlRW50cmVnYSgpIH1cclxuICAgICAgICAgICAgICAgIHsgIWRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSAmJiB0aGlzLnJlbmRlckRhZG9zRGVDb2JyYW5jYSgpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZvcm06IHN0YXRlLmNoZWNrb3V0LmZvcm1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoRGFkb3NFbnRyZWdhQ29udGFpbmVyKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEZvcm1SYWRpbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0cy9Gb3JtUmFkaW8nO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENhcnQgfSBmcm9tICcuLi8uLi91dGlscy9jYXJ0JztcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXksIGNvZGlnb3NDb3JyZWlvcyB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbmNsYXNzIERhZG9zRnJldGUgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKGZvcm0pe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGN1bGFyRnJldGUoZm9ybS5DRVAsIGdldENhcnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpe1xyXG4gICAgICAgIGlmKHByZXZQcm9wcy5mb3JtLkNFUCAhPT0gdGhpcy5wcm9wcy5mb3JtLkNFUCAmJiB0aGlzLnByb3BzLmZvcm0uQ0VQLmxlbmd0aCA9PT0gOSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsY3VsYXJGcmV0ZSh0aGlzLnByb3BzLmZvcm0uQ0VQLCBnZXRDYXJ0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY2lvbmFyRnJldGUoZnJldGUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWNpb25hckZyZXRlKGZyZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGZyZXRlcywgZnJldGVTZWxlY2lvbmFkbyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRhZG9zLUZyZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+TcOJVE9ET1MgREUgRU5UUkVHQTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZnJldGVzIHx8IFtdKS5tYXAoKGZyZXRlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVJhZGlvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJldGVfc2VsZWNpb25hZG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZnJldGVTZWxlY2lvbmFkbyA/IGZyZXRlU2VsZWNpb25hZG8uQ29kaWdvID09PSBmcmV0ZS5Db2RpZ28gOiBmYWxzZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+IHRoaXMuc2VsZWNpb25hckZyZXRlKGZyZXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y29kaWdvc0NvcnJlaW9zW2ZyZXRlLkNvZGlnb119IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCR7ZnJldGUuUHJhem9FbnRyZWdhfSBkaWFzIMO6dGVpcykgLSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9ybWF0TW9uZXkoZnJldGUuVmFsb3IucmVwbGFjZSgnLCcsJy4nKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+KHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5jYXJyaW5obyxcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZvcm06IHN0YXRlLmNoZWNrb3V0LmZvcm0sXHJcbiAgICBmcmV0ZXM6IHN0YXRlLmNhcnJpbmhvLmZyZXRlcyxcclxuICAgIGZyZXRlU2VsZWNpb25hZG86IHN0YXRlLmNhcnJpbmhvLmZyZXRlU2VsZWNpb25hZG9cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoRGFkb3NGcmV0ZSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRm9ybVJhZGlvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1SYWRpbyc7XHJcbmltcG9ydCBGb3JtU2ltcGxlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0cy9Gb3JtU2ltcGxlcyc7XHJcblxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCB7Zm9ybWF0Q1BGLCBmb3JtYXRDYXJ0YW8sIGZvcm1hdE51bWJlcn0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0JztcclxuaW1wb3J0IHtmb3JtYXRNb25leX0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQge3ZhbGlkYXRlQ1BGfSBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0ZSc7XHJcblxyXG5jbGFzcyBEYWRvc1BhZ2FtZW50byBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7ZXJyb3M6IHt9fVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0U2Vzc2lvblBhZ2FtZW50bygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbyxcclxuICAgICAgICAgICAgbWVzQ2FydGFvLFxyXG4gICAgICAgICAgICBhbm9DYXJ0YW8sXHJcbiAgICAgICAgICAgIENWVkNhcnRhbyxcclxuICAgICAgICAgICAgY3JlZGl0X2NhcmRfdG9rZW4sXHJcbiAgICAgICAgICAgIGJhbmRlaXJhX2NhcnRhbyxcclxuICAgICAgICAgICAgcGFyY2VsYXNDYXJ0YW9cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4vKlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYWRvcyBwYWctbnVtY2FydGFvOiAnLCBudW1lcm9DYXJ0YW8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYWRvcyBwYWctbWVzY2FydGFvOiAnLCBtZXNDYXJ0YW8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYWRvcyBwYWctYW5vY2FydGFvOiAnLCBhbm9DYXJ0YW8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYWRvcyBwYWctY3Z2Y2FydGFvOiAnLCBDVlZDYXJ0YW8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYWRvcyBwYWctY3JlZGl0LWNhcmQtdG9rZW4tY2FydGFvOiAnLCBjcmVkaXRfY2FyZF90b2tlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhZG9zIHBhZy1iYW5kZWlyYWNhcnRhbzogJywgYmFuZGVpcmFfY2FydGFvKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGFkb3MgcGFnLXBhcmNlbGFzY2FydGFvOiAnLCBwYXJjZWxhc0NhcnRhbyk7XHJcbiovXHJcbiAgICAgICAgaWYgKCFiYW5kZWlyYV9jYXJ0YW8gJiYgbnVtZXJvQ2FydGFvICYmIG51bWVyb0NhcnRhby5zcGxpdCgnJykuam9pbignJykubGVuZ3RoID4gNykge1xyXG4gICAgICAgICAgICB0aGlzLmdldEJyYW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgIWNyZWRpdF9jYXJkX3Rva2VuICYmXHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbyAmJiBudW1lcm9DYXJ0YW8uc3BsaXQoJycpLmpvaW4oJycpLmxlbmd0aCA9PT0gMTYgJiZcclxuICAgICAgICAgICAgbWVzQ2FydGFvICYmIG1lc0NhcnRhby5sZW5ndGggPT09IDIgJiZcclxuICAgICAgICAgICAgYW5vQ2FydGFvICYmIGFub0NhcnRhby5sZW5ndGggPT09IDQgJiZcclxuICAgICAgICAgICAgQ1ZWQ2FydGFvICYmIENWVkNhcnRhby5sZW5ndGggPT09IDMgJiZcclxuICAgICAgICAgICAgYmFuZGVpcmFfY2FydGFvIFxyXG4gICAgICAgICkgdGhpcy5zdWJtaXRDYXJ0YW9IYXNoKCk7XHJcblxyXG4gICAgICAgIGlmICgoIXBhcmNlbGFzQ2FydGFvICYmIGJhbmRlaXJhX2NhcnRhbykgfHxcclxuICAgICAgICAgICAgKHBhcmNlbGFzQ2FydGFvICYmIGJhbmRlaXJhX2NhcnRhbyAmJiBwcmV2UHJvcHMuZnJldGVTZWxlY2lvbmFkbyAhPT0gdGhpcy5wcm9wcy5mcmV0ZVNlbGVjaW9uYWRvKVxyXG4gICAgICAgICkgdGhpcy5nZXRQYXJjZWxhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyYW5kKCkge1xyXG4gICAgICAgIGNvbnN0IHtudW1lcm9DYXJ0YW99ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ2dldGJyYW5kOiAnLCBudW1lcm9DYXJ0YW8pXHJcbiAgICAgICAgUGFnU2VndXJvRGlyZWN0UGF5bWVudC5nZXRCcmFuZCh7XHJcbiAgICAgICAgICAgIGNhcmRCaW46IG51bWVyb0NhcnRhby5zcGxpdCgnJykuam9pbignJykuc2xpY2UoMCw2KSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JhbmRlaXJhczogJywgcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe2JhbmRlaXJhX2NhcnRhbzogci5icmFuZH0pXHJcbiAgICAgICAgICAgIH0sICAgIFxyXG4gICAgICAgICAgICBlcnJvcjogKHIpID0+IGNvbnNvbGUubG9nKHIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0Q2FydGFvSGFzaCgpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbyxcclxuICAgICAgICAgICAgbWVzQ2FydGFvLFxyXG4gICAgICAgICAgICBhbm9DYXJ0YW8sXHJcbiAgICAgICAgICAgIENWVkNhcnRhbyxcclxuICAgICAgICAgICAgYmFuZGVpcmFfY2FydGFvXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuLyogICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRDYXJ0YW9IYXNoLW51bWNhcnRhbzogJywgbnVtZXJvQ2FydGFvKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0Q2FydGFvSGFzaC1tZXNjYXJ0YW86ICcsIG1lc0NhcnRhbyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdENhcnRhb0hhc2gtYW5vY2FydGFvOiAnLCBhbm9DYXJ0YW8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRDYXJ0YW9IYXNoLWN2dmNhcnRhbzogJywgQ1ZWQ2FydGFvKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0Q2FydGFvSGFzaC1iYW5kZWlyYWNhcnRhbzogJywgYmFuZGVpcmFfY2FydGFvKTtcclxuKi9cclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGNhcmROdW1iZXI6IG51bWVyb0NhcnRhby5zcGxpdCgnJykuam9pbignJyksXHJcbiAgICAgICAgICAgIGJyYW5kOiBiYW5kZWlyYV9jYXJ0YW8ubmFtZSxcclxuICAgICAgICAgICAgY3Z2OiBDVlZDYXJ0YW8sXHJcbiAgICAgICAgICAgIGV4cGlyYXRpb25Nb250aDogbWVzQ2FydGFvLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uWWVhcjogYW5vQ2FydGFvLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlZGl0IGNhcmQgdG9rZW46Jywgcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe2NyZWRpdF9jYXJkX3Rva2VuOiByLmNhcmQudG9rZW59KVxyXG4gICAgICAgICAgICB9LCAgICBcclxuICAgICAgICAgICAgZXJyb3I6IChyKSA9PiBjb25zb2xlLmxvZyhyKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgUGFnU2VndXJvRGlyZWN0UGF5bWVudC5jcmVhdGVDYXJkVG9rZW4ocGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJjZWxhcygpIHtcclxuICAgICAgICBjb25zdCB7ZnJldGVTZWxlY2lvbmFkbywgY2FycmluaG99ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7YmFuZGVpcmFfY2FydGFvfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuLypcclxuICAgICAgICBjb25zb2xlLmxvZygncGFyY2VsYXMtZnJldGUgc2VsZWNpb25hZG86ICcsIGZyZXRlU2VsZWNpb25hZG8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJjZWxhcy1jYXJyaW5obzogJywgY2FycmluaG8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJjZWxhcy1iYW5kZWlyYWNhcnRhbzogJywgYmFuZGVpcmFfY2FydGFvKTtcclxuKi9cclxuICAgICAgICBsZXQgdmFsb3JUb3RhbCA9IGNhcnJpbmhvLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhbGwsIGl0ZW0pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsICsgKE51bWJlcihpdGVtLnByZWNvVW5pdGFyaW8pICogTnVtYmVyKGl0ZW0ucXVhbnRpZGFkZSkpLCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgbGV0IGZyZXRlVmFsb3IgPSBOdW1iZXIoZnJldGVTZWxlY2lvbmFkby5WYWxvci5yZXBsYWNlKCcsJywgJy4nKSk7XHJcblxyXG4gICAgICAgIFBhZ1NlZ3Vyb0RpcmVjdFBheW1lbnQuZ2V0SW5zdGFsbG1lbnRzKHtcclxuICAgICAgICAgICAgYW1vdW50OiB2YWxvclRvdGFsICsgZnJldGVWYWxvcixcclxuICAgICAgICAgICAgbWF4SW5zdGFsbG1lbnROb0ludGVyZXN0OiA2LFxyXG4gICAgICAgICAgICBtYXhJbnN0YWxsbWVudDogNixcclxuICAgICAgICAgICAgYnJhbmQ6IGJhbmRlaXJhX2NhcnRhby5uYW1lLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe3BhcmNlbGFzQ2FydGFvOiBkYXRhLmluc3RhbGxtZW50c30pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHtwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhOiBkYXRhLmluc3RhbGxtZW50c1tiYW5kZWlyYV9jYXJ0YW8ubmFtZV1bMF19KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IChyKSA9PiBjb25zb2xlLmxvZyhyKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck9wY29lc1BhZ2FtZW50bygpIHtcclxuICAgICAgICBjb25zdCB7dGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtUmFkaW8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInRpcG9fcGFnYW1lbnRvX3NlbGVjaW9uYWRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSB7dGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSAnYm9sZXRvJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geygpID0+IHRoaXMucHJvcHMuc2V0VGlwb1BhZ2FtZW50byhcImJvbGV0b1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIkJvbGV0byBCYW5jw6FyaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1SYWRpbyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwidGlwb19wYWdhbWVudG9fc2VsZWNpb25hZG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA9IHt0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09ICdjYXJ0YW8nfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KCkgPT4gdGhpcy5wcm9wcy5zZXRUaXBvUGFnYW1lbnRvKFwiY2FydGFvXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ2FydMOjbyBkZSBDcsOpZGl0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHt0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG99ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IFxyXG4gICAgICAgICAgICBDUEYsIENQRmJvbGV0byxcclxuICAgICAgICAgICAgbnVtZXJvQ2FydGFvLCBub21lQ2FydGFvLCBtZXNDYXJ0YW8sIGFub0NhcnRhbywgcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSwgQ1ZWQ2FydGFvXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCBlcnJvcyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAodGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImJvbGV0b1wiKSB7XHJcbiAgICAgICAgICAgIGlmICghQ1BGYm9sZXRvICYmICFDUEYpIGVycm9zLkNQRmJvbGV0byA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgQ1BGXCI7XHJcbiAgICAgICAgICAgIGlmIChDUEZib2xldG8gJiYgQ1BGYm9sZXRvLmxlbmd0aCAhPT0gMTQgJiYgIXZhbGlkYXRlQ1BGKENQRmJvbGV0bykpXHJcbiAgICAgICAgICAgICAgICBlcnJvcy5DUEZib2xldG8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IENQRiBjb3JyZXRhbWVudGVcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09IFwiY2FydGFvXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFudW1lcm9DYXJ0YW8gfHwgbnVtZXJvQ2FydGFvLmxlbmd0aCAhPT0gMTkpIGVycm9zLm51bWVyb0NhcnRhbyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBuw7ptZXJvIGRvIHNldSBjYXJ0w6NvXCI7XHJcbiAgICAgICAgICAgIGlmICghbm9tZUNhcnRhbykgZXJyb3Mubm9tZUNhcnRhbyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBub21lIHF1ZSBlc3TDoSBubyBjYXJ0w6NvXCI7XHJcbiAgICAgICAgICAgIGlmICghbWVzQ2FydGFvIHx8IG1lc0NhcnRhby5sZW5ndGggIT09IDIpIGVycm9zLm1lc0NhcnRhbyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBtw6pzIGRlIHZlbmNpbWVudG8gZG8gY2FydMOjb1wiO1xyXG4gICAgICAgICAgICBpZiAoIWFub0NhcnRhbyB8fCBhbm9DYXJ0YW8ubGVuZ3RoICE9PSA0KSBlcnJvcy5hbm9DYXJ0YW8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gYW5vIGRlIHZlbmNpbWVudG8gZG8gY2FydMOjb1wiO1xyXG4gICAgICAgICAgICBpZiAoIXBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEpIGVycm9zLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEgPSBcIlNlbGVjaW9uZSB1bWEgZm9ybWEgZGUgcGFnYW1lbnRvXCI7XHJcbiAgICAgICAgICAgIGlmICghQ1ZWQ2FydGFvIHx8IENWVkNhcnRhby5sZW5ndGggIT09IDMpIGVycm9zLkNWVkNhcnRhbyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBjw7NkaWdvIGRlIHNlZ3VyYW7Dp2EgZG8gY2FydMOjb1wiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3N9KTtcclxuICAgICAgICByZXR1cm4gIShPYmplY3Qua2V5cyhlcnJvcykubGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB0aGlzLnByb3BzLnNldEZvcm0oe1tmaWVsZF06IHZhbHVlfSkudGhlbigoKSA9PiB0aGlzLnZhbGlkYXRlKCkpO1xyXG5cclxuICAgIHJlbmRlclBhZ2FtZW50b0NvbUJvbGV0bygpIHtcclxuICAgICAgICBjb25zdCB7Q1BGLCBDUEZib2xldG99ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIGNvbnN0IHtlcnJvc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJEYWRvcy1QYWdhbWVudG9cIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtDUEZib2xldG8gfHwgQ1BGfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIkNQRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3MuQ1BGYm9sZXRvfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJDUEZcIiBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ1BGXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJDUEZib2xldG9cIiwgZm9ybWF0Q1BGKGUudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQYWdhbWVudG9Db21DYXJ0YW8oKSB7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgbm9tZUNhcnRhbywgXHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbywgXHJcbiAgICAgICAgICAgIENWVkNhcnRhbywgXHJcbiAgICAgICAgICAgIG1lc0NhcnRhbywgXHJcbiAgICAgICAgICAgIGFub0NhcnRhbywgXHJcbiAgICAgICAgICAgIHBhcmNlbGFzQ2FydGFvLCBcclxuICAgICAgICAgICAgcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSxcclxuICAgICAgICAgICAgYmFuZGVpcmFfY2FydGFvXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7ZXJyb3N9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiRGFkb3MtUGFnYW1lbnRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bm9tZUNhcnRhb30gXHJcbiAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5ub21lQ2FydGFvfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIm5vbWVDYXJ0YW9cIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiTm9tZSBjb21vIGVzY3JpdG8gbm8gY2FydMOjb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJOb21lIENvbXBsZXRvIG5vIENhcnTDo29cIiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIm5vbWVDYXJ0YW9cIiwgZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bnVtZXJvQ2FydGFvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3MubnVtZXJvQ2FydGFvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwibnVtZXJvQ2FydGFvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiWFhYWCBYWFhYIFhYWFggWFhYWFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIk7Dum1lcm8gZG8gQ2FydMOjb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJudW1lcm9DYXJ0YW9cIiwgZm9ybWF0Q2FydGFvKGUudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtDVlZDYXJ0YW99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5DVlZDYXJ0YW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJDVlZDYXJ0YW9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJYWFhcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJDw7NkaWdvIGRlIFNlZ3VyYW7Dp2EgZG8gQ2FydMOjb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJDVlZDYXJ0YW9cIiwgZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlLCAzKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBEYXRhIGRlIFZhbGlkYWRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHttZXNDYXJ0YW99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvID0ge2Vycm9zLm1lc0NhcnRhb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwibWVzQ2FydGFvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJNTVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiTcOqc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIm1lc0NhcnRhb1wiLCBmb3JtYXROdW1iZXIoZS50YXJnZXQudmFsdWUsIDIpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSBcInNsYXNoLXBhZ2FtZW50b1wiPiAmbmJzcDsgLyAmbmJzcDsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7YW5vQ2FydGFvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5hbm9DYXJ0YW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImFub0NhcnRhb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiQUFBQVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQW5vXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiYW5vQ2FydGFvXCIsIGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSwgNCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBQYXJjZWxhcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyY2VsYXNDYXJ0YW8gJiYgcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInBhcmNlbGFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhLnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwicGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYVwiLCBwYXJjZWxhc0NhcnRhb1tiYW5kZWlyYV9jYXJ0YW8ubmFtZV1bZS50YXJnZXQudmFsdWUgLSAxXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IFNlbGVjaW9uZSBhIHF1YW50aWRhZGUgZGUgcGFyY2VsYXMgcGFyYSBwYWdhbWVudG8gPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyY2VsYXNDYXJ0YW9bYmFuZGVpcmFfY2FydGFvLm5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLDYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT0ge2luZGV4fSB2YWx1ZT17aXRlbS5xdWFudGl0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9IHggZGUge2Zvcm1hdE1vbmV5KGl0ZW0udG90YWxBbW91bnQgLyBpdGVtLnF1YW50aXR5KX0gc2VtIGp1cm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9zLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWUgPSBcImVycm9cIj4ge2Vycm9zLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGF9IDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHt0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG99ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiRGFkb3MtUGFnYW1lbnRvLUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPiBEQURPUyBERSBQQUdBTUVOVE8gPC9oMj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyT3Bjb2VzUGFnYW1lbnRvKCl9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge3RpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gJ2JvbGV0bycgJiYgdGhpcy5yZW5kZXJQYWdhbWVudG9Db21Cb2xldG8oKX1cclxuICAgICAgICAgICAgICAgIHt0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09ICdjYXJ0YW8nICYmIHRoaXMucmVuZGVyUGFnYW1lbnRvQ29tQ2FydGFvKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5jYXJyaW5obyxcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZvcm06IHN0YXRlLmNoZWNrb3V0LmZvcm0sXHJcbiAgICB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG86IHN0YXRlLmNoZWNrb3V0LnRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyxcclxuICAgIHNlc3Npb25JZDogc3RhdGUuY2hlY2tvdXQuc2Vzc2lvbklkLFxyXG4gICAgc2VuZGVySGFzaDogc3RhdGUuY2hlY2tvdXQuc2VuZGVySGFzaCxcclxuICAgIGZyZXRlU2VsZWNpb25hZG86IHN0YXRlLmNhcnJpbmhvLmZyZXRlU2VsZWNpb25hZG9cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykgKERhZG9zUGFnYW1lbnRvKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IExpc3RhRGVQcm9kdXRvcyBmcm9tICcuLi9DYXJyaW5oby9MaXN0YURlUHJvZHV0b3MnO1xyXG5cclxuY2xhc3MgRGFkb3NQZWRpZG8gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRhZG9zLVBlZGlkby1Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5EQURPUyBETyBQRURJRE88L2gyPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdGFEZVByb2R1dG9zIHNlbUFsdGVyYWNvZXMgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhZG9zUGVkaWRvOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQWxlcnRHZXJhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsZXJ0L0dlcmFsJztcclxuaW1wb3J0IHsgdmFsaWRhdGVDUEYgfSBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0ZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgU3VibWl0RGFkb3NDbGllbnRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBhdmlzbzogbnVsbCB9XHJcblxyXG4gICAgY2FsbGJhY2sgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICBpZighZXJyb3Ipe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnBlcm1pdGlyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdmlzbzogbnVsbCB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdmlzbzogeyBzdGF0dXM6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgIFxyXG4gICAgICAgICAgICBlbWFpbCwgc2VuaGEsIG5vbWUsIENQRiwgZGF0YURlTmFzY2ltZW50bywgdGVsZWZvbmUsXHJcbiAgICAgICAgICAgIGxvY2FsLCBudW1lcm8sIGJhaXJybywgY2lkYWRlLCBlc3RhZG8sIENFUFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3QgeyB1c3VhcmlvIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgdGVtRXJybyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZighdXN1YXJpbyAmJiAhZW1haWwpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCF1c3VhcmlvICYmICFzZW5oYSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIW5vbWUpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFDUEYgfHwgQ1BGLmxlbmd0aCAhPT0gMTQpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKENQRiAmJiBDUEYubGVuZ3RoID09PSAxNCAmJiAhdmFsaWRhdGVDUEYoQ1BGKSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWRhdGFEZU5hc2NpbWVudG8gfHwgZGF0YURlTmFzY2ltZW50by5sZW5ndGggIT09IDEwKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighdGVsZWZvbmUgfHwgdGVsZWZvbmUubGVuZ3RoIDwgMTEpIHRlbUVycm8gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZighbG9jYWwpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFudW1lcm8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFiYWlycm8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFjaWRhZGUpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFlc3RhZG8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFDRVAgfHwgQ0VQLmxlbmd0aCAhPT0gOSkgdGVtRXJybyA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiAhdGVtRXJybztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoKXtcclxuICAgICAgICBpZighdGhpcy52YWxpZGF0ZSgpKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCB7IHRva2VuLCBmb3JtLCBjbGllbnRlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKCF0b2tlbikgdGhpcy5wcm9wcy5uZXdDbGllbnRlKGZvcm0sIHRoaXMuY2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUNsaWVudGUoZm9ybSwgY2xpZW50ZS5faWQsIHRva2VuLCB0aGlzLmNhbGxiYWNrKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0R2VyYWwgYXZpc289e3RoaXMuc3RhdGUuYXZpc299IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tY3RhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT05USU5VQVIgUEVESURPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgdXN1YXJpbzogc3RhdGUuYXV0aC51c3VhcmlvLFxyXG4gICAgdG9rZW46IHN0YXRlLmF1dGgudG9rZW4sXHJcbiAgICBjbGllbnRlOiBzdGF0ZS5jbGllbnRlLmNsaWVudGUsXHJcbiAgICBmb3JtOiBzdGF0ZS5jaGVja291dC5mb3JtXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKFN1Ym1pdERhZG9zQ2xpZW50ZSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBEYWRvc0NsaWVudGUgZnJvbSAnLi9EYWRvc0NsaWVudGUnO1xyXG5pbXBvcnQgRGFkb3NFbnRyZWdhIGZyb20gJy4vRGFkb3NFbnRyZWdhJztcclxuaW1wb3J0IFN1Ym1pdERhZG9zQ2xpZW50ZSBmcm9tICcuL1N1Ym1pdERhZG9zQ2xpZW50ZSc7XHJcbmltcG9ydCBEYWRvc0ZyZXRlIGZyb20gJy4vRGFkb3NGcmV0ZSc7XHJcbmltcG9ydCBEYWRvc1BhZ2FtZW50byBmcm9tICcuL0RhZG9zUGFnYW1lbnRvJztcclxuaW1wb3J0IERhZG9zUGVkaWRvIGZyb20gJy4vRGFkb3NQZWRpZG8nO1xyXG5pbXBvcnQgQ2hlY2tvdXRCdXR0b24gZnJvbSAnLi9DaGVja291dEJ1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmNsYXNzIENoZWNrb3V0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHBlcm1pc3Nhb0luaWNpYWw6IGZhbHNlLFxyXG4gICAgICAgIHBlcm1pc3Nhb0NoZWNrb3V0OiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgcGVybWlzc2FvSW5pY2lhbCwgcGVybWlzc2FvQ2hlY2tvdXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyB1c3VhcmlvLCBmcmV0ZVNlbGVjaW9uYWRvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hlY2tvdXQgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ09OQ0xVSU5ETyBTRVUgUEVESURPXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8RGFkb3NDbGllbnRlIFxyXG4gICAgICAgICAgICAgICAgICAgIHVzdWFyaW89e3VzdWFyaW99IFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcm1pc3Nhb0luaWNpYWw9e3Blcm1pc3Nhb0luaWNpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWl0aXI9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwZXJtaXNzYW9JbmljaWFsOiB0cnVlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgeyAoIHBlcm1pc3Nhb0luaWNpYWwgfHwgdXN1YXJpbyApICYmIDxEYWRvc0VudHJlZ2EgLz59XHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICggcGVybWlzc2FvSW5pY2lhbCB8fCB1c3VhcmlvICkgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdERhZG9zQ2xpZW50ZSBwZXJtaXRpcj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBlcm1pc3Nhb0NoZWNrb3V0OiB0cnVlIH0pfS8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHBlcm1pc3Nhb0NoZWNrb3V0ICYmIDxEYWRvc0ZyZXRlIC8+fVxyXG4gICAgICAgICAgICAgICAgeyBwZXJtaXNzYW9DaGVja291dCAmJiBmcmV0ZVNlbGVjaW9uYWRvICYmIDxEYWRvc1BhZ2FtZW50byAvPn1cclxuICAgICAgICAgICAgICAgIHsgcGVybWlzc2FvQ2hlY2tvdXQgJiYgZnJldGVTZWxlY2lvbmFkbyAmJiA8RGFkb3NQZWRpZG8gLz59XHJcbiAgICAgICAgICAgICAgICB7IHBlcm1pc3Nhb0NoZWNrb3V0ICYmIGZyZXRlU2VsZWNpb25hZG8gJiYgPENoZWNrb3V0QnV0dG9uIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW8sXHJcbiAgICBmcmV0ZVNlbGVjaW9uYWRvOiBzdGF0ZS5jYXJyaW5oby5mcmV0ZVNlbGVjaW9uYWRvXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoQ2hlY2tvdXRDb250YWluZXIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1TaW1wbGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCBBbGVydEdlcmFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWxlcnQvR2VyYWwnO1xyXG5cclxuY2xhc3MgQ2xpZW50ZUxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHNlbmhhOiBcIlwiLFxyXG4gICAgICAgIGF2aXNvOiBudWxsLFxyXG4gICAgICAgIGVycm9zOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckF2aXNvRGVSZWdpc3Rybygpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Q29tcHJhciBjb21vIFZpc2l0YW50ZS9SZWFsaXphciBSZWdpc3RybzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5wZXJtaXRpcigpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DT05USU5VQVI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgc2VuaGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgZXJyb3MgPSB7fTtcclxuXHJcbiAgICAgICAgaWYoIWVtYWlsKSBlcnJvcy5lbWFpbCA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgZW1haWxcIjtcclxuICAgICAgICBpZighc2VuaGEpIGVycm9zLnNlbmhhID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBhIHN1YSBzZW5oYVwiO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3MsIGF2aXNvOiBudWxsIH0pO1xyXG4gICAgICAgIHJldHVybiAhKE9iamVjdC5rZXlzKGVycm9zKS5sZW5ndGggPiAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSA9IChmaWVsZCwgZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IGUudGFyZ2V0LnZhbHVlIH0sICgpID0+IHRoaXMudmFsaWRhdGUoKSk7XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMudmFsaWRhdGUoKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgc2VuaGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hdXRlbnRpY2FyKHsgZW1haWwsIHBhc3N3b3JkOiBzZW5oYSB9LCBmYWxzZSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycm9yKSB0aGlzLnNldFN0YXRlKHsgYXZpc286IHsgc3RhdHVzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZvcm1Mb2dpbigpe1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHNlbmhhLCBlcnJvcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkZhemVyIExvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxBbGVydEdlcmFsIGF2aXNvPXt0aGlzLnN0YXRlLmF2aXNvfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJlbWFpbFwifSBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiZW1haWxcIiwgZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbmhhfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInNlbmhhXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLnNlbmhhfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VuaGFcIiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuaGFcIiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJzZW5oYVwiLCBlKX0gLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FTlRSQVI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2xpZW50ZS1Mb2dpbiBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJBdmlzb0RlUmVnaXN0cm8oKSB9XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyRm9ybUxvZ2luKCkgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgYWN0aW9ucykoQ2xpZW50ZUxvZ2luKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm1TaW1wbGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1TaW1wbGVzJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQge3ZhbGlkYXRlQ1BGfSBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0ZSc7XHJcbmltcG9ydCB7Zm9ybWF0RGF0YURlTmFzY2ltZW50bywgZm9ybWF0VGVsZWZvbmUsIGZvcm1hdENQRn0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0JztcclxuXHJcbmNsYXNzIERhZG9zQ2xpZW50ZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZXJyb3M6IHt9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBzZW5oYTogXCJcIixcclxuICAgICAgICAgICAgbm9tZTogdGhpcy5wcm9wcy5jbGllbnRlID8gdGhpcy5wcm9wcy5jbGllbnRlLm5vbWUgOiBcIlwiLFxyXG4gICAgICAgICAgICBDUEY6IHRoaXMucHJvcHMuY2xpZW50ZSA/IHRoaXMucHJvcHMuY2xpZW50ZS5jcGYgOiBcIlwiLFxyXG4gICAgICAgICAgICB0ZWxlZm9uZTogdGhpcy5wcm9wcy5jbGllbnRlICYmIHRoaXMucHJvcHMuY2xpZW50ZS50ZWxlZm9uZXMgPyBcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpZW50ZS50ZWxlZm9uZXNbMF0gOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhRGVOYXNjaW1lbnRvOiB0aGlzLnByb3BzLmNsaWVudGUgPyBcclxuICAgICAgICAgICAgICAgIG1vbWVudCh0aGlzLnByb3BzLmNsaWVudGUuZGF0YURlTmFzY2ltZW50bykuZm9ybWF0KFwiREQvTU0vWVlZWVwiKSA6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKCFwcmV2UHJvcHMuY2xpZW50ZSAmJiB0aGlzLnByb3BzLmNsaWVudGUpIHtcclxuICAgICAgICAgICAgY29uc3Qge25vbWUsIGNwZiwgdGVsZWZvbmVzLCBkYXRhRGVOYXNjaW1lbnRvfSA9IHRoaXMucHJvcHMuY2xpZW50ZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHtcclxuICAgICAgICAgICAgICAgIG5vbWUsIENQRjogY3BmLCB0ZWxlZm9uZTogdGVsZWZvbmVzWzBdLCBcclxuICAgICAgICAgICAgICAgIGRhdGFEZU5hc2NpbWVudG86IG1vbWVudChkYXRhRGVOYXNjaW1lbnRvKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IHtlbWFpbCwgc2VuaGEsIG5vbWUsIENQRiwgZGF0YURlTmFzY2ltZW50bywgdGVsZWZvbmV9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIGNvbnN0IHt1c3VhcmlvfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZXJyb3MgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKCF1c3VhcmlvICYmISBlbWFpbCkgZXJyb3MuZW1haWwgPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IGVtYWlsXCI7XHJcbiAgICAgICAgaWYgKCF1c3VhcmlvICYmISBzZW5oYSkgZXJyb3Muc2VuaGEgPSBcIlByZWVuY2hhIGFxdWkgY29tIGEgc3VhIHNlbmhhXCI7XHJcblxyXG4gICAgICAgIGlmICghbm9tZSkgZXJyb3Mubm9tZSA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgbm9tZVwiO1xyXG4gICAgICAgIGlmICghQ1BGIHx8IENQRi5sZW5ndGggIT09IDE0KSBlcnJvcy5DUEYgPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IENQRlwiO1xyXG4gICAgICAgIGlmIChDUEYgJiYgQ1BGLmxlbmd0aCA9PT0gMTQgJiYgIXZhbGlkYXRlQ1BGKENQRikpIFxyXG4gICAgICAgICAgICBlcnJvcy5DUEYgPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IENQRiBjb3JyZXRhbWVudGVcIjtcclxuICAgICAgICBpZiAoIWRhdGFEZU5hc2NpbWVudG8gfHwgZGF0YURlTmFzY2ltZW50by5sZW5ndGggIT09IDEwKVxyXG4gICAgICAgICAgICBlcnJvcy5kYXRhRGVOYXNjaW1lbnRvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBhIHN1YSBkYXRhIGRlIG5hc2NpbWVudG9cIjtcclxuICAgICAgICBpZiAoIXRlbGVmb25lIHx8IHRlbGVmb25lLmxlbmd0aCA8IDExKVxyXG4gICAgICAgICAgICBlcnJvcy50ZWxlZm9uZSA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgdGVsZWZvbmVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe2Vycm9zfSk7XHJcbiAgICAgICAgcmV0dXJuICEoT2JqZWN0LmtleXMoZXJyb3MpLmxlbmd0aCA+IDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlID0gKGZpZWxkLCBlLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0Rm9ybSh7W2ZpZWxkXTogdmFsdWUgfHwgZS50YXJnZXQudmFsdWV9LCBudWxsKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGFkb3NSZWdpc3RybyAoKSB7XHJcbiAgICAgICAgY29uc3Qge2VtYWlsLCBzZW5oYX0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3Qge2Vycm9zfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2VtYWlsIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJFLW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIkUtbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvID0ge2Vycm9zLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImVtYWlsXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzZW5oYSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJzZW5oYVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiU2VuaGFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlNlbmhhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInNlbmhhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5zZW5oYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJzZW5oYVwiLCBlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRhZG9zVXN1YXJpbygpIHtcclxuICAgICAgICBjb25zdCB7bm9tZSwgQ1BGLCBkYXRhRGVOYXNjaW1lbnRvLCB0ZWxlZm9uZX0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3Qge2Vycm9zfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMSBmbGV4IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtub21lIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIm5vbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIk5vbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIk5vbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5ub21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIm5vbWVcIiwgZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge0NQRiB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJDUEZcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkNQRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ1BGXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5DUEZ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIkNQRlwiLCBlLCBmb3JtYXRDUEYoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtkYXRhRGVOYXNjaW1lbnRvIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvID0ge2Vycm9zLmRhdGFEZU5hc2NpbWVudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJkYXRhRGVOYXNjaW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiREQvTU0vQUFBQVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIkRhdGEgZGUgTmFzY2ltZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJkYXRhRGVOYXNjaW1lbnRvXCIsIGUsIGZvcm1hdERhdGFEZU5hc2NpbWVudG8oZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3RlbGVmb25lIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvID0ge2Vycm9zLnRlbGVmb25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwidGVsZWZvbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCIoMzQpIDEyMzQtNTY3OFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlRlbGVmb25lL0NlbHVsYXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwidGVsZWZvbmVcIiwgZSwgZm9ybWF0VGVsZWZvbmUoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPiBEQURPUyBETyBDTElFTlRFIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy51c3VhcmlvICYmIHRoaXMucmVuZGVyRGFkb3NSZWdpc3RybygpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRGFkb3NVc3VhcmlvKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW8sXHJcbiAgICB0b2tlbjogc3RhdGUuYXV0aC50b2tlbixcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZvcm06IHN0YXRlLmNoZWNrb3V0LmZvcm1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykgKERhZG9zQ2xpZW50ZUNvbnRhaW5lcik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBQYWdpbmFzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlzdGFzL1BhZ2luYXMnO1xyXG5pbXBvcnQgUmVkZXNTb2NpYWlzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlzdGFzL1JlZGVzU29jaWFpcyc7XHJcbmltcG9ydCBEYWRvc0RhTG9qYSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0l0ZW0vRGFkb3NEYUxvamEnO1xyXG5cclxuY2xhc3MgUm9kYXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUm9kYXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWRlc1NvY2lhaXMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGFkb3NEYUxvamEgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvZGFwZTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmltcG9ydCBDYWJlY2FsaG8gZnJvbSAnLi4vY29udGFpbmVycy9DYWJlY2FsaG8nO1xyXG5pbXBvcnQgQ2hlY2tvdXRDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9DaGVja291dCc7XHJcbmltcG9ydCBSb2RhcGUgZnJvbSAnLi4vY29udGFpbmVycy9Sb2RhcGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cmVzfSkge1xyXG4gICAgICAgIGlmKHJlcykge1xyXG4gICAgICAgICAgICByZXMud3JpdGVIZWFkKDMwMiwge0xvY2F0aW9uOiBcIi9jYXJyaW5ob1wifSk7XHJcbiAgICAgICAgICAgIHJlcy5lbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0IFxyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSBcIkNoZWNrLW91dCB8IExPSkEgSVQgLSBNZWxob3JlcyBwcm9kdXRvcyBkZSB0ZWNub2xvZ2lhXCJcclxuICAgICAgICAgICAgICAgIHBhZ1NlZ3Vybz5cclxuICAgICAgICAgICAgICAgIDxDYWJlY2FsaG8gc2ltcGxlcyAvPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrb3V0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8Um9kYXBlIC8+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCB7IFxyXG4gICAgQVVURU5USUNBUl9UT0tFTixcclxuICAgIEFVVEVOVElDQVIsXHJcbiAgICBVU0VSLFxyXG4gICAgREVTQVVURU5USUNBUlxyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJLCB2ZXJzYW8gfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBmZXRjaENsaWVudGUgfSBmcm9tICcuL2NsaWVudGVBY3Rpb25zJztcclxuaW1wb3J0IHsgc2V0Q29va2llLCByZW1vdmVDb29raWUgfSBmcm9tICcuLi8uLi91dGlscy9jb29raWUnO1xyXG5pbXBvcnQgeyBnZXRIZWFkZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgZXJyb3JIYW5kbGluZyBmcm9tICcuL2Vycm9ySGFuZGxpbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlYXV0aGVudGljYXRlID0gdG9rZW4gPT4gKHsgdHlwZTogQVVURU5USUNBUl9UT0tFTiwgcGF5bG9hZDogdG9rZW4gfSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9ICh7IHRva2VuIH0pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS91c3Vhcmlvc2AsIGdldEhlYWRlcnModG9rZW4pKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFVTRVIsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEudXN1YXJpbyB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRlbnRpY2FyID0gKHsgZW1haWwsIHBhc3N3b3JkIH0sIGdvVG8gPSBmYWxzZSwgY2IpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLnBvc3QoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3VzdWFyaW9zL2xvZ2luYCwge2VtYWlsLCBwYXNzd29yZH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRDb29raWUoJ3Rva2VuJywgcmVzcG9uc2UuZGF0YS51c3VhcmlvLnRva2VuKTtcclxuICAgICAgICBpZihnb1RvKSBSb3V0ZXIucHVzaChnb1RvKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFVVEVOVElDQVIsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDbGllbnRlKHJlc3BvbnNlLmRhdGEudXN1YXJpby5faWQsIHJlc3BvbnNlLmRhdGEudXN1YXJpby50b2tlbikpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlID0+IGNiKGVycm9ySGFuZGxpbmcoZSkpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlc2F1dGVudGljYXIgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZW1vdmVDb29raWUoJ3Rva2VuJyk7XHJcbiAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBERVNBVVRFTlRJQ0FSIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2VuaGEgPSAoZGF0YSwgdG9rZW4sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wdXQoXHJcbiAgICAgICAgYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3VzdWFyaW9zYCwgXHJcbiAgICAgICAgeyBwYXNzd29yZDogZGF0YS5ub3ZhU2VuaGEgfSwgXHJcbiAgICAgICAgZ2V0SGVhZGVycyh0b2tlbilcclxuICAgIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVVNFUiwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS51c3VhcmlvIH0pO1xyXG4gICAgICAgIGNiKG51bGwpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlID0+IGNiKGVycm9ySGFuZGxpbmcoZSkpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcmVhdXRoZW50aWNhdGUsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgYXV0ZW50aWNhcixcclxuICAgIGRlc2F1dGVudGljYXIsXHJcbiAgICB1cGRhdGVTZW5oYVxyXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7QVBJLCB2ZXJzYW8sIGxvamF9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7Z2V0Q2FydCwgcmVtb3ZlQ2FydCwgY2xlYW5DYXJ0fSBmcm9tICcuLi8uLi91dGlscy9jYXJ0JztcclxuaW1wb3J0IHtcclxuICAgIFNFVF9DQVJSSU5ITyxcclxuICAgIENMRUFOX0NBUlJJTkhPLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19DQVJSSU5ITyxcclxuICAgIEZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPLFxyXG4gICAgRkVUQ0hfVkFMT1JfRU5UUkVHQSxcclxuICAgIFVQREFURV9RVERfQ0FSVCxcclxuICAgIFVQREFURV9GUkVURV9DQVJULFxyXG4gICAgUkVNT1ZFX1BST0RfQ0FSVCxcclxuICAgIENMRUFOX0ZSRVRFU1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDYXJyaW5obyA9ICgpID0+ICh7dHlwZTogU0VUX0NBUlJJTkhPLCBjYXJyaW5obzogZ2V0Q2FydCgpfSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYW5DYXJyaW5obyA9ICgpID0+IHtcclxuLy8gICAgY29uc29sZS5sb2coJ2xpbXBhciBjYXJyaW5obycpO1xyXG4gICAgY2xlYW5DYXJ0KCk7XHJcbiAgICByZXR1cm4ge3R5cGU6IENMRUFOX0NBUlJJTkhPfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1dG9DYXJyaW5obyA9IChpZCwgaWR4Q2FycmluaG8pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvJHtpZH0/bG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgXHJcbiAgICAgICAgICAgIHR5cGU6IEZFVENIX1BST0RVVE9fQ0FSUklOSE8sIFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhLCBcclxuICAgICAgICAgICAgaWR4Q2FycmluaG8gXHJcbiAgICB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFZhcmlhY29lc0NhcnJpbmhvID0gKGlkLCBwcm9kdXRvLCBpZHhDYXJyaW5obykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4vLyAgICBjb25zb2xlLmxvZyhpZCwgcHJvZHV0bywgaWR4Q2FycmluaG8sIGxvamEpXHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3ZhcmlhY29lcy8ke2lkfT9wcm9kdXRvPSR7cHJvZHV0b30mbG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuIChyZXNwb25zZSA9PiBkaXNwYXRjaCh7IFxyXG4gICAgICAgICAgICB0eXBlOiBGRVRDSF9WQVJJQUNBT19DQVJSSU5ITywgXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEsIFxyXG4gICAgICAgICAgICBpZHhDYXJyaW5obyBcclxuICAgIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGFyRnJldGUgPSAoY2VwLCBjYXJyaW5obykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucG9zdChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvZW50cmVnYXMvY2FsY3VsYXJgLCB7Y2VwLCBjYXJyaW5ob30pXHJcbiAgICAudGhlbiAocmVzcG9uc2UgPT4gZGlzcGF0Y2goeyBcclxuICAgICAgICAgICAgdHlwZTogRkVUQ0hfVkFMT1JfRU5UUkVHQSwgXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEsIFxyXG4gICAgICAgICAgICBjZXBcclxuICAgIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZXJQcm9kdXRvID0gKGluZGV4KSA9PiB7XHJcbiAgICByZW1vdmVDYXJ0KGluZGV4KTtcclxuICAgIHJldHVybiB7dHlwZTogUkVNT1ZFX1BST0RfQ0FSVCwgaWR4Q2FycmluaG86IGluZGV4fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVRdWFudGlkYWRlID0gKGNoYW5nZSwgaW5kZXgpID0+ICh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEVfUVREX0NBUlQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZHhDYXJyaW5obzogaW5kZXggXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWNpb25hckZyZXRlID0gKGZyZXRlU2VsZWNpb25hZG8pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVVBEQVRFX0ZSRVRFX0NBUlQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJldGVTZWxlY2lvbmFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuZXhwb3J0IGNvbnN0IGNsZWFuRnJldGVzID0gKCkgPT4gKHt0eXBlOiBDTEVBTl9GUkVURVN9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNldENhcnJpbmhvLFxyXG4gICAgY2xlYW5DYXJyaW5obyxcclxuICAgIGZldGNoUHJvZHV0b0NhcnJpbmhvLFxyXG4gICAgZmV0Y2hWYXJpYWNvZXNDYXJyaW5obyxcclxuICAgIGNhbGN1bGFyRnJldGUsXHJcbiAgICB1cGRhdGVRdWFudGlkYWRlLFxyXG4gICAgc2VsZWNpb25hckZyZXRlLFxyXG4gICAgcmVtb3ZlclByb2R1dG8sXHJcbiAgICBjbGVhbkZyZXRlc1xyXG59OyIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9DQVRFR09SSUFTLFxyXG4gICAgRkVUQ0hfQ0FURUdPUklBLFxyXG4gICAgRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUEksIHZlcnNhbywgbG9qYSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXRlZ29yaWFzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2NhdGVnb3JpYXMvZGlzcG9uaXZlaXM/bG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9DQVRFR09SSUFTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXRlZ29yaWEgPSAoaWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2F0ZWdvcmlhcy8ke2lkfT9sb2phPSR7bG9qYX1gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9DQVRFR09SSUEsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1dG9zQ2F0ZWdvcmlhID0gKGlkLCBhdHVhbCA9IDAsIGxpbWl0ID0gMjApID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2F0ZWdvcmlhcy8ke2lkfS9wcm9kdXRvcz9sb2phPSR7bG9qYX0mb2Zmc2V0PSR7YXR1YWx9JmxpbWl0PSR7bGltaXR9YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmZXRjaENhdGVnb3JpYXMsXHJcbiAgICBmZXRjaENhdGVnb3JpYSxcclxuICAgIGZldGNoUHJvZHV0b3NDYXRlZ29yaWFcclxufTsiLCJpbXBvcnQge1xyXG4gICAgU0VUX0ZPUk0sXHJcbiAgICBDTEVBTl9GT1JNLFxyXG4gICAgU0VUX1RJUE9fUEFHQU1FTlRPLFxyXG4gICAgRkVUQ0hfU0VTU0lPTl9JRCxcclxuICAgIEZFVENIX1NFTkRFUl9IQVNILFxyXG4gICAgTk9WT19QRURJRE8sXHJcbiAgICBQQUdBUl9QRURJRE9cclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7QVBJLCB2ZXJzYW8sIGxvamF9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7Z2V0Q2FydH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcbmltcG9ydCB7Z2V0SGVhZGVyc30gZnJvbSAnLi9oZWxwZXJzJztcclxuaW1wb3J0IGVycm9ySGFuZGxpbmcgZnJvbSAnLi9lcnJvckhhbmRsaW5nJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7Y2xlYW5DYXJyaW5ob30gZnJvbSAnLi9jYXJyaW5ob0FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEZvcm0gPSAocGF5bG9hZCwgcHJlZml4KSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogU0VUX0ZPUk0sIHBheWxvYWQsIHByZWZpeH0pO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYW5Gb3JtID0gKCkgPT4gKHt0eXBlOiBDTEVBTl9GT1JNfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VGlwb1BhZ2FtZW50byA9ICh0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoe3R5cGU6IFNFVF9USVBPX1BBR0FNRU5UTywgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvfSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvblBhZ2FtZW50byA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgICBjb25zb2xlLmxvZygncHVsZWkgMScpO1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wYWdhbWVudG9zL3Nlc3Npb25gKS50aGVuICgocmVzcG9uc2UpID0+IHtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdnZXRzZXNzaW9ucGFnYW1lbnRvOiAnLCByZXNwb25zZS5kYXRhKSxcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfU0VTU0lPTl9JRCwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pO1xyXG5cclxuICAgICAgICBQYWdTZWd1cm9EaXJlY3RQYXltZW50LnNldFNlc3Npb25JZChyZXNwb25zZS5kYXRhLnNlc3Npb25JZCk7XHJcbiAgICAgICAgbGV0IHNlbmRlckhhc2ggPSBQYWdTZWd1cm9EaXJlY3RQYXltZW50LmdldFNlbmRlckhhc2goKTtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfU0VOREVSX0hBU0gsIHNlbmRlckhhc2h9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBub3ZvUGVkaWRvID0gKFxyXG4gICAgZm9ybSwgZnJldGVTZWxlY2lvbmFkbywgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvLCBcclxuICAgIHZhbG9yVG90YWwsIHRva2VuLCBzZW5kZXJIYXNoLCBjYXJyaW5obyA9IGdldENhcnQoKSwgY2IgPSBudWxsXHJcbikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucG9zdChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGVkaWRvcz9sb2phPSR7bG9qYX1gLCB7XHJcbiAgICAgICAgY2FycmluaG8sXHJcbiAgICAgICAgZW50cmVnYToge1xyXG4gICAgICAgICAgICBjdXN0bzogZnJldGVTZWxlY2lvbmFkby5WYWxvci5yZXBsYWNlKCcsJywgJy4nKSxcclxuICAgICAgICAgICAgdGlwbzogKGZyZXRlU2VsZWNpb25hZG8uQ29kaWdvKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBwcmF6bzogZnJldGVTZWxlY2lvbmFkby5QcmF6b0VudHJlZ2EsXHJcbiAgICAgICAgICAgIGVuZGVyZWNvOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbDogZm9ybS5sb2NhbCxcclxuICAgICAgICAgICAgICAgIG51bWVybzogZm9ybS5udW1lcm8sXHJcbiAgICAgICAgICAgICAgICBjb21wbGVtZW50bzogZm9ybS5jb21wbGVtZW50byxcclxuICAgICAgICAgICAgICAgIGJhaXJybzogZm9ybS5iYWlycm8sXHJcbiAgICAgICAgICAgICAgICBjaWRhZGU6IGZvcm0uY2lkYWRlLFxyXG4gICAgICAgICAgICAgICAgZXN0YWRvOiBmb3JtLmVzdGFkbyxcclxuICAgICAgICAgICAgICAgIENFUDogZm9ybS5DRVBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnYW1lbnRvOiB7XHJcbiAgICAgICAgICAgIHZhbG9yOiB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09IFwiY2FydGFvXCIgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5wYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhLnRvdGFsQW1vdW50IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsb3JUb3RhbCxcclxuICAgICAgICAgICAgZm9ybWE6IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gXCJjYXJ0YW9cIiA/IFwiY3JlZGl0Q2FyZFwiIDogXCJib2xldG9cIixcclxuICAgICAgICAgICAgcGFyY2VsYXM6IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gXCJjYXJ0YW9cIiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEucXVhbnRpdHkgOiAxLFxyXG4gICAgICAgICAgICBlbmRlcmVjb0VudHJlZ2FJZ3VhbENvYnJhbmNhOiBmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSxcclxuICAgICAgICAgICAgZW5kZXJlY286IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EubG9jYWwgOiBmb3JtLmxvY2FsLFxyXG4gICAgICAgICAgICAgICAgbnVtZXJvOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EubnVtZXJvIDogZm9ybS5udW1lcm8sXHJcbiAgICAgICAgICAgICAgICBjb21wbGVtZW50bzogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLmNvbXBsZW1lbnRvIDogZm9ybS5jb21wbGVtZW50byxcclxuICAgICAgICAgICAgICAgIGJhaXJybzogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLmJhaXJybyA6IGZvcm0uYmFpcnJvLFxyXG4gICAgICAgICAgICAgICAgY2lkYWRlOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EuY2lkYWRlIDogZm9ybS5jaWRhZGUsXHJcbiAgICAgICAgICAgICAgICBlc3RhZG86ICFmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSA/IGZvcm0uZGFkb3NDb2JyYW5jYS5lc3RhZG8gOiBmb3JtLmVzdGFkbyxcclxuICAgICAgICAgICAgICAgIENFUDogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLkNFUCA6IGZvcm0uQ0VQXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhcnRhbzogdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImNhcnRhb1wiID8ge1xyXG4gICAgICAgICAgICAgICAgbm9tZUNvbXBsZXRvOiBmb3JtLm5vbWVDYXJ0YW8udHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgY29kaWdvQXJlYTogZm9ybS50ZWxlZm9uZS5zbGljZSgwLDIpLFxyXG4gICAgICAgICAgICAgICAgdGVsZWZvbmU6IGZvcm0udGVsZWZvbmUuc2xpY2UoMikudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgZGF0YURlTmFzY2ltZW50bzogZm9ybS5kYXRhRGVOYXNjaW1lbnRvLFxyXG4gICAgICAgICAgICAgICAgY3JlZGl0X2NhcmRfdG9rZW46IGZvcm0uY3JlZGl0X2NhcmRfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBjcGY6IGZvcm0uQ1BGICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IDogdW5kZWZpbmVkIFxyXG4gICAgICAgIH1cclxuICAgIH0sIGdldEhlYWRlcnModG9rZW4pKVxyXG4gICAgLnRoZW4gKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogTk9WT19QRURJRE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgICBkaXNwYXRjaChwYWdhclBlZGlkbyhyZXNwb25zZS5kYXRhLnBlZGlkby5wYWdhbWVudG8uX2lkLCB0b2tlbiwgc2VuZGVySGFzaCwgY2IpKTsgXHJcbn0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYiAoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2FyUGVkaWRvID0gKGlkLCB0b2tlbiwgc2VuZGVySGFzaCwgY2IgPSBudWxsKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3BhZ2FtZW50b3MvcGFnYXIvJHtpZH0/bG9qYT0ke2xvamF9YCwgXHJcbiAgICAgICAgICAgIHtzZW5kZXJIYXNofSwgXHJcbiAgICAgICAgICAgIGdldEhlYWRlcnModG9rZW4pXHJcbilcclxuLnRoZW4gKHJlc3BvbnNlID0+IHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBQQUdBUl9QRURJRE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgIGNiKG51bGwpO1xyXG4gICAgUm91dGVyLnB1c2goJy9zdWNlc3NvJyk7XHJcbiAgICBkaXNwYXRjaChjbGVhbkNhcnJpbmhvKCkpOyAgICAgICAgXHJcbn0pXHJcbi5jYXRjaChlID0+IGNiIChlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn1cclxuLypcclxuZXhwb3J0IGNvbnN0IHBhZ2FyUGVkaWRvPSAoaWQsIHRva2VuLCBzZW5kZXJIYXNoLCBjYiA9IG51bGwpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGNiKG51bGwpO1xyXG4gICAgUm91dGVyLnB1c2goJy9zdWNlc3NvJyk7XHJcbiAgICBkaXNwYXRjaChjbGVhbkNhcnJpbmhvKCkpOyAgICAgICAgXHJcbn07XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNldEZvcm0sXHJcbiAgICBjbGVhbkZvcm0sXHJcbiAgICBzZXRUaXBvUGFnYW1lbnRvLFxyXG4gICAgZ2V0U2Vzc2lvblBhZ2FtZW50byxcclxuICAgIG5vdm9QZWRpZG8sXHJcbiAgICBwYWdhclBlZGlkb1xyXG59OyIsImltcG9ydCB7IFxyXG4gICAgRkVUQ0hfQ0xJRU5URSxcclxuICAgIExPR09VVF9DTElFTlRFXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0FQSSwgdmVyc2FvLCBsb2phfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge3NldENvb2tpZX0gZnJvbSAnLi4vLi4vdXRpbHMvY29va2llJztcclxuaW1wb3J0IHtnZXRIZWFkZXJzfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHthdXRlbnRpY2FyLCBkZXNhdXRlbnRpY2FyfSBmcm9tICcuL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IGVycm9ySGFuZGxpbmcgZnJvbSAnLi9lcnJvckhhbmRsaW5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSYXdEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGxldCBfZGF0YSA9IGRhdGEuc3BsaXQoJy8nKTtcclxuICAgIGxldCBhbm8gPSBfZGF0YVsyXTtcclxuICAgIGxldCBfbWVzID0gTnVtYmVyKF9kYXRhWzFdKTtcclxuICAgIGxldCBtZXMgPSBfbWVzIDwgMTAgPyBcIjBcIiArIF9tZXMgOiBfbWVzO1xyXG4gICAgbGV0IF9kaWEgPSBOdW1iZXIoX2RhdGFbMF0pO1xyXG4gICAgbGV0IGRpYSA9IF9kaWEgPCAxMCA/IFwiMFwiICsgX2RpYTogX2RpYTtcclxuICAgIHJldHVybiBgJHthbm99LSR7bWVzfS0ke2RpYX1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2xpZW50ZSA9IChpZCwgdG9rZW4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2xpZW50ZXMvJHtpZH0/bG9qYT0ke2xvamF9YCwgZ2V0SGVhZGVycyh0b2tlbikpXHJcbiAgICAudGhlbiAoKHJlc3Bvc3RhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEZFVENIX0NMSUVOVEUsIHBheWxvYWQ6IHJlc3Bvc3RhLmRhdGF9KVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCAoZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdDbGllbnRlID0gKGZvcm0sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9jbGllbnRlcz9sb2phPSR7bG9qYX1gLCB7XHJcbiAgICAgICAgbm9tZTogZm9ybS5ub21lLFxyXG4gICAgICAgIHNlbmhhOiBmb3JtLnNlbmhhLFxyXG4gICAgICAgIGNwZjogZm9ybS5DUEYsXHJcbiAgICAgICAgZW1haWw6IGZvcm0uZW1haWwsXHJcbiAgICAgICAgdGVsZWZvbmVzOiBbZm9ybS50ZWxlZm9uZV0sXHJcbiAgICAgICAgZW5kZXJlY286IHtcclxuICAgICAgICAgICAgbG9jYWw6IGZvcm0ubG9jYWwsXHJcbiAgICAgICAgICAgIG51bWVybzogZm9ybS5udW1lcm8sXHJcbiAgICAgICAgICAgIGNvbXBsZW1lbnRvOiBmb3JtLmNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICBiYWlycm86IGZvcm0uYmFpcnJvLFxyXG4gICAgICAgICAgICBjaWRhZGU6IGZvcm0uY2lkYWRlLFxyXG4gICAgICAgICAgICBlc3RhZG86IGZvcm0uZXN0YWRvLFxyXG4gICAgICAgICAgICBDRVA6IGZvcm0uQ0VQXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhRGVOYXNjaW1lbnRvOiBnZXRSYXdEYXRhKGZvcm0uZGF0YURlTmFzY2ltZW50bylcclxuICAgIH0pXHJcbiAgICAudGhlbiAoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEZFVENIX0NMSUVOVEUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgICBkaXNwYXRjaChhdXRlbnRpY2FyKHtlbWFpbDogZm9ybS5lbWFpbCwgc2VuaGE6IGZvcm0uc2VuaGF9LCBudWxsLCBjYikpO1xyXG4gICAgICAgIGNiKG51bGwpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCAoZSA9PiBjYihlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xpZW50ZSA9IChmb3JtLCBpZCwgdG9rZW4sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wdXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2NsaWVudGVzLyR7aWR9P2xvamE9JHtsb2phfWAsIHtcclxuICAgICAgICBub21lOiBmb3JtLm5vbWUsXHJcbiAgICAgICAgY3BmOiBmb3JtLkNQRixcclxuICAgICAgICB0ZWxlZm9uZXM6IFtmb3JtLnRlbGVmb25lXSxcclxuICAgICAgICBlbmRlcmVjbzoge1xyXG4gICAgICAgICAgICBsb2NhbDogZm9ybS5sb2NhbCxcclxuICAgICAgICAgICAgbnVtZXJvOiBmb3JtLm51bWVybyxcclxuICAgICAgICAgICAgY29tcGxlbWVudG86IGZvcm0uY29tcGxlbWVudG8sXHJcbiAgICAgICAgICAgIGJhaXJybzogZm9ybS5iYWlycm8sXHJcbiAgICAgICAgICAgIGNpZGFkZTogZm9ybS5jaWRhZGUsXHJcbiAgICAgICAgICAgIGVzdGFkbzogZm9ybS5lc3RhZG8sXHJcbiAgICAgICAgICAgIENFUDogZm9ybS5DRVBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFEZU5hc2NpbWVudG86IGdldFJhd0RhdGEoZm9ybS5kYXRhRGVOYXNjaW1lbnRvKVxyXG4gICAgfSwgZ2V0SGVhZGVycyh0b2tlbikpXHJcbiAgICAudGhlbiAoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEZFVENIX0NMSUVOVEUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgICBjYihudWxsKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2ggKGUgPT4gY2IoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0Q2xpZW50ZSA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKGRlc2F1dGVudGljYXIoKSk7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogTE9HT1VUX0NMSUVOVEV9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmZXRjaENsaWVudGUsXHJcbiAgICBuZXdDbGllbnRlLFxyXG4gICAgdXBkYXRlQ2xpZW50ZSxcclxuICAgIGxvZ291dENsaWVudGVcclxufTsiLCJjb25zdCBlcnJvckhhbmRsaW5nID0gKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhIDogbnVsbCk7XHJcbiAgICBpZighZXJyb3IucmVzcG9uc2UgfHwgIWVycm9yLnJlc3BvbnNlLmRhdGEpe1xyXG4gICAgICAgIHJldHVybiB7IHN0YXR1czogNTAwLCBtZXNzYWdlOiBcIk9jb3JyZXUgdW0gZXJybyBubyBzZXJ2aWRvci4gVGVudGUgbm92YW1lbnRlLlwiIH07XHJcbiAgICB9XHJcbiAgICBpZihlcnJvci5yZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gNDAxKXtcclxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IDQwMSwgbWVzc2FnZTogXCJWb2PDqiBuw6NvIHRlbSBhdXRvcml6YcOnw6NvIHBhcmEgYWNlc3NhciBlc3NlcyBkYWRvcy5cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9lcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyB8fCBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yO1xyXG4gICAgaWYoX2Vycm9ycyAmJiB0eXBlb2YgX2Vycm9ycyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHsgc3RhdHVzOiA0MDAsIG1lc3NhZ2U6IF9lcnJvcnMgfTtcclxuXHJcbiAgICBsZXQgbXNnID0gJ0Vycm86ICc7XHJcbiAgICBpZighQXJyYXkuaXNBcnJheShfZXJyb3JzKSl7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoX2Vycm9ycykuZm9yRWFjaCgoZXJybywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbXNnICs9IGAke2Vycm99ICR7IF9lcnJvcnNbZXJyb10ubWVzc2FnZSB8fCAoX2Vycm9yc1tlcnJvXS5wcm9wZXJ0aWVzID8gX2Vycm9yc1tlcnJvXS5wcm9wZXJ0aWVzLm1lc3NhZ2UgOiBcIlwiKSB8fCBfZXJyb3JzW2Vycm9dIH1cXG5gOyAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgIG1zZyArPSBgJHtlcnJvfSAke19lcnJvcnNbZXJyb10ubWVzc2FnZSB8fCBfZXJyb3JzW2Vycm9dfVxcbmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1zZyArPSBgUHJlZW5jaGEgY29ycmV0YW1lbnRlICR7IF9lcnJvcnMubGVuZ3RoID4gMSA/IFwib3MgY2FtcG9zIFwiIDogXCJvIGNhbXBvIFwiIH0gZGU6YDtcclxuICAgICAgICBfZXJyb3JzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gaXRlbS5maWVsZFtpdGVtLmZpZWxkLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBtc2cgKz0gYCAke2ZpZWxkfSR7aW5kZXggPT09IF9lcnJvcnMubGVuZ3RoIC0gMSA/IFwiLlwiIDogXCIsXCJ9YDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3RhdHVzOiA0MDAsIG1lc3NhZ2U6IG1zZyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmRsaW5nOyIsImV4cG9ydCBjb25zdCBnZXRIZWFkZXJzID0gKHRva2VuKSA9PiAoeyBoZWFkZXJzOiB7IFwiQXV0aG9yaXphdGlvblwiOiBgRWNvbW1lcmNlICR7dG9rZW59YCB9IH0pOyIsImltcG9ydCBhdXRoQWN0aW9ucyBmcm9tICcuL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IGNhdGVnb3JpYUFjdGlvbnMgZnJvbSAnLi9jYXRlZ29yaWFBY3Rpb25zJztcclxuaW1wb3J0IGxvamFBY3Rpb25zIGZyb20gJy4vbG9qYUFjdGlvbnMnO1xyXG5pbXBvcnQgcHJvZHV0b0FjdGlvbnMgZnJvbSAnLi9wcm9kdXRvQWN0aW9ucyc7XHJcbmltcG9ydCBjYXJyaW5ob0FjdGlvbnMgZnJvbSAnLi9jYXJyaW5ob0FjdGlvbnMnO1xyXG5pbXBvcnQgY2xpZW50ZUFjdGlvbnMgZnJvbSAnLi9jbGllbnRlQWN0aW9ucyc7XHJcbmltcG9ydCBjaGVja291dEFjdGlvbnMgZnJvbSAnLi9jaGVja291dEFjdGlvbnMnO1xyXG5pbXBvcnQgcGVkaWRvQWN0aW9ucyBmcm9tICcuL3BlZGlkb0FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLi4uYXV0aEFjdGlvbnMsXHJcbiAgICAuLi5jYXRlZ29yaWFBY3Rpb25zLFxyXG4gICAgLi4ubG9qYUFjdGlvbnMsXHJcbiAgICAuLi5wcm9kdXRvQWN0aW9ucyxcclxuICAgIC4uLmNhcnJpbmhvQWN0aW9ucyxcclxuICAgIC4uLmNsaWVudGVBY3Rpb25zLFxyXG4gICAgLi4uY2hlY2tvdXRBY3Rpb25zLFxyXG4gICAgLi4ucGVkaWRvQWN0aW9uc1xyXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBGRVRDSF9EQURPU1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgQVBJLCB2ZXJzYW8sIGxvamEgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRGFkb3NMb2phID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2xvamFzLyR7bG9qYX0/bG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9EQURPUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmV0Y2hEYWRvc0xvamFcclxufTsiLCJpbXBvcnQge1xyXG4gICAgRkVUQ0hfUEVESURPUyxcclxuICAgIEZFVENIX1BFRElETyxcclxuICAgIENMRUFOX1BFRElETyxcclxuICAgIENBTkNFTEFSX1BFRElET1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7QVBJLCB2ZXJzYW8sIGxvamF9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBlcnJvckhhbmRsaW5nIGZyb20gJy4vZXJyb3JIYW5kbGluZyc7XHJcbmltcG9ydCB7Z2V0SGVhZGVyc30gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFBlZGlkb3MgPSAoe29mZnNldCwgbGltaXQsIHRva2VufSkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wZWRpZG9zP2xvamE9JHtsb2phfSZvZmZzZXQ9JHtvZmZzZXR9JmxpbWl0PSR7bGltaXR9YCxcclxuICAgICAgICBnZXRIZWFkZXJzKHRva2VuKVxyXG4gICAgKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goe3R5cGU6IEZFVENIX1BFRElET1MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFBlZGlkbyA9IChpZCwgdG9rZW4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGVkaWRvcy8ke2lkfT9sb2phPSR7bG9qYX1gLCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHt0eXBlOiBGRVRDSF9QRURJRE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYW5jZWxhclBlZGlkbyA9IChpZCwgdG9rZW4sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5kZWxldGUoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3BlZGlkb3MvJHtpZH0/bG9qYT0ke2xvamF9YCwgZ2V0SGVhZGVycyh0b2tlbikpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2ggKHt0eXBlOiBDQU5DRUxBUl9QRURJRE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgICBjYihudWxsKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYiAoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFuUGVkaWRvID0gKCkgPT4gKHt0eXBlOiBDTEVBTl9QRURJRE99KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZldGNoUGVkaWRvcyxcclxuICAgIGZldGNoUGVkaWRvLFxyXG4gICAgY2FuY2VsYXJQZWRpZG8sXHJcbiAgICBjbGVhblBlZGlkb1xyXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBGRVRDSF9QUk9EVVRPUyxcclxuICAgIEZFVENIX1BFU1FVSVNBLFxyXG4gICAgRkVUQ0hfUFJPRFVUT1NfUEVTUVVJU0EsXHJcbiAgICBGRVRDSF9QUk9EVVRPLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMsXHJcbiAgICBOT1ZBX0FWQUxJQUNBT1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgQVBJLCB2ZXJzYW8sIGxvamEgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgZ2V0SGVhZGVycyB9IGZyb20gJy4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdXRvc1BhZ2luYUluaWNpYWwgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvZGlzcG9uaXZlaXM/bG9qYT0ke2xvamF9Jm9mZnNldD0kezB9JmxpbWl0PSR7NH0mc29ydFR5cGU9JHtcInByZWNvLWNyZXNjZW50ZVwifWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUFJPRFVUT1MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFRlcm1vID0gKHRlcm1vKSA9PiAoeyB0eXBlOiBGRVRDSF9QRVNRVUlTQSwgdGVybW8gfSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdXRvc1Blc3F1aXNhID0gKHRlcm1vLCBhdHVhbCA9IDAsIGxpbWl0ID0gMjApID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3Mvc2VhcmNoLyR7dGVybW99P2xvamE9JHtsb2phfSZvZmZzZXQ9JHthdHVhbH0mbGltaXQ9JHtsaW1pdH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE9TX1BFU1FVSVNBLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLCB0ZXJtbyB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHV0byA9IChpZCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wcm9kdXRvcy8ke2lkfT9sb2phPSR7bG9qYX1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEF2YWxpYWNvZXMgPSAoaWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvJHtpZH0vYXZhbGlhY29lcz9sb2phPSR7bG9qYX0maWQ9JHtpZH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE9fQVZBTElBQ09FUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVmFyaWFjb2VzID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3Byb2R1dG9zLyR7aWR9L3ZhcmlhY29lcz9sb2phPSR7bG9qYX0maWQ9JHtpZH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE9fVkFSSUFDT0VTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbm92YUF2YWxpYWNhbyA9ICh7IG5vbWUsIHRva2VuLCBwcm9kdXRvLCB0ZXh0bywgcG9udHVhY2FvIH0sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSX0vJHt2ZXJzYW99L2FwaS9hdmFsaWFjb2VzP2xvamE9JHtsb2phfSZwcm9kdXRvPSR7cHJvZHV0b31gLFxyXG4gICAgICAgIHsgbm9tZSwgdGV4dG8sIHBvbnR1YWNhbyB9LFxyXG4gICAgICAgIGdldEhlYWRlcnModG9rZW4pXHJcbiAgICApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogTk9WQV9BVkFMSUFDQU8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICAgICAgY2IobnVsbCk7XHJcbiAgICB9KS5jYXRjaChlID0+IGNiKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmV0Y2hQcm9kdXRvc1BhZ2luYUluaWNpYWwsXHJcbiAgICBmZXRjaFRlcm1vLFxyXG4gICAgZmV0Y2hQcm9kdXRvc1Blc3F1aXNhLFxyXG4gICAgZmV0Y2hQcm9kdXRvLFxyXG4gICAgZmV0Y2hBdmFsaWFjb2VzLFxyXG4gICAgZmV0Y2hWYXJpYWNvZXMsXHJcbiAgICBub3ZhQXZhbGlhY2FvXHJcbn07IiwiZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJyZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgQVVURU5USUNBUl9UT0tFTiA9IFwiQVVURU5USUNBUl9UT0tFTlwiLFxyXG4gICAgICAgICAgICAgVVNFUiA9IFwidXNlclwiLFxyXG4gICAgICAgICAgICAgQVVURU5USUNBUiA9ICdBVVRFTlRJQ0FSJyxcclxuICAgICAgICAgICAgIEZFVENIX0NBVEVHT1JJQVMgPSBcImZldGNoX2NhdGVnb3JpYXNcIixcclxuICAgICAgICAgICAgIEZFVENIX0RBRE9TID0gJ2ZldGNoX2RhZG9zJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9TID0gXCJGRVRDSF9QUk9EVVRPU1wiLFxyXG4gICAgICAgICAgICAgRkVUQ0hfQ0FURUdPUklBID0gJ0ZFVENIX0NBVEVHT1JJQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1MgPSAnRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TJyxcclxuICAgICAgICAgICAgIEZFVENIX1BFU1FVSVNBID0gJ0ZFVENIX1BFU1FVSVNBJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9TX1BFU1FVSVNBID0gJ0ZFVENIX1BST0RVVE9TX1BFU1FVSVNBJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE8gPSAnRkVUQ0hfUFJPRFVUTycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVMgPSAnRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9fVkFSSUFDT0VTID0gJ0ZFVENIX1BST0RVVE9fVkFSSUFDT0VTJyxcclxuICAgICAgICAgICAgIE5PVkFfQVZBTElBQ0FPID0gJ05PVkFfQVZBTElBQ0FPJyxcclxuICAgICAgICAgICAgIFNFVF9DQVJSSU5ITyA9ICdTRVRfQ0FSUklOSE8nLFxyXG4gICAgICAgICAgICAgQ0xFQU5fQ0FSUklOSE8gPSAnQ0xFQU5fQ0FSUklOSE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUT19DQVJSSU5ITyA9ICdGRVRDSF9QUk9EVVRPX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIEZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPID0gJ0ZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIEZFVENIX1ZBTE9SX0VOVFJFR0EgPSAnRkVUQ0hfVkFMT1JfRU5UUkVHQScsXHJcbiAgICAgICAgICAgICBVUERBVEVfUVREX0NBUlQgPSAnVVBEQVRFX1FURF9DQVJUJyxcclxuICAgICAgICAgICAgIFVQREFURV9GUkVURV9DQVJUID0gJ1VQREFURV9GUkVURV9DQVJUJyxcclxuICAgICAgICAgICAgIFJFTU9WRV9QUk9EX0NBUlQgPSAnUkVNT1ZFX1BST0RfQ0FSVCcsXHJcbiAgICAgICAgICAgICBDTEVBTl9GUkVURVMgPSAnQ0xFQU5fRlJFVEVTJyxcclxuICAgICAgICAgICAgIEZFVENIX0NMSUVOVEUgPSAnRkVUQ0hfQ0xJRU5URScsXHJcbiAgICAgICAgICAgICBTRVRfRk9STSA9ICdTRVRfRk9STScsXHJcbiAgICAgICAgICAgICBDTEVBTl9GT1JNID0gJ0NMRUFOX0ZPUk0nLFxyXG4gICAgICAgICAgICAgU0VUX1RJUE9fUEFHQU1FTlRPID0gJ1NFVF9USVBPX1BBR0FNRU5UTycsXHJcbiAgICAgICAgICAgICBGRVRDSF9TRVNTSU9OX0lEID0gJ0ZFVENIX1NFU1NJT05fSUQnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfU0VOREVSX0hBU0ggPSAnRkVUQ0hfU0VOREVSX0hBU0gnLFxyXG4gICAgICAgICAgICAgTk9WT19QRURJRE8gPSAnTk9WT19QRURJRE8nLFxyXG4gICAgICAgICAgICAgUEFHQVJfUEVESURPID0gJ1BBR0FSX1BFRElETycsXHJcbiAgICAgICAgICAgICBMT0dPVVRfQ0xJRU5URSA9ICdMT0dPVVRfQ0xJRU5URScsXHJcbiAgICAgICAgICAgICBERVNBVVRFTlRJQ0FSID0gJ0RFU0FVVEVOVElDQVInLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUEVESURPUyA9ICdGRVRDSF9QRURJRE9TJyxcclxuICAgICAgICAgICAgIEZFVENIX1BFRElETyA9ICdGRVRDSF9QRURJRE8nLFxyXG4gICAgICAgICAgICAgQ0xFQU5fUEVESURPID0gJ0NMRUFOX1BFRElETycsXHJcbiAgICAgICAgICAgICBDQU5DRUxBUl9QRURJRE8gPSAnQ0FOQ0VMQVJfUEVESURPJzsiLCJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgX3NhdmVDYXJ0ID0gKGl0ZW0pID0+IHtcclxuICAgIGxldCBjYXJ0ID0gZ2V0Q2FydCgpO1xyXG5cclxuICAgIGxldCBmb3VuZDtcclxuICAgIGNhcnQgPSBjYXJ0Lm1hcCgoX2l0ZW0pID0+IHtcclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgX2l0ZW0ucHJvZHV0byA9PT0gaXRlbS5wcm9kdXRvICYmXHJcbiAgICAgICAgICAgIF9pdGVtLnZhcmlhY2FvID09PSBpdGVtLnZhcmlhY2FvIFxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uX2l0ZW0sIHF1YW50aWRhZGU6IE51bWJlcihfaXRlbS5xdWFudGlkYWRlKSArIE51bWJlcihpdGVtLnF1YW50aWRhZGUpIH1cclxuICAgICAgICB9IGVsc2UgcmV0dXJuIF9pdGVtO1xyXG4gICAgfSk7XHJcbiAgICBpZighZm91bmQpIGNhcnQucHVzaChpdGVtKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkBjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcnQgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQGNhcnRcIikgfHwgXCJbXVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhbkNhcnQgPSAoKSA9PiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIkBjYXJ0XCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENhcnQgPSAoaXRlbSwgZ29Ub0NhcnQgPSB0cnVlKSA9PiB7XHJcbiAgICBfc2F2ZUNhcnQoaXRlbSk7XHJcbiAgICBpZihnb1RvQ2FydCkgUm91dGVyLnB1c2goXCIvY2FycmluaG9cIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q291bnRJdGVtc0NhcnQgPSAoKSA9PiBcclxuICAgICAgICAgICAgZ2V0Q2FydCgpLnJlZHVjZShcclxuICAgICAgICAgICAgICAgIChjLCB7IHF1YW50aWRhZGUgfSkgPT4gXHJcbiAgICAgICAgICAgICAgICBjICsgKE51bWJlcihxdWFudGlkYWRlKSB8fCAxKSAsIDApO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhcnQgPSAoaW5kZXgpID0+IHtcclxuICAgIGxldCBjYXJ0ID0gZ2V0Q2FydCgpO1xyXG4gICAgY2FydCA9IGNhcnQucmVkdWNlKFxyXG4gICAgICAgIChhbGwsIGl0ZW0sIF9pbmRleCkgPT5cclxuICAgICAgICBpbmRleCAhPT0gX2luZGV4ID8gYWxsLmNvbmNhdChbaXRlbV0pIDogYWxsLCBbXVxyXG4gICAgKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQGNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBnZXRDYXJ0LFxyXG4gICAgYWRkQ2FydCxcclxuICAgIGNsZWFuQ2FydCxcclxuICAgIGdldENvdW50SXRlbXNDYXJ0LFxyXG4gICAgcmVtb3ZlQ2FydFxyXG59OyIsImltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYocHJvY2Vzcy5icm93c2VyKSBjb29raWUuc2V0KGtleSwgdmFsdWUsIHsgZXhwaXJlczogMSwgcGF0aDogXCIvXCIgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgICBpZihwcm9jZXNzLmJyb3dzZXIpIGNvb2tpZS5yZW1vdmUoa2V5LCB7IGV4cGlyZXM6IDEgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoa2V5LCByZXEpID0+IHtcclxuICAgIHJldHVybiBwcm9jZXNzLmJyb3dzZXIgPyBcclxuICAgICAgICAgICAgZ2V0Q29va2llRnJvbUJyb3dzZXIoa2V5KSA6XHJcbiAgICAgICAgICAgIGdldENvb2tpZUZyb21TZXJ2ZXIoa2V5LCByZXEpXHJcbn1cclxuXHJcbmNvbnN0IGdldENvb2tpZUZyb21Ccm93c2VyID0ga2V5ID0+IGNvb2tpZS5nZXQoa2V5KTtcclxuXHJcbmNvbnN0IGdldENvb2tpZUZyb21TZXJ2ZXIgPSAoa2V5LCByZXEpID0+IHtcclxuICAgIGlmKCFyZXEuaGVhZGVycy5jb29raWUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBfY29va2llID0gcmVxLmhlYWRlcnMuY29va2llLnNwbGl0KFwiO1wiKS5maW5kKGMgPT4gYy50cmltKCkuc3RhcnRzV2l0aChgJHtrZXl9PWApKTtcclxuICAgIHJldHVybiBfY29va2llID8gX2Nvb2tpZS5zcGxpdChcIj1cIilbMV0gOiB1bmRlZmluZWQ7XHJcbn0iLCJleHBvcnQgY29uc3QgbnVtYmVyUGF0dGVybiA9IC9cXGQrL2c7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0Q0VQID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBhdXhDZXAgPSAodmFsdWUgfHwgXCJcIikubWF0Y2gobnVtYmVyUGF0dGVybik7XHJcbiAgICBjb25zdCBfY2VwID0gKGF1eENlcCB8fCBbXSkuam9pbignJyk7XHJcbiAgICByZXR1cm4gX2NlcC5sZW5ndGggPiA1ID8gX2NlcC5zbGljZSgwLDUpKyctJytfY2VwLnNsaWNlKDUsOCkgOiBfY2VwO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdENQRiA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgYXV4Q1BGID0gKHZhbHVlIHx8IFwiXCIpLm1hdGNoKG51bWJlclBhdHRlcm4pO1xyXG4gICAgY29uc3QgX0NQRiA9IChhdXhDUEYgfHwgW10pLmpvaW4oJycpOyBcclxuICAgIGlmKF9DUEYubGVuZ3RoID4gOSkgcmV0dXJuIF9DUEYuc2xpY2UoMCwzKSArICcuJyArIF9DUEYuc2xpY2UoMyw2KSArICcuJyArIF9DUEYuc2xpY2UoNiw5KSArICctJyArIF9DUEYuc2xpY2UoOSwxMSk7XHJcbiAgICBpZihfQ1BGLmxlbmd0aCA+IDYpIHJldHVybiBfQ1BGLnNsaWNlKDAsMykgKyAnLicgKyBfQ1BGLnNsaWNlKDMsNikgKyAnLicgKyBfQ1BGLnNsaWNlKDYsOSk7XHJcbiAgICBpZihfQ1BGLmxlbmd0aCA+IDMpIHJldHVybiBfQ1BGLnNsaWNlKDAsMykgKyAnLicgKyBfQ1BGLnNsaWNlKDMsNik7XHJcbiAgICByZXR1cm4gX0NQRjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRhRGVOYXNjaW1lbnRvID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBhdXhEYXRhID0gKHZhbHVlIHx8IFwiXCIpLm1hdGNoKG51bWJlclBhdHRlcm4pO1xyXG4gICAgY29uc3QgX2RhdGEgPSAoYXV4RGF0YSB8fCBbXSkuam9pbignJyk7IFxyXG4gICAgaWYoX2RhdGEubGVuZ3RoID4gNCkgcmV0dXJuIF9kYXRhLnNsaWNlKDAsMikgKyAnLycgKyBfZGF0YS5zbGljZSgyLDQpICsgJy8nICsgX2RhdGEuc2xpY2UoNCw4KTtcclxuICAgIGlmKF9kYXRhLmxlbmd0aCA+IDIpIHJldHVybiBfZGF0YS5zbGljZSgwLDIpICsgJy8nICsgX2RhdGEuc2xpY2UoMiw0KTtcclxuICAgIHJldHVybiBfZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRUZWxlZm9uZSA9ICAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGF1eFRlbGVmb25lID0gKHZhbHVlIHx8IFwiXCIpLm1hdGNoKG51bWJlclBhdHRlcm4pO1xyXG4gICAgY29uc3QgX3RlbGVmb25lID0gKGF1eFRlbGVmb25lIHx8IFtdKS5qb2luKCcnKTsgICAgIFxyXG4gICAgcmV0dXJuIF90ZWxlZm9uZS5sZW5ndGggPiAyID8gX3RlbGVmb25lLnNsaWNlKDAsMikgKyAnICcgKyBfdGVsZWZvbmUuc2xpY2UoMiwxMikgOiBfdGVsZWZvbmU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyID0gICh2YWx1ZSwgbGltaXQpID0+IHtcclxuICAgIGNvbnN0IGF1eE4gPSAodmFsdWUgfHwgXCJcIikubWF0Y2gobnVtYmVyUGF0dGVybik7XHJcbiAgICBjb25zdCBfbiA9IChhdXhOIHx8IFtdKS5qb2luKCcnKTsgICAgIFxyXG4gICAgcmV0dXJuIGxpbWl0ID8gX24uc2xpY2UoMCxsaW1pdCkgOiBfbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRDYXJ0YW8gPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGF1eENhcnRhbyA9ICh2YWx1ZSB8fCBcIlwiKS5tYXRjaChudW1iZXJQYXR0ZXJuKTtcclxuICAgIGNvbnN0IF9jYXJ0YW8gPSAoYXV4Q2FydGFvIHx8IFtdKS5qb2luKCcnKTsgXHJcbiAgICBpZihfY2FydGFvLmxlbmd0aCA+IDEyKSBcclxuICAgICAgICByZXR1cm4gX2NhcnRhby5zbGljZSgwLDQpICsgJyAnICsgX2NhcnRhby5zbGljZSg0LDgpICsgJyAnICsgX2NhcnRhby5zbGljZSg4LDEyKSArICcgJyArIF9jYXJ0YW8uc2xpY2UoMTIsMTYpO1xyXG4gICAgaWYoX2NhcnRhby5sZW5ndGggPiA4KSBcclxuICAgICAgICByZXR1cm4gX2NhcnRhby5zbGljZSgwLDQpICsgJyAnICsgX2NhcnRhby5zbGljZSg0LDgpICsgJyAnICsgX2NhcnRhby5zbGljZSg4LDEyKTtcclxuICAgIGlmKF9jYXJ0YW8ubGVuZ3RoID4gNCkgXHJcbiAgICAgICAgcmV0dXJuIF9jYXJ0YW8uc2xpY2UoMCw0KSArICcgJyArIF9jYXJ0YW8uc2xpY2UoNCw4KTtcclxuICAgIHJldHVybiBfY2FydGFvO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbnVtYmVyUGF0dGVybixcclxuICAgIGZvcm1hdENFUCxcclxuICAgIGZvcm1hdENQRixcclxuICAgIGZvcm1hdERhdGFEZU5hc2NpbWVudG8sXHJcbiAgICBmb3JtYXRUZWxlZm9uZSxcclxuICAgIGZvcm1hdE51bWJlcixcclxuICAgIGZvcm1hdENhcnRhb1xyXG59OyIsImV4cG9ydCBjb25zdCBmb3JtYXRNb25leSA9ICh2YWx1ZSkgPT4gXCJSJCBcIiArIE51bWJlcih2YWx1ZSB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvZGlnb3NDb3JyZWlvcyA9IHtcclxuICAgIFwiNDAwMTBcIjogXCJTZWRleFwiLFxyXG4gICAgXCI0MTEwNlwiOiBcIlBBQ1wiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRVNUQURPUyA9IHtcclxuICAgIFwiQUNcIjogXCJBY3JlXCIsXHJcbiAgICBcIkFMXCI6IFwiQWxhZ29hc1wiLFxyXG4gICAgXCJBUFwiOiBcIkFtYXDDoVwiLFxyXG4gICAgXCJBTVwiOiBcIkFtYXpvbmFzXCIsXHJcbiAgICBcIkJBXCI6IFwiQmFoaWFcIixcclxuICAgIFwiQ0VcIjogXCJDZWFyw6FcIixcclxuICAgIFwiREZcIjogXCJEaXN0cml0byBGZWRlcmFsXCIsXHJcbiAgICBcIkVTXCI6IFwiRXNww61yaXRvIFNhbnRvXCIsXHJcbiAgICBcIkdPXCI6IFwiR29pw6FzXCIsXHJcbiAgICBcIk1BXCI6IFwiTWFyYW5ow6NvXCIsXHJcbiAgICBcIk1UXCI6IFwiTWF0byBHcm9zc29cIixcclxuICAgIFwiTVNcIjogXCJNYXRvIEdyb3NzbyBkbyBTdWxcIixcclxuICAgIFwiTUdcIjogXCJNaW5hcyBHZXJhaXNcIixcclxuICAgIFwiUEFcIjogXCJQYXLDoVwiLFxyXG4gICAgXCJQQlwiOiBcIlBhcmHDrWJhXCIsXHJcbiAgICBcIlBSXCI6IFwiUGFyYW7DoVwiLFxyXG4gICAgXCJQRVwiOiBcIlBlcm5hbWJ1Y29cIixcclxuICAgIFwiUElcIjogXCJQaWF1w61cIixcclxuICAgIFwiUkpcIjogXCJSaW8gZGUgSmFuZWlyb1wiLFxyXG4gICAgXCJSTlwiOiBcIlJpbyBHcmFuZGUgZG8gTm9ydGVcIixcclxuICAgIFwiUlNcIjogXCJSaW8gR3JhbmRlIGRvIFN1bFwiLFxyXG4gICAgXCJST1wiOiBcIlJvbmTDtG5pYVwiLFxyXG4gICAgXCJSUlwiOiBcIlJvcmFpbWFcIixcclxuICAgIFwiU0NcIjogXCJTYW50YSBDYXRhcmluYVwiLFxyXG4gICAgXCJTUFwiOiBcIlPDo28gUGF1bG9cIixcclxuICAgIFwiU0VcIjogXCJTZXJnaXBlXCIsXHJcbiAgICBcIlRPXCI6IFwiVG9jYW50aW5zXCJcclxufTsiLCJpbXBvcnQge251bWJlclBhdHRlcm59IGZyb20gJy4vZm9ybWF0JztcclxuXHJcbmV4cG9ydCBjb25zdCBvbmx5TnVtYmVycyA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgYXV4Q2VwID0gKHZhbHVlIHx8IFwiXCIpLm1hdGNoKG51bWJlclBhdHRlcm4pO1xyXG4gICAgcmV0dXJuIChhdXhDZXAgfHwgW10pLmpvaW4oXCJcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVDUEYgPSAoX3N0ckNQRikgPT4ge1xyXG4gICAgY29uc3Qgc3RyQ1BGID0gb25seU51bWJlcnMoX3N0ckNQRik7XHJcbiAgICBpZiAoc3RyQ1BGLmxlbmd0aCAhPT0gMTEpIHJldHVybiBmYWxzZTtcclxuICAgIGxldCBzb21hO1xyXG4gICAgbGV0IHJlc3RvO1xyXG4gICAgc29tYSA9IDA7XHJcbiAgICBpZiAoc3RyQ1BGID09IFwiMDAwMDAwMDAwMDBcIikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgZm9yICh2YXIgaT0xOyBpPD05OyBpKyspIHtcclxuICAgICAgICAgICAgc29tYSA9IHNvbWEgKyBwYXJzZUludChzdHJDUEYuc3Vic3RyaW5nKGktMSwgaSkpICogKDExIC0gaSk7XHJcbiAgICB9XHJcbiAgICByZXN0byA9IChzb21hICogMTApICUgMTE7XHJcbiAgIFxyXG4gICAgaWYgKChyZXN0byA9PSAxMCkgfHwgKHJlc3RvID09IDExKSkgcmVzdG8gPSAwO1xyXG4gICAgaWYgKHJlc3RvICE9IHBhcnNlSW50KHN0ckNQRi5zdWJzdHJpbmcoOSwgMTApKSkgcmV0dXJuIGZhbHNlO1xyXG4gICBcclxuICAgIHNvbWEgPSAwO1xyXG4gICAgZm9yICh2YXIgaiA9IDE7IGogPD0gMTA7IGogKyspIHtcclxuICAgICAgICBzb21hID0gc29tYSArIHBhcnNlSW50KHN0ckNQRi5zdWJzdHJpbmcoai0xLCBqKSkgKiAoMTIgLSBqKTtcclxuICAgIH1cclxuICAgIHJlc3RvID0gKHNvbWEgKiAxMCklIDExO1xyXG4gICBcclxuICAgIGlmICgocmVzdG8gPT0gMTApIHx8IChyZXN0byA9PSAxMSkpIHJlc3RvID0gMDtcclxuICAgIGlmIChyZXN0byAhPSBwYXJzZUludChzdHJDUEYuc3Vic3RyaW5nKDEwLCAxMSkpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB2YWxpZGF0ZUNQRixcclxuICAgIG9ubHlOdW1iZXJzXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=