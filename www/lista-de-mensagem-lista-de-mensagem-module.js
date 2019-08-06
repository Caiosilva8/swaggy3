(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-de-mensagem-lista-de-mensagem-module"],{

/***/ "./src/app/lista-de-mensagem/lista-de-mensagem.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/lista-de-mensagem/lista-de-mensagem.module.ts ***!
  \***************************************************************/
/*! exports provided: ListaDeMensagemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeMensagemPageModule", function() { return ListaDeMensagemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lista_de_mensagem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-de-mensagem.page */ "./src/app/lista-de-mensagem/lista-de-mensagem.page.ts");







var routes = [
    {
        path: '',
        component: _lista_de_mensagem_page__WEBPACK_IMPORTED_MODULE_6__["ListaDeMensagemPage"]
    }
];
var ListaDeMensagemPageModule = /** @class */ (function () {
    function ListaDeMensagemPageModule() {
    }
    ListaDeMensagemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lista_de_mensagem_page__WEBPACK_IMPORTED_MODULE_6__["ListaDeMensagemPage"]]
        })
    ], ListaDeMensagemPageModule);
    return ListaDeMensagemPageModule;
}());



/***/ }),

/***/ "./src/app/lista-de-mensagem/lista-de-mensagem.page.html":
/*!***************************************************************!*\
  !*** ./src/app/lista-de-mensagem/lista-de-mensagem.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>ListaDeMensagens</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngFor=\"let mensagem of listaDeMensagens\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{mensagem.titulo}}</ion-card-title>\r\n    <ion-card-subtitle>{{mensagem.texto}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      {{mensagem.data}}\r\n    </ion-card-content>\r\n\r\n    <ion-icon name=\"share-alt\" size=\"large\" (click)=\"viewMensagem(mensagem)\"></ion-icon>  \r\n    <ion-icon name=\"trash\" size=\"large\" (click)=\"remove(mensagem)\"></ion-icon>\r\n\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/lista-de-mensagem/lista-de-mensagem.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/lista-de-mensagem/lista-de-mensagem.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhLWRlLW1lbnNhZ2VtL2xpc3RhLWRlLW1lbnNhZ2VtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/lista-de-mensagem/lista-de-mensagem.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/lista-de-mensagem/lista-de-mensagem.page.ts ***!
  \*************************************************************/
/*! exports provided: ListaDeMensagemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeMensagemPage", function() { return ListaDeMensagemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_mensagem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/mensagem */ "./src/app/model/mensagem.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ListaDeMensagemPage = /** @class */ (function () {
    function ListaDeMensagemPage(router, loadingController) {
        this.router = router;
        this.loadingController = loadingController;
        this.listaDeMensagens = [];
        this.firestore = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        this.settings = { timestampsInSnapshopts: true };
    }
    ListaDeMensagemPage.prototype.ngOnInit = function () {
        this.getList();
    };
    ListaDeMensagemPage.prototype.viewMensagem = function (obj) {
        this.router.navigate(['/mensagem-view', { 'mensagem': obj.id }]);
    };
    ListaDeMensagemPage.prototype.getList = function () {
        var _this = this;
        this.loading();
        var ref = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("mensagem");
        ref.get().then(function (query) {
            query.forEach(function (doc) {
                var m = new _model_mensagem__WEBPACK_IMPORTED_MODULE_3__["Mensagem"]();
                m.setDados(doc.data());
                m.id = doc.id;
                _this.listaDeMensagens.push(m);
            });
            _this.loadingController.dismiss();
        });
    };
    ;
    ListaDeMensagemPage.prototype.remove = function (obj) {
        var _this = this;
        var ref = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("mensagem");
        ref.doc(obj.id).delete()
            .then(function () {
            _this.listaDeMensagens = [];
            _this.getList();
        }).catch(function () {
            console.log('Erro ao Atualizar');
        });
    };
    ListaDeMensagemPage.prototype.loading = function () {
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
    ListaDeMensagemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-de-mensagem',
            template: __webpack_require__(/*! ./lista-de-mensagem.page.html */ "./src/app/lista-de-mensagem/lista-de-mensagem.page.html"),
            styles: [__webpack_require__(/*! ./lista-de-mensagem.page.scss */ "./src/app/lista-de-mensagem/lista-de-mensagem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], ListaDeMensagemPage);
    return ListaDeMensagemPage;
}());



/***/ })

}]);
//# sourceMappingURL=lista-de-mensagem-lista-de-mensagem-module.js.map