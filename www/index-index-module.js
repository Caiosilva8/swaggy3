(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "./src/app/index/index.module.ts":
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/index/index.page.ts");







var routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]
    }
];
var IndexPageModule = /** @class */ (function () {
    function IndexPageModule() {
    }
    IndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
        })
    ], IndexPageModule);
    return IndexPageModule;
}());



/***/ }),

/***/ "./src/app/index/index.page.html":
/*!***************************************!*\
  !*** ./src/app/index/index.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon name=\"menu\" size=\"large\" id=\"menu\"></ion-icon>\r\n    <ion-icon name=\"cart\" size=\"large\" id=\"market\" (click)=\"carrinho()\"></ion-icon>\r\n    <img src=\"../../assets/img/Logo.png\" height=\"100\" width=\"100\" class=\"icon\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-slides pager=\"true\" autoplay=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <ion-img src=\"../../assets/img/f.jpg\"></ion-img>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ion-img src=\"../../assets/img/e.jpg\"></ion-img>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ion-img src=\"../../assets/img/d.jpg\"></ion-img>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"carrinho()\">\r\n      <ion-icon name=\"cart\"></ion-icon>\r\n      <ion-badge color=\"primary\"></ion-badge>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n        <ion-slides pager=\"true\" [options]=\"slideOpts1\">\r\n            <ion-slide>\r\n          <ion-tab-button tab=\"schedule\" (click)=\"att('Jaqueta')\">\r\n            <img src=\"../../assets/img/hooded-jacket.png\" width=\"100px\" height=\"100px\" />\r\n            <ion-label>Casacos</ion-label>\r\n          </ion-tab-button>\r\n          </ion-slide>\r\n          <ion-slide>\r\n          <ion-tab-button tab=\"speakers\"  (click)=\"att('Tenis')\">\r\n            <img src=\"../../assets/img/shoe2.png\" width=\"100px\" height=\"100px\" />\r\n            <ion-label>Tênis</ion-label>\r\n            </ion-tab-button>\r\n          </ion-slide>\r\n          <ion-slide>\r\n          <ion-tab-button tab=\"speakers\"  (click)=\"att('Acessórios')\">\r\n            <img src=\"../../assets/img/cap.png\" width=\"100px\" height=\"100px\" />\r\n            <ion-label>Bonés</ion-label>\r\n          </ion-tab-button>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-tab-button tab=\"speakers\" (click)=\"att('Camisas')\">\r\n            <img src=\"../../assets/img/cotton-polo-shirt.png\" width=\"100px\" height=\"100px\" />\r\n            <ion-label>Camisas</ion-label>\r\n          </ion-tab-button>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-tab-button tab=\"speakers\" (click)=\"att('Calças')\">\r\n            <img src=\"../../assets/img/chinos-pants.png\" width=\"100px\" height=\"100px\" />\r\n            <ion-label>Calças</ion-label>\r\n          </ion-tab-button>\r\n        </ion-slide>\r\n          </ion-slides>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-card *ngFor=\"let produto of listaDeProdutos\">\r\n    <ion-card-header>\r\n      <img src=\"{{produto?.foto}}\" class=\"aa\">\r\n      <ion-card-title>{{produto?.nomeProduto}}</ion-card-title>\r\n      <ion-card-subtitle>R$ {{produto?.preco}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-button fill=\"outline\" slot=\"end\" (click)=\"addCarrinho(produto)\">Adicionar</ion-button>\r\n  </ion-card>\r\n\r\n  <!-- fab placed in the center of the content with a list on each side -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" id=\"fab\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button (click)=\"facebook()\">\r\n        <ion-icon name=\"logo-facebook\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button (click)=\"instagram()\">\r\n        <ion-icon name=\"logo-instagram\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button (click)=\"twitter()\">\r\n        <ion-icon name=\"logo-twitter\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n  <ion-footer>\r\n    <ion-toolbar>\r\n      <b>Swaggy Multimarcas ©</b>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/index/index.page.scss":
/*!***************************************!*\
  !*** ./src/app/index/index.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  bottom: 0;\n  width: 100%;\n  color: black;\n  text-align: center;\n  font-weight: bold; }\n\nion-col {\n  position: center; }\n\nion-icon {\n  position: relative; }\n\n.cart {\n  background-image: url('cart.png');\n  width: 50px;\n  height: 50px; }\n\nion-card {\n  text-align: center; }\n\n#menu {\n  float: left; }\n\n#market {\n  float: right; }\n\n.icon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\nion-slides {\n  height: 150px; }\n\n.aa {\n  height: 200px;\n  width: 200px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.tp {\n  height: 150px;\n  width: 150px; }\n\nion-card-subtitle {\n  font-weight: bold;\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvRDpcXHUudVxcRGlhMDEuMDdcXFN3YWdneTIvc3JjXFxhcHBcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFRO0VBQ1IsV0FBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUNBQWdEO0VBQ2hELFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWM7RUFDZCxZQUFhLEVBQUE7O0FBRWpCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1jb2x7XHJcbiAgICBwb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2FydHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2NhcnQucG5nKTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNtZW51IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiNtYXJrZXQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24tc2xpZGVze1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmFhe1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi50cHtcclxuICAgIGhlaWdodCA6IDE1MHB4O1xyXG4gICAgd2lkdGggOiAxNTBweDtcclxufVxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/index/index.page.ts":
/*!*************************************!*\
  !*** ./src/app/index/index.page.ts ***!
  \*************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/storage.service */ "./src/app/service/storage.service.ts");
