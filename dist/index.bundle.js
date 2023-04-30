/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n}\n\n.content {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.board {\n  min-width: 500px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.row {\n  display: flex;\n  height: 50px;\n  width: 500px;\n}\n\n.gameover-card {\n  position: absolute;\n  z-index: 1111;\n  font-size: 3rem;\n  background: white;\n}\n\n.slot {\n  border: 1px solid rgba(16, 116, 146, 0.548); \n  display: flex;\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n\n.slot.sunk {\n  background-color: red;  \n}\n\n.slot.hit {\n  border: 3px solid red;\n}\n\n.slot.hit-ship {\n  border: 3px solid purple;  \n}\n\n.slot.hit-ship:before, .slot.hit-ship:after {\n  position: absolute;\n  content: '';\n  background: red;\n  display: block;\n  width: 100%;\n  height: 30px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.slot.hit-ship:after {\n  -webkit-transform: rotate(45deg);    \n  transform: rotate(45deg);\n}\n\n.ship {\n  height: 50px;\n  border: 3px solid yellow;\n  cursor: move!important;\n  position: absolute!important;\n  z-index: 1000;\n}\n\n.computer .ship {\n  cursor: auto!important;\n}\n\n.l5 {\n  width: calc(50px * 5);\n}\n\n.l5.rotated {\n  width: 50px;\n  height: calc(50px * 5);\n}\n\n.l4 {\n  width: calc(50px * 4);\n}\n\n.l4.rotated {\n  width: 50px;\n  height: calc(50px * 4);\n}\n\n.l3 {\n  width: calc(50px * 3);\n}\n\n.l3.rotated {\n  width: 50px;\n  height: calc(50px * 3);\n}\n\n.l2 {\n  width: calc(50px * 2);\n}\n\n.l2.rotated {\n  width: 50px;\n  height: calc(50px * 2);\n}\n\n.l1 {\n  width: 50px\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,2CAA2C;EAC3C,aAAa;EACb,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,cAAc;EACd,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,yBAAyB;EACzB,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;EACT,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wBAAwB;EACxB,sBAAsB;EACtB,4BAA4B;EAC5B,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n}\n\n.content {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.board {\n  min-width: 500px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.row {\n  display: flex;\n  height: 50px;\n  width: 500px;\n}\n\n.gameover-card {\n  position: absolute;\n  z-index: 1111;\n  font-size: 3rem;\n  background: white;\n}\n\n.slot {\n  border: 1px solid rgba(16, 116, 146, 0.548); \n  display: flex;\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n\n.slot.sunk {\n  background-color: red;  \n}\n\n.slot.hit {\n  border: 3px solid red;\n}\n\n.slot.hit-ship {\n  border: 3px solid purple;  \n}\n\n.slot.hit-ship:before, .slot.hit-ship:after {\n  position: absolute;\n  content: '';\n  background: red;\n  display: block;\n  width: 100%;\n  height: 30px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.slot.hit-ship:after {\n  -webkit-transform: rotate(45deg);    \n  transform: rotate(45deg);\n}\n\n.ship {\n  height: 50px;\n  border: 3px solid yellow;\n  cursor: move!important;\n  position: absolute!important;\n  z-index: 1000;\n}\n\n.computer .ship {\n  cursor: auto!important;\n}\n\n.l5 {\n  width: calc(50px * 5);\n}\n\n.l5.rotated {\n  width: 50px;\n  height: calc(50px * 5);\n}\n\n.l4 {\n  width: calc(50px * 4);\n}\n\n.l4.rotated {\n  width: 50px;\n  height: calc(50px * 4);\n}\n\n.l3 {\n  width: calc(50px * 3);\n}\n\n.l3.rotated {\n  width: 50px;\n  height: calc(50px * 3);\n}\n\n.l2 {\n  width: calc(50px * 2);\n}\n\n.l2.rotated {\n  width: 50px;\n  height: calc(50px * 2);\n}\n\n.l1 {\n  width: 50px\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/DOM/controller.js":
/*!***************************************!*\
  !*** ./src/modules/DOM/controller.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initializeGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializeGame */ "./src/modules/DOM/initializeGame.js");



/***/ }),

/***/ "./src/modules/DOM/initializeGame.js":
/*!*******************************************!*\
  !*** ./src/modules/DOM/initializeGame.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printBoard */ "./src/modules/DOM/printBoard.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/modules/game.js");



let newGame = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
newGame.gameLoop();
(0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printBoards)();
(0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printShips)(newGame.boards);
let rotateShips;
let dragAndDrop;
let hittingSlots;
function gameOverCard() {
  const element = document.createElement("div");
  element.classList.add("gameover-card");
  const title = document.createElement("h3");
  title.textContent = "Game over";
  const btn = document.createElement("button");
  btn.classList.add("Replay");
  btn.textContent = "Replay";
  element.append(title, btn);
  document.body.appendChild(element);
  element.style.pointerEvents = "all";
  btn.addEventListener("click", () => {
    newGame = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
    newGame.gameLoop();
    element.remove();
    document.body.style.pointerEvents = "";
    const playerBoard = document.querySelector(".board.player");
    playerBoard.style.pointerEvents = "";

    (0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printBoards)();
    (0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printShips)(newGame.boards);
    rotateShips();
    dragAndDrop();
    hittingSlots();
  });
}

function allSunk() {
  document.body.style.pointerEvents = "none";
}

function isSunk(ship, player) {
  const element = document.createElement("div");
  element.classList.add(`l${ship.length}`);
  element.classList.add("ship");
  if (ship.rotated === true) element.classList.add("rotated");

  const nodeList = document.querySelectorAll(`.${player} .slot`);
  const computerSlots = Array.from(nodeList);
  computerSlots.forEach((slot) => {
    if (
      Number(slot.dataset.X) === ship.x &&
      Number(slot.dataset.Y) === ship.y
    ) {
      slot.appendChild(element);
    }
  });
}

function hitPlayerSlot() {
  const nodeList = document.querySelectorAll(".player .slot");
  const playerSlots = Array.from(nodeList);
  const [x, y] = newGame.boards[1].owner.randomlyHitSlot();
  const bool = newGame.boards[0].receiveAttack(x, y);
  playerSlots.forEach((slot, idx) => {
    if (
      !slot.classList.contains("hit") &&
      !slot.classList.contains("hit-ship")
    ) {
      const xHtml = Number(slot.dataset.X);
      const yHtml = Number(slot.dataset.Y);
      if (xHtml === x && yHtml === y) {
        if (bool === false) {
          playerSlots[idx].classList.add("hit");
        } else {
          playerSlots[idx].classList.add("hit-ship");

          const myShip = newGame.boards[0].board[x][y].ship;
          if (myShip !== null) {
            if (myShip.sunk === true) isSunk(myShip, "player");
            if (newGame.boards[0].isGameLost()) {
              allSunk();
              gameOverCard();
            }
          }
        }
      }
    }
  });
}

hittingSlots = () => {
  const nodeList = document.querySelectorAll(".computer .slot");
  const computerSlots = Array.from(nodeList);

  computerSlots.forEach((slot, index) => {
    slot.addEventListener("click", () => {
      if (
        !slot.classList.contains("hit") &&
        !slot.classList.contains("hit-ship")
      ) {
        const x = Number(slot.dataset.X);
        const y = Number(slot.dataset.Y);
        const bool = newGame.boards[1].receiveAttack(x, y);
        const playerBoard = document.querySelector(".board.player");
        playerBoard.style.pointerEvents = "none";

        if (bool === false) {
          hitPlayerSlot();
          computerSlots[index].classList.add("hit");
        } else {
          hitPlayerSlot();
          computerSlots[index].classList.add("hit-ship");

          const myShip = newGame.boards[1].board[x][y].ship;
          if (myShip !== null) {
            if (myShip.sunk === true) isSunk(myShip, "computer");
            if (newGame.boards[1].isGameLost()) {
              allSunk();
              gameOverCard();
            }
          }
        }
      }
    });
  });
};

dragAndDrop = () => {
  const playerShips = document.querySelectorAll(".player .ship");
  // const computerShips = document.querySelectorAll(".computer .ship");
  const playersShips = [Array.from(playerShips)];

  playersShips.forEach((arr, index) => {
    arr.forEach((_, i) => {
      arr[i].setAttribute("draggable", true);

      const ship = playersShips[index][i];
      const fakeShip = ship.cloneNode(false);
      fakeShip.classList.add("clone");
      ship.ondragstart = (e) => {
        e.preventDefault();
      };

      fakeShip.ondragstart = (e) => {
        e.preventDefault();
      };

      let onMouseMove;

      function showOutlineNotRotated(a, b, shipObject) {
        const result = document.elementsFromPoint(a, b);
        const array = Array.from(result);

        array.forEach((element) => {
          if (
            element.classList.contains("slot") &&
            element.dataset.empty === "true"
          ) {
            const fakeElement = document.createElement("div");
            element.appendChild(fakeElement);

            const valueIndex = Number(fakeShip.classList[0][1]) - 1;
            if (fakeElement.parentNode.dataset.empty === "true") {
              let bool = true;
              let ourShip = fakeElement.parentNode;
              for (let j = 0; j < valueIndex; j += 1) {
                if (ourShip === null || ourShip.nextSibling === null) {
                  bool = false;
                  break;
                } else if (ourShip.nextSibling.dataset.empty === "true") {
                  bool = true;
                } else {
                  bool = false;
                  break;
                }
                ourShip = ourShip.nextSibling;
              }
              if (bool === false) {
                element.removeChild(element.firstChild);
              } else {
                element.appendChild(fakeShip);
                fakeShip.style.border = "3px solid green";
                fakeShip.style.top = "0";
                fakeShip.style.left = "0";
              }
            }
          } else if (element.classList.contains("slot")) {
            let myElem = element;
            for (let idx = 0; idx < shipObject.length; idx += 1) {
              if (myElem === null) {
                break;
              }
              if (
                Number(myElem.dataset.X) === shipObject.fullCoords[idx].x &&
                Number(myElem.dataset.Y) === shipObject.fullCoords[idx].y
              ) {
                element.appendChild(fakeShip);
                fakeShip.style.border = "3px solid green";
                fakeShip.style.top = "0";
                fakeShip.style.left = "0";
                const valueIndex = Number(fakeShip.classList[0][1]) - 1;
                if (fakeShip.parentNode.dataset.empty === "true") {
                  let bool = true;
                  const ourShip = fakeShip.parentNode;
                  for (let j = 0; j < valueIndex; j += 1) {
                    if (ourShip.nextSibling.dataset.empty === "true") {
                      bool = true;
                    } else {
                      bool = false;
                      break;
                    }
                  }
                  if (bool === false) {
                    element.removeChild(element.firstChild);
                  }
                }
              }
              myElem = myElem.nextSibling;
            }
          }
        });
      }

      function showOutlineRotated(a, b, shipObject) {
        const result = document.elementsFromPoint(a, b);
        const array = Array.from(result);

        array.forEach((element) => {
          if (
            element.classList.contains("slot") &&
            element.dataset.empty === "true"
          ) {
            const fakeElement = document.createElement("div");
            element.appendChild(fakeElement);

            const valueIndex = Number(fakeShip.classList[0][1]) - 1;
            if (fakeElement.parentNode.dataset.empty === "true") {
              let bool = true;
              let ourShip = fakeElement.parentNode;
              for (let j = 0; j < valueIndex; j += 1) {
                if (
                  ourShip === null ||
                  ourShip.parentNode.nextSibling === null ||
                  ourShip.parentNode.nextSibling.children[0] === null
                ) {
                  bool = false;
                  break;
                } else if (
                  ourShip.parentNode.nextSibling.children[
                    Number(fakeElement.parentNode.dataset.Y)
                  ].dataset.empty === "true"
                ) {
                  bool = true;
                } else {
                  bool = false;
                  break;
                }
                const newShip =
                  ourShip.parentNode.nextSibling.children[
                    Number(fakeElement.parentNode.dataset.Y)
                  ];
                ourShip = newShip;
              }
              if (bool === false) {
                fakeElement.remove();
              } else {
                element.appendChild(fakeShip);
                fakeShip.style.border = "3px solid green";
                fakeShip.style.top = "0";
                fakeShip.style.left = "0";
                fakeElement.remove();
              }
            }
          } else if (element.classList.contains("slot")) {
            let myElem = element;
            for (let idx = 0; idx < shipObject.length; idx += 1) {
              if (myElem === null) {
                break;
              }
              if (
                Number(myElem.dataset.X) === shipObject.fullCoords[idx].x &&
                Number(myElem.dataset.Y) === shipObject.fullCoords[idx].y
              ) {
                element.appendChild(fakeShip);
                fakeShip.style.border = "3px solid green";
                fakeShip.style.top = "0";
                fakeShip.style.left = "0";
                const valueIndex = Number(fakeShip.classList[0][1]) - 1;
                if (fakeShip.parentNode.dataset.empty === "true") {
                  let bool = true;
                  const ourShip = fakeShip.parentNode;
                  for (let j = 0; j < valueIndex; j += 1) {
                    if (ourShip.nextSibling.dataset.empty === "true") {
                      bool = true;
                    } else {
                      bool = false;
                      break;
                    }
                  }
                  if (bool === false) {
                    element.removeChild(fakeShip);
                  }
                }
              }

              if (
                myElem === null ||
                myElem.parentNode === null ||
                myElem.parentNode.nextSibling === null
              ) {
                break;
              }
              myElem =
                myElem.parentNode.nextSibling.children[
                  Number(element.dataset.Y)
                ];
            }
          }
        });
      }

      ship.onmousedown = () => {
        function moveAt(pageX, pageY) {
          fakeShip.style.left = `${pageX - ship.offsetWidth / 2}px`;
          fakeShip.style.top = `${pageY - ship.offsetHeight / 2}px`;
          ship.style.left = `${pageX - ship.offsetWidth / 2}px`;
          ship.style.top = `${pageY - ship.offsetHeight / 2}px`;

          const ships = Object.values(newGame.boards[0].ships);
          const valueIndex = Number(ship.classList[0][1]) - 1;
          if (!ship.classList.contains("rotated")) {
            showOutlineNotRotated(
              pageX - fakeShip.offsetWidth / 2,
              pageY - fakeShip.offsetHeight / 2,
              ships[valueIndex]
            );
          } else {
            showOutlineRotated(
              pageX - fakeShip.offsetWidth / 2,
              pageY - fakeShip.offsetHeight / 2,
              ships[valueIndex]
            );
          }
        }

        if (!ship.classList.contains("rotated")) {
          let myShip = ship.parentNode;
          for (let s = 0; s < Number(ship.classList[0][1]); s += 1) {
            if (myShip) {
              myShip.dataset.empty = "true";
              myShip = myShip.nextSibling;
            }
          }
        } else if (ship.classList.contains("rotated")) {
          let myShip = ship.parentNode;
          for (let s = 0; s < Number(ship.classList[0][1]); s += 1) {
            if (
              myShip === null ||
              myShip.parentNode === null ||
              myShip.parentNode.nextSibling === null
            )
              break;

            myShip.dataset.empty = "true";
            myShip =
              myShip.parentNode.nextSibling.children[
                Number(ship.parentNode.dataset.Y)
              ];
          }
        }

        const initialSlot = ship.parentNode;
        ship.style.border = "none";
        onMouseMove = (event2) => {
          ship.style.position = "absolute";
          ship.style.zIndex = 1000;
          document.body.append(ship);
          document.body.append(fakeShip);
          fakeShip.style.border = "3px solid yellow";

          moveAt(event2.pageX, event2.pageY);
        };

        document.addEventListener("mousemove", onMouseMove);

        const mouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          ship.style.border = "3px solid yellow";
          ship.style.left = "0";
          ship.style.top = "0";
          if (fakeShip.parentNode !== null) {
            try {
              if (document.querySelector(".player").contains(fakeShip)) {
                fakeShip.parentNode.replaceChild(ship, fakeShip);

                const ships = Object.values(newGame.boards[0].ships);
                const valueIndex = Number(ship.classList[0][1]) - 1;
                const coords = [
                  Number(ship.parentNode.dataset.X),
                  Number(ship.parentNode.dataset.Y),
                ];
                newGame.boards[0].placeShip(ships[valueIndex], coords);
              } else if (document.body.contains(fakeShip)) {
                initialSlot.appendChild(ship);

                const ships = Object.values(newGame.boards[0].ships);
                const valueIndex = Number(ship.classList[0][1]) - 1;
                const coords = [
                  Number(initialSlot.dataset.X),
                  Number(initialSlot.dataset.Y),
                ];
                newGame.boards[0].placeShip(ships[valueIndex], coords);
                fakeShip.remove();
              }
            } catch (error) {
              // there is a bug when user release ship outside boards
              initialSlot.appendChild(ship);

              const ships = Object.values(newGame.boards[0].ships);
              const valueIndex = Number(ship.classList[0][1]) - 1;
              const coords = [
                Number(initialSlot.dataset.X),
                Number(initialSlot.dataset.Y),
              ];
              newGame.boards[0].placeShip(ships[valueIndex], coords);
              console.log(error);
            }

            if (!ship.classList.contains("rotated")) {
              let myShip2 = ship.parentNode;
              for (let s = 0; s < Number(ship.classList[0][1]); s += 1) {
                if (myShip2) {
                  myShip2.dataset.empty = "false";
                  myShip2 = myShip2.nextSibling;
                }
              }
            } else if (ship.classList.contains("rotated")) {
              let myShip2 = ship.parentNode;
              for (let s = 0; s < Number(ship.classList[0][1]); s += 1) {
                if (
                  myShip2 === null ||
                  myShip2.parentNode === null ||
                  myShip2.parentNode.nextSibling === null
                )
                  break;
                myShip2.dataset.empty = "false";
                myShip2 =
                  myShip2.parentNode.nextSibling.children[
                    Number(ship.parentNode.dataset.Y)
                  ];
              }
            }
          }

          ship.onmouseup = null;
        };
        ship.onmouseup = () => {
          mouseUp();
        };

        fakeShip.onmouseup = () => {
          mouseUp();
        };
      };
    });
  });
};

rotateShips = () => {
  const realPlayerShips = Object.values(newGame.boards[0].ships);
  // const realComputerShips = Object.values(newGame.boards[1].ships);
  const playerShips = document.querySelectorAll(".player .ship");
  // const computerShips = document.querySelectorAll(".computer .ship");
  const playersShips = [Array.from(playerShips)];
  const realPlayersShips = [realPlayerShips];
  playersShips.forEach((arr, i) => {
    arr.forEach((element) => {
      element.addEventListener("click", () => {
        const index = element.classList[0][1] - 1;
        newGame.boards[i].changeAxis(realPlayersShips[i][index]);
        (0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printBoards)();
        (0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printShips)(newGame.boards);
        hittingSlots();
        rotateShips();
        dragAndDrop();
      });
    });
  });
};
rotateShips();
dragAndDrop();
hittingSlots();
// Implement ship placement link between backend & frontend refactor drag and drop and move it to another module?
// add computer board into the equation, implement ship hitting.
// is what i'm doing with the dom right? It feels like i'm doing too much of validations here.
// add a function to randomize ship placement on the computer board, add player vs player


/***/ }),

/***/ "./src/modules/DOM/printBoard.js":
/*!***************************************!*\
  !*** ./src/modules/DOM/printBoard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printBoards": () => (/* binding */ printBoards),
/* harmony export */   "printShips": () => (/* binding */ printShips)
/* harmony export */ });
const printShips = (boards) => {
  const array = document.querySelectorAll(".player .slot");
  const boardData = Object.values(boards[0].ships);
  document.querySelectorAll(".ship").forEach((elem) => elem.remove());

  boardData.forEach((ship) => {
    const element = document.createElement("div");
    element.classList.add(`l${ship.length}`);
    element.classList.add("ship");
    if (ship.rotated === true) element.classList.add("rotated");
    const data = { x: ship.x, y: ship.y };
    array.forEach((slot, index) => {
      if (
        Number(slot.dataset.X) === data.x &&
        Number(slot.dataset.Y) === data.y
      ) {
        array[index].appendChild(element);
      }
      ship.fullCoords.forEach((coords) => {
        if (
          Number(slot.dataset.X) === coords.x &&
          Number(slot.dataset.Y) === coords.y
        ) {
          array[index].dataset.empty = "false";
        }
      });
    });
  });
};

