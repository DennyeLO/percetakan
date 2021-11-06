(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@coreui/icons-react/es/CIcon.css":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/icons-react/es/CIcon.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./CIcon.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@coreui/icons-react/es/CIcon.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@coreui/icons-react/es/CIcon.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/icons-react/es/CIcon.js ***!
  \******************************************************/
/*! exports provided: default, CIconWarn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIconWarn", function() { return CIconWarn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CIcon_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CIcon.css */ "./node_modules/@coreui/icons-react/es/CIcon.css");
/* harmony import */ var _CIcon_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CIcon_css__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var warned = {};

var colog = function colog(msg, icon) {
  if (!warned[icon] && process && process.env && "development" === 'development') {
    warned[icon] = true;
    console.error(msg);
  }
};

var toCamelCase = function toCamelCase(str) {
  return str.replace(/([-_][a-z0-9])/ig, function ($1) {
    return $1.toUpperCase();
  }).replace(/-/ig, '');
}; //component - CoreUI / CIcon


var CIcon = function CIcon(props) {
  var className = props.className,
      name = props.name,
      content = props.content,
      customClasses = props.customClasses,
      size = props.size,
      src = props.src,
      title = props.title,
      use = props.use,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "name", "content", "customClasses", "size", "src", "title", "use"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      change = _useState[0],
      setChange = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return setChange(change + 1);
  }, [name, JSON.stringify[content]]);
  var iconName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var iconNameIsKebabCase = name && name.includes('-');
    return iconNameIsKebabCase ? toCamelCase(name) : name;
  }, [change]);
  var titleCode = title ? "<title>" + title + "</title>" : '';
  var code = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (content) {
      return content;
    } else if (name && react__WEBPACK_IMPORTED_MODULE_0___default.a.icons) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.icons[iconName] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.icons[iconName] : colog("CIcon component: icon name '" + iconName + "' does not exist in React.icons object. " + "To use icons by 'name' prop you need to make them available globally " + "by adding them to React.icons object. CIcon component docs: https://coreui.io/react/docs/components/CIcon \n", iconName);
    }
  }, [change]);
  var iconCode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Array.isArray(code) ? code[1] || code[0] : code;
  }, [change]);

  var scale = function () {
    return Array.isArray(code) && code.length > 1 ? code[0] : '64 64';
  }();

  var viewBox = function () {
    return attributes.viewBox || "0 0 " + scale;
  }();

  var computedSize = function () {
    var addCustom = !size && (attributes.width || attributes.height);
    return size === 'custom' || addCustom ? 'custom-size' : size;
  }(); //render


  var computedClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('c-icon', computedSize && "c-icon-" + computedSize, className);
  var classes = customClasses || computedClasses;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !src && !use && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, attributes, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: viewBox,
    className: classes,
    role: "img",
    dangerouslySetInnerHTML: {
      __html: titleCode + iconCode
    }
  })), src && !use && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({}, attributes, {
    className: className,
    src: src,
    role: "img"
  })), !src && use && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, attributes, {
    xmlns: "http://www.w3.org/2000/svg",
    className: classes,
    role: "img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    href: use
  })));
};

CIcon.propTypes =  true ? {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['custom', 'custom-size', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']),
  customClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  use: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CIcon);
var CIconWarn = function CIconWarn(props) {
  colog('@coreui/icons-react: Please use default export since named exports are deprecated');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CIcon, props);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@coreui/icons-react/es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/icons-react/es/index.js ***!
  \******************************************************/
/*! exports provided: default, CIcon, CIconRaw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CIcon */ "./node_modules/@coreui/icons-react/es/CIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CIcon", function() { return _CIcon__WEBPACK_IMPORTED_MODULE_0__["CIconWarn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CIconRaw", function() { return _CIcon__WEBPACK_IMPORTED_MODULE_0__["CIconWarn"]; });


/* harmony default export */ __webpack_exports__["default"] = (_CIcon__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@coreui/react/es/alert/CAlert.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/alert/CAlert.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fade_CFade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fade/CFade */ "./node_modules/@coreui/react/es/fade/CFade.js");
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _button_CButtonClose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../button/CButtonClose */ "./node_modules/@coreui/react/es/button/CButtonClose.js");








 //component - CoreUI / CAlert

var CAlert = function CAlert(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      onShowChange = props.onShowChange,
      closeButton = props.closeButton,
      color = props.color,
      fade = props.fade,
      show = props.show,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "innerRef", "onShowChange", "closeButton", "color", "fade", "show"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'alert', (_classNames = {}, _classNames["alert-" + color] = color, _classNames['alert-dismissible'] = closeButton, _classNames));
  var alertTransition = {
    baseClass: fade ? _fade_CFade__WEBPACK_IMPORTED_MODULE_5__["default"].baseClass : '',
    timeout: fade ? _fade_CFade__WEBPACK_IMPORTED_MODULE_5__["default"].timeout : 0,
    unmountOnExit: true
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(show),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setIsOpen(show);
  }, [show]);
  var timeout = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onShowChange && onShowChange(isOpen);
    clearTimeout(timeout.current);

    if (typeof isOpen === 'number' && isOpen > 0) {
      timeout.current = setTimeout(function () {
        setIsOpen(isOpen - 1);
      }, 1000);
    }

    return function () {
      return clearTimeout(timeout.current);
    };
  }, [isOpen]);
  var attrs = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_6__["omitByKeys"])(attributes, _utils_helper_js__WEBPACK_IMPORTED_MODULE_7__["CFadeProps"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fade_CFade__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, alertTransition, {
    className: classes,
    in: Boolean(isOpen),
    role: "alert"
  }, attrs, {
    innerRef: innerRef
  }), children, closeButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_CButtonClose__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }));
};

CAlert.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  onShowChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  fade: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  show: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};
CAlert.defaultProps = {
  show: true,
  fade: true
};
/* harmony default export */ __webpack_exports__["default"] = (CAlert);

/***/ }),

/***/ "./node_modules/@coreui/react/es/badge/CBadge.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/badge/CBadge.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");






 //component - CoreUI / CBadge

var CBadge = function CBadge(props) {
  var _classNames, _ref;

  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      shape = props.shape,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "color", "shape"]); // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'badge', (_classNames = {}, _classNames["badge-" + color] = color, _classNames["badge-" + shape] = shape, _classNames));
  var Tag = attributes.to || attributes.href ? _link_CLink__WEBPACK_IMPORTED_MODULE_6__["default"] : tag;
  var ref = (_ref = {}, _ref["" + (typeof Tag === 'string' ? 'ref' : 'innerRef')] = innerRef, _ref);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, ref));
};

CBadge.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  shape: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'pill'])
};
CBadge.defaultProps = {
  tag: 'span'
};
/* harmony default export */ __webpack_exports__["default"] = (CBadge);

/***/ }),

/***/ "./node_modules/@coreui/react/es/breadcrumb/CBreadcrumb.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/breadcrumb/CBreadcrumb.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CBreadcrumb

var CBreadcrumb = function CBreadcrumb(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'breadcrumb'); //render

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CBreadcrumb.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CBreadcrumb);

/***/ }),

/***/ "./node_modules/@coreui/react/es/breadcrumb/CBreadcrumbItem.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/breadcrumb/CBreadcrumbItem.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CBreadcrumbItem

var CBreadcrumbItem = function CBreadcrumbItem(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "active"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, active ? 'active' : false, 'breadcrumb-item');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    role: "presentation",
    "aria-current": active ? 'page' : undefined
  }, attributes, {
    ref: innerRef
  }));
};

CBreadcrumbItem.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CBreadcrumbItem);

/***/ }),

/***/ "./node_modules/@coreui/react/es/breadcrumb/CBreadcrumbRouter.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/breadcrumb/CBreadcrumbRouter.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 //component - CoreUI / CBreadcrumbRouter

var getPaths = function getPaths(pathname) {
  var paths = ['/'];
  if (pathname === '/') return paths;
  pathname.split('/').reduce(function (prev, curr) {
    var currPath = prev + "/" + curr;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

var CBreadcrumbRouteItem = function CBreadcrumbRouteItem(_ref, fullCurrPath) {
  var name = _ref.name,
      currPath = _ref.currPath;

  if (currPath === fullCurrPath) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_6__["CBreadcrumbItem"], {
      key: currPath,
      active: true
    }, name);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_6__["CBreadcrumbItem"], {
      key: currPath
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: currPath
    }, name));
  }
};

var CBreadcrumbRouter = function CBreadcrumbRouter(props) {
  var className = props.className,
      innerRef = props.innerRef,
      routes = props.routes,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "innerRef", "routes"]);

  var items = null;

  if (routes) {
    var currPath = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useLocation"])().pathname;
    var paths = getPaths(currPath);
    var currRoutes = paths.map(function (currPath) {
      var route = routes.find(function (route) {
        return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["matchPath"])(currPath, {
          path: route.path,
          exact: route.exact
        });
      });
      return _objectSpread(_objectSpread({}, route), {}, {
        currPath: currPath
      });
    }).filter(function (route) {
      return route && route.name;
    });
    items = currRoutes.map(function (route) {
      return CBreadcrumbRouteItem(route, currPath);
    });
  } //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_6__["CBreadcrumb"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }), items);
};

CBreadcrumbRouter.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),
  routes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (CBreadcrumbRouter);

/***/ }),

/***/ "./node_modules/@coreui/react/es/button/CButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/button/CButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");






 //component - CoreUI / CButton

var CButton = function CButton(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      onClick = props.onClick,
      disabled = props.disabled,
      active = props.active,
      block = props.block,
      color = props.color,
      size = props.size,
      pressed = props.pressed,
      shape = props.shape,
      variant = props.variant,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "onClick", "disabled", "active", "block", "color", "size", "pressed", "shape", "variant"]);

  var click = function click(e) {
    return !disabled && onClick && onClick(e);
  };

  var isLink = attributes.to || attributes.href; //render

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'btn', variant || color ? "btn" + (variant ? '-' + variant : '') + "-" + color : false, size ? "btn-" + size : false, block ? 'btn-block' : false, shape ? "btn-" + shape : false, pressed ? 'btn-pressed' : false, {
    'active': active && !isLink,
    'disabled': disabled && !isLink
  });

  if (isLink) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_link_CLink__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      active: active,
      disabled: disabled,
      className: classes,
      onClick: click,
      innerRef: innerRef
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes,
      type: "button",
      disabled: disabled
    }, attributes, {
      onClick: click,
      ref: innerRef
    }));
  }
};

CButton.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  shape: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'ghost', 'outline']),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  pressed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CButton.defaultProps = {
  tag: 'button'
}; //export

/* harmony default export */ __webpack_exports__["default"] = (CButton);

/***/ }),

/***/ "./node_modules/@coreui/react/es/button/CButtonClose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/react/es/button/CButtonClose.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CButtonClose

var CButtonClose = function CButtonClose(props) {
  var children = props.children,
      className = props.className,
      buttonClass = props.buttonClass,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "buttonClass", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(buttonClass, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    "aria-label": "Close"
  }, attributes, {
    ref: innerRef
  }), children || String.fromCharCode(215));
};

CButtonClose.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  buttonClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CButtonClose.defaultProps = {
  buttonClass: 'close'
};
/* harmony default export */ __webpack_exports__["default"] = (CButtonClose);

/***/ }),

/***/ "./node_modules/@coreui/react/es/button/CButtonGroup.js":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/react/es/button/CButtonGroup.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CButtonGroup

var CButtonGroup = function CButtonGroup(props) {
  var className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      vertical = props.vertical,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "size", "vertical"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    role: "group"
  }, attributes, {
    ref: innerRef
  }));
};

CButtonGroup.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'sm', 'lg']),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CButtonGroup);

/***/ }),

/***/ "./node_modules/@coreui/react/es/button/CButtonToolbar.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/button/CButtonToolbar.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CButtonToolbar

var CButtonToolbar = function CButtonToolbar(props) {
  var _classNames;

  var className = props.className,
      innerRef = props.innerRef,
      justify = props.justify,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "justify"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'btn-toolbar', (_classNames = {}, _classNames["justify-content-" + justify] = justify, _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    role: "toolbar",
    "aria-label": "toolbar"
  }, attributes, {
    ref: innerRef
  }));
};

CButtonToolbar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  role: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  justify: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'start', 'end', 'between', 'center'])
};
/* harmony default export */ __webpack_exports__["default"] = (CButtonToolbar);

/***/ }),

/***/ "./node_modules/@coreui/react/es/callout/CCallout.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/callout/CCallout.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CCallout

var CCallout = function CCallout(props) {
  var className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "color"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-callout', color ? 'c-callout-' + color : null, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCallout.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CCallout);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCard.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCard.js ***!
  \*****************************************************/
/*! exports provided: sharedPropTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedPropTypes", function() { return sharedPropTypes; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //component - CoreUI / CCard

var CCard = function CCard(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      textColor = props.textColor,
      borderColor = props.borderColor,
      align = props.align,
      accentColor = props.accentColor,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["tag", "className", "innerRef", "color", "textColor", "borderColor", "align", "accentColor"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'card', align ? "text-" + align : false, textColor ? "text-" + textColor : false, color ? "bg-" + color : false, borderColor ? "border-" + borderColor : false, accentColor ? "card-accent-" + accentColor : false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

var sharedPropTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['', 'left', 'center', 'right']),
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
CCard.propTypes = _objectSpread({
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),
  accentColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
}, sharedPropTypes);
CCard.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CCard);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCardBody.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCardBody.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _CCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CCard */ "./node_modules/@coreui/react/es/card/CCard.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 //component - CoreUI / CCardBody

var CCardBody = function CCardBody(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      textColor = props.textColor,
      borderColor = props.borderColor,
      align = props.align,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["tag", "className", "innerRef", "color", "textColor", "borderColor", "align"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'card-body', align ? "text-" + align : false, textColor ? "text-" + textColor : false, color ? "bg-" + color : false, borderColor ? "border-" + borderColor : false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCardBody.propTypes = _objectSpread({
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func])
}, _CCard__WEBPACK_IMPORTED_MODULE_7__["sharedPropTypes"]);
CCardBody.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CCardBody);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCardFooter.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCardFooter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _CCard_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CCard.js */ "./node_modules/@coreui/react/es/card/CCard.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 //component - CoreUI / CCardFooter

var CCardFooter = function CCardFooter(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      textColor = props.textColor,
      borderColor = props.borderColor,
      align = props.align,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["tag", "className", "innerRef", "color", "textColor", "borderColor", "align"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'card-footer', align ? "text-" + align : false, textColor ? "text-" + textColor : false, color ? "bg-" + color : false, borderColor ? "border-" + borderColor : false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCardFooter.propTypes = _objectSpread({
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func])
}, _CCard_js__WEBPACK_IMPORTED_MODULE_7__["sharedPropTypes"]);
CCardFooter.defaultProps = {
  tag: 'footer'
};
/* harmony default export */ __webpack_exports__["default"] = (CCardFooter);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCardGroup.js":
/*!**********************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCardGroup.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CCardGroup

var CCardGroup = function CCardGroup(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      deck = props.deck,
      columns = props.columns,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "deck", "columns"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()("card-" + (columns ? 'columns' : deck ? 'deck' : 'group'), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCardGroup.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  deck: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CCardGroup.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CCardGroup);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCardHeader.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCardHeader.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _CCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CCard */ "./node_modules/@coreui/react/es/card/CCard.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 //component - CoreUI / CCardHeader

var CCardHeader = function CCardHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      textColor = props.textColor,
      borderColor = props.borderColor,
      align = props.align,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["tag", "className", "innerRef", "color", "textColor", "borderColor", "align"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'card-header', align ? "text-" + align : false, textColor ? "text-" + textColor : false, color ? "bg-" + color : false, borderColor ? "border-" + borderColor : false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCardHeader.propTypes = _objectSpread({
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func])
}, _CCard__WEBPACK_IMPORTED_MODULE_7__["sharedPropTypes"]);
CCardHeader.defaultProps = {
  tag: 'header'
};
/* harmony default export */ __webpack_exports__["default"] = (CCardHeader);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCardImg.js":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCardImg.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image_CImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/CImg */ "./node_modules/@coreui/react/es/image/CImg.js");




 //component - CoreUI / CCardImg

var CCardImg = function CCardImg(props) {
  var variant = props.variant,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["variant"]);

  var classSuffix = variant !== 'full' ? "-" + variant : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_image_CImg__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: ["card-img" + classSuffix, rest.className]
  }));
};

CCardImg.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'top', 'bottom', 'full'])
};
CCardImg.defaultProps = {
  variant: 'full'
};
/* harmony default export */ __webpack_exports__["default"] = (CCardImg);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCardImgOverlay.js":
/*!***************************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCardImgOverlay.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CCardImgOverlay

var CCardImgOverlay = function CCardImgOverlay(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-img-overlay');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCardImgOverlay.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CCardImgOverlay.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CCardImgOverlay);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCardLink.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCardLink.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");


/* eslint react/prop-types: 0 */



var CCardLink = function CCardLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_link_CLink__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: ['card-link', props.className]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CCardLink);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCardSubtitle.js":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCardSubtitle.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CCardSubtitle

var CCardSubtitle = function CCardSubtitle(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-subtitle');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCardSubtitle.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CCardSubtitle.defaultProps = {
  tag: 'h6'
};
/* harmony default export */ __webpack_exports__["default"] = (CCardSubtitle);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCardText.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCardText.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CCardText

var CCardText = function CCardText(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-text');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCardText.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CCardText.defaultProps = {
  tag: 'p'
};
/* harmony default export */ __webpack_exports__["default"] = (CCardText);

/***/ }),

/***/ "./node_modules/@coreui/react/es/card/CCardTitle.js":
/*!**********************************************************!*\
  !*** ./node_modules/@coreui/react/es/card/CCardTitle.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CCardTitle

var CCardTitle = function CCardTitle(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-title');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCardTitle.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CCardTitle.defaultProps = {
  tag: 'h4'
};
/* harmony default export */ __webpack_exports__["default"] = (CCardTitle);

/***/ }),

/***/ "./node_modules/@coreui/react/es/carousel/CCarousel.js":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/react/es/carousel/CCarousel.js ***!
  \*************************************************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({}); //component - CoreUI / CCarousel

var CCarousel = function CCarousel(props) {
  var className = props.className,
      innerRef = props.innerRef,
      autoSlide = props.autoSlide,
      activeIndex = props.activeIndex,
      animate = props.animate,
      onSlideChange = props.onSlideChange,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "autoSlide", "activeIndex", "animate", "onSlideChange"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([null, activeIndex]),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      itemNumber = _useState2[0],
      setItemNumber = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      animating = _useState3[0],
      setAnimating = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setState([state[1], activeIndex]);
  }, [activeIndex]);
  var timeout = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var setNext = function setNext() {
    reset();

    if (autoSlide) {
      timeout.current = setTimeout(function () {
        return nextItem();
      }, autoSlide);
    }
  };

  var reset = function reset() {
    return clearTimeout(timeout.current);
  };

  var nextItem = function nextItem() {
    setState([state[1], itemNumber === state[1] + 1 ? 0 : state[1] + 1, 'next']);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onSlideChange && onSlideChange(state[1]);
    setNext();
    return function () {
      return reset();
    };
  }, [state]);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('carousel', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    onMouseEnter: reset,
    onMouseLeave: setNext
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Context.Provider, {
    value: {
      state: state,
      setState: setState,
      animate: animate,
      itemNumber: itemNumber,
      setItemNumber: setItemNumber,
      animating: animating,
      setAnimating: setAnimating
    }
  }, props.children));
};

CCarousel.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  autoSlide: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  animate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onSlideChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
CCarousel.defaultProps = {
  activeIndex: 0
};
/* harmony default export */ __webpack_exports__["default"] = (CCarousel);

/***/ }),

/***/ "./node_modules/@coreui/react/es/carousel/CCarouselCaption.js":
/*!********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/carousel/CCarouselCaption.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CCarouselCaption

var CCarouselCaption = function CCarouselCaption(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('carousel-caption', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCarouselCaption.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CCarouselCaption);

/***/ }),

/***/ "./node_modules/@coreui/react/es/carousel/CCarouselControl.js":
/*!********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/carousel/CCarouselControl.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CCarousel */ "./node_modules/@coreui/react/es/carousel/CCarousel.js");





 //component - CoreUI / CCarouselControl

var CCarouselControl = function CCarouselControl(props) {
  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      direction = props.direction,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children", "innerRef", "direction"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CCarousel__WEBPACK_IMPORTED_MODULE_5__["Context"]),
      state = _useContext.state,
      setState = _useContext.setState,
      itemNumber = _useContext.itemNumber,
      animating = _useContext.animating;

  var onClick = function onClick() {
    if (animating) {
      return;
    }

    var newIdx;

    if (direction === 'next') {
      newIdx = itemNumber === state[1] + 1 ? 0 : state[1] + 1;
    } else {
      newIdx = state[1] === 0 ? itemNumber - 1 : state[1] - 1;
    }

    setState([state[1], newIdx, direction]);
  }; //render


  var anchorClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()("carousel-control-" + direction, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: anchorClasses
  }, attributes, {
    onClick: onClick,
    ref: innerRef
  }), children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "carousel-control-" + direction + "-icon",
    "aria-label": direction
  }));
};

CCarouselControl.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['prev', 'next']).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CCarouselControl);

/***/ }),

/***/ "./node_modules/@coreui/react/es/carousel/CCarouselIndicators.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/carousel/CCarouselIndicators.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CCarousel */ "./node_modules/@coreui/react/es/carousel/CCarousel.js");





 //component - CoreUI / CCarouselIndicators

var CCarouselIndicators = function CCarouselIndicators(props) {
  var className = props.className,
      innerRef = props.innerRef,
      indicatorsClass = props.indicatorsClass,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "indicatorsClass"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CCarousel__WEBPACK_IMPORTED_MODULE_5__["Context"]),
      itemNumber = _useContext.itemNumber,
      state = _useContext.state,
      setState = _useContext.setState,
      animating = _useContext.animating; //render


  var listClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(indicatorsClass, className);
  var indicators = Array.from({
    length: itemNumber
  }, function (_, i) {
    return i;
  }).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: "indicator" + key,
      onClick: function onClick() {
        !animating && key !== state[1] && setState([state[1], key]);
      },
      className: state[1] === key ? 'active' : ''
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: listClasses
  }, attributes, {
    ref: innerRef
  }), indicators);
};

CCarouselIndicators.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  indicatorsClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
CCarouselIndicators.defaultProps = {
  indicatorsClass: 'carousel-indicators'
};
/* harmony default export */ __webpack_exports__["default"] = (CCarouselIndicators);

/***/ }),

/***/ "./node_modules/@coreui/react/es/carousel/CCarouselInner.js":
/*!******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/carousel/CCarouselInner.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CCarouselInner

var CCarouselInner = function CCarouselInner(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('carousel-inner', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCarouselInner.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CCarouselInner);

/***/ }),

/***/ "./node_modules/@coreui/react/es/carousel/CCarouselItem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/carousel/CCarouselItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _CCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CCarousel */ "./node_modules/@coreui/react/es/carousel/CCarousel.js");






 //component - CoreUI / CCarouselItem

var getIndex = function getIndex(el) {
  return Array.from(el.parentNode.children).indexOf(el);
};

var getDirection = function getDirection(state) {
  if (state[2]) {
    return state[2] === 'next' ? 'right' : 'left';
  } else {
    return state[1] > state[0] ? 'right' : 'left';
  }
};

var CCarouselItem = function CCarouselItem(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "innerRef"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CCarousel__WEBPACK_IMPORTED_MODULE_6__["Context"]),
      animate = _useContext.animate,
      state = _useContext.state,
      itemNumber = _useContext.itemNumber,
      setItemNumber = _useContext.setItemNumber,
      animating = _useContext.animating,
      setAnimating = _useContext.setAnimating;

  var ref = typeof innerRef === 'object' ? innerRef : Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  typeof innerRef === 'function' && innerRef(ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      isIn = _useState[0],
      setIsIn = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!itemNumber) {
      setItemNumber(ref.current.parentNode.children.length);
    }

    setIsIn(state[1] === getIndex(ref.current));
  }, [state]);

  var onEnter = function onEnter() {
    setAnimating(false);
  };

  var onEntering = function onEntering() {
    /* eslint-disable no-unused-vars */
    var offsetHeight = ref.current.offsetHeight;
    setAnimating(true);
    /* eslint-enable no-unused-vars */
  };

  var onExit = function onExit() {
    setAnimating(false);
  };

  var onExiting = function onExiting() {
    setAnimating(true);
  };

  var onExited = function onExited() {
    setAnimating(false);
  }; // const nodeRef = React.useRef()
  //render


  if (!animate || state[0] === null) {
    var itemClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('carousel-item', isIn && 'active', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: itemClasses,
      ref: ref
    }, attributes), children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["Transition"], {
    timeout: 600,
    in: isIn,
    onEnter: onEnter,
    onEntering: onEntering,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    nodeRef: ref
  }, function (status) {
    var direction = getDirection(state);
    var isActive = status === 'entered' || status === 'exiting';
    var directionClassName = (status === 'entering' || status === 'exiting') && animating && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
    var orderClassName = status === 'entering' && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
    var itemClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('carousel-item', isActive && 'active', directionClassName, orderClassName, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: itemClasses,
      ref: ref
    }, attributes), children);
  });
};

CCarouselItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CCarouselItem);

/***/ }),

/***/ "./node_modules/@coreui/react/es/collapse/CCollapse.js":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/react/es/collapse/CCollapse.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var getTransitionClass = function getTransitionClass(s) {
  return s === 'entering' ? 'collapsing' : s === 'entered' ? 'collapse show' : s === 'exiting' ? 'collapsing' : 'collapse';
}; //component - CoreUI / CCollapse


