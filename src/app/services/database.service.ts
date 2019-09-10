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
    return this.usersData
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes
            .map(item => ({id: item.payload.key, ...item.payload.val()}))
            .filter(item => (item.shortContent.includes(keyword) || item.title.includes(keyword))
              && (item.wheels === wheels || wheels === '')
            )
        )
      );
  }
  getWheels() {
    return this.wheels;
  }
}
