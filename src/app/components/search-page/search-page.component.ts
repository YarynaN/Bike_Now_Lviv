import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service'
import { BikeInfo } from '../../models/bike-info.model';
import { brands } from '../my-account/bikes-info/bike/constantsBikeInfo';
import { sizes } from '../my-account/bikes-info/bike/constantsBikeInfo';
import { diameterWheels } from '../my-account/bikes-info/bike/constantsBikeInfo';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  searchConfig = {
    ...environment.algolia,
    indexName: 'qwe'
  }

  showResults = false;
  apiPath: any = environment.apiPath;

  constructor(private authService: AuthService) { }

  searchChanged(query) {
    if (query.length) {
      this.showResults = true;
    } else {
      this.showResults = false;
    }
  }

  getPropertiesBike(bike: BikeInfo) {
    const brand = brands.find(item => item.value === bike.brand);
    const size = sizes.find(item => item.value === bike.sizes);
    const wheel = diameterWheels.find(item => item.value === bike.diameter_wheels);
    
    return {
      brand: brand ? brand.viewValue : '',
      color: bike.color || '',
      size: size ? size.viewValue : '',
      model: bike.model || '',
      wheel: wheel ? wheel.viewValue : ''
    }
  }
}

