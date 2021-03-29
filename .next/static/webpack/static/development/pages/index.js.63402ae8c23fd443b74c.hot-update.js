webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Transaction.js":
/*!***********************************!*\
  !*** ./components/Transaction.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionList; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react_table_6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table-6 */ "./node_modules/react-table-6/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\furso\\Desktop\\dfx_stats\\components\\Transaction.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function TransactionList(props) {
  var _this = this;

  function From(props) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://bscscan.com/address/".concat(props.from),
      activeClassName: "active",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, props.from))));
  }

  function Timesatmp(props) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }, new Date(+props.timeStamp * 1000).toString())));
  }

  function GasUsed(props) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("div", {
      style: {
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, (props.gasUsed * 0.00000001).toFixed(8))));
  }

  var columns = [{
    Header: 'Покупатель',
    Accessor: 'From',
    Cell: function Cell(row) {
      return __jsx(From, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.original, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 63
        }
      }));
    }
  }, {
    Header: 'Время покупки',
    Accessor: 'Timestamp',
    Cell: function Cell(row) {
      return __jsx(Timesatmp, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.original, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 71
        }
      }));
    }
  }, {
    Header: 'Комиссия',
    Accessor: 'gasUsed',
    Cell: function Cell(row) {
      return __jsx(GasUsed, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.original, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 64
        }
      }));
    }
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_table_6__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: props.data,
    columns: columns,
    showPagination: false,
    defaultPageSize: props.data.length,
    resizable: false,
    className: "comp-table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }));
}
_c = TransactionList;

var _c;

