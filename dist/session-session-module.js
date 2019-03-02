(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["session-session-module"],{

/***/ "./src/app/session/error/error.component.html":
/*!****************************************************!*\
  !*** ./src/app/session/error/error.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-page\">\n<div class=\"d-flex justify-content-center full-height full-width align-items-center\">\n  <div class=\"error-container text-center\">\n    <h1 class=\"error-number\">{{error}}</h1>\n    <h2 class=\"semi-bold\">Sorry but we couldnt find this page</h2>\n    <p class=\"p-b-10\">This page you are looking for does not exsist <a href=\"javascript:void(0)\">Report this?</a>\n    </p>\n    <div class=\"error-container-innner text-center\">\n      <form class=\"error-form\">\n        <div class=\" transparent text-left\">\n          <div class=\"form-group form-group-default input-group\" pgFormGroupDefault>  \n            <div class=\"form-input-group\">\n              <label>Search</label>\n              <input class=\"form-control\" placeholder=\"Try searching the missing page\" type=\"email\">\n            </div>\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text transparent\">\n                <span class=\"pg pg-search\"></span>\n              </span>\n            </div>\n          </div>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"pull-bottom sm-pull-bottom full-width d-flex align-items-center justify-content-center\">\n<div class=\"error-container\">\n  <div class=\"error-container-innner\">\n    <div class=\"p-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up row no-margin\">\n      <div class=\"col-md-3 no-padding d-flex align-items-center justify-content-center\">\n        <img alt=\"\" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" height=\"60\" src=\"assets/img/demo/pages_icon.png\" width=\"60\">\n      </div>\n      <div class=\"col-md-9 no-padding d-flex align-items-center justify-content-center\">\n        <p class=\"small no-margin flex-1\">Create a pages account. If you have a facebook account, log into it for this process.\n              Sign in with <a href=\"javascript:void(0)\">Facebook</a> or <a href=\"javascript:void(0)\">Google</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/session/error/error.component.scss":
/*!****************************************************!*\
  !*** ./src/app/session/error/error.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-page {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/session/error/error.component.ts":
/*!**************************************************!*\
  !*** ./src/app/session/error/error.component.ts ***!
  \**************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.error = params['type'];
        });
    };
    ErrorComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/session/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/session/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/session/lockscreen/lockscreen.component.html":
/*!**************************************************************!*\
  !*** ./src/app/session/lockscreen/lockscreen.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START PAGE-CONTAINER -->\n<div class=\"lock-container full-height\">\n  <!-- START PAGE CONTENT WRAPPER -->\n  <div class=\"full-height sm-p-t-50 align-items-center d-md-flex\">\n    <div class=\"row full-width\">\n      <div class=\"col-md-6\">\n        <!-- START Lock Screen User Info -->\n        <div class=\"d-flex justify-content-start align-items-center\">\n          <div class=\"\">\n            <div class=\"thumbnail-wrapper circular d48 m-r-10 \">\n              <img width=\"43\" height=\"43\" src2x=\"assets/img/profiles/avatar_small2x.jpg\" pgRetina src1x=\"assets/img/profiles/avatar.jpg\" alt=\"\" src=\"assets/img/profiles/avatar_small2x.jpg\">\n            </div>\n          </div>\n          <div class=\"\">\n            <h5 class=\"logged hint-text no-margin\">Logged in as</h5>\n            <h2 class=\"name no-margin\">David Nester</h2>\n          </div>\n        </div>\n        <!-- END Lock Screen User Info -->\n      </div>\n      <div class=\"col-md-6\">\n        <!-- START Lock Screen Form -->\n        <form id=\"form-lock\" role=\"form\" action=\"index.html\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <!-- START Form Control -->\n              <div class=\"form-group form-group-default sm-m-t-30\">\n                <label>Credentials</label>\n                <div class=\"controls\">\n                  <input type=\"text\" name=\"password\" placeholder=\"Password to unlock\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!-- END Form Control -->\n            </div>\n          </div>\n          <!-- START Lock Screen Notification Icons-->\n          <div class=\"row\">\n            <div class=\"col-md-12 sm-p-l-25\">\n              <a href=\"javascript:void(0)\" class=\"inline text-black fs-14 hint-text\"><i class=\"pg pg-mail\"></i>&nbsp;<span class=\"hint-text\">12</span></a>\n              <a href=\"javascript:void(0)\" class=\"inline text-black  fs-14 hint-text m-l-30\"><i class=\"pg pg-comment\"></i>&nbsp;<span class=\"hint-text\">4</span></a>\n            </div>\n          </div>\n          <!-- END Lock Screen Notification Icons-->\n        </form>\n        <!-- END Lock Screen Form -->\n      </div>\n    </div>\n  </div>\n  <!-- END PAGE CONTENT WRAPPER -->\n</div>\n<!-- END PAGE-CONTAINER -->\n<!-- START Lock Screen Footer Content-->\n<div class=\"pull-bottom full-width\">\n  <div class=\"lock-container m-b-10 clearfix row\">\n    <div class=\"inline col-lg-2\">\n      <img src=\"assets/img/demo/pages_icon.png\" alt=\"\" class=\"m-t-5 \" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" width=\"60\" height=\"60\">\n    </div>\n    <div class=\"col-lg-10 m-t-15\">\n      <p class=\"hinted-text small inline \">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/session/lockscreen/lockscreen.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/session/lockscreen/lockscreen.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/session/lockscreen/lockscreen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/session/lockscreen/lockscreen.component.ts ***!
  \************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockscreenComponent = /** @class */ (function () {
    function LockscreenComponent() {
    }
    LockscreenComponent.prototype.ngOnInit = function () {
    };
    LockscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lockscreen',
            template: __webpack_require__(/*! ./lockscreen.component.html */ "./src/app/session/lockscreen/lockscreen.component.html"),
            styles: [__webpack_require__(/*! ./lockscreen.component.scss */ "./src/app/session/lockscreen/lockscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LockscreenComponent);
    return LockscreenComponent;
}());



/***/ }),

/***/ "./src/app/session/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/session/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper \">\n\t<!-- START Login Background Pic Wrapper-->\n\t<div class=\"bg-pic\">\n\t\t<!-- START Background Pic-->\n\t\t<div class=\"img-holder\"  [ngStyle]=\"{'background-color':'#333','opacity':'1'}\"></div> \n\t\t<!-- START Background Caption-->\n\t\t\n\t\t<!-- END Background Caption-->\n\t</div>\n\t<!-- END Login Background Pic Wrapper-->\n\t<!-- START Login Right Container-->\n\t<div class=\"login-container bg-white\">\n\t\t<div class=\"p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40\">\n\t\t\t<img src=\"assets/img/athena_logo.png\" alt=\"logo\" style=\"width:80%;\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/athena_logo.png\"\n\t\t\t     >\n\t\t\t\t <p class=\"p-t-35\">Veuillez saisir vos identifiants</p>\n\t\t\t<!-- START Login Form -->\n\t\t\t<form class=\"p-t-15\" role=\"form\" #loginForm=\"ngForm\">\n\t\t\t\t<!-- START Form Control-->\n\t\t\t\t<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"loginUserName.invalid && (loginUserName.dirty || loginUserName.touched)\">\n\t\t\t\t\t<label>Identifiant</label>\n\t\t\t\t\t<input type=\"text\" id=\"userName\" name=\"userName\" [(ngModel)]=\"userName\"  #loginUserName=\"ngModel\" required  placeholder=\"User Name\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"loginUserName.invalid && (loginUserName.dirty || loginUserName.touched)\" >\n\t\t\t\t\t<label  *ngIf=\"loginUserName.errors.required\" class=\"error\" >Ce champ est obligatoire.</label>\n\t\t\t\t</div>\n\t\t\t\t<!-- END Form Control-->\n\t\t\t\t<!-- START Form Control-->\n\t\t\t\t<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\">\n\t\t\t\t\t<label>Mot de passe</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Credentials\" id=\"password\" name=\"password\" [(ngModel)]=\"password\"  #loginPassword=\"ngModel\" required>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\" >\n\t\t\t\t\t<label  *ngIf=\"loginPassword.errors.required\" class=\"error\" >Ce champ est obligatoire.</label>\n\t\t\t\t</div>\n\t\t\t\t<!-- START Form Control-->\n\t\t\t\t\n\t\t\t\t<!-- END Form Control-->\n\t\t\t\t<button (click)=\"logMe()\" class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"loginForm.invalid\">Se connecter</button>\n\t\t\t</form>\n\t\t\t<!--END Login Form-->\n\t\t\t\n\t\t</div>\n\t</div>\n\t<!-- END Login Right Container-->\n</div>"

/***/ }),

