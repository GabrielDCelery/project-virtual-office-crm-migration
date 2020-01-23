webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav/Bar.jsx":
/*!********************************!*\
  !*** ./components/Nav/Bar.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Drawer */ "./components/Nav/Drawer.jsx");
/* harmony import */ var _DrawerContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DrawerContainer */ "./components/Nav/DrawerContainer.jsx");
/* harmony import */ var _ListItemGutter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListItemGutter */ "./components/Nav/ListItemGutter.jsx");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListItem */ "./components/Nav/ListItem.jsx");
/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ListItemIcon */ "./components/Nav/ListItemIcon.jsx");
/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ListItemText */ "./components/Nav/ListItemText.jsx");


var _jsxFileName = "/usr/src/pvocrm_frontend/components/Nav/Bar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var NavBarIcons = {
  BuildIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Build"],
  EmailIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Email"],
  EmojiEventsIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["EmojiEvents"],
  GetAppIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["GetApp"],
  InsertEmoticonIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["InsertEmoticon"],
  WorkIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Work"]
};

var SingleNavBarItem = function SingleNavBarItem(_ref) {
  var StyledLink = _ref.StyledLink,
      StyledListItem = _ref.StyledListItem,
      StyledListItemIcon = _ref.StyledListItemIcon,
      StyledListItemText = _ref.StyledListItemText,
      bIsActive = _ref.bIsActive,
      icon = _ref.icon,
      label = _ref.label,
      path = _ref.path;
  var Icon = Icons[icon];
  return __jsx(StyledLink, {
    to: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(StyledListItem, {
    button: true,
    className: "".concat(bIsActive ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(StyledListItemIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx(StyledListItemText, {
    primary: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })));
};

var DropDownNavBarItem = function DropDownNavBarItem(_ref2) {
  var StyledLink = _ref2.StyledLink,
      StyledListItem = _ref2.StyledListItem,
      StyledListItemIcon = _ref2.StyledListItemIcon,
      StyledListItemText = _ref2.StyledListItemText,
      bIsActive = _ref2.bIsActive,
      icon = _ref2.icon,
      label = _ref2.label,
      navBarItemChildren = _ref2.navBarItemChildren;

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      bIsOpen = _useState2[0],
      setOpen = _useState2[1];

  var Icon = Icons[icon];
  return __jsx("div", {
    onClick: function onClick() {
      return setOpen(!bIsOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(StyledListItem, {
    button: true,
    className: "".concat(bIsActive ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(StyledListItemIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx(StyledListItemText, {
    primary: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(StyledListItemIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, bIsActive || bIsOpen ? __jsx(ExpandLessIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }) : __jsx(ExpandMoreIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    "in": bIsActive || bIsOpen,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    component: "div",
    disablePadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, navBarItemChildren.map(function (_ref3, index) {
    var label = _ref3.label,
        bIsActive = _ref3.bIsActive,
        path = _ref3.path;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: "navbar-item-collapsible-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(StyledLink, {
      to: path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx(StyledListItem, {
      button: true,
      className: "".concat(bIsActive ? 'active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(StyledListItemText, {
      primary: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }))));
  }))));
};

function NavBar(_ref4) {
  var getter = _ref4.getter,
      handler = _ref4.handler;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(_DrawerContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "permanent",
    anchor: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, navBarItems.map(function (navBarItem, index) {
    var label = navBarItem.label,
        icon = navBarItem.icon,
        bIsActive = navBarItem.bIsActive,
        path = navBarItem.path,
        navBarItemChildren = navBarItem.navBarItemChildren;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: "navbar-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, navBarItemChildren ? __jsx(DropDownNavBarItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      StyledLink: StyledLink,
      StyledListItem: StyledListItem,
      StyledListItemIcon: StyledListItemIcon,
      StyledListItemText: StyledListItemText,
      bIsActive: bIsActive,
      icon: icon,
      label: label,
      navBarItemChildren: navBarItemChildren
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })) : __jsx(SingleNavBarItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      StyledLink: StyledLink,
      StyledListItem: StyledListItem,
      StyledListItemIcon: StyledListItemIcon,
      StyledListItemText: StyledListItemText,
      bIsActive: bIsActive,
      icon: icon,
      label: label,
      path: path
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    })));
  })))));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=index.js.7bdb24249e8c4d2015f8.hot-update.js.map