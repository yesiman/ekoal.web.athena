(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["athena-taches-taches-module"],{

/***/ "./src/app/@athena/taches/list/list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/@athena/taches/list/list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #smSlideUp=\"bs-modal\" class=\"modal fade slide-up disable-scroll\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"false\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content-wrapper\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-center m-t-20\">\n          <h4 class=\"no-margin p-b-10\">Êtes vous sur de vouloir supprimer cet enregistrement ?</h4>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary btn-cons\" (click)=\"removeRowValid()\">Valider</button>\n          <button type=\"button\" class=\"btn btn-cons\" (click)=\"smSlideUp.hide()\">Annuler</button>\n        </div>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n</div>\n\n<div bsModal #addNewAppModal=\"bs-modal\" class=\"modal fade stick-up\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addNewAppModal\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header clearfix \">\n        <button type=\"button\" class=\"close\" (click)=\"addNewAppModal.hide()\" aria-hidden=\"true\"><i class=\"pg pg-close fs-14\"></i>\n        </button>\n        <h4 class=\"p-b-5\"><span class=\"semi-bold\">Nouvel</span> Utilisateur</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p class=\"small-text\">Create a new app using this form, make sure you fill them all</p>\n        <form role=\"form\" autocomplete=\"off\" #basicForm=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppName.invalid && (modalAppName.dirty || modalAppName.touched)\" >\n                  <label>Nom</label>\n                  <input type=\"text\" class=\"form-control\" id=\"tacheNom\" name=\"tacheNom\" [(ngModel)]=\"tache.nom\"  #modalAppName=\"ngModel\" required>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div  class=\"form-group form-group-default input-group\">\n                  <div class=\"form-input-group\">\n                    <label>Tarif horaire</label>\n                    <input type=\"text\" class=\"form-control eur\"  name=\"tacheBudget\" [(ngModel)]=\"tache.budget\" >\n                  </div>\n                  <div class=\"input-group-append \">\n                      <span class=\"input-group-text\">EUR\n                      </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button id=\"add-app\" type=\"button\" class=\"btn btn-primary  btn-cons\" (click)=\"!basicForm.invalid && addRow()\" [class.disabled]=\"basicForm.invalid\" >Valider</button>\n        <button type=\"button\" class=\"btn btn-cons\" (click)=\"addNewAppModal.hide()\">Annuler</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n       <!-- START JUMBOTRON -->\n       <div class=\"jumbotron\">\n       <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n          <div class=\"inner\" pg-parallax>\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" [routerLink]=\"'/dashboard'\">Accueil</a></li>\n              <li class=\"breadcrumb-item active\">Taches</li>\n            </ol>\n            <!-- END BREADCRUMB --> \n            \n          </div>\n\n        </pg-container>\n      </div>\n      <!-- END JUMBOTRON -->\n      <!-- START CONTAINER FLUID -->\n      <pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n        <!-- START card -->\n        <div class=\"card card-transparent\">\n          <div class=\"card-header \">\n            <div class=\"card-title\">Liste des taches\n            </div>\n            <div class=\"pull-right\">\n              <div class=\"col-xs-12\">\n                <button (click)=\"showModal()\"  class=\"btn btn-primary btn-cons\"><i class=\"fa fa-plus\"></i> Nouveau\n                </button>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                <ngx-datatable\n                class='table table-hover'\n                [rows]=\"basic_table_data\"\n                [columnMode]=\"columnModeSetting\"\n                [headerHeight]=\"43\"\n                [footerHeight]=\"50\"\n                [rowHeight]=\"'auto'\"\n                [selected]=\"selected\"\n                [selectionType]=\"'checkbox'\"\n                [scrollbarH]=\"scrollBarHorizontal\"\n                (activate)=\"onActivate($event)\"\n                (select)='onSelect($event)'>\n                <ngx-datatable-column name=\"Nom\" value=\"value\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Tarif horaire\" prop=\"budget\" value=\"value\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                \n                <ngx-datatable-column name=\"id\" >\n                  <ng-template let-column=\"column\" ngx-datatable-header-template>\n                      actions\n                  </ng-template>\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                      <button class=\"btn btn-primary\" (click)=\"detail(row)\" type=\"button\"><i class=\"fa fa-edit\" ></i>\n                      </button>\n                      <button class=\"btn btn-danger\" (click)=\"removeRow(row.id)\" type=\"button\"><i class=\"fa fa-trash\"></i>\n                      </button>\n                      \n                  </ng-template>\n              </ngx-datatable-column>\n              </ngx-datatable>\n            </div>\n          </div>\n        </div>\n        <!-- END card -->\n      </pg-container>\n      <!-- END CONTAINER FLUID -->\n      "

/***/ }),

