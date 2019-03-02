(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module~ui-ui-module"],{

/***/ "./src/app/@pages/components/cs-select/option.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/option.component.ts ***!
  \*****************************************************************/
/*! exports provided: pgOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgOptionComponent", function() { return pgOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.component */ "./src/app/@pages/components/cs-select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pgOptionComponent = /** @class */ (function () {
    function pgOptionComponent(_Select) {
        this._Select = _Select;
        this._disabled = false;
    }
    Object.defineProperty(pgOptionComponent.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value === value) {
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgOptionComponent.prototype, "Label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            if (this._label === value) {
                return;
            }
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgOptionComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgOptionComponent.prototype.ngOnInit = function () {
        this._Select.addOption(this);
    };
    pgOptionComponent.prototype.ngOnDestroy = function () {
        this._Select.removeOption(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('OptionTemplate'),
        __metadata("design:type", Object)
    ], pgOptionComponent.prototype, "OptionTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgOptionComponent.prototype, "Value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgOptionComponent.prototype, "Label", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgOptionComponent.prototype, "Disabled", null);
    pgOptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-selectfx-option',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <ng-content></ng-content>\n  ",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_select_component__WEBPACK_IMPORTED_MODULE_2__["pgSelectFXComponent"]])
    ], pgOptionComponent);
    return pgOptionComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/cs-select/option.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/option.pipe.ts ***!
  \************************************************************/
/*! exports provided: OptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionPipe", function() { return OptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:no-any */

var OptionPipe = /** @class */ (function () {
    function OptionPipe() {
    }
    // TODO: enable type checking for this method
    OptionPipe.prototype.transform = function (options, value) {
        if (value.searchText) {
            var _options = options.filter(function (option) { return option.Label && (option.Label.toLowerCase().indexOf(value.searchText.toLowerCase()) !== -1); });
            if (value.tags) {
                _options = options.filter(function (option) { return option.Label && (option.Label.toLowerCase() === value.searchText.toLowerCase()); });
            }
            if (_options.length) {
                return _options;
            }
            else {
                return [{
                        Value: value.value,
                        _value: value.value,
                        Disabled: value.disabled,
                        _disabled: value.disabled,
                        Label: value.notFoundContent,
                        _label: value.notFoundContent,
                    }
                ];
            }
        }
        else {
            return options;
        }
    };
    OptionPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'OptionPipe' })
    ], OptionPipe);
    return OptionPipe;
}());



/***/ }),

