import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  usersData: AngularFireList<any>;
  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.usersData = db.list('/usersData');
  }


  addUserItem(name: string, surname: string, photo: string, email: string, phone: string, birthday: string, height: string) {
    this.usersData.push({name, surname, photo, email, phone, birthday, height });
  }

  updateUserItem( key: string, name: string, surname: string, photo: string,
                  email: string, phone: string, birthday: string, height: string) {
    this.usersData.update(key, { name, surname, photo, email, phone, birthday, height });
  }

  getUserItemById(id: string) {
    const obj = this.db.object('/usersData/' + id).snapshotChanges().pipe(
      map(o => ({id: o.payload.key, ...o.payload.val()}))
    );
    return obj;
  }
}
