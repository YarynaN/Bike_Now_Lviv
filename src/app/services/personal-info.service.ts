import { Injectable } from '@angular/core';
import { PersonalInfo } from '../models/personal-info.model';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})

export class PersonalInfoService {
  usersData: AngularFireList<any>;
  db: AngularFireDatabase;
  private userId;
  constructor(db: AngularFireDatabase, private authService: AuthService ) {
    this.db = db;
    this.usersData = db.list('/usersData');
    this.userId = this.authService.currentUser.uid;
    console.log(this.authService.currentUser.uid);
  }

  addUserItem(name: string, surname: string, photo: string, email: string, phone: string, birthday: string, height: string) {
    // this.usersData.push({name, surname, photo, email, phone, birthday, height });
    this.usersData.update(this.userId, { name, surname, photo, email, phone, birthday, height });
  }

  updateUserItem( key: string, name: string, surname: string, photo: string,
                  email: string, phone: string, birthday: string, height: string) {
    // this.usersData.update(key, { name, surname, photo, email, phone, birthday, height });
    this.usersData.update(this.userId, { name, surname, photo, email, phone, birthday, height });
  }

  getUserItemById(id: string) {
    const obj = this.db.object('/usersData/' + this.userId).snapshotChanges().pipe(
      map(o => ({id: o.payload.key, ...o.payload.val()}))
    );
    return obj;
  }
  save(data: PersonalInfo): boolean {

    // Save personal info data
    console.log('Data saved: ', data);
    this.updateUserItem('', checkundef(data.name), checkundef(data.surname), checkundef(''), checkundef(data.email),
      checkundef(data.phone), checkundef(''), checkundef(data.height));

    function checkundef(value: any) {
      if (value === undefined) {
        return value = 'value was not provided';
      } else {
        return value;
      }
    }

    return true;
  }
}
