(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-ui-module"],{

/***/ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js ***!
  \**************************************************************/
/*! exports provided: FilterPipeModule, FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipeModule", function() { return FilterPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByString = function (filter) {
        if (filter) {
            filter = filter.toLowerCase();
        }
        return function (value) {
            return !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
        };
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByBoolean = function (filter) {
        return function (value) {
            return Boolean(value) === filter;
        };
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var /** @type {?} */ key in filter) {
                if (key === '$or') {
                    if (!_this.filterByOr(filter.$or)(_this.getValue(value))) {
                        return false;
                    }
                    continue;
                }
                var /** @type {?} */ walker = value;
                var /** @type {?} */ found = false;
                do {
                    if (walker.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(walker, key)) {
                        found = true;
                        break;
                    }
                } while (walker = Object.getPrototypeOf(walker));
                if (!found) {
                    return false;
                }
                var /** @type {?} */ val = _this.getValue(value[key]);
                var /** @type {?} */ filterType = typeof filter[key];
                var /** @type {?} */ isMatching = void 0;
                if (filterType === 'boolean') {
                    isMatching = _this.filterByBoolean(filter[key])(val);
                }
                else if (filterType === 'string') {
                    isMatching = _this.filterByString(filter[key])(val);
                }
                else if (filterType === 'object') {
                    isMatching = _this.filterByObject(filter[key])(val);
                }
                else {
                    isMatching = _this.filterDefault(filter[key])(val);
                }
                if (!isMatching) {
                    return false;
                }
            }
            return true;
        };
    };
    /**
     * Filter value by $or
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByOr = function (filter) {
        return function (value) {
            var /** @type {?} */ hasMatch = false;
            var /** @type {?} */ length = filter.length;
            var /** @type {?} */ arrayComparison = function (i) {
                return value.indexOf(filter[i]) !== -1;
            };
            var /** @type {?} */ otherComparison = function (i) {
                return value === filter[i];
            };
            var /** @type {?} */ comparison = Array.isArray(value) ? arrayComparison : otherComparison;
            for (var /** @type {?} */ i = 0; i < length; i++) {
                if (comparison(i)) {
                    hasMatch = true;
                    break;
                }
            }
            return hasMatch;
        };
    };
    /**
     * Checks function's value if type is function otherwise same value
     * @param {?} value
     * @return {?}
     */
    FilterPipe.prototype.getValue = function (value) {
        return typeof value === 'function' ? value() : value;
    };
    /**
     * Defatul filterDefault function
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterDefault = function (filter) {
        return function (value) {
            return filter === undefined || filter == value;
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FilterPipe.prototype.isNumber = function (value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    };
    /**
     * @param {?} array
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.transform = function (array, filter) {
        var /** @type {?} */ type = typeof filter;
        if (!array) {
            return array;
        }
        if (type === 'boolean') {
            return array.filter(this.filterByBoolean(filter));
        }
        if (type === 'string') {
            if (this.isNumber(filter)) {
                return array.filter(this.filterDefault(filter));
            }
            return array.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            return array.filter(this.filterByObject(filter));
        }
        if (type === 'function') {
            return array.filter(filter);
        }
        return array.filter(this.filterDefault(filter));
    };
    return FilterPipe;
}());
FilterPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filterBy',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
FilterPipe.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterPipeModule = /** @class */ (function () {
    function FilterPipeModule() {
    }
    return FilterPipeModule;
}());
FilterPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [FilterPipe],
                providers: [FilterPipe],
                exports: [FilterPipe]
            },] },
];
/** @nocollapse */
FilterPipeModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-filter-pipe.js.map


/***/ }),

/***/ "./src/app/@pages/components/message/message-config.ts":
/*!*************************************************************!*\
  !*** ./src/app/@pages/components/message/message-config.ts ***!
  \*************************************************************/
/*! exports provided: _MESSAGE_DEFAULT_CONFIG, _MESSAGE_CONFIG, _MESSAGE_DEFAULT_CONFIG_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MESSAGE_DEFAULT_CONFIG", function() { return _MESSAGE_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MESSAGE_CONFIG", function() { return _MESSAGE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MESSAGE_DEFAULT_CONFIG_PROVIDER", function() { return _MESSAGE_DEFAULT_CONFIG_PROVIDER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var _MESSAGE_DEFAULT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('_MESSAGE_DEFAULT_CONFIG');
var _MESSAGE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('_MESSAGE_CONFIG');
var _MESSAGE_DEFAULT_CONFIG_PROVIDER = {
    provide: _MESSAGE_DEFAULT_CONFIG,
    useValue: {
        Position: 'top-right',
        Style: 'simple',
        Duration: 1500,
        Animate: true,
        PauseOnHover: true,
        MaxStack: 7,
    }
};


/***/ }),

/***/ "./src/app/@pages/components/message/message-container.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@pages/components/message/message-container.component.ts ***!
  \**************************************************************************/
/*! exports provided: MessageContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageContainerComponent", function() { return MessageContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-config */ "./src/app/@pages/components/message/message-config.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MessageContainerComponent = /** @class */ (function () {
    function MessageContainerComponent(defaultConfig, config) {
        this.messages = [];
        this.currentMessage = null;
        this.config = __assign({}, defaultConfig, config);
        console.log(this.currentMessage);
    }
    // Create a new message
    MessageContainerComponent.prototype.createMessage = function (message) {
        var el = window.document.querySelector(".header ");
        if (el) {
            var rect = el.getBoundingClientRect();
            this.style = {
                marginTop: rect.height + "px"
            };
        }
        this.currentMessage = message;
        if (this.messages.length >= this.config.MaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        this.messages.push(message);
    };
    // Remove a message by messageId
    MessageContainerComponent.prototype.removeMessage = function (messageId) {
        var _this = this;
        this.messages.some(function (message, index) {
            if (message.messageId === messageId) {
                _this.messages.splice(index, 1);
                return true;
            }
        });
    };
    // Remove all messages
    MessageContainerComponent.prototype.removeMessageAll = function () {
        this.messages = [];
    };
    // Merge default options and cutom message options
    MessageContainerComponent.prototype._mergeMessageOptions = function (options) {
        var defaultOptions = {
            Duration: this.config.Duration,
            Animate: this.config.Animate,
            PauseOnHover: this.config.PauseOnHover
        };
        return __assign({}, defaultOptions, options);
    };
    MessageContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-message-container',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div class=\"pgn-wrapper\" [class.hide]=\"messages.length == 0\" *ngIf=\"currentMessage\" [attr.data-position]=\"currentMessage.options.Position\" [ngStyle]=\"style\">\n      <pg-message *ngFor=\"let message of messages; let i = index\" [Message]=\"message\" [Index]=\"i\"></pg-message>\n    </div>\n  ",
            styleUrls: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_message_config__WEBPACK_IMPORTED_MODULE_1__["_MESSAGE_DEFAULT_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_message_config__WEBPACK_IMPORTED_MODULE_1__["_MESSAGE_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object])
    ], MessageContainerComponent);
    return MessageContainerComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/message/message.component.html":
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/message/message.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pgn push-on-sidebar-open pgn-{{_options.Style}}\">\n    <div class=\"alert alert-{{Message.type}}\">\n        <div *ngIf=\"_options.Style === 'bar'; else determineBlock\" [class.container]=\"_enableHorizontalContainer\"> \n            <div >\n                <span>{{ Message.content }}</span> \n                <button class=\"close\" (click)=\"onClickClose()\"  type=\"button\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n            </div>\n        </div>\n        <ng-template #determineBlock>\n            <div *ngIf=\"_options.Style === 'circle'; else standardBlock\">\n                <div class=\"pgn-thumbnail\">\n                    <div>\n                        <img alt=\"\" height=\"40\" src=\"{{_options.imgURL}}\" style=\"display: inline-block;\" width=\"40\">\n                    </div>\n                </div>\n                <div class=\"pgn-message\">\n                    <div>\n                        <p class=\"bold\">{{ _options.Title}}</p>\n                        <p>{{ Message.content }}</p>\n                    </div>\n                </div>  \n                <button type=\"button\" class=\"close\" (click)=\"onClickClose()\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>              \n            </div>\n        </ng-template>\n        <ng-template #standardBlock>\n                <div>\n                    <span>{{ Message.content }}</span>\n                    <button class=\"close\" (click)=\"onClickClose()\"  type=\"button\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n                </div>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/@pages/components/message/message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/@pages/components/message/message.component.ts ***!
  \****************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-container.component */ "./src/app/@pages/components/message/message-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(_messageContainer) {
        this._messageContainer = _messageContainer;
        this._eraseTimer = null;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this._options = this.Message.options;
        if (this._options.Animate) {
            this.Message.state = 'enter';
        }
        this._autoErase = this._options.Duration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
        this._enableHorizontalContainer = pg.isHorizontalLayout;
    };
    MessageComponent.prototype.ngOnDestroy = function () {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    };
    MessageComponent.prototype.onEnter = function () {
        if (this._autoErase && this._options.PauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    };
    MessageComponent.prototype.onLeave = function () {
        if (this._autoErase && this._options.PauseOnHover) {
            this._startEraseTimeout();
        }
    };
    MessageComponent.prototype.onClickClose = function () {
        this._destroy();
    };
    // Remove self
    MessageComponent.prototype._destroy = function () {
        var _this = this;
        if (this._options.Animate) {
            this.Message.state = 'leave';
            setTimeout(function () { return _this._messageContainer.removeMessage(_this.Message.messageId); }, 200);
        }
        else {
            this._messageContainer.removeMessage(this.Message.messageId);
        }
    };
    MessageComponent.prototype._initErase = function () {
        this._eraseTTL = this._options.Duration;
        this._eraseTimingStart = Date.now();
    };
    MessageComponent.prototype._updateTTL = function () {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    };
    MessageComponent.prototype._startEraseTimeout = function () {
        var _this = this;
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout(); // To prevent calling _startEraseTimeout() more times to create more timer
            this._eraseTimer = window.setTimeout(function () { return _this._destroy(); }, this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    };
    MessageComponent.prototype._clearEraseTimeout = function () {
        if (this._eraseTimer !== null) {
            window.clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "Message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], MessageComponent.prototype, "Index", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-message',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterLeave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear')
                    ]),
                ])
            ],
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/@pages/components/message/message.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_message_container_component__WEBPACK_IMPORTED_MODULE_2__["MessageContainerComponent"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/message/message.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/@pages/components/message/message.module.ts ***!
  \*************************************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-config */ "./src/app/@pages/components/message/message-config.ts");
/* harmony import */ var _message_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message-container.component */ "./src/app/@pages/components/message/message-container.component.ts");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.component */ "./src/app/@pages/components/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var providers = [
    _message_config__WEBPACK_IMPORTED_MODULE_3__["_MESSAGE_DEFAULT_CONFIG_PROVIDER"]
];
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]],
            declarations: [_message_container_component__WEBPACK_IMPORTED_MODULE_4__["MessageContainerComponent"], _message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"]],
            providers: providers,
            entryComponents: [_message_container_component__WEBPACK_IMPORTED_MODULE_4__["MessageContainerComponent"]]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/message/message.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/message/message.service.ts ***!
  \**************************************************************/
/*! exports provided: MessageBaseService, MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBaseService", function() { return MessageBaseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-container.component */ "./src/app/@pages/components/message/message-container.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// TODO: remove MessageData generic type as it has no contributon in typing
var MessageBaseService = /** @class */ (function () {
    function MessageBaseService(overlay, containerClass, _idPrefix) {
        if (_idPrefix === void 0) { _idPrefix = ''; }
        this._idPrefix = _idPrefix;
        this._counter = 0; // Id counter for messages
        this._container = overlay.create().attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](containerClass)).instance;
    }
    MessageBaseService.prototype.remove = function (messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    };
    MessageBaseService.prototype.createMessage = function (message, options) {
        // TODO: spread on literal has been disallow on latest proposal
        var resultMessage = __assign({}, message, {
            messageId: this._generateMessageId(),
            options: options,
            createdAt: new Date()
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    };
    MessageBaseService.prototype._generateMessageId = function () {
        return this._idPrefix + this._counter++;
    };
    return MessageBaseService;
}());

var MessageService = /** @class */ (function (_super) {
    __extends(MessageService, _super);
    function MessageService(overlay) {
        return _super.call(this, overlay, _message_container_component__WEBPACK_IMPORTED_MODULE_3__["MessageContainerComponent"], 'message-') || this;
    }
    // Shortcut methods
    MessageService.prototype.success = function (content, options) {
        return this.createMessage({ type: 'success', content: content }, options);
    };
    MessageService.prototype.error = function (content, options) {
        return this.createMessage({ type: 'error', content: content }, options);
    };
    MessageService.prototype.info = function (content, options) {
        return this.createMessage({ type: 'info', content: content }, options);
    };
    MessageService.prototype.warning = function (content, options) {
        return this.createMessage({ type: 'warning', content: content }, options);
    };
    MessageService.prototype.create = function (type, content, options) {
        return this.createMessage({ type: type, content: content }, options);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]])
    ], MessageService);
    return MessageService;
}(MessageBaseService));



/***/ }),

