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

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".interest {\r\n    display: inline-block;\r\n    padding: 10px;\r\n    background-color: lightblue;\r\n    margin: 3px;\r\n}\r\n.delete-icon {\r\n    color: #222;\r\n    font-size: 1.8rem;\r\n}\r\n.top-spacer {\r\n    margin-top: 20px;\r\n}\r\n.left-spacer {\r\n    margin-left: 20px;\r\n}\r\n.error-style {\r\n    padding-top: 10px;\r\n}\r\n.close-style {\r\n    font-size: 5rem;\r\n    color: #000;\r\n}\r\n.close-style:hover {\r\n    color: cornflowerblue;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <h1>Add new user</h1>\n  </div>  \n  <div class=\"col-xs-2\">\n    <div class=\"pull-right\">\n      <span class=\"close-style\" routerLink=\"/users\">&times;</span>\n    </div>\n  </div>\n</div>\n<div class=\"row top-spacer\">\n  <div class=\"col-xs-12\">\n      <form #addUserForm=\"ngForm\" novalidate>\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name <span class=\"text-danger\">*</span> :</label>\n          <input type=\"text\" [class.is-invalid]=\"firstName.invalid && firstName.touched\" \n            class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First name\"\n            [(ngModel)]=\"newUser.firstName\" required #firstName=\"ngModel\">\n            <small [hidden]=\"firstName.valid || firstName.untouched\" class=\"text-danger error-style\"><i class=\"fas fa-times-circle\"></i> First Name is required.</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name <span class=\"text-danger\">*</span> :</label>\n          <input type=\"text\" [class.is-invalid]=\"lastName.invalid && lastName.touched\"\n            class=\"form-control\" name=\"lastName\" placeholder=\"Last name\"\n            #lastName=\"ngModel\" [(ngModel)]=\"newUser.lastName\" required>\n            <small [hidden]=\"lastName.valid || lastName.untouched\" class=\"text-danger error-style\"><i class=\"fas fa-times-circle\"></i> Last Name is required.</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\">Username <span class=\"text-danger\">*</span> :</label>\n          <input type=\"text\" [class.is-invalid]=\"username.invalid && username.touched\"\n            class=\"form-control\" name=\"username\" placeholder=\"Username\"\n            #username=\"ngModel\" [(ngModel)]=\"newUser.username\" required>\n            <small [hidden]=\"username.valid || username.untouched\" class=\"text-danger error-style\"><i class=\"fas fa-times-circle\"></i> Username is required.</small>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">Interests: <small>(Use the Add button to add multiple interests)</small></label>\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <div class=\"interest\" *ngFor=\"let interest of newUser.interests\">\n                  {{interest}} <i class=\"far fa-times-circle delete-icon\" (click)=\"deleteInterest(interest)\"></i>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-11\">\n                  <input type=\"text\" class=\"form-control\" name=\"interest\" \n                    placeholder=\"Interest\" #interestField (keyup)=\"checkInterest($event)\">\n              </div>\n              <div class=\"col-xs-1\">\n                <button class=\"btn btn-primary\" [disabled]=\"isAddButtonDisabled\" (click)=\"addInterest(interestField.value); interestField.value = '';\"><i class=\"fas fa-plus\"></i> Add</button>\n              </div>\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <label for=\"phoneNumber\">Phone Number <span class=\"text-danger\">*</span> :</label>\n          <input type=\"number\" (blur)=\"validatePhoneNumber(phoneNumber.value)\" \n            (keyup)=\"validatePhoneNumber(phoneNumber.value)\"\n            [class.is-invalid]=\"phoneNumber.invalid && phoneNumber.touched\" \n            class=\"form-control\" name=\"phoneNumber\" placeholder=\"\"\n            [(ngModel)]=\"newUser.phoneNumber\" #phoneNumber=\"ngModel\">\n            <small *ngIf=\"phoneNumberHasError\" class=\"text-danger\"><i class=\"fas fa-times-circle\"></i> Phone number is required.</small>\n            <small [hidden]=\"phoneNumber.valid || phoneNumber.untouched\" class=\"text-danger error-style\"><i class=\"fas fa-times-circle\"></i> Phone number is required.</small>\n        </div>\n        <button type=\"button\" [disabled]=\"addUserForm.form.invalid\" class=\"btn btn-success\" (click)=\"onAddUser()\">Submit</button>\n        <button type=\"button\" class=\"btn btn-danger left-spacer\" routerLink=\"/users\">Cancel</button>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(router, userService, eventService) {
        this.router = router;
        this.userService = userService;
        this.eventService = eventService;
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_2__["User"](this.getRandomId(), '', '', '', [], 555555555, '');
        this.phoneNumberHasError = false;
        this.isAddButtonDisabled = true;
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.checkInterest = function (event) {
        if (event.target.value !== '') {
            this.isAddButtonDisabled = false;
        }
        else {
            this.isAddButtonDisabled = true;
        }
    };
    AddUserComponent.prototype.getRandomId = function () {
        var min = 10;
        var max = 10000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    AddUserComponent.prototype.addInterest = function (interest) {
        this.newUser.interests.push(interest);
    };
    AddUserComponent.prototype.deleteInterest = function (interest) {
        var index = this.newUser.interests.indexOf(interest);
        if (index !== -1) {
            this.newUser.interests.splice(index, 1);
        }
    };
    AddUserComponent.prototype.onAddUser = function () {
        var _this = this;
        this.userService.addUser(this.newUser)
            .subscribe(function (user) {
            _this.eventService.sendMessage({ 'name': 'userAdded', value: user });
            _this.router.navigate(['users']);
        });
    };
    AddUserComponent.prototype.validatePhoneNumber = function (value) {
        if (value == null || value === 0 || value === '') {
            this.phoneNumberHasError = true;
        }
        else {
            this.phoneNumberHasError = false;
        }
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users-list/users-list.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__["UsersListComponent"] },
    { path: 'users/:id', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"] },
    { path: 'add-user', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"] },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">GKC</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\"><a routerLink=\"/users\" routerLinkActive=\"active\">Users</a></li>\n      <!-- <li routerLinkActive=\"active\"><a routerLink=\"/user-details\" routerLinkActive=\"active\">User Details</a></li> -->\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gkc-manage-users';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users-list/users-list.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-search/user-search.component */ "./src/app/user-search/user-search.component.ts");
/* harmony import */ var _phoneformat_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./phoneformat.pipe */ "./src/app/phoneformat.pipe.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_8__["UsersListComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_12__["UserSearchComponent"],
                _phoneformat_pipe__WEBPACK_IMPORTED_MODULE_13__["PhoneFormat"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__["AddUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/event.service.ts":
/*!**********************************!*\
  !*** ./src/app/event.service.ts ***!
  \**********************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = /** @class */ (function () {
    function EventService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    EventService.prototype.sendMessage = function (message) {
        this.subject.next({ content: message });
    };
    EventService.prototype.clearMessage = function () {
        this.subject.next();
    };
    EventService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            new _user__WEBPACK_IMPORTED_MODULE_1__["User"](1, 'johndoe_1', 'John', 'Doe', ['Cricket', 'Computer games'], 246848884, 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'),
            new _user__WEBPACK_IMPORTED_MODULE_1__["User"](2, 'samjones', 'Sam', 'Jones', ['Fitness', 'Trekking', 'Football'], 989748484, 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'),
            new _user__WEBPACK_IMPORTED_MODULE_1__["User"](3, 'dougcharles', 'Doug', 'Charles', ['Cooking', 'Basketball'], 347979595, 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'),
            new _user__WEBPACK_IMPORTED_MODULE_1__["User"](4, 'patrickbuck', 'Patrick', 'Buck', ['Football', 'Cycling', 'DIY stuff'], 535773733, 'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg'),
            new _user__WEBPACK_IMPORTED_MODULE_1__["User"](5, 'rajmathur', 'Raj', 'Mathur', ['Web development', 'IT news'], 326634099, 'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg'),
            new _user__WEBPACK_IMPORTED_MODULE_1__["User"](6, 'stephencoin', 'Stephen', 'Coin', ['Photography', 'Gardening'], 870074444, 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'),
            new _user__WEBPACK_IMPORTED_MODULE_1__["User"](7, 'richard_butler', 'Richard', 'Butler', ['Swimming', 'Fencing', 'Horse racing', 'Boating'], 477537389, 'https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg'),
            new _user__WEBPACK_IMPORTED_MODULE_1__["User"](8, 'greenhorne', 'Green', 'Horne', ['Shooting', 'Archery'], 868383553, 'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg')
        ];
        return { users: users };
    };
    InMemoryDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found {\r\n    font-size: 5rem;\r\n}\r\n.warn {\r\n    color: orange;\r\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12 not-found\">\n      <i class=\"fas fa-exclamation-triangle warn\"></i> &nbsp; Oops! Page not found.\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/phoneformat.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/phoneformat.pipe.ts ***!
  \*************************************/
/*! exports provided: PhoneFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneFormat", function() { return PhoneFormat; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhoneFormat = /** @class */ (function () {
    function PhoneFormat() {
    }
    PhoneFormat.prototype.transform = function (value) {
        var out = '';
        var valueStr = value + '';
        var first = valueStr.substring(0, 3);
        var second = valueStr.substring(3, 6);
        var third = valueStr.substring(6, valueStr.length);
        out = first + '-' + second + '-' + third;
        return out;
    };
    PhoneFormat = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'phoneFormat' })
    ], PhoneFormat);
    return PhoneFormat;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-details/user-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderless td, .borderless th {\r\n    border: none;\r\n}\r\n.property-title {\r\n    font-weight: bold;\r\n}\r\n.top-spacer {\r\n    margin-top: 20px;\r\n}\r\n.bottom-spacer {\r\n    margin-bottom: 20px;\r\n}\r\n.user-img {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 50%;\r\n    margin-right: 30px;\r\n}\r\n.back-button {\r\n    margin-left: 10px;\r\n}\r\n.dummy-user {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    text-align: center;\r\n    line-height: 200px;\r\n    font-size: 9rem;\r\n    color: #fff;\r\n    background-color: #000;\r\n}"

/***/ }),

/***/ "./src/app/user-details/user-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">User Details</div>\n          <div class=\"row top-spacer\">\n            <div class=\"col-xs-8\">\n                <table class=\"table borderless\">\n                    <tbody>\n                      <tr>\n                        <td class=\"property-title\">First Name:</td>\n                        <td>{{ user.firstName }}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"property-title\">Last Name:</td>\n                        <td>{{ user.lastName }}</td>\n                      </tr>                      \n                      <tr>\n                        <td class=\"property-title\">Username:</td>\n                        <td>{{ user.username }}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"property-title\">Phone Number:</td>\n                        <td>{{ user.phoneNumber | phoneFormat }}</td>\n                      </tr>\n                      <tr>\n                          <td class=\"property-title\">Interests:</td>\n                          <td>\n                            <div class=\"interest\" *ngFor=\"let interest of user.interests; let i = index;\">\n                              {{ interest }}\n                            </div>                            \n                          </td>\n                        </tr>\n                    </tbody>\n                  </table>\n            </div>\n            <div class=\"col-xs-4\">\n                <div *ngIf=\"user.imagePath !== ''\" class=\"pull-right\">\n                    <img src=\"{{user.imagePath}}\" alt=\"{{user.firstName + user.lastName}}\" \n                      class=\"user-img\" \n                      routerLink=\"/users/{{user.id}}\">\n                </div>\n                <div *ngIf=\"user.imagePath === ''\">\n                  <div class=\"dummy-user\">\n                    <i class=\"fas fa-user\"></i>\n                  </div>\n                </div>\n            </div>\n          </div>   \n          <div class=\"row top-spacer bottom-spacer\">\n            <div class=\"col-xs-12\">\n              <button class=\"btn btn-primary back-button\" (click)=\"goBack()\">Go Back</button>\n            </div>\n          </div>       \n        </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(router, route, userService, location) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.location = location;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserDetailsComponent.prototype.getUser = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = parseInt(params.get('id'));
            _this.userId = id;
            _this.userService.getUser(id)
                .subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    UserDetailsComponent.prototype.goBack = function () {
        this.location.back();
        // this.router.navigate(['users', {id: this.userId}]);
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user-search/user-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-search/user-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-search/user-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-search/user-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h5>Search by username or interests below.</h5>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">      \n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"searchTerm\"\n        (keyup)=\"searchUsers()\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"searchUsers()\"><i class=\"fas fa-search\"></i></button>\n      </span>\n    </div>      \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-search/user-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-search/user-search.component.ts ***!
  \******************************************************/
/*! exports provided: UserSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchComponent", function() { return UserSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSearchComponent = /** @class */ (function () {
    function UserSearchComponent(eventService) {
        this.eventService = eventService;
        this.searchTerm = '';
    }
    UserSearchComponent.prototype.ngOnInit = function () {
    };
    UserSearchComponent.prototype.searchUsers = function () {
        this.eventService.sendMessage({ 'name': 'searchExecuted', value: this.searchTerm });
    };
    UserSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-search',
            template: __webpack_require__(/*! ./user-search.component.html */ "./src/app/user-search/user-search.component.html"),
            styles: [__webpack_require__(/*! ./user-search.component.css */ "./src/app/user-search/user-search.component.css")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], UserSearchComponent);
    return UserSearchComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.usersUrl = 'api/users';
    }
    UserService.prototype.getUsers = function () {
        return this.httpClient.get(this.usersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUsers', [])));
    };
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserService.prototype.deleteUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var id = typeof user === 'number' ? user : user.id;
        var url = this.usersUrl + "/" + id;
        return this.httpClient.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("deleteUser")));
    };
    UserService.prototype.getUser = function (id) {
        var url = this.usersUrl + "/" + id;
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUser firstName=" + id)));
    };
    UserService.prototype.addUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.httpClient.post(this.usersUrl, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addUser')));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, username, firstName, lastName, interests, phoneNumber, imagePath) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.interests = interests;
        this.phoneNumber = phoneNumber;
        this.imagePath = imagePath;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/users-list/users-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users-list/users-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column-title {\r\n    font-weight: bold;\r\n}\r\n.action-link {\r\n    cursor: pointer;\r\n    padding-left: 15px;\r\n}\r\n.action-link:hover {\r\n    color: red;\r\n}\r\n.sort-style {\r\n    color: cornflowerblue;\r\n}\r\n.sort-style:hover {\r\n    cursor: pointer;\r\n}\r\n.user-detail-link {\r\n    cursor: pointer;\r\n}\r\n.user-detail-link:hover {\r\n    cursor: pointer;\r\n    color: cornflowerblue;\r\n}\r\n.user-modal-header {\r\n    background-color: #222;\r\n    color: #fff;\r\n  }\r\n.close-style {\r\n    color: #fff;\r\n}\r\n.title-style {\r\n    font-size: 1.6rem;\r\n}\r\n.top-spacer {\r\n    margin-top: 15px;\r\n}\r\n.user-img {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n.user-img img {\r\n    display: block;\r\n    max-width: 30px;\r\n    max-height: 30px;\r\n    width: auto;\r\n    height: auto;\r\n}\r\n.user-field {\r\n    vertical-align: middle;\r\n    line-height: 40px;\r\n}\r\n.delete-icon {\r\n    font-size: 1.8rem;\r\n}\r\n.dummy-user {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    font-size: 2.5rem;\r\n    color: #fff;\r\n    background-color: #000;\r\n    cursor: pointer;\r\n}\r\n.left-spacer {\r\n    margin-left: 15px;\r\n}\r\n.page-text {\r\n    margin-top: 15px;\r\n}\r\n.selected-user {\r\n    border: 2px solid gold;\r\n}"

/***/ }),

/***/ "./src/app/users-list/users-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/users-list/users-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-user-search></app-user-search>\n  </div>\n</div>\n<div class=\"row top-spacer\">\n  <div class=\"col-xs-12\">\n    <table class=\"table table-striped\">\n      <thead>\n       <tr>\n         <td class=\"column-title\">\n           Avatar\n         </td>\n         <td class=\"column-title\">\n          First Name \n          &nbsp;&nbsp;<i *ngIf=\"sortAscending\" class=\"fas fa-sort-alpha-up sort-style\" (click)=\"sortByName()\"></i>\n          <i *ngIf=\"!sortAscending\" class=\"fas fa-sort-alpha-down sort-style\" (click)=\"sortByName()\"></i>\n         </td>\n         <td class=\"column-title\">\n           Last Name\n          </td>\n          <td class=\"column-title\">\n            Username\n          </td>\n         <td class=\"column-title\">\n           Phone Number\n        </td>\n        <td class=\"column-title\">\n          Interests\n        </td>\n        <td class=\"column-title\">\n           Action\n         </td>\n       </tr> \n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of pagedData | slice: 0: pageSize; let i = index\">\n          <td>\n            <div *ngIf=\"user.imagePath !== ''\">\n                <img src=\"{{user.imagePath}}\" alt=\"{{user.firstName + user.lastName}}\" \n                  class=\"user-img\" \n                  routerLink=\"/users/{{user.id}}\">\n            </div>\n            <div *ngIf=\"user.imagePath === ''\">\n              <div class=\"dummy-user\" routerLink=\"/users/{{user.id}}\">\n                <i class=\"fas fa-user\"></i>\n              </div>\n            </div>         \n          </td>\n          <td class=\"user-field\">{{user.firstName}}</td>\n          <td class=\"user-field\">{{user.lastName}}</td>\n          <td class=\"user-field\">{{user.username}}</td>\n          <td class=\"user-field\">\n            {{ user.phoneNumber | phoneFormat}}\n          </td>\n          <td class=\"user-field\">\n            <span *ngFor=\"let interest of user.interests; let k = index\">\n              {{interest}}<span *ngIf=\"k !== user.interests.length-1\">,</span>\n            </span>\n          </td>\n          <td class=\"user-field\">\n            <i class=\"fas fa-times action-link delete-icon\" (click)=\"deleteUser(user)\" data-toggle=\"modal\" data-target=\"#deleteUserModal\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"pull-right\">\n      <button class=\"btn btn-primary\" [disabled]=\"pageButtonDisabled(-1)\" (click)=\"paginate(-1)\">Previous</button>\n      <button class=\"btn btn-primary left-spacer\" [disabled]=\"pageButtonDisabled(1)\" (click)=\"paginate(1)\">Next</button>\n    </div>      \n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n      <div class=\"page-text pull-right\">\n          Page {{ currentPage+1 }} of {{ totalPages }}\n      </div>      \n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-primary\" routerLink=\"/add-user\"><i class=\"fas fa-user-plus\"></i> Add User</button>\n  </div>\n</div>\n\n<!-- Delete user modal template-->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"deleteUserModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" data-backdrop=\"static\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header user-modal-header\">\n        <h5 class=\"modal-title title-style\" id=\"exampleModalLabel\">Delete user</h5>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure you want to delete this user? Please confirm.\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUserConfirmed()\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal end -->"

/***/ }),

/***/ "./src/app/users-list/users-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users-list/users-list.component.ts ***!
  \****************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(userService, router, route, eventService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.eventService = eventService;
        this.sortAscending = true;
        this.currentPage = 0;
        this.pageSize = 3;
        this.totalPages = 0;
        this.subscription = this.eventService.getMessage()
            .subscribe(function (message) {
            if (message.content.name === 'searchExecuted') {
                _this.searchTerm = message.content.value;
                _this.searchUsers();
            }
            if (message.content.name === 'userAdded') {
                var newUser = message.content.value;
                _this.addUser(newUser);
            }
        });
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUsers();
        this.route.paramMap.subscribe(function (params) {
            var id = parseInt(params.get('id'));
            _this.selectedUserId = id;
        });
    };
    UsersListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this.users.sort(function (a, b) {
                var sortNum = a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0;
                return sortNum;
            });
            _this.totalPages = Math.ceil(_this.users.length / _this.pageSize);
            _this.pagedData = _this.users;
        });
    };
    UsersListComponent.prototype.isSelected = function (user) {
        return user.id === this.selectedUserId;
    };
    UsersListComponent.prototype.sortByName = function () {
        var _this = this;
        this.sortAscending = !this.sortAscending;
        this.pagedData = this.pagedData.slice(0, 3);
        this.pagedData.sort(function (a, b) {
            var sortNum = a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0;
            if (!_this.sortAscending) {
                sortNum = -sortNum;
            }
            return sortNum;
        });
    };
    UsersListComponent.prototype.deleteUser = function (user) {
        this.userToDelete = user;
    };
    UsersListComponent.prototype.deleteUserConfirmed = function () {
        var _this = this;
        if (this.userToDelete) {
            this.users = this.users.filter(function (h) { return h !== _this.userToDelete; });
            this.pagedData = this.users;
            this.userService.deleteUser(this.userToDelete).subscribe();
        }
    };
    UsersListComponent.prototype.selectUser = function (user) {
        this.router.navigate([user.id], { relativeTo: this.route });
    };
    UsersListComponent.prototype.searchUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.pagedData = users.filter(function (item) {
                var usernameResults = item.username.toLowerCase().includes(_this.searchTerm.toLowerCase());
                var result = '';
                item.interests.forEach(function (obj) {
                    result += obj.toLowerCase() + ',';
                });
                var interestsResults = result.includes(_this.searchTerm.toLowerCase());
                return usernameResults || interestsResults;
            });
            _this.pagedData.sort(function (a, b) {
                var sortNum = a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0;
                return sortNum;
            });
        });
    };
    UsersListComponent.prototype.addUser = function (newUser) {
        this.users.push(newUser);
        this.users.sort(function (a, b) {
            var sortNum = a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0;
            return sortNum;
        });
        this.pagedData = this.users;
    };
    UsersListComponent.prototype.pageButtonDisabled = function (dir) {
        if (dir == -1) {
            return this.currentPage === 0;
        }
        if (this.users) {
            return this.currentPage >= this.users.length / this.pageSize - 1;
        }
        return true;
    };
    UsersListComponent.prototype.paginate = function (multiplier) {
        this.currentPage = this.currentPage + (multiplier * 1);
        this.pagedData = this.users.slice(this.currentPage * this.pageSize);
    };
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/users-list/users-list.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], UsersListComponent);
    return UsersListComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Software_Tutorials\gkc-manage-users\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map