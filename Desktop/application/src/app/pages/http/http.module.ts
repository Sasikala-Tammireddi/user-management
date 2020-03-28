import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpPageRoutingModule } from './http-routing.module';

import { HttpPage } from './http.page';
import { FirebaseModelPageModule } from '../firebase/firebase-model/firebase-model.module';
import { SqliteModelPageModule } from '../sqlite/sqlite-model/sqlite-model.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpPageRoutingModule,
    FirebaseModelPageModule,
    SqliteModelPageModule
  ],
  declarations: [HttpPage]
})
export class HttpPageModule {}