/***/ "./src/app/@pages/components/cs-select/select.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/select.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n      tabindex=\"0\"\n      #trigger\n      cdkOverlayOrigin\n      #origin=\"cdkOverlayOrigin\"\n      class=\"cs-wrapper\"\n      (keydown.Enter)=\"handleKeyEnterEvent($event)\"\n      (keydown.Backspace)=\"handleKeyBackspaceEvent($event)\"\n      (keydown.ArrowUp)=\"handleKeyUpEvent($event)\"\n      (keydown.ArrowDown)=\"handleKeyDownEvent($event)\">\n      <!-- <div class=\"pg-select-selection__rendered\" >\n        <div class=\"pg-select-selection__placeholder\">\n          <ng-template [ngIf]=\"!_selectedOption\">\n            {{ PlaceHolder }}\n          </ng-template>\n        </div>\n   \n      </div> -->\n      <div class=\"cs-select cs-skin-slide cs-main\" #placeHolder>\n          <span class=\"cs-placeholder\">\n              <ng-template [ngIf]=\"!_selectedOption\">\n                  {{ PlaceHolder }}\n              </ng-template>\n            {{ _selectedOption?.Label }}\n          </span>\n        <div class=\"cs-options\" style=\"width: 100%; overflow-y: auto;\" #csOptions>\n          <ul>\n            <li\n            *ngFor=\"let option of _filterOptions\">\n            <span>\n              <ng-template\n                *ngIf=\"option.OptionTemplate\"\n                [ngTemplateOutlet]=\"option.OptionTemplate\">\n              </ng-template>\n              <ng-template [ngIf]=\"!option.OptionTemplate\">\n                {{ option.Label }}\n              </ng-template>\n              </span>\n            </li>\n          </ul>\n        </div>\n        <div class=\"cs-backdrop\"></div>    \n      </div> \n    </div>\n    <ng-template\n      cdkConnectedOverlay\n      cdkConnectedOverlayHasBackdrop\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      (backdropClick)=\"closeDropDown()\"\n      (detach)=\"closeDropDown();\"\n      (positionChange)=\"onPositionChange($event)\"\n      [cdkConnectedOverlayWidth]=\"_triggerWidth\"\n      [cdkConnectedOverlayOpen]=\"_isOpen\"\n    >\n      <div class=\"cs-select cs-skin-slide\"\n        [ngClass]=\"_dropDownClassMap\" [ngStyle]=\"top\" [class.cs-active]=\"_openBackdrop\">\n          <span class=\"cs-placeholder\">\n              <ng-template [ngIf]=\"!_selectedOption\">\n                  {{ PlaceHolder }}\n              </ng-template>\n            {{ _selectedOption?.Label }}\n          </span>\n          <div class=\"cs-options\" style=\"width: 100%; overflow-y: auto;\">\n            <ul>\n              <li\n              *ngFor=\"let option of _filterOptions\"\n              [class.active]=\"option.Value == _activeFilterOption?.Value\"\n              [class.selected]=\"(option.Value==(_selectedOption?.Value))||(isInSet(_selectedOptions,option))\"\n              (click)=\"clickOption(option,$event)\">\n              <span>\n                <ng-template\n                  *ngIf=\"option.OptionTemplate\"\n                  [ngTemplateOutlet]=\"option.OptionTemplate\">\n                </ng-template>\n                <ng-template [ngIf]=\"!option.OptionTemplate\">\n                  {{ option.Label }}\n                </ng-template>\n              </span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"cs-backdrop\" [ngStyle]=\"_backDropStyles\"></div>\n      </div>\n    </ng-template>"

/***/ }),

/***/ "./src/app/@pages/components/cs-select/select.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/select.component.ts ***!
  \*****************************************************************/
/*! exports provided: pgSelectFXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSelectFXComponent", function() { return pgSelectFXComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations/dropdown-animations */ "./src/app/@pages/animations/dropdown-animations.ts");
/* harmony import */ var _animations_tag_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/tag-animations */ "./src/app/@pages/animations/tag-animations.ts");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
/* harmony import */ var _option_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./option.pipe */ "./src/app/@pages/components/cs-select/option.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * complex but work well
 * TODO: rebuild latter
 */






//import { LocaleService } from '../locale/index';


