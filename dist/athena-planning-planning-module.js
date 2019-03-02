(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["athena-planning-planning-module"],{

/***/ "./src/app/@athena/planning/item/item.component.html":
/*!***********************************************************!*\
  !*** ./src/app/@athena/planning/item/item.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #addNewAppModal=\"bs-modal\" class=\"modal fade stick-up\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addNewAppModal\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header clearfix \">\n        <button type=\"button\" class=\"close\" (click)=\"addNewAppModal.hide()\" aria-hidden=\"true\"><i class=\"pg pg-close fs-14\"></i>\n        </button>\n        <h4 class=\"p-b-5\"><span class=\"semi-bold\">Affectation</span> temps</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form role=\"form\" autocomplete=\"off\" #basicForm=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group form-group-default form-group-default-select2 required\" [class.has-error]=\"modalAppName.invalid && (modalAppName.dirty || modalAppName.touched)\" >\n            \n              <label>Ressource </label>\n              <pg-select #modalAppName=\"ngModel\" style=\"width: 100%;\"\n                [PlaceHolder]=\"'Select'\"\n                [(ngModel)]=\"rja.colab\"\n                [NotFoundContent]=\"'Not found'\" \n                name=\"collab\" required>\n                \n                <pg-option\n                  *ngFor=\"let option of users\" \n                  [Label]=\"option.label\"\n                  [Value]=\"option.value\">\n                </pg-option>\n              </pg-select>\n            </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group form-group-default form-group-default-select2 required\" [class.has-error]=\"modalAppName.invalid && (modalAppName.dirty || modalAppName.touched)\" >\n            \n              <label>Tache </label>\n              <pg-select #modalAppName=\"ngModel\" style=\"width: 100%;\"\n                [PlaceHolder]=\"'Select'\"\n                [(ngModel)]=\"rja.tache\"\n                [NotFoundContent]=\"'Not found'\" \n                name=\"tache\" required>\n                \n                <pg-option\n                  *ngFor=\"let option of taches\" \n                  [Label]=\"option.label\"\n                  [Value]=\"option.value\">\n                </pg-option>\n              </pg-select>\n            </div>\n            </div>\n          </div>\n          \n          <!--<div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppName.invalid && (modalAppName.dirty || modalAppName.touched)\" >\n                  <label>Mot de passe</label>\n                  <input type=\"Password\" class=\"form-control\" id=\"userPass\" name=\"userPass\" [(ngModel)]=\"user.password\"  #modalAppName=\"ngModel\" required>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group form-group-default form-group-default-select2 required\">\n                <label class=\"\">Qualification</label>\n                <pg-select style=\"width: 100%;\" [(ngModel)]=\"user.qualif\"  name=\"userQualif\" [PlaceHolder]=\"'Sélection'\"  #modalAppName=\"ngModel\" AllowClear ShowSearch>\n                   \n                  <pg-option [Label]=\"'Direction'\" [Value]=\"'dir'\"></pg-option>\n                  <pg-option [Label]=\"'Technicien'\" [Value]=\"'tech'\"></pg-option>\n                  <pg-option [Label]=\"'Ouvrier spécialisé'\" [Value]=\"'os'\"></pg-option>\n                  <pg-option [Label]=\"'Manoeuvre'\" [Value]=\"'man'\"></pg-option>\n                  </pg-select>\n              </div>\n            </div>\n          </div>-->\n          <!--<div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"checkbox \">\n                  <input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\n                  <label for=\"checkbox1\">Actif</label>\n                </div>\n              </div>\n          </div>-->\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button id=\"add-app\" type=\"button\" class=\"btn btn-primary  btn-cons\" (click)=\"!basicForm.invalid && validRja()\" [class.disabled]=\"basicForm.invalid\" >Ajouter</button>\n        <button type=\"button\" class=\"btn btn-cons\" (click)=\"addNewAppModal.hide()\">Annuler</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n\n<div class=\"jumbotron\">\n    <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n       <div class=\"inner\" pg-parallax>\n         <!-- START BREADCRUMB -->\n         <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" [routerLink]=\"'/dashboard'\">Accueil</a></li>\n            <li class=\"breadcrumb-item active\">Planning</li>\n          </ol>\n         <!-- END BREADCRUMB --> \n         \n       </div>\n\n     </pg-container>\n   </div>\n\n\n<pg-container extraClass=\"bg-white\" extraHorizontalClass=\"bg-white\">\n\n    <pg-tabset tabAnimation=\"slide-left\" Type=\"simple\" ShowPagination=\"true\">\n        <pg-tab>\n          <ng-template #TabHeading>\n            Informations principales\n          </ng-template>\n          <div class=\"card card-transparent\">\n              <div class=\"card-body\">\n                <form id=\"form-project\" role=\"form\" autocomplete=\"off\">\n                  <p>Basic Information</p>\n                  <div class=\"form-group\">\n                    <div  class=\"form-group form-group-default required\" >\n                      <label>Nom de l'affaire</label>\n                      <input type=\"text\"  [(ngModel)]=\"planning.name\" class=\"form-control\" name=\"planningName\" >\n                    </div>\n                    <div class=\"row clearfix\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group form-group-default required\">\n                          <label>Date début</label>\n                          <pg-datepicker  [ngModel]=\"planning.start.seconds*1000  | date:'MM-dd-yyyy'\"  (ngModelChange)=\"planning.start=$event\" name=\"planningStart\"></pg-datepicker>\n                          \n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group form-group-default\">\n                          <label>Date fin</label>\n                          <pg-datepicker  [ngModel]=\"planning.ended.seconds*1000  | date:'MM-dd-yyyy'\"  (ngModelChange)=\"planning.ended=$event\" format=\"dd/MM/yyyy\" [(ngModel)]=\"planning.ended\" name=\"planningEnd\"></pg-datepicker>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row clearfix\">\n                        <div class=\"col-md-12\">\n                          <div  class=\"form-group form-group-default input-group\">\n                            <div class=\"form-input-group\">\n                              <label>Budget</label>\n                              <input type=\"text\" class=\"form-control eur\"  name=\"planningBudget\" [(ngModel)]=\"planning.budget\" >\n                            </div>\n                            <div class=\"input-group-append \">\n                                <span class=\"input-group-text\">EUR\n                                </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  <br>\n                  <button class=\"btn btn-success\" (click)=\"valid()\" >Valider</button>&nbsp;\n                  <button class=\"btn btn-default\"><i class=\"pg pg-close\"></i> Annuler</button>\n                </form>\n              </div>\n            </div>\n    \n        </pg-tab>\n        <pg-tab>\n          <ng-template #TabHeading>\n            Tranches\n          </ng-template>\n    \n          <div class=\"row\">\n              <div class=\"col-xl-12 col-lg-12 \">\n                <!-- START card -->\n                <div class=\"card card-transparent\">\n                  <div class=\"card-header \">\n                      <div class=\"\">\n                          <div class=\"pull-left\">\n                            <h2 class=\"text-success no-margin v-align-middle\" style=\"color:#f55753 !important;\">Gestion des tranches de l'affaire</h2>\n                          </div>\n                          <div class=\"pull-right\">\n                                  <a href=\"javascript:void(0)\" (click)=\"addTranche()\" class=\"block m-t-15 v-align-middle\">\n                                    <img src=\"assets/img/plus.svg\">\n                                  </a>\n                          </div>\n                          <div class=\"clearfix\"></div>\n                        </div>\n                  </div>\n                  <div class=\"card-body mtree\">\n                      <tree-root [nodes]=\"simpleNodes\" (activate)=\"onNodeSelect($event)\" [options]=\"options\" class=\"tree-wrapper bold-node-text level1-document-icon-only m-b-20\"></tree-root>\n                  </div>\n                </div>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-xl-6 col-lg-6 \">\n                <!-- START card -->\n                <div class=\"card card-transparent\" [hidden]=\"!formVisible\">\n                  <div class=\"card-body\">\n                      <form id=\"form-project\" role=\"form\" autocomplete=\"off\">\n                          <p>Informations principales</p>\n                          <div class=\"form-group\">\n                            <div  class=\"form-group form-group-default required\" >\n                              <label>Nom de la tranche</label>\n                              <input type=\"text\"  [(ngModel)]=\"tranche.name\" class=\"form-control\" name=\"trancheName\" >\n                            </div>\n                            <div class=\"row clearfix\">\n                              <div class=\"col-md-6\">\n                                <div class=\"form-group form-group-default required\">\n                                  <label>Date de début</label>\n                                  <pg-datepicker [(ngModel)]=\"tranche.start\" name=\"trancheStart\"></pg-datepicker>\n                                  \n                                </div>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <div class=\"form-group form-group-default\">\n                                  <label>Date de fin</label>\n                                  <pg-datepicker  [(ngModel)]=\"tranche.ended\" name=\"trancheEnd\"></pg-datepicker>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row clearfix\">\n                                <div class=\"col-md-12\">\n                                  <div  class=\"form-group form-group-default input-group\">\n                                    <div class=\"form-input-group\">\n                                      <label>Budget</label>\n                                      <input type=\"text\" class=\"form-control eur\"  name=\"trancheBudget\" [(ngModel)]=\"tranche.budget\" >\n                                    </div>\n                                    <div class=\"input-group-append \">\n                                        <span class=\"input-group-text\">EUR\n                                        </span>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div  class=\"form-group form-group-default required\" >\n                                <label>Notes</label>\n                                <textarea [(ngModel)]=\"tranche.notes\" rows=\"5\" class=\"form-control\" name=\"trancheNotes\"></textarea>\n                              </div>\n                          <br>\n                          <button class=\"btn btn-success\" (click)=\"validTranche()\" >Valider</button>&nbsp;\n                          <button class=\"btn btn-default\"><i class=\"pg pg-close\"></i> Annuler</button>\n                        </form>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n              <div class=\"col-xl-6 col-lg-6 \">\n                <!-- START card -->\n                <div class=\"card card-transparent\" [hidden]=\"!formVisible\">\n                  <div class=\"card-body\">\n                      <form id=\"form-project\" role=\"form\" autocomplete=\"off\">\n                          <p>RJA</p>\n                          <div class=\"pull-right\">\n                            <a href=\"javascript:void(0)\" (click)=\"addRja()\" class=\"block m-t-15 v-align-middle\">\n                              <img src=\"assets/img/plus.svg\">\n                            </a>\n                    </div>\n                          <div class=\"card-body\">\n                            <div class=\"table-responsive\">\n                                <ngx-datatable\n                                class='table table-hover table-stripped'\n                                [rows]=\"tranche.rjas\"\n                                [columnMode]=\"columnModeSettingSmall\"\n                                [scrollbarH]=\"scrollBarHorizontal\"\n                                [headerHeight]=\"43\"\n                                [footerHeight]=\"0\"\n                                [rowHeight]=\"'auto'\"\n                                [limit]=\"5\"\n                                [sorts]=\"[{prop: 'title', dir: 'asc'}]\">\n                                <ngx-datatable-column name=\"Tache\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Ressource\" cellClass=\"d-flex align-items-center\">\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <a href=\"javascript:;\" *ngFor=\"let value of row.places\" class=\"btn btn-tag\">{{value}}</a>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column name=\"Nb heures\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                              </ngx-datatable>\n                            </div>\n                          </div>\n                      </form>\n                  </div>\n                </div>\n                <!-- END card -->\n              </div>\n            </div>\n        </pg-tab>\n      </pg-tabset>\n\n    <div class=\"row\">\n    \n      <div class=\"col-md-12\">\n        <!-- START card \n        <div class=\"card card-transparent\">\n          <div class=\"card-body\">\n            <form id=\"form-project\" role=\"form\" autocomplete=\"off\">\n              <p>Basic Information</p>\n              <div class=\"form-group\">\n                <div  class=\"form-group form-group-default required\" >\n                  <label>Nom de l'affaire</label>\n                  <input type=\"text\"  [(ngModel)]=\"planning.name\" class=\"form-control\" name=\"planningName\" >\n                </div>\n                <div class=\"row clearfix\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group form-group-default required\">\n                      <label>Starting date</label>\n                      <pg-datepicker [(ngModel)]=\"planning.start\" name=\"planningStart\"></pg-datepicker>\n                      \n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group form-group-default\">\n                      <label>Deadline</label>\n                      <pg-datepicker  [(ngModel)]=\"planning.ended\" name=\"planningEnd\"></pg-datepicker>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-12\">\n                      <div  class=\"form-group form-group-default input-group\">\n                        <div class=\"form-input-group\">\n                          <label>Budget</label>\n                          <input type=\"text\" class=\"form-control eur\"  name=\"planningBudget\" [(ngModel)]=\"planning.budget\" >\n                        </div>\n                        <div class=\"input-group-append \">\n                            <span class=\"input-group-text\">EUR\n                            </span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              <br>\n              <button class=\"btn btn-success\" (click)=\"valid()\" >Submit</button>&nbsp;\n              <button class=\"btn btn-default\"><i class=\"pg pg-close\"></i> Clear</button>\n            </form>\n          </div>\n        </div>\n         END card -->\n      </div>\n    </div>\n\n\n  </pg-container>\n\n  <pg-container extraClass=\"bg-white\" extraHorizontalClass=\"bg-white\">\n      \n      \n  \n    </pg-container>"

/***/ }),

