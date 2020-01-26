module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawer */ "./components/Nav/Drawer.jsx");
/* harmony import */ var _DrawerContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DrawerContainer */ "./components/Nav/DrawerContainer.jsx");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListItem */ "./components/Nav/ListItem.jsx");
/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListItemIcon */ "./components/Nav/ListItemIcon.jsx");
/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListItemText */ "./components/Nav/ListItemText.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/usr/src/pvocrm_frontend/components/Nav/Bar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const Icons = {
  ContactMailIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ContactMail"],
  DashboardIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Dashboard"],
  LayersIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Layers"],
  ListAltIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ListAlt"],
  PersonIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Person"],
  SearchIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Search"]
};

const SingleNavBarItem = ({
  bIsActive,
  icon,
  label,
  path
}) => {
  const Icon = Icons[icon];
  return __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: true,
    className: `${bIsActive ? 'active' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })), __jsx(_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    primary: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }));
};

const DropDownNavBarItem = ({
  bIsActive,
  icon,
  label,
  navBarItemChildren
}) => {
  const {
    0: bIsOpen,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const Icon = Icons[icon];
  return __jsx("div", {
    onClick: () => setOpen(!bIsOpen),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: true,
    className: `${bIsActive ? 'active' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  })), __jsx(_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    primary: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx(_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, bIsActive || bIsOpen ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ExpandLess"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ExpandMore"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    in: bIsActive || bIsOpen,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    component: "div",
    disablePadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, navBarItemChildren.map(({
    label,
    bIsActive,
    path
  }, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: `navbar-item-collapsible-${index}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: true,
    className: `${bIsActive ? 'active' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    primary: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })))))));
};

function NavBar({}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const navBarItems = _config__WEBPACK_IMPORTED_MODULE_9__["default"].navbar.map(({
    path,
    component,
    icon,
    label,
    rbacRule,
    children
  }) => {
    const navbarItem = {
      bIsActive: path === router.pathname,
      component,
      icon,
      label,
      path,
      rbacRule
    };

    if (children) {
      navbarItem['navBarItemChildren'] = children.map(({
        path,
        label,
        component,
        rbacRule
      }) => {
        const navBarChildItem = {
          path,
          label,
          component,
          rbacRule
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(_DrawerContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "permanent",
    anchor: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, (navBarItems || []).map((navBarItem, index) => {
    const {
      label,
      icon,
      bIsActive,
      path,
      navBarItemChildren
    } = navBarItem;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: `navbar-item-${index}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, navBarItemChildren ? __jsx(DropDownNavBarItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      bIsActive,
      icon,
      label,
      navBarItemChildren
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    })) : __jsx(SingleNavBarItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      bIsActive,
      icon,
      label,
      path
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })));
  })))));
}

/***/ }),

/***/ "./components/Nav/Drawer.jsx":
/*!***********************************!*\
  !*** ./components/Nav/Drawer.jsx ***!
  \***********************************/
/*! exports provided: NavDrawer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDrawer", function() { return NavDrawer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);




const NavDrawer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"])`
  .MuiPaper-root {
    width: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.layout.navbar.width};
    background-color: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.background.default} !important;
    background: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.background.default} !important;
    border-right: 3px solid #000;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (NavDrawer);

/***/ }),

/***/ "./components/Nav/DrawerContainer.jsx":
/*!********************************************!*\
  !*** ./components/Nav/DrawerContainer.jsx ***!
  \********************************************/
/*! exports provided: NavDrawerContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDrawerContainer", function() { return NavDrawerContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config/index.js");


const NavDrawerContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav`
  @media (min-width: 600px) {
    width: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.layout.navbar.width};
    flex-shrink: 0;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (NavDrawerContainer);

/***/ }),

/***/ "./components/Nav/ListItem.jsx":
/*!*************************************!*\
  !*** ./components/Nav/ListItem.jsx ***!
  \*************************************/
/*! exports provided: NavListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListItem", function() { return NavListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItemIcon */ "./components/Nav/ListItemIcon.jsx");
/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItemText */ "./components/Nav/ListItemText.jsx");






const NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"])`
  border-top: 1px solid ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.border.default} !important;
  border-bottom: 1px solid ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.border.default} !important;
  background-color: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.background.default} !important;
  transition: all 0.5s ease-in-out !important;
  &:hover,
  &.active {
    background-color: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.background.hover} !important;
    border-color: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.border.hover} !important;
  }
  ,
  &:hover ${_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__["default"]}, &.active ${_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__["default"]} {
    color: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.text.hover} !important;
  }
  ,
  &:hover ${_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"]}, &.active ${_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"]} {
    color: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.text.hover} !important;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (NavListItem);

