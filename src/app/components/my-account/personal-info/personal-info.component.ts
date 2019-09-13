import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  dataUser = {
    name: 'Natalja',
    surname: 'Kuziv',
    photo: '../../../../assets/my-account-photo.jpg',
    email: 'lucky@gmail.com',
    phone: '+380359874638',
    birthday: new FormControl(new Date('08/29/2001')),
    height: '165 cm',
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
