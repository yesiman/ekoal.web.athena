(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./node_modules/@ngui/map/dist/@ngui/map.es5.js":
/*!******************************************************!*\
  !*** ./node_modules/@ngui/map/dist/@ngui/map.es5.js ***!
  \******************************************************/
/*! exports provided: BicyclingLayer, NavigatorGeolocation, OptionBuilder, NG_MAP_CONFIG_TOKEN, NgMapApiLoader, NgMapAsyncApiLoader, NgMapAsyncCallbackApiLoader, NguiMapComponent, InfoWindow, CustomMarker, Circle, DataLayer, DirectionsRenderer, DrawingManager, GeoCoder, GroundOverlay, HeatmapLayer, KmlLayer, Marker, NguiMap, PlacesAutoComplete, Polygon, Polyline, StreetViewPanorama, TrafficLayer, TransitLayer, NguiMapModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BicyclingLayer", function() { return BicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorGeolocation", function() { return NavigatorGeolocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionBuilder", function() { return OptionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_MAP_CONFIG_TOKEN", function() { return NG_MAP_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapApiLoader", function() { return NgMapApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncApiLoader", function() { return NgMapAsyncApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncCallbackApiLoader", function() { return NgMapAsyncCallbackApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMapComponent", function() { return NguiMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindow", function() { return InfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMarker", function() { return CustomMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayer", function() { return DataLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsRenderer", function() { return DirectionsRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingManager", function() { return DrawingManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoCoder", function() { return GeoCoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return HeatmapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayer", function() { return KmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMap", function() { return NguiMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesAutoComplete", function() { return PlacesAutoComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLayer", function() { return TrafficLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLayer", function() { return TransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMapModule", function() { return NguiMapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BaseMapDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/ReplaySubject */ "./node_modules/rxjs-compat/_esm5/ReplaySubject.js");
/* harmony import */ var rxjs_operator_first__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operator/first */ "./node_modules/rxjs-compat/_esm5/operator/first.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/operator/debounceTime.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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







/**
 * return json string from json-like string
 * @param {?} str
 * @return {?}
 */
function jsonize(str) {
    try {
        return str;
    }
    catch (e) {
        return str
            .replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
        function (_, $1) {
            return '"' + $1 + '":';
        })
            .replace(/'([^']+)'/g, // replacing single quote to double quote
        function (_, $1) {
            return '"' + $1 + '"';
        });
    }
}
/**
 * Returns string to an object by using JSON.parse()
 * @param {?} input
 * @return {?}
 */
function getJSON(input) {
    if (typeof input === 'string') {
        var /** @type {?} */ re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng
        if (input.match(re)) {
            input = '[' + input + ']';
        }
        return JSON.parse(jsonize(input));
    }
    else {
        return input;
    }
}
/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 * @param {?} str
 * @return {?}
 */
function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}
/**
 * @return {?}
 */
function isMapsApiLoaded() {
    return typeof google === 'object' && typeof google.maps === 'object';
}
/**
 * @param {?} component
 * @param {?} libName
 * @return {?}
 */
function missingLibraryError(component, libName) {
    return Error(component + ": library '" + libName + "' is missing, please ensure to include it in a 'libraries' parameter.\n    Example:\n      NguiMapModule.forRoot({\n        apiUrl: 'https://maps.googleapis.com/maps/api/js?libraries=" + libName + "'\n      })\n  ");
}
/**
 * @abstract
 */