$RefreshReg$(_c, "TransactionList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbIlRyYW5zYWN0aW9uTGlzdCIsInByb3BzIiwiRnJvbSIsImZyb20iLCJUaW1lc2F0bXAiLCJEYXRlIiwidGltZVN0YW1wIiwidG9TdHJpbmciLCJHYXNVc2VkIiwidGV4dEFsaWduIiwiZ2FzVXNlZCIsInRvRml4ZWQiLCJjb2x1bW5zIiwiSGVhZGVyIiwiQWNjZXNzb3IiLCJDZWxsIiwicm93Iiwib3JpZ2luYWwiLCJkYXRhIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQUE7O0FBRTNDLFdBQVNDLElBQVQsQ0FBY0QsS0FBZCxFQUFxQjtBQUVqQixXQUNJLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBRyxVQUFJLHdDQUFpQ0EsS0FBSyxDQUFDRSxJQUF2QyxDQUFQO0FBQXNELHFCQUFlLEVBQUMsUUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnRkYsS0FBSyxDQUFDRSxJQUF0RixDQURKLENBREosQ0FESixDQURKO0FBVUg7O0FBRUQsV0FBU0MsU0FBVCxDQUFtQkgsS0FBbkIsRUFBMEI7QUFFdEIsV0FDSSxtRUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNNLElBQUlJLElBQUosQ0FBUyxDQUFDSixLQUFLLENBQUNLLFNBQVAsR0FBaUIsSUFBMUIsQ0FBRCxDQUFrQ0MsUUFBbEMsRUFETCxDQURKLENBREosQ0FESjtBQVNIOztBQUVELFdBQVNDLE9BQVQsQ0FBaUJQLEtBQWpCLEVBQXdCO0FBRXBCLFdBQ0ksbUVBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssV0FBSyxFQUFFO0FBQUNRLGlCQUFTLEVBQUU7QUFBWixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSyxDQUFDUixLQUFLLENBQUNTLE9BQU4sR0FBZ0IsVUFBakIsRUFBNkJDLE9BQTdCLENBQXFDLENBQXJDLENBREwsQ0FESixDQURKLENBREo7QUFVSDs7QUFFRCxNQUFNQyxPQUFPLEdBQUcsQ0FDWjtBQUFDQyxVQUFNLEVBQUUsWUFBVDtBQUF1QkMsWUFBUSxFQUFFLE1BQWpDO0FBQXlDQyxRQUFJLEVBQUUsY0FBQUMsR0FBRztBQUFBLGFBQUksTUFBQyxJQUFELHlGQUFVQSxHQUFHLENBQUNDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFKO0FBQUE7QUFBbEQsR0FEWSxFQUVaO0FBQUNKLFVBQU0sRUFBRSxlQUFUO0FBQTBCQyxZQUFRLEVBQUUsV0FBcEM7QUFBaURDLFFBQUksRUFBRSxjQUFBQyxHQUFHO0FBQUEsYUFBSSxNQUFDLFNBQUQseUZBQWVBLEdBQUcsQ0FBQ0MsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFKO0FBQUE7QUFBMUQsR0FGWSxFQUdaO0FBQUNKLFVBQU0sRUFBRSxVQUFUO0FBQXFCQyxZQUFRLEVBQUUsU0FBL0I7QUFBMENDLFFBQUksRUFBRSxjQUFBQyxHQUFHO0FBQUEsYUFBSSxNQUFDLE9BQUQseUZBQWFBLEdBQUcsQ0FBQ0MsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFKO0FBQUE7QUFBbkQsR0FIWSxDQUFoQjtBQU9BLFNBQ0ksbUVBQ0ksTUFBQyxxREFBRDtBQUNJLFFBQUksRUFBRWhCLEtBQUssQ0FBQ2lCLElBRGhCO0FBRUksV0FBTyxFQUFFTixPQUZiO0FBR0ksa0JBQWMsRUFBRSxLQUhwQjtBQUlJLG1CQUFlLEVBQUVYLEtBQUssQ0FBQ2lCLElBQU4sQ0FBV0MsTUFKaEM7QUFLSSxhQUFTLEVBQUUsS0FMZjtBQU1JLGFBQVMsRUFBQyxZQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBWUg7S0E5RHVCbkIsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjM0MDJhZThjMjNmZDQ0M2I3NGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdFRhYmxlIGZyb20gJ3JlYWN0LXRhYmxlLTYnXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zYWN0aW9uTGlzdChwcm9wcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIEZyb20ocHJvcHMpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9ic2NzY2FuLmNvbS9hZGRyZXNzLyR7cHJvcHMuZnJvbX1gfSBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj57cHJvcHMuZnJvbX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBUaW1lc2F0bXAocHJvcHMpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKCtwcm9wcy50aW1lU3RhbXAqMTAwMCkpLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdhc1VzZWQocHJvcHMpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvcHMuZ2FzVXNlZCAqIDAuMDAwMDAwMDEpLnRvRml4ZWQoOCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgIHtIZWFkZXI6ICfQn9C+0LrRg9C/0LDRgtC10LvRjCcsIEFjY2Vzc29yOiAnRnJvbScsIENlbGw6IHJvdyA9PiA8RnJvbSB7Li4ucm93Lm9yaWdpbmFsfS8+fSxcclxuICAgICAgICB7SGVhZGVyOiAn0JLRgNC10LzRjyDQv9C+0LrRg9C/0LrQuCcsIEFjY2Vzc29yOiAnVGltZXN0YW1wJywgQ2VsbDogcm93ID0+IDxUaW1lc2F0bXAgey4uLnJvdy5vcmlnaW5hbH0vPn0sXHJcbiAgICAgICAge0hlYWRlcjogJ9Ca0L7QvNC40YHRgdC40Y8nLCBBY2Nlc3NvcjogJ2dhc1VzZWQnLCBDZWxsOiByb3cgPT4gPEdhc1VzZWQgey4uLnJvdy5vcmlnaW5hbH0vPn0sXHJcblxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSZWFjdFRhYmxlXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhfVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgIHNob3dQYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRQYWdlU2l6ZT17cHJvcHMuZGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICByZXNpemFibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcC10YWJsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=