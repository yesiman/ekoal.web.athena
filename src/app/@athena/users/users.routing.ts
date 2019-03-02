import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

export const TableRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'users',
      component: ListComponent,
      data: {
        title: 'Gestion des utilisateurs'
      }
    }]
  }
];