/***/ "./src/app/@athena/planning/item/item.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/@athena/planning/item/item.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-planning-item .mtree .node-wrapper {\n  border: 1px solid #000 !important; }\n"

/***/ }),

/***/ "./src/app/@athena/planning/item/item.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/@athena/planning/item/item.component.ts ***!
  \*********************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_modal_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/modal.directive */ "./node_modules/ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemComponent = /** @class */ (function () {
    function ItemComponent(afs, afAuth, fb, route, router) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.planning = {};
        this.formVisible = false;
        this.tranche = {};
        this.rja = {};
        this.users = [];
        this.taches = [];
        this.simpleNodes = [];
        this.options = {
            animateExpand: true,
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
        this.nodeSelected = null;
        this.selected = [];
        this.expanded = {};
        this.route.params.subscribe(function (params) {
            _this.itemDoc = afs.doc('/plannings/' + params.uid);
            _this.item = _this.itemDoc.valueChanges();
            _this.item.subscribe(function (data) {
                data.id = params.uid;
                _this.loadData(data);
            });
        });
        window.onresize = function () {
            _this.scrollBarHorizontal = (window.innerWidth < 960);
            _this.columnModeSetting = (window.innerWidth < 960) ? 'standard' : 'force';
            _this.columnModeSettingSmall = (window.innerWidth < 560) ? 'standard' : 'force';
        };
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsUsersCollection = this.afs.collection('users');
        this.itemsUsers = this.itemsUsersCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        this.itemsUsers.subscribe(function (data) {
            for (var o in data) {
                _this.users.push({ value: data[o].id.toString(), label: data[o].nom + " " + data[o].prenom });
            }
        });
        this.itemsTachesCollection = this.afs.collection('taches');
        this.itemsTaches = this.itemsTachesCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        this.itemsTaches.subscribe(function (data) {
            for (var o in data) {
                _this.taches.push({ value: data[o].id.toString(), label: data[o].nom });
            }
        });
    };
    ItemComponent.prototype.loadTranches = function (tranches) {
        this.simpleNodes = [{
                id: "k",
                name: "tranches"
            }];
        if (this.planning.tranches) {
            this.loadTranchesRecur(this.planning.tranches, "k", this.simpleNodes[0]);
        }
    };
    ItemComponent.prototype.loadTranchesRecur = function (tranches, id, parent) {
        for (var i = 0; i < tranches.length; i++) {
            tranches[i].key = tranches[i].id = id + i;
            if (tranches[i].children) {
                this.loadTranchesRecur(tranches[i].children, tranches[i].key, tranches[i]);
            }
        }
        parent.children = tranches;
    };
    ItemComponent.prototype.setTranchesRecur = function (id, tranches) {
        for (var i = 0; i < tranches.length; i++) {
            if (tranches[i].id.toString() == id.toString()) {
                if (this.tranche.id) {
                    tranches[i] = this.tranche;
                }
                else {
                    if (!tranches[i].children) {
                        tranches[i].children = [];
                    }
                    tranches[i].children.push(this.tranche);
                }
                return tranches[i];
            }
            else {
                if (tranches[i].children) {
                    var ch = this.setTranchesRecur(id, tranches[i].children);
                    if (ch != null) {
                        ch = this.tranche;
                        return ch;
                    }
                }
            }
        }
        return null;
    };
    ItemComponent.prototype.getTranchesRecur = function (id, tranches) {
        for (var i = 0; i < tranches.length; i++) {
            if (tranches[i].id.toString() == id.toString()) {
                return tranches[i];
            }
            else {
                if (tranches[i].children) {
                    var ch = this.getTranchesRecur(id, tranches[i].children);
                    if (ch != null) {
                        return ch;
                    }
                }
            }
        }
        return null;
    };
    ItemComponent.prototype.loadData = function (data) {
        this.planning = data;
        this.loadTranches(this.planning.tranches);
    };
    ItemComponent.prototype.addRja = function () {
        this.addNewAppModal.show();
    };
    ItemComponent.prototype.addTranche = function () {
        this.formVisible = true;
        this.tranche = {};
        //this.simpleNodes.push({ id:999999,name: 'another node' });
        //this.tree.treeModel.update();
    };
    ItemComponent.prototype.onNodeSelect = function (ev) {
        if (ev.node.data.id != "k") {
            this.formVisible = true;
            this.tranche = Object.assign({}, this.getTranchesRecur(ev.node.data.id, this.planning.tranches));
            this.nodeSelected = this.tranche.id;
        }
        else {
            this.formVisible = false;
        }
        /*for (var i =0;i <  this.planning.tranches.length;i++)
        {
          if (this.planning.tranches[i].id == ev.node.data.id)
          {
            this.nodeSelected = ev.node.data.id;
            //alert("ui");
            this.tranche = Object.assign({}, this.planning.tranches[i]);
          }
        }*/
    };
    ItemComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    ItemComponent.prototype.onActivate = function (event) {
    };
    ItemComponent.prototype.fetch = function (cb) {
        this.itemsCollection = this.afs.collection('users');
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
                adata.push(data[o]);
            }
            cb(adata);
        });
    };
    ItemComponent.prototype.toggleExpandRow = function (row) {
        this.expTable.rowDetail.toggleExpandRow(row);
    };
    ItemComponent.prototype.showModal = function (user) {
        if (!user) {
            user = { contacts: {} };
        }
        //this.user = user;
        //this.addNewAppModal.show();
    };
    ItemComponent.prototype.addRow = function () {
        //(this.user.id) ? this.updateUser() : this.addUser();
        //this.addNewAppModal.hide();
    };
    ItemComponent.prototype.detail = function (row) {
        //this.addNewAppModal.hide();
        this.showModal(row);
    };
    ItemComponent.prototype.onDetailToggle = function (event) {
    };
    ItemComponent.prototype.valid = function () {
        //alert("add");
        (this.planning.id) ? this.updatePlanning() : this.addPlanning();
        this.router.navigateByUrl('executive/plannings/list');
    };
    ItemComponent.prototype.addPlanning = function () {
        this.itemsCollection = this.afs.collection('plannings');
        console.log(this.planning.start);
        console.log(this.planning.ended);
        this.itemsCollection.add(this.planning);
    };
    ItemComponent.prototype.validRja = function () {
        if (!this.tranche.rjas) {
            this.tranche.rjas = [];
        }
        this.tranche.rjas.push(this.rja);
    };
    ItemComponent.prototype.validTranche = function () {
        //alert("add");
        if (!this.planning.tranches) {
            this.planning.tranches = [];
        }
        if (this.tranche.id) {
            var t = this.setTranchesRecur(this.tranche.id, this.planning.tranches);
            t = this.tranche;
        }
        else {
            if (this.nodeSelected) {
                //alert(this.nodeSelected);
                var t = this.setTranchesRecur(this.nodeSelected, this.planning.tranches);
                //if (!t.children)
                //{
                //  t.children = [];
                //}
                //t.children.push(this.tranche);
            }
            else {
                this.planning.tranches.push(this.tranche);
            }
        }
        this.loadTranches(this.planning.tranches);
        this.formVisible = false;
        (this.planning.id) ? this.updatePlanning() : this.addPlanning();
        //return this.http.post(this.url, user);
    };
    ItemComponent.prototype.updatePlanning = function () {
        var uid = this.planning.id;
        this.itemsCollection = this.afs.collection('plannings');
        delete this.planning.id;
        return this.itemsCollection.doc(uid).update(this.planning);
    };
    ItemComponent.prototype.deleteUser = function (id) {
        this.itemsCollection = this.afs.collection('users');
        return this.itemsCollection.doc(id).delete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addNewAppModal'),
        __metadata("design:type", ngx_bootstrap_modal_modal_directive__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ItemComponent.prototype, "addNewAppModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeComponent"]),
        __metadata("design:type", angular_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeComponent"])
    ], ItemComponent.prototype, "tree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expTable'),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "expTable", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planning-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/@athena/planning/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/@athena/planning/item/item.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/@athena/planning/list/list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/@athena/planning/list/list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #smSlideUp=\"bs-modal\" class=\"modal fade slide-up disable-scroll\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"false\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content-wrapper\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-center m-t-20\">\n          <h4 class=\"no-margin p-b-10\">Êtes vous sur de vouloir supprimer cet enregistrement ?</h4>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary btn-cons\" (click)=\"removeRowValid()\">Valider</button>\n          <button type=\"button\" class=\"btn btn-cons\" (click)=\"smSlideUp.hide()\">Annuler</button>\n        </div>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n</div>\n<div bsModal #addNewAppModal=\"bs-modal\" class=\"modal fade stick-up\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addNewAppModal\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header clearfix \">\n        <button type=\"button\" class=\"close\" (click)=\"addNewAppModal.hide()\" aria-hidden=\"true\"><i class=\"pg pg-close fs-14\"></i>\n        </button>\n        <h4 class=\"p-b-5\"><span class=\"semi-bold\">Nouvel</span> Utilisateur</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p class=\"small-text\">Create a new app using this form, make sure you fill them all</p>\n        <form role=\"form\" autocomplete=\"off\" #basicForm=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppName.invalid && (modalAppName.dirty || modalAppName.touched)\" >\n                  <label>Nom</label>\n                  <input type=\"text\" class=\"form-control\" id=\"userNom\" name=\"userNom\" [(ngModel)]=\"user.nom\"  #modalAppName=\"ngModel\" required>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\"> \n              <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppName.invalid && (modalAppName.dirty || modalAppName.touched)\" >\n                  <label>Prénom</label>\n                  <input type=\"text\" class=\"form-control\" id=\"userPrenom\" name=\"userPrenom\" [(ngModel)]=\"user.prenom\"  #modalAppName=\"ngModel\" required>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppName.invalid && (modalAppName.dirty || modalAppName.touched)\" >\n                  <label>Adresse email</label>\n                  <input type=\"mail\" class=\"form-control\" id=\"userEmail\" name=\"userEmail\" [(ngModel)]=\"user.contacts.email\"  #modalAppName=\"ngModel\" required>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppName.invalid && (modalAppName.dirty || modalAppName.touched)\" >\n                  <label>Numéro GSM</label>\n                  <input type=\"text\" class=\"form-control\" id=\"userPhone\" name=\"userPhone\" [(ngModel)]=\"user.contacts.phone\"  #modalAppName=\"ngModel\" required>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group form-group-default required\" [class.has-error]=\"modalAppName.invalid && (modalAppName.dirty || modalAppName.touched)\" >\n                  <label>Mot de passe</label>\n                  <input type=\"Password\" class=\"form-control\" id=\"userPass\" name=\"userPass\" [(ngModel)]=\"user.password\"  #modalAppName=\"ngModel\" required>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group form-group-default form-group-default-select2 required\">\n                <label class=\"\">Qualification</label>\n                <pg-select style=\"width: 100%;\"  [PlaceHolder]=\"'Sélection'\" AllowClear ShowSearch>\n                   <!--\n                     [(ngModel)]=\"selectedOption\" <pg-option\n                    *ngFor=\"let option of options\"\n                    [Label]=\"option.label\"\n                    [Value]=\"option\"\n                    [Disabled]=\"option.disabled\">\n                  </pg-option>-->\n                  <pg-option [Label]=\"'Direction'\" [Value]=\"'dir'\"></pg-option>\n                  <pg-option [Label]=\"'Technicien'\" [Value]=\"'tech'\"></pg-option>\n                  <pg-option [Label]=\"'Ouvrier spécialisé'\" [Value]=\"'os'\"></pg-option>\n                  <pg-option [Label]=\"'Manoeuvre'\" [Value]=\"'man'\"></pg-option>\n                  </pg-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"checkbox \">\n                  <input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\n                  <label for=\"checkbox1\">Actif</label>\n                </div>\n              </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button id=\"add-app\" type=\"button\" class=\"btn btn-primary  btn-cons\" (click)=\"!basicForm.invalid && addRow()\" [class.disabled]=\"basicForm.invalid\" >Add</button>\n        <button type=\"button\" class=\"btn btn-cons\" (click)=\"addNewAppModal.hide()\">Close</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n       <!-- START JUMBOTRON -->\n       <div class=\"jumbotron\">\n       <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n          <div class=\"inner\" pg-parallax>\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\" [routerLink]=\"'/dashboard'\">Accueil</a></li>\n                <li class=\"breadcrumb-item active\">Plannings</li>\n              </ol>\n            <!-- END BREADCRUMB --> \n            \n          </div>\n\n        </pg-container>\n      </div>\n      <!-- END JUMBOTRON -->\n      <!-- START CONTAINER FLUID -->\n      <pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n        <!-- START card -->\n        <div class=\"card card-transparent\">\n          <div class=\"card-header \">\n            <div class=\"card-title\">Liste des plannings de production\n            </div>\n            <div class=\"pull-right\">\n              <div class=\"col-xs-12\">\n                <button (click)=\"showPlanning()\"  class=\"btn btn-primary btn-cons\"><i class=\"fa fa-plus\"></i> Nouveau\n                </button>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                <ngx-datatable\n                class='table table-hover'\n                [rows]=\"basic_table_data\"\n                [columnMode]=\"columnModeSetting\"\n                [headerHeight]=\"43\"\n                [footerHeight]=\"50\"\n                [rowHeight]=\"'auto'\"\n                [selected]=\"selected\"\n                [selectionType]=\"'checkbox'\"\n                [scrollbarH]=\"scrollBarHorizontal\"\n                (activate)=\"onActivate($event)\"\n                (select)='onSelect($event)'>\n                <ngx-datatable-column name=\"Libellé\" prop=\"name\" value=\"value\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Budget global\" prop=\"budget\" value=\"value\" cellClass=\"d-flex align-items-center\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Date début\" prop=\"start\" value=\"value'\" cellClass=\"d-flex align-items-center\">\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        {{value.seconds * 1000 | date:'dd/MM/yyyy'}}\n                      </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Date fin\" value=\"value\" prop=\"ended\" cellClass=\"d-flex align-items-center\">\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        {{value.seconds * 1000 | date:'dd/MM/yyyy'}}\n                      </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"id\" >\n                  <ng-template let-column=\"column\" ngx-datatable-header-template>\n                      actions\n                  </ng-template>\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                      <button class=\"btn btn-primary\" (click)=\"showPlanning(row)\" type=\"button\"><i class=\"fa fa-edit\" ></i>\n                      </button>\n                      <button class=\"btn btn-danger\" (click)=\"removeRow(row.id)\" type=\"button\"><i class=\"fa fa-trash\"></i>\n                      </button>\n                      \n                  </ng-template>\n              </ngx-datatable-column>\n              </ngx-datatable>\n            </div>\n          </div>\n        </div>\n        <!-- END card -->\n      </pg-container>\n      <!-- END CONTAINER FLUID -->\n      "

