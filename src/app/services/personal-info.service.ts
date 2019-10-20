import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  usersData: AngularFireList<any>;

  private readonly userPath: string = '/usersData';

  get uid(): string {
    return this.auth.currentUser.uid;
  }

  constructor(private auth: AuthService, private db: AngularFireDatabase) {
    this.usersData = db.list(this.userPath);
  }

  updateUserItem(data: any) {
    return this.usersData.update(this.uid, { ...data });
  }

  getUserItem() {
    this.uid = this.auth.currentUser.uid;
    return this.getUserById(this.uid);
  }

  getUserById(id: string) {
    return this.db.object(`${this.userPath}/${id}`).valueChanges();
  }
}
