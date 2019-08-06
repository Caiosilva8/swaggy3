(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cliente-view-cliente-view-module"],{

/***/ "./src/app/cliente-view/cliente-view.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cliente-view/cliente-view.module.ts ***!
  \*****************************************************/
/*! exports provided: ClienteViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteViewPageModule", function() { return ClienteViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cliente_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente-view.page */ "./src/app/cliente-view/cliente-view.page.ts");







var routes = [
    {
        path: '',
        component: _cliente_view_page__WEBPACK_IMPORTED_MODULE_6__["ClienteViewPage"]
    }
];
var ClienteViewPageModule = /** @class */ (function () {
    function ClienteViewPageModule() {
    }
    ClienteViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cliente_view_page__WEBPACK_IMPORTED_MODULE_6__["ClienteViewPage"]]
        })
    ], ClienteViewPageModule);
    return ClienteViewPageModule;
}());



/***/ }),

/***/ "./src/app/cliente-view/cliente-view.page.html":
/*!*****************************************************!*\
  !*** ./src/app/cliente-view/cliente-view.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ClienteView</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"formGroup\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label floating>Nome</ion-label>\r\n        <ion-input formControlName=\"nome\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label floating>Telefone</ion-label>\r\n          <ion-input formControlName=\"telefone\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label floating>E=mail</ion-label>\r\n          <ion-input formControlName=\"email\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n  </ion-list>\r\n  <ion-button expand=\"full\" (click)=\"atualizar()\">Atualizar</ion-button>\r\n  </form>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/cliente-view/cliente-view.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/cliente-view/cliente-view.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGUtdmlldy9jbGllbnRlLXZpZXcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cliente-view/cliente-view.page.ts":
/*!***************************************************!*\
  !*** ./src/app/cliente-view/cliente-view.page.ts ***!
  \***************************************************/
/*! exports provided: ClienteViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteViewPage", function() { return ClienteViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/cliente */ "./src/app/model/cliente.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ClienteViewPage = /** @class */ (function () {
    function ClienteViewPage(activatedRoute, formBuilder, router, loadingController, toastController) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.cliente = new _model_cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
        this.firestore = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
        this.setting = { timestampsInSnapshots: true };
        this.id = this.activatedRoute.snapshot.paramMap.get('cliente');
        this.form();
    }
    ClienteViewPage.prototype.form = function () {
        this.formGroup = this.formBuilder.group({
            nome: [this.cliente.nome],
            telefone: [this.cliente.email],
            email: [this.cliente.senha],
        });
    };
    ClienteViewPage.prototype.ngOnInit = function () {
        this.obterCliente();
    };
    ClienteViewPage.prototype.obterCliente = function () {
        var _this = this;
        var ref = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("cliente").doc(this.id);
        ref.get().then(function (doc) {
            _this.cliente.setDados(doc.data());
            _this.form();
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };
    ClienteViewPage.prototype.atualizar = function () {
        var _this = this;
        this.loading();
        var ref = this.firestore.collection('cliente');
        ref.doc(this.id).set(this.formGroup.value)
            .then(function () {
            _this.toast('Atualizado com sucesso');
            _this.router.navigate(['/lista-de-clientes']);
            _this.loadingController.dismiss();
        }).catch(function () {
            _this.toast('Erro ao Atualizar');
        });
    };
    ClienteViewPage.prototype.toast = function (msg) {
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
    ClienteViewPage.prototype.loading = function () {
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
    ClienteViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cliente-view',
            template: __webpack_require__(/*! ./cliente-view.page.html */ "./src/app/cliente-view/cliente-view.page.html"),
            styles: [__webpack_require__(/*! ./cliente-view.page.scss */ "./src/app/cliente-view/cliente-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], ClienteViewPage);
    return ClienteViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=cliente-view-cliente-view-module.js.map