import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpModelPage } from './http-model.page';

const routes: Routes = [
  {
    path: '',
    component: HttpModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpModelPageRoutingModule {}
