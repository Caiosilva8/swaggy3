(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Login\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n<!-- Segment with anchors -->\r\n<ion-segment>\r\n    <ion-segment-button (click)=\"proximo()\">\r\n      <ion-label>Login</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button (click)=\"anterior()\">\r\n      <ion-label>Cadastro</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <div class=\"logo\">\r\n    <img src=\"../../assets/img/Logo.png\">  \r\n  </div>\r\n  \r\n\r\n  <!-- \r\n  <ion-button (click)=\"proximo()\">Teste</ion-button>\r\n  <ion-button (click)=\"anterior()\">Teste</ion-button>\r\n  -->\r\n\r\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" >\r\n    <ion-slide>\r\n      <div>\r\n        <span>Cadastro</span>\r\n\r\n        <ion-item>\r\n          <ion-label class=\"\">E-mail</ion-label>\r\n          <ion-input type=\"text\" value=\"\" #email1></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label fixed>Senha</ion-label>\r\n          <ion-input type=\"password\" value=\"\" #senha1></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-button color=\"primary\" (click)=\"cadastrar()\" fill=\"outline\" color=\"dark\">Cadastrar</ion-button>\r\n      </div>\r\n\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <div>\r\n            <span>Login</span>\r\n  \r\n            <ion-item>\r\n                <ion-label class=\"\">E-mail</ion-label>\r\n                <ion-input type=\"text\" value=\"\" #email></ion-input>\r\n            </ion-item>\r\n  \r\n            <ion-item>\r\n                <ion-label fixed>Senha</ion-label>\r\n                <ion-input type=\"password\" value=\"\" #senha></ion-input>\r\n            </ion-item>\r\n  \r\n            <ion-button color=\"primary\" (click)=\"logar()\" fill=\"outline\" color=\"dark\">Entrar</ion-button>\r\n  \r\n          </div>\r\n    </ion-slide>\r\n \r\n  </ion-slides>\r\n\r\n  <div class=\"Social\">\r\n      <ion-icon name=\"logo-facebook\" size=\"large\" (click)=\"facebook()\"></ion-icon>\r\n      <ion-icon name=\"logo-instagram\" size=\"large\" (click)=\"instagram()\"></ion-icon>\r\n      <ion-icon name=\"logo-twitter\" size=\"large\" (click)=\"twitter()\"></ion-icon>\r\n  </div>\r\n  \r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-segment {\n  margin-bottom: 30px; }\n\n.logo {\n  width: 200px;\n  height: 200px;\n  margin-bottom: 50px;\n  margin: 0 auto; }\n\nion-button {\n  margin-top: 10px; }\n\n.Social {\n  margin-top: 50px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcdS51XFxEaWEwMS4wN1xcU3dhZ2d5Mi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLlNvY2lhbHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var HomePage = /** @class */ (function () {
    function HomePage(router, fire) {
        this.router = router;
        this.fire = fire;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    HomePage.prototype.proximo = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.anterior = function () {
        this.slides.slidePrev();
    };
    HomePage.prototype.logar = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
            .then(function () {
            console.log('Logado com sucesso');
            // this.router.navigate(['/list']);
            _this.router.navigate(['/index']);
        })
            .catch(function () {
            console.log('Login Inválido');
        });
    };
    HomePage.prototype.cadastrar = function () {
        this.fire.auth.createUserWithEmailAndPassword(this.email1.value, this.senha1.value)
            .then(function () {
            console.log("Cadastrado com sucesso!");
        }).catch(function () {
            console.log("Usuário inválido");
        });
    };
    HomePage.prototype.facebook = function () {
        window.open("https://pt-br.facebook.com/", '_system', 'location=yes');
    };
    HomePage.prototype.instagram = function () {
        window.open("https://www.instagram.com/?hl=pt-br", '_system', 'location=yes');
    };
    HomePage.prototype.twitter = function () {
        window.open("https://twitter.com/login?lang=pt", '_system', 'location=yes');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomePage.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('senha'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomePage.prototype, "senha", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomePage.prototype, "email1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('senha1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomePage.prototype, "senha1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map