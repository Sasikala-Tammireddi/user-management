import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { FirebaseModelPage } from '../firebase/firebase-model/firebase-model.page';
import { SqliteModelPageModule } from '../sqlite/sqlite-model/sqlite-model.module';
import { SqliteModelPage } from '../sqlite/sqlite-model/sqlite-model.page';
@Component({
  selector: 'app-http',
  templateUrl: './http.page.html',
  styleUrls: ['./http.page.scss'],
})
export class HttpPage implements OnInit {
  public jsonPlaceholderUrl: string = "https://jsonplaceholder.typicode.com/users"
  public userList: Array<any> = [];
  constructor(public http: HttpClient, private modalCtrl: ModalController) {
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
    this.http.get(this.jsonPlaceholderUrl).subscribe((data: any) => {
      this.userList = data;
    }, err => {
      console.error('Error in getData', err);
    })
  }

  async addToSQLite(userToAdd) {
    const modal = await this.modalCtrl.create({
      component: SqliteModelPage,
      componentProps: {
        user: userToAdd
      }
    });
    await modal.present();
    modal.onDidDismiss().then(() => {
      this.getData();
    })
  }


  async addToFirebase(userToAdd) {
    const modal = await this.modalCtrl.create({
      component: FirebaseModelPage,
      componentProps: {
        user: userToAdd
      }
    });
    modal.present();
  }
}
