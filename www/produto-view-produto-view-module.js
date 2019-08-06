(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produto-view-produto-view-module"],{

/***/ "./src/app/produto-view/produto-view.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/produto-view/produto-view.module.ts ***!
  \*****************************************************/
/*! exports provided: ProdutoViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoViewPageModule", function() { return ProdutoViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _produto_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produto-view.page */ "./src/app/produto-view/produto-view.page.ts");







var routes = [
    {
        path: '',
        component: _produto_view_page__WEBPACK_IMPORTED_MODULE_6__["ProdutoViewPage"]
    }
];
var ProdutoViewPageModule = /** @class */ (function () {
    function ProdutoViewPageModule() {
    }
    ProdutoViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_produto_view_page__WEBPACK_IMPORTED_MODULE_6__["ProdutoViewPage"]]
        })
    ], ProdutoViewPageModule);
    return ProdutoViewPageModule;
}());



/***/ }),

/***/ "./src/app/produto-view/produto-view.page.html":
/*!*****************************************************!*\
  !*** ./src/app/produto-view/produto-view.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Atualizar Produto</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n  \r\n    <img src=\"{{imagem}}\">\r\n  \r\n    <ion-item>\r\n      <input type=\"file\" (change)=\"enviaArquivo($event)\" />\r\n    </ion-item>\r\n  \r\n      <form [formGroup]=\"formGroup\">\r\n        <ion-list>\r\n          <ion-item>\r\n            <ion-label floating>Nome</ion-label>\r\n            <ion-input formControlName=\"nomeProduto\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label floating>Preço</ion-label>\r\n            <ion-input formControlName=\"preco\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label floating>Categoria</ion-label>\r\n            <ion-input formControlName=\"categoria\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label floating>Descrição</ion-label>\r\n              <ion-input formControlName=\"descricao\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n        </ion-list>\r\n        \r\n        <ion-button expand=\"full\" (click)=\"atualizar()\">Atualizar</ion-button>\r\n      </form>\r\n    </ion-content>\r\n  "

/***/ }),

/***/ "./src/app/produto-view/produto-view.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/produto-view/produto-view.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG8tdmlldy9wcm9kdXRvLXZpZXcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/produto-view/produto-view.page.ts":
/*!***************************************************!*\
  !*** ./src/app/produto-view/produto-view.page.ts ***!
  \***************************************************/
/*! exports provided: ProdutoViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoViewPage", function() { return ProdutoViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_produto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/produto */ "./src/app/model/produto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ProdutoViewPage = /** @class */ (function () {
    function ProdutoViewPage(activatedRoute, formBuilder, router, nav, toastController, loadingController) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.nav = nav;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.produto = new _model_produto__WEBPACK_IMPORTED_MODULE_3__["Produto"]();
        this.firestore = firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"]();
        this.settings = { timestampsInSnapshots: true };
        this.id = this.activatedRoute.snapshot.paramMap.get('produto');
        this.obterProduto();
        this.form();
    }
    ProdutoViewPage.prototype.form = function () {
        this.formGroup = this.formBuilder.group({
            nomeProduto: [this.produto.nomeProduto],
            preco: [this.produto.preco],
            categoria: [this.produto.categoria],
            descricao: [this.produto.descricao]
        });
    };
    ProdutoViewPage.prototype.ngOnInit = function () {
        this.obterProduto();
    };
    ProdutoViewPage.prototype.obterProduto = function () {
        var _this = this;
        var ref = firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"]().collection("produto").doc(this.id);
        ref.get().then(function (doc) {
            _this.produto.id = doc.id;
            _this.produto.setDados(doc.data());
            _this.form();
            console.log(doc.data());
            _this.downloadFoto();
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };
    ProdutoViewPage.prototype.atualizar = function () {
        var _this = this;
        var ref = this.firestore.collection('produto');
        ref.doc(this.id).set(this.formGroup.value)
            .then(function () {
            _this.toast('Atualizado com Sucesso');
            _this.router.navigate(['/lista-de-produto']);
            _this.loadingController.dismiss();
        }).catch(function () {
            _this.toast('Erro ao Atualizar');
        });
    };
    ProdutoViewPage.prototype.enviaArquivo = function (event) {
        var _this = this;
        var imagem = event.srcElement.files[0];
        console.log(imagem.name);
        var ref = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref()
            .child("produtos/" + this.id + ".jpg");
        ref.put(imagem).then(function (url) {
            console.log("Enviado com Sucesso");
            _this.downloadFoto();
        });
    };
    ProdutoViewPage.prototype.downloadFoto = function () {
        var _this = this;
        console.log(this.produto.id);
        var ref = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref()
            .child("produtos/" + this.produto.id + ".jpg");
        ref.getDownloadURL().then(function (url) {
            _this.imagem = url;
        });
    };
    ProdutoViewPage.prototype.toast = function (msg) {
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
    ProdutoViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-produto-view',
            template: __webpack_require__(/*! ./produto-view.page.html */ "./src/app/produto-view/produto-view.page.html"),
            styles: [__webpack_require__(/*! ./produto-view.page.scss */ "./src/app/produto-view/produto-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], ProdutoViewPage);
    return ProdutoViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=produto-view-produto-view-module.js.map