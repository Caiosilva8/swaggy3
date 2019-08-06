(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logoff-logoff-module"],{

/***/ "./src/app/logoff/logoff.module.ts":
/*!*****************************************!*\
  !*** ./src/app/logoff/logoff.module.ts ***!
  \*****************************************/
/*! exports provided: LogoffPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoffPageModule", function() { return LogoffPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _logoff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logoff.page */ "./src/app/logoff/logoff.page.ts");







var routes = [
    {
        path: '',
        component: _logoff_page__WEBPACK_IMPORTED_MODULE_6__["LogoffPage"]
    }
];
var LogoffPageModule = /** @class */ (function () {
    function LogoffPageModule() {
    }
    LogoffPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_logoff_page__WEBPACK_IMPORTED_MODULE_6__["LogoffPage"]]
        })
    ], LogoffPageModule);
    return LogoffPageModule;
}());



/***/ }),

/***/ "./src/app/logoff/logoff.page.html":
/*!*****************************************!*\
  !*** ./src/app/logoff/logoff.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Logoff</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/logoff/logoff.page.scss":
/*!*****************************************!*\
  !*** ./src/app/logoff/logoff.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ29mZi9sb2dvZmYucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/logoff/logoff.page.ts":
/*!***************************************!*\
  !*** ./src/app/logoff/logoff.page.ts ***!
  \***************************************/
/*! exports provided: LogoffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoffPage", function() { return LogoffPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LogoffPage = /** @class */ (function () {
    function LogoffPage(fire, router) {
        var _this = this;
        this.fire = fire;
        this.router = router;
        this.fire.auth.signOut().then(function () {
            _this.router.navigate(['/home']);
        }).catch(function () {
            _this.router.navigate(['/list']);
        });
    }
    LogoffPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logoff',
            template: __webpack_require__(/*! ./logoff.page.html */ "./src/app/logoff/logoff.page.html"),
            styles: [__webpack_require__(/*! ./logoff.page.scss */ "./src/app/logoff/logoff.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogoffPage);
    return LogoffPage;
}());



/***/ })

}]);
//# sourceMappingURL=logoff-logoff-module.js.map