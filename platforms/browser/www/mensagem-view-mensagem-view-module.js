(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mensagem-view-mensagem-view-module"],{

/***/ "./src/app/mensagem-view/mensagem-view.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/mensagem-view/mensagem-view.module.ts ***!
  \*******************************************************/
/*! exports provided: MensagemViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagemViewPageModule", function() { return MensagemViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mensagem_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mensagem-view.page */ "./src/app/mensagem-view/mensagem-view.page.ts");







var routes = [
    {
        path: '',
        component: _mensagem_view_page__WEBPACK_IMPORTED_MODULE_6__["MensagemViewPage"]
    }
];
var MensagemViewPageModule = /** @class */ (function () {
    function MensagemViewPageModule() {
    }
    MensagemViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_mensagem_view_page__WEBPACK_IMPORTED_MODULE_6__["MensagemViewPage"]]
        })
    ], MensagemViewPageModule);
    return MensagemViewPageModule;
}());



/***/ }),

/***/ "./src/app/mensagem-view/mensagem-view.page.html":
/*!*******************************************************!*\
  !*** ./src/app/mensagem-view/mensagem-view.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>mensagemView</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"formGroup\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label floating>Título</ion-label>\r\n        <ion-input formControlName=\"titulo\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label floating>Texto</ion-label>\r\n          <ion-input formControlName=\"texto\" type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label floating>Data</ion-label>\r\n            <ion-input formControlName=\"data\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n    </ion-list>\r\n    <ion-button expand=\"full\" (click)=\"atualizar()\">Atualizar</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/mensagem-view/mensagem-view.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/mensagem-view/mensagem-view.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnNhZ2VtLXZpZXcvbWVuc2FnZW0tdmlldy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mensagem-view/mensagem-view.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/mensagem-view/mensagem-view.page.ts ***!
  \*****************************************************/
/*! exports provided: MensagemViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagemViewPage", function() { return MensagemViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_mensagem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/mensagem */ "./src/app/model/mensagem.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var MensagemViewPage = /** @class */ (function () {
    function MensagemViewPage(activatedRoute, formBuilder, router, loadingController, toastController) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.mensagem = new _model_mensagem__WEBPACK_IMPORTED_MODULE_2__["Mensagem"]();
        this.firestore = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
        this.setting = { timestampsInSnapshots: true };
        this.id = this.activatedRoute.snapshot.paramMap.get('mensagem');
        this.form();
    }
    MensagemViewPage.prototype.form = function () {
        this.formGroup = this.formBuilder.group({
            titulo: [this.mensagem.titulo],
            texto: [this.mensagem.texto],
            data: [this.mensagem.data],
        });
    };
    MensagemViewPage.prototype.ngOnInit = function () {
        this.obterMensagem();
    };
    MensagemViewPage.prototype.obterMensagem = function () {
        var _this = this;
        var ref = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("mensagem").doc(this.id);
        ref.get().then(function (doc) {
            _this.mensagem.setDados(doc.data());
            _this.form();
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };
    MensagemViewPage.prototype.atualizar = function () {
        var _this = this;
        this.loading();
        var ref = this.firestore.collection('mensagem');
        ref.doc(this.id).set(this.formGroup.value)
            .then(function () {
            _this.toast('Atualizado com Sucesso');
            _this.router.navigate(['/lista-de-mensagem']);
            _this.loadingController.dismiss();
        }).catch(function () {
            _this.toast('Erro ao Atualizar');
        });
    };
    MensagemViewPage.prototype.toast = function (msg) {
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
    MensagemViewPage.prototype.loading = function () {
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
    MensagemViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mensagem-view',
            template: __webpack_require__(/*! ./mensagem-view.page.html */ "./src/app/mensagem-view/mensagem-view.page.html"),
            styles: [__webpack_require__(/*! ./mensagem-view.page.scss */ "./src/app/mensagem-view/mensagem-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], MensagemViewPage);
    return MensagemViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=mensagem-view-mensagem-view-module.js.map