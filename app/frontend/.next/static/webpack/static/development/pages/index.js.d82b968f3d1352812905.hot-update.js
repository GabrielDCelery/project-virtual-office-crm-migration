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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppBar */ "./components/Nav/AppBar.jsx");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawer */ "./components/Nav/Drawer.jsx");
/* harmony import */ var _DrawerContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DrawerContainer */ "./components/Nav/DrawerContainer.jsx");
/* harmony import */ var _ListItemGutter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListItemGutter */ "./components/Nav/ListItemGutter.jsx");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListItem */ "./components/Nav/ListItem.jsx");
/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListItemIcon */ "./components/Nav/ListItemIcon.jsx");
/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ListItemText */ "./components/Nav/ListItemText.jsx");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IconButton */ "./components/Nav/IconButton.jsx");
var _jsxFileName = "/usr/src/pvocrm_frontend/components/Nav/Bar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var NavBarIcons = {
  BuildIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Build"],
  EmailIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Email"],
  EmojiEventsIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["EmojiEvents"],
  GetAppIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["GetApp"],
  InsertEmoticonIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["InsertEmoticon"],
  WorkIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Work"]
};
function NavBar(_ref) {
  var getter = _ref.getter,
      handler = _ref.handler;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_DrawerContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "permanent",
    anchor: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, [].map(function (_ref2, index) {
    var path = _ref2.path,
        icon = _ref2.icon,
        label = _ref2.label;
    var Icon = NavBarIcons[icon];
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: "navbar-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      button: true,
      className: "".concat(getter('isActivePage')(path) ? 'active' : ''),
      onClick: function onClick() {
        return handler('navToPage')(path);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_ListItemGutter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx(_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(Icon, {
      fontSize: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), __jsx(_ListItemText__WEBPACK_IMPORTED_MODULE_9__["default"], {
      primary: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx(_ListItemGutter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })));
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.d82b968f3d1352812905.hot-update.js.map