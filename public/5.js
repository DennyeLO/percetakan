(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./resources/js/component/Master/Voucher/Index.js":
/*!********************************************************!*\
  !*** ./resources/js/component/Master/Voucher/Index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils_DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/DataTable */ "./resources/js/component/Utils/DataTable.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Utils_Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utils/Notification */ "./resources/js/component/Utils/Notification.js");






var Index = function Index(props) {
  var statusAddData = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.addDataSuccess;
  });
  var statusUpdateData = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.updateDataSuccess;
  });
  var statusDeleteData = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.deleteDataSuccess;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (statusAddData) {
      dispatch({
        type: 'add_data_success',
        addDataSuccess: false
      });
      Object(_Utils_Notification__WEBPACK_IMPORTED_MODULE_4__["add_success"])();
    } else if (statusUpdateData) {
      dispatch({
        type: 'update_data_success',
        updateDataSuccess: false
      });
      Object(_Utils_Notification__WEBPACK_IMPORTED_MODULE_4__["update_success"])();
    } else if (statusDeleteData) {
      dispatch({
        type: 'delete_data_success',
        deleteDataSuccess: false
      });
      Object(_Utils_Notification__WEBPACK_IMPORTED_MODULE_4__["delete_success"])();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mr-auto mt-2 font-weight-bold"
  }, "Index Voucher"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn btn-success",
    to: "/master/voucher/add"
  }, "Tambah")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_DataTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fetchUrl: "/api/voucher",
    columns: ["kode_voucher", "kode_client"],
    history: props.history,
    linkDetail: "/master/voucher/detail",
    linkPagination: "/master/voucher/page"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./resources/js/component/Utils/DataTable.js":
/*!***************************************************!*\
  !*** ./resources/js/component/Utils/DataTable.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Paginator */ "./resources/js/component/Utils/Paginator.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SORT_ASC = "asc";
var SORT_DESC = "desc";

var DataTable = function DataTable(_ref) {
  var columns = _ref.columns,
      fetchUrl = _ref.fetchUrl,
      history = _ref.history,
      linkDetail = _ref.linkDetail,
      linkPagination = _ref.linkPagination;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(10),
      _useState4 = _slicedToArray(_useState3, 2),
      perPage = _useState4[0],
      setPerPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(columns[0]),
      _useState6 = _slicedToArray(_useState5, 2),
      sortColumn = _useState6[0],
      setSortColumn = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("asc"),
      _useState8 = _slicedToArray(_useState7, 2),
      sortOrder = _useState8[0],
      setSortOrder = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      search = _useState10[0],
      setSearch = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState12 = _slicedToArray(_useState11, 2),
      pagination = _useState12[0],
      setPagination = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      _useState14 = _slicedToArray(_useState13, 2),
      currentPage = _useState14[0],
      setCurrentPage = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState16 = _slicedToArray(_useState15, 2),
      loading = _useState16[0],
      setLoading = _useState16[1];

  var handleSort = function handleSort(column) {
    if (column === sortColumn) {
      sortOrder === SORT_ASC ? setSortOrder(SORT_DESC) : setSortOrder(SORT_ASC);
    } else {
      setSortColumn(column);
      setSortOrder(SORT_ASC);
    }
  };

  var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function (query) {
    setSearch(query);
    setCurrentPage(1);
    setSortOrder(SORT_ASC);
    setSortColumn(columns[0]);
  }, 500)).current;

  var handlePerPage = function handlePerPage(perPage) {
    setCurrentPage(1);
    setPerPage(perPage);
  };

  var loaderStyle = {
    width: "4rem",
    height: "4rem"
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params, _yield$axios, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                params = {
                  search: search,
                  sort_field: sortColumn,
                  sort_order: sortOrder,
                  per_page: perPage,
                  page: currentPage
                };
                _context.next = 4;
                return axios(fetchUrl, {
                  params: params
                });

              case 4:
                _yield$axios = _context.sent;
                data = _yield$axios.data;
                setData(data.data);
                setPagination(data.meta);
                setTimeout(function () {
                  setLoading(false);
                }, 300);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, [perPage, sortColumn, sortOrder, search, currentPage]);

  var handleDetail = function handleDetail(data) {
    history.push("".concat(linkDetail, "/").concat(data.id));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "form-control",
    placeholder: "Search...",
    type: "search",
    onChange: function onChange(e) {
      return handleSearch(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "mt-2 mx-2 form-label"
  }, "Per page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    className: "form-select w-50",
    value: perPage,
    onChange: function onChange(e) {
      return handlePerPage(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "50"
  }, "50"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "tableFixHead"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "table table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("thead", {
    className: "table-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
      key: column,
      onClick: function onClick(e) {
        return handleSort(column);
      },
      style: {
        cursor: 'pointer'
      }
    }, column.toUpperCase().replace("_", " "), column === sortColumn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "mx-2"
    }, sortOrder === SORT_ASC ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-arrow-up-square-fill",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      d: "M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-arrow-down-square-fill",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"
    }))) : null);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", null, data.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    colSpan: columns.length
  }, "No items found")) : "", !loading ? data.map(function (d, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      key: index
    }, columns.map(function (column) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
        key: column,
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return handleDetail(d);
        }
      }, d[column]);
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    colSpan: columns.length + 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "spinner-border",
    style: loaderStyle,
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "sr-only"
  }, "Loading...")))))))), data.length > 0 && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Paginator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pagination: pagination,
    pageChanged: function pageChanged(page) {
      return setCurrentPage(page);
    },
    totalItems: data.length,
    linkPagination: linkPagination
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (DataTable);

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