/***/ "./src/app/ui/buttonspage/buttonspage.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ui/buttonspage/buttonspage.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t       <!-- START JUMBOTRON -->\n          <div class=\"jumbotron bg-white \">\n            <pg-container>\n              <div class=\"inner\"  pg-parallax>\n                <!-- START BREADCRUMB -->\n                <pg-breadcrumb>\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">UI Elements</a></li>\n                    <li class=\"breadcrumb-item active\">Buttons</li>\n                  </ol>\n                </pg-breadcrumb>\n                <!-- END BREADCRUMB --> \n                <div class=\"container-md-height m-b-20\">\n                  <div class=\"row m-lg-0\">\n                    <div class=\"col-xl-7 col-lg-6 bg-white\">\n                      <!-- START card -->\n                      <div class=\"full-height\">\n                        <div class=\"card-body text-center\">\n                          <img class=\"image-responsive-height demo-mw-500\" src=\"assets/img/demo/buttons_hero.gif\" alt=\"\">\n                        </div>\n                      </div>\n                      <!-- END card -->\n                    </div>\n                    <div class=\"col-xl-5 col-lg-6\">\n                      <!-- START card -->\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header \">\n                          <div class=\"card-title\">Getting started\n                          </div>\n                        </div>\n                        <div class=\"card-body\">\n                          <h3>A button consists of text and/or an image that clearly communicates what action will occur when it is pressed upon.</h3>\n                          <div>\n                            <div class=\"\">\n                              <p class=\"small hint-text\">VIA senior product manage\n                                <br> for UI/UX at REVOX</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- END card -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </pg-container>\n          </div>\n          <!-- END JUMBOTRON -->\n          <!-- START CONTAINER FLUID -->\n          <pg-container>\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Button Color\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <h5>Color can be a wonderful tool for making\n                                your dashboard less stressful\n                                and more calming</h5>\n                    <p>Color can be a wonderful tool for making your dashboard less stressful and more calming — and it can have a significant impact on your mood and well-being, We made it with you in mind</p>\n                    <br>\n                    <div class=\"row \">\n                      <div class=\"col-lg-3\">\n                        <p>Primary Button\n                        </p>\n                        <button class=\"btn btn-primary btn-cons\">Primary</button>\n                        <div class=\"row m-l-5 m-t-10\">\n                          <div class=\"col-1 no-padding \">\n                            <div class=\"bg-primary p-t-30 p-b-35\"></div>\n                            <div class=\"bg-primary-light p-t-30 p-b-35\"></div>\n                            <div class=\"bg-primary-dark p-t-30 p-b-35\"></div>\n                          </div>\n                          <div class=\"col-10 bg-white b-a b-grey padding-10\">\n                            <p class=\"no-margin text-black bold text-uppercase fs-12\">Normal</p>\n                            <p class=\"no-margin fs-12\">#6d5eac </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Hover</p>\n                            <p class=\"no-margin fs-12\">20% white </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Active</p>\n                            <p class=\"no-margin fs-12\">16.5% white </p>\n                          </div>\n                        </div>\n                        <br>\n                        <p class=\"small hint-text\">\n                          pages Default Multi-Purpose Theme Color. Add class by simply typing\n                          <code>\n                                             btn-primary\n                                            </code>\n                        </p>\n                      </div>\n                      <div class=\"col-lg-3\">\n                        <p>Complete Button\n                        </p>\n                        <button class=\"btn btn-complete btn-cons\">Complete</button>\n                        <div class=\"row m-l-5 m-t-10\">\n                          <div class=\"col-1 no-padding \">\n                            <div class=\"bg-complete p-t-30 p-b-35\"></div>\n                            <div class=\"bg-complete-light p-t-30 p-b-35\"></div>\n                            <div class=\"bg-complete-dark p-t-30 p-b-35\"></div>\n                          </div>\n                          <div class=\"col-10 bg-white b-a b-grey padding-10\">\n                            <p class=\"no-margin text-black bold text-uppercase fs-12\">Normal</p>\n                            <p class=\"no-margin fs-12\">#6d5eac </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Hover</p>\n                            <p class=\"no-margin fs-12\">20% white </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Active</p>\n                            <p class=\"no-margin fs-12\">16.5% white </p>\n                          </div>\n                        </div>\n                        <br>\n                        <p class=\"small hint-text\">\n                          pages Default Multi-Purpose Theme Color. Add class by simply typing\n                          <code>btn-complete</code>\n                        </p>\n                      </div>\n                      <div class=\"col-lg-3\">\n                        <p>Success Button\n                        </p>\n                        <button class=\"btn btn-success btn-cons\">Success</button>\n                        <div class=\"row m-l-5 m-t-10\">\n                          <div class=\"col-1 no-padding \">\n                            <div class=\"bg-success p-t-30 p-b-35\"></div>\n                            <div class=\"bg-success-light p-t-30 p-b-35\"></div>\n                            <div class=\"bg-success-dark p-t-30 p-b-35\"></div>\n                          </div>\n                          <div class=\"col-10 bg-white b-a b-grey padding-10\">\n                            <p class=\"no-margin text-black bold text-uppercase fs-12\">Normal</p>\n                            <p class=\"no-margin fs-12\">#6d5eac </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Hover</p>\n                            <p class=\"no-margin fs-12\">20% white </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Active</p>\n                            <p class=\"no-margin fs-12\">16.5% white </p>\n                          </div>\n                        </div>\n                        <br>\n                        <p class=\"small hint-text\">\n                          pages Default Multi-Purpose Theme Color. Add class by simply typing\n                          <code>btn-success</code>\n                        </p>\n                      </div>\n                      <div class=\"col-lg-3\">\n                        <p>Danger Button\n                        </p>\n                        <button class=\"btn btn-danger btn-cons\">Danger</button>\n                        <div class=\"row m-l-5 m-t-10\">\n                          <div class=\"col-1 no-padding \">\n                            <div class=\"bg-danger p-t-30 p-b-35\"></div>\n                            <div class=\"bg-danger-light p-t-30 p-b-35\"></div>\n                            <div class=\"bg-danger-dark p-t-30 p-b-35\"></div>\n                          </div>\n                          <div class=\"col-10 bg-white b-a b-grey padding-10\">\n                            <p class=\"no-margin text-black bold text-uppercase fs-12\">Normal</p>\n                            <p class=\"no-margin fs-12\">#6d5eac </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Hover</p>\n                            <p class=\"no-margin fs-12\">20% white </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Active</p>\n                            <p class=\"no-margin fs-12\">16.5% white </p>\n                          </div>\n                        </div>\n                        <br>\n                        <p class=\"small hint-text\">\n                          pages Default Multi-Purpose Theme Color. Add class by simply typing\n                          <code>btn-danger</code>\n                        </p>\n                      </div>\n                      <div class=\"col-lg-3\">\n                        <p>Warning Button\n                        </p>\n                        <button class=\"btn btn-warning btn-cons\">Danger</button>\n                        <div class=\"row m-l-5 m-t-10\">\n                          <div class=\"col-1 no-padding \">\n                            <div class=\"bg-warning p-t-30 p-b-35\"></div>\n                            <div class=\"bg-warning-light p-t-30 p-b-35\"></div>\n                            <div class=\"bg-warning-dark p-t-30 p-b-35\"></div>\n                          </div>\n                          <div class=\"col-10 bg-white b-a b-grey padding-10\">\n                            <p class=\"no-margin text-black bold text-uppercase fs-12\">Normal</p>\n                            <p class=\"no-margin fs-12\">#6d5eac </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Hover</p>\n                            <p class=\"no-margin fs-12\">20% white </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Active</p>\n                            <p class=\"no-margin fs-12\">16.5% white </p>\n                          </div>\n                        </div>\n                        <br>\n                        <p class=\"small hint-text\">\n                          pages Default Multi-Purpose Theme Color. Add class by simply typing\n                          <code>btn-warning</code>\n                        </p>\n                      </div>\n                      <div class=\"col-lg-3\">\n                        <p>White Button\n                        </p>\n                        <button class=\"btn btn-default btn-cons\">Danger</button>\n                        <div class=\"row m-l-5 m-t-10\">\n                          <div class=\"col-1 no-padding \">\n                            <div class=\"bg-white p-t-30 p-b-35\"></div>\n                            <div class=\"bg-master-light p-t-30 p-b-35\"></div>\n                            <div class=\"bg-master-dark p-t-30 p-b-35\"></div>\n                          </div>\n                          <div class=\"col-10 bg-white b-a b-grey padding-10\">\n                            <p class=\"no-margin text-black bold text-uppercase fs-12\">Normal</p>\n                            <p class=\"no-margin fs-12\">#6d5eac </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Hover</p>\n                            <p class=\"no-margin fs-12\">20% white </p>\n                            <p class=\"p-t-20 no-margin text-black bold text-uppercase fs-12\">Active</p>\n                            <p class=\"no-margin fs-12\">16.5% white </p>\n                          </div>\n                        </div>\n                        <br>\n                        <p class=\"small hint-text\">\n                          pages Default Multi-Purpose Theme Color. Add class by simply typing\n                          <code>btn-danger</code>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xl-4 col-lg-12 \">\n                <!-- START card -->\n                <div class=\"card card-default\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Size Options\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <h5 class=\"\">Fancy larger or smaller buttons?\n                                    <br>We made it all Perfect.</h5>\n                    <p>Size Might vary from smaller screen to a larger screen. We made few sizes that are pixel perfect and resposive</p>\n                    <br>\n                    <div class=\"row\">\n                      <div class=\"col-lg-6\">\n                        <p>Size variation</p>\n                        <p class=\"small\">\n                          Fancy larger or smaller buttons? Add .btn-lg .btn-sm .btn-xs for additional sizes.\n                        </p>\n                      </div>\n                      <div class=\"col-lg-6\">\n                        <div class=\"pull-right sm-pull-left\">\n                          <button class=\"btn btn-default btn-lg btn-larger\">Large Button</button>\n                          <br>\n                          <button class=\"btn btn-default m-t-10\">Default Button</button>\n                          <br>\n                          <button class=\"btn btn-default btn-sm m-t-10\">Small Button</button>\n                          <br>\n                          <button class=\"btn btn-default btn-xs m-t-10\">Tiny</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n              <div class=\"col-xl-4 col-lg-12 \">\n                <!-- START card -->\n                <div class=\"card card-default\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Toggle Variations\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>Button groups can act as a radio or a switch or even a single toggle. Below are some examples click to see what happens\n                    </p>\n                    <div class=\"m-t-15\">\n                      <button type=\"button\" class=\"btn btn-complete\" btnCheckbox\n        btnCheckboxTrue=\"1\" btnCheckboxFalse=\"0\">Single toggle</button>\n                      <br>\n                      <br>\n                      <div class=\"btn-group\">\n                        <label class=\"btn btn-complete\" [(ngModel)]=\"checkModel.left\"\n                               btnCheckbox>Option 1</label>\n                        <label class=\"btn btn-complete\" [(ngModel)]=\"checkModel.middle\" btnCheckbox>Option 2</label>\n                        <label class=\"btn btn-complete\" [(ngModel)]=\"checkModel.right\" btnCheckbox>Option 3</label>\n                      </div>\n\n                      <br>\n                      <br>\n                      <form [formGroup]=\"myForm\" class=\"form-inline\">\n                          <div class=\"btn-group\" btnRadioGroup formControlName=\"radio\">\n                            <label btnRadio=\"A\" class=\"btn btn-complete\">Option 1</label>\n                            <label btnRadio=\"B\" class=\"btn btn-complete\">Option 2</label>\n                            <label btnRadio=\"C\" class=\"btn btn-complete\">Option 3</label>\n                          </div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n              <div class=\"col-xl-4 col-lg-12 \">\n                <!-- START card -->\n                <div class=\"card card-default\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Button Animations\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>A button can animate to show hidden content</p>\n                    <p class=\"small\">The button will be automatically sized according to the visible content size. Make sure there is enough room for the hidden content to show\n                      <br><code>btn-animated</code> and diirection as <code>from-left</code> or <code>from-top</code>\n                    </p>\n                    <div class=\"m-t-15\">\n                      <button type=\"button\" class=\"btn btn-primary btn-cons btn-animated from-left pg pg-mail\">\n                        <span>Follow us</span>\n                      </button>\n                      <button type=\"button\" class=\"btn btn-primary btn-cons btn-animated from-top fa fa-arrow-down\">\n                        <span>Download</span>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <!-- END card -->\n\n                <!-- <div class=\"col-xl-4 col-lg-12 \"> -->\n                <!-- START card -->\n                <div class=\"card card-default\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Button Blocks\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>Create block level buttons,those that span the full width of a parent by adding <code>btn-block</code>\n                    </p>\n                    <button type=\"button\" class=\"btn btn-block btn-default\">\n                      <span class=\"pull-right\"><i class=\"pg pg-menu\"></i>\n                                    </span>Button Block</button>\n                    <button type=\"button\" class=\"btn btn-block btn-primary\">\n                      <span class=\"pull-left\"><i class=\"pg pg-menu\"></i>\n                                    </span>\n                      <span>Button Block with icon</span>\n                    </button>\n                  </div>\n                </div>\n                <!-- END card -->\n              <!-- </div> -->\n              </div>\n\n            </div>\n            <!-- START card -->\n            <div class=\"card card-default\">\n              <div class=\"card-header \">\n                <div class=\"card-title\">Different Styles\n                </div>\n              </div>\n              <div class=\"card-body no-padding\">\n                <div class=\"row\">\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Traditional Dropdowns\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                        <p>We've simplified our dropdown buttons by getting rid of the dedicated dropdown associated with them, this looks more clean and also available in all different colors</p>\n                        <br>\n                        <div class=\"dropdown dropdown-default\" dropdown>\n                          <button class=\"btn dropdown-toggle\" type=\"button\" dropdownToggle>\n                            Default\n                          </button>\n                          <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Helvetica </a>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\">SegeoUI</a>\n                          </div>\n                        </div>\n                        <br>\n                        <br>\n                        <div class=\"dropdown dropdown-default\" dropdown [dropup]=\"true\">\n                          <button class=\"btn dropdown-toggle\" type=\"button\" dropdownToggle>\n                            Default\n                          </button>\n                          <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Helvetica </a>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\">SegeoUI</a>\n                          </div>\n                        </div>\n                        <br>\n                        <br>\n                        <p class=\"small\">The button will be automatically sized according to the visible content size. Make sure there is enough room for the hidden content to show</p>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Tag Options\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                        <p>Create block level buttons,those that span the full width of a parent by adding .btn-block</p>\n                        <br>\n                        <button class=\"btn btn-tag  btn-tag-light m-r-20\">Link me</button>\n                        <button class=\"btn btn-tag  btn-tag-dark\">Link me</button>\n                        <br>\n                        <br>\n                        <button class=\"btn btn-tag   btn-tag-light btn-tag-rounded m-r-20\">Link me</button>\n                        <button class=\"btn btn-tag   btn-tag-dark btn-tag-rounded\">Link me</button>\n                        <br>\n                        <br>\n                        <p class=\"small\">The button will be automatically sized according to the visible content size. Make sure there is enough room for the hidden content to show</p>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Rounded Buttons\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                        <p>A button can be circular:</p>\n                        <br>\n                        <button class=\"btn btn-default btn-lg btn-rounded m-r-20 m-b-10\">Big rounded</button>\n                        <button class=\"btn btn-lg btn-rounded btn-primary m-r-20 m-b-10\">Big rounded</button>\n                        <br>\n                        <button class=\"btn btn-default btn-rounded m-r-20 m-b-10\">Rounded</button>\n                        <button class=\"btn btn-rounded btn-primary m-b-10\">Rounded</button>\n                        <br>\n                        <button class=\"btn btn-default btn-sm  btn-rounded m-r-20\">Link me</button>\n                        <button class=\"btn btn-sm  btn-rounded btn-primary\">Link me</button>\n                        <br>\n                        <br>\n                        <p class=\"small\">Circular buttons are a special type of promoted action. It Distinguish a different action or a style.</p>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- END card -->\n            <!-- START card -->\n            <div class=\"card card-transparent\">\n              <div class=\"card-header \">\n                <div class=\"card-title\">Grouped Buttons\n                </div>\n              </div>\n              <div class=\"card-body no-padding\">\n                <div class=\"row\">\n                  <div class=\"col-xl-4 col-lg-12\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Single Button Group\n                        </div>\n                        <div class=\"tools\">\n                          <a href=\"javascript:;\" class=\"collapse\"></a>\n                          <a href=\"#grid-config\" data-toggle=\"modal\" class=\"config\"></a>\n                          <a href=\"javascript:;\" class=\"reload\"></a>\n                          <a href=\"javascript:;\" class=\"remove\"></a>\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                        <p>Basic example of bootstrap button groups. Wrap a series of buttons with <code>btn</code> in <code>btn-group</code>\n                        </p>\n                        <br>\n                        <div class=\"btn-group\">\n                          <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-save\"></i>\n                          </button>\n                          <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-pencil\"></i>\n                          </button>\n                          <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-trash-o\"></i>\n                          </button>\n                        </div>\n                        <br>\n                        <br>\n                        <div class=\"btn-group\">\n                          <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-align-left\"></i>\n                          </button>\n                          <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-align-center\"></i>\n                          </button>\n                          <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-align-right\"></i>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Button toolbar\n                        </div>\n                        <div class=\"tools\">\n                          <a href=\"javascript:;\" class=\"collapse\"></a>\n                          <a href=\"#grid-config\" data-toggle=\"modal\" class=\"config\"></a>\n                          <a href=\"javascript:;\" class=\"reload\"></a>\n                          <a href=\"javascript:;\" class=\"remove\"></a>\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                        <p>A button bar is a group of button groups, perfect for situations where you want groups of actions that are all related to a similar element or page</p>\n                        <br>\n                        <div class=\"btn-toolbar flex-wrap\" role=\"toolbar\">\n                          <div class=\"btn-group sm-m-t-10\">\n                            <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-save\"></i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default active\"><i class=\"fa fa-copy\"></i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-clipboard\"></i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-paperclip\"></i>\n                            </button>\n                          </div>&nbsp;&nbsp;\n                          <div class=\"btn-group sm-m-t-10\">\n                            <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-align-left\"></i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-align-center\"></i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-align-right\"></i>\n                            </button>\n                          </div>\n                          <div class=\"btn-group sm-m-t-10\">\n                            <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-file-pdf-o\"></i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Size Options\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                        <p>\n                          Like buttons you can also use different sizes to button groups\n                        </p>\n                        <br>\n                        <div class=\"bs-example\">\n                          <div class=\"btn-toolbar\" role=\"toolbar\">\n                            <div class=\"btn-group btn-group-lg\">\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Left\">Left</button>\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\">Middle</button>\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\">Right</button>\n                            </div>\n                          </div>\n                          <div class=\"btn-toolbar m-t-10\" role=\"toolbar\">\n                            <div class=\"btn-group\">\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Left\">Left</button>\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\">Middle</button>\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\">Right</button>\n                            </div>\n                          </div>\n                          <div class=\"btn-toolbar m-t-10\" role=\"toolbar\">\n                            <div class=\"btn-group btn-group-sm\">\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Left\">Left</button>\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\">Middle</button>\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\">Right</button>\n                            </div>\n                          </div>\n                          <div class=\"btn-toolbar m-t-10\" role=\"toolbar\">\n                            <div class=\"btn-group btn-group-xs\">\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Left\">Left</button>\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\">Middle</button>\n                              <button type=\"button\" class=\"btn btn-default\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\">Right</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Size Options\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                        <p>\n                          Go wild! mix it and make it intererting, add different groups with dropdowns\n                        </p>\n                        <br>\n                        <div class=\"btn-group\">\n                          <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-italic\"></i>\n                          </button>\n                          <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-text-width\"></i>\n                          </button>\n                          <div class=\"btn-group dropdown dropdown-default\" dropdown>\n                            <button class=\"btn dropdown-toggle\" type=\"button\" dropdownToggle>\n                              Default\n                            </button>\n                            <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Helvetica </a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Vertical Button Group\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                        <p>Want it in a different perspective? its customized to work both vertical and horizontal ways</p>\n                        <br>\n                        <div class=\"btn-group btn-group-vertical\">\n                          <button class=\"btn btn-default\"><i class=\"fa fa-align-left\"></i>\n                          </button>\n                          <button class=\"btn btn-success\"><i class=\"fa fa-align-justify\"></i>\n                          </button>\n                          <button class=\"btn btn-default\"><i class=\"fa fa-align-right\"></i>\n                          </button>\n                        </div>\n                        <div class=\"btn-group-vertical\">\n                          <button type=\"button\" class=\"btn btn-default\">Button</button>\n                          <div class=\"\">\n                            <div class=\"dropdown dropdown-default\" dropdown>\n                              <button class=\"btn dropdown-toggle text-center\" type=\"button\" dropdownToggle>\n                                Default\n                              </button>\n                              <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                                <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                                <a class=\"dropdown-item\" href=\"javascript:void(0)\">Helvetica </a>\n                                <a class=\"dropdown-item\" href=\"javascript:void(0)\">SegeoUI</a>\n                              </div>\n                            </div>\n                          </div>\n                          <button type=\"button\" class=\"btn btn-default\">Button</button>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                  <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Vertical Button Group\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                        <p>Want it in a different perspective? its customized to work both vertical and horizontal ways</p>\n                        <br>\n                        <!-- <div class=\"btn-group btn-group-justified\"> -->\n                        <div class=\"btn-group btn-group-justified row w-100\">\n                          <div class=\"btn-group col-4 p-0\">\n                            <button type=\"button\" class=\"btn btn-default w-100\">\n                              <span class=\"p-t-5 p-b-5\">\n                                                    <i class=\"fa fa-star fs-15\"></i>\n                                                </span>\n                              <br>\n                              <span class=\"fs-11 font-montserrat text-uppercase\">Favourites</span>\n                            </button>\n                          </div>\n                          <div class=\"btn-group col-4 p-0\">\n                            <button type=\"button\" class=\"btn btn-default w-100\">\n                              <span class=\"p-t-5 p-b-5\">\n                                                    <i class=\"fa fa-history fs-15\"></i>\n                                                </span>\n                              <br>\n                              <span class=\"fs-11 font-montserrat text-uppercase\">Recent</span>\n                            </button>\n                          </div>\n                          <div class=\"btn-group col-4 p-0\">\n                            <button type=\"button\" class=\"btn btn-default w-100\">\n                              <span class=\"p-t-5 p-b-5\">\n                                                    <i class=\"fa fa-user fs-15\"></i>\n                                                </span>\n                              <br>\n                              <span class=\"fs-11 font-montserrat text-uppercase\">Contacts</span>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- END card -->\n            <div class=\"row\">\n              <!-- START card -->\n              <div class=\"col-lg-6\">\n                <!-- START card -->\n                <div class=\"card card-default\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Common Icon Buttons\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>Basic buttons are traditional buttons with borders and background with an extra component like an icon. You can place it either on the left or the right which ever you want with different color options</p>\n                    <br>\n                    <button class=\"btn btn-primary btn-cons m-b-10\" type=\"button\"><i class=\"pg pg-form\"></i>&nbsp;<span class=\"bold\">Submit</span>\n                    </button>\n                    <!-- Indicates a successful or positive action -->\n                    <button class=\"btn btn-success btn-cons m-b-10\" type=\"button\"><i class=\"fa fa-cloud-upload\"></i>&nbsp;<span class=\"bold\">Upload</span>\n                    </button>\n                    <!-- Contextual button for informational alert messages -->\n                    <button class=\"btn btn-info btn-cons m-b-10\" type=\"button\"><i class=\"fa fa-paste\"></i>&nbsp;<span class=\"bold\">Edit</span>\n                    </button>\n                    <!-- Indicates a dangerous or potentially negative action -->\n                    <button class=\"btn btn-danger btn-cons m-b-10\" type=\"button\"><i class=\"fa fa-warning\"></i>&nbsp;\n                      <span class=\"bold\">Warning</span>\n                    </button>\n                    <!-- Indicates a dangerous or potentially negative action -->\n                    <button class=\"btn btn-default btn-cons m-b-10\" type=\"button\"><i class=\"pg pg-map\"></i>&nbsp;Map</button>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n              <div class=\"col-lg-6\">\n                <!-- START card -->\n                <div class=\"card card-default\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Social Icon Buttons\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>Fancy social icons? here are some of pre-made icons and buttons done by use which can come in handy</p>\n                    <br>\n                    <button class=\"btn btn-block btn-info\" type=\"button\">\n                      <span class=\"pull-left\"><i class=\"fa fa-facebook\"></i>\n                                    </span>\n                      <span class=\"bold\">Login with Facebook</span>\n                    </button>\n                    <button class=\"btn btn-block btn-primary\" type=\"button\">\n                      <span class=\"pull-left\"><i class=\"fa fa-twitter\"></i>\n                                    </span>\n                      <span class=\"bold\">Login with Twitter</span>\n                    </button>\n                    <button class=\"btn btn-block btn-danger\" type=\"button\">\n                      <span class=\"pull-left\"><i class=\"fa fa-google-plus\"></i>\n                                    </span>\n                      <span class=\"bold\">Login with Google+</span>\n                    </button>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n            </div>\n          </pg-container>\n          <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/ui/buttonspage/buttonspage.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/ui/buttonspage/buttonspage.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/buttonspage/buttonspage.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/buttonspage/buttonspage.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonspageComponent", function() { return ButtonspageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonspageComponent = /** @class */ (function () {
    function ButtonspageComponent(formBuilder) {
        this.formBuilder = formBuilder;
        //Single Button Toggle
        this.singleModel = '1';
        //Select All Button group Toggle
        this.checkModel = { left: false, middle: true, right: false };
        this.radioModel = 'Middle';
    }
    ButtonspageComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            radio: 'C'
        });
    };
    ButtonspageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttonspage',
            template: __webpack_require__(/*! ./buttonspage.component.html */ "./src/app/ui/buttonspage/buttonspage.component.html"),
            styles: [__webpack_require__(/*! ./buttonspage.component.scss */ "./src/app/ui/buttonspage/buttonspage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ButtonspageComponent);
    return ButtonspageComponent;
}());



/***/ }),

