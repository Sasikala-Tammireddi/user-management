import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SqliteModelPage } from './sqlite-model.page';

const routes: Routes = [
  {
    path: '',
    component: SqliteModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SqliteModelPageRoutingModule {}
