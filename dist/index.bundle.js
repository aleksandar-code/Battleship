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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n  flex-direction: column;\n}\n\n.content {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.board {\n  min-width: 500px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.row {\n  display: flex;\n  height: 50px;\n  width: 500px;\n}\n\nh1 {\n  text-align: center;\n  font-size: 3rem;\n}\n\n\n\n.gameover-card {\n  position: absolute;\n  z-index: 1111;\n  font-size: 3rem;\n  background: white;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  border: 1px solid black;\n}\n\n.Replay {\n  background-color: greenyellow;\n  border: none;\n  padding: 12px 20px;\n  font-size: 2rem;\n  font-weight: bold;\n  color: blue;\n  border-radius: 12px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.slot {\n  border: 1px solid rgba(16, 116, 146, 0.548); \n  display: flex;\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n\n.slot.sunk {\n  background-color: red;  \n}\n\n.slot.hit::after {\n  content: \"\";\n  border-radius: 50%;\n  border: 1px solid black;\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  background: black;\n  transform: translate(45%, 50%);}\n\n.slot.hit-ship::before,\n.slot.hit-ship::after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 4px;\n  background-color: rgb(255, 0, 0);\n  translate: -0% 555%;\n}\n\n.slot.hit-ship::before {\n    transform: rotate(45deg);\n}\n\n.slot.hit-ship::after {\n    transform: rotate(-45deg);\n}\n\n.ship {\n  height: 49px;\n  border: 3px solid #003cff;\n  cursor: move!important;\n  position: absolute!important;\n  z-index: 1000;\n  background: #003cff41;\n}\n\n.computer .ship {\n  cursor: auto!important;\n}\n\n.l5 {\n  width: calc(49.5px * 5);\n}\n\n.l5.rotated {\n  width: 49px;\n  height: calc(49.5px * 5);\n}\n\n.l4 {\n  width: calc(49.5px * 4);\n}\n\n.l4.rotated {\n  width: 49px;\n  height: calc(49.5px * 4);\n}\n\n.l3 {\n  width: calc(49.5px * 3);\n}\n\n.l3.rotated {\n  width: 49px;\n  height: calc(49.5px * 3);\n}\n\n.l2 {\n  width: calc(49.5px * 2);\n}\n\n.l2.rotated {\n  width: 49px;\n  height: calc(49.5px * 2);\n}\n\n.l1 {\n  width: 49px\n}\n\nh2 {\n  text-align: center;\n}\n\n#score {\n  position: absolute;\n  font-size: 1.7rem;\n  font-weight: bold;\n  color: #6f00ff;\n}\n\n#instructions {\n  text-align: center;\n  font-weight: 400;\n  font-size: 2rem;\n  font-style: oblique;\n}\n\n\n@media (max-width:1030px) {\n  .content {\n    flex-direction: column;\n  }\n\n  body {\n    padding: 1rem 0;\n\n  }\n  #score {\n    position: static;\n    font-size: 1.7rem;\n    font-weight: bold;\n    color: #6f00ff;\n    text-align: center;\n  }\n}\n\n@media (max-width:540px) {\n  .content {\n    flex-direction: column;\n  }\n\n  #score {\n    position: static;\n    font-size: 1.7rem;\n    font-weight: bold;\n    color: #6f00ff;\n    text-align: center;\n  }\n\n  .board {\n    min-width: 300px;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n  }\n\n  .row {\n    display: flex;\n    height: 30px;\n    width: 300px;\n  }\n\n  .slot {\n    border: 1px solid rgba(16, 116, 146, 0.548); \n    display: flex;\n    height: 30px;\n    width: 30px;\n    position: relative;\n  }\n  \n  .slot.sunk {\n    background-color: red;  \n  }\n  \n  .slot.hit::after {\n    content: \"\";\n    border-radius: 50%;\n    border: 1px solid black;\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    background: black;\n    transform: translate(45%, 50%);}\n  \n  .slot.hit-ship::before,\n  .slot.hit-ship::after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 2px;\n    background-color: rgb(255, 0, 0);\n    translate: -0% 555%;\n  }\n  \n  .slot.hit-ship::before {\n      transform: rotate(45deg);\n  }\n  \n  .slot.hit-ship::after {\n      transform: rotate(-45deg);\n  }\n  \n  .ship {\n    height: 29px;\n    border: 3px solid #003cff;\n    cursor: move!important;\n    position: absolute!important;\n    z-index: 1000;\n    background: #003cff41;\n  }\n  \n  .computer .ship {\n    cursor: auto!important;\n  }\n  \n  .l5 {\n    width: calc(29.5px * 5);\n  }\n  \n  .l5.rotated {\n    width: 29px;\n    height: calc(29.5px * 5);\n  }\n  \n  .l4 {\n    width: calc(29.5px * 4);\n  }\n  \n  .l4.rotated {\n    width: 29px;\n    height: calc(29.5px * 4);\n  }\n  \n  .l3 {\n    width: calc(29.5px * 3);\n  }\n  \n  .l3.rotated {\n    width: 29px;\n    height: calc(29.5px * 3);\n  }\n  \n  .l2 {\n    width: calc(29.5px * 2);\n  }\n  \n  .l2.rotated {\n    width: 29px;\n    height: calc(29.5px * 2);\n  }\n  \n  .l1 {\n    width: 29px\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n  flex-direction: column;\n}\n\n.content {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.board {\n  min-width: 500px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.row {\n  display: flex;\n  height: 50px;\n  width: 500px;\n}\n\nh1 {\n  text-align: center;\n  font-size: 3rem;\n}\n\n\n\n.gameover-card {\n  position: absolute;\n  z-index: 1111;\n  font-size: 3rem;\n  background: white;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  border: 1px solid black;\n}\n\n.Replay {\n  background-color: greenyellow;\n  border: none;\n  padding: 12px 20px;\n  font-size: 2rem;\n  font-weight: bold;\n  color: blue;\n  border-radius: 12px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.slot {\n  border: 1px solid rgba(16, 116, 146, 0.548); \n  display: flex;\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n\n.slot.sunk {\n  background-color: red;  \n}\n\n.slot.hit::after {\n  content: \"\";\n  border-radius: 50%;\n  border: 1px solid black;\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  background: black;\n  transform: translate(45%, 50%);}\n\n.slot.hit-ship::before,\n.slot.hit-ship::after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 4px;\n  background-color: rgb(255, 0, 0);\n  translate: -0% 555%;\n}\n\n.slot.hit-ship::before {\n    transform: rotate(45deg);\n}\n\n.slot.hit-ship::after {\n    transform: rotate(-45deg);\n}\n\n.ship {\n  height: 49px;\n  border: 3px solid #003cff;\n  cursor: move!important;\n  position: absolute!important;\n  z-index: 1000;\n  background: #003cff41;\n}\n\n.computer .ship {\n  cursor: auto!important;\n}\n\n.l5 {\n  width: calc(49.5px * 5);\n}\n\n.l5.rotated {\n  width: 49px;\n  height: calc(49.5px * 5);\n}\n\n.l4 {\n  width: calc(49.5px * 4);\n}\n\n.l4.rotated {\n  width: 49px;\n  height: calc(49.5px * 4);\n}\n\n.l3 {\n  width: calc(49.5px * 3);\n}\n\n.l3.rotated {\n  width: 49px;\n  height: calc(49.5px * 3);\n}\n\n.l2 {\n  width: calc(49.5px * 2);\n}\n\n.l2.rotated {\n  width: 49px;\n  height: calc(49.5px * 2);\n}\n\n.l1 {\n  width: 49px\n}\n\nh2 {\n  text-align: center;\n}\n\n#score {\n  position: absolute;\n  font-size: 1.7rem;\n  font-weight: bold;\n  color: #6f00ff;\n}\n\n#instructions {\n  text-align: center;\n  font-weight: 400;\n  font-size: 2rem;\n  font-style: oblique;\n}\n\n\n@media (max-width:1030px) {\n  .content {\n    flex-direction: column;\n  }\n\n  body {\n    padding: 1rem 0;\n\n  }\n  #score {\n    position: static;\n    font-size: 1.7rem;\n    font-weight: bold;\n    color: #6f00ff;\n    text-align: center;\n  }\n}\n\n@media (max-width:540px) {\n  .content {\n    flex-direction: column;\n  }\n\n  #score {\n    position: static;\n    font-size: 1.7rem;\n    font-weight: bold;\n    color: #6f00ff;\n    text-align: center;\n  }\n\n  .board {\n    min-width: 300px;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n  }\n\n  .row {\n    display: flex;\n    height: 30px;\n    width: 300px;\n  }\n\n  .slot {\n    border: 1px solid rgba(16, 116, 146, 0.548); \n    display: flex;\n    height: 30px;\n    width: 30px;\n    position: relative;\n  }\n  \n  .slot.sunk {\n    background-color: red;  \n  }\n  \n  .slot.hit::after {\n    content: \"\";\n    border-radius: 50%;\n    border: 1px solid black;\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    background: black;\n    transform: translate(45%, 50%);}\n  \n  .slot.hit-ship::before,\n  .slot.hit-ship::after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 2px;\n    background-color: rgb(255, 0, 0);\n    translate: -0% 555%;\n  }\n  \n  .slot.hit-ship::before {\n      transform: rotate(45deg);\n  }\n  \n  .slot.hit-ship::after {\n      transform: rotate(-45deg);\n  }\n  \n  .ship {\n    height: 29px;\n    border: 3px solid #003cff;\n    cursor: move!important;\n    position: absolute!important;\n    z-index: 1000;\n    background: #003cff41;\n  }\n  \n  .computer .ship {\n    cursor: auto!important;\n  }\n  \n  .l5 {\n    width: calc(29.5px * 5);\n  }\n  \n  .l5.rotated {\n    width: 29px;\n    height: calc(29.5px * 5);\n  }\n  \n  .l4 {\n    width: calc(29.5px * 4);\n  }\n  \n  .l4.rotated {\n    width: 29px;\n    height: calc(29.5px * 4);\n  }\n  \n  .l3 {\n    width: calc(29.5px * 3);\n  }\n  \n  .l3.rotated {\n    width: 29px;\n    height: calc(29.5px * 3);\n  }\n  \n  .l2 {\n    width: calc(29.5px * 2);\n  }\n  \n  .l2.rotated {\n    width: 29px;\n    height: calc(29.5px * 2);\n  }\n  \n  .l1 {\n    width: 29px\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/DOM/dragDrop.js":
/*!*************************************!*\
  !*** ./src/modules/DOM/dragDrop.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dragAndDrop(newGame) {
  const playerShips = document.querySelectorAll(".player .ship");
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
      let onTouchMove;

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

      let dragStart;

      ship.onmousedown = () => {
        dragStart();
      };

      ship.ontouchstart = (e) => {
        dragStart();
        e.preventDefault();
      };

      dragStart = () => {
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

        onTouchMove = (event2) => {
          ship.style.border = "none";
          ship.style.position = "absolute";
          ship.style.zIndex = 1000;
          ship.style.background = "none";
          fakeShip.style.background = "none";
          document.body.append(ship);
          document.body.append(fakeShip);
          fakeShip.style.border = "3px solid red";
          console.log(event2.pageX, event2.pageY);
          moveAt(event2.pageX, event2.pageY);
        };

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
        document.addEventListener("touchmove", onTouchMove);

        const mouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("touchmove", onTouchMove);
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
          ship.ontouchend = null;
        };
        ship.onmouseup = () => {
          mouseUp();
        };

        fakeShip.onmouseup = () => {
          mouseUp();
        };

        ship.ontouchend = () => {
          mouseUp();
        };

        fakeShip.ontouchend = () => {
          mouseUp();
        };
      };
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragAndDrop);


/***/ }),

/***/ "./src/modules/DOM/initializeGame.js":
/*!*******************************************!*\
  !*** ./src/modules/DOM/initializeGame.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printBoard */ "./src/modules/DOM/printBoard.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/modules/game.js");
/* harmony import */ var _dragDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragDrop */ "./src/modules/DOM/dragDrop.js");




const score = document.getElementById("score");
const instructions = document.getElementById("instructions");
let playerScore = 0;
let computerScore = 0;
let newGame = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
newGame.gameLoop();
(0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printBoards)();
(0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printShips)(newGame.boards);
let rotateShips;
let hittingSlots;
instructions.textContent = "Place your ships";
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
    instructions.textContent = "Place your ships";

    (0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printBoards)();
    (0,_printBoard__WEBPACK_IMPORTED_MODULE_0__.printShips)(newGame.boards);
    rotateShips();
    (0,_dragDrop__WEBPACK_IMPORTED_MODULE_2__["default"])(newGame);
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
              computerScore += 1;
              score.textContent = `${playerScore} - ${computerScore}`;
            }
          }
        }
      }
    }
  });
}

