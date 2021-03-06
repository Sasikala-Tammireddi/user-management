import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebasePage } from './firebase.page';

const routes: Routes = [
  {
    path: '',
    component: FirebasePage
  },
  {
    path: 'firebase-model',
    loadChildren: () => import('./firebase-model/firebase-model.module').then( m => m.FirebaseModelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebasePageRoutingModule {}
