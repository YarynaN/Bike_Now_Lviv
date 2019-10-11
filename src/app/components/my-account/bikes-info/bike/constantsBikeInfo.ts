import {
  BrandsBikes,
  CategoriesBikes,
  SizesBikes,
  FrameBikes,
  BrakesBike,
  WheelsBikes
} from '../../../../models/bike-info.model';

export const brands: BrandsBikes[] = [
  { value: 'specialized-0', viewValue: 'Specialized' },
  { value: 'giant-1', viewValue: 'Giant' },
  { value: 'trek-2', viewValue: 'Trek' },
  { value: 'merida-3', viewValue: 'Merida' },
  { value: 'scott-4', viewValue: 'Scott' },
  { value: 'cube-5', viewValue: 'Cube' },
  { value: 'cannondale-6', viewValue: 'Cannondale' },
  { value: 'gt(Gary Turner)-7', viewValue: 'GT(Gary Turner)' },
  { value: 'ghost-8', viewValue: 'Ghost' },
  { value: 'norco-9', viewValue: 'Norco' },
  { value: 'author-10', viewValue: 'Author' },
  { value: 'bianchi-11', viewValue: 'Bianchi' },
  { value: 'schwinn-12', viewValue: 'Schwinn' },
  { value: 'bergamont-13', viewValue: 'Bergamont' },
  { value: 'pride-14', viewValue: 'Pride' },
  { value: 'orbea-15', viewValue: 'Orbea' },
  { value: 'kellys-16', viewValue: 'Kellys' },
  { value: 'spelli-17', viewValue: 'Spelli' },
  { value: 'comanche-18', viewValue: 'Comanche' },
  { value: 'ardis-19', viewValue: 'Ardis' },
  { value: 'others-20', viewValue: 'Others' }
];

export const categories: CategoriesBikes[] = [
  { value: 'mountainbike(MTB)-0', viewValue: 'Mountainbike(MTB)' },
  { value: 'road-1', viewValue: 'Road' },
  { value: 'urban-2', viewValue: 'Urban' },
  { value: 'women-3', viewValue: 'Women' }
];

export const sizes: SizesBikes[] = [
  { value: 'XS (14" - 15" height 135 - 160 cm)-0', viewValue: 'XS (14" - 15" height 135 - 160 cm)' },
  { value: 'S (16" - 17" height 161 - 172 cm)-1', viewValue: 'S (16" - 17" height 161 - 172 cm)' },
  { value: 'M (18" - 19" height 173 - 182 cm)-2', viewValue: 'M (18" - 19" height 173 - 182 cm)' },
  { value: 'L (20" - 21" height 183 - 192 cm)-3', viewValue: 'L (20" - 21" height 183 - 192 cm)' },
  { value: 'XL (22" - 23" height 193 - 200 cm)-4', viewValue: 'XL (22" - 23" height 193 - 200 cm)' },
  { value: 'XXL (24" height > 200 cm)-5', viewValue: 'XXL (24" height > 200 cm)' }
];

export const frames: FrameBikes[] = [
  { value: 'aluminium-0', viewValue: 'Aluminium' },
  { value: 'carbon-1', viewValue: 'Carbon' },
  { value: 'others-2', viewValue: 'Others' }
];

export const brakes: BrakesBike[] = [
  { value: 'V-brakes-0', viewValue: 'V-brakes' },
  { value: 'mechanical disc brakes-1', viewValue: 'Mechanical disc brakes' },
  { value: 'hydraulic disc brakes-2', viewValue: 'Hydraulic disc brakes' },
  { value: 'others-3', viewValue: 'Others' }
];

export const diameterWheels: WheelsBikes[] = [
  { value: '26"-0', viewValue: '26"' },
  { value: '27,5"-1', viewValue: '27,5"' },
  { value: '29"-2', viewValue: '29"' }
];
