import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FirebaseModelPage } from './firebase-model/firebase-model.page';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.page.html',
  styleUrls: ['./firebase.page.scss'],
})
export class FirebasePage implements OnInit {
  public userList: Array<any> = [];
  constructor(private activatedRouter: ActivatedRoute,
    private modalCtrl: ModalController,
    private toastContoller: ToastController,
    private firebaseService: FirebaseService) {
    this.getUsers();
  }

  ngOnInit() { }

  updateUser(user) {
    this.modalCtrl.create({
      component: FirebaseModelPage,
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
    this.firebaseService.getUsers().then((data: any) => {
      this.userList = data;
    }, err => {
      console.error(err);
    })
  }

  deleteUser(id) {
    this.firebaseService.deleteUser(id).then(async () => {
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