var BaseMapDirective = /** @class */ (function () {
    /**
     * @param {?} nguiMapComponent
     * @param {?} mapObjectName
     * @param {?} inputs
     * @param {?} outputs
     */
    function BaseMapDirective(nguiMapComponent, mapObjectName, inputs, outputs) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.mapObjectName = mapObjectName;
        this.inputs = inputs;
        this.outputs = outputs;
        // this should be redefined on each childr directive
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subscriptions = [];
        this.nguiMap = this.nguiMapComponent['nguiMap'];
        this.optionBuilder = this.nguiMapComponent['optionBuilder'];
        // all outputs must be initialized
        this.outputs.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); });
        this.mapObjectName = mapObjectName;
    }
    /**
     * @return {?}
     */
    BaseMapDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    /**
     * @return {?}
     */
    BaseMapDirective.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);
        // noinspection TypeScriptUnresolvedFunction
        if (this.libraryName) {
            if (!google.maps[this.libraryName]) {
                throw missingLibraryError(this.mapObjectName, this.libraryName);
            }
            this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
        }
        else {
            this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
        }
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseMapDirective.prototype.ngOnChanges = function (changes) {
        this.nguiMap.updateGoogleObject(this.mapObject, changes);
    };
    /**
     * @return {?}
     */
    BaseMapDirective.prototype.ngOnDestroy = function () {
        this._subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
        this.nguiMapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
    return BaseMapDirective;
}());
BaseMapDirective.propDecorators = {
    'initialized$': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * change any object to google object options
 * e.g. [1,2] -> new google.maps.LatLng(1,2);
 */
var OptionBuilder = /** @class */ (function () {
    function OptionBuilder() {
    }
    /**
     * @param {?} definedInputs
     * @param {?} userInputs
     * @return {?}
     */
    OptionBuilder.prototype.googlizeAllInputs = function (definedInputs, userInputs) {
        var _this = this;
        var /** @type {?} */ options = {};
        // if options given from user, only take options and ignore other inputs
        if (userInputs.options) {
            options = userInputs.options;
            if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
                console.error('when "options" are used, other options are ignored');
            }
        }
        else {
            definedInputs.forEach(function (input) {
                if (userInputs[input] !== undefined) {
                    options[input] = _this.googlize(userInputs[input], { key: input });
                }
            });
        }
        return options;
    };
    /**
     * @param {?} inputs
     * @param {?=} options
     * @return {?}
     */
    OptionBuilder.prototype.googlizeMultiple = function (inputs, options) {
        options = options || {};
        for (var /** @type {?} */ key in inputs) {
            var /** @type {?} */ val = inputs[key];
            // (non-strings are fully converted)
            if (typeof val !== 'string') {
                options[key] = val;
            } // sometimes '0' needed to stay as it is
            else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
                options[key] = this.googlize(val, { key: key });
            }
        } // for(var key in attrs)
        return options;
    };
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    OptionBuilder.prototype.googlize = function (input, options) {
        options = options || {};
        var /** @type {?} */ output = input;
        if (typeof input === 'string') {
            if (input === 'false') {
                output = false;
            }
            else if (input === '0') {
                output = 0;
            }
            else {
                output =
                    // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
                    this.getJSONParsed(input, options)
                        /* Foo.Bar(...) -> new google.maps.Foo.Bar(...) */
                        || this.getAnyMapObject(input)
                        /*  MapTypeID.HYBRID -> new google.maps.MapTypeID.HYBRID */
                        || this.getAnyMapConstant(input, options)
                        /*  2016-06-20 -> new Date('2016-06-20') */
                        || this.getDateObject(input)
                        || input;
            }
        }
        if (options['key']) {
            var /** @type {?} */ key = (options['key']);
            if (output instanceof Array) {
                if (key === 'bounds') {
                    output = new google.maps.LatLngBounds(output[0], output[1]);
                }
                else if (key === 'icons') {
                    output = this.getMapIcons(output);
                }
                else if (key === 'position' || key.match(/^geoFallback/)) {
                    output = this.getLatLng(output);
                }
            }
            else if (output instanceof Object) {
                if (key === 'icon') {
                    output = this.getMarkerIcon(output);
                }
                else if (key.match(/ControlOptions$/)) {
                    output = this.getMapControlOption(output);
                }
            }
        }
        // delete keys only for processing, not used by google
        delete output['doNotConverStringToNumber'];
        delete output['key'];
        return output;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    OptionBuilder.prototype.getLatLng = function (input) {
        var /** @type {?} */ output;
        if (input[0].constructor === Array) {
            output = ((input)).map(function (el) { return new google.maps.LatLng(el[0], el[1]); });
        }
        else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
            output = new google.maps.LatLng(input[0], input[1]);
        }
        return output;
    };
    /**
     * @param {?} input
     * @param {?} options
     * @return {?}
     */
    OptionBuilder.prototype.getJSONParsed = function (input, options) {
        var /** @type {?} */ output;
        try {
            output = getJSON(input);
            if (output instanceof Array) {
                // [{a:1}] : not lat/lng ones
                if (output[0].constructor !== Object) {
                    output = this.getLatLng(output);
                }
            }
            else if (output === Object(output)) {
                // check for nested hashes and convert to Google API options
                var /** @type {?} */ newOptions = options;
                newOptions['doNotConverStringToNumber'] = true;
                output = this.googlizeMultiple(output, newOptions);
            }
        }
        catch (e) {
        }
        return output;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    OptionBuilder.prototype.getAnyMapObject = function (input) {
        var /** @type {?} */ output;
        if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
            try {
                output = Function("return new google.maps." + input + ";")();
            }
            catch (e) { }
        }
        return output;
    };
    /**
     * @param {?} input
     * @param {?} options
     * @return {?}
     */
    OptionBuilder.prototype.getAnyMapConstant = function (input, options) {
        var /** @type {?} */ output;
        if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) {
            try {
                var /** @type {?} */ matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
                output = google.maps[matches[1]][matches[2]];
            }
            catch (e) { }
        }
        else if (input.match(/^[A-Z]+$/)) {
            try {
                var /** @type {?} */ capitalizedKey = ((options['key'])).charAt(0).toUpperCase() +
                    ((options['key'])).slice(1);
                output = google.maps[capitalizedKey][input];
            }
            catch (e) { }
        }
        return output;
    };
    /**
     * streetviewControl, panControl, etc, not a general control
     * @param {?} controlOptions
     * @return {?}
     */
    OptionBuilder.prototype.getMapControlOption = function (controlOptions) {
        var /** @type {?} */ newControlOptions = controlOptions;
        for (var /** @type {?} */ key in newControlOptions) {
            if (newControlOptions[key]) {
                var /** @type {?} */ value = newControlOptions[key];
                if (typeof value === 'string') {
                    value = ((value)).toUpperCase();
                }
                else if (key === 'mapTypeIds') {
                    value = ((value)).map(function (str) {
                        if (str.match(/^[A-Z]+$/)) {
                            return google.maps.MapTypeId[str.toUpperCase()];
                        }
                        else {
                            return str;
                        }
                    });
                }
                if (key === 'style') {
                    var /** @type {?} */ objName = key.replace(/Options$/, '') + 'Style';
                    newControlOptions[key] = google.maps[objName][(value)];
                }
                else if (key === 'position') {
                    newControlOptions[key] = google.maps.ControlPosition[(value)];
                }
                else {
                    newControlOptions[key] = value;
                }
            }
        }
        return newControlOptions;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    OptionBuilder.prototype.getDateObject = function (input) {
        var /** @type {?} */ output;
        if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
            try {
                output = new Date(input);
            }
            catch (e) { }
        }
        return output;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    OptionBuilder.prototype.getMapIcons = function (input) {
        return input.map(function (el) {
            if (el.icon.path.match(/^[A-Z_]+$/)) {
                el.icon.path = google.maps.SymbolPath[el.icon.path];
            }
            return el;
        });
    };
    /**
     * @param {?} input
     * @return {?}
     */
    OptionBuilder.prototype.getMarkerIcon = function (input) {
        var /** @type {?} */ output = input;
        if (('' + output.path).match(/^[A-Z_]+$/)) {
            output.path = google.maps.SymbolPath[output.path];
        }
        for (var /** @type {?} */ key in output) {
            var /** @type {?} */ arr = output[key];
            if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
                output[key] = new google.maps.Point(arr[0], arr[1]);
            }
            else if (key === 'size' || key === 'scaledSize') {
                output[key] = new google.maps.Size(arr[0], arr[1]);
            }
        }
        return output;
    };
    /**
     * @param {?} definedInputs
     * @param {?} userInputs
     * @return {?}
     */
    OptionBuilder.prototype.onlyOptionsGiven = function (definedInputs, userInputs) {
        for (var /** @type {?} */ i = 0; i < definedInputs.length; i++) {
            var /** @type {?} */ input = definedInputs[i];
            if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
                return false;
            }
        }
        return true;
    };
    return OptionBuilder;
}());
OptionBuilder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
OptionBuilder.ctorParameters = function () { return []; };
/**
 *  service for navigator.geolocation methods
 */
var NavigatorGeolocation = /** @class */ (function () {
    function NavigatorGeolocation() {
    }
    /**
     * @param {?=} geoLocationOptions
     * @return {?}
     */
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (responseObserver) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    responseObserver.next(position);
                    responseObserver.complete();
                }, function (evt) { return responseObserver.error(evt); }, geoLocationOptions);
            }
            else {
                responseObserver.error('Browser Geolocation service failed.');
            }
        });
    };
    return NavigatorGeolocation;
}());
NavigatorGeolocation.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
NavigatorGeolocation.ctorParameters = function () { return []; };
var NG_MAP_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NG_MAP_CONFIG_TOKEN');
/**
 * @abstract
 */
