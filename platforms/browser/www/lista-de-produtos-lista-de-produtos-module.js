(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-de-produtos-lista-de-produtos-module"],{

/***/ "./src/app/lista-de-produtos/lista-de-produtos.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/lista-de-produtos/lista-de-produtos.module.ts ***!
  \***************************************************************/
/*! exports provided: ListaDeProdutosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeProdutosPageModule", function() { return ListaDeProdutosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lista_de_produtos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-de-produtos.page */ "./src/app/lista-de-produtos/lista-de-produtos.page.ts");
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/storage.service */ "./src/app/service/storage.service.ts");








var routes = [
    {
        path: '',
        component: _lista_de_produtos_page__WEBPACK_IMPORTED_MODULE_6__["ListaDeProdutosPage"]
    }
];
var ListaDeProdutosPageModule = /** @class */ (function () {
    function ListaDeProdutosPageModule() {
    }
    ListaDeProdutosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lista_de_produtos_page__WEBPACK_IMPORTED_MODULE_6__["ListaDeProdutosPage"]],
            providers: [_service_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]]
        })
    ], ListaDeProdutosPageModule);
    return ListaDeProdutosPageModule;
}());



/***/ }),

/***/ "./src/app/lista-de-produtos/lista-de-produtos.page.html":
/*!***************************************************************!*\
  !*** ./src/app/lista-de-produtos/lista-de-produtos.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Lista De Produtos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <!-- fab placed to the top end -->\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button>\r\n        <ion-icon name=\"cart\"></ion-icon>\r\n        <ion-badge color=\"primary\">{{pedido.itens.length}}</ion-badge>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n  <ion-card *ngFor=\"let produto of listaDeProdutos\">\r\n    <ion-card-header>\r\n        <img src=\"{{produto?.foto}}\">\r\n      <ion-card-title>{{produto?.nomeProduto}}</ion-card-title>\r\n      <ion-card-subtitle>R$ {{produto?.preco}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p>{{produto?.descricao}}</p>\r\n      <p>{{produto?.categoria}}</p>\r\n    </ion-card-content>\r\n   \r\n    <ion-icon name=\"create\" size=\"large\" (click)=\"atualizar(produto)\"></ion-icon> \r\n    <ion-icon name=\"trash\"  size=\"large\" (click)=\"remove(produto)\"></ion-icon>\r\n    <ion-icon name=\"cart\"  size=\"large\" (click)=\"addCarrinho(produto)\"></ion-icon>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/lista-de-produtos/lista-de-produtos.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/lista-de-produtos/lista-de-produtos.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhLWRlLXByb2R1dG9zL2xpc3RhLWRlLXByb2R1dG9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/lista-de-produtos/lista-de-produtos.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/lista-de-produtos/lista-de-produtos.page.ts ***!
  \*************************************************************/
/*! exports provided: ListaDeProdutosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeProdutosPage", function() { return ListaDeProdutosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_produto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/produto */ "./src/app/model/produto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/storage.service */ "./src/app/service/storage.service.ts");
/* harmony import */ var _model_pedido__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/pedido */ "./src/app/model/pedido.ts");
/* harmony import */ var _model_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/item */ "./src/app/model/item.ts");









var ListaDeProdutosPage = /** @class */ (function () {
    function ListaDeProdutosPage(router, loadingController, storageServ, toastController) {
        this.router = router;
        this.loadingController = loadingController;
        this.storageServ = storageServ;
        this.toastController = toastController;
        this.listaDeProdutos = [];
        this.firestore = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        this.settings = { timestampsInSnapshots: true };
        this.pedido = new _model_pedido__WEBPACK_IMPORTED_MODULE_7__["Pedido"]();
    }
    ListaDeProdutosPage.prototype.ngOnInit = function () {
        this.getList();
    };
    ListaDeProdutosPage.prototype.addCarrinho = function (produto) {
        this.pedido = this.storageServ.getCart();
        var add = true;
        var i = new _model_item__WEBPACK_IMPORTED_MODULE_8__["Item"]();
        i.produto = produto;
        i.quantidade = 1;
        if (this.pedido == null) { // Caso pedido esteja vazio
            this.pedido = new _model_pedido__WEBPACK_IMPORTED_MODULE_7__["Pedido"](); //cria umm novo pedido  
            this.pedido.itens = []; //cria uma lista de itens
        }
        this.pedido.itens.forEach(function (p) {
            if (p.produto.id == produto.id) {
                add = false;
            }
        });
        if (add == true)
            this.pedido.itens.push(i);
        this.storageServ.setCart(this.pedido);
    };
    ListaDeProdutosPage.prototype.atualizar = function (obj) {
        this.router.navigate(['/produto-view', { 'produto': obj.id }]);
    };
    ListaDeProdutosPage.prototype.getList = function () {
        var _this = this;
        this.loading();
        var ref = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("produto");
        ref.get().then(function (query) {
            query.forEach(function (doc) {
                var c = new _model_produto__WEBPACK_IMPORTED_MODULE_3__["Produto"]();
                c.setDados(doc.data());
                c.id = doc.id;
                var ref = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref().child("produtos/" + doc.id + ".jpg").getDownloadURL().then(function (url) {
                    c.foto = url;
                    _this.listaDeProdutos.push(c);
                }).catch(function (err) {
                    _this.listaDeProdutos.push(c);
                });
            });
            console.log("Lista " + _this.listaDeProdutos);
            _this.loadingController.dismiss();
        });
    };
    ;
    ListaDeProdutosPage.prototype.remove = function (obj) {
        var _this = this;
        var ref = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("produto");
        ref.doc(obj.id).delete()
            .then(function () {
            _this.listaDeProdutos = [];
            _this.getList();
        }).catch(function () {
            console.log('Erro ao atualizar');
        });
    };
    ListaDeProdutosPage.prototype.loading = function () {
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
    ListaDeProdutosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-de-produtos',
            template: __webpack_require__(/*! ./lista-de-produtos.page.html */ "./src/app/lista-de-produtos/lista-de-produtos.page.html"),
            styles: [__webpack_require__(/*! ./lista-de-produtos.page.scss */ "./src/app/lista-de-produtos/lista-de-produtos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _service_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], ListaDeProdutosPage);
    return ListaDeProdutosPage;
}());



/***/ }),

/***/ "./src/app/model/item.ts":
/*!*******************************!*\
  !*** ./src/app/model/item.ts ***!
  \*******************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());



/***/ })

}]);
//# sourceMappingURL=lista-de-produtos-lista-de-produtos-module.js.map