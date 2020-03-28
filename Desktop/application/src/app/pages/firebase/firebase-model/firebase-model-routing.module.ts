import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseModelPage } from './firebase-model.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseModelPageRoutingModule {}
