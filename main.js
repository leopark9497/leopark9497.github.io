(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");







var routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"] },
    { path: 'About', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"] },
    { path: 'Gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"] },
    { path: 'Tools', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__["PricingComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n  <div class=\"top-border wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\"></div>\n  <div class=\"right-border wow fadeInRight animated\" style=\"visibility: visible; animation-name: fadeInRight;\"></div>\n  <div class=\"bottom-border wow fadeInUp animated\" style=\"visibility: visible; animation-name: fadeInUp;\"></div>\n  <div class=\"left-border wow fadeInLeft animated\" style=\"visibility: visible; animation-name: fadeInLeft;\"></div>\n</div>\n\n<div id=\"wrapper\">\n\n  \n  \n  <!--Main Content Area-->\n  <main id=\"content\">\n      <app-navbar></app-navbar>\n      <router-outlet></router-outlet>\n      \n  </main>\n  <!--End Main Content Area-->\n\n  \n  \n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'website';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!--Pricing Block-->\n     <div  class=\"pricing-block featured col-3 wow fadeInUp\" data-wow-delay=\"0.6s\" *ngFor=\"let tech of techs\" >\n      <div class=\"pricing-block-content\">\n          <h3>{{tech.title}}</h3>\n          <p class=\"pricing-sub\">{{tech.subTitle}}</p>\n          <div class=\"pricing\">\n            <i class=\"{{tech.icon}}\"></i>   \n          </div>\n          \n      </div>\n      </div>\n      \n  <!--End Pricing Block-->"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var BlogComponent = /** @class */ (function () {
    function BlogComponent(config) {
        this.config = config;
        this.techs = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.techs = this.getTech();
    };
    BlogComponent.prototype.getTech = function () {
        return this.config.getConfig().techs;
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/app/configuration.ts");



var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.config = _configuration__WEBPACK_IMPORTED_MODULE_2__["configuration"];
    }
    ConfigService.prototype.getConfig = function () {
        return this.config;
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/configuration.ts":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuration", function() { return configuration; });
var configuration = {
    techs: [{ id: '1', title: 'CSS3', subTitle: 'Intermidiate', icon: 'fa fa-css3 fa-2x' },
        { id: '2', title: 'HTML5', subTitle: 'Mastered', icon: 'fa fa-html5 fa-2x' },
        { id: '3', title: 'JavaScript ES6', subTitle: 'Upper Intermidiate', icon: 'fab fa-js fa-2x' },
        { id: '4', title: 'Angular', subTitle: 'Lower Intermediate', icon: 'fab fa-angular fa-2x' },
        { id: '4', title: 'React', subTitle: 'Lower Intermediate', icon: 'fab fa-react fa-2x' },
        { id: '4', title: 'jQuery', subTitle: 'Intermediate', icon: 'fab fa-js fa-2x' },
    ]
};


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"landing-footer\" class=\"clearfix\">\n  <div class=\"row clearfix\">\n\n      <p id=\"copyright\" class=\"col-2\">Made with love by <a href=\"https://www.shapingrain.com\">ShapingRain</a></p>\n\n      <!--Social Icons in Footer-->\n      <ul class=\"col-2 social-icons\">\n          <li>\n              <a target=\"_blank\" title=\"Facebook\" href=\"https://www.facebook.com/username\">\n                  <i class=\"fa fa-facebook fa-1x\"></i><span>Facebook</span>\n              </a>\n          </li>\n          <li>\n              <a target=\"_blank\" title=\"Google+\" href=\"http://google.com/+username\">\n                  <i class=\"fa fa-google-plus fa-1x\"></i><span>Google+</span>\n              </a>\n          </li>\n          <li>\n              <a target=\"_blank\" title=\"Twitter\" href=\"http://www.twitter.com/username\">\n                  <i class=\"fa fa-twitter fa-1x\"></i><span>Twitter</span>\n              </a>\n          </li>\n          <li>\n              <a target=\"_blank\" title=\"Instagram\" href=\"http://www.instagram.com/username\">\n                  <i class=\"fa fa-instagram fa-1x\"></i><span>Instagram</span>\n              </a>\n          </li>\n          <li>\n              <a target=\"_blank\" title=\"behance\" href=\"http://www.behance.net\">\n                  <i class=\"fa fa-behance fa-1x\"></i><span>Behance</span>\n              </a>\n          </li>\n      </ul>\n      <!--End of Social Icons in Footer-->\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"gallery\" class=\"row text-center scrollto clearfix\" data-featherlight-gallery\ndata-featherlight-filter=\"a\">\n\n<a href=\"../assets/images/gallery-images/gallery-image-1.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.1s\"><img src=\"../assets/images/gallery-images/gallery-image-1.jpg\" alt=\"Landing Page\"/></a>\n<a href=\"../assets/images/gallery-images/gallery-image-2.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.3s\"><img src=\"../assets/images/gallery-images/gallery-image-2.jpg\" alt=\"Landing Page\"/></a>\n<a href=\"../assets/images/gallery-images/gallery-image-3.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.5s\"><img src=\"../assets/images/gallery-images/gallery-image-3.jpg\" alt=\"Landing Page\"/></a>\n<a href=\"../assets/images/gallery-images/gallery-image-4.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"1.1s\"><img src=\"../assets/images/gallery-images/gallery-image-4.jpg\" alt=\"Landing Page\"/></a>\n<a href=\"../assets/images/gallery-images/gallery-image-5.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.9s\"><img src=\"../assets/images/gallery-images/gallery-image-5.jpg\" alt=\"Landing Page\"/></a>\n<a href=\"../assets/images/gallery-images/gallery-image-6.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.7s\"><img src=\"../assets/images/gallery-images/gallery-image-6.jpg\" alt=\"Landing Page\"/></a>\n\n</aside>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#banner {\r\n    \r\n    background-size:cover;\r\n    background-position: fixed;\r\n\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQiwwQkFBMEI7OztBQUc5QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYW5uZXIge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBmaXhlZDtcclxuXHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\n\n  <!--Banner Content-->\n  <div id=\"banner-content\" class=\"row clearfix\">\n\n      <div class=\"col-38\">\n\n          <div class=\"section-heading\">\n              <h1>FULLSTACK WEB DEVELOPER PORTFOLIO</h1>\n              <h2>My name is Jay Phan and this is my portfolio.</h2>\n          </div>\n\n          <!--Call to Action-->\n          <a routerLink=\"/About\" class=\"button\">ABOUT ME</a>\n          <!--End Call to Action-->\n\n      </div>\n\n  </div><!--End of Row-->\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <!--Introduction-->\n      <section id=\"about\" class=\"introduction scrollto\">\n\n        <div class=\"row clearfix\">\n\n            <div class=\"col-3\">\n                <div class=\"section-heading\">\n                    <h3>ABOUT ME</h3>\n                    <h2 class=\"section-title\">WHO AM I?</h2>\n                    <p class=\"section-subtitle\">I am a fullstack web developer and currently studying at Helsinki Business College to Vocational Qualification in Information and Communications Technology. The program generate new software developers who will specializes in React and JavaScript in Front End and PHP, Symfony, Drupal & WordPress in Back End. But you can see that this is a one-page application created with Angular in the front and backed by NodeJs. This means that I am really passionate to learn new technologies and methods. Feel free to walk around  my pages and see what you looking for.</p><br>\n                    <p>Jay Phan</p>\n                </div>\n\n            </div>\n\n            <div class=\"col-2-3\">\n\n                <!--Icon Block-->\n                <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\">\n                    <!--Icon-->\n                    <div class=\"icon\">\n                        <i class=\"fab fa-js fa-2x\"></i>\n                        \n                        \n                    </div>\n                    <!--Icon Block Description-->\n                    <div class=\"icon-block-description\">\n                        <h4>Programing Languages</h4>\n                        <p>JavaScript is my favorite languages to work with. I can write PHP also</p>\n                    </div>\n                </div>\n                <!--End of Icon Block-->\n                                <!--Icon Block-->\n                                <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\n                                        <!--Icon-->\n                                        <div class=\"icon\">\n                                            <i class=\"fa fa-tablet fa-2x\"></i>\n                                        </div>\n                                        <!--Icon Block Description-->\n                                        <div class=\"icon-block-description\">\n                                            <h4>Fully Responsive</h4>\n                                            <p>I like my websites to be really responsive (mobile friendly)</p>\n                                        </div>\n                                    </div>\n                                    <!--End of Icon Block-->\n\n                <!--Icon Block-->\n                <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.3s\">\n                    <!--Icon-->\n                    <div class=\"icon\">\n                        <i class=\"fa fa-bolt fa-2x\"></i>\n                    </div>\n                    <!--Icon Block Description-->\n                    <div class=\"icon-block-description\">\n                        <h4>One-page Application</h4>\n                        <p>Srolling is boring so I used Angular Router.</p>\n                    </div>\n                </div>\n                <!--End of Icon Block-->\n\n\n\n                <!--Icon Block-->\n                <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\n                    <!--Icon-->\n                    <div class=\"icon\">\n                        <i class=\"fa fa-rocket fa-2x\"></i>\n                    </div>\n                    <!--Icon Block Description-->\n                    <div class=\"icon-block-description\">\n                        <h4>Parallax Effect</h4>\n                        <p>Yes, the home page has the paralax effect but you have to reload to site first</p>\n                    </div>\n                </div>\n                <!--End of Icon Block-->\n\n            </div>\n\n        </div>\n\n\n    </section>\n    <!--End of Introduction-->\n"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\n    <div id=\"header\" class=\"nav-collapse\">\n        <div class=\"row clearfix\">\n            <div class=\"col-1\">\n\n                <!--Logo-->\n                <div id=\"logo\">\n\n                    <!--Logo that is shown on the banner-->\n                    <img src=\"assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\"/>\n                    <!--End of Banner Logo-->\n\n                    <!--The Logo that is shown on the sticky Navigation Bar-->\n                    <img src=\"assets/images/logo-2.png\" id=\"navigation-logo\" alt=\"Landing Page\"/>\n                    <!--End of Navigation Logo-->\n\n                </div>\n                <!--End of Logo-->\n\n                <aside>\n\n                    <!--Social Icons in Header-->\n                    <ul class=\"social-icons\">\n                        <li>\n                            <a target=\"_blank\" title=\"Facebook\" href=\"https://www.facebook.com/acoustiz.poy\">\n                                <i class=\"fa fa-facebook fa-1x\"></i><span>Facebook</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a target=\"_blank\" title=\"Google+\" href=\"http://google.com/+hongduong1997\">\n                                <i class=\"fa fa-google-plus fa-1x\"></i><span>Google+</span>\n                            </a>\n                        </li>\n                    \n                        <li>\n                            <a target=\"_blank\" title=\"Instagram\" href=\"http://www.instagram.com/hongduong1997\">\n                                <i class=\"fa fa-instagram fa-1x\"></i><span>Instagram</span>\n                            </a>\n                        </li>\n                      \n                    </ul>\n                    <!--End of Social Icons in Header-->\n\n                </aside>\n\n                <!--Main Navigation-->\n                <nav id=\"nav-main\">\n                    <ul>\n                        <li>\n                            <a  routerLink=\"/Home\">Home</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/About\">About</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/Gallery\">Gallery</a>\n                        </li>\n                     \n                        <li>\n                            <a routerLink=\"/Tools\">Tools</a>\n                        </li>\n                        \n                    </ul>\n                </nav>\n                <!--End of Main Navigation-->\n\n                <div id=\"nav-trigger\"><span></span></div>\n                <nav id=\"nav-mobile\"></nav>\n\n            </div>\n        </div>\n    </div><!--End of Header-->\n  </header>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/*!************************************************!*\
  !*** ./src/app/pricing/pricing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n  <div class=\"row clearfix\">\n\n      <div class=\"section-heading\">\n          <h3>TAKE A LOOK AT</h3>\n          <h2 class=\"section-title\">My Favorite Tools</h2>\n      </div>\n      \n      <app-blog ></app-blog>\n      \n      \n\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pricing/pricing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! j:\mywebsite\website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map