/***/ }),

/***/ "./components/Nav/ListItemIcon.jsx":
/*!*****************************************!*\
  !*** ./components/Nav/ListItemIcon.jsx ***!
  \*****************************************/
/*! exports provided: NavListItemIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListItemIcon", function() { return NavListItemIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);



const NavListItemIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"])`
  color: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.text.default} !important;
  transition: all 0.5s ease-in-out;
`;
/* harmony default export */ __webpack_exports__["default"] = (NavListItemIcon);

/***/ }),

/***/ "./components/Nav/ListItemText.jsx":
/*!*****************************************!*\
  !*** ./components/Nav/ListItemText.jsx ***!
  \*****************************************/
/*! exports provided: NavListItemText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListItemText", function() { return NavListItemText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);



const NavListItemText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"])`
  color: ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].styles.colors.navbar.text.default} !important;
  transition: all 0.5s ease-in-out;
`;
/* harmony default export */ __webpack_exports__["default"] = (NavListItemText);

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./config/navbar.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./config/styles.js");
//import app from './app';
 //import routes from './routes';


/* harmony default export */ __webpack_exports__["default"] = ({
  //app,
  navbar: _navbar__WEBPACK_IMPORTED_MODULE_0__["default"],
  //routes,
  styles: _styles__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./config/navbar.js":
/*!**************************!*\
  !*** ./config/navbar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./consts/index.js");

/* harmony default export */ __webpack_exports__["default"] = ([{
  path: _consts__WEBPACK_IMPORTED_MODULE_0__["PATH_TO_DASHBOARD"],
  icon: 'DashboardIcon',
  label: 'Dashboard',
  rbacRule: _consts__WEBPACK_IMPORTED_MODULE_0__["STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT"]
}, {
  path: null,
  icon: 'ListAltIcon',
  label: 'Contracts',
  children: [{
    label: 'Add New',
    path: _consts__WEBPACK_IMPORTED_MODULE_0__["PATH_TO_ADD_NEW_CONTRACT"],
    rbacRule: _consts__WEBPACK_IMPORTED_MODULE_0__["STATIC_RBAC_RULE_MAILS_PAGE_VISIT"]
  }, {
    label: 'Search',
    path: _consts__WEBPACK_IMPORTED_MODULE_0__["PATH_TO_SEARCH_CONTRACTS"],
    rbacRule: _consts__WEBPACK_IMPORTED_MODULE_0__["STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT"]
  }]
}, {
  path: null,
  icon: 'ContactMailIcon',
  label: 'Mails',
  rbacRule: null,
  children: [
  /*
  {
    label: 'Search',
    path: PATH_TO_SEARCH_MAILS,
    rbacRule: null
  },*/
  {
    label: 'Add New',
    path: _consts__WEBPACK_IMPORTED_MODULE_0__["PATH_TO_ADD_NEW_MAIL"],
    rbacRule: null
  }, {
    label: 'Notify Clients',
    path: _consts__WEBPACK_IMPORTED_MODULE_0__["PATH_TO_MAIL_NOTIFICATIONS"],
    rbacRule: null
  }]
}, {
  path: null,
  icon: 'PersonIcon',
  label: 'User',
  rbacRule: null,
  children: [
  /*
  {
    label: 'Settings',
    path: PATH_TO_USER_SETTINGS,
    component: 'Settings',
    rbacRule: null
  },*/
  {
    label: 'Logout',
    path: _consts__WEBPACK_IMPORTED_MODULE_0__["PATH_TO_LOGOUT"],
    component: 'Logout',
    rbacRule: null
  }]
}]);

/***/ }),