var pgSelectFXComponent = /** @class */ (function () {
    function pgSelectFXComponent(_elementRef, _renderer) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._allowClear = false;
        this._disabled = false;
        this._isTags = false;
        this._isMultiple = false;
        this._keepUnListOptions = false;
        this._isOpen = false;
        this._prefixCls = 'pg-select';
        this._classList = [];
        this._dropDownPrefixCls = this._prefixCls + "-dropdown";
        this._selectionPrefixCls = this._prefixCls + "-selection";
        this._placeholder = 'placeholder';
        this._notFoundContent = "No Content";
        this._searchText = '';
        this._triggerWidth = 0;
        this._selectedOptions = new Set();
        this._options = [];
        this._cacheOptions = [];
        this._filterOptions = [];
        this._tagsOptions = [];
        this._isMultiInit = false;
        this._dropDownPosition = 'bottom';
        this._composing = false;
        this._backDropStyles = {
            "transform": 'scale3d(1,1,1)'
        };
        this._openBackdrop = false;
        // ngModel Access
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.SearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.OpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.ScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.Filter = true;
        this.MaxMultiple = Infinity;
        /** new -option insert or new tags insert */
        this.addOption = function (option) {
            _this._options.push(option);
            if (!_this._isTags) {
                if (option.Value) {
                    _this.updateSelectedOption(_this._value);
                }
                else {
                    _this.forceUpdateSelectedOption(_this._value);
                }
            }
        };
        /** cancel select multiple option */
        this.unSelectMultipleOption = function (option, $event, emitChange) {
            if (emitChange === void 0) { emitChange = true; }
            _this._operatingMultipleOption = option;
            _this._selectedOptions.delete(option);
            if (emitChange) {
                _this.emitMultipleOptions();
            }
            // 对Tag进行特殊处理
            if (_this._isTags && (_this._options.indexOf(option) !== -1) && (_this._tagsOptions.indexOf(option) !== -1)) {
                _this.removeOption(option);
                _this._tagsOptions.splice(_this._tagsOptions.indexOf(option), 1);
            }
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
        };
        this._el = this._elementRef.nativeElement;
    }
    pgSelectFXComponent_1 = pgSelectFXComponent;
    Object.defineProperty(pgSelectFXComponent.prototype, "AllowClear", {
        get: function () {
            return this._allowClear;
        },
        set: function (value) {
            this._allowClear = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "KeepUnListOptions", {
        get: function () {
            return this._keepUnListOptions;
        },
        set: function (value) {
            this._keepUnListOptions = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Mode", {
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Multiple", {
        get: function () {
            return this._isMultiple;
        },
        set: function (value) {
            this._isMultiple = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "PlaceHolder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "NotFoundContent", {
        get: function () {
            return this._notFoundContent;
        },
        set: function (value) {
            this._notFoundContent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = { large: 'lg', small: 'sm' }[value];
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Tags", {
        get: function () {
            return this._isTags;
        },
        set: function (value) {
            var isTags = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            this._isTags = isTags;
            this.Multiple = isTags;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            this.closeDropDown();
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Open", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            var _this = this;
            var isOpen = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            if (this._isOpen === isOpen) {
                setTimeout(function () {
                    _this._backDropStyles = {
                        "transform": 'scale3d(1,1,1)'
                    };
                });
                return;
            }
            if (isOpen) {
                this.scrollToActive();
                this._setTriggerWidth();
                var contentHeight = this.csOptions.nativeElement.offsetHeight;
                var originalHeight = this.placeHolder.nativeElement.offsetHeight;
                var contentWidth = this.csOptions.nativeElement.offsetWidth;
                var originalWidth = this.placeHolder.nativeElement.offsetWidth;
                var scaleV = contentHeight / originalHeight;
                var scaleH = (contentWidth > originalWidth) ? contentWidth / originalWidth : 1.05;
                setTimeout(function () {
                    _this._openBackdrop = true;
                    _this._backDropStyles = {
                        "transform": 'scale3d(' + 1 + ', ' + scaleV + ', 1)'
                    };
                });
            }
            this._isOpen = isOpen;
            this.OpenChange.emit(this._isOpen);
            this.setClassMap();
            if (this._isOpen) {
                setTimeout(function () {
                    _this.checkDropDownScroll();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /** -option remove or tags remove */
    pgSelectFXComponent.prototype.removeOption = function (option) {
        this._options.splice(this._options.indexOf(option), 1);
        if (!this._isTags) {
            this.forceUpdateSelectedOption(this._value);
        }
    };
    /** dropdown position changed */
    pgSelectFXComponent.prototype.onPositionChange = function (position) {
        this._dropDownPosition = position.connectionPair.originY;
    };
    pgSelectFXComponent.prototype.compositionStart = function () {
        this._composing = true;
    };
    pgSelectFXComponent.prototype.compositionEnd = function () {
        this._composing = false;
    };
    /** clear single selected option */
    pgSelectFXComponent.prototype.clearSelect = function ($event) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._selectedOption = null;
        this.Value = null;
        this.onChange(null);
    };
    /** click dropdown option by user */
    pgSelectFXComponent.prototype.clickOption = function (option, $event) {
        if (!option) {
            return;
        }
        this.chooseOption(option, true, $event);
        this.closeDropDown();
    };
    /** choose option */
    pgSelectFXComponent.prototype.chooseOption = function (option, isUserClick, $event) {
        if (isUserClick === void 0) { isUserClick = false; }
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._activeFilterOption = option;
        if (option && !option.Disabled) {
            if (!this.Multiple) {
                this._selectedOption = option;
                this._value = option.Value;
                if (isUserClick) {
                    this.onChange(option.Value);
                }
            }
            else {
                if (isUserClick) {
                    this.isInSet(this._selectedOptions, option) ? this.unSelectMultipleOption(option) : this.selectMultipleOption(option);
                }
            }
        }
    };
    pgSelectFXComponent.prototype.updateWidth = function (element, text) {
        var _this = this;
        if (text) {
            /** wait for scroll width change */
            setTimeout(function (_) {
                _this._renderer.setStyle(element, 'width', element.scrollWidth + "px");
            });
        }
        else {
            this._renderer.removeStyle(element, 'width');
        }
    };
    /** determine if option in set */
    pgSelectFXComponent.prototype.isInSet = function (set, option) {
        return (Array.from(set).find(function (data) { return data.Value === option.Value; }));
    };
    /** select multiple option */
    pgSelectFXComponent.prototype.selectMultipleOption = function (option, $event) {
        /** if tags do push to tag option */
        if (this._isTags && (this._options.indexOf(option) === -1) && (this._tagsOptions.indexOf(option) === -1)) {
            this.addOption(option);
            this._tagsOptions.push(option);
        }
        this._operatingMultipleOption = option;
        if (this._selectedOptions.size < this.MaxMultiple) {
            this._selectedOptions.add(option);
        }
        this.emitMultipleOptions();
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    /** emit multiple options */
    pgSelectFXComponent.prototype.emitMultipleOptions = function () {
        if (this._isMultiInit) {
            return;
        }
        var arrayOptions = Array.from(this._selectedOptions);
        this._value = arrayOptions.map(function (item) { return item.Value; });
        this.onChange(this._value);
    };
    /** update selected option when add remove option etc */
    pgSelectFXComponent.prototype.updateSelectedOption = function (currentModelValue, triggerByNgModel) {
        var _this = this;
        if (triggerByNgModel === void 0) { triggerByNgModel = false; }
        if (currentModelValue == null) {
            return;
        }
        if (this.Multiple) {
            var selectedOptions = this._options.filter(function (item) {
                return (item != null) && (currentModelValue.indexOf(item.Value) !== -1);
            });
            if ((this.KeepUnListOptions || this.Tags) && (!triggerByNgModel)) {
                var _selectedOptions_1 = Array.from(this._selectedOptions);
                selectedOptions.forEach(function (option) {
                    var _exist = _selectedOptions_1.some(function (item) { return item._value === option._value; });
                    if (!_exist) {
                        _this._selectedOptions.add(option);
                    }
                });
            }
            else {
                this._selectedOptions = new Set();
                selectedOptions.forEach(function (option) {
                    _this._selectedOptions.add(option);
                });
            }
        }
        else {
            var selectedOption = this._options.filter(function (item) {
                return (item != null) && (item.Value === currentModelValue);
            });
            this.chooseOption(selectedOption[0]);
        }
    };
    pgSelectFXComponent.prototype.forceUpdateSelectedOption = function (value) {
        var _this = this;
        /** trigger dirty check */
        setTimeout(function (_) {
            _this.updateSelectedOption(value);
        });
    };
    Object.defineProperty(pgSelectFXComponent.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._updateValue(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSelectFXComponent.prototype.clearAllSelectedOption = function (emitChange) {
        var _this = this;
        if (emitChange === void 0) { emitChange = true; }
        this._selectedOptions.forEach(function (item) {
            _this.unSelectMultipleOption(item, null, emitChange);
        });
    };
    pgSelectFXComponent.prototype.handleKeyEnterEvent = function (event) {
        /** when composing end */
        if (!this._composing && this._isOpen) {
            event.preventDefault();
            event.stopPropagation();
            this.updateFilterOption(false);
            this.clickOption(this._activeFilterOption);
        }
    };
    pgSelectFXComponent.prototype.handleKeyBackspaceEvent = function (event) {
        if ((!this._searchText) && (!this._composing) && (this._isMultiple)) {
            event.preventDefault();
            var lastOption = Array.from(this._selectedOptions).pop();
            this.unSelectMultipleOption(lastOption);
        }
    };
    pgSelectFXComponent.prototype.handleKeyDownEvent = function ($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.nextOption(this._activeFilterOption, this._filterOptions.filter(function (w) { return !w.Disabled; }));
            this.scrollToActive();
        }
    };
    pgSelectFXComponent.prototype.handleKeyUpEvent = function ($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.preOption(this._activeFilterOption, this._filterOptions.filter(function (w) { return !w.Disabled; }));
            this.scrollToActive();
        }
    };
    pgSelectFXComponent.prototype.preOption = function (option, options) {
        return options[options.indexOf(option) - 1] || options[options.length - 1];
    };
    pgSelectFXComponent.prototype.nextOption = function (option, options) {
        return options[options.indexOf(option) + 1] || options[0];
    };
    pgSelectFXComponent.prototype.clearSearchText = function () {
        this._searchText = '';
        this.updateFilterOption();
    };
    pgSelectFXComponent.prototype.updateFilterOption = function (updateActiveFilter) {
        if (updateActiveFilter === void 0) { updateActiveFilter = true; }
        if (this.Filter) {
            this._filterOptions = new _option_pipe__WEBPACK_IMPORTED_MODULE_7__["OptionPipe"]().transform(this._options, {
                'searchText': this._searchText,
                'tags': this._isTags,
                'notFoundContent': this._isTags ? this._searchText : this._notFoundContent,
                'disabled': !this._isTags,
                'value': this._isTags ? this._searchText : 'disabled'
            });
        }
        else {
            this._filterOptions = this._options;
        }
        /** TODO: cause pre & next key selection not work */
        if (updateActiveFilter && !this._selectedOption) {
            this._activeFilterOption = this._filterOptions[0];
        }
    };
    pgSelectFXComponent.prototype.onSearchChange = function (searchValue) {
        this.SearchChange.emit(searchValue);
    };
    pgSelectFXComponent.prototype.onClick = function (e) {
        e.preventDefault();
        if (!this._disabled) {
            this.Open = !this.Open;
        }
    };
    pgSelectFXComponent.prototype.onKeyDown = function (e) {
        var keyCode = e.keyCode;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && this.Open) {
            this.Open = false;
            return;
        }
        if ((keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DOWN_ARROW"] && keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]) || this.Open) {
            return;
        }
        e.preventDefault();
        if (!this._disabled) {
            this.Open = true;
        }
    };
    pgSelectFXComponent.prototype.closeDropDown = function () {
        var _this = this;
        if (!this.Open) {
            return;
        }
        this._openBackdrop = false;
        this._backDropStyles = {
            "transform": 'scale3d(1,1,1)'
        };
        setTimeout(function () {
            _this.onTouched();
            _this.clearSearchText();
            _this.Open = false;
        }, 300);
    };
    pgSelectFXComponent.prototype.setClassMap = function () {
        var _this = this;
        this._classList.forEach(function (_className) {
            _this._renderer.removeClass(_this._el, _className);
        });
        this._classList = [
            this._prefixCls,
            (this._mode === 'combobox') && this._prefixCls + "-combobox",
            (!this._disabled) && this._prefixCls + "-enabled",
            (this._disabled) && this._prefixCls + "-disabled",
            this._isOpen && this._prefixCls + "-open",
            this._size && this._prefixCls + "-" + this._size
        ].filter(function (item) {
            return !!item;
        });
        this._classList.forEach(function (_className) {
            _this._renderer.addClass(_this._el, _className);
        });
        this._selectionClassMap = (_a = {},
            _a[this._selectionPrefixCls] = true,
            _a[this._selectionPrefixCls + "--single"] = !this.Multiple,
            _a[this._selectionPrefixCls + "--multiple"] = this.Multiple,
            _a);
        var _a;
    };
    pgSelectFXComponent.prototype.setDropDownClassMap = function () {
        // setTimeout(()=>{ 
        //   this._dropDownClassMap = {
        //     [' cs-active']                               : true,
        //   }
        // },300);
    };
    pgSelectFXComponent.prototype.scrollToActive = function () {
        var _this = this;
        /** wait for dropdown display */
        setTimeout(function (_) {
            if (_this._activeFilterOption && _this._activeFilterOption.Value) {
                var index = _this._filterOptions.findIndex(function (option) { return option.Value === _this._activeFilterOption.Value; });
                try {
                    var scrollPane = _this.dropdownUl.nativeElement.children[index];
                    // TODO: scrollIntoViewIfNeeded is not a standard API, why doing so?
                    /* tslint:disable-next-line:no-any */
                    scrollPane.scrollIntoViewIfNeeded(false);
                }
                catch (e) {
                }
            }
        });
    };
    pgSelectFXComponent.prototype.flushComponentState = function () {
        this.updateFilterOption();
        if (!this.Multiple) {
            this.updateSelectedOption(this._value);
        }
        else {
            if (this._value) {
                this.updateSelectedOption(this._value);
            }
        }
    };
    pgSelectFXComponent.prototype._setTriggerWidth = function () {
        var _this = this;
        this._triggerWidth = this._getTriggerRect().width;
        var rect = this._getTriggerRect();
        /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
        setTimeout(function () {
            if (_this._cdkOverlay && _this._cdkOverlay.overlayRef) {
                _this._cdkOverlay.overlayRef.updateSize({
                    width: _this._triggerWidth,
                    height: rect.height,
                });
            }
        });
    };
    pgSelectFXComponent.prototype._getTriggerRect = function () {
        return this.trigger.nativeElement.getBoundingClientRect();
    };
    pgSelectFXComponent.prototype.writeValue = function (value) {
        this._updateValue(value, false);
    };
    pgSelectFXComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgSelectFXComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgSelectFXComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
    };
    pgSelectFXComponent.prototype.dropDownScroll = function (ul) {
        if (ul && (ul.scrollHeight - ul.scrollTop === ul.clientHeight)) {
            this.ScrollToBottom.emit(true);
        }
    };
    pgSelectFXComponent.prototype.checkDropDownScroll = function () {
        if (this.dropdownUl && (this.dropdownUl.nativeElement.scrollHeight === this.dropdownUl.nativeElement.clientHeight)) {
            this.ScrollToBottom.emit(true);
        }
    };
    pgSelectFXComponent.prototype.ngAfterContentInit = function () {
        if (this._value != null) {
            this.flushComponentState();
        }
    };
    pgSelectFXComponent.prototype.ngOnInit = function () {
        this.updateFilterOption();
        this.setClassMap();
        this.setDropDownClassMap();
    };
    pgSelectFXComponent.prototype.ngAfterContentChecked = function () {
        if (this._cacheOptions !== this._options) {
            /** update filter option after every content check cycle */
            this.updateFilterOption();
            this._cacheOptions = this._options;
        }
        else {
            this.updateFilterOption(false);
        }
    };
    pgSelectFXComponent.prototype._updateValue = function (value, emitChange) {
        if (emitChange === void 0) { emitChange = true; }
        if (this._value === value) {
            return;
        }
        if ((value == null) && this.Multiple) {
            this._value = [];
        }
        else {
            this._value = value;
        }
        if (!this.Multiple) {
            if (value == null) {
                this._selectedOption = null;
            }
            else {
                this.updateSelectedOption(value);
            }
        }
        else {
            if (value) {
                if (value.length === 0) {
                    this.clearAllSelectedOption(emitChange);
                }
                else {
                    this.updateSelectedOption(value, true);
                }
            }
            else if (value == null) {
                this.clearAllSelectedOption(emitChange);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('searchInput'),
        __metadata("design:type", Object)
    ], pgSelectFXComponent.prototype, "searchInputElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('trigger'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectFXComponent.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dropdownUl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectFXComponent.prototype, "dropdownUl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('csOptions'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectFXComponent.prototype, "csOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('placeHolder'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectFXComponent.prototype, "placeHolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectFXComponent.prototype, "SearchChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectFXComponent.prototype, "OpenChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectFXComponent.prototype, "ScrollToBottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], pgSelectFXComponent.prototype, "Filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], pgSelectFXComponent.prototype, "MaxMultiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"]),
        __metadata("design:type", _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"])
    ], pgSelectFXComponent.prototype, "_cdkOverlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "AllowClear", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "KeepUnListOptions", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "Mode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Multiple", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "PlaceHolder", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "NotFoundContent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "Size", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Tags", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Open", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], pgSelectFXComponent.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], pgSelectFXComponent.prototype, "onKeyDown", null);
    pgSelectFXComponent = pgSelectFXComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'pg-select-fx',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return pgSelectFXComponent_1; }),
                    multi: true
                }
            ],
            animations: [
                _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_4__["dropDownAnimation"],
                _animations_tag_animations__WEBPACK_IMPORTED_MODULE_5__["tagAnimation"]
            ],
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/@pages/components/cs-select/select.component.html"),
            styles: [__webpack_require__(/*! ./style/index.scss */ "./src/app/@pages/components/cs-select/style/index.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]])
    ], pgSelectFXComponent);
    return pgSelectFXComponent;
    var pgSelectFXComponent_1;
}());



/***/ }),