var CCollapse = function CCollapse(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      show = props.show,
      navbar = props.navbar,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "className", "innerRef", "show", "navbar"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      height = _useState[0],
      setHeight = _useState[1];

  var ref = typeof innerRef === 'object' ? innerRef : Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  typeof innerRef === 'function' && innerRef(ref);

  var onEntering = function onEntering() {
    setHeight(ref.current.scrollHeight);
  };

  var onEntered = function onEntered() {
    setHeight(null);
  };

  var onExit = function onExit() {
    setHeight(ref.current.scrollHeight);
  };

  var onExiting = function onExiting() {
    var _unused = ref.current.offsetHeight; // eslint-disable-line no-unused-vars

    setHeight(0);
  };

  var onExited = function onExited() {
    setHeight(null);
  }; //render


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_6__["Transition"], {
    in: show,
    timeout: 350,
    appear: false,
    enter: true,
    exit: true,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    nodeRef: ref
  }, function (status) {
    var collapseClass = getTransitionClass(status);
    var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, collapseClass, navbar && 'navbar-collapse');
    var style = height === null ? null : {
      height: height
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      style: _objectSpread(_objectSpread({}, attributes.style), style),
      className: classes,
      ref: ref
    }), children);
  });
};

CCollapse.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),
  show: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CCollapse);

/***/ }),

/***/ "./node_modules/@coreui/react/es/create-element/CCreateElement.js":
/*!************************************************************************!*\
  !*** ./node_modules/@coreui/react/es/create-element/CCreateElement.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);



 //component - CoreUI / CCreateElement

var CCreateElement = function CCreateElement(_ref) {
  var items = _ref.items,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components;

  var renderItem = function renderItem(item, i) {
    var _tag = item._tag,
        _children = item._children,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(item, ["_tag", "_children"]);

    var Tag = components[_tag] || _tag;
    var children = _children ? _children.map(function (child, i) {
      return typeof child === 'object' ? renderItem(child, i) : child;
    }) : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: Tag + i
    }, rest), children);
  };

  var generatedItems = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return items && items.map(function (item, i) {
      return renderItem(item, i);
    });
  }, [JSON.stringify(items)]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, generatedItems);
};

CCreateElement.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CCreateElement);

/***/ }),

/***/ "./node_modules/@coreui/react/es/dropdown/CDropdown.js":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/react/es/dropdown/CDropdown.js ***!
  \*************************************************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");






var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({}); //component - CoreUI / CDropdown

var CDropdown = function CDropdown(props) {
  var className = props.className,
      tag = props.tag,
      innerRef = props.innerRef,
      inNav = props.inNav,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "tag", "innerRef", "inNav"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      reference = _useState[0],
      setReference = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      split = _useState3[0],
      setSplit = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      placement = _useState4[0],
      setPlacement = _useState4[1];

  var carretClass = placement.includes('top') ? 'dropup' : placement.includes('right') ? 'dropright' : placement.includes('left') ? 'dropleft' : 'dropdown';
  var Tag = tag || (inNav ? 'li' : 'div');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, carretClass, {
    'nav-item': inNav,
    'btn-group': split,
    'show': isOpen
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Context.Provider, {
    value: {
      isOpen: isOpen,
      setIsOpen: setIsOpen,
      reference: reference,
      setReference: setReference,
      inNav: inNav,
      setSplit: setSplit,
      setPlacement: setPlacement
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  })));
};

CDropdown.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  inNav: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CDropdown);

/***/ }),

/***/ "./node_modules/@coreui/react/es/dropdown/CDropdownDivider.js":
/*!********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/dropdown/CDropdownDivider.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CDropdownItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CDropdownItem */ "./node_modules/@coreui/react/es/dropdown/CDropdownItem.js");


 //component - CoreUI / CDropdownDivider

var CDropdownDivider = function CDropdownDivider(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CDropdownItem__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    divider: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CDropdownDivider);

/***/ }),

/***/ "./node_modules/@coreui/react/es/dropdown/CDropdownHeader.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/dropdown/CDropdownHeader.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CDropdownItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CDropdownItem */ "./node_modules/@coreui/react/es/dropdown/CDropdownItem.js");


 //component - CoreUI / CDropdownHeader

var CDropdownHeader = function CDropdownHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CDropdownItem__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    header: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CDropdownHeader);

/***/ }),

/***/ "./node_modules/@coreui/react/es/dropdown/CDropdownItem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/dropdown/CDropdownItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _CDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CDropdown */ "./node_modules/@coreui/react/es/dropdown/CDropdown.js");
/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");







 //component - CoreUI / CDropdownItem

var CDropdownItem = function CDropdownItem(props) {
  var _ref;

  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      onClick = props.onClick,
      color = props.color,
      divider = props.divider,
      header = props.header,
      active = props.active,
      disabled = props.disabled,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "onClick", "color", "divider", "header", "active", "disabled"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CDropdown__WEBPACK_IMPORTED_MODULE_6__["Context"]),
      setIsOpen = _useContext.setIsOpen;

  var isItem = !(header || divider);

  var click = function click(e) {
    if (disabled) {
      return;
    }

    onClick && onClick(e);
    isItem && setIsOpen(false);
  }; //render


  var tabIndex = isItem && !disabled ? null : -1;
  var role = tabIndex === null ? 'menuitem' : undefined;
  var Tag = tag || (!isItem ? 'div' : _link_CLink__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var ref = (_ref = {}, _ref["" + (typeof Tag === 'string' ? 'ref' : 'innerRef')] = innerRef, _ref);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'dropdown-' + (header ? 'header' : divider ? 'divider' : 'item'), {
    active: active
  }, color && 'bg-' + color, disabled && Tag !== _link_CLink__WEBPACK_IMPORTED_MODULE_7__["default"] && 'disabled');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    tabIndex: tabIndex,
    role: role,
    disabled: disabled
  }, rest, {
    onClick: click
  }, ref));
};

CDropdownItem.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  divider: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CDropdownItem);

/***/ }),

/***/ "./node_modules/@coreui/react/es/dropdown/CDropdownMenu.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/dropdown/CDropdownMenu.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CDropdown */ "./node_modules/@coreui/react/es/dropdown/CDropdown.js");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");






 //component - CoreUI / CDropdownMenu

var CDropdownMenu = function CDropdownMenu(props) {
  var className = props.className,
      show = props.show,
      placement = props.placement,
      modifiers = props.modifiers,
      innerRef = props.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "show", "placement", "modifiers", "innerRef"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CDropdown__WEBPACK_IMPORTED_MODULE_5__["Context"]),
      reference = _useContext.reference,
      isOpen = _useContext.isOpen,
      setIsOpen = _useContext.setIsOpen,
      setPlacement = _useContext.setPlacement;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      popperElement = _useState[0],
      setPopperElement = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      popper = _useState2[0],
      setPopper = _useState2[1];

  innerRef && innerRef(popperElement);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setIsOpen(show);
    setPlacement(placement);
  }, [show, placement]);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'dropdown-menu', {
    'show': isOpen
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(function () {
    if (!reference) {
      return;
    }

    setPopper(Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_6__["createPopper"])(reference, popperElement, {
      placement: placement,
      modifiers: modifiers || []
    }));
    return function () {
      if (popper) {
        popper.destroy();
      }
    };
  }, [isOpen]);

  var checkClose = function checkClose(e) {
    if ([reference, popperElement].every(function (el) {
      return !el.contains(e.target);
    })) {
      setIsOpen(false);
    }
  };

  var onKeypress = function onKeypress(e) {
    return e.keyCode == '27' && setIsOpen(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isOpen) {
      document.addEventListener('click', checkClose);
      document.addEventListener('keydown', onKeypress);
    }

    return function () {
      document.removeEventListener('click', checkClose);
      document.removeEventListener('keydown', onKeypress);
    };
  }, [isOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    ref: setPopperElement,
    role: "menu",
    "aria-hidden": !isOpen
  }, rest));
};

CDropdownMenu.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  show: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'top-end', 'top', 'top-start', 'bottom-end', 'bottom', 'bottom-start', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end'])
};
CDropdownMenu.defaultProps = {
  placement: 'bottom-start'
};
/* harmony default export */ __webpack_exports__["default"] = (CDropdownMenu);

/***/ }),

/***/ "./node_modules/@coreui/react/es/dropdown/CDropdownToggle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/dropdown/CDropdownToggle.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _button_CButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button/CButton */ "./node_modules/@coreui/react/es/button/CButton.js");
/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");
/* harmony import */ var _CDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CDropdown */ "./node_modules/@coreui/react/es/dropdown/CDropdown.js");








 //component - CoreUI / CDropdownToggle

var CDropdownToggle = function CDropdownToggle(props) {
  var _togglerAttrs;

  var className = props.className,
      innerRef = props.innerRef,
      onClick = props.onClick,
      caret = props.caret,
      split = props.split,
      tag = props.tag,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "onClick", "caret", "split", "tag"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CDropdown__WEBPACK_IMPORTED_MODULE_8__["Context"]),
      reference = _useContext.reference,
      setReference = _useContext.setReference,
      isOpen = _useContext.isOpen,
      setIsOpen = _useContext.setIsOpen,
      inNav = _useContext.inNav,
      setSplit = _useContext.setSplit;

  innerRef && innerRef(reference);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setSplit(split);
  });

  var click = function click(e) {
    if (props.disabled) {
      return;
    }

    onClick && onClick(e);
    setIsOpen(!isOpen);
  };

  var Tag = tag || (inNav ? _link_CLink__WEBPACK_IMPORTED_MODULE_7__["default"] : _button_CButton__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, {
    'dropdown-toggle': caret && !split,
    'nav-link': inNav
  });
  var togglerAttrs = (_togglerAttrs = {
    onClick: click,
    'aria-expanded': isOpen ? 'true' : 'false',
    'aria-haspopup': 'true',
    'aria-label': 'Dropdown toggle'
  }, _togglerAttrs["" + (tag && typeof tag === 'string' ? 'ref' : 'innerRef')] = setReference, _togglerAttrs['role'] = Tag === _button_CButton__WEBPACK_IMPORTED_MODULE_6__["default"] ? null : 'button', _togglerAttrs);

  if (split) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_CButton__WEBPACK_IMPORTED_MODULE_6__["default"], attributes, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_CButton__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "dropdown-toggle dropdown-toggle-split"
    }, togglerAttrs, attributes), ''));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes
    }, togglerAttrs, attributes));
  }
};

CDropdownToggle.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  caret: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  split: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CDropdownToggle.defaultProps = {
  caret: true
};
/* harmony default export */ __webpack_exports__["default"] = (CDropdownToggle);

/***/ }),

/***/ "./node_modules/@coreui/react/es/element-cover/CElementCover.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/element-cover/CElementCover.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _spinner_CSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spinner/CSpinner */ "./node_modules/@coreui/react/es/spinner/CSpinner.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //component - CoreUI / CElementCover

var CElementCover = function CElementCover(props) {
  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      boundaries = props.boundaries,
      opacity = props.opacity,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "children", "innerRef", "boundaries", "opacity"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      customBoundaries = _useState[0],
      setCustomBoundaries = _useState[1];

  var ref = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createRef"])(null);
  innerRef && innerRef(ref);

  var getCustomBoundaries = function getCustomBoundaries() {
    if (!ref || !ref.current || !boundaries) {
      return {};
    }

    var parent = ref.current.parentElement;
    var parentCoords = parent.getBoundingClientRect();
    var customBoundaries = {};
    boundaries.forEach(function (_ref) {
      var sides = _ref.sides,
          query = _ref.query;
      var element = parent.querySelector(query);

      if (!element || !sides) {
        return;
      }

      var coords = element.getBoundingClientRect();
      sides.forEach(function (side) {
        var sideMargin = Math.abs(coords[side] - parentCoords[side]);
        customBoundaries[side] = sideMargin + 'px';
      });
    });
    return customBoundaries;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setCustomBoundaries(getCustomBoundaries());
  }, [JSON.stringify(getCustomBoundaries())]); //render

  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className);

  var containerCoords = _objectSpread({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }, customBoundaries);

  var coverStyles = _objectSpread(_objectSpread({}, containerCoords), {}, {
    position: 'absolute',
    backgroundColor: "rgb(255,255,255," + opacity + ")"
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    style: coverStyles
  }, attributes, {
    ref: ref
  }), children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_spinner_CSpinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    grow: true,
    size: "lg",
    color: "primary"
  })));
};

CElementCover.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),
  boundaries: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  opacity: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};
CElementCover.defaultProps = {
  opacity: 0.4
};
/* harmony default export */ __webpack_exports__["default"] = (CElementCover);

/***/ }),

/***/ "./node_modules/@coreui/react/es/embed/CEmbed.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/embed/CEmbed.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CEmbed

var CEmbed = function CEmbed(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      ratio = props.ratio,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "ratio"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'embed-responsive', "embed-responsive-" + ratio);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CEmbed.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  ratio: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['21by9', '16by9', '4by3', '1by1'])
};
CEmbed.defaultProps = {
  tag: 'div',
  ratio: '16by9'
};
/* harmony default export */ __webpack_exports__["default"] = (CEmbed);

/***/ }),

/***/ "./node_modules/@coreui/react/es/embed/CEmbedItem.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/embed/CEmbedItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CEmbedItem

var CEmbedItem = function CEmbedItem(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'embed-responsive-item');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CEmbedItem.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['iframe', 'embed', 'video', 'object', 'img'])
};
CEmbedItem.defaultProps = {
  tag: 'iframe'
};
/* harmony default export */ __webpack_exports__["default"] = (CEmbedItem);

/***/ }),

/***/ "./node_modules/@coreui/react/es/fade/CFade.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/react/es/fade/CFade.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");







 //component - CoreUI / CFade

var CFade = function CFade(props) {
  var Tag = props.tag,
      className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "children", "innerRef", "baseClass", "baseClassActive"]); //render


  var transitionProps = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["pickByKeys"])(rest, _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__["TransitionPropTypeKeys"]);
  var childProps = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["omitByKeys"])(rest, _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__["TransitionPropTypeKeys"]);
  var ref = typeof innerRef === 'object' ? innerRef : Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  typeof innerRef === 'function' && innerRef(ref);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["Transition"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, transitionProps, {
    nodeRef: ref
  }), function (status) {
    var isActive = status === 'entered';
    var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, baseClass, isActive && baseClassActive);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes
    }, childProps, {
      ref: ref
    }), children);
  });
};

CFade.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_6__["tagPropType"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  baseClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  baseClassActive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
CFade.defaultProps = {
  tag: 'div',
  //
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: 150,
  appear: true,
  enter: true,
  exit: true,
  in: true
};
/* harmony default export */ __webpack_exports__["default"] = (CFade);

/***/ }),

/***/ "./node_modules/@coreui/react/es/form/CForm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/react/es/form/CForm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CForm

var CForm = function CForm(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      inline = props.inline,
      wasValidated = props.wasValidated,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "inline", "wasValidated"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, inline ? 'form-inline' : false, wasValidated ? 'was-validated' : false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CForm.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  inline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  wasValidated: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CForm.defaultProps = {
  tag: 'form'
};
/* harmony default export */ __webpack_exports__["default"] = (CForm);

/***/ }),

/***/ "./node_modules/@coreui/react/es/form/CFormFeedback.js":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/react/es/form/CFormFeedback.js ***!
  \*************************************************************/
/*! exports provided: CValidFeedback, CInvalidFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CValidFeedback", function() { return CValidFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CInvalidFeedback", function() { return CInvalidFeedback; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CFormFeedback

var CFormFeedback = function CFormFeedback(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      tooltip = props.tooltip,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "valid", "tooltip"]); //render


  var validMode = tooltip ? 'tooltip' : 'feedback';
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(valid ? "valid-" + validMode : "invalid-" + validMode, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFormFeedback.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  valid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
var CValidFeedback = function CValidFeedback(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CFormFeedback, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    valid: true
  }));
};
var CInvalidFeedback = function CInvalidFeedback(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CFormFeedback, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    valid: false
  }));
};

/***/ }),

/***/ "./node_modules/@coreui/react/es/form/CFormGroup.js":
/*!**********************************************************!*\
  !*** ./node_modules/@coreui/react/es/form/CFormGroup.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CFormGroup

var CFormGroup = function CFormGroup(props) {
  var className = props.className,
      innerRef = props.innerRef,
      row = props.row,
      disabled = props.disabled,
      variant = props.variant,
      inline = props.inline,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "row", "disabled", "variant", "inline"]); //render


  var checkClass = variant && variant.includes('custom') ? 'custom-control' : 'form-check';
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(row && 'row', !variant && 'form-group', variant && checkClass, variant === 'custom-radio' && 'custom-radio', variant === 'custom-checkbox' && 'custom-checkbox', variant && inline && checkClass + "-inline", variant && disabled && 'disabled', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFormGroup.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['checkbox', 'custom-checkbox', 'custom-radio']),
  inline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CFormGroup);

/***/ }),

/***/ "./node_modules/@coreui/react/es/form/CFormText.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/form/CFormText.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CFormText

var CFormText = function CFormText(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "color"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('form-text', color && "text-" + color, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFormText.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
CFormText.defaultProps = {
  tag: 'small',
  color: 'muted'
};
/* harmony default export */ __webpack_exports__["default"] = (CFormText);

/***/ }),

/***/ "./node_modules/@coreui/react/es/form/CInput.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/react/es/form/CInput.js ***!
  \******************************************************/
/*! exports provided: CInput, CTextarea, CInputFile, CInputCheckbox, CInputRadio, CSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CInput", function() { return CInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTextarea", function() { return CTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CInputFile", function() { return CInputFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CInputCheckbox", function() { return CInputCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CInputRadio", function() { return CInputRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSelect", function() { return CSelect; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 //component - CoreUI / CInput

var commonPropTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),
  valid: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};

var CInput = function CInput(props) {
  var className = props.className,
      innerRef = props.innerRef,
      type = props.type,
      valid = props.valid,
      invalid = props.invalid,
      plaintext = props.plaintext,
      size = props.size,
      sizeHtml = props.sizeHtml,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "innerRef", "type", "valid", "invalid", "plaintext", "size", "sizeHtml"]); // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(plaintext ? 'form-control-plaintext' : 'form-control', size && "form-control-" + size, invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes,
    type: type
  }, attributes, {
    size: sizeHtml,
    ref: innerRef
  }));
};

CInput.propTypes = _objectSpread(_objectSpread({}, commonPropTypes), {}, {
  plaintext: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  sizeHtml: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number])
});
CInput.defaultProps = {
  type: 'text'
};

var CTextarea = function CTextarea(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      invalid = props.invalid,
      plaintext = props.plaintext,
      size = props.size,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "innerRef", "valid", "invalid", "plaintext", "size"]); // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(plaintext ? 'form-control-plaintext' : 'form-control', size && "form-control-" + size, invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CTextarea.propTypes = _objectSpread(_objectSpread({}, commonPropTypes), {}, {
  plaintext: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
});

var CInputFile = function CInputFile(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      invalid = props.invalid,
      custom = props.custom,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "innerRef", "valid", "invalid", "custom"]); // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(custom ? 'custom-file-input' : 'form-control-file', invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes
  }, attributes, {
    type: "file",
    ref: innerRef
  }));
};

CInputFile.propTypes = _objectSpread(_objectSpread({}, commonPropTypes), {}, {
  custom: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
});

var CInputCheckbox = function CInputCheckbox(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      invalid = props.invalid,
      custom = props.custom,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "innerRef", "valid", "invalid", "custom"]); // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(custom ? 'custom-control-input' : 'form-check-input', invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes,
    type: "checkbox"
  }, attributes, {
    ref: innerRef
  }));
};

CInputCheckbox.propTypes = _objectSpread(_objectSpread({}, commonPropTypes), {}, {
  custom: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
});

var CInputRadio = function CInputRadio(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CInputCheckbox, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    type: "radio"
  }));
};

var CSelect = function CSelect(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      invalid = props.invalid,
      size = props.size,
      sizeHtml = props.sizeHtml,
      custom = props.custom,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "innerRef", "valid", "invalid", "size", "sizeHtml", "custom"]); // render


  var baseClass = custom ? 'custom-select' : 'form-control';
  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(baseClass, size && baseClass + "-" + size, invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes
  }, attributes, {
    size: sizeHtml,
    ref: innerRef
  }));
};

CSelect.propTypes = _objectSpread(_objectSpread({}, commonPropTypes), {}, {
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  sizeHtml: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number])
});


/***/ }),

/***/ "./node_modules/@coreui/react/es/form/CInputGroup.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/form/CInputGroup.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CInputGroup

var CInputGroup = function CInputGroup(props) {
  var className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "size"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('input-group', size && "input-group-" + size, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CInputGroup.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CInputGroup);

/***/ }),

/***/ "./node_modules/@coreui/react/es/form/CInputGroupAddon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/form/CInputGroupAddon.js ***!
  \****************************************************************/
/*! exports provided: CInputGroupAppend, CInputGroupPrepend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CInputGroupAppend", function() { return CInputGroupAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CInputGroupPrepend", function() { return CInputGroupPrepend; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CInputGroupAddon

var CInputGroupAddon = function CInputGroupAddon(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      prepend = props.prepend,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "innerRef", "prepend"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('input-group-' + (prepend ? 'prepend' : 'append'), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }), children);
};

CInputGroupAddon.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  prepend: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
var CInputGroupAppend = function CInputGroupAppend(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CInputGroupAddon, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prepend: false
  }));
};
var CInputGroupPrepend = function CInputGroupPrepend(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CInputGroupAddon, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prepend: true
  }));
};

/***/ }),

/***/ "./node_modules/@coreui/react/es/form/CInputGroupText.js":
/*!***************************************************************!*\
  !*** ./node_modules/@coreui/react/es/form/CInputGroupText.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CInputGroupText

var CInputGroupText = function CInputGroupText(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('input-group-text', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CInputGroupText.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CInputGroupText.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CInputGroupText);

/***/ }),

/***/ "./node_modules/@coreui/react/es/form/CLabel.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/react/es/form/CLabel.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _grid_CCol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../grid/CCol */ "./node_modules/@coreui/react/es/grid/CCol.js");






 //component - CoreUI / CLabel

var CLabel = function CLabel(props) {
  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      hidden = props.hidden,
      variant = props.variant,
      col = props.col,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "hidden", "variant", "col"]); // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(hidden && 'sr-only', variant === 'custom-checkbox' && 'custom-control-label', variant === 'checkbox' && 'form-check-label', variant === 'custom-file' && 'custom-file-label', col && 'col-form-label', col && typeof col === 'string' && "col-form-label-" + col, className);
  var Tag = col ? _grid_CCol__WEBPACK_IMPORTED_MODULE_6__["default"] : tag;
  var addLabelTag = col && {
    tag: tag
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, addLabelTag, attributes, {
    ref: innerRef
  }));
};

CLabel.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['custom-file', 'checkbox', 'custom-checkbox']),
  col: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool])
};
CLabel.defaultProps = {
  tag: 'label'
};
/* harmony default export */ __webpack_exports__["default"] = (CLabel);

/***/ }),

/***/ "./node_modules/@coreui/react/es/grid/CCol.js":
/*!****************************************************!*\
  !*** ./node_modules/@coreui/react/es/grid/CCol.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");






var stringOrNumberProp = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]);
var columnProps = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
}; //component - CoreUI / CCol


var CCol = function CCol(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      widths = props.widths,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "widths"]); //render


  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (typeof columnProp === 'object') {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, colClasses);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCol.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  widths: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};
CCol.defaultProps = {
  tag: 'div',
  widths: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
};
/* harmony default export */ __webpack_exports__["default"] = (CCol);

/***/ }),

/***/ "./node_modules/@coreui/react/es/grid/CContainer.js":
/*!**********************************************************!*\
  !*** ./node_modules/@coreui/react/es/grid/CContainer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CContainer

var CContainer = function CContainer(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fluid = props.fluid,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "fluid"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, fluid ? 'container-fluid' : 'container');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CContainer.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CContainer.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CContainer);

/***/ }),

/***/ "./node_modules/@coreui/react/es/grid/CRow.js":
/*!****************************************************!*\
  !*** ./node_modules/@coreui/react/es/grid/CRow.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CRow

var CRow = function CRow(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      gutters = props.gutters,
      form = props.form,
      alignHorizontal = props.alignHorizontal,
      alignVertical = props.alignVertical,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "gutters", "form", "alignHorizontal", "alignVertical"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, !gutters ? 'no-gutters' : null, alignHorizontal ? "justify-content-" + alignHorizontal : null, alignVertical ? "align-" + alignVertical : null, form ? 'form-row' : 'row');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CRow.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  gutters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  form: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  alignHorizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  alignVertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
CRow.defaultProps = {
  tag: 'div',
  gutters: true
};
/* harmony default export */ __webpack_exports__["default"] = (CRow);

/***/ }),

/***/ "./node_modules/@coreui/react/es/image/CImg.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/react/es/image/CImg.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CImg

var CImg = function CImg(props) {
  var className = props.className,
      innerRef = props.innerRef,
      fluid = props.fluid,
      block = props.block,
      thumbnail = props.thumbnail,
      shape = props.shape,
      align = props.align,
      src = props.src,
      width = props.width,
      height = props.height,
      placeholderColor = props.placeholderColor,
      fluidGrow = props.fluidGrow,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "fluid", "block", "thumbnail", "shape", "align", "src", "width", "height", "placeholderColor", "fluidGrow"]);

  var alignClass = align === 'center' ? 'mx-auto' : align === 'right' ? 'float-right' : align === 'left' ? 'float-left' : ''; // render

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, alignClass, thumbnail && 'img-thumbnail', fluid || fluidGrow && 'img-fluid', fluidGrow && 'w-100', block && 'd-block', shape);
  return src ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    src: src,
    width: width,
    height: height
  }, attributes, {
    ref: innerRef
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    width: width,
    height: height,
    style: {
      'backgroundColor': placeholderColor
    }
  }, attributes, {
    ref: innerRef
  }));
};

CImg.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  block: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fluidGrow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  shape: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  //oneOf(['', 'rounded']),
  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'left', 'right', 'center']),
  placeholderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
CImg.defaultProps = {
  placeholderColor: 'transparent'
};
/* harmony default export */ __webpack_exports__["default"] = (CImg);

/***/ }),

