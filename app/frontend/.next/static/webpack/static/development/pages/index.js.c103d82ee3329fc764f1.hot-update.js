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
  var bIsActive = _ref.bIsActive,
      icon = _ref.icon,
      label = _ref.label,
      path = _ref.path;
  var Icon = Icons[icon];
  return __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    button: true,
    className: "".concat(bIsActive ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

var DropDownNavBarItem = function DropDownNavBarItem(_ref2) {
  var bIsActive = _ref2.bIsActive,
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
      lineNumber: 45
    },
    __self: this
  }, __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    button: true,
    className: "".concat(bIsActive ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx(_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, bIsActive || bIsOpen ? __jsx(ExpandLessIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }) : __jsx(ExpandMoreIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    "in": bIsActive || bIsOpen,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    component: "div",
    disablePadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
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
        lineNumber: 59
      },
      __self: this
    }, __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      button: true,
      className: "".concat(bIsActive ? 'active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
      primary: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })));
  }))));
};

function NavBar(_ref4) {
  var getter = _ref4.getter,
      handler = _ref4.handler;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_DrawerContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "permanent",
    anchor: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
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
        lineNumber: 88
      },
      __self: this
    }, navBarItemChildren ? __jsx(DropDownNavBarItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      bIsActive: bIsActive,
      icon: icon,
      label: label,
      navBarItemChildren: navBarItemChildren
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })) : __jsx(SingleNavBarItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      bIsActive: bIsActive,
      icon: icon,
      label: label,
      path: path
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })));
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.c103d82ee3329fc764f1.hot-update.js.map