/***/ "./src/app/@athena/taches/list/list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/@athena/taches/list/list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/@athena/taches/list/list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/@athena/taches/list/list.component.ts ***!
  \*******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_modal_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/modal.directive */ "./node_modules/ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(afs, afAuth) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.tache = {};
        this.basic_table_data = [];
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
        this.strippedTableData = [{
                title: 'First tour',
                places: ['United States', 'India'],
                activities: 'Wonders can be true. Believe in your dreams!',
            },
            {
                title: 'Second tour',
                places: ['China', 'Africa'],
                activities: 'Wonders can be true. Believe in your dreams!',
            },
            {
                title: 'Third tour',
                places: ['United States', 'India'],
                activities: 'Wonders can be true. Believe in your dreams!',
            },
            {
                title: 'Four tour',
                places: ['China', 'Africa'],
                activities: 'Wonders can be true. Believe in your dreams!',
            }
        ];
        this.strippedTableDataMap = {
            title: null,
            places: null,
            activities: null,
        };
        this.condensedTableData = [{
                title: 'First tour',
                places: 'Simple but not simpler',
                condensed: 'Wonders can be true. Believe in your dreams!',
            },
            {
                title: 'Second tour',
                places: 'Simple but not simpler',
                condensed: 'Wonders can be true. Believe in your dreams!',
            },
            {
                title: 'Third tour',
                places: 'Simple but not simpler',
                condensed: 'Wonders can be true. Believe in your dreams!',
            },
            {
                title: 'Four tour',
                places: 'Simple but not simpler',
                condensed: 'Wonders can be true. Believe in your dreams!',
            },
            {
                title: 'Fifth tour',
                places: 'Simple but not simpler',
                condensed: 'Wonders can be true. Believe in your dreams!',
            },
        ];
        this.condensedTableDataMap = {
            title: null,
            places: null,
            condensed: null,
        };
        this.sortMapBasicTable = {
            key: null,
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
        this.idToRemove = "-1";
        this.fetch(function (data) {
            _this.basic_table_data = data;
            //= Object.keys(data).map(function(key) {
            /// return [data[key][0]];
            //});
        });
        window.onresize = function () {
            _this.scrollBarHorizontal = (window.innerWidth < 960);
            _this.columnModeSetting = (window.innerWidth < 960) ? 'standard' : 'force';
            _this.columnModeSettingSmall = (window.innerWidth < 560) ? 'standard' : 'force';
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        /*this.itemsCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as any;
                data.id = a.payload.doc.id;
                console.log(data);
                return data;
              }))
            );*/
    };
    ListComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    ListComponent.prototype.onActivate = function (event) {
    };
    ListComponent.prototype.fetch = function (cb) {
        this.itemsCollection = this.afs.collection('taches');
        this.items = this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        this.items.subscribe(function (data) {
            var adata = [];
            for (var o in data) {
                console.log(data[o]);
                adata.push(data[o]);
            }
            console.log("??????", adata);
            cb(adata);
        });
    };
    ListComponent.prototype.toggleExpandRow = function (row) {
        console.log(row);
        this.expTable.rowDetail.toggleExpandRow(row);
    };
    ListComponent.prototype.showModal = function (tache) {
        if (!tache) {
            tache = {};
        }
        console.log(tache);
        this.tache = tache;
        this.addNewAppModal.show();
    };
    ListComponent.prototype.removeRow = function (id) {
        this.idToRemove = id;
        this.smSlideUp.show();
    };
    ListComponent.prototype.removeRowValid = function () {
        this.itemsCollection.doc(this.idToRemove).delete();
        this.smSlideUp.hide();
    };
    ListComponent.prototype.addRow = function () {
        (this.tache.id) ? this.updateTache() : this.addTache();
        this.addNewAppModal.hide();
    };
    ListComponent.prototype.detail = function (row) {
        this.addNewAppModal.hide();
        this.showModal(row);
    };
    ListComponent.prototype.onDetailToggle = function (event) {
    };
    ListComponent.prototype.addTache = function () {
        this.itemsCollection = this.afs.collection('taches');
        return this.itemsCollection.add(this.tache);
    };
    ListComponent.prototype.updateTache = function () {
        var uid = this.tache.id;
        this.itemsCollection = this.afs.collection('taches');
        delete this.tache.id;
        return this.itemsCollection.doc(uid).update(this.tache);
    };
    ListComponent.prototype.deleteTache = function (id) {
        this.itemsCollection = this.afs.collection('taches');
        return this.itemsCollection.doc(id).delete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addNewAppModal'),
        __metadata("design:type", ngx_bootstrap_modal_modal_directive__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ListComponent.prototype, "addNewAppModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('smSlideUp'),
        __metadata("design:type", ngx_bootstrap_modal_modal_directive__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ListComponent.prototype, "smSlideUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expTable'),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "expTable", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/@athena/taches/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/@athena/taches/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/@athena/taches/taches.module.ts":
/*!*************************************************!*\
  !*** ./src/app/@athena/taches/taches.module.ts ***!
  \*************************************************/
/*! exports provided: TachesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TachesModule", function() { return TachesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _taches_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taches.routing */ "./src/app/@athena/taches/taches.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@pages/components/select/select.module */ "./src/app/@pages/components/select/select.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/@athena/taches/list/list.component.ts");
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

var TachesModule = /** @class */ (function () {
    function TachesModule() {
    }
    TachesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_taches_routing__WEBPACK_IMPORTED_MODULE_4__["TableRoutes"]),
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_8__["pgSelectModule"]
            ],
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"]]
        })
    ], TachesModule);
    return TachesModule;
}());



/***/ }),

/***/ "./src/app/@athena/taches/taches.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/@athena/taches/taches.routing.ts ***!
  \**************************************************/
/*! exports provided: TableRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRoutes", function() { return TableRoutes; });
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list.component */ "./src/app/@athena/taches/list/list.component.ts");

var TableRoutes = [
    {
        path: '',
        children: [{
                path: 'taches',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"],
                data: {
                    title: 'Gestion des taches'
                }
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=athena-taches-taches-module.js.map