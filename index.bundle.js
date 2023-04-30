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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n}\n\n.content {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.board {\n  min-width: 500px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.row {\n  display: flex;\n  height: 50px;\n  width: 500px;\n}\n\n.gameover-card {\n  position: absolute;\n  z-index: 1111;\n  font-size: 3rem;\n  background: white;\n}\n\n.slot {\n  border: 1px solid rgba(16, 116, 146, 0.548); \n  display: flex;\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n\n.slot.sunk {\n  background-color: red;  \n}\n\n.slot.hit::after {\n  content: \"\";\n  border-radius: 50%;\n  border: 1px solid black;\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  background: black;\n  transform: translate(45%, 50%);}\n\n.slot.hit-ship::before,\n.slot.hit-ship::after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 4px;\n  background-color: rgb(255, 0, 0);\n  translate: -0% 555%;\n}\n\n.slot.hit-ship::before {\n    transform: rotate(45deg);\n}\n\n.slot.hit-ship::after {\n    transform: rotate(-45deg);\n}\n\n.ship {\n  height: 49px;\n  border: 3px solid #003cff;\n  cursor: move!important;\n  position: absolute!important;\n  z-index: 1000;\n  background: #003cff41;\n}\n\n.computer .ship {\n  cursor: auto!important;\n}\n\n.l5 {\n  width: calc(49.5px * 5);\n}\n\n.l5.rotated {\n  width: 49px;\n  height: calc(49.5px * 5);\n}\n\n.l4 {\n  width: calc(49.5px * 4);\n}\n\n.l4.rotated {\n  width: 49px;\n  height: calc(49.5px * 4);\n}\n\n.l3 {\n  width: calc(49.5px * 3);\n}\n\n.l3.rotated {\n  width: 49px;\n  height: calc(49.5px * 3);\n}\n\n.l2 {\n  width: calc(49.5px * 2);\n}\n\n.l2.rotated {\n  width: 49px;\n  height: calc(49.5px * 2);\n}\n\n.l1 {\n  width: 49px\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,2CAA2C;EAC3C,aAAa;EACb,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,8BAA8B,CAAC;;AAEjC;;EAEE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,WAAW;EACX,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,sBAAsB;EACtB,4BAA4B;EAC5B,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n}\n\n.content {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.board {\n  min-width: 500px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.row {\n  display: flex;\n  height: 50px;\n  width: 500px;\n}\n\n.gameover-card {\n  position: absolute;\n  z-index: 1111;\n  font-size: 3rem;\n  background: white;\n}\n\n.slot {\n  border: 1px solid rgba(16, 116, 146, 0.548); \n  display: flex;\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n\n.slot.sunk {\n  background-color: red;  \n}\n\n.slot.hit::after {\n  content: \"\";\n  border-radius: 50%;\n  border: 1px solid black;\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  background: black;\n  transform: translate(45%, 50%);}\n\n.slot.hit-ship::before,\n.slot.hit-ship::after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 4px;\n  background-color: rgb(255, 0, 0);\n  translate: -0% 555%;\n}\n\n.slot.hit-ship::before {\n    transform: rotate(45deg);\n}\n\n.slot.hit-ship::after {\n    transform: rotate(-45deg);\n}\n\n.ship {\n  height: 49px;\n  border: 3px solid #003cff;\n  cursor: move!important;\n  position: absolute!important;\n  z-index: 1000;\n  background: #003cff41;\n}\n\n.computer .ship {\n  cursor: auto!important;\n}\n\n.l5 {\n  width: calc(49.5px * 5);\n}\n\n.l5.rotated {\n  width: 49px;\n  height: calc(49.5px * 5);\n}\n\n.l4 {\n  width: calc(49.5px * 4);\n}\n\n.l4.rotated {\n  width: 49px;\n  height: calc(49.5px * 4);\n}\n\n.l3 {\n  width: calc(49.5px * 3);\n}\n\n.l3.rotated {\n  width: 49px;\n  height: calc(49.5px * 3);\n}\n\n.l2 {\n  width: calc(49.5px * 2);\n}\n\n.l2.rotated {\n  width: 49px;\n  height: calc(49.5px * 2);\n}\n\n.l1 {\n  width: 49px\n}"],"sourceRoot":""}]);
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
          computerSlots[index].classList.add("hit");
        } else {
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

        if (bool === false && !newGame.boards[1].isGameLost()) {
          hitPlayerSlot();
        } else if (!newGame.boards[1].isGameLost()) {
          hitPlayerSlot();
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
        onMouseMove = (event2) => {
          ship.style.border = "none";
          ship.style.position = "absolute";
          ship.style.zIndex = 1000;
          ship.style.background = "none";
          fakeShip.style.background = "none";
          document.body.append(ship);
          document.body.append(fakeShip);
          fakeShip.style.border = "3px solid red";

          moveAt(event2.pageX, event2.pageY);
        };

        document.addEventListener("mousemove", onMouseMove);

        const mouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          ship.style.border = "3px solid #003cff";
          ship.style.background = "#003cff41";
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
  const playerShips = document.querySelectorAll(".player .ship");
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

    const board = this.board.flat(Infinity);
    let bool2 = true;
    board.forEach((node) => {
      if (node.ship !== null && bool2 === true) {
        const index = node.ship.length - 1;
        const ship = shipList[keys[index]];
        console.log(ship);
        this.changeAxis(ship);
        bool2 = false;
      }
    });
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
    const ifOccupied = ship.fullCoords;
    const shipCoords = ship.fullCoords;
    const toRotate = [];
    console.log(ship.fullCoords);

    shipCoords.forEach((element) => {
      this.board[element.x][element.y].ship = null;
    });
    this.board[x][y].ship = ship;

    for (let i = 1; i < length; i += 1) {
      if (
        x + length - 1 <= 9 &&
        ship.rotated === false &&
        this.board[x + i][y].ship === null
      ) {
        toRotate.push(this.board[x + i][y]);
        this.board[x][y + i].ship = null;
        arr.push({ x: x + i, y });
      } else if (
        y + length - 1 <= 9 &&
        ship.rotated === true &&
        this.board[x][y + i].ship === null
      ) {
        toRotate.push(this.board[x][y + i]);
        this.board[x + i][y].ship = null;
        arr.push({ x, y: y + i });
      } else {
        occupied = true;
        ifOccupied.forEach((element) => {
          this.board[element.x][element.y].ship = ship;
        });
        break;
      }
    }

    if (occupied === true) {
      Object.entries(this.ships).forEach(([key, value]) => {
        if (value.length === length) {
          this.ships[key].fullCoords = shipCoords;
          this.ships[key].x = x;
          this.ships[key].y = y;
        }
      });
    }

    if (occupied === true) return false;

    toRotate.forEach((_, index) => {
      toRotate[index].ship = ship;
    });

    Object.entries(this.ships).forEach(([key, value]) => {
      if (value.length === length) {
        this.ships[key].rotated = !ship.rotated;
        this.ships[key].fullCoords = arr;
        this.ships[key].x = x;
        this.ships[key].y = y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS9pbml0aWFsaXplR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NL3ByaW50Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL25vZGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5nYW1lb3Zlci1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDExMTE7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLnNsb3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMTE2LCAxNDYsIDAuNTQ4KTsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zbG90LnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAgXFxufVxcblxcbi5zbG90LmhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA1MCUpO31cXG5cXG4uc2xvdC5oaXQtc2hpcDo6YmVmb3JlLFxcbi5zbG90LmhpdC1zaGlwOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gIHRyYW5zbGF0ZTogLTAlIDU1NSU7XFxufVxcblxcbi5zbG90LmhpdC1zaGlwOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5zbG90LmhpdC1zaGlwOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5zaGlwIHtcXG4gIGhlaWdodDogNDlweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDNjZmY7XFxuICBjdXJzb3I6IG1vdmUhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBiYWNrZ3JvdW5kOiAjMDAzY2ZmNDE7XFxufVxcblxcbi5jb21wdXRlciAuc2hpcCB7XFxuICBjdXJzb3I6IGF1dG8haW1wb3J0YW50O1xcbn1cXG5cXG4ubDUge1xcbiAgd2lkdGg6IGNhbGMoNDkuNXB4ICogNSk7XFxufVxcblxcbi5sNS5yb3RhdGVkIHtcXG4gIHdpZHRoOiA0OXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjVweCAqIDUpO1xcbn1cXG5cXG4ubDQge1xcbiAgd2lkdGg6IGNhbGMoNDkuNXB4ICogNCk7XFxufVxcblxcbi5sNC5yb3RhdGVkIHtcXG4gIHdpZHRoOiA0OXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjVweCAqIDQpO1xcbn1cXG5cXG4ubDMge1xcbiAgd2lkdGg6IGNhbGMoNDkuNXB4ICogMyk7XFxufVxcblxcbi5sMy5yb3RhdGVkIHtcXG4gIHdpZHRoOiA0OXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjVweCAqIDMpO1xcbn1cXG5cXG4ubDIge1xcbiAgd2lkdGg6IGNhbGMoNDkuNXB4ICogMik7XFxufVxcblxcbi5sMi5yb3RhdGVkIHtcXG4gIHdpZHRoOiA0OXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjVweCAqIDIpO1xcbn1cXG5cXG4ubDEge1xcbiAgd2lkdGg6IDQ5cHhcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw4QkFBOEIsQ0FBQzs7QUFFakM7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uZ2FtZW92ZXItY2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMTExO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5zbG90IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDExNiwgMTQ2LCAwLjU0OCk7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2xvdC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDsgIFxcbn1cXG5cXG4uc2xvdC5oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQ1JSwgNTAlKTt9XFxuXFxuLnNsb3QuaGl0LXNoaXA6OmJlZm9yZSxcXG4uc2xvdC5oaXQtc2hpcDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICB0cmFuc2xhdGU6IC0wJSA1NTUlO1xcbn1cXG5cXG4uc2xvdC5oaXQtc2hpcDo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uc2xvdC5oaXQtc2hpcDo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBoZWlnaHQ6IDQ5cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDAzY2ZmO1xcbiAgY3Vyc29yOiBtb3ZlIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZDogIzAwM2NmZjQxO1xcbn1cXG5cXG4uY29tcHV0ZXIgLnNoaXAge1xcbiAgY3Vyc29yOiBhdXRvIWltcG9ydGFudDtcXG59XFxuXFxuLmw1IHtcXG4gIHdpZHRoOiBjYWxjKDQ5LjVweCAqIDUpO1xcbn1cXG5cXG4ubDUucm90YXRlZCB7XFxuICB3aWR0aDogNDlweDtcXG4gIGhlaWdodDogY2FsYyg0OS41cHggKiA1KTtcXG59XFxuXFxuLmw0IHtcXG4gIHdpZHRoOiBjYWxjKDQ5LjVweCAqIDQpO1xcbn1cXG5cXG4ubDQucm90YXRlZCB7XFxuICB3aWR0aDogNDlweDtcXG4gIGhlaWdodDogY2FsYyg0OS41cHggKiA0KTtcXG59XFxuXFxuLmwzIHtcXG4gIHdpZHRoOiBjYWxjKDQ5LjVweCAqIDMpO1xcbn1cXG5cXG4ubDMucm90YXRlZCB7XFxuICB3aWR0aDogNDlweDtcXG4gIGhlaWdodDogY2FsYyg0OS41cHggKiAzKTtcXG59XFxuXFxuLmwyIHtcXG4gIHdpZHRoOiBjYWxjKDQ5LjVweCAqIDIpO1xcbn1cXG5cXG4ubDIucm90YXRlZCB7XFxuICB3aWR0aDogNDlweDtcXG4gIGhlaWdodDogY2FsYyg0OS41cHggKiAyKTtcXG59XFxuXFxuLmwxIHtcXG4gIHdpZHRoOiA0OXB4XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2luaXRpYWxpemVHYW1lXCI7XG4iLCJpbXBvcnQgeyBwcmludEJvYXJkcywgcHJpbnRTaGlwcyB9IGZyb20gXCIuL3ByaW50Qm9hcmRcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9nYW1lXCI7XG5cbmxldCBuZXdHYW1lID0gbmV3IEdhbWUoKTtcbm5ld0dhbWUuZ2FtZUxvb3AoKTtcbnByaW50Qm9hcmRzKCk7XG5wcmludFNoaXBzKG5ld0dhbWUuYm9hcmRzKTtcbmxldCByb3RhdGVTaGlwcztcbmxldCBkcmFnQW5kRHJvcDtcbmxldCBoaXR0aW5nU2xvdHM7XG5mdW5jdGlvbiBnYW1lT3ZlckNhcmQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJnYW1lb3Zlci1jYXJkXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkdhbWUgb3ZlclwiO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcIlJlcGxheVwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJSZXBsYXlcIjtcbiAgZWxlbWVudC5hcHBlbmQodGl0bGUsIGJ0bik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIGVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5ld0dhbWUgPSBuZXcgR2FtZSgpO1xuICAgIG5ld0dhbWUuZ2FtZUxvb3AoKTtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLnBsYXllclwiKTtcbiAgICBwbGF5ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIjtcblxuICAgIHByaW50Qm9hcmRzKCk7XG4gICAgcHJpbnRTaGlwcyhuZXdHYW1lLmJvYXJkcyk7XG4gICAgcm90YXRlU2hpcHMoKTtcbiAgICBkcmFnQW5kRHJvcCgpO1xuICAgIGhpdHRpbmdTbG90cygpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGlzU3VuayhzaGlwLCBwbGF5ZXIpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbCR7c2hpcC5sZW5ndGh9YCk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gIGlmIChzaGlwLnJvdGF0ZWQgPT09IHRydWUpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJvdGF0ZWRcIik7XG5cbiAgY29uc3Qgbm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwbGF5ZXJ9IC5zbG90YCk7XG4gIGNvbnN0IGNvbXB1dGVyU2xvdHMgPSBBcnJheS5mcm9tKG5vZGVMaXN0KTtcbiAgY29tcHV0ZXJTbG90cy5mb3JFYWNoKChzbG90KSA9PiB7XG4gICAgaWYgKFxuICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5YKSA9PT0gc2hpcC54ICYmXG4gICAgICBOdW1iZXIoc2xvdC5kYXRhc2V0LlkpID09PSBzaGlwLnlcbiAgICApIHtcbiAgICAgIHNsb3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaGl0UGxheWVyU2xvdCgpIHtcbiAgY29uc3Qgbm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllciAuc2xvdFwiKTtcbiAgY29uc3QgcGxheWVyU2xvdHMgPSBBcnJheS5mcm9tKG5vZGVMaXN0KTtcbiAgY29uc3QgW3gsIHldID0gbmV3R2FtZS5ib2FyZHNbMV0ub3duZXIucmFuZG9tbHlIaXRTbG90KCk7XG4gIGNvbnN0IGJvb2wgPSBuZXdHYW1lLmJvYXJkc1swXS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICBwbGF5ZXJTbG90cy5mb3JFYWNoKChzbG90LCBpZHgpID0+IHtcbiAgICBpZiAoXG4gICAgICAhc2xvdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikgJiZcbiAgICAgICFzbG90LmNsYXNzTGlzdC5jb250YWlucyhcImhpdC1zaGlwXCIpXG4gICAgKSB7XG4gICAgICBjb25zdCB4SHRtbCA9IE51bWJlcihzbG90LmRhdGFzZXQuWCk7XG4gICAgICBjb25zdCB5SHRtbCA9IE51bWJlcihzbG90LmRhdGFzZXQuWSk7XG4gICAgICBpZiAoeEh0bWwgPT09IHggJiYgeUh0bWwgPT09IHkpIHtcbiAgICAgICAgaWYgKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcGxheWVyU2xvdHNbaWR4XS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllclNsb3RzW2lkeF0uY2xhc3NMaXN0LmFkZChcImhpdC1zaGlwXCIpO1xuXG4gICAgICAgICAgY29uc3QgbXlTaGlwID0gbmV3R2FtZS5ib2FyZHNbMF0uYm9hcmRbeF1beV0uc2hpcDtcbiAgICAgICAgICBpZiAobXlTaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobXlTaGlwLnN1bmsgPT09IHRydWUpIGlzU3VuayhteVNoaXAsIFwicGxheWVyXCIpO1xuICAgICAgICAgICAgaWYgKG5ld0dhbWUuYm9hcmRzWzBdLmlzR2FtZUxvc3QoKSkge1xuICAgICAgICAgICAgICBhbGxTdW5rKCk7XG4gICAgICAgICAgICAgIGdhbWVPdmVyQ2FyZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmhpdHRpbmdTbG90cyA9ICgpID0+IHtcbiAgY29uc3Qgbm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyIC5zbG90XCIpO1xuICBjb25zdCBjb21wdXRlclNsb3RzID0gQXJyYXkuZnJvbShub2RlTGlzdCk7XG5cbiAgY29tcHV0ZXJTbG90cy5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xuICAgIHNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIXNsb3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpICYmXG4gICAgICAgICFzbG90LmNsYXNzTGlzdC5jb250YWlucyhcImhpdC1zaGlwXCIpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgeCA9IE51bWJlcihzbG90LmRhdGFzZXQuWCk7XG4gICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoc2xvdC5kYXRhc2V0LlkpO1xuICAgICAgICBjb25zdCBib29sID0gbmV3R2FtZS5ib2FyZHNbMV0ucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLnBsYXllclwiKTtcbiAgICAgICAgcGxheWVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gICAgICAgIGlmIChib29sID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvbXB1dGVyU2xvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcHV0ZXJTbG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImhpdC1zaGlwXCIpO1xuXG4gICAgICAgICAgY29uc3QgbXlTaGlwID0gbmV3R2FtZS5ib2FyZHNbMV0uYm9hcmRbeF1beV0uc2hpcDtcbiAgICAgICAgICBpZiAobXlTaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobXlTaGlwLnN1bmsgPT09IHRydWUpIGlzU3VuayhteVNoaXAsIFwiY29tcHV0ZXJcIik7XG4gICAgICAgICAgICBpZiAobmV3R2FtZS5ib2FyZHNbMV0uaXNHYW1lTG9zdCgpKSB7XG4gICAgICAgICAgICAgIGFsbFN1bmsoKTtcbiAgICAgICAgICAgICAgZ2FtZU92ZXJDYXJkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvb2wgPT09IGZhbHNlICYmICFuZXdHYW1lLmJvYXJkc1sxXS5pc0dhbWVMb3N0KCkpIHtcbiAgICAgICAgICBoaXRQbGF5ZXJTbG90KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5ld0dhbWUuYm9hcmRzWzFdLmlzR2FtZUxvc3QoKSkge1xuICAgICAgICAgIGhpdFBsYXllclNsb3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmRyYWdBbmREcm9wID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyIC5zaGlwXCIpO1xuICAvLyBjb25zdCBjb21wdXRlclNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlciAuc2hpcFwiKTtcbiAgY29uc3QgcGxheWVyc1NoaXBzID0gW0FycmF5LmZyb20ocGxheWVyU2hpcHMpXTtcblxuICBwbGF5ZXJzU2hpcHMuZm9yRWFjaCgoYXJyLCBpbmRleCkgPT4ge1xuICAgIGFyci5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICBhcnJbaV0uc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuXG4gICAgICBjb25zdCBzaGlwID0gcGxheWVyc1NoaXBzW2luZGV4XVtpXTtcbiAgICAgIGNvbnN0IGZha2VTaGlwID0gc2hpcC5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgZmFrZVNoaXAuY2xhc3NMaXN0LmFkZChcImNsb25lXCIpO1xuICAgICAgc2hpcC5vbmRyYWdzdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH07XG5cbiAgICAgIGZha2VTaGlwLm9uZHJhZ3N0YXJ0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfTtcblxuICAgICAgbGV0IG9uTW91c2VNb3ZlO1xuXG4gICAgICBmdW5jdGlvbiBzaG93T3V0bGluZU5vdFJvdGF0ZWQoYSwgYiwgc2hpcE9iamVjdCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChhLCBiKTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKHJlc3VsdCk7XG5cbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xvdFwiKSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgZmFrZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmYWtlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoZmFrZVNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICBpZiAoZmFrZUVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICBsZXQgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgIGxldCBvdXJTaGlwID0gZmFrZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWx1ZUluZGV4OyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAob3VyU2hpcCA9PT0gbnVsbCB8fCBvdXJTaGlwLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG91clNoaXAubmV4dFNpYmxpbmcuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3VyU2hpcCA9IG91clNoaXAubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFrZVNoaXApO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNsb3RcIikpIHtcbiAgICAgICAgICAgIGxldCBteUVsZW0gPSBlbGVtZW50O1xuICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgc2hpcE9iamVjdC5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChteUVsZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTnVtYmVyKG15RWxlbS5kYXRhc2V0LlgpID09PSBzaGlwT2JqZWN0LmZ1bGxDb29yZHNbaWR4XS54ICYmXG4gICAgICAgICAgICAgICAgTnVtYmVyKG15RWxlbS5kYXRhc2V0LlkpID09PSBzaGlwT2JqZWN0LmZ1bGxDb29yZHNbaWR4XS55XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFrZVNoaXApO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoZmFrZVNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICAgICAgaWYgKGZha2VTaGlwLnBhcmVudE5vZGUuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG91clNoaXAgPSBmYWtlU2hpcC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWx1ZUluZGV4OyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91clNoaXAubmV4dFNpYmxpbmcuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChib29sID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG15RWxlbSA9IG15RWxlbS5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzaG93T3V0bGluZVJvdGF0ZWQoYSwgYiwgc2hpcE9iamVjdCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChhLCBiKTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKHJlc3VsdCk7XG5cbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xvdFwiKSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgZmFrZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmYWtlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoZmFrZVNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICBpZiAoZmFrZUVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICBsZXQgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgIGxldCBvdXJTaGlwID0gZmFrZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWx1ZUluZGV4OyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBvdXJTaGlwID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICBvdXJTaGlwLnBhcmVudE5vZGUubmV4dFNpYmxpbmcgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgIG91clNoaXAucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZHJlblswXSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgIG91clNoaXAucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZHJlbltcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZha2VFbGVtZW50LnBhcmVudE5vZGUuZGF0YXNldC5ZKVxuICAgICAgICAgICAgICAgICAgXS5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTaGlwID1cbiAgICAgICAgICAgICAgICAgIG91clNoaXAucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZHJlbltcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZha2VFbGVtZW50LnBhcmVudE5vZGUuZGF0YXNldC5ZKVxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBvdXJTaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoYm9vbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBmYWtlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZha2VTaGlwKTtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCBncmVlblwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBmYWtlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbG90XCIpKSB7XG4gICAgICAgICAgICBsZXQgbXlFbGVtID0gZWxlbWVudDtcbiAgICAgICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHNoaXBPYmplY3QubGVuZ3RoOyBpZHggKz0gMSkge1xuICAgICAgICAgICAgICBpZiAobXlFbGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIE51bWJlcihteUVsZW0uZGF0YXNldC5YKSA9PT0gc2hpcE9iamVjdC5mdWxsQ29vcmRzW2lkeF0ueCAmJlxuICAgICAgICAgICAgICAgIE51bWJlcihteUVsZW0uZGF0YXNldC5ZKSA9PT0gc2hpcE9iamVjdC5mdWxsQ29vcmRzW2lkeF0ueVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZha2VTaGlwKTtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCBncmVlblwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKGZha2VTaGlwLmNsYXNzTGlzdFswXVsxXSkgLSAxO1xuICAgICAgICAgICAgICAgIGlmIChmYWtlU2hpcC5wYXJlbnROb2RlLmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjb25zdCBvdXJTaGlwID0gZmFrZVNoaXAucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsdWVJbmRleDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXJTaGlwLm5leHRTaWJsaW5nLmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYm9vbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChmYWtlU2hpcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG15RWxlbSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIG15RWxlbS5wYXJlbnROb2RlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgbXlFbGVtLnBhcmVudE5vZGUubmV4dFNpYmxpbmcgPT09IG51bGxcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbXlFbGVtID1cbiAgICAgICAgICAgICAgICBteUVsZW0ucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZHJlbltcbiAgICAgICAgICAgICAgICAgIE51bWJlcihlbGVtZW50LmRhdGFzZXQuWSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNoaXAub25tb3VzZWRvd24gPSAoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIG1vdmVBdChwYWdlWCwgcGFnZVkpIHtcbiAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5sZWZ0ID0gYCR7cGFnZVggLSBzaGlwLm9mZnNldFdpZHRoIC8gMn1weGA7XG4gICAgICAgICAgZmFrZVNoaXAuc3R5bGUudG9wID0gYCR7cGFnZVkgLSBzaGlwLm9mZnNldEhlaWdodCAvIDJ9cHhgO1xuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3BhZ2VYIC0gc2hpcC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuICAgICAgICAgIHNoaXAuc3R5bGUudG9wID0gYCR7cGFnZVkgLSBzaGlwLm9mZnNldEhlaWdodCAvIDJ9cHhgO1xuXG4gICAgICAgICAgY29uc3Qgc2hpcHMgPSBPYmplY3QudmFsdWVzKG5ld0dhbWUuYm9hcmRzWzBdLnNoaXBzKTtcbiAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInJvdGF0ZWRcIikpIHtcbiAgICAgICAgICAgIHNob3dPdXRsaW5lTm90Um90YXRlZChcbiAgICAgICAgICAgICAgcGFnZVggLSBmYWtlU2hpcC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgICAgICAgIHBhZ2VZIC0gZmFrZVNoaXAub2Zmc2V0SGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgc2hpcHNbdmFsdWVJbmRleF1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dPdXRsaW5lUm90YXRlZChcbiAgICAgICAgICAgICAgcGFnZVggLSBmYWtlU2hpcC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgICAgICAgIHBhZ2VZIC0gZmFrZVNoaXAub2Zmc2V0SGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgc2hpcHNbdmFsdWVJbmRleF1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInJvdGF0ZWRcIikpIHtcbiAgICAgICAgICBsZXQgbXlTaGlwID0gc2hpcC5wYXJlbnROb2RlO1xuICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKTsgcyArPSAxKSB7XG4gICAgICAgICAgICBpZiAobXlTaGlwKSB7XG4gICAgICAgICAgICAgIG15U2hpcC5kYXRhc2V0LmVtcHR5ID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgIG15U2hpcCA9IG15U2hpcC5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJyb3RhdGVkXCIpKSB7XG4gICAgICAgICAgbGV0IG15U2hpcCA9IHNoaXAucGFyZW50Tm9kZTtcbiAgICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IE51bWJlcihzaGlwLmNsYXNzTGlzdFswXVsxXSk7IHMgKz0gMSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBteVNoaXAgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgbXlTaGlwLnBhcmVudE5vZGUgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgbXlTaGlwLnBhcmVudE5vZGUubmV4dFNpYmxpbmcgPT09IG51bGxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIG15U2hpcC5kYXRhc2V0LmVtcHR5ID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICBteVNoaXAgPVxuICAgICAgICAgICAgICBteVNoaXAucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZHJlbltcbiAgICAgICAgICAgICAgICBOdW1iZXIoc2hpcC5wYXJlbnROb2RlLmRhdGFzZXQuWSlcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbml0aWFsU2xvdCA9IHNoaXAucGFyZW50Tm9kZTtcbiAgICAgICAgb25Nb3VzZU1vdmUgPSAoZXZlbnQyKSA9PiB7XG4gICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgIHNoaXAuc3R5bGUuekluZGV4ID0gMTAwMDtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcbiAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc2hpcCk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZmFrZVNoaXApO1xuICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuXG4gICAgICAgICAgbW92ZUF0KGV2ZW50Mi5wYWdlWCwgZXZlbnQyLnBhZ2VZKTtcbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcblxuICAgICAgICBjb25zdCBtb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgIzAwM2NmZlwiO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzAwM2NmZjQxXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgICBpZiAoZmFrZVNoaXAucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpLmNvbnRhaW5zKGZha2VTaGlwKSkge1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHNoaXAsIGZha2VTaGlwKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LnZhbHVlcyhuZXdHYW1lLmJvYXJkc1swXS5zaGlwcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IE51bWJlcihzaGlwLmNsYXNzTGlzdFswXVsxXSkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IFtcbiAgICAgICAgICAgICAgICAgIE51bWJlcihzaGlwLnBhcmVudE5vZGUuZGF0YXNldC5YKSxcbiAgICAgICAgICAgICAgICAgIE51bWJlcihzaGlwLnBhcmVudE5vZGUuZGF0YXNldC5ZKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIG5ld0dhbWUuYm9hcmRzWzBdLnBsYWNlU2hpcChzaGlwc1t2YWx1ZUluZGV4XSwgY29vcmRzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGZha2VTaGlwKSkge1xuICAgICAgICAgICAgICAgIGluaXRpYWxTbG90LmFwcGVuZENoaWxkKHNoaXApO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBPYmplY3QudmFsdWVzKG5ld0dhbWUuYm9hcmRzWzBdLnNoaXBzKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gW1xuICAgICAgICAgICAgICAgICAgTnVtYmVyKGluaXRpYWxTbG90LmRhdGFzZXQuWCksXG4gICAgICAgICAgICAgICAgICBOdW1iZXIoaW5pdGlhbFNsb3QuZGF0YXNldC5ZKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIG5ld0dhbWUuYm9hcmRzWzBdLnBsYWNlU2hpcChzaGlwc1t2YWx1ZUluZGV4XSwgY29vcmRzKTtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBidWcgd2hlbiB1c2VyIHJlbGVhc2Ugc2hpcCBvdXRzaWRlIGJvYXJkc1xuICAgICAgICAgICAgICBpbml0aWFsU2xvdC5hcHBlbmRDaGlsZChzaGlwKTtcblxuICAgICAgICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC52YWx1ZXMobmV3R2FtZS5ib2FyZHNbMF0uc2hpcHMpO1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IFtcbiAgICAgICAgICAgICAgICBOdW1iZXIoaW5pdGlhbFNsb3QuZGF0YXNldC5YKSxcbiAgICAgICAgICAgICAgICBOdW1iZXIoaW5pdGlhbFNsb3QuZGF0YXNldC5ZKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgbmV3R2FtZS5ib2FyZHNbMF0ucGxhY2VTaGlwKHNoaXBzW3ZhbHVlSW5kZXhdLCBjb29yZHMpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJyb3RhdGVkXCIpKSB7XG4gICAgICAgICAgICAgIGxldCBteVNoaXAyID0gc2hpcC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IE51bWJlcihzaGlwLmNsYXNzTGlzdFswXVsxXSk7IHMgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChteVNoaXAyKSB7XG4gICAgICAgICAgICAgICAgICBteVNoaXAyLmRhdGFzZXQuZW1wdHkgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgICBteVNoaXAyID0gbXlTaGlwMi5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJyb3RhdGVkXCIpKSB7XG4gICAgICAgICAgICAgIGxldCBteVNoaXAyID0gc2hpcC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IE51bWJlcihzaGlwLmNsYXNzTGlzdFswXVsxXSk7IHMgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIG15U2hpcDIgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgIG15U2hpcDIucGFyZW50Tm9kZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgbXlTaGlwMi5wYXJlbnROb2RlLm5leHRTaWJsaW5nID09PSBudWxsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgbXlTaGlwMi5kYXRhc2V0LmVtcHR5ID0gXCJmYWxzZVwiO1xuICAgICAgICAgICAgICAgIG15U2hpcDIgPVxuICAgICAgICAgICAgICAgICAgbXlTaGlwMi5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkcmVuW1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc2hpcC5wYXJlbnROb2RlLmRhdGFzZXQuWSlcbiAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzaGlwLm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIHNoaXAub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgICAgIG1vdXNlVXAoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmYWtlU2hpcC5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICAgICAgbW91c2VVcCgpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5yb3RhdGVTaGlwcyA9ICgpID0+IHtcbiAgY29uc3QgcmVhbFBsYXllclNoaXBzID0gT2JqZWN0LnZhbHVlcyhuZXdHYW1lLmJvYXJkc1swXS5zaGlwcyk7XG4gIGNvbnN0IHBsYXllclNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIgLnNoaXBcIik7XG4gIGNvbnN0IHBsYXllcnNTaGlwcyA9IFtBcnJheS5mcm9tKHBsYXllclNoaXBzKV07XG4gIGNvbnN0IHJlYWxQbGF5ZXJzU2hpcHMgPSBbcmVhbFBsYXllclNoaXBzXTtcbiAgcGxheWVyc1NoaXBzLmZvckVhY2goKGFyciwgaSkgPT4ge1xuICAgIGFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZWxlbWVudC5jbGFzc0xpc3RbMF1bMV0gLSAxO1xuICAgICAgICBuZXdHYW1lLmJvYXJkc1tpXS5jaGFuZ2VBeGlzKHJlYWxQbGF5ZXJzU2hpcHNbaV1baW5kZXhdKTtcbiAgICAgICAgcHJpbnRCb2FyZHMoKTtcbiAgICAgICAgcHJpbnRTaGlwcyhuZXdHYW1lLmJvYXJkcyk7XG4gICAgICAgIGhpdHRpbmdTbG90cygpO1xuICAgICAgICByb3RhdGVTaGlwcygpO1xuICAgICAgICBkcmFnQW5kRHJvcCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbnJvdGF0ZVNoaXBzKCk7XG5kcmFnQW5kRHJvcCgpO1xuaGl0dGluZ1Nsb3RzKCk7XG4vLyBJbXBsZW1lbnQgc2hpcCBwbGFjZW1lbnQgbGluayBiZXR3ZWVuIGJhY2tlbmQgJiBmcm9udGVuZCByZWZhY3RvciBkcmFnIGFuZCBkcm9wIGFuZCBtb3ZlIGl0IHRvIGFub3RoZXIgbW9kdWxlP1xuLy8gYWRkIGNvbXB1dGVyIGJvYXJkIGludG8gdGhlIGVxdWF0aW9uLCBpbXBsZW1lbnQgc2hpcCBoaXR0aW5nLlxuLy8gaXMgd2hhdCBpJ20gZG9pbmcgd2l0aCB0aGUgZG9tIHJpZ2h0PyBJdCBmZWVscyBsaWtlIGknbSBkb2luZyB0b28gbXVjaCBvZiB2YWxpZGF0aW9ucyBoZXJlLlxuLy8gYWRkIGEgZnVuY3Rpb24gdG8gcmFuZG9taXplIHNoaXAgcGxhY2VtZW50IG9uIHRoZSBjb21wdXRlciBib2FyZCwgYWRkIHBsYXllciB2cyBwbGF5ZXJcbiIsImNvbnN0IHByaW50U2hpcHMgPSAoYm9hcmRzKSA9PiB7XG4gIGNvbnN0IGFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIgLnNsb3RcIik7XG4gIGNvbnN0IGJvYXJkRGF0YSA9IE9iamVjdC52YWx1ZXMoYm9hcmRzWzBdLnNoaXBzKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpLmZvckVhY2goKGVsZW0pID0+IGVsZW0ucmVtb3ZlKCkpO1xuXG4gIGJvYXJkRGF0YS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBsJHtzaGlwLmxlbmd0aH1gKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIGlmIChzaGlwLnJvdGF0ZWQgPT09IHRydWUpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJvdGF0ZWRcIik7XG4gICAgY29uc3QgZGF0YSA9IHsgeDogc2hpcC54LCB5OiBzaGlwLnkgfTtcbiAgICBhcnJheS5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBOdW1iZXIoc2xvdC5kYXRhc2V0LlgpID09PSBkYXRhLnggJiZcbiAgICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5ZKSA9PT0gZGF0YS55XG4gICAgICApIHtcbiAgICAgICAgYXJyYXlbaW5kZXhdLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgc2hpcC5mdWxsQ29vcmRzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5YKSA9PT0gY29vcmRzLnggJiZcbiAgICAgICAgICBOdW1iZXIoc2xvdC5kYXRhc2V0LlkpID09PSBjb29yZHMueVxuICAgICAgICApIHtcbiAgICAgICAgICBhcnJheVtpbmRleF0uZGF0YXNldC5lbXB0eSA9IFwiZmFsc2VcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgcHJpbnRCb2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpLmZvckVhY2goKGVsZW0pID0+IGVsZW0ucmVtb3ZlKCkpO1xuICBib2FyZFswXS5pbm5lckhUTUwgPSBcIlwiO1xuICBib2FyZFsxXS5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJzbG90XCIpO1xuICAgICAgICBzbG90LmRhdGFzZXQuWCA9IHg7XG4gICAgICAgIHNsb3QuZGF0YXNldC5ZID0geTtcbiAgICAgICAgc2xvdC5kYXRhc2V0LmVtcHR5ID0gXCJ0cnVlXCI7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChzbG90KTtcbiAgICAgIH1cbiAgICAgIGJvYXJkW2ldLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBwcmludEJvYXJkcywgcHJpbnRTaGlwcyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXJCb2FyZCkge1xuICAgIHRoaXMucmVtYWluaW5nU2xvdHMgPSBwbGF5ZXJCb2FyZC5mbGF0KEluZmluaXR5KTtcbiAgfVxuXG4gIHJhbmRvbWx5SGl0U2xvdCgpIHtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmVtYWluaW5nU2xvdHMubGVuZ3RoKTtcbiAgICBjb25zdCByYW5kb21Db29yZHMgPSB0aGlzLnJlbWFpbmluZ1Nsb3RzW2luZGV4XTtcbiAgICB0aGlzLnJlbWFpbmluZ1Nsb3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIFtyYW5kb21Db29yZHMueCwgcmFuZG9tQ29vcmRzLnldO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBDb21wdXRlciBmcm9tIFwiLi9jb21wdXRlclwiO1xuLy8gR2FtZSBoYXMgMiBnYW1lYm9hcmRzLCAxMCBzaGlwcywgMiBwbGF5ZXJzIGVhY2ggaGF2aW5nIGEgYm9hcmQgYW5kIDUgc2hpcHMsIGEgZ2FtZSBsb29wXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQodGhpcy5wbGF5ZXIpO1xuICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIocGxheWVyQm9hcmQuYm9hcmQpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKHRoaXMuY29tcHV0ZXIpO1xuICAgIHRoaXMuYm9hcmRzID0gW3BsYXllckJvYXJkLCBjb21wdXRlckJvYXJkXTtcbiAgfVxuXG4gIGdhbWVMb29wKCkge1xuICAgIHRoaXMuYm9hcmRzWzBdLnBsYWNlU2hpcHMoKTtcbiAgICB0aGlzLmJvYXJkc1sxXS5yYW5kb21seVBsYWNlU2hpcHMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgXTtcblxuICAgICgoKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLmZvckVhY2goKHJvdywgeCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoXywgeSkgPT4ge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBuZXcgTm9kZSh4LCB5KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgdGhpcy5zaGlwcyA9IHtcbiAgICAgIG9uZTogbmV3IFNoaXAoMSksXG4gICAgICB0d286IG5ldyBTaGlwKDIpLFxuICAgICAgdGhyZWU6IG5ldyBTaGlwKDMpLFxuICAgICAgZm91cjogbmV3IFNoaXAoNCksXG4gICAgICBmaXZlOiBuZXcgU2hpcCg1KSxcbiAgICB9O1xuICB9XG5cbiAgd2hvKCkge1xuICAgIHJldHVybiB0aGlzLm93bmVyO1xuICB9XG5cbiAgcmFuZG9tbHlQbGFjZVNoaXBzKCkge1xuICAgIGNvbnN0IGtleXMgPSBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCJdO1xuICAgIGNvbnN0IHNoaXBMaXN0ID0gdGhpcy5zaGlwcztcbiAgICBsZXQgYm9vbCA9IGZhbHNlO1xuICAgIGxldCBpID0gMDtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMub3duZXIucmFuZG9tbHlIaXRTbG90KCk7XG4gICAgICAgIGJvb2wgPSB0aGlzLnBsYWNlU2hpcChzaGlwTGlzdFtrZXldLCBjb29yZHMpO1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgYm9hcmQgPSB0aGlzLmJvYXJkLmZsYXQoSW5maW5pdHkpO1xuICAgIGxldCBib29sMiA9IHRydWU7XG4gICAgYm9hcmQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUuc2hpcCAhPT0gbnVsbCAmJiBib29sMiA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IG5vZGUuc2hpcC5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBzaGlwID0gc2hpcExpc3Rba2V5c1tpbmRleF1dO1xuICAgICAgICBjb25zb2xlLmxvZyhzaGlwKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VBeGlzKHNoaXApO1xuICAgICAgICBib29sMiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucHJldHR5UHJpbnRCb2FyZCgpO1xuICB9XG5cbiAgcGxhY2VTaGlwcygpIHtcbiAgICBjb25zdCBjb29yZHMgPSBbXG4gICAgICBbNCwgNF0sXG4gICAgICBbMywgM10sXG4gICAgICBbMiwgMl0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMCwgMF0sXG4gICAgXTtcblxuICAgIGNvbnN0IGtleXMgPSBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCJdO1xuICAgIGNvbnN0IHNoaXBMaXN0ID0gdGhpcy5zaGlwcztcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXBMaXN0W2tleV0sIGNvb3Jkc1tpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuYm9hcmRbeF1beV07XG4gICAgbGV0IGJvb2w7XG4gICAgaWYgKG5vZGUuc2hpcCA9PT0gbnVsbCAmJiBub2RlLmJvbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIG5vZGUuYm9tYmVkID0gdHJ1ZTtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuc2hpcCAhPT0gbnVsbCAmJiBub2RlLmJvbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIG5vZGUuYm9tYmVkID0gdHJ1ZTtcbiAgICAgIG5vZGUuc2hpcC5oaXQoKTtcbiAgICAgIGJvb2wgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfVxuXG4gIGlzR2FtZUxvc3QoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuc2hpcHMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBhcnJheS5wdXNoKHZhbHVlLnN1bmspO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYm9vbCA9IGFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIGlmIChlbGVtZW50ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBib29sO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIGN1cnJlbnRDb29yZHMpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBjdXJyZW50Q29vcmRzO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgIGxldCBvY2N1cGllZCA9IGZhbHNlO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgLy8gcmVtb3ZlIHNoaXAgZnJvbSBib2FyZCBpZiBpdCBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IHNoaXBDb29yZHMgPSBzaGlwLmZ1bGxDb29yZHM7XG4gICAgc2hpcENvb3Jkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLmJvYXJkW2VsZW1lbnQueF1bZWxlbWVudC55XS5zaGlwID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGlmIChzaGlwLnJvdGF0ZWQgPT09IGZhbHNlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh5ICsgbGVuZ3RoIC0gMSA+IDkgfHwgeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDApIHtcbiAgICAgICAgICBvY2N1cGllZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt4XVt5ICsgaV0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldLnNoaXAgPSBzaGlwO1xuICAgICAgICAgIGFyci5wdXNoKHsgeCwgeTogeSArIGkgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwLnJvdGF0ZWQgPT09IHRydWUpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHggKyBsZW5ndGggLSAxID4gOSB8fCB4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCkge1xuICAgICAgICAgIG9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3ggKyBpXVt5XS5zaGlwID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgYXJyLnB1c2goeyB4OiB4ICsgaSwgeSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY2N1cGllZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5zaGlwcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zaGlwc1trZXldLnggPSB4O1xuICAgICAgICB0aGlzLnNoaXBzW2tleV0ueSA9IHk7XG4gICAgICAgIHRoaXMuc2hpcHNba2V5XS5mdWxsQ29vcmRzID0gYXJyO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChvY2N1cGllZCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjaGFuZ2VBeGlzKHNoaXApIHtcbiAgICBjb25zdCB7IHgsIHksIGxlbmd0aCB9ID0gc2hpcDtcbiAgICBsZXQgb2NjdXBpZWQgPSBmYWxzZTtcbiAgICBjb25zdCBhcnIgPSBbeyB4LCB5IH1dO1xuICAgIGNvbnN0IGlmT2NjdXBpZWQgPSBzaGlwLmZ1bGxDb29yZHM7XG4gICAgY29uc3Qgc2hpcENvb3JkcyA9IHNoaXAuZnVsbENvb3JkcztcbiAgICBjb25zdCB0b1JvdGF0ZSA9IFtdO1xuICAgIGNvbnNvbGUubG9nKHNoaXAuZnVsbENvb3Jkcyk7XG5cbiAgICBzaGlwQ29vcmRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuYm9hcmRbZWxlbWVudC54XVtlbGVtZW50LnldLnNoaXAgPSBudWxsO1xuICAgIH0pO1xuICAgIHRoaXMuYm9hcmRbeF1beV0uc2hpcCA9IHNoaXA7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHggKyBsZW5ndGggLSAxIDw9IDkgJiZcbiAgICAgICAgc2hpcC5yb3RhdGVkID09PSBmYWxzZSAmJlxuICAgICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XS5zaGlwID09PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgdG9Sb3RhdGUucHVzaCh0aGlzLmJvYXJkW3ggKyBpXVt5XSk7XG4gICAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldLnNoaXAgPSBudWxsO1xuICAgICAgICBhcnIucHVzaCh7IHg6IHggKyBpLCB5IH0pO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgeSArIGxlbmd0aCAtIDEgPD0gOSAmJlxuICAgICAgICBzaGlwLnJvdGF0ZWQgPT09IHRydWUgJiZcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0uc2hpcCA9PT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHRvUm90YXRlLnB1c2godGhpcy5ib2FyZFt4XVt5ICsgaV0pO1xuICAgICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XS5zaGlwID0gbnVsbDtcbiAgICAgICAgYXJyLnB1c2goeyB4LCB5OiB5ICsgaSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgaWZPY2N1cGllZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5ib2FyZFtlbGVtZW50LnhdW2VsZW1lbnQueV0uc2hpcCA9IHNoaXA7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc2hpcHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnNoaXBzW2tleV0uZnVsbENvb3JkcyA9IHNoaXBDb29yZHM7XG4gICAgICAgICAgdGhpcy5zaGlwc1trZXldLnggPSB4O1xuICAgICAgICAgIHRoaXMuc2hpcHNba2V5XS55ID0geTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9jY3VwaWVkID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0b1JvdGF0ZS5mb3JFYWNoKChfLCBpbmRleCkgPT4ge1xuICAgICAgdG9Sb3RhdGVbaW5kZXhdLnNoaXAgPSBzaGlwO1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5zaGlwcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zaGlwc1trZXldLnJvdGF0ZWQgPSAhc2hpcC5yb3RhdGVkO1xuICAgICAgICB0aGlzLnNoaXBzW2tleV0uZnVsbENvb3JkcyA9IGFycjtcbiAgICAgICAgdGhpcy5zaGlwc1trZXldLnggPSB4O1xuICAgICAgICB0aGlzLnNoaXBzW2tleV0ueSA9IHk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcmV0dHlQcmludEJvYXJkKCkge1xuICAgIGNvbnN0IG15Qm9hcmQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuYm9hcmQpKTtcblxuICAgIG15Qm9hcmQuZm9yRWFjaCgocm93LCB4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sLCB5KSA9PiB7XG4gICAgICAgIGlmIChjb2wuc2hpcCkge1xuICAgICAgICAgIGlmIChjb2wuc2hpcC5yb3RhdGVkKSB7XG4gICAgICAgICAgICBteUJvYXJkW3hdW3ldID0gYF4ke2NvbC5zaGlwLmxlbmd0aH1gO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sLnNoaXAucm90YXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG15Qm9hcmRbeF1beV0gPSBgPCR7Y29sLnNoaXAubGVuZ3RofWA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG15Qm9hcmRbeF1beV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLnRhYmxlKG15Qm9hcmQpO1xuICAgIGNvbnNvbGUudGFibGUodGhpcy5ib2FyZCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gICAgdGhpcy5ib21iZWQgPSBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoaWQgPSAwKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuY3VycmVudE1vdXNlQ29vcmRzID0gbnVsbDtcbiAgfVxuXG4gIGdldENvb3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TW91c2VDb29yZHM7XG4gIH1cblxuICBzZXRDb29yZHMoY29vcmRzKSB7XG4gICAgdGhpcy5jdXJyZW50TW91c2VDb29yZHMgPSBjb29yZHM7XG4gIH1cbn1cbiIsIi8vIEEgc2hpcCBoYXMgYSBsZW5ndGgsIHRyYWNrcyBudW1iZXIgcmVjZWl2ZWQgaGl0cywgYSBzdW5rIGJvb2xlYW5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5yb3RhdGVkID0gZmFsc2U7XG4gICAgdGhpcy54ID0gbnVsbDtcbiAgICB0aGlzLnkgPSBudWxsO1xuICAgIHRoaXMuZnVsbENvb3JkcyA9IFtdO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5zdW5rID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvRE9NL2NvbnRyb2xsZXJcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==