/***/ "./config/styles.js":
/*!**************************!*\
  !*** ./config/styles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    primary: '#012f6b',
    secondary: '#082431',
    tertiary: '',
    dark: '#333',
    backgroundHighlight: '#F3F8FA',
    navbar: {
      text: {
        default: '#aaa',
        hover: '#fff'
      },
      background: {
        default: '#082431',
        hover: '#2b617a'
        /*'#7a2b3f'*/

      },
      border: {
        default: '#0d3346',
        hover: '#6193AA'
        /*'#aa6172'*/

      }
    },
    bootstrapAlert: {
      warning: {
        background: '#fff3cd',
        text: '#856504',
        border: '#856504'
      },
      error: {
        background: '#f8d7da',
        text: '#82333b',
        border: '#82333b'
      },
      info: {
        background: '#cce5ff',
        text: '#0b498b',
        border: '#0b498b'
      },
      success: {
        background: '#d4edda',
        text: '#4a8057',
        border: '#4a8057'
      }
    },
    snackbar: {
      success: '#42a047',
      error: '#d42f2f'
    }
  },
  layout: {
    navbar: {
      width: '250px'
    },
    dataTables: {
      cellHeight: '50px',
      cellWidth: {
        xs: '80px',
        s: '200px',
        m: '300px',
        l: '600px',
        xl: '1000px'
      }
    }
  }
});

/***/ }),

/***/ "./consts/dataTable.js":
/*!*****************************!*\
  !*** ./consts/dataTable.js ***!
  \*****************************/
/*! exports provided: FIELD_TYPE_STRING, FIELD_TYPE_DATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_STRING", function() { return FIELD_TYPE_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_DATE", function() { return FIELD_TYPE_DATE; });
const FIELD_TYPE_STRING = 'FIELD_TYPE_STRING';
const FIELD_TYPE_DATE = 'FIELD_TYPE_DATE';

/***/ }),

/***/ "./consts/index.js":
/*!*************************!*\
  !*** ./consts/index.js ***!
  \*************************/