/***/ "./src/app/ui/colorspage/colorspage.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/colorspage/colorspage.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START JUMBOTRON -->\n<div class=\"jumbotron\">\n  <pg-container extraClass=\"sm-p-l-0 sm-p-r-0\" extraHorizontalClass=\"p-l-0 p-r-0\">\n    <div class=\"inner\" pg-parallax>\n      <!-- START BREADCRUMB -->\n      <pg-breadcrumb>\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a href=\"javascript:void(0);\">UI Elements</a>\n          </li>\n          <li class=\"breadcrumb-item active\">Color</li>\n        </ol>\n      </pg-breadcrumb>\n      <!-- END BREADCRUMB -->\n      <div class=\"container-md-height m-b-20\">\n        <div class=\"row m-lg-0\">\n          <div class=\"col-xl-7 col-lg-6 bg-white\">\n            <!-- START card -->\n            <div class=\"full-height\">\n              <div class=\"card-body text-center\">\n                <img class=\"image-responsive-height demo-mw-350\" src=\"assets/img/demo/colors_hero.gif\" alt=\"\">\n              </div>\n            </div>\n            <!-- END card -->\n          </div>\n          <div class=\"col-xl-5 col-lg-6 col-top\">\n            <!-- START card -->\n            <div class=\"card card-transparent\">\n              <div class=\"card-header \">\n                <div class=\"card-title\">Getting started\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <h3>Paint it the way you Like it.</h3>\n                <p>Color is a wonderful tool for making your dashboard more interesting with a significant positive impact on\n                  your mood. </p>\n                <br>\n                <div>\n                  <div class=\"profile-img-wrapper m-t-5 inline\">\n                    <img width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" alt=\"\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\"\n                      src2x=\"assets/img/profiles/avatar_small2x.jpg\">\n                    <div class=\"chat-status available\">\n                    </div>\n                  </div>\n                  <div class=\"inline m-l-10\">\n                    <p class=\"small hint-text m-t-5\">VIA senior product manage\n                      <br>for UI/UX at REVOX</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- END card -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </pg-container>\n</div>\n<!-- END JUMBOTRON -->\n<!-- START CONTAINER FLUID -->\n<pg-container>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n          <div class=\"card-title\">Eight base color pallete\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <p>The dashboard will synergize with the colour selection made by the user and appropriately amend. Similarly, all\n            other elements will sync according to the base colours. </p>\n          <br>\n          <div>\n            <i class=\"pg pg-download pull-left fs-14 m-t-5\"></i>\n            <p class=\"no-margin p-l-30\">\n              <a href=\"http://pages.revox.io/swatches.zip\">Download full color pallete (swatches)</a>\n            </p>\n            <p class=\"no-margin p-l-30 small\">0.31MB</p>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-lg-8\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6\">\n              <div class=\"bg-master b-a b-grey m-b-15\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\" no-margin pull-left\">Master color</p>\n                  <p class=\" no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <div class=\"bg-primary b-a b-grey m-b-15\">\n                <div class=\"bg-white m-t-45 padding-10 text-master\">\n                  <p class=\" no-margin pull-left\">Primary color</p>\n                  <p class=\" no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <div class=\"bg-complete b-a b-grey m-b-15\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\" no-margin pull-left\">Complete</p>\n                  <p class=\" no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <div class=\"bg-success b-a b-grey m-b-15\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\" no-margin pull-left\">Success color</p>\n                  <p class=\" no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6\">\n              <div class=\"bg-menu b-a b-grey m-b-15\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\" no-margin pull-left\">Menu color</p>\n                  <p class=\" no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <div class=\"bg-info b-a b-grey m-b-15\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\" no-margin pull-left\">Info color</p>\n                  <p class=\" no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <div class=\"bg-danger b-a b-grey m-b-15\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\" no-margin pull-left\">Danger color</p>\n                  <p class=\" no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <div class=\"bg-warning b-a b-grey m-b-15\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\" no-margin pull-left\">Warning color</p>\n                  <p class=\" no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->\n<!-- START CONTAINER FLUID -->\n<div class=\"bg-white\">\n  <pg-container>\n    <div class=\"row p-t-20\">\n      <div class=\"col-md-6\">\n        <!-- START card -->\n        <div class=\"card card-transparent\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-4 col-xl-3\">\n                <p class=\"no-margin\">Menu options</p>\n                <p class=\"small hint-text\">\n                  <span class=\"bold\">HEX</span> : #0a0a0a</p>\n              </div>\n\n              <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n                  <div class=\"bg-master-darkest clearfix  full-height p-l-15 p-r-15\">\n                      <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-master-darkest</p>\n                      <p class=\"pull-right no-margin p-t-10 p-b-10\">0%</p>\n                  </div>\n                </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4 col-xl-3\">\n                <p class=\"no-margin\">Menu</p>\n                <p class=\"small hint-text\">\n                  <span class=\"bold\">HEX</span> : #1A1A1A</p>\n              </div>\n              <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n                  <div class=\"bg-master-darker clearfix full-height p-l-15 p-r-15\">\n                      <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-master-darker</p>\n                      <p class=\"pull-right no-margin p-t-10 p-b-10\">27%</p>\n                  </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4 col-xl-3\">\n                <p class=\"no-margin\">Text heading</p>\n                <p class=\"small hint-text\">\n                  <span class=\"bold\">HEX</span> : #2C2C2C</p>\n              </div>\n              <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n                <div class=\"bg-master-dark clearfix  full-height p-l-15 p-r-15\">\n                    <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-master-dark</p>\n                    <p class=\"pull-right no-margin p-t-10 p-b-10\">45%</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4 col-xl-3\">\n                <p class=\"no-margin\">Default text (base)</p>\n                <p class=\"small hint-text\">\n                  <span class=\"bold\">HEX</span> : #626262</p>\n              </div>\n              <div class=\"col-8 col-xl-9 p-l-0\">\n                  <div class=\"bg-master p-t-45 b-a b-grey text-master\">\n                      <div class=\"bg-white p-t-5 p-l-15 p-b-5 p-r-15\">\n                          <p class=\"font-montserrat all-caps no-margin small\">@color-master</p>\n                          <p class=\"small no-margin pull-left\">#626262</p>\n                          <p class=\"small no-margin pull-right\">100%</p>\n                          <div class=\"clearfix\"></div>\n                      </div>\n                    </div>\n              </div>\n            </div>\n            <div class=\"row m-t-10\">\n              <div class=\"col-4 col-xl-3\">\n                <p class=\"no-margin\">Dividers</p>\n                <p class=\"small hint-text\">\n                  <span class=\"bold\">HEX</span> : #E6E6E6</p>\n              </div>\n              <div class=\"col-8 col-xl-9  m-b-10 p-l-0\">\n                  <div class=\"bg-master-light clearfix  full-height p-l-15 p-r-15\">\n                      <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-master-light</p>\n                      <p class=\"pull-right no-margin p-t-10 p-b-10\">16%</p>\n                  </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4 col-xl-3\">\n                <p class=\"no-margin\">Cover page</p>\n                <p class=\"small hint-text\">\n                  <span class=\"bold\">HEX</span> : #F0F0F0</p>\n              </div>\n              <div class=\"col-8 col-xl-9  m-b-10 p-l-0\">\n                  <div class=\"bg-master-lighter clearfix  full-height p-l-15 p-r-15\">\n                      <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-master-lighter</p>\n                      <p class=\"pull-right no-margin p-t-10 p-b-10\">9.5%</p>\n                  </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4 col-xl-3\">\n                <p class=\"no-margin\">Background</p>\n                <p class=\"small hint-text\">\n                  <span class=\"bold\">HEX</span> : #FAFAFA</p>\n              </div>\n              <div class=\"col-8 col-xl-9  m-b-10 p-l-0\">\n                  <div class=\"bg-master-lightest clearfix full-height p-l-15 p-r-15\">\n                    <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-master-lightest</p>\n                    <p class=\"pull-right no-margin p-t-10 p-b-10\">3%</p>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- END card -->\n      </div>\n      <div class=\"col-md-5 offset-md-1\">\n        <!-- START card -->\n        <div class=\"card card-transparent\">\n          <div class=\"card-body\">\n            <h5 class=\"m-t-0\">Master color shades</h5>\n            <div class=\"padding-15 bg-master pull-left\"></div>\n            <p class=\"m-l-45 small hint-text m-b-0\">RGB : 0 65 73</p>\n            <p class=\"m-l-45 small hint-text m-b-0\">Pantone cool gray 10c</p>\n            <div class=\"clearfix\"></div>\n            <br>\n            <p>With a coterie of features based on zero- saturation resulting in mutilple colour adaptability, this colour is\n              the essential Master colour which affects the fonts, background and content. The upper dark shades are made\n              having the master base color on top of a black (#000000) with certain opacity. Thus the lower light shades\n              are made with a white (#ffffff) color .</p>\n            <br>\n            <p class=\"small\">NOTE: Changing the base color will change the other shades of the relative base.</p>\n          </div>\n        </div>\n        <!-- END card -->\n      </div>\n    </div>\n  </pg-container>\n</div>\n<!-- END CONTAINER FLUID -->\n<!-- START CONTAINER FLUID -->\n<pg-container>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n          <div class=\"card-title\">Chroma base colors\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <h5>Stress free colors</h5>\n          <p>The monochrome base color is made by having a zero saturation percentage which will adapat to any color placed\n            near it.</p>\n          <h5>Easy code</h5>\n          <p>Changing the following base colors will change the other base colors.</p>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-8\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-xl-4 col-md-6 sm-m-b-15\">\n              <div class=\"bg-primary b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10 text-master\">\n                  <p class=\"font-montserrat all-caps small m-b-5\">@color-primary</p>\n                  <p class=\"small no-margin pull-left\">#6D5CAE</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-md-6 sm-m-b-15\">\n              <div class=\"bg-complete b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\"font-montserrat all-caps small m-b-5\">@color-complete</p>\n                  <p class=\"small no-margin pull-left\">#48B0F7</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-md-6\">\n              <div class=\"bg-success b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\"font-montserrat all-caps small m-b-5\">@color-success</p>\n                  <p class=\"small no-margin pull-left\">#10CFBD</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xl-4 col-md-6 sm-m-b-15\">\n              <div class=\"bg-warning b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\"font-montserrat all-caps small m-b-5\">@color-warning</p>\n                  <p class=\"small no-margin pull-left\">#F8D053</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-md-6 sm-m-b-15\">\n              <div class=\"bg-danger b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\"font-montserrat all-caps small m-b-5\">@color-danger</p>\n                  <p class=\"small no-margin pull-left\">#F55753</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-4 col-md-6\">\n              <div class=\"bg-info b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <p class=\"font-montserrat all-caps small m-b-5\">@color-info</p>\n                  <p class=\"small no-margin pull-left\">#3B4752</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->\n<!-- START CONTAINER FLUID -->\n<pg-container extraClass=\"m-t-20\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Notifications text</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #413768</p>\n            </div>\n            <div class=\"col-8 col-xl-9 text-white m-b-10 p-l-0\">\n              <div class=\"bg-primary-darker clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-primary-darker</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">60%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Text color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #5B4D91</p>\n            </div>\n            <div class=\"col-8 col-xl-9 text-white m-b-10 p-l-0\">\n              <div class=\" bg-primary-dark clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-primary-dark</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">83.5%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Base color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #6D5CAE</p>\n            </div>\n            <div class=\"col-8 col-xl-9 p-l-0\">\n              <div class=\" bg-primary p-t-45 b-a b-grey text-master\">\n                <div class=\"bg-white p-t-5 p-l-15 p-b-5 p-r-15\">\n                  <p class=\"font-montserrat all-caps no-margin small\">@color-primary</p>\n                  <p class=\"small no-margin pull-left\">#6D5CAE</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"row m-t-10\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Button overlay</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #8A7DBE</p>\n            </div>\n\n            <div class=\"col-8 col-xl-9 text-white m-b-10 p-l-0\">\n                <div class=\" bg-primary-light clearfix full-height p-l-15 p-r-15\">\n                    <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-primary-light</p>\n                    <p class=\"pull-right no-margin p-t-10 p-b-10\">80%</p>\n                </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Background opt.</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #E2DEEF</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\" bg-primary-lighter clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-primary-lighter</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">20%</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Notifications text</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #2B6A94</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-complete-darker clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-complete-darker</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">60%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Text color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #3C93CE</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\" bg-complete-dark  clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-complete-dark</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">83.5%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Base color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #48B0F7</p>\n            </div>\n            <div class=\"col-8 col-xl-9 p-l-0\">\n              <div class=\" bg-complete p-t-45 b-a b-grey text-master\">\n                <div class=\"bg-white p-t-5 p-l-15 p-b-5 p-r-15\">\n                  <p class=\"font-montserrat all-caps no-margin small\">@color-complete</p>\n                  <p class=\"small no-margin pull-left\">#48B0F7</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row m-t-10\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Button overlay</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #6DC0F9</p>\n            </div>\n            <div class=\"col-8 col-xl-9 text-white m-b-10 p-l-0\">\n              <div class=\" bg-complete-light clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-complete-light</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">80%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Background opt.</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #DAEFFD</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-complete-lighter clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-complete-lighter</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">20%</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Notifications text</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #0A7C71</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-success-darker clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-success-darker</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">60%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Text color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #0DAD9E</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-success-dark clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-success-dark</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">83.5%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Base color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #10CFBD</p>\n            </div>\n            <div class=\"col-8 col-xl-9 p-l-0\">\n              <div class=\"bg-success p-t-45 b-a b-grey text-master\">\n                <div class=\"bg-white p-t-5 p-l-15 p-b-5 p-r-15\">\n                  <p class=\"font-montserrat all-caps no-margin small\">@color-success</p>\n                  <p class=\"small no-margin pull-left\">#10CFBD</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row m-t-10\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Button overlay</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #40D9CA</p>\n            </div>\n            <div class=\"col-8 col-xl-9 text-white m-b-10 p-l-0\">\n              <div class=\"bg-success-light clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-success-light</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">80%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Background opt.</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #CFF5F2</p>\n            </div>\n            <div class=\"col-8 col-xl-9 text-white m-b-10 p-l-0\">\n              <div class=\"bg-success-lighter clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-success-lighter</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">20%</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Notifications text</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #957D32</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-warning-darker clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-warning-darker</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">60%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Text color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #CFAE45</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-warning-dark clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-warning-dark</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">83.5%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Base color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #F8D053</p>\n            </div>\n            <div class=\"col-8 col-xl-9 p-l-0\">\n              <div class=\"bg-warning p-t-45 b-a b-grey text-master\">\n                <div class=\"bg-white p-t-5 p-l-15 p-b-5 p-r-15\">\n                  <p class=\"font-montserrat all-caps no-margin small\">@color-warning</p>\n                  <p class=\"small no-margin pull-left\">#F8D053</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row m-t-10\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Button overlay</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #F9D975</p>\n            </div>\n            <div class=\"col-8 col-xl-9 text-white m-b-10 p-l-0\">\n              <div class=\"bg-warning-light clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-warning-light</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">80%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Background opt.</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #FEF6DD</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-warning-lighter clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-warning-lighter</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">20%</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Notifications text</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #933432</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-danger-darker clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-danger-darker</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">60%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Text color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #CD4945</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-danger-dark clearfix  full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-danger-dark</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">83.5%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Base color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #F55753</p>\n            </div>\n            <div class=\"col-8 col-xl-9 p-l-0\">\n              <div class=\"bg-danger  p-t-45 b-a b-grey text-master\">\n                <div class=\"bg-white p-t-5 p-l-15 p-b-5 p-r-15\">\n                  <p class=\"font-montserrat all-caps no-margin small\">@color-danger</p>\n                  <p class=\"small no-margin pull-left\">#F55753</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row m-t-10\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Button overlay</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #F77975</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-danger-light clearfix  full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-danger-light</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">80%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Background opt.</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #FDDDDD</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-danger-lighter clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-danger-lighter</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">20%</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Notifications text</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #232B31</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-info-darker clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-info-darker</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">60%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Text color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #313B44</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-info-dark clearfix  full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-info-dark</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">83.5%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Base color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #3B4752</p>\n            </div>\n            <div class=\"col-8 col-xl-9 p-l-0\">\n              <div class=\"bg-info p-t-45 b-a b-grey text-master\">\n                <div class=\"bg-white p-t-5 p-l-15 p-b-5 p-r-15\">\n                  <p class=\"font-montserrat all-caps no-margin small\">@color-info</p>\n                  <p class=\"small no-margin pull-left\">#3B4752</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row m-t-10\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Button overlay</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #626C75</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-info-light clearfix  full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-info-light</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">80%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Background opt.</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #D8DADC</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-info-lighter clearfix  full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-info-ligher</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">20%</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n          <div class=\"card-title\">Menu base color\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Menu open color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #191B1F</p>\n            </div>\n            <div class=\"col-8 col-xl-9 text-white m-b-10 p-l-0\">\n              <div class=\"bg-menu-dark clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-menu-dark</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">77%</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Base color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #202328</p>\n            </div>\n            <div class=\"col-8 col-xl-9 p-l-0\">\n              <div class=\"bg-menu p-t-45 b-a b-grey text-master\">\n                <div class=\"bg-white p-t-5 p-l-15 p-b-5 p-r-15\">\n                  <p class=\"font-montserrat all-caps no-margin small\">@color-menu</p>\n                  <p class=\"small no-margin pull-left\">#202328</p>\n                  <p class=\"small no-margin pull-right\">100%</p>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row m-t-10\">\n            <div class=\"col-4 col-xl-3\">\n              <p class=\"no-margin\">Text/icon color</p>\n              <p class=\"small hint-text\">\n                <span class=\"bold\">HEX</span> : #646972</p>\n            </div>\n            <div class=\"col-8 col-xl-9  text-white m-b-10 p-l-0\">\n              <div class=\"bg-menu-light clearfix full-height p-l-15 p-r-15\">\n                <p class=\"pull-left no-margin p-t-10 p-b-10 font-montserrat all-caps semi-bold small\">@color-menu-light</p>\n                <p class=\"pull-right no-margin p-t-10 p-b-10\">92%</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/ui/colorspage/colorspage.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/colorspage/colorspage.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/colorspage/colorspage.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/colorspage/colorspage.component.ts ***!
  \*******************************************************/
/*! exports provided: ColorspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorspageComponent", function() { return ColorspageComponent; });
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

var ColorspageComponent = /** @class */ (function () {
    function ColorspageComponent() {
    }
    ColorspageComponent.prototype.ngOnInit = function () {
    };
    ColorspageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colorspage',
            template: __webpack_require__(/*! ./colorspage.component.html */ "./src/app/ui/colorspage/colorspage.component.html"),
            styles: [__webpack_require__(/*! ./colorspage.component.scss */ "./src/app/ui/colorspage/colorspage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorspageComponent);
    return ColorspageComponent;
}());



/***/ }),

/***/ "./src/app/ui/iconspage/icons.service.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/iconspage/icons.service.ts ***!
  \***********************************************/
/*! exports provided: IconsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsService", function() { return IconsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconsService = /** @class */ (function () {
    function IconsService(http) {
        this.http = http;
    }
    // Get all posts from the API
    IconsService.prototype.getFontAwesome = function () {
        return this.http.get('assets/data/fontawesome.json')
            .map(function (res) { return res.json(); });
    };
    IconsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], IconsService);
    return IconsService;
}());



/***/ }),

/***/ "./src/app/ui/iconspage/iconspage.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/iconspage/iconspage.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <!-- START JUMBOTRON -->\n        <div class=\"jumbotron lg vertical center bg-white column-w4 vertical-bottom\">\n          <pg-container extraClass=\"sm-p-l-0 sm-p-r-0 full-height\" extraHorizontalClass=\"sm-p-l-0 sm-p-r-0 full-height\">\n            <div class=\"inner text-center p-t-50 m-t-80 full-height\"  pg-parallax>\n              <img class=\"sm-image-responsive-height\" src=\"assets/img/demo/icons_hero.png\" pgRetina src1x=\"assets/img/demo/icons_hero.png\" src2x=\"assets/img/demo/icons_hero2x.png\" alt=\"\" width=\"612\" height=\"69\">\n              <div class=\"m-b-10\">\n                <h2 class=\" p-t-10 inline\">Carefully hand crafted icons exclusively only on pages</h2>\n              </div>\n              <div class=\"input-group transparent col-lg-4 center-margin\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"iconFilter.label\" (input)=\"onSearch($event.target.value)\" placeholder=\"Search for icon - home, camera, world etc.\" id=\"icon-filter\" name=\"icon-filter\">\n                <div class=\"input-group-append\">\n                    <span class=\"input-group-text transparent\"><i class=\"pg pg-search\"></i></span>\n                </div>\n              </div>\n              <div class=\"m-t-20 m-b-40 \">\n                <p class=\"small hint-text\">Pages Pixel perfect icons / Font awesome / line icons</p>\n              </div>\n              <div class=\"input-group col-lg-4 center-margin \">\n                <div class=\"col-lg-7 b-grey b-r\">\n                  <p class=\"hinted-text text-left p-t-15 p-b-t-15\">Built upon a 14x14px Grid System.\n                    <br>Vector Font icons</p>\n                </div>\n                <div class=\"col-lg-5\">\n                  <p class=\"hinted-text text-left p-t-15 p-b-t-15 p-l-10\">Svg files available\n                    <br>Pixel Perfect</p>\n                </div>\n              </div>\n            </div>\n        </pg-container>\n        </div>\n        <!-- END JUMBOTRON -->\n        <pg-container extraClass=\"container\">\n          <br>\n          <div class=\"row icon-set-preview\" [style.opacity]=\"searchHidden == true ? '1' : '0'\">\n            <div class=\"col-lg-6\">\n              <div class=\"card card-default\">\n                <div class=\"card-header \">\n                  <div class=\"card-title\">Pages icon\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"icon-preview m-t-10\">\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-charts\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-comment\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-desktop\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-bag\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-calender\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-camera\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-centeralign\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-clock\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-close\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-refresh_new\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-comment\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-credit_card_line\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-menu_justify\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-grid\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-menu\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-desktop\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-minus\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-plus\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-search\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-power\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-refresh\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-tables\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-ui\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-video\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-mail\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-map\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-cupboard\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-download\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-home\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-laptop\"></i>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"card card-default\">\n                <div class=\"card-header \">\n                  <div class=\"card-title\">Fontawesome\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"icon-preview m-t-10\">\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-cloud\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-cloud-download\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-code-fork\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-dashboard\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-cube\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-cubes\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-heart\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-lock\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-rss\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-signal\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-magic\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-question\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-paint-brush\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-terminal\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-tag\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-wifi\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-tablet\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 pg pg-plus\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-bars\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-search\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-phone\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-share-alt\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-phone\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-bolt\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-adjust\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-check\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-font\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-th\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-repeat\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 fa fa-folder-o\"></i>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"col-lg-4\">\n              <div class=\"card card-default\">\n                <div class=\"card-header \">\n                  <div class=\"card-title\">Line Icon\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"icon-preview m-t-10\">\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-user-follow\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-screen-desktop\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-mouse\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-energy\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-disc\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-crop\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-crop\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-user\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-speedometer\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-shield\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-magic-wand\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-bell\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-wallet\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-printer\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-map\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-playlist\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-handbag\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-film\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-feed\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-docs\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-directions\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-calculator\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-bag\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-tag\"></i>\n                      </div>\n                    </div>\n                    <div class=\"row center-margin m-b-10\">\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-microphone\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-loop\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-login\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-list\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-like\"></i>\n                      </div>\n                      <div class=\"col-2 text-center\">\n                        <i class=\"fs-14 sl-calendar\"></i>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div> -->\n          </div>\n          <!-- END GRID -->\n          <div id=\"icon-list\"[ngStyle]=\"showIconResults()\"  [class.hidden]=searchHidden>\n            <div class=\"card card-transparent\">\n              <div class=\"card-header \">\n                <div class=\"card-title\">Search Results\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row margin-bottom-20 icon-list\">\n                  <div class=\"fa-item col-lg-3 col-md-4\" *ngFor=\"let font of fontawesome | filterBy: iconFilter\"><i class=\"{{font.class}}\"></i>{{font.class}}</div>\n                </div>\n              </div>\n              <!-- END FONT AWEOMSE -->\n            </div>\n          </div>\n        </pg-container>"

/***/ }),

/***/ "./src/app/ui/iconspage/iconspage.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/iconspage/iconspage.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/iconspage/iconspage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/iconspage/iconspage.component.ts ***!
  \*****************************************************/
