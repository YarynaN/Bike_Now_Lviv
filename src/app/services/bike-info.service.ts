import { Injectable } from '@angular/core';
import { BikeInfo } from '../models/bike-info.model';

@Injectable({
  providedIn: 'root'
})
export class BikeInfoService {

  constructor() { }

  save(data: BikeInfo): boolean {
    
    // Save bike info data
    console.log('Data saved: ', data);
    return true;
  }
}
