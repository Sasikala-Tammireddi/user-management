import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebaseModelPageRoutingModule } from './firebase-model-routing.module';

import { FirebaseModelPage } from './firebase-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FirebaseModelPageRoutingModule
  ],
  declarations: [FirebaseModelPage]
})
export class FirebaseModelPageModule {}
