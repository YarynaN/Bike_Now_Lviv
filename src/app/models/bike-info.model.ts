export interface BrandsBikes {
  value: string;
  viewValue: string;
}

export interface CategoriesBikes {
  value: string;
  viewValue: string;
} 

export interface SizesBikes {
  value: string;
  viewValue: string;
}

export interface FrameBikes {
  value: string;
  viewValue: string;
}

export interface BrakesBike {
  value: string;
  viewValue: string;
}

export interface WheelsBikes {
  value: string;
  viewValue: string;
}

export interface BikeInfo {
  id?: string;
  images?: string[];
  brand: string;
  model: string;
  categories: string;
  sizes: string;
  color: string;
  weight: string;
  frames: string;
  speeds: string;
  brakes: string;
  diameter_wheels: string;
  price_rent: string;
}