/*! exports provided: FIELD_TYPE_STRING, FIELD_TYPE_DATE, PATH_TO_ADD_NEW_CONTRACT, PATH_TO_ADD_NEW_MAIL, PATH_TO_DASHBOARD, PATH_TO_DATABASE_ADDRESSES, PATH_TO_LOGIN, PATH_TO_LOGOUT, PATH_TO_SEARCH_CONTRACTS, PATH_TO_SEARCH_INSPECTIONS, PATH_TO_SEARCH_INVOICES, PATH_TO_SEARCH_MAILS, PATH_TO_USER_SETTINGS, PATH_TO_MAIL_NOTIFICATIONS, STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT, STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH, STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW, STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT, STATIC_RBAC_RULE_MAILS_PAGE_VISIT, STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT, STATIC_RBAC_RULE_INVOICES_PAGE_VISIT, STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataTable */ "./consts/dataTable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_STRING", function() { return _dataTable__WEBPACK_IMPORTED_MODULE_0__["FIELD_TYPE_STRING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_DATE", function() { return _dataTable__WEBPACK_IMPORTED_MODULE_0__["FIELD_TYPE_DATE"]; });

/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paths */ "./consts/paths.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_ADD_NEW_CONTRACT", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_ADD_NEW_CONTRACT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_ADD_NEW_MAIL", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_ADD_NEW_MAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_DASHBOARD", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_DASHBOARD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_DATABASE_ADDRESSES", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_DATABASE_ADDRESSES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_LOGIN", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_LOGOUT", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_SEARCH_CONTRACTS", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_SEARCH_CONTRACTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_SEARCH_INSPECTIONS", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_SEARCH_INSPECTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_SEARCH_INVOICES", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_SEARCH_INVOICES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_SEARCH_MAILS", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_SEARCH_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_USER_SETTINGS", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_USER_SETTINGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_MAIL_NOTIFICATIONS", function() { return _paths__WEBPACK_IMPORTED_MODULE_1__["PATH_TO_MAIL_NOTIFICATIONS"]; });

/* harmony import */ var _rbacRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rbacRules */ "./consts/rbacRules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT", function() { return _rbacRules__WEBPACK_IMPORTED_MODULE_2__["STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH", function() { return _rbacRules__WEBPACK_IMPORTED_MODULE_2__["STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW", function() { return _rbacRules__WEBPACK_IMPORTED_MODULE_2__["STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT", function() { return _rbacRules__WEBPACK_IMPORTED_MODULE_2__["STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_MAILS_PAGE_VISIT", function() { return _rbacRules__WEBPACK_IMPORTED_MODULE_2__["STATIC_RBAC_RULE_MAILS_PAGE_VISIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT", function() { return _rbacRules__WEBPACK_IMPORTED_MODULE_2__["STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_INVOICES_PAGE_VISIT", function() { return _rbacRules__WEBPACK_IMPORTED_MODULE_2__["STATIC_RBAC_RULE_INVOICES_PAGE_VISIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT", function() { return _rbacRules__WEBPACK_IMPORTED_MODULE_2__["STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT"]; });





/***/ }),

/***/ "./consts/paths.js":
/*!*************************!*\
  !*** ./consts/paths.js ***!
  \*************************/
/*! exports provided: PATH_TO_ADD_NEW_CONTRACT, PATH_TO_ADD_NEW_MAIL, PATH_TO_DASHBOARD, PATH_TO_DATABASE_ADDRESSES, PATH_TO_LOGIN, PATH_TO_LOGOUT, PATH_TO_SEARCH_CONTRACTS, PATH_TO_SEARCH_INSPECTIONS, PATH_TO_SEARCH_INVOICES, PATH_TO_SEARCH_MAILS, PATH_TO_USER_SETTINGS, PATH_TO_MAIL_NOTIFICATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_ADD_NEW_CONTRACT", function() { return PATH_TO_ADD_NEW_CONTRACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_ADD_NEW_MAIL", function() { return PATH_TO_ADD_NEW_MAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_DASHBOARD", function() { return PATH_TO_DASHBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_DATABASE_ADDRESSES", function() { return PATH_TO_DATABASE_ADDRESSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_LOGIN", function() { return PATH_TO_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_LOGOUT", function() { return PATH_TO_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_SEARCH_CONTRACTS", function() { return PATH_TO_SEARCH_CONTRACTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_SEARCH_INSPECTIONS", function() { return PATH_TO_SEARCH_INSPECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_SEARCH_INVOICES", function() { return PATH_TO_SEARCH_INVOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_SEARCH_MAILS", function() { return PATH_TO_SEARCH_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_USER_SETTINGS", function() { return PATH_TO_USER_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_TO_MAIL_NOTIFICATIONS", function() { return PATH_TO_MAIL_NOTIFICATIONS; });
const PATH_TO_ADD_NEW_CONTRACT = '/contracts/add';
const PATH_TO_ADD_NEW_MAIL = '/mails/add';
const PATH_TO_DASHBOARD = '/dashboard';
const PATH_TO_DATABASE_ADDRESSES = '/database/addresses';
const PATH_TO_LOGIN = '/login';
const PATH_TO_LOGOUT = '/logout';
const PATH_TO_SEARCH_CONTRACTS = '/contracts/search';
const PATH_TO_SEARCH_INSPECTIONS = '/search/inspections';
const PATH_TO_SEARCH_INVOICES = '/search/invoices';
const PATH_TO_SEARCH_MAILS = '/mails/search';
const PATH_TO_USER_SETTINGS = '/user/settings';
const PATH_TO_MAIL_NOTIFICATIONS = '/mails/notifications';

/***/ }),

/***/ "./consts/rbacRules/clients.js":
/*!*************************************!*\
  !*** ./consts/rbacRules/clients.js ***!
  \*************************************/
/*! exports provided: STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT", function() { return STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT; });
const STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT = 'clients-quick-search-page:visit';

/***/ }),

/***/ "./consts/rbacRules/contracts.js":
/*!***************************************!*\
  !*** ./consts/rbacRules/contracts.js ***!
  \***************************************/
/*! exports provided: STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT, STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH, STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT", function() { return STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH", function() { return STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW", function() { return STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW; });
const STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT = 'contracts-page:visit';
const STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH = 'contracts-action:search';
const STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW = 'contracts-action:addnew';

/***/ }),

/***/ "./consts/rbacRules/dashboard.js":
/*!***************************************!*\
  !*** ./consts/rbacRules/dashboard.js ***!
  \***************************************/
/*! exports provided: STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT", function() { return STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT; });
const STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT = 'dashboard-page:visit';

/***/ }),

/***/ "./consts/rbacRules/index.js":
/*!***********************************!*\
  !*** ./consts/rbacRules/index.js ***!
  \***********************************/
/*! exports provided: STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT, STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH, STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW, STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT, STATIC_RBAC_RULE_MAILS_PAGE_VISIT, STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT, STATIC_RBAC_RULE_INVOICES_PAGE_VISIT, STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contracts */ "./consts/rbacRules/contracts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW"]; });

/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard */ "./consts/rbacRules/dashboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT", function() { return _dashboard__WEBPACK_IMPORTED_MODULE_1__["STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT"]; });

