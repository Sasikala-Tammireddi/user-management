import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpPage } from './http.page';

const routes: Routes = [
  {
    path: '',
    component: HttpPage
  },
  {
    path: 'http-model',
    loadChildren: () => import('./http-model/http-model.module').then( m => m.HttpModelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpPageRoutingModule {}
