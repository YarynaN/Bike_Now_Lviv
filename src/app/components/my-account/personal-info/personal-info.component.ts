import { Component, OnInit } from '@angular/core';
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
    birthday: '29/08/2009',
    height: '165 cm',
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
