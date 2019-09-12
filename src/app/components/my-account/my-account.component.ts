import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  dataUser = {
    name: 'Natalja',
    surname: 'Kuziv',
    photo: 'https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_1280.png',
    email: 'lucky@gmail.com',
    phone: '+380359874638',
    birthday: '29/08/2009',
    height: '165 cm',
    myDate_button: 'MY DATA',
    myBike_button: 'MY BIKE',
    goBack_button: 'go back'
  };

  myBike = [
    {
      brand: 'CUBE',
      model: 'Access WLS Race',
      category: 'Mountain bikes',
      size: '17" S (S - height 160 - 168 cm)',
      color: 'black-blue-green',
      weight: '14 kg',
      frame: 'aluminium',
      speeds: '30',
      brakes: 'disk hydraulic',
      wheels_diameter: '29"'
    }
  ];

  constructor(
    private location: Location,
    private router: Router
  ) { }

  

  ngOnInit() {
  }

  secondaryNav(path) {
    this.router.navigate([{ outlets: {
      sidebar: [path]
    }}]);
  }

}

// @Component({
//   selector: 'divider-overview-example',
//   templateUrl: 'divider-overview-example.html',
//   styleUrls: ['divider-overview-example.css'],
// })
// export class DividerOverviewExample {}