const printBoards = () => {
  const board = document.querySelectorAll(".board");
  document.querySelectorAll(".ship").forEach((elem) => elem.remove());
  board[0].innerHTML = "";
  board[1].innerHTML = "";
  for (let i = 0; i < 2; i += 1) {
    for (let x = 0; x < 10; x += 1) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let y = 0; y < 10; y += 1) {
        const slot = document.createElement("div");
        slot.classList.add("slot");
        slot.dataset.X = x;
        slot.dataset.Y = y;
        slot.dataset.empty = "true";
        row.appendChild(slot);
      }
      board[i].appendChild(row);
    }
  }
};




/***/ }),

/***/ "./src/modules/computer.js":
/*!*********************************!*\
  !*** ./src/modules/computer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
class Computer {
  constructor(playerBoard) {
    this.remainingSlots = playerBoard.flat(Infinity);
  }

  randomlyHitSlot() {
    const index = Math.floor(Math.random() * this.remainingSlots.length);
    const randomCoords = this.remainingSlots[index];
    this.remainingSlots.splice(index, 1);
    return [randomCoords.x, randomCoords.y];
  }
}


/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer */ "./src/modules/computer.js");



// Game has 2 gameboards, 10 ships, 2 players each having a board and 5 ships, a game loop

class Game {
  constructor() {
    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](this.player);
    this.computer = new _computer__WEBPACK_IMPORTED_MODULE_2__["default"](playerBoard.board);
    const computerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](this.computer);
    this.boards = [playerBoard, computerBoard];
  }

  gameLoop() {
    this.boards[0].placeShips();
    this.boards[1].randomlyPlaceShips();
  }
}


