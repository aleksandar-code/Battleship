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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n}\n\n.content {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.board {\n  min-width: 500px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.row {\n  display: flex;\n  height: 50px;\n  width: 500px;\n}\n\n.slot {\n  border: 1px solid rgba(16, 116, 146, 0.548); \n  display: flex;\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n\n\n.ship {\n  height: 50px;\n  border: 3px solid yellow;\n  cursor: move!important;\n  position: absolute!important;\n  z-index: 1;\n}\n\n.l5 {\n  width: calc(50px * 5);\n}\n\n.l5.rotated {\n  width: 50px;\n  height: calc(50px * 5);\n}\n\n.l4 {\n  width: calc(50px * 4);\n}\n\n.l4.rotated {\n  width: 50px;\n  height: calc(50px * 4);\n}\n\n.l3 {\n  width: calc(50px * 3);\n}\n\n.l3.rotated {\n  width: 50px;\n  height: calc(50px * 3);\n}\n\n.l2 {\n  width: calc(50px * 2);\n}\n\n.l2.rotated {\n  width: 50px;\n  height: calc(50px * 2);\n}\n\n.l1 {\n  width: 50px\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,2CAA2C;EAC3C,aAAa;EACb,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;;AAGA;EACE,YAAY;EACZ,wBAAwB;EACxB,sBAAsB;EACtB,4BAA4B;EAC5B,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n}\n\n.content {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.board {\n  min-width: 500px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.row {\n  display: flex;\n  height: 50px;\n  width: 500px;\n}\n\n.slot {\n  border: 1px solid rgba(16, 116, 146, 0.548); \n  display: flex;\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n\n\n.ship {\n  height: 50px;\n  border: 3px solid yellow;\n  cursor: move!important;\n  position: absolute!important;\n  z-index: 1;\n}\n\n.l5 {\n  width: calc(50px * 5);\n}\n\n.l5.rotated {\n  width: 50px;\n  height: calc(50px * 5);\n}\n\n.l4 {\n  width: calc(50px * 4);\n}\n\n.l4.rotated {\n  width: 50px;\n  height: calc(50px * 4);\n}\n\n.l3 {\n  width: calc(50px * 3);\n}\n\n.l3.rotated {\n  width: 50px;\n  height: calc(50px * 3);\n}\n\n.l2 {\n  width: calc(50px * 2);\n}\n\n.l2.rotated {\n  width: 50px;\n  height: calc(50px * 2);\n}\n\n.l1 {\n  width: 50px\n}"],"sourceRoot":""}]);
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



const newGame = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
newGame.gameLoop();
(0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printBoards)();
(0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printShips)(newGame.boards);

function dragAndDrop() {
  const playerShips = document.querySelectorAll(".player .ship");
  const computerShips = document.querySelectorAll(".computer .ship");
  const playersShips = [Array.from(playerShips), Array.from(computerShips)];

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
                fakeShip.style.border = "3px solid red";
                fakeShip.style.top = "0";
                fakeShip.style.left = "0";
              }
            }
          }
          if (element.classList.contains("slot")) {
            let myElem = element;
            for (let idx = 0; idx < shipObject.length; idx += 1) {
              if (
                Number(myElem.dataset.X) === shipObject.fullCoords[idx].x &&
                Number(myElem.dataset.Y) === shipObject.fullCoords[idx].y
              ) {
                element.appendChild(fakeShip);
                fakeShip.style.border = "3px solid red";
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
                  console.log(
                    ourShip.parentNode.nextSibling.children[
                      Number(fakeElement.parentNode.dataset.Y)
                    ]
                  );
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
                fakeShip.style.border = "3px solid red";
                fakeShip.style.top = "0";
                fakeShip.style.left = "0";
                fakeElement.remove();
              }
            }
          }
          if (element.classList.contains("slot")) {
            let myElem = element;
            for (let idx = 0; idx < shipObject.length; idx += 1) {
              if (
                Number(myElem.dataset.X) === shipObject.fullCoords[idx].x &&
                Number(myElem.dataset.Y) === shipObject.fullCoords[idx].y
              ) {
                element.appendChild(fakeShip);
                fakeShip.style.border = "3px solid red";
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
            if (myShip) {
              myShip.dataset.empty = "true";
              myShip =
                myShip.parentNode.nextSibling.children[
                  Number(ship.parentNode.dataset.Y)
                ];
            }
          }
        }

        ship.style.border = "none";
        onMouseMove = (event2) => {
          ship.style.position = "absolute";
          ship.style.zIndex = 1000;

          document.body.append(ship);
          document.body.append(fakeShip);

          moveAt(event2.pageX, event2.pageY);
        };

        document.addEventListener("mousemove", onMouseMove);

        ship.onmouseup = () => {
          document.removeEventListener("mousemove", onMouseMove);

          ship.style.border = "3px solid yellow";
          ship.style.left = "0";
          ship.style.top = "0";
          if (fakeShip.parentNode !== null) {
            try {
              fakeShip.parentNode.replaceChild(ship, fakeShip);
              const ships = Object.values(newGame.boards[0].ships);
              const valueIndex = Number(ship.classList[0][1]) - 1;
              const coords = [
                Number(ship.parentNode.dataset.X),
                Number(ship.parentNode.dataset.Y),
              ];
              newGame.boards[0].placeShip(ships[valueIndex], coords);
            } catch (error) {
              console.log("");
            }

            if (!ship.classList.contains("rotated")) {
              let myShip2 = ship.parentNode;
              for (let s = 0; s < Number(ship.classList[0][1]); s += 1) {
                console.log({ notRotated: myShip2 });
                myShip2.dataset.empty = "false";
                myShip2 = myShip2.nextSibling;
              }
            } else if (ship.classList.contains("rotated")) {
              let myShip2 = ship.parentNode;
              for (let s = 0; s < Number(ship.classList[0][1]); s += 1) {
                console.log(myShip2);
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
      };
    });
  });
}

(function rotateShips() {
  const realPlayerShips = Object.values(newGame.boards[0].ships);
  const realComputerShips = Object.values(newGame.boards[1].ships);
  const playerShips = document.querySelectorAll(".player .ship");
  const computerShips = document.querySelectorAll(".computer .ship");
  const playersShips = [Array.from(playerShips), Array.from(computerShips)];
  const realPlayersShips = [realPlayerShips, realComputerShips];
  dragAndDrop();
  playersShips.forEach((arr, i) => {
    arr.forEach((element) => {
      element.addEventListener("click", () => {
        const index = element.classList[0][1] - 1;
        newGame.boards[i].changeAxis(realPlayersShips[i][index]);
        (0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printBoards)();
        (0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printShips)(newGame.boards);
        rotateShips();
        dragAndDrop();
      });
    });
  });
})();

// Implement ship placement link between backend & frontend refactor drag and drop and move it to another module?
// add computer board into the equation, implement ship hitting.
// is what i'm doing with the dom right? It feels like i'm doing too much of validations here.


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
  // const array2 = Array.from(board[1].children);
  // const boardData2 = Object.values(boards[1].ships);

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

  // boardData2.forEach((element) => {
  //   const ship = document.createElement("div");
  //   ship.classList.add(`l${element.length}`);
  //   ship.classList.add("ship");
  //   if (element.rotated === true) ship.classList.add("rotated");
  //   array2.forEach((slot) => {
  //     if (slot.dataset.X === element.x && slot.dataset.Y === element.y) {
  //       slot.appendChild(ship);
  //     }
  //   });
  // });
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
    this.boards[1].placeShips();
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

  // randomlyPlaceShips() {

  // }

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
    if (node.ship === null && node.bombed === false) {
      node.bombed = true;
    } else if (node.ship !== null && node.bombed === false) {
      node.bombed = true;
      node.ship.hit();
    }
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

    if (occupied === true) return false;
    Object.entries(this.ships).forEach(([key, value]) => {
      if (value.length === length) {
        this.ships[key].x = x;
        this.ships[key].y = y;
        this.ships[key].fullCoords = arr;
      }
    });

    return true;
  }

  // moveShip(ship, currentCoords) {
  //   const [x, y] = currentCoords;
  //   const { length } = ship;
  //   let occupied = false;
  //   const arr = [];
  //   for (let i = 0; i < length; i += 1) {
  //     if (y + length - 1 > 9 || x > 9 || x < 0 || y > 9 || y < 0) {
  //       occupied = true;
  //     } else if (this.board[x][y + i].ship === null) {
  //       this.board[x][y + i].ship = ship;
  //       arr.push({ x, y: y + i });
  //     } else {
  //       occupied = true;
  //     }
  //   }

  //   if (occupied === true) return false;
  //   Object.entries(this.ships).forEach(([key, value]) => {
  //     if (value.length === length) {
  //       this.ships[key].x = x;
  //       this.ships[key].y = y;
  //       this.ships[key].fullCoords = arr;
  //     }
  //   });

  //   return true;
  // }

  changeAxis(ship) {
    const { x, y, length } = ship;
    let occupied = false;
    const arr = [{ x, y }];
    for (let i = 1; i < length; i += 1) {
      if (ship.rotated === false && this.board[x + i][y].ship === null) {
        this.board[x + i][y].ship = ship;
        this.board[x][y + i].ship = null;
        arr.push({ x: x + i, y });
      } else if (ship.rotated === true && this.board[x][y + i].ship === null) {
        this.board[x][y + i].ship = ship;
        this.board[x + i][y].ship = null;
        arr.push({ x, y: y + i });
      } else {
        occupied = true;
      }
    }

    if (occupied === true) return false;

    Object.entries(this.ships).forEach(([key, value]) => {
      if (value.length === length) {
        this.ships[key].rotated = !ship.rotated;
        this.ships[key].fullCoords = arr;
        console.log(arr);
      }
    });

    return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWU7QUFDM0I7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QixvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQyxRQUFRO0FBQ1I7QUFDQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdLZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET00vaW5pdGlhbGl6ZUdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS9wcmludEJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ub2RlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uc2xvdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAxMTYsIDE0NiwgMC41NDgpOyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLnNoaXAge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xcbiAgY3Vyc29yOiBtb3ZlIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubDUge1xcbiAgd2lkdGg6IGNhbGMoNTBweCAqIDUpO1xcbn1cXG5cXG4ubDUucm90YXRlZCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogY2FsYyg1MHB4ICogNSk7XFxufVxcblxcbi5sNCB7XFxuICB3aWR0aDogY2FsYyg1MHB4ICogNCk7XFxufVxcblxcbi5sNC5yb3RhdGVkIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDUwcHggKiA0KTtcXG59XFxuXFxuLmwzIHtcXG4gIHdpZHRoOiBjYWxjKDUwcHggKiAzKTtcXG59XFxuXFxuLmwzLnJvdGF0ZWQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IGNhbGMoNTBweCAqIDMpO1xcbn1cXG5cXG4ubDIge1xcbiAgd2lkdGg6IGNhbGMoNTBweCAqIDIpO1xcbn1cXG5cXG4ubDIucm90YXRlZCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogY2FsYyg1MHB4ICogMik7XFxufVxcblxcbi5sMSB7XFxuICB3aWR0aDogNTBweFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLnNsb3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMTE2LCAxNDYsIDAuNTQ4KTsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5zaGlwIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHllbGxvdztcXG4gIGN1cnNvcjogbW92ZSFpbXBvcnRhbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmw1IHtcXG4gIHdpZHRoOiBjYWxjKDUwcHggKiA1KTtcXG59XFxuXFxuLmw1LnJvdGF0ZWQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IGNhbGMoNTBweCAqIDUpO1xcbn1cXG5cXG4ubDQge1xcbiAgd2lkdGg6IGNhbGMoNTBweCAqIDQpO1xcbn1cXG5cXG4ubDQucm90YXRlZCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogY2FsYyg1MHB4ICogNCk7XFxufVxcblxcbi5sMyB7XFxuICB3aWR0aDogY2FsYyg1MHB4ICogMyk7XFxufVxcblxcbi5sMy5yb3RhdGVkIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDUwcHggKiAzKTtcXG59XFxuXFxuLmwyIHtcXG4gIHdpZHRoOiBjYWxjKDUwcHggKiAyKTtcXG59XFxuXFxuLmwyLnJvdGF0ZWQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IGNhbGMoNTBweCAqIDIpO1xcbn1cXG5cXG4ubDEge1xcbiAgd2lkdGg6IDUwcHhcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vaW5pdGlhbGl6ZUdhbWVcIjtcbiIsImltcG9ydCB7IHByaW50Qm9hcmRzLCBwcmludFNoaXBzIH0gZnJvbSBcIi4vcHJpbnRCb2FyZFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL2dhbWVcIjtcblxuY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lKCk7XG5uZXdHYW1lLmdhbWVMb29wKCk7XG5wcmludEJvYXJkcygpO1xucHJpbnRTaGlwcyhuZXdHYW1lLmJvYXJkcyk7XG5cbmZ1bmN0aW9uIGRyYWdBbmREcm9wKCkge1xuICBjb25zdCBwbGF5ZXJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyIC5zaGlwXCIpO1xuICBjb25zdCBjb21wdXRlclNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlciAuc2hpcFwiKTtcbiAgY29uc3QgcGxheWVyc1NoaXBzID0gW0FycmF5LmZyb20ocGxheWVyU2hpcHMpLCBBcnJheS5mcm9tKGNvbXB1dGVyU2hpcHMpXTtcblxuICBwbGF5ZXJzU2hpcHMuZm9yRWFjaCgoYXJyLCBpbmRleCkgPT4ge1xuICAgIGFyci5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICBhcnJbaV0uc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuXG4gICAgICBjb25zdCBzaGlwID0gcGxheWVyc1NoaXBzW2luZGV4XVtpXTtcbiAgICAgIGNvbnN0IGZha2VTaGlwID0gc2hpcC5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgZmFrZVNoaXAuY2xhc3NMaXN0LmFkZChcImNsb25lXCIpO1xuICAgICAgc2hpcC5vbmRyYWdzdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH07XG5cbiAgICAgIGZha2VTaGlwLm9uZHJhZ3N0YXJ0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfTtcblxuICAgICAgbGV0IG9uTW91c2VNb3ZlO1xuXG4gICAgICBmdW5jdGlvbiBzaG93T3V0bGluZU5vdFJvdGF0ZWQoYSwgYiwgc2hpcE9iamVjdCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChhLCBiKTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKHJlc3VsdCk7XG5cbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xvdFwiKSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgZmFrZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmYWtlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoZmFrZVNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICBpZiAoZmFrZUVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICBsZXQgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgIGxldCBvdXJTaGlwID0gZmFrZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWx1ZUluZGV4OyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAob3VyU2hpcCA9PT0gbnVsbCB8fCBvdXJTaGlwLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG91clNoaXAubmV4dFNpYmxpbmcuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3VyU2hpcCA9IG91clNoaXAubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFrZVNoaXApO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbG90XCIpKSB7XG4gICAgICAgICAgICBsZXQgbXlFbGVtID0gZWxlbWVudDtcbiAgICAgICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHNoaXBPYmplY3QubGVuZ3RoOyBpZHggKz0gMSkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTnVtYmVyKG15RWxlbS5kYXRhc2V0LlgpID09PSBzaGlwT2JqZWN0LmZ1bGxDb29yZHNbaWR4XS54ICYmXG4gICAgICAgICAgICAgICAgTnVtYmVyKG15RWxlbS5kYXRhc2V0LlkpID09PSBzaGlwT2JqZWN0LmZ1bGxDb29yZHNbaWR4XS55XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFrZVNoaXApO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKGZha2VTaGlwLmNsYXNzTGlzdFswXVsxXSkgLSAxO1xuICAgICAgICAgICAgICAgIGlmIChmYWtlU2hpcC5wYXJlbnROb2RlLmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjb25zdCBvdXJTaGlwID0gZmFrZVNoaXAucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsdWVJbmRleDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXJTaGlwLm5leHRTaWJsaW5nLmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYm9vbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBteUVsZW0gPSBteUVsZW0ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2hvd091dGxpbmVSb3RhdGVkKGEsIGIsIHNoaXBPYmplY3QpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoYSwgYik7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbShyZXN1bHQpO1xuXG4gICAgICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNsb3RcIikgJiZcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGZha2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFrZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKGZha2VTaGlwLmNsYXNzTGlzdFswXVsxXSkgLSAxO1xuICAgICAgICAgICAgaWYgKGZha2VFbGVtZW50LnBhcmVudE5vZGUuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgbGV0IGJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICBsZXQgb3VyU2hpcCA9IGZha2VFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsdWVJbmRleDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgb3VyU2hpcCA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgb3VyU2hpcC5wYXJlbnROb2RlLm5leHRTaWJsaW5nID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICBvdXJTaGlwLnBhcmVudE5vZGUubmV4dFNpYmxpbmcuY2hpbGRyZW5bMF0gPT09IG51bGxcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICBvdXJTaGlwLnBhcmVudE5vZGUubmV4dFNpYmxpbmcuY2hpbGRyZW5bXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihmYWtlRWxlbWVudC5wYXJlbnROb2RlLmRhdGFzZXQuWSlcbiAgICAgICAgICAgICAgICAgIF0uZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBvdXJTaGlwLnBhcmVudE5vZGUubmV4dFNpYmxpbmcuY2hpbGRyZW5bXG4gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZha2VFbGVtZW50LnBhcmVudE5vZGUuZGF0YXNldC5ZKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTaGlwID1cbiAgICAgICAgICAgICAgICAgIG91clNoaXAucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZHJlbltcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZha2VFbGVtZW50LnBhcmVudE5vZGUuZGF0YXNldC5ZKVxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBvdXJTaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoYm9vbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBmYWtlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZha2VTaGlwKTtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCByZWRcIjtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgZmFrZUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xvdFwiKSkge1xuICAgICAgICAgICAgbGV0IG15RWxlbSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBzaGlwT2JqZWN0Lmxlbmd0aDsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIE51bWJlcihteUVsZW0uZGF0YXNldC5YKSA9PT0gc2hpcE9iamVjdC5mdWxsQ29vcmRzW2lkeF0ueCAmJlxuICAgICAgICAgICAgICAgIE51bWJlcihteUVsZW0uZGF0YXNldC5ZKSA9PT0gc2hpcE9iamVjdC5mdWxsQ29vcmRzW2lkeF0ueVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZha2VTaGlwKTtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCByZWRcIjtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IE51bWJlcihmYWtlU2hpcC5jbGFzc0xpc3RbMF1bMV0pIC0gMTtcbiAgICAgICAgICAgICAgICBpZiAoZmFrZVNoaXAucGFyZW50Tm9kZS5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgbGV0IGJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgb3VyU2hpcCA9IGZha2VTaGlwLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZhbHVlSW5kZXg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3VyU2hpcC5uZXh0U2libGluZy5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZmFrZVNoaXApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBteUVsZW0gPVxuICAgICAgICAgICAgICAgIG15RWxlbS5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkcmVuW1xuICAgICAgICAgICAgICAgICAgTnVtYmVyKGVsZW1lbnQuZGF0YXNldC5ZKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2hpcC5vbm1vdXNlZG93biA9ICgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gbW92ZUF0KHBhZ2VYLCBwYWdlWSkge1xuICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmxlZnQgPSBgJHtwYWdlWCAtIHNoaXAub2Zmc2V0V2lkdGggLyAyfXB4YDtcbiAgICAgICAgICBmYWtlU2hpcC5zdHlsZS50b3AgPSBgJHtwYWdlWSAtIHNoaXAub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7cGFnZVggLSBzaGlwLm9mZnNldFdpZHRoIC8gMn1weGA7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgJHtwYWdlWSAtIHNoaXAub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG5cbiAgICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC52YWx1ZXMobmV3R2FtZS5ib2FyZHNbMF0uc2hpcHMpO1xuICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoc2hpcC5jbGFzc0xpc3RbMF1bMV0pIC0gMTtcbiAgICAgICAgICBpZiAoIXNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwicm90YXRlZFwiKSkge1xuICAgICAgICAgICAgc2hvd091dGxpbmVOb3RSb3RhdGVkKFxuICAgICAgICAgICAgICBwYWdlWCAtIGZha2VTaGlwLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgICAgICAgcGFnZVkgLSBmYWtlU2hpcC5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICBzaGlwc1t2YWx1ZUluZGV4XVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd091dGxpbmVSb3RhdGVkKFxuICAgICAgICAgICAgICBwYWdlWCAtIGZha2VTaGlwLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgICAgICAgcGFnZVkgLSBmYWtlU2hpcC5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICBzaGlwc1t2YWx1ZUluZGV4XVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwicm90YXRlZFwiKSkge1xuICAgICAgICAgIGxldCBteVNoaXAgPSBzaGlwLnBhcmVudE5vZGU7XG4gICAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCBOdW1iZXIoc2hpcC5jbGFzc0xpc3RbMF1bMV0pOyBzICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChteVNoaXApIHtcbiAgICAgICAgICAgICAgbXlTaGlwLmRhdGFzZXQuZW1wdHkgPSBcInRydWVcIjtcbiAgICAgICAgICAgICAgbXlTaGlwID0gbXlTaGlwLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInJvdGF0ZWRcIikpIHtcbiAgICAgICAgICBsZXQgbXlTaGlwID0gc2hpcC5wYXJlbnROb2RlO1xuICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKTsgcyArPSAxKSB7XG4gICAgICAgICAgICBpZiAobXlTaGlwKSB7XG4gICAgICAgICAgICAgIG15U2hpcC5kYXRhc2V0LmVtcHR5ID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgIG15U2hpcCA9XG4gICAgICAgICAgICAgICAgbXlTaGlwLnBhcmVudE5vZGUubmV4dFNpYmxpbmcuY2hpbGRyZW5bXG4gICAgICAgICAgICAgICAgICBOdW1iZXIoc2hpcC5wYXJlbnROb2RlLmRhdGFzZXQuWSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgIG9uTW91c2VNb3ZlID0gKGV2ZW50MikgPT4ge1xuICAgICAgICAgIHNoaXAuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS56SW5kZXggPSAxMDAwO1xuXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc2hpcCk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZmFrZVNoaXApO1xuXG4gICAgICAgICAgbW92ZUF0KGV2ZW50Mi5wYWdlWCwgZXZlbnQyLnBhZ2VZKTtcbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcblxuICAgICAgICBzaGlwLm9ubW91c2V1cCA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcblxuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgeWVsbG93XCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgICBpZiAoZmFrZVNoaXAucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZmFrZVNoaXAucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc2hpcCwgZmFrZVNoaXApO1xuICAgICAgICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC52YWx1ZXMobmV3R2FtZS5ib2FyZHNbMF0uc2hpcHMpO1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IFtcbiAgICAgICAgICAgICAgICBOdW1iZXIoc2hpcC5wYXJlbnROb2RlLmRhdGFzZXQuWCksXG4gICAgICAgICAgICAgICAgTnVtYmVyKHNoaXAucGFyZW50Tm9kZS5kYXRhc2V0LlkpLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBuZXdHYW1lLmJvYXJkc1swXS5wbGFjZVNoaXAoc2hpcHNbdmFsdWVJbmRleF0sIGNvb3Jkcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInJvdGF0ZWRcIikpIHtcbiAgICAgICAgICAgICAgbGV0IG15U2hpcDIgPSBzaGlwLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKTsgcyArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBub3RSb3RhdGVkOiBteVNoaXAyIH0pO1xuICAgICAgICAgICAgICAgIG15U2hpcDIuZGF0YXNldC5lbXB0eSA9IFwiZmFsc2VcIjtcbiAgICAgICAgICAgICAgICBteVNoaXAyID0gbXlTaGlwMi5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInJvdGF0ZWRcIikpIHtcbiAgICAgICAgICAgICAgbGV0IG15U2hpcDIgPSBzaGlwLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKTsgcyArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlTaGlwMik7XG4gICAgICAgICAgICAgICAgbXlTaGlwMi5kYXRhc2V0LmVtcHR5ID0gXCJmYWxzZVwiO1xuICAgICAgICAgICAgICAgIG15U2hpcDIgPVxuICAgICAgICAgICAgICAgICAgbXlTaGlwMi5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkcmVuW1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc2hpcC5wYXJlbnROb2RlLmRhdGFzZXQuWSlcbiAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2hpcC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbihmdW5jdGlvbiByb3RhdGVTaGlwcygpIHtcbiAgY29uc3QgcmVhbFBsYXllclNoaXBzID0gT2JqZWN0LnZhbHVlcyhuZXdHYW1lLmJvYXJkc1swXS5zaGlwcyk7XG4gIGNvbnN0IHJlYWxDb21wdXRlclNoaXBzID0gT2JqZWN0LnZhbHVlcyhuZXdHYW1lLmJvYXJkc1sxXS5zaGlwcyk7XG4gIGNvbnN0IHBsYXllclNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIgLnNoaXBcIik7XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyIC5zaGlwXCIpO1xuICBjb25zdCBwbGF5ZXJzU2hpcHMgPSBbQXJyYXkuZnJvbShwbGF5ZXJTaGlwcyksIEFycmF5LmZyb20oY29tcHV0ZXJTaGlwcyldO1xuICBjb25zdCByZWFsUGxheWVyc1NoaXBzID0gW3JlYWxQbGF5ZXJTaGlwcywgcmVhbENvbXB1dGVyU2hpcHNdO1xuICBkcmFnQW5kRHJvcCgpO1xuICBwbGF5ZXJzU2hpcHMuZm9yRWFjaCgoYXJyLCBpKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBlbGVtZW50LmNsYXNzTGlzdFswXVsxXSAtIDE7XG4gICAgICAgIG5ld0dhbWUuYm9hcmRzW2ldLmNoYW5nZUF4aXMocmVhbFBsYXllcnNTaGlwc1tpXVtpbmRleF0pO1xuICAgICAgICBwcmludEJvYXJkcygpO1xuICAgICAgICBwcmludFNoaXBzKG5ld0dhbWUuYm9hcmRzKTtcbiAgICAgICAgcm90YXRlU2hpcHMoKTtcbiAgICAgICAgZHJhZ0FuZERyb3AoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pKCk7XG5cbi8vIEltcGxlbWVudCBzaGlwIHBsYWNlbWVudCBsaW5rIGJldHdlZW4gYmFja2VuZCAmIGZyb250ZW5kIHJlZmFjdG9yIGRyYWcgYW5kIGRyb3AgYW5kIG1vdmUgaXQgdG8gYW5vdGhlciBtb2R1bGU/XG4vLyBhZGQgY29tcHV0ZXIgYm9hcmQgaW50byB0aGUgZXF1YXRpb24sIGltcGxlbWVudCBzaGlwIGhpdHRpbmcuXG4vLyBpcyB3aGF0IGknbSBkb2luZyB3aXRoIHRoZSBkb20gcmlnaHQ/IEl0IGZlZWxzIGxpa2UgaSdtIGRvaW5nIHRvbyBtdWNoIG9mIHZhbGlkYXRpb25zIGhlcmUuXG4iLCJjb25zdCBwcmludFNoaXBzID0gKGJvYXJkcykgPT4ge1xuICBjb25zdCBhcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyIC5zbG90XCIpO1xuICBjb25zdCBib2FyZERhdGEgPSBPYmplY3QudmFsdWVzKGJvYXJkc1swXS5zaGlwcyk7XG4gIC8vIGNvbnN0IGFycmF5MiA9IEFycmF5LmZyb20oYm9hcmRbMV0uY2hpbGRyZW4pO1xuICAvLyBjb25zdCBib2FyZERhdGEyID0gT2JqZWN0LnZhbHVlcyhib2FyZHNbMV0uc2hpcHMpO1xuXG4gIGJvYXJkRGF0YS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBsJHtzaGlwLmxlbmd0aH1gKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIGlmIChzaGlwLnJvdGF0ZWQgPT09IHRydWUpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJvdGF0ZWRcIik7XG4gICAgY29uc3QgZGF0YSA9IHsgeDogc2hpcC54LCB5OiBzaGlwLnkgfTtcbiAgICBhcnJheS5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBOdW1iZXIoc2xvdC5kYXRhc2V0LlgpID09PSBkYXRhLnggJiZcbiAgICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5ZKSA9PT0gZGF0YS55XG4gICAgICApIHtcbiAgICAgICAgYXJyYXlbaW5kZXhdLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgc2hpcC5mdWxsQ29vcmRzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5YKSA9PT0gY29vcmRzLnggJiZcbiAgICAgICAgICBOdW1iZXIoc2xvdC5kYXRhc2V0LlkpID09PSBjb29yZHMueVxuICAgICAgICApIHtcbiAgICAgICAgICBhcnJheVtpbmRleF0uZGF0YXNldC5lbXB0eSA9IFwiZmFsc2VcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGJvYXJkRGF0YTIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAvLyAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyAgIHNoaXAuY2xhc3NMaXN0LmFkZChgbCR7ZWxlbWVudC5sZW5ndGh9YCk7XG4gIC8vICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgLy8gICBpZiAoZWxlbWVudC5yb3RhdGVkID09PSB0cnVlKSBzaGlwLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVkXCIpO1xuICAvLyAgIGFycmF5Mi5mb3JFYWNoKChzbG90KSA9PiB7XG4gIC8vICAgICBpZiAoc2xvdC5kYXRhc2V0LlggPT09IGVsZW1lbnQueCAmJiBzbG90LmRhdGFzZXQuWSA9PT0gZWxlbWVudC55KSB7XG4gIC8vICAgICAgIHNsb3QuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH0pO1xufTtcblxuY29uc3QgcHJpbnRCb2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpLmZvckVhY2goKGVsZW0pID0+IGVsZW0ucmVtb3ZlKCkpO1xuICBib2FyZFswXS5pbm5lckhUTUwgPSBcIlwiO1xuICBib2FyZFsxXS5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJzbG90XCIpO1xuICAgICAgICBzbG90LmRhdGFzZXQuWCA9IHg7XG4gICAgICAgIHNsb3QuZGF0YXNldC5ZID0geTtcbiAgICAgICAgc2xvdC5kYXRhc2V0LmVtcHR5ID0gXCJ0cnVlXCI7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChzbG90KTtcbiAgICAgIH1cbiAgICAgIGJvYXJkW2ldLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBwcmludEJvYXJkcywgcHJpbnRTaGlwcyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXJCb2FyZCkge1xuICAgIHRoaXMucmVtYWluaW5nU2xvdHMgPSBwbGF5ZXJCb2FyZC5mbGF0KEluZmluaXR5KTtcbiAgfVxuXG4gIHJhbmRvbWx5SGl0U2xvdCgpIHtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmVtYWluaW5nU2xvdHMubGVuZ3RoKTtcbiAgICBjb25zdCByYW5kb21Db29yZHMgPSB0aGlzLnJlbWFpbmluZ1Nsb3RzW2luZGV4XTtcbiAgICB0aGlzLnJlbWFpbmluZ1Nsb3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIFtyYW5kb21Db29yZHMueCwgcmFuZG9tQ29vcmRzLnldO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBDb21wdXRlciBmcm9tIFwiLi9jb21wdXRlclwiO1xuLy8gR2FtZSBoYXMgMiBnYW1lYm9hcmRzLCAxMCBzaGlwcywgMiBwbGF5ZXJzIGVhY2ggaGF2aW5nIGEgYm9hcmQgYW5kIDUgc2hpcHMsIGEgZ2FtZSBsb29wXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQodGhpcy5wbGF5ZXIpO1xuICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIocGxheWVyQm9hcmQuYm9hcmQpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKHRoaXMuY29tcHV0ZXIpO1xuICAgIHRoaXMuYm9hcmRzID0gW3BsYXllckJvYXJkLCBjb21wdXRlckJvYXJkXTtcbiAgfVxuXG4gIGdhbWVMb29wKCkge1xuICAgIHRoaXMuYm9hcmRzWzBdLnBsYWNlU2hpcHMoKTtcbiAgICB0aGlzLmJvYXJkc1sxXS5wbGFjZVNoaXBzKCk7XG4gIH1cbn1cbiIsImltcG9ydCBOb2RlIGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgIF07XG5cbiAgICAoKCkgPT4ge1xuICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKChyb3csIHgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKF8sIHkpID0+IHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gbmV3IE5vZGUoeCwgeSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIHRoaXMuc2hpcHMgPSB7XG4gICAgICBvbmU6IG5ldyBTaGlwKDEpLFxuICAgICAgdHdvOiBuZXcgU2hpcCgyKSxcbiAgICAgIHRocmVlOiBuZXcgU2hpcCgzKSxcbiAgICAgIGZvdXI6IG5ldyBTaGlwKDQpLFxuICAgICAgZml2ZTogbmV3IFNoaXAoNSksXG4gICAgfTtcbiAgfVxuXG4gIHdobygpIHtcbiAgICByZXR1cm4gdGhpcy5vd25lcjtcbiAgfVxuXG4gIC8vIHJhbmRvbWx5UGxhY2VTaGlwcygpIHtcblxuICAvLyB9XG5cbiAgcGxhY2VTaGlwcygpIHtcbiAgICBjb25zdCBjb29yZHMgPSBbXG4gICAgICBbNCwgNF0sXG4gICAgICBbMywgM10sXG4gICAgICBbMiwgMl0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMCwgMF0sXG4gICAgXTtcblxuICAgIGNvbnN0IGtleXMgPSBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCJdO1xuICAgIGNvbnN0IHNoaXBMaXN0ID0gdGhpcy5zaGlwcztcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXBMaXN0W2tleV0sIGNvb3Jkc1tpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuYm9hcmRbeF1beV07XG4gICAgaWYgKG5vZGUuc2hpcCA9PT0gbnVsbCAmJiBub2RlLmJvbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIG5vZGUuYm9tYmVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuc2hpcCAhPT0gbnVsbCAmJiBub2RlLmJvbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIG5vZGUuYm9tYmVkID0gdHJ1ZTtcbiAgICAgIG5vZGUuc2hpcC5oaXQoKTtcbiAgICB9XG4gIH1cblxuICBpc0dhbWVMb3N0KCkge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLnNoaXBzKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgYXJyYXkucHVzaCh2YWx1ZS5zdW5rKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvb2wgPSBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IHJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYm9vbDtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCBjdXJyZW50Q29vcmRzKSB7XG4gICAgY29uc3QgW3gsIHldID0gY3VycmVudENvb3JkcztcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgICBsZXQgb2NjdXBpZWQgPSBmYWxzZTtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoeSArIGxlbmd0aCAtIDEgPiA5IHx8IHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwKSB7XG4gICAgICAgIG9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt4XVt5ICsgaV0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXS5zaGlwID0gc2hpcDtcbiAgICAgICAgYXJyLnB1c2goeyB4LCB5OiB5ICsgaSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob2NjdXBpZWQgPT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLnNoaXBzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IGxlbmd0aCkge1xuICAgICAgICB0aGlzLnNoaXBzW2tleV0ueCA9IHg7XG4gICAgICAgIHRoaXMuc2hpcHNba2V5XS55ID0geTtcbiAgICAgICAgdGhpcy5zaGlwc1trZXldLmZ1bGxDb29yZHMgPSBhcnI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIG1vdmVTaGlwKHNoaXAsIGN1cnJlbnRDb29yZHMpIHtcbiAgLy8gICBjb25zdCBbeCwgeV0gPSBjdXJyZW50Q29vcmRzO1xuICAvLyAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAvLyAgIGxldCBvY2N1cGllZCA9IGZhbHNlO1xuICAvLyAgIGNvbnN0IGFyciA9IFtdO1xuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgLy8gICAgIGlmICh5ICsgbGVuZ3RoIC0gMSA+IDkgfHwgeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDApIHtcbiAgLy8gICAgICAgb2NjdXBpZWQgPSB0cnVlO1xuICAvLyAgICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3hdW3kgKyBpXS5zaGlwID09PSBudWxsKSB7XG4gIC8vICAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldLnNoaXAgPSBzaGlwO1xuICAvLyAgICAgICBhcnIucHVzaCh7IHgsIHk6IHkgKyBpIH0pO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgb2NjdXBpZWQgPSB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIGlmIChvY2N1cGllZCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAvLyAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc2hpcHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAvLyAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gIC8vICAgICAgIHRoaXMuc2hpcHNba2V5XS54ID0geDtcbiAgLy8gICAgICAgdGhpcy5zaGlwc1trZXldLnkgPSB5O1xuICAvLyAgICAgICB0aGlzLnNoaXBzW2tleV0uZnVsbENvb3JkcyA9IGFycjtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcblxuICAvLyAgIHJldHVybiB0cnVlO1xuICAvLyB9XG5cbiAgY2hhbmdlQXhpcyhzaGlwKSB7XG4gICAgY29uc3QgeyB4LCB5LCBsZW5ndGggfSA9IHNoaXA7XG4gICAgbGV0IG9jY3VwaWVkID0gZmFsc2U7XG4gICAgY29uc3QgYXJyID0gW3sgeCwgeSB9XTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2hpcC5yb3RhdGVkID09PSBmYWxzZSAmJiB0aGlzLmJvYXJkW3ggKyBpXVt5XS5zaGlwID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldLnNoaXAgPSBzaGlwO1xuICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXS5zaGlwID0gbnVsbDtcbiAgICAgICAgYXJyLnB1c2goeyB4OiB4ICsgaSwgeSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5yb3RhdGVkID09PSB0cnVlICYmIHRoaXMuYm9hcmRbeF1beSArIGldLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0uc2hpcCA9IHNoaXA7XG4gICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldLnNoaXAgPSBudWxsO1xuICAgICAgICBhcnIucHVzaCh7IHgsIHk6IHkgKyBpIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2NjdXBpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvY2N1cGllZCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5zaGlwcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zaGlwc1trZXldLnJvdGF0ZWQgPSAhc2hpcC5yb3RhdGVkO1xuICAgICAgICB0aGlzLnNoaXBzW2tleV0uZnVsbENvb3JkcyA9IGFycjtcbiAgICAgICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnNoaXAgPSBudWxsO1xuICAgIHRoaXMuYm9tYmVkID0gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGlkID0gMCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmN1cnJlbnRNb3VzZUNvb3JkcyA9IG51bGw7XG4gIH1cblxuICBnZXRDb29yZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1vdXNlQ29vcmRzO1xuICB9XG5cbiAgc2V0Q29vcmRzKGNvb3Jkcykge1xuICAgIHRoaXMuY3VycmVudE1vdXNlQ29vcmRzID0gY29vcmRzO1xuICB9XG59XG4iLCIvLyBBIHNoaXAgaGFzIGEgbGVuZ3RoLCB0cmFja3MgbnVtYmVyIHJlY2VpdmVkIGhpdHMsIGEgc3VuayBib29sZWFuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIHRoaXMucm90YXRlZCA9IGZhbHNlO1xuICAgIHRoaXMueCA9IG51bGw7XG4gICAgdGhpcy55ID0gbnVsbDtcbiAgICB0aGlzLmZ1bGxDb29yZHMgPSBbXTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuc3VuayA9PT0gdHJ1ZSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL0RPTS9jb250cm9sbGVyXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=