/***/ "./node_modules/@coreui/react/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/@coreui/react/es/index.js ***!
  \************************************************/
/*! exports provided: CAlert, CBadge, CButton, CButtonClose, CButtonGroup, CButtonToolbar, CBreadcrumb, CBreadcrumbRouter, CBreadcrumbItem, CCallout, CCard, CCardBody, CCardHeader, CCardFooter, CCardGroup, CCardImg, CCardImgOverlay, CCardLink, CCardTitle, CCardSubtitle, CCardText, CCarousel, CCarouselItem, CCarouselControl, CCarouselIndicators, CCarouselCaption, CCarouselInner, CCollapse, CCreateElement, CDropdown, CDropdownDivider, CDropdownHeader, CDropdownItem, CDropdownMenu, CDropdownToggle, CElementCover, CEmbed, CEmbedItem, CFade, CForm, CValidFeedback, CInvalidFeedback, CLabel, CFormGroup, CFormText, CTextarea, CInput, CInputFile, CInputCheckbox, CInputRadio, CSelect, CInputGroup, CInputGroupPrepend, CInputGroupAppend, CInputGroupText, CRow, CCol, CContainer, CImg, CJumbotron, CLink, CListGroup, CListGroupItem, CListGroupItemText, CListGroupItemHeading, CMedia, CMediaBody, CModal, CModalBody, CModalHeader, CModalFooter, CModalTitle, CNav, CNavItem, CNavLink, CNavbarBrand, CNavbar, CNavbarNav, CNavbarText, CPagination, CProgress, CProgressBar, CSpinner, CSwitch, CDataTable, CTabs, CTabPane, CTabContent, CFooter, CHeader, CHeaderNav, CHeaderNavItem, CHeaderNavLink, CHeaderBrand, CSubheader, CSidebar, CSidebarBrand, CSidebarNavDivider, CSidebarNavTitle, CSidebarNavItem, CSidebarNavDropdown, CSidebarFooter, CSidebarForm, CSidebarHeader, CSidebarMinimizer, CSidebarNav, CSidebarClose, CToast, CToastHeader, CToastBody, CToaster, CToggler, CTooltip, CPopover, CWidgetProgress, CWidgetIcon, CWidgetBrand, CWidgetProgressIcon, CWidgetDropdown, CWidgetSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CListGroupItemText", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CListGroupItemHeading", function() { return heading; });
/* harmony import */ var _alert_CAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/CAlert */ "./node_modules/@coreui/react/es/alert/CAlert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CAlert", function() { return _alert_CAlert__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _badge_CBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge/CBadge */ "./node_modules/@coreui/react/es/badge/CBadge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CBadge", function() { return _badge_CBadge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _button_CButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/CButton */ "./node_modules/@coreui/react/es/button/CButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CButton", function() { return _button_CButton__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _button_CButtonClose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/CButtonClose */ "./node_modules/@coreui/react/es/button/CButtonClose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CButtonClose", function() { return _button_CButtonClose__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _button_CButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/CButtonGroup */ "./node_modules/@coreui/react/es/button/CButtonGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CButtonGroup", function() { return _button_CButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _button_CButtonToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button/CButtonToolbar */ "./node_modules/@coreui/react/es/button/CButtonToolbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CButtonToolbar", function() { return _button_CButtonToolbar__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _breadcrumb_CBreadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumb/CBreadcrumb */ "./node_modules/@coreui/react/es/breadcrumb/CBreadcrumb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CBreadcrumb", function() { return _breadcrumb_CBreadcrumb__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _breadcrumb_CBreadcrumbRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumb/CBreadcrumbRouter */ "./node_modules/@coreui/react/es/breadcrumb/CBreadcrumbRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CBreadcrumbRouter", function() { return _breadcrumb_CBreadcrumbRouter__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _breadcrumb_CBreadcrumbItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./breadcrumb/CBreadcrumbItem */ "./node_modules/@coreui/react/es/breadcrumb/CBreadcrumbItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CBreadcrumbItem", function() { return _breadcrumb_CBreadcrumbItem__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _callout_CCallout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./callout/CCallout */ "./node_modules/@coreui/react/es/callout/CCallout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCallout", function() { return _callout_CCallout__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _card_CCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card/CCard */ "./node_modules/@coreui/react/es/card/CCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCard", function() { return _card_CCard__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _card_CCardBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card/CCardBody */ "./node_modules/@coreui/react/es/card/CCardBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCardBody", function() { return _card_CCardBody__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _card_CCardHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card/CCardHeader */ "./node_modules/@coreui/react/es/card/CCardHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCardHeader", function() { return _card_CCardHeader__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _card_CCardFooter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card/CCardFooter */ "./node_modules/@coreui/react/es/card/CCardFooter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCardFooter", function() { return _card_CCardFooter__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _card_CCardGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card/CCardGroup */ "./node_modules/@coreui/react/es/card/CCardGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCardGroup", function() { return _card_CCardGroup__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _card_CCardImg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card/CCardImg */ "./node_modules/@coreui/react/es/card/CCardImg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCardImg", function() { return _card_CCardImg__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _card_CCardImgOverlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./card/CCardImgOverlay */ "./node_modules/@coreui/react/es/card/CCardImgOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCardImgOverlay", function() { return _card_CCardImgOverlay__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _card_CCardLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./card/CCardLink */ "./node_modules/@coreui/react/es/card/CCardLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCardLink", function() { return _card_CCardLink__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _card_CCardTitle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./card/CCardTitle */ "./node_modules/@coreui/react/es/card/CCardTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCardTitle", function() { return _card_CCardTitle__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _card_CCardSubtitle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./card/CCardSubtitle */ "./node_modules/@coreui/react/es/card/CCardSubtitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCardSubtitle", function() { return _card_CCardSubtitle__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _card_CCardText__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./card/CCardText */ "./node_modules/@coreui/react/es/card/CCardText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCardText", function() { return _card_CCardText__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _carousel_CCarousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./carousel/CCarousel */ "./node_modules/@coreui/react/es/carousel/CCarousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCarousel", function() { return _carousel_CCarousel__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _carousel_CCarouselItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./carousel/CCarouselItem */ "./node_modules/@coreui/react/es/carousel/CCarouselItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCarouselItem", function() { return _carousel_CCarouselItem__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _carousel_CCarouselControl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./carousel/CCarouselControl */ "./node_modules/@coreui/react/es/carousel/CCarouselControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCarouselControl", function() { return _carousel_CCarouselControl__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _carousel_CCarouselIndicators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./carousel/CCarouselIndicators */ "./node_modules/@coreui/react/es/carousel/CCarouselIndicators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCarouselIndicators", function() { return _carousel_CCarouselIndicators__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _carousel_CCarouselCaption__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./carousel/CCarouselCaption */ "./node_modules/@coreui/react/es/carousel/CCarouselCaption.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCarouselCaption", function() { return _carousel_CCarouselCaption__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _carousel_CCarouselInner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./carousel/CCarouselInner */ "./node_modules/@coreui/react/es/carousel/CCarouselInner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCarouselInner", function() { return _carousel_CCarouselInner__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _collapse_CCollapse__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./collapse/CCollapse */ "./node_modules/@coreui/react/es/collapse/CCollapse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCollapse", function() { return _collapse_CCollapse__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _create_element_CCreateElement__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./create-element/CCreateElement */ "./node_modules/@coreui/react/es/create-element/CCreateElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCreateElement", function() { return _create_element_CCreateElement__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _dropdown_CDropdown__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dropdown/CDropdown */ "./node_modules/@coreui/react/es/dropdown/CDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CDropdown", function() { return _dropdown_CDropdown__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _dropdown_CDropdownDivider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dropdown/CDropdownDivider */ "./node_modules/@coreui/react/es/dropdown/CDropdownDivider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CDropdownDivider", function() { return _dropdown_CDropdownDivider__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _dropdown_CDropdownHeader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dropdown/CDropdownHeader */ "./node_modules/@coreui/react/es/dropdown/CDropdownHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CDropdownHeader", function() { return _dropdown_CDropdownHeader__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _dropdown_CDropdownItem__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dropdown/CDropdownItem */ "./node_modules/@coreui/react/es/dropdown/CDropdownItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CDropdownItem", function() { return _dropdown_CDropdownItem__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _dropdown_CDropdownMenu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dropdown/CDropdownMenu */ "./node_modules/@coreui/react/es/dropdown/CDropdownMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CDropdownMenu", function() { return _dropdown_CDropdownMenu__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _dropdown_CDropdownToggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dropdown/CDropdownToggle */ "./node_modules/@coreui/react/es/dropdown/CDropdownToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CDropdownToggle", function() { return _dropdown_CDropdownToggle__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _element_cover_CElementCover__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./element-cover/CElementCover */ "./node_modules/@coreui/react/es/element-cover/CElementCover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CElementCover", function() { return _element_cover_CElementCover__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _embed_CEmbed__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./embed/CEmbed */ "./node_modules/@coreui/react/es/embed/CEmbed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CEmbed", function() { return _embed_CEmbed__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _embed_CEmbedItem__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./embed/CEmbedItem */ "./node_modules/@coreui/react/es/embed/CEmbedItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CEmbedItem", function() { return _embed_CEmbedItem__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _fade_CFade__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./fade/CFade */ "./node_modules/@coreui/react/es/fade/CFade.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CFade", function() { return _fade_CFade__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _form_CForm__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./form/CForm */ "./node_modules/@coreui/react/es/form/CForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CForm", function() { return _form_CForm__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _form_CFormFeedback__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./form/CFormFeedback */ "./node_modules/@coreui/react/es/form/CFormFeedback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CValidFeedback", function() { return _form_CFormFeedback__WEBPACK_IMPORTED_MODULE_40__["CValidFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CInvalidFeedback", function() { return _form_CFormFeedback__WEBPACK_IMPORTED_MODULE_40__["CInvalidFeedback"]; });

/* harmony import */ var _form_CLabel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./form/CLabel */ "./node_modules/@coreui/react/es/form/CLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLabel", function() { return _form_CLabel__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _form_CFormGroup__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./form/CFormGroup */ "./node_modules/@coreui/react/es/form/CFormGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CFormGroup", function() { return _form_CFormGroup__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _form_CFormText__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./form/CFormText */ "./node_modules/@coreui/react/es/form/CFormText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CFormText", function() { return _form_CFormText__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _form_CInput__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./form/CInput */ "./node_modules/@coreui/react/es/form/CInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CTextarea", function() { return _form_CInput__WEBPACK_IMPORTED_MODULE_44__["CTextarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CInput", function() { return _form_CInput__WEBPACK_IMPORTED_MODULE_44__["CInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CInputFile", function() { return _form_CInput__WEBPACK_IMPORTED_MODULE_44__["CInputFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CInputCheckbox", function() { return _form_CInput__WEBPACK_IMPORTED_MODULE_44__["CInputCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CInputRadio", function() { return _form_CInput__WEBPACK_IMPORTED_MODULE_44__["CInputRadio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSelect", function() { return _form_CInput__WEBPACK_IMPORTED_MODULE_44__["CSelect"]; });

/* harmony import */ var _form_CInputGroup__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./form/CInputGroup */ "./node_modules/@coreui/react/es/form/CInputGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CInputGroup", function() { return _form_CInputGroup__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _form_CInputGroupAddon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./form/CInputGroupAddon */ "./node_modules/@coreui/react/es/form/CInputGroupAddon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CInputGroupPrepend", function() { return _form_CInputGroupAddon__WEBPACK_IMPORTED_MODULE_46__["CInputGroupPrepend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CInputGroupAppend", function() { return _form_CInputGroupAddon__WEBPACK_IMPORTED_MODULE_46__["CInputGroupAppend"]; });

/* harmony import */ var _form_CInputGroupText__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./form/CInputGroupText */ "./node_modules/@coreui/react/es/form/CInputGroupText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CInputGroupText", function() { return _form_CInputGroupText__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _grid_CRow__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./grid/CRow */ "./node_modules/@coreui/react/es/grid/CRow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CRow", function() { return _grid_CRow__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _grid_CCol__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./grid/CCol */ "./node_modules/@coreui/react/es/grid/CCol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCol", function() { return _grid_CCol__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _grid_CContainer__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./grid/CContainer */ "./node_modules/@coreui/react/es/grid/CContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CContainer", function() { return _grid_CContainer__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _image_CImg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./image/CImg */ "./node_modules/@coreui/react/es/image/CImg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CImg", function() { return _image_CImg__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _jumbotron_CJumbotron__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./jumbotron/CJumbotron */ "./node_modules/@coreui/react/es/jumbotron/CJumbotron.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CJumbotron", function() { return _jumbotron_CJumbotron__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLink", function() { return _link_CLink__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _list_group_CListGroup__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./list-group/CListGroup */ "./node_modules/@coreui/react/es/list-group/CListGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CListGroup", function() { return _list_group_CListGroup__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _list_group_CListGroupItem__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./list-group/CListGroupItem */ "./node_modules/@coreui/react/es/list-group/CListGroupItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CListGroupItem", function() { return _list_group_CListGroupItem__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _media_CMedia__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./media/CMedia */ "./node_modules/@coreui/react/es/media/CMedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CMedia", function() { return _media_CMedia__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _media_CMediaBody__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./media/CMediaBody */ "./node_modules/@coreui/react/es/media/CMediaBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CMediaBody", function() { return _media_CMediaBody__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _modal_CModal__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./modal/CModal */ "./node_modules/@coreui/react/es/modal/CModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CModal", function() { return _modal_CModal__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _modal_CModalBody__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./modal/CModalBody */ "./node_modules/@coreui/react/es/modal/CModalBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CModalBody", function() { return _modal_CModalBody__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _modal_CModalHeader__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./modal/CModalHeader */ "./node_modules/@coreui/react/es/modal/CModalHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CModalHeader", function() { return _modal_CModalHeader__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _modal_CModalFooter__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./modal/CModalFooter */ "./node_modules/@coreui/react/es/modal/CModalFooter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CModalFooter", function() { return _modal_CModalFooter__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _modal_CModalTitle__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./modal/CModalTitle */ "./node_modules/@coreui/react/es/modal/CModalTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CModalTitle", function() { return _modal_CModalTitle__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _nav_CNav__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./nav/CNav */ "./node_modules/@coreui/react/es/nav/CNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CNav", function() { return _nav_CNav__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _nav_CNavItem__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./nav/CNavItem */ "./node_modules/@coreui/react/es/nav/CNavItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CNavItem", function() { return _nav_CNavItem__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _nav_CNavLink__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./nav/CNavLink */ "./node_modules/@coreui/react/es/nav/CNavLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CNavLink", function() { return _nav_CNavLink__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _navbar_CNavbarBrand__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./navbar/CNavbarBrand */ "./node_modules/@coreui/react/es/navbar/CNavbarBrand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CNavbarBrand", function() { return _navbar_CNavbarBrand__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _navbar_CNavbar__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./navbar/CNavbar */ "./node_modules/@coreui/react/es/navbar/CNavbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CNavbar", function() { return _navbar_CNavbar__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _navbar_CNavbarNav__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./navbar/CNavbarNav */ "./node_modules/@coreui/react/es/navbar/CNavbarNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CNavbarNav", function() { return _navbar_CNavbarNav__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _navbar_CNavbarText__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./navbar/CNavbarText */ "./node_modules/@coreui/react/es/navbar/CNavbarText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CNavbarText", function() { return _navbar_CNavbarText__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _pagination_CPagination__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./pagination/CPagination */ "./node_modules/@coreui/react/es/pagination/CPagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CPagination", function() { return _pagination_CPagination__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _progress_CProgress__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./progress/CProgress */ "./node_modules/@coreui/react/es/progress/CProgress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CProgress", function() { return _progress_CProgress__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _progress_CProgressBar__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./progress/CProgressBar */ "./node_modules/@coreui/react/es/progress/CProgressBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CProgressBar", function() { return _progress_CProgressBar__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _spinner_CSpinner__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./spinner/CSpinner */ "./node_modules/@coreui/react/es/spinner/CSpinner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSpinner", function() { return _spinner_CSpinner__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _switch_CSwitch__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./switch/CSwitch */ "./node_modules/@coreui/react/es/switch/CSwitch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSwitch", function() { return _switch_CSwitch__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _table_CDataTable__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./table/CDataTable */ "./node_modules/@coreui/react/es/table/CDataTable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CDataTable", function() { return _table_CDataTable__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _tabs_CTabs__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./tabs/CTabs */ "./node_modules/@coreui/react/es/tabs/CTabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CTabs", function() { return _tabs_CTabs__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _tabs_CTabPane__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./tabs/CTabPane */ "./node_modules/@coreui/react/es/tabs/CTabPane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CTabPane", function() { return _tabs_CTabPane__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _tabs_CTabContent__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./tabs/CTabContent */ "./node_modules/@coreui/react/es/tabs/CTabContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CTabContent", function() { return _tabs_CTabContent__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _template_CFooter__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./template/CFooter */ "./node_modules/@coreui/react/es/template/CFooter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CFooter", function() { return _template_CFooter__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _template_CHeader__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./template/CHeader */ "./node_modules/@coreui/react/es/template/CHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHeader", function() { return _template_CHeader__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _template_CHeaderNav__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./template/CHeaderNav */ "./node_modules/@coreui/react/es/template/CHeaderNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHeaderNav", function() { return _template_CHeaderNav__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _template_CHeaderNavItem__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./template/CHeaderNavItem */ "./node_modules/@coreui/react/es/template/CHeaderNavItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHeaderNavItem", function() { return _template_CHeaderNavItem__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _template_CHeaderNavLink__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./template/CHeaderNavLink */ "./node_modules/@coreui/react/es/template/CHeaderNavLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHeaderNavLink", function() { return _template_CHeaderNavLink__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _template_CHeaderBrand__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./template/CHeaderBrand */ "./node_modules/@coreui/react/es/template/CHeaderBrand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHeaderBrand", function() { return _template_CHeaderBrand__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _template_CSubheader__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./template/CSubheader */ "./node_modules/@coreui/react/es/template/CSubheader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSubheader", function() { return _template_CSubheader__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _template_CSidebar__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./template/CSidebar */ "./node_modules/@coreui/react/es/template/CSidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebar", function() { return _template_CSidebar__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _template_CSidebarBrand__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./template/CSidebarBrand */ "./node_modules/@coreui/react/es/template/CSidebarBrand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarBrand", function() { return _template_CSidebarBrand__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _template_CSidebarNavDivider__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./template/CSidebarNavDivider */ "./node_modules/@coreui/react/es/template/CSidebarNavDivider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarNavDivider", function() { return _template_CSidebarNavDivider__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _template_CSidebarNavTitle__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./template/CSidebarNavTitle */ "./node_modules/@coreui/react/es/template/CSidebarNavTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarNavTitle", function() { return _template_CSidebarNavTitle__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _template_CSidebarNavItem__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./template/CSidebarNavItem */ "./node_modules/@coreui/react/es/template/CSidebarNavItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarNavItem", function() { return _template_CSidebarNavItem__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _template_CSidebarNavDropdown__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./template/CSidebarNavDropdown */ "./node_modules/@coreui/react/es/template/CSidebarNavDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarNavDropdown", function() { return _template_CSidebarNavDropdown__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _template_CSidebarFooter__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./template/CSidebarFooter */ "./node_modules/@coreui/react/es/template/CSidebarFooter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarFooter", function() { return _template_CSidebarFooter__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _template_CSidebarForm__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./template/CSidebarForm */ "./node_modules/@coreui/react/es/template/CSidebarForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarForm", function() { return _template_CSidebarForm__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _template_CSidebarHeader__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./template/CSidebarHeader */ "./node_modules/@coreui/react/es/template/CSidebarHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarHeader", function() { return _template_CSidebarHeader__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _template_CSidebarMinimizer__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./template/CSidebarMinimizer */ "./node_modules/@coreui/react/es/template/CSidebarMinimizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarMinimizer", function() { return _template_CSidebarMinimizer__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _template_CSidebarNav__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./template/CSidebarNav */ "./node_modules/@coreui/react/es/template/CSidebarNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarNav", function() { return _template_CSidebarNav__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _template_CSidebarClose__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./template/CSidebarClose */ "./node_modules/@coreui/react/es/template/CSidebarClose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSidebarClose", function() { return _template_CSidebarClose__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _toast_CToast__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./toast/CToast */ "./node_modules/@coreui/react/es/toast/CToast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CToast", function() { return _toast_CToast__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _toast_CToastHeader__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./toast/CToastHeader */ "./node_modules/@coreui/react/es/toast/CToastHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CToastHeader", function() { return _toast_CToastHeader__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _toast_CToastBody__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./toast/CToastBody */ "./node_modules/@coreui/react/es/toast/CToastBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CToastBody", function() { return _toast_CToastBody__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _toast_CToaster__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./toast/CToaster */ "./node_modules/@coreui/react/es/toast/CToaster.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CToaster", function() { return _toast_CToaster__WEBPACK_IMPORTED_MODULE_102__["default"]; });

/* harmony import */ var _toggler_CToggler__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./toggler/CToggler */ "./node_modules/@coreui/react/es/toggler/CToggler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CToggler", function() { return _toggler_CToggler__WEBPACK_IMPORTED_MODULE_103__["default"]; });

/* harmony import */ var _tooltip_CTooltip__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./tooltip/CTooltip */ "./node_modules/@coreui/react/es/tooltip/CTooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CTooltip", function() { return _tooltip_CTooltip__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _tooltip_CPopover__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./tooltip/CPopover */ "./node_modules/@coreui/react/es/tooltip/CPopover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CPopover", function() { return _tooltip_CPopover__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _widgets_CWidgetProgress__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./widgets/CWidgetProgress */ "./node_modules/@coreui/react/es/widgets/CWidgetProgress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CWidgetProgress", function() { return _widgets_CWidgetProgress__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _widgets_CWidgetIcon__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./widgets/CWidgetIcon */ "./node_modules/@coreui/react/es/widgets/CWidgetIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CWidgetIcon", function() { return _widgets_CWidgetIcon__WEBPACK_IMPORTED_MODULE_107__["default"]; });

/* harmony import */ var _widgets_CWidgetBrand__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./widgets/CWidgetBrand */ "./node_modules/@coreui/react/es/widgets/CWidgetBrand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CWidgetBrand", function() { return _widgets_CWidgetBrand__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony import */ var _widgets_CWidgetProgressIcon__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./widgets/CWidgetProgressIcon */ "./node_modules/@coreui/react/es/widgets/CWidgetProgressIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CWidgetProgressIcon", function() { return _widgets_CWidgetProgressIcon__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _widgets_CWidgetDropdown__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./widgets/CWidgetDropdown */ "./node_modules/@coreui/react/es/widgets/CWidgetDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CWidgetDropdown", function() { return _widgets_CWidgetDropdown__WEBPACK_IMPORTED_MODULE_110__["default"]; });

/* harmony import */ var _widgets_CWidgetSimple__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./widgets/CWidgetSimple */ "./node_modules/@coreui/react/es/widgets/CWidgetSimple.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CWidgetSimple", function() { return _widgets_CWidgetSimple__WEBPACK_IMPORTED_MODULE_111__["default"]; });




























































var wrapper = function wrapper(props) {
  console.warn('CListGroupItemText component is deprecated, please use div tag instead');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", props);
};

var heading = function heading(props) {
  console.warn('CListGroupItemHeading component is deprecated, please use h5 tag instead');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("h5", props);
};



















































 // export {default as CPortal} from './portal/CPortal';








/***/ }),

/***/ "./node_modules/@coreui/react/es/jumbotron/CJumbotron.js":
/*!***************************************************************!*\
  !*** ./node_modules/@coreui/react/es/jumbotron/CJumbotron.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CJumbotron

var CJumbotron = function CJumbotron(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fluid = props.fluid,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "fluid"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CJumbotron.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CJumbotron.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CJumbotron);

/***/ }),

/***/ "./node_modules/@coreui/react/es/link/CLink.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/react/es/link/CLink.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //component - CoreUI / CLink

var CLink = function CLink(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      href = props.href,
      onClick = props.onClick,
      disabled = props.disabled,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "innerRef", "active", "href", "onClick", "disabled"]);

  var to = rest ? rest.to : null;

  var click = function click(e) {
    if (!href && !to || href === '#') {
      e.preventDefault();
    }

    !disabled && onClick && onClick(e);
  }; // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(active && 'active', disabled && 'disabled', className);
  return to ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, rest, {
    className: classes,
    onClick: click,
    ref: innerRef
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    href: href || '#',
    className: classes,
    rel: rest.target === '_blank' ? 'noopener norefferer' : null
  }, rest, {
    onClick: click,
    ref: innerRef
  }));
};

CLink.propTypes = _objectSpread(_objectSpread({
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  href: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
}, react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"].propTypes), {}, {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  to: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func])
}); // CLink.sortAttributes = (attributesToSort) => {
//   const attributes = {}
//   const linkProps = {}
//   Object.entries(attributesToSort || {}).forEach(([key, value]) => {
//     if (Object.keys(CLink.propTypes).includes(key)) {
//       linkProps[key] = value
//     } else {
//       attributes[key] = value
//     }
//   })
//   return { linkProps, attributes }
// }

/* harmony default export */ __webpack_exports__["default"] = (CLink);

/***/ }),

/***/ "./node_modules/@coreui/react/es/list-group/CListGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/list-group/CListGroup.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CListGroup

var CListGroup = function CListGroup(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      horizontal = props.horizontal,
      flush = props.flush,
      accent = props.accent,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "horizontal", "flush", "accent"]); // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'list-group', (_classNames = {}, _classNames["list-group-horizontal-" + horizontal] = horizontal, _classNames['list-group-flush'] = flush, _classNames['list-group-accent'] = accent, _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    role: "list-items"
  }, attributes, {
    ref: innerRef
  }));
};

CListGroup.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  flush: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  accent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CListGroup.defaultProps = {
  tag: 'ul'
};
/* harmony default export */ __webpack_exports__["default"] = (CListGroup);

/***/ }),

/***/ "./node_modules/@coreui/react/es/list-group/CListGroupItem.js":
/*!********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/list-group/CListGroupItem.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");






 //component - CoreUI / CListGroupItem

var CListGroupItem = function CListGroupItem(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      accent = props.accent,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "active", "disabled", "action", "color", "accent"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'list-group-item', (_classNames = {
    'list-group-item-action': action || rest.href || rest.to || Tag == 'button',
    active: active,
    disabled: disabled
  }, _classNames["list-group-item-" + color] = color, _classNames["list-group-item-accent-" + accent] = accent, _classNames));

  if (props.href || props.to) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_link_CLink__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
      className: classes,
      innerRef: innerRef
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
      className: classes,
      ref: innerRef
    }));
  }
};

CListGroupItem.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  accent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  action: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CListGroupItem.defaultProps = {
  tag: 'li'
};
/* harmony default export */ __webpack_exports__["default"] = (CListGroupItem);

/***/ }),

/***/ "./node_modules/@coreui/react/es/media/CMedia.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/media/CMedia.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CMedia

var CMedia = function CMedia(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('media', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CMedia.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CMedia);

/***/ }),

/***/ "./node_modules/@coreui/react/es/media/CMediaBody.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/media/CMediaBody.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CMediaBody

var CMediaBody = function CMediaBody(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('media-body', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CMediaBody.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CMediaBody);

/***/ }),

/***/ "./node_modules/@coreui/react/es/modal/CModal.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/modal/CModal.js ***!
  \*******************************************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");






var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});

var getTransitionClass = function getTransitionClass(s) {
  return s === 'entering' ? 'd-block' : s === 'entered' ? 'show d-block' : s === 'exiting' ? 'd-block' : '';
}; //animation fixes introduced thanks to Sirlordt
//component - CoreUI / CModal


var CModal = function CModal(props) {
  var _classNames, _classNames2, _classNames3;

  var innerRef = props.innerRef,
      show = props.show,
      centered = props.centered,
      size = props.size,
      color = props.color,
      borderColor = props.borderColor,
      fade = props.fade,
      backdrop = props.backdrop,
      closeOnBackdrop = props.closeOnBackdrop,
      onOpened = props.onOpened,
      onClosed = props.onClosed,
      addContentClass = props.addContentClass,
      onClose = props.onClose,
      className = props.className,
      scrollable = props.scrollable,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["innerRef", "show", "centered", "size", "color", "borderColor", "fade", "backdrop", "closeOnBackdrop", "onOpened", "onClosed", "addContentClass", "onClose", "className", "scrollable"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      modalTrigger = _useState2[0],
      setModalTrigger = _useState2[1];

  var modalClick = function modalClick(e) {
    return e.target.dataset.modal && closeOnBackdrop && close();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setIsOpen(show);
  }, [show]);

  var onKeypress = function onKeypress(e) {
    return e.keyCode == '27' && close();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    isOpen && document.addEventListener('keydown', onKeypress);
    return function () {
      return document.removeEventListener('keydown', onKeypress);
    };
  }, [isOpen]);

  var close = function close() {
    onClose && onClose();
    setIsOpen(false);
  };

  var onEntered = function onEntered() {
    setModalTrigger(document.querySelector(':focus'));
    nodeRef.current.focus();
    onOpened && onOpened();
  };

  var onExited = function onExited() {
    modalTrigger && modalTrigger.focus();
    onClosed && onClosed();
  };

  var modalClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('modal overflow-auto fade', (_classNames = {}, _classNames["modal-" + color] = color, _classNames), className);
  var dialogClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('modal-dialog', (_classNames2 = {
    'modal-dialog-scrollable': scrollable,
    'modal-dialog-centered': centered
  }, _classNames2["modal-" + size] = size, _classNames2));
  var contentClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('modal-content', (_classNames3 = {}, _classNames3["border-" + borderColor] = borderColor, _classNames3), addContentClass);
  var backdropClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
    'modal-backdrop': true,
    'fade': fade,
    'show': isOpen || fade
  });
  var nodeRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: modalClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["Transition"], {
    in: Boolean(isOpen),
    onEntered: onEntered,
    onExited: onExited,
    timeout: fade ? 150 : 0,
    nodeRef: nodeRef
  }, function (status) {
    var transitionClass = getTransitionClass(status);
    var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(modalClasses, transitionClass);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      tabIndex: "-1",
      role: "dialog",
      className: classes,
      "data-modal": true,
      ref: nodeRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: dialogClasses,
      role: "document"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      className: contentClasses,
      ref: innerRef
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Context.Provider, {
      value: {
        close: close
      }
    }, props.children))));
  }), backdrop && isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: backdropClasses
  }));
};

CModal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  show: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  centered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'sm', 'lg', 'xl']),
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  onOpened: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onClosed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  fade: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  closeOnBackdrop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  addContentClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  scrollable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CModal.defaultProps = {
  backdrop: true,
  fade: true,
  closeOnBackdrop: true
};
/* harmony default export */ __webpack_exports__["default"] = (CModal);

/***/ }),

/***/ "./node_modules/@coreui/react/es/modal/CModalBody.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/modal/CModalBody.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CModalBody

var CModalBody = function CModalBody(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'modal-body');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CModalBody.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CModalBody.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CModalBody);

/***/ }),

/***/ "./node_modules/@coreui/react/es/modal/CModalFooter.js":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/react/es/modal/CModalFooter.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CModalFooter

var CModalFooter = function CModalFooter(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'modal-footer');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CModalFooter.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CModalFooter.defaultProps = {
  tag: 'footer'
};
/* harmony default export */ __webpack_exports__["default"] = (CModalFooter);

/***/ }),

/***/ "./node_modules/@coreui/react/es/modal/CModalHeader.js":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/react/es/modal/CModalHeader.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _CModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CModal */ "./node_modules/@coreui/react/es/modal/CModal.js");
/* harmony import */ var _button_CButtonClose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button/CButtonClose */ "./node_modules/@coreui/react/es/button/CButtonClose.js");







 //component - CoreUI / CModalHeader

var CModalHeader = function CModalHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      closeButton = props.closeButton,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "closeButton"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CModal__WEBPACK_IMPORTED_MODULE_6__["Context"]),
      close = _useContext.close; //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'modal-header');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }), props.children, closeButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_CButtonClose__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: close
  }));
};

CModalHeader.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CModalHeader.defaultProps = {
  tag: 'header'
};
/* harmony default export */ __webpack_exports__["default"] = (CModalHeader);

/***/ }),

/***/ "./node_modules/@coreui/react/es/modal/CModalTitle.js":
/*!************************************************************!*\
  !*** ./node_modules/@coreui/react/es/modal/CModalTitle.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CModalTitle

var CModalTitle = function CModalTitle(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('modal-title', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CModalTitle.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CModalTitle.defaultProps = {
  tag: 'h5'
};
/* harmony default export */ __webpack_exports__["default"] = (CModalTitle);

/***/ }),

/***/ "./node_modules/@coreui/react/es/nav/CNav.js":
/*!***************************************************!*\
  !*** ./node_modules/@coreui/react/es/nav/CNav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CNav

var CNav = function CNav(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      variant = props.variant,
      vertical = props.vertical,
      justified = props.justified,
      fill = props.fill,
      inCard = props.inCard,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "variant", "vertical", "justified", "fill", "inCard"]);

  var verticalClass = "flex" + (vertical === true ? '' : "-" + vertical) + "-column"; //render

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('nav', vertical && verticalClass, (_classNames = {}, _classNames["nav-" + variant] = variant, _classNames['nav-justified'] = justified, _classNames['nav-fill'] = fill, _classNames["card-header-" + variant] = inCard && variant, _classNames), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNav.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'tabs', 'pills']),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  justified: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  inCard: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CNav.defaultProps = {
  tag: 'ul'
};
/* harmony default export */ __webpack_exports__["default"] = (CNav);

/***/ }),

/***/ "./node_modules/@coreui/react/es/nav/CNavItem.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/nav/CNavItem.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CNavItem

var CNavItem = function CNavItem(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('nav-item', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNavItem.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CNavItem.defaultProps = {
  tag: 'li'
};
/* harmony default export */ __webpack_exports__["default"] = (CNavItem);

/***/ }),

/***/ "./node_modules/@coreui/react/es/nav/CNavLink.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/nav/CNavLink.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");
/* harmony import */ var _tabs_CTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tabs/CTabs */ "./node_modules/@coreui/react/es/tabs/CTabs.js");







var getIndex = function getIndex(el) {
  return Array.from(el.parentNode.children).indexOf(el);
};

var getState = function getState(_ref) {
  var el = _ref.current;
  var hasSiblings = el.parentElement.childNodes.length > 1;
  return el.dataset.tab || getIndex(hasSiblings ? el : el.parentElement);
};

var CNavLink = function CNavLink(props) {
  var innerRef = props.innerRef,
      className = props.className,
      onClick = props.onClick,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["innerRef", "className", "onClick"]);

  var tabState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_tabs_CTabs__WEBPACK_IMPORTED_MODULE_5__["Context"]);
  var actTab = (tabState || {}).active;
  var ref = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
  innerRef && innerRef(ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      active = _useState[0],
      setActive = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    typeof actTab !== 'undefined' && setActive(getState(ref) === actTab);
  }, [actTab]);

  var click = function click(e) {
    onClick && onClick(e);
    tabState && tabState.setActiveTab(getState(ref));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_link_CLink__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    active: active
  }, rest, {
    innerRef: ref,
    onClick: click,
    className: ['nav-link', className]
  }));
};

