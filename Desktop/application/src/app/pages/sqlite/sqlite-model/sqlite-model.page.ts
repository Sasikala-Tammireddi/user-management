import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController, ModalController, NavParams } from '@ionic/angular';
import { SqliteService } from 'src/app/services/sqlite.service';

@Component({
  selector: 'app-sqlite-model',
  templateUrl: './sqlite-model.page.html',
  styleUrls: ['./sqlite-model.page.scss'],
})
export class SqliteModelPage implements OnInit {
  // @Input() public user: any;
  // @Input() public isUpdate: boolean;
  public user: any;
  public isUpdate: boolean;
  public userForm: FormGroup;
  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private SQLiteService: SqliteService,
    private navParams: NavParams
  ) {
    this.user = this.navParams.get("user") || {}
    this.isUpdate = this.navParams.get("isUpdate") || false;
    this.createForm();
  }
  ngOnInit() {

  }

  createForm() {
    this.userForm = this.formBuilder.group({
      id: new FormControl('', Validators.required),
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
    this.SQLiteService.addUser(userFormValues).then(
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
    this.SQLiteService.updateUser(userFormValues).then(
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
