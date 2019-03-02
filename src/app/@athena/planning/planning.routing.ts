import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

export const TableRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'list',
      component: ListComponent,
      data: {
        title: 'Planning de production'
      }
    },
    {
      path: 'edit/:uid',
      component: ItemComponent,
      data: {
        title: 'Planning de production'
      }
    }]
  }
];