import { Injectable } from '@angular/core';
import { BikeInfo } from '../models/bike-info.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class BikeInfoService {
  bikesData: AngularFireList<any>;
  private userId: string;

  private readonly bikePath: string = '/bikes';

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.bikesData = this.db.list(this.bikePath);
    this.userId = this.authService.currentUser.uid;
  }

  deleteBikeItem(id: string) {
    this.bikesData.remove(id);
  }

  updateBikeItem(id: string, data: Partial<BikeInfo>) {
    this.bikesData.update(id, data);
  }

  pushBikeItem(data: BikeInfo) {
    this.bikesData.push({ userId: this.userId, ...data });
  }

  getBikesList() {
    return this.db.list(this.bikePath, ref => ref.orderByChild('userId')
      .equalTo(this.userId)).snapshotChanges();
  }
}
