import { Injectable } from '@angular/core';
import { BikeInfo } from '../models/bike-info.model';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BikeInfoService {
  bikesData: AngularFireList<any>;
  db: AngularFireDatabase;
  constructor(db: AngularFireDatabase ) {
    this.db = db;
    this.bikesData = db.list('/usersData');
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
    key = bikeId + '/bikes/';
    this.bikesData.update(key, { [bikeId] : bike});
  }
  pushUserBikeItem( key: string,  model: string  , brand: string , categories: string , sizes: string ,
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
    const newBikeKey = firebase.database().ref().child('/bikes/').push().key;
    const dynamicProperty = newBikeKey;
    key = key + '/bikes/' + dynamicProperty + '/' ;
    this.bikesData.update(key, { [dynamicProperty] : bike});
  }

  getBikesById(idUser: string, idBike: string) {
    const obj = this.db.object('/usersData/' + idUser + '/bikes/' + idBike + '/'  ).snapshotChanges().pipe(
      map(o => ({id: o.payload.key, ...o.payload.val()}))
    );
    return obj;
  }

}