var NgMapApiLoader = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function NgMapApiLoader(config) {
        this.config = config;
        this.api$ = rxjs_operator_first__WEBPACK_IMPORTED_MODULE_3__["first"].call(new rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1));
        this.config = this.config || { apiUrl: 'https://maps.google.com/maps/api/js' };
    }
    /**
     * @abstract
     * @return {?}
     */
    NgMapApiLoader.prototype.load = function () { };
    /**
     * @return {?}
     */
    NgMapApiLoader.prototype.ngOnDestroy = function () {
        this.api$.complete();
    };
    return NgMapApiLoader;
}());
var NgMapAsyncCallbackApiLoader = /** @class */ (function (_super) {
    __extends(NgMapAsyncCallbackApiLoader, _super);
    /**
     * @param {?} zone
     * @param {?} config
     */
    function NgMapAsyncCallbackApiLoader(zone, config) {
        var _this = _super.call(this, config) || this;
        _this.zone = zone;
        return _this;
    }
    /**
     * @return {?}
     */
    NgMapAsyncCallbackApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (isMapsApiLoaded()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            ((window))['nguiMapRef'] = ((window))['nguiMapRef'] || [];
            ((window))['nguiMapRef'].push({ zone: this.zone, componentFn: function () { return _this.api$.next(google.maps); } });
            this.addGoogleMapsApi();
        }
    };
    /**
     * @return {?}
     */
    NgMapAsyncCallbackApiLoader.prototype.addGoogleMapsApi = function () {
        ((window))['initNguiMap'] = ((window))['initNguiMap'] || function () {
            ((window))['nguiMapRef'].forEach(function (nguiMapRef) {
                nguiMapRef.zone.run(function () { nguiMapRef.componentFn(); });
            });
            ((window))['nguiMapRef'].splice(0, ((window))['nguiMapRef'].length);
        };
        var /** @type {?} */ script = document.createElement('script');
        script.id = 'ngui-map-api';
        // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";
        var /** @type {?} */ apiUrl = this.config.apiUrl;
        apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
        script.src = apiUrl + 'callback=initNguiMap';
        document.querySelector('body').appendChild(script);
    };
    return NgMapAsyncCallbackApiLoader;
}(NgMapApiLoader));
NgMapAsyncCallbackApiLoader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
NgMapAsyncCallbackApiLoader.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MAP_CONFIG_TOKEN,] },] },
]; };
var NgMapAsyncApiLoader = /** @class */ (function (_super) {
    __extends(NgMapAsyncApiLoader, _super);
    /**
     * @param {?} config
     */
    function NgMapAsyncApiLoader(config) {
        return _super.call(this, config) || this;
    }
    /**
     * @return {?}
     */
    NgMapAsyncApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (isMapsApiLoaded()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            var /** @type {?} */ script = document.createElement('script');
            script.id = 'ngui-map-api';
            script.async = true;
            script.onload = function () { return _this.api$.next(google.maps); };
            script.src = this.config.apiUrl;
            document.querySelector('body').appendChild(script);
        }
    };
    return NgMapAsyncApiLoader;
}(NgMapApiLoader));
NgMapAsyncApiLoader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
NgMapAsyncApiLoader.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MAP_CONFIG_TOKEN,] },] },
]; };
/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
var GeoCoder = /** @class */ (function () {
    /**
     * @param {?} apiLoader
     */
    function GeoCoder(apiLoader) {
        this.apiLoader = apiLoader;
        this.apiLoaderSubs = [];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    GeoCoder.prototype.geocode = function (options) {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (responseObserver) {
            _this.apiLoaderSubs.push(_this.apiLoader.api$
                .subscribe(function () { return _this.requestGeocode(options, responseObserver); }));
        });
    };
    /**
     * @return {?}
     */
    GeoCoder.prototype.ngOnDestroy = function () {
        this.apiLoaderSubs.map(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * @param {?} options
     * @param {?} observer
     * @return {?}
     */
    GeoCoder.prototype.requestGeocode = function (options, observer) {
        var /** @type {?} */ geocoder = new google.maps.Geocoder();
        geocoder.geocode(options, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                observer.next(results);
                observer.complete();
            }
            else {
                observer.error(results);
            }
        });
    };
    return GeoCoder;
}());
GeoCoder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
GeoCoder.ctorParameters = function () { return [
    { type: NgMapApiLoader, },
]; };
/**
 * collection of map instance-related properties and methods
 */