/*! exports provided: IconspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconspageComponent", function() { return IconspageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _icons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.service */ "./src/app/ui/iconspage/icons.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconspageComponent = /** @class */ (function () {
    function IconspageComponent(_service, http) {
        this._service = _service;
        this.http = http;
        this.fontawesome = [];
        this.iconFilter = { label: '', class: '' };
        this.searchHidden = true;
    }
    IconspageComponent.prototype.onSearch = function (event) {
        this.iconFilter = {
            label: event, class: event
        };
        if (event == "") {
            this.searchHidden = true;
        }
        else {
            this.searchHidden = false;
        }
    };
    IconspageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this._service.getFontAwesome().subscribe(function (icons) {
            _this.fontawesome = icons;
        });
    };
    IconspageComponent.prototype.showIconResults = function () {
        if (!this.searchHidden) {
            return { 'transform': 'translateY(-260px)' };
        }
        else {
            return { 'transform': 'translateY(0)' };
        }
    };
    IconspageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iconspage',
            template: __webpack_require__(/*! ./iconspage.component.html */ "./src/app/ui/iconspage/iconspage.component.html"),
            styles: [__webpack_require__(/*! ./iconspage.component.scss */ "./src/app/ui/iconspage/iconspage.component.scss")]
        }),
        __metadata("design:paramtypes", [_icons_service__WEBPACK_IMPORTED_MODULE_2__["IconsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IconspageComponent);
    return IconspageComponent;
}());



/***/ }),

/***/ "./src/app/ui/modalspage/modalspage.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/modalspage/modalspage.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "          <!-- Modal -->\n          <div bsModal #fadInModal=\"bs-modal\" class=\"modal fade fill-in\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n              <button type=\"button\" class=\"close\" (click)=\"fadInModal.hide()\" aria-hidden=\"true\">\n                <i class=\"pg pg-close\"></i>\n              </button>\n              <div class=\"modal-dialog \">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"text-left p-b-5\"><span class=\"semi-bold\">News letter</span> signup</h5>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-9 \">\n                        <input type=\"text\" placeholder=\"Your email address here\" class=\"form-control input-lg\" id=\"icon-filter\" name=\"icon-filter\">\n                      </div>\n                      <div class=\"col-lg-3 no-padding sm-m-t-10 sm-text-center\">\n                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-large fs-15\">Sign up</button>\n                      </div>\n                    </div>\n                    <p class=\"text-right sm-text-center hinted-text p-t-10 p-r-10\">What is it? Terms and conditions</p>\n                  </div>\n                  <div class=\"modal-footer\">\n                  </div>\n                </div>\n                <!-- /.modal-content -->\n              </div>\n              <!-- /.modal-dialog -->\n            </div>\n            <!-- Modal -->\n            <div bsModal #mdSlideUp=\"bs-modal\" class=\"modal fade slide-up disable-scroll\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"false\">\n              <div class=\"modal-dialog modal-{{slideUp.type}}\">\n                <div class=\"modal-content-wrapper\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header clearfix text-left\">\n                      <button type=\"button\" class=\"close\" (click)=\"mdSlideUp.hide()\" aria-hidden=\"true\"><i class=\"pg pg-close fs-14\"></i>\n                      </button>\n                      <h5>Payment <span class=\"semi-bold\">Information</span></h5>\n                      <p class=\"p-b-10\">We need payment information inorder to process your order</p>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form role=\"form\">\n                        <div class=\"form-group-attached\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <div class=\"form-group form-group-default\">\n                                <label>Company Name</label>\n                                <input type=\"email\" class=\"form-control\">\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-8\">\n                              <div class=\"form-group form-group-default\">\n                                <label>Card Number</label>\n                                <input type=\"text\" class=\"form-control\">\n                              </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                              <div class=\"form-group form-group-default\">\n                                <label>Card Holder</label>\n                                <input type=\"text\" class=\"form-control\">\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </form>\n                      <div class=\"row\">\n                        <div class=\"col-md-8\">\n                          <div class=\"p-t-20 clearfix p-l-10 p-r-10\">\n                            <div class=\"pull-left\">\n                              <p class=\"bold font-montserrat text-uppercase\">TOTAL</p>\n                            </div>\n                            <div class=\"pull-right\">\n                              <p class=\"bold font-montserrat text-uppercase\">$20.00</p>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-4 m-t-10 sm-m-t-10\">\n                          <button type=\"button\" class=\"btn btn-primary btn-block m-t-5\">Pay Now</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- /.modal-content -->\n              </div>\n            </div>\n            <!-- /.modal-dialog -->\n            <!-- MODAL SLIDE UP SMALL  -->\n            <!-- Modal -->\n            <div bsModal #smSlideUp=\"bs-modal\" class=\"modal fade slide-up disable-scroll\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"false\">\n              <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content-wrapper\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-body text-center m-t-20\">\n                      <h4 class=\"no-margin p-b-10\">You have subscribed</h4>\n                      <button type=\"button\" class=\"btn btn-primary btn-cons\" (click)=\"smSlideUp.hide()\">Continue</button>\n                    </div>\n                  </div>\n                </div>\n                <!-- /.modal-content -->\n              </div>\n            </div>\n            <!-- /.modal-dialog -->\n            <!-- MODAL STICK UP  -->\n            <div bsModal #mdStickUp=\"bs-modal\" class=\"modal fade stick-up\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-{{stickUp.type}}\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header clearfix text-left\">\n                    <button type=\"button\" class=\"close\" (click)=\"mdStickUp.hide()\" aria-hidden=\"true\"><i class=\"pg pg-close fs-14\"></i>\n                    </button>\n                    <h5>Payment <span class=\"semi-bold\">Information</span></h5>\n                    <p>We need payment information inorder to process your order</p>\n                  </div>\n                  <div class=\"modal-body\">\n                    <form role=\"form\">\n                      <div class=\"form-group-attached\">\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group form-group-default\">\n                              <label>Company Name</label>\n                              <input type=\"email\" class=\"form-control\">\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-8\">\n                            <div class=\"form-group form-group-default\">\n                              <label>Card Number</label>\n                              <input type=\"text\" class=\"form-control\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-4\">\n                            <div class=\"form-group form-group-default\">\n                              <label>Card Holder</label>\n                              <input type=\"text\" class=\"form-control\">\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </form>\n                    <div class=\"row\">\n                      <div class=\"col-md-8\">\n                        <div class=\"p-t-20 clearfix p-l-10 p-r-10\">\n                          <div class=\"pull-left\">\n                            <p class=\"bold font-montserrat text-uppercase\">TOTAL</p>\n                          </div>\n                          <div class=\"pull-right\">\n                            <p class=\"bold font-montserrat text-uppercase\">$20.00</p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4 m-t-10 sm-m-t-10\">\n                        <button type=\"button\" class=\"btn btn-primary btn-block m-t-5\">Pay Now</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- /.modal-content -->\n              </div>\n              <!-- /.modal-dialog -->\n            </div>\n            <!-- END MODAL STICK UP  -->\n            <!-- MODAL STICK UP SMALL ALERT -->\n            <div bsModal #smStickUp=\"bs-modal\" class=\"modal fade stick-up\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content-wrapper\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header clearfix text-left\">\n                      <button type=\"button\" class=\"close\" (click)=\"smStickUp.hide()\" aria-hidden=\"true\"><i class=\"pg pg-close fs-14\"></i>\n                      </button>\n                      <h5>Reset all settings</h5>\n                    </div>\n                    <div class=\"modal-body\">\n                      <p class=\"no-margin\">This will restore all system settings to factory defults. Are you sure that you want to proceed?</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-primary btn-cons  pull-left inline\" (click)=\"smStickUp.hide()\">Continue</button>\n                      <button type=\"button\" class=\"btn btn-default btn-cons no-margin pull-left inline\" (click)=\"smStickUp.hide()\">Cancel</button>\n                    </div>\n                  </div>\n                </div>\n                <!-- /.modal-content -->\n              </div>\n              <!-- /.modal-dialog -->\n            </div>\n            <!-- END MODAL STICK UP SMALL ALERT -->\n            <!-- MODAL STICK UP SMALL ALERT -->\n            <div bsModal #slideRight=\"bs-modal\" class=\"modal fade slide-right\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content-wrapper\">\n                  <div class=\"modal-content\">\n                    <button type=\"button\" class=\"close\" (click)=\"slideRight.hide()\" aria-hidden=\"true\"><i class=\"pg pg-close fs-14\"></i>\n                    </button>\n                    <div class=\"container-xs-height full-height\">\n                      <div class=\"row-xs-height\">\n                        <div class=\"modal-body col-xs-height col-middle text-center   \">\n                          <h5 class=\"text-primary \">Before you <span class=\"semi-bold\">proceed</span>, you have to login to make the necessary changes</h5>\n                          <br>\n                          <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"slideRight.hide()\">Continue</button>\n                          <button type=\"button\" class=\"btn btn-default btn-block\" (click)=\"slideRight.hide()\">Cancel</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- /.modal-content -->\n              </div>\n              <!-- /.modal-dialog -->\n            </div>\n            <!-- END MODAL STICK UP SMALL ALERT -->\n             <!-- START JUMBOTRON -->\n            <div class=\"jumbotron\">\n              <pg-container extraHorizontalClass=\"p-l-0 p-r-0\">\n                <div class=\"inner\"  pg-parallax>\n                  <!-- START BREADCRUMB -->\n                  <pg-breadcrumb>\n                    <ol class=\"breadcrumb\">\n                      <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">UI Elements</a></li>\n                      <li class=\"breadcrumb-item active\">Modals</li>\n                    </ol>\n                  </pg-breadcrumb>\n                  <!-- END BREADCRUMB --> \n                  <div class=\"container-md-height m-b-20\">\n                    <!-- <div class=\"row row-md-height\"> -->\n                    <div class=\"row\">\n                      <div class=\"col-xl-7 col-lg-6 bg-white\">\n                        <!-- START card -->\n                        <div class=\"full-height\">\n                          <div class=\"card-body text-center\">\n                            <img class=\"image-responsive-height demo-mw-400\" src=\"assets/img/demo/modal_hero.gif\" alt=\"\">\n                          </div>\n                        </div>\n                        <!-- END card -->\n                      </div>\n                      <div class=\"col-xl-5 col-lg-6 col-top\">\n                        <!-- START card -->\n                        <div class=\"card card-transparent\">\n                          <div class=\"card-header \">\n                            <div class=\"card-title\">Getting started\n                            </div>\n                          </div>\n                          <div class=\"card-body\">\n                            <h3>A modal helps to displays content that temporarily blocks interactions with a web site</h3>\n                            <p>These are native boostrap modals and work as the same way as it does but more awesome with the added styles and animation giving the user more options to go to</p>\n                            <br>\n                            <div>\n                              <div class=\"profile-img-wrapper m-t-5 inline\">\n                                <img width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" alt=\"\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\" src2x=\"assets/img/profiles/avatar_small2x.jpg\">\n                                <div class=\"chat-status available\">\n                                </div>\n                              </div>\n                              <div class=\"inline m-l-10\">\n                                <p class=\"small hint-text m-t-5\">VIA senior product manage\n                                  <br> for UI/UX at REVOX</p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <!-- END card -->\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </pg-container>\n            </div>\n            <!-- END JUMBOTRON -->\n            <!-- START CONTAINER FLUID -->\n            <pg-container>\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                      <!-- START card -->\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header \">\n                          <div class=\"card-title\">Boostrap Native Modals\n                          </div>\n                        </div>\n                        <div class=\"card-body\">\n                          Boostrap modals are something very functional and we began to think how to make something better even better. The modals were styled to suite pages color scheme and animation, we did not stop here we added more, Read more.\n                        </div>\n                      </div>\n                      <!-- END card -->\n                    </div>\n                    <div class=\"col-md-4\">\n                      <!-- START card -->\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header \">\n                          <div class=\"card-title\">Style and Animation\n                          </div>\n                        </div>\n                        <div class=\"card-body\">\n                          These modals are customized with new animations and style, now pages modals support up to 3 different versions and each version have small, medium and large modals. This helps you to make your app look even better\n                        </div>\n                      </div>\n                      <!-- END card -->\n                    </div>\n                    <div class=\"col-md-4\">\n                      <!-- START card -->\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header \">\n                          <div class=\"card-title\">Functional\n                          </div>\n                        </div>\n                        <div class=\"card-body\">\n                          We did not just go for the looks and compromise functionality, since they are boostrap modals they are responsive and fast and works on all screens.\n                        </div>\n                      </div>\n                      <!-- END card -->\n                    </div>\n                  </div>\n            </pg-container>\n            <!-- END CONTAINER FLUID -->\n            <!-- START CONTAINER FLUID -->\n            <pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n              <div class=\"card card-transparent\">\n                <div class=\"card-header \">\n                  <div class=\"card-title\">Boostrap Native Modals\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-xl-4 col-md-6\">\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header  no-padding\">\n                          <div class=\"card-title\">\n                            Slide Up\n                          </div>\n                        </div>\n                        <div class=\"card-body no-padding\">\n                          <div class=\"m-b-15\">\n                            <img alt=\"\" src=\"assets/img/demo/1.svg\" class=\"full-width\">\n                          </div>\n                          <p>\n                            This modal slides in from the bottom and rests on the middle of the screen, to add this simply add the class\n                            <code>slide-up</code> to the <code>modal</code> div\n                          </p>\n                          <div class=\"radio radio-success inline\">\n                            <input id=\"slideup_full\" name=\"slideup_toggler\" type=\"radio\" value=\"lg\" [(ngModel)]=\"slideUp.type\">\n                            <label for=\"slideup_full\">Large</label>\n                            <br>\n                            <input id=\"slideup_default\" name=\"slideup_toggler\" type=\"radio\" value=\"md\" [(ngModel)]=\"slideUp.type\">\n                            <label for=\"slideup_default\">Default</label>\n                            <br>\n                            <input id=\"slideup_small\" name=\"slideup_toggler\" type=\"radio\" value=\"sm\" [(ngModel)]=\"slideUp.type\">\n                            <label for=\"slideup_small\">Small</label>\n                          </div>\n                          <button class=\"btn btn-green btn-lg pull-right bottom-right\" (click)=\"showSlideUp()\">Generate</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-4 col-md-6\">\n                      <div class=\"column-body\">\n                        <div class=\"card card-transparent\">\n                          <div class=\"card-header  no-padding\">\n                            <div class=\"card-title\">\n                              Stick Up\n                            </div>\n                          </div>\n                          <div class=\"card-body no-padding\">\n                            <div class=\"m-b-15\">\n                              <img alt=\"\" src=\"assets/img/demo/2.svg\" class=\"full-width\">\n                            </div>\n                            <p>\n                              This modal slides in from the top and rests on the top of the screen, to add this simply add the class\n                              <code>stick-up</code> to the <code>modal</code> div\n                            </p>\n                            <div class=\"radio radio-success inline\">\n                              <input id=\"stickup_full\" name=\"stickup_toggler\" type=\"radio\" value=\"lg\" [(ngModel)]=\"stickUp.type\">\n                              <label for=\"stickup_full\">Large</label>\n                              <br>\n                              <input id=\"stickup_default\" name=\"stickup_toggler\" type=\"radio\" value=\"md\" [(ngModel)]=\"stickUp.type\">\n                              <label for=\"stickup_default\">Default</label>\n                              <br>\n                              <input id=\"stickup_small\" name=\"stickup_toggler\" type=\"radio\" value=\"sm\" [(ngModel)]=\"stickUp.type\">\n                              <label for=\"stickup_small\">Small</label>\n                            </div>\n                            <button class=\"btn btn-green btn-lg bottom-right\" (click)=\"showStickUp()\">Generate</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xl-4 d-none d-xl-block\">\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header  no-padding\">\n                          <div class=\"card-title\">\n                            Slide Right\n                          </div>\n                        </div>\n                        <div class=\"card-body no-padding\">\n                          <div class=\"m-b-15\">\n                            <img alt=\"\" src=\"assets/img/demo/4.svg\" class=\"full-width\">\n                          </div>\n                          <p>\n                            This modal slides from the right side <code>slide-right</code> to the <code>modal</code> div\n                          </p>\n                          <button class=\"btn btn-green btn-lg pull-right\" (click)=\"slideRight.show()\">Generate</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-6 d-xl-none\">\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header  no-padding\">\n                          <div class=\"card-title\">\n                            Fill in Modal\n                          </div>\n                        </div>\n                        <div class=\"card-body no-padding\">\n                          <div class=\"m-b-15\">\n                            <img alt=\"\" src=\"assets/img/demo/3.svg\" class=\"full-width\">\n                          </div>\n                          <p>\n                            This modal zooms from the middle and fills in <code>fill-in</code> to the <code>modal</code> div\n                          </p>\n                          <button class=\"btn btn-green btn-lg pull-right\" (click)=\"fadInModal.show()\">Generate</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6 d-xl-none\">\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header  no-padding\">\n                          <div class=\"card-title\">\n                            Slide Right\n                          </div>\n                        </div>\n                        <div class=\"card-body no-padding\">\n                          <div class=\"m-b-15\">\n                            <img alt=\"\" src=\"assets/img/demo/4.svg\" class=\"full-width\">\n                          </div>\n                          <p>\n                            This modal slides from the right side <code>slide-right</code> to the <code>modal</code> div\n                          </p>\n                          <button class=\"btn btn-green btn-lg pull-right\" (click)=\"slideRight.show()\">Generate</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- START card -->\n                <div class=\"card card-transparent d-none d-xl-block\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-xl-4 \">\n                        <div class=\"card card-transparent\">\n                          <div class=\"card-header  no-padding\">\n                            <div class=\"card-title\">\n                              Fill in Modal\n                            </div>\n                          </div>\n                          <div class=\"card-body no-padding\">\n                            <div class=\"m-b-15\">\n                              <img alt=\"\" src=\"assets/img/demo/3.svg\" class=\"full-width\">\n                            </div>\n                            <p>\n                              This modal zooms from the middle and fills in <code>fill-in</code> to the <code>modal</code> div\n                            </p>\n                            <button class=\"btn btn-green btn-lg pull-right\" (click)=\"fadInModal.show()\">Generate</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n            </pg-container>"

/***/ }),

/***/ "./src/app/ui/modalspage/modalspage.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/modalspage/modalspage.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/modalspage/modalspage.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/modalspage/modalspage.component.ts ***!
  \*******************************************************/
