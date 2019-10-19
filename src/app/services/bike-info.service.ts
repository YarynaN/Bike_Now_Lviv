import { Injectable } from '@angular/core';
import { BikeInfo } from '../models/bike-info.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class BikeInfoService {
  bikesData: AngularFireList<any>;

  private readonly bikePath: string = '/bikes';

  get userId(): string {
    return this.authService.currentUser.uid;
  }

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.bikesData = this.db.list(this.bikePath);
  }

  deleteBikeItem(id: string) {
    return this.bikesData.remove(id);
  }

  updateBikeItem(id: string, data: Partial<BikeInfo>) {
    return this.bikesData.update(id, data);
  }

  pushBikeItem(data: BikeInfo) {
    return this.bikesData.push({ userId: this.userId, ...data });
  }

  getBikesList() {
    return this.db.list(this.bikePath, ref => ref.orderByChild('userId')
      .equalTo(this.userId)).snapshotChanges();
  }

  getBikeById(id: string) {
    return this.db.object(`${this.bikePath}/${id}`).valueChanges();
  }
}