var NguiMap = /** @class */ (function () {
    /**
     * @param {?} geoCoder
     * @param {?} optionBuilder
     * @param {?} zone
     */
    function NguiMap(geoCoder, optionBuilder, zone) {
        var _this = this;
        this.geoCoder = geoCoder;
        this.optionBuilder = optionBuilder;
        this.zone = zone;
        this.updateGoogleObject = function (object, changes) {
            var /** @type {?} */ val, /** @type {?} */ currentValue, /** @type {?} */ setMethodName;
            if (object) {
                for (var /** @type {?} */ key in changes) {
                    setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
                    currentValue = changes[key].currentValue;
                    if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
                        // To preserve setMethod name in Observable callback, wrap it as a function, then execute
                        (function (setMethodName) {
                            _this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
                                if (typeof object[setMethodName] === 'function') {
                                    object[setMethodName](results[0].geometry.location);
                                }
                                else {
                                    console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                        'Please check Google Maps API documentation, and use "setOptions" instead.');
                                }
                            });
                        })(setMethodName);
                    }
                    else {
                        val = _this.optionBuilder.googlize(currentValue);
                        if (typeof object[setMethodName] === 'function') {
                            object[setMethodName](val);
                        }
                        else {
                            console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                'Please check Google Maps API documentation, and use "setOptions" instead.');
                        }
                    }
                }
            }
        };
    }
    /**
     * @param {?} definedEvents
     * @param {?} thisObj
     * @param {?} prefix
     * @return {?}
     */
    NguiMap.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var /** @type {?} */ eventName = _this.getEventName(definedEvent), /** @type {?} */ zone = _this.zone;
            zone.runOutsideAngular(function () {
                thisObj[prefix].addListener(eventName, function (event) {
                    var /** @type {?} */ param = event ? event : {};
                    param.target = this;
                    zone.run(function () { return thisObj[definedEvent].emit(param); });
                });
            });
        });
    };
    /**
     * @param {?} definedEvents
     * @param {?} thisObj
     * @param {?} prefix
     * @return {?}
     */
    NguiMap.prototype.clearObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var /** @type {?} */ eventName = _this.getEventName(definedEvent);
            _this.zone.runOutsideAngular(function () {
                if (thisObj[prefix]) {
                    google.maps.event.clearListeners(thisObj[prefix], eventName);
                }
            });
        });
        if (thisObj[prefix]) {
            if (thisObj[prefix].setMap) {
                thisObj[prefix].setMap(null);
            }
            delete thisObj[prefix].nguiMapComponent;
            delete thisObj[prefix];
        }
    };
    /**
     * @param {?} definedEvent
     * @return {?}
     */
    NguiMap.prototype.getEventName = function (definedEvent) {
        return definedEvent
            .replace(/([A-Z])/g, function ($1) { return "_" + $1.toLowerCase(); }) // positionChanged -> position_changed
            .replace(/^map_/, ''); // map_click -> click  to avoid DOM conflicts
    };
    return NguiMap;
}());
NguiMap.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
NguiMap.ctorParameters = function () { return [
    { type: GeoCoder, },
    { type: OptionBuilder, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
var INPUTS$1 = [
    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'zoomControlOptions', 'mapTypeControlOptions',
    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions', 'fullscreenControl', 'fullscreenControlOptions',
    'options',
    // ngui-map-specific inputs
    'geoFallbackCenter'
];
var OUTPUTS$1 = [
    'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'heading_changed', 'idle',
    'typeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick',
    'tilesloaded', 'tile_changed', 'zoom_changed',
    // to avoid DOM event conflicts
    'mapClick', 'mapMouseover', 'mapMouseout', 'mapMousemove', 'mapDrag', 'mapDragend', 'mapDragstart'
];
var NguiMapComponent = /** @class */ (function () {
    /**
     * @param {?} optionBuilder
     * @param {?} elementRef
     * @param {?} geolocation
     * @param {?} geoCoder
     * @param {?} nguiMap
     * @param {?} apiLoader
     * @param {?} zone
     */
    function NguiMapComponent(optionBuilder, elementRef, geolocation, geoCoder, nguiMap, apiLoader, zone) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.nguiMap = nguiMap;
        this.apiLoader = apiLoader;
        this.zone = zone;
        this.mapReady$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mapOptions = {};
        this.inputChanges$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.infoWindows = {};
        this.mapIdledOnce = false;
        this.initializeMapAfterDisplayed = false;
        apiLoader.load();
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS$1.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); });
    }
    /**
     * @return {?}
     */
    NguiMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.apiLoaderSub = this.apiLoader.api$.subscribe(function () { return _this.initializeMap(); });
    };
    /**
     * @return {?}
     */
    NguiMapComponent.prototype.ngAfterViewChecked = function () {
        if (this.initializeMapAfterDisplayed && this.el && this.el.offsetWidth > 0) {
            this.initializeMap();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NguiMapComponent.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    /**
     * @return {?}
     */
    NguiMapComponent.prototype.initializeMap = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement.querySelector('.google-map');
        if (this.el && this.el.offsetWidth === 0) {
            this.initializeMapAfterDisplayed = true;
            return;
        }
        this.initializeMapAfterDisplayed = false;
        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS$1, this);
        this.mapOptions.zoom = this.mapOptions.zoom || 15;
        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
        this.zone.runOutsideAngular(function () {
            _this.map = new google.maps.Map(_this.el, _this.mapOptions);
            _this.map['mapObjectName'] = 'NguiMapComponent';
            if (!_this.mapOptions.center) {
                _this.setCenter();
            }
            // set google events listeners and emits to this outputs listeners
            _this.nguiMap.setObjectEvents(OUTPUTS$1, _this, 'map');
            _this.map.addListener('idle', function () {
                if (!_this.mapIdledOnce) {
                    _this.mapIdledOnce = true;
                    setTimeout(function () {
                        _this.mapReady$.emit(_this.map);
                    });
                }
            });
            // update map when input changes
            rxjs_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"].call(_this.inputChanges$, 1000)
                .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.map, changes); });
            if (typeof window !== 'undefined' && ((window))['nguiMapRef']) {
                // expose map object for test and debugging on (<any>window)
                ((window))['nguiMapRef'].map = _this.map;
            }
        });
    };
    /**
     * @return {?}
     */
    NguiMapComponent.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this.geolocation.getCurrentPosition().subscribe(function (position) {
                var /** @type {?} */ latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map: Error finding the current position');
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
        else if (typeof this['center'] === 'string') {
            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                _this.map.setCenter(results[0].geometry.location);
            }, function (error) {
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
    };
    /**
     * @param {?} id
     * @param {?} anchor
     * @return {?}
     */
    NguiMapComponent.prototype.openInfoWindow = function (id, anchor) {
        this.infoWindows[id].open(anchor);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NguiMapComponent.prototype.closeInfoWindow = function (id) {
        // if infoWindow for id exists, close the infoWindow
        if (this.infoWindows[id])
            this.infoWindows[id].close();
    };
    /**
     * @return {?}
     */
    NguiMapComponent.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.el && !this.initializeMapAfterDisplayed) {
            this.nguiMap.clearObjectEvents(OUTPUTS$1, this, 'map');
        }
        if (this.apiLoaderSub) {
            this.apiLoaderSub.unsubscribe();
        }
    };
    /**
     * @param {?} mapObjectName
     * @param {?} mapObject
     * @return {?}
     */
    NguiMapComponent.prototype.addToMapObjectGroup = function (mapObjectName, mapObject) {
        var /** @type {?} */ groupName = toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        this.map[groupName] = this.map[groupName] || [];
        this.map[groupName].push(mapObject);
    };
    /**
     * @param {?} mapObjectName
     * @param {?} mapObject
     * @return {?}
     */
    NguiMapComponent.prototype.removeFromMapObjectGroup = function (mapObjectName, mapObject) {
        var /** @type {?} */ groupName = toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        if (this.map && this.map[groupName]) {
            var /** @type {?} */ index = this.map[groupName].indexOf(mapObject);
            (index > -1) && this.map[groupName].splice(index, 1);
        }
    };
    return NguiMapComponent;
}());
NguiMapComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngui-map',
                providers: [NguiMap, OptionBuilder, GeoCoder, NavigatorGeolocation],
                styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
                inputs: INPUTS$1,
                outputs: OUTPUTS$1,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
NguiMapComponent.ctorParameters = function () { return [
    { type: OptionBuilder, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: NavigatorGeolocation, },
    { type: GeoCoder, },
    { type: NguiMap, },
    { type: NgMapApiLoader, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
NguiMapComponent.propDecorators = {
    'mapReady$': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
var INPUTS = [];
var OUTPUTS = [];
var BicyclingLayer = /** @class */ (function (_super) {
    __extends(BicyclingLayer, _super);
    /**
     * @param {?} nguiMapComp
     */
    function BicyclingLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'BicyclingLayer', INPUTS, OUTPUTS) || this;
    }
    return BicyclingLayer;
}(BaseMapDirective));
BicyclingLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > bicycling-layer',
                inputs: INPUTS,
                outputs: OUTPUTS,
            },] },
];
/**
 * @nocollapse
 */
BicyclingLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$2 = [
    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
];
var OUTPUTS$2 = [
    'closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'
];
var InfoWindow = /** @class */ (function () {
    /**
     * @param {?} elementRef
     * @param {?} nguiMap
     * @param {?} nguiMapComponent
     */
    function InfoWindow(elementRef, nguiMap, nguiMapComponent) {
        var _this = this;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.nguiMapComponent = nguiMapComponent;
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.objectOptions = {};
        this.inputChanges$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS$2.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); });
    }
    /**
     * @return {?}
     */
    InfoWindow.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    InfoWindow.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    /**
     * @return {?}
     */
    InfoWindow.prototype.initialize = function () {
        var _this = this;
        this.objectOptions = this.nguiMapComponent.optionBuilder.googlizeAllInputs(INPUTS$2, this);
        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
        this.infoWindow['mapObjectName'] = 'InfoWindow';
        // register infoWindow ids to NguiMap, so that it can be opened by id
        if (this.elementRef.nativeElement.id) {
            this.nguiMapComponent.infoWindows[this.elementRef.nativeElement.id] = this;
        }
        else {
            console.error('An InfoWindow must have an id. e.g. id="detail"');
        }
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS$2, this, 'infoWindow');
        // update object when input changes
        rxjs_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"].call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.infoWindow, changes); });
        this.nguiMapComponent.addToMapObjectGroup('InfoWindow', this.infoWindow);
        this.initialized$.emit(this.infoWindow);
    };
    /**
     * @param {?} anchor
     * @return {?}
     */
    InfoWindow.prototype.open = function (anchor) {
        // set content and open it
        this.infoWindow.setContent(this.template.element.nativeElement);
        this.infoWindow.open(this.nguiMapComponent.map, anchor);
    };
    /**
     * @return {?}
     */
    InfoWindow.prototype.close = function () {
        // check if infoWindow exists, and closes it
        if (this.infoWindow)
            this.infoWindow.close();
    };
    /**
     * @return {?}
     */
    InfoWindow.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.infoWindow) {
            this.nguiMap.clearObjectEvents(OUTPUTS$2, this, 'infoWindow');
            delete this.infoWindow;
        }
    };
    return InfoWindow;
}());
InfoWindow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngui-map > info-window',
                inputs: INPUTS$2,
                outputs: OUTPUTS$2,
                template: "<div #template><ng-content></ng-content></div>",
            },] },
];
/**
 * @nocollapse
 */
InfoWindow.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: NguiMap, },
    { type: NguiMapComponent, },
]; };
InfoWindow.propDecorators = {
    'initialized$': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'template': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['template', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] },],
};
var INPUTS$3 = [
    'position'
];
// to avoid DOM event conflicts map_*
var OUTPUTS$3 = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
    'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'
];
/**
 * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
 * Otherwise throws a google is unknown error.
 * @param {?} htmlEl
 * @param {?} position
 * @return {?}
 */
function getCustomMarkerOverlayView(htmlEl, position) {
    var CustomMarkerOverlayView = /** @class */ (function (_super) {
        __extends(CustomMarkerOverlayView, _super);
        /**
         * @param {?} htmlEl
         * @param {?} position
         */
        function CustomMarkerOverlayView(htmlEl, position) {
            var _this = _super.call(this) || this;
            _this.visible = true;
            _this.setPosition = function (position) {
                _this.htmlEl.style.visibility = 'hidden';
                if (position.constructor.name === 'Array') {
                    _this.position = new google.maps.LatLng(position[0], position[1]);
                }
                else if (typeof position === 'string') {
                    var /** @type {?} */ geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: position }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            _this.setPosition(results[0].geometry.location);
                        }
                        else {
                        }
                    });
                }
                else if (position && typeof position.lng === 'function') {
                    _this.position = position;
                }
                if (_this.getProjection() && typeof _this.position.lng === 'function') {
                    var /** @type {?} */ positionOnMap_1 = function () {
                        var /** @type {?} */ projection = _this.getProjection();
                        if (!projection) {
                            return;
                        }
                        var /** @type {?} */ posPixel = projection.fromLatLngToDivPixel(_this.position);
                        var /** @type {?} */ x = Math.round(posPixel.x - (_this.htmlEl.offsetWidth / 2));
                        var /** @type {?} */ y = Math.round(posPixel.y - _this.htmlEl.offsetHeight / 2);
                        _this.htmlEl.style.left = x + 'px';
                        _this.htmlEl.style.top = y + 'px';
                        _this.htmlEl.style.visibility = 'visible';
                    };
                    if (_this.htmlEl.offsetWidth && _this.htmlEl.offsetHeight) {
                        positionOnMap_1();
                    }
                    else {
                        setTimeout(function () { return positionOnMap_1(); });
                    }
                }
            };
            _this.htmlEl = htmlEl;
            _this.position = position;
            return _this;
        }
        /**
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.onAdd = function () {
            this.getPanes().overlayMouseTarget.appendChild(this.htmlEl);
            // required for correct display inside google maps container
            this.htmlEl.style.position = 'absolute';
        };
        /**
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.draw = function () {
            this.setPosition(this.position);
            this.setZIndex(this.zIndex);
            this.setVisible(this.visible);
        };
        /**
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.onRemove = function () {
            //
        };
        /**
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.getPosition = function () {
            return this.position;
        };
        /**
         * @param {?} zIndex
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.setZIndex = function (zIndex) {
            zIndex && (this.zIndex = zIndex); /* jshint ignore:line */
            this.htmlEl.style.zIndex = this.zIndex;
        };
        /**
         * @param {?} visible
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.setVisible = function (visible) {
            this.htmlEl.style.display = visible ? 'inline-block' : 'none';
            this.visible = visible;
        };
        return CustomMarkerOverlayView;
    }(google.maps.OverlayView));
    return new CustomMarkerOverlayView(htmlEl, position);
}
var CustomMarker = /** @class */ (function () {
    /**
     * @param {?} nguiMapComponent
     * @param {?} elementRef
     * @param {?} nguiMap
     */
    function CustomMarker(nguiMapComponent, elementRef, nguiMap) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputChanges$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS$3.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); });
    }
    /**
     * @return {?}
     */
    CustomMarker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CustomMarker.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    /**
     * @return {?}
     */
    CustomMarker.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        this.nguiMapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(OUTPUTS$3, this, 'mapObject');
        }
    };
    /**
     * @return {?}
     */
    CustomMarker.prototype.initialize = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement;
        this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
        this.mapObject.setMap(this.nguiMapComponent.map);
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS$3, this, 'mapObject');
        // update object when input changes
        rxjs_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"].call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.mapObject, changes); });
        this.nguiMapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return CustomMarker;
}());
CustomMarker.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngui-map > custom-marker',
                inputs: INPUTS$3,
                outputs: OUTPUTS$3,
                template: "\n    <ng-content></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
