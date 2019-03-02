(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./src/app/tables/advance/advance.component.html":
/*!*******************************************************!*\
  !*** ./src/app/tables/advance/advance.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- MODAL STICK UP  -->\n  <div bsModal #addNewAppModal=\"bs-modal\" class=\"modal fade stick-up\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addNewAppModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header clearfix \">\n          <button type=\"button\" class=\"close\" (click)=\"addNewAppModal.hide()\" aria-hidden=\"true\"><i class=\"pg pg-close fs-14\"></i>\n          </button>\n          <h4 class=\"p-b-5\"><span class=\"semi-bold\">New</span> App</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p class=\"small-text\">Create a new app using this form, make sure you fill them all</p>\n          <form role=\"form\" autocomplete=\"off\" #basicForm=\"ngForm\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppName.invalid && (modalAppName.dirty || modalAppName.touched)\" >\n                    <label>First name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"appName\" name=\"appName\" [(ngModel)]=\"appName\"  #modalAppName=\"ngModel\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppDescription.invalid && (modalAppDescription.dirty || modalAppDescription.touched)\" >\n                    <label>Description</label>\n                    <input type=\"text\" placeholder=\"Tell us more about it\"  class=\"form-control\" id=\"appDescription\" name=\"appDescription\" [(ngModel)]=\"appDescription\"  #modalAppDescription=\"ngModel\" required>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppPrice.invalid && (modalAppPrice.dirty || modalAppPrice.touched)\" >\n                    <label>Price</label>\n                    <input type=\"text\" class=\"form-control\" id=\"appPrice\" name=\"appPrice\" [(ngModel)]=\"appPrice\"  #modalAppPrice=\"ngModel\" placeholder=\"your price\" required>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppNotes.invalid && (modalAppNotes.dirty || modalAppNotes.touched)\" >\n                    <label>Notes</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"a note\" id=\"appNotes\" name=\"appNotes\" [(ngModel)]=\"appNotes\"  #modalAppNotes=\"ngModel\" required>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button id=\"add-app\" type=\"button\" class=\"btn btn-primary  btn-cons\" (click)=\"addRow()\" [class.disabled]=\"basicForm.invalid\" >Add</button>\n          <button type=\"button\" class=\"btn btn-cons\" (click)=\"addNewAppModal.hide()\">Close</button>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n   <!-- START JUMBOTRON -->\n  <div class=\"jumbotron\">\n  <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n    <div class=\" container-fluid   container-fixed-lg sm-p-l-0 sm-p-r-0\">\n      <div class=\"inner\"  pg-parallax>\n        <!-- START BREADCRUMB -->\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Tables</a></li>\n          <li class=\"breadcrumb-item active\">Advance</li>\n        </ol>\n        <!-- END BREADCRUMB --> \n        <div class=\"row\">\n          <div class=\"col-xl-7 col-lg-6 \">\n            <!-- START card -->\n            <div class=\"full-height\">\n              <div class=\"card-body text-center\">\n                <img class=\"image-responsive-height demo-mw-600\" src=\"assets/img/demo/tables.jpg\" alt=\"\">\n              </div>\n            </div>\n            <!-- END card -->\n          </div>\n          <div class=\"col-xl-5 col-lg-6 \">\n            <!-- START card -->\n            <div class=\"card card-transparent\">\n              <div class=\"card-header \">\n                <div class=\"card-title\">Getting started\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <h3>Easier than finding a needle in the haystack.</h3>\n                <p>Sharing the same stylized design layout, these tables allows for the effective compilation and organization of data with easy access and maneuverability for users. </p>\n                <p class=\"small hint-text m-t-5\">VIA senior product manage\n                  <br> for UI/UX at REVOX</p>\n                <br>\n                <button class=\"btn btn-primary btn-cons\">More</button>\n              </div>\n            </div>\n            <!-- END card -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </pg-container>\n  </div>\n  <!-- END JUMBOTRON -->\n  <!-- START CONTAINER FLUID -->\n  <pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n      <div class=\"card-header \">\n        <div class=\"card-title\">Pages Default Tables Style\n        </div>\n        <div class=\"pull-right\">\n          <div class=\"col-xs-12\">\n            <input type=\"text\" class=\"form-control pull-right\" placeholder=\"Search\" (keyup)='updateFilter($event)'>\n          </div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <ngx-datatable\n              #table\n              class='table table-hover'\n              [columns]=\"columns\"\n              [columnMode]=\"columnModeSetting\"\n              [scrollbarH]=\"scrollBarHorizontal\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"50\"\n              [rowHeight]=\"'auto'\"\n              [limit]=\"5\"\n              [rows]='basicRows'>\n              <ng-template \n              ngx-datatable-footer-template \n              let-rowCount=\"rowCount\"\n              let-pageSize=\"pageSize\"\n              let-selectedCount=\"selectedCount\"\n              let-curPage=\"curPage\"\n              let-offset=\"offset\">\n              Showing {{curPage}} to {{pageSize}} of {{rowCount}} entries\n            </ng-template>\n            </ngx-datatable>\n          </div>\n      </div>\n    </div>\n    <!-- END card -->\n  </pg-container>\n  <!-- END CONTAINER FLUID -->\n  <!-- START CONTAINER FLUID -->\n  <pg-container>\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n      <div class=\"card-header \">\n        <div class=\"card-title\">Table with Dynamic Rows\n        </div>\n        <div class=\"pull-right\">\n          <div class=\"col-xs-12\">\n            <button (click)=\"showModal()\"  class=\"btn btn-primary btn-cons\"><i class=\"fa fa-plus\"></i> Add row\n            </button>\n          </div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <ngx-datatable\n            #tableDynamic\n            class='table table-hover'\n            [columns]=\"columnsDynamic\"\n            [columnMode]=\"columnModeSetting\"\n            [scrollbarH]=\"scrollBarHorizontal\"\n            [headerHeight]=\"50\"\n            [footerHeight]=\"50\"\n            [rowHeight]=\"'auto'\"\n            [limit]=\"5\"\n            [rows]='dynamicRows'>\n            </ngx-datatable>\n          </div>\n      </div>\n    </div>\n    <!-- END card -->\n  </pg-container>\n  <!-- END CONTAINER FLUID -->\n  <!-- START CONTAINER FLUID -->\n  <pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n      <!-- START card -->\n      <div class=\"card card-transparent\">\n        <div class=\"card-header  d-flex justify-content-between\">\n          <div class=\"card-title\">Table with Fixed and lazy scrolling\n          </div>\n          <div class=\"export-options-container\"></div>\n          <!-- <div class=\"clearfix\"></div> -->\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\"  style=\"height:600px;overflow-y: hidden\">\n              <ngx-datatable\n              #tableAdvance\n              class='table table-hover table-stripped'\n              [columns]=\"advanceColumns\"\n              [columnMode]=\"columnModeSetting\"\n              [scrollbarH]=\"scrollBarHorizontal\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"50\"\n              [rowHeight]=\"60\"\n              [limit]=\"5\"\n              [scrollbarV]=\"true\"\n              [rows]='advanceRows'>\n              </ngx-datatable>\n            </div>\n        </div>\n      </div>\n      <!-- END card -->\n  </pg-container>\n  <!-- END CONTAINER FLUID -->\n\n"

/***/ }),