CNavLink.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CNavLink);

/***/ }),

/***/ "./node_modules/@coreui/react/es/navbar/CNavbar.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/navbar/CNavbar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CNavbar

var CNavbar = function CNavbar(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      expandable = props.expandable,
      light = props.light,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "expandable", "light", "fixed", "sticky", "color"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('navbar', className, light ? 'navbar-light' : 'navbar-dark', (_classNames = {}, _classNames["navbar-expand" + (expandable === true ? '' : "-" + expandable)] = expandable, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames['sticky-top'] = sticky, _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNavbar.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  light: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'top', 'bottom']),
  sticky: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  expandable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string])
};
CNavbar.defaultProps = {
  tag: 'nav'
};
/* harmony default export */ __webpack_exports__["default"] = (CNavbar);

/***/ }),

/***/ "./node_modules/@coreui/react/es/navbar/CNavbarBrand.js":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/react/es/navbar/CNavbarBrand.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CBrand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CBrand */ "./node_modules/@coreui/react/es/utils/CBrand.js");


/* eslint react/prop-types: 0 */

 //component - CoreUI / CNavbarBrand

var CNavbarBrand = function CNavbarBrand(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_CBrand__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: ['navbar-brand', props.className]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CNavbarBrand);

/***/ }),

/***/ "./node_modules/@coreui/react/es/navbar/CNavbarNav.js":
/*!************************************************************!*\
  !*** ./node_modules/@coreui/react/es/navbar/CNavbarNav.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CNavbarNav

var CNavbarNav = function CNavbarNav(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('navbar-nav', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNavbarNav.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CNavbarNav.defaultProps = {
  tag: 'ul'
};
/* harmony default export */ __webpack_exports__["default"] = (CNavbarNav);

/***/ }),

/***/ "./node_modules/@coreui/react/es/navbar/CNavbarText.js":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/react/es/navbar/CNavbarText.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CNavbarText

var CNavbarText = function CNavbarText(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('navbar-text', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNavbarText.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CNavbarText.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CNavbarText);

/***/ }),

/***/ "./node_modules/@coreui/react/es/pagination/CPagination.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/pagination/CPagination.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");





 //component - CoreUI / CPagination

var CPagination = function CPagination(props) {
  var className = props.className,
      innerRef = props.innerRef,
      addListClass = props.addListClass,
      activePage = props.activePage,
      size = props.size,
      firstButton = props.firstButton,
      previousButton = props.previousButton,
      nextButton = props.nextButton,
      lastButton = props.lastButton,
      dots = props.dots,
      arrows = props.arrows,
      doubleArrows = props.doubleArrows,
      limit = props.limit,
      pages = props.pages,
      align = props.align,
      onActivePageChange = props.onActivePageChange,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "addListClass", "activePage", "size", "firstButton", "previousButton", "nextButton", "lastButton", "dots", "arrows", "doubleArrows", "limit", "pages", "align", "onActivePageChange"]);

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    pages < activePage && onActivePageChange(pages, true);
  }, [pages]); //render

  var listClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('pagination', size && 'pagination-' + size, 'justify-content-' + align, addListClass);
  var backArrowsClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('page-item', activePage === 1 && 'disabled');
  var nextArrowsClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('page-item', activePage === pages && 'disabled');

  var showDots = function () {
    return dots && limit > 4 && limit < pages;
  }();

  var maxPrevItems = function () {
    return Math.floor((limit - 1) / 2);
  }();

  var maxNextItems = function () {
    return Math.ceil((limit - 1) / 2);
  }();

  var beforeDots = function () {
    return showDots && activePage > maxPrevItems + 1;
  }();

  var afterDots = function () {
    return showDots && activePage < pages - maxNextItems;
  }();

  var computedLimit = function () {
    return limit - afterDots - beforeDots;
  }();

  var range = function () {
    return activePage + maxNextItems;
  }();

  var lastItem = function () {
    return range >= pages ? pages : range - afterDots;
  }();

  var itemsAmount = function () {
    return pages < computedLimit ? pages : computedLimit;
  }();

  var items = function () {
    if (activePage - maxPrevItems <= 1) {
      return Array.from({
        length: itemsAmount
      }, function (v, i) {
        return i + 1;
      });
    } else {
      return Array.from({
        length: itemsAmount
      }, function (v, i) {
        return lastItem - i;
      }).reverse();
    }
  }();

  var setPage = function setPage(number) {
    if (number !== activePage) {
      onActivePageChange(number);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className,
    "aria-label": "pagination"
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: listClasses
  }, doubleArrows && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: backArrowsClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_link_CLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "page-link",
    onClick: function onClick() {
      return setPage(1);
    },
    "aria-label": "Go to first page",
    "aria-disabled": activePage === 1,
    disabled: activePage === 1
  }, firstButton)), arrows && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: backArrowsClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_link_CLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "page-link",
    onClick: function onClick() {
      return setPage(activePage - 1);
    },
    "aria-label": "Go to previous page",
    "aria-disabled": activePage === 1,
    disabled: activePage === 1
  }, previousButton)), beforeDots && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    role: "separator",
    className: "page-item disabled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "page-link"
  }, "\u2026")), items.map(function (i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: (activePage === i ? 'active' : '') + " page-item",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_link_CLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "page-link",
      onClick: function onClick(e) {
        return setPage(i, e);
      },
      "aria-label": activePage === i ? "Current page " + i : "Go to page " + i
    }, i));
  }), afterDots && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    role: "separator",
    className: "page-item disabled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "page-link"
  }, "\u2026")), arrows && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: nextArrowsClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_link_CLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "page-link",
    onClick: function onClick() {
      return setPage(activePage + 1);
    },
    "aria-label": "Go to next page",
    "aria-disabled": activePage === pages,
    disabled: activePage === pages
  }, nextButton)), doubleArrows && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: nextArrowsClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_link_CLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "page-link",
    onClick: function onClick() {
      return setPage(pages);
    },
    "aria-label": "Go to last page",
    "aria-disabled": activePage === pages,
    disabled: activePage === pages
  }, lastButton))));
};

CPagination.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  activePage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  dots: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  arrows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  doubleArrows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  firstButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  previousButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  lastButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'sm', 'lg']),
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['start', 'center', 'end']),
  addListClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  pages: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  onActivePageChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
CPagination.defaultProps = {
  activePage: 1,
  dots: true,
  arrows: true,
  doubleArrows: true,
  limit: 5,
  firstButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "\xAB"),
  previousButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "\u2039"),
  nextButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "\u203A"),
  lastButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "\xBB"),
  align: 'start',
  pages: 10
};
/* harmony default export */ __webpack_exports__["default"] = (CPagination);

/***/ }),

/***/ "./node_modules/@coreui/react/es/progress/CProgress.js":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/react/es/progress/CProgress.js ***!
  \*************************************************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CProgressBar */ "./node_modules/@coreui/react/es/progress/CProgressBar.js");






var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({}); //component - CoreUI / CProgress

var CProgress = function CProgress(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      color = props.color,
      striped = props.striped,
      animated = props.animated,
      precision = props.precision,
      showPercentage = props.showPercentage,
      showValue = props.showValue,
      max = props.max,
      value = props.value,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "innerRef", "size", "color", "striped", "animated", "precision", "showPercentage", "showValue", "max", "value"]);

  var inheritedProps = {
    color: color,
    striped: striped,
    animated: animated,
    precision: precision,
    showPercentage: showPercentage,
    showValue: showValue,
    max: max,
    value: value
  };
  var progressClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('progress', size && 'progress-' + size, className); // render

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: progressClasses
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Context.Provider, {
    value: {
      inheritedProps: inheritedProps
    }
  }, children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CProgressBar__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};

CProgress.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  max: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  animated: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  striped: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  precision: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  showPercentage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  showValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CProgress.defaultProps = {
  value: 0,
  max: 100,
  precision: 0
};
/* harmony default export */ __webpack_exports__["default"] = (CProgress);

/***/ }),

/***/ "./node_modules/@coreui/react/es/progress/CProgressBar.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/progress/CProgressBar.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CProgress */ "./node_modules/@coreui/react/es/progress/CProgress.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //component - CoreUI / CProgressBar

var CProgressBar = function CProgressBar(directProps) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_CProgress__WEBPACK_IMPORTED_MODULE_6__["Context"]),
      inheritedProps = _useContext.inheritedProps;

  var props = _objectSpread(_objectSpread({}, inheritedProps), directProps);

  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      striped = props.striped,
      animated = props.animated,
      precision = props.precision,
      showPercentage = props.showPercentage,
      showValue = props.showValue,
      max = props.max,
      value = props.value,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "innerRef", "color", "striped", "animated", "precision", "showPercentage", "showValue", "max", "value"]); // render


  var progressBarClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()('progress-bar', animated && 'progress-bar-animated', (striped || animated) && 'progress-bar-striped', color && "bg-" + color, className);
  var valLabel = Number(value).toFixed(precision);
  var percentLabel = Number(value / max * 100).toFixed(precision) + '%';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: progressBarClasses,
    style: {
      width: value / max * 100 + "%"
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": "0",
    "aria-valuemax": max
  }, attributes, {
    ref: innerRef
  }), showPercentage ? percentLabel : showValue ? valLabel : children);
};

CProgressBar.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  animated: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  striped: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  precision: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  showPercentage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  showValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CProgressBar);

/***/ }),

/***/ "./node_modules/@coreui/react/es/spinner/CSpinner.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/spinner/CSpinner.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CSpinner

var CSpinner = function CSpinner(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      grow = props.grow,
      size = props.size,
      color = props.color,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "grow", "size", "color"]); //render


  var type = grow ? 'grow' : 'border';
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()("spinner-" + type, size && "spinner-" + type + "-" + size, color && "text-" + color, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    "aria-hidden": "false",
    "aria-label": "Loading",
    role: "status"
  }, attributes, {
    ref: innerRef
  }));
};

CSpinner.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  grow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
CSpinner.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CSpinner);

/***/ }),

/***/ "./node_modules/@coreui/react/es/switch/CSwitch.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/switch/CSwitch.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CSwitch

var CSwitch = function CSwitch(props) {
  var className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      color = props.color,
      labelOn = props.labelOn,
      labelOff = props.labelOff,
      variant = props.variant,
      shape = props.shape,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "size", "color", "labelOn", "labelOff", "variant", "shape"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-switch form-check-label', (labelOn || labelOff) && 'c-switch-label', size && "c-switch-" + size, shape && "c-switch-" + shape, color && "c-switch" + (variant ? "-" + variant : '') + "-" + color, className);
  var inputClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-switch-input', 'c-form-check-input');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: inputClasses,
    type: "checkbox"
  }, attributes, {
    ref: innerRef
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "c-switch-slider",
    "data-checked": labelOn,
    "data-unchecked": labelOff
  }));
};

CSwitch.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'lg', 'sm']),
  shape: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'pill', 'square']),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', '3d', 'opposite', 'outline']),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  labelOn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  labelOff: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CSwitch);

/***/ }),

/***/ "./node_modules/@coreui/react/es/table/CDataTable.css":
/*!************************************************************!*\
  !*** ./node_modules/@coreui/react/es/table/CDataTable.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader??ref--6-1!../../../../postcss-loader/src??ref--6-2!./CDataTable.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@coreui/react/es/table/CDataTable.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@coreui/react/es/table/CDataTable.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/table/CDataTable.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pagination_CPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pagination/CPagination */ "./node_modules/@coreui/react/es/pagination/CPagination.js");
/* harmony import */ var _element_cover_CElementCover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../element-cover/CElementCover */ "./node_modules/@coreui/react/es/element-cover/CElementCover.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/js/index.js");
/* harmony import */ var _CDataTable_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CDataTable.module.css */ "./node_modules/@coreui/react/es/table/CDataTable.module.css");
/* harmony import */ var _CDataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CDataTable_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CDataTable_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CDataTable.css */ "./node_modules/@coreui/react/es/table/CDataTable.css");
/* harmony import */ var _CDataTable_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_CDataTable_css__WEBPACK_IMPORTED_MODULE_10__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









 //component - CoreUI / CTable

