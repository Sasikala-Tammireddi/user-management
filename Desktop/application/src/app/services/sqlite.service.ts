import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  public databaseObj: SQLiteObject;
  public databasename = 'users.db';
  public tablename = 'users';

  constructor(private platform: Platform, private sqlite: SQLite) {
    this.platform
      .ready()
      .then(() => {
        this.createDB();
      })
      .catch(error => {
        console.log(error);
      });
  }

  createDB() {
    this.sqlite
      .create({
        name: this.databasename,
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
        console.log('Database created Successfully');
        this.createTable();
      })
      .catch(err => {
        alert(err);
        console.log(err);
      });
  }

  createTable() {
    return new Promise((resolve, reject) => {
      const sql =
        'CREATE TABLE IF NOT EXISTS ' +
        this.tablename +
        ' (id INTEGER,name TEXT,phone NUMBER,email TEXT,lat TEXT, lng TEXT)';
      this.databaseObj.executeSql(sql, []).then(
        data => {
          resolve(data);
          console.log('Table created Successfully');
        },
        error => {
          reject(error);
        }
      );
    });
  }

  addUser(userData) {
    return new Promise((resolve, reject) => {
      const sql =
        'INSERT INTO users (id,name,phone,email,lat,lng) VALUES (?, ?, ?, ?,?,?)';
      this.databaseObj
        .executeSql(sql, [
          userData.id,
          userData.name,
          userData.phone,
          userData.email,
          userData.lat,
          userData.lng
        ])
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
      const sqlToUpdate = `UPDATE users SET name=?, phone=?, email=?, lat=? , lng= ? WHERE id=?`;
      this.databaseObj
        .executeSql(sqlToUpdate, [
          userData.name,
          userData.phone,
          userData.email,
          userData.lat,
          userData.lng,
          userData.id
        ])
        .then(
          resp => {
            resolve(resp);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  /**
   * @param No Parameters Required
   * @description getUsers() will get all users from SQLite
   */
  getUsers() {
    return new Promise((resolve, reject) => {
      this.databaseObj.executeSql('SELECT * FROM users', []).then(
        data => {
          const users: Array<any> = [];
          for (let i = 0; i < data.rows.length; i++) {
            users.push(data.rows.item(i));
          }
          resolve(users);
        },
        error => {
          console.error('Error ::::\n', error);
          reject(error);
        }
      );
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      const sqlToDeleteCollection = `DELETE FROM users WHERE id=?`;
      this.databaseObj.executeSql(sqlToDeleteCollection, [id]).then(
        resp => {
          resolve(resp);
        },
        err => {
          reject(err);
        }
      );
    });
  }
}