/***/ "./src/app/@pages/components/cs-select/select.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/select.module.ts ***!
  \**************************************************************/
/*! exports provided: pgSelectfx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSelectfx", function() { return pgSelectfx; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./option.component */ "./src/app/@pages/components/cs-select/option.component.ts");
/* harmony import */ var _option_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option.pipe */ "./src/app/@pages/components/cs-select/option.pipe.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select.component */ "./src/app/@pages/components/cs-select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var pgSelectfx = /** @class */ (function () {
    function pgSelectfx() {
    }
    pgSelectfx = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]],
            declarations: [_option_pipe__WEBPACK_IMPORTED_MODULE_5__["OptionPipe"], _option_component__WEBPACK_IMPORTED_MODULE_4__["pgOptionComponent"], _select_component__WEBPACK_IMPORTED_MODULE_6__["pgSelectFXComponent"]],
            exports: [_option_pipe__WEBPACK_IMPORTED_MODULE_5__["OptionPipe"], _option_component__WEBPACK_IMPORTED_MODULE_4__["pgOptionComponent"], _select_component__WEBPACK_IMPORTED_MODULE_6__["pgSelectFXComponent"]]
        })
    ], pgSelectfx);
    return pgSelectfx;
}());



/***/ }),

/***/ "./src/app/@pages/components/cs-select/style/index.scss":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/style/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pg-select {\n  outline: 0; }\n  .pg-select > *:focus {\n    outline: 0; }\n  .form-group-default-selectFx .cs-backdrop {\n  border: 0; }\n  .form-control.cs-select:not(.cs-active) {\n  margin-top: 0; }\n"

/***/ })

}]);
//# sourceMappingURL=forms-forms-module~ui-ui-module.js.map