var CDataTable = function CDataTable(props) {
  var _ref2;

  var innerRef = props.innerRef,
      overTableSlot = props.overTableSlot,
      columnHeaderSlot = props.columnHeaderSlot,
      sortingIconSlot = props.sortingIconSlot,
      columnFilterSlot = props.columnFilterSlot,
      noItemsViewSlot = props.noItemsViewSlot,
      noItemsView = props.noItemsView,
      captionSlot = props.captionSlot,
      footerSlot = props.footerSlot,
      underTableSlot = props.underTableSlot,
      theadTopSlot = props.theadTopSlot,
      loadingSlot = props.loadingSlot,
      scopedSlots = props.scopedSlots,
      loading = props.loading,
      fields = props.fields,
      pagination = props.pagination,
      activePage = props.activePage,
      itemsPerPage = props.itemsPerPage,
      items = props.items,
      sorter = props.sorter,
      header = props.header,
      clickableRows = props.clickableRows,
      columnFilter = props.columnFilter,
      tableFilterValue = props.tableFilterValue,
      tableFilter = props.tableFilter,
      cleaner = props.cleaner,
      addTableClasses = props.addTableClasses,
      size = props.size,
      dark = props.dark,
      striped = props.striped,
      hover = props.hover,
      border = props.border,
      outlined = props.outlined,
      responsive = props.responsive,
      footer = props.footer,
      itemsPerPageSelect = props.itemsPerPageSelect,
      sorterValue = props.sorterValue,
      columnFilterValue = props.columnFilterValue,
      onRowClick = props.onRowClick,
      onSorterValueChange = props.onSorterValueChange,
      onPaginationChange = props.onPaginationChange,
      onColumnFilterChange = props.onColumnFilterChange,
      onPagesChange = props.onPagesChange,
      onTableFilterChange = props.onTableFilterChange,
      onPageChange = props.onPageChange,
      onFilteredItemsChange = props.onFilteredItemsChange;
  var compData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    firstRun: true,
    columnFiltered: 0,
    changeItems: 0
  }).current; //

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(itemsPerPage),
      perPageItems = _useState[0],
      setPerPageItems = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(sorterValue || {}),
      sorterState = _useState2[0],
      setSorterState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(tableFilterValue),
      tableFilterState = _useState3[0],
      setTableFilterState = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(columnFilterValue || {}),
      columnFilterState = _useState4[0],
      setColumnFilterState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(activePage || 1),
      page = _useState5[0],
      setPage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(items || []),
      passedItems = _useState6[0],
      setPassedItems = _useState6[1]; // functions


  var cellClass = function cellClass(item, colName, index) {
    var classes = [];

    if (item._cellClasses && item._cellClasses[colName]) {
      classes.push(item._cellClasses[colName]);
    }

    if (fields && fields[index]._classes) {
      classes.push(fields[index]._classes);
    }

    return classes;
  };

  var pretifyName = function pretifyName(name) {
    return name.replace(/[-_.]/g, ' ').replace(/ +/g, ' ').replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };

  var headerClass = function headerClass(i) {
    return fields && fields[i]._classes && fields[i]._classes;
  };

  var isSortable = function isSortable(i) {
    var isDataColumn = itemsDataColumns.includes(rawColumnNames[i]);
    return sorter && (!fields || fields[i].sorter !== false) && isDataColumn;
  };

  var headerStyles = function headerStyles(index) {
    var style = {
      verticalAlign: 'middle',
      overflow: 'hidden'
    };

    if (isSortable(index)) {
      style.cursor = 'pointer';
    }

    if (fields && fields[index] && fields[index]._style) {
      return _objectSpread(_objectSpread({}, style), fields[index]._style);
    }

    return style;
  };

  var getIconState = function getIconState(index) {
    var direction = sorterState.asc ? 'asc' : 'desc';
    return rawColumnNames[index] === sorterState.column ? direction : 0;
  };

  var iconClasses = function iconClasses(index) {
    var state = getIconState(index);
    return ['position-absolute', _CDataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default.a['icon-transition'], _CDataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default.a['arrow-position'], !state && _CDataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default.a['transparent'], state === 'desc' && _CDataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default.a['rotate-icon']];
  };

  var rowClicked = function rowClicked(item, index, e, detailsClick) {
    if (detailsClick === void 0) {
      detailsClick = false;
    }

    onRowClick && onRowClick(item, index, getClickedColumnName(e, detailsClick), e);
  };

  var changeSort = function changeSort(column, index) {
    if (!isSortable(index)) {
      return;
    } //if column changed or sort was descending change asc to true


    var state = sorterState;
    var columnRepeated = state.column === column;

    if (!sorter || !sorter.resetable) {
      state.column = column;
    } else {
      state.column = columnRepeated && state.asc === false ? null : column;
    }

    state.asc = !(columnRepeated && state.asc);
    setSorterState(_objectSpread({}, state));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onSorterValueChange && onSorterValueChange(sorterState);
  }, [JSON.stringify(sorterState)]);

  var paginationChange = function paginationChange(e) {
    onPaginationChange && onPaginationChange(Number(e.target.value));
    !itemsPerPageSelect.external && setPerPageItems(Number(e.target.value));
  };

  var columnFilterEvent = function columnFilterEvent(colName, value, type) {
    var _objectSpread2;

    var isLazy = columnFilter && columnFilter.lazy === true;

    if (isLazy && type === 'input' || !isLazy && type === 'change') {
      return;
    }

    var newState = _objectSpread(_objectSpread({}, columnFilterState), {}, (_objectSpread2 = {}, _objectSpread2["" + colName] = value, _objectSpread2));

    setColumnFilterState(newState);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onColumnFilterChange && onColumnFilterChange(columnFilterState);
  }, [JSON.stringify(columnFilterState)]);

  var tableFilterChange = function tableFilterChange(value, type) {
    var isLazy = tableFilter && tableFilter.lazy === true;

    if (isLazy && type === 'input' || !isLazy && type === 'change') {
      return;
    }

    setTableFilterState(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onTableFilterChange && onTableFilterChange(tableFilterState);
  }, [tableFilterState]);

  var getClickedColumnName = function getClickedColumnName(e, detailsClick) {
    if (detailsClick) {
      return 'details';
    } else {
      var children = Array.from(e.target.closest('tr').children);
      var clickedCell = children.filter(function (child) {
        return child.contains(e.target);
      })[0];
      return rawColumnNames[children.indexOf(clickedCell)];
    }
  };

  var clean = function clean() {
    setTableFilterState('');
    setColumnFilterState({});
    setSorterState({
      column: "",
      asc: true
    });
  }; // computed


  var genCols = Object.keys(passedItems[0] || {}).filter(function (el) {
    return el.charAt(0) !== '_';
  });
  var rawColumnNames = fields ? fields.map(function (el) {
    return el.key || el;
  }) : genCols;
  var itemsDataColumns = rawColumnNames.filter(function (name) {
    return genCols.includes(name);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    compData.columnFiltered++;
  }, [JSON.stringify(columnFilter), JSON.stringify(columnFilterState), itemsDataColumns.join(''), compData.changeItems]);
  var columnFiltered = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var items = passedItems;

    if (columnFilter && columnFilter.external) {
      return items;
    }

    Object.entries(columnFilterState).forEach(function (_ref) {
      var key = _ref[0],
          value = _ref[1];
      var columnFilter = String(value).toLowerCase();

      if (columnFilter && itemsDataColumns.includes(key)) {
        items = items.filter(function (item) {
          return String(item[key]).toLowerCase().includes(columnFilter);
        });
      }
    });
    return items;
  }, [compData.columnFiltered]);
  var tableFiltered = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var items = columnFiltered;

    if (!tableFilterState || tableFilter && tableFilter.external) {
      return items;
    }

    var filter = tableFilterState.toLowerCase();

    var valueContainFilter = function valueContainFilter(val) {
      return String(val).toLowerCase().includes(filter);
    };

    items = items.filter(function (item) {
      return !!itemsDataColumns.find(function (key) {
        return valueContainFilter(item[key]);
      });
    });
    return items;
  }, [compData.columnFiltered, tableFilterState, JSON.stringify(tableFilter)]);
  var sortedItems = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var col = sorterState.column;

    if (!col || !itemsDataColumns.includes(col) || sorter && sorter.external) {
      return tableFiltered;
    } //if values in column are to be sorted by numeric value they all have to be type number


    var flip = sorterState.asc ? 1 : -1;
    var sorted = tableFiltered.slice().sort(function (item, item2) {
      var value = item[col];
      var value2 = item2[col];
      var a = typeof value === 'number' ? value : String(value).toLowerCase();
      var b = typeof value2 === 'number' ? value2 : String(value2).toLowerCase();
      return a > b ? 1 * flip : b > a ? -1 * flip : 0;
    });
    return sorted;
  }, [JSON.stringify(tableFiltered), JSON.stringify(sorterState), JSON.stringify(sorter)]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    !compData.firstRun && onFilteredItemsChange && onFilteredItemsChange(sortedItems);
  }, [JSON.stringify(sortedItems)]);
  var tableClasses = ['table', (_ref2 = {}, _ref2["table-" + size] = size, _ref2['table-dark'] = dark, _ref2['table-striped'] = striped, _ref2['table-hover'] = hover, _ref2['table-bordered'] = border, _ref2['border'] = outlined, _ref2), addTableClasses];
  var columnNames = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (fields) {
      return fields.map(function (f) {
        return f.label !== undefined ? f.label : pretifyName(f.key || f);
      });
    }

    return rawColumnNames.map(function (el) {
      return pretifyName(el);
    });
  }, [fields, rawColumnNames]);
  var sortingIconStyles = sorter && 'position-relative pr-4';
  var colspan = rawColumnNames.length;
  var totalPages = Math.ceil(sortedItems.length / perPageItems) || 1;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    !compData.firstRun && onPagesChange && onPagesChange(totalPages);
  }, [totalPages]);
  var computedPage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var compPage = pagination ? page : activePage;
    !compData.firstRun && onPageChange && onPageChange(compPage);
    return compPage;
  }, [page, activePage, pagination]);
  var firstItemIndex = (computedPage - 1) * perPageItems || 0;
  var paginatedItems = sortedItems.slice(firstItemIndex, firstItemIndex + perPageItems);
  var currentItems = computedPage ? paginatedItems : sortedItems;
  var tableFilterData = {
    label: tableFilter && tableFilter.label || 'Filter:',
    placeholder: tableFilter && tableFilter.placeholder || 'type string...'
  };
  var paginationSelect = {
    label: itemsPerPageSelect && itemsPerPageSelect.label || 'Items per page:',
    values: itemsPerPageSelect && itemsPerPageSelect.values || [5, 10, 20, 50]
  };

  var noItemsText = function () {
    var customValues = noItemsView || {};

    if (passedItems.length) {
      return customValues.noResults || 'No filtering results';
    }

    return customValues.noItems || 'No items';
  }();

  var isFiltered = tableFilterState || sorterState.column || Object.values(columnFilterState).join('');
  var cleanerProps = {
    content: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__["cilFilterX"],
    className: "mfs-2 " + (isFiltered ? 'text-danger' : 'transparent'),
    role: isFiltered ? 'button' : null,
    tabIndex: isFiltered ? 0 : null
  }; // watch

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return setPerPageItems(itemsPerPage);
  }, [itemsPerPage]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return setSorterState(_objectSpread({}, sorterValue));
  }, [sorterValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return setTableFilterState(tableFilterValue);
  }, [tableFilterValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return setColumnFilterState(_objectSpread({}, columnFilterValue));
  }, [columnFilterValue]); //items

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (items && !compData.firstRun && (items.length !== passedItems.length || JSON.stringify(items) !== JSON.stringify(passedItems))) {
      setPassedItems(items);
      compData.changeItems++;
    }
  }); // render

  compData.firstRun = false;
  var paginationProps = typeof pagination === 'object' ? pagination : null;
  var headerContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, columnNames.map(function (name, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
      onClick: function onClick() {
        changeSort(rawColumnNames[index], index);
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()([headerClass(index), sortingIconStyles]),
      style: headerStyles(index),
      key: index
    }, columnHeaderSlot["" + rawColumnNames[index]] || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "d-inline"
    }, name), isSortable(index) && (sortingIconSlot && sortingIconSlot(getIconState(index), iconClasses(index)) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
      customClasses: classnames__WEBPACK_IMPORTED_MODULE_4___default()(iconClasses(index)),
      width: 18,
      content: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__["cilArrowTop"]
    })));
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    ref: innerRef
  }, (itemsPerPageSelect || tableFilter || cleaner) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row my-2 mx-0"
  }, (tableFilter || cleaner) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-sm-6 form-inline p-0 c-datatable-filter"
  }, tableFilter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "mfe-2"
  }, tableFilterData.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "form-control",
    type: "text",
    placeholder: tableFilterData.placeholder,
    onInput: function onInput(e) {
      tableFilterChange(e.target.value, 'input');
    },
    onChange: function onChange(e) {
      tableFilterChange(e.target.value, 'change');
    },
    value: tableFilterState || '',
    "aria-label": "table filter input"
  })), cleaner && (typeof cleaner === 'function' ? cleaner(clean, isFiltered, cleanerProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cleanerProps, {
    onClick: clean,
    onKeyUp: function onKeyUp(event) {
      if (event.key === 'Enter') clean();
    }
  })))), itemsPerPageSelect && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-sm-6 p-0 " + (tableFilter || cleaner ? '' : 'offset-sm-6')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-inline justify-content-sm-end c-datatable-items-per-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "mfe-2"
  }, paginationSelect.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    className: "form-control",
    onChange: paginationChange,
    "aria-label": "changes number of visible items",
    value: perPageItems
  }, paginationSelect.values.map(function (number, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      val: number,
      key: key
    }, number);
  })))))), overTableSlot, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "position-relative " + (responsive && 'table-responsive')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(tableClasses)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("thead", null, theadTopSlot, header && headerContent, columnFilter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "table-sm"
  }, rawColumnNames.map(function (colName, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(headerClass(index)),
      key: index
    }, columnFilterSlot["" + rawColumnNames[index]] || (!fields || fields[index].filter !== false) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "form-control form-control-sm",
      onInput: function onInput(e) {
        columnFilterEvent(colName, e.target.value, 'input');
      },
      onChange: function onChange(e) {
        columnFilterEvent(colName, e.target.value, 'change');
      },
      value: columnFilterState[colName] || '',
      "aria-label": "column name: '" + colName + "' filter input"
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    style: clickableRows && {
      cursor: 'pointer'
    }
  }, currentItems.map(function (item, itemIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: itemIndex
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(item._classes),
      tabIndex: clickableRows && 0,
      onClick: function onClick(e) {
        rowClicked(item, itemIndex + firstItemIndex, e);
      }
    }, rawColumnNames.map(function (colName, index) {
      return scopedSlots[colName] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(scopedSlots[colName](item, itemIndex + firstItemIndex), {
        'key': index
      }) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(cellClass(item, colName, index)),
        key: index
      }, String(item[colName]));
    })), scopedSlots.details && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      onClick: function onClick(e) {
        rowClicked(item, itemIndex + firstItemIndex, e, true);
      },
      className: "p-0",
      style: {
        border: 'none !important'
      },
      key: 'details' + itemIndex
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      colSpan: colspan,
      className: "p-0",
      style: {
        border: 'none !important'
      }
    }, scopedSlots.details(item, itemIndex + firstItemIndex))));
  }), !currentItems.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    colSpan: colspan
  }, noItemsViewSlot || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-center my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, noItemsText + ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "30",
    name: "cilBan",
    content: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__["cilBan"],
    className: "text-danger mb-2"
  })))))), footer && currentItems.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tfoot", null, headerContent), footerSlot, captionSlot), loading && (loadingSlot || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_element_cover_CElementCover__WEBPACK_IMPORTED_MODULE_6__["default"], {
    boundaries: [{
      sides: ['top'],
      query: 'td'
    }, {
      sides: ['bottom'],
      query: 'tbody'
    }]
  }))), underTableSlot, pagination && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pagination_CPagination__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: {
      display: totalPages > 1 ? 'inline' : 'none'
    },
    onActivePageChange: function onActivePageChange(page) {
      setPage(page);
    },
    pages: totalPages,
    activePage: page
  }, paginationProps)));
};

CDataTable.propTypes = {
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  overTableSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  columnHeaderSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  sortingIconSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  columnFilterSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  noItemsViewSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  noItemsView: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  captionSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  footerSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  underTableSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  scopedSlots: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  theadTopSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  loadingSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fields: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  activePage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  items: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  sorter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  clickableRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  columnFilter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  tableFilterValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  tableFilter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  cleaner: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  addTableClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  striped: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  hover: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  border: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  outlined: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  footer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  itemsPerPageSelect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  sorterValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  columnFilterValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onRowClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSorterValueChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onPaginationChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onColumnFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onPagesChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onTableFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onFilteredItemsChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
CDataTable.defaultProps = {
  itemsPerPage: 10,
  responsive: true,
  columnHeaderSlot: {},
  columnFilterSlot: {},
  scopedSlots: {},
  sorterValue: {},
  header: true
};
/* harmony default export */ __webpack_exports__["default"] = (CDataTable);

/***/ }),

/***/ "./node_modules/@coreui/react/es/table/CDataTable.module.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/table/CDataTable.module.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader??ref--6-1!../../../../postcss-loader/src??ref--6-2!./CDataTable.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@coreui/react/es/table/CDataTable.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@coreui/react/es/tabs/CTabContent.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/tabs/CTabContent.js ***!
  \***********************************************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CTabContent

var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext();

var CTabContent = function CTabContent(props) {
  var className = props.className,
      innerRef = props.innerRef,
      fade = props.fade,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "fade"]); // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('tab-content', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Context.Provider, {
    value: fade
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  })));
};

CTabContent.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  fade: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CTabContent.defaultProps = {
  fade: true
};
/* harmony default export */ __webpack_exports__["default"] = (CTabContent);

/***/ }),

/***/ "./node_modules/@coreui/react/es/tabs/CTabPane.js":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/react/es/tabs/CTabPane.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fade_CFade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fade/CFade */ "./node_modules/@coreui/react/es/fade/CFade.js");
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _CTabs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CTabs.js */ "./node_modules/@coreui/react/es/tabs/CTabs.js");
/* harmony import */ var _CTabContent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CTabContent.js */ "./node_modules/@coreui/react/es/tabs/CTabContent.js");









 //component - CoreUI / CTabPane

var getIndex = function getIndex(el) {
  return Array.from(el.parentNode.children).indexOf(el);
};

var getState = function getState(r) {
  return r.current.dataset.tab || getIndex(r.current);
};

var CTabPane = function CTabPane(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "active"]);

  var _ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CTabs_js__WEBPACK_IMPORTED_MODULE_8__["Context"]) || {},
      activeTab = _ref.active,
      setActiveTab = _ref.setActiveTab;

  var fade = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CTabContent_js__WEBPACK_IMPORTED_MODULE_9__["Context"]);
  var ref = typeof innerRef === 'object' ? innerRef : Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  typeof innerRef === 'function' && innerRef(ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      isActive = _useState[0],
      setIsActive = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setIsActive(activeTab === getState(ref));
  }, [activeTab]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (active !== undefined) {
      setActiveTab ? setActiveTab(active && getState(ref)) : setIsActive(active);
    }
  }, [active]); //render

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('tab-pane', {
    'active': isActive
  }, className);
  var attrs = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_6__["omitByKeys"])(attributes, _utils_helper_js__WEBPACK_IMPORTED_MODULE_7__["CFadeProps"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fade_CFade__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    in: isActive,
    baseClass: fade ? 'fade' : '',
    className: classes
  }, attrs, {
    innerRef: ref
  }));
};

CTabPane.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CTabPane);

/***/ }),

/***/ "./node_modules/@coreui/react/es/tabs/CTabs.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/react/es/tabs/CTabs.js ***!
  \*****************************************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

 //component - CoreUI / CTabPane

var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var CTabs = function CTabs(props) {
  var children = props.children,
      activeTab = props.activeTab,
      onActiveTabChange = props.onActiveTabChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    activeTab !== undefined && setActive(activeTab);
  }, [activeTab]);

  var setActiveTab = function setActiveTab(tab) {
    onActiveTabChange && onActiveTabChange(tab);
    setActive(tab);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: {
      active: active,
      setActiveTab: setActiveTab
    }
  }, children));
};

CTabs.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  onActiveTabChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CTabs);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CFooter.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CFooter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CFooter

var CFooter = function CFooter(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fixed = props.fixed,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "fixed"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-footer', fixed ? 'c-footer-fixed' : null, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFooter.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CFooter.defaultProps = {
  tag: 'footer',
  fixed: false
};
/* harmony default export */ __webpack_exports__["default"] = (CFooter);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CHeader.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CHeader.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CHeader

var CHeader = function CHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fixed = props.fixed,
      colorScheme = props.colorScheme,
      withSubheader = props.withSubheader,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "fixed", "colorScheme", "withSubheader"]); // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'c-header', colorScheme ? 'c-header-' + colorScheme : null, fixed ? 'c-header-fixed' : null, withSubheader ? 'c-header-with-subheader' : null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CHeader.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  withSubheader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  colorScheme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
CHeader.defaultProps = {
  tag: 'header',
  fixed: true,
  colorScheme: 'light'
};
/* harmony default export */ __webpack_exports__["default"] = (CHeader);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CHeaderBrand.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CHeaderBrand.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CBrand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CBrand */ "./node_modules/@coreui/react/es/utils/CBrand.js");


/* eslint react/prop-types: 0 */

 //component - CoreUI / CHeaderBrand

var CHeaderBrand = function CHeaderBrand(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_CBrand__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: ['c-header-brand', props.className]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CHeaderBrand);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CHeaderNav.js":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CHeaderNav.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CHeaderNav

var CHeaderNav = function CHeaderNav(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'c-header-nav');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CHeaderNav.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CHeaderNav);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CHeaderNavItem.js":
/*!******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CHeaderNavItem.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CHeaderNavItem

var CHeaderNavItem = function CHeaderNavItem(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'c-header-nav-item');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CHeaderNavItem.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CHeaderNavItem);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CHeaderNavLink.js":
/*!******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CHeaderNavLink.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");





 //component - CoreUI / CHeaderNavLink

var CHeaderNavLink = function CHeaderNavLink(props) {
  var className = props.className,
      innerRef = props.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'c-header-nav-link');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_link_CLink__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, rest, {
    innerRef: innerRef
  }));
};

CHeaderNavLink.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CHeaderNavLink);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CScrollbar.js":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CScrollbar.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scrollbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrollbar.css */ "./node_modules/@coreui/react/es/template/scrollbar.css");
/* harmony import */ var _scrollbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scrollbar_css__WEBPACK_IMPORTED_MODULE_7__);







 //component - CoreUI / CScrollbar

var CScrollbar = function CScrollbar(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      settings = props.settings,
      switcher = props.switcher,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef", "settings", "switcher"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      instance = _useState[0],
      setInstance = _useState[1];

  var ref = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
  innerRef && innerRef(ref);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    switcher ? init() : uninit();
  }, [switcher]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return uninit();
  }, []);

  var init = function init() {
    if (!instance) {
      createPerfectScrollbar();
    }
  };

  var createPerfectScrollbar = function createPerfectScrollbar() {
    setInstance(new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](ref.current, settings));
  };

  var uninit = function uninit() {
    if (instance) {
      instance.destroy();
      setInstance(null);
    }
  }; // render


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className),
    style: {
      position: 'relative'
    }
  }, attributes, {
    ref: ref
  }));
};

CScrollbar.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  settings: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  switcher: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CScrollbar.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CScrollbar);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebar.js":
/*!************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebar.js ***!
  \************************************************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({}); //component - CoreUI / CSidebar

var CSidebar = function CSidebar(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      breakpoint = props.breakpoint,
      show = props.show,
      fixed = props.fixed,
      unfoldable = props.unfoldable,
      minimize = props.minimize,
      size = props.size,
      hideOnMobileClick = props.hideOnMobileClick,
      aside = props.aside,
      colorScheme = props.colorScheme,
      overlaid = props.overlaid,
      dropdownMode = props.dropdownMode,
      onShowChange = props.onShowChange,
      onMinimizeChange = props.onMinimizeChange,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "innerRef", "breakpoint", "show", "fixed", "unfoldable", "minimize", "size", "hideOnMobileClick", "aside", "colorScheme", "overlaid", "dropdownMode", "onShowChange", "onMinimizeChange"]);

  var key = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Math.random().toString(36).substr(2))[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(show),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      openDropdown = _useState2[0],
      setOpenDropdown = _useState2[1];

  var node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({}).current;

  var reference = function reference(r) {
    node.current = r;
    innerRef && innerRef(r);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(minimize),
      minimized = _useState3[0],
      setIsMinimized = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    setIsMinimized(minimize);
  }, [minimize]);

  var toggleMinimize = function toggleMinimize() {
    setIsMinimized(!minimized);
    onMinimizeChange && onMinimizeChange(minimized);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    setIsOpen(show);
  }, [show]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    isOpen === true ? createBackdrop() : removeBackdrop();
    return function () {
      return removeBackdrop();
    };
  }, [isOpen]); //methods

  var sidebarCloseListener = function sidebarCloseListener(e) {
    if (document.getElementById(key + 'backdrop') && !node.current.contains(e.target)) {
      closeSidebar();
    }
  };

  var onKeydown = function onKeydown(e) {
    e.key.includes('Esc') && isAutoclosable() && closeSidebar();
  };

  var createBackdrop = function createBackdrop() {
    var backdrop = document.createElement('div');

    if (overlaid) {
      document.addEventListener('click', sidebarCloseListener);
    } else {
      backdrop.addEventListener('click', closeSidebar);
    }

    document.addEventListener('keydown', onKeydown);
    backdrop.className = 'c-sidebar-backdrop c-show';
    backdrop.id = key + 'backdrop';
    document.body.appendChild(backdrop);
  };

  var removeBackdrop = function removeBackdrop() {
    var backdrop = document.getElementById(key + 'backdrop');

    if (backdrop) {
      document.removeEventListener('click', sidebarCloseListener);
      backdrop.removeEventListener('click', closeSidebar);
      document.removeEventListener('keydown', onKeydown);
      document.body.removeChild(backdrop);
    }
  };

  var closeSidebar = function closeSidebar() {
    if (typeof onShowChange === 'function') {
      onShowChange(overlaid ? false : 'responsive');
    } else {
      setIsOpen(overlaid ? false : 'responsive');
    }
  };

  var isOnMobile = function isOnMobile() {
    return Boolean(getComputedStyle(node.current).getPropertyValue('--is-mobile'));
  };

  var isAutoclosable = function isAutoclosable() {
    return isOnMobile() || overlaid;
  };

  var onSidebarClick = function onSidebarClick(e) {
    var sidebarItemClicked = String(e.target.className).includes('c-sidebar-nav-link');

    if (sidebarItemClicked && hideOnMobileClick && isAutoclosable()) {
      closeSidebar();
    }
  }; // render


  var haveResponsiveClass = breakpoint && isOpen === 'responsive';
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-sidebar', colorScheme && "c-sidebar-" + colorScheme, isOpen === true && 'c-sidebar-show', haveResponsiveClass && "c-sidebar-" + breakpoint + "-show", fixed && !overlaid && 'c-sidebar-fixed', aside && 'c-sidebar-right', minimized && !unfoldable && 'c-sidebar-minimized', minimized && unfoldable && 'c-sidebar-unfoldable', overlaid && 'c-sidebar-overlaid', size && "c-sidebar-" + size, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Context.Provider, {
    value: {
      dropdownMode: dropdownMode,
      scrollbarExist: !minimized || unfoldable,
      toggleMinimize: toggleMinimize,
      openDropdown: openDropdown,
      setOpenDropdown: setOpenDropdown
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: reference,
    onClick: onSidebarClick
  }), children));
};

CSidebar.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  unfoldable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  overlaid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  breakpoint: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, '', 'sm', 'md', 'lg', 'xl', 'xxl']),
  minimize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  show: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', true, false, 'responsive']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'sm', 'lg', 'xl']),
  hideOnMobileClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  aside: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  colorScheme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  dropdownMode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'openActive', 'close', 'closeInactive', 'noAction']),
  onShowChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onMinimizeChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
CSidebar.defaultProps = {
  fixed: true,
  breakpoint: 'lg',
  show: 'responsive',
  hideOnMobileClick: true,
  colorScheme: 'dark'
};
/* harmony default export */ __webpack_exports__["default"] = (CSidebar);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarBrand.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarBrand.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CBrand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CBrand */ "./node_modules/@coreui/react/es/utils/CBrand.js");


/* eslint react/prop-types: 0 */

 //component - CoreUI / CSidebarBrand

var CSidebarBrand = function CSidebarBrand(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_CBrand__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: ['c-sidebar-brand', props.className]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CSidebarBrand);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarClose.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarClose.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_CButtonClose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/CButtonClose */ "./node_modules/@coreui/react/es/button/CButtonClose.js");


 //component - CoreUI / CSidebarClose

var CSidebarClose = function CSidebarClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button_CButtonClose__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    buttonClass: 'c-sidebar-close'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "c-icon",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "x"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M20.030 5.030l-1.061-1.061-6.97 6.97-6.97-6.97-1.061 1.061 6.97 6.97-6.97 6.97 1.061 1.061 6.97-6.97 6.97 6.97 1.061-1.061-6.97-6.97 6.97-6.97z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CSidebarClose);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarFooter.js":
/*!******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarFooter.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CSidebarFooter

var CSidebarFooter = function CSidebarFooter(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-sidebar-footer', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarFooter.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CSidebarFooter.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CSidebarFooter);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarForm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarForm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CSidebarForm

var CSidebarForm = function CSidebarForm(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-sidebar-form', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarForm.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CSidebarForm.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CSidebarForm);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarHeader.js":
/*!******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarHeader.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CSidebarHeader

var CSidebarHeader = function CSidebarHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-sidebar-header', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarHeader.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CSidebarHeader.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CSidebarHeader);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarMinimizer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarMinimizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSidebar */ "./node_modules/@coreui/react/es/template/CSidebar.js");





 //component - CoreUI / CSidebarMinimizer

var CSidebarMinimizer = function CSidebarMinimizer(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CSidebar__WEBPACK_IMPORTED_MODULE_5__["Context"]),
      toggleMinimize = _useContext.toggleMinimize; //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-sidebar-minimizer', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    type: "button"
  }, attributes, {
    onClick: toggleMinimize,
    ref: innerRef
  }));
};

