import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebasePageRoutingModule } from './firebase-routing.module';

import { FirebasePage } from './firebase.page';
import { FirebaseModelPageModule } from './firebase-model/firebase-model.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebasePageRoutingModule,
    FirebaseModelPageModule
  ],
  declarations: [FirebasePage]
})
export class FirebasePageModule { }
