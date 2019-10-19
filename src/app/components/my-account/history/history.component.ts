import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { BikeInfoService } from '../../../services/bike-info.service';
import { PersonalInfoService } from '../../../services/personal-info.service';
import { BikeInfo } from '../../../models/bike-info.model';
import { brands } from '../bikes-info/bike/constantsBikeInfo';
import { sizes } from '../bikes-info/bike/constantsBikeInfo';
import { diameterWheels } from '../bikes-info/bike/constantsBikeInfo';
import { PersonalInfo } from '../../../models/personal-info.model';

import * as moment from 'moment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  orders: any[] = [];
  displayedColumns: string[] = ['position', 'bikeId', 'id', 'to', 'amount'];

  constructor(private paymentService: PaymentService, private bikeInfoService: BikeInfoService, private personalInfoService: PersonalInfoService) { }

  ngOnInit() {
    
    this.paymentService.getOrderList()
      .subscribe((data: any) => {
        this.orders = data.map(o => ({ id: o.payload.key, ...o.payload.val() }))
          .map(order => {
            order.from = moment(order.from).format('MM/DD/YYYY');
            order.to = moment(order.to).format('MM/DD/YYYY');
            order.amount /= 100;
            this.bikeInfoService.getBikeById(order.bikeId).subscribe((bike: BikeInfo) => {
              order['bike'] = {...bike, image: bike.images[0], images: []};

              this.personalInfoService.getUserById(bike.userId).subscribe((user: PersonalInfo) => {
                order['user'] = { ...user, photo: ''};
              })
            });
            return order;
          });
          console.log(this.orders)
      });
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