/*! exports provided: ModalspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalspageComponent", function() { return ModalspageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalspageComponent = /** @class */ (function () {
    function ModalspageComponent() {
        this.slideUp = {
            type: "md"
        };
        this.stickUp = {
            type: "md"
        };
    }
    ModalspageComponent.prototype.ngOnInit = function () {
    };
    ModalspageComponent.prototype.showStickUp = function () {
        switch (this.stickUp.type) {
            case "md": {
                this.mdStickUp.show();
                break;
            }
            case "lg": {
                this.mdStickUp.show();
                break;
            }
            case "sm": {
                this.smStickUp.show();
                break;
            }
        }
    };
    ModalspageComponent.prototype.showSlideUp = function () {
        switch (this.slideUp.type) {
            case "md": {
                this.mdSlideUp.show();
                break;
            }
            case "lg": {
                this.mdSlideUp.show();
                break;
            }
            case "sm": {
                this.smSlideUp.show();
                break;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mdSlideUp'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ModalspageComponent.prototype, "mdSlideUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('smSlideUp'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ModalspageComponent.prototype, "smSlideUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mdStickUp'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ModalspageComponent.prototype, "mdStickUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('smStickUp'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ModalspageComponent.prototype, "smStickUp", void 0);
    ModalspageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modalspage',
            template: __webpack_require__(/*! ./modalspage.component.html */ "./src/app/ui/modalspage/modalspage.component.html"),
            styles: [__webpack_require__(/*! ./modalspage.component.scss */ "./src/app/ui/modalspage/modalspage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalspageComponent);
    return ModalspageComponent;
}());



/***/ }),

/***/ "./src/app/ui/notificationspage/notificationspage.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui/notificationspage/notificationspage.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n          <!-- START JUMBOTRON -->\n          <div class=\"jumbotron\">\n            <pg-container extraHorizontalClass=\"p-l-0 p-r-0\">\n              <div class=\"inner\" pg-parallax>\n                <!-- START BREADCRUMB -->\n                <pg-breadcrumb>\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">UI Elements</a></li>\n                    <li class=\"breadcrumb-item active\">Notifications</li>\n                  </ol>\n                </pg-breadcrumb>\n                <!-- END BREADCRUMB --> \n                <div class=\"container-md-height m-b-20\">\n                  <div class=\"row m-md-0\">\n                    <div class=\"col-xl-7 col-lg-6 bg-white\">\n                      <!-- START card -->\n                      <div class=\"full-height\">\n                        <div class=\"card-body text-center\">\n                          <img class=\"image-responsive-height demo-mw-500\" src=\"assets/img/demo/notifications_hero.gif\" alt=\"\">\n                        </div>\n                      </div>\n                      <!-- END card -->\n                    </div>\n                    <div class=\"col-xl-5 col-lg-6 col-top\">\n                      <!-- START card -->\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header \">\n                          <div class=\"card-title\">Getting started\n                          </div>\n                        </div>\n                        <div class=\"card-body\">\n                          <h3>For Your Information - FYI</h3>\n                          <p>Breaking convention again, we have inctroduced a notification system which variates based on the type and level of importance of the message. Thanks to this, an alert by the side of your screen would easily catch your attention.</p>\n                          <br>\n                          <div>\n                            <div class=\"profile-img-wrapper m-t-5 inline\">\n                              <img width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" alt=\"\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\" src2x=\"assets/img/profiles/avatar_small2x.jpg\">\n                              <div class=\"chat-status available\">\n                              </div>\n                            </div>\n                            <div class=\"inline m-l-10\">\n                              <p class=\"small hint-text m-t-5\">VIA senior product manage\n                                <br> for UI/UX at REVOX</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- END card -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </pg-container>\n          </div>\n          <!-- END JUMBOTRON -->\n          <!-- START CONTAINER FLUID -->\n          <pg-container>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Pages notification\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>Notifications provide alerts and related information for pages Framework.As an important part of pages user interface, we made a tool for much easier visualizations</p>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n              <div class=\"col-md-3\">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Alert\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>Individual alerts will be visible and depending on the level of its importance, will have dedicated colours and sized indicating specified scenarios. </p>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n              <div class=\"col-md-3\">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Robust and lightweight\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>CSS3 powered transitions and animations for greater user experience.</p>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n            </div>\n          </pg-container>\n          <!-- END CONTAINER FLUID -->\n          <!-- START CONTAINER FLUID -->\n          <div class=\"bg-white\">\n            <pg-container>\n            <div class=\" container-fixed-lg bg-white\">\n          \n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Select a notification style\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                        <ul class=\"nav nav-tabs no-border notification-tabs\" btnRadioGroup [(ngModel)]=\"notificationModel.type\">\n                          <li class=\"nav-item\">\n                            <a class=\"btn btn-default btn-cons btn-rounded btn-notification-style m-b-10\" (click)=\"selectTab(0)\" btnRadio=\"bar\">Bar</a>\n\n                          </li>\n                          <li class=\"nav-item\">\n                            <a class=\"btn btn-default btn-cons btn-rounded btn-notification-style m-b-10\" (click)=\"selectTab(1)\" btnRadio=\"flip\">Flip Bar</a>\n\n                          </li>\n                          <li class=\"nav-item\">\n                            <a class=\"btn btn-default btn-cons btn-rounded btn-notification-style m-b-10\" (click)=\"selectTab(2)\" btnRadio=\"circle\">Circle</a>\n\n                          </li>\n                          <li class=\"nav-item\">\n                            <a class=\"btn btn-default btn-cons btn-rounded btn-notification-style m-b-10\" (click)=\"selectTab(3)\" btnRadio=\"simple\">Simple Alert</a>\n                          </li>\n                        </ul>\n                        <div class=\"config-notification\">\n                          <!-- Tab panes -->\n                          <div class=\"tab-content\">\n                            <div class=\"tab-pane active\">\n                              <h4 class=\"semi-bold\">{{heading}}</h4>\n                              <h5 class=\"\">{{description}}</h5>\n                              <p class=\"small hint-text\">Highly Customizable, Change radius, Add Content Change X , Y Axis, Change svg animation</p>\n                            </div>\n                          </div>\n                            <div class=\"form-group form-group-default required\">\n                              <label class=\"highlight\">Message</label>\n                              <input type=\"text\" class=\"form-control notification-message\" placeholder=\"Type your message here\" name=\"message\" [(ngModel)]=\"notificationModel.message\" required>\n                            </div>\n                            <div class=\"d-flex\">\n                              <pg-select-fx style=\"width: 110px\" [(ngModel)]=\"selectedColor\" [PlaceHolder]=\"'Select'\">\n                                <pg-selectfx-option\n                                  *ngFor=\"let option of colors\" [Value]=\"option.value\" [Label]=\"option.label\">\n                                </pg-selectfx-option>\n                              </pg-select-fx>\n                              <button class=\"btn btn-success show-notification m-l-10\" (click)=\"createBasicNotification()\">Show</button>\n                            </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                  <div class=\"col-md-6\">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Select Position\n                        </div>\n                      </div>\n                      <div class=\"card-body\" id=\"samplePositionTab\">\n                        <tabset #staticTabs>\n                          <tab heading=\"Bar\" >\n                            <div class=\"notification-positions\" btnRadioGroup [(ngModel)]=\"nofitcationStrings[0].position\">\n                              <div class=\"position pull-top\" btnRadio=\"top\">\n                                <img alt=\"Loading bar\" src=\"assets/img/notifications/loading_bar.svg\" class=\"\">\n                              </div>\n                              <div class=\"position pull-bottom\" btnRadio=\"bottom\">\n                                <img alt=\"Loading bar\" src=\"assets/img/notifications/loading_bar.svg\" class=\"\">\n                              </div>\n                            </div>\n                          </tab>\n                          <tab heading=\"Flip\">\n                            <div class=\"notification-positions\"  btnRadioGroup [(ngModel)]=\"nofitcationStrings[1].position\">\n                              <div class=\"pull-top full-width\">\n                                <div class=\"position pull-left\" btnRadio=\"top-left\">\n                                  <img alt=\"Bounce progress\" src=\"assets/img/notifications/bounce_progress.svg\" class=\"\">\n                                </div>\n                                <div class=\"position pull-right\" btnRadio=\"top-right\">\n                                  <img alt=\"Bounce progress\" src=\"assets/img/notifications/bounce_progress.svg\" class=\"\">\n                                </div>\n                              </div>\n                              <div class=\"pull-bottom full-width\">\n                                <div class=\"position pull-left\" btnRadio=\"bottom-left\">\n                                  <img alt=\"Bounce progress\" src=\"assets/img/notifications/bounce_progress.svg\" class=\"\">\n                                </div>\n                                <div class=\"position pull-right\" btnRadio=\"bottom-right\">\n                                  <img alt=\"Bounce progress\" src=\"assets/img/notifications/bounce_progress.svg\" class=\"\">\n                                </div>\n                              </div>\n                            </div>\n                          </tab>\n                          <tab heading=\"Circle\">\n                            <div class=\"notification-positions\" btnRadioGroup [(ngModel)]=\"nofitcationStrings[2].position\">\n                              <div class=\"pull-top full-width\">\n                                <div class=\"position pull-left\" btnRadio=\"top-left\">\n                                  <img alt=\"Circle progress\" src=\"assets/img/notifications/circle_progress.svg\" class=\"\">\n                                </div>\n                                <div class=\"position pull-right\" btnRadio=\"top-right\">\n                                  <img alt=\"Circle progress\" src=\"assets/img/notifications/circle_progress.svg\" class=\"\">\n                                </div>\n                              </div>\n                              <div class=\"pull-bottom full-width\">\n                                <div class=\"position pull-left\" btnRadio=\"bottom-left\">\n                                  <img alt=\"Circle progress\" src=\"assets/img/notifications/circle_progress.svg\" class=\"\">\n                                </div>\n                                <div class=\"position pull-right\" btnRadio=\"bottom-right\">\n                                  <img alt=\"Circle progress\" src=\"assets/img/notifications/circle_progress.svg\" class=\"\">\n                                </div>\n                              </div>\n                            </div>\n                          </tab>\n                          <tab heading=\"Simple\">\n                            <div class=\"notification-positions\" btnRadioGroup [(ngModel)]=\"nofitcationStrings[3].position\">\n                              <div class=\"pull-top full-width\">\n                                <div class=\"position pull-left\" btnRadio=\"top-left\">\n                                  <img alt=\"Simple alert\" src=\"assets/img/notifications/simple_alert.svg\" class=\"\">\n                                </div>\n                                <div class=\"position pull-right active\" btnRadio=\"top-right\">\n                                  <img alt=\"Simple alert\" src=\"assets/img/notifications/simple_alert.svg\" class=\"\">\n                                </div>\n                              </div>\n                              <div class=\"pull-bottom full-width\">\n                                <div class=\"position pull-left\" btnRadio=\"bottom-left\">\n                                  <img alt=\"Simple alert\" src=\"assets/img/notifications/simple_alert.svg\" class=\"\">\n                                </div>\n                                <div class=\"position pull-right\" btnRadio=\"bottom-right\">\n                                  <img alt=\"Simple alert\" src=\"assets/img/notifications/simple_alert.svg\" class=\"\">\n                                </div>\n                              </div>\n                            </div>\n                          </tab>\n                      </tabset>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                </div>\n          \n            </div>\n            </pg-container>\n          </div>\n          <!-- END CONTAINER FLUID -->\n          <!-- START CONTAINER FLUID -->\n          <pg-container>\n            <!-- START card -->\n            <div class=\"card card-transparent\">\n              <div class=\"card-header \">\n                <div class=\"card-title\">Simple alerts\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <h3>Where ever you are we’ll keep you notified and up to date!</h3>\n                    <p>Alerts help to gain user attention and give feedback for proccessed task. These alerts are built with different background and borders to show.</p>\n                    <br>\n                    <div>\n                      <div class=\"profile-img-wrapper m-t-5 inline\">\n                        <img alt=\"Avatar\" width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\" src2x=\"assets/img/profiles/avatar_small2x.jpg\">\n                        <div class=\"chat-status available\">\n                        </div>\n                      </div>\n                      <div class=\"inline m-l-10\">\n                        <p class=\"small hint-text m-t-5\">VIA senior product manage\n                          <br> for UI/UX at REVOX</p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6 sm-p-t-15\">\n                    <alert type=\"danger\" [dismissible]=\"true\">\n                      <strong>Danger: </strong>The daily report has failed\n                    </alert>\n                    <alert type=\"warning\" [dismissible]=\"true\">\n                      <strong>Warning: </strong>Bandwidth limit exceeded\n                    </alert>\n                    <alert type=\"success\" [dismissible]=\"true\">\n                      <strong>Success: </strong>The page has been added.\n                    </alert>\n                    <alert type=\"info\" [dismissible]=\"true\">\n                      <strong>Info: </strong>You have 198 messages\n                    </alert>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- END card -->\n          </pg-container>\n          <!-- END CONTAINER FLUID -->\n          <!-- START CONTAINER FLUID -->\n          <pg-container>\n            <div class=\"row\">\n              <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Descriptive alerts\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>Alerts can be multilined. Feel free to include any HTML inside your alerts</p>\n                    <br>\n                    <alert type=\"info\" [dismissible]=\"true\">\n                      <p class=\"pull-left\">Meeting rescheduled</p>\n                      <div class=\"clearfix\"></div>\n                      <br>\n                      <p>The STG Meeting has been resheduled to the following date : 2014-12-17</p>\n                      <br>\n                      <p>Please complete the attendance form to confirm your attendance</p>\n                    </alert>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n              <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Alert with link\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>You can also use a link to show more information about the notification. Use the .alert-link utility class to quickly provide matching colored links within any alert.</p>\n                    <br>\n                    <alert type=\"info\" [dismissible]=\"true\">\n                      <div class=\"d-flex justify-content-between\">\n                      <p class=\"mr-auto overflow-ellipsis col-6 no-padding no-margin\">Your data limit has exceeded</p>\n                      <p class=\"bold no-margin\"><a href=\"\" class=\"text-complete\">See all now</a>\n                      </p>\n                      </div>\n                    </alert>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n              <div class=\"col-xl-4 col-lg-6 col-md-12\">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Bordered alerts\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>By default all Pages alerts are borderless. To add a border, simply append the class .bordered</p>\n                    <br>\n                    <alert type=\"info\" [dismissible]=\"true\">\n                      <p><strong>Info:</strong> You have 198 messages</p>\n                    </alert>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n            </div>\n          </pg-container>\n          <!-- END CONTAINER FLUID -->\n          <!-- START CONTAINER FLUID -->\n          <pg-container>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Simple labels\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <div class=\"row-fluid\">\n                      <p>A label, with optional background colors. Use the\n                        <code>label</code>class to create a label</p>\n                      <br>\n                      <span class=\"label\">DEFAULT</span>&nbsp;&nbsp;\n                      <span class=\"label label-success\">VIEW</span>&nbsp;&nbsp;\n                      <span class=\"label label-warning\">HOLD</span>&nbsp;&nbsp;\n                      <span class=\"label label-important\">ALERT</span>&nbsp;&nbsp;\n                      <span class=\"label label-info\">SUCCESS</span>&nbsp;&nbsp;\n                      <span class=\"label label-inverse\">SOLD</span>&nbsp;&nbsp;\n                      <br>\n                      <br>\n                      <h4>Badge\n                            <span class=\"semi-bold\">Variations</span>\n                        </h4>\n                      <p>A Badge, with optional background colors. Use the\n                        <code>badge</code>class to create a Badge</p>\n                      <span class=\"badge\">2</span>&nbsp;&nbsp;\n                      <span class=\"badge badge-success\">8</span>&nbsp;&nbsp;\n                      <span class=\"badge badge-warning\">12</span>&nbsp;&nbsp;\n                      <span class=\"badge badge-important\">300</span>&nbsp;&nbsp;\n                      <span class=\"badge badge-info\">25</span>&nbsp;&nbsp;\n                      <span class=\"badge badge-inverse\">5</span>&nbsp;&nbsp;</div>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n              <div class=\"col-md-6\">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Tooltips\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>Tooltips can be a helpful way to provide information to visitors without creating clutter in a design. Tooltip plugin let’s you transform native tooltip’s into customizable overlays. You can adjust their content, position and appearance.</p>\n                    <br>\n                    <button placement=\"top\" class=\"btn btn-default tip m-b-5 m-r-5\" type=\"button\" tooltip=\"Up here!\">Top</button>\n                    <button placement=\"right\" class=\"btn btn-default tip m-b-5 m-r-5\" type=\"button\" tooltip=\"Hello there!\">Right</button>\n                    <button placement=\"bottom\" class=\"btn btn-default tip m-b-5 m-r-5\" type=\"button\" tooltip=\"Look down!\">Down</button>\n                    <button placement=\"left\"  class=\"btn btn-default tip m-b-5 m-r-5\" type=\"button\" tooltip=\"Over here!\">Left</button>\n                    <br>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n            </div>\n          </pg-container>\n          <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/ui/notificationspage/notificationspage.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui/notificationspage/notificationspage.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#samplePositionTab .nav-tabs {\n  display: none; }\n\n.notification-tabs {\n  flex-wrap: wrap; }\n"

/***/ }),

/***/ "./src/app/ui/notificationspage/notificationspage.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui/notificationspage/notificationspage.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationspageComponent", function() { return NotificationspageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@pages/components/message/message.service */ "./src/app/@pages/components/message/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationspageComponent = /** @class */ (function () {
    function NotificationspageComponent(fb, _notification) {
        this.fb = fb;
        this._notification = _notification;
        this.currentTab = 0;
        this.notificationModel = {
            type: "bar",
            message: "This notification looks so perfect!",
            color: "info",
            position: "top",
            current: 0
        };
        this.colors = [
            { value: 'info', label: 'Info' },
            { value: 'warning', label: 'Warning' },
            { value: 'success', label: 'Success' },
            { value: 'danger', label: 'Danger' },
            { value: 'default', label: 'Default' },
        ];
        this.nofitcationStrings = [
            {
                heading: "Notification Bar",
                desc: "Awesome Loading Circle Animation",
                position: "top",
                type: "bar"
            },
            {
                heading: "Flip Bar",
                desc: "Awesome Loading Circle Animation",
                position: "top-right",
                type: "flip"
            },
            {
                heading: "Circle Notification",
                desc: "Awesome Loading Circle Animation",
                position: "top-right",
                type: "circle",
                title: "John Doe",
                imgURL: "assets/img/profiles/avatar.jpg"
            },
            {
                heading: "Simple Alert",
                desc: "Awesome Loading Circle Animation",
                position: "top-right",
                type: "simple"
            }
        ];
        this.selectedColor = this.colors[0]["value"];
        this.heading = this.nofitcationStrings[0].heading;
        this.description = this.nofitcationStrings[0].desc;
    }
    NotificationspageComponent.prototype.createBasicNotification = function () {
        if (this.notificationModel.current != this.currentTab) {
            this.notificationModel.current = this.currentTab;
            this._notification.remove();
        }
        this.notificationModel.position = this.nofitcationStrings[this.currentTab]["position"];
        this.notificationModel.type = this.nofitcationStrings[this.currentTab]["type"];
        this.notificationModel.color = this.selectedColor;
        //Create Notification
        if (this.notificationModel.type != "circle") {
            this._notification.create(this.notificationModel.color, this.notificationModel.message, {
                Position: this.nofitcationStrings[this.currentTab]["position"],
                Style: this.notificationModel.type,
                Duration: 0
            });
        }
        else {
            this._notification.create(this.notificationModel.color, this.notificationModel.message, {
                Title: this.nofitcationStrings[this.currentTab]["title"],
                imgURL: this.nofitcationStrings[this.currentTab]["imgURL"],
                Position: this.nofitcationStrings[this.currentTab]["position"],
                Style: this.notificationModel.type,
                Duration: 0
            });
        }
    };
    NotificationspageComponent.prototype.ngOnInit = function () {
    };
    NotificationspageComponent.prototype.ngAfterViewChecked = function () {
        //TODO - Cheat fix waiting ngx-bootstrap customClass
        var el = window.document.querySelector(".nav.nav-tabs");
        el.classList.add("no-border");
        el.classList.add("notification-tabs");
    };
    NotificationspageComponent.prototype.selectTab = function (tab_id) {
        this.staticTabs.tabs[tab_id].active = true;
        this.heading = this.nofitcationStrings[tab_id].heading;
        this.description = this.nofitcationStrings[tab_id].desc;
        this.currentTab = tab_id;
        this._notification.remove();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('staticTabs'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["TabsetComponent"])
    ], NotificationspageComponent.prototype, "staticTabs", void 0);
    NotificationspageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notificationspage',
            template: __webpack_require__(/*! ./notificationspage.component.html */ "./src/app/ui/notificationspage/notificationspage.component.html"),
            styles: [__webpack_require__(/*! ./notificationspage.component.scss */ "./src/app/ui/notificationspage/notificationspage.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], NotificationspageComponent);
    return NotificationspageComponent;
}());



/***/ }),

