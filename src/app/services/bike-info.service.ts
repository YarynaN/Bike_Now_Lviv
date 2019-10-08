import { Injectable } from '@angular/core';
import { BikeInfo } from '../models/bike-info.model';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class BikeInfoService {
  bikesData: AngularFireList<any>;
  db: AngularFireDatabase;
  private userId;
  constructor(db: AngularFireDatabase, private authService: AuthService ) {
    this.db = db;
    this.bikesData = db.list('/usersData');
    this.userId = this.authService.currentUser.uid;
    console.log(this.authService.currentUser.uid); // THIS is ID
  }
  updateUserBikeItem( userId: string, bikeId: string,  model: string  , brand: string , categories: string , sizes: string ,
                      color: string , weight: string , frames: string , speeds: string , brakes: string , diameterWheels: string ) {
    const bike = {
      bike_model: model,
      bike_brand: brand,
      bike_category: categories,
      bike_size  : sizes,
      bike_color : color,
      bike_weight : weight,
      bike_frame : frames,
      bike_speeds : speeds,
      bike_brakes : brakes,
      bike_Wheels : diameterWheels
    };
    let key;
    // key = bikeId + '/bikes/';
    const authorizeduserId = this.userId;
    if (bikeId === undefined) {bikeId = authorizeduserId; }
    key = authorizeduserId + '/bikes/';
    this.bikesData.update(key, { [bikeId] : bike});
  }
  pushUserBikeItem( key: string,  model: string  , brand: string , categories: string , sizes: string ,
                    color: string , weight: string , frames: string , speeds: string , brakes: string , diameterWheels: string ) {
    const bike = {
      bike_model: checkundef(model),
      bike_brand: checkundef(brand),
      bike_category: checkundef(categories),
      bike_size  : checkundef(sizes),
      bike_color : checkundef(color),
      bike_weight : checkundef(weight),
      bike_frame : checkundef(frames),
      bike_speeds : checkundef(speeds),
      bike_brakes : checkundef(brakes),
      bike_Wheels : checkundef(diameterWheels)
    };

    function checkundef(value: any) {
      if (value === undefined) {
        return '';
      } else {
        return value;
      }
    }

    const newBikeKey = firebase.database().ref().child('/bikes/').push().key;
    const dynamicProperty = newBikeKey;
    const authorizeduserId = this.userId;
    key = authorizeduserId + '/bikes/' + dynamicProperty + '/' ;
    this.bikesData.update(key, { [dynamicProperty] : bike});
    return newBikeKey;
  }

  getBikesById(idUser: string, idBike: string) {
    const authorizeduserId = this.userId;
    if (idUser === '') {idUser = authorizeduserId; }
    if (idBike === '') {idBike = authorizeduserId; }
    const obj = this.db.object('/usersData/' + idUser + '/bikes/' + idBike + '/'  ).snapshotChanges().pipe(
      map(o => ({id: o.payload.key, ...o.payload.val()}))
    );
    return obj;
  }

  save(data: BikeInfo): boolean {

    // Save bike info data
    console.log('Data saved: ', data);
    return true;
  }
}