/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/modules/node.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");



class Gameboard {
  constructor(owner) {
    this.owner = owner;
    this.board = [
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
    ];

    (() => {
      this.board.forEach((row, x) => {
        row.forEach((_, y) => {
          this.board[x][y] = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
        });
      });
    })();

    this.ships = {
      one: new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](1),
      two: new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2),
      three: new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3),
      four: new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4),
      five: new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](5),
    };
  }

  who() {
    return this.owner;
  }

  randomlyPlaceShips() {
    const keys = ["one", "two", "three", "four", "five"];
    const shipList = this.ships;
    let bool = false;
    let i = 0;
    keys.forEach((key) => {
      bool = false;
      while (bool === false) {
        const coords = this.owner.randomlyHitSlot();
        bool = this.placeShip(shipList[key], coords);
        i += 1;
        console.log(i);
      }
    });

    // const board = this.board.flat(Infinity);
    // let bool2 = true;
    // board.forEach((node) => {
    //   if (node.ship !== null && bool2 === true) {
    //     const index = node.ship.length - 1;
    //     const ship = shipList[keys[index]];
    //     console.log(ship);
    //     this.changeAxis(ship);
    //     bool2 = false;
    //   }
    // });
    this.prettyPrintBoard();
  }

  placeShips() {
    const coords = [
      [4, 4],
      [3, 3],
      [2, 2],
      [1, 1],
      [0, 0],
    ];

    const keys = ["one", "two", "three", "four", "five"];
    const shipList = this.ships;
    keys.forEach((key, index) => {
      this.placeShip(shipList[key], coords[index]);
    });
  }

  receiveAttack(x, y) {
    const node = this.board[x][y];
    let bool;
    if (node.ship === null && node.bombed === false) {
      node.bombed = true;
      bool = false;
    } else if (node.ship !== null && node.bombed === false) {
      node.bombed = true;
      node.ship.hit();
      bool = true;
    }
    return bool;
  }

  isGameLost() {
    const array = [];
    Object.values(this.ships).forEach((value) => {
      array.push(value.sunk);
    });

    const bool = array.every((element) => {
      let returnValue = false;
      if (element === true) {
        returnValue = true;
      }
      return returnValue;
    });

    return bool;
  }

  placeShip(ship, currentCoords) {
    const [x, y] = currentCoords;
    const { length } = ship;
    let occupied = false;
    const arr = [];

    // remove ship from board if it already exists
    const shipCoords = ship.fullCoords;
    shipCoords.forEach((element) => {
      this.board[element.x][element.y].ship = null;
    });

    if (ship.rotated === false) {
      for (let i = 0; i < length; i += 1) {
        if (y + length - 1 > 9 || x > 9 || x < 0 || y > 9 || y < 0) {
          occupied = true;
        } else if (this.board[x][y + i].ship === null) {
          this.board[x][y + i].ship = ship;
          arr.push({ x, y: y + i });
        } else {
          occupied = true;
        }
      }
    } else if (ship.rotated === true) {
      for (let i = 0; i < length; i += 1) {
        if (x + length - 1 > 9 || x > 9 || x < 0 || y > 9 || y < 0) {
          occupied = true;
        } else if (this.board[x + i][y].ship === null) {
          this.board[x + i][y].ship = ship;
          arr.push({ x: x + i, y });
        } else {
          occupied = true;
          break;
        }
      }
    }
    Object.entries(this.ships).forEach(([key, value]) => {
      if (value.length === length) {
        this.ships[key].x = x;
        this.ships[key].y = y;
        this.ships[key].fullCoords = arr;
      }
    });
    if (occupied === true) return false;

    return true;
  }

  changeAxis(ship) {
    const { x, y, length } = ship;
    let occupied = false;
    const arr = [{ x, y }];
    for (let i = 1; i < length; i += 1) {
      if (
        x + length - 1 <= 9 &&
        ship.rotated === false &&
        this.board[x + i][y].ship === null
      ) {
        this.board[x + i][y].ship = ship;
        this.board[x][y + i].ship = null;
        arr.push({ x: x + i, y });
      } else if (
        y + length - 1 <= 9 &&
        ship.rotated === true &&
        this.board[x][y + i].ship === null
      ) {
        this.board[x][y + i].ship = ship;
        this.board[x + i][y].ship = null;
        arr.push({ x, y: y + i });
      } else {
        occupied = true;
        break;
      }
    }

    if (occupied === true) return false;

    Object.entries(this.ships).forEach(([key, value]) => {
      if (value.length === length) {
        this.ships[key].rotated = !ship.rotated;
        this.ships[key].fullCoords = arr;
      }
    });
    return true;
  }

  prettyPrintBoard() {
    const myBoard = JSON.parse(JSON.stringify(this.board));

    myBoard.forEach((row, x) => {
      row.forEach((col, y) => {
        if (col.ship) {
          if (col.ship.rotated) {
            myBoard[x][y] = `^${col.ship.length}`;
          } else if (col.ship.rotated === false) {
            myBoard[x][y] = `<${col.ship.length}`;
          }
        } else {
          myBoard[x][y] = null;
        }
      });
    });
    console.table(myBoard);
    console.table(this.board);
  }
}


