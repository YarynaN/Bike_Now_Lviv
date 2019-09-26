import { Injectable } from '@angular/core';
import { BikeInfo } from '../models/bike-info.model';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class BikeInfoService {
  bikesData: AngularFireList<any>;
  db: AngularFireDatabase;
  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.bikesData = db.list('/usersData');
  }


  updateUserBikeItem( key: string,  model: string  , brand: string , categories: string , sizes: string ,
                      color: string , weight: string , frames: string , speeds: string , brakes: string , diameterWheels: string ) {
    const bike = {
      bike_brand: brand,
      bike_categorie: categories,
      bike_size  : sizes,
      bike_color : color,
      bike_weight : weight,
      bike_frame : frames,
      bike_speeds : speeds,
      bike_brakes : brakes,
      bike_Wheels : diameterWheels
    };
    // const dynamicProperty = model;
    const newBikeKey = firebase.database().ref().child('/bikes').push().key;
    const dynamicProperty = newBikeKey;
    this.bikesData.update(key, { bikes : {   [dynamicProperty] : bike    }});
    // console.log('This was saved to the Firebase Database', {model });
  }
  pushUserBikeItem( key: string,  model: string  , brand: string , categories: string , sizes: string ,
                    color: string , weight: string , frames: string , speeds: string , brakes: string , diameterWheels: string ) {
    // Get a key for a new Bike.
    // tslint:disable-next-line:prefer-const
    const newBikeKey = firebase.database().ref().child('/bikes').push().key;
    const dynamicProperty = newBikeKey;
    const bike = {
      bike_model: model,
      bike_brand: brand,
      bike_categorie: categories,
      bike_size  : sizes,
      bike_color : color,
      bike_weight : weight,
      bike_frame : frames,
      bike_speeds : speeds,
      bike_brakes : brakes,
      bike_Wheels : diameterWheels
    };
    // const dynamicProperty = model;

    this.bikesData.update(key, { bikes : {   [dynamicProperty] : bike    }});
    // console.log('This was saved to the Firebase Database', {model });
  }

  getBikesById(idUser: string, idBike) {
    const obj = this.db.object('/usersData/' + idUser + '/bikes/' + idBike + '/').snapshotChanges().pipe(
      map(o => ({id: o.payload.key, ...o.payload.val()}))
    );
    return obj;
  }

  save(data: BikeInfo): boolean {
    // Save bike info data
    // console.log('Data saved: ', data);
    return true;
  }
}
