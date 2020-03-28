import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqliteModelPageRoutingModule } from './sqlite-model-routing.module';

import { SqliteModelPage } from './sqlite-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SqliteModelPageRoutingModule
  ],
  declarations: [SqliteModelPage]
})
export class SqliteModelPageModule {}
