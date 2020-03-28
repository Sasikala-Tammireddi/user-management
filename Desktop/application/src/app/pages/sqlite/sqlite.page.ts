import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, Platform } from '@ionic/angular';
import { SqliteService } from 'src/app/services/sqlite.service';
import { SqliteModelPage } from './sqlite-model/sqlite-model.page';

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit {
  public userList: Array<any> = [];
  public isMobileDevice: boolean = true;
  constructor(
    private modalCtrl: ModalController,
    private toastContoller: ToastController,
    private SQLiteService: SqliteService,
    private platform: Platform
  ) {
    this.isMobileDevice = this.platform.is('cordova');
    this.getUsers();
  }

  ngOnInit() { }

  updateUser(user) {
    this.modalCtrl.create({
      component: SqliteModelPage,
      componentProps: {
        user: user,
        isUpdate: true
      }
    })
      .then(modalElement => {
        modalElement.present();
        modalElement.onDidDismiss().then(() => {
          this.getUsers();
        });
      });
  }

  getUsers() {
    this.SQLiteService.getUsers().then((data: any) => {
      this.userList = data;
    }, err => {
      console.error(err);
    })
  }

  deleteUser(id) {
    this.SQLiteService.deleteUser(id).then(async () => {
      const toast = await this.toastContoller.create({
        message: 'User deleted successfully',
        duration: 2000
      });
      toast.present();
      this.getUsers();
    }, err => {
      console.error(err);
    });
  }
}

