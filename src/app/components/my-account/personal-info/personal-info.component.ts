import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PersonalInfoService } from '../../../services/personal-info.service';
import { PersonalInfo } from '../../../models/personal-info.model';

import { DatabaseService  } from '../../../services/database.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  // temp mockup personal info data
  dataUser: PersonalInfo = {
    name: /*'Natalja' */  '',
    surname: /*'Kuziv' */   '',
    // tslint:disable-next-line:max-line-length
    photo: /*'../../../../assets/my-account-photo.jpg' */  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnNhalc0B4hHMtUpNALqOy076bOJWeyvqZ3XcrRy_ObroMOGBAg'  ,
    email: /*'lucky@gmail.com' */   '',
    phone: /*'+380359874638' */  '',
    birthday: /*new FormControl(new Date('08/29/2001'))*/ '',
    height: /*'165 cm'*/ '' ,
  };

  personalInfoData: PersonalInfo = this.dataUser;

  constructor(private personalInfoService: PersonalInfoService, private dbService: DatabaseService, private route: ActivatedRoute ) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let globalobj;
    this.dbService.getUserItemById('-Lpe1hGGZwajq_mIVkoW').subscribe(obj => {
       console.log(obj);
       globalobj = obj;
       this.personalInfoData.name = globalobj.name;
       this.personalInfoData.surname = globalobj.surname,
         // tslint:disable-next-line:max-line-length
       this.personalInfoData.photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnNhalc0B4hHMtUpNALqOy076bOJWeyvqZ3XcrRy_ObroMOGBAg'  ,
       this.personalInfoData.email = globalobj.email,
       this.personalInfoData.phone = globalobj.phone,
       this.personalInfoData.birthday = globalobj.birthday,
       this.personalInfoData.height =  globalobj.height;
    });

  }

  save(): void {
    // console.log(this.personalInfoData.surname)
    // name, surname, photo, email, phone, birthday, height
    this.personalInfoService.save(this.personalInfoData);
    this.addUserItem(this.personalInfoData);
  }


  updateUserItem(value: any) {
    // this will update user by it`s ID
    // tslint:disable-next-line:max-line-length
    this.dbService.updateUserItem('-Lpe1hGGZwajq_mIVkoW', value.name , value.surname, value.photo, value.email, value.phone, value.birthday, value.height);
  }

  addUserItem(value: any) {
    const key = '-Lpe1hGGZwajq_mIVkoW';
    // @ts-ignore
    if (key !== '') {
      // tslint:disable-next-line:max-line-length
    this.dbService.updateUserItem(key, value.name , value.surname, value.photo, value.email, value.phone, value.birthday, value.height);
      // tslint:disable-next-line:align
    } else {// NEW user wil be created
      this.dbService.addUserItem(value.name, value.surname, value.photo, value.email, value.phone, value.birthday, value.height);
    }
    // this.router.navigate(['/']);
  }



}
