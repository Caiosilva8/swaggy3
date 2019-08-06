(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrinho-carrinho-module"],{

/***/ "./src/app/carrinho/carrinho.module.ts":
/*!*********************************************!*\
  !*** ./src/app/carrinho/carrinho.module.ts ***!
  \*********************************************/
/*! exports provided: CarrinhoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageModule", function() { return CarrinhoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _carrinho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrinho.page */ "./src/app/carrinho/carrinho.page.ts");







var routes = [
    {
        path: '',
        component: _carrinho_page__WEBPACK_IMPORTED_MODULE_6__["CarrinhoPage"]
    }
];
var CarrinhoPageModule = /** @class */ (function () {
    function CarrinhoPageModule() {
    }
    CarrinhoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_carrinho_page__WEBPACK_IMPORTED_MODULE_6__["CarrinhoPage"]]
        })
    ], CarrinhoPageModule);
    return CarrinhoPageModule;
}());



/***/ }),

/***/ "./src/app/carrinho/carrinho.page.html":
/*!*********************************************!*\
  !*** ./src/app/carrinho/carrinho.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Carrinho</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  \r\n\r\n  <ion-card *ngFor=\"let pedido of pedido.itens\">\r\n          <ion-card-header>\r\n            <img src=\"{{pedido?.produto.foto}}\" class=\"img\">\r\n        <ion-card-title>{{pedido?.produto.nomeProduto}}</ion-card-title>\r\n        <ion-card-subtitle>R$ {{pedido?.produto.preco}}</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n        </ion-card-content>\r\n\r\n        <ion-icon name=\"trash\" (click)=\"removeCar(pedido?.produto)\" size=\"large\"></ion-icon>\r\n\r\n  </ion-card>\r\n\r\n  <h5>Total: R$: {{total}},00</h5>\r\n  <div class=\"button\">\r\n  <ion-button color=\"dark\" fill=\"outline\" >Finalizar Compra</ion-button>\r\n  <ion-button color=\"dark\" fill=\"outline\" (click)=\"index()\">Continuar Comprando</ion-button>\r\n</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/carrinho/carrinho.page.scss":
/*!*********************************************!*\
  !*** ./src/app/carrinho/carrinho.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  width: 150px;\n  height: 150px; }\n\n.button {\n  display: block; }\n\nh5 {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycmluaG8vRDpcXHUudVxcRGlhMDEuMDdcXFN3YWdneTIvc3JjXFxhcHBcXGNhcnJpbmhvXFxjYXJyaW5oby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDQyxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnJpbmhvL2NhcnJpbmhvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaDV7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/carrinho/carrinho.page.ts":
/*!*******************************************!*\
  !*** ./src/app/carrinho/carrinho.page.ts ***!
  \*******************************************/
/*! exports provided: CarrinhoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPage", function() { return CarrinhoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model_pedido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/pedido */ "./src/app/model/pedido.ts");
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/storage.service */ "./src/app/service/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(storageServ, router) {
        this.storageServ = storageServ;
        this.router = router;
        this.pedido = new _model_pedido__WEBPACK_IMPORTED_MODULE_1__["Pedido"]();
        this.total = 0;
    }
    CarrinhoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pedido = this.storageServ.getCart();
        this.pedido.itens.forEach(function (item) {
            firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref().child("produtos/" + item.produto.id + ".jpg").getDownloadURL().then(function (url) {
                item.produto.foto = url;
            });
            _this.total += parseFloat(item.produto.preco);
        });
        console.log(this.pedido);
    };
    CarrinhoPage.prototype.removeCar = function (produto) {
        this.storageServ.setRemoveCart(produto);
        this.pedido = this.storageServ.getCart();
    };
    CarrinhoPage.prototype.index = function () {
        this.router.navigate(['index']);
    };
    CarrinhoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-carrinho',
            template: __webpack_require__(/*! ./carrinho.page.html */ "./src/app/carrinho/carrinho.page.html"),
            styles: [__webpack_require__(/*! ./carrinho.page.scss */ "./src/app/carrinho/carrinho.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());



/***/ })

}]);
//# sourceMappingURL=carrinho-carrinho-module.js.map