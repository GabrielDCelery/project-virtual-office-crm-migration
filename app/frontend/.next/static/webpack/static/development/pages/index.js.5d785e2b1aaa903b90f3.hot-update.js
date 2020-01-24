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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Drawer */ "./components/Nav/Drawer.jsx");
/* harmony import */ var _DrawerContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DrawerContainer */ "./components/Nav/DrawerContainer.jsx");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListItem */ "./components/Nav/ListItem.jsx");
/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListItemIcon */ "./components/Nav/ListItemIcon.jsx");
/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ListItemText */ "./components/Nav/ListItemText.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");


var _jsxFileName = "/usr/src/pvocrm_frontend/components/Nav/Bar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Icons = {
  ContactMailIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ContactMail"],
  DashboardIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Dashboard"],
  LayersIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Layers"],
  ListAltIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ListAlt"],
  PersonIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Person"],
  SearchIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Search"]
};

var SingleNavBarItem = function SingleNavBarItem(_ref) {
  var bIsActive = _ref.bIsActive,
      icon = _ref.icon,
      label = _ref.label,
      path = _ref.path;
  var Icon = Icons[icon];
  return __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    button: true,
    className: "".concat(bIsActive ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_ListItemText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    primary: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

var DropDownNavBarItem = function DropDownNavBarItem(_ref2) {
  var bIsActive = _ref2.bIsActive,
      icon = _ref2.icon,
      label = _ref2.label,
      navBarItemChildren = _ref2.navBarItemChildren;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      bIsOpen = _useState[0],
      setOpen = _useState[1];

  var Icon = Icons[icon];
  return __jsx("div", {
    onClick: function onClick() {
      return setOpen(!bIsOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    button: true,
    className: "".concat(bIsActive ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx(_ListItemText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    primary: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, bIsActive || bIsOpen ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ExpandLess"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ExpandMore"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    "in": bIsActive || bIsOpen,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    component: "div",
    disablePadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
        lineNumber: 62
      },
      __self: this
    }, __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      button: true,
      className: "".concat(bIsActive ? 'active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(_ListItemText__WEBPACK_IMPORTED_MODULE_9__["default"], {
      primary: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })));
  }))));
};

function NavBar(_ref4) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  console.log(router);
  console.log('a');
  var navBarItems = _config__WEBPACK_IMPORTED_MODULE_10__["default"].navbar.map(function (_ref5) {
    var path = _ref5.path,
        component = _ref5.component,
        icon = _ref5.icon,
        label = _ref5.label,
        rbacRule = _ref5.rbacRule,
        children = _ref5.children;
    var navbarItem = {
      bIsActive: path === router.pathname,
      component: component,
      icon: icon,
      label: label,
      path: path,
      rbacRule: rbacRule
    };

    if (children) {
      navbarItem['navBarItemChildren'] = children.map(function (_ref6) {
        var path = _ref6.path,
            label = _ref6.label,
            component = _ref6.component,
            rbacRule = _ref6.rbacRule;
        var navBarChildItem = {
          path: path,
          label: label,
          component: component,
          rbacRule: rbacRule
        };

        if (path === router.pathname) {
          navbarItem['bIsActive'] = true;
          navBarChildItem['bIsActive'] = true;
        }

        return navBarChildItem;
      });
    }

    return navbarItem;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx(_DrawerContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "permanent",
    anchor: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, (navBarItems || []).map(function (navBarItem, index) {
    var label = navBarItem.label,
        icon = navBarItem.icon,
        bIsActive = navBarItem.bIsActive,
        path = navBarItem.path,
        navBarItemChildren = navBarItem.navBarItemChildren;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: "navbar-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
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
        lineNumber: 132
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
        lineNumber: 141
      },
      __self: this
    })));
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.5d785e2b1aaa903b90f3.hot-update.js.map