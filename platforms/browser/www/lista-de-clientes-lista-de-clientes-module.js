(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-de-clientes-lista-de-clientes-module"],{

/***/ "./src/app/lista-de-clientes/lista-de-clientes.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/lista-de-clientes/lista-de-clientes.module.ts ***!
  \***************************************************************/
/*! exports provided: ListaDeClientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeClientesPageModule", function() { return ListaDeClientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lista_de_clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-de-clientes.page */ "./src/app/lista-de-clientes/lista-de-clientes.page.ts");







var routes = [
    {
        path: '',
        component: _lista_de_clientes_page__WEBPACK_IMPORTED_MODULE_6__["ListaDeClientesPage"]
    }
];
var ListaDeClientesPageModule = /** @class */ (function () {
    function ListaDeClientesPageModule() {
    }
    ListaDeClientesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lista_de_clientes_page__WEBPACK_IMPORTED_MODULE_6__["ListaDeClientesPage"]]
        })
    ], ListaDeClientesPageModule);
    return ListaDeClientesPageModule;
}());



/***/ }),

/***/ "./src/app/lista-de-clientes/lista-de-clientes.page.html":
/*!***************************************************************!*\
  !*** ./src/app/lista-de-clientes/lista-de-clientes.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Lista De Clientes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngFor=\"let cliente of listaDeClientes\" >\r\n    <ion-card-header>\r\n        <ion-card-title>{{cliente.email}}</ion-card-title>\r\n      <ion-card-subtitle>{{cliente.senha}}</ion-card-subtitle>\r\n      \r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n     {{cliente.nome}}\r\n    </ion-card-content>\r\n\r\n\r\n  <ion-icon name=\"share-alt\" size=\"large\" (click)=\"viewCliente(cliente)\"></ion-icon>\r\n  <ion-icon name=\"trash\" size=\"large\" (click)=\"remove(cliente)\"></ion-icon>\r\n\r\n</ion-card>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/lista-de-clientes/lista-de-clientes.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/lista-de-clientes/lista-de-clientes.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhLWRlLWNsaWVudGVzL2xpc3RhLWRlLWNsaWVudGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/lista-de-clientes/lista-de-clientes.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/lista-de-clientes/lista-de-clientes.page.ts ***!
  \*************************************************************/
/*! exports provided: ListaDeClientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeClientesPage", function() { return ListaDeClientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_cliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/cliente */ "./src/app/model/cliente.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ListaDeClientesPage = /** @class */ (function () {
    function ListaDeClientesPage(router, loadingController) {
        this.router = router;
        this.loadingController = loadingController;
        this.listaDeClientes = [];
        this.firestore = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        this.settings = { timestampsInSnapshots: true };
    }
    ListaDeClientesPage.prototype.ngOnInit = function () {
        this.getList();
    };
    ListaDeClientesPage.prototype.viewCliente = function (obj) {
        this.router.navigate(['/cliente-view', { 'cliente': obj.id }]);
    };
    ListaDeClientesPage.prototype.getList = function () {
        var _this = this;
        this.loading();
        var ref = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("cliente");
        ref.get().then(function (query) {
            query.forEach(function (doc) {
                var c = new _model_cliente__WEBPACK_IMPORTED_MODULE_3__["Cliente"]();
                c.setDados(doc.data());
                c.id = doc.id;
                _this.listaDeClientes.push(c);
            });
            _this.loadingController.dismiss();
        });
    };
    ;
    ListaDeClientesPage.prototype.remove = function (obj) {
        var _this = this;
        var ref = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("cliente");
        ref.doc(obj.id).delete()
            .then(function () {
            _this.listaDeClientes = [];
            _this.getList();
        }).catch(function () {
            console.log('Erro ao atualizar');
        });
    };
    ListaDeClientesPage.prototype.loading = function () {
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
    ListaDeClientesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-de-clientes',
            template: __webpack_require__(/*! ./lista-de-clientes.page.html */ "./src/app/lista-de-clientes/lista-de-clientes.page.html"),
            styles: [__webpack_require__(/*! ./lista-de-clientes.page.scss */ "./src/app/lista-de-clientes/lista-de-clientes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], ListaDeClientesPage);
    return ListaDeClientesPage;
}());



/***/ })

}]);
//# sourceMappingURL=lista-de-clientes-lista-de-clientes-module.js.map