CSidebarMinimizer.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CSidebarMinimizer);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarNav.js":
/*!***************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarNav.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CScrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CScrollbar */ "./node_modules/@coreui/react/es/template/CScrollbar.js");
/* harmony import */ var _CSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSidebar */ "./node_modules/@coreui/react/es/template/CSidebar.js");






 //component - CoreUI / CSidebarNav

var CSidebarNav = function CSidebarNav(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CSidebar__WEBPACK_IMPORTED_MODULE_6__["Context"]),
      scrollbarExist = _useContext.scrollbarExist;

  var navClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-sidebar-nav', 'h-100', className); //state

  var isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CScrollbar__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    settings: {
      suppressScrollX: !isRtl
    },
    className: navClasses,
    innerRef: innerRef,
    switcher: scrollbarExist,
    tag: "ul"
  }, attributes));
};

CSidebarNav.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CSidebarNav);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarNavDivider.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarNavDivider.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CSidebarNavDivider

var CSidebarNavDivider = function CSidebarNavDivider(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-sidebar-nav-divider', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarNavDivider.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CSidebarNavDivider);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarNavDropdown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarNavDropdown.js ***!
  \***********************************************************************/
/*! exports provided: DropdownContext, iconProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownContext", function() { return DropdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconProps", function() { return iconProps; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _CSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSidebar */ "./node_modules/@coreui/react/es/template/CSidebar.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var DropdownContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});
var iconProps = function iconProps(icon) {
  if (typeof icon === 'object') {
    var _objectSpread2;

    var key = icon.size ? 'className' : 'customClasses';
    return _objectSpread(_objectSpread({}, icon), {}, (_objectSpread2 = {}, _objectSpread2["" + key] = icon.customClasses || "c-sidebar-nav-icon " + icon.className, _objectSpread2));
  } else {
    return {
      customClasses: 'c-sidebar-nav-icon',
      name: icon
    };
  }
}; //component - CoreUI / CSidebarNavDropdown

var CSidebarNavDropdown = function CSidebarNavDropdown(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      icon = props.icon,
      fontIcon = props.fontIcon,
      name = props.name,
      show = props.show,
      route = props.route,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "innerRef", "icon", "fontIcon", "name", "show", "route"]);

  var ref = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
  innerRef && innerRef(ref);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_CSidebar__WEBPACK_IMPORTED_MODULE_8__["Context"]),
      dropdownMode = _useContext.dropdownMode,
      openDropdown = _useContext.openDropdown,
      setOpenDropdown = _useContext.setOpenDropdown;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(show),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setIsOpen(show);
  }, [show]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    !dropdownMode && (!openDropdown || !ref.current.contains(openDropdown)) && setIsOpen(false);
  }, [openDropdown]);

  var toggle = function toggle() {
    !dropdownMode && setOpenDropdown(isOpen ? ref.current.parentNode.closest('.c-sidebar-nav-dropdown') : ref.current);
    setIsOpen(!isOpen);
  };

  var path = '';

  try {
    path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useLocation"])().pathname;
  } catch (e) {
    console.warn(e);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (dropdownMode === 'close') {
      setIsOpen(false);
    } else if (dropdownMode === 'closeInactive' && route) {
      setIsOpen(path.includes(route));
    } else if ((!dropdownMode || dropdownMode !== 'noAction') && !isOpen && route) {
      setIsOpen(path.includes(route));
    }
  }, [path]); //render

  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()('c-sidebar-nav-dropdown', isOpen && 'c-show', className);
  var iconClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()('c-sidebar-nav-icon', fontIcon);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "c-sidebar-nav-dropdown-toggle",
    tabIndex: "0",
    onClick: toggle,
    "aria-label": "menu dropdown"
  }, icon && ( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(icon) ? icon : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], iconProps(icon))), fontIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: iconClasses
  }), name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "c-sidebar-nav-dropdown-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DropdownContext.Provider, {
    value: {
      isOpen: isOpen
    }
  }, children)));
};

CSidebarNavDropdown.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),
  fontIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  show: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  route: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CSidebarNavDropdown);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarNavItem.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarNavItem.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _CSidebarNavDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSidebarNavDropdown */ "./node_modules/@coreui/react/es/template/CSidebarNavDropdown.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 //component - CoreUI / CSidebarNavItem

var CSidebarNavItem = function CSidebarNavItem(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      name = props.name,
      icon = props.icon,
      fontIcon = props.fontIcon,
      badge = props.badge,
      addLinkClass = props.addLinkClass,
      label = props.label,
      color = props.color,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "className", "innerRef", "name", "icon", "fontIcon", "badge", "addLinkClass", "label", "color"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_CSidebarNavDropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownContext"]),
      isOpen = _useContext.isOpen;

  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()('c-sidebar-nav-item', className);
  var linkClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()(label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link', color && "c-sidebar-nav-link-" + color, addLinkClass);
  var routerLinkProps = rest.to && {
    exact: true,
    activeClassName: 'c-active'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: classes,
    ref: innerRef
  }, children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_6__["CLink"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: linkClasses
  }, routerLinkProps, rest, {
    tabIndex: isOpen === false ? -1 : 0
  }), icon && ( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(icon) ? icon : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_CSidebarNavDropdown__WEBPACK_IMPORTED_MODULE_8__["iconProps"])(icon))), fontIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "c-sidebar-nav-icon " + fontIcon
  }), name, badge && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_6__["CBadge"], _objectSpread(_objectSpread({}, badge), {}, {
    text: null
  }), badge.text)));
};

CSidebarNavItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  fontIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  badge: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  addLinkClass: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CSidebarNavItem);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSidebarNavTitle.js":
/*!********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSidebarNavTitle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CSidebarNavTitle

var CSidebarNavTitle = function CSidebarNavTitle(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-sidebar-nav-title', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarNavTitle.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (CSidebarNavTitle);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/CSubheader.js":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/CSubheader.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CSubheader

var CSubheader = function CSubheader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('c-subheader', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSubheader.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CSubheader.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CSubheader);

/***/ }),

/***/ "./node_modules/@coreui/react/es/template/scrollbar.css":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/react/es/template/scrollbar.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader??ref--6-1!../../../../postcss-loader/src??ref--6-2!./scrollbar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@coreui/react/es/template/scrollbar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@coreui/react/es/toast/CToast.css":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/react/es/toast/CToast.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader??ref--6-1!../../../../postcss-loader/src??ref--6-2!./CToast.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@coreui/react/es/toast/CToast.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@coreui/react/es/toast/CToast.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/toast/CToast.js ***!
  \*******************************************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fade_CFade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fade/CFade */ "./node_modules/@coreui/react/es/fade/CFade.js");
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _CToast_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CToast.css */ "./node_modules/@coreui/react/es/toast/CToast.css");
/* harmony import */ var _CToast_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CToast_css__WEBPACK_IMPORTED_MODULE_8__);









var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({}); //component - CoreUI / CToast

var CToast = function CToast(props) {
  var _classNames;

  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      show = props.show,
      autohide = props.autohide,
      fade = props.fade,
      color = props.color,
      onStateChange = props.onStateChange,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children", "innerRef", "show", "autohide", "fade", "color", "onStateChange"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(show),
      state = _useState[0],
      setState = _useState[1];

  var timeout = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setState(show);
  }, [show]); //triggered on mount and destroy

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return function () {
      return clearTimeout(timeout.current);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (state === true && autohide) {
      setAutohide();
    }

    onStateChange && onStateChange(state);
  }, [state]);

  var setAutohide = function setAutohide() {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      startAutohide();
    }, autohide);
  };

  var onMouseOver = function onMouseOver() {
    if (state !== 'closing') {
      state !== true && setState(true);
      clearTimeout(timeout.current);
    }
  };

  var onMouseOut = function onMouseOut() {
    if (autohide && state !== 'closing') {
      setAutohide();
    }
  };

  var startAutohide = function startAutohide() {
    if (!fade) {
      return setState(false);
    }

    setState('hiding');
    clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      setState(false);
    }, 2000);
  };

  var close = function close() {
    if (!fade) {
      return setState(false);
    }

    setState('closing');
    clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      setState(false);
    }, 500);
  }; // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {
    toast: true
  }, _classNames["toast-" + color] = !!color, _classNames), className);
  var fadeClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(fade && (state === 'hiding' ? 'toast-fade-slow' : 'toast-fade'));
  var attrs = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_6__["omitByKeys"])(attributes, _utils_helper_js__WEBPACK_IMPORTED_MODULE_7__["CFadeProps"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Context.Provider, {
    value: {
      close: close
    }
  }, state && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fade_CFade__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    in: state === true,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    baseClass: fadeClasses,
    innerRef: innerRef
  }, attrs), children));
};

CToast.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  show: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  autohide: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool]),
  fade: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  onStateChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
CToast.defaultProps = {
  fade: true
};
/* harmony default export */ __webpack_exports__["default"] = (CToast);

/***/ }),

/***/ "./node_modules/@coreui/react/es/toast/CToastBody.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/toast/CToastBody.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CToastBody

var CToastBody = function CToastBody(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('toast-body', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CToastBody.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object])
};
/* harmony default export */ __webpack_exports__["default"] = (CToastBody);

/***/ }),

/***/ "./node_modules/@coreui/react/es/toast/CToastHeader.js":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/react/es/toast/CToastHeader.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _button_CButtonClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/CButtonClose */ "./node_modules/@coreui/react/es/button/CButtonClose.js");
/* harmony import */ var _CToast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CToast */ "./node_modules/@coreui/react/es/toast/CToast.js");






 //component - CoreUI / CToastHeader

var CToastHeader = function CToastHeader(props) {
  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      closeButton = props.closeButton,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children", "innerRef", "closeButton"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_CToast__WEBPACK_IMPORTED_MODULE_6__["Context"]),
      close = _useContext.close; //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('toast-header', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }), children, closeButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_CButtonClose__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mfs-auto",
    onClick: close
  }));
};

CToastHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CToastHeader.defaultProps = {
  closeButton: true
};
/* harmony default export */ __webpack_exports__["default"] = (CToastHeader);

/***/ }),

/***/ "./node_modules/@coreui/react/es/toast/CToaster.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/toast/CToaster.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CToaster

var CToaster = function CToaster(props) {
  var className = props.className,
      innerRef = props.innerRef,
      position = props.position,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "innerRef", "position"]); // inherit closeButton, autohide, fade??
  // render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('toaster', position && position !== 'static' && 'toaster-' + position, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CToaster.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  position: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['', 'static', 'top-right', 'top-left', 'top-center', 'top-full', 'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'])
};
CToaster.defaultProps = {
  position: 'top-right'
};
/* harmony default export */ __webpack_exports__["default"] = (CToaster);

/***/ }),

/***/ "./node_modules/@coreui/react/es/toggler/CToggler.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/toggler/CToggler.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");





 //component - CoreUI / CToggler

var CToggler = function CToggler(props) {
  var Tag = props.tag,
      children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      inHeader = props.inHeader,
      inNavbar = props.inNavbar,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "children", "className", "innerRef", "inHeader", "inNavbar"]);

  var typeAttr = Tag === 'button' ? {
    type: 'button'
  } : null;
  var type = inNavbar ? 'navbar' : inHeader ? 'c-header' : null;
  var togglerClass = type ? type + "-toggler" : '';
  var iconClass = type ? togglerClass + "-icon" : ''; //render

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(togglerClass, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, typeAttr, attributes, {
    ref: innerRef
  }), children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: iconClass
  }));
};

CToggler.propTypes = {
  tag: _utils_helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  inHeader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  inNavbar: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CToggler.defaultProps = {
  tag: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (CToggler);

/***/ }),

/***/ "./node_modules/@coreui/react/es/tooltip/CPopover.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/tooltip/CPopover.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CTooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CTooltip.js */ "./node_modules/@coreui/react/es/tooltip/CTooltip.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //component - CoreUI / CPopover

var template = "<h3 class=\"popover-header\">H</h3><div class=\"popover-body\">C</div>";

var generateContent = function generateContent(content, header) {
  return template.replace('H', Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(header)).replace('C', Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(content));
};

var CPopover = function CPopover(props) {
  var header = props.header,
      children = props.children,
      content = props.content,
      config = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["header", "children", "content"]);

  var computedContent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(generateContent(content, header), [content, header]);

  var advancedOptions = _objectSpread(_objectSpread({}, config ? config.advancedOptions || {} : {}), {}, {
    theme: 'cpopover'
  });

  var computedConfig = _objectSpread(_objectSpread({}, config), {}, {
    advancedOptions: advancedOptions
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CTooltip_js__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: computedContent
  }, computedConfig), children);
};

CPopover.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node]),
  header: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node])
};
/* harmony default export */ __webpack_exports__["default"] = (CPopover);

/***/ }),

/***/ "./node_modules/@coreui/react/es/tooltip/CTooltip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/tooltip/CTooltip.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 //component - CoreUI / CTooltip

var CTooltip = function CTooltip(props) {
  var children = props.children,
      content = props.content,
      interactive = props.interactive,
      placement = props.placement,
      trigger = props.trigger,
      advancedOptions = props.advancedOptions;
  var computedContent = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return typeof content === 'string' ? content : Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__["renderToString"])(content);
  }, [content]);

  var config = _objectSpread({
    allowHTML: true,
    content: computedContent,
    interactive: interactive,
    placement: placement,
    trigger: trigger
  }, advancedOptions);

  var key = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Math.random().toString(36).substr(2))[0];
  var instance = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (instance.current) {
      instance.current.setProps(config);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var node = document.querySelector("[data-tooltip=\"" + key + "\"]");
    instance.current = Object(tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node, config);
    return function () {
      return instance.current.destroy();
    };
  }, [key]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    'data-tooltip': key
  }));
};

CTooltip.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
  interactive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['', 'top-end', 'top', 'top-start', 'bottom-end', 'bottom', 'bottom-start', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end']),
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  advancedOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
CTooltip.defaultProps = {
  content: '',
  interactive: false,
  placement: 'top',
  trigger: 'mouseenter focus',
  advancedOptions: {}
};
/* harmony default export */ __webpack_exports__["default"] = (CTooltip);

/***/ }),

/***/ "./node_modules/@coreui/react/es/utils/CBrand.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/utils/CBrand.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper.js */ "./node_modules/@coreui/react/es/utils/helper.js");
/* harmony import */ var _link_CLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../link/CLink */ "./node_modules/@coreui/react/es/link/CLink.js");






 //component - CoreUI / CBrand

var CBrand = function CBrand(props) {
  var _ref;

  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className);
  var Tag = attributes.to || attributes.href ? _link_CLink__WEBPACK_IMPORTED_MODULE_6__["default"] : tag;
  var ref = (_ref = {}, _ref["" + (typeof Tag === 'string' ? 'ref' : 'innerRef')] = innerRef, _ref);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes, ref));
};

CBrand.propTypes = {
  tag: _helper_js__WEBPACK_IMPORTED_MODULE_5__["tagPropType"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func])
};
CBrand.defaultProps = {
  tag: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (CBrand);

/***/ }),

/***/ "./node_modules/@coreui/react/es/utils/helper.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/utils/helper.js ***!
  \*******************************************************/
/*! exports provided: TransitionPropTypeKeys, CFadeProps, canUseDOM, targetPropType, tagPropType, DOMElement, deprecated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionPropTypeKeys", function() { return TransitionPropTypeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CFadeProps", function() { return CFadeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetPropType", function() { return targetPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagPropType", function() { return tagPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMElement", function() { return DOMElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecated", function() { return deprecated; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
 // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var CFadeProps = [].concat(TransitionPropTypeKeys, ['baseClass', 'baseClassActive', 'tag']);
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var targetPropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, DOMElement, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  current: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any
})]);
var tagPropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  $$typeof: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.symbol,
  render: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  $$typeof: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.symbol,
  render: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
})]))]);
function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      console.error("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
}

/***/ }),

/***/ "./node_modules/@coreui/react/es/widgets/CWidgetBrand.js":
/*!***************************************************************!*\
  !*** ./node_modules/@coreui/react/es/widgets/CWidgetBrand.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CWidgetBrand

var CWidgetBrand = function CWidgetBrand(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      rightHeader = props.rightHeader,
      rightFooter = props.rightFooter,
      leftHeader = props.leftHeader,
      leftFooter = props.leftFooter,
      addHeaderClasses = props.addHeaderClasses,
      bodySlot = props.bodySlot,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "color", "rightHeader", "rightFooter", "leftHeader", "leftFooter", "addHeaderClasses", "bodySlot"]); // render


  var headerClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('card-header content-center text-white p-0', color && "bg-" + color, addHeaderClasses);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "card " + className
  }, attributes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: headerClasses
  }, children), bodySlot || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-body row text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col"
  }, rightHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-value-lg"
  }, rightHeader), rightFooter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-uppercase text-muted small"
  }, rightFooter)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "c-vr"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col"
  }, leftHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-value-lg"
  }, leftHeader), leftFooter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-uppercase text-muted small"
  }, leftFooter))));
};

CWidgetBrand.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  rightHeader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  rightFooter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  leftHeader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  leftFooter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  addHeaderClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  bodySlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (CWidgetBrand);

/***/ }),

/***/ "./node_modules/@coreui/react/es/widgets/CWidgetDropdown.js":
/*!******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/widgets/CWidgetDropdown.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CWidgetDropdown

var CWidgetDropdown = function CWidgetDropdown(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      color = props.color,
      footerSlot = props.footerSlot,
      text = props.text,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "header", "color", "footerSlot", "text"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('card text-white', color && "bg-" + color, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-body pb-0 d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, header && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-value-lg"
  }, header), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, text)), children), footerSlot);
};

CWidgetDropdown.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  footerSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CWidgetDropdown);

/***/ }),

/***/ "./node_modules/@coreui/react/es/widgets/CWidgetIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/react/es/widgets/CWidgetIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CWidgetIcon

var CWidgetIcon = function CWidgetIcon(props) {
  var className = props.className,
      children = props.children,
      header = props.header,
      text = props.text,
      iconPadding = props.iconPadding,
      color = props.color,
      footerSlot = props.footerSlot,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children", "header", "text", "iconPadding", "color", "footerSlot"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('card', color, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-body d-flex align-items-center " + (iconPadding ? 'p-3' : 'p-0')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mr-3 text-white bg-" + color + " " + (iconPadding ? 'p-3' : 'p-4')
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, header && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-value text-" + color
  }, header), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-muted text-uppercase font-weight-bold small"
  }, text))), footerSlot);
};

CWidgetIcon.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  iconPadding: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  footerSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
CWidgetIcon.defaultProps = {
  iconPadding: true
};
/* harmony default export */ __webpack_exports__["default"] = (CWidgetIcon);

/***/ }),

/***/ "./node_modules/@coreui/react/es/widgets/CWidgetProgress.js":
/*!******************************************************************!*\
  !*** ./node_modules/@coreui/react/es/widgets/CWidgetProgress.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _progress_CProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../progress/CProgress */ "./node_modules/@coreui/react/es/progress/CProgress.js");





 //component - CoreUI / CWidgetProgress

var CWidgetProgress = function CWidgetProgress(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      text = props.text,
      footer = props.footer,
      color = props.color,
      value = props.value,
      inverse = props.inverse,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "header", "text", "footer", "color", "value", "inverse"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('card', inverse ? [color && "bg-" + color, 'text-white'] : '', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-body"
  }, header && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "h4 m-0"
  }, header), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, text), children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_progress_CProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: !inverse ? color : '',
    value: value,
    className: "progress-xs my-3 mb-0 " + (inverse ? 'progress-white' : '')
  }), footer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "text-muted"
  }, footer)));
};

CWidgetProgress.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  footer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
CWidgetProgress.defaultProps = {
  value: 25
};
/* harmony default export */ __webpack_exports__["default"] = (CWidgetProgress);

/***/ }),

/***/ "./node_modules/@coreui/react/es/widgets/CWidgetProgressIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@coreui/react/es/widgets/CWidgetProgressIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _progress_CProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../progress/CProgress */ "./node_modules/@coreui/react/es/progress/CProgress.js");





 //component - CoreUI / CWidgetProgressIcon

var CWidgetProgressIcon = function CWidgetProgressIcon(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      text = props.text,
      value = props.value,
      color = props.color,
      inverse = props.inverse,
      progressSlot = props.progressSlot,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "header", "text", "value", "color", "inverse", "progressSlot"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('card', inverse ? [color && "bg-" + color, 'text-white'] : '', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-body"
  }, children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "h1 text-muted text-right mb-4"
  }, children), header && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "h4 m-0"
  }, header), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "text-muted text-uppercase font-weight-bold"
  }, text), progressSlot || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_progress_CProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: !inverse ? color : '',
    value: value,
    className: "progress-xs my-3 mb-0 " + (inverse ? 'progress-white' : '')
  })));
};

CWidgetProgressIcon.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  progressSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
CWidgetProgressIcon.defaultProps = {
  value: 25
};
/* harmony default export */ __webpack_exports__["default"] = (CWidgetProgressIcon);

/***/ }),

/***/ "./node_modules/@coreui/react/es/widgets/CWidgetSimple.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/widgets/CWidgetSimple.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/@coreui/react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




 //component - CoreUI / CWidgetSimple

var CWidgetSimple = function CWidgetSimple(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      text = props.text,
      attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "header", "text"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('card', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, attributes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-body text-center"
  }, header && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-muted small text-uppercase font-weight-bold"
  }, header), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "h2 py-3"
  }, text), children));
};

CWidgetSimple.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  //
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CWidgetSimple);

/***/ }),

/***/ "./node_modules/@coreui/react/node_modules/classnames/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/react/node_modules/classnames/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/@coreui/utils/src/deep-objects-merge.js":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/utils/src/deep-objects-merge.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const deepObjectsMerge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], deepObjectsMerge(target[key], source[key]))
    }
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}

/* harmony default export */ __webpack_exports__["default"] = (deepObjectsMerge);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/get-color.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-color.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-style */ "./node_modules/@coreui/utils/src/get-style.js");


const getColor = (rawProperty, element = document.body) => {
  const property = `--${rawProperty}`
  const style = Object(_get_style__WEBPACK_IMPORTED_MODULE_0__["default"])(property, element)
  return style ? style : rawProperty
}

/* harmony default export */ __webpack_exports__["default"] = (getColor);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/get-css-custom-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-css-custom-properties.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://coreui.io/license)
 * @returns {string} css custom property name
 * --------------------------------------------------------------------------
 */
const getCssCustomProperties = () => {
  const cssCustomProperties = {}
  const sheets = document.styleSheets
  let cssText = ''
  for (let i = sheets.length - 1; i > -1; i--) {
    const rules = sheets[i].cssRules
    for (let j = rules.length - 1; j > -1; j--) {
      if (rules[j].selectorText === '.ie-custom-properties') {
        // eslint-disable-next-line prefer-destructuring
        cssText = rules[j].cssText
        break
      }
    }

    if (cssText) {
      break
    }
  }

  // eslint-disable-next-line unicorn/prefer-string-slice
  cssText = cssText.substring(
    cssText.lastIndexOf('{') + 1,
    cssText.lastIndexOf('}')
  )

  cssText.split(';').forEach(property => {
    if (property) {
      const name = property.split(': ')[0]
      const value = property.split(': ')[1]
      if (name && value) {
        cssCustomProperties[`--${name.trim()}`] = value.trim()
      }
    }
  })
  return cssCustomProperties
}

/* harmony default export */ __webpack_exports__["default"] = (getCssCustomProperties);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/get-style.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-style.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_css_custom_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-css-custom-properties */ "./node_modules/@coreui/utils/src/get-css-custom-properties.js");


const minIEVersion = 10
const isIE1x = () => Boolean(document.documentMode) && document.documentMode >= minIEVersion
const isCustomProperty = property => property.match(/^--.*/i)

const getStyle = (property, element = document.body) => {
  let style

  if (isCustomProperty(property) && isIE1x()) {
    const cssCustomProperties = Object(_get_css_custom_properties__WEBPACK_IMPORTED_MODULE_0__["default"])()
    style = cssCustomProperties[property]
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
  }

  return style
}

/* harmony default export */ __webpack_exports__["default"] = (getStyle);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/hex-to-rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/hex-to-rgb.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-magic-numbers */
const hexToRgb = color => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)

  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }

  let r
  let g
  let b

  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16)
    g = parseInt(color.slice(3, 5), 16)
    b = parseInt(color.slice(5, 7), 16)
  } else {
    r = parseInt(color.slice(1, 2), 16)
    g = parseInt(color.slice(2, 3), 16)
    b = parseInt(color.slice(3, 5), 16)
  }

  return `rgba(${r}, ${g}, ${b})`
}

/* harmony default export */ __webpack_exports__["default"] = (hexToRgb);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/hex-to-rgba.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/hex-to-rgba.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-magic-numbers */
const hexToRgba = (color, opacity = 100) => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)

  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }

  let r
  let g
  let b

  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16)
    g = parseInt(color.slice(3, 5), 16)
    b = parseInt(color.slice(5, 7), 16)
  } else {
    r = parseInt(color.slice(1, 2), 16)
    g = parseInt(color.slice(2, 3), 16)
    b = parseInt(color.slice(3, 5), 16)
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
}

/* harmony default export */ __webpack_exports__["default"] = (hexToRgba);


/***/ }),

/***/ "./node_modules/@coreui/utils/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@coreui/utils/src/index.js ***!
  \*************************************************/
/*! exports provided: default, deepObjectsMerge, getColor, getStyle, hexToRgb, hexToRgba, makeUid, omitByKeys, pickByKeys, rgbToHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deep_objects_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deep-objects-merge */ "./node_modules/@coreui/utils/src/deep-objects-merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepObjectsMerge", function() { return _deep_objects_merge__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _get_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-color */ "./node_modules/@coreui/utils/src/get-color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return _get_color__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _get_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-style */ "./node_modules/@coreui/utils/src/get-style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return _get_style__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _hex_to_rgb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hex-to-rgb */ "./node_modules/@coreui/utils/src/hex-to-rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return _hex_to_rgb__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hex-to-rgba */ "./node_modules/@coreui/utils/src/hex-to-rgba.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgba", function() { return _hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _make_uid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./make-uid */ "./node_modules/@coreui/utils/src/make-uid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeUid", function() { return _make_uid__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _omit_by_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./omit-by-keys */ "./node_modules/@coreui/utils/src/omit-by-keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omitByKeys", function() { return _omit_by_keys__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _pick_by_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pick-by-keys */ "./node_modules/@coreui/utils/src/pick-by-keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pickByKeys", function() { return _pick_by_keys__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rgb-to-hex */ "./node_modules/@coreui/utils/src/rgb-to-hex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__["default"]; });











