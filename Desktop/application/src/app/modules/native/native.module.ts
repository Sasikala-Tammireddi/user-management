import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite
  ]
})
export class NativeModule { }
