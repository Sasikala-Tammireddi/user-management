import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SqlitePage } from './sqlite.page';

const routes: Routes = [
  {
    path: '',
    component: SqlitePage
  },
  {
    path: 'sqlite-model',
    loadChildren: () => import('./sqlite-model/sqlite-model.module').then( m => m.SqliteModelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SqlitePageRoutingModule {}