const utils = {
  deepObjectsMerge: _deep_objects_merge__WEBPACK_IMPORTED_MODULE_0__["default"],
  getColor: _get_color__WEBPACK_IMPORTED_MODULE_1__["default"],
  getStyle: _get_style__WEBPACK_IMPORTED_MODULE_2__["default"],
  hexToRgb: _hex_to_rgb__WEBPACK_IMPORTED_MODULE_3__["default"],
  hexToRgba: _hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__["default"],
  makeUid: _make_uid__WEBPACK_IMPORTED_MODULE_5__["default"],
  omitByKeys: _omit_by_keys__WEBPACK_IMPORTED_MODULE_6__["default"],
  pickByKeys: _pick_by_keys__WEBPACK_IMPORTED_MODULE_7__["default"],
  rgbToHex: _rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__["default"]
}

/* harmony default export */ __webpack_exports__["default"] = (utils);



/***/ }),

/***/ "./node_modules/@coreui/utils/src/make-uid.js":
/*!****************************************************!*\
  !*** ./node_modules/@coreui/utils/src/make-uid.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//function for UI releted ID assignment, due to one in 10^15 probability of duplication
const makeUid = () => {
  const key = Math.random().toString(36).substr(2)
  return 'uid-' + key
}

/* harmony default export */ __webpack_exports__["default"] = (makeUid);

/***/ }),

/***/ "./node_modules/@coreui/utils/src/omit-by-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/utils/src/omit-by-keys.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const omitByKeys = (originalObject, keys) => {
  var newObj = {}
  var objKeys = Object.keys(originalObject)
  for (var i = 0; i < objKeys.length; i++) {
    !keys.includes(objKeys[i]) && (newObj[objKeys[i]] = originalObject[objKeys[i]])
  }
  return newObj
}

/* harmony default export */ __webpack_exports__["default"] = (omitByKeys);

/***/ }),

/***/ "./node_modules/@coreui/utils/src/pick-by-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/utils/src/pick-by-keys.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pickByKeys = (originalObject, keys) => {
  var newObj = {}
  for (var i = 0; i < keys.length; i++) {
    newObj[keys[i]] = originalObject[keys[i]]
  }
  return newObj
}

/* harmony default export */ __webpack_exports__["default"] = (pickByKeys);

/***/ }),

/***/ "./node_modules/@coreui/utils/src/rgb-to-hex.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/rgb-to-hex.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-magic-numbers */
const rgbToHex = color => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  if (color === 'transparent') {
    return '#00000000'
  }

  const rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)

  if (!rgb) {
    throw new Error(`${color} is not a valid rgb color`)
  }

  const r = `0${parseInt(rgb[1], 10).toString(16)}`
  const g = `0${parseInt(rgb[2], 10).toString(16)}`
  const b = `0${parseInt(rgb[3], 10).toString(16)}`

  return `#${r.slice(-2)}${g.slice(-2)}${b.slice(-2)}`
}

/* harmony default export */ __webpack_exports__["default"] = (rgbToHex);


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@coreui/icons-react/es/CIcon.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@coreui/icons-react/es/CIcon.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".c-icon {\r\n  display: inline-block;\r\n  color: inherit;\r\n  text-align: center;\r\n  fill: currentColor;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size) {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-2xl {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-3xl {\r\n  width: 3rem;\r\n  height: 3rem;\r\n  font-size: 3rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-4xl {\r\n  width: 4rem;\r\n  height: 4rem;\r\n  font-size: 4rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-5xl {\r\n  width: 5rem;\r\n  height: 5rem;\r\n  font-size: 5rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-6xl {\r\n  width: 6rem;\r\n  height: 6rem;\r\n  font-size: 6rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-7xl {\r\n  width: 7rem;\r\n  height: 7rem;\r\n  font-size: 7rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-8xl {\r\n  width: 8rem;\r\n  height: 8rem;\r\n  font-size: 8rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-9xl {\r\n  width: 9rem;\r\n  height: 9rem;\r\n  font-size: 9rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-xl {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-lg {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-sm {\r\n  width: 0.875rem;\r\n  height: 0.875rem;\r\n  font-size: 0.875rem;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@coreui/react/es/table/CDataTable.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@coreui/react/es/table/CDataTable.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".c-datatable-filter {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.c-datatable-filter label {\r\n  margin-bottom: 0;\r\n}\r\n.c-datatable-items-per-page {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n.c-datatable-items-per-page label {\r\n  margin-bottom: 0;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@coreui/react/es/table/CDataTable.module.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@coreui/react/es/table/CDataTable.module.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".transparent {\r\n  opacity: 0.4;\r\n}\r\n.icon-transition {\r\n  transition: transform 0.3s;\r\n}\r\n.arrow-position {\r\n  right: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n.rotate-icon {\r\n  transform: translateY(-50%) rotate(-180deg);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@coreui/react/es/template/scrollbar.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@coreui/react/es/template/scrollbar.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* rtl fix */\r\n.ps__rtl .ps__rail-y {\r\n    left: 0px !important;\r\n    right: unset !important;\r\n}\r\n*[dir=\"rtl\"] .ps__rail-y {\r\n    left: 0px !important;\r\n    right: unset !important;\r\n}\r\n\r\n.ps__rtl .ps__thumb-y {\r\n    left: 2px;\r\n    right: unset;\r\n}\r\n*[dir=\"rtl\"] .ps__thumb-y {\r\n  left: 2px;\r\n  right: unset;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@coreui/react/es/toast/CToast.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@coreui/react/es/toast/CToast.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toast-fade {\r\n  transition: opacity .5s;\r\n}\r\n.toast-fade-slow {\r\n  transition: opacity 2s;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/perfect-scrollbar/css/perfect-scrollbar.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/perfect-scrollbar/css/perfect-scrollbar.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Container style\r\n */\r\n.ps {\r\n  overflow: hidden !important;\r\n  overflow-anchor: none;\r\n  -ms-overflow-style: none;\r\n  touch-action: auto;\r\n  -ms-touch-action: auto;\r\n}\r\n\r\n/*\r\n * Scrollbar rail styles\r\n */\r\n.ps__rail-x {\r\n  display: none;\r\n  opacity: 0;\r\n  transition: background-color .2s linear, opacity .2s linear;\r\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\r\n  height: 15px;\r\n  /* there must be 'bottom' or 'top' for ps__rail-x */\r\n  bottom: 0px;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps__rail-y {\r\n  display: none;\r\n  opacity: 0;\r\n  transition: background-color .2s linear, opacity .2s linear;\r\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\r\n  width: 15px;\r\n  /* there must be 'right' or 'left' for ps__rail-y */\r\n  right: 0;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps--active-x > .ps__rail-x,\r\n.ps--active-y > .ps__rail-y {\r\n  display: block;\r\n  background-color: transparent;\r\n}\r\n\r\n.ps:hover > .ps__rail-x,\r\n.ps:hover > .ps__rail-y,\r\n.ps--focus > .ps__rail-x,\r\n.ps--focus > .ps__rail-y,\r\n.ps--scrolling-x > .ps__rail-x,\r\n.ps--scrolling-y > .ps__rail-y {\r\n  opacity: 0.6;\r\n}\r\n\r\n.ps .ps__rail-x:hover,\r\n.ps .ps__rail-y:hover,\r\n.ps .ps__rail-x:focus,\r\n.ps .ps__rail-y:focus,\r\n.ps .ps__rail-x.ps--clicking,\r\n.ps .ps__rail-y.ps--clicking {\r\n  background-color: #eee;\r\n  opacity: 0.9;\r\n}\r\n\r\n/*\r\n * Scrollbar thumb styles\r\n */\r\n.ps__thumb-x {\r\n  background-color: #aaa;\r\n  border-radius: 6px;\r\n  transition: background-color .2s linear, height .2s ease-in-out;\r\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\r\n  height: 6px;\r\n  /* there must be 'bottom' for ps__thumb-x */\r\n  bottom: 2px;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps__thumb-y {\r\n  background-color: #aaa;\r\n  border-radius: 6px;\r\n  transition: background-color .2s linear, width .2s ease-in-out;\r\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\r\n  width: 6px;\r\n  /* there must be 'right' for ps__thumb-y */\r\n  right: 2px;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps__rail-x:hover > .ps__thumb-x,\r\n.ps__rail-x:focus > .ps__thumb-x,\r\n.ps__rail-x.ps--clicking .ps__thumb-x {\r\n  background-color: #999;\r\n  height: 11px;\r\n}\r\n\r\n.ps__rail-y:hover > .ps__thumb-y,\r\n.ps__rail-y:focus > .ps__thumb-y,\r\n.ps__rail-y.ps--clicking .ps__thumb-y {\r\n  background-color: #999;\r\n  width: 11px;\r\n}\r\n\r\n/* MS supports */\r\n@supports (-ms-overflow-style: none) {\r\n  .ps {\r\n    overflow: auto !important;\r\n  }\r\n}\r\n\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\r\n  .ps {\r\n    overflow: auto !important;\r\n  }\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/tippy.js/dist/tippy.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/tippy.js/dist/tippy.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}", ""]);

// exports


/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./perfect-scrollbar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.5.2
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.round(rect.width);
  i.containerHeight = Math.round(rect.height);

  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        if (!i.element) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);
//# sourceMappingURL=perfect-scrollbar.esm.js.map


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
function formatProdErrorMessage(code) {
  var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

  for (var i = 1; i < arguments.length; i++) {
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
}

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableSuspenseServerRenderer = false;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var didWarnAboutInvalidateContextType;

{
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;

  if (!contextTypes) {
    return emptyObject;
  }

  var maskedContext = {};

  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }

  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component');
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}
function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;

    {
      if ('contextType' in type) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }

    {
      var maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }

      return maskedContext;
    }
  } else {
    {
      var _maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }

      return _maskedContext;
    }
  }
}

var nextAvailableThreadIDs = new Uint16Array(16);

for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}

nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;

  if (!(newSize <= 0x10000)) {
    {
      throw Error( "Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic." );
    }
  }

  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;

  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }

  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];

  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }

  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}
function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {

    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */

var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

// code copied and modified from escape-html

/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */

function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}
/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */

function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }

      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }

  return '';
}
/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */

function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }

  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (!(currentlyRenderingComponent !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  {
    if (isInHookUserCodeInDev) {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
    }
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    {
      {
        throw Error( "Rendered more hooks than during the previous render" );
      }
    }
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  resetHooksState();
  return children;
} // Reset the internal hooks state if an error occurs while rendering a component

function resetHooksState() {
  {
    isInHookUserCodeInDev = false;
  }

  currentlyRenderingComponent = null;
  didScheduleRenderPhaseUpdate = false;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;
}

function readContext(context, observedBits) {
  var threadID = currentPartialRenderer.threadID;
  validateContextBounds(context, threadID);

  {
    if (isInHookUserCodeInDev) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  var threadID = currentPartialRenderer.threadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';

    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
    {
      throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
    }
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  }
}

function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
} // TODO Decide on how to implement this hook for server rendering.
// If a mutation occurs during render, consider triggering a Suspense boundary
// and falling back to client rendering.

function useMutableSource(source, getSnapshot, subscribe) {
  resolveCurrentlyRenderingComponent();
  return getSnapshot(source._source);
}

function useDeferredValue(value) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function useTransition() {
  resolveCurrentlyRenderingComponent();

  var startTransition = function (callback) {
    callback();
  };

  return [startTransition, false];
}

function useOpaqueIdentifier() {
  return (currentPartialRenderer.identifierPrefix || '') + 'R:' + (currentPartialRenderer.uniqueID++).toString(36);
}

function noop() {}

var currentPartialRenderer = null;
function setCurrentPartialRenderer(renderer) {
  currentPartialRenderer = renderer;
}
var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition,
  useOpaqueIdentifier: useOpaqueIdentifier,
  // Subscriptions are not setup in a server environment.
  useMutableSource: useMutableSource
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

var hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};
function checkControlledValueProps(tagName, props) {
  {
    if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
      error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }

    if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
      error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  }
}

// For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
      {
        throw Error( tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." );
      }
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (!(props.children == null)) {
      {
        throw Error( "Can only set one of `children` or `props.dangerouslySetInnerHTML`." );
      }
    }

    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
      {
        throw Error( "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information." );
      }
    }
  }

  {
    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }
  }

  if (!(props.style == null || typeof props.style === 'object')) {
    {
      throw Error( "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." );
    }
  }
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this list too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  enterkeyhint: 'enterKeyHint',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, eventRegistry) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (eventRegistry != null) {
      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

      if (registrationNameDependencies.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, eventRegistry) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], eventRegistry);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, eventRegistry) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, eventRegistry);
}

var toArray = React.Children.toArray; // This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.

var currentDebugStacks = [];
var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame$1;
var prevGetCurrentStackImpl = null;

var getCurrentServerStackImpl = function () {
  return '';
};

var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};

var pushCurrentDebugStack = function (stack) {};

var pushElementToDebugStack = function (element) {};

var popCurrentDebugStack = function () {};

var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, null);
  };

  describeStackFrame = function (element) {
    return describeUnknownElementTypeFrameInDEV(element.type, element._source, null);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
      ReactDebugCurrentFrame$1.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.


    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = ''; // Go through every frame in the stack from the innermost one.

    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.

      var debugElementStack = frame.debugElementStack;

      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }

    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
}; // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = {};

function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    if (!VALID_TAG_REGEX.test(tag)) {
      {
        throw Error( "Invalid tag: " + tag );
      }
    }

    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};

var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }

  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }

    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
      delimiter = ';';
    }
  }

  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct$1(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;

  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;

    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }

  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }

  var element = children;

  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }

  var fragmentChildren = element.props.children;

  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }

  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }

  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;

        error('Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;
  var isCustomComponent$1 = isCustomComponent(tagLowercase, props);

  for (var propKey in props) {
    if (!hasOwnProperty$2.call(props, propKey)) {
      continue;
    }

    var propValue = props[propKey];

    if (propValue == null) {
      continue;
    }

    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }

    var markup = null;

    if (isCustomComponent$1) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }

    if (markup) {
      ret += ' ' + markup;
    }
  } // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.


  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }

  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    {
      {
        throw Error( (getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
      }
    }
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;

    {
      pushElementToDebugStack(element);
    }

    if (typeof Component !== 'function') {
      break;
    }

    processChild(element, Component);
  } // Extra closure so queue and replace can be captured properly


  function processChild(element, Component) {
    var isClass = shouldConstruct$1(Component);
    var publicContext = processContext(Component, context, threadID, isClass);
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }

        queue.push(currentPartialState);
      }
    };
    var inst;

    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUninitializedState[componentName]) {
              error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);

              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);

              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);

            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }

      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      {
        // Support for module components is deprecated and is removed behind a flag.
        // Whether or not it would crash later, we want to show a good message in DEV first.
        if (inst != null && inst.render != null) {
          var _componentName3 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutModulePatternComponent[_componentName3]) {
            error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);

            didWarnAboutModulePatternComponent[_componentName3] = true;
          }
        }
      } // If the flag is on, everything is assumed to be a function component.
      // Otherwise, we also do the unfortunate dynamic checks.


      if ( inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;
    var initialState = inst.state;

    if (initialState === undefined) {
      inst.state = initialState = null;
    }

    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if ( inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              warn( // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);

              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }

      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }

      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;

          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];

            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }

          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }

    validateRenderResult(child, Component);
    var childContext;

    {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;

        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();

          for (var contextKey in childContext) {
            if (!(contextKey in _childContextTypes)) {
              {
                throw Error( (getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
              }
            }
          }
        } else {
          {
            error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }
      }

      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }

  return {
    child: child,
    context: context
  };
}

var ReactDOMServerRenderer = /*#__PURE__*/function () {
  // TODO: type this more strictly:
  // DEV-only
  function ReactDOMServerRenderer(children, makeStaticMarkup, options) {
    var flatChildren = flattenTopLevelChildren(children);
    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };

    {
      topFrame.debugElementStack = [];
    }

    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0; // Context (new API)

    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = []; // useOpaqueIdentifier ID

    this.uniqueID = 0;
    this.identifierPrefix = options && options.identifierPrefix || '';

    {
      this.contextProviderStack = [];
    }
  }

  var _proto = ReactDOMServerRenderer.prototype;

  _proto.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  }
  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */
  ;

  _proto.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;

    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    } // Mutate the current value.


    context[threadID] = provider.props.value;
  };

  _proto.popProvider = function popProvider(provider) {
    var index = this.contextIndex;

    {
      if (index < 0 || provider !== this.contextProviderStack[index]) {
        error('Unexpected pop.');
      }
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.

    this.contextStack[index] = null;
    this.contextValueStack[index] = null;

    {
      this.contextProviderStack[index] = null;
    }

    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.

    context[this.threadID] = previousValue;
  };

  _proto.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      context[this.threadID] = previousValue;
    }
  };

  _proto.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevPartialRenderer = currentPartialRenderer;
    setCurrentPartialRenderer(this);
    var prevDispatcher = ReactCurrentDispatcher$1.current;
    ReactCurrentDispatcher$1.current = Dispatcher;

    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;

      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }

        var frame = this.stack[this.stack.length - 1];

        if (suspended || frame.childIndex >= frame.children.length) {
          var footer = frame.footer;

          if (footer !== '') {
            this.previousWasTextNode = false;
          }

          this.stack.pop();

          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

              var fallbackFrame = frame.fallbackFrame;

              if (!fallbackFrame) {
                {
                  throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : undefined);
                }
              }

              this.stack.push(fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          } // Flush output


          out[this.suspenseDepth] += footer;
          continue;
        }

        var child = frame.children[frame.childIndex++];
        var outBuffer = '';

        if (true) {
          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

          frame.debugElementStack.length = 0;
        }

        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (err != null && typeof err.then === 'function') {
            if (enableSuspenseServerRenderer) {
              if (!(this.suspenseDepth > 0)) {
                {
                  throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : undefined);
                }
              }

              suspended = true;
            } else {
              if (true) {
                {
                  throw Error(true ? "ReactDOMServer does not yet support Suspense." : undefined);
                }
              }
            }
          } else {
            throw err;
          }
        } finally {
          if (true) {
            popCurrentDebugStack();
          }
        }

        if (out.length <= this.suspenseDepth) {
          out.push('');
        }

        out[this.suspenseDepth] += outBuffer;
      }

      return out[0];
    } finally {
      ReactCurrentDispatcher$1.current = prevDispatcher;
      setCurrentPartialRenderer(prevPartialRenderer);
      resetHooksState();
    }
  };

  _proto.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;

      if (text === '') {
        return '';
      }

      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }

      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }

      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;

          if (!($$typeof !== REACT_PORTAL_TYPE)) {
            {
              throw Error( "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." );
            }
          } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


          {
            {
              throw Error( "Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue." );
            }
          }
        }

        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };

        {
          frame.debugElementStack = [];
        }

        this.stack.push(frame);
        return '';
      } // Safe because we just checked it's an element.


      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        case REACT_LEGACY_HIDDEN_TYPE:
        case REACT_DEBUG_TRACING_MODE_TYPE:
        case REACT_STRICT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);

            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };

            {
              _frame.debugElementStack = [];
            }

            this.stack.push(_frame);
            return '';
          }

        case REACT_SUSPENSE_TYPE:
          {
            {
              {
                {
                  throw Error( "ReactDOMServer does not yet support Suspense." );
                }
              }
            }
          }
        // eslint-disable-next-line-no-fallthrough

        case REACT_SCOPE_TYPE:
          {

            {
              {
                throw Error( "ReactDOMServer does not yet support scope components." );
              }
            }
          }
      }

      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;

              var _nextChildren5;

              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren5 = elementType.render(element.props, element.ref);
              _nextChildren5 = finishHooks(elementType.render, element.props, _nextChildren5, element.ref);
              _nextChildren5 = toArray(_nextChildren5);
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame5.debugElementStack = [];
              }

              this.stack.push(_frame5);
              return '';
            }

          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren6 = [React.createElement(elementType.type, _assign({
                ref: _element.ref
              }, _element.props))];
              var _frame6 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame6.debugElementStack = [];
              }

              this.stack.push(_frame6);
              return '';
            }

          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;

              var _nextChildren7 = toArray(nextProps.children);

              var _frame7 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame7.debugElementStack = [];
              }

              this.pushProvider(provider);
              this.stack.push(_frame7);
              return '';
            }

          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.

              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;

                      error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }

              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren8 = toArray(_nextProps.children(nextValue));

              var _frame8 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren8,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame8.debugElementStack = [];
              }

              this.stack.push(_frame8);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_FUNDAMENTAL_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support the fundamental API." );
                }
              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_LAZY_TYPE:
            {
              var _element2 = nextChild;
              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
              // suspense server-side renderer is enabled so synchronously
              // resolved constructors are supported.

              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              var result = init(payload);
              var _nextChildren10 = [React.createElement(result, _assign({
                ref: _element2.ref
              }, _element2.props))];
              var _frame10 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren10,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame10.debugElementStack = [];
              }

              this.stack.push(_frame10);
              return '';
            }
        }
      }

      var info = '';

      {
        var owner = nextElement._owner;

        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }

        var ownerName = owner ? getComponentName(owner) : null;

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }

      {
        {
          throw Error( "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info );
        }
      }
    }
  };

  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();
    var namespace = parentNamespace;

    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        if (tag !== element.type) {
          error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
        }
      }
    }

    validateDangerousTag(tag);
    var props = element.props;

    if (tag === 'input') {
      {
        checkControlledValueProps('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

          didWarnDefaultChecked = true;
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        checkControlledValueProps('textarea', props);

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;

      if (initialValue == null) {
        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

        var textareaChildren = props.children;

        if (textareaChildren != null) {
          {
            error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }

          if (!(defaultValue == null)) {
            {
              throw Error( "If you supply `defaultValue` on a <textarea>, do not pass children." );
            }
          }

          if (Array.isArray(textareaChildren)) {
            if (!(textareaChildren.length <= 1)) {
              {
                throw Error( "<textarea> can only have at most one child." );
              }
            }

            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }

        if (defaultValue == null) {
          defaultValue = '';
        }

        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        checkControlledValueProps('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];

          if (props[propName] == null) {
            continue;
          }

          var isArray = Array.isArray(props[propName]);

          if (props.multiple && !isArray) {
            error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

          didWarnDefaultSelectValue = true;
        }
      }

      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);

      if (selectValue != null) {
        var value;

        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }

        selected = false;

        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);
    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';

    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }

    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);

    if (innerMarkup != null) {
      children = [];

      if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }

      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }

    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };

    {
      frame.debugElementStack = [];
    }

    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */

function renderToString(element, options) {
  var renderer = new ReactDOMServerRenderer(element, false, options);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}
/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */

function renderToStaticMarkup(element, options) {
  var renderer = new ReactDOMServerRenderer(element, true, options);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead." );
    }
  }
}

function renderToStaticNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead." );
    }
  }
}

exports.renderToNodeStream = renderToNodeStream;
exports.renderToStaticMarkup = renderToStaticMarkup;
exports.renderToStaticNodeStream = renderToStaticNodeStream;
exports.renderToString = renderToString;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./node_modules/tippy.js/dist/tippy.css":
/*!**********************************************!*\
  !*** ./node_modules/tippy.js/dist/tippy.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./tippy.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/tippy.js/dist/tippy.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/tippy.js/dist/tippy.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tippy.js/dist/tippy.esm.js ***!
  \*************************************************/
/*! exports provided: default, animateFill, createSingleton, delegate, followCursor, hideAll, inlinePositioning, roundArrow, sticky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateFill", function() { return animateFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSingleton", function() { return createSingleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followCursor", function() { return followCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAll", function() { return hideAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlinePositioning", function() { return inlinePositioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundArrow", function() { return ROUND_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sticky", function() { return sticky; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");
/**!
* tippy.js v6.3.2
* (c) 2017-2021 atomiks
* MIT License
*/


var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
  return document.body;
};

function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

function div() {
  return document.createElement('div');
}
function isElement(value) {
  return ['Element', 'Fragment'].some(function (type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, 'NodeList');
}
function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;

  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


  return (element == null ? void 0 : (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body) ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;

    if (!offsetData) {
      return true;
    }

    var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
    var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
  // `webkitTransitionEnd`...

  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
    box[method](event, listener);
  });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */

function actualContains(parent, child) {
  var target = child;

  while (target) {
    var _ref2;

    if (parent.contains(target)) {
      return true;
    }

    target = (_ref2 = target.getRootNode == null ? void 0 : target.getRootNode()) == null ? void 0 : _ref2.host;
  }

  return false;
}

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */

function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */

function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var isIE11 = isBrowser ? // @ts-ignore
!!window.msCrypto : false;

function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
}
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
} // Assume warnings and errors never have the same message

var visitedMessages;

if (true) {
  resetVisitedMessages();
}

