import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // usersData: Observable<unknown[]>;
  usersData: AngularFireList<any>;
  db: AngularFireDatabase;
  wheels: string[];

  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.wheels = ['26', '27.5', '29' ];
    // this.usersData = db.list('/users',  ref => ref.orderByChild('id')).valueChanges();
    this.usersData = db.list('/usersData');
  }

/*  getItems( ) {
    const users = [];
    /!*this.usersData.subscribe( valueOfItems => {
       users.push(valueOfItems);
    });*!/
    return users ;
  }*/

 /* getWheels() {
    return this.wheels;
  }*/


  addUserItem(name: string, surname: string, photo: string, email: string, phone: string, birthday: string, height: string) {
    this.usersData.push({name, surname, photo, email, phone, birthday, height });
    console.log('This was save to the Firebase Database', {name, surname, photo, email, phone, birthday, height});
  }

  updateUserItem( key: string, name: string, surname: string, photo: string,
                  email: string, phone: string, birthday: string, height: string) {

    this.usersData.update(key, { name, surname, photo, email, phone, birthday, height });
    // this.usersData.update({name, surname, photo, email, phone, birthday, height });
    console.log('This was save to the Firebase Database', {name, surname, photo, email, phone, birthday, height});
  }

  getUserItemById(id: string) {
    const obj = this.db.object('/usersData/' + id).snapshotChanges().pipe(
      map(o => ({id: o.payload.key, ...o.payload.val()}))
    );
    return obj;
    // return this.usersData ;
  }
}