hittingSlots = () => {
  const nodeList = document.querySelectorAll(".computer .slot");
  const computer = document.querySelector(".computer");
  const computerSlots = Array.from(nodeList);

  computer.onclick = () => {
    instructions.textContent = "Battle has started";
  };

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
              playerScore += 1;
              score.textContent = `${playerScore} - ${computerScore}`;
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
        (0,_dragDrop__WEBPACK_IMPORTED_MODULE_2__["default"])(newGame);
      });
    });
  });
};

rotateShips();
(0,_dragDrop__WEBPACK_IMPORTED_MODULE_2__["default"])(newGame);
hittingSlots();


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
    this.boards[0].randomlyPlaceShips();
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

    this.remainingSlots = this.board.flat(Infinity);
  }

  who() {
    return this.owner;
  }

  randomlyChooseSlot() {
    const index = Math.floor(Math.random() * this.remainingSlots.length);
    const randomCoords = this.remainingSlots[index];
    this.remainingSlots.splice(index, 1);
    return [randomCoords.x, randomCoords.y];
  }

  randomlyPlaceShips() {
    const keys = ["one", "two", "three", "four", "five"];
    const shipList = this.ships;
    let bool = false;
    keys.forEach((key) => {
      bool = false;
      while (bool === false) {
        const coords = this.randomlyChooseSlot();
        bool = this.placeShip(shipList[key], coords);
      }
    });

    const board = this.board.flat(Infinity);
    let bool2 = true;
    let count = 0;
    board.forEach((node) => {
      if (count > 3) bool2 = false;
      if (node.ship !== null && bool2 === true && node.ship.length !== 1) {
        const index = node.ship.length - 1;
        const ship = shipList[keys[index]];
        const returnBool = this.changeAxis(ship);
        if (returnBool === true) count += 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFNBQVMsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcs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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS9kcmFnRHJvcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NL2luaXRpYWxpemVHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET00vcHJpbnRCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbm9kZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuXFxuXFxuLmdhbWVvdmVyLWNhcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTExMTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uUmVwbGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG59XFxuXFxuLnNsb3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMTE2LCAxNDYsIDAuNTQ4KTsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zbG90LnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAgXFxufVxcblxcbi5zbG90LmhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA1MCUpO31cXG5cXG4uc2xvdC5oaXQtc2hpcDo6YmVmb3JlLFxcbi5zbG90LmhpdC1zaGlwOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gIHRyYW5zbGF0ZTogLTAlIDU1NSU7XFxufVxcblxcbi5zbG90LmhpdC1zaGlwOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5zbG90LmhpdC1zaGlwOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5zaGlwIHtcXG4gIGhlaWdodDogNDlweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDNjZmY7XFxuICBjdXJzb3I6IG1vdmUhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBiYWNrZ3JvdW5kOiAjMDAzY2ZmNDE7XFxufVxcblxcbi5jb21wdXRlciAuc2hpcCB7XFxuICBjdXJzb3I6IGF1dG8haW1wb3J0YW50O1xcbn1cXG5cXG4ubDUge1xcbiAgd2lkdGg6IGNhbGMoNDkuNXB4ICogNSk7XFxufVxcblxcbi5sNS5yb3RhdGVkIHtcXG4gIHdpZHRoOiA0OXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjVweCAqIDUpO1xcbn1cXG5cXG4ubDQge1xcbiAgd2lkdGg6IGNhbGMoNDkuNXB4ICogNCk7XFxufVxcblxcbi5sNC5yb3RhdGVkIHtcXG4gIHdpZHRoOiA0OXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjVweCAqIDQpO1xcbn1cXG5cXG4ubDMge1xcbiAgd2lkdGg6IGNhbGMoNDkuNXB4ICogMyk7XFxufVxcblxcbi5sMy5yb3RhdGVkIHtcXG4gIHdpZHRoOiA0OXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjVweCAqIDMpO1xcbn1cXG5cXG4ubDIge1xcbiAgd2lkdGg6IGNhbGMoNDkuNXB4ICogMik7XFxufVxcblxcbi5sMi5yb3RhdGVkIHtcXG4gIHdpZHRoOiA0OXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjVweCAqIDIpO1xcbn1cXG5cXG4ubDEge1xcbiAgd2lkdGg6IDQ5cHhcXG59XFxuXFxuaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2NvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjNmYwMGZmO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDoxMDMwcHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuXFxuICB9XFxuICAjc2NvcmUge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjNmYwMGZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAjc2NvcmUge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjNmYwMGZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYm9hcmQge1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2xvdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDExNiwgMTQ2LCAwLjU0OCk7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICBcXG4gIC5zbG90LnN1bmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICBcXG4gIH1cXG4gIFxcbiAgLnNsb3QuaGl0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUlLCA1MCUpO31cXG4gIFxcbiAgLnNsb3QuaGl0LXNoaXA6OmJlZm9yZSxcXG4gIC5zbG90LmhpdC1zaGlwOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgIHRyYW5zbGF0ZTogLTAlIDU1NSU7XFxuICB9XFxuICBcXG4gIC5zbG90LmhpdC1zaGlwOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4gIFxcbiAgLnNsb3QuaGl0LXNoaXA6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbiAgXFxuICAuc2hpcCB7XFxuICAgIGhlaWdodDogMjlweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwM2NmZjtcXG4gICAgY3Vyc29yOiBtb3ZlIWltcG9ydGFudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgYmFja2dyb3VuZDogIzAwM2NmZjQxO1xcbiAgfVxcbiAgXFxuICAuY29tcHV0ZXIgLnNoaXAge1xcbiAgICBjdXJzb3I6IGF1dG8haW1wb3J0YW50O1xcbiAgfVxcbiAgXFxuICAubDUge1xcbiAgICB3aWR0aDogY2FsYygyOS41cHggKiA1KTtcXG4gIH1cXG4gIFxcbiAgLmw1LnJvdGF0ZWQge1xcbiAgICB3aWR0aDogMjlweDtcXG4gICAgaGVpZ2h0OiBjYWxjKDI5LjVweCAqIDUpO1xcbiAgfVxcbiAgXFxuICAubDQge1xcbiAgICB3aWR0aDogY2FsYygyOS41cHggKiA0KTtcXG4gIH1cXG4gIFxcbiAgLmw0LnJvdGF0ZWQge1xcbiAgICB3aWR0aDogMjlweDtcXG4gICAgaGVpZ2h0OiBjYWxjKDI5LjVweCAqIDQpO1xcbiAgfVxcbiAgXFxuICAubDMge1xcbiAgICB3aWR0aDogY2FsYygyOS41cHggKiAzKTtcXG4gIH1cXG4gIFxcbiAgLmwzLnJvdGF0ZWQge1xcbiAgICB3aWR0aDogMjlweDtcXG4gICAgaGVpZ2h0OiBjYWxjKDI5LjVweCAqIDMpO1xcbiAgfVxcbiAgXFxuICAubDIge1xcbiAgICB3aWR0aDogY2FsYygyOS41cHggKiAyKTtcXG4gIH1cXG4gIFxcbiAgLmwyLnJvdGF0ZWQge1xcbiAgICB3aWR0aDogMjlweDtcXG4gICAgaGVpZ2h0OiBjYWxjKDI5LjVweCAqIDIpO1xcbiAgfVxcbiAgXFxuICAubDEge1xcbiAgICB3aWR0aDogMjlweFxcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7Ozs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJB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RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRTtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcblxcblxcbi5nYW1lb3Zlci1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDExMTE7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLlJlcGxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxufVxcblxcbi5zbG90IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDExNiwgMTQ2LCAwLjU0OCk7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2xvdC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDsgIFxcbn1cXG5cXG4uc2xvdC5oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQ1JSwgNTAlKTt9XFxuXFxuLnNsb3QuaGl0LXNoaXA6OmJlZm9yZSxcXG4uc2xvdC5oaXQtc2hpcDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICB0cmFuc2xhdGU6IC0wJSA1NTUlO1xcbn1cXG5cXG4uc2xvdC5oaXQtc2hpcDo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uc2xvdC5oaXQtc2hpcDo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBoZWlnaHQ6IDQ5cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDAzY2ZmO1xcbiAgY3Vyc29yOiBtb3ZlIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZDogIzAwM2NmZjQxO1xcbn1cXG5cXG4uY29tcHV0ZXIgLnNoaXAge1xcbiAgY3Vyc29yOiBhdXRvIWltcG9ydGFudDtcXG59XFxuXFxuLmw1IHtcXG4gIHdpZHRoOiBjYWxjKDQ5LjVweCAqIDUpO1xcbn1cXG5cXG4ubDUucm90YXRlZCB7XFxuICB3aWR0aDogNDlweDtcXG4gIGhlaWdodDogY2FsYyg0OS41cHggKiA1KTtcXG59XFxuXFxuLmw0IHtcXG4gIHdpZHRoOiBjYWxjKDQ5LjVweCAqIDQpO1xcbn1cXG5cXG4ubDQucm90YXRlZCB7XFxuICB3aWR0aDogNDlweDtcXG4gIGhlaWdodDogY2FsYyg0OS41cHggKiA0KTtcXG59XFxuXFxuLmwzIHtcXG4gIHdpZHRoOiBjYWxjKDQ5LjVweCAqIDMpO1xcbn1cXG5cXG4ubDMucm90YXRlZCB7XFxuICB3aWR0aDogNDlweDtcXG4gIGhlaWdodDogY2FsYyg0OS41cHggKiAzKTtcXG59XFxuXFxuLmwyIHtcXG4gIHdpZHRoOiBjYWxjKDQ5LjVweCAqIDIpO1xcbn1cXG5cXG4ubDIucm90YXRlZCB7XFxuICB3aWR0aDogNDlweDtcXG4gIGhlaWdodDogY2FsYyg0OS41cHggKiAyKTtcXG59XFxuXFxuLmwxIHtcXG4gIHdpZHRoOiA0OXB4XFxufVxcblxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Njb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzZmMDBmZjtcXG59XFxuXFxuI2luc3RydWN0aW9ucyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6MTAzMHB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcblxcbiAgfVxcbiAgI3Njb3JlIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzZmMDBmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo1NDBweCkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgI3Njb3JlIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzZmMDBmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJvYXJkIHtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNsb3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAxMTYsIDE0NiwgMC41NDgpOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgXFxuICAuc2xvdC5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAgXFxuICB9XFxuICBcXG4gIC5zbG90LmhpdDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQ1JSwgNTAlKTt9XFxuICBcXG4gIC5zbG90LmhpdC1zaGlwOjpiZWZvcmUsXFxuICAuc2xvdC5oaXQtc2hpcDo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgICB0cmFuc2xhdGU6IC0wJSA1NTUlO1xcbiAgfVxcbiAgXFxuICAuc2xvdC5oaXQtc2hpcDo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuICBcXG4gIC5zbG90LmhpdC1zaGlwOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIFxcbiAgLnNoaXAge1xcbiAgICBoZWlnaHQ6IDI5cHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDNjZmY7XFxuICAgIGN1cnNvcjogbW92ZSFpbXBvcnRhbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGJhY2tncm91bmQ6ICMwMDNjZmY0MTtcXG4gIH1cXG4gIFxcbiAgLmNvbXB1dGVyIC5zaGlwIHtcXG4gICAgY3Vyc29yOiBhdXRvIWltcG9ydGFudDtcXG4gIH1cXG4gIFxcbiAgLmw1IHtcXG4gICAgd2lkdGg6IGNhbGMoMjkuNXB4ICogNSk7XFxuICB9XFxuICBcXG4gIC5sNS5yb3RhdGVkIHtcXG4gICAgd2lkdGg6IDI5cHg7XFxuICAgIGhlaWdodDogY2FsYygyOS41cHggKiA1KTtcXG4gIH1cXG4gIFxcbiAgLmw0IHtcXG4gICAgd2lkdGg6IGNhbGMoMjkuNXB4ICogNCk7XFxuICB9XFxuICBcXG4gIC5sNC5yb3RhdGVkIHtcXG4gICAgd2lkdGg6IDI5cHg7XFxuICAgIGhlaWdodDogY2FsYygyOS41cHggKiA0KTtcXG4gIH1cXG4gIFxcbiAgLmwzIHtcXG4gICAgd2lkdGg6IGNhbGMoMjkuNXB4ICogMyk7XFxuICB9XFxuICBcXG4gIC5sMy5yb3RhdGVkIHtcXG4gICAgd2lkdGg6IDI5cHg7XFxuICAgIGhlaWdodDogY2FsYygyOS41cHggKiAzKTtcXG4gIH1cXG4gIFxcbiAgLmwyIHtcXG4gICAgd2lkdGg6IGNhbGMoMjkuNXB4ICogMik7XFxuICB9XFxuICBcXG4gIC5sMi5yb3RhdGVkIHtcXG4gICAgd2lkdGg6IDI5cHg7XFxuICAgIGhlaWdodDogY2FsYygyOS41cHggKiAyKTtcXG4gIH1cXG4gIFxcbiAgLmwxIHtcXG4gICAgd2lkdGg6IDI5cHhcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vaW5pdGlhbGl6ZUdhbWVcIjtcbiIsImZ1bmN0aW9uIGRyYWdBbmREcm9wKG5ld0dhbWUpIHtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllciAuc2hpcFwiKTtcbiAgY29uc3QgcGxheWVyc1NoaXBzID0gW0FycmF5LmZyb20ocGxheWVyU2hpcHMpXTtcblxuICBwbGF5ZXJzU2hpcHMuZm9yRWFjaCgoYXJyLCBpbmRleCkgPT4ge1xuICAgIGFyci5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICBhcnJbaV0uc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuXG4gICAgICBjb25zdCBzaGlwID0gcGxheWVyc1NoaXBzW2luZGV4XVtpXTtcbiAgICAgIGNvbnN0IGZha2VTaGlwID0gc2hpcC5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgZmFrZVNoaXAuY2xhc3NMaXN0LmFkZChcImNsb25lXCIpO1xuICAgICAgc2hpcC5vbmRyYWdzdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH07XG5cbiAgICAgIGZha2VTaGlwLm9uZHJhZ3N0YXJ0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfTtcblxuICAgICAgbGV0IG9uTW91c2VNb3ZlO1xuICAgICAgbGV0IG9uVG91Y2hNb3ZlO1xuXG4gICAgICBmdW5jdGlvbiBzaG93T3V0bGluZU5vdFJvdGF0ZWQoYSwgYiwgc2hpcE9iamVjdCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChhLCBiKTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKHJlc3VsdCk7XG5cbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xvdFwiKSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgZmFrZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmYWtlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoZmFrZVNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICBpZiAoZmFrZUVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICBsZXQgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgIGxldCBvdXJTaGlwID0gZmFrZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWx1ZUluZGV4OyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAob3VyU2hpcCA9PT0gbnVsbCB8fCBvdXJTaGlwLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG91clNoaXAubmV4dFNpYmxpbmcuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3VyU2hpcCA9IG91clNoaXAubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFrZVNoaXApO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNsb3RcIikpIHtcbiAgICAgICAgICAgIGxldCBteUVsZW0gPSBlbGVtZW50O1xuICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgc2hpcE9iamVjdC5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChteUVsZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTnVtYmVyKG15RWxlbS5kYXRhc2V0LlgpID09PSBzaGlwT2JqZWN0LmZ1bGxDb29yZHNbaWR4XS54ICYmXG4gICAgICAgICAgICAgICAgTnVtYmVyKG15RWxlbS5kYXRhc2V0LlkpID09PSBzaGlwT2JqZWN0LmZ1bGxDb29yZHNbaWR4XS55XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFrZVNoaXApO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoZmFrZVNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICAgICAgaWYgKGZha2VTaGlwLnBhcmVudE5vZGUuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG91clNoaXAgPSBmYWtlU2hpcC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWx1ZUluZGV4OyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91clNoaXAubmV4dFNpYmxpbmcuZGF0YXNldC5lbXB0eSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChib29sID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG15RWxlbSA9IG15RWxlbS5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzaG93T3V0bGluZVJvdGF0ZWQoYSwgYiwgc2hpcE9iamVjdCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChhLCBiKTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKHJlc3VsdCk7XG5cbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xvdFwiKSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgZmFrZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmYWtlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoZmFrZVNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICBpZiAoZmFrZUVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICBsZXQgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgIGxldCBvdXJTaGlwID0gZmFrZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWx1ZUluZGV4OyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBvdXJTaGlwID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICBvdXJTaGlwLnBhcmVudE5vZGUubmV4dFNpYmxpbmcgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgIG91clNoaXAucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZHJlblswXSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgIG91clNoaXAucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZHJlbltcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZha2VFbGVtZW50LnBhcmVudE5vZGUuZGF0YXNldC5ZKVxuICAgICAgICAgICAgICAgICAgXS5kYXRhc2V0LmVtcHR5ID09PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTaGlwID1cbiAgICAgICAgICAgICAgICAgIG91clNoaXAucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZHJlbltcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZha2VFbGVtZW50LnBhcmVudE5vZGUuZGF0YXNldC5ZKVxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBvdXJTaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoYm9vbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBmYWtlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZha2VTaGlwKTtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCBncmVlblwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBmYWtlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbG90XCIpKSB7XG4gICAgICAgICAgICBsZXQgbXlFbGVtID0gZWxlbWVudDtcbiAgICAgICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHNoaXBPYmplY3QubGVuZ3RoOyBpZHggKz0gMSkge1xuICAgICAgICAgICAgICBpZiAobXlFbGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIE51bWJlcihteUVsZW0uZGF0YXNldC5YKSA9PT0gc2hpcE9iamVjdC5mdWxsQ29vcmRzW2lkeF0ueCAmJlxuICAgICAgICAgICAgICAgIE51bWJlcihteUVsZW0uZGF0YXNldC5ZKSA9PT0gc2hpcE9iamVjdC5mdWxsQ29vcmRzW2lkeF0ueVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZha2VTaGlwKTtcbiAgICAgICAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCBncmVlblwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKGZha2VTaGlwLmNsYXNzTGlzdFswXVsxXSkgLSAxO1xuICAgICAgICAgICAgICAgIGlmIChmYWtlU2hpcC5wYXJlbnROb2RlLmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjb25zdCBvdXJTaGlwID0gZmFrZVNoaXAucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsdWVJbmRleDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXJTaGlwLm5leHRTaWJsaW5nLmRhdGFzZXQuZW1wdHkgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYm9vbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChmYWtlU2hpcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG15RWxlbSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIG15RWxlbS5wYXJlbnROb2RlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgbXlFbGVtLnBhcmVudE5vZGUubmV4dFNpYmxpbmcgPT09IG51bGxcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbXlFbGVtID1cbiAgICAgICAgICAgICAgICBteUVsZW0ucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZHJlbltcbiAgICAgICAgICAgICAgICAgIE51bWJlcihlbGVtZW50LmRhdGFzZXQuWSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBkcmFnU3RhcnQ7XG5cbiAgICAgIHNoaXAub25tb3VzZWRvd24gPSAoKSA9PiB7XG4gICAgICAgIGRyYWdTdGFydCgpO1xuICAgICAgfTtcblxuICAgICAgc2hpcC5vbnRvdWNoc3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICBkcmFnU3RhcnQoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfTtcblxuICAgICAgZHJhZ1N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBtb3ZlQXQocGFnZVgsIHBhZ2VZKSB7XG4gICAgICAgICAgZmFrZVNoaXAuc3R5bGUubGVmdCA9IGAke3BhZ2VYIC0gc2hpcC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuICAgICAgICAgIGZha2VTaGlwLnN0eWxlLnRvcCA9IGAke3BhZ2VZIC0gc2hpcC5vZmZzZXRIZWlnaHQgLyAyfXB4YDtcbiAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHtwYWdlWCAtIHNoaXAub2Zmc2V0V2lkdGggLyAyfXB4YDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGAke3BhZ2VZIC0gc2hpcC5vZmZzZXRIZWlnaHQgLyAyfXB4YDtcblxuICAgICAgICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LnZhbHVlcyhuZXdHYW1lLmJvYXJkc1swXS5zaGlwcyk7XG4gICAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IE51bWJlcihzaGlwLmNsYXNzTGlzdFswXVsxXSkgLSAxO1xuICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJyb3RhdGVkXCIpKSB7XG4gICAgICAgICAgICBzaG93T3V0bGluZU5vdFJvdGF0ZWQoXG4gICAgICAgICAgICAgIHBhZ2VYIC0gZmFrZVNoaXAub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICAgICAgICBwYWdlWSAtIGZha2VTaGlwLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICAgICAgICAgIHNoaXBzW3ZhbHVlSW5kZXhdXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93T3V0bGluZVJvdGF0ZWQoXG4gICAgICAgICAgICAgIHBhZ2VYIC0gZmFrZVNoaXAub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICAgICAgICBwYWdlWSAtIGZha2VTaGlwLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICAgICAgICAgIHNoaXBzW3ZhbHVlSW5kZXhdXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJyb3RhdGVkXCIpKSB7XG4gICAgICAgICAgbGV0IG15U2hpcCA9IHNoaXAucGFyZW50Tm9kZTtcbiAgICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IE51bWJlcihzaGlwLmNsYXNzTGlzdFswXVsxXSk7IHMgKz0gMSkge1xuICAgICAgICAgICAgaWYgKG15U2hpcCkge1xuICAgICAgICAgICAgICBteVNoaXAuZGF0YXNldC5lbXB0eSA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICBteVNoaXAgPSBteVNoaXAubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwicm90YXRlZFwiKSkge1xuICAgICAgICAgIGxldCBteVNoaXAgPSBzaGlwLnBhcmVudE5vZGU7XG4gICAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCBOdW1iZXIoc2hpcC5jbGFzc0xpc3RbMF1bMV0pOyBzICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgbXlTaGlwID09PSBudWxsIHx8XG4gICAgICAgICAgICAgIG15U2hpcC5wYXJlbnROb2RlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgIG15U2hpcC5wYXJlbnROb2RlLm5leHRTaWJsaW5nID09PSBudWxsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBteVNoaXAuZGF0YXNldC5lbXB0eSA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgbXlTaGlwID1cbiAgICAgICAgICAgICAgbXlTaGlwLnBhcmVudE5vZGUubmV4dFNpYmxpbmcuY2hpbGRyZW5bXG4gICAgICAgICAgICAgICAgTnVtYmVyKHNoaXAucGFyZW50Tm9kZS5kYXRhc2V0LlkpXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5pdGlhbFNsb3QgPSBzaGlwLnBhcmVudE5vZGU7XG5cbiAgICAgICAgb25Ub3VjaE1vdmUgPSAoZXZlbnQyKSA9PiB7XG4gICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgIHNoaXAuc3R5bGUuekluZGV4ID0gMTAwMDtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcbiAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc2hpcCk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZmFrZVNoaXApO1xuICAgICAgICAgIGZha2VTaGlwLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50Mi5wYWdlWCwgZXZlbnQyLnBhZ2VZKTtcbiAgICAgICAgICBtb3ZlQXQoZXZlbnQyLnBhZ2VYLCBldmVudDIucGFnZVkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIG9uTW91c2VNb3ZlID0gKGV2ZW50MikgPT4ge1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLnpJbmRleCA9IDEwMDA7XG4gICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgICAgICAgZmFrZVNoaXAuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHNoaXApO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGZha2VTaGlwKTtcbiAgICAgICAgICBmYWtlU2hpcC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCByZWRcIjtcblxuICAgICAgICAgIG1vdmVBdChldmVudDIucGFnZVgsIGV2ZW50Mi5wYWdlWSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Ub3VjaE1vdmUpO1xuXG4gICAgICAgIGNvbnN0IG1vdXNlVXAgPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBvblRvdWNoTW92ZSk7XG4gICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCAjMDAzY2ZmXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMDAzY2ZmNDFcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICAgIGlmIChmYWtlU2hpcC5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJcIikuY29udGFpbnMoZmFrZVNoaXApKSB7XG4gICAgICAgICAgICAgICAgZmFrZVNoaXAucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc2hpcCwgZmFrZVNoaXApO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBPYmplY3QudmFsdWVzKG5ld0dhbWUuYm9hcmRzWzBdLnNoaXBzKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gW1xuICAgICAgICAgICAgICAgICAgTnVtYmVyKHNoaXAucGFyZW50Tm9kZS5kYXRhc2V0LlgpLFxuICAgICAgICAgICAgICAgICAgTnVtYmVyKHNoaXAucGFyZW50Tm9kZS5kYXRhc2V0LlkpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgbmV3R2FtZS5ib2FyZHNbMF0ucGxhY2VTaGlwKHNoaXBzW3ZhbHVlSW5kZXhdLCBjb29yZHMpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMoZmFrZVNoaXApKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsb3QuYXBwZW5kQ2hpbGQoc2hpcCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC52YWx1ZXMobmV3R2FtZS5ib2FyZHNbMF0uc2hpcHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBOdW1iZXIoc2hpcC5jbGFzc0xpc3RbMF1bMV0pIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBbXG4gICAgICAgICAgICAgICAgICBOdW1iZXIoaW5pdGlhbFNsb3QuZGF0YXNldC5YKSxcbiAgICAgICAgICAgICAgICAgIE51bWJlcihpbml0aWFsU2xvdC5kYXRhc2V0LlkpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgbmV3R2FtZS5ib2FyZHNbMF0ucGxhY2VTaGlwKHNoaXBzW3ZhbHVlSW5kZXhdLCBjb29yZHMpO1xuICAgICAgICAgICAgICAgIGZha2VTaGlwLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBpbml0aWFsU2xvdC5hcHBlbmRDaGlsZChzaGlwKTtcblxuICAgICAgICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC52YWx1ZXMobmV3R2FtZS5ib2FyZHNbMF0uc2hpcHMpO1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gTnVtYmVyKHNoaXAuY2xhc3NMaXN0WzBdWzFdKSAtIDE7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IFtcbiAgICAgICAgICAgICAgICBOdW1iZXIoaW5pdGlhbFNsb3QuZGF0YXNldC5YKSxcbiAgICAgICAgICAgICAgICBOdW1iZXIoaW5pdGlhbFNsb3QuZGF0YXNldC5ZKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgbmV3R2FtZS5ib2FyZHNbMF0ucGxhY2VTaGlwKHNoaXBzW3ZhbHVlSW5kZXhdLCBjb29yZHMpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJyb3RhdGVkXCIpKSB7XG4gICAgICAgICAgICAgIGxldCBteVNoaXAyID0gc2hpcC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IE51bWJlcihzaGlwLmNsYXNzTGlzdFswXVsxXSk7IHMgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChteVNoaXAyKSB7XG4gICAgICAgICAgICAgICAgICBteVNoaXAyLmRhdGFzZXQuZW1wdHkgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgICBteVNoaXAyID0gbXlTaGlwMi5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJyb3RhdGVkXCIpKSB7XG4gICAgICAgICAgICAgIGxldCBteVNoaXAyID0gc2hpcC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IE51bWJlcihzaGlwLmNsYXNzTGlzdFswXVsxXSk7IHMgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIG15U2hpcDIgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgIG15U2hpcDIucGFyZW50Tm9kZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgbXlTaGlwMi5wYXJlbnROb2RlLm5leHRTaWJsaW5nID09PSBudWxsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgbXlTaGlwMi5kYXRhc2V0LmVtcHR5ID0gXCJmYWxzZVwiO1xuICAgICAgICAgICAgICAgIG15U2hpcDIgPVxuICAgICAgICAgICAgICAgICAgbXlTaGlwMi5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkcmVuW1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc2hpcC5wYXJlbnROb2RlLmRhdGFzZXQuWSlcbiAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzaGlwLm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgICAgc2hpcC5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgc2hpcC5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICAgICAgbW91c2VVcCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZha2VTaGlwLm9ubW91c2V1cCA9ICgpID0+IHtcbiAgICAgICAgICBtb3VzZVVwKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2hpcC5vbnRvdWNoZW5kID0gKCkgPT4ge1xuICAgICAgICAgIG1vdXNlVXAoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmYWtlU2hpcC5vbnRvdWNoZW5kID0gKCkgPT4ge1xuICAgICAgICAgIG1vdXNlVXAoKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkcmFnQW5kRHJvcDtcbiIsImltcG9ydCB7IHByaW50Qm9hcmRzLCBwcmludFNoaXBzIH0gZnJvbSBcIi4vcHJpbnRCb2FyZFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL2dhbWVcIjtcbmltcG9ydCBkcmFnQW5kRHJvcCBmcm9tIFwiLi9kcmFnRHJvcFwiO1xuXG5jb25zdCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG5jb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbmxldCBwbGF5ZXJTY29yZSA9IDA7XG5sZXQgY29tcHV0ZXJTY29yZSA9IDA7XG5sZXQgbmV3R2FtZSA9IG5ldyBHYW1lKCk7XG5uZXdHYW1lLmdhbWVMb29wKCk7XG5wcmludEJvYXJkcygpO1xucHJpbnRTaGlwcyhuZXdHYW1lLmJvYXJkcyk7XG5sZXQgcm90YXRlU2hpcHM7XG5sZXQgaGl0dGluZ1Nsb3RzO1xuaW5zdHJ1Y3Rpb25zLnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIHNoaXBzXCI7XG5mdW5jdGlvbiBnYW1lT3ZlckNhcmQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJnYW1lb3Zlci1jYXJkXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkdhbWUgb3ZlclwiO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcIlJlcGxheVwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJSZXBsYXlcIjtcbiAgZWxlbWVudC5hcHBlbmQodGl0bGUsIGJ0bik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIGVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5ld0dhbWUgPSBuZXcgR2FtZSgpO1xuICAgIG5ld0dhbWUuZ2FtZUxvb3AoKTtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLnBsYXllclwiKTtcbiAgICBwbGF5ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIjtcbiAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgc2hpcHNcIjtcblxuICAgIHByaW50Qm9hcmRzKCk7XG4gICAgcHJpbnRTaGlwcyhuZXdHYW1lLmJvYXJkcyk7XG4gICAgcm90YXRlU2hpcHMoKTtcbiAgICBkcmFnQW5kRHJvcChuZXdHYW1lKTtcbiAgICBoaXR0aW5nU2xvdHMoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBpc1N1bmsoc2hpcCwgcGxheWVyKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYGwke3NoaXAubGVuZ3RofWApO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICBpZiAoc2hpcC5yb3RhdGVkID09PSB0cnVlKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVkXCIpO1xuXG4gIGNvbnN0IG5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyfSAuc2xvdGApO1xuICBjb25zdCBjb21wdXRlclNsb3RzID0gQXJyYXkuZnJvbShub2RlTGlzdCk7XG4gIGNvbXB1dGVyU2xvdHMuZm9yRWFjaCgoc2xvdCkgPT4ge1xuICAgIGlmIChcbiAgICAgIE51bWJlcihzbG90LmRhdGFzZXQuWCkgPT09IHNoaXAueCAmJlxuICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5ZKSA9PT0gc2hpcC55XG4gICAgKSB7XG4gICAgICBzbG90LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpdFBsYXllclNsb3QoKSB7XG4gIGNvbnN0IG5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIgLnNsb3RcIik7XG4gIGNvbnN0IHBsYXllclNsb3RzID0gQXJyYXkuZnJvbShub2RlTGlzdCk7XG4gIGNvbnN0IFt4LCB5XSA9IG5ld0dhbWUuYm9hcmRzWzFdLm93bmVyLnJhbmRvbWx5SGl0U2xvdCgpO1xuICBjb25zdCBib29sID0gbmV3R2FtZS5ib2FyZHNbMF0ucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgcGxheWVyU2xvdHMuZm9yRWFjaCgoc2xvdCwgaWR4KSA9PiB7XG4gICAgaWYgKFxuICAgICAgIXNsb3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpICYmXG4gICAgICAhc2xvdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXQtc2hpcFwiKVxuICAgICkge1xuICAgICAgY29uc3QgeEh0bWwgPSBOdW1iZXIoc2xvdC5kYXRhc2V0LlgpO1xuICAgICAgY29uc3QgeUh0bWwgPSBOdW1iZXIoc2xvdC5kYXRhc2V0LlkpO1xuICAgICAgaWYgKHhIdG1sID09PSB4ICYmIHlIdG1sID09PSB5KSB7XG4gICAgICAgIGlmIChib29sID09PSBmYWxzZSkge1xuICAgICAgICAgIHBsYXllclNsb3RzW2lkeF0uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJTbG90c1tpZHhdLmNsYXNzTGlzdC5hZGQoXCJoaXQtc2hpcFwiKTtcblxuICAgICAgICAgIGNvbnN0IG15U2hpcCA9IG5ld0dhbWUuYm9hcmRzWzBdLmJvYXJkW3hdW3ldLnNoaXA7XG4gICAgICAgICAgaWYgKG15U2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG15U2hpcC5zdW5rID09PSB0cnVlKSBpc1N1bmsobXlTaGlwLCBcInBsYXllclwiKTtcbiAgICAgICAgICAgIGlmIChuZXdHYW1lLmJvYXJkc1swXS5pc0dhbWVMb3N0KCkpIHtcbiAgICAgICAgICAgICAgYWxsU3VuaygpO1xuICAgICAgICAgICAgICBnYW1lT3ZlckNhcmQoKTtcbiAgICAgICAgICAgICAgY29tcHV0ZXJTY29yZSArPSAxO1xuICAgICAgICAgICAgICBzY29yZS50ZXh0Q29udGVudCA9IGAke3BsYXllclNjb3JlfSAtICR7Y29tcHV0ZXJTY29yZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmhpdHRpbmdTbG90cyA9ICgpID0+IHtcbiAgY29uc3Qgbm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyIC5zbG90XCIpO1xuICBjb25zdCBjb21wdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJcIik7XG4gIGNvbnN0IGNvbXB1dGVyU2xvdHMgPSBBcnJheS5mcm9tKG5vZGVMaXN0KTtcblxuICBjb21wdXRlci5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9IFwiQmF0dGxlIGhhcyBzdGFydGVkXCI7XG4gIH07XG5cbiAgY29tcHV0ZXJTbG90cy5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xuICAgIHNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIXNsb3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpICYmXG4gICAgICAgICFzbG90LmNsYXNzTGlzdC5jb250YWlucyhcImhpdC1zaGlwXCIpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgeCA9IE51bWJlcihzbG90LmRhdGFzZXQuWCk7XG4gICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoc2xvdC5kYXRhc2V0LlkpO1xuICAgICAgICBjb25zdCBib29sID0gbmV3R2FtZS5ib2FyZHNbMV0ucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLnBsYXllclwiKTtcbiAgICAgICAgcGxheWVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gICAgICAgIGlmIChib29sID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvbXB1dGVyU2xvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcHV0ZXJTbG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImhpdC1zaGlwXCIpO1xuXG4gICAgICAgICAgY29uc3QgbXlTaGlwID0gbmV3R2FtZS5ib2FyZHNbMV0uYm9hcmRbeF1beV0uc2hpcDtcbiAgICAgICAgICBpZiAobXlTaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobXlTaGlwLnN1bmsgPT09IHRydWUpIGlzU3VuayhteVNoaXAsIFwiY29tcHV0ZXJcIik7XG4gICAgICAgICAgICBpZiAobmV3R2FtZS5ib2FyZHNbMV0uaXNHYW1lTG9zdCgpKSB7XG4gICAgICAgICAgICAgIGFsbFN1bmsoKTtcbiAgICAgICAgICAgICAgZ2FtZU92ZXJDYXJkKCk7XG4gICAgICAgICAgICAgIHBsYXllclNjb3JlICs9IDE7XG4gICAgICAgICAgICAgIHNjb3JlLnRleHRDb250ZW50ID0gYCR7cGxheWVyU2NvcmV9IC0gJHtjb21wdXRlclNjb3JlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvb2wgPT09IGZhbHNlICYmICFuZXdHYW1lLmJvYXJkc1sxXS5pc0dhbWVMb3N0KCkpIHtcbiAgICAgICAgICBoaXRQbGF5ZXJTbG90KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5ld0dhbWUuYm9hcmRzWzFdLmlzR2FtZUxvc3QoKSkge1xuICAgICAgICAgIGhpdFBsYXllclNsb3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbnJvdGF0ZVNoaXBzID0gKCkgPT4ge1xuICBjb25zdCByZWFsUGxheWVyU2hpcHMgPSBPYmplY3QudmFsdWVzKG5ld0dhbWUuYm9hcmRzWzBdLnNoaXBzKTtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllciAuc2hpcFwiKTtcbiAgY29uc3QgcGxheWVyc1NoaXBzID0gW0FycmF5LmZyb20ocGxheWVyU2hpcHMpXTtcbiAgY29uc3QgcmVhbFBsYXllcnNTaGlwcyA9IFtyZWFsUGxheWVyU2hpcHNdO1xuICBwbGF5ZXJzU2hpcHMuZm9yRWFjaCgoYXJyLCBpKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBlbGVtZW50LmNsYXNzTGlzdFswXVsxXSAtIDE7XG4gICAgICAgIG5ld0dhbWUuYm9hcmRzW2ldLmNoYW5nZUF4aXMocmVhbFBsYXllcnNTaGlwc1tpXVtpbmRleF0pO1xuICAgICAgICBwcmludEJvYXJkcygpO1xuICAgICAgICBwcmludFNoaXBzKG5ld0dhbWUuYm9hcmRzKTtcbiAgICAgICAgaGl0dGluZ1Nsb3RzKCk7XG4gICAgICAgIHJvdGF0ZVNoaXBzKCk7XG4gICAgICAgIGRyYWdBbmREcm9wKG5ld0dhbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxucm90YXRlU2hpcHMoKTtcbmRyYWdBbmREcm9wKG5ld0dhbWUpO1xuaGl0dGluZ1Nsb3RzKCk7XG4iLCJjb25zdCBwcmludFNoaXBzID0gKGJvYXJkcykgPT4ge1xuICBjb25zdCBhcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyIC5zbG90XCIpO1xuICBjb25zdCBib2FyZERhdGEgPSBPYmplY3QudmFsdWVzKGJvYXJkc1swXS5zaGlwcyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKS5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLnJlbW92ZSgpKTtcblxuICBib2FyZERhdGEuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbCR7c2hpcC5sZW5ndGh9YCk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICBpZiAoc2hpcC5yb3RhdGVkID09PSB0cnVlKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVkXCIpO1xuICAgIGNvbnN0IGRhdGEgPSB7IHg6IHNoaXAueCwgeTogc2hpcC55IH07XG4gICAgYXJyYXkuZm9yRWFjaCgoc2xvdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5YKSA9PT0gZGF0YS54ICYmXG4gICAgICAgIE51bWJlcihzbG90LmRhdGFzZXQuWSkgPT09IGRhdGEueVxuICAgICAgKSB7XG4gICAgICAgIGFycmF5W2luZGV4XS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHNoaXAuZnVsbENvb3Jkcy5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIE51bWJlcihzbG90LmRhdGFzZXQuWCkgPT09IGNvb3Jkcy54ICYmXG4gICAgICAgICAgTnVtYmVyKHNsb3QuZGF0YXNldC5ZKSA9PT0gY29vcmRzLnlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYXJyYXlbaW5kZXhdLmRhdGFzZXQuZW1wdHkgPSBcImZhbHNlXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHByaW50Qm9hcmRzID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKS5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLnJlbW92ZSgpKTtcbiAgYm9hcmRbMF0uaW5uZXJIVE1MID0gXCJcIjtcbiAgYm9hcmRbMV0uaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgICAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwic2xvdFwiKTtcbiAgICAgICAgc2xvdC5kYXRhc2V0LlggPSB4O1xuICAgICAgICBzbG90LmRhdGFzZXQuWSA9IHk7XG4gICAgICAgIHNsb3QuZGF0YXNldC5lbXB0eSA9IFwidHJ1ZVwiO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICB9XG4gICAgICBib2FyZFtpXS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgcHJpbnRCb2FyZHMsIHByaW50U2hpcHMgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyIHtcbiAgY29uc3RydWN0b3IocGxheWVyQm9hcmQpIHtcbiAgICB0aGlzLnJlbWFpbmluZ1Nsb3RzID0gcGxheWVyQm9hcmQuZmxhdChJbmZpbml0eSk7XG4gIH1cblxuICByYW5kb21seUhpdFNsb3QoKSB7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJlbWFpbmluZ1Nsb3RzLmxlbmd0aCk7XG4gICAgY29uc3QgcmFuZG9tQ29vcmRzID0gdGhpcy5yZW1haW5pbmdTbG90c1tpbmRleF07XG4gICAgdGhpcy5yZW1haW5pbmdTbG90cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiBbcmFuZG9tQ29vcmRzLngsIHJhbmRvbUNvb3Jkcy55XTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSBcIi4vY29tcHV0ZXJcIjtcbi8vIEdhbWUgaGFzIDIgZ2FtZWJvYXJkcywgMTAgc2hpcHMsIDIgcGxheWVycyBlYWNoIGhhdmluZyBhIGJvYXJkIGFuZCA1IHNoaXBzLCBhIGdhbWUgbG9vcFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKHRoaXMucGxheWVyKTtcbiAgICB0aGlzLmNvbXB1dGVyID0gbmV3IENvbXB1dGVyKHBsYXllckJvYXJkLmJvYXJkKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gbmV3IEdhbWVib2FyZCh0aGlzLmNvbXB1dGVyKTtcbiAgICB0aGlzLmJvYXJkcyA9IFtwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZF07XG4gIH1cblxuICBnYW1lTG9vcCgpIHtcbiAgICB0aGlzLmJvYXJkc1swXS5yYW5kb21seVBsYWNlU2hpcHMoKTtcbiAgICB0aGlzLmJvYXJkc1sxXS5yYW5kb21seVBsYWNlU2hpcHMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgICBbW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXSxcbiAgICAgIFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl1dLFxuICAgICAgW1tcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXSwgW1wiXCJdLCBbXCJcIl0sIFtcIlwiXV0sXG4gICAgXTtcblxuICAgICgoKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLmZvckVhY2goKHJvdywgeCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoXywgeSkgPT4ge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBuZXcgTm9kZSh4LCB5KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgdGhpcy5zaGlwcyA9IHtcbiAgICAgIG9uZTogbmV3IFNoaXAoMSksXG4gICAgICB0d286IG5ldyBTaGlwKDIpLFxuICAgICAgdGhyZWU6IG5ldyBTaGlwKDMpLFxuICAgICAgZm91cjogbmV3IFNoaXAoNCksXG4gICAgICBmaXZlOiBuZXcgU2hpcCg1KSxcbiAgICB9O1xuXG4gICAgdGhpcy5yZW1haW5pbmdTbG90cyA9IHRoaXMuYm9hcmQuZmxhdChJbmZpbml0eSk7XG4gIH1cblxuICB3aG8oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXI7XG4gIH1cblxuICByYW5kb21seUNob29zZVNsb3QoKSB7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJlbWFpbmluZ1Nsb3RzLmxlbmd0aCk7XG4gICAgY29uc3QgcmFuZG9tQ29vcmRzID0gdGhpcy5yZW1haW5pbmdTbG90c1tpbmRleF07XG4gICAgdGhpcy5yZW1haW5pbmdTbG90cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiBbcmFuZG9tQ29vcmRzLngsIHJhbmRvbUNvb3Jkcy55XTtcbiAgfVxuXG4gIHJhbmRvbWx5UGxhY2VTaGlwcygpIHtcbiAgICBjb25zdCBrZXlzID0gW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIiwgXCJmb3VyXCIsIFwiZml2ZVwiXTtcbiAgICBjb25zdCBzaGlwTGlzdCA9IHRoaXMuc2hpcHM7XG4gICAgbGV0IGJvb2wgPSBmYWxzZTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMucmFuZG9tbHlDaG9vc2VTbG90KCk7XG4gICAgICAgIGJvb2wgPSB0aGlzLnBsYWNlU2hpcChzaGlwTGlzdFtrZXldLCBjb29yZHMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgYm9hcmQgPSB0aGlzLmJvYXJkLmZsYXQoSW5maW5pdHkpO1xuICAgIGxldCBib29sMiA9IHRydWU7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBib2FyZC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBpZiAoY291bnQgPiAzKSBib29sMiA9IGZhbHNlO1xuICAgICAgaWYgKG5vZGUuc2hpcCAhPT0gbnVsbCAmJiBib29sMiA9PT0gdHJ1ZSAmJiBub2RlLnNoaXAubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbm9kZS5zaGlwLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwTGlzdFtrZXlzW2luZGV4XV07XG4gICAgICAgIGNvbnN0IHJldHVybkJvb2wgPSB0aGlzLmNoYW5nZUF4aXMoc2hpcCk7XG4gICAgICAgIGlmIChyZXR1cm5Cb29sID09PSB0cnVlKSBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucHJldHR5UHJpbnRCb2FyZCgpO1xuICB9XG5cbiAgcGxhY2VTaGlwcygpIHtcbiAgICBjb25zdCBjb29yZHMgPSBbXG4gICAgICBbNCwgNF0sXG4gICAgICBbMywgM10sXG4gICAgICBbMiwgMl0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMCwgMF0sXG4gICAgXTtcblxuICAgIGNvbnN0IGtleXMgPSBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCJdO1xuICAgIGNvbnN0IHNoaXBMaXN0ID0gdGhpcy5zaGlwcztcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXBMaXN0W2tleV0sIGNvb3Jkc1tpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuYm9hcmRbeF1beV07XG4gICAgbGV0IGJvb2w7XG4gICAgaWYgKG5vZGUuc2hpcCA9PT0gbnVsbCAmJiBub2RlLmJvbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIG5vZGUuYm9tYmVkID0gdHJ1ZTtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuc2hpcCAhPT0gbnVsbCAmJiBub2RlLmJvbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIG5vZGUuYm9tYmVkID0gdHJ1ZTtcbiAgICAgIG5vZGUuc2hpcC5oaXQoKTtcbiAgICAgIGJvb2wgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfVxuXG4gIGlzR2FtZUxvc3QoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuc2hpcHMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBhcnJheS5wdXNoKHZhbHVlLnN1bmspO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYm9vbCA9IGFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIGlmIChlbGVtZW50ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBib29sO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIGN1cnJlbnRDb29yZHMpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBjdXJyZW50Q29vcmRzO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgIGxldCBvY2N1cGllZCA9IGZhbHNlO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgLy8gcmVtb3ZlIHNoaXAgZnJvbSBib2FyZCBpZiBpdCBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IHNoaXBDb29yZHMgPSBzaGlwLmZ1bGxDb29yZHM7XG4gICAgc2hpcENvb3Jkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLmJvYXJkW2VsZW1lbnQueF1bZWxlbWVudC55XS5zaGlwID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGlmIChzaGlwLnJvdGF0ZWQgPT09IGZhbHNlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh5ICsgbGVuZ3RoIC0gMSA+IDkgfHwgeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDApIHtcbiAgICAgICAgICBvY2N1cGllZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt4XVt5ICsgaV0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldLnNoaXAgPSBzaGlwO1xuICAgICAgICAgIGFyci5wdXNoKHsgeCwgeTogeSArIGkgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwLnJvdGF0ZWQgPT09IHRydWUpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHggKyBsZW5ndGggLSAxID4gOSB8fCB4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCkge1xuICAgICAgICAgIG9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3ggKyBpXVt5XS5zaGlwID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgYXJyLnB1c2goeyB4OiB4ICsgaSwgeSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY2N1cGllZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5zaGlwcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zaGlwc1trZXldLnggPSB4O1xuICAgICAgICB0aGlzLnNoaXBzW2tleV0ueSA9IHk7XG4gICAgICAgIHRoaXMuc2hpcHNba2V5XS5mdWxsQ29vcmRzID0gYXJyO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChvY2N1cGllZCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjaGFuZ2VBeGlzKHNoaXApIHtcbiAgICBjb25zdCB7IHgsIHksIGxlbmd0aCB9ID0gc2hpcDtcbiAgICBsZXQgb2NjdXBpZWQgPSBmYWxzZTtcbiAgICBjb25zdCBhcnIgPSBbeyB4LCB5IH1dO1xuICAgIGNvbnN0IGlmT2NjdXBpZWQgPSBzaGlwLmZ1bGxDb29yZHM7XG4gICAgY29uc3Qgc2hpcENvb3JkcyA9IHNoaXAuZnVsbENvb3JkcztcbiAgICBjb25zdCB0b1JvdGF0ZSA9IFtdO1xuXG4gICAgc2hpcENvb3Jkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLmJvYXJkW2VsZW1lbnQueF1bZWxlbWVudC55XS5zaGlwID0gbnVsbDtcbiAgICB9KTtcbiAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXAgPSBzaGlwO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKFxuICAgICAgICB4ICsgbGVuZ3RoIC0gMSA8PSA5ICYmXG4gICAgICAgIHNoaXAucm90YXRlZCA9PT0gZmFsc2UgJiZcbiAgICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0uc2hpcCA9PT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHRvUm90YXRlLnB1c2godGhpcy5ib2FyZFt4ICsgaV1beV0pO1xuICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXS5zaGlwID0gbnVsbDtcbiAgICAgICAgYXJyLnB1c2goeyB4OiB4ICsgaSwgeSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHkgKyBsZW5ndGggLSAxIDw9IDkgJiZcbiAgICAgICAgc2hpcC5yb3RhdGVkID09PSB0cnVlICYmXG4gICAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldLnNoaXAgPT09IG51bGxcbiAgICAgICkge1xuICAgICAgICB0b1JvdGF0ZS5wdXNoKHRoaXMuYm9hcmRbeF1beSArIGldKTtcbiAgICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0uc2hpcCA9IG51bGw7XG4gICAgICAgIGFyci5wdXNoKHsgeCwgeTogeSArIGkgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvY2N1cGllZCA9IHRydWU7XG4gICAgICAgIGlmT2NjdXBpZWQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuYm9hcmRbZWxlbWVudC54XVtlbGVtZW50LnldLnNoaXAgPSBzaGlwO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICBPYmplY3QuZW50cmllcyh0aGlzLnNoaXBzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5zaGlwc1trZXldLmZ1bGxDb29yZHMgPSBzaGlwQ29vcmRzO1xuICAgICAgICAgIHRoaXMuc2hpcHNba2V5XS54ID0geDtcbiAgICAgICAgICB0aGlzLnNoaXBzW2tleV0ueSA9IHk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChvY2N1cGllZCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdG9Sb3RhdGUuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcbiAgICAgIHRvUm90YXRlW2luZGV4XS5zaGlwID0gc2hpcDtcbiAgICB9KTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc2hpcHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2hpcHNba2V5XS5yb3RhdGVkID0gIXNoaXAucm90YXRlZDtcbiAgICAgICAgdGhpcy5zaGlwc1trZXldLmZ1bGxDb29yZHMgPSBhcnI7XG4gICAgICAgIHRoaXMuc2hpcHNba2V5XS54ID0geDtcbiAgICAgICAgdGhpcy5zaGlwc1trZXldLnkgPSB5O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJldHR5UHJpbnRCb2FyZCgpIHtcbiAgICBjb25zdCBteUJvYXJkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmJvYXJkKSk7XG5cbiAgICBteUJvYXJkLmZvckVhY2goKHJvdywgeCkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbCwgeSkgPT4ge1xuICAgICAgICBpZiAoY29sLnNoaXApIHtcbiAgICAgICAgICBpZiAoY29sLnNoaXAucm90YXRlZCkge1xuICAgICAgICAgICAgbXlCb2FyZFt4XVt5XSA9IGBeJHtjb2wuc2hpcC5sZW5ndGh9YDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbC5zaGlwLnJvdGF0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBteUJvYXJkW3hdW3ldID0gYDwke2NvbC5zaGlwLmxlbmd0aH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBteUJvYXJkW3hdW3ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gICAgdGhpcy5ib21iZWQgPSBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoaWQgPSAwKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuY3VycmVudE1vdXNlQ29vcmRzID0gbnVsbDtcbiAgfVxuXG4gIGdldENvb3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TW91c2VDb29yZHM7XG4gIH1cblxuICBzZXRDb29yZHMoY29vcmRzKSB7XG4gICAgdGhpcy5jdXJyZW50TW91c2VDb29yZHMgPSBjb29yZHM7XG4gIH1cbn1cbiIsIi8vIEEgc2hpcCBoYXMgYSBsZW5ndGgsIHRyYWNrcyBudW1iZXIgcmVjZWl2ZWQgaGl0cywgYSBzdW5rIGJvb2xlYW5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5yb3RhdGVkID0gZmFsc2U7XG4gICAgdGhpcy54ID0gbnVsbDtcbiAgICB0aGlzLnkgPSBudWxsO1xuICAgIHRoaXMuZnVsbENvb3JkcyA9IFtdO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5zdW5rID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvRE9NL2NvbnRyb2xsZXJcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==