/***/ "./src/app/tables/advance/advance.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/tables/advance/advance.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables/advance/advance.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/tables/advance/advance.component.ts ***!
  \*****************************************************/
/*! exports provided: AdvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceComponent", function() { return AdvanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvanceComponent = /** @class */ (function () {
    function AdvanceComponent() {
        var _this = this;
        this.appName = null;
        this.appDescription = null;
        this.appPrice = null;
        this.appNotes = null;
        this.basicRows = [];
        this.basicSort = [];
        this.columns = [
            { name: 'Title' },
            { name: 'Places' },
            { name: 'Activities' },
            { name: 'Status' },
            { name: 'Last Update' },
        ];
        this.columnsDynamic = [
            { name: 'App Name' },
            { name: 'Description' },
            { name: 'Price' },
            { name: 'Notes' },
        ];
        this.dynamicRows = [];
        this.advanceColumns = [
            { name: 'Rendering engine' },
            { name: 'Browser' },
            { name: 'Platform' },
            { name: 'Engine version' },
            { name: 'CSS grade' },
        ];
        this.advanceRows = [];
        //No Option YET
        //https://github.com/swimlane/ngx-datatable/issues/423
        this.scrollBarHorizontal = (window.innerWidth < 960);
        this.columnModeSetting = (window.innerWidth < 960) ? 'standard' : 'force';
        console.log(this.columnModeSetting);
        this.fetch(function (data) {
            // cache our list
            _this.basicSort = data.slice();
            // push our inital complete list
            _this.basicRows = data;
        });
        this.fetchSampleDynamic(function (data) {
            // push our inital complete list
            _this.dynamicRows = data;
        });
        this.fetchSampleAdvance(function (data) {
            // push our inital complete list
            _this.advanceRows = data;
        });
        window.onresize = function () {
            _this.scrollBarHorizontal = (window.innerWidth < 960);
            _this.columnModeSetting = (window.innerWidth < 960) ? 'standard' : 'force';
        };
    }
    AdvanceComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/table.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    AdvanceComponent.prototype.fetchSampleDynamic = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/table_sample.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    AdvanceComponent.prototype.fetchSampleAdvance = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/table_browser.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    AdvanceComponent.prototype.ngOnInit = function () {
    };
    AdvanceComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.basicSort.filter(function (d) {
            // Change the column name here
            // example d.places
            return d.title.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.basicRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    AdvanceComponent.prototype.showModal = function () {
        this.addNewAppModal.show();
    };
    AdvanceComponent.prototype.addRow = function () {
        var temp = {
            "appName": this.appName,
            "description": this.appDescription,
            "notes": this.appPrice,
            "price": this.appNotes
        };
        //https://github.com/swimlane/ngx-datatable/issues/701
        this.dynamicRows = this.dynamicRows.concat([temp]);
        this.addNewAppModal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addNewAppModal'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], AdvanceComponent.prototype, "addNewAppModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], AdvanceComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], AdvanceComponent.prototype, "tableDynamic", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], AdvanceComponent.prototype, "tableAdvance", void 0);
    AdvanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advance',
            template: __webpack_require__(/*! ./advance.component.html */ "./src/app/tables/advance/advance.component.html"),
            styles: [__webpack_require__(/*! ./advance.component.scss */ "./src/app/tables/advance/advance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvanceComponent);
    return AdvanceComponent;
}());



/***/ }),

/***/ "./src/app/tables/basic/basic.component.html":
/*!***************************************************!*\
  !*** ./src/app/tables/basic/basic.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n       <!-- START JUMBOTRON -->\n       <div class=\"jumbotron\">\n       <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n          <div class=\"inner\" pg-parallax>\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Tables</a></li>\n              <li class=\"breadcrumb-item active\">Basic</li>\n            </ol>\n            <!-- END BREADCRUMB --> \n            <div class=\"row\">\n              <div class=\"col-xl-7 col-lg-6 \">\n                <!-- START card -->\n                <div class=\"full-height\">\n                  <div class=\"card-body text-center\">\n                    <img class=\"image-responsive-height demo-mw-600\" src=\"assets/img/demo/tables.jpg\" alt=\"\">\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n              <div class=\"col-xl-5 col-lg-6 \">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                    <div class=\"card-title\">Getting started\n                    </div>\n                  </div>\n                  <div class=\"card-body\">\n                    <h3>It only takes a glance.</h3>\n                    <p>Simplicity and user-freindliness define our stylized Tables, with the layout enabling any observer to grasp the basic information at a glance. </p>\n                    <p class=\"small hint-text m-t-5\">VIA senior product manage\n                      <br> for UI/UX at REVOX</p>\n                    <br>\n                    <button class=\"btn btn-primary btn-cons\">More</button>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n            </div>\n          </div>\n\n        </pg-container>\n      </div>\n      <!-- END JUMBOTRON -->\n      <!-- START CONTAINER FLUID -->\n      <pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n        <!-- START card -->\n        <div class=\"card card-transparent\">\n          <div class=\"card-header \">\n            <div class=\"card-title\">Pages Default Tables Style\n            </div>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                <ngx-datatable\n                class='table table-hover'\n                [rows]=\"basic_table_data\"\n                [columnMode]=\"columnModeSetting\"\n                [headerHeight]=\"43\"\n                [footerHeight]=\"50\"\n                [rowHeight]=\"'auto'\"\n                [limit]=\"5\"\n                [selected]=\"selected\"\n                [selectionType]=\"'checkbox'\"\n                [scrollbarH]=\"scrollBarHorizontal\"\n                (activate)=\"onActivate($event)\"\n                (select)='onSelect($event)'>\n                <ngx-datatable-column [width]=\"30\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\" cellClass=\"d-flex align-items-center\">\n                    <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\n                        <button class=\"btn btn-link\"><i class=\"pg pg-trash\"></i>\n                        </button>\n                    </ng-template>\n                    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\" let-isSelected=\"isSelected\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n                      <div class=\"checkbox d-flex align-items-center\">\n                          <input type=\"checkbox\" value=\"1\" id=\"checkbox_1{{rowIndex}}\"  [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\">\n                          <label for=\"checkbox_1{{rowIndex}}\"></label>\n                      </div>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Title\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Place\" cellClass=\"d-flex align-items-center\">\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <a href=\"javascript:;\" *ngFor=\"let value of row.places\" class=\"btn btn-tag\">{{value}}</a>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Activities\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Status\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Last Update\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n              </ngx-datatable>\n            </div>\n          </div>\n        </div>\n        <!-- END card -->\n      </pg-container>\n      <!-- END CONTAINER FLUID -->\n      <!-- START CONTAINER FLUID -->\n      <pg-container>\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <!-- START card -->\n            <div class=\"card card-transparent\">\n              <div class=\"card-header \">\n                <div class=\"card-title\">Pages Striped Tables\n                </div>\n                <div class=\"tools\">\n                  <a class=\"collapse\" href=\"javascript:;\"></a>\n                  <a class=\"config\" data-toggle=\"modal\" href=\"#grid-config\"></a>\n                  <a class=\"reload\" href=\"javascript:;\"></a>\n                  <a class=\"remove\" href=\"javascript:;\"></a>\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <ngx-datatable\n                    class='table table-hover table-stripped'\n                    [rows]=\"strippedTableData\"\n                    [columnMode]=\"columnModeSettingSmall\"\n                    [scrollbarH]=\"scrollBarHorizontal\"\n                    [headerHeight]=\"43\"\n                    [footerHeight]=\"0\"\n                    [rowHeight]=\"'auto'\"\n                    [limit]=\"5\"\n                    [sorts]=\"[{prop: 'title', dir: 'asc'}]\">\n                    <ngx-datatable-column name=\"Tache\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Ressource\" cellClass=\"d-flex align-items-center\">\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <a href=\"javascript:;\" *ngFor=\"let value of row.places\" class=\"btn btn-tag\">{{value}}</a>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column name=\"Nb heures\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                  </ngx-datatable>\n                </div>\n              </div>\n            </div>\n            <!-- END card -->\n          </div>\n          <div class=\"col-lg-6\">\n            <!-- START card -->\n            <div class=\"card card-transparent\">\n              <div class=\"card-header \">\n                <div class=\"card-title\">Pages condensed Table\n                </div>\n              </div>\n              <div class=\"card-body\">\n                  <div class=\"table-responsive\">\n                      <ngx-datatable\n                      class='table table-condensed'\n                      [rows]=\"condensedTableData\"\n                      [columnMode]=\"columnModeSettingSmall\"\n                      [scrollbarH]=\"scrollBarHorizontal\"\n                      [headerHeight]=\"43\"\n                      [footerHeight]=\"0\"\n                      [rowHeight]=\"44\"\n                      [limit]=\"5\" \n                      [sorts]=\"[{prop: 'title', dir: 'asc'}]\">\n                      <ngx-datatable-column name=\"Title\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                      <ngx-datatable-column name=\"Places\" cellClass=\"d-flex align-items-center\">\n                      </ngx-datatable-column>\n                      <ngx-datatable-column name=\"Condensed\" cellClass=\"d-flex align-items-center\">\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                              <div class=\"text-truncate\">\n                                {{value}}\n                                </div>\n                          </ng-template>\n                      </ngx-datatable-column>\n                    </ngx-datatable>\n                  </div>\n              </div>\n            </div>\n            <!-- END card -->\n          </div>\n        </div>\n      </pg-container>\n      <!-- END CONTAINER FLUID -->\n      <!-- START CONTAINER FLUID -->\n      <pg-container>\n        <div class=\"row\">\n          <div class=\"col-lg-8\">\n            <!-- START card -->\n            <div class=\"card card-transparent\">\n              <div class=\"card-header \">\n                <div class=\"card-title\">Pages detailed view table\n                </div>\n              </div>\n              <div class=\"card-body\">\n                      <ngx-datatable\n                      #expTable\n                      class='table table-condensed'\n                      [rows]=\"expandTableData\"\n                      [columnMode]=\"'force'\"\n                      [headerHeight]=\"43\"\n                      [footerHeight]=\"0\"\n                      [rowHeight]=\"44\"\n                      [limit]=\"5\">\n                      <!-- Row Detail Template -->\n                      <ngx-datatable-row-detail [rowHeight]=\"'auto'\" #myDetailRow (toggle)=\"onDetailToggle($event)\">\n                          <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\n                              <table class=\"table table-inline m-l-40 m-r-40 m-t-10 m-b-10\">\n                                  <tbody>\n                                    <tr>\n                                      <td>Learn from real test data <span class=\"label label-important\">ALERT!</span></td>\n                                      <td>USD 1000</td>\n                                    </tr>\n                                    <tr>\n                                      <td>PSDs included</td>\n                                      <td>USD 3000</td>\n                                    </tr>\n                                    <tr>\n                                      <td>Extra info</td>\n                                      <td>USD 2400</td>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                          </ng-template>\n                        </ngx-datatable-row-detail>                 \n                      <ngx-datatable-column name=\"Title\" cellClass=\"d-flex align-items-center\">\n                          <ng-template let-expanded=\"expanded\" let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <a\n                            class=\"text-black\"\n                            href=\"javascript:void(0)\"\n                            title=\"Expand/Collapse Row\"\n                            (click)=\"toggleExpandRow(row)\">\n                            <i class=\"pg\" [class.pg-arrow_right]=\"!expanded\" [class.pg-arrow_minimize]=\"expanded\"></i>\n                          </a>\n                          {{value}}\n                        </ng-template>\n                      </ngx-datatable-column>\n                      <ngx-datatable-column name=\"Status\" cellClass=\"d-flex align-items-center\">\n                      </ngx-datatable-column>\n                      <ngx-datatable-column name=\"Price\" cellClass=\"d-flex align-items-center\">\n                      </ngx-datatable-column>\n                      <ngx-datatable-column name=\"Last Update\" cellClass=\"d-flex align-items-center\">\n                      </ngx-datatable-column>\n                    </ngx-datatable>\n              </div>\n            </div>\n            <!-- END card -->\n          </div>\n        </div>\n      </pg-container>\n      <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/tables/basic/basic.component.scss":
/*!***************************************************!*\
  !*** ./src/app/tables/basic/basic.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables/basic/basic.component.ts":
/*!*************************************************!*\
  !*** ./src/app/tables/basic/basic.component.ts ***!
  \*************************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
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

var BasicComponent = /** @class */ (function () {
    function BasicComponent() {
        var _this = this;
        this.expandTableData = [{
                title: 'First tour',
                status: 'Active',
                price: '40,000 USD',
                lastUpdate: 'April 13, 2018',
                expand: false,
                other: [{
                        label: "Learn from real test data",
                        value: "USD 1000"
                    },
                    {
                        label: "PSDs included",
                        value: "USD 1000"
                    },
                    {
                        label: "Extra Info",
                        value: "USD 1000"
                    },
                ]
            },
            {
                title: 'First tour',
                status: 'Active',
                price: '70,000 USD',
                lastUpdate: 'April 13, 2018',
                expand: false,
                other: [{
                        label: "Learn from real test data",
                        value: "USD 1000"
                    },
                    {
                        label: "PSDs included",
                        value: "USD 1000"
                    },
                    {
                        label: "Extra Info",
                        value: "USD 1000"
                    },
                ]
            },
            {
                title: 'First tour',
                status: 'Active',
                price: '20,000 USD',
                lastUpdate: 'April 13, 2018',
                expand: false,
                other: [{
                        label: "Learn from real test data",
                        value: "USD 1000"
                    },
                    {
                        label: "PSDs included",
                        value: "USD 1000"
                    },
                    {
                        label: "Extra Info",
                        value: "USD 1000"
                    },
                ]
            },
            {
                title: 'First tour',
                status: 'Active',
                price: '90,000 USD',
                lastUpdate: 'April 13, 2018',
                expand: false,
                other: [{
                        label: "Learn from real test data",
                        value: "USD 1000"
                    },
                    {
                        label: "PSDs included",
                        value: "USD 1000"
                    },
                    {
                        label: "Extra Info",
                        value: "USD 1000"
                    },
                ]
            },
        ];
        this.sortMapBasicTable = {
            uid: null,
            nom: null,
            prenom: null,
            activities: null,
            status: null,
            lastUpdate: null
        };
        this.sortName = null;
        this.sortValue = null;
        //No Option YET
        //https://github.com/swimlane/ngx-datatable/issues/423
        this.scrollBarHorizontal = (window.innerWidth < 960);
        this.columnModeSetting = (window.innerWidth < 960) ? 'standard' : 'force';
        this.columnModeSettingSmall = (window.innerWidth < 560) ? 'standard' : 'force';
        this.selected = [];
        this.expanded = {};
        this.fetch(function (data) {
            _this.basic_table_data = data;
        });
        window.onresize = function () {
            _this.scrollBarHorizontal = (window.innerWidth < 960);
            _this.columnModeSetting = (window.innerWidth < 960) ? 'standard' : 'force';
            _this.columnModeSettingSmall = (window.innerWidth < 560) ? 'standard' : 'force';
        };
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    BasicComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    BasicComponent.prototype.onActivate = function (event) {
    };
    BasicComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/table.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    BasicComponent.prototype.toggleExpandRow = function (row) {
        console.log(row);
        this.expTable.rowDetail.toggleExpandRow(row);
    };
    BasicComponent.prototype.onDetailToggle = function (event) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expTable'),
        __metadata("design:type", Object)
    ], BasicComponent.prototype, "expTable", void 0);
    BasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./src/app/tables/basic/basic.component.html"),
            styles: [__webpack_require__(/*! ./basic.component.scss */ "./src/app/tables/basic/basic.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tables_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables.routing */ "./src/app/tables/tables.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/tables/basic/basic.component.ts");
/* harmony import */ var _advance_advance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./advance/advance.component */ "./src/app/tables/advance/advance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular Dependencies




//Router

//Core Pages Layout Components

//Thirdparty Dependencies - table and model


//Demo Pages


var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_4__["TableRoutes"]),
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"]
            ],
            declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_8__["BasicComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_9__["AdvanceComponent"]]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/tables/tables.routing.ts":
/*!******************************************!*\
  !*** ./src/app/tables/tables.routing.ts ***!
  \******************************************/
/*! exports provided: TableRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRoutes", function() { return TableRoutes; });
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/tables/basic/basic.component.ts");
/* harmony import */ var _advance_advance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advance/advance.component */ "./src/app/tables/advance/advance.component.ts");


var TableRoutes = [
    {
        path: '',
        children: [{
                path: 'basic',
                component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__["BasicComponent"],
                data: {
                    title: 'tables'
                }
            }, {
                path: 'advance',
                component: _advance_advance_component__WEBPACK_IMPORTED_MODULE_1__["AdvanceComponent"],
                data: {
                    title: 'datatables'
                }
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map