CustomMarker.ctorParameters = function () { return [
    { type: NguiMapComponent, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: NguiMap, },
]; };
CustomMarker.propDecorators = {
    'initialized$': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
var INPUTS$4 = [
    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
    // ngui-map specific inputs
    'geoFallbackCenter'
];
var OUTPUTS$4 = [
    'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
    'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
];
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    /**
     * @param {?} nguiMapComp
     */
    function Circle(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Circle', INPUTS$4, OUTPUTS$4) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = ({});
        return _this;
    }
    /**
     * @return {?}
     */
    Circle.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setCenter();
    };
    /**
     * @return {?}
     */
    Circle.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (center) {
                var /** @type {?} */ latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
                _this.mapObject.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map, error in finding the current position');
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['center'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                _this.mapObject.setCenter(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error in finding location from', _this['center']);
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    return Circle;
}(BaseMapDirective));
Circle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map>circle, ngui-map>map-circle',
                inputs: INPUTS$4,
                outputs: OUTPUTS$4,
            },] },
];
/**
 * @nocollapse
 */
Circle.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$5 = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson', 'geoJsonUrl'];
var OUTPUTS$5 = [
    'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
    'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
];
var DataLayer = /** @class */ (function (_super) {
    __extends(DataLayer, _super);
    /**
     * @param {?} nguiMapComponent
     */
    function DataLayer(nguiMapComponent) {
        return _super.call(this, nguiMapComponent, 'Data', INPUTS$5, OUTPUTS$5) || this;
    }
    /**
     * @return {?}
     */
    DataLayer.prototype.initialize = function () {
        if (this['geoJson']) {
            // addGeoJson from an object
            this.nguiMapComponent.map.data.addGeoJson(this['geoJson']);
        }
        else if (this['geoJsonUrl']) {
            // loadGeoJson from a URL
            this.nguiMapComponent.map.data.loadGeoJson(this['geoJsonUrl']);
        }
        else {
            this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
            this.nguiMapComponent.map.data.add(this.objectOptions);
        }
        // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()
        this.mapObject = this.nguiMapComponent.map.data;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return DataLayer;
}(BaseMapDirective));
DataLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > data-layer',
                inputs: INPUTS$5,
                outputs: OUTPUTS$5,
            },] },
];
/**
 * @nocollapse
 */
DataLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$6 = [
    'directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions',
    'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer',
    'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'
];
var OUTPUTS$6 = ['directions_changed'];
var DirectionsRenderer = /** @class */ (function (_super) {
    __extends(DirectionsRenderer, _super);
    /**
     * @param {?} nguiMapComponent
     * @param {?} geolocation
     */
    function DirectionsRenderer(nguiMapComponent, geolocation) {
        var _this = _super.call(this, nguiMapComponent, 'DirectionsRenderer', INPUTS$6, OUTPUTS$6) || this;
        _this.geolocation = geolocation;
        return _this;
    }
    /**
     * @return {?}
     */
    DirectionsRenderer.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        if (typeof this.objectOptions['panel'] === 'string') {
            this.objectOptions['panel'] = document.querySelector(this.objectOptions['panel']);
        }
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
        this.directionsRenderer.setMap(this.nguiMapComponent.map);
        // set google events listeners and emidirectionsRenderer to this outputs listeners
        this.showDirections(this.directionsRequest);
        this.nguiMap.setObjectEvents(this.outputs, this, 'directionsRenderer');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.directionsRenderer);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DirectionsRenderer.prototype.ngOnChanges = function (changes) {
        var /** @type {?} */ newOptions = {};
        for (var /** @type {?} */ key in changes) {
            if (this.inputs.indexOf(key) !== -1) {
                newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
            }
        }
        if (changes['directionsRequest'] && this.directionsRenderer) {
            this.directionsService && this.showDirections(this.directionsRequest);
        }
    };
    /**
     * @param {?} directionsRequest
     * @return {?}
     */
    DirectionsRenderer.prototype.showDirections = function (directionsRequest) {
        var _this = this;
        this.directionsService.route(directionsRequest, function (response, status) {
            // in some-case the callback is called during destroy component,
            // we should make sure directionsRenderer is still defined (cancelling `route` callback is not possible).
            if (!_this.directionsRenderer) {
                return;
            }
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsRenderer.setDirections(response);
            }
            else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };
    /**
     * @return {?}
     */
    DirectionsRenderer.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.nguiMap.clearObjectEvents(this.outputs, this, 'directionsRenderer');
    };
    return DirectionsRenderer;
}(BaseMapDirective));
DirectionsRenderer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > directions-renderer',
                inputs: INPUTS$6,
                outputs: OUTPUTS$6,
            },] },
];
/**
 * @nocollapse
 */
DirectionsRenderer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
    { type: NavigatorGeolocation, },
]; };
DirectionsRenderer.propDecorators = {
    'directionsRequest': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['directions-request',] },],
};
var INPUTS$7 = [
    'options',
    'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
    'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
var OUTPUTS$7 = [
    'circlecomplete', 'markercomplete', 'overlaycomplete',
    'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];
var DrawingManager = /** @class */ (function (_super) {
    __extends(DrawingManager, _super);
    /**
     * @param {?} nguiMapComp
     */
    function DrawingManager(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'DrawingManager', INPUTS$7, OUTPUTS$7) || this;
        _this.libraryName = 'drawing';
        return _this;
    }
    return DrawingManager;
}(BaseMapDirective));
DrawingManager.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > drawing-manager',
                inputs: INPUTS$7,
                outputs: OUTPUTS$7,
            },] },
];
/**
 * @nocollapse
 */
DrawingManager.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$8 = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS$8 = ['click', 'dblclick'];
var GroundOverlay = /** @class */ (function (_super) {
    __extends(GroundOverlay, _super);
    /**
     * @param {?} nguiMapComp
     */
    function GroundOverlay(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'GroundOverlay', INPUTS$8, OUTPUTS$8) || this;
        _this.objectOptions = ({});
        return _this;
    }
    /**
     * @return {?}
     */
    GroundOverlay.prototype.initialize = function () {
        // url, bounds are not the options of GroundOverlay
        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
        // noinspection TypeScriptUnresolvedFunction
        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return GroundOverlay;
}(BaseMapDirective));
GroundOverlay.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > ground-overlay',
                inputs: INPUTS$8,
                outputs: OUTPUTS$8,
            },] },
];
/**
 * @nocollapse
 */
GroundOverlay.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$9 = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS$9 = [];
var HeatmapLayer = /** @class */ (function (_super) {
    __extends(HeatmapLayer, _super);
    /**
     * @param {?} nguiMapComp
     */
    function HeatmapLayer(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'HeatmapLayer', INPUTS$9, OUTPUTS$9) || this;
        _this.libraryName = 'visualization';
        return _this;
    }
    return HeatmapLayer;
}(BaseMapDirective));
HeatmapLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > heatmap-layer',
                inputs: INPUTS$9,
                outputs: OUTPUTS$9,
            },] },
];
/**
 * @nocollapse
 */
HeatmapLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$10 = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS$10 = ['click', 'defaultviewport_changed', 'status_changed'];
var KmlLayer = /** @class */ (function (_super) {
    __extends(KmlLayer, _super);
    /**
     * @param {?} nguiMapComp
     */
    function KmlLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'KmlLayer', INPUTS$10, OUTPUTS$10) || this;
    }
    return KmlLayer;
}(BaseMapDirective));
KmlLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > kml-layer',
                inputs: INPUTS$10,
                outputs: OUTPUTS$10,
            },] },
];
/**
 * @nocollapse
 */
KmlLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$11 = [
    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options',
    // ngui-map specific inputs
    'geoFallbackPosition'
];
var OUTPUTS$11 = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    /**
     * @param {?} nguiMapComp
     */
    function Marker(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Marker', INPUTS$11, OUTPUTS$11) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = ({});
        return _this;
    }
    /**
     * @return {?}
     */
    Marker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    /**
     * @return {?}
     */
    Marker.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setPosition();
    };
    /**
     * @return {?}
     */
    Marker.prototype.setPosition = function () {
        var _this = this;
        if (!this['position']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (position) {
                var /** @type {?} */ latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.mapObject.setPosition(latLng);
            }, function (error) {
                console.error('ngui-map, error finding the current location');
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['position'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
                _this.mapObject.setPosition(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error finding the location from', _this['position']);
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    return Marker;
}(BaseMapDirective));
Marker.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > marker',
                inputs: INPUTS$11,
                outputs: OUTPUTS$11,
            },] },
];
/**
 * @nocollapse
 */
Marker.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var PlacesAutoComplete = /** @class */ (function () {
    /**
     * @param {?} optionBuilder
     * @param {?} elementRef
     * @param {?} apiLoader
     */
    function PlacesAutoComplete(optionBuilder, elementRef, apiLoader) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.apiLoader = apiLoader;
        this.place_changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // only called when map is ready
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            if (!google.maps.places) {
                throw missingLibraryError('PlacesAutoComplete', 'places');
            }
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            _this.autocomplete.addListener('place_changed', function (place) {
                _this.place_changed.emit(_this.autocomplete.getPlace());
            });
            _this.initialized$.emit(_this.autocomplete);
        };
        apiLoader.load();
        apiLoader.api$.subscribe(function () { return _this.initialize(); });
    }
    return PlacesAutoComplete;
}());
PlacesAutoComplete.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[places-auto-complete]'
            },] },
];
/**
 * @nocollapse
 */
PlacesAutoComplete.ctorParameters = function () { return [
    { type: OptionBuilder, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: NgMapApiLoader, },
]; };
PlacesAutoComplete.propDecorators = {
    'bounds': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['bounds',] },],
    'componentRestrictions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['componentRestrictions',] },],
    'types': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['types',] },],
    'place_changed': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['place_changed',] },],
    'initialized$': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
var INPUTS$12 = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
];
var OUTPUTS$12 = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
];
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    /**
     * @param {?} nguiMapComp
     */
    function Polygon(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polygon', INPUTS$12, OUTPUTS$12) || this;
    }
    return Polygon;
}(BaseMapDirective));
Polygon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map>polygon, ngui-map>map-polygon',
                inputs: INPUTS$12,
                outputs: OUTPUTS$12,
            },] },
];
/**
 * @nocollapse
 */
Polygon.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$13 = [
    'clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor',
    'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'
];
var OUTPUTS$13 = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
];
var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    /**
     * @param {?} nguiMapComp
     */
    function Polyline(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polyline', INPUTS$13, OUTPUTS$13) || this;
    }
    return Polyline;
}(BaseMapDirective));
Polyline.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > polyline',
                inputs: INPUTS$13,
                outputs: OUTPUTS$13,
            },] },
];
/**
 * @nocollapse
 */
Polyline.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$14 = [
    'selector', 'options',
    'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom',
    'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl',
    'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano',
    'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'
];
var OUTPUTS$14 = [
    'closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed',
    'visible_changed', 'zoom_changed'
];
var StreetViewPanorama = /** @class */ (function (_super) {
    __extends(StreetViewPanorama, _super);
    /**
     * @param {?} nguiMapComp
     */
    function StreetViewPanorama(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'StreetViewPanorama', INPUTS$14, OUTPUTS$14) || this;
    }
    /**
     * @return {?}
     */
    StreetViewPanorama.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        var /** @type {?} */ element;
        if (this.objectOptions.selector) {
            // noinspection TypeScriptValidateTypes
            element = document.querySelector(this['selector']);
            delete this.objectOptions.selector;
        }
        else {
            element = this.nguiMapComponent.el;
        }
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    /**
     * @return {?}
     */
    StreetViewPanorama.prototype.ngOnDestroy = function () {
        if (this.nguiMapComponent.el) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
    return StreetViewPanorama;
}(BaseMapDirective));
StreetViewPanorama.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > street-view-panorama',
                inputs: INPUTS$14,
                outputs: OUTPUTS$14,
            },] },
];
/**
 * @nocollapse
 */
StreetViewPanorama.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$15 = ['autoRefresh', 'options'];
var OUTPUTS$15 = [];
var TrafficLayer = /** @class */ (function (_super) {
    __extends(TrafficLayer, _super);
    /**
     * @param {?} nguiMapComp
     */
    function TrafficLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TrafficLayer', INPUTS$15, OUTPUTS$15) || this;
    }
    return TrafficLayer;
}(BaseMapDirective));
TrafficLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > traffic-layer',
                inputs: INPUTS$15,
                outputs: OUTPUTS$15,
            },] },
];
/**
 * @nocollapse
 */
TrafficLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$16 = [];
var OUTPUTS$16 = [];
var TransitLayer = /** @class */ (function (_super) {
    __extends(TransitLayer, _super);
    /**
     * @param {?} nguiMapComp
     */
    function TransitLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TransitLayer', INPUTS$16, OUTPUTS$16) || this;
    }
    return TransitLayer;
}(BaseMapDirective));
TransitLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > transit-layer',
                inputs: INPUTS$16,
                outputs: OUTPUTS$16,
            },] },
];
/**
 * @nocollapse
 */
TransitLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var COMPONENTS_DIRECTIVES = [
    NguiMapComponent, InfoWindow,
    Marker, Circle, CustomMarker, Polygon, InfoWindow, Polyline, GroundOverlay,
    TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer, DataLayer,
    StreetViewPanorama, PlacesAutoComplete, DirectionsRenderer,
    DrawingManager,
];
var NguiMapModule = /** @class */ (function () {
    function NguiMapModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NguiMapModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NguiMapModule,
            providers: [
                { provide: NG_MAP_CONFIG_TOKEN, useValue: config }
            ],
        };
    };
    return NguiMapModule;
}());
NguiMapModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
                declarations: COMPONENTS_DIRECTIVES,
                exports: [COMPONENTS_DIRECTIVES],
                providers: [
                    GeoCoder,
                    NavigatorGeolocation,
                    NguiMap,
                    OptionBuilder,
                    { provide: NgMapApiLoader, useClass: NgMapAsyncCallbackApiLoader },
                ]
            },] },
];
/**
 * @nocollapse
 */
NguiMapModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=map.es5.js.map


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/ReplaySubject.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/ReplaySubject.js ***!
  \*********************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]; });


//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/first.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/first.js ***!
  \**********************************************************/
/*! exports provided: first */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function first() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"].apply(void 0, args)(this);
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./src/app/maps/google/google.component.html":
/*!***************************************************!*\
  !*** ./src/app/maps/google/google.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <!-- START CONTENT INNER -->\n        <pg-container extraHorizontalClass=\"relative\">\n          <div class=\"map-controls\">\n            <div class=\"pull-left\">\n              <div class=\"btn-group btn-group-vertical\">\n                <button (click)=\"zoomIn()\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-plus\"></i>\n                </button>\n                <button (click)=\"zoomOut()\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-minus\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </pg-container>\n        <!-- Map -->\n        <div class=\"map-container full-width full-height\">\n          <ngui-map  [zoom]=\"zoomLevel\" [styles]=\"styles\" [center]=\"center\" [disableDefaultUI]=\"disableDefaultUI\"></ngui-map>\n        </div>\n        <!-- END CONTENT INNER -->"

/***/ }),

/***/ "./src/app/maps/google/google.component.scss":
/*!***************************************************!*\
  !*** ./src/app/maps/google/google.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maps/google/google.component.ts":
/*!*************************************************!*\
  !*** ./src/app/maps/google/google.component.ts ***!
  \*************************************************/
/*! exports provided: GoogleMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapPage", function() { return GoogleMapPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleMapPage = /** @class */ (function () {
    function GoogleMapPage(route, toggler) {
        this.route = route;
        this.toggler = toggler;
        this.zoomLevel = 11;
        this.center = { lat: 40.6700, lng: -73.9400 };
        this.disableDefaultUI = true;
        this.styles = [{
                featureType: 'water',
                elementType: 'all',
                stylers: [{
                        hue: '#e9ebed'
                    }, {
                        saturation: -78
                    }, {
                        lightness: 67
                    }, {
                        visibility: 'simplified'
                    }]
            }, {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [{
                        hue: '#ffffff'
                    }, {
                        saturation: -100
                    }, {
                        lightness: 100
                    }, {
                        visibility: 'simplified'
                    }]
            }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                        hue: '#bbc0c4'
                    }, {
                        saturation: -93
                    }, {
                        lightness: 31
                    }, {
                        visibility: 'simplified'
                    }]
            }, {
                featureType: 'poi',
                elementType: 'all',
                stylers: [{
                        hue: '#ffffff'
                    }, {
                        saturation: -100
                    }, {
                        lightness: 100
                    }, {
                        visibility: 'off'
                    }]
            }, {
                featureType: 'road.local',
                elementType: 'geometry',
                stylers: [{
                        hue: '#e9ebed'
                    }, {
                        saturation: -90
                    }, {
                        lightness: -8
                    }, {
                        visibility: 'simplified'
                    }]
            }, {
                featureType: 'transit',
                elementType: 'all',
                stylers: [{
                        hue: '#e9ebed'
                    }, {
                        saturation: 10
                    }, {
                        lightness: 69
                    }, {
                        visibility: 'on'
                    }]
            }, {
                featureType: 'administrative.locality',
                elementType: 'all',
                stylers: [{
                        hue: '#2c2e33'
                    }, {
                        saturation: 7
                    }, {
                        lightness: 19
                    }, {
                        visibility: 'on'
                    }]
            }, {
                featureType: 'road',
                elementType: 'labels',
                stylers: [{
                        hue: '#bbc0c4'
                    }, {
                        saturation: -93
                    }, {
                        lightness: 31
                    }, {
                        visibility: 'on'
                    }]
            }, {
                featureType: 'road.arterial',
                elementType: 'labels',
                stylers: [{
                        hue: '#bbc0c4'
                    }, {
                        saturation: -93
                    }, {
                        lightness: -2
                    }, {
                        visibility: 'simplified'
                    }]
            }];
    }
    GoogleMapPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.parameter = params['type'];
            //Show header for casual/executive and coporate
            if (_this.parameter != "with-header") {
                _this.toggler.setHeaderClass("transparent");
            }
        });
        this.toggler.setBodyLayoutClass("no-header");
        this.toggler.setPageContainer("full-height");
        this.toggler.setContent("full-width full-height overlay-footer relative");
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
    };
    GoogleMapPage.prototype.zoomIn = function () {
        this.zoomLevel++;
    };
    GoogleMapPage.prototype.zoomOut = function () {
        this.zoomLevel--;
    };
    GoogleMapPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'google-map-page',
            template: __webpack_require__(/*! ./google.component.html */ "./src/app/maps/google/google.component.html"),
            styles: [__webpack_require__(/*! ./google.component.scss */ "./src/app/maps/google/google.component.scss")],
            host: {
                '[class.relative]': 'true',
            }
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_2__["pagesToggleService"]])
    ], GoogleMapPage);
    return GoogleMapPage;
}());



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google/google.component */ "./src/app/maps/google/google.component.ts");
/* harmony import */ var _ngui_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngui/map */ "./node_modules/@ngui/map/dist/@ngui/map.es5.js");
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maps.routing */ "./src/app/maps/maps.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Core Pages Layout Components




var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_maps_routing__WEBPACK_IMPORTED_MODULE_6__["MapsRoutes"]),
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ngui_map__WEBPACK_IMPORTED_MODULE_5__["NguiMapModule"].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCR8KzV6CpcQpRvYDb0xp6Vw46HSN6qOes' })
            ],
            declarations: [_google_google_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapPage"]]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/maps/maps.routing.ts":
/*!**************************************!*\
  !*** ./src/app/maps/maps.routing.ts ***!
  \**************************************/
/*! exports provided: MapsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutes", function() { return MapsRoutes; });
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google/google.component */ "./src/app/maps/google/google.component.ts");

var MapsRoutes = [
    {
        path: '',
        children: [{
                path: 'google',
                component: _google_google_component__WEBPACK_IMPORTED_MODULE_0__["GoogleMapPage"]
            },
            {
                path: 'google/:type',
                component: _google_google_component__WEBPACK_IMPORTED_MODULE_0__["GoogleMapPage"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=maps-maps-module.js.map