/***/ "./src/app/session/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/session/login/login.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/session/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/session/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth) {
        this.afAuth = afAuth;
    }
    LoginComponent.prototype.logMe = function () {
        /*this.afAuth.auth.signInWithCustomToken("???????").catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log(error);
        });*/
        //CHEK FIREBASE
        //let tthis = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.userName, this.password).then(function (credential) {
            //console.log(this.us.getUser());
            //this.afAuth.auth.sendPasswordResetEmail("fab.grenouillet@gmail.com");
            //lrouter.navigate(['/dashboard']); 
        }).catch(function (error) {
            alert("Veuillez vérifier vos identifiants");
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/session/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/session/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/session/register/register.component.html":
/*!**********************************************************!*\
  !*** ./src/app/session/register/register.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container full-height sm-p-t-30\">\n    <div class=\"d-flex justify-content-center flex-column full-height \">\n\n          <img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">\n          <h3>Pages makes it easy to enjoy what matters the most in your life</h3>\n          <p>\n            Create a pages account. If you have a facebook account, log into it for this process. Sign in with <a href=\"javascript:void(0)\" class=\"text-info\">Facebook</a> or <a href=\"javascript:void(0)\" class=\"text-info\">Google</a>\n          </p>\n          <form class=\"p-t-15\" role=\"form\" #registerForm=\"ngForm\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"fName.invalid && (fName.dirty || fName.touched)\">\n                  <label>First Name</label>\n                  <input type=\"text\" placeholder=\"John\" class=\"form-control\" id=\"txtfname\" name=\"txtfname\" [(ngModel)]=\"txtfname\"  #fName=\"ngModel\" required >\n                </div>\n                <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" >\n                    <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required.</label>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"LName.invalid && (LName.dirty || LName.touched)\">\n                  <label>Last Names</label>\n                  <input type=\"text\" placeholder=\"Smith\" class=\"form-control\" id=\"txtlname\" name=\"txtlname\" [(ngModel)]=\"txtlname\"  #LName=\"ngModel\" required>\n                </div>\n                <div *ngIf=\"LName.invalid && (LName.dirty || LName.touched)\" >\n                    <label  *ngIf=\"LName.errors.required\" class=\"error\" >This field is required.</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"userName.invalid && (userName.dirty || userName.touched)\">\n                  <label>Pages User name</label>\n                  <input type=\"text\" placeholder=\"yourname.pages.com (this can be changed later)\" class=\"form-control\" id=\"txtusername\" name=\"txtusername\" [(ngModel)]=\"txtusername\"  #userName=\"ngModel\" required>\n                </div>\n                <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\" >\n                    <label  *ngIf=\"userName.errors.required\" class=\"error\" >This field is required.</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"password.invalid && (password.dirty || password.touched)\">\n                  <label>Password</label>\n                  <input type=\"password\"  placeholder=\"Minimum of 4 Charactors\" class=\"form-control\" id=\"txtpassword\" name=\"txtpassword\" [(ngModel)]=\"txtpassword\"  #password=\"ngModel\" required>\n                </div>\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" >\n                    <label  *ngIf=\"password.errors.required\" class=\"error\" >This field is required.</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"email.invalid && (email.dirty || email.touched)\">\n                  <label>Email</label>\n                  <input type=\"email\" placeholder=\"We will send loging details to you\" class=\"form-control\" id=\"txtemail\" name=\"txtemail\" [(ngModel)]=\"txtemail\"  #email=\"ngModel\" required>\n                </div>\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\n                    <label  *ngIf=\"email.errors.required\" class=\"error\" >This field is required.</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row m-t-10\">\n              <div class=\"col-lg-6\">\n                <p><small>I agree to the <a href=\"javascript:void(0)\" class=\"text-info\">Pages Terms</a> and <a href=\"javascript:void(0)\" class=\"text-info\">Privacy</a>.</small></p>\n              </div>\n              <div class=\"col-lg-6 text-right\">\n                <a href=\"javascript:void(0)\" class=\"text-info small\">Help? Contact Support</a>\n              </div>\n            </div>\n            <button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"registerForm.invalid\">Create a new account</button>\n          </form>\n\n    </div>\n  </div>\n  <div class=\" full-width\">\n    <div class=\"register-container m-b-10 clearfix\">\n      <div class=\"m-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up\">\n        <div class=\"col-md-2 no-padding d-flex align-items-center\">\n          <img src=\"assets/img/demo/pages_icon.png\" alt=\"\" class=\"\" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" width=\"60\" height=\"60\">\n        </div>\n        <div class=\"col-md-9 no-padding d-flex align-items-center\">\n          <p class=\"hinted-text small inline sm-p-t-10\">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/session/register/register.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/session/register/register.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/session/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/session/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent() {
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/session/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/session/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/session/session.module.ts":
/*!*******************************************!*\
  !*** ./src/app/session/session.module.ts ***!
  \*******************************************/
/*! exports provided: SessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _session_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.routing */ "./src/app/session/session.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/session/error/error.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/session/login/login.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/session/lockscreen/lockscreen.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/session/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_session_routing__WEBPACK_IMPORTED_MODULE_4__["SessionRoute"]),
            ],
            declarations: [_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_8__["LockscreenComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"]]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "./src/app/session/session.routing.ts":
/*!********************************************!*\
  !*** ./src/app/session/session.routing.ts ***!
  \********************************************/
/*! exports provided: SessionRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRoute", function() { return SessionRoute; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/session/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/session/register/register.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "./src/app/session/error/error.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/session/lockscreen/lockscreen.component.ts");




var SessionRoute = [
    {
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterPageComponent"]
            }, {
                path: 'error/:type',
                component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]
            }, {
                path: 'lock',
                component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__["LockscreenComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=session-session-module.js.map