/***/ }),

/***/ "./resources/js/component/Utils/Paginator.js":
/*!***************************************************!*\
  !*** ./resources/js/component/Utils/Paginator.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var OFFSET = 4;

var Paginator = function Paginator(_ref) {
  var pagination = _ref.pagination,
      pageChanged = _ref.pageChanged,
      totalItems = _ref.totalItems,
      linkPagination = _ref.linkPagination;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      pageNumbers = _useState2[0],
      setPageNumbers = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var setPaginationPages = function setPaginationPages() {
      var pages = [];
      var last_page = pagination.last_page,
          current_page = pagination.current_page,
          from = pagination.from,
          to = pagination.to;
      if (!to) return [];
      var fromPage = current_page - OFFSET;
      if (fromPage < 1) fromPage = 1;
      var toPage = fromPage + OFFSET * 2;

      if (toPage >= last_page) {
        toPage = last_page;
      }

      for (var page = fromPage; page <= toPage; page++) {
        pages.push(page);
      }

      setPageNumbers(pages);
    };

    setPaginationPages();
  }, [pagination]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "Page navigation example"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item" + (pagination.current_page === 1 ? " disabled" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "page-link",
    to: "".concat(linkPagination, "/").concat(pagination.current_page - 1),
    onClick: function onClick() {
      return pageChanged(pagination.current_page - 1);
    }
  }, "Previous")), pageNumbers.map(function (pageNumber) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "page-item" + (pageNumber === pagination.current_page ? " page-item active" : ""),
      key: pageNumber,
      onClick: function onClick() {
        return pageChanged(pageNumber);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "page-link",
      to: "".concat(linkPagination, "/").concat(pageNumber)
    }, pageNumber));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item" + (pagination.current_page === pagination.last_page ? " disabled" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "page-link",
    to: "".concat(linkPagination, "/").concat(pagination.current_page + 1),
    onClick: function onClick() {
      return pageChanged(pagination.current_page + 1);
    }
  }, "Next"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    "class": "mt-2 ms-2"
  }, "Showing ", pagination.from, " - ", pagination.to, " of ", pagination.total, " entries."));
};

/* harmony default export */ __webpack_exports__["default"] = (Paginator);

/***/ })

}]);