/***/ }),

/***/ "./src/app/@athena/planning/list/list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/@athena/planning/list/list.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/@athena/planning/list/list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/@athena/planning/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_modal_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/modal.directive */ "./node_modules/ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ListComponent(afs, afAuth, router) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.user = {
            contacts: {}
        };
        this.tableColums = [
            { name: 'Libellé', prop: 'name' },
        ];
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
        this.idToRemove = "-1";
        this.expanded = {};
        this.fetch(function (data) {
            console.log("valuebtd", data);
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
    ListComponent.prototype.removeRow = function (id) {
        this.idToRemove = id;
        this.smSlideUp.show();
    };
    ListComponent.prototype.removeRowValid = function () {
        this.itemsCollection.doc(this.idToRemove).delete();
        this.smSlideUp.hide();
    };
    ListComponent.prototype.fetch = function (cb) {
        this.itemsCollection = this.afs.collection('plannings');
        this.items = this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                console.log("??", data);
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
    ListComponent.prototype.showPlanning = function (plan) {
        this.router.navigateByUrl('executive/plannings/edit/' + (plan ? plan.id : ""));
        //if (!user)
        //{
        //    user = {contacts:{}}
        //}
        //this.user = user;
        //this.addNewAppModal.show();
    };
    ListComponent.prototype.addRow = function () {
        (this.user.id) ? this.updateUser() : this.addUser();
        this.addNewAppModal.hide();
    };
    ListComponent.prototype.detail = function (row) {
        this.addNewAppModal.hide();
        //this.showModal(row);
    };
    ListComponent.prototype.onDetailToggle = function (event) {
    };
    ListComponent.prototype.addUser = function () {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(this.user.contacts.email, this.user.password).then(function (value) {
            _this.user.uid = value.user.uid;
            _this.itemsCollection = _this.afs.collection('plannings');
            return _this.itemsCollection.doc(_this.user.uid).set(_this.user);
        }).catch(function (error) {
            _this.itemsCollection = _this.afs.collection('plannings');
            return _this.itemsCollection.add(_this.user);
        });
        //return this.http.post(this.url, user);
    };
    ListComponent.prototype.updateUser = function () {
        var uid = this.user.id;
        this.itemsCollection = this.afs.collection('plannings');
        delete this.user.id;
        return this.itemsCollection.doc(uid).update(this.user);
    };
    ListComponent.prototype.deleteUser = function (id) {
        this.itemsCollection = this.afs.collection('plannings');
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
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/@athena/planning/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/@athena/planning/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/@athena/planning/planning.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/@athena/planning/planning.module.ts ***!
  \*****************************************************/
/*! exports provided: PlanningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningModule", function() { return PlanningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _planning_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planning.routing */ "./src/app/@athena/planning/planning.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _pages_components_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@pages/components/datepicker/datepicker.module */ "./src/app/@pages/components/datepicker/datepicker.module.ts");
/* harmony import */ var _pages_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@pages/components/switch/switch.module */ "./src/app/@pages/components/switch/switch.module.ts");
/* harmony import */ var _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@pages/components/select/select.module */ "./src/app/@pages/components/select/select.module.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list/list.component */ "./src/app/@athena/planning/list/list.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item/item.component */ "./src/app/@athena/planning/item/item.component.ts");
/* harmony import */ var _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@pages/components/tabs/tabs.module */ "./src/app/@pages/components/tabs/tabs.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular Dependencies




//Router
//Router

//Core Pages Layout Components

//Thirdparty Dependencies - table and model





//Thirdparty Treeview component

//Thirdparty Treeview component
//Demo Pages



var PlanningModule = /** @class */ (function () {
    function PlanningModule() {
    }
    PlanningModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_planning_routing__WEBPACK_IMPORTED_MODULE_4__["TableRoutes"]),
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_10__["pgSelectModule"], _pages_components_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_8__["pgDatePickerModule"], _pages_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_9__["pgSwitchModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_11__["TreeModule"],
                _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_14__["pgTabsModule"]
            ],
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_13__["ItemComponent"]]
        })
    ], PlanningModule);
    return PlanningModule;
}());



/***/ }),

/***/ "./src/app/@athena/planning/planning.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/@athena/planning/planning.routing.ts ***!
  \******************************************************/
/*! exports provided: TableRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRoutes", function() { return TableRoutes; });
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list.component */ "./src/app/@athena/planning/list/list.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item/item.component */ "./src/app/@athena/planning/item/item.component.ts");


var TableRoutes = [
    {
        path: '',
        children: [{
                path: 'list',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"],
                data: {
                    title: 'Planning de production'
                }
            },
            {
                path: 'edit/:uid',
                component: _item_item_component__WEBPACK_IMPORTED_MODULE_1__["ItemComponent"],
                data: {
                    title: 'Planning de production'
                }
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=athena-planning-planning-module.js.map