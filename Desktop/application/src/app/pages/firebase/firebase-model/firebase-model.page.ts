import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController, ModalController, NavParams } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-firebase-model',
  templateUrl: './firebase-model.page.html',
  styleUrls: ['./firebase-model.page.scss'],
})
export class FirebaseModelPage implements OnInit {
  public user: any = {};
  public isUpdate: boolean;
  public userForm: FormGroup;
  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private firebaseService: FirebaseService
  ) {
    this.user = this.navParams.get("user")
    this.isUpdate = this.navParams.get("isUpdate");
    this.createForm();
  }
  ngOnInit() {

  }

  createForm() {
    this.userForm = this.formBuilder.group({
      id: new FormControl("", Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      address: new FormGroup({
        geo: new FormGroup({
          lat: new FormControl('', Validators.required),
          lng: new FormControl('', Validators.required),
        })
      }),
    });
    this.userForm.patchValue(this.user);
    this.userForm.get('id').disable({onlySelf: true});
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  onSubmit(userFormValues) {
    if (this.isUpdate) {
      this.updateUser(userFormValues);
    } else {
      this.addUser(userFormValues)
    }
  }

  addUser(userFormValues) {
    this.firebaseService.addUser(userFormValues).then(
      async (respFromAddUser) => {
        const toast = await this.toastController.create({
          message: 'User added Successfully.',
          duration: 2000
        });
        toast.present();
        this.dismissModal();
      },
      err => {
        console.error(err);
      }
    );
  }

  updateUser(userFormValues) {
    this.firebaseService.updateUser(userFormValues).then(
      async (respFromUpdateUser) => {
        const toast = await this.toastController.create({
          message: 'User updated Successfully.',
          duration: 2000
        });
        toast.present();
        this.dismissModal();
      },
      err => {
        console.error(err);
      }
    );
  }
}