/***/ "./src/app/ui/progresspage/progresspage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/ui/progresspage/progresspage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- START JUMBOTRON -->\n   <div class=\"jumbotron\">\n   <pg-container extraHorizontalClass=\"p-l-0 p-r-0\">\n      <div class=\"inner\" pg-parallax>\n        <!-- START BREADCRUMB -->\n        <pg-breadcrumb>\n          <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">UI Elements</a></li>\n            <li class=\"breadcrumb-item active\">Progress bars</li>\n          </ol>\n        </pg-breadcrumb>\n        <!-- END BREADCRUMB --> \n        <div class=\"m-b-20\">\n          <div class=\"row m-0\">\n            <div class=\"col-xl-5 col-lg-6\">\n              <!-- START card -->\n              <div class=\"card card-transparent\">\n                <div class=\"card-header \">\n                  <div class=\"card-title\">Getting started\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <h3>Custom built for anyone, anywhere.</h3>\n                  <p>As always, in keeping with our policy of making UX easier and more user-friendly, we have customized this feature with a lightwieight SVG indicator. Also this is highly adaptable and offers a range of progress bar options to suit your preference. </p>\n                  <br>\n                  <div>\n                    <div class=\"profile-img-wrapper m-t-5 inline\">\n                      <img width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" alt=\"Avatar\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\" src2x=\"assets/img/profiles/avatar_small2x.jpg\">\n                      <div class=\"chat-status available\">\n                      </div>\n                    </div>\n                    <div class=\"inline m-l-10\">\n                      <p class=\"small hint-text m-t-5\">VIA senior product manage\n                        <br> for UI/UX at REVOX</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- END card -->\n            </div>\n            <div class=\"col-xl-7 col-lg-6 bg-white\">\n              <!-- START card -->\n              <div class=\"full-height d-flex justify-content-center align-items-center\">\n                <div class=\"card-body text-center\">\n                  <img class=\"image-responsive-height demo-mw-50\" src=\"assets/img/demo/progress.svg\" alt=\"Progress\">\n                </div>\n              </div>\n              <!-- END card -->\n            </div>\n          </div>\n        </div>\n      </div>\n   </pg-container>\n  </div>\n  <!-- END JUMBOTRON -->\n  <!-- START CONTAINER FLUID -->\n  <pg-container>\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n      <div class=\"card-header \">\n        <div class=\"card-title\">Linear progress\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <p>A progress bar is a visual way of showing how much of a curtain task has being completed. We made it light weighted and simple as possible just for a better user experience.A progress can be indeterminate or determinate according to the length of a task. </p>\n            <br>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <p class=\"small hint-text\">Indeterminate progress</p>\n                <pg-progress type=\"bar\" indeterminate=\"true\" thick=\"true\"></pg-progress>\n                <br>\n                <p class=\"small hint-text\">Determinate progress</p>\n                <pg-progress type=\"bar\" value=\"45\" thick=\"true\"></pg-progress>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"card card-default\">\n              <div class=\"card-body text-center no-padding\">\n                <img alt=\"Determinate bar\" src=\"assets/img/demo/determinate_bar.gif\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"card card-default\">\n              <div class=\"card-body text-center no-padding\">\n                <img alt=\"Indeterminate bar\" src=\"assets/img/demo/indeterminate_bar.gif\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- END card -->\n  </pg-container>\n  <!-- END CONTAINER FLUID -->\n  <!-- START CONTAINER FLUID -->\n  <pg-container>\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n      <div class=\"card-header \">\n        <div class=\"card-title\">Linear progress options\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <h5>Indeterminate progress bar</h5>\n            <p>This progress is used when the length of the task is unknown. Thus shows a repetitive cycle. With the use of a scalable vector graphic we made it light weighted and simple for a better UX.\n            </p>\n            <h5>Determinate progress bar</h5>\n            <p>This progress is used when the length of the task can be measured and visually shown.Thus for linear progress determinate is used frequently. To use simply use .progress-bar-determinate</p>\n          </div>\n          <div class=\"col-lg-4\">\n            <h5>Colour options</h5>\n            <p>You can also apply any colour suited according to the nature of the task. </p>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <pg-progress type=\"bar\" color=\"primary\" value=\"35\" thick=\"true\"></pg-progress>\n                <pg-progress type=\"bar\" color=\"complete\" value=\"45\" thick=\"true\"></pg-progress>\n                <pg-progress type=\"bar\" color=\"success\" value=\"55\" thick=\"true\"></pg-progress>\n                <pg-progress type=\"bar\" color=\"warning\" value=\"65\" thick=\"true\"></pg-progress>\n                <pg-progress type=\"bar\" color=\"danger\" value=\"75\" thick=\"true\"></pg-progress>\n              </div>\n            </div>\n            <p class=\"small hint-text\">All the colours included in pages color pallete is applicable.</p>\n          </div>\n          <div class=\"col-lg-4\">\n            <h5>Bar sizes</h5>\n            <p>You can also use a thinner version of the default progress by simple changing thick=\"falses\" </p>\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                  <pg-progress type=\"bar\" color=\"success\" value=\"45\"></pg-progress>\n                  <pg-progress type=\"bar\" color=\"success\" value=\"45\" thick=\"true\"></pg-progress>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- END card -->\n  </pg-container>\n  <!-- END CONTAINER FLUID -->\n  <!-- START CONTAINER FLUID -->\n  <pg-container>\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n      <div class=\"card-header \">\n        <div class=\"card-title\">Circular progress\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <p>Circular progress is frequently used to show a repetitive cycle for its shape. But breaking convention a circular progress can be indeterminate or determinate according to a task.We developed it mainly for a better UX. </p>\n            <br>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-6 text-center p-t-45\">\n                <pg-progress type=\"circle\" indeterminate=\"true\" class=\"\"></pg-progress>\n                <br>\n                <p class=\"small hint-text\">Indeterminate Progress</p>\n              </div>\n              <div class=\"col-md-6 text-center\">\n                <div class=\"m-t-45\">\n                  <pg-progress type=\"circle\" value=\"40\" ></pg-progress>\n                </div>\n                <br>\n                <p class=\"small hint-text\">Determinate Progress</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"card card-default\">\n              <div class=\"card-body text-center no-padding\">\n                <img alt=\"Determinate circle\" src=\"assets/img/demo/determinate_circle.gif\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"card card-default\">\n              <div class=\"card-body text-center no-padding\">\n                <img alt=\"Indeterminate circle\" src=\"assets/img/demo/indeterminate_circle.gif\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- END card -->\n  </pg-container>\n  <!-- END CONTAINER FLUID -->\n  <!-- START CONTAINER FLUID -->\n  <pg-container>\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n      <div class=\"card-header \">\n        <div class=\"card-title\">Circular progress options\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <h5>Indeterminate progress</h5>\n            <p>This is mostly used for its repetitive circular shape for tasks which the time cannot be measured. With the use of SVG the size can be scaled to any preferred amount by the user without any quality loss. We developed a custom animation with different timescales for a better user experience. </p>\n            <br>\n            <h5>Determinate progress</h5>\n            <p>Similar to the determinate progress bar, circular progress can also be used to show the length of a task. The determinate circular progress indicator can be initialised without writing a single line of Javascript code. </p>\n          </div>\n          <div class=\"col-lg-4\">\n            <h5>Color options</h5>\n            <div class=\"row\">\n              <div class=\"col-md-4 text-center p-t-15 p-b-10\">\n                <pg-progress type=\"circle\" color=\"complete\" value=\"75\" ></pg-progress>\n              </div>\n              <div class=\"col-md-8 p-t-10\">\n                <p>Complete Progress bar color</p>\n                <p class=\"small hint-text\">\n                  Set data attribute <code>color</code> to \"complete\"\n                </p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 text-center p-t-15 p-b-10\">\n                <pg-progress type=\"circle\" color=\"primary\" value=\"75\"></pg-progress>\n              </div>\n              <div class=\"col-md-8 p-t-10\">\n                <p>Complete Progress bar color</p>\n                <p class=\"small hint-text\">\n                  Set data attribute <code>color</code> to \"primary\"\n                </p>\n              </div>\n            </div>\n            <p class=\"small hint-text\">All the colours included in pages color pallete is applicable</p>\n            <br>\n            <button class=\"btn btn-success\">See color palette</button>\n          </div>\n          <div class=\"col-lg-4\">\n            <h5>Circular progress sizes</h5>\n            <p>In circular progress you can change the stroke width</p>\n            <div class=\"row\">\n              <div class=\"col-md-4 text-center p-t-15 p-b-10\">\n                <pg-progress type=\"circle\" value=\"75\"></pg-progress>\n              </div>\n              <div class=\"col-md-8 p-t-10\">\n                <p class=\"small hint-text\">Default progress with a stroke of 3px</p>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-4 text-center p-t-15 p-b-10\">\n                  <pg-progress type=\"circle\" value=\"75\" thick=\"true\"></pg-progress>\n              </div>\n              <div class=\"col-md-8 p-t-10\">\n                <p class=\"small hint-text\">Progress with a stroke of 3px</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- END card -->\n  </pg-container>\n  <!-- END CONTAINER FLUID -->  "

/***/ }),

/***/ "./src/app/ui/progresspage/progresspage.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui/progresspage/progresspage.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/progresspage/progresspage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/progresspage/progresspage.component.ts ***!
  \***********************************************************/
/*! exports provided: ProgresspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgresspageComponent", function() { return ProgresspageComponent; });
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

var ProgresspageComponent = /** @class */ (function () {
    function ProgresspageComponent() {
    }
    ProgresspageComponent.prototype.ngOnInit = function () {
    };
    ProgresspageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progresspage',
            template: __webpack_require__(/*! ./progresspage.component.html */ "./src/app/ui/progresspage/progresspage.component.html"),
            styles: [__webpack_require__(/*! ./progresspage.component.scss */ "./src/app/ui/progresspage/progresspage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgresspageComponent);
    return ProgresspageComponent;
}());



/***/ }),

/***/ "./src/app/ui/sliderpage/sliderpage.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/sliderpage/sliderpage.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "           <!-- START JUMBOTRON -->\n           <div class=\"jumbotron\">\n              <pg-container extraHorizontalClass=\"p-l-0 p-r-0\">\n                <div class=\"inner\" pg-parallax>\n                  <!-- START BREADCRUMB -->\n                  <pg-breadcrumb>\n                    <ol class=\"breadcrumb\">\n                      <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">UI Elements</a></li>\n                      <li class=\"breadcrumb-item active\">Sliders</li>\n                    </ol>\n                  </pg-breadcrumb>\n                  <!-- END BREADCRUMB --> \n                  <div class=\"container-md-height m-b-20\">\n                    <div class=\"row\">\n                      <div class=\"col-xl-7 col-lg-6 bg-white\">\n                        <!-- START card -->\n                        <div class=\"full-height\">\n                          <div class=\"card-body text-center\">\n                            <img class=\"image-responsive-height demo-mw-300\" src=\"assets/img/demo/slider_hero.gif\" alt=\"\">\n                          </div>\n                        </div>\n                        <!-- END card -->\n                      </div>\n                      <div class=\"col-xl-5 col-lg-6\">\n                        <!-- START card -->\n                        <div class=\"card card-transparent\">\n                          <div class=\"card-header \">\n                            <div class=\"card-title\">Getting started\n                            </div>\n                          </div>\n                          <div class=\"card-body\">\n                            <h3>Sometimes small things matter the most in life!</h3>\n                            <p>A slider, also known as a track bar, allows users to set or adjust a value. When the user changes the value, it does not change the format of the interface or other info on the screen.</p>\n                            <br>\n                            <div>\n                              <div class=\"profile-img-wrapper m-t-5 inline\">\n                                <img width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" alt=\"\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\" src2x=\"assets/img/profiles/avatar_small2x.jpg\">\n                                <div class=\"chat-status available\">\n                                </div>\n                              </div>\n                              <div class=\"inline m-l-10\">\n                                <p class=\"small hint-text m-t-5\">VIA senior product manage\n                                  <br> for UI/UX at REVOX</p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <!-- END card -->\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </pg-container>\n            </div>\n            <!-- END JUMBOTRON -->\n            <!-- START CONTAINER FLUID -->\n            <pg-container>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <!-- START card -->\n                  <div class=\"card card-transparent\">\n                    <div class=\"card-header \">\n                      <div class=\"card-title\">Pages slider\n                      </div>\n                    </div>\n                    <div class=\"card-body\">\n                      <p class=\"m-b-20\">Pages is a range slider without bloat. It offers a ton off features, and it is as small, lightweight and minimal as possible, which is great for mobile use on the many supported devices.\n                        <br>\n                        <br>\n                      </p>\n                      <div class=\"col-lg-8 disable-hover-scale no-padding m-t-20\">\n                        <div class=\"bg-master m-b-10\" id=\"slider-tooltips\"></div>\n\n                        <pg-slider [DefaultValue]=\"30\" Tooltip=\"true\" TooltipForceVisiblity=\"true\"></pg-slider>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- END card -->\n                </div>\n                <div class=\"col-md-7\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <!-- START card -->\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header \">\n                          <div class=\"card-title\">Responsive All Around\n                          </div>\n                        </div>\n                        <div class=\"card-body\">\n                          <p>Pages works with pretty much any device, mouse, touchscreen or both, and it'll work beautifully in responsive designs.</p>\n                          <br>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <a href=\"https://docs.pages.revox.io/v/angular/ui-components/sliders\" target=\"_blank\" class=\"btn btn-complete\">See Plugin</a>\n                              <p class=\"small hint-text m-t-20 col-middle\">\n                                see the plugin for uiSlider\n                                <br> https://docs.pages.revox.io/v/angular/ui-components/sliders\n                              </p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- END card -->\n                    </div>\n                    <div class=\"col-md-6\">\n                      <!-- START card -->\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-header \">\n                          <div class=\"card-title\">Compatible with all browsers\n                          </div>\n                        </div>\n                        <div class=\"card-body\">\n                          <p>Pages Sliders supports IE9 and up, and of course the latest versions of the 'evergreen' browsers: Chrome, Safari, Firefox and Opera.</p>\n                        </div>\n                      </div>\n                      <!-- END card -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- START card -->\n              <div class=\"card card-transparent\">\n                <div class=\"card-header \">\n                  <div class=\"card-title\">Slider options\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-body no-top-padding\">\n                          <h5>Connect</h5>\n                          <p>Basic slider with different color options, use of the below classes to quickly create a styled slider. Uses native boostrap colors scheme classes\n                          </p>\n                          <div class=\"row\">\n                            <div class=\"col-lg-5 col-xl-5 padding-20\">\n                              <pg-slider [DefaultValue]=\"90\" ></pg-slider>\n                              <br>\n                              <pg-slider [DefaultValue]=\"70\" [Color]=\"'danger'\" ></pg-slider>\n                              <br>\n                              <pg-slider [DefaultValue]=\"20\" [Color]=\"'warning'\" ></pg-slider>\n                              <br>\n                              <pg-slider [DefaultValue]=\"50\" [Color]=\"'success'\" ></pg-slider>\n                              <br>\n                              <pg-slider [DefaultValue]=\"30\" [Color]=\"'complete'\" ></pg-slider>\n                              <br>\n                              <pg-slider [DefaultValue]=\"50\" [Color]=\"'primary'\" ></pg-slider>\n                              <br>\n                            </div>\n                            <div class=\"col-lg-5\">\n                              <p class=\"small hint-text\">All the colours included in pages color pallete is applicable to the default pages slider.</p>\n                              <a href=\"javascript:void(0)\" class=\"btn btn-warning\">See color Pallete</a>\n                            </div>\n                          </div>\n                          <br>\n                          <p>The slider variations are made by the ciours included as the base clours excluding the menue base color.</p>\n                        </div>\n                      </div>\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-body no-top-padding\">\n                          <h5>Limit</h5>\n                          <p>The limit option is the oposite of the margin option, limiting the maximum distance between two handles. As with the margin option, the limit option can only be used on linear sliders.</p>\n                          <div class=\"row\">\n                            <div class=\"col-md-5 padding-20\">\n                              <pg-slider [Color]=\"'success'\" [(ngModel)]=\"value2\" [Min]=\"1\" [Max]=\"20\" ></pg-slider>\n                              <div class=\"m-t-10\">{{value2}}</div>\n                            </div>\n                            <div class=\"col-lg-5\">\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-body no-top-padding\">\n                          <h5>Step</h5>\n                          <p>By default, the slider slides fluently. In order to make the handles jump between intervals, you can use this option. The step option is relative to the values provided to range.\n                          </p>\n                          <div class=\"row\">\n                            <div class=\"col-md-5 padding-20\">\n                                <pg-slider Range [Color]=\"'danger'\" [(ngModel)]=\"rangeValue\" [Step]=\"10\" [DefaultValue]=\"[20, 50]\"></pg-slider>\n                                <div class=\"m-t-10\">{{rangeValue}}</div>\n                            </div>\n                            <div class=\"col-lg-5\">\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-body no-top-padding\">\n                          <h5>Connect</h5>\n                          <p>The connect setting can be used to control the bar between the handles, or the edges of the slider. Use \"lower\" to connect to the lower side, or \"upper\" to connect to the upper side. Setting true sets the bar between the handles.\n                          </p>\n                          <div class=\"row\">\n                            <div class=\"col-md-5 padding-20\">\n                              <pg-slider [DefaultValue]=\"50\" [Color]=\"'primary'\" [(ngModel)]=\"value1\"></pg-slider>\n                              <br>\n                              <pg-slider [DefaultValue]=\"50\" [Color]=\"'complete'\" [(ngModel)]=\"value1\"></pg-slider>\n                            </div>\n                            <div class=\"col-lg-5 d-flex align-items-center\">\n                                <div class=\"form-group\" style=\"width:50px\">\n                                  <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"value1\">\n                                </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"card card-transparent\">\n                        <div class=\"card-body no-top-padding\">\n                          <h5>Labeled</h5>\n                          <p>Option to segment and label the sliders with specific positions. You will have the ability to step to segment or free form slide as show in the examples.\n                          </p>\n                          <div class=\"m-b-15 p-b-10\">\n                              <p>Enable stepping with markers by adding <code>Step</code> attribute</p> \n                              <div class=\"col-lg-8 p-t-15\">\n                              <pg-slider [Marks]=\"marks\" [Step]=\"10\" [DefaultValue]=\"37\" [Color]=\"'success'\"></pg-slider>\n                              </div>\n                          </div>\n\n                          <div class=\"m-b-15 p-b-10\">\n                              <p>Allowing snap to markers can be adding <code>Dots</code> attribute</p> \n                              <div class=\"col-lg-8 p-t-15\">\n                              <pg-slider [Marks]=\"marks\" Dots [DefaultValue]=\"26\" [Color]=\"'danger'\"></pg-slider>\n                              </div>\n                          </div>\n                        </div>\n                      </div>\n                      \n                      <div class=\"card card-transparent\">\n                          <div class=\"card-body no-top-padding\">\n                            <h5>Orientation</h5>\n                            <p>The orientation setting can be used to set the slider to \"vertical\" or \"horizontal\".Set dimensions! Vertical sliders don't assume a default height, so you'll need to set one. You can use any unit you want, including % or px.\n                            </p>\n                            <div class=\"row\">\n                              <div class=\"col-md-5 padding-20 d-flex\">\n                                <div [ngStyle]=\"{ height: '150px' }\">\n                                  <pg-slider Vertical [DefaultValue]=\"30\"></pg-slider>\n                                </div>\n                                <div [ngStyle]=\"{ height: '150px' }\">\n                                    <pg-slider Vertical Range [Color]=\"'danger'\" [Step]=\"10\" [DefaultValue]=\"[20, 50]\"></pg-slider>\n                                  </div>\n                              </div>\n                              <div class=\"col-lg-5\">\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </pg-container>\n            <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/ui/sliderpage/sliderpage.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/sliderpage/sliderpage.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/sliderpage/sliderpage.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/sliderpage/sliderpage.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderpageComponent", function() { return SliderpageComponent; });
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

var SliderpageComponent = /** @class */ (function () {
    function SliderpageComponent() {
        this.value1 = 20;
        this.value2 = 10;
        this.marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: '100°C'
        };
    }
    SliderpageComponent.prototype.ngOnInit = function () {
    };
    SliderpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slider-page',
            template: __webpack_require__(/*! ./sliderpage.component.html */ "./src/app/ui/sliderpage/sliderpage.component.html"),
            styles: [__webpack_require__(/*! ./sliderpage.component.scss */ "./src/app/ui/sliderpage/sliderpage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderpageComponent);
    return SliderpageComponent;
}());



/***/ }),

