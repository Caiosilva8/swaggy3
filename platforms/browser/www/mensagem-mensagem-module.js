(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mensagem-mensagem-module"],{

/***/ "./src/app/mensagem/mensagem.module.ts":
/*!*********************************************!*\
  !*** ./src/app/mensagem/mensagem.module.ts ***!
  \*********************************************/
/*! exports provided: MensagemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagemPageModule", function() { return MensagemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mensagem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mensagem.page */ "./src/app/mensagem/mensagem.page.ts");







var routes = [
    {
        path: '',
        component: _mensagem_page__WEBPACK_IMPORTED_MODULE_6__["MensagemPage"]
    }
];
var MensagemPageModule = /** @class */ (function () {
    function MensagemPageModule() {
    }
    MensagemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mensagem_page__WEBPACK_IMPORTED_MODULE_6__["MensagemPage"]]
        })
    ], MensagemPageModule);
    return MensagemPageModule;
}());



/***/ }),

/***/ "./src/app/mensagem/mensagem.page.html":
/*!*********************************************!*\
  !*** ./src/app/mensagem/mensagem.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Cadastro de Mensagem</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"cadastrar()\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label>Título</ion-label>\r\n        <ion-input formControlName=\"titulo\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Texto</ion-label>\r\n        <ion-input formControlName=\"texto\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Data</ion-label>\r\n        <ion-input formControlName=\"data\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button expand=\"full\" type=\"submit\" fill=\"outline\" color=\"dark\" (click)=\"cadastrar()\">Cadastrar</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/mensagem/mensagem.page.scss":
/*!*********************************************!*\
  !*** ./src/app/mensagem/mensagem.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnNhZ2VtL21lbnNhZ2VtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/mensagem/mensagem.page.ts":
/*!*******************************************!*\
  !*** ./src/app/mensagem/mensagem.page.ts ***!
  \*******************************************/
/*! exports provided: MensagemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagemPage", function() { return MensagemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var MensagemPage = /** @class */ (function () {
    function MensagemPage(formBuilder, rauter, loadingController, toastController) {
        this.formBuilder = formBuilder;
        this.rauter = rauter;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.firestore = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        this.settings = { timestampsInSnapshots: true };
        this.formGroup = this.formBuilder.group({
            titulo: [''],
            texto: [''],
            data: [''],
        });
    }
    MensagemPage.prototype.ngOnInit = function () {
    };
    MensagemPage.prototype.cadastrar = function () {
        var _this = this;
        var ref = this.firestore.collection('mensagem');
        ref.add(this.formGroup.value)
            .then(function () {
            _this.toast('Cadastrado com Sucesso');
            _this.rauter.navigate(['/list']);
            _this.loadingController.dismiss();
        }).catch(function () {
            _this.toast('Erro ao Cadastrar');
            _this.loadingController.dismiss();
        });
    };
    MensagemPage.prototype.toast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Cadastrado com sucesso!',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MensagemPage.prototype.loading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MensagemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mensagem',
            template: __webpack_require__(/*! ./mensagem.page.html */ "./src/app/mensagem/mensagem.page.html"),
            styles: [__webpack_require__(/*! ./mensagem.page.scss */ "./src/app/mensagem/mensagem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], MensagemPage);
    return MensagemPage;
}());



/***/ })

}]);
//# sourceMappingURL=mensagem-mensagem-module.js.map