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
  private wheels: string[];


  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.usersData = db.list('/usersData');
    this.wheels = ['26', '27.5', '29' ];
  }

  getItems(wheels: string = '', keyword: string = ''): Observable<any[]> {
    // @ts-ignore
    return this.usersData;
  }
  getWheels() {
    return this.wheels;
  }
}
