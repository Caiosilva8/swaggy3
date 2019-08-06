(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produto-produto-module"],{

/***/ "./src/app/produto/produto.module.ts":
/*!*******************************************!*\
  !*** ./src/app/produto/produto.module.ts ***!
  \*******************************************/
/*! exports provided: ProdutoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoPageModule", function() { return ProdutoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _produto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produto.page */ "./src/app/produto/produto.page.ts");








var routes = [
    {
        path: '',
        component: _produto_page__WEBPACK_IMPORTED_MODULE_6__["ProdutoPage"]
    }
];
var ProdutoPageModule = /** @class */ (function () {
    function ProdutoPageModule() {
    }
    ProdutoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_produto_page__WEBPACK_IMPORTED_MODULE_6__["ProdutoPage"]]
        })
    ], ProdutoPageModule);
    return ProdutoPageModule;
}());



/***/ }),

/***/ "./src/app/produto/produto.page.html":
/*!*******************************************!*\
  !*** ./src/app/produto/produto.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Novo Produto</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"cadastrarP()\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label floating>Nome Produto</ion-label>\r\n        <ion-input formControlName=\"nomeProduto\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label floating>Preço</ion-label>\r\n        <ion-input formControlName=\"preco\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label floating>Categoria</ion-label>\r\n        <ion-input formControlName=\"categoria\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label floating>Descrição</ion-label>\r\n        <ion-input formControlName=\"descricao\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button color=\"dark\" outline>Cadastrar</ion-button>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/produto/produto.page.scss":
/*!*******************************************!*\
  !*** ./src/app/produto/produto.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG8vcHJvZHV0by5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/produto/produto.page.ts":
/*!*****************************************!*\
  !*** ./src/app/produto/produto.page.ts ***!
  \*****************************************/
/*! exports provided: ProdutoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoPage", function() { return ProdutoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProdutoPage = /** @class */ (function () {
    function ProdutoPage(navCtrl, formBuilder, rauter, loadingController, toastController) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.rauter = rauter;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.firestore = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        this.settings = { timestampsInSnapshots: true };
        //this.firestore.settings(this.settings);
        this.formGroup = this.formBuilder.group({
            nomeProduto: [''],
            preco: [''],
            categoria: [''],
            descricao: [''],
        });
    }
    ProdutoPage.prototype.cadastrarP = function () {
        var _this = this;
        var ref = this.firestore.collection('produto');
        ref.add(this.formGroup.value)
            .then(function () {
            _this.toast('Cadastrado com Sucesso');
            _this.rauter.navigate(['/index']);
            _this.loadingController.dismiss();
        }).catch(function () {
            console.log('Erro ao Cadastrar');
        });
    };
    ProdutoPage.prototype.ngOnInit = function () { };
    ProdutoPage.prototype.toast = function (msg) {
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
    ProdutoPage.prototype.loading = function () {
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
    ProdutoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produto',
            template: __webpack_require__(/*! ./produto.page.html */ "./src/app/produto/produto.page.html"),
            styles: [__webpack_require__(/*! ./produto.page.scss */ "./src/app/produto/produto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], ProdutoPage);
    return ProdutoPage;
}());



/***/ })

}]);
//# sourceMappingURL=produto-produto-module.js.map