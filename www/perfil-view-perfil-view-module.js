(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-view-perfil-view-module"],{

/***/ "./src/app/perfil-view/perfil-view.module.ts":
/*!***************************************************!*\
  !*** ./src/app/perfil-view/perfil-view.module.ts ***!
  \***************************************************/
/*! exports provided: PerfilViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilViewPageModule", function() { return PerfilViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-view.page */ "./src/app/perfil-view/perfil-view.page.ts");







var routes = [
    {
        path: '',
        component: _perfil_view_page__WEBPACK_IMPORTED_MODULE_6__["PerfilViewPage"]
    }
];
var PerfilViewPageModule = /** @class */ (function () {
    function PerfilViewPageModule() {
    }
    PerfilViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_view_page__WEBPACK_IMPORTED_MODULE_6__["PerfilViewPage"]]
        })
    ], PerfilViewPageModule);
    return PerfilViewPageModule;
}());



/***/ }),

/***/ "./src/app/perfil-view/perfil-view.page.html":
/*!***************************************************!*\
  !*** ./src/app/perfil-view/perfil-view.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>perfil-view</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <form [formGroup]=\"formGroup\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label floating>Nome</ion-label>\r\n        <ion-input formControlName=\"nome\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label floating>Cidade</ion-label>\r\n        <ion-input formControlName=\"cidade\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label floating>Estado</ion-label>\r\n        <ion-input formControlName=\"estado\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n\r\n    <ion-button expand=\"full\" fill=\"outline\" (click)=\"atualizarP()\">Atualizar</ion-button>\r\n    <ion-button color=\"danger\" expand=\"full\" fill=\"outline\" (click)=\"cancelar()\">Cancelar</ion-button>\r\n\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/perfil-view/perfil-view.page.scss":
/*!***************************************************!*\
  !*** ./src/app/perfil-view/perfil-view.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC12aWV3L3BlcmZpbC12aWV3LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/perfil-view/perfil-view.page.ts":
/*!*************************************************!*\
  !*** ./src/app/perfil-view/perfil-view.page.ts ***!
  \*************************************************/
/*! exports provided: PerfilViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilViewPage", function() { return PerfilViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_perfil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/perfil */ "./src/app/model/perfil.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PerfilViewPage = /** @class */ (function () {
    function PerfilViewPage(formBuilder, toastController, firebaseauth, loadingController, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.firebaseauth = firebaseauth;
        this.loadingController = loadingController;
        this.router = router;
        this.perfil = new _model_perfil__WEBPACK_IMPORTED_MODULE_5__["Perfil"]();
        this.firestore = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        this.settings = { timestampsInSnapshots: true };
        this.firebaseauth.authState.subscribe(function (obj) {
            _this.idUsuario = _this.firebaseauth.auth.currentUser.uid;
            var ref = _this.firestore.collection('perfil/').doc(_this.idUsuario);
            ref.get().then(function (doc) {
                _this.perfil.setDados(doc.data());
                _this.formGroup.controls['nome'].setValue(_this.perfil.nome);
                _this.formGroup.controls['cidade'].setValue(_this.perfil.cidade);
                _this.formGroup.controls['estado'].setValue(_this.perfil.estado);
            });
        });
        this.form();
    }
    PerfilViewPage.prototype.form = function () {
        this.formGroup = this.formBuilder.group({
            nome: [],
            cidade: [],
            estado: [],
            pontos: []
        });
    };
    PerfilViewPage.prototype.ngOnInit = function () {
    };
    PerfilViewPage.prototype.atualizarP = function () {
        var _this = this;
        var ref = this.firestore.collection('perfil');
        ref.doc(this.idUsuario).set(this.formGroup.value)
            .then(function () {
            _this.toast('Atualizado com Sucesso');
            _this.router.navigate(['/perfil']);
            _this.loadingController.dismiss();
        }).catch(function () {
            _this.toast('Erro ao Atualizar');
        });
    };
    PerfilViewPage.prototype.toast = function (msg) {
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
    PerfilViewPage.prototype.loading = function () {
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
    PerfilViewPage.prototype.cancelar = function () {
        this.router.navigate(['/perfil']);
    };
    PerfilViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-perfil-view',
            template: __webpack_require__(/*! ./perfil-view.page.html */ "./src/app/perfil-view/perfil-view.page.html"),
            styles: [__webpack_require__(/*! ./perfil-view.page.scss */ "./src/app/perfil-view/perfil-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], PerfilViewPage);
    return PerfilViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-view-perfil-view-module.js.map