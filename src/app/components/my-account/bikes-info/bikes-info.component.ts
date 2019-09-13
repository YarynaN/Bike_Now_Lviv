import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface MyBikeBrakes {
  value: string;
  viewValue: string;
}

export interface MyBikeWheels {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bikes-info',
  templateUrl: './bikes-info.component.html',
  styleUrls: ['./bikes-info.component.scss']
})
export class BikesInfoComponent implements OnInit {

  brakes: MyBikeBrakes[] = [
    {value: 'V-brakes-0', viewValue: 'V-brakes'},
    {value: 'mechanical disc brakes-1', viewValue: 'Mechanical disc brakes'},
    {value: 'hydraulic disc brakes-2', viewValue: 'Hydraulic disc brakes'},
    {value: 'Others-2', viewValue: 'Others'}
  ];

  diameterWheels: MyBikeWheels[] = [
    {value: '26"-0', viewValue: '26"'},
    {value: '27,5"-1', viewValue: '27,5"'},
    {value: '29"-2', viewValue: '29"'}
  ];

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
      brakes: 'hydraulic disc brakes-2',
      diameter_wheels: '29"-2'
    }
  ];


  constructor(private router: Router) { }

  ngOnInit() {
  }

}