/***/ "./src/app/ui/tabspage/tabspage.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/tabspage/tabspage.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" >\n  <pg-container extraHorizontalClass=\"p-l-0 p-r-0\">\n    <div class=\"inner\" pg-parallax>\n      <!-- START BREADCRUMB -->\n      <pg-breadcrumb>\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">UI Elements</a></li>\n          <li class=\"breadcrumb-item active\">TABS & ACCORDIANS</li>\n        </ol>\n      </pg-breadcrumb>      \n      <div class=\"row\">\n        <div class=\"col-xl-7 col-lg-6 \">\n          <!-- START card -->\n          <div class=\"full-height\">\n            <div class=\"card-body text-center\">\n              <img class=\"image-responsive-height demo-mw-600\" src=\"assets/img/demo/tab.png\" alt=\"\">\n            </div>\n          </div>\n          <!-- END card -->\n        </div>\n        <div class=\"col-xl-5 col-lg-6 \">\n          <!-- START card -->\n          <div class=\"card card-transparent\">\n            <div class=\"card-header \">\n              <div class=\"card-title\">Getting started\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <h3>Simply organized</h3>\n              <p>Seemingly unimportant but our range of simple and effective tab choices, allows the user to select the manner in which to categorize, store and obtain content. All this can be done by clicking on the preferred type of tab. </p>\n              <br>\n              <div>\n                <div class=\"profile-img-wrapper m-t-5 inline\">\n                  <img width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" alt=\"\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\" src2x=\"assets/img/profiles/avatar_small2x.jpg\">\n                  <div class=\"chat-status available\">\n                  </div>\n                </div>\n                <div class=\"inline m-l-10\">\n                  <p class=\"small hint-text m-t-5\">VIA senior product manage\n                    <br> for UI/UX at REVOX</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- END card -->\n        </div>\n      </div>\n    </div>\n  </pg-container>\n</div>\n<!-- END JUMBOTRON -->\n<!-- START CONTAINER FLUID -->\n<pg-container>\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"sm-m-l-5 sm-m-r-5\">\n\n        <pg-collapseset Accordion=\"true\">\n          <pg-collapse [Title]=\"'Collapsible Group Item'\">\n            Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.\n          </pg-collapse>\n          <pg-collapse [Title]=\"'Typography Variables'\">\n            <h1 class=\"light\">\n              go explore the <span class=\"semi-bold\">world</span>\n            </h1>\n            <h4>\n              small things in life matters the most\n            </h4>\n            <h2>\n              Big Heading <span class=\"semi-bold\">Body</span>,\n              <i>Variations</i>\n            </h2>\n            <h4>\n              <span class=\"semi-bold\">Open Me</span>, Light , <span class=\n              \"semi-bold\">Bold</span>, <i>Everything</i>\n            </h4>\n            <p>\n              is the art and technique of arranging type in order to make language visible. The arrangement of type involves the selection of typefaces, point size, line length, leading (line spacing), adjusting the spaces between groups of letters (tracking)\n            </p>\n            <p>\n              and adjusting the Case space between pairs of letters (kerning). Type design is a closely related craft, which some consider distinct and others a part of typography\n            </p>\n          </pg-collapse>\n          <pg-collapse [Title]=\"'Easy Edit'\">\n           Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.\n          </pg-collapse>\n        </pg-collapseset>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"card card-borderless\">\n          <pg-tabset tabAnimation=\"slide-left\" Type=\"simple\" ShowPagination=\"true\">\n              <pg-tab>\n                <ng-template #TabHeading>\n                  Hello World\n                </ng-template>\n                <div class=\"row column-seperation\">\n                    <div class=\"col-lg-6\">\n                      <h3>\n                        <span class=\"semi-bold\">Sometimes</span> Small things in life means the most\n                      </h3>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <h3 class=\"semi-bold\">great tabs</h3>\n                      <p>Native boostrap tabs customized to Pages look and feel, simply changing class name you can change color as well as its animations</p>\n                    </div>\n                  </div>\n              </pg-tab>\n              <pg-tab>\n                <ng-template #TabHeading>\n                    Hello Two\n                </ng-template>\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <h3>“ Nothing is\n                        <span class=\"semi-bold\">impossible</span>, the word itself says 'I'm\n                        <span class=\"semi-bold\">possible</span>'! ”\n                      </h3>\n                      <p>A style represents visual customizations on top of a layout. By editing a style, you can use Squarespace's visual interface to customize your...</p>\n                      <br>\n                      <p class=\"pull-right\">\n                        <button type=\"button\" class=\"btn btn-default btn-cons\">White</button>\n                        <button type=\"button\" class=\"btn btn-success btn-cons\">Success</button>\n                      </p>\n                    </div>\n                </div>\n              </pg-tab>\n              <pg-tab>\n                  <ng-template #TabHeading>\n                      Hello Three\n                  </ng-template>\n                  <div class=\"row\">\n                      <div class=\"col-lg-12\">\n                        <h3>Follow us &amp; get updated!</h3>\n                        <p>Instantly connect to what's most important to you. Follow your friends, experts, favorite celebrities, and breaking news.</p>\n                        <br>\n                      </div>\n                    </div>\n              </pg-tab>\n          </pg-tabset>\n      </div>\n    </div>\n  </div>\n  <!-- START card -->\n  <div class=\"card card-transparent\">\n    <div class=\"card-header \">\n      <div class=\"card-title\">tab Orientations\n      </div>\n    </div>\n    <div class=\"card-body no-padding\">\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <div class=\"card card-transparent flex-row\">\n              <pg-tabset tabAnimation=\"slide-left\" Type=\"simple\" TabPosition=\"left\" extraTabClass=\"bg-white\">\n                  <pg-tab>\n                    <ng-template #TabHeading>\n                      Hello World\n                    </ng-template>\n                    <div class=\"row column-seperation\">\n                        <div class=\"col-lg-6\">\n                          <h3>\n                            <span class=\"semi-bold\">Sometimes</span> Small things in life means the most\n                          </h3>\n                        </div>\n                        <div class=\"col-lg-6\">\n                          <h3 class=\"semi-bold\">great tabs</h3>\n                          <p>Native boostrap tabs customized to Pages look and feel, simply changing class name you can change color as well as its animations</p>\n                        </div>\n                      </div>\n                  </pg-tab>\n                  <pg-tab>\n                    <ng-template #TabHeading>\n                        Hello Two\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <h3>“ Nothing is\n                            <span class=\"semi-bold\">impossible</span>, the word itself says 'I'm\n                            <span class=\"semi-bold\">possible</span>'! ”\n                          </h3>\n                          <p>A style represents visual customizations on top of a layout. By editing a style, you can use Squarespace's visual interface to customize your...</p>\n                          <br>\n                          <p class=\"pull-right\">\n                            <button type=\"button\" class=\"btn btn-default btn-cons\">White</button>\n                            <button type=\"button\" class=\"btn btn-success btn-cons\">Success</button>\n                          </p>\n                        </div>\n                    </div>\n                  </pg-tab>\n              </pg-tabset>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <div class=\"card card-transparent flex-row-reverse\">\n              <pg-tabset tabAnimation=\"slide-left\" Type=\"simple\" TabPosition=\"right\" extraTabClass=\"bg-white\">\n                  <pg-tab>\n                    <ng-template #TabHeading>\n                      Hello World\n                    </ng-template>\n                    <div class=\"row column-seperation\">\n                        <div class=\"col-lg-6\">\n                          <h3>\n                            <span class=\"semi-bold\">Sometimes</span> Small things in life means the most\n                          </h3>\n                        </div>\n                        <div class=\"col-lg-6\">\n                          <h3 class=\"semi-bold\">great tabs</h3>\n                          <p>Native boostrap pgtabs customized to Pages look and feel, simply changing class name you can change color as well as its animations</p>\n                        </div>\n                      </div>\n                  </pg-tab>\n                  <pg-tab>\n                    <ng-template #TabHeading>\n                        Hello Two\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <h3>“ Nothing is\n                            <span class=\"semi-bold\">impossible</span>, the word itself says 'I'm\n                            <span class=\"semi-bold\">possible</span>'! ”\n                          </h3>\n                          <p>A style represents visual customizations on top of a layout. By editing a style, you can use Squarespace's visual interface to customize your...</p>\n                          <br>\n                          <p class=\"pull-right\">\n                            <button type=\"button\" class=\"btn btn-default btn-cons\">White</button>\n                            <button type=\"button\" class=\"btn btn-success btn-cons\">Success</button>\n                          </p>\n                        </div>\n                    </div>\n                  </pg-tab>\n                </pg-tabset>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END card -->\n  <!-- START card -->\n  <div class=\"card card-transparent\">\n    <div class=\"card-header \">\n      <div class=\"card-title\">tabs Styles\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h5>Line Triangle tabs</h5> Add the attribute\n          <code>Type=\"linetriangle\"</code> to pg-tabset\n          <br>\n          <br>\n          <div class=\"card card-transparent\">\n            <pg-tabset tabAnimation=\"slide-left\" Type=\"linetriangle\" extraTabContentClass=\"bg-white\">\n                <pg-tab>\n                  <ng-template #TabHeading>\n                    Hello World\n                  </ng-template>\n                  <div class=\"row column-seperation\">\n                      <div class=\"col-lg-6\">\n                        <h3>\n                          <span class=\"semi-bold\">Sometimes</span> Small things in life means the most\n                        </h3>\n                      </div>\n                      <div class=\"col-lg-6\">\n                        <h3 class=\"semi-bold\">great tabs</h3>\n                        <p>Native boostrap tabs customized to Pages look and feel, simply changing class name you can change color as well as its animations</p>\n                      </div>\n                    </div>\n                </pg-tab>\n                <pg-tab>\n                  <ng-template #TabHeading>\n                      Hello Two\n                  </ng-template>\n                  <div class=\"row\">\n                      <div class=\"col-lg-12\">\n                        <h3>“ Nothing is\n                          <span class=\"semi-bold\">impossible</span>, the word itself says 'I'm\n                          <span class=\"semi-bold\">possible</span>'! ”\n                        </h3>\n                        <p>A style represents visual customizations on top of a layout. By editing a style, you can use Squarespace's visual interface to customize your...</p>\n                        <br>\n                        <p class=\"pull-right\">\n                          <button type=\"button\" class=\"btn btn-default btn-cons\">White</button>\n                          <button type=\"button\" class=\"btn btn-success btn-cons\">Success</button>\n                        </p>\n                      </div>\n                    </div>\n                </pg-tab>\n                <pg-tab>\n                    <ng-template #TabHeading>\n                        Hello Three\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <h3>Follow us &amp; get updated!</h3>\n                          <p>Instantly connect to what's most important to you. Follow your friends, experts, favorite celebrities, and breaking news.</p>\n                          <br>\n                        </div>\n                      </div>\n                  </pg-tab>\n            </pg-tabset>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Fill In tabs</h5> Add the attribute\n          <code>Type=\"fillup\"</code> to pg-tabset\n          <br>\n          <br>\n          <div class=\"card card-transparent \">\n              <pg-tabset tabAnimation=\"slide-left\" Type=\"fillup\" extraTabContentClass=\"bg-white\">\n                  <pg-tab>\n                    <ng-template #TabHeading>\n                      <span>Hello World</span>\n                    </ng-template>\n                    <div class=\"row column-seperation\">\n                        <div class=\"col-lg-6\">\n                          <h3>\n                            <span class=\"semi-bold\">Sometimes</span> Small things in life means the most\n                          </h3>\n                        </div>\n                        <div class=\"col-lg-6\">\n                          <h3 class=\"semi-bold\">great tabs</h3>\n                          <p>Native boostrap tabs customized to Pages look and feel, simply changing class name you can change color as well as its animations</p>\n                        </div>\n                      </div>\n                  </pg-tab>\n                  <pg-tab>\n                    <ng-template #TabHeading>\n                      <span>Hello Two</span>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <h3>“ Nothing is\n                            <span class=\"semi-bold\">impossible</span>, the word itself says 'I'm\n                            <span class=\"semi-bold\">possible</span>'! ”\n                          </h3>\n                          <p>A style represents visual customizations on top of a layout. By editing a style, you can use Squarespace's visual interface to customize your...</p>\n                          <br>\n                          <p class=\"pull-right\">\n                            <button type=\"button\" class=\"btn btn-default btn-cons\">White</button>\n                            <button type=\"button\" class=\"btn btn-success btn-cons\">Success</button>\n                          </p>\n                        </div>\n                      </div>\n                  </pg-tab>\n                  <pg-tab>\n                      <ng-template #TabHeading>\n                        <span>Hello Three</span>\n                      </ng-template>\n                      <div class=\"row\">\n                          <div class=\"col-lg-12\">\n                            <h3>Follow us &amp; get updated!</h3>\n                            <p>Instantly connect to what's most important to you. Follow your friends, experts, favorite celebrities, and breaking news.</p>\n                            <br>\n                          </div>\n                        </div>\n                    </pg-tab>\n                </pg-tabset>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END card -->\n</pg-container>\n<!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/ui/tabspage/tabspage.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui/tabspage/tabspage.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/tabspage/tabspage.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/tabspage/tabspage.component.ts ***!
  \***************************************************/
/*! exports provided: TabspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabspageComponent", function() { return TabspageComponent; });
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

var TabspageComponent = /** @class */ (function () {
    function TabspageComponent() {
        this.panels = [
            {
                active: true,
                name: 'This is panel header 1',
                disabled: false,
                childPanel: [
                    {
                        active: false,
                        name: 'This is panel header 1-1'
                    }
                ]
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 2'
            },
            {
                active: true,
                disabled: false,
                name: 'This is panel header 3'
            }
        ];
        this.tabs = [
            {
                name: 'Tab 1',
                content: 'Content of Tab Pane 1'
            },
            {
                name: 'Tab 2',
                content: 'Content of Tab Pane 2'
            },
            {
                name: 'Tab 3',
                content: 'Content of Tab Pane 3'
            }
        ];
    }
    TabspageComponent.prototype.ngOnInit = function () {
    };
    TabspageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabspage',
            template: __webpack_require__(/*! ./tabspage.component.html */ "./src/app/ui/tabspage/tabspage.component.html"),
            styles: [__webpack_require__(/*! ./tabspage.component.scss */ "./src/app/ui/tabspage/tabspage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabspageComponent);
    return TabspageComponent;
}());



/***/ }),

/***/ "./src/app/ui/treeviewpage/treeviewpage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/ui/treeviewpage/treeviewpage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t       <!-- START JUMBOTRON -->\n         <div class=\"jumbotron\">\n          <pg-container extraHorizontalClass=\"p-l-0 p-r-0\">\n              <div class=\"inner\" pg-parallax>\n                <!-- START BREADCRUMB -->\n                <pg-breadcrumb>\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">UI Elements</a></li>\n                    <li class=\"breadcrumb-item active\">Treeview</li>\n                  </ol>\n                </pg-breadcrumb> \n                <!-- END BREADCRUMB --> \n                <div class=\"row\">\n                  <div class=\"col-xl-7 col-lg-6 \">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-header \">\n                        <div class=\"card-title\">Getting started\n                        </div>\n                      </div>\n                      <div class=\"card-body\">\n                          <tree-root [nodes]=\"simpleNodes\" [options]=\"options\" class=\"tree-wrapper bold-node-text level1-document-icon-only m-b-20\"></tree-root>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-5 col-lg-6 \">\n                    <!-- START card -->\n                    <div class=\"card card-transparent\">\n                      <div class=\"card-body\">\n                        <h3 class=\"\">\n                                            Tree view\n                                        </h3>\n                        <p>This is powered by angular tree plugin, most extensively used tree view plugin which is easy use and customize, for further more we have explained how to set up you tree view on pages\n                        </p>\n                        <br>\n                        <a href=\"https://angular2-tree.readme.io/docs\" target=\"_blank\" class=\"btn btn-complete\">See Plugin</a>\n                        <p class=\"small hinted-text inline v-align-middle m-l-10\">see the plugin for\n                          <br> https://angular2-tree.readme.io/\n                        </p>\n                      </div>\n                    </div>\n                    <!-- END card -->\n                  </div>\n                </div>\n              </div>\n          </pg-container>\n        </div>\n        <!-- END JUMBOTRON -->\n        <!-- START CONTAINER FLUID -->\n        <pg-container>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"card card-default\">\n                <div class=\"card-header \">\n                  <div class=\"card-title\">Drag n Drop\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <p>You can drag n drop and move sub items to the desired place you want, Please refer the documentation for more details or angular 2 tree documentation\n                  </p>\n                  <tree-root [nodes]=\"nodes\" [options]=\"optionsdng\" class=\"tree-wrapper bold-node-text level1-document-icon-only\"></tree-root>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"card card-default\">\n                <div class=\"card-header \">\n                  <div class=\"card-title\">Check Tree\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <p>You can make all the items to checkbox or even mix them up with radio controls, Please refer the documentation for more details or angular 2 tree documentation</p>\n                  <div class=\"tree-wrapper bold-node-text level1-document-icon-only\">\n                    <tree-root [nodes]=\"nodes\" [options]=\"options_checkbox\" class=\"reverse\"></tree-root>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"card card-default\">\n                <div class=\"card-header \">\n                  <div class=\"card-title\">Search Tree\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <p>You can search you tree in real time. Please refer the documentation for more details or angular 2 tree documentation</p>\n                  <div>\n                      <div class=\"input-group transparent col-md-8 m-b-15\">\n                          <input type=\"text\" placeholder=\"Type here to Search\" class=\"form-control\"  #filter3 (keyup)=\"filterFn(filter3.value, tree.treeModel)\">\n                          <div class=\"input-group-append\">\n                              <span class=\"input-group-text transparent\"><i class=\"pg pg-search\"></i>\n                              </span>\n                          </div>\n                        </div>\n                      <tree-root #tree [focused]=\"true\" [nodes]=\"searchnodes\"></tree-root>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card card-default\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Lazy Load Tree\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <p>You can search you tree in real time. Please refer the documentation for more details or angular 2 tree documentation</p>\n                    <tree-root [nodes]=\"asyncNodes\" [options]=\"options\" class=\"tree-wrapper bold-node-text level1-document-icon-only\">\n                        <template #loadingTemplate>\n                            <pg-progress type=\"circle\" indeterminate=\"true\" class=\"\"></pg-progress>\n                        </template>\n                    </tree-root>\n                  </div>\n                </div>\n              </div>\n          </div>\n        </pg-container>\n        <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/ui/treeviewpage/treeviewpage.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui/treeviewpage/treeviewpage.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/treeviewpage/treeviewpage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/treeviewpage/treeviewpage.component.ts ***!
  \***********************************************************/
/*! exports provided: TreeviewpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewpageComponent", function() { return TreeviewpageComponent; });
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

var TreeviewpageComponent = /** @class */ (function () {
    function TreeviewpageComponent() {
        this.simpleNodes = [
            {
                id: 1,
                name: 'item1 with key and tooltip'
            },
            {
                id: 2,
                name: 'item2'
            },
            {
                id: 3,
                name: 'Folder with some children',
                children: [
                    { id: 4, name: 'Sub-item 3.1',
                        children: [
                            { id: 5, name: 'Sub-item 3.1.1' },
                            { id: 6, name: 'Sub-item 3.1.2' }
                        ]
                    },
                    { id: 7, name: 'Sub-item 3.2',
                        children: [
                            { id: 8, name: 'Sub-item 3.2.1' },
                            { id: 9, name: 'Sub-item 3.2.2' }
                        ]
                    }
                ]
            },
            {
                id: 10,
                name: 'Document with some children (expanded on init)',
                isExpanded: true,
                children: [
                    { id: 11, name: 'Sub-item 4.1  (active and focus on init)',
                        isFocused: true
                    }
                ]
            },
        ];
        this.nodes = [
            {
                id: 1,
                name: 'item1 with key and tooltip'
            },
            {
                id: 2,
                name: 'item2'
            },
            {
                id: 3,
                name: 'Folder with some children',
                children: [
                    { id: 4, name: 'Sub-item 3.1',
                        children: [
                            { id: 5, name: 'Sub-item 3.1.1' },
                            { id: 6, name: 'Sub-item 3.1.2' }
                        ]
                    },
                    { id: 7, name: 'Sub-item 3.2',
                        children: [
                            { id: 8, name: 'Sub-item 3.2.1' },
                            { id: 9, name: 'Sub-item 3.2.2' }
                        ]
                    }
                ]
            },
            {
                id: 10,
                name: 'Document with some children (expanded on init)',
                isExpanded: true,
                children: [
                    { id: 11, name: 'Sub-item 4.1  (active and focus on init)',
                        isExpanded: true,
                        children: [
                            { id: 12, name: 'Sub-item 4.1.1' },
                            { id: 13, name: 'Sub-item 4.1.2' }
                        ]
                    },
                    { id: 14, name: 'Sub-item 4.2', isExpanded: true,
                        children: [
                            { id: 15, name: 'Sub-item 4.2.1' },
                            { id: 16, name: 'Sub-item 4.2.2' }
                        ]
                    }
                ]
            },
        ];
        this.searchnodes = [
            {
                name: 'North America',
                children: [
                    { name: 'United States', children: [
                            { name: 'New York' },
                            { name: 'California' },
                            { name: 'Florida' }
                        ] },
                    { name: 'Canada' }
                ]
            },
            {
                name: 'South America',
                children: [
                    { name: 'Argentina', children: [] },
                    { name: 'Brazil' }
                ]
            },
            {
                name: 'Europe',
                children: [
                    { name: 'England' },
                    { name: 'Germany' },
                    { name: 'France' },
                    { name: 'Italy' },
                    { name: 'Spain' }
                ]
            }
        ];
        this.options = {
            animateExpand: true,
        };
        this.optionsdng = {
            animateExpand: true,
            allowDrag: true,
            allowDrop: true
        };
        this.options_checkbox = {
            useCheckbox: true
        };
        this.asyncOptions = {
            getChildren: this.getChildren.bind(this)
        };
        this.asyncNodes = [];
        this.asyncChildren = [
            {
                name: 'child1',
                hasChildren: true
            }, {
                name: 'child2'
            }
        ];
        this.asyncNodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' }
                ]
            },
            {
                name: 'root2',
                hasChildren: true
            },
            {
                name: 'root3'
            }
        ];
    }
    TreeviewpageComponent.prototype.ngOnInit = function () {
    };
    TreeviewpageComponent.prototype.filterFn = function (value, treeModel) {
        var _this = this;
        treeModel.filterNodes(function (node) { return _this.fuzzysearch(value, node.data.name); });
    };
    TreeviewpageComponent.prototype.fuzzysearch = function (needle, haystack) {
        var haystackLC = haystack.toLowerCase();
        var needleLC = needle.toLowerCase();
        var hlen = haystack.length;
        var nlen = needleLC.length;
        if (nlen > hlen) {
            return false;
        }
        if (nlen === hlen) {
            return needleLC === haystackLC;
        }
        outer: for (var i = 0, j = 0; i < nlen; i++) {
            var nch = needleLC.charCodeAt(i);
            while (j < hlen) {
                if (haystackLC.charCodeAt(j++) === nch) {
                    continue outer;
                }
            }
            return false;
        }
        return true;
    };
    TreeviewpageComponent.prototype.getChildren = function (node) {
        var newNodes = this.asyncChildren.map(function (c) { return Object.assign({}, c); });
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(newNodes); }, 1000);
        });
    };
    TreeviewpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treeviewpage',
            template: __webpack_require__(/*! ./treeviewpage.component.html */ "./src/app/ui/treeviewpage/treeviewpage.component.html"),
            styles: [__webpack_require__(/*! ./treeviewpage.component.scss */ "./src/app/ui/treeviewpage/treeviewpage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeviewpageComponent);
    return TreeviewpageComponent;
}());



/***/ }),

