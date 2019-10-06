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
    height: '165',
  };

  personalInfoData: PersonalInfo = this.dataUser;

  constructor(private personalInfoService: PersonalInfoService) { }

  ngOnInit() {
    let globalobj;
    this.personalInfoService.getUserItemById('').subscribe(obj => {
        globalobj = obj;
        console.log(globalobj);
        this.dataUser.name = this.checkundef(globalobj.name);
        this.dataUser.surname = this.checkundef(globalobj.surname);
        // this.dataUser.photo = this.checkundef(globalobj.photo);
        this.dataUser.email = this.checkundef(globalobj.email);
        this.dataUser.phone = this.checkundef(globalobj.phone);
        // this.dataUser.birthday = this.checkundef(globalobj.birthday);
        this.dataUser.height = this.checkundef(globalobj.phone);
      });
  }
  checkundef(value) {
    if (value === undefined) {
      return '';
    } else {
      return value;
    }
  }
  save(): void {
    this.personalInfoService.save(this.personalInfoData);
  }
}
