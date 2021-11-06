(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/component/Master/Voucher/Form.js":
/*!*******************************************************!*\
  !*** ./resources/js/component/Master/Voucher/Form.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Utils_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/Notification */ "./resources/js/component/Utils/Notification.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Form = function Form(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    code_voucher: '',
    code_client: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      detail = _useState4[0],
      setDetail = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.match.params.id) {
      setDetail(true);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/voucher/detail/".concat(props.match.params.id)).then(function (res) {
        setData(res.data.data);
      })["catch"](function () {
        Object(_Utils_Notification__WEBPACK_IMPORTED_MODULE_3__["get_error"])();
      });
    }
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (detail) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/voucher/update/".concat(props.match.params.id), data).then(function () {
        dispatch({
          type: 'update_data_success',
          updateDataSuccess: true
        });
        props.history.goBack();
      })["catch"](function (err) {
        Object(_Utils_Notification__WEBPACK_IMPORTED_MODULE_3__["update_error"])();
      });
    } else {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/voucher/store", data).then(function () {
        dispatch({
          type: 'add_data_success',
          addDataSuccess: true
        });
        props.history.goBack();
      })["catch"](function (err) {
        Object(_Utils_Notification__WEBPACK_IMPORTED_MODULE_3__["add_error"])();
      });
    }
  };

  var handleChange = function handleChange(e) {
    setData(_objectSpread(_objectSpread({}, data), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var handleDelete = function handleDelete() {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/voucher/delete/".concat(props.match.params.id)).then(function () {
      dispatch({
        type: 'delete_data_success',
        deleteDataSuccess: true
      });
      props.history.goBack();
    })["catch"](function (err) {
      Object(_Utils_Notification__WEBPACK_IMPORTED_MODULE_3__["delete_error"])();
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-header d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "mr-auto mt-2 font-weight-bold"
  }, detail ? 'Form Detail Pelanggan' : 'Form Tambah ♥'), detail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-danger",
    onClick: handleDelete
  }, "Hapus") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    "for": "code_voucher"
  }, "Kode Voucher"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    value: data.kode_voucher,
    className: "form-control",
    id: "code_voucher",
    name: "code_voucher",
    placeholder: "Kode Voucher",
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    "for": "code_client"
  }, "Kode Client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    value: data.kode_client,
    className: "form-control",
    id: "code_client",
    name: "code_client",
    placeholder: "Kode Client",
    onChange: handleChange,
    required: true
  })), detail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-info"
  }, "Update") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-success"
  }, "Tambah"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./resources/js/component/Utils/Notification.js":
/*!******************************************************!*\
  !*** ./resources/js/component/Utils/Notification.js ***!
  \******************************************************/
/*! exports provided: add_success, update_success, delete_success, add_error, update_error, delete_error, get_error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_success", function() { return add_success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_success", function() { return update_success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_success", function() { return delete_success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_error", function() { return add_error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_error", function() { return update_error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_error", function() { return delete_error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_error", function() { return get_error; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);


var add_success = function add_success() {
  return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success("Data berhasil ditambahkan");
};
var update_success = function update_success() {
  return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success("Data berhasil diubah");
};
var delete_success = function delete_success() {
  return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success("Data berhasil dihapuskan");
};
var add_error = function add_error() {
  return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error("Data gagal ditambahkan");
};
var update_error = function update_error() {
  return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error("Data gagal diubah");
};
var delete_error = function delete_error() {
  return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error("Data gagal dihapus");
};
var get_error = function get_error() {
  return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error("Data gagal ditampilkan");
};

/***/ })

}]);