import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlitePageRoutingModule } from './sqlite-routing.module';

import { SqlitePage } from './sqlite.page';
import { SqliteModelPageModule } from './sqlite-model/sqlite-model.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlitePageRoutingModule,
    SqliteModelPageModule,
  ],
  declarations: [SqlitePage]
})
export class SqlitePageModule { }
