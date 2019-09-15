import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PersonalInfoService } from '../../../services/personal-info.service';
import { PersonalInfo } from '../../../models/personal-info.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  // temp mockup personal info data
  dataUser: PersonalInfo = {
    name: 'Natalja',
    surname: 'Kuziv',
    photo: '../../../../assets/my-account-photo.jpg',
    email: 'lucky@gmail.com',
    phone: '+380359874638',
    birthday: new FormControl(new Date('08/29/2001')),
    height: '165 cm',
  };

  personalInfoData: PersonalInfo = this.dataUser;

  constructor(private personalInfoService: PersonalInfoService) { }

  ngOnInit() {}

  save(): void {
    this.personalInfoService.save(this.personalInfoData);
  }
}
