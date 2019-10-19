import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  usersData: AngularFireList<any>;
  private uid: string;

  private readonly userPath: string = '/usersData';

  constructor(private auth: AuthService, private db: AngularFireDatabase) {
    this.usersData = db.list(this.userPath);
    this.uid = this.auth.currentUser.uid;
  }

  updateUserItem(data: any) {
    return this.usersData.update(this.uid, { ...data });
  }

  getUserItem() {
    return this.db.object(`${this.userPath}/${this.uid}`).valueChanges();
  }
}