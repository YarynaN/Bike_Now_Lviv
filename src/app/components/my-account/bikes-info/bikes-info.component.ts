import { Component, OnInit } from '@angular/core';
import {
  BrandsBikes,
  CategoriesBikes,
  SizesBikes,
  FrameBikes,
  BrakesBike,
  WheelsBikes,
  BikeInfo
} from '../../../models/bike-info.model';
import { BikeInfoService } from '../../../services/bike-info.service';
import {PersonalInfo} from '../../../models/personal-info.model';

@Component({
  selector: 'app-bikes-info',
  templateUrl: './bikes-info.component.html',
  styleUrls: ['./bikes-info.component.scss']
})
export class BikesInfoComponent implements OnInit {

  brands: BrandsBikes [] = [
    {value: 'specialized-0', viewValue: 'Specialized'},
    {value: 'giant-1', viewValue: 'Giant'},
    {value: 'trek-2', viewValue: 'Trek'},
    {value: 'merida-3', viewValue: 'Merida'},
    {value: 'scott-4', viewValue: 'Scott'},
    {value: 'cube-5', viewValue: 'Cube'},
    {value: 'cannondale-6', viewValue: 'Cannondale'},
    {value: 'gt(Gary Turner)-7', viewValue: 'GT(Gary Turner)'},
    {value: 'ghost-8', viewValue: 'Ghost'},
    {value: 'norco-9', viewValue: 'Norco'},
    {value: 'author-10', viewValue: 'Author'},
    {value: 'bianchi-11', viewValue: 'Bianchi'},
    {value: 'schwinn-12', viewValue: 'Schwinn'},
    {value: 'bergamont-13', viewValue: 'Bergamont'},
    {value: 'pride-14', viewValue: 'Pride'},
    {value: 'orbea-15', viewValue: 'Orbea'},
    {value: 'kellys-16', viewValue: 'Kellys'},
    {value: 'spelli-17', viewValue: 'Spelli'},
    {value: 'comanche-18', viewValue: 'Comanche'},
    {value: 'ardis-19', viewValue: 'Ardis'},
    {value: 'others-20', viewValue: 'Others'}
  ];

  categories: CategoriesBikes [] = [
    {value: 'mountainbike(MTB)-0', viewValue: 'Mountainbike(MTB)'},
    {value: 'road-1', viewValue: 'Road'},
    {value: 'urban-2', viewValue: 'Urban'},
    {value: 'women-3', viewValue: 'Women'}
  ];

  sizes: SizesBikes[] = [
    {value: 'XS (14" - 15" height 135 - 160 cm)-0', viewValue: 'XS (14" - 15" height 135 - 160 cm)'},
    {value: 'S (16" - 17" height 161 - 172 cm)-1', viewValue: 'S (16" - 17" height 161 - 172 cm)'},
    {value: 'M (18" - 19" height 173 - 182 cm)-2', viewValue: 'M (18" - 19" height 173 - 182 cm)'},
    {value: 'L (20" - 21" height 183 - 192 cm)-3', viewValue: 'L (20" - 21" height 183 - 192 cm)'},
    {value: 'XL (22" - 23" height 193 - 200 cm)-4', viewValue: 'XL (22" - 23" height 193 - 200 cm)'},
    {value: 'XXL (24" height > 200 cm)-5', viewValue: 'XXL (24" height > 200 cm)'}
  ];

  frames: FrameBikes[] = [
    {value: 'aluminium-0', viewValue: 'Aluminium'},
    {value: 'carbon-1', viewValue: 'Carbon'},
    {value: 'others-2', viewValue: 'Others'}
  ];

  brakes: BrakesBike[] = [
    {value: 'V-brakes-0', viewValue: 'V-brakes'},
    {value: 'mechanical disc brakes-1', viewValue: 'Mechanical disc brakes'},
    {value: 'hydraulic disc brakes-2', viewValue: 'Hydraulic disc brakes'},
    {value: 'others-3', viewValue: 'Others'}
  ];

  diameterWheels: WheelsBikes[] = [
    {value: '26"-0', viewValue: '26"'},
    {value: '27,5"-1', viewValue: '27,5"'},
    {value: '29"-2', viewValue: '29"'}
  ];

  myBike = [
    {
      model: '', // 'Access WLS Race4',
      brand: '', // 'cube-5',
      categories: '', // 'mountainbike(MTB)-0',
      sizes: '', // 'S (16" - 17" height 161 - 172 cm)-1',
      color: '', // 'black-blue-green',
      weight: '', // '14 kg',
      frames: '', // 'aluminium-0',
      speeds: '', // '30',
      brakes: '', // 'hydraulic disc brakes-2',
      diameter_wheels: ''  // '29"-2'
    }
  ];

  bikeData: BikeInfo;
  // @ts-ignore
  myBikeData: BikeInfo = this.myBike;
  constructor(private bikeInfoService: BikeInfoService) { }

  ngOnInit() {
    let globalobj;
    this.bikeInfoService.getBikesById('-Lpe1hGGZwajq_mIVkoW', '-Lpjeh--zTtzmZw91310').subscribe(obj => {
        // console.log(obj);
        globalobj = obj;
        this.myBikeData[0].model = globalobj.bike_model;
        this.myBikeData[0].brand = globalobj.bike_brand;
        this.myBikeData[0].categories = globalobj.bike_categorie;
        this.myBikeData[0].sizes = globalobj.bike_size;
        this.myBikeData[0].color = globalobj.bike_color;
        this.myBikeData[0].weight = globalobj.bike_weight;
        this.myBikeData[0].frames = globalobj.bike_frame;
        this.myBikeData[0].speeds = globalobj.bike_speeds;
        this.myBikeData[0].brakes = globalobj.bike_brakes;
        this.myBikeData[0].diameter_wheels = globalobj.bike_Wheels;

    });
  }

  save(): void {
        this.updateUserBikeItem( this.myBike );
    //  this.pushUserBikeItem( this.myBike );
    // console.log(this.myBike[0].brand)
    // console.log('function Save bike data');
    // this.bikeInfoService.save(this.bikeData);
  }
  updateUserBikeItem(value: any) {
    // this will update user by it`s ID
    // tslint:disable-next-line:max-line-length
      this.bikeInfoService.updateUserBikeItem('-Lpe1hGGZwajq_mIVkoW', value[0].model, value[0].brand, value[0].categories, value[0].sizes,
        value[0].color, value[0].weight, value[0].frames, value[0].speeds, value[0].brakes, value[0].diameter_wheels);
  }

  pushUserBikeItem(value: any) {
    // this will update user by it`s ID
    // tslint:disable-next-line:max-line-length
    this.bikeInfoService.pushUserBikeItem('-Lpe1hGGZwajq_mIVkoW', value[0].model, value[0].brand, value[0].categories, value[0].sizes,
      value[0].color, value[0].weight, value[0].frames, value[0].speeds, value[0].brakes, value[0].diameter_wheels);
  }

}
