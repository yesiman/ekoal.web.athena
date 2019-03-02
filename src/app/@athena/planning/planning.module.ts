//Angular Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Router


//Router
import { TableRoutes } from './planning.routing';

//Core Pages Layout Components
import { SharedModule } from '../../@pages/components/shared.module';

//Thirdparty Dependencies - table and model
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap';
import { pgDatePickerModule } from '../../@pages/components/datepicker/datepicker.module';
import { pgSwitchModule } from '../../@pages/components/switch/switch.module';
import { pgSelectModule} from '../../@pages/components/select/select.module';

//Thirdparty Treeview component

import { TreeModule } from 'angular-tree-component';
//Thirdparty Treeview component
//Demo Pages
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { pgTabsModule } from '../../@pages/components/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(TableRoutes),
    SharedModule,
    NgxDatatableModule,
    ModalModule,
    pgSelectModule,pgDatePickerModule,pgSwitchModule,
    TreeModule,
    pgTabsModule
  ],
  declarations: [ListComponent,ItemComponent]
})
export class PlanningModule { }
