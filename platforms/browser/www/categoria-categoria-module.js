(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoria-categoria-module"],{

/***/ "./src/app/categoria/categoria.module.ts":
/*!***********************************************!*\
  !*** ./src/app/categoria/categoria.module.ts ***!
  \***********************************************/
/*! exports provided: CategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPageModule", function() { return CategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria.page */ "./src/app/categoria/categoria.page.ts");







var routes = [
    {
        path: '',
        component: _categoria_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaPage"]
    }
];
var CategoriaPageModule = /** @class */ (function () {
    function CategoriaPageModule() {
    }
    CategoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_categoria_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaPage"]]
        })
    ], CategoriaPageModule);
    return CategoriaPageModule;
}());



/***/ }),

/***/ "./src/app/categoria/categoria.page.html":
/*!***********************************************!*\
  !*** ./src/app/categoria/categoria.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Categoria - {{categoria}}</ion-title>\r\n    <ion-button fill=\"outline\" color=\"dark\" (click)=\"voltar()\"> <ion-icon name=\"undo\"></ion-icon> Voltar</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  \r\n\r\n  <ion-card *ngFor=\"let produto of listaDeProdutos\">\r\n    <ion-card-header>\r\n      <img src=\"{{produto?.foto}}\">\r\n      <ion-card-title>{{produto?.nomeProduto}}</ion-card-title>\r\n      <ion-card-subtitle>R$ {{produto?.preco}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  \r\n</ion-content>"

/***/ }),

/***/ "./src/app/categoria/categoria.page.scss":
/*!***********************************************!*\
  !*** ./src/app/categoria/categoria.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  display: block; }\n\nion-title {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmlhL0Q6XFx1LnVcXERpYTAxLjA3XFxTd2FnZ3kyL3NyY1xcYXBwXFxjYXRlZ29yaWFcXGNhdGVnb3JpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWEvY2F0ZWdvcmlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/categoria/categoria.page.ts":
/*!*********************************************!*\
  !*** ./src/app/categoria/categoria.page.ts ***!
  \*********************************************/
/*! exports provided: CategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPage", function() { return CategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_produto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/produto */ "./src/app/model/produto.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var CategoriaPage = /** @class */ (function () {
    function CategoriaPage(activatedRoute, loadingController, router) {
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.router = router;
        this.listaDeProdutos = [];
        this.categoria = this.activatedRoute.snapshot.paramMap.get('categoria');
    }
    CategoriaPage.prototype.ngOnInit = function () {
        this.obterCategoria();
    };
    CategoriaPage.prototype.obterCategoria = function () {
        var _this = this;
        var ref = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('produto').where("categoria", "==", this.categoria);
        ref.get().then(function (query) {
            query.forEach(function (doc) {
                var c = new _model_produto__WEBPACK_IMPORTED_MODULE_4__["Produto"]();
                c.setDados(doc.data());
                c.id = doc.id;
                var ref = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child("produtos/" + doc.id + ".jpg").getDownloadURL().then(function (url) {
                    c.foto = url;
                    _this.listaDeProdutos.push(c);
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    CategoriaPage.prototype.getList = function () {
        var _this = this;
        var ref = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("produto");
        ref.get().then(function (query) {
            query.forEach(function (doc) {
                var c = new _model_produto__WEBPACK_IMPORTED_MODULE_4__["Produto"]();
                c.setDados(doc.data());
                c.id = doc.id;
                var ref = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child("produtos/" + doc.id + ".jpg").getDownloadURL().then(function (url) {
                    c.foto = url;
                    _this.listaDeProdutos.push(c);
                });
            });
            console.log(_this.listaDeProdutos);
            _this.loadingController.dismiss();
        });
    };
    ;
    CategoriaPage.prototype.voltar = function () {
        this.router.navigate(['index']);
    };
    CategoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-categoria',
            template: __webpack_require__(/*! ./categoria.page.html */ "./src/app/categoria/categoria.page.html"),
            styles: [__webpack_require__(/*! ./categoria.page.scss */ "./src/app/categoria/categoria.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CategoriaPage);
    return CategoriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=categoria-categoria-module.js.map