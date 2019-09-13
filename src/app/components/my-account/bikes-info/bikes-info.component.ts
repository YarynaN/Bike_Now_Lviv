import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bikes-info',
  templateUrl: './bikes-info.component.html',
  styleUrls: ['./bikes-info.component.scss']
})
export class BikesInfoComponent implements OnInit {

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


  constructor(private router: Router) { }

  ngOnInit() {
  }

}
