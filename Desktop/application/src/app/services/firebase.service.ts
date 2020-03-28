import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public userCollection: any;
  public userDatabase: any;
  constructor() {
    this.userDatabase = firebase.firestore;
    this.userCollection = this.userDatabase().collection('users');
  }

  addUser(userData) {
    return new Promise((resolve, reject) => {
      this.userCollection
        .doc(userData.id.toString())
        .set(userData)
        .then(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  updateUser(userData) {
    return new Promise((resolve, reject) => {
      this.userCollection
        .doc(userData.id.toString())
        .update(userData)
        .then(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.userCollection.get().then(
        (resp: any) => {
          const users: Array<any> = [];
          resp.forEach(element => {
            users.push(element.data())
          });
          resolve(users);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      this.userCollection
        .doc(`${id}`)
        .delete()
        .then(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
  }
}
