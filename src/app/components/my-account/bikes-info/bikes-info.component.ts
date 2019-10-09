import { Component, OnInit } from '@angular/core';
import { BikeInfo } from '../../../models/bike-info.model';
import { brands } from './bike/constantsBikeInfo';
import { BikeInfoService } from '../../../services/bike-info.service';

@Component({
  selector: 'app-bikes-info',
  templateUrl: './bikes-info.component.html',
  styleUrls: ['./bikes-info.component.scss']
})
export class BikesInfoComponent implements OnInit {
  activeBike = 0;

  bikes: BikeInfo[] = [];

  constructor(private bikeInfoService: BikeInfoService) { }

  ngOnInit() {
    this.bikeInfoService.getBikesList()
      .subscribe((data: any) => {
        this.bikes = data.map(o => ({ id: o.payload.key, ...o.payload.val() }));
      });
  }

  getTitleBike(bike) {
    const brand = brands.find(item => item.value === bike.brand);
    const brandValue = brand ? brand.viewValue : '';
    const model = bike.model || '';
    return `${brandValue} ${model}`;
  }

  addBikePanel() {
    this.bikes.push({
      id: '',
      brakes: '',
      brand: '',
      categories: '',
      color: '',
      diameter_wheels: '',
      frames: '',
      model: '',
      sizes: '',
      speeds: '',
      weight: '',
      price_rent: ''
    });
    this.setActiveBike(this.bikes.length - 1);
  }

  setActiveBike(index: number) {
    this.activeBike = index;
  }
}