/***/ }),

/***/ "./src/modules/node.js":
/*!*****************************!*\
  !*** ./src/modules/node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ship = null;
    this.bombed = false;
  }
}


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
  constructor(id = 0) {
    this.id = id;
    this.currentMouseCoords = null;
  }

  getCoords() {
    return this.currentMouseCoords;
  }

  setCoords(coords) {
    this.currentMouseCoords = coords;
  }
}


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
// A ship has a length, tracks number received hits, a sunk boolean

class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.rotated = false;
    this.x = null;
    this.y = null;
    this.fullCoords = [];
  }

  hit() {
    this.hits += 1;
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }

  isSunk() {
    if (this.sunk === true) return true;
    return false;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_DOM_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM/controller */ "./src/modules/DOM/controller.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hELFlBQVk7QUFDWixnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3TmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET00vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NL2luaXRpYWxpemVHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET00vcHJpbnRCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbm9kZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmdhbWVvdmVyLWNhcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTExMTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uc2xvdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAxMTYsIDE0NiwgMC41NDgpOyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNsb3Quc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICBcXG59XFxuXFxuLnNsb3QuaGl0IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnNsb3QuaGl0LXNoaXAge1xcbiAgYm9yZGVyOiAzcHggc29saWQgcHVycGxlOyAgXFxufVxcblxcbi5zbG90LmhpdC1zaGlwOmJlZm9yZSwgLnNsb3QuaGl0LXNoaXA6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnNsb3QuaGl0LXNoaXA6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7ICAgIFxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XFxuICBjdXJzb3I6IG1vdmUhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi5jb21wdXRlciAuc2hpcCB7XFxuICBjdXJzb3I6IGF1dG8haW1wb3J0YW50O1xcbn1cXG5cXG4ubDUge1xcbiAgd2lkdGg6IGNhbGMoNTBweCAqIDUpO1xcbn1cXG5cXG4ubDUucm90YXRlZCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogY2FsYyg1MHB4ICogNSk7XFxufVxcblxcbi5sNCB7XFxuICB3aWR0aDogY2FsYyg1MHB4ICogNCk7XFxufVxcblxcbi5sNC5yb3RhdGVkIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDUwcHggKiA0KTtcXG59XFxuXFxuLmwzIHtcXG4gIHdpZHRoOiBjYWxjKDUwcHggKiAzKTtcXG59XFxuXFxuLmwzLnJvdGF0ZWQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IGNhbGMoNTBweCAqIDMpO1xcbn1cXG5cXG4ubDIge1xcbiAgd2lkdGg6IGNhbGMoNTBweCAqIDIpO1xcbn1cXG5cXG4ubDIucm90YXRlZCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogY2FsYyg1MHB4ICogMik7XFxufVxcblxcbi5sMSB7XFxuICB3aWR0aDogNTBweFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmdhbWVvdmVyLWNhcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTExMTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uc2xvdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAxMTYsIDE0NiwgMC41NDgpOyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNsb3Quc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICBcXG59XFxuXFxuLnNsb3QuaGl0IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnNsb3QuaGl0LXNoaXAge1xcbiAgYm9yZGVyOiAzcHggc29saWQgcHVycGxlOyAgXFxufVxcblxcbi5zbG90LmhpdC1zaGlwOmJlZm9yZSwgLnNsb3QuaGl0LXNoaXA6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnNsb3QuaGl0LXNoaXA6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7ICAgIFxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XFxuICBjdXJzb3I6IG1vdmUhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi5jb21wdXRlciAuc2hpcCB7XFxuICBjdXJzb3I6IGF1dG8haW1wb3J0YW50O1xcbn1cXG5cXG4ubDUge1xcbiAgd2lkdGg6IGNhbGMoNTBweCAqIDUpO1xcbn1cXG5cXG4ubDUucm90YXRlZCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogY2FsYyg1MHB4ICogNSk7XFxufVxcblxcbi5sNCB7XFxuICB3aWR0aDogY2FsYyg1MHB4ICogNCk7XFxufVxcblxcbi5sNC5yb3RhdGVkIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDUwcHggKiA0KTtcXG59XFxuXFxuLmwzIHtcXG4gIHdpZHRoOiBjYWxjKDUwcHggKiAzKTtcXG59XFxuXFxuLmwzLnJvdGF0ZWQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IGNhbGMoNTBweCAqIDMpO1xcbn1cXG5cXG4ubDIge1xcbiAgd2lkdGg6IGNhbGMoNTBweCAqIDIpO1xcbn1cXG5cXG4ubDIucm90YXRlZCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogY2FsYyg1MHB4ICogMik7XFxufVxcblxcbi5sMSB7XFxuICB3aWR0aDogNTBweFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9pbml0aWFsaXplR2FtZVwiO1xuIiwiaW1wb3J0IHsgcHJpbnRCb2FyZHMsIHByaW50U2hpcHMgfSBmcm9tIFwiLi9wcmludEJvYXJkXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vZ2FtZVwiO1xuXG5sZXQgbmV3R2FtZSA9IG5ldyBHYW1lKCk7XG5uZXdHYW1lLmdhbWVMb29wKCk7XG5wcmludEJvYXJkcygpO1xucHJpbnRTaGlwcyhuZXdHYW1lLmJvYXJkcyk7XG5sZXQgcm90YXRlU2hpcHM7XG5sZXQgZHJhZ0FuZERyb3A7XG5sZXQgaGl0dGluZ1Nsb3RzO1xuZnVuY3Rpb24gZ2FtZU92ZXJDYXJkKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZ2FtZW92ZXItY2FyZFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJHYW1lIG92ZXJcIjtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJSZXBsYXlcIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiUmVwbGF5XCI7XG4gIGVsZW1lbnQuYXBwZW5kKHRpdGxlLCBidG4pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICBlbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuZXdHYW1lID0gbmV3IEdhbWUoKTtcbiAgICBuZXdHYW1lLmdhbWVMb29wKCk7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5wbGF5ZXJcIik7XG4gICAgcGxheWVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XG5cbiAgICBwcmludEJvYXJkcygpO1xuICAgIHByaW50U2hpcHMobmV3R2FtZS5ib2FyZHMpO1xuICAgIHJvdGF0ZVNoaXBzKCk7XG4gICAgZHJhZ0FuZERyb3AoKTtcbiAgICBoaXR0aW5nU2xvdHMoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBpc1N1bmsoc2hpcCwgcGxheWVyKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYGwke3NoaXAubGVuZ3RofWApO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICBpZiAoc2hpcC5yb3RhdGVkID09PSB0cnVlKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVkXCIpO1xuXG4gIGNvbnN0IG5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyfSAuc2xvdGApO1xuICBjb25zdCBjb21wdXRlclNsb3RzID0gQXJyYXkuZnJvbShub2RlTGlzdCk7XG4gIGNvbXB1dGVyU2xvdHMuZm9yRWFjaCgoc2xvdCkgPT4ge1xuICAgIGlmIChcbiAgICAgIE51bWJlcihzbG90LmRhdGFzZXQuWCkgPT09IHNoaXAueCAmJlxuICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5ZKSA9PT0gc2hpcC55XG4gICAgKSB7XG4gICAgICBzbG90LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpdFBsYXllclNsb3QoKSB7XG4gIGNvbnN0IG5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIgLnNsb3RcIik7XG4gIGNvbnN0IHBsYXllclNsb3RzID0gQXJyYXkuZnJvbShub2RlTGlzdCk7XG4gIGNvbnN0IFt4LCB5XSA9IG5ld0dhbWUuYm9hcmRzWzFdLm93bmVyLnJhbmRvbWx5SGl0U2xvdCgpO1xuICBjb25zdCBib29sID0gbmV3R2FtZS5ib2FyZHNbMF0ucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgcGxheWVyU2xvdHMuZm9yRWFjaCgoc2xvdCwgaWR4KSA9PiB7XG4gICAgaWYgKFxuICAgICAgIXNsb3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpICYmXG4gICAgICAhc2xvdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXQtc2hpcFwiKVxuICAgICkge1xuICAgICAgY29uc3QgeEh0bWwgPSBOdW1iZXIoc2xvdC5kYXRhc2V0LlgpO1xuICAgICAgY29uc3QgeUh0bWwgPSBOdW1iZXIoc2xvdC5kYXRhc2V0LlkpO1xuICAgICAgaWYgKHhIdG1sID09PSB4ICYmIHlIdG1sID09PSB5KSB7XG4gICAgICAgIGlmIChib29sID09PSBmYWxzZSkge1xuICAgICAgICAgIHBsYXllclNsb3RzW2lkeF0uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJTbG90c1tpZHhdLmNsYXNzTGlzdC5hZGQoXCJoaXQtc2hpcFwiKTtcblxuICAgICAgICAgIGNvbnN0IG15U2hpcCA9IG5ld0dhbWUuYm9hcmRzWzBdLmJvYXJkW3hdW3ldLnNoaXA7XG4gICAgICAgICAgaWYgKG15U2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG15U2hpcC5zdW5rID09PSB0cnVlKSBpc1N1bmsobXlTaGlwLCBcInBsYXllclwiKTtcbiAgICAgICAgICAgIGlmIChuZXdHYW1lLmJvYXJkc1swXS5pc0dhbWVMb3N0KCkpIHtcbiAgICAgICAgICAgICAgYWxsU3VuaygpO1xuICAgICAgICAgICAgICBnYW1lT3ZlckNhcmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5oaXR0aW5nU2xvdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlciAuc2xvdFwiKTtcbiAgY29uc3QgY29tcHV0ZXJTbG90cyA9IEFycmF5LmZyb20obm9kZUxpc3QpO1xuXG4gIGNvbXB1dGVyU2xvdHMuZm9yRWFjaCgoc2xvdCwgaW5kZXgpID0+IHtcbiAgICBzbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICFzbG90LmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSAmJlxuICAgICAgICAhc2xvdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXQtc2hpcFwiKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHggPSBOdW1iZXIoc2xvdC5kYXRhc2V0LlgpO1xuICAgICAgICBjb25zdCB5ID0gTnVtYmVyKHNsb3QuZGF0YXNldC5ZKTtcbiAgICAgICAgY29uc3QgYm9vbCA9IG5ld0dhbWUuYm9hcmRzWzFdLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5wbGF5ZXJcIik7XG4gICAgICAgIHBsYXllckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblxuICAgICAgICBpZiAoYm9vbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBoaXRQbGF5ZXJTbG90KCk7XG4gICAgICAgICAgY29tcHV0ZXJTbG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoaXRQbGF5ZXJTbG90KCk7XG4gICAgICAgICAgY29tcHV0ZXJTbG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImhpdC1zaGlwXCIpO1xuXG4gICAgICAgICAgY29uc3QgbXlTaGlwID0gbmV3R2FtZS5ib2FyZHNbMV0uYm9hcmRbeF1beV0uc2hpcDtcbiAgICAgICAgICBpZiAobXlTaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobXlTaGlwLnN1bmsgPT09IHRydWUpIGlzU3VuayhteVNoaXAsIFwiY29tcHV0ZXJcIik7XG4gICAgICAgICAgICBpZiAobmV3R2FtZS5ib2FyZHNbMV0uaXNHYW1lTG9zdCgpKSB7XG4gICAgICAgICAgICAgIGFsbFN1bmsoKTtcbiAgICAgICAgICAgICAgZ2FtZU92ZXJDYXJkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZHJhZ0FuZERyb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllclNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIgLnNoaXBcIik7XG4gIC8vIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyIC5zaGlwXCIpO1xuICBjb25zdCBwbGF5ZXJzU2hpcHMgPSBbQXJyYXkuZnJvbShwbGF5ZXJTaGlwcyldO1xuXG4gIHBsYXllcnNTaGlwcy5mb3JFYWNoKChhcnIsIGluZGV4KSA9PiB7XG4gICAgYXJyLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICAgIGFycltpXS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXJzU2hpcHNbaW5kZXhdW2ldO1xuICAgICAgY29uc3QgZmFrZVNoaXAgPSBzaGlwLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICBmYWtlU2hpcC5jbGFzc0xpc3QuYWRkKFwiY2xvbmVcIik7XG4gICAgICBzaGlwLm9uZHJhZ3N0YXJ0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfTtcblxuICAgICAgZmFrZVNoaXAub25kcmFnc3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgb25Nb3VzZU1vdmU7XG5cbiAgICAgIGZ1bmN0aW9uIHNob3dPdXRsaW5lTm90Um90YXRlZChhLCBiLCBzaGlwT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGEsIGIpO1xuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20ocmVzdWx0KTtcblxuICAgICAgICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbG90XCIpICYmXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBmYWtlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZha2VFbGVtZW50KTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IE51bWJlcihmYWtlU2hpcC5jbGFzc0xpc3RbMF1bMV0pIC0gMTtcbiAgICAgICAgICAgIGlmIChmYWtlRWxlbWVudC5wYXJlbnROb2RlLmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgIGxldCBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbGV0IG91clNoaXAgPSBmYWtlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZhbHVlSW5kZXg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChvdXJTaGlwID09PSBudWxsIHx8IG91clNoaXAubmV4dFNpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3VyU2hpcC5uZXh0U2libGluZy5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXJTaGlwID0gb3VyU2hpcC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoYm9vbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmYWtlU2hpcCk7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xvdFwiKSkge1xuICAgICAgICAgICAgbGV0IG15RWxlbSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBzaGlwT2JqZWN0Lmxlbmd0aDsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgICAgaWYgKG15RWxlbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBOdW1iZXIobXlFbGVtLmRhdGFzZXQuWCkgPT09IHNoaXBPYmplY3QuZnVsbENvb3Jkc1tpZHhdLnggJiZcbiAgICAgICAgICAgICAgICBOdW1iZXIobXlFbGVtLmRhdGFzZXQuWSkgPT09IHNoaXBPYmplY3QuZnVsbENvb3Jkc1tpZHhdLnlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmYWtlU2hpcCk7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IE51bWJlcihmYWtlU2hpcC5jbGFzc0xpc3RbMF1bMV0pIC0gMTtcbiAgICAgICAgICAgICAgICBpZiAoZmFrZVNoaXAucGFyZW50Tm9kZS5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgbGV0IGJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgb3VyU2hpcCA9IGZha2VTaGlwLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZhbHVlSW5kZXg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3VyU2hpcC5uZXh0U2libGluZy5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbXlFbGVtID0gbXlFbGVtLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNob3dPdXRsaW5lUm90YXRlZChhLCBiLCBzaGlwT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGEsIGIpO1xuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20ocmVzdWx0KTtcblxuICAgICAgICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbG90XCIpICYmXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBmYWtlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZha2VFbGVtZW50KTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IE51bWJlcihmYWtlU2hpcC5jbGFzc0xpc3RbMF1bMV0pIC0gMTtcbiAgICAgICAgICAgIGlmIChmYWtlRWxlbWVudC5wYXJlbnROb2RlLmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgIGxldCBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbGV0IG91clNoaXAgPSBmYWtlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZhbHVlSW5kZXg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIG91clNoaXAgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgIG91clNoaXAucGFyZW50Tm9kZS5uZXh0U2libGluZyA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgb3VyU2hpcC5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkcmVuWzBdID09PSBudWxsXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgb3VyU2hpcC5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkcmVuW1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZmFrZUVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LlkpXG4gICAgICAgICAgICAgICAgICBdLmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NoaXAgPVxuICAgICAgICAgICAgICAgICAgb3VyU2hpcC5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkcmVuW1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZmFrZUVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LlkpXG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIG91clNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChib29sID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGZha2VFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFrZVNoaXApO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGZha2VFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNsb3RcIikpIHtcbiAgICAgICAgICAgIGxldCBteUVsZW0gPSBlbGVtZW50O1xuICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgc2hpcE9iamVjdC5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChteUVsZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTnVtYmVyKG15RWxlbS5kYXRhc2V0LlgpID09PSBzaGlwT2JqZWN0LmZ1bGxDb29yZHNbaWR4XS54ICYmXG4gICAgICAgICAgICAgICAgTnVtYmVyKG15RWxlbS5kYXRhc2V0LlkpID09PSBzaGlwT2JqZWN0LmZ1bGxDb29yZHNbaWR4XS55XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFrZVNoaXApO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoZmFrZVNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICAgICAgaWYgKGZha2VTaGlwLnBhcmVudE5vZGUuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG91clNoaXAgPSBmYWtlU2hpcC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWx1ZUluZGV4OyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91clNoaXAubmV4dFNpYmxpbmcuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChib29sID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGZha2VTaGlwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbXlFbGVtID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgbXlFbGVtLnBhcmVudE5vZGUgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICBteUVsZW0ucGFyZW50Tm9kZS5uZXh0U2libGluZyA9PT0gbnVsbFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBteUVsZW0gPVxuICAgICAgICAgICAgICAgIG15RWxlbS5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkcmVuW1xuICAgICAgICAgICAgICAgICAgTnVtYmVyKGVsZW1lbnQuZGF0YXNldC5ZKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2hpcC5vbm1vdXNlZG93biA9ICgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gbW92ZUF0KHBhZ2VYLCBwYWdlWSkge1xuICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmxlZnQgPSBgJHtwYWdlWCAtIHNoaXAub2Zmc2V0V2lkdGggLyAyfXB4YDtcbiAgICAgICAgICBmYWtlU2hpcC5zdHlsZS50b3AgPSBgJHtwYWdlWSAtIHNoaXAub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7cGFnZVggLSBzaGlwLm9mZnNldFdpZHRoIC8gMn1weGA7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgJHtwYWdlWSAtIHNoaXAub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG5cbiAgICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC52YWx1ZXMobmV3R2FtZS5ib2FyZHNbMF0uc2hpcHMpO1xuICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoc2hpcC5jbGFzc0xpc3RbMF1bMV0pIC0gMTtcbiAgICAgICAgICBpZiAoIXNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwicm90YXRlZFwiKSkge1xuICAgICAgICAgICAgc2hvd091dGxpbmVOb3RSb3RhdGVkKFxuICAgICAgICAgICAgICBwYWdlWCAtIGZha2VTaGlwLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgICAgICAgcGFnZVkgLSBmYWtlU2hpcC5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICBzaGlwc1t2YWx1ZUluZGV4XVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd091dGxpbmVSb3RhdGVkKFxuICAgICAgICAgICAgICBwYWdlWCAtIGZha2VTaGlwLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgICAgICAgcGFnZVkgLSBmYWtlU2hpcC5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICBzaGlwc1t2YWx1ZUluZGV4XVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwicm90YXRlZFwiKSkge1xuICAgICAgICAgIGxldCBteVNoaXAgPSBzaGlwLnBhcmVudE5vZGU7XG4gICAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCBOdW1iZXIoc2hpcC5jbGFzc0xpc3RbMF1bMV0pOyBzICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChteVNoaXApIHtcbiAgICAgICAgICAgICAgbXlTaGlwLmRhdGFzZXQuZW1wdHkgPSBcInRydWVcIjtcbiAgICAgICAgICAgICAgbXlTaGlwID0gbXlTaGlwLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInJvdGF0ZWRcIikpIHtcbiAgICAgICAgICBsZXQgbXlTaGlwID0gc2hpcC5wYXJlbnROb2RlO1xuICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKTsgcyArPSAxKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIG15U2hpcCA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICBteVNoaXAucGFyZW50Tm9kZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICBteVNoaXAucGFyZW50Tm9kZS5uZXh0U2libGluZyA9PT0gbnVsbFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgbXlTaGlwLmRhdGFzZXQuZW1wdHkgPSBcInRydWVcIjtcbiAgICAgICAgICAgIG15U2hpcCA9XG4gICAgICAgICAgICAgIG15U2hpcC5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkcmVuW1xuICAgICAgICAgICAgICAgIE51bWJlcihzaGlwLnBhcmVudE5vZGUuZGF0YXNldC5ZKVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxTbG90ID0gc2hpcC5wYXJlbnROb2RlO1xuICAgICAgICBzaGlwLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgICAgICBvbk1vdXNlTW92ZSA9IChldmVudDIpID0+IHtcbiAgICAgICAgICBzaGlwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgIHNoaXAuc3R5bGUuekluZGV4ID0gMTAwMDtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzaGlwKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmYWtlU2hpcCk7XG4gICAgICAgICAgZmFrZVNoaXAuc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgeWVsbG93XCI7XG5cbiAgICAgICAgICBtb3ZlQXQoZXZlbnQyLnBhZ2VYLCBldmVudDIucGFnZVkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuXG4gICAgICAgIGNvbnN0IG1vdXNlVXAgPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCB5ZWxsb3dcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICAgIGlmIChmYWtlU2hpcC5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJcIikuY29udGFpbnMoZmFrZVNoaXApKSB7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc2hpcCwgZmFrZVNoaXApO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBPYmplY3QudmFsdWVzKG5ld0dhbWUuYm9hcmRzWzBdLnNoaXBzKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gW1xuICAgICAgICAgICAgICAgICAgTnVtYmVyKHNoaXAucGFyZW50Tm9kZS5kYXRhc2V0LlgpLFxuICAgICAgICAgICAgICAgICAgTnVtYmVyKHNoaXAucGFyZW50Tm9kZS5kYXRhc2V0LlkpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgbmV3R2FtZS5ib2FyZHNbMF0ucGxhY2VTaGlwKHNoaXBzW3ZhbHVlSW5kZXhdLCBjb29yZHMpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMoZmFrZVNoaXApKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsb3QuYXBwZW5kQ2hpbGQoc2hpcCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC52YWx1ZXMobmV3R2FtZS5ib2FyZHNbMF0uc2hpcHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoc2hpcC5jbGFzc0xpc3RbMF1bMV0pIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBbXG4gICAgICAgICAgICAgICAgICBOdW1iZXIoaW5pdGlhbFNsb3QuZGF0YXNldC5YKSxcbiAgICAgICAgICAgICAgICAgIE51bWJlcihpbml0aWFsU2xvdC5kYXRhc2V0LlkpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgbmV3R2FtZS5ib2FyZHNbMF0ucGxhY2VTaGlwKHNoaXBzW3ZhbHVlSW5kZXhdLCBjb29yZHMpO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBhIGJ1ZyB3aGVuIHVzZXIgcmVsZWFzZSBzaGlwIG91dHNpZGUgYm9hcmRzXG4gICAgICAgICAgICAgIGluaXRpYWxTbG90LmFwcGVuZENoaWxkKHNoaXApO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LnZhbHVlcyhuZXdHYW1lLmJvYXJkc1swXS5zaGlwcyk7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoc2hpcC5jbGFzc0xpc3RbMF1bMV0pIC0gMTtcbiAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gW1xuICAgICAgICAgICAgICAgIE51bWJlcihpbml0aWFsU2xvdC5kYXRhc2V0LlgpLFxuICAgICAgICAgICAgICAgIE51bWJlcihpbml0aWFsU2xvdC5kYXRhc2V0LlkpLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBuZXdHYW1lLmJvYXJkc1swXS5wbGFjZVNoaXAoc2hpcHNbdmFsdWVJbmRleF0sIGNvb3Jkcyk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInJvdGF0ZWRcIikpIHtcbiAgICAgICAgICAgICAgbGV0IG15U2hpcDIgPSBzaGlwLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKTsgcyArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKG15U2hpcDIpIHtcbiAgICAgICAgICAgICAgICAgIG15U2hpcDIuZGF0YXNldC5lbXB0eSA9IFwiZmFsc2VcIjtcbiAgICAgICAgICAgICAgICAgIG15U2hpcDIgPSBteVNoaXAyLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInJvdGF0ZWRcIikpIHtcbiAgICAgICAgICAgICAgbGV0IG15U2hpcDIgPSBzaGlwLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKTsgcyArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgbXlTaGlwMiA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgbXlTaGlwMi5wYXJlbnROb2RlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICBteVNoaXAyLnBhcmVudE5vZGUubmV4dFNpYmxpbmcgPT09IG51bGxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBteVNoaXAyLmRhdGFzZXQuZW1wdHkgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgbXlTaGlwMiA9XG4gICAgICAgICAgICAgICAgICBteVNoaXAyLnBhcmVudE5vZGUubmV4dFNpYmxpbmcuY2hpbGRyZW5bXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihzaGlwLnBhcmVudE5vZGUuZGF0YXNldC5ZKVxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNoaXAub25tb3VzZXVwID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgc2hpcC5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICAgICAgbW91c2VVcCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZha2VTaGlwLm9ubW91c2V1cCA9ICgpID0+IHtcbiAgICAgICAgICBtb3VzZVVwKCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnJvdGF0ZVNoaXBzID0gKCkgPT4ge1xuICBjb25zdCByZWFsUGxheWVyU2hpcHMgPSBPYmplY3QudmFsdWVzKG5ld0dhbWUuYm9hcmRzWzBdLnNoaXBzKTtcbiAgLy8gY29uc3QgcmVhbENvbXB1dGVyU2hpcHMgPSBPYmplY3QudmFsdWVzKG5ld0dhbWUuYm9hcmRzWzFdLnNoaXBzKTtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllciAuc2hpcFwiKTtcbiAgLy8gY29uc3QgY29tcHV0ZXJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXIgLnNoaXBcIik7XG4gIGNvbnN0IHBsYXllcnNTaGlwcyA9IFtBcnJheS5mcm9tKHBsYXllclNoaXBzKV07XG4gIGNvbnN0IHJlYWxQbGF5ZXJzU2hpcHMgPSBbcmVhbFBsYXllclNoaXBzXTtcbiAgcGxheWVyc1NoaXBzLmZvckVhY2goKGFyciwgaSkgPT4ge1xuICAgIGFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZWxlbWVudC5jbGFzc0xpc3RbMF1bMV0gLSAxO1xuICAgICAgICBuZXdHYW1lLmJvYXJkc1tpXS5jaGFuZ2VBeGlzKHJlYWxQbGF5ZXJzU2hpcHNbaV1baW5kZXhdKTtcbiAgICAgICAgcHJpbnRCb2FyZHMoKTtcbiAgICAgICAgcHJpbnRTaGlwcyhuZXdHYW1lLmJvYXJkcyk7XG4gICAgICAgIGhpdHRpbmdTbG90cygpO1xuICAgICAgICByb3RhdGVTaGlwcygpO1xuICAgICAgICBkcmFnQW5kRHJvcCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbnJvdGF0ZVNoaXBzKCk7XG5kcmFnQW5kRHJvcCgpO1xuaGl0dGluZ1Nsb3RzKCk7XG4vLyBJbXBsZW1lbnQgc2hpcCBwbGFjZW1lbnQgbGluayBiZXR3ZWVuIGJhY2tlbmQgJiBmcm9udGVuZCByZWZhY3RvciBkcmFnIGFuZCBkcm9wIGFuZCBtb3ZlIGl0IHRvIGFub3RoZXIgbW9kdWxlP1xuLy8gYWRkIGNvbXB1dGVyIGJvYXJkIGludG8gdGhlIGVxdWF0aW9uLCBpbXBsZW1lbnQgc2hpcCBoaXR0aW5nLlxuLy8gaXMgd2hhdCBpJ20gZG9pbmcgd2l0aCB0aGUgZG9tIHJpZ2h0PyBJdCBmZWVscyBsaWtlIGknbSBkb2luZyB0b28gbXVjaCBvZiB2YWxpZGF0aW9ucyBoZXJlLlxuLy8gYWRkIGEgZnVuY3Rpb24gdG8gcmFuZG9taXplIHNoaXAgcGxhY2VtZW50IG9uIHRoZSBjb21wdXRlciBib2FyZCwgYWRkIHBsYXllciB2cyBwbGF5ZXJcbiIsImNvbnN0IHByaW50U2hpcHMgPSAoYm9hcmRzKSA9PiB7XG4gIGNvbnN0IGFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIgLnNsb3RcIik7XG4gIGNvbnN0IGJvYXJkRGF0YSA9IE9iamVjdC52YWx1ZXMoYm9hcmRzWzBdLnNoaXBzKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpLmZvckVhY2goKGVsZW0pID0+IGVsZW0ucmVtb3ZlKCkpO1xuXG4gIGJvYXJkRGF0YS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBsJHtzaGlwLmxlbmd0aH1gKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIGlmIChzaGlwLnJvdGF0ZWQgPT09IHRydWUpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJvdGF0ZWRcIik7XG4gICAgY29uc3QgZGF0YSA9IHsgeDogc2hpcC54LCB5OiBzaGlwLnkgfTtcbiAgICBhcnJheS5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBOdW1iZXIoc2xvdC5kYXRhc2V0LlgpID09PSBkYXRhLnggJiZcbiAgICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5ZKSA9PT0gZGF0YS55XG4gICAgICApIHtcbiAgICAgICAgYXJyYXlbaW5kZXhdLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgc2hpcC5mdWxsQ29vcmRzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5YKSA9PT0gY29vcmRzLnggJiZcbiAgICAgICAgICBOdW1iZXIoc2xvdC5kYXRhc2V0LlkpID09PSBjb29yZHMueVxuICAgICAgICApIHtcbiAgICAgICAgICBhcnJheVtpbmRleF0uZGF0YXNldC5lbXB0eSA9IFwiZmFsc2VcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgcHJpbnRCb2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpLmZvckVhY2goKGVsZW0pID0+IGVsZW0ucmVtb3ZlKCkpO1xuICBib2FyZFswXS5pbm5lckhUTUwgPSBcIlwiO1xuICBib2FyZFsxXS5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJzbG90XCIpO1xuICAgICAgICBzbG90LmRhdGFzZXQuWCA9IHg7XG4gICAgICAgIHNsb3QuZGF0YXNldC5ZID0geTtcbiAgICAgICAgc2xvdC5kYXRhc2V0LmVtcHR5ID0gXCJ0cnVlXCI7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChzbG90KTtcbiAgICAgIH1cbiAgICAgIGJvYXJkW2ldLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBwcmludEJvYXJkcywgcHJpbnRTaGlwcyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXJCb2FyZCkge1xuICAgIHRoaXMucmVtYWluaW5nU2xvdHMgPSBwbGF5ZXJCb2FyZC5mbGF0KEluZmluaXR5KTtcbiAgfVxuXG4gIHJhbmRvbWx5SGl0U2xvdCgpIHtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmVtYWluaW5nU2xvdHMubGVuZ3RoKTtcbiAgICBjb25zdCByYW5kb21Db29yZHMgPSB0aGlzLnJlbWFpbmluZ1Nsb3RzW2luZGV4XTtcbiAgICB0aGlzLnJlbWFpbmluZ1Nsb3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIFtyYW5kb21Db29yZHMueCwgcmFuZG9tQ29vcmRzLnldO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBDb21wdXRlciBmcm9tIFwiLi9jb21wdXRlclwiO1xuLy8gR2FtZSBoYXMgMiBnYW1lYm9hcmRzLCAxMCBzaGlwcywgMiBwbGF5ZXJzIGVhY2ggaGF2aW5nIGEgYm9hcmQgYW5kIDUgc2hpcHMsIGEgZ2FtZSBsb29wXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQodGhpcy5wbGF5ZXIpO1xuICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIocGxheWVyQm9hcmQuYm9hcmQpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKHRoaXMuY29tcHV0ZXIpO1xuICAgIHRoaXMuYm9hcmRzID0gW3BsYXllckJvYXJkLCBjb21wdXRlckJvYXJkXTtcbiAgfVxuXG4gIGdhbWVMb29wKCkge1xuICAgIHRoaXMuYm9hcmRzWzBdLnBsYWNlU2hpcHMoKTtcbiAgICB0aGlzLmJvYXJkc1sxXS5yYW5kb21seVBsYWNlU2hpcHMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgXTtcblxuICAgICgoKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLmZvckVhY2goKHJvdywgeCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoXywgeSkgPT4ge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBuZXcgTm9kZSh4LCB5KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgdGhpcy5zaGlwcyA9IHtcbiAgICAgIG9uZTogbmV3IFNoaXAoMSksXG4gICAgICB0d286IG5ldyBTaGlwKDIpLFxuICAgICAgdGhyZWU6IG5ldyBTaGlwKDMpLFxuICAgICAgZm91cjogbmV3IFNoaXAoNCksXG4gICAgICBmaXZlOiBuZXcgU2hpcCg1KSxcbiAgICB9O1xuICB9XG5cbiAgd2hvKCkge1xuICAgIHJldHVybiB0aGlzLm93bmVyO1xuICB9XG5cbiAgcmFuZG9tbHlQbGFjZVNoaXBzKCkge1xuICAgIGNvbnN0IGtleXMgPSBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCJdO1xuICAgIGNvbnN0IHNoaXBMaXN0ID0gdGhpcy5zaGlwcztcbiAgICBsZXQgYm9vbCA9IGZhbHNlO1xuICAgIGxldCBpID0gMDtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMub3duZXIucmFuZG9tbHlIaXRTbG90KCk7XG4gICAgICAgIGJvb2wgPSB0aGlzLnBsYWNlU2hpcChzaGlwTGlzdFtrZXldLCBjb29yZHMpO1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY29uc3QgYm9hcmQgPSB0aGlzLmJvYXJkLmZsYXQoSW5maW5pdHkpO1xuICAgIC8vIGxldCBib29sMiA9IHRydWU7XG4gICAgLy8gYm9hcmQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIC8vICAgaWYgKG5vZGUuc2hpcCAhPT0gbnVsbCAmJiBib29sMiA9PT0gdHJ1ZSkge1xuICAgIC8vICAgICBjb25zdCBpbmRleCA9IG5vZGUuc2hpcC5sZW5ndGggLSAxO1xuICAgIC8vICAgICBjb25zdCBzaGlwID0gc2hpcExpc3Rba2V5c1tpbmRleF1dO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhzaGlwKTtcbiAgICAvLyAgICAgdGhpcy5jaGFuZ2VBeGlzKHNoaXApO1xuICAgIC8vICAgICBib29sMiA9IGZhbHNlO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIHRoaXMucHJldHR5UHJpbnRCb2FyZCgpO1xuICB9XG5cbiAgcGxhY2VTaGlwcygpIHtcbiAgICBjb25zdCBjb29yZHMgPSBbXG4gICAgICBbNCwgNF0sXG4gICAgICBbMywgM10sXG4gICAgICBbMiwgMl0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMCwgMF0sXG4gICAgXTtcblxuICAgIGNvbnN0IGtleXMgPSBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCJdO1xuICAgIGNvbnN0IHNoaXBMaXN0ID0gdGhpcy5zaGlwcztcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXBMaXN0W2tleV0sIGNvb3Jkc1tpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuYm9hcmRbeF1beV07XG4gICAgbGV0IGJvb2w7XG4gICAgaWYgKG5vZGUuc2hpcCA9PT0gbnVsbCAmJiBub2RlLmJvbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIG5vZGUuYm9tYmVkID0gdHJ1ZTtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuc2hpcCAhPT0gbnVsbCAmJiBub2RlLmJvbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIG5vZGUuYm9tYmVkID0gdHJ1ZTtcbiAgICAgIG5vZGUuc2hpcC5oaXQoKTtcbiAgICAgIGJvb2wgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfVxuXG4gIGlzR2FtZUxvc3QoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuc2hpcHMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBhcnJheS5wdXNoKHZhbHVlLnN1bmspO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYm9vbCA9IGFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIGlmIChlbGVtZW50ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBib29sO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIGN1cnJlbnRDb29yZHMpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBjdXJyZW50Q29vcmRzO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgIGxldCBvY2N1cGllZCA9IGZhbHNlO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgLy8gcmVtb3ZlIHNoaXAgZnJvbSBib2FyZCBpZiBpdCBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IHNoaXBDb29yZHMgPSBzaGlwLmZ1bGxDb29yZHM7XG4gICAgc2hpcENvb3Jkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLmJvYXJkW2VsZW1lbnQueF1bZWxlbWVudC55XS5zaGlwID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGlmIChzaGlwLnJvdGF0ZWQgPT09IGZhbHNlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh5ICsgbGVuZ3RoIC0gMSA+IDkgfHwgeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDApIHtcbiAgICAgICAgICBvY2N1cGllZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt4XVt5ICsgaV0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldLnNoaXAgPSBzaGlwO1xuICAgICAgICAgIGFyci5wdXNoKHsgeCwgeTogeSArIGkgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwLnJvdGF0ZWQgPT09IHRydWUpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHggKyBsZW5ndGggLSAxID4gOSB8fCB4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCkge1xuICAgICAgICAgIG9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3ggKyBpXVt5XS5zaGlwID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgYXJyLnB1c2goeyB4OiB4ICsgaSwgeSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY2N1cGllZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5zaGlwcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zaGlwc1trZXldLnggPSB4O1xuICAgICAgICB0aGlzLnNoaXBzW2tleV0ueSA9IHk7XG4gICAgICAgIHRoaXMuc2hpcHNba2V5XS5mdWxsQ29vcmRzID0gYXJyO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChvY2N1cGllZCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjaGFuZ2VBeGlzKHNoaXApIHtcbiAgICBjb25zdCB7IHgsIHksIGxlbmd0aCB9ID0gc2hpcDtcbiAgICBsZXQgb2NjdXBpZWQgPSBmYWxzZTtcbiAgICBjb25zdCBhcnIgPSBbeyB4LCB5IH1dO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgeCArIGxlbmd0aCAtIDEgPD0gOSAmJlxuICAgICAgICBzaGlwLnJvdGF0ZWQgPT09IGZhbHNlICYmXG4gICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldLnNoaXAgPT09IG51bGxcbiAgICAgICkge1xuICAgICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XS5zaGlwID0gc2hpcDtcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0uc2hpcCA9IG51bGw7XG4gICAgICAgIGFyci5wdXNoKHsgeDogeCArIGksIHkgfSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB5ICsgbGVuZ3RoIC0gMSA8PSA5ICYmXG4gICAgICAgIHNoaXAucm90YXRlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXS5zaGlwID09PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0uc2hpcCA9IHNoaXA7XG4gICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldLnNoaXAgPSBudWxsO1xuICAgICAgICBhcnIucHVzaCh7IHgsIHk6IHkgKyBpIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob2NjdXBpZWQgPT09IHRydWUpIHJldHVybiBmYWxzZTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc2hpcHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2hpcHNba2V5XS5yb3RhdGVkID0gIXNoaXAucm90YXRlZDtcbiAgICAgICAgdGhpcy5zaGlwc1trZXldLmZ1bGxDb29yZHMgPSBhcnI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcmV0dHlQcmludEJvYXJkKCkge1xuICAgIGNvbnN0IG15Qm9hcmQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuYm9hcmQpKTtcblxuICAgIG15Qm9hcmQuZm9yRWFjaCgocm93LCB4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sLCB5KSA9PiB7XG4gICAgICAgIGlmIChjb2wuc2hpcCkge1xuICAgICAgICAgIGlmIChjb2wuc2hpcC5yb3RhdGVkKSB7XG4gICAgICAgICAgICBteUJvYXJkW3hdW3ldID0gYF4ke2NvbC5zaGlwLmxlbmd0aH1gO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sLnNoaXAucm90YXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG15Qm9hcmRbeF1beV0gPSBgPCR7Y29sLnNoaXAubGVuZ3RofWA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG15Qm9hcmRbeF1beV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLnRhYmxlKG15Qm9hcmQpO1xuICAgIGNvbnNvbGUudGFibGUodGhpcy5ib2FyZCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gICAgdGhpcy5ib21iZWQgPSBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoaWQgPSAwKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuY3VycmVudE1vdXNlQ29vcmRzID0gbnVsbDtcbiAgfVxuXG4gIGdldENvb3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TW91c2VDb29yZHM7XG4gIH1cblxuICBzZXRDb29yZHMoY29vcmRzKSB7XG4gICAgdGhpcy5jdXJyZW50TW91c2VDb29yZHMgPSBjb29yZHM7XG4gIH1cbn1cbiIsIi8vIEEgc2hpcCBoYXMgYSBsZW5ndGgsIHRyYWNrcyBudW1iZXIgcmVjZWl2ZWQgaGl0cywgYSBzdW5rIGJvb2xlYW5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5yb3RhdGVkID0gZmFsc2U7XG4gICAgdGhpcy54ID0gbnVsbDtcbiAgICB0aGlzLnkgPSBudWxsO1xuICAgIHRoaXMuZnVsbENvb3JkcyA9IFtdO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5zdW5rID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvRE9NL2NvbnRyb2xsZXJcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==