/* harmony import */ var _model_pedido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/pedido */ "./src/app/model/pedido.ts");






var IndexPage = /** @class */ (function () {
    function IndexPage(loadingController, storageServ, router) {
        this.loadingController = loadingController;
        this.storageServ = storageServ;
        this.router = router;
        this.listaDeProdutos = [];
        this.pedido = new _model_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"]();
        this.slideOpts = {
            initialSlide: 0,
            speed: 20,
            autoplay: true,
            loop: true,
            slidesPerView: 1,
        };
        this.slideOpts1 = {
            initialSlide: 0,
            speed: 20,
            autoplay: false,
            loop: false,
            slidesPerView: 3,
        };
    }
    IndexPage.prototype.ngOnInit = function () {
        this.getList();
    };
    IndexPage.prototype.att = function (nomeCategoria) {
        this.router.navigate(['/categoria', { 'categoria': nomeCategoria }]);
    };
    IndexPage.prototype.carrinho = function () {
        this.router.navigate(['carrinho']);
    };
    IndexPage.prototype.facebook = function () {
        window.open("https://pt-br.facebook.com/", '_system', 'location=yes');
    };
    IndexPage.prototype.instagram = function () {
        window.open("https://www.instagram.com/?hl=pt-br", '_system', 'location=yes');
    };
    IndexPage.prototype.twitter = function () {
        window.open("https://twitter.com/login?lang=pt", '_system', 'location=yes');
    };
    IndexPage.prototype.addCarrinho = function (produto) {
        /*
        this.pedido = this.storageServ.getCart();
        let add = true;
    
        let i = new Item();
        i.produto = produto;
        i.quantidade = 1;
    
        if(this.pedido==null){ // Caso pedido esteja vazio
          this.pedido = new Pedido(); //cria umm novo pedido
          this.pedido.itens = []; //cria uma lista de itens
        }
    
        this.pedido.itens.forEach(p => {
          if(p.produto.id == produto.id){
            add = false;
          }
        });
    
        if(add==true) this.pedido.itens.push(i);
    
        this.storageServ.setCart(this.pedido);
        */
    };
    IndexPage.prototype.getList = function () {
        /*
        var ref = firebase.firestore().collection("produto");
        ref.get().then(query => {
          query.forEach(doc => {
            let c = new Produto();
            c.setDados(doc.data());
            c.id = doc.id;
    
    
            let ref = firebase.storage().ref().child(`produtos/${doc.id}.jpg`).getDownloadURL().then(url => {
              c.foto = url;
    
              this.listaDeProdutos.push(c);
            })
          });
          console.log(this.listaDeProdutos)
          this.loadingController.dismiss();
        });*/
    };
    ;
    IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.page.html */ "./src/app/index/index.page.html"),
            styles: [__webpack_require__(/*! ./index.page.scss */ "./src/app/index/index.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _service_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IndexPage);
    return IndexPage;
}());



/***/ })

}]);
//# sourceMappingURL=index-index-module.js.map