function resetVisitedMessages() {
  visitedMessages = new Set();
}
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;

    visitedMessages.add(message);

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;

    visitedMessages.add(message);

    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
  errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
}

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: 'fade',
  arrow: true,
  content: '',
  inertia: false,
  maxWidth: 350,
  role: 'tooltip',
  theme: '',
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: 'auto',
    expanded: 'auto'
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: '',
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  onClickOutside: function onClickOutside() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null
}, pluginProps, {}, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
  /* istanbul ignore else */
  if (true) {
    validateProps(partialProps, []);
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      var _name;

      acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }

    return acc;
  }, {});
  return Object.assign({}, passedProps, {}, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
function evaluateProps(reference, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, {}, out.aria);
  out.aria = {
    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
  };
  return out;
}
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`

    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }

    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
  });
}

var innerHTML = function innerHTML() {
  return 'innerHTML';
};

function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}

function createArrowElement(value) {
  var arrow = div();

  if (value === true) {
    arrow.className = ARROW_CLASS;
  } else {
    arrow.className = SVG_ARROW_CLASS;

    if (isElement(value)) {
      arrow.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow, value);
    }
  }

  return arrow;
}

function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, '');
    content.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper) {
  var box = popper.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box: box,
    content: boxChildren.find(function (node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function (node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function (node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute('data-state', 'hidden');
  box.setAttribute('tabindex', '-1');
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');
  setContent(content, instance.props);
  popper.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);

  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;

    if (nextProps.theme) {
      box.setAttribute('data-theme', nextProps.theme);
    } else {
      box.removeAttribute('data-theme');
    }

    if (typeof nextProps.animation === 'string') {
      box.setAttribute('data-animation', nextProps.animation);
    } else {
      box.removeAttribute('data-animation');
    }

    if (nextProps.inertia) {
      box.setAttribute('data-inertia', '');
    } else {
      box.removeAttribute('data-inertia');
    }

    box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

    if (nextProps.role) {
      box.setAttribute('role', nextProps.role);
    } else {
      box.removeAttribute('role');
    }

    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content, instance.props);
    }

    if (nextProps.arrow) {
      if (!arrow) {
        box.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box.removeChild(arrow);
        box.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow) {
      box.removeChild(arrow);
    }
  }

  return {
    popper: popper,
    onUpdate: onUpdate
  };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away

render.$$tippy = true;

var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`

var mountedInstances = [];
function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, Object.assign({}, defaultProps, {}, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
  // 🔒 Private members
  // ===========================================================================

  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget; // ===========================================================================
  // 🔑 Public members
  // ===========================================================================

  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: div(),
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    hideWithInteractivity: hideWithInteractivity,
    enable: enable,
    disable: disable,
    unmount: unmount,
    destroy: destroy
  }; // TODO: Investigate why this early return causes a TDZ error in the tests —
  // it doesn't seem to happen in the browser

  /* istanbul ignore if */

  if (!props.render) {
    if (true) {
      errorWhen(true, 'render() function has not been supplied.');
    }

    return instance;
  } // ===========================================================================
  // Initial mutations
  // ===========================================================================


  var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;

  popper.setAttribute('data-tippy-root', '');
  popper.id = "tippy-" + instance.id;
  instance.popper = popper;
  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference.hasAttribute('aria-expanded');
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function (event) {
    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }
  });
  return instance; // ===========================================================================
  // 🔒 Private methods
  // ===========================================================================

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getIsDefaultRenderFn() {
    var _instance$props$rende;

    // @ts-ignore
    return !!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }

  function getDefaultTemplateChildren() {
    return getChildren(popper);
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function handleStyles() {
    popper.style.pointerEvents = instance.props.interactive && instance.state.isVisible ? '' : 'none';
    popper.style.zIndex = "" + instance.props.zIndex;
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(void 0, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaContentAttribute() {
    var aria = instance.props.aria;

    if (!aria.content) {
      return;
    }

    var attr = "aria-" + aria.content;
    var id = popper.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentPress(event) {
    // Moved finger to scroll instead of an intentional tap outside
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === 'mousedown') {
        return;
      }
    }

    var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper

    if (instance.props.interactive && actualContains(popper, actualTarget)) {
      return;
    } // Clicked on the event listeners target


    if (actualContains(getCurrentTarget(), actualTarget)) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
        return;
      }
    } else {
      invokeHook('onClickOutside', [instance, event]);
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }

  function onTouchMove() {
    didTouchMove = true;
  }

  function onTouchStart() {
    didTouchMove = false;
  }

  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener('mousedown', onDocumentPress, true);
    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener('mousedown', onDocumentPress, true);
    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;

    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(box, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, {
        passive: true
      });
      on('touchend', onMouseLeave, {
        passive: true
      });
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;

        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }

  function removeListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var _lastTriggerEvent;

    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
      var _instance$popperInsta;

      var instance = popper._tippy;
      var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

      if (state) {
        return {
          popperRect: popper.getBoundingClientRect(),
          popperState: state,
          props: props
        };
      }

      return null;
    }).filter(Boolean);

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

    if (shouldBail) {
      return;
    }

    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }

    scheduleHide(event);
  }

  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
  }

  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference;
    var tippyModifier = {
      name: '$$tippy',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;

          ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
            if (attr === 'placement') {
              box.setAttribute('data-placement', state.placement);
            } else {
              if (state.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, '');
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: 'flip',
      options: {
        padding: 5
      }
    }, {
      name: 'computeStyles',
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];

    if (getIsDefaultRenderFn() && arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrow,
          padding: 3
        }
      });
    }

    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"])(computedReference, popper, Object.assign({}, popperOptions, {
      placement: placement,
      onFirstUpdate: onFirstUpdate,
      modifiers: modifiers
    }));
  }

  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }

  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    createPopperInstance();
    /* istanbul ignore else */

    if (true) {
      // Accessibility check
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard', 'navigation because it is not directly after the reference element', 'in the DOM source order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element', 'solves this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle', 'keyboard navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));
    }
  }

  function getNestedPopperTree() {
    return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentPress();
    var delay = getDelay(true);

    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];

    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
      delay = touchDelay;
    }

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    } // For interactive tippies, scheduleHide is added to a document.body handler
    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
    // events when trigger contains mouseenter and click, and the tip is
    // currently shown as a result of a click.


    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  } // ===========================================================================
  // 🔑 Public methods
  // ===========================================================================


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, Object.assign({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    } // Ensure stale aria-expanded attributes are removed


    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();
    handleStyles();

    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }

    if (instance.popperInstance) {
      createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
      // and the nested ones get re-rendered first.
      // https://github.com/atomiks/tippyjs-react/issues/177
      // TODO: find a cleaner / more efficient solution(!)

      getNestedPopperTree().forEach(function (nestedPopper) {
        // React (and other UI libs likely) requires a rAF wrapper as it flushes
        // its work in one
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show() {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
    } // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    instance.state.isVisible = true;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'visible';
    }

    handleStyles();
    addDocumentPress();

    if (!instance.state.isMounted) {
      popper.style.transition = 'none';
    } // If flipping to the opposite side after hiding at least once, the
    // animation will use the wrong placement without resetting the duration


    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;

      setTransitionDuration([box, content], 0);
    }

    onFirstUpdate = function onFirstUpdate() {
      var _instance$popperInsta2;

      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }

      ignoreOnFirstUpdate = true; // reflow

      void popper.offsetHeight;
      popper.style.transition = instance.props.moveTransition;

      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;

        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], 'visible');
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
      // popper has been positioned for the first time

      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      instance.state.isMounted = true;
      invokeHook('onMount', [instance]);

      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      }
    };

    mount();
  }

  function hide() {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
    } // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false) {
      return;
    }

    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'hidden';
    }

    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles();

    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;

      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], 'hidden');
      }
    }

    handleAriaContentAttribute();
    handleAriaExpandedAttribute();

    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }

  function hideWithInteractivity(event) {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
    }

    getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }

  function unmount() {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
    }

    if (instance.state.isVisible) {
      instance.hide();
    }

    if (!instance.state.isMounted) {
      return;
    }

    destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
    // tree by default. This seems mainly for interactive tippies, but we should
    // find a workaround if possible

    getNestedPopperTree().forEach(function (nestedPopper) {
      nestedPopper._tippy.unmount();
    });

    if (popper.parentNode) {
      popper.parentNode.removeChild(popper);
    }

    mountedInstances = mountedInstances.filter(function (i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook('onHidden', [instance]);
  }

  function destroy() {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference._tippy;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  /* istanbul ignore else */

  if (true) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }

  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins: plugins
  });
  var elements = getArrayOfElements(targets);
  /* istanbul ignore else */

  if (true) {
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than', 'one tippy instance was created by this invocation. This means the', 'content element will only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that', 'returns a cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
  }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}

tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var hideAll = function hideAll(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;

  mountedInstances.forEach(function (instance) {
    var isExcluded = false;

    if (excludedReferenceOrInstance) {
      isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
    }

    if (!isExcluded) {
      var originalDuration = instance.props.duration;
      instance.setProps({
        duration: duration
      });
      instance.hide();

      if (!instance.state.isDestroyed) {
        instance.setProps({
          duration: originalDuration
        });
      }
    }
  });
};

// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.

var applyStylesModifier = Object.assign({}, _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["applyStyles"], {
  effect: function effect(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    } // intentionally return no cleanup function
    // return () => { ... }

  }
});

var createSingleton = function createSingleton(tippyInstances, optionalProps) {
  var _optionalProps$popper;

  if (optionalProps === void 0) {
    optionalProps = {};
  }

  /* istanbul ignore else */
  if (true) {
    errorWhen(!Array.isArray(tippyInstances), ['The first argument passed to createSingleton() must be an array of', 'tippy instances. The passed value was', String(tippyInstances)].join(' '));
  }

  var individualInstances = tippyInstances;
  var references = [];
  var currentTarget;
  var overrides = optionalProps.overrides;
  var interceptSetPropsCleanups = [];
  var shownOnCreate = false;

  function setReferences() {
    references = individualInstances.map(function (instance) {
      return instance.reference;
    });
  }

  function enableInstances(isEnabled) {
    individualInstances.forEach(function (instance) {
      if (isEnabled) {
        instance.enable();
      } else {
        instance.disable();
      }
    });
  }

  function interceptSetProps(singleton) {
    return individualInstances.map(function (instance) {
      var originalSetProps = instance.setProps;

      instance.setProps = function (props) {
        originalSetProps(props);

        if (instance.reference === currentTarget) {
          singleton.setProps(props);
        }
      };

      return function () {
        instance.setProps = originalSetProps;
      };
    });
  } // have to pass singleton, as it maybe undefined on first call


  function prepareInstance(singleton, target) {
    var index = references.indexOf(target); // bail-out

    if (target === currentTarget) {
      return;
    }

    currentTarget = target;
    var overrideProps = (overrides || []).concat('content').reduce(function (acc, prop) {
      acc[prop] = individualInstances[index].props[prop];
      return acc;
    }, {});
    singleton.setProps(Object.assign({}, overrideProps, {
      getReferenceClientRect: typeof overrideProps.getReferenceClientRect === 'function' ? overrideProps.getReferenceClientRect : function () {
        return target.getBoundingClientRect();
      }
    }));
  }

  enableInstances(false);
  setReferences();
  var plugin = {
    fn: function fn() {
      return {
        onDestroy: function onDestroy() {
          enableInstances(true);
        },
        onHidden: function onHidden() {
          currentTarget = null;
        },
        onClickOutside: function onClickOutside(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            currentTarget = null;
          }
        },
        onShow: function onShow(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            prepareInstance(instance, references[0]);
          }
        },
        onTrigger: function onTrigger(instance, event) {
          prepareInstance(instance, event.currentTarget);
        }
      };
    }
  };
  var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, ['overrides']), {
    plugins: [plugin].concat(optionalProps.plugins || []),
    triggerTarget: references,
    popperOptions: Object.assign({}, optionalProps.popperOptions, {
      modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [applyStylesModifier])
    })
  }));
  var originalShow = singleton.show;

  singleton.show = function (target) {
    originalShow(); // first time, showOnCreate or programmatic call with no params
    // default to showing first instance

    if (!currentTarget && target == null) {
      return prepareInstance(singleton, references[0]);
    } // triggered from event (do nothing as prepareInstance already called by onTrigger)
    // programmatic call with no params when already visible (do nothing again)


    if (currentTarget && target == null) {
      return;
    } // target is index of instance


    if (typeof target === 'number') {
      return references[target] && prepareInstance(singleton, references[target]);
    } // target is a child tippy instance


    if (individualInstances.indexOf(target) >= 0) {
      var ref = target.reference;
      return prepareInstance(singleton, ref);
    } // target is a ReferenceElement


    if (references.indexOf(target) >= 0) {
      return prepareInstance(singleton, target);
    }
  };

  singleton.showNext = function () {
    var first = references[0];

    if (!currentTarget) {
      return singleton.show(0);
    }

    var index = references.indexOf(currentTarget);
    singleton.show(references[index + 1] || first);
  };

  singleton.showPrevious = function () {
    var last = references[references.length - 1];

    if (!currentTarget) {
      return singleton.show(last);
    }

    var index = references.indexOf(currentTarget);
    var target = references[index - 1] || last;
    singleton.show(target);
  };

  var originalSetProps = singleton.setProps;

  singleton.setProps = function (props) {
    overrides = props.overrides || overrides;
    originalSetProps(props);
  };

  singleton.setInstances = function (nextInstances) {
    enableInstances(true);
    interceptSetPropsCleanups.forEach(function (fn) {
      return fn();
    });
    individualInstances = nextInstances;
    enableInstances(false);
    setReferences();
    interceptSetProps(singleton);
    singleton.setProps({
      triggerTarget: references
    });
  };

  interceptSetPropsCleanups = interceptSetProps(singleton);
  return singleton;
};

var BUBBLING_EVENTS_MAP = {
  mouseover: 'mouseenter',
  focusin: 'focus',
  click: 'click'
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */

function delegate(targets, props) {
  /* istanbul ignore else */
  if (true) {
    errorWhen(!(props && props.target), ['You must specity a `target` prop indicating a CSS selector string matching', 'the target elements that should receive a tippy.'].join(' '));
  }

  var listeners = [];
  var childTippyInstances = [];
  var disabled = false;
  var target = props.target;
  var nativeProps = removeProperties(props, ['target']);
  var parentProps = Object.assign({}, nativeProps, {
    trigger: 'manual',
    touch: false
  });
  var childProps = Object.assign({}, nativeProps, {
    showOnCreate: true
  });
  var returnValue = tippy(targets, parentProps);
  var normalizedReturnValue = normalizeToArray(returnValue);

  function onTrigger(event) {
    if (!event.target || disabled) {
      return;
    }

    var targetNode = event.target.closest(target);

    if (!targetNode) {
      return;
    } // Get relevant trigger with fallbacks:
    // 1. Check `data-tippy-trigger` attribute on target node
    // 2. Fallback to `trigger` passed to `delegate()`
    // 3. Fallback to `defaultProps.trigger`


    var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || defaultProps.trigger; // @ts-ignore

    if (targetNode._tippy) {
      return;
    }

    if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') {
      return;
    }

    if (event.type !== 'touchstart' && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) {
      return;
    }

    var instance = tippy(targetNode, childProps);

    if (instance) {
      childTippyInstances = childTippyInstances.concat(instance);
    }
  }

  function on(node, eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    node.addEventListener(eventType, handler, options);
    listeners.push({
      node: node,
      eventType: eventType,
      handler: handler,
      options: options
    });
  }

  function addEventListeners(instance) {
    var reference = instance.reference;
    on(reference, 'touchstart', onTrigger, TOUCH_OPTIONS);
    on(reference, 'mouseover', onTrigger);
    on(reference, 'focusin', onTrigger);
    on(reference, 'click', onTrigger);
  }

  function removeEventListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function applyMutations(instance) {
    var originalDestroy = instance.destroy;
    var originalEnable = instance.enable;
    var originalDisable = instance.disable;

    instance.destroy = function (shouldDestroyChildInstances) {
      if (shouldDestroyChildInstances === void 0) {
        shouldDestroyChildInstances = true;
      }

      if (shouldDestroyChildInstances) {
        childTippyInstances.forEach(function (instance) {
          instance.destroy();
        });
      }

      childTippyInstances = [];
      removeEventListeners();
      originalDestroy();
    };

    instance.enable = function () {
      originalEnable();
      childTippyInstances.forEach(function (instance) {
        return instance.enable();
      });
      disabled = false;
    };

    instance.disable = function () {
      originalDisable();
      childTippyInstances.forEach(function (instance) {
        return instance.disable();
      });
      disabled = true;
    };

    addEventListeners(instance);
  }

  normalizedReturnValue.forEach(applyMutations);
  return returnValue;
}

var animateFill = {
  name: 'animateFill',
  defaultValue: false,
  fn: function fn(instance) {
    var _instance$props$rende;

    // @ts-ignore
    if (!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy)) {
      if (true) {
        errorWhen(instance.props.animateFill, 'The `animateFill` plugin requires the default render function.');
      }

      return {};
    }

    var _getChildren = getChildren(instance.popper),
        box = _getChildren.box,
        content = _getChildren.content;

    var backdrop = instance.props.animateFill ? createBackdropElement() : null;
    return {
      onCreate: function onCreate() {
        if (backdrop) {
          box.insertBefore(backdrop, box.firstElementChild);
          box.setAttribute('data-animatefill', '');
          box.style.overflow = 'hidden';
          instance.setProps({
            arrow: false,
            animation: 'shift-away'
          });
        }
      },
      onMount: function onMount() {
        if (backdrop) {
          var transitionDuration = box.style.transitionDuration;
          var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
          // tooltip element. `clip-path` is the other alternative but is not
          // well-supported and is buggy on some devices.

          content.style.transitionDelay = Math.round(duration / 10) + "ms";
          backdrop.style.transitionDuration = transitionDuration;
          setVisibilityState([backdrop], 'visible');
        }
      },
      onShow: function onShow() {
        if (backdrop) {
          backdrop.style.transitionDuration = '0ms';
        }
      },
      onHide: function onHide() {
        if (backdrop) {
          setVisibilityState([backdrop], 'hidden');
        }
      }
    };
  }
};

function createBackdropElement() {
  var backdrop = div();
  backdrop.className = BACKDROP_CLASS;
  setVisibilityState([backdrop], 'hidden');
  return backdrop;
}

var mouseCoords = {
  clientX: 0,
  clientY: 0
};
var activeInstances = [];

function storeMouseCoords(_ref) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;
  mouseCoords = {
    clientX: clientX,
    clientY: clientY
  };
}

function addMouseCoordsListener(doc) {
  doc.addEventListener('mousemove', storeMouseCoords);
}

function removeMouseCoordsListener(doc) {
  doc.removeEventListener('mousemove', storeMouseCoords);
}

var followCursor = {
  name: 'followCursor',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference;
    var doc = getOwnerDocument(instance.props.triggerTarget || reference);
    var isInternalUpdate = false;
    var wasFocusEvent = false;
    var isUnmounted = true;
    var prevProps = instance.props;

    function getIsInitialBehavior() {
      return instance.props.followCursor === 'initial' && instance.state.isVisible;
    }

    function addListener() {
      doc.addEventListener('mousemove', onMouseMove);
    }

    function removeListener() {
      doc.removeEventListener('mousemove', onMouseMove);
    }

    function unsetGetReferenceClientRect() {
      isInternalUpdate = true;
      instance.setProps({
        getReferenceClientRect: null
      });
      isInternalUpdate = false;
    }

    function onMouseMove(event) {
      // If the instance is interactive, avoid updating the position unless it's
      // over the reference element
      var isCursorOverReference = event.target ? reference.contains(event.target) : true;
      var followCursor = instance.props.followCursor;
      var clientX = event.clientX,
          clientY = event.clientY;
      var rect = reference.getBoundingClientRect();
      var relativeX = clientX - rect.left;
      var relativeY = clientY - rect.top;

      if (isCursorOverReference || !instance.props.interactive) {
        instance.setProps({
          // @ts-ignore - unneeded DOMRect properties
          getReferenceClientRect: function getReferenceClientRect() {
            var rect = reference.getBoundingClientRect();
            var x = clientX;
            var y = clientY;

            if (followCursor === 'initial') {
              x = rect.left + relativeX;
              y = rect.top + relativeY;
            }

            var top = followCursor === 'horizontal' ? rect.top : y;
            var right = followCursor === 'vertical' ? rect.right : x;
            var bottom = followCursor === 'horizontal' ? rect.bottom : y;
            var left = followCursor === 'vertical' ? rect.left : x;
            return {
              width: right - left,
              height: bottom - top,
              top: top,
              right: right,
              bottom: bottom,
              left: left
            };
          }
        });
      }
    }

    function create() {
      if (instance.props.followCursor) {
        activeInstances.push({
          instance: instance,
          doc: doc
        });
        addMouseCoordsListener(doc);
      }
    }

    function destroy() {
      activeInstances = activeInstances.filter(function (data) {
        return data.instance !== instance;
      });

      if (activeInstances.filter(function (data) {
        return data.doc === doc;
      }).length === 0) {
        removeMouseCoordsListener(doc);
      }
    }

    return {
      onCreate: create,
      onDestroy: destroy,
      onBeforeUpdate: function onBeforeUpdate() {
        prevProps = instance.props;
      },
      onAfterUpdate: function onAfterUpdate(_, _ref2) {
        var followCursor = _ref2.followCursor;

        if (isInternalUpdate) {
          return;
        }

        if (followCursor !== undefined && prevProps.followCursor !== followCursor) {
          destroy();

          if (followCursor) {
            create();

            if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) {
              addListener();
            }
          } else {
            removeListener();
            unsetGetReferenceClientRect();
          }
        }
      },
      onMount: function onMount() {
        if (instance.props.followCursor && !wasFocusEvent) {
          if (isUnmounted) {
            onMouseMove(mouseCoords);
            isUnmounted = false;
          }

          if (!getIsInitialBehavior()) {
            addListener();
          }
        }
      },
      onTrigger: function onTrigger(_, event) {
        if (isMouseEvent(event)) {
          mouseCoords = {
            clientX: event.clientX,
            clientY: event.clientY
          };
        }

        wasFocusEvent = event.type === 'focus';
      },
      onHidden: function onHidden() {
        if (instance.props.followCursor) {
          unsetGetReferenceClientRect();
          removeListener();
          isUnmounted = true;
        }
      }
    };
  }
};

function getProps(props, modifier) {
  var _props$popperOptions;

  return {
    popperOptions: Object.assign({}, props.popperOptions, {
      modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function (_ref) {
        var name = _ref.name;
        return name !== modifier.name;
      }), [modifier])
    })
  };
}

var inlinePositioning = {
  name: 'inlinePositioning',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference;

    function isEnabled() {
      return !!instance.props.inlinePositioning;
    }

    var placement;
    var cursorRectIndex = -1;
    var isInternalUpdate = false;
    var modifier = {
      name: 'tippyInlinePositioning',
      enabled: true,
      phase: 'afterWrite',
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (isEnabled()) {
          if (placement !== state.placement) {
            instance.setProps({
              // @ts-ignore - unneeded DOMRect properties
              getReferenceClientRect: function getReferenceClientRect() {
                return _getReferenceClientRect(state.placement);
              }
            });
          }

          placement = state.placement;
        }
      }
    };

    function _getReferenceClientRect(placement) {
      return getInlineBoundingClientRect(getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
    }

    function setInternalProps(partialProps) {
      isInternalUpdate = true;
      instance.setProps(partialProps);
      isInternalUpdate = false;
    }

    function addModifier() {
      if (!isInternalUpdate) {
        setInternalProps(getProps(instance.props, modifier));
      }
    }

    return {
      onCreate: addModifier,
      onAfterUpdate: addModifier,
      onTrigger: function onTrigger(_, event) {
        if (isMouseEvent(event)) {
          var rects = arrayFrom(instance.reference.getClientRects());
          var cursorRect = rects.find(function (rect) {
            return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
          });
          var index = rects.indexOf(cursorRect);
          cursorRectIndex = index > -1 ? index : cursorRectIndex;
        }
      },
      onHidden: function onHidden() {
        cursorRectIndex = -1;
      }
    };
  }
};
function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
  // Not an inline element, or placement is not yet known
  if (clientRects.length < 2 || currentBasePlacement === null) {
    return boundingRect;
  } // There are two rects and they are disjoined


  if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) {
    return clientRects[cursorRectIndex] || boundingRect;
  }

  switch (currentBasePlacement) {
    case 'top':
    case 'bottom':
      {
        var firstRect = clientRects[0];
        var lastRect = clientRects[clientRects.length - 1];
        var isTop = currentBasePlacement === 'top';
        var top = firstRect.top;
        var bottom = lastRect.bottom;
        var left = isTop ? firstRect.left : lastRect.left;
        var right = isTop ? firstRect.right : lastRect.right;
        var width = right - left;
        var height = bottom - top;
        return {
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          width: width,
          height: height
        };
      }

    case 'left':
    case 'right':
      {
        var minLeft = Math.min.apply(Math, clientRects.map(function (rects) {
          return rects.left;
        }));
        var maxRight = Math.max.apply(Math, clientRects.map(function (rects) {
          return rects.right;
        }));
        var measureRects = clientRects.filter(function (rect) {
          return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
        });
        var _top = measureRects[0].top;
        var _bottom = measureRects[measureRects.length - 1].bottom;
        var _left = minLeft;
        var _right = maxRight;

        var _width = _right - _left;

        var _height = _bottom - _top;

        return {
          top: _top,
          bottom: _bottom,
          left: _left,
          right: _right,
          width: _width,
          height: _height
        };
      }

    default:
      {
        return boundingRect;
      }
  }
}

var sticky = {
  name: 'sticky',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference,
        popper = instance.popper;

    function getReference() {
      return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
    }

    function shouldCheck(value) {
      return instance.props.sticky === true || instance.props.sticky === value;
    }

    var prevRefRect = null;
    var prevPopRect = null;

    function updatePosition() {
      var currentRefRect = shouldCheck('reference') ? getReference().getBoundingClientRect() : null;
      var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;

      if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
        if (instance.popperInstance) {
          instance.popperInstance.update();
        }
      }

      prevRefRect = currentRefRect;
      prevPopRect = currentPopRect;

      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }

    return {
      onMount: function onMount() {
        if (instance.props.sticky) {
          updatePosition();
        }
      }
    };
  }
};

function areRectsDifferent(rectA, rectB) {
  if (rectA && rectB) {
    return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
  }

  return true;
}

tippy.setDefaultProps({
  render: render
});

/* harmony default export */ __webpack_exports__["default"] = (tippy);

//# sourceMappingURL=tippy.esm.js.map


/***/ })

}]);