/* harmony import */ var _mails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mails */ "./consts/rbacRules/mails.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_MAILS_PAGE_VISIT", function() { return _mails__WEBPACK_IMPORTED_MODULE_2__["STATIC_RBAC_RULE_MAILS_PAGE_VISIT"]; });

/* harmony import */ var _inspections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspections */ "./consts/rbacRules/inspections.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT", function() { return _inspections__WEBPACK_IMPORTED_MODULE_3__["STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT"]; });

/* harmony import */ var _invoices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoices */ "./consts/rbacRules/invoices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_INVOICES_PAGE_VISIT", function() { return _invoices__WEBPACK_IMPORTED_MODULE_4__["STATIC_RBAC_RULE_INVOICES_PAGE_VISIT"]; });

/* harmony import */ var _clients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients */ "./consts/rbacRules/clients.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT", function() { return _clients__WEBPACK_IMPORTED_MODULE_5__["STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT"]; });








/***/ }),

/***/ "./consts/rbacRules/inspections.js":
/*!*****************************************!*\
  !*** ./consts/rbacRules/inspections.js ***!
  \*****************************************/
/*! exports provided: STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT", function() { return STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT; });
const STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT = 'inspections-page:visit';

/***/ }),

/***/ "./consts/rbacRules/invoices.js":
/*!**************************************!*\
  !*** ./consts/rbacRules/invoices.js ***!
  \**************************************/
/*! exports provided: STATIC_RBAC_RULE_INVOICES_PAGE_VISIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_INVOICES_PAGE_VISIT", function() { return STATIC_RBAC_RULE_INVOICES_PAGE_VISIT; });
const STATIC_RBAC_RULE_INVOICES_PAGE_VISIT = 'invoices-page:visit';

/***/ }),

/***/ "./consts/rbacRules/mails.js":
/*!***********************************!*\
  !*** ./consts/rbacRules/mails.js ***!
  \***********************************/
/*! exports provided: STATIC_RBAC_RULE_MAILS_PAGE_VISIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_RBAC_RULE_MAILS_PAGE_VISIT", function() { return STATIC_RBAC_RULE_MAILS_PAGE_VISIT; });
const STATIC_RBAC_RULE_MAILS_PAGE_VISIT = 'mails-page:visit';

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Nav_Bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Bar */ "./components/Nav/Bar.jsx");
var _jsxFileName = "/usr/src/pvocrm_frontend/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_components_Nav_Bar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    position: "relative",
    flexGrow: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
    smUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "5em",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    position: "relative",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "a")));
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/src/pvocrm_frontend/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map