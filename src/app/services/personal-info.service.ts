import { Injectable } from '@angular/core';
import { PersonalInfo } from '../models/personal-info.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor() { }

  save(data: PersonalInfo): boolean {
    
    // Save personal info data
    console.log('Data saved: ', data);
    return true;
  }
}
