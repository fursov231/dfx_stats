webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DFX; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_SmallCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SmallCard */ "./components/SmallCard.js");
/* harmony import */ var _components_XWideCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/XWideCard */ "./components/XWideCard.js");
/* harmony import */ var react_spinners_BeatLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spinners/BeatLoader */ "./node_modules/react-spinners/BeatLoader.js");
/* harmony import */ var react_spinners_BeatLoader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spinners_BeatLoader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Transaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Transaction */ "./components/Transaction.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\furso\\Desktop\\dfx_stats\\pages\\index.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // Small detail cards

 // 3/3 display cards

 // Loading animation





var fetcher = function fetcher(url) {
  return unfetch__WEBPACK_IMPORTED_MODULE_9___default()(url).then(function (r) {
    return r.json();
  });
};

function DFX() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])('/api/dfx/info', fetcher),
      data_info = _useSWR.data;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])('/api/dfx/transaction', fetcher),
      data_transaction = _useSWR2.data;

  var _useSWR3 = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])("/api/dfx/chart", fetcher),
      data_candles = _useSWR3.data;

  return __jsx("div", {
    className: "jsx-1535696475" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1535696475",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Stats | DFX")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1535696475",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-1535696475" + " " + "data-retrieved",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-1535696475" + " " + "status-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  }), "\u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u0442\u0441\u044F \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438")), __jsx("div", {
    className: "jsx-1535696475",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_components_SmallCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "\u0426\u0435\u043D\u0430 DFX \u0442\u043E\u043A\u0435\u043D\u0430",
    content: data_info ? "$" + data_info.current_price : __jsx(CustomLoader, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 98
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(_components_SmallCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "\u0420\u044B\u043D\u043E\u0447\u043D\u0430\u044F \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",
    content: data_info ? "$" + data_info.market_cap.toLocaleString() : __jsx(CustomLoader, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 121
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(_components_SmallCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "\u0421\u0443\u0442\u043E\u0447\u043D\u044B\u0439 \u043E\u0431\u043E\u0440\u043E\u0442",
    content: data_info ? "$" + parseInt(data_info.total_volume).toLocaleString() : __jsx(CustomLoader, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 124
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1535696475",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_components_XWideCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 10 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, data_candles ? __jsx(_components_Transaction__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data_transaction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }) : __jsx(CustomLoader, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 75
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1598212861",
    __self: this
  }, ".centerize{width:100%;height:100%;text-align:center;}.centerize>div{-webkit-transform:translateY(200px);-ms-transform:translateY(200px);transform:translateY(200px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnVyc29cXERlc2t0b3BcXGRmeF9zdGF0c1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDeUIsQUFHb0IsQUFLaUIsV0FKaEIsWUFDTSxrQkFDcEIsdURBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxmdXJzb1xcRGVza3RvcFxcZGZ4X3N0YXRzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcblxyXG5pbXBvcnQgU21hbGxDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU21hbGxDYXJkJzsgLy8gU21hbGwgZGV0YWlsIGNhcmRzXHJcbmltcG9ydCBYV2lkZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9YV2lkZUNhcmQnOyAvLyAzLzMgZGlzcGxheSBjYXJkc1xyXG5cclxuaW1wb3J0IEJlYXRMb2FkZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJzL0JlYXRMb2FkZXJcIjsgLy8gTG9hZGluZyBhbmltYXRpb25cclxuaW1wb3J0IFRyYW5zYWN0aW9uTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uJztcclxuXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ3VuZmV0Y2gnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERGWCgpIHtcclxuICBjb25zdCB7IGRhdGE6IGRhdGFfaW5mbyB9ID0gdXNlU1dSKCcvYXBpL2RmeC9pbmZvJywgZmV0Y2hlcik7XHJcbiAgY29uc3QgeyBkYXRhOiBkYXRhX3RyYW5zYWN0aW9uIH0gPSB1c2VTV1IoJy9hcGkvZGZ4L3RyYW5zYWN0aW9uJywgZmV0Y2hlcilcclxuICBjb25zdCB7IGRhdGE6IGRhdGFfY2FuZGxlcyB9ID0gdXNlU1dSKFwiL2FwaS9kZngvY2hhcnRcIiwgZmV0Y2hlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U3RhdHMgfCBERlg8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGEtcmV0cmlldmVkXCI+PHNwYW4gY2xhc3NOYW1lPVwic3RhdHVzLWxpZ2h0XCI+PC9zcGFuPtCU0LDQvdC90YvQtSDQt9Cw0LPRgNGD0LbQsNGO0YLRgdGPINCyINGA0LXQsNC70YzQvdC+0Lwg0LLRgNC10LzQtdC90Lg8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTbWFsbENhcmQgbmFtZT1cItCm0LXQvdCwIERGWCDRgtC+0LrQtdC90LBcIiBjb250ZW50PXtkYXRhX2luZm8gPyBcIiRcIiArIGRhdGFfaW5mby5jdXJyZW50X3ByaWNlIDogPEN1c3RvbUxvYWRlciAvPn0gLz5cclxuICAgICAgICAgIDxTbWFsbENhcmQgbmFtZT1cItCg0YvQvdC+0YfQvdCw0Y8g0LrQsNC/0LjRgtCw0LvQuNC30LDRhtC40Y9cIiBjb250ZW50PXtkYXRhX2luZm8gPyBcIiRcIiArIChkYXRhX2luZm8ubWFya2V0X2NhcCkudG9Mb2NhbGVTdHJpbmcoKSA6IDxDdXN0b21Mb2FkZXIgLz59IC8+XHJcbiAgICAgICAgICA8U21hbGxDYXJkIG5hbWU9XCLQodGD0YLQvtGH0L3Ri9C5INC+0LHQvtGA0L7RglwiIGNvbnRlbnQ9e2RhdGFfaW5mbyA/IFwiJFwiICsgcGFyc2VJbnQoZGF0YV9pbmZvLnRvdGFsX3ZvbHVtZSkudG9Mb2NhbGVTdHJpbmcoKSA6IDxDdXN0b21Mb2FkZXIgLz59Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFhXaWRlQ2FyZCBuYW1lPVwi0J/QvtGB0LvQtdC00L3QuNC1IDEwINGC0YDQsNC90LfQsNC60YbQuNC5XCI+XHJcbiAgICAgICAgICAgIHtkYXRhX2NhbmRsZXMgPyA8VHJhbnNhY3Rpb25MaXN0IGRhdGE9e2RhdGFfdHJhbnNhY3Rpb259IC8+IDogPEN1c3RvbUxvYWRlciAvPn1cclxuICAgICAgICAgIDwvWFdpZGVDYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgLmNlbnRlcml6ZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuY2VudGVyaXplID4gZGl2IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmRhdGEtcmV0cmlldmVkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU1cHgpO1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZWFmMztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMzVweCByZ2JhKDEyNywxNTAsMTc0LC4xMjUpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdGF0dXMtbGlnaHQge1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTkwLCAwKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMTkwLCAwLCAxKTtcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlZ3JlZW4gMnMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAuZGF0YS1yZXRyaWV2ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIHB1bHNlZ3JlZW4ge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMTkwLCAwLCAwLjcpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgNzAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiYSgwLCAxOTAsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDE5MCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vIExvYWRpbmcgYW5pbWF0aW9uXHJcbmZ1bmN0aW9uIEN1c3RvbUxvYWRlcigpIHtcclxuICByZXR1cm4gPEJlYXRMb2FkZXJcclxuICAgIHNpemU9ezEwfVxyXG4gICAgY29sb3I9e1wiI0YwMTcxNlwifVxyXG4gICAgbG9hZGluZz17dHJ1ZX1cclxuICAvPlxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\furso\\\\Desktop\\\\dfx_stats\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3357036015",
    __self: this
  }, ".data-retrieved.jsx-1535696475{display:inline-block;width:calc(100% - 55px);margin-block-end:0px;background-color:#fff;height:40px;border-radius:5px;border:1px solid #e7eaf3;box-shadow:0 0 35px rgba(127,150,174,.125);line-height:40px;}.status-light.jsx-1535696475{height:8px;width:8px;display:inline-block;border-radius:50%;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);vertical-align:middle;margin-right:5px;margin-top:-2px;background-color:rgb(0,190,0);box-shadow:0 0 0 0 rgba(0,190,0,1);-webkit-animation:pulsegreen-jsx-1535696475 2s infinite;animation:pulsegreen-jsx-1535696475 2s infinite;}@media screen and (max-width:600px){.data-retrieved.jsx-1535696475{width:calc(100% - 40px);}}@-webkit-keyframes pulsegreen-jsx-1535696475{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,190,0,0.7);}70%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);box-shadow:0 0 0 5px rgba(0,190,0,0);}100%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,190,0,0);}}@keyframes pulsegreen-jsx-1535696475{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,190,0,0.7);}70%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);box-shadow:0 0 0 5px rgba(0,190,0,0);}100%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,190,0,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnVyc29cXERlc2t0b3BcXGRmeF9zdGF0c1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ea0IsQUFHOEIsQUFXVixBQWNlLEFBS0YsQUFLSCxBQUtHLFdBNUJkLFVBWGMsQUFZSCxHQWFyQixrQkFaa0IsR0FaRyxlQWFGLE1BWkcsR0FpQ29CLFNBTEEsQUFVRixVQXJDNUIsWUFDTSxNQWdDbEIsT0FLQSxFQVZBLEdBMUJ5QixXQVVILGNBVHFCLFFBVTFCLGlCQUNELGdCQUNnQixFQVhmLGlCQUNuQixXQVd3QyxtQ0FDTCx3R0FDbkMiLCJmaWxlIjoiQzpcXFVzZXJzXFxmdXJzb1xcRGVza3RvcFxcZGZ4X3N0YXRzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcblxyXG5pbXBvcnQgU21hbGxDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU21hbGxDYXJkJzsgLy8gU21hbGwgZGV0YWlsIGNhcmRzXHJcbmltcG9ydCBYV2lkZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9YV2lkZUNhcmQnOyAvLyAzLzMgZGlzcGxheSBjYXJkc1xyXG5cclxuaW1wb3J0IEJlYXRMb2FkZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJzL0JlYXRMb2FkZXJcIjsgLy8gTG9hZGluZyBhbmltYXRpb25cclxuaW1wb3J0IFRyYW5zYWN0aW9uTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uJztcclxuXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ3VuZmV0Y2gnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERGWCgpIHtcclxuICBjb25zdCB7IGRhdGE6IGRhdGFfaW5mbyB9ID0gdXNlU1dSKCcvYXBpL2RmeC9pbmZvJywgZmV0Y2hlcik7XHJcbiAgY29uc3QgeyBkYXRhOiBkYXRhX3RyYW5zYWN0aW9uIH0gPSB1c2VTV1IoJy9hcGkvZGZ4L3RyYW5zYWN0aW9uJywgZmV0Y2hlcilcclxuICBjb25zdCB7IGRhdGE6IGRhdGFfY2FuZGxlcyB9ID0gdXNlU1dSKFwiL2FwaS9kZngvY2hhcnRcIiwgZmV0Y2hlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U3RhdHMgfCBERlg8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGEtcmV0cmlldmVkXCI+PHNwYW4gY2xhc3NOYW1lPVwic3RhdHVzLWxpZ2h0XCI+PC9zcGFuPtCU0LDQvdC90YvQtSDQt9Cw0LPRgNGD0LbQsNGO0YLRgdGPINCyINGA0LXQsNC70YzQvdC+0Lwg0LLRgNC10LzQtdC90Lg8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTbWFsbENhcmQgbmFtZT1cItCm0LXQvdCwIERGWCDRgtC+0LrQtdC90LBcIiBjb250ZW50PXtkYXRhX2luZm8gPyBcIiRcIiArIGRhdGFfaW5mby5jdXJyZW50X3ByaWNlIDogPEN1c3RvbUxvYWRlciAvPn0gLz5cclxuICAgICAgICAgIDxTbWFsbENhcmQgbmFtZT1cItCg0YvQvdC+0YfQvdCw0Y8g0LrQsNC/0LjRgtCw0LvQuNC30LDRhtC40Y9cIiBjb250ZW50PXtkYXRhX2luZm8gPyBcIiRcIiArIChkYXRhX2luZm8ubWFya2V0X2NhcCkudG9Mb2NhbGVTdHJpbmcoKSA6IDxDdXN0b21Mb2FkZXIgLz59IC8+XHJcbiAgICAgICAgICA8U21hbGxDYXJkIG5hbWU9XCLQodGD0YLQvtGH0L3Ri9C5INC+0LHQvtGA0L7RglwiIGNvbnRlbnQ9e2RhdGFfaW5mbyA/IFwiJFwiICsgcGFyc2VJbnQoZGF0YV9pbmZvLnRvdGFsX3ZvbHVtZSkudG9Mb2NhbGVTdHJpbmcoKSA6IDxDdXN0b21Mb2FkZXIgLz59Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFhXaWRlQ2FyZCBuYW1lPVwi0J/QvtGB0LvQtdC00L3QuNC1IDEwINGC0YDQsNC90LfQsNC60YbQuNC5XCI+XHJcbiAgICAgICAgICAgIHtkYXRhX2NhbmRsZXMgPyA8VHJhbnNhY3Rpb25MaXN0IGRhdGE9e2RhdGFfdHJhbnNhY3Rpb259IC8+IDogPEN1c3RvbUxvYWRlciAvPn1cclxuICAgICAgICAgIDwvWFdpZGVDYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgLmNlbnRlcml6ZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuY2VudGVyaXplID4gZGl2IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmRhdGEtcmV0cmlldmVkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU1cHgpO1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZWFmMztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMzVweCByZ2JhKDEyNywxNTAsMTc0LC4xMjUpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdGF0dXMtbGlnaHQge1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTkwLCAwKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMTkwLCAwLCAxKTtcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlZ3JlZW4gMnMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAuZGF0YS1yZXRyaWV2ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIHB1bHNlZ3JlZW4ge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMTkwLCAwLCAwLjcpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgNzAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiYSgwLCAxOTAsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDE5MCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vIExvYWRpbmcgYW5pbWF0aW9uXHJcbmZ1bmN0aW9uIEN1c3RvbUxvYWRlcigpIHtcclxuICByZXR1cm4gPEJlYXRMb2FkZXJcclxuICAgIHNpemU9ezEwfVxyXG4gICAgY29sb3I9e1wiI0YwMTcxNlwifVxyXG4gICAgbG9hZGluZz17dHJ1ZX1cclxuICAvPlxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\furso\\\\Desktop\\\\dfx_stats\\\\pages\\\\index.js */"));
} // Loading animation

_s(DFX, "x47pZBFwy8oxpgKSICXL2dR17h4=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_8__["default"], swr__WEBPACK_IMPORTED_MODULE_8__["default"], swr__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = DFX;

function CustomLoader() {
  return __jsx(react_spinners_BeatLoader__WEBPACK_IMPORTED_MODULE_6___default.a, {
    size: 10,
    color: "#F01716",
    loading: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 10
    }
  });
}

_c2 = CustomLoader;

var _c, _c2;

$RefreshReg$(_c, "DFX");
$RefreshReg$(_c2, "CustomLoader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJERlgiLCJ1c2VTV1IiLCJkYXRhX2luZm8iLCJkYXRhIiwiZGF0YV90cmFuc2FjdGlvbiIsImRhdGFfY2FuZGxlcyIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRfY2FwIiwidG9Mb2NhbGVTdHJpbmciLCJwYXJzZUludCIsInRvdGFsX3ZvbHVtZSIsIkN1c3RvbUxvYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdpRDs7Q0FDQTs7Q0FFRzs7QUFDcEQ7QUFFQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEdBQUc7QUFBQSxTQUFJQyw4Q0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQUo7QUFBQSxHQUFqQixDQUFKO0FBQUEsQ0FBbkI7O0FBRWUsU0FBU0MsR0FBVCxHQUFlO0FBQUE7O0FBQUEsZ0JBQ0FDLG1EQUFNLENBQUMsZUFBRCxFQUFrQlAsT0FBbEIsQ0FETjtBQUFBLE1BQ2RRLFNBRGMsV0FDcEJDLElBRG9COztBQUFBLGlCQUVPRixtREFBTSxDQUFDLHNCQUFELEVBQXlCUCxPQUF6QixDQUZiO0FBQUEsTUFFZFUsZ0JBRmMsWUFFcEJELElBRm9COztBQUFBLGlCQUdHRixtREFBTSxDQUFDLGdCQUFELEVBQW1CUCxPQUFuQixDQUhUO0FBQUEsTUFHZFcsWUFIYyxZQUdwQkYsSUFIb0I7O0FBSzVCLFNBQ0U7QUFBQSx3Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FERixFQUlFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWEsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QjtBQUFBLHdDQUFnQixjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTlCLCtNQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQVcsUUFBSSxFQUFDLG1FQUFoQjtBQUFrQyxXQUFPLEVBQUVELFNBQVMsR0FBRyxNQUFNQSxTQUFTLENBQUNJLGFBQW5CLEdBQW1DLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNkRBQUQ7QUFBVyxRQUFJLEVBQUMsaUlBQWhCO0FBQXlDLFdBQU8sRUFBRUosU0FBUyxHQUFHLE1BQU9BLFNBQVMsQ0FBQ0ssVUFBWCxDQUF1QkMsY0FBdkIsRUFBVCxHQUFtRCxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDZEQUFEO0FBQVcsUUFBSSxFQUFDLHVGQUFoQjtBQUFrQyxXQUFPLEVBQUVOLFNBQVMsR0FBRyxNQUFNTyxRQUFRLENBQUNQLFNBQVMsQ0FBQ1EsWUFBWCxDQUFSLENBQWlDRixjQUFqQyxFQUFULEdBQTZELE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUpGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFXLFFBQUksRUFBQyx3SEFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxZQUFZLEdBQUcsTUFBQywrREFBRDtBQUFpQixRQUFJLEVBQUVELGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBaUQsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEaEUsQ0FERixDQVRGLENBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdTVOQURGO0FBaUZELEMsQ0FFRDs7R0F4RndCSixHO1VBQ01DLDJDLEVBQ09BLDJDLEVBQ0pBLDJDOzs7S0FIVEQsRzs7QUF5RnhCLFNBQVNXLFlBQVQsR0FBd0I7QUFDdEIsU0FBTyxNQUFDLGdFQUFEO0FBQ0wsUUFBSSxFQUFFLEVBREQ7QUFFTCxTQUFLLEVBQUUsU0FGRjtBQUdMLFdBQU8sRUFBRSxJQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUtEOztNQU5RQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43MDcyMjE0NzAzNjI3MjRjN2E3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5cclxuaW1wb3J0IFNtYWxsQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1NtYWxsQ2FyZCc7IC8vIFNtYWxsIGRldGFpbCBjYXJkc1xyXG5pbXBvcnQgWFdpZGVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvWFdpZGVDYXJkJzsgLy8gMy8zIGRpc3BsYXkgY2FyZHNcclxuXHJcbmltcG9ydCBCZWF0TG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9CZWF0TG9hZGVyXCI7IC8vIExvYWRpbmcgYW5pbWF0aW9uXHJcbmltcG9ydCBUcmFuc2FjdGlvbkxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2FjdGlvbic7XHJcblxyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICd1bmZldGNoJztcclxuXHJcbmNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBERlgoKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBkYXRhX2luZm8gfSA9IHVzZVNXUignL2FwaS9kZngvaW5mbycsIGZldGNoZXIpO1xyXG4gIGNvbnN0IHsgZGF0YTogZGF0YV90cmFuc2FjdGlvbiB9ID0gdXNlU1dSKCcvYXBpL2RmeC90cmFuc2FjdGlvbicsIGZldGNoZXIpXHJcbiAgY29uc3QgeyBkYXRhOiBkYXRhX2NhbmRsZXMgfSA9IHVzZVNXUihcIi9hcGkvZGZ4L2NoYXJ0XCIsIGZldGNoZXIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlN0YXRzIHwgREZYPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRhLXJldHJpZXZlZFwiPjxzcGFuIGNsYXNzTmFtZT1cInN0YXR1cy1saWdodFwiPjwvc3Bhbj7QlNCw0L3QvdGL0LUg0LfQsNCz0YDRg9C20LDRjtGC0YHRjyDQsiDRgNC10LDQu9GM0L3QvtC8INCy0YDQtdC80LXQvdC4PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8U21hbGxDYXJkIG5hbWU9XCLQptC10L3QsCBERlgg0YLQvtC60LXQvdCwXCIgY29udGVudD17ZGF0YV9pbmZvID8gXCIkXCIgKyBkYXRhX2luZm8uY3VycmVudF9wcmljZSA6IDxDdXN0b21Mb2FkZXIgLz59IC8+XHJcbiAgICAgICAgICA8U21hbGxDYXJkIG5hbWU9XCLQoNGL0L3QvtGH0L3QsNGPINC60LDQv9C40YLQsNC70LjQt9Cw0YbQuNGPXCIgY29udGVudD17ZGF0YV9pbmZvID8gXCIkXCIgKyAoZGF0YV9pbmZvLm1hcmtldF9jYXApLnRvTG9jYWxlU3RyaW5nKCkgOiA8Q3VzdG9tTG9hZGVyIC8+fSAvPlxyXG4gICAgICAgICAgPFNtYWxsQ2FyZCBuYW1lPVwi0KHRg9GC0L7Rh9C90YvQuSDQvtCx0L7RgNC+0YJcIiBjb250ZW50PXtkYXRhX2luZm8gPyBcIiRcIiArIHBhcnNlSW50KGRhdGFfaW5mby50b3RhbF92b2x1bWUpLnRvTG9jYWxlU3RyaW5nKCkgOiA8Q3VzdG9tTG9hZGVyIC8+fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxYV2lkZUNhcmQgbmFtZT1cItCf0L7RgdC70LXQtNC90LjQtSAxMCDRgtGA0LDQvdC30LDQutGG0LjQuVwiPlxyXG4gICAgICAgICAgICB7ZGF0YV9jYW5kbGVzID8gPFRyYW5zYWN0aW9uTGlzdCBkYXRhPXtkYXRhX3RyYW5zYWN0aW9ufSAvPiA6IDxDdXN0b21Mb2FkZXIgLz59XHJcbiAgICAgICAgICA8L1hXaWRlQ2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgIC5jZW50ZXJpemUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmNlbnRlcml6ZSA+IGRpdiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5kYXRhLXJldHJpZXZlZCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1NXB4KTtcclxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2VhZjM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDM1cHggcmdiYSgxMjcsMTUwLDE3NCwuMTI1KTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgfVxyXG4gICAgICAuc3RhdHVzLWxpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE5MCwgMCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDE5MCwgMCwgMSk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZWdyZWVuIDJzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgLmRhdGEtcmV0cmlldmVkIHtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBwdWxzZWdyZWVuIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDE5MCwgMCwgMC43KTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIDcwJSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYmEoMCwgMTkwLCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAxOTAsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBMb2FkaW5nIGFuaW1hdGlvblxyXG5mdW5jdGlvbiBDdXN0b21Mb2FkZXIoKSB7XHJcbiAgcmV0dXJuIDxCZWF0TG9hZGVyXHJcbiAgICBzaXplPXsxMH1cclxuICAgIGNvbG9yPXtcIiNGMDE3MTZcIn1cclxuICAgIGxvYWRpbmc9e3RydWV9XHJcbiAgLz5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=