/***/ "./src/app/ui/typopage/typopage.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/typopage/typopage.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- START JUMBOTRON -->\n<div class=\"jumbotron\">\n<pg-container extraHorizontalClass=\"p-l-0 p-r-0\">\n  <div class=\"inner\" pg-parallax>\n    <!-- START BREADCRUMB -->\n    <pg-breadcrumb>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">UI Elements</a></li>\n        <li class=\"breadcrumb-item active\">Typography</li>\n      </ol>\n    </pg-breadcrumb> \n    <!-- END BREADCRUMB --> \n\t  <div class=\"container-md-height m-b-20\">\n\t    <div class=\"row m-lg-0\">\n\t      <div class=\"col-xl-7 col-lg-6 bg-white\">\n\t        <!-- START card -->\n\t        <div class=\"full-height\">\n\t          <div class=\"card-body text-center\">\n\t            <img class=\"image-responsive-height demo-mw-500\" src=\"assets/img/demo/typography_hero.gif\" alt=\"\">\n\t          </div>\n\t        </div>\n\t        <!-- END card -->\n\t      </div>\n\t      <div class=\"col-xl-5 col-lg-6\">\n\t        <!-- START card -->\n\t        <div class=\"card card-transparent\">\n\t          <div class=\"card-header \">\n\t            <div class=\"card-title\">Getting started\n\t            </div>\n\t          </div>\n\t          <div class=\"card-body\">\n\t            <h3>One of the most underestimated elements of design is typography. However, it’s critical in both print and web media. We Made it Perfect in both.</h3>\n\t            <p>This feature in our product specifically creates hinted fonts for various OS browsers; whether its Windows, Mac OSx, or ubuntu, it does it for all.</p>\n\t            <br>\n\t            <div>\n\t              <div class=\"profile-img-wrapper m-t-5 inline\">\n\t                <img width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" alt=\"\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\" src2x=\"assets/img/profiles/avatar_small2x.jpg\">\n\t                <div class=\"chat-status available\">\n\t                </div>\n\t              </div>\n\t              <div class=\"inline m-l-10\">\n\t                <p class=\"small hint-text m-t-5\">VIA senior product manage\n\t                  <br> for fonts and typography at REVOX</p>\n\t              </div>\n\t            </div>\n\t          </div>\n\t        </div>\n\t        <!-- END card -->\n\t      </div>\n\t    </div>\n\t  </div>\n  </div>\n</pg-container>\n</div>\n<!-- END JUMBOTRON -->\n<!-- START CONTAINER FLUID -->\n<pg-container>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n          <div class=\"card-title\">System OS detection\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <p>When it comes to Windows, Mac OS X or Ubuntu, The font rendering is vastly different. It in fact has a huge effect on the typography design structure. </p>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-3\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n          <div class=\"card-title\">Solution\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <p>We Developed an algorithm that will automatically select which font is best rendered as for your operating system.</p>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n          <div class=\"card-title\">Recommended Loaded Font\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <p>Current Platform:</p>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <h5 class=\"font-arial no-margin\">Arial</h5>\n              <p class=\"hint-text\">Body font</p>\n            </div>\n            <div class=\"col-md-4\">\n              <h5 class=\"font-montserrat no-margin text-uppercase\">Montserrat</h5>\n              <p class=\"hint-text\">Other font</p>\n            </div>\n            <div class=\"col-md-4\">\n              <h5 class=\"semi-bold no-margin\" id=\"font_name\">Segeo UI</h5>\n              <p class=\"hint-text\">Heading</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->\n<!-- START CONTAINER FLUID -->\n<pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <!-- START card -->\n        <div class=\"card card-transparent\">\n          <div class=\"card-header  m-t-30\">\n            <div class=\"card-title\">Font Guidelines\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <p>We tested almost every web font to see which font gets render best in comparisan to the operating system. Better visibility, clarity and compatibility is fully ensured as we have paid detailed attention in making for perfect reading. </p>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-3\">\n              </div>\n              <div class=\"col-6\">\n                <p class=\"no-margin\"><a href=\"javascript:void(0)\">SegeoUI</a>\n                </p>\n                <p class=\"small\">Windows</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-3\">\n              </div>\n              <div class=\"col-6\">\n                <p class=\"no-margin\"><a href=\"javascript:void(0)\">Helvetica Family</a>\n                </p>\n                <p class=\"small\">Mac OS, iOS, Android</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-3\">\n              </div>\n              <div class=\"col-6\">\n                <p class=\"no-margin\"><a href=\"javascript:void(0)\">Ubuntu</a>\n                </p>\n                <p class=\"small\">Ubuntu</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- END card -->\n      </div>\n      <div class=\"col-md-8\">\n        <!-- START card -->\n        <div class=\"card card-transparent\">\n          <div class=\"card-body text-center\">\n            <img alt=\"\" src=\"assets/img/demo/typo_font_preview.svg\" class=\"p-t-40 p-b-40 image-responsive-height demo-mw-400\">\n          </div>\n        </div>\n        <!-- END card -->\n      </div>\n    </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->\n<!-- START CONTAINER FLUID -->\n<pg-container extraHorizontalClass=\"m-t-20\" extraClass=\"m-t-20\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-default hover-stroke\">\n        <div class=\"card-body no-padding\">\n          <div class=\"container-sm-height\">\n            <div class=\"row row-sm-height\">\n              <div class=\"col-md-9 col-sm-height padding-20 col-top\">\n                <p class=\"font-montserrat bold\">WEB SAFE FONTS</p>\n                <h3 class=\"no-margin font-arial\">\n                          Arial, The best Universal Multi-purpose.\n                      </h3>\n                <p class=\"small hint-text\">The Arial® typeface : http://www.fonts.com/font/monotype/arial</p>\n              </div>\n              <div class=\"col-md-3 justify-content-center d-flex flex-column bg-master-lighter\">\n                <h4 class=\"text-center text-primary no-margin\">\n                          Web safe\n                      </h4>\n                <h2 class=\"text-center text-primary no-margin\">98%</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-default hover-stroke\">\n        <div class=\"card-body no-padding\">\n          <div class=\"container-sm-height\">\n            <div class=\"row row-sm-height\">\n              <div class=\"col-md-9 padding-20  col-sm-height col-top\">\n                <p class=\"font-montserrat bold\">GOOGLE FONT</p>\n                <h3 class=\"font-montserrat no-margin text-uppercase demo-fs-23\">Montserrat Additional Font style</h3>\n                <p class=\"small hint-text\">The Montserrat® typeface : http://www.google.com/ fonts/specimen/Montserrat\n                </p>\n              </div>\n              <div class=\"col-md-3 justify-content-center d-flex flex-column bg-master-lighter\">\n                <h4 class=\"text-center text-primary no-margin\">\n                        Google font\n                      </h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->\n<!-- START CONTAINER FLUID -->\n<pg-container>\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n          <div class=\"card-title\">\n            Typographic Scale &amp; Basic Styles\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <h3 class=\"text-primary no-margin\">Standard Styles</h3>\n          <br>\n          <p>Too many type sizes and styles at once can wreck any layout. A typographic scale is a limited set of type sizes that work well together, along with the layout grid. The basic set of styles are based on a typographic scale of 12, 14, 16, 20, and 34.\n          </p>\n          <p>\n            These sizes and styles balance content density and reading comfort under typical usage conditions. Type sizes are specified with SP (scaleable pixels) to enable large-type modes for accessibility.\n          </p>\n          <br>\n          <button class=\"btn btn-primary\">Buy now</button>\n          <p class=\"hint-text m-t-10 small\">Learn more at Project Pages</p>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-7\">\n      <!-- START card -->\n      <div class=\"card card-default\">\n        <div class=\"card-body\">\n          <p class=\"sm-p-t-20\">Headings are the first thing you ll see or read in a document. We wanted to make them perfect in both size and colour.\n          </p>\n          <div class=\"row\">\n            <table class=\"table table-condensed table-borderless\">\n              <tbody>\n                <tr>\n                  <td class=\"col-10\">\n                    <h1>h1. Bootstrap heading</h1>\n                  </td>\n                  <td class=\"type-info\">Light 36px</td>\n                </tr>\n                <tr>\n                  <td>\n                    <h2 class=\"\">h2. Bootstrap heading</h2>\n                  </td>\n                  <td class=\"type-info\">Light 30px</td>\n                </tr>\n                <tr>\n                  <td>\n                    <h3 class=\"\">h3. Bootstrap heading</h3>\n                  </td>\n                  <td class=\"type-info\">Light 24px</td>\n                </tr>\n                <tr>\n                  <td>\n                    <h4 class=\"\">h4. Bootstrap heading</h4>\n                  </td>\n                  <td class=\"type-info\">Light 18px</td>\n                </tr>\n                <tr>\n                  <td>\n                    <h5 class=\"\">h5. Bootstrap heading</h5>\n                  </td>\n                  <td class=\"type-info\">Light 14px</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->\n<!-- START CONTAINER FLUID -->\n<pg-container>\n  <div class=\"row\">\n    <div class=\"col-xl-5 col-lg-3\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n          <div class=\"card-title\">Paint the world\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <p>Color can be a wonderful tool for making your dashboard less stressful and more calming and it can have a significant impact on your mood and well-being, We made it with you in mind\n          </p>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-xl-7 col-lg-9\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3 m-b-15\">\n              <p class=\"text-heading-color\">\n                Heading color\n              </p>\n              <div class=\"bg-master-darkest b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <div class=\"hint-text clearfix\">\n                    <p class=\"small v-align-middle pull-left no-margin\">\n                      .text-black\n                    </p>\n                    <p class=\"small text-right v-align-middle pull-right no-margin\">\n                      #2c2c2c\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 m-b-15\">\n              <p class=\"\">\n                Body text\n              </p>\n              <div class=\"bg-master b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <div class=\"clearfix hint-text\">\n                    <p class=\"small v-align-middle pull-left no-margin\">\n                      Default\n                    </p>\n                    <p class=\"small text-right v-align-middle pull-right no-margin\">\n                      #626262\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 m-b-15\">\n              <p class=\"\">\n                Hinted text\n              </p>\n              <div class=\"b-a b-grey demo-bg-hinted\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <div class=\"clearfix hint-text\">\n                    <p class=\"small v-align-middle pull-left no-margin\">\n                      .hint-text\n                    </p>\n                    <p class=\"small text-right v-align-middle pull-right no-margin\">\n                      #2c2c2c\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 m-b-15\">\n              <p class=\"text-heading-color\">\n                Primary color\n              </p>\n              <div class=\"bg-primary b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <div class=\"clearfix text-black hint-text\">\n                    <p class=\"small v-align-middle pull-left no-margin\">\n                      .text-primary\n                    </p>\n                    <p class=\"small text-right v-align-middle pull-righ no-margin\">\n                      #62549a\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3 m-b-15\">\n              <p class=\"\">\n                Success color\n              </p>\n              <div class=\"bg-success b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <div class=\"clearfix hint-text\">\n                    <p class=\"small v-align-middle pull-left no-margin\">\n                      .text-success\n                    </p>\n                    <p class=\"small text-right v-align-middle pull-right no-margin\">\n                      #4aa9e9\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 m-b-15\">\n              <p class=\"\">\n                Complete color\n              </p>\n              <div class=\"bg-complete b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <div class=\"clearfix hint-text\">\n                    <p class=\"small v-align-middle pull-left no-margin\">\n                      .text-complete\n                    </p>\n                    <p class=\"small text-right v-align-middle pull-right no-margin\">\n                      #23b9a9\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 m-b-15\">\n              <p class=\"text-heading-color\">\n                Danger color\n              </p>\n              <div class=\"bg-danger b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <div class=\"clearfix hint-text\">\n                    <p class=\"small v-align-middle pull-left no-margin\">\n                      .text-danger\n                    </p>\n                    <p class=\"small text-right v-align-middle pull-right no-margin\">\n                      #ce4e4d\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 m-b-15\">\n              <p class=\"\">\n                Warning color\n              </p>\n              <div class=\"bg-warning b-a b-grey\">\n                <div class=\"bg-white m-t-45 padding-10\">\n                  <div class=\"clearfix hint-text\">\n                    <p class=\"small v-align-middle pull-left no-margin\">\n                      .text-warning\n                    </p>\n                    <p class=\"small text-right v-align-middle pull-right no-margin\">\n                      #eac459\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->\n<!-- START CONTAINER FLUID -->\n<pg-container>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-default\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <p class=\"bold sm-p-t-20\">Highlighted Text</p>\n              <p>For highlighting a run of text due to its relevance in another context</p>\n            </div>\n            <div class=\"col-lg-2 p-t-20\">\n              <code>&lt;mark&gt;</code>\n            </div>\n            <div class=\"col-lg-6 p-t-20\">\n              it is more then\n              <mark>ONE nation/nationality</mark> as its fall name is The United Kingdom of Great Britain and North Ireland..\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-default\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <p class=\"bold sm-p-t-20\">Bold Text</p>\n              <p>For emphasizing a snippet of text with a heavier font-weight.</p>\n            </div>\n            <div class=\"col-lg-2 p-t-20\">\n              <code>&lt;strong&gt;</code>\n              <code>.bold</code>\n            </div>\n            <div class=\"col-lg-6 p-t-20\">\n              it is more then <strong>ONE nation/nationality</strong> as its fall name is The United Kingdom of Great Britain and North Ireland..\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-default\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <p class=\"bold sm-p-t-20\">Ordered List</p>\n              <p>For highlighting a run of text due to its relevance in another context</p>\n            </div>\n            <div class=\"col-lg-2 p-t-20\">\n              <code>&lt;ol&gt;&lt;/ol&gt;</code>\n            </div>\n            <div class=\"col-lg-6 p-t-20\">\n              <ol class=\"bold\">\n                <li>\n                  <span class=\"normal\">Lorem ipsum dolor sit amet</span>\n                </li>\n                <li>\n                  <span class=\"normal\">Consectetur adipiscing elit</span>\n                </li>\n                <li>\n                  <span class=\"normal\">Integer molestie lorem at massa</span>\n                </li>\n              </ol>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-default\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <p class=\"bold sm-p-t-20\">Un-Ordered List</p>\n              <p>For highlighting a run of text due to its relevance in another context</p>\n            </div>\n            <div class=\"col-lg-2 p-t-20\">\n              <code>&lt;ul&gt;&lt;/ul&gt;</code>\n            </div>\n            <div class=\"col-lg-6 p-t-20\">\n              <ul class=\"lg-icon\">\n                <li><span>Life isn’t about getting and having...</span>\n                </li>\n                <li><span>Strive not to be a success... </span>\n                </li>\n                <li><span>Whatever the mind of man can... </span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->\n<!-- START CONTAINER FLUID -->\n<pg-container>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n          <div class=\"card-title\">Address Block\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <p>For quotes in your document &amp; client reviews</p>\n          <blockquote class=\"margin-top-20\">\n            <p>It is during our darkest moments that we must focus to see the light.</p>\n            <small>Aristotle Onassis</small>\n          </blockquote>\n          <blockquote class=\"pull-right\">\n            <p>The best and most beautiful things in the world cannot be seen or even touched.</p>\n            <small>Helen Keller</small>\n          </blockquote>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n    <div class=\"col-md-6\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n          <div class=\"card-title\">Address Block\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <address class=\"margin-bottom-20 margin-top-10\">\n                  <strong>Revox, Inc.</strong>\n                  <br>795 Folsom Ave, Suite 600\n                  <br>San Francisco, CA 94107\n                  <br>\n                  <abbr title=\"Phone\">P:</abbr>(123) 456-7890\n              </address>\n          <address>\n                  <strong>David Nester</strong>\n                  <br>\n                  <a href=\"mailto:#\">david.nester@revox.io</a>\n              </address>\n        </div>\n      </div>\n      <!-- END card -->\n    </div>\n  </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/ui/typopage/typopage.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui/typopage/typopage.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/typopage/typopage.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/typopage/typopage.component.ts ***!
  \***************************************************/
/*! exports provided: TypopageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypopageComponent", function() { return TypopageComponent; });
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

var TypopageComponent = /** @class */ (function () {
    function TypopageComponent() {
    }
    TypopageComponent.prototype.ngOnInit = function () {
    };
    TypopageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typopage',
            template: __webpack_require__(/*! ./typopage.component.html */ "./src/app/ui/typopage/typopage.component.html"),
            styles: [__webpack_require__(/*! ./typopage.component.scss */ "./src/app/ui/typopage/typopage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypopageComponent);
    return TypopageComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _ui_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui.routing */ "./src/app/ui/ui.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/index.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@pages/components/tabs/tabs.module */ "./src/app/@pages/components/tabs/tabs.module.ts");
/* harmony import */ var _pages_components_message_message_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@pages/components/message/message.module */ "./src/app/@pages/components/message/message.module.ts");
/* harmony import */ var _pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@pages/components/message/message.service */ "./src/app/@pages/components/message/message.service.ts");
/* harmony import */ var _pages_components_collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@pages/components/collapse */ "./src/app/@pages/components/collapse/index.ts");
/* harmony import */ var _pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@pages/components/progress/progress.module */ "./src/app/@pages/components/progress/progress.module.ts");
/* harmony import */ var _pages_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../@pages/components/slider/slider.module */ "./src/app/@pages/components/slider/slider.module.ts");
/* harmony import */ var _pages_components_cs_select_select_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../@pages/components/cs-select/select.module */ "./src/app/@pages/components/cs-select/select.module.ts");
/* harmony import */ var _typopage_typopage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./typopage/typopage.component */ "./src/app/ui/typopage/typopage.component.ts");
/* harmony import */ var _iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./iconspage/iconspage.component */ "./src/app/ui/iconspage/iconspage.component.ts");
/* harmony import */ var _notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notificationspage/notificationspage.component */ "./src/app/ui/notificationspage/notificationspage.component.ts");
/* harmony import */ var _modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modalspage/modalspage.component */ "./src/app/ui/modalspage/modalspage.component.ts");
/* harmony import */ var _progresspage_progresspage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./progresspage/progresspage.component */ "./src/app/ui/progresspage/progresspage.component.ts");
/* harmony import */ var _tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tabspage/tabspage.component */ "./src/app/ui/tabspage/tabspage.component.ts");
/* harmony import */ var _buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./buttonspage/buttonspage.component */ "./src/app/ui/buttonspage/buttonspage.component.ts");
/* harmony import */ var _colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./colorspage/colorspage.component */ "./src/app/ui/colorspage/colorspage.component.ts");
/* harmony import */ var _sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sliderpage/sliderpage.component */ "./src/app/ui/sliderpage/sliderpage.component.ts");
/* harmony import */ var _treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./treeviewpage/treeviewpage.component */ "./src/app/ui/treeviewpage/treeviewpage.component.ts");
/* harmony import */ var _iconspage_icons_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./iconspage/icons.service */ "./src/app/ui/iconspage/icons.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular Dependencies





//Requires Forms to be imported for Checkbox buttons



//Core Pages Layout Components

//Bootstrap Components by ngx-bootstrap






//Thirdparty Treeview component

//Pages Components by ace







//Sample Demo pages










//Services

var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_ui_routing__WEBPACK_IMPORTED_MODULE_7__["uiRoute"]),
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
                _pages_components_collapse__WEBPACK_IMPORTED_MODULE_15__["pgCollapseModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                _pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_16__["ProgressModule"].forRoot(),
                _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_12__["pgTabsModule"],
                _pages_components_cs_select_select_module__WEBPACK_IMPORTED_MODULE_18__["pgSelectfx"],
                _pages_components_message_message_module__WEBPACK_IMPORTED_MODULE_13__["MessageModule"],
                _pages_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_17__["pgSliderModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_11__["TreeModule"]
            ],
            declarations: [_buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_25__["ButtonspageComponent"],
                _colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_26__["ColorspageComponent"],
                _typopage_typopage_component__WEBPACK_IMPORTED_MODULE_19__["TypopageComponent"],
                _iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_20__["IconspageComponent"],
                _notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_21__["NotificationspageComponent"],
                _modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_22__["ModalspageComponent"],
                _progresspage_progresspage_component__WEBPACK_IMPORTED_MODULE_23__["ProgresspageComponent"],
                _tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_24__["TabspageComponent"],
                _sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_27__["SliderpageComponent"],
                _treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_28__["TreeviewpageComponent"]],
            providers: [_iconspage_icons_service__WEBPACK_IMPORTED_MODULE_29__["IconsService"], _pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/ui/ui.routing.ts":
/*!**********************************!*\
  !*** ./src/app/ui/ui.routing.ts ***!
  \**********************************/
/*! exports provided: uiRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiRoute", function() { return uiRoute; });
/* harmony import */ var _buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonspage/buttonspage.component */ "./src/app/ui/buttonspage/buttonspage.component.ts");
/* harmony import */ var _colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorspage/colorspage.component */ "./src/app/ui/colorspage/colorspage.component.ts");
/* harmony import */ var _typopage_typopage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typopage/typopage.component */ "./src/app/ui/typopage/typopage.component.ts");
/* harmony import */ var _iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconspage/iconspage.component */ "./src/app/ui/iconspage/iconspage.component.ts");
/* harmony import */ var _notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notificationspage/notificationspage.component */ "./src/app/ui/notificationspage/notificationspage.component.ts");
/* harmony import */ var _modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modalspage/modalspage.component */ "./src/app/ui/modalspage/modalspage.component.ts");
/* harmony import */ var _progresspage_progresspage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progresspage/progresspage.component */ "./src/app/ui/progresspage/progresspage.component.ts");
/* harmony import */ var _tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabspage/tabspage.component */ "./src/app/ui/tabspage/tabspage.component.ts");
/* harmony import */ var _sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sliderpage/sliderpage.component */ "./src/app/ui/sliderpage/sliderpage.component.ts");
/* harmony import */ var _treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treeviewpage/treeviewpage.component */ "./src/app/ui/treeviewpage/treeviewpage.component.ts");
//Sample Demo pages










var uiRoute = [
    {
        path: '',
        children: [{
                path: 'color',
                component: _colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_1__["ColorspageComponent"],
                data: {
                    title: 'color'
                }
            }, {
                path: 'typography',
                component: _typopage_typopage_component__WEBPACK_IMPORTED_MODULE_2__["TypopageComponent"],
                data: {
                    title: 'typography'
                }
            }, {
                path: 'icons',
                component: _iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_3__["IconspageComponent"],
                data: {
                    title: 'icons'
                }
            }, {
                path: 'buttons',
                component: _buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_0__["ButtonspageComponent"],
                data: {
                    title: 'buttons'
                }
            }, {
                path: 'notifications',
                component: _notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_4__["NotificationspageComponent"],
                data: {
                    title: 'notification'
                }
            }, {
                path: 'modal',
                component: _modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_5__["ModalspageComponent"],
                data: {
                    title: 'modals'
                }
            }, {
                path: 'progress',
                component: _progresspage_progresspage_component__WEBPACK_IMPORTED_MODULE_6__["ProgresspageComponent"],
                data: {
                    title: 'progress'
                }
            }, {
                path: 'tabs',
                component: _tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_7__["TabspageComponent"],
                data: {
                    title: 'tabs & accordians'
                }
            }, {
                path: 'sliders',
                component: _sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_8__["SliderpageComponent"],
                data: {
                    title: 'sliders'
                }
            }, {
                path: 'tree',
                component: _treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_9__["TreeviewpageComponent"],
                data: {
                    title: 'treeview'
                }
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=ui-ui-module.js.map